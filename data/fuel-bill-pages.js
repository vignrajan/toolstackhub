// ════════════════════════════════════════════════════════════════
// FILE 1: data/fuel-bill-pages.js
// All programmatic page definitions
// ════════════════════════════════════════════════════════════════

export const fuelBillPages = [
    {
      slug:       'fuel-bill-generator-for-reimbursement',
      h1:         'Fuel Bill Generator for Reimbursement – Free Online',
      title:      'Fuel Bill Generator for Reimbursement Free – Claim Expenses Easily',
      metaDesc:   'Generate fuel bills for corporate reimbursement free online. Professional petrol/diesel bills with all mandatory fields. PDF download, WhatsApp share. No signup.',
      intro:      'Corporate fuel reimbursement requires a properly formatted bill with specific fields — pump name, location, date, vehicle number, fuel type, quantity, rate, and total. Missing any field can delay your claim. Our reimbursement-optimized fuel bill generator includes every mandatory field your accounts team will ask for.',
      prefill:    { gstEnabled: false, notes: 'Fuel reimbursement claim' },
      tips: [
        'Add your claim reference number in the Notes field',
        'Enter your exact vehicle registration number',
        'Use the actual pump name and city from your receipt',
        'Match the date exactly with your expense report',
      ],
      useCaseH2:  'Fuel Reimbursement — What Your Accounts Team Needs',
      useCaseText: 'Most corporate reimbursement policies require fuel bills to include: the petrol pump\'s name and address, the date of purchase, the vehicle registration number, fuel type, quantity in litres, rate per litre, and total amount. Our generator includes all these fields and produces a professional PDF that meets standard HR and accounts team requirements.',
    },
    {
      slug:       'petrol-bill-generator-online-free',
      h1:         'Petrol Bill Generator Online Free – Create Petrol Receipt',
      title:      'Petrol Bill Generator Online Free India – No Signup Required',
      metaDesc:   'Generate petrol bills online free in India. Create professional petrol receipts with pump name, quantity, rate. PDF download. No signup, no watermark.',
      intro:      'Need a petrol bill quickly? Enter your pump details, petrol quantity, and the rate per litre — your professional petrol receipt is ready in under a minute. Download as PDF or share directly via WhatsApp. No account required, no watermark on the downloaded bill.',
      prefill:    { fuelType: 'petrol', pricePerLitre: 94.72 },
      tips: [
        'Current average petrol rate in metro cities: ₹94–₹107/litre',
        'Enter the exact rate from the pump display',
        'Add the pump\'s HPCL/IOCL/BPCL branding in the pump name',
        'Use the vehicle number exactly as on your RC',
      ],
      useCaseH2:  'When Do You Need a Petrol Bill?',
      useCaseText: 'Petrol bills are needed for corporate travel reimbursement, taxi and cab expense documentation, personal vehicle expense claims for income tax, and HRA-related transport declarations. Our petrol bill generator creates a formatted receipt that covers all these use cases with zero technical knowledge required.',
    },
    {
      slug:       'fuel-receipt-generator-india',
      h1:         'Fuel Receipt Generator India – Generate Receipts Instantly',
      title:      'Fuel Receipt Generator India Free – Petrol Diesel CNG Receipts',
      metaDesc:   'Generate fuel receipts online free in India. Petrol, diesel, CNG, and EV receipts with GST. Download PDF instantly. No signup, trusted by thousands.',
      intro:      'A fuel receipt is more than just a piece of paper — it is your proof of expense for tax claims, reimbursements, and business documentation. Our India-specific fuel receipt generator understands the local context: Indian pump names, INR formatting, GST calculation, and vehicle number formats.',
      prefill:    {},
      tips: [
        'Receipts and bills serve the same purpose for reimbursement',
        'Ensure the date matches your travel records',
        'For GST claims, enable the GST toggle and enter your pump\'s GSTIN',
        'Diesel receipts for commercial vehicles may qualify for Input Tax Credit',
      ],
      useCaseH2:  'Fuel Receipt vs Fuel Bill — What\'s the Difference?',
      useCaseText: 'In practice, fuel receipts and fuel bills are used interchangeably for reimbursement and expense documentation in India. A receipt acknowledges payment received; a bill is a request for payment. Our tool generates a document that serves both purposes — it shows the transaction details in a professional invoice format accepted by most corporate and government reimbursement processes.',
    },
    {
      slug:       'fuel-bill-generator-with-gst',
      h1:         'Fuel Bill Generator with GST – Professional GST Fuel Invoice',
      title:      'Fuel Bill Generator with GST India Free – Generate GST Fuel Invoice',
      metaDesc:   'Generate fuel bills with GST online free. Professional GST fuel invoices with CGST/SGST calculation. Download PDF. Perfect for business expense documentation.',
      intro:      'Business fuel expenses often require GST-format documentation — especially for logistics companies, fleet operators, and businesses claiming Input Tax Credit on vehicle expenses. Our GST fuel bill generator includes a GST toggle that adds the 18% tax breakdown to your bill, making it suitable for business accounting and GST filing.',
      prefill:    { gstEnabled: true },
      tips: [
        'Enable the GST toggle for business fuel expense documentation',
        'Add the pump\'s GSTIN in the pump details for ITC claims',
        'Consult your CA — petrol/diesel for personal use is outside GST',
        'Commercial vehicle fuel may qualify for ITC under specific conditions',
      ],
      useCaseH2:  'When Do You Need a GST Fuel Bill?',
      useCaseText: 'GST fuel bills are needed when: (1) your business uses vehicles for commercial purposes and wants to document expenses, (2) you are a logistics/transport company tracking per-vehicle fuel costs, (3) your accounts department requires GST-format documentation for all business expenses, or (4) you need to show tax breakdown for client billing purposes. Always verify GST applicability with your CA for your specific situation.',
    },
    {
      slug:       'diesel-bill-generator-online',
      h1:         'Diesel Bill Generator Online Free – Create Diesel Receipts',
      title:      'Diesel Bill Generator Online Free India – Professional Diesel Receipts',
      metaDesc:   'Generate diesel bills online free in India. Professional diesel receipts with vehicle number, GST option. Instant PDF download. No signup required.',
      intro:      'Diesel is the primary fuel for commercial vehicles, trucks, buses, and agricultural equipment in India. Whether you are a fleet operator, a farmer claiming diesel expenses, or a logistics manager, our diesel bill generator creates professional receipts quickly.',
      prefill:    { fuelType: 'diesel', pricePerLitre: 87.62 },
      tips: [
        'Current average diesel rate: ₹82–₹95/litre across major cities',
        'Commercial vehicle diesel claims often require vehicle registration details',
        'Fleet operators can generate separate bills per vehicle per day',
        'Monthly diesel expense summary: generate a bill for each fill-up',
      ],
      useCaseH2:  'Diesel Bill Use Cases in India',
      useCaseText: 'Diesel bills are essential for: commercial truck and lorry operators documenting per-trip fuel costs, agricultural machinery fuel expense tracking, bus operators maintaining vehicle expense records, construction equipment fuel documentation, and corporate fleet management. Our generator supports all these scenarios with the vehicle number and notes fields.',
    },
    {
      slug:       'cng-bill-generator-online',
      h1:         'CNG Bill Generator Online Free – Create CNG Fuel Receipts',
      title:      'CNG Bill Generator Online Free – CNG Fuel Bill India',
      metaDesc:   'Generate CNG bills online free in India. Professional CNG fuel receipts with quantity and rate. Instant PDF download. No login required.',
      intro:      'CNG (Compressed Natural Gas) is the primary fuel for auto-rickshaws, CNG taxis, and increasingly private cars in cities like Mumbai, Delhi, and Pune. Our CNG bill generator is optimized for CNG vehicles — preset with current CNG rates and the relevant measurement unit.',
      prefill:    { fuelType: 'cng', pricePerLitre: 76.59 },
      tips: [
        'CNG is measured in kg, not litres — our tool labels the field appropriately',
        'Current CNG rates: ₹58–₹85/kg depending on city',
        'Auto-rickshaw drivers can use this for monthly income documentation',
        'CNG taxi operators: use vehicle number field for each cab',
      ],
      useCaseH2:  'Why CNG Operators Need Fuel Bills',
      useCaseText: 'CNG vehicle operators — auto-rickshaw drivers, cab operators, and CNG car owners — increasingly need fuel expense documentation for income tax returns, reimbursement claims, and vehicle expense tracking. Our CNG bill generator supports this with preset CNG rates, relevant fields, and PDF download.',
    },
  ];
  
  export function getFuelPageBySlug(slug) {
    return fuelBillPages.find(p => p.slug === slug) || null;
  }
  export function getAllFuelSlugs() {
    return fuelBillPages.map(p => p.slug);
  }
  
  
  // ════════════════════════════════════════════════════════════════
  // FILE 2: app/[fuelBillSlug]/page.jsx
  // Dynamic route template — save as app/[fuelBillSlug]/page.jsx
  // OR add these slugs to your existing dynamic route
  // ════════════════════════════════════════════════════════════════
  
  
  import { notFound } from 'next/navigation';
  import Link from 'next/link';
  import { Suspense } from 'react';
  import Header from '../../components/Header';
  import Footer from '../../components/Footer';
  import FuelBillGenerator from '../../components/tools/FuelBillGenerator';
  import { getFuelPageBySlug, getAllFuelSlugs } from '../../data/fuel-bill-pages';
  import { SITE_CONFIG } from '../../data/tools';
  
  export async function generateStaticParams() {
    return getAllFuelSlugs().map(slug => ({ fuelBillSlug: slug }));
  }
  
  export async function generateMetadata({ params }) {
    const page = getFuelPageBySlug(params.fuelBillSlug);
    if (!page) return {};
    return {
      title:       `${page.title} | ToolStackHub`,
      description:  page.metaDesc,
      alternates: { canonical: `${SITE_CONFIG.url}/${page.slug}` },
      openGraph: {
        title: page.title, description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        type: 'website', siteName: SITE_CONFIG.name,
        images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
      },
    };
  }
  
  export default function FuelBillVariantPage({ params }) {
    const page = getFuelPageBySlug(params.fuelBillSlug);
    if (!page) notFound();
  
    return (
      <>
        <Header />
        <main className="flex-1">
          <div className="bg-white border-b border-surface-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm text-surface-500">
                  <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                  <li><span className="text-surface-300">/</span></li>
                  <li><Link href="/tools/fuel-bill-generator" className="hover:text-brand-600 text-brand-600">Fuel Bill Generator</Link></li>
                  <li><span className="text-surface-300">/</span></li>
                  <li className="text-surface-800 font-medium truncate">{page.h1}</li>
                </ol>
              </nav>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3">{page.h1}</h1>
              <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['✅ Free','🚫 No Signup','📄 PDF Download','📲 WhatsApp Share'].map(b => (
                  <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>
            </div>
          </div>
  
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
              <FuelBillGenerator prefill={page.prefill || {}} />
            </Suspense>
          </div>
  
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
  
            {page.tips?.length > 0 && (
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Tips for {page.h1}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {page.tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">{i+1}</div>
                      <span className="text-sm text-surface-600 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
  
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-3">{page.useCaseH2}</h2>
              <p className="text-surface-600 leading-relaxed">{page.useCaseText}</p>
            </section>
  
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Fuel Bill Generators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/tools/fuel-bill-generator"
                  className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                  <span className="text-2xl">⛽</span>
                  <div>
                    <div className="font-bold text-white text-sm">Fuel Bill Generator</div>
                    <div className="text-xs text-brand-200">Main tool — all fuel types</div>
                  </div>
                </Link>
                {[
                  { href:'/invoice-generator',  icon:'🧾', label:'Invoice Generator',   desc:'Full business invoices with GST' },
                  { href:'/gst-calculator',     icon:'🧮', label:'GST Calculator',       desc:'Calculate GST on expenses' },
                  { href:'/salary-calculator',  icon:'💰', label:'Salary Calculator',    desc:'Take-home salary calculator' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                    <span className="text-xl">{l.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
  
          </div>
        </main>
        <Footer />
      </>
    );
  }
  