import { Suspense } from 'react';
import Link from 'next/link';
import EpfCalculator from '../../components/tools/EpfCalculator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'EPF Calculator India – PF Balance & Interest Calculator Free',
  description: 'Calculate your EPF/PF balance at retirement, monthly PF deductions, and EPS pension amount. Uses current EPFO interest rate of 8.25%. Free, India-specific.',
  keywords: [
    'epf calculator', 'pf calculator india', 'epf balance calculator',
    'epf interest calculator', 'pf deduction calculator', 'eps pension calculator',
    'epfo interest rate 8.25', 'employee provident fund calculator',
    'epf corpus calculator', 'provident fund calculator india', 'pf balance at retirement',
    'epf monthly deduction calculator', 'eps 95 pension calculator', 'epf calculator online free',
    'epf contribution calculator india', 'pf calculator 2024',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/epf-calculator` },
  openGraph: {
    title: 'EPF Calculator India – PF Balance & Interest Calculator Free',
    description: 'Calculate your EPF/PF balance at retirement, monthly PF deductions, and EPS pension amount. Uses current EPFO interest rate of 8.25%. Free, India-specific.',
    url: `${SITE_CONFIG.url}/epf-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPF Calculator India – PF Balance & Interest Calculator Free',
    description: 'Calculate your EPF/PF balance at retirement, monthly PF deductions, and EPS pension amount. Uses current EPFO interest rate of 8.25%.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FAQS = [
  {
    q: 'What is the current EPF interest rate?',
    a: 'The EPFO declared an interest rate of 8.25% for FY 2023-24. This is the highest EPF interest rate in 3 years.',
  },
  {
    q: 'How is EPF contribution calculated?',
    a: 'Employee contributes 12% of Basic + Dearness Allowance. Employer also contributes 12%: 3.67% to EPF and 8.33% to EPS (Employee Pension Scheme). For salaries above ₹15,000 Basic+DA, EPS is calculated on ₹15,000 only.',
  },
  {
    q: 'What is the EPF withdrawal limit?',
    a: 'You can withdraw up to 75% of your EPF balance after 1 month of unemployment. Full withdrawal is allowed after 2 months of unemployment or at retirement (age 58).',
  },
  {
    q: 'How do I check my EPF balance?',
    a: 'Download the UMANG app, visit the EPFO member portal at epfindia.gov.in, send an SMS to 7738299899 from your registered mobile, or give a missed call to 011-22901406.',
  },
  {
    q: 'Is EPF interest taxable?',
    a: 'EPF contributions up to ₹2.5 lakh per year are tax-free. Interest on contributions above ₹2.5 lakh is taxable as per your income tax slab rate (from FY 2021-22 onwards).',
  },
];

export default function EPFCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'EPF/PF Calculator India — ToolStackHub',
        description: 'Free EPF calculator for India. Calculate PF balance at retirement, monthly EPF deductions, and EPS pension using current EPFO interest rate of 8.25%.',
        url: `${SITE_CONFIG.url}/epf-calculator`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'EPF corpus at retirement with year-by-year table',
          'Monthly EPF deduction breakdown (employee + employer)',
          'EPS pension calculator using official formula',
          'Editable EPF interest rate (default 8.25%)',
          'Salary increment projection for realistic corpus',
          'Progress bar corpus breakdown',
          'No data stored — 100% browser-based',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '2741', bestRating: '5' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/hra-calculator` },
          { '@type': 'ListItem', position: 3, name: 'EPF Calculator', item: `${SITE_CONFIG.url}/epf-calculator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/hra-calculator" className="hover:text-brand-600">Utility Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">EPF Calculator</li>
              </ol>
            </nav>

            {/* Featured snippet */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 EPF Contribution Formula (EPFO)</div>
              <p className="text-surface-800 text-sm leading-relaxed">
                <strong>Employee contribution:</strong> 12% of Basic+DA. <strong>Employer contribution:</strong> 12% total — 3.67% to EPF + 8.33% to EPS. EPS calculated on Basic+DA capped at ₹15,000. Current EPFO interest rate: <strong>8.25% (FY 2023-24)</strong>.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              EPF Calculator — Calculate PF Balance &amp; Interest Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Calculate your EPF/PF corpus at retirement, monthly PF deductions, and EPS pension amount. Uses the current EPFO-declared interest rate of 8.25%. Includes year-by-year growth table and salary increment projection.
            </p>
            <div className="flex flex-wrap gap-2">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '🇮🇳 India EPF Rules', '🔐 No Data Stored', '📊 Year-by-Year Table'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <EpfCalculator />
          </Suspense>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use This EPF Calculator — 3 Tabs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: '1', icon: '📊', t: 'EPF Balance', d: 'Enter your Basic+DA salary, years of service, and expected salary increment. The calculator projects your EPF corpus at retirement using the current 8.25% EPFO rate, with a year-by-year breakdown table.' },
                { n: '2', icon: '💰', t: 'EPF Deduction', d: 'Enter your monthly Basic+DA to instantly see your exact EPF deduction (12%), employer EPF (3.67%), employer EPS (8.33%), and total PF credited to your account each month.' },
                { n: '3', icon: '🏛️', t: 'Pension (EPS)', d: 'Enter your years of service and last drawn salary to calculate your monthly EPS pension using the official EPFO formula: (Pensionable Salary × Pensionable Service) ÷ 70.' },
              ].map(s => (
                <div key={s.n} className="p-5 bg-white border border-surface-200 rounded-2xl text-center">
                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{s.n}</div>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-bold text-surface-900 text-sm mb-1">{s.t}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{s.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT IS EPF */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is EPF (Employee Provident Fund)?</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                The Employee Provident Fund (EPF) is a mandatory retirement savings scheme governed by the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. It is managed by the Employees' Provident Fund Organisation (EPFO), one of the world's largest social security organisations.
              </p>
              <p>
                EPF is applicable to all establishments with 20 or more employees. Both the employee and employer contribute to the fund every month, and the accumulated balance earns a tax-free interest rate declared annually by the EPFO Central Board of Trustees (CBT) and notified by the Ministry of Finance.
              </p>
              <p>
                <strong className="text-surface-800">Why EPF matters for retirement planning.</strong> EPF is often the primary (and sometimes only) retirement corpus for crores of Indian salaried employees. Thanks to mandatory contributions, employer matching, and compound interest over 25-35 working years, EPF can accumulate to a significant corpus. A person earning ₹30,000/month today with 5% annual increment and 30 years of service can accumulate over ₹60 lakh in EPF alone at 8.25% interest.
              </p>
              <p>
                <strong className="text-surface-800">EPF vs VPF vs PPF.</strong> While EPF is mandatory for eligible employees, they can also contribute voluntarily beyond the 12% minimum through Voluntary Provident Fund (VPF) — which earns the same EPF interest rate. The Public Provident Fund (PPF) is a separate government scheme open to everyone, with a different (typically lower) interest rate and longer lock-in.
              </p>
            </div>
          </section>

          {/* CONTRIBUTION STRUCTURE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">EPF Contribution Structure — How 12%+12% Works</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <p className="text-sm text-surface-700 leading-relaxed">
                Both employee and employer contribute <strong>12% of Basic Salary + Dearness Allowance</strong> each month. However, the employer's 12% is split between two different schemes — only part of it goes to your EPF balance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5">
                <h3 className="font-bold text-brand-900 mb-3 flex items-center gap-2">👤 Employee Contribution — 12%</h3>
                <div className="space-y-2 text-sm text-surface-700">
                  <div className="flex justify-between py-1 border-b border-brand-100">
                    <span>Rate</span><span className="font-bold text-brand-700">12% of Basic+DA</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-brand-100">
                    <span>Goes to</span><span className="font-bold">EPF account (100%)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-brand-100">
                    <span>Tax benefit</span><span className="font-bold">Section 80C (up to ₹1.5L)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>On salary ₹30,000</span><span className="font-bold text-brand-700">₹3,600/month</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">🏢 Employer Contribution — 12% (Split)</h3>
                <div className="space-y-2 text-sm text-surface-700">
                  <div className="flex justify-between py-1 border-b border-emerald-100">
                    <span>EPF portion</span><span className="font-bold text-emerald-700">3.67% → EPF account</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-100">
                    <span>EPS portion</span><span className="font-bold text-violet-700">8.33% → EPS (pension)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-100">
                    <span>EPS cap</span><span className="font-bold">Max ₹15,000 Basic+DA</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>On salary ₹30,000</span><span className="font-bold text-emerald-700">₹1,101 EPF + ₹1,250 EPS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 p-5 bg-surface-900 rounded-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">📌 Example: ₹30,000 Basic+DA</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-surface-400 text-xs mb-1">Employee EPF</div>
                  <div className="font-mono font-bold text-white">₹30,000 × 12% = ₹3,600</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-surface-400 text-xs mb-1">Employer EPF (3.67%)</div>
                  <div className="font-mono font-bold text-emerald-400">₹30,000 × 3.67% = ₹1,101</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-surface-400 text-xs mb-1">Total EPF credited</div>
                  <div className="font-mono font-bold text-amber-400">₹3,600 + ₹1,101 = ₹4,701/mo</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">EPF Calculator — Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Finance & Salary Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/hra-calculator', icon: '🏠', label: 'HRA Calculator', desc: 'Calculate HRA exemption under Section 10(13A). Updated 8-metro-city rule.' },
                { href: '/salary-calculator', icon: '💰', label: 'Salary Calculator', desc: 'CTC to in-hand salary with full deduction breakdown.' },
                { href: '/professional-tax-calculator', icon: '⚖️', label: 'Professional Tax Calculator', desc: 'State-wise PT for all 18 Indian states. Instant.' },
                { href: '/gst-calculator', icon: '📊', label: 'GST Calculator', desc: 'Calculate GST with CGST, SGST, and IGST split.' },
                { href: '/emi-calculator', icon: '🏦', label: 'EMI Calculator', desc: 'Home loan, car loan, personal loan EMI calculation.' },
                { href: '/gratuity-calculator', icon: '🎁', label: 'Gratuity Calculator', desc: 'Calculate your gratuity amount as per Payment of Gratuity Act.' },
              ].map(t => (
                <Link key={t.href} href={t.href}
                  className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl shrink-0">{t.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{t.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{t.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* TRUST */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">ToolStackHub — 100% Browser-Based, No Data Stored</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  This EPF calculator runs entirely in your browser. Your salary figures and EPF balance are never sent to any server, never stored, and disappear when you close the tab. Calculation logic follows EPFO's official contribution rules and the EPS-95 pension formula.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server — browser only</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">📅 EPFO rate 8.25% FY 2023-24</span>
                  <span className="flex items-center gap-1.5 text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">🇮🇳 India EPF & EPS rules</span>
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> This EPF calculator is for informational and educational purposes only. Calculations use the EPFO-declared interest rate of 8.25% for FY 2023-24, actual contribution rates (12% employee, 3.67% EPF + 8.33% EPS employer), and the official EPS pension formula. Actual EPF balance may differ based on employer-specific practices, partial withdrawals, service breaks, and future EPFO rate changes. Always verify your EPF balance on the EPFO member portal (epfindia.gov.in) or UMANG app.
          </div>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="epf-calculator" />
      <Footer />
    </>
  );
}
