// lib/billing/reports.js
// ─────────────────────────────────────────────────────────────
// Pure aggregation for the POS Z-report / day-end sales summary.
// Takes settled orders and rolls them up into the numbers an owner
// reconciles cash against at close: sales, tax collected, payment
// split, order-type split, and top sellers.
// ─────────────────────────────────────────────────────────────

import { round2 } from './gst';

// Local YYYY-MM-DD for a date (avoids UTC off-by-one at day boundaries).
export function localDay(d) {
  const dt = new Date(d);
  const off = dt.getTimezoneOffset();
  return new Date(dt.getTime() - off * 60000).toISOString().slice(0, 10);
}

// orders: settled posOrders. range: { from, to } as 'YYYY-MM-DD' (inclusive).
export function summarizeOrders(orders, { from, to } = {}) {
  const settled = orders.filter((o) => {
    if (o.status !== 'settled' || !o.settledAt) return false;
    const day = localDay(o.settledAt);
    if (from && day < from) return false;
    if (to && day > to) return false;
    return true;
  });

  const byPayment = {};
  const byType = {};
  const itemMap = new Map();

  let gross = 0, netSales = 0, cgst = 0, sgst = 0, serviceCharge = 0, discount = 0, roundOff = 0;
  let covers = 0;

  for (const o of settled) {
    const t = o.totals || {};
    gross         += Number(t.total) || 0;
    netSales      += Number(t.subtotal) || 0;
    cgst          += Number(t.cgst) || 0;
    sgst          += Number(t.sgst) || 0;
    serviceCharge += Number(t.serviceCharge) || 0;
    discount      += Number(t.discount) || 0;
    roundOff      += Number(t.roundOff) || 0;
    if (o.type === 'dine-in') covers += Number(o.pax) || 0;

    const mode = o.paymentMode || 'other';
    byPayment[mode] = round2((byPayment[mode] || 0) + (Number(t.total) || 0));

    const type = o.type || 'dine-in';
    if (!byType[type]) byType[type] = { count: 0, amount: 0 };
    byType[type].count += 1;
    byType[type].amount = round2(byType[type].amount + (Number(t.total) || 0));

    for (const it of (o.items || [])) {
      const key = it.name;
      const cur = itemMap.get(key) || { name: key, qty: 0, value: 0 };
      cur.qty   += Number(it.qty) || 0;
      cur.value += Number(it.value) || (Number(it.qty) || 0) * (Number(it.price) || 0);
      itemMap.set(key, cur);
    }
  }

  const topItems = [...itemMap.values()]
    .map((i) => ({ ...i, value: round2(i.value) }))
    .sort((a, b) => b.qty - a.qty);

  const bills = settled.length;

  return {
    bills,
    covers,
    gross: round2(gross),
    netSales: round2(netSales),
    cgst: round2(cgst),
    sgst: round2(sgst),
    tax: round2(cgst + sgst),
    serviceCharge: round2(serviceCharge),
    discount: round2(discount),
    roundOff: round2(roundOff),
    avgBill: bills ? round2(gross / bills) : 0,
    byPayment,
    byType,
    topItems,
  };
}
