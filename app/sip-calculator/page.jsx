import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import SIPCalculator from '../../components/tools/SIPCalculator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'SIP Calculator – Mutual Fund SIP Returns Calculator Free',
  description: 'Free SIP calculator online. Calculate mutual fund SIP returns, maturity value, and wealth gained. Step-up SIP, lumpsum calculator included. No signup.',
  keywords: ['sip calculator', 'sip calculator online', 'mutual fund sip calculator', 'sip return calculator', 'sip maturity calculator', 'monthly sip calculator', 'sip calculator india 2026', 'step up sip calculator'],
  alternates: { canonical: `${SITE_CONFIG.url}/sip-calculator` },
  openGraph: {
    title: 'SIP Calculator Online Free – Mutual Fund Returns 2026',
    description: 'Calculate SIP returns, maturity value, and wealth gained instantly. Free, no signup.',
    url: `${SITE_CONFIG.url}/sip-calculator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIP Calculator Online Free – Mutual Fund Returns 2026',
    description: 'Calculate SIP returns, maturity value, and wealth gained instantly. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is SIP and how does it work?', a: 'SIP (Systematic Investment Plan) is a method of investing a fixed amount in a mutual fund at regular intervals — typically monthly. Every month, a fixed amount is auto-debited from your bank account and invested in your chosen mutual fund scheme. You get units at the current NAV (Net Asset Value). Over time, you accumulate units — more units when markets are low (rupee cost averaging) and fewer when markets are high. This removes the need to time the market.' },
  { q: 'How is SIP return calculated?', a: 'SIP returns are calculated using the compound interest formula for recurring deposits. The formula is: M = P × ((1 + r)^n – 1) / r × (1 + r). Where M = Maturity value, P = Monthly SIP amount, r = Monthly interest rate (annual rate ÷ 12 ÷ 100), n = Total number of months. The actual returns depend on the performance of the underlying mutual fund and will vary from the calculator\'s estimate.' },
  { q: 'What is a good SIP return rate to expect?', a: 'Historical average returns by category: Liquid/Debt funds: 6–8% p.a., Large-cap funds (Nifty 50): 11–13% p.a., Flexi-cap/Diversified: 12–15% p.a., Mid-cap funds: 14–18% p.a., Small-cap funds: 15–22% p.a. For long-term goals (10+ years), 12% is a conservative realistic assumption for large-cap equity funds. Past returns do not guarantee future performance.' },
  { q: 'What is a Step-up SIP?', a: 'Step-up SIP (also called Top-up SIP) automatically increases your monthly SIP amount by a fixed percentage every year. For example, a ₹5,000 SIP with 10% annual step-up becomes ₹5,500 in Year 2, ₹6,050 in Year 3, and so on. Step-up SIP is powerful because it aligns your investments with salary increments. A ₹5,000/month SIP with 10% annual step-up for 20 years at 12% returns gives ₹1.01 crore — vs just ₹49.96 lakh with a fixed SIP.' },
  { q: 'SIP vs Lumpsum — which is better?', a: 'SIP is better when: markets are volatile or at high valuations, you have a regular monthly income, you are new to investing, or you want disciplined investing. Lumpsum is better when: markets have corrected significantly (good entry point), you have a large amount available, or for short investment horizons. For most salaried individuals, SIP is the recommended approach due to rupee cost averaging and behavioral benefits of automated investing.' },
  { q: 'What is XIRR in mutual funds?', a: 'XIRR (Extended Internal Rate of Return) is the actual annualized return on your SIP investments, accounting for the timing of each investment. Since each SIP instalment is invested at a different time and earns returns for a different duration, simple CAGR is not accurate. XIRR gives the true per-annum return on your SIP. Our calculator shows the approximate annualized return based on your inputs.' },
  { q: 'Can I withdraw SIP investments before maturity?', a: 'Yes — most mutual funds (except ELSS) allow withdrawal at any time. For liquid funds: instant redemption. For equity funds: T+3 business days. ELSS (tax-saving) funds have a mandatory 3-year lock-in from each SIP instalment date. Early withdrawal from equity funds within 1 year attracts Short Term Capital Gains (STCG) tax at 15%. After 1 year, gains up to ₹1 lakh are exempt and above ₹1 lakh attract Long Term Capital Gains (LTCG) tax at 10%.' },
];

const RETURNS_TABLE = [
  { category: 'Liquid Fund',       rate: '6.5%',  y5: '₹4.18L',   y10: '₹9.64L',   y20: '₹28.15L',  risk: 'Very Low'   },
  { category: 'Debt Fund',         rate: '8%',    y5: '₹4.40L',   y10: '₹11.00L',  y20: '₹36.80L',  risk: 'Low'        },
  { category: 'Large Cap (Nifty)', rate: '12%',   y5: '₹4.89L',   y10: '₹13.96L',  y20: '₹60.01L',  risk: 'Moderate'   },
  { category: 'Flexi Cap',         rate: '14%',   y5: '₹5.15L',   y10: '₹15.91L',  y20: '₹78.36L',  risk: 'Moderate'   },
  { category: 'Mid Cap',           rate: '16%',   y5: '₹5.43L',   y10: '₹18.15L',  y20: '₹1.03Cr',  risk: 'High'       },
  { category: 'Small Cap',         rate: '18%',   y5: '₹5.74L',   y10: '₹20.72L',  y20: '₹1.35Cr',  risk: 'Very High'  },
];

const VARIANTS = [
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'SIP Calculator Online',
      description: 'Free online SIP calculator for mutual fund investments. Calculate monthly SIP returns, maturity value, wealth gained, and step-up SIP projections.',
      url: `${SITE_CONFIG.url}/sip-calculator`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: ['SIP returns calculator', 'Step-up SIP calculator', 'Lumpsum calculator', 'Year-wise growth chart', 'Mutual fund category comparison', 'No signup required'],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Calculators',    item: `${SITE_CONFIG.url}/calculators` },
        { '@type': 'ListItem', position: 3, name: 'SIP Calculator', item: `${SITE_CONFIG.url}/sip-calculator` },
      ],
    },
  ],
};

export default function SIPCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        {/* ── Header ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/emi-calculator" className="hover:text-brand-600 text-brand-600">Calculators</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">SIP Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              SIP Calculator Online – Free Mutual Fund SIP Returns Calculator
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your mutual fund SIP maturity value, total returns, and wealth
              gained instantly. Includes step-up SIP calculator, lumpsum calculator, and
              year-wise growth chart. Free, no signup, runs in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free & Accurate', '📈 Step-Up SIP', '💰 Lumpsum Mode', '📊 Growth Chart', '🏦 All Fund Categories'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SIPCalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        {/* ── SEO Content ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is SIP */}
          <section aria-labelledby="what-is-sip">
            <h2 id="what-is-sip" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is SIP and Why Every Indian Should Start One
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                <strong className="text-surface-800">SIP (Systematic Investment Plan)</strong> is
                the most effective way for salaried Indians to build long-term wealth. Instead
                of trying to time the market with a large lumpsum investment, SIP lets you
                invest a fixed amount — as low as ₹500 per month — automatically on a set date
                every month. The money is deducted from your account and invested in your chosen
                mutual fund at the current NAV.
              </p>
              <p>
                The magic of SIP comes from two forces working together:{' '}
                <strong className="text-surface-800">rupee cost averaging</strong> and{' '}
                <strong className="text-surface-800">compounding</strong>. Rupee cost averaging
                means you automatically buy more units when markets are low and fewer when
                markets are high — reducing your average cost over time without any effort.
                Compounding means your returns also earn returns — creating exponential growth
                over long periods. A ₹5,000/month SIP for 20 years at 12% grows to ₹49.96 lakh —
                on just ₹12 lakh invested.
              </p>
              <p>
                Use our <Link href="/emi-calculator" className="text-brand-700 hover:underline font-medium">EMI calculator</Link> alongside this SIP calculator to plan your finances — determine how much goes toward loan repayment and how much you can invest in SIP from your monthly income. The <Link href="/percentage-calculator-online" className="text-brand-700 hover:underline font-medium">percentage calculator</Link> can help you figure out what percentage of your salary to invest.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="how-to-use">
            <h2 id="how-to-use" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the SIP Calculator — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '💵', title: 'Enter Monthly SIP',    desc: 'Set your monthly SIP amount using the slider. Even ₹500/month makes a significant difference over 20 years.' },
                { step: '02', icon: '📈', title: 'Set Annual Step-up',   desc: 'Optionally set a % increase each year (recommended 10–15%). Step-up SIP dramatically boosts your final corpus.' },
                { step: '03', icon: '🎯', title: 'Choose Expected Rate', desc: 'Select from preset categories (Debt/Large-cap/Midcap/Smallcap) or enter a custom rate. Use 12% for a conservative large-cap estimate.' },
                { step: '04', icon: '✅', title: 'See Results + Chart',  desc: 'Maturity value, wealth gained, and a year-wise growth chart appear instantly. Switch to Lumpsum mode to compare.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Returns by category */}
          <section aria-labelledby="returns-table">
            <h2 id="returns-table" className="font-display font-bold text-2xl text-surface-900 mb-4">
              SIP Returns by Fund Category — ₹5,000/Month Investment
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              This table shows the estimated maturity value of a ₹5,000/month SIP across
              different fund categories at their historical average returns. Use these
              rates in the calculator above for accurate projections.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Fund Category</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Avg Return</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">5 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">10 Years</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">20 Years</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {RETURNS_TABLE.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.category}</td>
                      <td className="px-4 py-3 text-center font-bold text-indigo-700">{row.rate}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.y5}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.y10}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{row.y20}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          row.risk === 'Very Low' ? 'bg-emerald-100 text-emerald-700' :
                          row.risk === 'Low'      ? 'bg-blue-100 text-blue-700' :
                          row.risk === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                          row.risk === 'High'     ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>{row.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Returns shown are illustrative based on historical category averages. Actual mutual fund returns vary. Past performance is not indicative of future results.</p>
          </section>

          {/* Power of step-up SIP */}
          <section aria-labelledby="step-up">
            <h2 id="step-up" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Power of Step-Up SIP — Why You Should Increase Every Year
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              A step-up SIP increases your monthly investment by a fixed percentage every
              year — aligning it with your salary increments. The difference in final corpus
              is dramatic. Here is the comparison for a ₹5,000/month SIP at 12% for 20 years:
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">SIP Type</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Total Invested</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Maturity Value</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Wealth Gained</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Fixed SIP ₹5,000/mo',            invested: '₹12.00L', maturity: '₹49.96L', gains: '₹37.96L', highlight: false },
                    { type: 'Step-up 5%/yr starting ₹5,000',  invested: '₹20.16L', maturity: '₹69.13L', gains: '₹48.97L', highlight: false },
                    { type: 'Step-up 10%/yr starting ₹5,000', invested: '₹34.36L', maturity: '₹1.01Cr', gains: '₹67.17L', highlight: true  },
                    { type: 'Step-up 15%/yr starting ₹5,000', invested: '₹59.99L', maturity: '₹1.64Cr', gains: '₹1.04Cr', highlight: false },
                  ].map((row, i) => (
                    <tr key={row.type} className={row.highlight ? 'bg-indigo-50 border-l-4 border-indigo-500' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">
                        {row.type} {row.highlight && <span className="ml-2 text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded-full">Recommended</span>}
                      </td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.invested}</td>
                      <td className="px-4 py-3 text-right font-bold text-indigo-700">{row.maturity}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{row.gains}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-sm text-indigo-800">
              <strong>Key insight:</strong> A 10% annual step-up (matching a modest salary increment) turns a ₹49.96 lakh corpus into ₹1.01 crore — double the wealth — on the same starting SIP amount. Enable step-up in the calculator above to see your own projection.
            </div>
          </section>

          {/* SIP vs lumpsum */}
          <section aria-labelledby="sip-vs-lumpsum">
            <h2 id="sip-vs-lumpsum" className="font-display font-bold text-2xl text-surface-900 mb-5">
              SIP vs Lumpsum — Which is Better for You?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-indigo-50 border-2 border-indigo-200 rounded-2xl">
                <h3 className="font-display font-bold text-indigo-900 text-lg mb-3">📅 Choose SIP if...</h3>
                <div className="space-y-2 text-sm text-indigo-800">
                  {['You have a regular monthly income', 'Markets are at high valuations', 'You are new to investing', 'You want disciplined automated investing', 'You cannot predict when markets will correct', 'You want to benefit from rupee cost averaging'].map(p => (
                    <div key={p} className="flex gap-2"><span className="text-indigo-500 shrink-0">✓</span><span>{p}</span></div>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
                <h3 className="font-display font-bold text-emerald-900 text-lg mb-3">💰 Choose Lumpsum if...</h3>
                <div className="space-y-2 text-sm text-emerald-800">
                  {['Markets have corrected 20–30% from peak', 'You received a bonus or inheritance', 'Your investment horizon is 10+ years', 'You are comfortable with short-term volatility', 'You want maximum compounding benefit', 'You received proceeds from property sale'].map(p => (
                    <div key={p} className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span><span>{p}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SIP to reach goals */}
          <section aria-labelledby="goals-table">
            <h2 id="goals-table" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Much SIP Do You Need to Reach Your Financial Goals?
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">Assuming 12% annual returns from equity mutual funds:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Goal</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Target Amount</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">SIP for 10 Yrs</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">SIP for 15 Yrs</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">SIP for 20 Yrs</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { goal: 'Emergency Fund',    target: '₹5 Lakh',   y10: '₹1,789',  y15: '₹1,023',  y20: '₹668'    },
                    { goal: 'Child Education',   target: '₹25 Lakh',  y10: '₹8,944',  y15: '₹5,113',  y20: '₹3,341'  },
                    { goal: 'Car Purchase',      target: '₹10 Lakh',  y10: '₹3,578',  y15: '₹2,045',  y20: '₹1,336'  },
                    { goal: 'Home Down Payment', target: '₹50 Lakh',  y10: '₹17,888', y15: '₹10,226', y20: '₹6,682'  },
                    { goal: 'Retirement Corpus', target: '₹2 Crore',  y10: '₹71,553', y15: '₹40,903', y20: '₹26,729' },
                    { goal: '₹1 Crore Target',  target: '₹1 Crore',  y10: '₹35,776', y15: '₹20,451', y20: '₹13,365' },
                  ].map((row, i) => (
                    <tr key={row.goal} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.goal}</td>
                      <td className="px-4 py-3 text-right font-bold text-indigo-700">{row.target}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.y10}</td>
                      <td className="px-4 py-3 text-right text-brand-700 font-medium">{row.y15}</td>
                      <td className="px-4 py-3 text-right text-emerald-700 font-medium">{row.y20}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — SIP Calculator
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

          {/* Variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More SIP Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VARIANTS.map(v => (
                <Link key={v.href} href={v.href} className="flex items-center gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors group">
                  <span className="text-indigo-600">📈</span>
                  <div className="font-semibold text-indigo-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Financial Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/emi-calculator',               icon: '🧮', label: 'EMI Calculator',           desc: 'Calculate loan EMI alongside your SIP investments' },
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',    desc: 'Calculate what % of salary to invest in SIP' },
                { href: '/age-calculator-online',        icon: '🎂', label: 'Age Calculator',           desc: 'Calculate years to your investment goal date' },
                { href: '/home-loan-emi-calculator',     icon: '🏠', label: 'Home Loan EMI Calculator', desc: 'Balance home loan EMI vs SIP investments' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-indigo-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="sip-calculator" />
      <Footer />
    </>
  );
}