// lib/billing/pos.js
// ─────────────────────────────────────────────────────────────
// Restaurant POS math + helpers, built on the shared GST utils.
//
// Indian restaurant GST rules baked in here:
//  • Dine-in / takeaway food is taxed at the restaurant's location
//    (point of supply) → always intra-state → CGST + SGST, never IGST.
//  • Standard restaurant food rate is 5% (2.5% CGST + 2.5% SGST) with
//    no input-tax credit; packaged goods may carry 12/18%; alcohol
//    carries 0% GST (state excise/VAT applies, out of scope here).
//  • Service charge is part of the value of supply, so GST applies on
//    it at the food rate. It is optional and never compulsory.
// ─────────────────────────────────────────────────────────────

import { round2 } from './gst';

export const FOOD_GST_RATE = 5;          // default for menu items
export const SERVICE_CHARGE_GST = 5;     // GST levied on service charge
export const ORDER_TYPES = ['dine-in', 'takeaway', 'delivery'];

// Compute totals for a running/settled order.
// items: [{ name, qty, price, gstRate, ... }]
export function computeOrder(items, {
  serviceChargePercent = 0,
  discount = 0,
  discountType = 'amount', // 'amount' | 'percent'
} = {}){
  let subtotal = 0;
  let foodTaxable = 0; // value of GST-bearing items (service charge base)
  let cgst = 0, sgst = 0;

  const lines = items.map((it) => {
    const qty = Number(it.qty) || 0;
    const price = Number(it.price) || 0;
    const value = round2(qty * price);
    const rate = Number(it.gstRate) || 0;
    const tax = round2(value * rate / 100);
    subtotal += value;
    if (rate > 0) foodTaxable += value;
    cgst += tax / 2;
    sgst += tax / 2;
    return { ...it, value, taxAmount: tax };
  });

  subtotal = round2(subtotal);
  foodTaxable = round2(foodTaxable);

  // Service charge on food value, plus GST on the service charge.
  const serviceCharge = round2(foodTaxable * (Number(serviceChargePercent) || 0) / 100);
  const scTax = round2(serviceCharge * SERVICE_CHARGE_GST / 100);
  cgst += scTax / 2;
  sgst += scTax / 2;

  cgst = round2(cgst);
  sgst = round2(sgst);
  const totalTax = round2(cgst + sgst);

  const discAmt = discountType === 'percent'
    ? round2(subtotal * (Number(discount) || 0) / 100)
    : round2(Number(discount) || 0);

  const preRound = round2(subtotal + serviceCharge + totalTax - discAmt);
  const total = Math.round(preRound);
  const roundOff = round2(total - preRound);

  return {
    lines,
    subtotal,
    foodTaxable,
    serviceChargePercent: Number(serviceChargePercent) || 0,
    serviceCharge,
    discount: discAmt,
    cgst, sgst, totalTax,
    roundOff,
    total,
    itemCount: items.reduce((s, it) => s + (Number(it.qty) || 0), 0),
  };
}

// Items added since the last KOT was fired (compared by a kot flag).
export function pendingKotItems(items) {
  return items.filter((it) => (Number(it.qty) || 0) > (Number(it.kotQty) || 0));
}

export function markKotPrinted(items) {
  return items.map((it) => ({ ...it, kotQty: Number(it.qty) || 0 }));
}

// Distinct, ordered category list from a flat menu array.
export function categoriesOf(menu) {
  const seen = [];
  for (const m of menu) {
    const c = (m.category || 'Other').trim();
    if (!seen.includes(c)) seen.push(c);
  }
  return seen;
}

// First-run starter data so the POS is usable immediately.
export function seedMenu() {
  const mk = (name, category, price, opts = {}) => ({
    id: crypto.randomUUID(), name, category, price,
    gstRate: opts.gstRate ?? FOOD_GST_RATE,
    isVeg: opts.isVeg ?? true,
    isActive: true,
  });
  return [
    mk('Masala Dosa', 'South Indian', 90),
    mk('Idli (2 pc)', 'South Indian', 50),
    mk('Filter Coffee', 'Beverages', 40),
    mk('Paneer Butter Masala', 'Main Course', 240),
    mk('Dal Tadka', 'Main Course', 180),
    mk('Butter Naan', 'Breads', 45),
    mk('Veg Biryani', 'Rice', 200),
    mk('Chicken Biryani', 'Rice', 280, { isVeg: false }),
    mk('Gulab Jamun (2 pc)', 'Desserts', 80),
    mk('Masala Chai', 'Beverages', 30),
    mk('Soft Drink', 'Beverages', 60, { gstRate: 12 }),
    mk('Mineral Water', 'Beverages', 20, { gstRate: 18 }),
  ];
}

export function seedTables(count = 12) {
  return Array.from({ length: count }, (_, i) => ({
    id: crypto.randomUUID(),
    name: `T${i + 1}`,
    seats: i % 3 === 0 ? 2 : 4,
  }));
}
