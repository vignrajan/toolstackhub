import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import SalaryGratuityCalculator from '../../components/tools/SalaryGratuityCalculator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Salary Calculator India 2026 – Take Home Salary & Gratuity',
  description: 'Free salary calculator India 2026. Calculate take-home salary, CTC breakup, PF, tax (old & new regime). Includes gratuity calculator with 15/26 formula.',
  keywords: [
    'salary calculator india', 'take home salary calculator', 'in hand salary calculator india',
    'ctc calculator', 'net salary calculator india', 'gratuity calculator india',
    'gratuity calculator 2026', 'salary breakup calculator', 'salary calculator new regime',
    'gratuity formula india', 'ctc to in hand salary calculator', 'salary after tax india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/salary-calculator` },
  openGraph: {
    title: 'Salary & Gratuity Calculator India 2026 – Free, Instant, No Login',
    description: 'Calculate take-home salary, CTC breakup, and gratuity instantly. Old & new tax regime. Free.',
    url: `${SITE_CONFIG.url}/salary-calculator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary & Gratuity Calculator India 2026 – Free, Instant, No Login',
    description: 'Calculate take-home salary, CTC breakup, and gratuity instantly. Old & new tax regime. Free.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is in-hand salary and how is it calculated?', a: 'In-hand salary (take-home pay) is the amount credited to your bank account after all deductions. Formula: In-hand = Gross Salary − Employee PF (12% of basic) − Professional Tax − Income Tax (TDS). Gross Salary = CTC − Employer PF (12% of basic) − Gratuity Provision (4.81% of basic). For a ₹10L CTC with ₹4L basic: Gross ≈ ₹8.85L, and in-hand ≈ ₹6.8–7.2L depending on tax regime and state.' },
  { q: 'What is gratuity in India?', a: 'Gratuity is a statutory benefit paid by an employer to an employee as a token of appreciation for their long service. It is governed by the Payment of Gratuity Act, 1972. An employee becomes eligible for gratuity after completing 5 years of continuous service with the same employer. It is payable at the time of retirement, resignation, termination, or death/disablement.' },
  { q: 'How is gratuity calculated in India 2026?', a: 'For employees covered under the Gratuity Act: Gratuity = (15 × Last Drawn Basic+DA × Years of Service) ÷ 26. For employees not covered: Gratuity = (15 × Last Drawn Basic+DA × Years of Service) ÷ 30. Example: Basic+DA = ₹50,000/month, 8 years of service → Gratuity = (15 × 50,000 × 8) ÷ 26 = ₹2,30,769. Years are rounded up to the next full year if additional months ≥ 6.' },
  { q: 'Who is eligible for gratuity?', a: 'Eligibility for gratuity requires: (1) Minimum 5 years of continuous service with the same employer. (2) The employer must have 10 or more employees (smaller employers may still pay voluntarily). Exceptions: gratuity is payable before 5 years in cases of death or disablement due to accident or disease — the legal heir or nominee receives the amount.' },
  { q: 'Is gratuity taxable in India?', a: 'Gratuity is tax-exempt up to ₹20 lakh for employees covered under the Payment of Gratuity Act (private sector). For government employees, gratuity is fully tax-exempt with no upper limit. Any amount above ₹20 lakh is added to income and taxed at the applicable slab rate. The exemption is available under Section 10(10) of the Income Tax Act.' },
  { q: 'What is the difference between CTC, Gross Salary, and Net Salary?', a: 'CTC (Cost to Company) is the total annual cost the employer incurs for you — includes your gross salary + employer PF (12% of basic) + gratuity provision (4.81% of basic) + any other benefits. Gross Salary is what you earn before employee-side deductions — CTC minus employer PF and gratuity. Net Salary (In-Hand) is what reaches your bank account — Gross minus employee PF, professional tax, and income tax.' },
  { q: 'Which tax regime is better — old or new?', a: 'The new regime is typically better if your total deductions under the old regime are less than ₹3.75 lakh. The old regime is better if you have significant deductions: 80C investments (₹1.5L) + HRA exemption (₹80K–2L) + home loan interest (up to ₹2L) + 80D (₹25K) adding up to ₹4L+. For most salaried employees with a home loan in a metro city, the old regime can still save ₹50,000–1,50,000 in tax annually.' },
  { q: 'Is PF deducted from in-hand salary?', a: 'Yes — Employee PF (12% of basic salary) is deducted from your gross salary each month. The employer also contributes 12% but this is an additional cost and goes directly to your EPF account. If your basic salary exceeds ₹15,000/month, PF deduction above this threshold is voluntary — you and your employer can mutually agree to limit PF to ₹15,000 basic, increasing your in-hand.' },
  { q: 'What is professional tax and does it apply to everyone?', a: 'Professional tax is a state government levy on salaried employees. Maharashtra (₹2,400/yr), Karnataka (₹2,400/yr), Tamil Nadu (₹2,496/yr), and West Bengal (₹2,400/yr) charge it. States like Delhi, Haryana, Rajasthan, UP, Bihar, and Jharkhand do not charge professional tax. It is deductible from your taxable income and is paid by the employer on your behalf (deducted from salary).' },
  { q: 'How much gratuity will I get for 10 years of service?', a: 'For 10 years of service under the Gratuity Act: Gratuity = (15 × Basic+DA × 10) ÷ 26. Examples: Basic ₹30,000 → Gratuity = ₹1,73,077. Basic ₹50,000 → Gratuity = ₹2,88,462. Basic ₹1,00,000 → Gratuity = ₹5,76,923. All three are tax-free since they are below ₹20 lakh.' },
];

const VARIANTS = [
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Salary & Gratuity Calculator India 2026',
      description: 'Free online salary and gratuity calculator for India. Calculate take-home salary, CTC breakup, PF, tax under old and new regime, and gratuity with 15/26 formula.',
      url: `${SITE_CONFIG.url}/salary-calculator`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Take-home salary calculator India 2026',
        'CTC to in-hand salary calculator',
        'Old and new tax regime comparison',
        'HRA exemption calculation',
        'PF deduction calculator',
        'Professional tax by state',
        'Gratuity calculator with 15/26 formula',
        'Gratuity eligibility checker',
        'No signup required',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
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
        { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${SITE_CONFIG.url}/calculators` },
        { '@type': 'ListItem', position: 3, name: 'Salary Calculator', item: `${SITE_CONFIG.url}/salary-calculator` },
      ],
    },
  ],
};

export default function SalaryCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        {/* ── Hero / Header ────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/emi-calculator" className="hover:text-brand-600 text-brand-600">Calculators</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Salary Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Salary & Gratuity Calculator India 2026 – Calculate Take Home Salary Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your exact in-hand salary from CTC with full PF, professional tax,
              and income tax breakdown. Includes old vs new tax regime comparison, HRA
              exemption, and a complete gratuity calculator with the 15/26 formula.
              Free, instant, no login required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ No Login Required','⚡ Instant Calculation','🧮 Old & New Regime','📊 Full CTC Breakup','🎁 Gratuity Calculator','🏛️ State-wise PT'].map(b=>(
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculator ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SalaryGratuityCalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        {/* ── Rich SEO Content ─────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* CTC vs Gross vs Net explained */}
          <section aria-labelledby="salary-components">
            <h2 id="salary-components" className="font-display font-bold text-2xl text-surface-900 mb-4">
              CTC vs Gross Salary vs Net Salary — The Exact Difference
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Most Indian employees receive an offer letter stating CTC (Cost to Company) but see a very different figure in their bank account. Here is exactly how the three numbers relate:
            </p>
            <div className="bg-surface-900 rounded-2xl p-6 mb-6 font-mono text-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">Salary Calculation Flow</div>
              <div className="space-y-2 leading-7">
                <div className="text-white">CTC (₹12,00,000/year)</div>
                <div className="text-rose-300 ml-4">− Employer PF contribution (12% of basic = ₹57,600)</div>
                <div className="text-rose-300 ml-4">− Gratuity provision (4.81% of basic = ₹23,088)</div>
                <div className="text-amber-300 ml-2">= Gross Salary (₹11,19,312/year = ₹93,276/month)</div>
                <div className="mt-3 text-rose-300 ml-8">− Employee PF (12% of basic = ₹57,600/year)</div>
                <div className="text-rose-300 ml-8">− Professional Tax (₹2,400/year in Maharashtra)</div>
                <div className="text-rose-300 ml-8">− Income Tax TDS (approx. ₹47,000/year at new regime)</div>
                <div className="text-emerald-300 font-bold ml-6">= Net / In-Hand (approx. ₹84,026/month)</div>
              </div>
            </div>
            <p className="text-surface-600 leading-relaxed">
              For this ₹12L CTC example, the take-home is approximately ₹84,000/month — 30% less than the CTC figure. Use our{' '}
              <Link href="/tools/percentage-calculator" className="text-brand-700 hover:underline font-medium">percentage calculator</Link>{' '}
              to verify any deduction percentages, and the{' '}
              <Link href="/tools/emi-calculator" className="text-brand-700 hover:underline font-medium">EMI calculator</Link>{' '}
              to determine what home loan your in-hand salary can comfortably support.
            </p>
          </section>

          {/* Salary breakup table */}
          <section aria-labelledby="salary-examples">
            <h2 id="salary-examples" className="font-display font-bold text-2xl text-surface-900 mb-4">
              In-Hand Salary for All CTC Brackets — India 2026
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Approximate monthly in-hand salary under the new tax regime, assuming basic = 40% of CTC, Maharashtra professional tax:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    {['Annual CTC','Gross/Month','PF/Month','TDS/Month','In-Hand/Month','% of CTC'].map((h,i)=>(
                      <th key={h} className={`px-4 py-3 font-semibold text-surface-700 ${i===0?'text-left rounded-tl-xl':'text-right'} ${i===5?'rounded-tr-xl':''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {ctc:'₹3 LPA',  gross:'₹22,500',  pf:'₹1,440', tds:'₹0',     net:'₹20,660', pct:'83%', hi:false},
                    {ctc:'₹5 LPA',  gross:'₹37,500',  pf:'₹2,400', tds:'₹0',     net:'₹34,700', pct:'83%', hi:false},
                    {ctc:'₹7 LPA',  gross:'₹52,500',  pf:'₹3,360', tds:'₹0',     net:'₹48,740', pct:'83%', hi:false},
                    {ctc:'₹10 LPA', gross:'₹75,000',  pf:'₹4,800', tds:'₹2,200', net:'₹67,500', pct:'81%', hi:true },
                    {ctc:'₹15 LPA', gross:'₹1,12,500',pf:'₹7,200', tds:'₹6,800', net:'₹97,900', pct:'78%', hi:false},
                    {ctc:'₹20 LPA', gross:'₹1,50,000',pf:'₹9,600', tds:'₹13,500',net:'₹1,25,700',pct:'75%',hi:false},
                    {ctc:'₹25 LPA', gross:'₹1,87,500',pf:'₹12,000',tds:'₹21,200',net:'₹1,52,900',pct:'73%',hi:false},
                    {ctc:'₹30 LPA', gross:'₹2,25,000',pf:'₹14,400',tds:'₹29,000',net:'₹1,80,400',pct:'72%',hi:false},
                  ].map((r,i)=>(
                    <tr key={r.ctc} className={r.hi?'bg-blue-50 border-l-4 border-blue-500':i%2===0?'bg-white':'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.ctc}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{r.gross}</td>
                      <td className="px-4 py-3 text-right text-rose-600">{r.pf}</td>
                      <td className="px-4 py-3 text-right text-rose-600">{r.tds}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{r.net}</td>
                      <td className="px-4 py-3 text-right text-surface-500">{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Approximate. Actual values vary by salary structure, state, and declared investments. Use the calculator above for your exact figures.</p>
          </section>

          {/* Gratuity guide */}
          <section aria-labelledby="gratuity-guide">
            <h2 id="gratuity-guide" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Gratuity Calculator India 2026 — Complete Guide
            </h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                <strong className="text-surface-800">Gratuity</strong> is a statutory benefit mandated by the{' '}
                <strong className="text-surface-800">Payment of Gratuity Act, 1972</strong>. Every employer with
                10 or more employees must pay gratuity to eligible employees. It is a significant component of
                retirement benefits that many employees overlook during salary negotiations.
              </p>

              <div className="bg-surface-900 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">Gratuity Formula (Covered Employees)</div>
                <div className="font-mono text-white text-sm leading-7">
                  <div>Gratuity = (15 × Last Basic+DA × Completed Years) ÷ 26</div>
                  <div className="mt-3 text-emerald-300 text-xs space-y-1">
                    <div>15 = days of wages per year of service</div>
                    <div>26 = working days in a month (26 days, excluding Sundays)</div>
                    <div>Months ≥ 6 are rounded up to the next year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gratuity examples */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Basic+DA/Month</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">5 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">10 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">15 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">20 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">25 Years</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {sal:'₹20,000', v:['₹57,692','₹1,15,385','₹1,73,077','₹2,30,769','₹2,88,462']},
                    {sal:'₹30,000', v:['₹86,538','₹1,73,077','₹2,59,615','₹3,46,154','₹4,32,692']},
                    {sal:'₹50,000', v:['₹1,44,231','₹2,88,462','₹4,32,692','₹5,76,923','₹7,21,154']},
                    {sal:'₹75,000', v:['₹2,16,346','₹4,32,692','₹6,49,038','₹8,65,385','₹10,81,731']},
                    {sal:'₹1,00,000',v:['₹2,88,462','₹5,76,923','₹8,65,385','₹11,53,846','₹14,42,308']},
                  ].map((r,i)=>(
                    <tr key={r.sal} className={i%2===0?'bg-white':'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.sal}</td>
                      {r.v.map((v,j)=>(
                        <td key={j} className="px-4 py-3 text-right font-medium text-emerald-700">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tax regime comparison */}
          <section aria-labelledby="tax-regime">
            <h2 id="tax-regime" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Old Tax Regime vs New Tax Regime 2026 — Which Saves More?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h3 className="font-bold text-blue-900 text-base mb-3">🆕 New Tax Regime (Default)</h3>
                <div className="text-xs font-bold text-blue-600 mb-2">2026-27 Tax Slabs</div>
                <div className="space-y-1 text-xs text-blue-800 font-mono mb-3">
                  {[['Up to ₹3L','Nil'],['₹3L–₹7L','5%'],['₹7L–₹10L','10%'],
                    ['₹10L–₹12L','15%'],['₹12L–₹15L','20%'],['Above ₹15L','30%']].map(([r,t])=>(
                    <div key={r} className="flex justify-between"><span>{r}</span><span className="font-bold">{t}</span></div>
                  ))}
                </div>
                <div className="text-[10px] text-blue-700 bg-blue-100 p-2 rounded-lg space-y-1">
                  <div>✓ Standard deduction: ₹75,000</div>
                  <div>✓ Rebate u/s 87A: zero tax up to ₹7L income</div>
                  <div>✗ No 80C, HRA, home loan, 80D</div>
                </div>
              </div>
              <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                <h3 className="font-bold text-amber-900 text-base mb-3">📋 Old Tax Regime</h3>
                <div className="text-xs font-bold text-amber-600 mb-2">2026-27 Tax Slabs</div>
                <div className="space-y-1 text-xs text-amber-800 font-mono mb-3">
                  {[['Up to ₹2.5L','Nil'],['₹2.5L–₹5L','5%'],['₹5L–₹10L','20%'],['Above ₹10L','30%']].map(([r,t])=>(
                    <div key={r} className="flex justify-between"><span>{r}</span><span className="font-bold">{t}</span></div>
                  ))}
                </div>
                <div className="text-[10px] text-amber-700 bg-amber-100 p-2 rounded-lg space-y-1">
                  <div>✓ 80C deductions up to ₹1.5L</div>
                  <div>✓ HRA exemption for rent payers</div>
                  <div>✓ Home loan interest up to ₹2L (Sec 24b)</div>
                  <div>✓ 80D medical insurance up to ₹25K</div>
                </div>
              </div>
            </div>

            {/* Which regime wins by salary */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Annual Income</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">New Regime Tax</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Old Regime Tax*</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Better Regime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {inc:'₹7 Lakh',    newT:'₹0 (rebate)',  oldT:'₹25,000',   better:'🆕 New',   hi:false},
                    {inc:'₹10 Lakh',   newT:'₹54,600',      oldT:'₹72,500',   better:'🆕 New',   hi:false},
                    {inc:'₹12 Lakh',   newT:'₹83,200',      oldT:'₹82,500',   better:'📋 Old',   hi:false},
                    {inc:'₹15 Lakh',   newT:'₹1,45,600',    oldT:'₹1,32,500', better:'📋 Old',   hi:true },
                    {inc:'₹20 Lakh',   newT:'₹2,96,400',    oldT:'₹2,82,500', better:'📋 Old',   hi:false},
                    {inc:'₹25 Lakh',   newT:'₹4,46,400',    oldT:'₹4,32,500', better:'📋 Old',   hi:false},
                  ].map((r,i)=>(
                    <tr key={r.inc} className={r.hi?'bg-surface-100 font-semibold':i%2===0?'bg-white':'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.inc}</td>
                      <td className="px-4 py-3 text-right text-blue-700">{r.newT}</td>
                      <td className="px-4 py-3 text-right text-amber-700">{r.oldT}</td>
                      <td className="px-4 py-3 text-right font-bold text-surface-900">{r.better}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-surface-400 mt-2">*Old regime assumes 80C (₹1.5L) + HRA (₹80K) + 80D (₹25K) deductions. Actual savings vary.</p>
            </div>
          </section>

          {/* HRA + PF guide */}
          <section aria-labelledby="allowances">
            <h2 id="allowances" className="font-display font-bold text-2xl text-surface-900 mb-5">
              HRA, PF, and Allowances — How Each Component Affects Your Take-Home
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'HRA (House Rent Allowance)', icon: '🏠', color: 'blue',
                  points: ['Typically 40–50% of basic salary','Metro city employees get 50% of basic HRA','Non-metro get 40% of basic','Fully taxable if you live in your own home or don\'t pay rent','Can save ₹50,000–2,00,000/year in tax if you pay rent (old regime only)','Submit rent receipts to HR by December each year'] },
                { title: 'Employee Provident Fund (PF)', icon: '💼', color: 'emerald',
                  points: ['Employee contributes 12% of basic each month','Employer matches with another 12% (included in CTC)','Current EPF interest rate: 8.15% p.a. (FY2025-26)','Withdrawable after 2 months of unemployment','Tax-free on withdrawal after 5 years','VPF (Voluntary PF) lets you contribute more with same tax benefits'] },
                { title: 'DA (Dearness Allowance)', icon: '📈', color: 'amber',
                  points: ['Primarily applicable for government employees','Revised twice yearly (January and July) for central govt employees','Currently 50% of basic for central govt employees','Private sector companies rarely offer DA','Fully taxable — no exemption available in either regime','Included in gratuity calculation (Basic + DA)'] },
                { title: 'Special Allowance', icon: '⚙️', color: 'violet',
                  points: ['Balancing component — makes up remaining CTC after all components','Fully taxable in both old and new tax regimes','No exemption available','Companies maximize this when offering higher CTC to reduce structured benefits','Shows as "Special Allowance" or "Flexible Component" on salary slip','No PF deduction on special allowance (unless VPF opted)'] },
              ].map(c => (
                <div key={c.title} className={`p-5 bg-${c.color}-50 border border-${c.color}-200 rounded-2xl`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{c.icon}</span>
                    <h3 className={`font-bold text-${c.color}-900`}>{c.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {c.points.map(p => (
                      <li key={p} className={`flex items-start gap-2 text-xs text-${c.color}-800`}>
                        <span className="shrink-0 mt-0.5">•</span><span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Salary & Gratuity Calculator
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More Salary & Gratuity Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VARIANTS.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">💰</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Financial Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/emi-calculator',               icon: '🧮', label: 'EMI Calculator',           desc: 'Calculate home loan affordable on your in-hand salary' },
                { href: '/tools/sip-calculator',               icon: '📈', label: 'SIP Calculator',           desc: 'Invest your savings for long-term wealth' },
                { href: '/tools/gst-calculator',               icon: '🧾', label: 'GST Calculator',           desc: 'Calculate GST for freelance and business income' },
                { href: '/tools/invoice-generator',            icon: '📄', label: 'Invoice Generator',        desc: 'Create professional invoices for freelance work' },
                { href: '/tools/percentage-calculator', icon: '📊', label: 'Percentage Calculator',    desc: 'Calculate salary hike percentage and deductions' },
                { href: '/tools/home-loan-emi-calculator',     icon: '🏠', label: 'Home Loan EMI Calculator', desc: 'Plan a home loan based on your take-home salary' },
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
      <RelatedToolsCluster currentSlug="salary-calculator" />
      <Footer />
    </>
  );
}