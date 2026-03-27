import Link from 'next/link';
import { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FuelBillGenerator from '../../components/tools/FuelBillGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Fuel Bill Generator Online Free – Petrol Diesel Bill India 2026',
  description: 'Generate professional fuel bills online free. Petrol, diesel, CNG bills with GST. Instant PDF download, WhatsApp share. Perfect for reimbursement & expense claims. No signup.',
  keywords: [
    'fuel bill generator online free', 'petrol bill generator india',
    'fuel bill for reimbursement', 'generate fuel receipt online',
    'petrol bill generator with gst', 'diesel bill generator free',
    'fuel bill maker india', 'petrol pump bill generator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/fuel-bill-generator` },
  openGraph: {
    title: 'Free Fuel Bill Generator India – Petrol, Diesel, CNG Bills',
    description: 'Generate professional fuel bills with GST, PDF download & WhatsApp sharing. Free, no signup.',
    url: `${SITE_CONFIG.url}/fuel-bill-generator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: 'Is a fuel bill generated online legally valid for reimbursement?',
    a: 'For corporate reimbursements and travel expense claims, fuel bills must show the pump name, location, date, fuel type, quantity, rate per litre, and total amount. Our generator creates bills with all these mandatory fields. However, for GST Input Tax Credit (ITC) claims, the bill must be an original tax invoice issued by a GST-registered pump with their GSTIN. Always check your employer\'s reimbursement policy — most companies accept self-declared fuel expense statements for smaller amounts.',
  },
  {
    q: 'Can I use this fuel bill for HRA or travel reimbursement?',
    a: 'Yes — our fuel bill generator is widely used for corporate travel reimbursement claims, HRA-related transport declarations, and business expense documentation. Fill in your actual fuel purchase details (pump name, date, quantity, and rate) and download the PDF. Most HR and accounts teams accept these for claims up to ₹5,000–₹10,000 without requiring original receipts from the pump.',
  },
  {
    q: 'Does the fuel bill include GST?',
    a: 'Yes — enable the GST toggle to add 18% GST to your bill. This is particularly important for businesses claiming Input Tax Credit on fuel expenses. The bill will show subtotal, GST amount (18%), and the total payable. Note: Petrol and diesel are currently outside the GST framework for end consumers in India — the 18% GST option in our tool is for service-related fuel charges (e.g., logistics, delivery services) that may attract GST under specific classifications. Always verify with your CA.',
  },
  {
    q: 'Is the fuel bill generator completely free?',
    a: 'Yes — completely free. No signup, no subscription, no watermark on downloaded bills. You can generate unlimited fuel bills and download them as PDF at no cost. The tool runs entirely in your browser — your bill data is never uploaded to any server.',
  },
  {
    q: 'Can I download the fuel bill as a PDF?',
    a: 'Yes — click the "Download / Print" button and your browser\'s print dialog opens. Select "Save as PDF" as the destination and click Save. The PDF is cleanly formatted as a professional fuel invoice with all your details, company header, and structured bill layout. No third-party PDF software required.',
  },
  {
    q: 'How do I share the fuel bill on WhatsApp?',
    a: 'After filling in your bill details, click "Share on WhatsApp." This opens WhatsApp Web or your WhatsApp app with a pre-formatted message containing your bill summary and a shareable link. Anyone who opens the link sees your complete bill and can download their own PDF copy. Perfect for sharing fuel expense details with your accounts team.',
  },
  {
    q: 'What fuel types does the generator support?',
    a: 'Our fuel bill generator supports Petrol, Diesel, CNG (Compressed Natural Gas), and EV charging. Each fuel type has auto-populated current average rates which you can edit to match the actual price you paid. The rate updates in the bill instantly.',
  },
  {
    q: 'Can I use this for two-wheelers and commercial vehicles?',
    a: 'Yes — the vehicle number field accepts any format (two-wheelers, cars, trucks, buses). The bill is generic enough for any vehicle type. For commercial vehicle operators, the GST option and GSTIN field make the bill suitable for business expense documentation.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Fuel Bill Generator India',
      description: 'Free online fuel bill generator for India. Create professional petrol, diesel, and CNG bills with GST. Instant PDF download and WhatsApp sharing.',
      url: `${SITE_CONFIG.url}/fuel-bill-generator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Petrol, diesel, CNG, and EV fuel bills',
        'GST calculation (18%)',
        'PDF download via browser print',
        'WhatsApp bill sharing',
        'Auto-generated bill numbers',
        'Vehicle number field',
        'No signup required',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Fuel Bill Generator', item: `${SITE_CONFIG.url}/fuel-bill-generator` },
      ],
    },
  ],
};

// URL param prefill (for shared bills)
function getPrefillFromURL(searchParams) {
  return {
    pumpName:      searchParams?.pumpName      || '',
    location:      searchParams?.location      || '',
    billNo:        searchParams?.billNo        || '',
    date:          searchParams?.date          || '',
    vehicleNo:     searchParams?.vehicleNo     || '',
    fuelType:      searchParams?.fuelType      || 'petrol',
    qty:           searchParams?.qty           || '',
    pricePerLitre: searchParams?.pricePerLitre || '',
    gstEnabled:    searchParams?.gstEnabled === 'true',
    notes:         searchParams?.notes         || '',
  };
}

export default function FuelBillGeneratorPage({ searchParams }) {
  const prefill = getPrefillFromURL(searchParams || new URLSearchParams());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Fuel Bill Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Fuel Bill Generator Online – Petrol & Diesel Bill India 2026
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate professional fuel bills for petrol, diesel, and CNG instantly. Perfect for
              corporate reimbursements, travel expense claims, and business documentation.
              Download PDF, share on WhatsApp. Free, no signup, no watermark.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free','🚫 No Signup','📄 PDF Download','📲 WhatsApp Share','🧾 GST Support','⛽ Petrol/Diesel/CNG/EV'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <FuelBillGenerator prefill={prefill} />
          </Suspense>
        </div>

        {/* ── SEO Content ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is a fuel bill generator */}
          <section aria-labelledby="what-is">
            <h2 id="what-is" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is a Fuel Bill Generator?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong className="text-surface-800">fuel bill generator</strong> is an online tool
                that creates professional fuel expense receipts and invoices for petrol, diesel, CNG,
                and EV charging. It formats your fuel purchase details — pump name, date, quantity,
                rate per litre, and total — into a structured invoice-style document ready for
                reimbursement claims, expense reports, and business documentation.
              </p>
              <p>
                In India, fuel expenses are one of the most common categories in corporate
                reimbursement. Employees who use personal vehicles for official work — sales
                teams, delivery personnel, field service engineers, consultants — regularly need
                to document fuel costs. Our free fuel bill generator makes this process instant:
                fill in the details, download the PDF, and attach it to your expense claim.
              </p>
              <p>
                For business owners and self-employed professionals, fuel bills are also important
                for income tax calculations. Vehicle-related expenses (including fuel) can be claimed
                as business expenses under Section 30–37 of the Income Tax Act when the vehicle is
                used for business purposes. Use our <Link href="/gst-calculator" className="text-brand-700 hover:underline font-medium">GST calculator</Link>{' '}
                to verify tax amounts, and the <Link href="/invoice-generator" className="text-brand-700 hover:underline font-medium">invoice generator</Link>{' '}
                for other business billing needs.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="how-to">
            <h2 id="how-to" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Generate a Fuel Bill Online — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🏪', title: 'Enter Pump Details',   desc: 'Type the petrol pump name, location, and GSTIN (optional). These appear in the header of your bill.' },
                { step: '02', icon: '⛽', title: 'Add Fuel Details',     desc: 'Select fuel type (Petrol/Diesel/CNG/EV), enter quantity in litres and the rate per litre you paid.' },
                { step: '03', icon: '🧾', title: 'Configure Options',    desc: 'Add vehicle number, toggle GST if needed, enter notes like claim reference numbers.' },
                { step: '04', icon: '📄', title: 'Download & Share',     desc: 'Click Download PDF to save the bill. Use WhatsApp Share to send it directly to your accounts team.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section aria-labelledby="use-cases">
            <h2 id="use-cases" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Who Uses a Fuel Bill Generator? — 6 Real Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '👔', title: 'Corporate Employees',         desc: 'Sales teams, field engineers, and consultants who use personal vehicles for official work claim monthly fuel reimbursement. Our generator creates a professional bill for each trip or month-end claim.' },
                { icon: '🚗', title: 'Self-Employed Professionals', desc: 'Freelancers, consultants, and sole proprietors documenting vehicle expenses for income tax returns. Fuel bills support vehicle expense deductions under the Income Tax Act.' },
                { icon: '🏭', title: 'Small Business Owners',       desc: 'Business owners who need GST-format fuel bills for accounting and tax filing. Our generator includes GSTIN fields and optional GST calculation.' },
                { icon: '🚚', title: 'Logistics & Delivery',        desc: 'Fleet operators and delivery business owners tracking per-vehicle fuel costs. Generate bills for each vehicle separately using the vehicle number field.' },
                { icon: '✈️', title: 'Travel & Tour Operators',     desc: 'Tour operators documenting fuel costs per tour for client billing and internal cost tracking. Bills can be customized with tour-specific notes.' },
                { icon: '🏢', title: 'Government Employees',        desc: 'Government servants claiming TA/DA fuel allowance. The structured bill format with date, vehicle number, and pump details meets most departmental requirements.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <p className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current fuel rates */}
          <section aria-labelledby="fuel-rates">
            <h2 id="fuel-rates" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Current Fuel Prices in India (March 2026 — Metro Cities)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              These rates are pre-filled in the calculator as defaults. Edit them to match the exact rate at your pump — prices vary by city, state taxes, and pump brand.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">City</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">⛽ Petrol (₹/L)</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">🛢️ Diesel (₹/L)</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">💨 CNG (₹/kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: 'Mumbai',    petrol: '94.72', diesel: '82.55', cng: '76.59' },
                    { city: 'Delhi',     petrol: '94.72', diesel: '87.62', cng: '74.09' },
                    { city: 'Bangalore', petrol: '99.86', diesel: '85.93', cng: '66.50' },
                    { city: 'Chennai',   petrol: '100.65',diesel: '92.24', cng: '—'     },
                    { city: 'Hyderabad', petrol: '107.41',diesel: '95.65', cng: '—'     },
                    { city: 'Kolkata',   petrol: '103.94',diesel: '90.76', cng: '58.00' },
                  ].map((r, i) => (
                    <tr key={r.city} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.city}</td>
                      <td className="px-4 py-3 text-right text-emerald-700 font-medium">₹{r.petrol}</td>
                      <td className="px-4 py-3 text-right text-blue-700 font-medium">₹{r.diesel}</td>
                      <td className="px-4 py-3 text-right text-amber-700 font-medium">{r.cng === '—' ? '—' : `₹${r.cng}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Indicative rates as of March 2026. Actual rates vary. Verify with your pump before filing claims.</p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Fuel Bill Generator
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More Fuel Bill Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/fuel-bill-generator-for-reimbursement', label: 'Fuel Bill Generator for Reimbursement'   },
                { href: '/petrol-bill-generator-online-free',     label: 'Petrol Bill Generator Online Free'       },
                { href: '/fuel-receipt-generator-india',          label: 'Fuel Receipt Generator India'            },
                { href: '/fuel-bill-generator-with-gst',          label: 'Fuel Bill Generator with GST'            },
                { href: '/diesel-bill-generator-online',          label: 'Diesel Bill Generator Online'            },
                { href: '/cng-bill-generator-online',             label: 'CNG Bill Generator Online'               },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">⛽</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/invoice-generator',            icon: '🧾', label: 'Invoice Generator',          desc: 'Create GST invoices for your business' },
                { href: '/gst-calculator',               icon: '🧮', label: 'GST Calculator',             desc: 'Calculate GST on fuel and other expenses' },
                { href: '/salary-calculator',            icon: '💰', label: 'Salary & Gratuity Calculator',desc: 'Calculate take-home pay and gratuity' },
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',       desc: 'Calculate expense percentages and ratios' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
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