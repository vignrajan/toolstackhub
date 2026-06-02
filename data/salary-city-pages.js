// ════════════════════════════════════════════════════════════════
// data/salary-city-pages.js
// Programmatic "Salary Calculator for [City]" pages
// City-specific context: HRA metro/non-metro, professional tax by state,
// local cost of living commentary.
// ════════════════════════════════════════════════════════════════

// hraPct: 50 for metro cities (eligible for 50% HRA exemption under IT Act)
// ptState: state name matching STATES_PT keys in SalaryGratuityCalculator.jsx
const CITIES = [
  { name: 'Mumbai',       slug: 'mumbai',       state: 'Maharashtra', hraPct: 50, metro: true,  avgCtc: 1200000, region: 'Western India' },
  { name: 'Delhi',        slug: 'delhi',        state: 'Delhi',       hraPct: 50, metro: true,  avgCtc: 1100000, region: 'Northern India' },
  { name: 'Bengaluru',    slug: 'bengaluru',    state: 'Karnataka',   hraPct: 50, metro: true,  avgCtc: 1400000, region: 'Southern India' },
  { name: 'Hyderabad',    slug: 'hyderabad',    state: 'Telangana',   hraPct: 50, metro: true,  avgCtc: 1200000, region: 'Southern India' },
  { name: 'Chennai',      slug: 'chennai',      state: 'Tamil Nadu',  hraPct: 50, metro: true,  avgCtc: 1000000, region: 'Southern India' },
  { name: 'Kolkata',      slug: 'kolkata',      state: 'West Bengal', hraPct: 50, metro: true,  avgCtc: 900000,  region: 'Eastern India' },
  { name: 'Pune',         slug: 'pune',         state: 'Maharashtra', hraPct: 40, metro: false, avgCtc: 1100000, region: 'Western India' },
  { name: 'Ahmedabad',    slug: 'ahmedabad',    state: 'Gujarat',     hraPct: 40, metro: false, avgCtc: 900000,  region: 'Western India' },
  { name: 'Noida',        slug: 'noida',        state: 'Uttar Pradesh', hraPct: 40, metro: false, avgCtc: 1000000, region: 'Northern India' },
  { name: 'Gurugram',     slug: 'gurugram',     state: 'Haryana',     hraPct: 40, metro: false, avgCtc: 1200000, region: 'Northern India' },
  { name: 'Jaipur',       slug: 'jaipur',       state: 'Rajasthan',   hraPct: 40, metro: false, avgCtc: 800000,  region: 'Northern India' },
  { name: 'Lucknow',      slug: 'lucknow',      state: 'Uttar Pradesh', hraPct: 40, metro: false, avgCtc: 750000, region: 'Northern India' },
  { name: 'Chandigarh',   slug: 'chandigarh',   state: 'Haryana',     hraPct: 40, metro: false, avgCtc: 800000,  region: 'Northern India' },
  { name: 'Kochi',        slug: 'kochi',        state: 'Kerala',      hraPct: 40, metro: false, avgCtc: 850000,  region: 'Southern India' },
  { name: 'Indore',       slug: 'indore',       state: 'Madhya Pradesh', hraPct: 40, metro: false, avgCtc: 750000, region: 'Central India' },
  { name: 'Bhopal',       slug: 'bhopal',       state: 'Madhya Pradesh', hraPct: 40, metro: false, avgCtc: 700000, region: 'Central India' },
  { name: 'Nagpur',       slug: 'nagpur',       state: 'Maharashtra', hraPct: 40, metro: false, avgCtc: 750000,  region: 'Central India' },
  { name: 'Coimbatore',   slug: 'coimbatore',   state: 'Tamil Nadu',  hraPct: 40, metro: false, avgCtc: 800000,  region: 'Southern India' },
  { name: 'Vadodara',     slug: 'vadodara',     state: 'Gujarat',     hraPct: 40, metro: false, avgCtc: 800000,  region: 'Western India' },
  { name: 'Visakhapatnam',slug: 'visakhapatnam',state: 'Andhra Pradesh', hraPct: 40, metro: false, avgCtc: 750000, region: 'Southern India' },
];

const ctcFmt = n => `₹${(n / 100000).toFixed(0)} LPA`;

function buildSalaryPage(c) {
  const slug = `salary-calculator-${c.slug}`;
  const hraNoteText = c.metro
    ? `${c.name} is a metro city — HRA exemption is calculated at 50% of Basic salary.`
    : `${c.name} is a non-metro city — HRA exemption is calculated at 40% of Basic salary.`;

  return {
    slug,
    city:      c.name,
    state:     c.state,
    hraPct:    c.hraPct,
    metro:     c.metro,
    avgCtc:    c.avgCtc,
    region:    c.region,
    prefill: { state: c.state, hraPct: c.hraPct, ctc: c.avgCtc },
    h1:      `Salary Calculator for ${c.name} ${new Date().getFullYear()}`,
    title:   `Salary Calculator for ${c.name} ${new Date().getFullYear()} – In-Hand Salary, HRA & Tax`,
    metaDesc:`Free salary calculator for ${c.name}. Calculate in-hand salary, HRA exemption (${c.hraPct}% for ${c.metro ? 'metro' : 'non-metro'}), professional tax (${c.state}), and income tax under new & old regime. No signup.`,
    intro:   `Calculate your exact in-hand (take-home) salary in ${c.name} for FY 2025-26. ${hraNoteText} ${c.state === 'Delhi' || c.state === 'Haryana' || c.state === 'Uttar Pradesh' || c.state === 'Rajasthan' || c.state === 'Punjab' || c.state === 'Bihar' ? `${c.state} has no professional tax, so your deductions are lower.` : `Professional tax in ${c.state} is deducted monthly.`} The calculator below is pre-filled with a ${ctcFmt(c.avgCtc)} CTC — a typical package for ${c.name} — adjust it to your actual offer.`,
    facts: [
      hraNoteText,
      `Average CTC in ${c.name}: approximately ${ctcFmt(c.avgCtc)} (FY 2025-26, varies by industry and experience).`,
      `Under the new tax regime (FY 2025-26), income up to ₹12 lakh is effectively tax-free after rebate u/s 87A.`,
      `Standard deduction of ₹75,000 is available under both tax regimes.`,
      `Employer PF contribution (12% of Basic) is included in CTC but not received as cash — factor this when comparing offers.`,
    ],
    tips: [
      `Negotiate your Basic salary component — a higher Basic increases HRA exemption and PF benefits.`,
      `If your actual rent is low or you live in your own home, the new tax regime often saves more than the old regime.`,
      `Ask for a cost-to-company (CTC) breakup — hidden components like gratuity provision (4.81% of Basic) and insurance reduce your effective cash salary.`,
      `Variable pay (bonus) is taxable in the year it is paid — check whether your offer letter shows a fixed vs variable split.`,
    ],
    faqs: [
      {
        q: `How is in-hand salary calculated in ${c.name}?`,
        a: `In-hand salary = Gross Salary − Employee PF (12% of Basic) − Professional Tax − TDS (income tax). In ${c.name}, the HRA exemption is ${c.hraPct}% of Basic for rent-paying employees, which reduces taxable income.`,
      },
      {
        q: `What is the HRA rule for ${c.name}?`,
        a: `${c.name} is classified as a ${c.metro ? 'metro' : 'non-metro'} city under the Income Tax Act. HRA exemption is the minimum of: (1) actual HRA received, (2) ${c.hraPct}% of Basic salary, or (3) actual rent paid minus 10% of Basic salary.`,
      },
      {
        q: `Is there professional tax in ${c.state}?`,
        a: c.state === 'Delhi' || c.state === 'Haryana' || c.state === 'Uttar Pradesh' || c.state === 'Rajasthan' || c.state === 'Punjab' || c.state === 'Bihar'
          ? `No. ${c.state} does not levy professional tax. Employees in ${c.name} have no professional tax deduction.`
          : `Yes. ${c.state} levies professional tax of up to ₹2,400–₹2,496 per year depending on salary slab. This is deducted monthly from your salary.`,
      },
      {
        q: `New regime vs old regime — which is better for ${c.name} employees?`,
        a: `For most salaried employees in ${c.name} with a CTC up to ₹15 LPA and limited deductions, the new regime is more beneficial in FY 2025-26 (income up to ₹12 lakh effectively tax-free). If you have a large home loan interest, HRA, and 80C investments exceeding ₹3–4 lakh, run both scenarios using this calculator.`,
      },
    ],
    related: CITIES.filter(x => x.state === c.state && x.slug !== c.slug)
      .concat(CITIES.filter(x => x.state !== c.state && x.metro))
      .slice(0, 4)
      .map(x => `salary-calculator-${x.slug}`),
  };
}

export const salaryCityPages = CITIES.map(buildSalaryPage);

export function getSalaryCityPageBySlug(slug) {
  return salaryCityPages.find(p => p.slug === slug);
}
export function getAllSalaryCitySlugs() {
  return salaryCityPages.map(p => p.slug);
}
