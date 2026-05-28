// Programmatic SEO pages: salary calculator by city
// Target: "salary calculator [city]", "in-hand salary [city]" queries

export const salaryCityPages = [
  { slug: 'salary-calculator-bangalore',  city: 'Bangalore',  state: 'Karnataka',    hraPct: 50, pt: 2400, costNote: 'Bangalore (Bengaluru) is the costliest metro for tech professionals. Average 2BHK rent: ₹30,000–₹60,000/month in Koramangala, Indiranagar, HSR Layout.' },
  { slug: 'salary-calculator-mumbai',     city: 'Mumbai',     state: 'Maharashtra',  hraPct: 50, pt: 2400, costNote: 'Mumbai is the financial capital of India. Average 2BHK rent: ₹35,000–₹80,000/month in areas like Andheri, Powai, BKC, Lower Parel.' },
  { slug: 'salary-calculator-delhi',      city: 'Delhi',      state: 'Delhi',        hraPct: 50, pt: 0,    costNote: 'Delhi NCR (Gurgaon, Noida, Delhi) has no professional tax. Average 2BHK rent: ₹20,000–₹45,000/month in Gurgaon, Noida, South Delhi.' },
  { slug: 'salary-calculator-hyderabad',  city: 'Hyderabad',  state: 'Telangana',    hraPct: 40, pt: 2400, costNote: 'Hyderabad is one of the most affordable metros for tech professionals. Average 2BHK rent: ₹15,000–₹30,000/month in Hitech City, Kondapur, Madhapur.' },
  { slug: 'salary-calculator-pune',       city: 'Pune',       state: 'Maharashtra',  hraPct: 40, pt: 2400, costNote: 'Pune is a major IT and auto hub. Average 2BHK rent: ₹18,000–₹35,000/month in Hinjewadi, Wakad, Baner, Kharadi.' },
  { slug: 'salary-calculator-chennai',    city: 'Chennai',    state: 'Tamil Nadu',   hraPct: 40, pt: 2496, costNote: 'Chennai has lower cost of living than Bangalore/Mumbai. Average 2BHK rent: ₹15,000–₹30,000/month in OMR, Velachery, Anna Nagar.' },
  { slug: 'salary-calculator-kolkata',    city: 'Kolkata',    state: 'West Bengal',  hraPct: 40, pt: 2400, costNote: 'Kolkata is one of the most affordable large cities. Average 2BHK rent: ₹12,000–₹25,000/month in Salt Lake, New Town, Rajarhat.' },
  { slug: 'salary-calculator-ahmedabad',  city: 'Ahmedabad',  state: 'Gujarat',      hraPct: 40, pt: 2400, costNote: 'Ahmedabad has affordable living costs. Average 2BHK rent: ₹10,000–₹20,000/month in SG Highway, Prahlad Nagar, Navrangpura.' },
  { slug: 'salary-calculator-noida',      city: 'Noida',      state: 'Uttar Pradesh',hraPct: 50, pt: 0,    costNote: 'Noida (part of Delhi NCR) has no UP professional tax for salaried employees in most cases. Average 2BHK: ₹15,000–₹25,000/month.' },
  { slug: 'salary-calculator-gurgaon',    city: 'Gurgaon',    state: 'Haryana',      hraPct: 50, pt: 0,    costNote: 'Gurgaon (Gurugram) is a premium corporate hub with high cost of living. Average 2BHK rent: ₹25,000–₹50,000/month in DLF, Cyber City, Sector 29.' },
];

export function getSalaryCityPageBySlug(slug) {
  const page = salaryCityPages.find(p => p.slug === slug);
  if (!page) return null;
  return {
    ...page,
    title:   `In-Hand Salary Calculator for ${page.city} (${new Date().getFullYear()}) — CTC to Take-Home`,
    h1:      `Salary Calculator for ${page.city} — CTC to Take-Home Pay (${new Date().getFullYear()})`,
    metaDesc:`Calculate in-hand salary for ${page.city}. ${page.state} professional tax ₹${page.pt}/year. HRA ${page.hraPct}% (${page.city === 'Bangalore' || page.city === 'Mumbai' || page.city === 'Delhi' || page.city === 'Kolkata' ? 'metro' : 'non-metro'}). Old vs new regime. Free, instant.`,
    intro:   `Calculate your exact take-home salary for a job in ${page.city}, ${page.state}. This calculator pre-fills ${page.city}-specific values: Professional Tax of ₹${(page.pt).toLocaleString('en-IN')} per year (${page.state}) and HRA at ${page.hraPct}% of basic salary (${page.hraPct === 50 ? 'metro city rate' : 'non-metro rate'}).`,
  };
}

export function getAllSalaryCitySlugs() {
  return salaryCityPages.map(p => p.slug);
}
