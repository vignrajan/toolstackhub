import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Old vs New Regime for 15 LPA Salary — FY 2026-27',
  description: 'Which tax regime saves more on a 15 LPA salary? Full FY 2026-27 comparison with exact calculations, monthly in-hand, and break-even deduction amount.',
  keywords: [
    'old regime vs new regime for 15 lpa salary 2026-27',
    '15 lpa in-hand salary old vs new regime',
    'which tax regime is better for 15 lpa',
    'tax on 15 lpa salary new regime 2026',
    '15 lpa salary breakup 2026-27',
    '15 lpa monthly take home',
    'section 87a rebate 15 lpa',
    'old regime vs new regime calculator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/old-vs-new-regime-15-lpa-salary-2026-27` },
  openGraph: {
    title: 'Old vs New Regime for 15 LPA Salary — FY 2026-27',
    description: 'Exact rupee-by-rupee comparison of old vs new tax regime for 15 LPA. Monthly in-hand, break-even deductions, and a clear verdict.',
    url: `${SITE_CONFIG.url}/blog/old-vs-new-regime-15-lpa-salary-2026-27`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old vs New Regime for 15 LPA Salary — FY 2026-27',
    description: 'Which tax regime saves more on a 15 LPA salary? Full FY 2026-27 comparison with exact calculations, monthly in-hand, and break-even deduction amount.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FAQS = [
  {
    q: 'Is 15 LPA salary tax-free under new regime?',
    a: 'No. The tax-free threshold under the new regime is ₹12 lakh (₹12.75 lakh for salaried after standard deduction). A 15 LPA salary results in a taxable income of ₹13,67,325 under the new regime — well above the ₹12 lakh rebate threshold. You pay ₹88,503 in total tax.',
  },
  {
    q: 'How much tax do I pay on 15 LPA under new regime 2026-27?',
    a: 'Under the new regime FY 2026-27, total tax on a 15 LPA standard salary structure is ₹88,503 (after 4% cess). This breaks down as: ₹20,000 (5% slab) + ₹40,000 (10% slab) + ₹25,099 (15% slab) = ₹85,099 + ₹3,404 cess. Monthly TDS is approximately ₹7,375.',
  },
  {
    q: 'Which is better for 15 LPA — old or new tax regime?',
    a: 'For most 15 LPA earners without a home loan, the new regime saves ₹29,223 per year (₹2,436/month) even with maximum standard deductions of ₹4,40,000 under the old regime. You need total deductions exceeding ₹5,79,330 — achievable only with a large home loan — for the old regime to win.',
  },
  {
    q: 'What is the monthly in-hand salary for 15 LPA?',
    a: 'Under new regime: approximately ₹1,10,819/month. Under old regime (with ₹4,40,000 deductions): approximately ₹1,08,383/month. Both figures assume standard salary structure, ₹1,800 employee PF, and ₹200 professional tax (Bengaluru). Your actual figure depends on your salary breakup — use our calculator to verify.',
  },
  {
    q: 'Can I switch tax regime mid-year at 15 LPA?',
    a: 'Salaried employees cannot switch regimes mid-year for TDS purposes. You must declare your preferred regime to your employer at the start of the financial year (April). However, you can choose a different regime when filing your ITR by July 31, 2026, if your employer deducted TDS under the wrong regime.',
  },
  {
    q: 'Does Section 87A rebate apply to 15 LPA salary?',
    a: 'No. The Section 87A rebate (₹60,000 under new regime) applies only when taxable income is ₹12 lakh or below. A 15 LPA salary produces a taxable income of ₹13,67,325 under the new regime — exceeding the threshold. No rebate applies, and the full ₹88,503 tax is payable.',
  },
];

export default function OldVsNewRegime15LPABlog() {
  const publishDate = '2026-04-05';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Old vs New Regime for 15 LPA Salary — FY 2026-27',
        description: 'Exact rupee-by-rupee tax comparison for 15 LPA salary under old and new regime FY 2026-27.',
        url: `${SITE_CONFIG.url}/blog/old-vs-new-regime-15-lpa-salary-2026-27`,
        datePublished: publishDate,
        dateModified: publishDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Old vs New Regime 15 LPA', item: `${SITE_CONFIG.url}/blog/old-vs-new-regime-15-lpa-salary-2026-27` },
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
                <li className="text-surface-600">Old vs New Regime — 15 LPA</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Income Tax</span>
              <span className="text-xs text-surface-400">Updated April 5, 2026 · 12 min read</span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">FY 2026-27</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              Old vs New Regime for 15 LPA Salary —
              <span className="text-brand-600"> FY 2026-27 (Exact Numbers)</span>
            </h1>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-800 leading-relaxed">
              <strong>Methodology & Disclaimer:</strong> Calculations verified against the Income Tax Act 2025 (effective April 1, 2026) and FY 2026-27 slab rates. Salary structure assumes Basic = 50% of CTC, HRA = 50% of Basic, Employer PF = 12% of ₹15,000 statutory wage, Gratuity = 4.81% of Basic. Last updated April 5, 2026. This guide is for educational purposes — consult a CA for personalised tax advice.
            </div>

            {/* Hook */}
            <div className="space-y-3 text-surface-600 text-lg leading-relaxed">
              <p>
                Your appraisal just hit 15 LPA. Or you just got an offer letter. And your HR portal is asking you to declare your tax regime for FY 2026-27 — by end of week.
              </p>
              <p>
                Here's what makes 15 LPA different from any salary below it: this is the first CTC level where your tax regime choice <strong className="text-surface-800">actually costs or saves you real money</strong>. Below ₹12.75 LPA, the new regime gives zero tax regardless — there's nothing to decide. At 15 LPA, you're paying tax either way, and the regime you pick determines whether that's ₹88,503 or ₹1,17,726 this year.
              </p>
              <p>
                The difference is <strong className="text-surface-800">₹29,223 per year — ₹2,436 every month</strong>. This guide gives you the rupee-by-rupee calculation so you know exactly which regime wins for your situation.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">All calculations verified step-by-step against Income Tax Act 2025, FY 2026-27 slab rates.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* TOC */}
          <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">In This Guide</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { href:'#salary-structure',   label:'15 LPA Salary Structure Breakup'        },
                { href:'#new-regime',          label:'New Regime Calculation (Step by Step)'  },
                { href:'#old-regime',          label:'Old Regime Calculation (Step by Step)'  },
                { href:'#comparison',          label:'Side-by-Side Comparison Table'          },
                { href:'#breakeven',           label:'Break-Even Deduction Amount'            },
                { href:'#verdict',             label:'Which Regime for Your Scenario?'        },
                { href:'#changes-2026',        label:'FY 2026-27 Changes That Affect You'     },
                { href:'#faq',                 label:'FAQs'                                   },
              ].map(item => (
                <a key={item.href} href={item.href}
                  className="text-xs text-surface-600 hover:text-brand-700 transition-colors flex items-center gap-2">
                  <span className="text-brand-400">→</span>{item.label}
                </a>
              ))}
            </div>
          </div>

          {/* SALARY STRUCTURE */}
          <section id="salary-structure">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">15 LPA Salary Structure — What You Actually Receive</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              We calculated this using the standard salary structure most Indian IT and service companies follow. Before comparing regimes, you need to know your actual gross salary — which is not ₹15,00,000. Your CTC includes employer contributions that never hit your account.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Component</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">Annual (₹)</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Monthly (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { comp:'CTC (Cost to Company)',              annual:'15,00,000', monthly:'1,25,000', bold:false, note:'' },
                    { comp:'Basic Salary (50% of CTC)',          annual:'7,50,000',  monthly:'62,500',   bold:false, note:'' },
                    { comp:'HRA (50% of Basic)',                 annual:'3,75,000',  monthly:'31,250',   bold:false, note:'' },
                    { comp:'Special Allowance (balance)',        annual:'3,17,325',  monthly:'26,444',   bold:false, note:'' },
                    { comp:'Less: Employer PF (12% of ₹15,000)',annual:'(21,600)',   monthly:'(1,800)',  bold:false, note:'Not in your hand' },
                    { comp:'Less: Gratuity (4.81% of Basic)',    annual:'(36,075)',   monthly:'(3,006)',  bold:false, note:'Paid on exit' },
                    { comp:'Gross Annual Salary',                annual:'14,42,325', monthly:'1,20,194', bold:true,  note:'What you earn' },
                  ].map((r, i) => (
                    <tr key={r.comp} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 ${r.bold ? 'font-black text-surface-900' : 'text-surface-700'}`}>
                        {r.comp}
                        {r.note && <span className="text-xs text-surface-400 ml-2">({r.note})</span>}
                      </td>
                      <td className={`px-4 py-3 text-right font-mono ${r.bold ? 'font-black text-brand-700 text-base' : 'text-surface-700'}`}>{r.annual}</td>
                      <td className={`px-4 py-3 text-right font-mono ${r.bold ? 'font-black text-brand-700 text-base' : 'text-surface-700'}`}>{r.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-surface-500 leading-relaxed">
              Your gross salary is <strong className="text-surface-800">₹14,42,325</strong> — not ₹15 lakh. This is the number both regimes will calculate tax on. Your salary breakup may differ — check your payslip or offer letter for actual components.
            </p>
          </section>

          {/* NEW REGIME */}
          <section id="new-regime">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Tax Calculation Under New Regime — 15 LPA (Step by Step)</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Under the new regime (Section 115BAC of the Income Tax Act 2025, effective April 1, 2026), deductions are minimal. You get the standard deduction of ₹75,000 and almost nothing else in a standard salaried scenario.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { step:'Gross Annual Salary',         amount:'₹14,42,325', sign:'',   class:'surface' },
                { step:'Less: Standard Deduction',    amount:'₹75,000',    sign:'−',  class:'rose'    },
                { step:'Taxable Income',              amount:'₹13,67,325', sign:'=',  class:'brand'   },
              ].map(r => (
                <div key={r.step} className={`flex items-center justify-between p-4 rounded-xl ${
                  r.class === 'brand' ? 'bg-brand-50 border border-brand-200' :
                  r.class === 'rose'  ? 'bg-rose-50 border border-rose-200' :
                  'bg-surface-50 border border-surface-200'}`}>
                  <span className={`font-semibold text-sm ${r.class === 'brand' ? 'text-brand-900' : 'text-surface-800'}`}>
                    {r.sign && <span className="mr-2 text-rose-500">{r.sign}</span>}{r.step}
                  </span>
                  <span className={`font-black text-lg font-mono ${r.class === 'brand' ? 'text-brand-700' : 'text-surface-900'}`}>{r.amount}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-lg text-surface-900 mb-3">Slab-Wise Tax Calculation (New Regime FY 2026-27)</h3>
            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Income Slab</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Rate</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">Calculation</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Tax (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { slab:'₹0 – ₹4,00,000',          rate:'Nil', calc:'₹4,00,000 × 0%',                       tax:'0',      bg:true  },
                    { slab:'₹4,00,001 – ₹8,00,000',    rate:'5%',  calc:'₹4,00,000 × 5%',                       tax:'20,000', bg:false },
                    { slab:'₹8,00,001 – ₹12,00,000',   rate:'10%', calc:'₹4,00,000 × 10%',                      tax:'40,000', bg:true  },
                    { slab:'₹12,00,001 – ₹13,67,325',  rate:'15%', calc:'₹1,67,325 × 15%',                      tax:'25,099', bg:false },
                    { slab:'Total Income Tax',          rate:'',    calc:'',                                      tax:'85,099', bg:true  },
                    { slab:'87A Rebate',                rate:'',    calc:'Taxable income ₹13.67L > ₹12L limit',  tax:'NIL',    bg:false },
                    { slab:'Health & Education Cess',   rate:'4%',  calc:'₹85,099 × 4%',                         tax:'3,404',  bg:true  },
                    { slab:'Total Tax Payable',         rate:'',    calc:'',                                      tax:'88,503', bg:false },
                  ].map((r, i) => (
                    <tr key={r.slab} className={r.bg ? 'bg-surface-50' : 'bg-white'}>
                      <td className={`px-4 py-3 ${(r.slab.startsWith('Total') || r.slab === 'Health & Education Cess') ? 'font-bold text-surface-900' : 'text-surface-700'}`}>{r.slab}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{r.rate}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs text-surface-500">{r.calc}</td>
                      <td className={`px-4 py-3 text-right font-mono font-bold ${r.slab === 'Total Tax Payable' ? 'text-brand-700 text-base' : 'text-surface-900'}`}>
                        {r.tax === '0' ? '—' : `₹${r.tax}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New regime in-hand box */}
            <div className="bg-emerald-600 rounded-2xl p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-3">📱 Monthly In-Hand Salary — New Regime</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                {[
                  { label:'Monthly Gross',   val:'₹1,20,194', sub:'' },
                  { label:'Employee PF',     val:'− ₹1,800',  sub:'12% of ₹15,000' },
                  { label:'Professional Tax',val:'− ₹200',    sub:'Karnataka' },
                  { label:'Monthly TDS',     val:'− ₹7,375',  sub:'₹88,503 ÷ 12' },
                ].map(c => (
                  <div key={c.label} className="bg-white/10 rounded-xl p-3">
                    <div className="text-xs text-emerald-200 mb-0.5">{c.label}</div>
                    <div className="font-bold text-white">{c.val}</div>
                    {c.sub && <div className="text-xs text-emerald-300 mt-0.5">{c.sub}</div>}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-bold text-xl">Monthly In-Hand (New Regime)</span>
                <span className="font-black text-3xl">₹1,10,819</span>
              </div>
            </div>
          </section>

          {/* OLD REGIME */}
          <section id="old-regime">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Tax Calculation Under Old Regime — 15 LPA (Step by Step)</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The old regime allows multiple deductions — but they must all be legitimate and documented. We've used realistic numbers for a Bengaluru-based IT professional paying ₹20,000/month rent with standard investments.
            </p>

            <h3 className="font-bold text-base text-surface-900 mb-3">Deductions Available (Old Regime)</h3>
            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Deduction</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Section</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Amount (₹)</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ded:'Standard Deduction',    sec:'Section 16',       amt:'50,000',  note:'Lower than new regime (₹75,000)' },
                    { ded:'HRA Exemption',          sec:'Section 10(13A)',  amt:'1,65,000',note:'See HRA calculation below' },
                    { ded:'EPF + ELSS/PPF',         sec:'Section 80C',      amt:'1,50,000',note:'₹21,600 EPF + ₹1,28,400 investments' },
                    { ded:'Health Insurance',       sec:'Section 80D',      amt:'25,000',  note:'Self + spouse + children' },
                    { ded:'NPS (own contribution)', sec:'Section 80CCD(1B)',amt:'50,000',  note:'Optional — increases savings' },
                    { ded:'Total Deductions',       sec:'',                 amt:'4,40,000',note:'', bold:true },
                  ].map((r, i) => (
                    <tr key={r.ded} className={r.bold ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 ${r.bold ? 'font-black text-surface-900' : 'text-surface-800'}`}>{r.ded}</td>
                      <td className="px-4 py-3 text-xs text-brand-600 font-mono">{r.sec}</td>
                      <td className={`px-4 py-3 text-right font-mono font-bold ${r.bold ? 'text-amber-700 text-base' : 'text-surface-900'}`}>₹{r.amt}</td>
                      <td className="px-4 py-3 text-xs text-surface-400">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* HRA Calc box */}
            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5 mb-5">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">HRA Exemption Calculation [Section 10(13A)]</div>
              <p className="text-sm text-surface-600 leading-relaxed mb-3">
                HRA exemption = <strong>minimum</strong> of three values:
              </p>
              <div className="space-y-2">
                {[
                  { rule:'Rule 1 — Actual HRA received',         calc:'₹3,75,000 per year',                                        result:'₹3,75,000' },
                  { rule:'Rule 2 — Rent paid minus 10% of Basic', calc:'₹2,40,000 (rent) − ₹75,000 (10% of Basic) = ₹1,65,000',  result:'₹1,65,000 ✓ MINIMUM' },
                  { rule:'Rule 3 — 50% of Basic (metro city)',    calc:'50% × ₹7,50,000 = ₹3,75,000',                              result:'₹3,75,000' },
                ].map(r => (
                  <div key={r.rule} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-surface-100">
                    <span className="text-brand-600 shrink-0 font-bold text-xs mt-0.5">→</span>
                    <div>
                      <div className="font-semibold text-surface-800 text-sm">{r.rule}</div>
                      <div className="font-mono text-xs text-surface-500 mt-0.5">{r.calc}</div>
                      <div className="text-xs text-emerald-700 font-bold mt-0.5">= {r.result}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-surface-500 mt-3">HRA exemption = ₹1,65,000 (Rule 2 is the minimum, so this is what's exempt).</p>
            </div>

            <h3 className="font-bold text-base text-surface-900 mb-3">Slab-Wise Tax Calculation (Old Regime)</h3>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 mb-4 font-mono text-sm text-surface-700">
              <div>Gross Salary: ₹14,42,325</div>
              <div className="text-rose-600">Less Deductions: − ₹4,40,000</div>
              <div className="font-black text-surface-900 border-t border-surface-300 mt-2 pt-2">Taxable Income: ₹10,02,325</div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Income Slab</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Rate</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">Calculation</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Tax (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { slab:'₹0 – ₹2,50,000',         rate:'Nil', calc:'₹2,50,000 × 0%',                     tax:'—' },
                    { slab:'₹2,50,001 – ₹5,00,000',   rate:'5%',  calc:'₹2,50,000 × 5%',                     tax:'₹12,500' },
                    { slab:'₹5,00,001 – ₹10,00,000',  rate:'20%', calc:'₹5,00,000 × 20%',                    tax:'₹1,00,000' },
                    { slab:'₹10,00,001 – ₹10,02,325', rate:'30%', calc:'₹2,325 × 30%',                       tax:'₹698' },
                    { slab:'Total Income Tax',         rate:'',    calc:'',                                    tax:'₹1,13,198' },
                    { slab:'87A Rebate',               rate:'',    calc:'Taxable income ₹10.02L > ₹5L limit', tax:'NIL' },
                    { slab:'Health & Education Cess',  rate:'4%',  calc:'₹1,13,198 × 4%',                    tax:'₹4,528' },
                    { slab:'Total Tax Payable',        rate:'',    calc:'',                                    tax:'₹1,17,726' },
                  ].map((r, i) => (
                    <tr key={r.slab} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 ${r.slab.startsWith('Total') || r.slab === 'Health & Education Cess' ? 'font-bold text-surface-900' : 'text-surface-700'}`}>{r.slab}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{r.rate}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs text-surface-500">{r.calc}</td>
                      <td className={`px-4 py-3 text-right font-mono font-bold ${r.slab === 'Total Tax Payable' ? 'text-rose-700 text-base' : 'text-surface-900'}`}>{r.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Old regime in-hand box */}
            <div className="bg-amber-600 rounded-2xl p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-200 mb-3">📱 Monthly In-Hand Salary — Old Regime</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                {[
                  { label:'Monthly Gross',   val:'₹1,20,194', sub:'' },
                  { label:'Employee PF',     val:'− ₹1,800',  sub:'12% of ₹15,000' },
                  { label:'Professional Tax',val:'− ₹200',    sub:'Karnataka' },
                  { label:'Monthly TDS',     val:'− ₹9,811',  sub:'₹1,17,726 ÷ 12' },
                ].map(c => (
                  <div key={c.label} className="bg-white/10 rounded-xl p-3">
                    <div className="text-xs text-amber-200 mb-0.5">{c.label}</div>
                    <div className="font-bold text-white">{c.val}</div>
                    {c.sub && <div className="text-xs text-amber-300 mt-0.5">{c.sub}</div>}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-bold text-xl">Monthly In-Hand (Old Regime)</span>
                <span className="font-black text-3xl">₹1,08,383</span>
              </div>
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section id="comparison">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Side-by-Side Comparison — Old vs New Regime at 15 LPA</h2>

            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Parameter</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">New Regime</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Old Regime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param:'Gross Annual Salary',       newVal:'₹14,42,325',  oldVal:'₹14,42,325',  highlight:false },
                    { param:'Total Deductions Claimed',  newVal:'₹75,000',     oldVal:'₹4,40,000',   highlight:false },
                    { param:'Taxable Income',            newVal:'₹13,67,325',  oldVal:'₹10,02,325',  highlight:false },
                    { param:'Income Tax (before cess)',  newVal:'₹85,099',     oldVal:'₹1,13,198',   highlight:false },
                    { param:'Health & Education Cess',   newVal:'₹3,404',      oldVal:'₹4,528',      highlight:false },
                    { param:'Total Tax Payable',         newVal:'₹88,503',     oldVal:'₹1,17,726',   highlight:false },
                    { param:'Annual In-Hand Salary',     newVal:'₹13,29,828',  oldVal:'₹13,00,596',  highlight:false },
                    { param:'Monthly In-Hand Salary',    newVal:'₹1,10,819',   oldVal:'₹1,08,383',   highlight:true  },
                    { param:'Tax Saved vs Other Regime', newVal:'₹29,223 saved',oldVal:'Pays ₹29,223 more', highlight:false },
                  ].map((r, i) => (
                    <tr key={r.param} className={r.highlight ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 ${r.highlight ? 'font-black text-brand-900 text-base' : 'font-semibold text-surface-800'}`}>{r.param}</td>
                      <td className={`px-4 py-3 text-right font-mono ${r.highlight ? 'font-black text-emerald-700 text-xl' : 'font-bold text-emerald-700'}`}>{r.newVal}</td>
                      <td className={`px-4 py-3 text-right font-mono ${r.highlight ? 'font-bold text-surface-700 text-base' : 'text-surface-700'}`}>{r.oldVal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-5">
              <div className="font-black text-emerald-900 text-lg">
                🏆 Verdict: New Regime wins at 15 LPA with standard deductions.
              </div>
              <p className="text-emerald-800 text-sm mt-2 leading-relaxed">
                With deductions of ₹4,40,000 (80C + 80D + HRA + NPS), the new regime saves <strong>₹29,223 per year — ₹2,436 every month</strong>. The old regime pays significantly more tax despite claiming all common deductions.
              </p>
            </div>
          </section>

          {/* BREAK-EVEN */}
          <section id="breakeven">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The Break-Even Point — How Much Deduction Makes Old Regime Worth It?</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              This is the most important calculation. Under the new regime, your tax is ₹88,503. For the old regime to match this, your taxable income needs to drop to a specific level. Here's the math:
            </p>

            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5 mb-5 font-mono text-sm text-surface-700 space-y-2">
              <div>New regime tax target: <strong className="text-surface-900">₹88,503</strong></div>
              <div>Tax before cess: 88,503 ÷ 1.04 = <strong className="text-surface-900">₹85,099</strong></div>
              <div className="pt-2 border-t border-surface-200">Old regime slabs to reach ₹85,099:</div>
              <div className="pl-4">0–2.5L: ₹0</div>
              <div className="pl-4">2.5–5L: 5% × ₹2,50,000 = ₹12,500</div>
              <div className="pl-4">Remaining: 85,099 − 12,500 = ₹72,599 ÷ 20% = ₹3,62,995 in the 20% slab</div>
              <div className="pl-4">Taxable income needed: ₹5,00,000 + ₹3,62,995 = <strong className="text-surface-900">₹8,62,995</strong></div>
              <div className="pt-2 border-t border-surface-200">Deductions needed: ₹14,42,325 − ₹8,62,995 = <strong className="text-brand-700">₹5,79,330</strong></div>
            </div>

            <div className="bg-brand-50 border-2 border-brand-500 rounded-2xl p-6 mb-5">
              <div className="font-black text-brand-900 text-lg mb-2">📊 The Break-Even Rule for 15 LPA</div>
              <p className="text-brand-800 leading-relaxed">
                <strong>If your total deductions (80C + 80D + HRA + NPS + home loan interest + any other) exceed ₹5,79,330 → choose Old Regime.</strong>
              </p>
              <p className="text-brand-700 text-sm mt-2 leading-relaxed">
                <strong>Below ₹5,79,330 in total deductions → New Regime saves more.</strong>
              </p>
            </div>

            <p className="text-surface-600 leading-relaxed mb-3">
              You're currently claiming ₹4,40,000 in standard deductions. To reach ₹5,79,330, you need an additional <strong className="text-surface-800">₹1,39,330</strong>. The only realistic source at 15 LPA is home loan interest under Section 24(b).
            </p>

            <div className="bg-surface-50 border border-surface-200 rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">With Home Loan (Section 24b) — Old Regime Can Win</div>
              <div className="font-mono text-sm text-surface-700 space-y-1">
                <div>Deductions (standard ₹4,40,000 + home loan interest ₹2,00,000) = <strong className="text-surface-900">₹6,40,000</strong></div>
                <div>Taxable income: 14,42,325 − 6,40,000 = <strong className="text-surface-900">₹8,02,325</strong></div>
                <div>Old regime tax: (0 + 12,500 + 60,465) × 1.04 = <strong className="text-emerald-700">₹75,884</strong></div>
                <div>New regime tax: <strong className="text-surface-700">₹88,503</strong></div>
                <div className="pt-2 border-t border-surface-200 font-bold text-emerald-700">Old regime saves: ₹12,619/year = ₹1,052/month</div>
              </div>
            </div>
          </section>

          {/* VERDICT SCENARIOS */}
          <section id="verdict">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Which Regime Should You Choose? (Your Scenario)</h2>
            <div className="space-y-4">
              {[
                {
                  scenario:'I only have PF and no other investments',
                  verdict:'New Regime ✅',
                  color:'emerald',
                  detail:'With only EPF (which is within the ₹75K standard deduction anyway), your deductions are far below ₹5,79,330. New regime saves you ₹29,223/year with zero investment effort.',
                },
                {
                  scenario:'I pay ₹20,000 rent in Bengaluru + invest ₹1.5L in 80C + ₹25K in 80D + ₹50K in NPS',
                  verdict:'New Regime ✅ (still)',
                  color:'emerald',
                  detail:'Even with ₹4,40,000 in total deductions, new regime wins by ₹29,223/year. You\'re still ₹1,39,330 short of the break-even. Keep the investments for wealth-building, but choose new regime for tax.',
                },
                {
                  scenario:'I have a home loan (₹30,000+ EMI, paying ₹2L interest/year)',
                  verdict:'Old Regime ✅',
                  color:'brand',
                  detail:'With ₹6,40,000 total deductions (standard + home loan), old regime tax drops to ₹75,884 vs new regime ₹88,503. Old regime saves ₹12,619/year. Claim Section 24(b) fully.',
                },
                {
                  scenario:'I\'m a fresher — first job, no investments, no rent paid separately',
                  verdict:'New Regime ✅',
                  color:'emerald',
                  detail:'No investments, no HRA claim, no home loan. Your effective deductions are near zero beyond the standard ₹75,000. New regime is an automatic win — and a simpler filing experience.',
                },
                {
                  scenario:'I invest max in 80C (₹1.5L) + NPS (₹50K) + 80D (₹25K) but NO home loan, NO HRA claim',
                  verdict:'New Regime ✅',
                  color:'emerald',
                  detail:'Deductions = ₹50K standard + ₹1.5L 80C + ₹25K 80D + ₹50K NPS = ₹2,75,000. Well below ₹5,79,330. New regime still saves ~₹20,000+ per year. Reconsider only if you add a home loan.',
                },
              ].map(s => (
                <div key={s.scenario} className={`border-2 ${s.color === 'emerald' ? 'border-emerald-200' : 'border-brand-200'} rounded-2xl overflow-hidden`}>
                  <div className={`px-5 py-3 ${s.color === 'emerald' ? 'bg-emerald-50' : 'bg-brand-50'} flex items-start justify-between gap-3 flex-wrap`}>
                    <h3 className="font-bold text-surface-900 text-sm">"{s.scenario}"</h3>
                    <span className={`text-xs font-black px-3 py-1 rounded-full shrink-0 ${s.color === 'emerald' ? 'bg-emerald-600 text-white' : 'bg-brand-600 text-white'}`}>
                      {s.verdict}
                    </span>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-sm text-surface-700 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CALCULATOR CTA */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8">
            <h2 className="font-display font-bold text-xl text-white mb-2">
              Calculate Your Exact 15 LPA In-Hand Salary
            </h2>
            <p className="text-brand-200 text-sm leading-relaxed mb-5">
              Your actual salary breakup may differ from this standard structure. Our free salary calculator is updated for FY 2026-27 with the new Income Tax Act 2025 slabs, ₹75,000 standard deduction under new regime, and ₹12 lakh 87A rebate threshold.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
              {[
                'Step 1: Open toolstackhub.in/salary-calculator',
                'Step 2: Enter CTC as ₹15,00,000',
                'Step 3: Select your state for Professional Tax',
                'Step 4: Choose Old or New regime',
                'Step 5: Enter your actual deductions',
                'Step 6: See exact monthly in-hand instantly',
              ].map(step => (
                <div key={step} className="flex items-start gap-2 text-brand-100">
                  <span className="text-brand-300 shrink-0 font-bold">→</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <Link href="/tools/salary-calculator"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Calculate My In-Hand Salary for Free →
            </Link>
          </div>

          {/* FY 2026-27 CHANGES */}
          <section id="changes-2026">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">FY 2026-27 Changes That Affect Your 15 LPA Tax</h2>
            <div className="space-y-4">
              {[
                {
                  title:'Income Tax Act 2025 replaces the 1961 Act — from April 1, 2026',
                  detail:'The legislation that governs your taxes has changed. Section numbers are different (the new regime is now under Section 202 instead of 115BAC, for example), but the actual slab rates, deduction amounts, and exemptions are identical. Nothing changes in your tax amount — only the law\'s structure and language.',
                  tag:'Structural change',
                  color:'brand',
                },
                {
                  title:'"Tax Year" replaces "Assessment Year / Previous Year"',
                  detail:'The new Act simplifies terminology. FY 2026-27 is now called Tax Year 2026-27. When your CA or employer mentions "tax year," they mean the same period you used to call "previous year." This is purely a language change.',
                  tag:'Terminology only',
                  color:'surface',
                },
                {
                  title:'New regime stays the default — you must actively opt for old regime',
                  detail:'If you don\'t declare your preference to your employer, they will deduct TDS under the new regime by default. This is fine if new regime wins for you (which it does for most 15 LPA earners). But if you want old regime, you must specifically tell HR — preferably in April before the first salary is processed.',
                  tag:'Action required',
                  color:'amber',
                },
                {
                  title:'Standard deduction under new regime: ₹75,000 (confirmed for FY 2026-27)',
                  detail:'The ₹75,000 standard deduction under new regime — introduced in Union Budget 2024 — continues unchanged in FY 2026-27. Old regime standard deduction stays at ₹50,000. This ₹25,000 gap is one reason the new regime is competitive even for deduction-heavy profiles.',
                  tag:'Confirmed',
                  color:'emerald',
                },
                {
                  title:'87A rebate: ₹12 lakh threshold — does NOT help you at 15 LPA',
                  detail:'The 87A rebate (₹60,000 under new regime) applies when taxable income is ₹12 lakh or below. At 15 LPA, your taxable income under new regime is ₹13,67,325 — above the threshold. No rebate. You pay the full ₹88,503 in tax.',
                  tag:'Does not apply',
                  color:'rose',
                },
              ].map(c => (
                <div key={c.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5 ${
                    c.color === 'brand'   ? 'bg-brand-100 text-brand-700'   :
                    c.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    c.color === 'amber'   ? 'bg-amber-100 text-amber-700'   :
                    c.color === 'rose'    ? 'bg-rose-100 text-rose-700'     :
                    'bg-surface-100 text-surface-700'
                  }`}>{c.tag}</div>
                  <div>
                    <h3 className="font-bold text-surface-900 mb-1">{c.title}</h3>
                    <p className="text-sm text-surface-600 leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   >
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="bg-surface-900 rounded-2xl p-6 text-white">
            <h2 className="font-display font-bold text-xl mb-3" style={{color:'#ffffff'}}>The Verdict for 15 LPA in FY 2026-27</h2>
            <p className="text-sm leading-relaxed mb-4" style={{color:'#a3aac4'}}>
              For most 15 LPA earners without a home loan, the new regime wins by ₹29,223/year. You need deductions exceeding ₹5,79,330 — practically achievable only with a significant home loan — for the old regime to pull ahead. If you have a home loan with ₹2 lakh+ annual interest, do the old regime calculation before deciding. For everyone else: new regime, confidently.
            </p>
            <Link href="/tools/salary-calculator"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
              Use Free Salary Calculator for Your Exact Numbers →
            </Link>
          </section>

          {/* Related */}
          <div>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href:'/blog/income-tax-changes-2026-india',     icon:'📋', label:'Income Tax Changes 2026 India',      desc:'New Tax Act 2025, slabs, ITR deadlines explained' },
                { href:'/blog/old-vs-new-tax-regime-2025-26',     icon:'⚖️', label:'Old vs New Regime — Full Guide',     desc:'Decision table for every income level'           },
                { href:'/salary-calculator',                       icon:'💰', label:'Salary Calculator',                  desc:'CTC to in-hand with regime comparison'           },
                { href:'/blog/in-hand-salary-calculator-lpa-india',icon:'📊', label:'In-Hand Salary for 5–30 LPA',       desc:'Monthly take-home for every CTC level'           },
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
          </div>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> These calculations are verified against the Income Tax Act 2025 and FY 2026-27 slab rates as of April 5, 2026. All figures assume a standard salary structure (Basic = 50% CTC, HRA = 50% Basic, metro city). Your actual tax depends on your specific salary breakup, declared deductions, and state-specific professional tax. Consult a Chartered Accountant for personalised advice. Numbers may vary slightly due to rounding.
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}