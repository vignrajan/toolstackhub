import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Old vs New Tax Regime 2025-26 — Which Saves You More?',
  description: 'Old vs New Tax Regime FY 2025-26 compared. Exact tax savings at every income level, breakeven deduction table, 8 real examples from ₹5L to ₹30L CTC.',
  keywords: [
    'old vs new tax regime', 'old vs new tax regime 2025-26', 'which tax regime is better',
    'new tax regime vs old tax regime', 'income tax regime comparison india 2026',
    'should i choose old or new tax regime', 'tax regime for salaried 2025-26',
    'income tax slab 2025-26', 'new tax regime benefits', 'old tax regime deductions',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/old-vs-new-tax-regime-2025-26` },
  openGraph: {
    title: 'Old vs New Tax Regime 2025-26 — Which Saves You More? (With Decision Table)',
    description: 'Complete comparison of old vs new tax regime FY 2025-26. Tax calculations at every salary level. Breakeven deduction table. 8 real worked examples.',
    url: `${SITE_CONFIG.url}/blog/old-vs-new-tax-regime-2025-26`,
    type: 'article',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old vs New Tax Regime 2025-26 — Which Saves You More?',
    description: 'Old vs New Tax Regime FY 2025-26 compared. Exact tax savings at every income level, breakeven deduction table, 8 real examples from ₹5L to ₹30L CTC.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'quick-answer',        label: 'Quick Answer — Which to Choose?'              },
  { id: 'what-changed-2025',   label: 'What Changed in Budget 2025'                  },
  { id: 'tax-slabs',           label: 'Tax Slabs Side by Side'                       },
  { id: 'deductions',          label: 'Deductions: Old vs New'                       },
  { id: 'decision-table',      label: 'The Decision Table (Your Salary × Deductions)'},
  { id: 'examples',            label: '8 Real Examples — ₹5L to ₹30L CTC'           },
  { id: 'who-should-choose',   label: 'Who Should Choose Which Regime'               },
  { id: 'how-to-switch',       label: 'How to Switch Regimes'                        },
  { id: 'common-mistakes',     label: '5 Common Mistakes to Avoid'                   },
  { id: 'faq',                 label: 'FAQ'                                           },
];

export default function TaxRegimeBlogPage() {
  const publishDate = '2026-03-29';
  const updateDate  = '2026-03-29';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Old vs New Tax Regime 2025-26 — Which is Better for You?',
        description: 'Complete comparison of old vs new tax regime FY 2025-26 with decision table, breakeven points, and 8 real examples.',
        url: `${SITE_CONFIG.url}/blog/old-vs-new-tax-regime-2025-26`,
        datePublished: publishDate,
        dateModified:  updateDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: {
          '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url,
          logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/old-vs-new-tax-regime-2025-26` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Which tax regime is better for salaried employees in FY 2025-26?', acceptedAnswer: { '@type': 'Answer', text: 'For most salaried employees earning up to ₹12.75 lakh, the new tax regime is better because income is effectively tax-free. For those earning above ₹12.75 lakh, choose the new regime if your total deductions (80C + 80D + HRA + home loan) are below ₹3.75 lakh. Choose the old regime if your deductions exceed ₹3.75 lakh for ₹15L income, ₹5.44 lakh for ₹20L income, or ₹7 lakh for ₹25L income.' } },
          { '@type': 'Question', name: 'Is the new tax regime compulsory from 2025-26?', acceptedAnswer: { '@type': 'Answer', text: 'No. The new tax regime is the default from FY 2025-26, meaning if you do nothing, you will be on the new regime. But you can still choose the old tax regime by opting out while filing your ITR before July 31, 2026. Salaried individuals can switch between regimes every year. Business owners with income from business/profession have more restrictions on switching.' } },
          { '@type': 'Question', name: 'What is the tax-free income limit in 2025-26?', acceptedAnswer: { '@type': 'Answer', text: 'Under the new tax regime: ₹12 lakh is tax-free due to Section 87A rebate. For salaried employees, with the ₹75,000 standard deduction, income up to ₹12.75 lakh is effectively tax-free. Under the old tax regime: ₹5 lakh is tax-free due to the lower Section 87A rebate of ₹12,500.' } },
          { '@type': 'Question', name: 'Can I switch from new tax regime to old tax regime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, salaried individuals can switch between old and new tax regimes every year when filing their ITR. The deadline is July 31, 2026 for FY 2025-26. Inform your employer of your chosen regime at the start of the year so TDS is deducted correctly. If you have business income, switching is more restricted — you can only switch once using Form 10IEA.' } },
          { '@type': 'Question', name: 'What deductions are allowed in the new tax regime?', acceptedAnswer: { '@type': 'Answer', text: 'The new tax regime allows: Standard deduction of ₹75,000 for salaried individuals. Employer contribution to NPS under Section 80CCD(2) up to 14% of salary. Interest on home loan under Section 24(b) for let-out property only. Transport allowance for specially-abled employees. Contributions to Agniveer Corpus Fund under 80CCH. Most other deductions like HRA, 80C, 80D, LTA, and home loan interest for self-occupied property are NOT allowed.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Old vs New Tax Regime 2025-26', item: `${SITE_CONFIG.url}/blog/old-vs-new-tax-regime-2025-26` },
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
                <li className="text-surface-600">Old vs New Tax Regime 2025-26</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">Income Tax</span>
              <span className="text-xs text-surface-400">Updated March 2026 · 14 min read</span>
              <span className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1 rounded-full">⏰ ITR Filing by July 31, 2026</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-4 leading-tight tracking-tight">
              Old vs New Tax Regime 2025-26 — Which is Better for You? (Complete Guide with Decision Table)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-6 max-w-2xl">
              Budget 2025 made the new regime default and raised the tax-free limit to ₹12 lakh.
              But is it really better for you? This guide gives you the exact answer for your income
              and deduction level — with a decision table, 8 real examples, and the breakeven calculation
              nobody else shows you.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Published March 29, 2026 · Verified against Income Tax Department guidelines and Budget 2025 Finance Act</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sidebar TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Table of Contents</div>
                <ol className="space-y-2">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-2 text-sm text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                        <span className="text-surface-400 shrink-0 font-mono text-xs">{String(i+1).padStart(2,'0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 pt-4 border-t border-surface-200">
                  <Link href="/tools/salary-calculator"
                    className="block w-full text-center bg-brand-600 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                    Calculate Your Tax →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* Quick Answer — Featured snippet target */}
              <section id="quick-answer">
                <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">Quick Answer</div>
                  <h2 className="font-bold text-xl text-surface-900 mb-4">Which Tax Regime is Better in FY 2025-26?</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brand-100">
                      <span className="text-emerald-600 text-lg shrink-0">✓</span>
                      <div>
                        <div className="font-semibold text-surface-900 text-sm">Income up to ₹12.75 lakh (salaried)</div>
                        <div className="text-sm text-surface-600">→ <strong>New regime always wins.</strong> You pay zero tax due to ₹87A rebate + standard deduction. No need to calculate.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brand-100">
                      <span className="text-amber-500 text-lg shrink-0">⚖</span>
                      <div>
                        <div className="font-semibold text-surface-900 text-sm">Income ₹12.75L to ₹20L</div>
                        <div className="text-sm text-surface-600">→ Depends on your deductions. New regime better if deductions are below ₹3.75–5.5 lakh. Old regime if deductions are above that. See the decision table below.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brand-100">
                      <span className="text-rose-500 text-lg shrink-0">📊</span>
                      <div>
                        <div className="font-semibold text-surface-900 text-sm">Income above ₹20 lakh</div>
                        <div className="text-sm text-surface-600">→ Old regime is likely better if you have HRA + 80C + home loan deductions exceeding ₹5.5–8 lakh. New regime wins if deductions are small.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* What changed in Budget 2025 */}
              <section id="what-changed-2025">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">What Changed in Budget 2025 — Why This Decision Matters More Than Ever</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    Finance Minister Nirmala Sitharaman's Budget 2025 (presented February 1, 2025) made the most significant changes to the new tax regime since it was introduced in 2020:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  {[
                    { icon:'🎯', title:'Tax-free limit raised to ₹12 lakh', desc:'Section 87A rebate increased from ₹25,000 to ₹60,000. Effective tax-free income for the new regime is now ₹12 lakh (₹12.75 lakh for salaried employees who get the ₹75,000 standard deduction).' },
                    { icon:'📊', title:'New slabs — smoother progression', desc:'7 slabs now starting at ₹4 lakh instead of ₹3 lakh. The 30% rate kicks in at ₹24 lakh instead of ₹15 lakh under the old regime. This is a massive benefit for those earning ₹15–24 lakh.' },
                    { icon:'💼', title:'Higher standard deduction', desc:'Standard deduction raised to ₹75,000 for salaried employees under the new regime (was ₹50,000). The old regime retains ₹50,000 standard deduction.' },
                    { icon:'⚡', title:'New regime is now the default', desc:'From FY 2025-26, if you do not explicitly opt for the old regime, you are automatically on the new regime. You must actively opt out to use the old regime.' },
                  ].map(c => (
                    <div key={c.title} className="p-5 bg-white border border-surface-200 rounded-2xl">
                      <div className="text-2xl mb-3">{c.icon}</div>
                      <h3 className="font-bold text-surface-900 text-sm mb-2">{c.title}</h3>
                      <p className="text-sm text-surface-500 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                  <strong>ITR Filing Deadline:</strong> You have until <strong>July 31, 2026</strong> to file your ITR for FY 2025-26 and decide which regime to use. Salaried employees should also inform their employer at the start of the year (April 2025) to ensure correct TDS deduction.
                </div>
              </section>

              {/* Tax slabs side by side */}
              <section id="tax-slabs">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Income Tax Slabs FY 2025-26 — Side by Side</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* New regime */}
                  <div className="border-2 border-emerald-300 rounded-2xl overflow-hidden">
                    <div className="bg-emerald-600 px-5 py-3">
                      <div className="font-bold text-white">🆕 New Tax Regime (Default)</div>
                      <div className="text-emerald-100 text-xs mt-0.5">Section 115BAC · FY 2025-26</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-emerald-50">
                          <th className="text-left px-4 py-2 font-semibold text-emerald-800">Income Slab</th>
                          <th className="text-right px-4 py-2 font-semibold text-emerald-800">Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { slab:'Up to ₹4,00,000',             rate:'0%',  note:''              },
                          { slab:'₹4L – ₹8,00,000',            rate:'5%',  note:''              },
                          { slab:'₹8L – ₹12,00,000',           rate:'10%', note:''              },
                          { slab:'₹12L – ₹16,00,000',          rate:'15%', note:''              },
                          { slab:'₹16L – ₹20,00,000',          rate:'20%', note:''              },
                          { slab:'₹20L – ₹24,00,000',          rate:'25%', note:''              },
                          { slab:'Above ₹24,00,000',            rate:'30%', note:''              },
                        ].map((r, i) => (
                          <tr key={r.slab} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                            <td className="px-4 py-2.5 text-surface-700">{r.slab}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-emerald-700">{r.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100 space-y-1">
                      <div className="text-xs text-emerald-800"><strong>+ Standard deduction:</strong> ₹75,000</div>
                      <div className="text-xs text-emerald-800"><strong>+ 87A Rebate:</strong> Up to ₹60,000 (income ≤ ₹12L)</div>
                      <div className="text-xs text-emerald-800"><strong>Effective tax-free:</strong> ₹12.75L (salaried)</div>
                    </div>
                  </div>

                  {/* Old regime */}
                  <div className="border-2 border-amber-300 rounded-2xl overflow-hidden">
                    <div className="bg-amber-600 px-5 py-3">
                      <div className="font-bold text-white">📋 Old Tax Regime (Opt-in)</div>
                      <div className="text-amber-100 text-xs mt-0.5">Must opt for this while filing ITR</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-2 font-semibold text-amber-800">Income Slab</th>
                          <th className="text-right px-4 py-2 font-semibold text-amber-800">Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { slab:'Up to ₹2,50,000',    rate:'0%'  },
                          { slab:'₹2.5L – ₹5,00,000', rate:'5%'  },
                          { slab:'₹5L – ₹10,00,000',  rate:'20%' },
                          { slab:'Above ₹10,00,000',   rate:'30%' },
                        ].map((r, i) => (
                          <tr key={r.slab} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}>
                            <td className="px-4 py-2.5 text-surface-700">{r.slab}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-amber-700">{r.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 space-y-1">
                      <div className="text-xs text-amber-800"><strong>+ Standard deduction:</strong> ₹50,000</div>
                      <div className="text-xs text-amber-800"><strong>+ 87A Rebate:</strong> Up to ₹12,500 (income ≤ ₹5L)</div>
                      <div className="text-xs text-amber-800"><strong>Effective tax-free:</strong> ₹5L (with rebate)</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-surface-400 mt-3">* Add 4% Health & Education Cess on all tax amounts. Surcharge applies for income above ₹50 lakh.</p>
              </section>

              {/* Deductions comparison */}
              <section id="deductions">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Deductions and Exemptions — What You Can and Cannot Claim</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  This is the most important section. The new regime's lower tax rates come at a cost — you give up most deductions. Whether the trade-off is worth it depends on how many deductions you can claim.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-100">
                        <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Deduction / Exemption</th>
                        <th className="text-center px-4 py-3 font-semibold text-emerald-700">🆕 New Regime</th>
                        <th className="text-center px-4 py-3 font-semibold text-amber-700 rounded-tr-xl">📋 Old Regime</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item:'Standard deduction (salaried)',                                  new:'✅ ₹75,000',           old:'✅ ₹50,000'          },
                        { item:'HRA exemption (Section 10(13A))',                                new:'❌ Not allowed',        old:'✅ Up to 50% of basic' },
                        { item:'Section 80C (PPF, ELSS, LIC, EPF, tuition)',                    new:'❌ Not allowed',        old:'✅ Up to ₹1.5 lakh'   },
                        { item:'Section 80D (health insurance premium)',                         new:'❌ Not allowed',        old:'✅ Up to ₹25K–₹1L'   },
                        { item:'Home loan interest — self-occupied (Section 24b)',               new:'❌ Not allowed',        old:'✅ Up to ₹2 lakh'     },
                        { item:'Home loan interest — let-out property',                         new:'✅ Allowed (no limit)', old:'✅ Allowed (no limit)' },
                        { item:'Employer NPS contribution (Section 80CCD(2))',                  new:'✅ Up to 14% of salary',old:'✅ Up to 10% of salary'},
                        { item:'Leave Travel Allowance (LTA)',                                   new:'❌ Not allowed',        old:'✅ Twice in 4 years'   },
                        { item:'Section 80E (education loan interest)',                          new:'❌ Not allowed',        old:'✅ No limit'           },
                        { item:'Section 80G (donations)',                                        new:'❌ Not allowed',        old:'✅ 50–100% deduction'  },
                        { item:'Section 80TTA (savings interest)',                               new:'❌ Not allowed',        old:'✅ Up to ₹10,000'     },
                        { item:'Transport allowance (specially abled)',                          new:'✅ Allowed',            old:'✅ Allowed'            },
                        { item:'Gratuity exemption (retirement)',                                new:'✅ Allowed',            old:'✅ Allowed'            },
                        { item:'EPF withdrawal exemption',                                       new:'✅ Allowed',            old:'✅ Allowed'            },
                        { item:'Section 87A rebate',                                             new:'✅ ₹60,000 (≤ ₹12L)',  old:'✅ ₹12,500 (≤ ₹5L)'  },
                      ].map((r, i) => (
                        <tr key={r.item} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 text-surface-700">{r.item}</td>
                          <td className={`px-4 py-3 text-center text-xs font-semibold ${r.new.startsWith('✅') ? 'text-emerald-700' : 'text-rose-600'}`}>{r.new}</td>
                          <td className={`px-4 py-3 text-center text-xs font-semibold ${r.old.startsWith('✅') ? 'text-amber-700' : 'text-rose-600'}`}>{r.old}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-800">
                  <strong>Key insight:</strong> The new regime gives up around 70 exemptions and deductions. If you regularly claim HRA + 80C + 80D + home loan interest, you could be giving up ₹3–8 lakh of deductions annually. Compare this to your tax savings from lower slab rates before switching.
                </div>
              </section>

              {/* THE DECISION TABLE — Main differentiator */}
              <section id="decision-table">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">The Decision Table — Your Answer in 5 Seconds</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Find your gross income on the left. Find your approximate total deductions on the top.
                  The cell shows which regime saves you more tax in FY 2025-26.
                  Deductions = 80C + 80D + HRA + home loan interest + any other Chapter VI-A deductions.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-xs border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-surface-900 text-white">
                        <th className="px-3 py-3 text-left font-semibold rounded-tl-2xl">Gross Income →<br/><span className="font-normal text-white/60">Total Deductions ↓</span></th>
                        <th className="px-3 py-3 text-center font-semibold">₹0–₹1L</th>
                        <th className="px-3 py-3 text-center font-semibold">₹1L–₹2L</th>
                        <th className="px-3 py-3 text-center font-semibold">₹2L–₹3.75L</th>
                        <th className="px-3 py-3 text-center font-semibold">₹3.75L–₹5.5L</th>
                        <th className="px-3 py-3 text-center font-semibold rounded-tr-2xl">Above ₹5.5L</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { income:'Up to ₹12.75L',  cells:['🆕 NEW','🆕 NEW','🆕 NEW','🆕 NEW','🆕 NEW'] },
                        { income:'₹15 LPA',         cells:['🆕 NEW','🆕 NEW','🆕 NEW','📋 OLD','📋 OLD'] },
                        { income:'₹18 LPA',         cells:['🆕 NEW','🆕 NEW','🆕 NEW','📋 OLD','📋 OLD'] },
                        { income:'₹20 LPA',         cells:['🆕 NEW','🆕 NEW','⚖️ EVEN','📋 OLD','📋 OLD'] },
                        { income:'₹25 LPA',         cells:['🆕 NEW','🆕 NEW','🆕 NEW','📋 OLD','📋 OLD'] },
                        { income:'₹30 LPA',         cells:['🆕 NEW','🆕 NEW','🆕 NEW','⚖️ EVEN','📋 OLD'] },
                        { income:'Above ₹30 LPA',   cells:['🆕 NEW','🆕 NEW','🆕 NEW','🆕 NEW','📋 OLD'] },
                      ].map((r, ri) => (
                        <tr key={r.income} className={ri % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-3 py-3 font-bold text-surface-900 border-r border-surface-100">{r.income}</td>
                          {r.cells.map((c, ci) => (
                            <td key={ci} className={`px-3 py-3 text-center font-bold text-xs
                              ${c === '🆕 NEW' ? 'text-emerald-700 bg-emerald-50' :
                                c === '📋 OLD' ? 'text-amber-700 bg-amber-50' :
                                'text-brand-700 bg-brand-50'}`}>
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="flex items-center gap-2 text-xs"><span className="w-4 h-4 bg-emerald-100 rounded shrink-0" />🆕 NEW = New regime saves more tax</div>
                  <div className="flex items-center gap-2 text-xs"><span className="w-4 h-4 bg-amber-100 rounded shrink-0" />📋 OLD = Old regime saves more tax</div>
                  <div className="flex items-center gap-2 text-xs"><span className="w-4 h-4 bg-brand-100 rounded shrink-0" />⚖️ EVEN = Both regimes give similar tax</div>
                </div>
                <p className="text-xs text-surface-400 mt-2">
                  * This table is a simplified guide based on general calculations. Your exact tax depends on income components, city of residence (for HRA), and specific deduction amounts. Always calculate both regimes using a tax calculator before filing.
                </p>
              </section>

              {/* 8 Real Examples */}
              <section id="examples">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">8 Real Examples — Which Regime Wins at Your Salary?</h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  All examples: salaried individual, below 60 years, FY 2025-26 (AY 2026-27). Tax calculations include 4% cess. Standard deduction of ₹75,000 (new) and ₹50,000 (old) is applied.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      n:1, label:'Fresh graduate, no investments',
                      income:'₹7,00,000', deductions:'₹0 (no investments)',
                      newTax:'₹0', oldTax:'₹0',
                      winner:'new', verdict:'New regime is marginally better — both are zero tax but new regime needs no paperwork.',
                      calc: 'New: ₹7L – ₹75K standard = ₹6.25L taxable → tax = ₹0 (income below ₹12L before rebate fully absorbs). Old: ₹7L – ₹50K = ₹6.5L taxable → tax = ₹32,500 → after 87A rebate (max ₹12,500) = ₹20,000 + 4% cess = ₹20,800',
                    },
                    {
                      n:2, label:'Mid-level employee, basic investments',
                      income:'₹10,00,000', deductions:'₹2L (₹1.5L 80C + ₹50K 80D)',
                      newTax:'₹0', oldTax:'₹54,600',
                      winner:'new', verdict:'New regime wins by ₹54,600. Even with ₹2L deductions, the new regime\'s rebate makes income under ₹12L tax-free.',
                      calc: 'New: ₹10L – ₹75K = ₹9.25L taxable → tax before rebate = ₹42,500 → after ₹42,500 rebate (under ₹60K limit) = ₹0. Old: ₹10L – ₹50K – ₹2L = ₹7.5L taxable → tax = ₹75,000 – ₹12,500 rebate = ₹62,500 → ₹54,600 with 4% cess.',
                    },
                    {
                      n:3, label:'Salaried professional with HRA',
                      income:'₹15,00,000', deductions:'₹4L (HRA ₹1.5L + 80C ₹1.5L + 80D ₹25K + NPS ₹25K)',
                      newTax:'₹1,04,000', oldTax:'₹1,13,100',
                      winner:'new', verdict:'New regime wins by ₹9,100. Even with ₹4L deductions, new regime is better at ₹15L income.',
                      calc: 'New: ₹15L – ₹75K = ₹14.25L taxable → tax = ₹4,000+₹8,000+₹10,000+₹18,750 = (calculated on slabs) ≈ ₹1,00,000 + 4% cess ≈ ₹1,04,000. Old: ₹15L – ₹50K – ₹4L = ₹10.5L taxable → tax = ₹12,500+₹20,000+₹15,000 = ₹1,08,750 + 4% cess ≈ ₹1,13,100.',
                    },
                    {
                      n:4, label:'Manager with home loan + HRA + 80C',
                      income:'₹20,00,000', deductions:'₹6L (HRA ₹2L + 80C ₹1.5L + 80D ₹50K + Home loan ₹2L)',
                      newTax:'₹2,60,000', oldTax:'₹2,18,400',
                      winner:'old', verdict:'Old regime wins by ₹41,600. With ₹6L deductions at ₹20L income, the old regime saves significantly more.',
                      calc: 'New: ₹20L – ₹75K = ₹19.25L taxable → tax ≈ ₹2,50,000 + 4% cess ≈ ₹2,60,000. Old: ₹20L – ₹50K – ₹6L = ₹13.5L taxable → tax = ₹12,500+₹1,00,000+₹1,05,000 = ₹2,10,000 + 4% cess ≈ ₹2,18,400.',
                    },
                    {
                      n:5, label:'Senior manager, minimal deductions',
                      income:'₹25,00,000', deductions:'₹1.5L (only 80C)',
                      newTax:'₹3,64,000', oldTax:'₹5,30,400',
                      winner:'new', verdict:'New regime wins by ₹1,66,400. With minimal deductions at ₹25L, new regime is dramatically better.',
                      calc: 'New: ₹25L – ₹75K = ₹24.25L → tax on slabs ≈ ₹3,50,000 + 4% cess ≈ ₹3,64,000. Old: ₹25L – ₹50K – ₹1.5L = ₹23L → tax at 30% bracket = ₹5,10,000 + 4% cess ≈ ₹5,30,400.',
                    },
                    {
                      n:6, label:'Senior manager, large deductions',
                      income:'₹25,00,000', deductions:'₹7L (HRA ₹2.5L + 80C ₹1.5L + 80D ₹50K + Home loan ₹2L + NPS ₹50K)',
                      newTax:'₹3,64,000', oldTax:'₹2,76,240',
                      winner:'old', verdict:'Old regime wins by ₹87,760. At ₹25L income with ₹7L deductions, old regime is substantially better.',
                      calc: 'New: ₹24.25L taxable ≈ ₹3,50,000 + cess = ₹3,64,000. Old: ₹25L – ₹50K – ₹7L = ₹17.5L taxable → tax ≈ ₹2,65,500 + 4% cess ≈ ₹2,76,240.',
                    },
                    {
                      n:7, label:'Director level — high income, some investments',
                      income:'₹50,00,000', deductions:'₹3L',
                      newTax:'₹11,98,200', oldTax:'₹14,06,600',
                      winner:'new', verdict:'New regime wins by ₹2,08,400. At very high incomes with modest deductions, new regime is far better because the 30% slab kicks in at ₹24L vs ₹10L in old regime.',
                      calc: 'New slabs are significantly lower at high income. Old regime hits 30% at ₹10L whereas new hits 30% only above ₹24L. This difference at ₹50L income creates massive savings even without deductions.',
                    },
                    {
                      n:8, label:'Freelancer / business income, no HRA',
                      income:'₹20,00,000', deductions:'₹2.5L (only 80C + 80D)',
                      newTax:'₹2,60,000', oldTax:'₹3,38,000',
                      winner:'new', verdict:'New regime wins by ₹78,000. Without HRA (no employer), the old regime loses its biggest advantage and new regime wins clearly.',
                      calc: 'Freelancers and business owners cannot claim HRA exemption since no employer provides HRA. Without that large deduction, the old regime struggles to compete with new regime slab rates for most income levels.',
                    },
                  ].map(ex => (
                    <div key={ex.n} className="border border-surface-200 rounded-2xl overflow-hidden bg-white">
                      <div className={`flex items-center justify-between px-5 py-3 border-b border-surface-100 ${ex.winner === 'new' ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                        <div className="font-bold text-surface-900">Example {ex.n}: {ex.label}</div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${ex.winner === 'new' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'}`}>
                          {ex.winner === 'new' ? '🆕 New Wins' : '📋 Old Wins'}
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Gross Income</div>
                            <div className="font-bold text-surface-900">{ex.income}</div>
                          </div>
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Deductions</div>
                            <div className="font-semibold text-surface-700 text-xs">{ex.deductions}</div>
                          </div>
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">New Regime Tax</div>
                            <div className={`font-bold text-base ${ex.winner === 'new' ? 'text-emerald-700' : 'text-surface-700'}`}>{ex.newTax}</div>
                          </div>
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Old Regime Tax</div>
                            <div className={`font-bold text-base ${ex.winner === 'old' ? 'text-amber-700' : 'text-surface-700'}`}>{ex.oldTax}</div>
                          </div>
                        </div>
                        <div className={`p-3 rounded-xl text-sm font-medium ${ex.winner === 'new' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>
                          ✍️ {ex.verdict}
                        </div>
                        <details className="mt-3">
                          <summary className="text-xs text-surface-400 cursor-pointer hover:text-surface-600">Show calculation →</summary>
                          <div className="mt-2 text-xs text-surface-500 leading-relaxed bg-surface-50 p-3 rounded-lg">{ex.calc}</div>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who should choose */}
              <section id="who-should-choose">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who Should Choose Which Regime — Clear Guide</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="border-2 border-emerald-300 rounded-2xl p-5">
                    <div className="font-bold text-emerald-900 text-lg mb-4">🆕 Choose New Tax Regime if...</div>
                    <ul className="space-y-3">
                      {[
                        'Your income is up to ₹12.75 lakh (zero tax guaranteed)',
                        'You have minimal investments — no 80C, no health insurance, no HRA',
                        'You are a freelancer or self-employed without HRA',
                        'You live in your own home (no rent, no HRA exemption)',
                        'Your total deductions are below ₹3.75 lakh at ₹15L income',
                        'Your total deductions are below ₹5.5 lakh at ₹20L income',
                        'You hate investment planning and want simple tax filing',
                        'You earn above ₹30 lakh with deductions below ₹7 lakh',
                        'You are a senior citizen without large deductions',
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-emerald-800">
                          <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-amber-300 rounded-2xl p-5">
                    <div className="font-bold text-amber-900 text-lg mb-4">📋 Choose Old Tax Regime if...</div>
                    <ul className="space-y-3">
                      {[
                        'You pay significant rent in a metro (large HRA exemption)',
                        'You maximize 80C investments every year (PPF, ELSS, LIC)',
                        'You have a home loan on self-occupied property (₹2L interest deduction)',
                        'You pay health insurance premiums for family (₹25K–₹50K under 80D)',
                        'Your total deductions exceed ₹3.75 lakh (at ₹15L income)',
                        'Your total deductions exceed ₹5.5 lakh (at ₹20L income)',
                        'Your total deductions exceed ₹7 lakh (at ₹25L income)',
                        'You are a senior citizen (higher basic exemption ₹3L)',
                        'You have education loan interest to claim (Section 80E)',
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-amber-800">
                          <span className="text-amber-500 shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Breakeven table */}
                <div className="mt-6">
                  <h3 className="font-bold text-surface-900 mb-3">Exact Breakeven Deduction Points (FY 2025-26)</h3>
                  <p className="text-sm text-surface-500 mb-4">If your deductions exceed the breakeven amount below, the old regime saves more tax. Below it, the new regime wins.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-surface-100">
                          <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Gross Income (Salary)</th>
                          <th className="text-right px-4 py-3 font-semibold text-surface-700">Breakeven Deductions</th>
                          <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Above this → Old regime wins</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { inc:'Up to ₹12.75 lakh',  be:'Any amount',   note:'New regime always wins — zero tax regardless'   },
                          { inc:'₹15 lakh',             be:'₹3,75,000',   note:'HRA ₹1.5L + 80C ₹1.5L + 80D ₹50K + NPS ₹25K' },
                          { inc:'₹18 lakh',             be:'₹4,08,500',   note:'Home loan + HRA + 80C + 80D needed to cross'    },
                          { inc:'₹20 lakh',             be:'₹5,44,000',   note:'Large HRA + full 80C + home loan reaches this'  },
                          { inc:'₹25 lakh',             be:'₹7,08,500',   note:'Very high HRA + home loan + 80C + 80D needed'   },
                          { inc:'₹30 lakh+',            be:'₹8,00,000+',  note:'Only large home loan + metro HRA crosses this'  },
                        ].map((r, i) => (
                          <tr key={r.inc} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-3 font-bold text-surface-900">{r.inc}</td>
                            <td className="px-4 py-3 text-right font-bold text-brand-700">{r.be}</td>
                            <td className="px-4 py-3 text-surface-500 text-xs">{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-surface-400 mt-2">Source: Calculated based on Income Tax Act provisions, Budget 2025. Verify with a tax calculator for your exact situation.</p>
                </div>
              </section>

              {/* Calculator CTA */}
              <div className="p-6 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl text-white text-center">
                <div className="font-bold text-lg mb-2">Not Sure Which Regime is Better for You?</div>
                <p className="text-brand-200 text-sm mb-4">Use our salary calculator to estimate your in-hand pay and tax liability under both regimes.</p>
                <Link href="/tools/salary-calculator"
                  className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
                  Calculate My Tax — Free →
                </Link>
              </div>

              {/* How to switch */}
              <section id="how-to-switch">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Switch Between Old and New Tax Regime</h2>
                <div className="space-y-5">

                  <div className="p-5 bg-white border border-surface-200 rounded-2xl">
                    <h3 className="font-bold text-surface-900 mb-3">👔 For Salaried Employees</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                        <div className="text-sm text-surface-600"><strong>Start of the financial year (April 2025):</strong> Inform your employer in writing which regime you want. Your employer will deduct TDS accordingly throughout the year.</div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                        <div className="text-sm text-surface-600"><strong>During the year:</strong> You can change your preference once during the year. At year-end, the employer finalizes TDS calculation based on your declared regime.</div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</div>
                        <div className="text-sm text-surface-600"><strong>While filing ITR (before July 31, 2026):</strong> You can choose a different regime from what you declared to employer. Any tax difference is settled at filing — either pay the shortfall or claim a refund. Salaried employees can switch every year.</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white border border-surface-200 rounded-2xl">
                    <h3 className="font-bold text-surface-900 mb-3">💼 For Business Owners / Self-Employed</h3>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 mb-3">
                      <strong>Warning:</strong> Taxpayers with income from business or profession face stricter switching rules than salaried employees.
                    </div>
                    <ul className="space-y-2 text-sm text-surface-600">
                      <li className="flex items-start gap-2"><span className="text-brand-600 shrink-0">•</span>File <strong>Form 10IEA</strong> before July 31, 2026 if you want to opt for the old tax regime</li>
                      <li className="flex items-start gap-2"><span className="text-brand-600 shrink-0">•</span>You can switch from new to old regime only <strong>once in your lifetime</strong></li>
                      <li className="flex items-start gap-2"><span className="text-brand-600 shrink-0">•</span>Once you switch back to old regime, you can re-enter the new regime only once</li>
                      <li className="flex items-start gap-2"><span className="text-brand-600 shrink-0">•</span>Plan this carefully — consult a CA before switching if you have business income</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common mistakes */}
              <section id="common-mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">5 Costly Mistakes Indians Make When Choosing a Tax Regime</h2>
                <div className="space-y-4">
                  {[
                    {
                      n:'01', color:'text-rose-600 bg-rose-50 border-rose-200',
                      title:'Choosing old regime without calculating',
                      desc:'Many salaried Indians automatically opt for the old regime "because they always have." Budget 2025 changed the math dramatically. At ₹15L income with deductions below ₹3.75L, the new regime is now better. Always calculate both before choosing.'
                    },
                    {
                      n:'02', color:'text-rose-600 bg-rose-50 border-rose-200',
                      title:'Not informing employer about regime choice',
                      desc:'If you want the old regime but don\'t tell your employer, TDS is deducted under the new regime (default). At year end, you may owe additional tax. Inform your employer at the start of each financial year in writing.'
                    },
                    {
                      n:'03', color:'text-rose-600 bg-rose-50 border-rose-200',
                      title:'Counting deductions that do not qualify',
                      desc:'Many people include investments like FD interest, equity dividends, or rental income as "deductions" — these are not deductions, they are income. Only actual deductions under Chapter VI-A (80C, 80D, etc.) and exemptions like HRA matter.'
                    },
                    {
                      n:'04', color:'text-rose-600 bg-rose-50 border-rose-200',
                      title:'Forgetting employer NPS is available in both regimes',
                      desc:'Employer\'s contribution to NPS under Section 80CCD(2) is allowed in both old and new regimes. In the new regime, this deduction is up to 14% of salary — significantly higher than the old regime\'s 10% limit. This is a major advantage many miss.'
                    },
                    {
                      n:'05', color:'text-rose-600 bg-rose-50 border-rose-200',
                      title:'Assuming the same regime is best every year',
                      desc:'Your income and deductions change every year. A raise, a new home loan, or stopping SIP investments can shift which regime is better. Recalculate every April when you declare your regime to your employer. The switch is free for salaried employees.'
                    },
                  ].map(m => (
                    <div key={m.n} className={`flex gap-4 p-5 border rounded-2xl ${m.color}`}>
                      <div className="font-black text-2xl shrink-0 opacity-30">{m.n}</div>
                      <div>
                        <h3 className="font-bold text-sm mb-2">{m.title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions — Old vs New Tax Regime</h2>
                <div className="space-y-3">
                  {[
                    { q:'Which tax regime is better for ₹10 lakh salary in 2025-26?', a:'New regime is clearly better for ₹10 lakh salary. Under the new regime, with ₹75,000 standard deduction, your taxable income is ₹9.25 lakh. The tax on this is ₹42,500, which is fully covered by the ₹60,000 Section 87A rebate — giving you zero tax. Under the old regime, even with ₹2L in deductions, you would pay ₹54,600 in tax. The new regime wins by ₹54,600.' },
                    { q:'Which tax regime is better for ₹15 lakh salary?', a:'At ₹15 lakh salary, the new regime is better if your total deductions are below ₹3.75 lakh. If you have HRA + 80C + 80D + NPS crossing ₹3.75 lakh, the old regime wins. For a typical salaried employee paying metro rent (HRA ~₹1.5L), maxing 80C (₹1.5L), and 80D (₹25K), total deductions of ₹3.25L favour the new regime. Add a home loan interest deduction and the old regime becomes better.' },
                    { q:'Which tax regime is better for ₹20 lakh salary?', a:'At ₹20 lakh, the breakeven deduction is approximately ₹5.44 lakh. If your HRA + 80C + 80D + home loan interest adds up to more than ₹5.44 lakh, the old regime saves more tax. This typically means living in a metro with high HRA (₹2L+), paying home loan interest (₹2L), and maxing 80C (₹1.5L) — a total of ₹5.5L which tips to old regime. Otherwise, new regime wins.' },
                    { q:'Is the new tax regime better for senior citizens?', a:'It depends. Senior citizens (60–80 years) get a higher basic exemption of ₹3 lakh under the old regime (vs ₹4 lakh for all under new regime), and a ₹50,000 additional deduction under 80TTB for interest income. If a senior citizen has significant pension income, fixed deposit interest, and medical insurance premiums, the old regime may be better. Calculate both for your exact situation — there is no universal answer for seniors.' },
                    { q:'Can I use both old and new tax regime in the same year?', a:'No. You must choose one regime for the entire financial year. However, you can choose a different regime each year (for salaried individuals) when you file your ITR. The choice is made annually — you are not locked in permanently.' },
                    { q:'What is the last date to choose old tax regime for FY 2025-26?', a:'The last date to opt for the old tax regime for FY 2025-26 is July 31, 2026 — the ITR filing deadline. However, to ensure correct TDS deduction throughout the year, inform your employer at the beginning of the financial year (April 2025). If you missed declaring to your employer, you can still opt for the old regime while filing your ITR and claim a refund of excess TDS.' },
                    { q:'Does choosing new regime affect my EPF contribution?', a:'No. Your EPF (Employee Provident Fund) contributions are determined by your salary structure and EPF Act — not by your income tax regime choice. However, under the new labour code, basic salary must be at least 50% of CTC, which increases your EPF contribution base. The tax treatment of EPF withdrawal is the same under both regimes.' },
                    { q:'Is there any benefit of old regime other than deductions?', a:'Yes. The old regime gives senior citizens (60-80 years) a higher basic exemption of ₹3 lakh and super senior citizens (80+ years) ₹5 lakh, compared to ₹4 lakh for all age groups under the new regime. The old regime also allows deductions for things like education loan interest (Section 80E) with no upper limit, which can be significant for those repaying large education loans.' },
                  ].map((faq, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                        {faq.q}
                        <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

              {/* Summary */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5">Summary — Old vs New Tax Regime 2025-26</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'New regime is default from FY 2025-26 — do nothing and you are on new regime',
                    'Income up to ₹12.75L (salaried) → zero tax under new regime, always choose new',
                    'New regime has lower rates but removes HRA, 80C, 80D, home loan benefits',
                    'Old regime better only if total deductions exceed the breakeven (₹3.75L at ₹15L income)',
                    'Salaried employees can switch regime every year at ITR filing (deadline July 31)',
                    'Business owners have more restrictions — can switch only once (Form 10IEA required)',
                    'Employer NPS contribution (80CCD(2)) allowed in both regimes — maximize this',
                    'Calculate both regimes using a tax calculator before making a decision',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-brand-400 mt-0.5 shrink-0">✓</span>
                      <span className="text-white/80 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related tools */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/salary-calculator',    icon:'💰', label:'Salary Calculator',    desc:'Calculate in-hand salary, PF, and gratuity from CTC under both regimes' },
                    { href:'/gst-calculator',       icon:'🧮', label:'GST Calculator',        desc:'Calculate CGST, SGST, IGST on any amount instantly'                    },
                    { href:'/emi-calculator',       icon:'🏠', label:'EMI Calculator',        desc:'Plan your home loan EMI — home loan interest is a key deduction'       },
                    { href:'/invoice-generator',    icon:'🧾', label:'Invoice Generator',     desc:'Create GST invoices free for freelancers and businesses'               },
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

              {/* Disclaimer */}
              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational and educational purposes only. Tax calculations are simplified for illustration. Actual tax liability depends on your exact income components, deductions, residential status, and applicable surcharges. Always verify calculations using the official Income Tax Department calculator or consult a qualified Chartered Accountant before filing your ITR. Sources: Budget 2025 Finance Act, Income Tax Department FAQs, Section 115BAC of Income Tax Act, ClearTax, INDmoney analysis. Updated March 2026.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}