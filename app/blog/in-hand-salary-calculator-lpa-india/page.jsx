import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: '10 LPA In-Hand Salary 2025-26 — Breakdown for 8 CTC Levels',
  description: 'Exact monthly in-hand salary for 5–30 LPA CTC. New vs old tax regime, PF, professional tax, gratuity deductions explained. Updated FY 2025-26.',
  keywords: [
    '10 lpa in hand salary per month', 'in hand salary from ctc india 2025-26',
    '15 lpa in hand salary', '20 lpa in hand salary per month',
    'ctc to in hand salary calculator india', '12 lpa in hand salary',
    '25 lpa in hand salary', '8 lpa in hand salary',
    '5 lpa in hand salary', '30 lpa in hand salary',
    'how to calculate in hand salary from ctc india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/in-hand-salary-calculator-lpa-india` },
  openGraph: {
    title: '10 LPA In-Hand Salary 2025-26 — Breakdown for 8 CTC Levels',
    description: 'Exact in-hand salary for 5 LPA to 30 LPA CTC. PF, tax, professional tax deductions explained. New vs old regime compared. Updated March 2026.',
    url: `${SITE_CONFIG.url}/blog/in-hand-salary-calculator-lpa-india`,
    type: 'article',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 LPA In-Hand Salary 2025-26 — Breakdown for 8 CTC Levels',
    description: 'Exact monthly in-hand salary for 5–30 LPA CTC. New vs old tax regime, PF, professional tax, gratuity deductions explained. Updated FY 2025-26.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'ctc-vs-inhand',   label: 'CTC vs In-Hand — The Real Difference'        },
  { id: 'what-reduces',    label: 'What Reduces Your In-Hand Salary'             },
  { id: 'structure',       label: 'How Indian Salary Structure Works'            },
  { id: 'salary-table',    label: 'Quick Reference Table — All 8 CTC Levels'    },
  { id: 'breakdown-5',     label: '5 LPA In-Hand Salary'                        },
  { id: 'breakdown-8',     label: '8 LPA In-Hand Salary'                        },
  { id: 'breakdown-10',    label: '10 LPA In-Hand Salary'                       },
  { id: 'breakdown-12',    label: '12 LPA In-Hand Salary'                       },
  { id: 'breakdown-15',    label: '15 LPA In-Hand Salary'                       },
  { id: 'breakdown-20',    label: '20 LPA In-Hand Salary'                       },
  { id: 'breakdown-25',    label: '25 LPA In-Hand Salary'                       },
  { id: 'breakdown-30',    label: '30 LPA In-Hand Salary'                       },
  { id: 'increase-inhand', label: 'How to Increase Your In-Hand Salary'         },
  { id: 'faq',             label: 'FAQ'                                          },
];

// All salary data — calculated under standard structure: Basic=50% CTC, new regime, FY 2025-26
const SALARIES = [
  {
    id: 'breakdown-5', ctc: 5, ctcLabel: '₹5 LPA', tag: 'Entry level / Fresher',
    basic: 20833, hra: 10000, specialAllow: 11497,
    empPF: 2500, empPFannual: 30000,
    gratuity: 1003, gratuityAnnual: 12025,
    grossMonthly: 38164, grossAnnual: 457975,
    taxableIncome: 382975, incomeTax: 0, tdsMonthly: 0,
    profTax: 200,
    inHandMonthly: 35464, inHandAnnual: 425568,
    regime: 'New', taxNote: '₹0 — taxable income below ₹4L threshold, no tax',
    ctcGap: 64, verdict: 'Zero income tax. The entire gap from CTC is PF and gratuity components.',
    oldRegimeInHand: 35464, oldRegimeTax: 0,
  },
  {
    id: 'breakdown-8', ctc: 8, ctcLabel: '₹8 LPA', tag: 'Junior / 2–4 years experience',
    basic: 33333, hra: 16000, specialAllow: 14610,
    empPF: 4000, empPFannual: 48000,
    gratuity: 1603, gratuityAnnual: 19240,
    grossMonthly: 61063, grossAnnual: 732760,
    taxableIncome: 657760, incomeTax: 0, tdsMonthly: 0,
    profTax: 200,
    inHandMonthly: 56863, inHandAnnual: 682356,
    regime: 'New', taxNote: '₹0 — Section 87A rebate covers full tax liability (income ≤ ₹12L)',
    ctcGap: 71, verdict: 'Zero income tax under new regime. 87A rebate fully covers your tax.',
    oldRegimeInHand: 56863, oldRegimeTax: 0,
  },
  {
    id: 'breakdown-10', ctc: 10, ctcLabel: '₹10 LPA', tag: 'Mid-level / 3–6 years experience',
    basic: 41667, hra: 20000, specialAllow: 18158,
    empPF: 5000, empPFannual: 60000,
    gratuity: 2004, gratuityAnnual: 24050,
    grossMonthly: 76329, grossAnnual: 915950,
    taxableIncome: 840950, incomeTax: 0, tdsMonthly: 0,
    profTax: 200,
    inHandMonthly: 71129, inHandAnnual: 853548,
    regime: 'New', taxNote: '₹0 — Section 87A rebate covers full tax (₹24,095 tax, rebate limit ₹60,000)',
    ctcGap: 71, verdict: 'Zero income tax. The 87A rebate covers your entire tax liability at ₹10 LPA.',
    oldRegimeInHand: 71129, oldRegimeTax: 0,
  },
  {
    id: 'breakdown-12', ctc: 12, ctcLabel: '₹12 LPA', tag: 'Senior / 5–8 years experience',
    basic: 50000, hra: 24000, specialAllow: 21785,
    empPF: 6000, empPFannual: 72000,
    gratuity: 2405, gratuityAnnual: 28860,
    grossMonthly: 91595, grossAnnual: 1099140,
    taxableIncome: 1024140, incomeTax: 0, tdsMonthly: 0,
    profTax: 200,
    inHandMonthly: 85395, inHandAnnual: 1024740,
    regime: 'New', taxNote: '₹0 — income just above ₹12L threshold; 87A rebate still covers tax of ₹42,414',
    ctcGap: 71, verdict: 'Still zero income tax. Your taxable income (₹10.24L) falls within the ₹12L rebate limit.',
    oldRegimeInHand: 85395, oldRegimeTax: 0,
  },
  {
    id: 'breakdown-15', ctc: 15, ctcLabel: '₹15 LPA', tag: 'Senior / Team Lead',
    basic: 62500, hra: 30000, specialAllow: 27244,
    empPF: 7500, empPFannual: 90000,
    gratuity: 3006, gratuityAnnual: 36075,
    grossMonthly: 114494, grossAnnual: 1373925,
    taxableIncome: 1298925, incomeTax: 77833, tdsMonthly: 6486,
    profTax: 200,
    inHandMonthly: 100308, inHandAnnual: 1203696,
    regime: 'New', taxNote: '₹77,833/year — taxable income crosses ₹12L; no 87A rebate available',
    ctcGap: 67, verdict: 'Tax kicks in. At ₹15 LPA, you cross the ₹12L rebate threshold. In-hand is ~₹1 lakh/month.',
    oldRegimeInHand: 102000, oldRegimeTax: 58000,
  },
  {
    id: 'breakdown-20', ctc: 20, ctcLabel: '₹20 LPA', tag: 'Lead / Manager level',
    basic: 83333, hra: 40000, specialAllow: 36408,
    empPF: 10000, empPFannual: 120000,
    gratuity: 4008, gratuityAnnual: 48100,
    grossMonthly: 152658, grossAnnual: 1831900,
    taxableIncome: 1756900, incomeTax: 157435, tdsMonthly: 13119,
    profTax: 200,
    inHandMonthly: 129339, inHandAnnual: 1552068,
    regime: 'New', taxNote: '₹1,57,435/year — effective tax rate ~8.5% on taxable income',
    ctcGap: 65, verdict: 'New regime is better if deductions < ₹5.5L. Old regime wins with HRA + 80C + home loan.',
    oldRegimeInHand: 125000, oldRegimeTax: 210000,
  },
  {
    id: 'breakdown-25', ctc: 25, ctcLabel: '₹25 LPA', tag: 'Senior Manager / Specialist',
    basic: 104167, hra: 50000, specialAllow: 45457,
    empPF: 12500, empPFannual: 150000,
    gratuity: 5009, gratuityAnnual: 60125,
    grossMonthly: 190823, grossAnnual: 2289875,
    taxableIncome: 2214875, incomeTax: 263868, tdsMonthly: 21989,
    profTax: 200,
    inHandMonthly: 156134, inHandAnnual: 1873608,
    regime: 'New', taxNote: '₹2,63,868/year — effective tax rate ~11.9% on taxable income',
    ctcGap: 62, verdict: 'Evaluate carefully. With deductions above ₹7L, old regime may save more tax.',
    oldRegimeInHand: 151000, oldRegimeTax: 330000,
  },
  {
    id: 'breakdown-30', ctc: 30, ctcLabel: '₹30 LPA', tag: 'Director / Principal / VP level',
    basic: 125000, hra: 60000, specialAllow: 54488,
    empPF: 15000, empPFannual: 180000,
    gratuity: 6013, gratuityAnnual: 72150,
    grossMonthly: 228988, grossAnnual: 2747850,
    taxableIncome: 2672850, incomeTax: 397129, tdsMonthly: 33094,
    profTax: 200,
    inHandMonthly: 180694, inHandAnnual: 2168328,
    regime: 'New', taxNote: '₹3,97,129/year — effective tax rate ~14.9% on taxable income',
    ctcGap: 60, verdict: 'Tax is significant now. Old regime helps if you have large HRA + home loan interest.',
    oldRegimeInHand: 174000, oldRegimeTax: 480000,
  },
];

export default function InHandSalaryBlogPage() {
  const publishDate = '2026-03-29';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: '10 LPA In-Hand Salary Per Month 2025-26 — Exact Breakdown for 8 CTC Levels',
        description: 'Exact monthly in-hand salary for 5 LPA to 30 LPA CTC with full deduction breakdown.',
        url: `${SITE_CONFIG.url}/blog/in-hand-salary-calculator-lpa-india`,
        datePublished: publishDate, dateModified: publishDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: {
          '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url,
          logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/in-hand-salary-calculator-lpa-india` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is 10 LPA in hand salary per month?', acceptedAnswer: { '@type': 'Answer', text: 'For a ₹10 LPA CTC with a standard salary structure (50% basic, new tax regime FY 2025-26), the monthly in-hand salary is approximately ₹71,000. This is after deducting Employee PF (₹5,000/month), Professional Tax (₹200/month), and zero income tax (87A rebate covers full tax at ₹10 LPA). The actual amount may vary based on your salary structure, city, and tax regime.' } },
          { '@type': 'Question', name: 'Why is my CTC different from in-hand salary?', acceptedAnswer: { '@type': 'Answer', text: 'CTC (Cost to Company) includes components that are not paid monthly: Employer PF contribution (12% of Basic), Gratuity (4.81% of Basic — paid only after 5 years), and sometimes medical insurance premiums. These reduce your in-hand salary from CTC. Additionally, monthly deductions like Employee PF (12% of Basic), Professional Tax (₹200/month), and Income Tax (TDS) further reduce your take-home.' } },
          { '@type': 'Question', name: 'What is 15 LPA in hand salary per month?', acceptedAnswer: { '@type': 'Answer', text: 'For ₹15 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,00,000–₹1,02,000. At ₹15 LPA, your taxable income crosses the ₹12 lakh rebate threshold so income tax applies — approximately ₹6,500/month in TDS. Deductions include Employee PF (₹7,500/month) and Professional Tax (₹200/month).' } },
          { '@type': 'Question', name: 'What is 20 LPA in hand salary per month?', acceptedAnswer: { '@type': 'Answer', text: 'For ₹20 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,29,000. Monthly deductions include Employee PF (₹10,000), Professional Tax (₹200), and TDS income tax (₹13,119). The effective tax rate at ₹20 LPA is approximately 8.5% on taxable income.' } },
          { '@type': 'Question', name: 'What is 25 LPA in hand salary per month?', acceptedAnswer: { '@type': 'Answer', text: 'For ₹25 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,56,000. Monthly deductions include Employee PF (₹12,500), Professional Tax (₹200), and TDS income tax (₹21,989). The effective tax rate at ₹25 LPA is approximately 11.9% on taxable income.' } },
          { '@type': 'Question', name: 'How can I increase my in-hand salary?', acceptedAnswer: { '@type': 'Answer', text: 'Five effective ways: (1) Opt for NPS employer contribution — employer NPS under 80CCD(2) reduces tax in both regimes. (2) Choose the right tax regime — new regime wins for income under ₹12.75L; compare both above that. (3) Negotiate for higher fixed pay instead of variable pay — variable pay is not monthly. (4) Use Flexible Benefit Plan — meal coupons, fuel reimbursement, internet bills can reduce taxable income. (5) Under old regime, maximize HRA exemption if paying rent.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: '10 LPA In-Hand Salary 2025-26', item: `${SITE_CONFIG.url}/blog/in-hand-salary-calculator-lpa-india` },
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
                <li>/</li><li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li><li className="text-surface-600">In-Hand Salary Guide</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">Salary & Tax</span>
              <span className="text-xs text-surface-400">Updated March 2026 · 10 min read</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">✅ FY 2025-26</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-4 leading-tight tracking-tight">
              10 LPA In-Hand Salary Per Month 2025-26 — Exact Breakdown for 5 LPA to 30 LPA
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-6 max-w-2xl">
              Got a job offer and wondering what actually hits your bank account? This guide gives you
              the exact monthly in-hand salary for every major CTC level — with full deduction breakdown,
              new vs old tax regime comparison, and the hidden components that shrink your take-home.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Published March 29, 2026 · Calculations verified against Income Tax Act FY 2025-26, new tax regime slabs and Section 87A rebate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Jump to</div>
                <ol className="space-y-1.5">
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
                  <Link href="/tools/salary-calculator" className="block w-full text-center bg-brand-600 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                    Calculate Exact Salary →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* Quick answer — featured snippet target */}
              <section id="ctc-vs-inhand">
                <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-6 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">Quick Answer</div>
                  <h2 className="font-bold text-lg text-surface-900 mb-3">CTC vs In-Hand Salary — The Key Difference</h2>
                  <p className="text-sm text-surface-700 leading-relaxed">
                    <strong>CTC (Cost to Company)</strong> is the total annual cost of employing you — including
                    components you never receive monthly like Employer PF and Gratuity.
                    <strong> In-hand salary</strong> is what actually hits your bank account after deducting
                    Employee PF, Professional Tax, and Income Tax (TDS).
                    For most Indians, in-hand salary is <strong>60–75% of CTC</strong>.
                  </p>
                </div>
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why Your CTC and In-Hand Salary Are Different</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    Every Indian who gets a job offer faces the same moment of confusion: the offer letter says
                    ₹10 LPA, but when the first salary hits your account it is ₹71,000 — not ₹83,333 (which is
                    what ₹10 LPA divided by 12 would be). The difference is not an error. It is how Indian
                    salary structures work.
                  </p>
                  <p>
                    Your CTC includes multiple components that are either not paid to you monthly, or are deducted
                    from your gross salary before it reaches your account. Understanding this difference is the
                    most important piece of financial literacy for any salaried Indian.
                  </p>
                </div>
              </section>

              {/* What reduces in-hand */}
              <section id="what-reduces">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">What Reduces Your In-Hand Salary from CTC</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-surface-800 text-sm mb-3 uppercase tracking-wide">Part of CTC but NOT monthly pay</h3>
                    <div className="space-y-2">
                      {[
                        { name: 'Employer PF', pct: '12% of Basic', note: 'Goes to your EPF account, not salary' },
                        { name: 'Gratuity', pct: '4.81% of Basic', note: 'Paid as lump sum after 5 years only' },
                        { name: 'Medical insurance', pct: 'Varies', note: 'Employer pays premium, part of CTC' },
                      ].map(d => (
                        <div key={d.name} className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-xl">
                          <span className="text-rose-500 shrink-0 mt-0.5 text-sm">✗</span>
                          <div>
                            <div className="font-semibold text-rose-900 text-sm">{d.name} <span className="font-normal text-rose-600">({d.pct})</span></div>
                            <div className="text-xs text-rose-700">{d.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-800 text-sm mb-3 uppercase tracking-wide">Deducted from gross salary monthly</h3>
                    <div className="space-y-2">
                      {[
                        { name: 'Employee PF', pct: '12% of Basic', note: 'Your contribution to EPF, tax-saving' },
                        { name: 'Professional Tax', pct: '₹200/month', note: 'State-level tax, max ₹2,400/year' },
                        { name: 'Income Tax (TDS)', pct: 'Per slab', note: 'Monthly TDS based on annual tax liability' },
                      ].map(d => (
                        <div key={d.name} className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                          <span className="text-amber-500 shrink-0 mt-0.5 text-sm">↓</span>
                          <div>
                            <div className="font-semibold text-amber-900 text-sm">{d.name} <span className="font-normal text-amber-700">({d.pct})</span></div>
                            <div className="text-xs text-amber-700">{d.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-800">
                  <strong>Formula:</strong> In-Hand = CTC − Employer PF − Gratuity − Employee PF − Professional Tax − Income Tax (TDS)
                </div>
              </section>

              {/* Salary structure */}
              <section id="structure">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How Indian Salary Structure Works</h2>
                <p className="text-surface-600 leading-relaxed mb-4">
                  All calculations in this guide use a standard salary structure. Your actual structure may differ — always check your offer letter or payslip for exact figures.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-100">
                        <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Component</th>
                        <th className="text-right px-4 py-3 font-semibold text-surface-700">% of CTC</th>
                        <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { c:'Basic Salary', p:'50%', n:'Fixed, taxable; base for PF, HRA, Gratuity (new Labour Code: min 50% of CTC)' },
                        { c:'HRA', p:'~20%', n:'50% of basic for metro, 40% for non-metro; partially tax-exempt in old regime' },
                        { c:'Special Allowance', p:'~22%', n:'Fully taxable; makes up the remaining gross salary' },
                        { c:'Employer PF', p:'~6%', n:'12% of Basic; part of CTC but credited to your EPF account, not monthly pay' },
                        { c:'Gratuity', p:'~2.4%', n:'4.81% of Basic; part of CTC, paid after 5 years service as lump sum' },
                      ].map((r, i) => (
                        <tr key={r.c} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-semibold text-surface-900">{r.c}</td>
                          <td className="px-4 py-3 text-right font-bold text-brand-700">{r.p}</td>
                          <td className="px-4 py-3 text-surface-500 text-xs">{r.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Quick Reference Table */}
              <section id="salary-table">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">Quick Reference — In-Hand Salary for All CTC Levels</h2>
                <p className="text-surface-600 text-sm leading-relaxed mb-4">
                  All figures: New Tax Regime, FY 2025-26, standard structure (Basic = 50% of CTC), Professional Tax ₹200/month.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900 text-white">
                        <th className="text-left px-4 py-3 rounded-tl-2xl font-semibold">CTC</th>
                        <th className="text-right px-4 py-3 font-semibold">Gross/Month</th>
                        <th className="text-right px-4 py-3 font-semibold">TDS/Month</th>
                        <th className="text-right px-4 py-3 font-semibold text-emerald-300">In-Hand/Month</th>
                        <th className="text-right px-4 py-3 rounded-tr-2xl font-semibold">% of CTC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SALARIES.map((s, i) => (
                        <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3">
                            <div className="font-bold text-surface-900">{s.ctcLabel}</div>
                            <div className="text-xs text-surface-400">{s.tag}</div>
                          </td>
                          <td className="px-4 py-3 text-right text-surface-700 font-medium">
                            ₹{s.grossMonthly.toLocaleString('en-IN')}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {s.tdsMonthly === 0
                              ? <span className="text-emerald-600 font-semibold text-xs">₹0 (zero)</span>
                              : <span className="text-rose-600 font-medium">₹{s.tdsMonthly.toLocaleString('en-IN')}</span>
                            }
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="font-bold text-emerald-700 text-base">₹{s.inHandMonthly.toLocaleString('en-IN')}</span>
                          </td>
                          <td className="px-4 py-3 text-right text-surface-500 text-xs">{s.ctcGap}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">
                  * Approximate. Actual figures depend on your exact salary structure, city (professional tax varies), employer PF policy, and variable pay.{' '}
                  <Link href="/tools/salary-calculator" className="text-brand-600 hover:underline">Use our calculator for exact numbers.</Link>
                </p>
              </section>

              {/* Individual breakdowns */}
              {SALARIES.map((s) => (
                <section key={s.id} id={s.id}>
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="font-display font-bold text-2xl text-surface-900">{s.ctcLabel} In-Hand Salary Per Month</h2>
                    <span className="text-xs text-surface-500 bg-surface-100 px-2 py-1 rounded-full shrink-0">{s.tag}</span>
                  </div>

                  {/* Answer box — featured snippet target */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-5">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">{s.ctcLabel} CTC Monthly Take-Home (New Regime, FY 2025-26)</div>
                        <div className="text-4xl font-black text-emerald-700">₹{s.inHandMonthly.toLocaleString('en-IN')}</div>
                        <div className="text-sm text-emerald-700 mt-1">per month · ₹{Math.round(s.inHandAnnual / 100000 * 10) / 10}L annually</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-emerald-600 mb-1">Income Tax</div>
                        <div className={`text-2xl font-bold ${s.tdsMonthly === 0 ? 'text-emerald-700' : 'text-amber-700'}`}>
                          {s.tdsMonthly === 0 ? '₹0' : `₹${s.tdsMonthly.toLocaleString('en-IN')}/mo`}
                        </div>
                        <div className="text-xs text-emerald-600">{s.taxNote.split('—')[0]}</div>
                      </div>
                    </div>
                  </div>

                  {/* Deduction breakdown */}
                  <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-surface-50">
                          <th className="text-left px-4 py-2.5 font-semibold text-surface-600">Component</th>
                          <th className="text-right px-4 py-2.5 font-semibold text-surface-600">Monthly</th>
                          <th className="text-right px-4 py-2.5 font-semibold text-surface-600">Annual</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-2.5 text-surface-700">CTC (Cost to Company)</td>
                          <td className="px-4 py-2.5 text-right text-surface-500 text-xs">—</td>
                          <td className="px-4 py-2.5 text-right font-bold text-surface-900">₹{(s.ctc * 100000).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="bg-surface-50 border-t border-surface-100">
                          <td className="px-4 py-2.5 text-rose-700">− Employer PF (12% of Basic)</td>
                          <td className="px-4 py-2.5 text-right text-rose-600 text-xs">Not paid monthly</td>
                          <td className="px-4 py-2.5 text-right text-rose-600">−₹{s.empPFannual.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-2.5 text-rose-700">− Gratuity (4.81% of Basic)</td>
                          <td className="px-4 py-2.5 text-right text-rose-600 text-xs">Not paid monthly</td>
                          <td className="px-4 py-2.5 text-right text-rose-600">−₹{s.gratuityAnnual.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="bg-emerald-50 border-t border-surface-100">
                          <td className="px-4 py-2.5 font-semibold text-surface-900">= Gross Salary (monthly pay)</td>
                          <td className="px-4 py-2.5 text-right font-bold text-surface-900">₹{s.grossMonthly.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2.5 text-right font-bold text-surface-900">₹{s.grossAnnual.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-2.5 text-amber-700">− Employee PF (12% of Basic)</td>
                          <td className="px-4 py-2.5 text-right text-amber-600">−₹{s.empPF.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2.5 text-right text-amber-600">−₹{(s.empPF * 12).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="bg-surface-50 border-t border-surface-100">
                          <td className="px-4 py-2.5 text-amber-700">− Professional Tax</td>
                          <td className="px-4 py-2.5 text-right text-amber-600">−₹{s.profTax.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2.5 text-right text-amber-600">−₹2,400</td>
                        </tr>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-2.5 text-amber-700">− Income Tax TDS (new regime)</td>
                          <td className="px-4 py-2.5 text-right">
                            {s.tdsMonthly === 0
                              ? <span className="text-emerald-600 font-semibold">₹0</span>
                              : <span className="text-amber-600">−₹{s.tdsMonthly.toLocaleString('en-IN')}</span>
                            }
                          </td>
                          <td className="px-4 py-2.5 text-right">
                            {s.incomeTax === 0
                              ? <span className="text-emerald-600 font-semibold">₹0</span>
                              : <span className="text-amber-600">−₹{s.incomeTax.toLocaleString('en-IN')}</span>
                            }
                          </td>
                        </tr>
                        <tr className="bg-brand-50 border-t-2 border-brand-200">
                          <td className="px-4 py-3 font-bold text-surface-900">= In-Hand Salary</td>
                          <td className="px-4 py-3 text-right font-black text-emerald-700 text-lg">₹{s.inHandMonthly.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-3 text-right font-bold text-emerald-700">₹{s.inHandAnnual.toLocaleString('en-IN')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Tax note */}
                  <div className={`p-4 rounded-xl text-sm mb-4 ${s.tdsMonthly === 0 ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-amber-50 border border-amber-200 text-amber-800'}`}>
                    <strong>Tax note:</strong> {s.taxNote}. {s.verdict}
                  </div>

                  {/* Taxable income breakdown */}
                  <div className="text-xs text-surface-500 leading-relaxed bg-surface-50 border border-surface-100 rounded-xl p-4">
                    <strong>Tax calculation (new regime):</strong> Gross annual ₹{s.grossAnnual.toLocaleString('en-IN')} − Standard deduction ₹75,000 = Taxable income ₹{s.taxableIncome.toLocaleString('en-IN')}.
                    {s.tdsMonthly === 0 ? ' Section 87A rebate (up to ₹60,000) reduces tax to ₹0.' : ` Tax = ₹${s.incomeTax.toLocaleString('en-IN')} (includes 4% cess). Monthly TDS = ₹${s.tdsMonthly.toLocaleString('en-IN')}.`}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 p-4 bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl flex items-center justify-between flex-wrap gap-3">
                    <div className="text-white text-sm">Get your exact in-hand salary based on your actual salary structure</div>
                    <Link href="/tools/salary-calculator" className="bg-white text-brand-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors shrink-0">
                      Use Salary Calculator →
                    </Link>
                  </div>
                </section>
              ))}

              {/* How to increase in-hand */}
              <section id="increase-inhand">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Increase Your In-Hand Salary — 5 Proven Ways</h2>
                <div className="space-y-4">
                  {[
                    {
                      n:'01', title:'Choose the right tax regime',
                      desc:'For income up to ₹12.75 lakh: new regime wins — zero tax. For ₹15L+: compare both regimes based on your deductions. If your HRA + 80C + home loan exceeds ₹3.75L at ₹15L income, old regime saves more. Use our salary calculator to compare.',
                    },
                    {
                      n:'02', title:'Maximize employer NPS contribution (both regimes)',
                      desc:'Ask your employer to contribute to NPS under Section 80CCD(2) — up to 14% of basic in new regime, 10% in old regime. This reduces your taxable income in BOTH regimes, unlike most other deductions. A ₹10,000/month employer NPS contribution can save ₹37,440/year in taxes at ₹20 LPA.',
                    },
                    {
                      n:'03', title:'Negotiate fixed pay over variable pay',
                      desc:'Variable pay (15–30% of CTC) is not paid monthly — it comes annually or quarterly after performance review. Always negotiate your "fixed CTC" separately. A ₹20 LPA offer with 20% variable (₹4L) means your fixed monthly pay is equivalent to ₹16 LPA. Compare fixed pay, not total CTC.',
                    },
                    {
                      n:'04', title:'Use Flexible Benefit Plan (FBP) components',
                      desc:'Many companies offer a Flexible Benefit Plan where you can allocate part of your salary to: Meal coupons (Sodexo/Zeta) — up to ₹2,200/month tax-free; Fuel reimbursement — up to ₹1,800/month; Internet/phone bills — up to ₹2,000/month; LTA — once in 2 years. Together, these can save ₹8,000–12,000/year in taxes.',
                    },
                    {
                      n:'05', title:'Understand and negotiate PF structure',
                      desc:'Employee PF is 12% of Basic. If your company calculates PF on actual basic (not the ₹15,000 ceiling), a ₹50,000 basic means ₹6,000/month goes to PF instead of ₹1,800. While PF builds long-term savings, it reduces monthly take-home. Some companies allow opting for ₹1,800 (minimum ceiling) PF — check if your company allows this.',
                    },
                  ].map(t => (
                    <div key={t.n} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                      <div className="font-black text-2xl text-surface-200 shrink-0">{t.n}</div>
                      <div>
                        <h3 className="font-bold text-surface-900 mb-2">{t.title}</h3>
                        <p className="text-sm text-surface-600 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q:'What is 10 LPA in hand salary per month?', a:'For ₹10 LPA CTC with standard structure (50% basic, new tax regime, FY 2025-26), the monthly in-hand salary is approximately ₹71,129. Under the new tax regime, you pay zero income tax at ₹10 LPA — the Section 87A rebate covers your entire tax liability. Monthly deductions are only Employee PF (₹5,000) and Professional Tax (₹200).' },
                    { q:'Is 10 LPA a good salary in India?', a:'Yes, ₹10 LPA is a solid salary in India for professionals with 3–6 years of experience. It puts you in the top 5% of Indian earners. With a monthly in-hand of ₹71,000, you can maintain a comfortable lifestyle in most Indian cities, save ₹15,000–20,000/month, and build meaningful investments.' },
                    { q:'What is 12 LPA in hand salary per month?', a:'For ₹12 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹85,395. Interestingly, even at ₹12 LPA, your taxable income stays below ₹12 lakh (due to PF and gratuity reducing CTC), so you still pay zero income tax under the new regime.' },
                    { q:'What is 15 LPA in hand salary per month?', a:'For ₹15 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,00,308. At ₹15 LPA, your taxable income crosses the ₹12 lakh rebate limit, so income tax applies — approximately ₹6,486/month in TDS (₹77,833 annual). This is when tax planning becomes important.' },
                    { q:'What is 20 LPA in hand salary per month?', a:'For ₹20 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,29,339. Monthly deductions include Employee PF (₹10,000), Professional Tax (₹200), and TDS (₹13,119). At ₹20 LPA, new vs old tax regime comparison becomes important — choose based on your deductions.' },
                    { q:'What is 25 LPA in hand salary per month?', a:'For ₹25 LPA CTC under the new tax regime FY 2025-26, the monthly in-hand salary is approximately ₹1,56,134. The effective income tax rate at ₹25 LPA is approximately 11.9% of taxable income. Annual TDS is ₹2,63,868 (₹21,989/month).' },
                    { q:'Does professional tax apply to all states?', a:'No. Professional Tax varies by state and is not applicable in all states. States that charge Professional Tax include Maharashtra (₹200/month, ₹300 in February = ₹2,500/year), Karnataka (₹200/month = ₹2,400/year), West Bengal, Andhra Pradesh, Tamil Nadu, Gujarat, and a few others. States like Delhi, Haryana, Rajasthan, Uttar Pradesh, and Himachal Pradesh do NOT levy Professional Tax.' },
                    { q:'Can I reduce Employee PF deduction to increase take-home?', a:'Technically, statutory PF deduction is required if your basic salary is above ₹15,000/month. However, many companies offer an option to cap PF contribution at the statutory minimum (12% of ₹15,000 = ₹1,800/month) instead of 12% of your actual basic salary. If your basic is ₹50,000, this saves ₹4,200/month (₹50,400/year) in mandatory PF deduction, increasing take-home by that amount. Note: lower PF means lower retirement corpus and potentially lower gratuity.' },
                  ].map((faq, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
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

              {/* Key takeaways */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5">Key Takeaways</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'In-hand salary is 60–75% of CTC — not the full CTC divided by 12',
                    'Up to ₹12.75 LPA: zero income tax under new tax regime (87A rebate)',
                    'Employer PF + Gratuity reduce CTC to gross salary before you even see it',
                    'Employee PF (12% of Basic) and Professional Tax (₹200/month) are deducted monthly',
                    'Tax kicks in meaningfully only above ₹15 LPA (taxable income > ₹12L)',
                    'Variable pay is NOT monthly — negotiate on Fixed CTC first',
                    'Employer NPS saves tax in both regimes — ask your employer',
                    'Professional Tax varies by state — Delhi, Haryana pay ₹0',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-brand-400 mt-0.5 shrink-0">✓</span>
                      <span className="text-white/80 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Tools */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/salary-calculator',    icon:'💰', label:'Salary & Gratuity Calculator', desc:'Calculate exact in-hand salary and gratuity from your CTC' },
                    { href:'/emi-calculator',        icon:'🏠', label:'EMI Calculator',               desc:'Calculate home loan, car loan EMI before committing' },
                    { href:'/gst-calculator',        icon:'🧮', label:'GST Calculator',               desc:'Calculate GST on invoices, services, and products' },
                    { href:'/blog/old-vs-new-tax-regime-2025-26', icon:'⚖️', label:'Old vs New Tax Regime', desc:'Which regime saves you more? Complete decision guide' },
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

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Disclaimer:</strong> All salary figures are approximate estimates based on a standard salary structure (Basic = 50% of CTC) and new tax regime for FY 2025-26. Actual in-hand salary depends on your specific salary breakup, employer PF policy, city of residence (professional tax varies), variable pay structure, and investment declarations. Always verify with your HR or payroll department. Tax calculations are based on Income Tax Act FY 2025-26 provisions. Updated March 2026.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}