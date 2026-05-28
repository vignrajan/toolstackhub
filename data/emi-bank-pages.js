// Programmatic SEO pages: EMI calculator by bank
// Target: "[Bank] home loan EMI calculator" queries

export const emiBankPages = [
  { slug: 'sbi-home-loan-emi-calculator',       bank: 'SBI',          fullName: 'State Bank of India', rate: 8.50, type: 'home',     minLoan: 500000,   maxLoan: 75000000 },
  { slug: 'hdfc-home-loan-emi-calculator',      bank: 'HDFC',         fullName: 'HDFC Bank',           rate: 8.75, type: 'home',     minLoan: 300000,   maxLoan: 100000000 },
  { slug: 'icici-home-loan-emi-calculator',     bank: 'ICICI',        fullName: 'ICICI Bank',          rate: 8.75, type: 'home',     minLoan: 300000,   maxLoan: 100000000 },
  { slug: 'axis-home-loan-emi-calculator',      bank: 'Axis',         fullName: 'Axis Bank',           rate: 8.75, type: 'home',     minLoan: 300000,   maxLoan: 50000000 },
  { slug: 'kotak-home-loan-emi-calculator',     bank: 'Kotak',        fullName: 'Kotak Mahindra Bank', rate: 8.75, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  { slug: 'pnb-home-loan-emi-calculator',       bank: 'PNB',          fullName: 'Punjab National Bank',rate: 8.40, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  { slug: 'bob-home-loan-emi-calculator',       bank: 'Bank of Baroda',fullName: 'Bank of Baroda',     rate: 8.40, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  { slug: 'canara-home-loan-emi-calculator',    bank: 'Canara Bank',  fullName: 'Canara Bank',         rate: 8.40, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  { slug: 'union-bank-home-loan-emi-calculator',bank: 'Union Bank',   fullName: 'Union Bank of India', rate: 8.35, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  { slug: 'lic-home-loan-emi-calculator',       bank: 'LIC Housing',  fullName: 'LIC Housing Finance', rate: 8.50, type: 'home',     minLoan: 1000000,  maxLoan: 100000000 },
  { slug: 'bajaj-home-loan-emi-calculator',     bank: 'Bajaj Finance',fullName: 'Bajaj Finance',       rate: 8.70, type: 'home',     minLoan: 500000,   maxLoan: 75000000 },
  { slug: 'tata-capital-home-loan-emi-calculator',bank:'Tata Capital', fullName: 'Tata Capital',       rate: 8.75, type: 'home',     minLoan: 500000,   maxLoan: 50000000 },
  // Car loan pages
  { slug: 'sbi-car-loan-emi-calculator',        bank: 'SBI',          fullName: 'State Bank of India', rate: 8.85, type: 'car',      minLoan: 100000,   maxLoan: 10000000 },
  { slug: 'hdfc-car-loan-emi-calculator',       bank: 'HDFC',         fullName: 'HDFC Bank',           rate: 8.80, type: 'car',      minLoan: 100000,   maxLoan: 10000000 },
  { slug: 'icici-car-loan-emi-calculator',      bank: 'ICICI',        fullName: 'ICICI Bank',          rate: 8.80, type: 'car',      minLoan: 100000,   maxLoan: 10000000 },
];

export function getEmiBankPageBySlug(slug) {
  const page = emiBankPages.find(p => p.slug === slug);
  if (!page) return null;

  const loanType  = page.type === 'home' ? 'Home Loan' : 'Car Loan';
  const defAmount = page.type === 'home' ? 3000000 : 800000;
  const defTenure = page.type === 'home' ? 240 : 60;

  return {
    ...page,
    loanType,
    defAmount,
    defTenure,
    title:   `${page.bank} ${loanType} EMI Calculator 2026 — Free, Instant`,
    h1:      `${page.bank} ${loanType} EMI Calculator — ${new Date().getFullYear()}`,
    metaDesc:`Calculate ${page.bank} ${loanType.toLowerCase()} EMI. Current rate ${page.rate}% p.a. Full amortization schedule, total interest, and payment breakdown. Free, instant.`,
    intro:   `Calculate your ${page.fullName} ${loanType.toLowerCase()} EMI instantly. The current ${page.bank} ${loanType.toLowerCase()} interest rate starts at ${page.rate}% per annum (subject to credit score and eligibility). Use this free calculator to find your monthly EMI, total interest payable, and see the full amortization schedule.`,
    rateNote:`${page.bank} ${loanType.toLowerCase()} rates start at ${page.rate}% p.a. and may vary based on your CIBIL score, loan amount, and tenure. Always check the official ${page.fullName} website for the latest rates before applying.`,
  };
}

export function getAllEmiBankSlugs() {
  return emiBankPages.map(p => p.slug);
}
