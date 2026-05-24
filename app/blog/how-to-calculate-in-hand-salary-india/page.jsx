import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SalaryGratuityCalculator from '../../../components/tools/SalaryGratuityCalculator';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'How to Calculate In-Hand Salary in India (2026)',
  description: 'Calculate your exact in-hand salary from CTC free. PF, professional tax, old vs new regime explained with examples for ₹3L to ₹30L CTC.',
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-calculate-in-hand-salary-india` },
  openGraph: {
    title: 'How to Calculate In-Hand Salary in India (2026)',
    description: 'Free in-hand salary calculator India. CTC to take-home formula, PF, tax explained with worked examples.',
    url: `${SITE_CONFIG.url}/blog/how-to-calculate-in-hand-salary-india`,
    type: 'article',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate In-Hand Salary in India (2026) – Free Calculator',
    description: 'Calculate your exact in-hand salary from CTC free. PF deduction, professional tax, old vs new regime, income tax explained with examples for ₹3L to ₹30L CTC.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'How do I calculate my in-hand salary from CTC?',
    a: 'In-hand salary = CTC − Employer PF (12% of basic) − Gratuity provision (4.81% of basic) − Employee PF (12% of basic) − Professional Tax − Income Tax (TDS). Basic salary is typically 40–50% of CTC. Use the free salary calculator above to get your exact figure instantly.',
  },
  {
    q: 'What percentage of CTC is in-hand salary?',
    a: 'Typically 70–80% of CTC is your in-hand (take-home) salary. The remaining 20–30% goes toward employer PF, gratuity provision, employee PF deduction, professional tax, and income tax. For a ₹10L CTC, expect ₹7L–8L as annual take-home depending on tax regime and state.',
  },
  {
    q: 'Is PF deducted from in-hand salary?',
    a: 'Yes — Employee PF (12% of basic salary) is deducted from your gross salary every month. The employer also contributes 12% of basic as an additional cost (included in CTC). If your basic exceeds ₹15,000/month, PF deduction above this threshold is voluntary.',
  },
  {
    q: 'What is professional tax and who pays it?',
    a: 'Professional tax is a state government levy. Maharashtra and Karnataka charge ₹2,400/year, Tamil Nadu ₹2,496/year, West Bengal ₹2,400/year. States like Delhi, Haryana, and Rajasthan charge zero professional tax. Your employer deducts it from your monthly salary.',
  },
  {
    q: 'How much income tax is deducted from salary?',
    a: 'Under the new tax regime (FY 2026-27): Up to ₹3L — nil, ₹3L–7L — 5%, ₹7L–10L — 10%, ₹10L–12L — 15%, ₹12L–15L — 20%, above ₹15L — 30%. Section 87A rebate makes income up to ₹7L effectively zero tax. Standard deduction of ₹75,000 applies in new regime.',
  },
  {
    q: 'What is HRA and how does it reduce tax?',
    a: 'HRA (House Rent Allowance) is typically 40–50% of basic salary. If you live in a rented home, you can claim HRA exemption under the old tax regime — exempt amount is the lowest of: actual HRA received, 50% of basic (metro) or 40% (non-metro), or rent paid minus 10% of basic. This can save ₹80,000–₹2,00,000+ in tax annually.',
  },
  {
    q: 'Which tax regime gives more in-hand salary?',
    a: 'New regime is better if your deductions under old regime are below ₹3.75 lakh. Old regime is better if you have: 80C investments (₹1.5L) + HRA exemption (₹80K–2L) + home loan interest (up to ₹2L) + 80D (₹25K) totalling ₹4L+. Use the salary calculator above — it calculates tax under both regimes so you can compare directly.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Calculate In-Hand Salary in India (2026) – Free Salary Calculator',
      description: 'Complete guide to calculating in-hand salary from CTC in India. Includes free salary calculator, PF, professional tax, income tax examples for all salary ranges.',
      url: `${SITE_CONFIG.url}/blog/how-to-calculate-in-hand-salary-india`,
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
      author: { '@type': 'Organization', name: 'ToolStackHub Team', url: SITE_CONFIG.url },
      publisher: {
        '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url,
        logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/how-to-calculate-in-hand-salary-india` },
      keywords: 'in hand salary calculator india, ctc to in hand salary, salary calculator india 2026, take home salary calculator, pf deduction salary, income tax on salary india',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: 'In-Hand Salary India', item: `${SITE_CONFIG.url}/blog/how-to-calculate-in-hand-salary-india` },
      ],
    },
  ],
};

export default function PostInHandSalary() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Post header ─────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">In-Hand Salary India</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Finance</span>
              <span className="text-sm text-surface-400">10 min read · March 25, 2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-5">
              How to Calculate In-Hand Salary in India (2026) – CTC to Take-Home Guide
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              Your offer letter says ₹12 LPA. Your account gets credited ₹78,000. Where did
              the rest go? This guide explains exactly how CTC translates to in-hand salary —
              with a free interactive calculator, full formula breakdown, every deduction
              explained, and worked examples for salary ranges from ₹3L to ₹30L CTC.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">💰</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Team</div>
                <div className="text-xs text-surface-400">Updated March 25, 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────────── */}
        <div className="h-36 sm:h-44 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">💰</div>
            <div className="text-white/70 text-sm font-medium">CTC → Gross → Net → In-Hand</div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* ── Intro ─────────────────────────────────────── */}
          <section>
            <p className="text-surface-700 text-lg leading-relaxed">
              "CTC" (Cost to Company) is one of India's most misunderstood salary concepts.
              It is not what you earn — it is what you <em>cost</em> your employer. Your actual
              in-hand salary after all deductions can be 20–35% lower than your CTC.
              Understanding this difference is critical for salary negotiation, budgeting,
              EMI planning, and tax optimization.
            </p>
            <p className="text-surface-600 leading-relaxed mt-4">
              This guide walks through every component of an Indian salary slip, explains
              what gets deducted and why, and gives you a free interactive calculator to
              see your exact numbers instantly. Use our{' '}
              <Link href="/emi-calculator" className="text-brand-700 hover:underline font-medium">
                EMI calculator
              </Link>{' '}
              to check what home loan your in-hand salary can comfortably support, and the{' '}
              <Link href="/sip-calculator" className="text-brand-700 hover:underline font-medium">
                SIP calculator
              </Link>{' '}
              to plan how to invest your monthly savings.
            </p>
          </section>

          {/* ── EMBEDDED CALCULATOR ───────────────────────── */}
          <section aria-labelledby="calculator-heading">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">⚡</div>
              <h2 id="calculator-heading" className="font-display font-bold text-2xl text-surface-900">
                Free In-Hand Salary Calculator — Calculate Instantly
              </h2>
            </div>
            <p className="text-surface-600 leading-relaxed mb-5">
              Enter your CTC below to see your exact monthly take-home salary, full
              salary breakup, all deductions, and gratuity amount — all calculated instantly
              under both old and new tax regimes. No signup, no ads, 100% free.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['✅ No Login Required', '⚡ Instant Results', '🏛️ Old & New Regime', '🎁 Includes Gratuity', '🔒 Private — No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>

            {/* Calculator */}
            <SalaryGratuityCalculator />

            {/* Post-calculator CTA */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-blue-900 text-sm">Want more options? Try the full calculator page</div>
                <div className="text-xs text-blue-700 mt-0.5">State-wise professional tax, HRA exemption, home loan deduction, and 25+ salary variants</div>
              </div>
              <Link href="/salary-calculator"
                className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Full Salary Calculator →
              </Link>
            </div>
          </section>

          {/* ── CTC formula explained ────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              The CTC to In-Hand Salary Formula Explained
            </h2>
            <div className="bg-surface-900 rounded-2xl p-6 mb-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">Salary Calculation Chain</div>
              <div className="space-y-2 font-mono text-sm leading-7">
                <div className="text-white">CTC (your offer letter number)</div>
                <div className="text-rose-300 ml-4">− Employer PF (12% of basic salary)</div>
                <div className="text-rose-300 ml-4">− Gratuity Provision (4.81% of basic)</div>
                <div className="text-amber-300 ml-2">= Gross Salary (appears on payslip)</div>
                <div className="text-rose-300 ml-8 mt-2">− Employee PF (12% of basic salary)</div>
                <div className="text-rose-300 ml-8">− Professional Tax (₹200/month in most states)</div>
                <div className="text-rose-300 ml-8">− Income Tax / TDS (based on your slab)</div>
                <div className="text-emerald-300 font-bold ml-6 mt-2">= NET IN-HAND SALARY 💰 (your bank credit)</div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              <strong>Example:</strong> ₹12L CTC, basic = 40% (₹4.8L), Maharashtra state.<br />
              Employer PF = ₹57,600 · Gratuity = ₹23,088 · Gross = ₹11,19,312<br />
              Employee PF = ₹57,600 · PT = ₹2,400 · TDS ≈ ₹47,000<br />
              <strong>In-hand ≈ ₹84,026/month</strong> — 30% less than CTC headline.
            </div>
          </section>

          {/* ── Salary components ────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Every Component of an Indian Salary Slip Explained
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Basic Salary',              pct: '40–50% of CTC',     type: 'earning',     desc: 'Foundation of your salary. PF, gratuity, and HRA are all calculated as a percentage of basic. Higher basic = higher PF deduction but also better HRA exemption eligibility.' },
                { name: 'HRA (House Rent Allowance)',pct: '40–50% of Basic',   type: 'earning',     desc: 'Fully taxable if you own your home. If you pay rent, claim HRA exemption under old regime — saves ₹50,000–₹2L in tax annually for metro residents.' },
                { name: 'Special Allowance',         pct: 'Balancing figure',  type: 'earning',     desc: 'Remaining CTC after all defined components. Fully taxable. Companies adjust this to reach the total CTC figure — no PF deduction on this component.' },
                { name: 'LTA (Leave Travel Allow.)', pct: 'Varies',            type: 'earning',     desc: 'Exempt for actual travel costs twice in a 4-year block under old regime. Declared through HR annually. Paid as part of salary each month.' },
                { name: 'Employee PF',               pct: '12% of Basic',      type: 'deduction',   desc: 'Mandatory for salaries with basic up to ₹15,000. Builds your EPF retirement corpus at ~8.15% interest. Goes to your account, not lost.' },
                { name: 'Professional Tax',          pct: '₹2,400/year max',   type: 'deduction',   desc: 'State government levy. Maharashtra, Karnataka, Tamil Nadu charge ₹200/month. Delhi, Haryana, Rajasthan: zero. Deductible from taxable income under old regime.' },
                { name: 'Income Tax (TDS)',           pct: 'As per slab',       type: 'deduction',   desc: 'Employer deducts estimated annual tax ÷ 12 each month. Based on your declared regime and investment declarations submitted at year start.' },
                { name: 'Employer PF',               pct: '12% of Basic',      type: 'ctccomponent',desc: 'Company\'s EPF contribution — goes to your account, not paid as salary. Included in CTC calculation, which is why CTC exceeds Gross Salary.' },
                { name: 'Gratuity Provision',        pct: '4.81% of Basic',    type: 'ctccomponent',desc: 'Accrues at 15 days basic per year. Paid after 5 years of service. Included in CTC but you won\'t receive it if you leave before 5 years.' },
              ].map(c => (
                <div key={c.name} className={`flex gap-4 p-4 rounded-xl border ${
                  c.type === 'earning'      ? 'bg-emerald-50 border-emerald-200' :
                  c.type === 'deduction'    ? 'bg-rose-50 border-rose-200' :
                                             'bg-amber-50 border-amber-200'
                }`}>
                  <div className={`shrink-0 text-xs font-black px-2 py-1 rounded-lg h-fit mt-0.5 ${
                    c.type === 'earning'      ? 'bg-emerald-200 text-emerald-800' :
                    c.type === 'deduction'    ? 'bg-rose-200 text-rose-800' :
                                               'bg-amber-200 text-amber-800'
                  }`}>
                    {c.type === 'earning' ? '+' : c.type === 'deduction' ? '−' : 'CTC'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-semibold text-surface-900 text-sm">{c.name}</span>
                      <span className="text-[10px] text-surface-500 bg-surface-100 px-1.5 py-0.5 rounded">{c.pct}</span>
                    </div>
                    <p className="text-xs text-surface-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── In-hand salary table ─────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              In-Hand Salary for All CTC Brackets — India 2026
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Approximate monthly take-home under the new tax regime, assuming basic = 40%
              of CTC, Maharashtra professional tax. Use the calculator above for your exact state and regime.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Annual CTC</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Gross/Month</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">PF/Month</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">TDS/Month</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">In-Hand/Month</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ctc: '₹3 LPA',  gross: '₹22,500',   pf: '₹1,440', tds: '₹0',     net: '₹20,660', hi: false },
                    { ctc: '₹5 LPA',  gross: '₹37,500',   pf: '₹2,400', tds: '₹0',     net: '₹34,700', hi: false },
                    { ctc: '₹7 LPA',  gross: '₹52,500',   pf: '₹3,360', tds: '₹0',     net: '₹48,740', hi: false },
                    { ctc: '₹10 LPA', gross: '₹75,000',   pf: '₹4,800', tds: '₹2,200', net: '₹67,500', hi: true  },
                    { ctc: '₹15 LPA', gross: '₹1,12,500', pf: '₹7,200', tds: '₹6,800', net: '₹97,900', hi: false },
                    { ctc: '₹20 LPA', gross: '₹1,50,000', pf: '₹9,600', tds: '₹13,500',net: '₹1,25,700',hi: false},
                    { ctc: '₹30 LPA', gross: '₹2,25,000', pf: '₹14,400',tds: '₹29,000',net: '₹1,80,400',hi: false},
                  ].map((row, i) => (
                    <tr key={row.ctc} className={row.hi ? 'bg-blue-50 border-l-4 border-blue-500' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{row.ctc}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.gross}</td>
                      <td className="px-4 py-3 text-right text-rose-600">{row.pf}</td>
                      <td className="px-4 py-3 text-right text-rose-600">{row.tds}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{row.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              * Approximate values. Enter your exact CTC in the calculator above for precise results.
            </p>
          </section>

          {/* ── Old vs new regime ────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Old Tax Regime vs New Tax Regime — Which Gives More In-Hand?
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The new regime (default from FY 2024-25) has lower slab rates but no deductions.
              The old regime has higher rates but allows 80C, HRA, and home loan deductions.
              The calculator above lets you toggle between both and compare instantly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h3 className="font-bold text-blue-900 mb-3">🆕 New Tax Regime (Default)</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex gap-2"><span>✓</span><span>Lower slab rates</span></div>
                  <div className="flex gap-2"><span>✓</span><span>Zero tax up to ₹7L (with rebate)</span></div>
                  <div className="flex gap-2"><span>✓</span><span>Standard deduction ₹75,000</span></div>
                  <div className="flex gap-2"><span>✗</span><span>No 80C, 80D, HRA exemption</span></div>
                  <div className="flex gap-2"><span>✗</span><span>No home loan interest deduction</span></div>
                  <div className="mt-3 text-xs bg-blue-100 p-2 rounded-lg">
                    <strong>Best for:</strong> Salary below ₹7L, or those with minimal investments
                  </div>
                </div>
              </div>
              <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                <h3 className="font-bold text-amber-900 mb-3">📋 Old Tax Regime</h3>
                <div className="space-y-2 text-sm text-amber-800">
                  <div className="flex gap-2"><span>✓</span><span>80C deduction up to ₹1.5L</span></div>
                  <div className="flex gap-2"><span>✓</span><span>HRA exemption for rent payers</span></div>
                  <div className="flex gap-2"><span>✓</span><span>Home loan interest up to ₹2L</span></div>
                  <div className="flex gap-2"><span>✓</span><span>80D medical insurance up to ₹25K</span></div>
                  <div className="flex gap-2"><span>✗</span><span>Higher base slab rates</span></div>
                  <div className="mt-3 text-xs bg-amber-100 p-2 rounded-lg">
                    <strong>Best for:</strong> High earners with home loan + 80C + HRA combining ₹4L+ deductions
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-700">
              <strong>Rule of thumb:</strong> If your total old-regime deductions (80C + HRA + home loan interest + 80D)
              exceed ₹3.75L for income up to ₹15L, the old regime likely saves more tax.
              Switch the "Tax Regime" toggle in the calculator above to compare both regimes side-by-side for your exact salary.
            </div>

            {/* Mid-article CTA */}
            <div className="mt-5 p-5 rounded-2xl border-2 border-blue-200 bg-blue-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-blue-900">Calculate your exact take-home under both regimes</div>
                <div className="text-sm text-blue-700 mt-0.5">Use the free salary calculator at the top of this page — just toggle between Old and New regime</div>
              </div>
              <a href="#calculator-heading"
                className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                ↑ Back to Calculator
              </a>
            </div>
          </section>

          {/* ── 5 ways to increase in-hand ───────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              5 Legal Ways to Increase Your Monthly In-Hand Salary
            </h2>
            <div className="space-y-3">
              {[
                {
                  n: 1,
                  title: 'Restructure salary to include more tax-free allowances',
                  desc: 'Ask HR to restructure your CTC to include: Meal coupons (₹2,200/month tax-free), Fuel allowance (₹19,200/year), Telephone reimbursement (₹1,200/month). These are real perks that reduce taxable income without reducing your CTC.',
                },
                {
                  n: 2,
                  title: 'Maximize 80C investments under old regime',
                  desc: 'Invest ₹1.5L in ELSS (3-year lock-in), PPF, or EPF VPF. At 30% tax bracket, this saves ₹45,000/year = ₹3,750/month more in-hand. Use our SIP calculator to plan ELSS investments and grow this corpus simultaneously.',
                },
                {
                  n: 3,
                  title: 'Claim HRA exemption if you pay rent',
                  desc: 'Submit rent receipts to your HR by December. Metro city residents paying ₹25,000/month rent on a ₹15L CTC can save ₹80,000–₹1,20,000 in taxes annually. Enter your rent amount in the salary calculator above (old regime mode) to see your exact saving.',
                },
                {
                  n: 4,
                  title: 'Opt out of PF contribution above ₹15,000 basic',
                  desc: 'If your basic salary exceeds ₹15,000/month, PF deduction above this threshold is voluntary. Opting out increases monthly take-home immediately but reduces your retirement savings. Evaluate this carefully against your overall financial plan.',
                },
                {
                  n: 5,
                  title: 'Claim home loan interest under Section 24(b)',
                  desc: 'Home loan interest up to ₹2L/year is deductible under old regime. On a ₹50L loan at 8.5%, the first-year interest is ~₹4.2L — you can claim ₹2L deduction, saving ₹60,000 at the 30% bracket. Use our home loan EMI calculator to plan the right loan amount.',
                },
              ].map(t => (
                <div key={t.n} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">{t.n}</div>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{t.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — In-Hand Salary India
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── Related tools ────────────────────────────── */}
          <section className="p-5 bg-surface-50 border border-surface-200 rounded-2xl">
            <h3 className="font-display font-bold text-lg text-surface-900 mb-4">
              Related Free Financial Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/salary-calculator',        icon: '💰', label: 'Salary & Gratuity Calculator',  desc: 'Full calculator with old/new regime, HRA, PF, gratuity' },
                { href: '/emi-calculator',           icon: '🧮', label: 'EMI Calculator',               desc: 'Calculate home loan affordable on your in-hand salary' },
                { href: '/sip-calculator',           icon: '📈', label: 'SIP Calculator',               desc: 'Grow your monthly savings through mutual fund SIPs' },
                { href: '/gst-calculator',           icon: '🧾', label: 'GST Calculator',               desc: 'Calculate GST for freelance and business income' },
                { href: '/home-loan-emi-calculator', icon: '🏠', label: 'Home Loan EMI Calculator',     desc: 'Plan a home loan based on your take-home salary' },
                { href: '/percentage-calculator-online',icon:'📊',label:'Percentage Calculator',        desc: 'Calculate salary hike % and deduction amounts' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-3 bg-white border border-surface-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-blue-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Final CTA ────────────────────────────────── */}
          <div className="rounded-2xl p-7 text-center border-2 border-blue-200"
            style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)' }}>
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-display font-bold text-xl text-blue-900 mb-2">
              Calculate Your Exact In-Hand Salary Now
            </h3>
            <p className="text-blue-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
              Use the free salary calculator at the top of this page. Enter your CTC,
              select your state and tax regime, and see your exact monthly take-home
              instantly — with full salary breakup and gratuity calculation included.
            </p>
            <a href="#calculator-heading"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-colors">
              ↑ Calculate My Salary Free →
            </a>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-blue-600">
              <span>✓ No signup</span>
              <span>✓ Instant results</span>
              <span>✓ Old & New regime</span>
              <span>✓ Gratuity included</span>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}