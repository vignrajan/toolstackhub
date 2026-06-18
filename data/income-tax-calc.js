// ════════════════════════════════════════════════════════════════
// data/income-tax-calc.js
// Pure income-tax computation for FY 2025-26 (AY 2026-27).
// Shared by IncomeTaxCalculator.jsx and income-tax-pages.js so the
// calculator and the static "quick answer" never diverge.
// ════════════════════════════════════════════════════════════════

// New regime slabs — Budget 2025, effective FY 2025-26.
const NEW_SLABS = [
  [400000, 0], [800000, 0.05], [1200000, 0.10],
  [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30],
];
// Old regime slabs (unchanged).
const OLD_SLABS = [
  [250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30],
];

const NEW_STD_DEDUCTION = 75000;
const OLD_STD_DEDUCTION = 50000;

function slabTax(ti, slabs) {
  let tax = 0, prev = 0;
  for (const [limit, rate] of slabs) {
    if (ti > prev) { tax += (Math.min(ti, limit) - prev) * rate; prev = limit; }
    else break;
  }
  return tax;
}

// ── New regime (FY 2025-26) ────────────────────────────────────
// Standard deduction ₹75,000; full 87A rebate up to ₹12L taxable
// (rebate cap ₹60,000); marginal relief just above ₹12L; 4% cess.
export function newRegimeTax(gross) {
  const taxable = Math.max(0, gross - NEW_STD_DEDUCTION);
  let tax = slabTax(taxable, NEW_SLABS);
  let rebate = false, marginalRelief = false;
  if (taxable <= 1200000) {
    tax = 0; rebate = true;
  } else {
    const excess = taxable - 1200000;
    if (tax > excess) { tax = excess; marginalRelief = true; } // marginal relief
  }
  const cess = tax * 0.04;
  return {
    regime: 'new', gross, stdDeduction: NEW_STD_DEDUCTION, deductions: 0,
    taxable, baseTax: tax, rebate, marginalRelief, cess,
    total: Math.round(tax + cess),
  };
}

// ── Old regime ─────────────────────────────────────────────────
// Standard deduction ₹50,000 + Chapter VI-A deductions; 87A rebate
// up to ₹5L taxable; 4% cess.
export function oldRegimeTax(gross, deductions = 0) {
  const taxable = Math.max(0, gross - OLD_STD_DEDUCTION - deductions);
  let tax = slabTax(taxable, OLD_SLABS);
  let rebate = false;
  if (taxable <= 500000) { tax = 0; rebate = true; }
  const cess = tax * 0.04;
  return {
    regime: 'old', gross, stdDeduction: OLD_STD_DEDUCTION, deductions,
    taxable, baseTax: tax, rebate, marginalRelief: false, cess,
    total: Math.round(tax + cess),
  };
}

// Compare both regimes for a gross income (old uses given deductions).
export function compareRegimes(gross, oldDeductions = 0) {
  const nw = newRegimeTax(gross);
  const od = oldRegimeTax(gross, oldDeductions);
  const better = nw.total <= od.total ? 'new' : 'old';
  return { new: nw, old: od, better, saving: Math.abs(nw.total - od.total) };
}

export function inr(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}
