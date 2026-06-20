// lib/billing/gst.js
// ─────────────────────────────────────────────────────────────
// Pure GST / invoice math for the Billing Suite. Shared by the
// invoice builder and any PDF / report code so figures never
// diverge. Indian GST rules: intra-state supply splits into
// CGST + SGST (half each); inter-state supply uses a single IGST.
// ─────────────────────────────────────────────────────────────

export const GST_RATES = [0, 5, 12, 18, 28];

// Indian states & UTs with GST state codes — used to decide
// intra- vs inter-state supply from the "place of supply".
export const STATES = [
  ['37', 'Andhra Pradesh'], ['12', 'Arunachal Pradesh'], ['18', 'Assam'],
  ['10', 'Bihar'], ['22', 'Chhattisgarh'], ['30', 'Goa'], ['24', 'Gujarat'],
  ['06', 'Haryana'], ['02', 'Himachal Pradesh'], ['20', 'Jharkhand'],
  ['29', 'Karnataka'], ['32', 'Kerala'], ['23', 'Madhya Pradesh'],
  ['27', 'Maharashtra'], ['14', 'Manipur'], ['17', 'Meghalaya'], ['15', 'Mizoram'],
  ['13', 'Nagaland'], ['21', 'Odisha'], ['03', 'Punjab'], ['08', 'Rajasthan'],
  ['11', 'Sikkim'], ['33', 'Tamil Nadu'], ['36', 'Telangana'], ['16', 'Tripura'],
  ['09', 'Uttar Pradesh'], ['05', 'Uttarakhand'], ['19', 'West Bengal'],
  ['35', 'Andaman and Nicobar Islands'], ['04', 'Chandigarh'],
  ['26', 'Dadra and Nagar Haveli and Daman and Diu'], ['07', 'Delhi'],
  ['01', 'Jammu and Kashmir'], ['38', 'Ladakh'], ['31', 'Lakshadweep'],
  ['34', 'Puducherry'],
];

// Round to 2 decimals without binary float drift.
export function round2(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

// Compute a single line item's taxable value + tax split.
export function computeLine(item, interState) {
  const qty   = Number(item.qty) || 0;
  const rate  = Number(item.rate) || 0;
  const gross  = qty * rate;
  const discP  = Number(item.discountPercent) || 0;
  const discount = round2(gross * discP / 100);
  const taxable  = round2(gross - discount);
  const gstRate  = Number(item.gstRate) || 0;
  const taxTotal = round2(taxable * gstRate / 100);

  const cgst = interState ? 0 : round2(taxTotal / 2);
  const sgst = interState ? 0 : round2(taxTotal - cgst);
  const igst = interState ? taxTotal : 0;

  return {
    gross: round2(gross), discount, taxable, gstRate,
    cgst, sgst, igst,
    total: round2(taxable + cgst + sgst + igst),
  };
}

// Roll up all line items into invoice totals.
export function computeInvoice(items, { interState = false, extraDiscount = 0, roundOff = true } = {}) {
  let subtotal = 0, lineDiscount = 0, taxable = 0, cgst = 0, sgst = 0, igst = 0;

  const lines = items.map((item) => {
    const c = computeLine(item, interState);
    subtotal     += c.gross;
    lineDiscount += c.discount;
    taxable      += c.taxable;
    cgst += c.cgst; sgst += c.sgst; igst += c.igst;
    return { ...item, computed: c };
  });

  const extra      = round2(Number(extraDiscount) || 0);
  const taxableNet = round2(taxable - extra);
  const totalTax   = round2(cgst + sgst + igst);
  const preRound   = round2(taxableNet + totalTax);
  const rounded    = roundOff ? Math.round(preRound) : preRound;
  const roundOffAmt = round2(rounded - preRound);

  return {
    lines,
    subtotal: round2(subtotal),
    lineDiscount: round2(lineDiscount),
    extraDiscount: extra,
    taxable: taxableNet,
    cgst: round2(cgst), sgst: round2(sgst), igst: round2(igst),
    totalTax,
    roundOff: roundOffAmt,
    total: round2(rounded),
  };
}

// ── Formatting ───────────────────────────────────────────────

export function inr(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2,
  }).format(Number(n) || 0);
}

// Amount in Indian-English words (for the invoice footer).
export function amountInWords(num) {
  num = Math.round(Number(num) || 0);
  if (num === 0) return 'Zero Rupees Only';

  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const two = (n) => n < 20 ? ones[n] : `${tens[Math.floor(n / 10)]}${n % 10 ? ' ' + ones[n % 10] : ''}`;
  const three = (n) => {
    const h = Math.floor(n / 100), r = n % 100;
    return `${h ? ones[h] + ' Hundred' + (r ? ' ' : '') : ''}${r ? two(r) : ''}`;
  };

  let words = '';
  const crore = Math.floor(num / 10000000); num %= 10000000;
  const lakh  = Math.floor(num / 100000);   num %= 100000;
  const thou  = Math.floor(num / 1000);     num %= 1000;
  const hund  = num;

  if (crore) words += three(crore) + ' Crore ';
  if (lakh)  words += two(lakh)   + ' Lakh ';
  if (thou)  words += two(thou)   + ' Thousand ';
  if (hund)  words += three(hund);

  return words.trim() + ' Rupees Only';
}

// ── Invoice numbering (fiscal-year aware) ────────────────────

// Indian FY runs Apr–Mar. Returns e.g. "2025-26".
export function fiscalYear(date = new Date()) {
  const y = date.getFullYear();
  const startYear = date.getMonth() >= 3 ? y : y - 1; // month 3 = April
  return `${startYear}-${String((startYear + 1) % 100).padStart(2, '0')}`;
}

export function nextInvoiceNumber(prefix = 'INV', counter = 1, date = new Date()) {
  return `${prefix}/${fiscalYear(date)}/${String(counter).padStart(3, '0')}`;
}

export function stateName(code) {
  const found = STATES.find(([c]) => c === code);
  return found ? found[1] : '';
}
