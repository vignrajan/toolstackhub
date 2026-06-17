// ════════════════════════════════════════════════════════════════
// data/emi-bank-pages.js
// Programmatic "[Bank] Home Loan EMI Calculator" pages
// Rates are indicative starting rates for FY 2025-26 and change with
// RBI repo rate, CIBIL score, and loan amount. Always verify with the bank.
// ════════════════════════════════════════════════════════════════

const BANKS = [
  { name: 'SBI',              slug: 'sbi',             rate: 8.50, max: 9.65, fee: '0.35% (min ₹2,000, max ₹10,000)', tenure: 30 },
  { name: 'HDFC Bank',        slug: 'hdfc',            rate: 8.70, max: 9.60, fee: 'Up to 0.50% or ₹3,000 whichever higher', tenure: 30 },
  { name: 'ICICI Bank',       slug: 'icici',           rate: 8.75, max: 9.65, fee: '0.50% + GST',                     tenure: 30 },
  { name: 'Axis Bank',        slug: 'axis',            rate: 8.75, max: 9.65, fee: 'Up to 1% (min ₹10,000)',          tenure: 30 },
  { name: 'Kotak Mahindra',   slug: 'kotak',           rate: 8.70, max: 9.60, fee: '0.50% + GST',                     tenure: 25 },
  { name: 'Punjab National Bank', slug: 'pnb',         rate: 8.60, max: 9.45, fee: '0.35% (max ₹15,000)',             tenure: 30 },
  { name: 'Bank of Baroda',   slug: 'bank-of-baroda',  rate: 8.55, max: 10.50, fee: 'Up to 0.50%',                    tenure: 30 },
  { name: 'Canara Bank',      slug: 'canara',          rate: 8.55, max: 11.25, fee: '0.50% (max ₹10,000)',            tenure: 30 },
  { name: 'Union Bank of India', slug: 'union-bank',   rate: 8.50, max: 10.80, fee: '0.50% (max ₹15,000)',            tenure: 30 },
  { name: 'Bank of India',    slug: 'bank-of-india',   rate: 8.60, max: 10.85, fee: '0.25% (max ₹20,000)',            tenure: 30 },
  { name: 'IDBI Bank',        slug: 'idbi',            rate: 8.70, max: 10.75, fee: '0.50% (max ₹10,000)',            tenure: 30 },
  { name: 'LIC Housing Finance', slug: 'lic-housing',  rate: 8.65, max: 10.50, fee: 'Up to 0.50%',                    tenure: 30 },
  { name: 'Yes Bank',         slug: 'yes-bank',        rate: 9.40, max: 11.25, fee: 'Up to 1%',                       tenure: 25 },
  { name: 'IndusInd Bank',    slug: 'indusind',        rate: 9.50, max: 11.50, fee: 'Up to 1%',                       tenure: 25 },
  { name: 'Federal Bank',     slug: 'federal-bank',    rate: 8.80, max: 10.60, fee: 'Up to 0.50%',                    tenure: 30 },
];

function buildEmiPage(b) {
  const slug = `${b.slug}-home-loan-emi-calculator`;
  return {
    slug,
    bank:    b.name,
    loanType: 'Home Loan',
    rate:    b.rate,
    maxRate: b.max,
    fee:     b.fee,
    maxTenure: b.tenure,
    rateNote: `${b.name} home loan rates start at ${b.rate}% p.a. and can rise to about ${b.max}% depending on your CIBIL score, loan amount, and profile. Rates are linked to the RBI repo rate and may change over time. Processing fee: ${b.fee}.`,
    prefill: { rate: b.rate, principal: 3000000, tenure: 20 },
    h1:      `${b.name} Home Loan EMI Calculator 2026`,
    title:   `${b.name} Home Loan EMI Calculator 2026 – Free, Instant`,
    metaDesc:`Calculate your ${b.name} home loan EMI for 2026. Starting interest rate ${b.rate}% p.a. Instant EMI, total interest, and full amortization schedule. Free, no signup.`,
    intro:   `Calculate your monthly EMI for a ${b.name} home loan in seconds. ${b.name} offers home loans starting at ${b.rate}% p.a. (up to around ${b.max}% depending on your CIBIL score and loan amount), with tenures up to ${b.tenure} years. The calculator below is pre-filled with the current ${b.name} starting rate — adjust the loan amount, rate, and tenure to match your offer and see your exact EMI, total interest, and amortization schedule.`,
    facts: [
      `${b.name} home loan interest starts at ${b.rate}% p.a. (indicative, FY 2025-26).`,
      `Maximum tenure: up to ${b.tenure} years.`,
      `Processing fee: ${b.fee}.`,
      `A higher CIBIL score (750+) typically gets you the lowest advertised rate.`,
      `Home loan principal qualifies for deduction under Section 80C (up to ₹1.5 lakh); interest under Section 24(b) (up to ₹2 lakh for self-occupied).`,
    ],
    tips: [
      `Compare the ${b.name} rate against at least 2 other lenders before signing — even 0.25% lower can save lakhs over 20 years.`,
      `Prepaying when you get a bonus dramatically cuts total interest — floating-rate home loans have no prepayment penalty for individuals.`,
      `Opt for a shorter tenure if you can afford a higher EMI — total interest paid falls sharply.`,
      `Ask ${b.name} whether the rate is linked to the RBI repo rate (RLLR) — repo-linked loans reprice faster when rates fall.`,
    ],
    faqs: [
      { q: `What is the ${b.name} home loan interest rate in 2026?`, a: `${b.name} home loan interest rates start at around ${b.rate}% p.a. and can go up to about ${b.max}% depending on your credit score, loan amount, and profile. Rates are linked to the RBI repo rate and revise periodically.` },
      { q: `How is ${b.name} home loan EMI calculated?`, a: `EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1), where P is the principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of months. This calculator applies that formula instantly using the ${b.name} starting rate.` },
      { q: `What is the maximum ${b.name} home loan tenure?`, a: `${b.name} offers home loan tenures of up to ${b.tenure} years. A longer tenure lowers your monthly EMI but increases the total interest you pay.` },
      { q: `Can I prepay my ${b.name} home loan early?`, a: `Yes. For floating-rate home loans taken by individuals, the RBI prohibits prepayment/foreclosure charges. Prepaying reduces your outstanding principal and total interest significantly.` },
    ],
    related: BANKS.filter(x => x.slug !== b.slug).slice(0, 4).map(x => `${x.slug}-home-loan-emi-calculator`),
  };
}

export const emiBankPages = BANKS.map(buildEmiPage);

export function getEmiBankPageBySlug(slug) {
  return emiBankPages.find(p => p.slug === slug);
}
export function getAllEmiBankSlugs() {
  return emiBankPages.map(p => p.slug);
}
