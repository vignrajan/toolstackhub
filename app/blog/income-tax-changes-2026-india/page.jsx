import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Income Tax Changes 2026 India — New Rules, Slabs & What Changes From April 1',
  description: 'Complete guide to income tax changes in India from April 1, 2026. New Tax Act 2025 explained, FY 2026-27 slabs, old vs new regime, ITR deadlines, and salary examples. Updated March 2026.',
  keywords: [
    'income tax changes 2026 india', 'new tax rules april 2026',
    'tax slab fy 2026-27', 'new vs old tax regime 2026',
    'salary tax calculation 2026 india', 'income tax act 2025',
    'itr filing deadline 2026', 'new tax regime 2026',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/income-tax-changes-2026-india` },
  openGraph: {
    title: 'Income Tax Changes 2026 India — New Rules, Slabs & What Changes From April 1',
    description: 'Everything changing in Indian income tax from April 2026 — new tax act, FY 2026-27 slabs, filing deadlines, and salary impact explained.',
    url: `${SITE_CONFIG.url}/blog/income-tax-changes-2026-india`,
    type: 'article',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const TOC = [
  { id: 'tldr',            label: "What's Changing — Quick Summary"              },
  { id: 'new-tax-act',     label: 'New Income Tax Act 2025 — What It Means'      },
  { id: 'what-changed',    label: 'All Changes from April 1, 2026'               },
  { id: 'slabs',           label: 'Tax Slabs FY 2026-27 — Old vs New'            },
  { id: 'regime',          label: 'Which Tax Regime is Better for You?'          },
  { id: 'salary-examples', label: 'How These Changes Affect Your Salary'         },
  { id: 'tax-saving',      label: 'Smart Tax Saving Tips for 2026'               },
  { id: 'mistakes',        label: 'Common Mistakes to Avoid'                     },
  { id: 'itr-deadlines',   label: 'ITR Filing Deadlines 2026'                   },
  { id: 'faq',             label: 'Frequently Asked Questions'                   },
];

export default function IncomeTaxChanges2026Page() {
  const publishDate = '2026-03-30';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Income Tax Changes 2026 India — New Rules, Slabs & What Changes From April 1',
        description: 'Complete guide to income tax changes in India from April 1, 2026.',
        url: `${SITE_CONFIG.url}/blog/income-tax-changes-2026-india`,
        datePublished: publishDate,
        dateModified:  publishDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: {
          '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url,
          logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/income-tax-changes-2026-india` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Did income tax slabs change in FY 2026-27?', acceptedAnswer: { '@type': 'Answer', text: 'No. As per Budget 2026, the Finance Minister kept income tax slabs unchanged for FY 2026-27. The same slabs from FY 2025-26 continue — meaning income up to ₹12 lakh remains effectively tax-free under the new regime (₹12.75 lakh for salaried employees with standard deduction).' } },
          { '@type': 'Question', name: 'What is the new Income Tax Act 2025?', acceptedAnswer: { '@type': 'Answer', text: 'The Income Tax Act 2025 is a completely rewritten version of the Income Tax Act 1961. It reduces the number of sections from 500+ to around 300+, uses simpler language, and eliminates redundant provisions. It became effective from April 1, 2026 (FY 2026-27). The tax rates, slabs, and core rules remain largely unchanged.' } },
          { '@type': 'Question', name: 'Is income up to ₹12 lakh tax free in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under the new tax regime (which is the default), individuals with taxable income up to ₹12 lakh pay zero tax due to the Section 87A rebate of ₹60,000. For salaried employees, the ₹75,000 standard deduction means income up to ₹12.75 lakh is effectively tax-free. This rule continues in FY 2026-27 unchanged.' } },
          { '@type': 'Question', name: 'What is the ITR filing last date for 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For FY 2025-26 (AY 2026-27): ITR-1 and ITR-2 deadline is July 31, 2026. ITR-3 and ITR-4 deadline has been extended to August 31, 2026. Business taxpayers requiring audit must file by October 31, 2026.' } },
          { '@type': 'Question', name: 'Which tax regime is better in 2026 — old or new?', acceptedAnswer: { '@type': 'Answer', text: 'For most salaried individuals earning up to ₹12.75 lakh — new regime wins with zero tax. For those earning ₹15 lakh+ with large deductions (HRA + 80C + home loan > ₹3.75 lakh), the old regime may save more. The new regime is now default, so you must actively opt for the old regime while filing ITR.' } },
          { '@type': 'Question', name: 'Should I switch from old to new tax regime in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'If your income is below ₹12.75 lakh — switch to new regime immediately, you pay zero tax. If your income is ₹15–20 lakh with HRA, 80C, and home loan deductions exceeding ₹3.75–5.5 lakh — old regime may still save more. Calculate both and compare using a salary calculator. Salaried employees can switch regimes every year.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Income Tax Changes 2026 India', item: `${SITE_CONFIG.url}/blog/income-tax-changes-2026-india` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Income Tax Changes 2026</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Income Tax</span>
              <span className="text-xs text-surface-400">Updated March 30, 2026 · 14 min read</span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">🔴 Effective April 1, 2026</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-4 leading-tight tracking-tight">
              Income Tax Changes 2026 India — Everything That Changes from April 1
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-6 max-w-2xl">
              April 1, 2026 is not just the start of a new financial year. It is the day India's
              entire income tax law gets rewritten. The Income Tax Act 2025 replaces the 1961 Act
              — and if you are a salaried employee, business owner, or freelancer, you need to know
              what changed, what stayed the same, and most importantly, how it affects your take-home pay.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Verified against Finance Act 2026, Income Tax Act 2025, and CBDT notifications as of March 30, 2026</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Table of Contents</div>
                <ol className="space-y-2">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                        <span className="text-surface-400 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 pt-4 border-t border-surface-200">
                  <Link href="/salary-calculator" className="block w-full text-center bg-brand-600 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                    Calculate My Tax →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* FEATURED SNIPPET — TL;DR */}
              <section id="tldr">
                <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">Quick Summary — What's Changing from April 1, 2026</div>
                  <ul className="space-y-2">
                    {[
                      '✅ New Income Tax Act 2025 replaces the 1961 Act — simpler language, fewer sections',
                      '✅ Tax slabs unchanged for FY 2026-27 — no increase or decrease in rates',
                      '✅ New tax regime stays default — income up to ₹12L still tax-free',
                      '✅ Salaried employees: ₹12.75 lakh effective tax-free limit continues',
                      '✅ ITR-3 & ITR-4 deadline extended to August 31, 2026',
                      '✅ ITR-1 & ITR-2 deadline remains July 31, 2026',
                      '✅ Old tax regime still available — must opt in while filing',
                      '✅ Stricter TDS compliance, automated systems, faceless assessments expanded',
                      '✅ Meal allowance and presumptive taxation limits updated',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                        <span className="shrink-0">{item.slice(0,1)}</span>
                        <span>{item.slice(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* NEW TAX ACT */}
              <section id="new-tax-act">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The New Income Tax Act 2025 — What It Actually Means for You</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    On February 13, 2025, Finance Minister Nirmala Sitharaman introduced the <strong className="text-surface-800">Income Tax Bill 2025</strong> in Parliament.
                    It was passed and became the <strong className="text-surface-800">Income Tax Act 2025</strong> — a complete rewrite of the 64-year-old Income Tax Act 1961.
                    It became effective from <strong className="text-surface-800">April 1, 2026</strong>.
                  </p>
                  <p>
                    The old Act had grown into a 500+ section monster full of amendments, cross-references,
                    and outdated provisions. The new Act strips it down to about 300+ sections using
                    plain English and removes decades of clutter. But here is the critical part —
                    <strong className="text-surface-800"> the tax rates, slabs, and deductions are largely unchanged.</strong>
                    This is a structural reform, not a tax cut.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                    <div className="p-5 border-2 border-rose-200 rounded-2xl bg-rose-50">
                      <div className="font-bold text-rose-900 mb-3">📜 Old Act (1961) — Gone from April 1</div>
                      <ul className="space-y-2 text-sm text-rose-800">
                        {[
                          '500+ sections, heavily amended',
                          'Complex cross-references, hard to navigate',
                          'Multiple interpretations led to litigation',
                          'Outdated language from the 1960s',
                          'Frequent patches and amendments each year',
                        ].map(item => <li key={item} className="flex items-start gap-2"><span className="shrink-0">✗</span><span>{item}</span></li>)}
                      </ul>
                    </div>
                    <div className="p-5 border-2 border-emerald-200 rounded-2xl bg-emerald-50">
                      <div className="font-bold text-emerald-900 mb-3">📗 New Act (2025) — Effective April 1, 2026</div>
                      <ul className="space-y-2 text-sm text-emerald-800">
                        {[
                          '~300 sections, clean and structured',
                          'Simple English, easy to understand',
                          'Reduced ambiguity = fewer disputes',
                          'Consolidated provisions under one roof',
                          'Built for digital and automated compliance',
                        ].map(item => <li key={item} className="flex items-start gap-2"><span className="shrink-0">✓</span><span>{item}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                    <strong>What does NOT change:</strong> Your tax rates, deductions under 80C/80D, HRA exemption rules,
                    standard deduction, and Section 87A rebate — all continue exactly as before under the new Act.
                    The change is in the <em>structure and language</em> of the law, not the tax you pay.
                  </div>
                </div>
              </section>

              {/* ALL CHANGES */}
              <section id="what-changed">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">All Income Tax Changes from April 1, 2026 — Complete List</h2>
                <div className="space-y-5">
                  {[
                    {
                      cat:'Structural', icon:'🏗️', color:'bg-brand-50 border-brand-200',
                      items:[
                        { change:'Income Tax Act 2025 replaces 1961 Act', impact:'Law is simpler to read and follow. Fewer disputes. Same tax.' },
                        { change:'Sections reduced from 500+ to ~300+', impact:'Easier compliance for individuals and businesses. Less room for misinterpretation.' },
                        { change:'Faceless assessments expanded', impact:'More tax assessments happen digitally without physical interaction.' },
                        { change:'Automated TDS reconciliation', impact:'Mismatches between Form 26AS and ITR are flagged automatically.' },
                      ],
                    },
                    {
                      cat:'Salaried Employees', icon:'💼', color:'bg-emerald-50 border-emerald-200',
                      items:[
                        { change:'Tax slabs unchanged for FY 2026-27', impact:'No new tax burden. Same slabs from FY 2025-26 continue.' },
                        { change:'Standard deduction ₹75,000 continues', impact:'Salaried employees get ₹75,000 auto-deduction from income.' },
                        { change:'₹12.75L effectively tax-free for salaried', impact:'With standard deduction + 87A rebate, no tax up to ₹12.75L.' },
                        { change:'Meal allowance benefit updated', impact:'Tax-free meal vouchers/allowance limit increased to ₹15,000/year.' },
                      ],
                    },
                    {
                      cat:'Business & Freelancers', icon:'🏢', color:'bg-purple-50 border-purple-200',
                      items:[
                        { change:'Presumptive taxation limit increased', impact:'Section 44AD: Business turnover limit raised to ₹3 crore (was ₹2 crore).' },
                        { change:'Section 44ADA limit raised', impact:'Professionals: presumptive limit raised to ₹75 lakh (was ₹50 lakh).' },
                        { change:'Stricter TDS compliance reporting', impact:'Delayed TDS payments attract higher interest. Automated flagging.' },
                        { change:'Digital payment incentives continue', impact:'Lower presumptive tax rate for businesses with digital receipts.' },
                      ],
                    },
                    {
                      cat:'Filing & Compliance', icon:'📋', color:'bg-amber-50 border-amber-200',
                      items:[
                        { change:'ITR-3 & ITR-4 deadline: August 31, 2026', impact:'Business/profession taxpayers get 1 extra month to file.' },
                        { change:'ITR-1 & ITR-2 deadline: July 31, 2026', impact:'Salaried and other income taxpayers — deadline unchanged.' },
                        { change:'New ITR forms aligned with Tax Act 2025', impact:'ITR forms updated to reflect new section numbering.' },
                        { change:'Pre-filled ITR data expanded', impact:'More auto-populated data in ITR forms — faster filing.' },
                      ],
                    },
                  ].map(section => (
                    <div key={section.cat} className={`border rounded-2xl overflow-hidden ${section.color}`}>
                      <div className={`flex items-center gap-3 px-5 py-3 border-b ${section.color}`}>
                        <span className="text-lg">{section.icon}</span>
                        <h3 className="font-bold text-surface-900">{section.cat}</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/60">
                              <th className="text-left px-4 py-2 font-semibold text-surface-600 w-1/2">Change</th>
                              <th className="text-left px-4 py-2 font-semibold text-surface-600">Impact on You</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'}>
                                <td className="px-4 py-3 font-medium text-surface-800">{item.change}</td>
                                <td className="px-4 py-3 text-surface-600">{item.impact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TAX SLABS */}
              <section id="slabs">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Tax Slabs FY 2026-27 — Unchanged but Important to Know</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  As per Budget 2026, the Finance Minister did not change tax slabs. The same rates from FY 2025-26
                  continue in FY 2026-27. Here they are side by side:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="border-2 border-emerald-300 rounded-2xl overflow-hidden">
                    <div className="bg-emerald-600 px-5 py-3">
                      <div className="font-bold text-white">🆕 New Regime (Default)</div>
                      <div className="text-emerald-100 text-xs mt-0.5">Section 115BAC · Effective FY 2026-27</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead><tr className="bg-emerald-50">
                        <th className="text-left px-4 py-2 font-semibold text-emerald-800">Income Slab</th>
                        <th className="text-right px-4 py-2 font-semibold text-emerald-800">Rate</th>
                      </tr></thead>
                      <tbody>
                        {[
                          ['Up to ₹4,00,000','0%'],
                          ['₹4L – ₹8,00,000','5%'],
                          ['₹8L – ₹12,00,000','10%'],
                          ['₹12L – ₹16,00,000','15%'],
                          ['₹16L – ₹20,00,000','20%'],
                          ['₹20L – ₹24,00,000','25%'],
                          ['Above ₹24,00,000','30%'],
                        ].map(([slab,rate],i) => (
                          <tr key={slab} className={i%2===0?'bg-white':'bg-emerald-50/30'}>
                            <td className="px-4 py-2.5 text-surface-700">{slab}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-emerald-700">{rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100 text-xs text-emerald-800 space-y-1">
                      <div><strong>Standard deduction:</strong> ₹75,000 (salaried)</div>
                      <div><strong>87A Rebate:</strong> Up to ₹60,000 (income ≤ ₹12L)</div>
                      <div><strong>Effective tax-free:</strong> ₹12.75L (salaried)</div>
                    </div>
                  </div>

                  <div className="border-2 border-amber-300 rounded-2xl overflow-hidden">
                    <div className="bg-amber-600 px-5 py-3">
                      <div className="font-bold text-white">📋 Old Regime (Opt-in)</div>
                      <div className="text-amber-100 text-xs mt-0.5">Must choose while filing ITR</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead><tr className="bg-amber-50">
                        <th className="text-left px-4 py-2 font-semibold text-amber-800">Income Slab</th>
                        <th className="text-right px-4 py-2 font-semibold text-amber-800">Rate</th>
                      </tr></thead>
                      <tbody>
                        {[
                          ['Up to ₹2,50,000','0%'],
                          ['₹2.5L – ₹5,00,000','5%'],
                          ['₹5L – ₹10,00,000','20%'],
                          ['Above ₹10,00,000','30%'],
                        ].map(([slab,rate],i) => (
                          <tr key={slab} className={i%2===0?'bg-white':'bg-amber-50/30'}>
                            <td className="px-4 py-2.5 text-surface-700">{slab}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-amber-700">{rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 text-xs text-amber-800 space-y-1">
                      <div><strong>Standard deduction:</strong> ₹50,000</div>
                      <div><strong>87A Rebate:</strong> Up to ₹12,500 (income ≤ ₹5L)</div>
                      <div><strong>Allows:</strong> HRA, 80C, 80D, home loan deductions</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-surface-400">* Add 4% Health & Education Cess on all tax amounts. Surcharge applies for income above ₹50 lakh.</p>
              </section>

              {/* REGIME COMPARISON */}
              <section id="regime">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Old vs New Tax Regime 2026 — Which is Better for You?</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  The single most important tax decision you make in 2026. Here is the clean answer
                  based on your income and deductions:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-5">
                  <table className="w-full text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="bg-surface-900 text-white">
                        <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Income (Salary)</th>
                        <th className="text-center px-4 py-3 font-semibold">Total Deductions</th>
                        <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl">✅ Choose This</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { inc:'Up to ₹12.75 LPA',  ded:'Any amount',      winner:'🆕 New Regime', why:'Zero tax regardless of deductions' },
                        { inc:'₹15 LPA',            ded:'Below ₹3.75L',   winner:'🆕 New Regime', why:'Lower slabs save more' },
                        { inc:'₹15 LPA',            ded:'Above ₹3.75L',   winner:'📋 Old Regime', why:'Deductions reduce taxable income more' },
                        { inc:'₹20 LPA',            ded:'Below ₹5.5L',    winner:'🆕 New Regime', why:'New slabs are far lower at ₹20L' },
                        { inc:'₹20 LPA',            ded:'Above ₹5.5L',    winner:'📋 Old Regime', why:'Large deductions beat slab advantage' },
                        { inc:'₹25 LPA',            ded:'Below ₹7L',      winner:'🆕 New Regime', why:'30% old rate kicks in at ₹10L' },
                        { inc:'₹25 LPA',            ded:'Above ₹7L',      winner:'📋 Old Regime', why:'High HRA + home loan + 80C crosses breakeven' },
                        { inc:'Above ₹30 LPA',      ded:'Below ₹8L',      winner:'🆕 New Regime', why:'Massive slab advantage above ₹24L' },
                      ].map((r,i) => (
                        <tr key={i} className={i%2===0?'bg-white':'bg-surface-50'}>
                          <td className="px-4 py-3 font-bold text-surface-900">{r.inc}</td>
                          <td className="px-4 py-3 text-center text-surface-600 text-xs">{r.ded}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`font-bold text-xs px-2 py-1 rounded-full ${r.winner.startsWith('🆕') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                              {r.winner}
                            </span>
                            <div className="text-xs text-surface-400 mt-1">{r.why}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* CTA 1 */}
                <div className="p-5 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-bold text-white mb-1">Not Sure Which Regime Saves You More?</div>
                    <div className="text-brand-200 text-sm">Our salary calculator compares both regimes instantly with your exact numbers.</div>
                  </div>
                  <Link href="/salary-calculator"
                    className="shrink-0 bg-white text-brand-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors">
                    Calculate My Tax →
                  </Link>
                </div>
              </section>

              {/* SALARY EXAMPLES */}
              <section id="salary-examples">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How the 2026 Tax Changes Affect Your Salary — 3 Real Examples</h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  All examples: FY 2026-27, salaried employee, new tax regime (default), standard deduction ₹75,000 applied.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      label:'Example 1: ₹6 LPA (Junior / Entry Level)',
                      ctc:600000, gross:500000, taxable:425000,
                      tax:0, tds:0,
                      inhand:38500,
                      verdict:'Zero tax. ₹6 LPA income falls well below the ₹12L rebate threshold. Full salary is effectively tax-free under the new regime.',
                      color:'emerald',
                    },
                    {
                      label:'Example 2: ₹12 LPA (Mid-Level Professional)',
                      ctc:1200000, gross:985000, taxable:910000,
                      tax:0, tds:0,
                      inhand:71000,
                      verdict:'Zero tax. Even at ₹12 LPA, your taxable income (after PF, gratuity, and standard deduction) stays below ₹12L — covered by the 87A rebate.',
                      color:'emerald',
                    },
                    {
                      label:'Example 3: ₹20 LPA (Senior / Manager Level)',
                      ctc:2000000, gross:152658, taxable:175690,
                      tax:157435, tds:13119,
                      inhand:129339,
                      verdict:'Tax applies at ₹20 LPA. New regime gives ₹1,29,339/month in-hand. If your HRA + 80C + home loan deductions exceed ₹5.5L, the old regime may save more.',
                      color:'amber',
                    },
                  ].map(ex => (
                    <div key={ex.label} className={`border-2 border-${ex.color}-200 rounded-2xl overflow-hidden`}>
                      <div className={`bg-${ex.color}-50 px-5 py-3 border-b border-${ex.color}-200`}>
                        <div className="font-bold text-surface-900">{ex.label}</div>
                      </div>
                      <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-surface-400 mb-0.5">Annual CTC</div>
                          <div className="font-bold text-surface-900">₹{(ex.ctc/100000).toFixed(0)}L</div>
                        </div>
                        <div>
                          <div className="text-xs text-surface-400 mb-0.5">Income Tax</div>
                          <div className={`font-bold text-lg ${ex.tax===0?'text-emerald-700':'text-amber-700'}`}>
                            {ex.tax===0?'₹0 — Zero':'₹'+ex.tax.toLocaleString('en-IN')+'/yr'}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-surface-400 mb-0.5">TDS/Month</div>
                          <div className={`font-bold ${ex.tds===0?'text-emerald-700':'text-amber-700'}`}>
                            {ex.tds===0?'₹0':'₹'+ex.tds.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-surface-400 mb-0.5">Approx In-Hand/Month</div>
                          <div className="font-bold text-emerald-700 text-lg">₹{ex.inhand.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                      <div className={`mx-5 mb-5 p-3 rounded-xl text-sm bg-${ex.color}-50 text-${ex.color}-800 border border-${ex.color}-200`}>
                        ✍️ {ex.verdict}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TAX SAVING TIPS */}
              <section id="tax-saving">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">💰 Smart Tax Saving Tips for FY 2026-27</h2>

                <div className="space-y-4">
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
                    <h3 className="font-bold text-emerald-900 mb-3">Under New Tax Regime (Default)</h3>
                    <div className="space-y-3">
                      {[
                        { t:'Maximize employer NPS', d:'Section 80CCD(2) — employer NPS up to 14% of salary is deductible in new regime. One of the only deductions allowed. At ₹20 LPA, this saves ₹37,440/year in taxes.' },
                        { t:'Use Flexible Benefit Plan', d:'Meal coupons (₹15,000/year), fuel reimbursement (₹1,800/month), internet bills (₹2,000/month) — these reduce taxable income in both regimes. Ask HR to restructure.' },
                        { t:'EPF contribution', d:'While employee EPF deduction is not allowed in new regime, your employer EPF contribution (12% of basic) is not taxed — it builds retirement savings without tax impact.' },
                        { t:'Compare before July 31', d:'Salaried employees can switch regime at ITR filing. Calculate both regimes using a salary calculator before deciding — the right choice can save ₹30,000–₹1 lakh/year.' },
                      ].map(tip => (
                        <div key={tip.t} className="flex gap-3">
                          <span className="text-emerald-600 shrink-0 font-bold mt-0.5">→</span>
                          <div>
                            <span className="font-semibold text-emerald-900 text-sm">{tip.t}: </span>
                            <span className="text-sm text-emerald-800">{tip.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                    <h3 className="font-bold text-amber-900 mb-3">Under Old Tax Regime (If You Opt In)</h3>
                    <div className="space-y-3">
                      {[
                        { t:'Max out Section 80C', d:'₹1.5 lakh deduction — PPF, ELSS, LIC, EPF, tuition fees. Invest before March 31 each year. This alone saves ₹46,800 in taxes at 30% slab.' },
                        { t:'Claim HRA properly', d:'If you pay rent, claim HRA exemption with rent receipts. In metro cities, HRA exemption can be 50% of basic — worth ₹1.5–3 lakh/year for most salaried employees.' },
                        { t:'Home loan interest — Section 24b', d:'Up to ₹2 lakh deduction on home loan interest for self-occupied property. Combined with 80C (principal repayment), home loan can save ₹1.05 lakh in taxes.' },
                        { t:'Health insurance — Section 80D', d:'Up to ₹25,000 for self + family, ₹25,000 for parents. Senior citizen parents = ₹50,000. Total ₹75,000 deduction saves ₹23,400 at 30% slab.' },
                      ].map(tip => (
                        <div key={tip.t} className="flex gap-3">
                          <span className="text-amber-600 shrink-0 font-bold mt-0.5">→</span>
                          <div>
                            <span className="font-semibold text-amber-900 text-sm">{tip.t}: </span>
                            <span className="text-sm text-amber-800">{tip.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA 2 */}
                <div className="mt-5 p-5 bg-white border-2 border-brand-200 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">🧮</span>
                    <div>
                      <div className="font-bold text-surface-900 mb-1">Calculate Your Exact Tax Savings</div>
                      <p className="text-sm text-surface-600 leading-relaxed mb-3">
                        Our free salary calculator shows your exact in-hand salary, tax liability,
                        and savings under both old and new regimes — based on your actual CTC and deductions.
                        Updated for all FY 2026-27 rules including the new tax act.
                      </p>
                      <Link href="/salary-calculator"
                        className="inline-flex items-center gap-2 bg-brand-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                        Calculate My In-Hand Salary →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Tax Mistakes to Avoid in 2026</h2>
                <div className="space-y-4">
                  {[
                    {
                      n:'01', title:'Staying on old regime without checking',
                      desc:'The new regime is now the default. If you do nothing — you are on new regime. But many people still file manually selecting old regime out of habit without calculating which saves more. At ₹15L+ income, this decision is worth ₹30,000–₹1,00,000 in annual tax savings. Always calculate both before deciding.',
                    },
                    {
                      n:'02', title:'Not informing employer about regime choice',
                      desc:'Your employer deducts TDS every month based on the regime you declare at the start of the year. If you want old regime, tell HR at the beginning of April 2026. If you miss this and your employer deducts under new regime, you can correct it while filing ITR — but managing refunds is messy.',
                    },
                    {
                      n:'03', title:'Assuming the new Tax Act 2025 means new tax rates',
                      desc:'Many people heard "new Income Tax Act" and assumed new slabs or higher taxes. Not true. The Act is a restructuring of the law — same rates, same deductions, same rules. The only change is the law is now simpler to read. Do not panic-change your tax planning based on this.',
                    },
                    {
                      n:'04', title:'Missing the ITR-3/ITR-4 extended deadline',
                      desc:'ITR-3 and ITR-4 (for business and professional income) now have an extended deadline of August 31, 2026. However, ITR-1 and ITR-2 (salaried, rental income) still have the July 31 deadline. Confusing the two and filing late attracts ₹5,000 late fee and interest on due tax.',
                    },
                    {
                      n:'05', title:'Ignoring presumptive taxation changes',
                      desc:'Freelancers and small businesses: Section 44AD turnover limit is now ₹3 crore (was ₹2 crore) and Section 44ADA is now ₹75 lakh (was ₹50 lakh). If your income grew and you crossed the old limit — but are still below the new limit — you can continue using presumptive taxation and avoid detailed bookkeeping.',
                    },
                  ].map(m => (
                    <div key={m.n} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                      <div className="font-black text-2xl text-surface-200 shrink-0">{m.n}</div>
                      <div>
                        <h3 className="font-bold text-surface-900 mb-2">{m.title}</h3>
                        <p className="text-sm text-surface-600 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ITR DEADLINES */}
              <section id="itr-deadlines">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">ITR Filing Deadlines for FY 2025-26 (AY 2026-27)</h2>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900 text-white">
                        <th className="text-left px-4 py-3 rounded-tl-2xl font-semibold">ITR Form</th>
                        <th className="text-left px-4 py-3 font-semibold">Who Files</th>
                        <th className="text-right px-4 py-3 rounded-tr-2xl font-semibold">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { form:'ITR-1 (Sahaj)',   who:'Salaried, pensioners, one house property, interest income (income ≤ ₹50L)',  date:'July 31, 2026',    flag:'🟡' },
                        { form:'ITR-2',            who:'Capital gains, foreign income, more than one property, HUF',                date:'July 31, 2026',    flag:'🟡' },
                        { form:'ITR-3',            who:'Individuals and HUF with income from business or profession',              date:'August 31, 2026',  flag:'🟢 Extended' },
                        { form:'ITR-4 (Sugam)',   who:'Presumptive income (44AD, 44ADA, 44AE) — freelancers, small businesses',   date:'August 31, 2026',  flag:'🟢 Extended' },
                        { form:'ITR-5 / ITR-6',   who:'Firms, LLPs, companies (requiring audit)',                                 date:'October 31, 2026', flag:'⚪ Audit cases' },
                      ].map((r,i) => (
                        <tr key={r.form} className={i%2===0?'bg-white':'bg-surface-50'}>
                          <td className="px-4 py-3 font-bold text-surface-900">{r.form}</td>
                          <td className="px-4 py-3 text-surface-600 text-xs">{r.who}</td>
                          <td className="px-4 py-3 text-right">
                            <div className="font-bold text-surface-900 text-sm">{r.date}</div>
                            <div className="text-xs text-surface-400">{r.flag}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">* Late filing after deadline attracts ₹5,000 penalty under Section 234F (₹1,000 if income ≤ ₹5 lakh). Interest at 1%/month on unpaid tax also applies.</p>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions — Income Tax 2026</h2>
                <div className="space-y-3">
                  {[
                    { q:'Did income tax slabs change for FY 2026-27?', a:'No. As per Budget 2026, tax slabs are unchanged for FY 2026-27. The same slabs from FY 2025-26 continue. Income up to ₹12 lakh remains effectively tax-free under the new regime (₹12.75 lakh for salaried employees).' },
                    { q:'What is the new Income Tax Act 2025?', a:'The Income Tax Act 2025 is a completely rewritten version of the old Income Tax Act 1961, effective April 1, 2026. It reduces ~500 sections to ~300+ in simpler language. Tax rates and deductions are largely unchanged — it is a structural simplification, not a tax cut.' },
                    { q:'Is income up to ₹12 lakh tax-free in FY 2026-27?', a:'Yes. Under the new tax regime (default), taxable income up to ₹12 lakh is effectively tax-free due to the Section 87A rebate of ₹60,000. For salaried employees, the ₹75,000 standard deduction makes income up to ₹12.75 lakh tax-free. This continues unchanged in FY 2026-27.' },
                    { q:'What is the ITR filing last date for FY 2025-26?', a:'ITR-1 and ITR-2: July 31, 2026. ITR-3 and ITR-4 (extended): August 31, 2026. Audit cases (ITR-5/6): October 31, 2026. Late filing attracts ₹5,000 penalty and 1%/month interest on unpaid tax.' },
                    { q:'Should I switch to new tax regime in 2026?', a:'If your income is up to ₹12.75 lakh — switch to new regime, you pay zero tax. Above that, compare both regimes: if your HRA + 80C + home loan deductions are below the breakeven (₹3.75L at ₹15L income; ₹5.5L at ₹20L income) — new regime saves more. Salaried employees can switch regimes every year.' },
                    { q:'Does the new Income Tax Act 2025 affect my deductions?', a:'No. All existing deductions — Section 80C, 80D, HRA, home loan interest, standard deduction, NPS — continue under the new Act. The Act just renumbers and reorganizes sections. Your deduction amounts and eligibility remain identical.' },
                    { q:'What are the presumptive taxation limits under new rules 2026?', a:'Section 44AD (business): Turnover limit raised to ₹3 crore (was ₹2 crore). Section 44ADA (professionals/freelancers): Limit raised to ₹75 lakh (was ₹50 lakh). This means more small businesses and freelancers can avoid detailed bookkeeping and use simple presumptive taxation.' },
                    { q:'How do I calculate my exact tax under new 2026 rules?', a:'Use our free Salary Calculator at toolstackhub.in/salary-calculator. It is updated for all FY 2026-27 changes including the new Income Tax Act, ₹75,000 standard deduction, and both old and new regime slabs. Enter your CTC and get your exact in-hand salary and tax liability in seconds.' },
                  ].map((faq,i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                        {faq.q}
                        <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                       >
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Summary + Final CTA */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5">Key Takeaways — Income Tax 2026</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'New Income Tax Act 2025 is effective from April 1, 2026',
                    'Tax slabs unchanged — no new tax burden in FY 2026-27',
                    '₹12.75L effectively tax-free for salaried under new regime',
                    'New regime is default — opt out to use old regime',
                    'ITR-3 & ITR-4 extended to August 31, 2026',
                    'Presumptive tax limits raised — helps freelancers and small businesses',
                    'Employer NPS up to 14% salary is deductible in new regime',
                    'Calculate both regimes before filing — decision worth ₹30K–₹1L/year',
                  ].map((t,i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-brand-400 mt-0.5 shrink-0">✓</span>
                      <span className="text-white/80 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="font-bold text-white mb-2">Calculate Your Tax Under 2026 Rules Right Now</div>
                  <p className="text-white/70 text-sm mb-4">
                    Our salary calculator is fully updated for the new Income Tax Act 2025 and all FY 2026-27 rules.
                    Enter your CTC → get exact in-hand salary, tax liability, and old vs new regime comparison in 10 seconds.
                  </p>
                  <Link href="/salary-calculator"
                    className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                    Free Salary Calculator →
                  </Link>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides & Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/old-vs-new-tax-regime-2025-26', icon:'⚖️', label:'Old vs New Tax Regime Guide', desc:'Complete decision table for every income level' },
                    { href:'/blog/how-to-calculate-gratuity-india', icon:'💰', label:'Gratuity Calculation Guide', desc:'Formula, examples, new Labour Code 2026 changes' },
                    { href:'/salary-calculator', icon:'🧮', label:'Salary Calculator', desc:'CTC to in-hand salary with tax regime comparison' },
                    { href:'/blog/in-hand-salary-calculator-lpa-india', icon:'📊', label:'In-Hand Salary for 5L to 30L CTC', desc:'Exact monthly take-home for every salary level' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                      <span className="text-xl">{l.icon}</span>
                      <div>
                        <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes and updated to the best of our knowledge as of March 30, 2026. Tax rules are subject to official CBDT notifications and may be updated. All salary examples are approximate and based on standard salary structure assumptions. Consult a Chartered Accountant for advice specific to your situation. Sources: Income Tax Act 2025, Finance Act 2026, CBDT notifications, and official Income Tax Department guidelines.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}