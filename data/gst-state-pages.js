// Programmatic SEO pages: GST calculator by state
// Target: "GST calculator [state]" queries

export const gstStatePages = [
  { slug: 'gst-calculator-maharashtra', state: 'Maharashtra', capital: 'Mumbai',    notes: 'Maharashtra is India\'s largest economy. Key industries: finance, IT, manufacturing, entertainment. All GST rates (5%, 12%, 18%, 28%) apply.' },
  { slug: 'gst-calculator-karnataka',   state: 'Karnataka',   capital: 'Bengaluru', notes: 'Karnataka is India\'s IT hub. Bengaluru alone accounts for over 40% of India\'s software exports. GST registration threshold: ₹20 lakh.' },
  { slug: 'gst-calculator-gujarat',     state: 'Gujarat',     capital: 'Gandhinagar',notes: 'Gujarat is a major industrial state. Key industries: petrochemicals, textiles, diamonds, pharmaceuticals.' },
  { slug: 'gst-calculator-tamil-nadu',  state: 'Tamil Nadu',  capital: 'Chennai',   notes: 'Tamil Nadu is a major manufacturing hub. Key industries: automobiles, textiles, IT, leather goods.' },
  { slug: 'gst-calculator-delhi',       state: 'Delhi',       capital: 'New Delhi',  notes: 'Delhi (National Capital Territory) is a major commercial and trade hub. High density of service industry businesses.' },
  { slug: 'gst-calculator-rajasthan',   state: 'Rajasthan',   capital: 'Jaipur',    notes: 'Rajasthan has a growing economy with key industries: tourism, gems & jewellery, handicrafts, mining, cement.' },
  { slug: 'gst-calculator-uttar-pradesh',state: 'Uttar Pradesh',capital: 'Lucknow', notes: 'Uttar Pradesh has a diverse economy with agriculture, manufacturing, IT, and services sectors.' },
  { slug: 'gst-calculator-andhra-pradesh',state: 'Andhra Pradesh',capital: 'Amaravati',notes: 'Andhra Pradesh has strong IT, agriculture, and pharmaceuticals sectors. Visakhapatnam is a major industrial city.' },
  { slug: 'gst-calculator-telangana',   state: 'Telangana',   capital: 'Hyderabad', notes: 'Telangana is a leading IT and pharma state. Hyderabad is one of India\'s top IT hubs alongside Bengaluru and Pune.' },
  { slug: 'gst-calculator-west-bengal', state: 'West Bengal', capital: 'Kolkata',   notes: 'West Bengal is a major industrial state. Key sectors: jute, tea, steel, chemicals, IT.' },
  { slug: 'gst-calculator-kerala',      state: 'Kerala',      capital: 'Thiruvananthapuram', notes: 'Kerala has high per-capita income. Key sectors: tourism, spices, cashew, seafood, IT (Technopark, Infopark).' },
  { slug: 'gst-calculator-punjab',      state: 'Punjab',      capital: 'Chandigarh', notes: 'Punjab is a major agricultural state. Key industries: wheat, rice, cotton, sports goods, hosiery.' },
  { slug: 'gst-calculator-haryana',     state: 'Haryana',     capital: 'Chandigarh', notes: 'Haryana has strong automobile, IT, and agricultural sectors. Gurugram (Gurgaon) is a major IT and corporate hub.' },
  { slug: 'gst-calculator-madhya-pradesh',state: 'Madhya Pradesh',capital: 'Bhopal', notes: 'Madhya Pradesh has key industries: agriculture, mining, tourism, manufacturing, IT (Indore is a growing IT hub).' },
  { slug: 'gst-calculator-bihar',       state: 'Bihar',       capital: 'Patna',     notes: 'Bihar has an agriculture-dominated economy with growing sectors in construction, retail, and services.' },
];

export function getGstStatePageBySlug(slug) {
  const page = gstStatePages.find(p => p.slug === slug);
  if (!page) return null;
  return {
    ...page,
    title:   `GST Calculator for ${page.state} — Free Online GST Tool 2026`,
    h1:      `GST Calculator for ${page.state}`,
    metaDesc:`Free GST calculator for ${page.state} businesses. Add or remove GST at 5%, 12%, 18%, 28% rates. CGST/SGST breakdown for intra-state. IGST for inter-state supply.`,
    intro:   `Use this free GST calculator for ${page.state}-based businesses. Whether you are in ${page.capital} or anywhere in ${page.state}, GST rates apply uniformly across India. Calculate CGST + SGST for intra-state transactions or IGST for inter-state supply.`,
  };
}

export function getAllGstStateSlugs() {
  return gstStatePages.map(p => p.slug);
}
