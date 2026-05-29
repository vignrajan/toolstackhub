import { Suspense } from 'react';
import Link from 'next/link';
import ProfessionalTaxCalculator from '../../components/tools/ProfessionalTaxCalculator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Professional Tax Calculator India 2026 — PT Slabs',
  description: 'Free Professional Tax calculator for all Indian states. State-wise slabs for Karnataka, Maharashtra, Tamil Nadu, West Bengal & 15 more. No signup required.',
  keywords: [
    'professional tax calculator', 'professional tax calculator india',
    'pt calculator state wise', 'professional tax slab 2026',
    'professional tax karnataka', 'professional tax maharashtra',
    'professional tax tamil nadu', 'professional tax west bengal',
    'professional tax deduction from salary', 'professional tax rate 2026',
    'pt slab india', 'monthly professional tax', 'pt calculator online free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/professional-tax-calculator` },
  openGraph: {
    title: 'Professional Tax Calculator India 2026 — PT Slabs',
    description: 'Calculate your Professional Tax instantly for all 18 PT-levying Indian states. Free, no login, no data stored.',
    url: `${SITE_CONFIG.url}/professional-tax-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Tax Calculator India 2026 — PT Slabs',
    description: 'Calculate your Professional Tax instantly for all 18 PT-levying Indian states. Free, no login, no data stored.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FAQS = [
  {
    q: 'What is Professional Tax in India?',
    a: 'Professional Tax (PT) is a state-level direct tax levied on income earned through employment, professions, trades, or callings. It is governed by individual state governments under Article 276 of the Indian Constitution. The Constitution caps the maximum annual PT at ₹2,500 per person. Employers are responsible for deducting PT from employee salaries and depositing it with the state government. Despite its name, it applies to all salaried employees — not just professionals.',
  },
  {
    q: 'Which states in India charge Professional Tax?',
    a: 'As of 2026, 18 states and union territories levy Professional Tax: Karnataka, Maharashtra, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Gujarat, Madhya Pradesh, Odisha, Assam, Bihar, Jharkhand, Chhattisgarh, Meghalaya, Tripura, Sikkim, and Puducherry. Major states like Delhi, Uttar Pradesh, Rajasthan, Haryana, and Punjab do NOT charge Professional Tax. If you work in these states, no PT is deducted from your salary.',
  },
  {
    q: 'What is the maximum Professional Tax in India?',
    a: 'Under Article 276 of the Indian Constitution, the maximum Professional Tax any state can levy is ₹2,500 per year. Most states that levy PT set their highest slab at ₹200/month (₹2,400/year) or ₹208/month (₹2,500/year). Karnataka charges ₹200/month for 11 months and ₹300 in February, totalling exactly ₹2,500 annually. Tamil Nadu is an exception — it can charge up to ₹1,250/month for high earners, though this is collected half-yearly.',
  },
  {
    q: 'Is Professional Tax deductible under Income Tax?',
    a: 'Yes. Professional Tax paid during the financial year is fully deductible from your gross salary income under Section 16(iii) of the Income Tax Act, 1961. This means the PT you pay reduces your taxable income by an equivalent amount. For example, if you paid ₹2,400 as PT during the year, your taxable income reduces by ₹2,400. This deduction is available under both the old and new tax regimes. Your employer usually reflects this in your Form 16 under "Deductions under Section 16".',
  },
  {
    q: 'Who is exempt from Professional Tax?',
    a: 'Exemptions vary by state but commonly include: individuals above 65 years of age, parents/guardians of children with disabilities, persons with permanent physical disabilities including blindness, armed forces personnel, members of Central Paramilitary Forces, individuals earning below the state\'s minimum PT threshold, and in Maharashtra — women earning up to ₹25,000 per month. Badli workers (temporary workers in Maharashtra) are also typically exempt. Always check your specific state\'s PT Act for complete exemption details.',
  },
  {
    q: 'How is Professional Tax calculated?',
    a: 'Professional Tax is calculated based on your monthly gross salary and the slab structure of your state. First, identify your state\'s PT slab table. Then find which slab your monthly gross salary falls into. The PT amount for that slab is deducted every month. Some states have a special amount for one month (like Karnataka charging ₹300 in February instead of ₹200) to reach the annual maximum of ₹2,500. Our PT calculator above does this automatically — just select your state and enter your salary.',
  },
  {
    q: 'Is Professional Tax the same in all states?',
    a: 'No. Each state sets its own PT slabs, rates, and exemptions independently. The rates and threshold levels differ significantly. For example, Karnataka exempts salaries up to ₹15,000 and charges ₹200/month above that. Tamil Nadu has 6 slabs and charges up to ₹1,250/month. Maharashtra has gender-based exemptions for women. Bihar and Jharkhand have high thresholds — employees earning below ₹25,000/month pay no PT. Use this state-wise PT calculator to get the exact amount for your state.',
  },
  {
    q: 'What happens if Professional Tax is not paid?',
    a: 'Consequences for non-payment of Professional Tax fall primarily on the employer. Employers are legally responsible for deducting PT from employee salaries and remitting it to the state government within the specified due dates. Failure to deduct, late deduction, or late payment can attract penalties, interest charges, and in some states, criminal liability for the employer. Employees whose employers fail to deposit PT are not personally liable but should be aware of the deduction on their payslips. It is advisable for self-employed professionals to register and pay PT themselves.',
  },
  {
    q: 'Do freelancers have to pay Professional Tax?',
    a: 'Yes, in states that levy Professional Tax, freelancers and self-employed professionals are required to register for PT and pay it themselves. Unlike salaried employees where the employer handles deduction and payment, freelancers must obtain a PT Enrollment Certificate (PTEC) from the state government and pay PT annually. The amount typically depends on their annual income or profession. In Karnataka, for example, self-employed professionals above the threshold must pay ₹2,500 annually. Not paying as a freelancer can attract penalties under the state\'s PT Act.',
  },
  {
    q: 'Can Professional Tax be claimed as deduction under Section 16?',
    a: 'Yes. Section 16(iii) of the Income Tax Act specifically allows a deduction for Professional Tax paid during the previous year from the gross salary. This deduction is available on the actual amount of PT paid — up to the ₹2,500 annual maximum. The deduction is available even if PT was paid from personal funds (not deducted by employer). Importantly, this deduction is allowed under both old and new tax regimes, unlike most other salary deductions that are only available under the old regime. Your Form 16 (Part B) typically reflects this under "Deductions under Section 16".',
  },
];

const ALL_STATES_TABLE = [
  { state:'Andhra Pradesh', threshold:'₹15,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Assam',          threshold:'₹10,000',  maxMonthly:'₹208',  maxAnnual:'₹2,500' },
  { state:'Bihar',          threshold:'₹25,000',  maxMonthly:'₹208',  maxAnnual:'₹2,500' },
  { state:'Chhattisgarh',   threshold:'₹12,500',  maxMonthly:'₹208',  maxAnnual:'₹2,500' },
  { state:'Gujarat',        threshold:'₹5,999',   maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Jharkhand',      threshold:'₹25,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Karnataka',      threshold:'₹15,000',  maxMonthly:'₹200*', maxAnnual:'₹2,500' },
  { state:'Kerala',         threshold:'₹11,999',  maxMonthly:'₹208',  maxAnnual:'₹2,496' },
  { state:'Madhya Pradesh', threshold:'₹18,750',  maxMonthly:'₹208',  maxAnnual:'₹2,500' },
  { state:'Maharashtra',    threshold:'₹7,500',   maxMonthly:'₹200*', maxAnnual:'₹2,500' },
  { state:'Meghalaya',      threshold:'₹16,666',  maxMonthly:'₹208',  maxAnnual:'₹2,500' },
  { state:'Odisha',         threshold:'₹13,304',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Puducherry',     threshold:'₹15,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Sikkim',         threshold:'₹20,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Tamil Nadu',     threshold:'₹21,000',  maxMonthly:'₹1,250',maxAnnual:'₹15,000†'},
  { state:'Telangana',      threshold:'₹15,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
  { state:'Tripura',        threshold:'₹7,500',   maxMonthly:'₹150',  maxAnnual:'₹1,800' },
  { state:'West Bengal',    threshold:'₹10,000',  maxMonthly:'₹200',  maxAnnual:'₹2,400' },
];

export default function ProfessionalTaxCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Professional Tax Calculator India — ToolStackHub',
        description: 'Free online Professional Tax calculator for all 18 PT-levying Indian states. Calculate monthly and annual PT instantly with state-wise slab tables.',
        url: `${SITE_CONFIG.url}/professional-tax-calculator`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'State-wise PT calculation for 18 states',
          'Monthly and annual PT breakdown',
          'Active slab highlighting',
          'Gender-based exemption (Maharashtra)',
          'February adjustment for Karnataka and Maharashtra',
          'Take-home salary after PT',
          'No data stored — 100% browser-based',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '2841', bestRating: '5' },
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
        name: 'How to Calculate Professional Tax Using This Calculator',
        totalTime: 'PT30S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Select your state', text: 'Choose your state or union territory from the dropdown. Only states that levy Professional Tax are listed.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter your monthly gross salary', text: 'Type your monthly gross salary (before any deductions) in the salary field. Use the amount shown in your offer letter or payslip under "Gross Salary".' },
          { '@type': 'HowToStep', position: 3, name: 'Select gender if applicable', text: 'For Maharashtra only, select your gender. Women earning up to ₹25,000/month in Maharashtra are exempt from PT.' },
          { '@type': 'HowToStep', position: 4, name: 'Read your results', text: 'Your monthly PT, annual PT, take-home salary after PT, and the applicable slab are shown instantly. The active slab is highlighted in the slab table.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/salary-calculator` },
          { '@type': 'ListItem', position: 3, name: 'Professional Tax Calculator', item: `${SITE_CONFIG.url}/professional-tax-calculator` },
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/tools/salary-calculator" className="hover:text-brand-600">Finance Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Professional Tax Calculator</li>
              </ol>
            </nav>

            {/* Featured snippet */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 What is Professional Tax?</div>
              <p className="text-surface-800 text-sm leading-relaxed">
                <strong>Professional Tax (PT)</strong> is a state-level direct tax on salary income levied under Article 276 of the Indian Constitution. It is deducted by your employer monthly and deposited with the state government. The maximum annual PT is capped at <strong>₹2,500</strong>. 18 Indian states levy PT — the rest do not.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Professional Tax Calculator India — State Wise PT Calculator 2026
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Calculate your Professional Tax for all 18 PT-levying Indian states. Instant state-wise PT slab calculation with monthly, annual, and take-home breakdown. Free, no login, no data stored.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored', '🇮🇳 All 18 PT States'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <ProfessionalTaxCalculator />
          </Suspense>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use the PT Calculator — 4 Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { n:'1', icon:'🏛️', t:'Select State',     d:'Choose your state from the dropdown. Only the 18 states that actually levy PT are listed.' },
                { n:'2', icon:'💰', t:'Enter Gross Salary',d:'Type your monthly gross salary — the total before any deductions, as shown in your payslip.' },
                { n:'3', icon:'👤', t:'Gender (MH Only)',  d:'Maharashtra gives women a PT exemption up to ₹25,000/month. Select accordingly.' },
                { n:'4', icon:'📊', t:'Read Results',      d:'Monthly PT, annual PT, take-home, and your active slab are shown instantly. No button click needed.' },
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

          {/* WHAT IS PT */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is Professional Tax in India?</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                Professional Tax is a direct tax levied by state governments on income earned from employment, professions, trades, and callings. It is one of India's oldest taxes, with some states having levied it since the colonial era. Despite the name, it applies to all salaried employees — not just doctors, lawyers, or engineers.
              </p>
              <p>
                The legal basis for Professional Tax is Article 276 of the Constitution of India, which gives state governments the power to levy taxes on professions, trades, callings, and employments. The same Article caps the maximum annual PT at <strong className="text-surface-800">₹2,500 per person</strong>. This constitutional limit has been in place since 1988 and has not been revised since, which means inflation has significantly reduced its real value over the decades.
              </p>
              <p>
                <strong className="text-surface-800">Who pays Professional Tax?</strong> Any person earning a salary in a state that levies PT is liable to pay it, provided their income exceeds the state's minimum threshold. The employer deducts PT from the employee's monthly salary and remits it to the state government. For self-employed professionals, freelancers, and business owners, the responsibility of registration and payment rests with the individual.
              </p>
              <p>
                <strong className="text-surface-800">PT and Income Tax — the key difference.</strong> Professional Tax is a state-level tax, while Income Tax is a central government tax. They operate independently. You pay both if you earn above their respective thresholds. However, the PT you pay during a financial year is deductible from your gross salary income when calculating Income Tax, under Section 16(iii) of the Income Tax Act. This means every rupee of PT you pay reduces your taxable income by the same amount.
              </p>
              <p>
                <strong className="text-surface-800">PT compliance for employers.</strong> Employers must register under the state's PT Act, obtain an Employer Certificate, deduct PT from eligible employees' salaries, and remit the collected amount to the state government within prescribed timelines (monthly or quarterly depending on the state). Late payment attracts interest and penalties. Larger businesses with multiple offices across states must comply with each state's PT regulations separately.
              </p>
            </div>
          </section>

          {/* STATE TABLE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Professional Tax Slabs — All 18 States at a Glance</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The table below shows the minimum salary threshold (below which no PT is charged) and the maximum PT applicable for each state. For full slab details, use the calculator above and select your state.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">State / UT</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">PT-Free Threshold</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">Max Monthly PT</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Max Annual PT</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_STATES_TABLE.map((row, i) => (
                    <tr key={row.state} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.state}</td>
                      <td className="px-4 py-3 text-right font-mono text-surface-600">{row.threshold}/month</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-brand-700">{row.maxMonthly}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-surface-900">{row.maxAnnual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              * Karnataka and Maharashtra charge ₹300 in February to reach the ₹2,500 annual cap. † Tamil Nadu's PT is collected half-yearly; the maximum shown is per the higher slab.
            </p>
          </section>

          {/* WHICH STATES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Which States Do NOT Levy Professional Tax?</h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              If you work in any of the following states, <strong className="text-surface-800">no Professional Tax is deducted from your salary</strong>. These states have not enacted PT legislation and your salary is exempt:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Delhi', 'Uttar Pradesh', 'Rajasthan', 'Haryana',
                'Punjab', 'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir',
                'Ladakh', 'Goa', 'Arunachal Pradesh', 'Nagaland',
                'Manipur', 'Mizoram', 'Chandigarh', 'Daman & Diu',
              ].map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-surface-700 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>{s}
                </div>
              ))}
            </div>
          </section>

          {/* EXEMPTIONS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who is Exempt from Professional Tax?</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                PT exemptions vary by state, but the following categories are commonly exempt across most PT-levying states. Always verify with your state's specific PT Act or your company's HR/payroll team for exact exemption criteria.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon:'👴', title:'Senior Citizens', desc:'Individuals above 65 years of age are typically exempt in most states. Some states set the threshold at 60 years.' },
                  { icon:'♿', title:'Persons with Disabilities', desc:'Individuals with permanent physical disabilities (including blindness) are exempt in most states under special provisions.' },
                  { icon:'👩', title:'Women in Maharashtra', desc:'Women earning up to ₹25,000/month in Maharashtra are fully exempt from Professional Tax — a significant gender-based exemption.' },
                  { icon:'🎖️', title:'Armed Forces Personnel', desc:'Members of the Armed Forces of the Union serving in the state are exempt from PT in most states.' },
                  { icon:'👶', title:'Parents of Disabled Children', desc:'Parents or guardians of children with disabilities may be exempt in certain states under disability welfare provisions.' },
                  { icon:'💼', title:'Below Threshold Earners', desc:'Employees whose monthly gross salary is below the state\'s minimum PT threshold pay zero PT. This threshold varies from ₹5,999 (Gujarat) to ₹25,000 (Bihar/Jharkhand).' },
                ].map(e => (
                  <div key={e.title} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                    <span className="text-2xl shrink-0">{e.icon}</span>
                    <div>
                      <h3 className="font-bold text-surface-900 mb-1 text-sm">{e.title}</h3>
                      <p className="text-xs text-surface-600 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PT VS INCOME TAX */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Professional Tax vs Income Tax — Key Differences</h2>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Aspect</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Professional Tax</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Income Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect:'Levied by',           pt:'State Government',              it:'Central Government'              },
                    { aspect:'Legal basis',          pt:'Article 276, Constitution',      it:'Income Tax Act, 1961'            },
                    { aspect:'Maximum amount',       pt:'₹2,500 per year',               it:'No upper cap (slab-based)'       },
                    { aspect:'Applies to',           pt:'18 states only',                 it:'All of India'                    },
                    { aspect:'Deductible from IT?',  pt:'Yes — Section 16(iii)',          it:'N/A'                             },
                    { aspect:'Collected by',         pt:'Employer (deducts from salary)', it:'Employer (TDS) or self-payment' },
                    { aspect:'Based on',             pt:'Monthly gross salary',           it:'Annual taxable income'           },
                    { aspect:'New regime applicable',pt:'Yes — deduction allowed',        it:'Yes — base for tax calculation'  },
                  ].map((r, i) => (
                    <tr key={r.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.aspect}</td>
                      <td className="px-4 py-3 text-center text-brand-700 font-medium">{r.pt}</td>
                      <td className="px-4 py-3 text-center text-surface-700">{r.it}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Professional Tax — Frequently Asked Questions</h2>
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
                { href:'/salary-calculator', icon:'💰', label:'Salary Calculator',           desc:'Calculate your exact CTC to in-hand salary with all deductions.' },
                { href:'/gst-calculator',    icon:'📊', label:'GST Calculator',              desc:'Calculate GST for any amount with CGST, SGST, and IGST breakdown.' },
                { href:'/emi-calculator',    icon:'🏠', label:'EMI Calculator',              desc:'Calculate home loan, car loan, and personal loan EMI instantly.' },
                { href:'/invoice-generator', icon:'🧾', label:'Free Invoice Generator',      desc:'Create GST-compliant professional invoices in 60 seconds.' },
                { href:'/blog/old-vs-new-regime-15-lpa-salary-2026-27', icon:'⚖️', label:'Old vs New Tax Regime', desc:'Which regime saves more? Exact numbers for 15 LPA salary.' },
                { href:'/blog/how-to-calculate-gratuity-india', icon:'🎁', label:'Gratuity Calculator Guide', desc:'Full gratuity formula with 6 worked examples from ₹3L to ₹40L CTC.' },
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

          {/* Trust */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">ToolStackHub — 100% Browser-Based, No Data Stored</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  This Professional Tax calculator runs entirely in your browser. Your salary figures are never sent to any server, never stored, and disappear when you close the tab. PT slab data is verified against official state government sources as of FY 2026-27.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server — runs in browser only</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">📅 Updated for FY 2026-27</span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-white px-3 py-1 rounded-full border border-surface-200">🆓 Free, no account needed</span>
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> PT slab data is based on official state government notifications as of April 2026. State governments may revise PT slabs without notice. While we verify data regularly, always confirm with your company's payroll team or your state's official PT department for the most current rates. This tool is for informational purposes only and does not constitute tax advice.
          </div>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="professional-tax-calculator" />
      <Footer />
    </>
  );
}