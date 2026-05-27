import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Free Finance & Tax Tools for India — EMI, GST, Salary, Tax Calculator',
  description: 'Free India-specific finance tools: EMI calculator, GST calculator, salary calculator, Form 16 tax calculator, EPF calculator, HRA calculator, invoice generator. No signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/finance` },
  openGraph: {
    title: 'Free Finance & Tax Tools for India — EMI, GST, Salary, Tax',
    description: 'All free India finance tools in one place: EMI, GST, salary, tax regime comparison, EPF, HRA, PPF, SIP, invoice generator.',
    url: `${SITE_CONFIG.url}/tools/finance`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Finance & Tax Tools for India',
    description: 'EMI, GST, salary, tax, EPF, HRA, PPF calculators — all free, no login.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FINANCE_TOOLS = [
  { slug: 'salary-calculator',         name: 'Salary Calculator',            icon: '💰', desc: 'CTC to take-home, old vs new tax regime, gratuity. FY 2025-26.' },
  { slug: 'form-16-calculator',         name: 'Form 16 Tax Calculator',       icon: '🧾', desc: 'Compute tax from Form 16 data. Old vs new regime comparison.' },
  { slug: 'gst-calculator',            name: 'GST Calculator',               icon: '🧮', desc: 'Add or remove GST. CGST/SGST/IGST breakdown for all rates.' },
  { slug: 'emi-calculator',            name: 'EMI Calculator',               icon: '🏦', desc: 'Monthly EMI for home, car, or personal loan with amortization schedule.' },
  { slug: 'home-loan-emi-calculator',  name: 'Home Loan EMI Calculator',     icon: '🏠', desc: 'Calculate home loan EMI. Compare SBI, HDFC, ICICI interest rates.' },
  { slug: 'car-loan-emi-calculator',   name: 'Car Loan EMI Calculator',      icon: '🚗', desc: 'Car and two-wheeler loan EMI. See total interest and payment breakdown.' },
  { slug: 'sip-calculator',            name: 'SIP Calculator',               icon: '📈', desc: 'Mutual fund SIP returns and maturity value with step-up and lumpsum.' },
  { slug: 'ppf-calculator',            name: 'PPF Calculator',               icon: '📊', desc: 'PPF maturity value at 7.1% with year-by-year interest breakdown.' },
  { slug: 'epf-calculator',            name: 'EPF Calculator',               icon: '🏗️', desc: 'EPF balance, monthly deduction breakdown, and EPS pension estimate.' },
  { slug: 'hra-calculator',            name: 'HRA Exemption Calculator',     icon: '🏡', desc: 'HRA exemption under Section 10(13A) for FY 2026-27.' },
  { slug: 'professional-tax-calculator', name: 'Professional Tax Calculator', icon: '⚖️', desc: 'Professional tax slabs for all 18 PT-levying states in India.' },
  { slug: 'salary-slip-generator',     name: 'Salary Slip Generator',        icon: '🖨️', desc: 'Generate printable salary slips with earnings, deductions, EPF, TDS.' },
  { slug: 'invoice-generator',         name: 'Invoice Generator',            icon: '📄', desc: 'Professional PDF invoices with GST support. No signup, no watermark.' },
  { slug: 'gst-number-validator',      name: 'GST Number Validator',         icon: '✅', desc: 'Validate GSTIN and decode state, PAN, entity type, and check digit.' },
  { slug: 'pan-validator',             name: 'PAN Card Validator',           icon: '🪪', desc: 'Validate PAN format and identify taxpayer type (individual, company, etc.).' },
  { slug: 'ifsc-finder',               name: 'IFSC Code Finder',             icon: '🔍', desc: 'Look up any bank branch IFSC code with address and MICR details.' },
  { slug: 'fuel-bill-generator',       name: 'Fuel Bill Generator',          icon: '⛽', desc: 'Generate petrol, diesel, CNG bills for reimbursement with GST.' },
  { slug: 'number-to-words',           name: 'Number to Words',              icon: '🔤', desc: 'Convert rupee amounts to words for cheques and GST invoices.' },
];

const faqs = [
  {
    q: 'Are all finance tools free?',
    a: 'Yes, every tool on ToolStackHub is completely free. No signup, no subscription, no hidden charges. All calculations run entirely in your browser.',
  },
  {
    q: 'Is my financial data safe?',
    a: 'Absolutely. None of your salary, tax, or financial figures are ever sent to any server. Everything is computed locally in your browser and disappears when you close the tab.',
  },
  {
    q: 'Which tax regime should I choose in 2025-26?',
    a: 'Use the Salary Calculator or Form 16 Tax Calculator to compare both regimes with your exact figures. The new regime generally benefits those with fewer deductions; the old regime suits those with substantial 80C investments, HRA, and home loan deductions.',
  },
  {
    q: 'Are the tax calculations up to date for FY 2025-26?',
    a: 'Yes. All tools reflect Budget 2025 changes: new regime standard deduction of ₹75,000, Section 87A rebate limit of ₹7 lakh, and the updated new regime tax slabs announced for FY 2025-26.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Finance & Tax Tools for India',
      description: 'Free browser-based India finance tools: EMI calculator, GST calculator, salary calculator, Form 16 tax calculator, EPF calculator, HRA calculator, and more.',
      url: `${SITE_CONFIG.url}/tools/finance`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/tools/finance` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function FinanceToolsCategoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Finance Tools</li>
              </ol>
            </nav>
            <div className="flex items-start gap-4">
              <div className="text-4xl p-3 bg-green-100 rounded-2xl">💰</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Finance & Tax Tools for India
                </h1>
                <p className="text-surface-500 text-lg leading-relaxed mt-3 max-w-3xl">
                  {FINANCE_TOOLS.length} free tools for salary calculation, tax planning, loan EMI, GST, EPF, and more.
                  Built for Indian taxpayers and professionals. No signup — your data never leaves your device.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['✅ 100% Free', '🔒 Browser-Only', '🇮🇳 India-Specific', '📊 FY 2025-26 Updated', '🧮 18 Finance Tools'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FINANCE_TOOLS.map(tool => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group p-5 bg-white border border-surface-200 rounded-2xl hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h2 className="font-semibold text-surface-900 group-hover:text-green-700 transition-colors text-sm">
                      {tool.name}
                    </h2>
                    <p className="text-xs text-surface-500 mt-1 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* About section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">Why Use ToolStackHub Finance Tools?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-surface-600">
              <div>
                <p className="font-semibold text-surface-800 mb-1">🇮🇳 Built for India</p>
                <p>All tools use Indian tax slabs, GST rates, state-specific professional tax, and IFSC/PAN/GSTIN formats — updated for FY 2025-26.</p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">🔒 100% Private</p>
                <p>Your salary, tax data, and financial figures never leave your device. No accounts, no tracking, no data collection.</p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">⚡ Instant Results</p>
                <p>All calculations run in your browser in real-time. No waiting, no loading screens, no server round-trips.</p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">📊 Comparison Views</p>
                <p>Old vs new tax regime, amortization schedules, year-by-year breakdowns — see the full picture, not just a number.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-surface-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
