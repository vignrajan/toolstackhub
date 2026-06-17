// ════════════════════════════════════════════════════════════════
// data/gst-state-pages.js
// Programmatic "GST Calculator for [State]" pages
// GST rates are uniform nationwide; the state angle is the GST state
// code, SGST credit destination, and intra/inter-state context.
// ════════════════════════════════════════════════════════════════

const STATES = [
  { name: 'Maharashtra',     slug: 'maharashtra',     code: '27', capital: 'Mumbai' },
  { name: 'Karnataka',       slug: 'karnataka',       code: '29', capital: 'Bengaluru' },
  { name: 'Tamil Nadu',      slug: 'tamil-nadu',      code: '33', capital: 'Chennai' },
  { name: 'Gujarat',         slug: 'gujarat',         code: '24', capital: 'Gandhinagar' },
  { name: 'Delhi',           slug: 'delhi',           code: '07', capital: 'New Delhi' },
  { name: 'Uttar Pradesh',   slug: 'uttar-pradesh',   code: '09', capital: 'Lucknow' },
  { name: 'West Bengal',     slug: 'west-bengal',     code: '19', capital: 'Kolkata' },
  { name: 'Telangana',       slug: 'telangana',       code: '36', capital: 'Hyderabad' },
  { name: 'Andhra Pradesh',  slug: 'andhra-pradesh',  code: '37', capital: 'Amaravati' },
  { name: 'Rajasthan',       slug: 'rajasthan',       code: '08', capital: 'Jaipur' },
  { name: 'Kerala',          slug: 'kerala',          code: '32', capital: 'Thiruvananthapuram' },
  { name: 'Madhya Pradesh',  slug: 'madhya-pradesh',  code: '23', capital: 'Bhopal' },
  { name: 'Haryana',         slug: 'haryana',         code: '06', capital: 'Chandigarh' },
  { name: 'Punjab',          slug: 'punjab',          code: '03', capital: 'Chandigarh' },
  { name: 'Bihar',           slug: 'bihar',           code: '10', capital: 'Patna' },
  { name: 'Odisha',          slug: 'odisha',          code: '21', capital: 'Bhubaneswar' },
  { name: 'Jharkhand',       slug: 'jharkhand',       code: '20', capital: 'Ranchi' },
  { name: 'Chhattisgarh',    slug: 'chhattisgarh',    code: '22', capital: 'Raipur' },
  { name: 'Assam',           slug: 'assam',           code: '18', capital: 'Dispur' },
  { name: 'Uttarakhand',     slug: 'uttarakhand',     code: '05', capital: 'Dehradun' },
  { name: 'Himachal Pradesh',slug: 'himachal-pradesh',code: '02', capital: 'Shimla' },
  { name: 'Goa',             slug: 'goa',             code: '30', capital: 'Panaji' },
  { name: 'Jammu & Kashmir', slug: 'jammu-and-kashmir', code: '01', capital: 'Srinagar/Jammu' },
  { name: 'Chandigarh',      slug: 'chandigarh',      code: '04', capital: 'Chandigarh' },
  { name: 'Puducherry',      slug: 'puducherry',      code: '34', capital: 'Puducherry' },
];

function buildGstPage(s) {
  const slug = `gst-calculator-${s.slug}`;
  return {
    slug,
    state:   s.name,
    code:    s.code,
    capital: s.capital,
    notes:   `GST rates are uniform across India, but for an intra-state sale within ${s.name} the tax splits into CGST + SGST, while sales to other states are charged as IGST. ${s.name} carries GST state code ${s.code} — the first two digits of every GSTIN registered in the state (capital: ${s.capital}). A business in ${s.name} must register for GST once turnover crosses the prescribed threshold.`,
    prefill: { txnType: 'intra', rate: 18 },
    h1:      `GST Calculator for ${s.name}`,
    title:   `GST Calculator for ${s.name} – Free Online GST Tool 2026`,
    metaDesc:`Free GST calculator for ${s.name} businesses. Add or remove GST, split CGST + SGST for intra-state sales within ${s.name} (state code ${s.code}). All GST rates. No signup.`,
    intro:   `Calculate GST for any sale, purchase, or invoice in ${s.name} instantly. For a sale within ${s.name} (intra-state), the GST splits equally into CGST (central) and SGST (${s.name} state) — for example, 18% GST becomes 9% CGST + 9% SGST. For sales to another state (inter-state), the full rate is charged as IGST. The calculator below is set to intra-state ${s.name} — switch to inter-state for IGST.`,
    facts: [
      `${s.name} GST state code is ${s.code} — the first two digits of every GSTIN registered in ${s.name}.`,
      `Intra-state sale in ${s.name}: GST splits into CGST + SGST (e.g. 18% = 9% + 9%). SGST is credited to the ${s.name} government.`,
      `Inter-state sale from ${s.name}: full rate charged as IGST, collected by the central government and apportioned to the destination state.`,
      `Common GST slabs: 0%, 5%, 12%, 18%, and 28%. Most goods and services fall under 18%.`,
      `A ${s.name} business must register for GST once turnover crosses ₹40 lakh for goods (₹20 lakh for services in most states).`,
    ],
    tips: [
      `Always confirm the buyer's state from their GSTIN — code ${s.code} means the buyer is in ${s.name} (use CGST + SGST); any other code means inter-state (use IGST).`,
      `Charging CGST + SGST instead of IGST (or vice versa) is a common filing error — it affects which government gets the tax and your buyer's input credit.`,
      `Keep HSN/SAC codes on every ${s.name} invoice — they determine the correct GST rate.`,
      `Input Tax Credit (ITC) can offset the GST you collect against the GST you paid on purchases.`,
    ],
    faqs: [
      { q: `What is the GST state code for ${s.name}?`, a: `The GST state code for ${s.name} is ${s.code}. It appears as the first two digits of every GSTIN registered in ${s.name}.` },
      { q: `How is GST calculated for a sale within ${s.name}?`, a: `For an intra-state sale within ${s.name}, GST is split equally into CGST and SGST. For example, on a ₹10,000 sale at 18% GST: CGST = ₹900 (9%) and SGST = ₹900 (9%), total ₹1,800 GST. The SGST portion goes to the ${s.name} government.` },
      { q: `When do I charge IGST instead of CGST + SGST in ${s.name}?`, a: `Charge IGST when the buyer is located in a different state. If you are in ${s.name} and sell to a buyer in ${s.name}, charge CGST + SGST. If you sell to a buyer in any other state, charge IGST at the full rate.` },
      { q: `Are GST rates different in ${s.name}?`, a: `No. GST rates are uniform across India — 0%, 5%, 12%, 18%, and 28%. What changes by state is only how an intra-state tax is split (CGST + SGST) and the GST state code (${s.code} for ${s.name}).` },
    ],
    related: STATES.filter(x => x.slug !== s.slug).slice(0, 4).map(x => `gst-calculator-${x.slug}`),
  };
}

export const gstStatePages = STATES.map(buildGstPage);

export function getGstStatePageBySlug(slug) {
  return gstStatePages.find(p => p.slug === slug);
}
export function getAllGstStateSlugs() {
  return gstStatePages.map(p => p.slug);
}
