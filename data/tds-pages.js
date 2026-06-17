// ════════════════════════════════════════════════════════════════
// data/tds-pages.js
// Programmatic "TDS Calculator on [Payment Type]" pages
// Each page targets an exact-match long-tail keyword and pre-fills
// the TDS calculator with the relevant Section.
// Rates / thresholds reflect FY 2025-26 (AY 2026-27), Budget 2025.
// ════════════════════════════════════════════════════════════════

const TYPES = [
  {
    slug: 'salary', section: 'salary', code: '192', label: 'Salary',
    rateLabel: 'as per income tax slab', threshold: null,
    blurb: 'TDS on salary is deducted every month by your employer, based on your estimated annual income tax under the new regime for FY 2025-26.',
  },
  {
    slug: 'rent', section: 'rent', code: '194-I', label: 'Rent',
    rateLabel: '10%', threshold: '₹6,00,000 per year',
    blurb: 'TDS on rent is deducted at 10% on rent of land or building (2% for plant & machinery) when the total annual rent exceeds ₹6,00,000.',
  },
  {
    slug: 'professional-fees', section: 'professional', code: '194J', label: 'Professional Fees',
    rateLabel: '10%', threshold: '₹50,000 per year',
    blurb: 'TDS on professional or technical fees is deducted at 10% (2% for technical services / call centres) when the annual payment exceeds ₹50,000.',
  },
  {
    slug: 'contractor-payment', section: 'contractor', code: '194C', label: 'Contractor Payment',
    rateLabel: '1% (individual) / 2% (company)', threshold: '₹30,000 single / ₹1,00,000 aggregate',
    blurb: 'TDS on contractor payments is deducted at 1% for an Individual/HUF payee and 2% for companies/firms, when a single payment exceeds ₹30,000 (or ₹1,00,000 in aggregate).',
  },
  {
    slug: 'fd-interest', section: 'fd', code: '194A', label: 'FD Interest',
    rateLabel: '10%', threshold: '₹50,000 per year (₹1,00,000 for senior citizens)',
    blurb: 'TDS on bank FD / RD interest is deducted at 10% when annual interest exceeds ₹50,000 (₹1,00,000 for senior citizens) for FY 2025-26.',
  },
  {
    slug: 'commission', section: 'commission', code: '194H', label: 'Commission',
    rateLabel: '2%', threshold: '₹20,000 per year',
    blurb: 'TDS on commission or brokerage is deducted at 2% (reduced from 5% in October 2024) when the annual payment exceeds ₹20,000.',
  },
];

function buildTdsPage(t) {
  const slug = `tds-calculator-on-${t.slug}`;
  const isSalary = t.section === 'salary';
  return {
    slug,
    paymentType: t.label,
    section: t.code,
    prefillSection: t.section,
    rateLabel: t.rateLabel,
    threshold: t.threshold,
    blurb: t.blurb,
    h1:    `TDS Calculator on ${t.label} 2026 (Section ${t.code})`,
    title: `TDS Calculator on ${t.label} – Section ${t.code} Rate FY 2025-26`,
    metaDesc: `Free TDS calculator on ${t.label.toLowerCase()} for FY 2025-26. ${isSalary ? 'Estimate monthly salary TDS under the new regime.' : `TDS rate ${t.rateLabel} under Section ${t.code}.`} Instant, accurate, no signup.`,
    intro: `Calculate TDS on ${t.label.toLowerCase()} instantly under Section ${t.code} for FY 2025-26 (AY 2026-27). ${t.blurb} Enter the amount below to see the exact TDS to be deducted and the net payment.`,
    facts: [
      `TDS on ${t.label.toLowerCase()} falls under Section ${t.code} of the Income Tax Act.`,
      isSalary
        ? `Salary TDS has no flat rate — it equals your estimated annual income tax divided by 12.`
        : `The TDS rate is ${t.rateLabel}.`,
      isSalary
        ? `Under the new regime (FY 2025-26), salary up to ₹12,75,000 is effectively tax-free after the ₹75,000 standard deduction and 87A rebate.`
        : `No TDS is required if the payment is within the threshold of ${t.threshold}.`,
      `If the payee does not provide a PAN, TDS is deducted at 20% under Section 206AA (does not apply to salary).`,
      `TDS deducted must be deposited with the government and reported in the quarterly TDS return; the payee can claim it as credit while filing their ITR.`,
    ],
    faqs: [
      {
        q: `What is the TDS rate on ${t.label.toLowerCase()} for FY 2025-26?`,
        a: isSalary
          ? `There is no fixed TDS rate on salary. Under Section 192, your employer estimates your total annual income tax (new regime by default for FY 2025-26) and deducts 1/12th of it each month.`
          : `TDS on ${t.label.toLowerCase()} is deducted at ${t.rateLabel} under Section ${t.code} for FY 2025-26.`,
      },
      {
        q: `Is there a threshold below which no TDS is deducted on ${t.label.toLowerCase()}?`,
        a: isSalary
          ? `For salary, TDS applies only if your estimated annual tax is above zero. Under the new regime, salary up to about ₹12,75,000 attracts nil tax (and hence nil TDS) after the standard deduction and 87A rebate.`
          : `Yes. No TDS is deducted on ${t.label.toLowerCase()} if the amount is within ${t.threshold}.`,
      },
      {
        q: `What happens if the payee does not have a PAN?`,
        a: isSalary
          ? `For salary, an employee without a valid PAN can be taxed at a higher rate (up to 20% or more) and cannot claim TDS credit. Always share a valid PAN with your employer.`
          : `Under Section 206AA, if the payee does not furnish a PAN, TDS on ${t.label.toLowerCase()} is deducted at the higher of the normal rate or 20%.`,
      },
      {
        q: `Can the deducted TDS be claimed back?`,
        a: `Yes. TDS is an advance collection of tax. The deductee can claim full credit for the TDS shown in Form 26AS / AIS while filing the income tax return, and any excess is refunded.`,
      },
    ],
    related: TYPES.filter(x => x.slug !== t.slug).slice(0, 4).map(x => `tds-calculator-on-${x.slug}`),
  };
}

export const tdsPages = TYPES.map(buildTdsPage);

export function getTdsPageBySlug(slug) {
  return tdsPages.find(p => p.slug === slug);
}
export function getAllTdsSlugs() {
  return tdsPages.map(p => p.slug);
}
