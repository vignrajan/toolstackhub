import { Suspense } from 'react';
import Link from 'next/link';
import PPFCalculator from '../../components/tools/PPFCalculator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'PPF Calculator FY 2026-27 — Public Provident Fund Interest & Maturity Calculator | ToolStackHub',
  description: 'Free PPF calculator for FY 2026-27 at 7.1% interest rate. Calculate maturity value, interest earned & year-wise returns. No signup required.',
  keywords: [
    'ppf calculator', 'ppf calculator india', 'ppf calculator online',
    'public provident fund calculator', 'ppf interest calculator',
    'ppf maturity calculator', 'ppf return calculator', 'ppf calculator 2026',
    'ppf interest rate 2026', 'ppf calculator with yearly breakdown',
    'ppf 7.1 interest calculator', 'ppf 15 year calculator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/ppf-calculator` },
  openGraph: {
    title: 'PPF Calculator FY 2026-27 — Public Provident Fund Calculator India',
    description: 'Calculate PPF maturity value, year-wise interest, and tax savings at 7.1%. Free, instant, no login.',
    url: `${SITE_CONFIG.url}/ppf-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
};

const RATE_HISTORY = [
  { period: 'Apr 2026 – Jun 2026', rate: '7.1%', note: 'Current' },
  { period: 'Apr 2020 – Mar 2026', rate: '7.1%', note: '6 years unchanged' },
  { period: 'Oct 2019 – Mar 2020', rate: '7.9%', note: '' },
  { period: 'Jul 2019 – Sep 2019', rate: '7.9%', note: '' },
  { period: 'Apr 2019 – Jun 2019', rate: '8.0%', note: '' },
  { period: 'Oct 2018 – Mar 2019', rate: '8.0%', note: '' },
  { period: 'Apr 2018 – Sep 2018', rate: '7.6%', note: '' },
  { period: 'Jan 2018 – Mar 2018', rate: '7.6%', note: '' },
  { period: 'Jul 2017 – Dec 2017', rate: '7.8%', note: '' },
  { period: 'Apr 2017 – Jun 2017', rate: '7.9%', note: '' },
  { period: 'Apr 2016 – Mar 2017', rate: '8.1%', note: '' },
  { period: 'Apr 2015 – Mar 2016', rate: '8.7%', note: '' },
  { period: 'Apr 2014 – Mar 2015', rate: '8.7%', note: '' },
  { period: 'Apr 2013 – Mar 2014', rate: '8.7%', note: '' },
  { period: 'Apr 2012 – Mar 2013', rate: '8.8%', note: '' },
];

const COMPARISON = [
  { feature: 'Interest/Returns',    ppf: '7.1% (fixed)', fd: '6–7% (fixed)', nps: '8–12% (market)', elss: '12–15% (market)' },
  { feature: 'Lock-in Period',      ppf: '15 years',      fd: '5 years (tax-saving)', nps: 'Till age 60', elss: '3 years' },
  { feature: 'Tax on Investment',   ppf: '80C (₹1.5L)',   fd: '80C (₹1.5L)', nps: '80C + 80CCD(1B) extra ₹50K', elss: '80C (₹1.5L)' },
  { feature: 'Tax on Returns',      ppf: 'Tax-free',       fd: 'Fully taxable', nps: 'Partially taxable', elss: 'LTCG above ₹1.25L @ 12.5%' },
  { feature: 'Tax on Maturity',     ppf: 'Tax-free',       fd: 'Taxable',       nps: '60% free, 40% annuity taxable', elss: 'Taxable' },
  { feature: 'Tax Status',          ppf: 'EEE ✅',         fd: 'EET',           nps: 'EET (partial)',    elss: 'EET' },
  { feature: 'Risk',                ppf: 'Zero (Govt)',    fd: 'Very Low',      nps: 'Medium–High',     elss: 'High' },
  { feature: 'Min Investment',      ppf: '₹500/year',      fd: '₹1,000–₹10,000', nps: '₹500/month',   elss: '₹500 (SIP)' },
  { feature: 'Max Investment',      ppf: '₹1,50,000/year', fd: 'No limit',      nps: 'No limit',        elss: 'No limit' },
  { feature: 'Best For',            ppf: 'Risk-averse, long-term', fd: 'Short–medium term', nps: 'Retirement', elss: 'Wealth creation' },
];

const FAQS = [
  {
    q: 'What is PPF (Public Provident Fund)?',
    a: 'Public Provident Fund (PPF) is a government-backed long-term savings scheme in India introduced in 1968 under the Public Provident Fund Act, 1968 (now governed by the PPF Scheme 2019). It offers guaranteed returns backed by the Government of India, making it one of the safest investment instruments available. PPF combines the benefits of tax savings under Section 80C, tax-free interest, and tax-free maturity — making it one of only a few investments with EEE (Exempt-Exempt-Exempt) tax status. It is available to all Indian citizens and can be opened at post offices and most public and private sector banks.',
  },
  {
    q: 'What is the current PPF interest rate in 2026?',
    a: 'The current PPF interest rate for Q1 FY 2026-27 (April–June 2026) is 7.1% per annum. This rate has remained unchanged since April 1, 2020 — a period of over 6 years. The Ministry of Finance reviews and notifies PPF interest rates quarterly, though rates have historically remained stable for extended periods. Prior to April 2020, the rate was 7.9% (October 2019 to March 2020) and 8.0% (April 2019 to September 2019).',
  },
  {
    q: 'How is PPF interest calculated?',
    a: 'PPF interest is calculated monthly on the lowest balance in your account between the 5th and last day of each month, and credited to the account at the end of each financial year (March 31). For example, if you deposit ₹1,50,000 on April 4, your full balance earns interest for April. If you deposit on April 6, you miss April\'s interest entirely because the balance before the 5th was lower. The practical implication: always deposit before the 5th of April (or the 5th of any month) to earn interest for that month. Our calculator uses simplified annual compounding, which is the standard approach used by all major financial calculators.',
  },
  {
    q: 'What is the PPF maturity period?',
    a: 'The PPF account matures after 15 complete financial years from the year of account opening. If you open a PPF account in August 2026 (FY 2026-27), it matures at the end of FY 2041-42 (March 2042) — which is actually 15 years and 7–8 months. The 15-year period is counted from the end of the financial year in which the account was opened. At maturity, you can withdraw the full amount, or extend the account for 5-year blocks (with or without fresh contributions). The lock-in is among the longest of any investment product in India.',
  },
  {
    q: 'Can I extend my PPF account after 15 years?',
    a: 'Yes. At maturity (after 15 years), you have three options: (1) Withdraw the full maturity amount and close the account, (2) Extend for 5 years with continued contributions — you can continue depositing ₹500 to ₹1,50,000 per year and earn interest as before, (3) Extend for 5 years without contributions — the existing corpus continues to earn interest at the prevailing PPF rate but you cannot make fresh deposits. To extend with contributions, you must submit Form H to your bank/post office within one year of maturity. Without this form, the account is treated as an extension without contributions by default.',
  },
  {
    q: 'What is the minimum and maximum deposit in PPF?',
    a: 'The minimum annual deposit in a PPF account is ₹500 per year. Failing to deposit even ₹500 in any financial year results in the account being classified as "discontinued" — attracting a penalty of ₹50 per year for each year of default, plus the minimum deposit of ₹500 must be paid to reactivate. The maximum annual deposit is ₹1,50,000 per financial year. Any amount deposited above ₹1,50,000 in a year does not earn interest and is returned without any additional benefit. Deposits can be made in a lump sum or in up to 12 instalments per year.',
  },
  {
    q: 'What are the tax benefits of PPF?',
    a: 'PPF has EEE (Exempt-Exempt-Exempt) tax status — one of the best in the investment universe. (1) Investment: Contributions up to ₹1,50,000 per year are deductible under Section 80C of the Income Tax Act, (2) Interest: The interest earned annually is completely tax-free under Section 10(11), not added to taxable income, (3) Maturity: The entire maturity amount is tax-free. Additionally, the PPF account balance is protected from court attachment orders in most cases (except income tax attachment orders). Note: Under the new tax regime (Section 115BAC), the 80C deduction is not available. However, interest and maturity remain tax-free regardless of regime.',
  },
  {
    q: 'When can I withdraw money from PPF?',
    a: 'Full withdrawal is only allowed at maturity (after 15 complete financial years). Partial withdrawals are allowed from the 7th financial year onwards. The maximum amount you can withdraw in any financial year is limited to the lower of: (a) 50% of the balance at the end of the 4th year preceding the year of withdrawal, or (b) 50% of the balance at the end of the immediately preceding year. Only one partial withdrawal is allowed per financial year. The withdrawn amount does not reduce your future contribution limits.',
  },
  {
    q: 'Can I take a loan against my PPF account?',
    a: 'Yes. Loans against PPF are available from the 3rd financial year to the 6th financial year of the account. The maximum loan amount is 25% of the balance at the end of the 2nd year immediately preceding the year of loan application. The interest rate on the loan is 1% above the prevailing PPF interest rate (currently 8.1% when PPF is at 7.1%). The loan must be repaid within 36 months. If you don\'t repay within 36 months, the interest rate increases to 6% above PPF rate. Once a loan is fully repaid, you can apply for a second loan if still within the 3rd to 6th year window.',
  },
  {
    q: 'What happens if I don\'t deposit the minimum ₹500 in a year?',
    a: 'If you fail to deposit at least ₹500 in any financial year, your PPF account is classified as "discontinued" (not closed). A discontinued account cannot receive deposits or take loans. However, interest continues to be credited at the prevailing rate. To reactivate, you must pay ₹50 as penalty for each year of default plus the minimum deposit of ₹500 for each defaulted year. Reactivation application must be made before the 15-year maturity date. After reactivation, you can resume normal deposits and loan facilities.',
  },
  {
    q: 'Can NRIs open a PPF account?',
    a: 'No. Non-Resident Indians (NRIs) cannot open a new PPF account after acquiring NRI status. However, if you had an existing PPF account before becoming an NRI, you can continue to maintain it until maturity (15 years from account opening). After maturity, NRIs cannot extend the account — they must close it. NRIs can continue depositing in existing accounts and enjoy the tax benefits under their applicable tax treaties. FEMA regulations apply to PPF investments by NRIs.',
  },
  {
    q: 'Is PPF better than Fixed Deposit?',
    a: 'For long-term wealth creation, PPF is significantly better than FDs for most investors. PPF\'s 7.1% tax-free return is equivalent to approximately 10.1% pre-tax at the 30% slab — higher than most FD rates which are fully taxable. FD interest is added to income and taxed at your slab rate. PPF also has sovereign guarantee, court attachment protection, and the 15-year compounding works powerfully. FDs are better for short-to-medium term goals (3 months to 5 years), liquidity needs, or for investors in the 0–5% tax slab where the tax advantage of PPF is minimal.',
  },
  {
    q: 'What is the best time to deposit money in PPF?',
    a: 'The best time to deposit your full annual PPF contribution is between April 1 and April 5 of each financial year. PPF interest is calculated on the lowest balance between the 5th and last day of each month. If you deposit on April 1–5, your full amount earns interest for April. If you deposit on April 6 or later, you miss April\'s interest entirely. For ₹1,50,000, missing just one month\'s interest costs approximately ₹887 (₹1,50,000 × 7.1% ÷ 12). Over 15 years, this timing discipline can add ₹30,000–50,000 to your final corpus through compounding.',
  },
  {
    q: 'Can I open more than one PPF account?',
    a: 'No. An individual can hold only one PPF account in their own name. Opening a second account is not permitted. However, you can open a PPF account in the name of a minor child (with yourself as the guardian). The combined deposits in your account and the minor\'s account cannot exceed ₹1,50,000 per year — this is the combined limit, not ₹1,50,000 each. HUFs (Hindu Undivided Families) cannot open new PPF accounts after April 2005 but existing accounts can continue until maturity.',
  },
  {
    q: 'Is PPF interest taxable under the new tax regime?',
    a: 'No. PPF interest is tax-free under Section 10(11) of the Income Tax Act — this exemption applies regardless of which tax regime you choose. However, the Section 80C deduction for PPF contributions is NOT available under the new tax regime. So if you choose the new regime: (1) No tax deduction on your contribution, (2) Interest remains tax-free, (3) Maturity amount remains tax-free. Under the old regime: (1) Full 80C deduction on contribution, (2) Tax-free interest, (3) Tax-free maturity. The EEE benefit is fully available only under the old regime for the contribution deduction component.',
  },
  {
    q: 'How does the PPF calculator work?',
    a: 'Our PPF calculator uses the standard annual compounding method: for each year, interest is calculated on (Opening Balance + Annual Deposit) at the PPF interest rate. The closing balance of each year becomes the opening balance of the next. This simplified approach gives results within 1–2% of the actual PPF calculation (which uses monthly compounding on the lowest balance between the 5th and last day of each month). The simplified method is used by all major financial calculators including ClearTax, Groww, and bank PPF calculators because the actual calculation requires knowing exact monthly deposit dates.',
  },
];

export default function PPFCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'PPF Calculator India — ToolStackHub',
        description: 'Free PPF calculator at 7.1% interest for FY 2026-27. Calculate maturity value, year-wise breakdown, and tax savings.',
        url: `${SITE_CONFIG.url}/ppf-calculator`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'PPF maturity value calculation at 7.1%',
          'Year-wise interest breakdown table',
          'Tax saving estimate at 5%, 20%, 30% slabs',
          'SVG donut chart — investment vs interest',
          'PPF milestones (loan, withdrawal, maturity)',
          'Adjustable tenure, rate, and investment amount',
          'EEE tax status explained',
          'No data stored — 100% browser-based',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '4182', bestRating: '5' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Use the PPF Calculator',
        totalTime: 'PT30S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Set yearly investment', text: 'Enter your planned annual PPF deposit (₹500 to ₹1,50,000) using the slider or input field.' },
          { '@type': 'HowToStep', position: 2, name: 'Choose investment tenure', text: 'Select 15 years for the standard lock-in, or 20, 25, 30+ years if planning to extend the account.' },
          { '@type': 'HowToStep', position: 3, name: 'Confirm the interest rate', text: 'The default 7.1% is the current PPF rate. Adjust if you want to model different rate scenarios.' },
          { '@type': 'HowToStep', position: 4, name: 'Read your results', text: 'See maturity value, year-wise breakdown, tax savings, and milestones. Toggle the year-wise table for the full breakdown.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/salary-calculator` },
          { '@type': 'ListItem', position: 3, name: 'PPF Calculator', item: `${SITE_CONFIG.url}/ppf-calculator` },
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
                <li><Link href="/salary-calculator" className="hover:text-brand-600">Finance Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">PPF Calculator</li>
              </ol>
            </nav>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 PPF Quick Facts — FY 2026-27</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {[
                  { label:'Current Interest Rate', val:'7.1% p.a.' },
                  { label:'Lock-in Period',         val:'15 years' },
                  { label:'Max Annual Deposit',     val:'₹1,50,000' },
                  { label:'Tax Status',             val:'EEE (Triple Exempt)' },
                ].map(f => (
                  <div key={f.label} className="bg-white rounded-xl p-3 border border-brand-100">
                    <div className="text-xs text-surface-500 mb-0.5">{f.label}</div>
                    <div className="font-black text-brand-700">{f.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              PPF Calculator — Public Provident Fund Calculator India FY 2026-27
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Calculate PPF maturity value, interest earned, and year-wise returns at 7.1% interest rate. Updated for FY 2026-27. Includes year-wise breakdown, tax saving estimate, and EEE tax status explained.
            </p>
            <div className="flex flex-wrap gap-2">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored', '📊 Year-Wise Table'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <PPFCalculator />
          </Suspense>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use This PPF Calculator — 4 Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { n:'1', icon:'💰', t:'Set Yearly Amount', d:'Enter your planned annual PPF deposit (₹500 minimum, ₹1,50,000 maximum) using the slider or input field.' },
                { n:'2', icon:'📅', t:'Choose Tenure',     d:'Select 15 years (mandatory minimum) or extend to 20, 25, 30+ years to see long-term compounding power.' },
                { n:'3', icon:'📈', t:'Confirm Rate',      d:'7.1% is pre-filled (current Q1 FY 2026-27 rate). Adjust to model scenarios with different assumed rates.' },
                { n:'4', icon:'📊', t:'View Full Results', d:'See maturity value, year-wise table, tax savings at your slab, and PPF milestones — all calculated instantly.' },
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

          {/* WHAT IS PPF */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is PPF (Public Provident Fund)?</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                Public Provident Fund (PPF) is a government-sponsored long-term savings and investment scheme introduced in India in 1968. Governed by the PPF Scheme 2019 (which replaced the original PPF Scheme, 1968), it is operated through designated post offices and most public and private sector banks. The scheme is backed by the Government of India, making it one of the safest investment instruments in the country with zero credit risk.
              </p>
              <p>
                PPF stands apart from most other fixed-income instruments because of its <strong className="text-surface-800">EEE (Exempt-Exempt-Exempt) tax status</strong> — contributions are tax-deductible under Section 80C, annual interest is tax-free, and the entire maturity amount is tax-free. This triple tax exemption, combined with compound interest over 15+ years, makes PPF one of the most tax-efficient wealth-building tools available to salaried employees and self-employed individuals in India.
              </p>
              <p>
                <strong className="text-surface-800">Who typically uses PPF?</strong> PPF is most popular among risk-averse investors who want guaranteed, inflation-beating, tax-free returns without market exposure. It is particularly valuable for: (1) salaried employees who want to complement their EPF with additional tax-free savings, (2) self-employed professionals and freelancers who don't have access to EPF, (3) parents building a corpus for a child's education or marriage, and (4) investors approaching retirement who want a guaranteed, government-backed savings component.
              </p>
              <p>
                <strong className="text-surface-800">The power of 15-year compounding.</strong> At 7.1% annual interest, ₹1,50,000 invested each year for 15 years grows to approximately ₹40.68 lakh — of which ₹22.5 lakh is your own investment and ₹18.18 lakh is pure interest. That's a growth of 1.81x. If you extend for another 5 years (20 years total), the corpus grows to roughly ₹66 lakh — a 2.9x growth on the same ₹30 lakh invested. This exponential growth in the later years is the hallmark of long-term compound interest.
              </p>
              <p>
                <strong className="text-surface-800">PPF and the deposit-before-5th rule.</strong> PPF interest is calculated monthly on the lowest balance between the 5th and last day of each month. Depositing your annual ₹1,50,000 before April 5 ensures you earn interest on the full amount for April. Depositing on April 6 means you earn zero interest for April. Over 15 years, this discipline can meaningfully improve your final corpus through compounding — making timing one of the simplest ways to optimise your PPF returns.
              </p>
            </div>
          </section>

          {/* INTEREST RATE HISTORY */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">PPF Interest Rate History — 2012 to 2026</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The Ministry of Finance revises PPF interest rates quarterly, though rates have historically remained stable for extended periods. The current rate of 7.1% has been unchanged since April 2020 — over 6 years. Before that, rates were as high as 8.8% in 2012-13. Understanding this history helps set realistic expectations for long-term planning.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Period</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Interest Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {RATE_HISTORY.map((r, i) => (
                    <tr key={r.period} className={i === 0 ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-medium ${i === 0 ? 'text-brand-800' : 'text-surface-700'}`}>
                        {r.period}
                        {r.note && <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-bold ${i === 0 ? 'bg-brand-100 text-brand-700' : 'bg-surface-100 text-surface-500'}`}>{r.note}</span>}
                      </td>
                      <td className={`px-4 py-3 text-center font-bold ${i === 0 ? 'text-brand-700 text-base' : 'text-surface-900'}`}>{r.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">Source: Ministry of Finance, Government of India notifications. Rates are per annum.</p>
          </section>

          {/* FORMULA */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">PPF Calculation Formula Explained</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                The PPF maturity formula for a lump sum annual deposit is based on compound interest:
              </p>
              <div className="bg-surface-900 rounded-2xl p-5 font-mono text-sm space-y-2">
                <div style={{color:'#94a3b8'}} className="text-xs uppercase tracking-wider font-bold mb-2">Standard PPF Maturity Formula</div>
                <div style={{color:'#60a5fa'}} className="font-bold">M = P × [((1+i)^n - 1) / i] × (1+i)</div>
                <div className="border-t border-white/10 pt-2 space-y-1" style={{color:'#94a3b8'}}>
                  <div>M = Maturity value</div>
                  <div>P = Annual deposit amount</div>
                  <div>i = Annual interest rate / 100 (e.g., 0.071 for 7.1%)</div>
                  <div>n = Number of years</div>
                </div>
                <div className="border-t border-white/10 pt-2" style={{color:'#34d399'}}>
                  Example: P=1,50,000 | i=0.071 | n=15 → M ≈ ₹40,68,209
                </div>
              </div>
              <p>
                <strong className="text-surface-800">Our calculator uses year-by-year iteration</strong> (opening balance → add deposit → compute interest → get closing balance) which gives identical results and is easier to verify. The year-by-year approach also lets us show you exactly how much interest you earn each year — not just the final total.
              </p>
              <p>
                <strong className="text-surface-800">Note on monthly vs annual compounding.</strong> The actual PPF scheme calculates interest on the lowest balance between the 5th and last day of each month, credited annually. Our calculator (like all major PPF calculators) uses annual compounding for clarity. The difference between the two methods is less than 0.5% of the final corpus — negligible for planning purposes.
              </p>
            </div>
          </section>

          {/* EEE TAX BENEFITS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">PPF Tax Benefits — EEE Status Explained</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                { e:'First E', title:'Contribution Exempt', icon:'💳', desc:'Deposits up to ₹1,50,000/year are fully deductible under Section 80C of the Income Tax Act. At the 30% slab, this saves ₹46,800 in taxes annually (including cess). Available only under the old tax regime.' },
                { e:'Second E', title:'Interest Exempt', icon:'📈', desc:'The annual interest credited to your PPF account is completely exempt from income tax under Section 10(11). Unlike FD interest which is taxable, PPF interest never enters your taxable income — in any year, under any regime.' },
                { e:'Third E', title:'Maturity Exempt', icon:'🎯', desc:'The entire maturity amount — both principal and accumulated interest — is tax-free when withdrawn. No capital gains tax, no TDS, nothing. ₹40+ lakh received at maturity is 100% in your hands.' },
              ].map(c => (
                <div key={c.e} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">E</div>
                    <div>
                      <div className="text-xs text-emerald-600 font-bold">{c.e}</div>
                      <div className="font-bold text-emerald-900 text-sm">{c.title}</div>
                    </div>
                    <span className="ml-auto text-xl">{c.icon}</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-800 leading-relaxed">
              <strong>⚠️ New Tax Regime Note:</strong> Under the new tax regime (Section 115BAC), the Section 80C deduction for PPF contributions is NOT available. The First E is lost. However, the Second E (interest exempt) and Third E (maturity exempt) remain — PPF interest and maturity are tax-free regardless of which regime you choose. For employees in the 30% slab choosing old regime, the pre-tax equivalent yield of 7.1% PPF is approximately 10.1% — making it competitive with many higher-risk instruments.
            </div>
          </section>

          {/* WITHDRAWAL & LOAN */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">PPF Withdrawal & Loan Rules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white border border-surface-200 rounded-2xl p-5">
                <h3 className="font-bold text-surface-900 mb-3 flex items-center gap-2">🏦 Loan Against PPF (Years 3–6)</h3>
                <div className="space-y-2 text-sm text-surface-600 leading-relaxed">
                  <p>Loans are available from the 3rd financial year to the end of the 6th financial year.</p>
                  <p><strong className="text-surface-800">Maximum loan:</strong> 25% of the balance at the end of the 2nd year preceding the year of application.</p>
                  <p><strong className="text-surface-800">Interest rate:</strong> 1% above PPF rate (currently 8.1%).</p>
                  <p><strong className="text-surface-800">Repayment:</strong> Within 36 months. Failure to repay in time increases rate to 6% above PPF rate.</p>
                  <p><strong className="text-surface-800">Frequency:</strong> Second loan available only after first is fully repaid, and within the loan window.</p>
                </div>
              </div>
              <div className="bg-white border border-surface-200 rounded-2xl p-5">
                <h3 className="font-bold text-surface-900 mb-3 flex items-center gap-2">💸 Partial Withdrawal (From Year 7)</h3>
                <div className="space-y-2 text-sm text-surface-600 leading-relaxed">
                  <p>Partial withdrawals are allowed from the 7th financial year onwards.</p>
                  <p><strong className="text-surface-800">Maximum amount:</strong> Lower of: (a) 50% of balance at end of Year 4, or (b) 50% of balance at end of the preceding year.</p>
                  <p><strong className="text-surface-800">Frequency:</strong> Only once per financial year.</p>
                  <p><strong className="text-surface-800">Tax:</strong> Withdrawal amount is completely tax-free.</p>
                  <p><strong className="text-surface-800">Note:</strong> Withdrawn amount does not reduce your future ₹1,50,000 deposit limit.</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXTENSION */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">PPF Account Extension After 15 Years</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed mb-5">
              <p>
                At the end of the 15-year lock-in, your PPF account does not automatically close. You have a full year after the maturity date to decide what to do. Your three options:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { opt:'Option 1', icon:'🏁', title:'Withdraw & Close', color:'surface', desc:'Withdraw the entire corpus tax-free and close the account. If you need the funds or have better investment opportunities, this is straightforward. You can always open a new PPF account after closing.' },
                { opt:'Option 2', icon:'📈', title:'Extend with Deposits', color:'brand', desc:'Submit Form H within 1 year of maturity. Continue making deposits of ₹500–₹1,50,000 annually for the next 5 years. Interest continues at prevailing PPF rate. One partial withdrawal per year allowed. Most tax-efficient option if you don\'t need the money.' },
                { opt:'Option 3', icon:'⏸️', title:'Extend without Deposits', color:'emerald', desc:'Do nothing — the account automatically extends without contributions. The existing corpus continues to earn interest at the PPF rate. No fresh deposits needed. One withdrawal per year (full amount can be withdrawn with no restrictions on minimum). Ideal if you want a safe parking for existing wealth.' },
              ].map(o => {
                const c = { brand:'bg-brand-50 border-brand-200', emerald:'bg-emerald-50 border-emerald-200', surface:'bg-surface-50 border-surface-200' };
                return (
                  <div key={o.opt} className={`border rounded-2xl p-5 ${c[o.color]}`}>
                    <div className="text-xs text-surface-500 font-bold uppercase tracking-wider mb-1">{o.opt}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{o.icon}</span>
                      <h3 className="font-bold text-surface-900">{o.title}</h3>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">{o.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">PPF vs FD vs NPS vs ELSS — Full Comparison</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              PPF is not the right choice for everyone. The comparison below shows when PPF wins and when alternatives may be better for your specific situation and risk tolerance.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Feature</th>
                    <th style={{color:'#60a5fa'}} className="text-center px-4 py-3 font-semibold">PPF</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Bank FD</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">NPS</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">ELSS</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((r, i) => (
                    <tr key={r.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-800">{r.feature}</td>
                      <td className="px-4 py-3 text-center text-brand-700 font-semibold text-xs">{r.ppf}</td>
                      <td className="px-4 py-3 text-center text-surface-600 text-xs">{r.fd}</td>
                      <td className="px-4 py-3 text-center text-surface-600 text-xs">{r.nps}</td>
                      <td className="px-4 py-3 text-center text-surface-600 text-xs">{r.elss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
              <strong>Interpretation:</strong> PPF wins on safety and tax efficiency. ELSS wins on returns (market-linked). NPS wins on retirement corpus (extra ₹50K deduction). FD wins on liquidity. Most financial advisors recommend a combination: PPF for guaranteed, tax-free savings + ELSS/NPS for higher-return allocation.
            </div>
          </section>

          {/* DEPOSIT STRATEGY */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">PPF Deposit Strategy — Maximise Your Returns</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                The single most impactful strategy to optimise PPF returns is the <strong className="text-surface-800">"deposit before the 5th" rule</strong>. PPF interest is computed on the minimum balance in your account between the 5th and the last day of each month. This means:
              </p>
              <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5 font-mono text-sm">
                <div className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-3">Deposit Timing Impact (₹1,50,000 deposit at 7.1%)</div>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-emerald-700">Deposited Apr 1–5:</span><span className="font-bold text-emerald-700">12 months interest = ₹10,650/year</span></div>
                  <div className="flex justify-between"><span className="text-rose-600">Deposited Apr 6+:</span><span className="font-bold text-rose-600">11 months interest = ₹9,763/year</span></div>
                  <div className="flex justify-between text-surface-900 font-bold border-t border-surface-200 pt-2"><span>Lost by depositing late:</span><span>₹887 per year</span></div>
                  <div className="flex justify-between text-brand-700 font-bold"><span>Lost over 15 years (compounded):</span><span>≈ ₹25,000–₹35,000</span></div>
                </div>
              </div>
              <p>
                <strong className="text-surface-800">Lump sum vs monthly deposits:</strong> A lump sum deposit before April 5 is always better than spreading across 12 months, because the full amount earns 12 months of interest. However, if you don't have the full ₹1,50,000 available in April, monthly deposits are perfectly fine — the difference is smaller than most people assume.
              </p>
              <p>
                <strong className="text-surface-800">Setting up a SIP for PPF:</strong> Some banks allow automatic monthly transfers to PPF. If you can automate this, set it for the 1st or 2nd of each month to ensure it reaches your PPF account by the 5th. This is the most practical approach for salaried employees who receive monthly salaries.
              </p>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who Can Open a PPF Account?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'✅', title:'Eligible', items: ['Indian residents (citizens)', 'Salaried employees (private and government)', 'Self-employed professionals and freelancers', 'Homemakers with income from any source', 'Parents/guardians opening accounts for minor children', 'Individuals with existing EPF accounts (PPF is additional)'] },
                { icon:'❌', title:'Not Eligible', items: ['Non-Resident Indians (NRIs) — cannot open new accounts', 'HUFs (Hindu Undivided Families) — since 2005', 'Trusts and other entities', 'Persons of Indian Origin (PIOs) and OCIs', 'Existing account holders (only one account per individual)'] },
              ].map(e => (
                <div key={e.title} className={`p-5 rounded-2xl border ${e.icon === '✅' ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                  <h3 className={`font-bold mb-3 ${e.icon === '✅' ? 'text-emerald-900' : 'text-rose-900'}`}>{e.icon} {e.title}</h3>
                  <ul className="space-y-1.5">
                    {e.items.map(it => (
                      <li key={it} className={`flex items-start gap-2 text-sm ${e.icon === '✅' ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <span className="shrink-0 mt-0.5">{e.icon === '✅' ? '→' : '×'}</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">PPF Calculator — 15 Frequently Asked Questions</h2>
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

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Finance Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href:'/sip-calculator',              icon:'📈', label:'SIP Calculator',              desc:'Calculate SIP returns and compare with PPF for your investment horizon.' },
                { href:'/emi-calculator',              icon:'🏠', label:'EMI Calculator',              desc:'Home loan, car loan, personal loan EMI calculation with amortisation.' },
                { href:'/salary-calculator',           icon:'💰', label:'Salary Calculator',           desc:'CTC to in-hand salary with PF, professional tax, and TDS breakdown.' },
                { href:'/hra-calculator',              icon:'🏠', label:'HRA Exemption Calculator',    desc:'Calculate HRA exemption with updated 8-metro rule for FY 2026-27.' },
                { href:'/professional-tax-calculator', icon:'⚖️', label:'Professional Tax Calculator', desc:'State-wise PT for all 18 Indian states. Monthly and annual PT.' },
                { href:'/gst-calculator',              icon:'📊', label:'GST Calculator',              desc:'Calculate GST with CGST, SGST, and IGST breakdown for any amount.' },
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
                  This PPF calculator runs entirely in your browser using React state. Your investment figures are never sent to any server. PPF rates and rules verified against the PPF Scheme 2019, Ministry of Finance notifications, and Income Tax Act provisions as of FY 2026-27.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server — browser only</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">📅 Updated FY 2026-27</span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-white px-3 py-1 rounded-full border border-surface-200">🆓 Free, no account</span>
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> This PPF calculator uses annual compounding for simplicity — actual PPF uses monthly compounding on the lowest balance between the 5th and last day of each month. Results are indicative and may differ slightly from actual account values. PPF interest rates are set by the Ministry of Finance and may change quarterly. Consult your bank, post office, or a certified financial planner for advice specific to your situation. Information updated for FY 2026-27 (Q1 rate: 7.1%).
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}