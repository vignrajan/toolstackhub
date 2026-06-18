// ════════════════════════════════════════════════════════════════
// data/income-tax-pages.js
// Programmatic "Income Tax on ₹X Salary" pages, FY 2025-26.
// Targets high-volume "income tax on X lakh salary" queries.
// Quick-answer figures are computed from the shared calc module so
// the static HTML always matches the live calculator.
// ════════════════════════════════════════════════════════════════

import { compareRegimes, inr } from './income-tax-calc';

// Each: amount in ₹, slug fragment, display label.
// Old-regime deductions assumed for the headline comparison (typical
// 80C ₹1.5L + 80D ₹25k = ₹1.75L); the live calculator lets users edit.
const ASSUMED_DEDUCTIONS = 175000;

const INCOMES = [
  { amount: 500000,   slug: '5-lakh',    label: '₹5 Lakh'    },
  { amount: 600000,   slug: '6-lakh',    label: '₹6 Lakh'    },
  { amount: 700000,   slug: '7-lakh',    label: '₹7 Lakh'    },
  { amount: 800000,   slug: '8-lakh',    label: '₹8 Lakh'    },
  { amount: 900000,   slug: '9-lakh',    label: '₹9 Lakh'    },
  { amount: 1000000,  slug: '10-lakh',   label: '₹10 Lakh'   },
  { amount: 1200000,  slug: '12-lakh',   label: '₹12 Lakh'   },
  { amount: 1300000,  slug: '13-lakh',   label: '₹13 Lakh'   },
  { amount: 1500000,  slug: '15-lakh',   label: '₹15 Lakh'   },
  { amount: 1800000,  slug: '18-lakh',   label: '₹18 Lakh'   },
  { amount: 2000000,  slug: '20-lakh',   label: '₹20 Lakh'   },
  { amount: 2500000,  slug: '25-lakh',   label: '₹25 Lakh'   },
  { amount: 3000000,  slug: '30-lakh',   label: '₹30 Lakh'   },
  { amount: 4000000,  slug: '40-lakh',   label: '₹40 Lakh'   },
  { amount: 5000000,  slug: '50-lakh',   label: '₹50 Lakh'   },
  { amount: 10000000, slug: '1-crore',   label: '₹1 Crore'   },
];

function buildIncomeTaxPage(it) {
  const slug = `income-tax-on-${it.slug}-salary`;
  const r = compareRegimes(it.amount, ASSUMED_DEDUCTIONS);
  const newTax = r.new.total;
  const oldTax = r.old.total;
  const newAns = r.new.rebate ? 'zero (fully rebated under Section 87A)' : inr(newTax);

  return {
    slug,
    amount: it.amount,
    label:  it.label,
    newTax, oldTax,
    better: r.better, saving: r.saving,
    rebate: r.new.rebate,
    h1:    `Income Tax on ${it.label} Salary (FY 2025-26)`,
    title: `Income Tax on ${it.label} Salary – New vs Old Regime FY 2025-26`,
    metaDesc: `Income tax on ${it.label} salary for FY 2025-26 (AY 2026-27): ${r.new.rebate ? 'nil under the new regime' : `${inr(newTax)} (new regime)`}. New vs old regime comparison, slab breakdown, and a free calculator. No signup.`,
    intro: `How much income tax do you pay on a ${it.label} annual salary in FY 2025-26 (AY 2026-27)? Under the new tax regime, the tax works out to ${newAns}. ${r.better === 'new' ? `The new regime is cheaper here — you save ${inr(r.saving)} versus the old regime.` : `With ${inr(ASSUMED_DEDUCTIONS)} of deductions, the old regime is cheaper here — saving ${inr(r.saving)}.`} Use the calculator below to enter your exact deductions and compare both regimes.`,
    quickAnswer: [
      { label: 'New Regime', value: r.new.rebate ? 'Nil' : inr(newTax), note: r.new.rebate ? '87A rebate' : `on ${inr(r.new.taxable)} taxable` },
      { label: `Old Regime (with ${inr(ASSUMED_DEDUCTIONS)} deductions)`, value: r.old.rebate ? 'Nil' : inr(oldTax), note: `on ${inr(r.old.taxable)} taxable` },
    ],
    facts: [
      r.new.rebate
        ? `Under the new regime (FY 2025-26), a ${it.label} salary attracts zero tax because taxable income stays within the ₹12 lakh Section 87A rebate limit (after the ₹75,000 standard deduction).`
        : `Under the new regime (FY 2025-26), income tax on ${it.label} is ${inr(newTax)} after the ₹75,000 standard deduction and 4% cess.`,
      `The old regime figure shown assumes ${inr(ASSUMED_DEDUCTIONS)} of deductions (e.g. 80C ₹1.5L + 80D ₹25k) plus the ₹50,000 standard deduction — your actual old-regime tax depends on your investments.`,
      `The new regime is the default from FY 2025-26; you must opt in to the old regime if it benefits you.`,
      `Salary up to ₹12,75,000 is effectively tax-free under the new regime (₹12 lakh rebate limit + ₹75,000 standard deduction).`,
      `A 4% Health & Education Cess applies on the income tax in both regimes.`,
    ],
    faqs: [
      {
        q: `How much income tax on ${it.label} salary in FY 2025-26?`,
        a: r.new.rebate
          ? `Income tax on a ${it.label} salary is nil under the new regime for FY 2025-26, because taxable income remains within the ₹12 lakh Section 87A rebate limit after the ₹75,000 standard deduction.`
          : `Income tax on a ${it.label} salary is ${inr(newTax)} under the new regime for FY 2025-26 (including 4% cess). Under the old regime with ${inr(ASSUMED_DEDUCTIONS)} of deductions it is about ${inr(oldTax)}.`,
      },
      {
        q: `Which regime is better for a ${it.label} salary?`,
        a: r.better === 'new'
          ? `For a ${it.label} salary, the new regime is generally better — it costs ${inr(r.saving)} less than the old regime (assuming ${inr(ASSUMED_DEDUCTIONS)} of deductions). The old regime only wins if you claim significantly higher deductions.`
          : `For a ${it.label} salary with ${inr(ASSUMED_DEDUCTIONS)} of deductions, the old regime is better by ${inr(r.saving)}. If you have fewer deductions, the new regime usually wins.`,
      },
      {
        q: `Is ${it.label} salary tax-free?`,
        a: r.new.rebate
          ? `Yes — a ${it.label} annual salary is fully tax-free under the new regime for FY 2025-26 thanks to the Section 87A rebate (taxable income up to ₹12 lakh) and the ₹75,000 standard deduction.`
          : `No. A ${it.label} salary exceeds the ₹12.75 lakh effective tax-free limit, so income tax of around ${inr(newTax)} applies under the new regime. You can reduce it by choosing the regime that suits your deductions.`,
      },
      {
        q: `What is the standard deduction for FY 2025-26?`,
        a: `The standard deduction is ₹75,000 under the new regime and ₹50,000 under the old regime for FY 2025-26 (AY 2026-27).`,
      },
    ],
    related: INCOMES.filter(x => x.slug !== it.slug)
      .sort((a, b) => Math.abs(a.amount - it.amount) - Math.abs(b.amount - it.amount))
      .slice(0, 4)
      .map(x => `income-tax-on-${x.slug}-salary`),
  };
}

export const incomeTaxPages = INCOMES.map(buildIncomeTaxPage);

export function getIncomeTaxPageBySlug(slug) {
  return incomeTaxPages.find(p => p.slug === slug);
}
export function getAllIncomeTaxSlugs() {
  return incomeTaxPages.map(p => p.slug);
}
