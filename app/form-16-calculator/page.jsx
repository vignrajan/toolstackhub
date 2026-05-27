import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Form16Calculator from '../../components/tools/Form16Calculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Form 16 Tax Calculator India — Old vs New Regime FY 2025-26',
  description: 'Calculate income tax from Form 16 data. Compare old vs new tax regime, see exact taxable income, TDS schedule, and save up to ₹50,000 by choosing the right regime.',
  alternates: { canonical: `${SITE_CONFIG.url}/form-16-calculator` },
  openGraph: {
    title: 'Form 16 Tax Calculator India — Old vs New Regime FY 2025-26',
    description: 'Free Form 16 tax calculator. Enter your salary components and deductions, compare old vs new regime, and find out monthly TDS.',
    url: `${SITE_CONFIG.url}/form-16-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 16 Tax Calculator — Old vs New Regime India 2025-26',
    description: 'Compare old vs new tax regime using your Form 16 salary data. Free, instant, no login.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What is Form 16?',
    a: 'Form 16 is a TDS (Tax Deducted at Source) certificate issued by employers to their employees. It has two parts: Part A shows the TDS deducted and deposited to the government, while Part B shows your salary details, allowances, deductions, and tax computation for the financial year.',
  },
  {
    q: 'Which tax regime is better for me — old or new?',
    a: 'The new tax regime is generally better if you have fewer deductions (no HRA, less 80C investments). The old regime is beneficial if you have substantial deductions: HRA exemption, 80C investments of ₹1.5L, NPS 80CCD of ₹50,000, and health insurance premiums. Use this calculator to compare your exact numbers.',
  },
  {
    q: 'What is the standard deduction in FY 2025-26?',
    a: 'Under the new tax regime, the standard deduction is ₹75,000. Under the old tax regime, it is ₹50,000. The standard deduction is automatically available to all salaried employees and pensioners — no proof required.',
  },
  {
    q: 'What is Section 87A rebate?',
    a: 'Under the new tax regime, if your taxable income is up to ₹7,00,000, you get a full rebate under Section 87A — meaning zero tax. Under the old regime, the rebate applies up to ₹5,00,000 taxable income (max rebate ₹12,500).',
  },
  {
    q: 'How is HRA exemption calculated?',
    a: 'HRA exemption under Section 10(13A) is the minimum of: (1) Actual HRA received, (2) Rent paid minus 10% of basic salary, (3) 50% of basic salary for metro cities (Delhi, Mumbai, Chennai, Kolkata) or 40% for non-metro cities.',
  },
  {
    q: 'Can I switch between old and new tax regime?',
    a: 'Salaried employees can switch between old and new tax regime every year when filing their ITR. However, once you inform your employer of your choice, TDS will be deducted accordingly. If you have business income, switching back to the old regime has restrictions.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Form 16 Tax Calculator India',
      url: `${SITE_CONFIG.url}/form-16-calculator`,
      description: 'Free Form 16 tax calculator for FY 2025-26. Compare old vs new tax regime, compute HRA exemption, Chapter VI-A deductions, and monthly TDS.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/tools/finance` },
        { '@type': 'ListItem', position: 3, name: 'Form 16 Tax Calculator', item: `${SITE_CONFIG.url}/form-16-calculator` },
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

export default function Form16CalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/finance" className="hover:text-brand-600 transition-colors">Finance Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Form 16 Tax Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Form 16 Tax Calculator — Old vs New Regime (FY 2025‑26)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Enter your Form 16 salary components to instantly compare old and new tax regimes.
              See your exact taxable income, monthly TDS amount, and which regime saves you more money.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ FY 2025-26 (AY 2026-27)', '🔒 100% Private', '⚡ Instant', '📊 Old vs New Regime', '🧾 HRA Exemption', '📋 Chapter VI-A Deductions'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <Form16Calculator />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How to Use This Calculator</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Enter Income Details', desc: 'Add your basic salary, HRA, LTA, special allowances, and bonus from your Form 16 Part B.' },
                { step: '2', title: 'Add Deductions', desc: 'Enter your 80C investments, health insurance premiums, NPS contributions, and professional tax paid.' },
                { step: '3', title: 'Compare Regimes', desc: 'See your total tax liability under both regimes side by side, and get a recommendation for the best option.' },
              ].map(s => (
                <div key={s.step} className="p-5 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm mb-3">{s.step}</div>
                  <div className="font-semibold text-surface-900 mb-1">{s.title}</div>
                  <div className="text-sm text-surface-500">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Tax Slabs — FY 2025‑26</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-surface-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-200">
                  <p className="text-sm font-bold text-emerald-800">New Tax Regime (Default)</p>
                  <p className="text-xs text-emerald-600">Standard deduction: ₹75,000 | 87A rebate up to ₹7L</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[['Up to ₹3,00,000','Nil'],['₹3L–₹7L','5%'],['₹7L–₹10L','10%'],['₹10L–₹12L','15%'],['₹12L–₹15L','20%'],['Above ₹15L','30%']].map(([r,t]) => (
                      <tr key={r} className="border-b border-surface-100 last:border-0">
                        <td className="px-4 py-2 text-surface-600">{r}</td>
                        <td className="px-4 py-2 font-semibold text-surface-900 text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-surface-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-blue-50 border-b border-blue-200">
                  <p className="text-sm font-bold text-blue-800">Old Tax Regime</p>
                  <p className="text-xs text-blue-600">Standard deduction: ₹50,000 | 87A rebate up to ₹5L</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[['Up to ₹2,50,000','Nil'],['₹2.5L–₹5L','5%'],['₹5L–₹10L','20%'],['Above ₹10L','30%']].map(([r,t]) => (
                      <tr key={r} className="border-b border-surface-100 last:border-0">
                        <td className="px-4 py-2 text-surface-600">{r}</td>
                        <td className="px-4 py-2 font-semibold text-surface-900 text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
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
          </section>

          <RelatedToolsCluster currentSlug="form-16-calculator" />
        </div>

      </main>
      <Footer />
    </>
  );
}
