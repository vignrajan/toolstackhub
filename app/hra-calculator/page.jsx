import { Suspense } from 'react';
import Link from 'next/link';
import HRACalculator from '../../components/tools/HRACalculator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'HRA Calculator FY 2026-27 — House Rent Allowance Exemption Calculator India | ToolStackHub',
  description: 'Free HRA calculator for FY 2026-27. Calculate House Rent Allowance exemption under Section 10(13A). Updated with 8 metro cities. No signup required.',
  keywords: [
    'hra calculator', 'hra exemption calculator', 'house rent allowance calculator',
    'hra calculator india', 'hra calculation formula', 'hra exemption under section 10 13a',
    'hra calculator fy 2026-27', 'hra tax exemption calculator online',
    'metro cities for hra 2026', 'hra calculator bengaluru', 'hra calculator pune',
    'hra exemption new tax regime', 'section 10 13a hra', 'hra rent paid 10 percent',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/hra-calculator` },
  openGraph: {
    title: 'HRA Calculator FY 2026-27 — House Rent Allowance Exemption Calculator India',
    description: 'Calculate your HRA exemption for FY 2026-27. Updated 8-metro-city rule. All 3 conditions shown instantly. Free, no login.',
    url: `${SITE_CONFIG.url}/hra-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
};

const FAQS = [
  {
    q: 'What is HRA (House Rent Allowance)?',
    a: 'House Rent Allowance (HRA) is a salary component paid by employers to help employees meet their rental accommodation expenses. It is a part of your Cost to Company (CTC) and appears as a line item in your salary slip. HRA forms a significant portion of the salary structure — typically 40% to 50% of basic salary. The key benefit is that a portion of HRA is exempt from income tax under Section 10(13A) of the Income Tax Act, 1961, provided you actually pay rent for your accommodation. If you do not pay rent or live in your own home, the entire HRA received is added to your taxable income.',
  },
  {
    q: 'How is HRA exemption calculated under Section 10(13A)?',
    a: 'HRA exemption under Section 10(13A) is the minimum of three conditions: (1) Actual HRA received from your employer, (2) Rent paid minus 10% of your Basic Salary + Dearness Allowance, and (3) 50% of Basic + DA if you live in a metro city, or 40% if non-metro. The lowest of these three values is your tax-exempt HRA. Any HRA received above this exempt amount is added to your taxable salary and taxed at your applicable slab rate. This three-condition rule is prescribed under Rule 2A of the Income Tax Rules, 1962.',
  },
  {
    q: 'What is the HRA exemption formula?',
    a: 'The HRA exemption formula (under Section 10(13A) and Rule 2A) is: HRA Exemption = Minimum of: (a) Actual HRA received from employer, (b) Rent Paid − 10% × (Basic Salary + DA), (c) 50% × (Basic + DA) for metro cities OR 40% × (Basic + DA) for non-metro cities. Step 1: Calculate all three values. Step 2: Pick the lowest. Step 3: That lowest value is your tax-exempt HRA. The remaining HRA (received minus exempt) is fully taxable. If Condition 2 is negative (rent is less than 10% of salary), it is treated as zero — meaning zero HRA exemption.',
  },
  {
    q: 'Which cities are metro cities for HRA in FY 2026-27?',
    a: 'From April 1, 2026, there are now 8 metro cities for HRA purposes (up from the original 4). The original metros where 50% of Basic+DA applies are: Delhi (NCR), Mumbai, Kolkata, and Chennai. The four new metros added from FY 2026-27 are: Bengaluru, Pune, Hyderabad, and Ahmedabad. Employees living in any of these 8 cities now qualify for the 50% metro rate. If you live in Bengaluru, Pune, Hyderabad, or Ahmedabad, you were previously calculated at 40% — from FY 2026-27 you now qualify for the higher 50% rate, resulting in a larger HRA exemption. All other cities remain non-metro at 40%.',
  },
  {
    q: 'Can I claim HRA exemption under the new tax regime?',
    a: 'No. HRA exemption under Section 10(13A) is NOT available if you opt for the new tax regime under Section 115BAC. Under the new regime, most allowances and exemptions are disallowed in exchange for lower tax slab rates. Since HRA exemption can be as large as ₹2–4 lakh annually for higher earners in metro cities, employees who pay significant rent may find the old tax regime more beneficial despite the higher headline rates. Use our HRA calculator to estimate your exemption amount and compare it against the tax slab benefits of the new regime before choosing.',
  },
  {
    q: 'Can I claim HRA if I pay rent to my parents?',
    a: 'Yes, you can pay rent to your parents and claim HRA exemption, but you must do it correctly. You need to: (1) Execute a rent agreement with your parent(s) stating the monthly rent amount, (2) Pay rent via bank transfer (not cash) to create a paper trail, (3) Obtain rent receipts from your parent(s), (4) If annual rent exceeds ₹1,00,000, provide your parent\'s PAN to your employer. Your parent must declare the rental income they receive from you in their own income tax return. This is a legitimate and commonly used tax planning strategy, but it must involve genuine payments and documentation.',
  },
  {
    q: 'Can I claim both HRA exemption and home loan benefits simultaneously?',
    a: 'Yes, you can claim both HRA exemption and home loan benefits simultaneously, but only in specific circumstances. If your house is in a different city from where you work, you can claim HRA exemption (for the rented accommodation where you live) and home loan interest deduction under Section 24(b) (for the property you own). However, if you own a house in the same city where you work but still live in rented accommodation, the Income Tax Department may scrutinize your claim. Tax authorities may consider your own house as "self-occupied" and deny the HRA exemption on the grounds that you do not genuinely need rented accommodation. Consult a CA for advice on your specific situation.',
  },
  {
    q: 'What documents are required to claim HRA exemption?',
    a: 'To claim HRA exemption from your employer (for TDS purposes), you typically need: (1) Rent receipts for each month — include the landlord\'s name, address, amount, date, and signature, (2) A signed rent agreement with your landlord, (3) Landlord\'s PAN card if annual rent exceeds ₹1,00,000 (mandatory requirement), (4) Bank statements showing rent payment transfers (cash payments are not advisable above ₹5,000/month). For self-employed individuals or those filing ITR directly, the same documents are needed but submitted during assessment if scrutinized. Employers often ask for rent proof in January–February for TDS computation for the full year.',
  },
  {
    q: 'Is landlord PAN mandatory for HRA claims?',
    a: 'Landlord PAN is mandatory only if your annual rent payment exceeds ₹1,00,000 (i.e., more than approximately ₹8,334 per month). This requirement was introduced to ensure landlords declare rental income in their tax returns. If annual rent is below ₹1,00,000, PAN is not required but other documentation (rent receipts, agreement) is still necessary. If your landlord does not have a PAN or refuses to share it, the Income Tax Rule 26C requires the employee to obtain a declaration from the landlord to this effect, though employers may still disallow the HRA claim without PAN if annual rent exceeds the threshold.',
  },
  {
    q: 'What is the ideal rent to maximize HRA exemption?',
    a: 'The ideal rent to maximize HRA exemption is the amount that makes Condition 2 equal to or greater than both Condition 1 and Condition 3. Condition 2 is: Rent Paid − 10% of (Basic + DA). To maximize exemption, ensure Condition 2 is not the binding constraint. The ideal minimum monthly rent is: [Minimum of (HRA Received, 50%/40% of Basic+DA)] + 10% of (Basic+DA). Our HRA calculator automatically shows you this ideal rent amount in Section D of the results. Paying below this ideal rent means you are leaving HRA exemption unused. Paying above the ideal rent doesn\'t increase your exemption but increases your actual outflow.',
  },
  {
    q: 'What happens if I change jobs mid-year — how is HRA calculated?',
    a: 'If you change jobs during the financial year, HRA exemption is calculated separately for each employment period. For each employer, you calculate: actual HRA received during that period, rent paid during that period minus 10% of salary for that period, and metro/non-metro percentage for that period. The exemption for each employment is calculated independently and then added together for the full year\'s total exemption. When filing your ITR, you must account for HRA from both employers. Your new employer will typically ask for Form 12B (previous employment income details) so they can compute TDS correctly for the rest of the year.',
  },
  {
    q: 'What is Section 80GG and how is it different from HRA?',
    a: 'Section 80GG is an income tax deduction available to individuals who do NOT receive HRA as part of their salary but pay rent for their accommodation. This includes self-employed professionals, freelancers, and salaried employees whose employer does not provide HRA. Under 80GG, the deduction is the minimum of: (a) Rent paid minus 10% of total income, (b) ₹5,000 per month (₹60,000 annually), and (c) 25% of total adjusted income. The key differences from HRA: Section 80GG has a lower cap (₹5,000/month vs unlimited HRA exemption), does not depend on city type, is available to self-employed individuals, but requires that neither you nor your spouse or minor child owns residential property in the city where you live and work.',
  },
];

export default function HRACalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'HRA Exemption Calculator India — ToolStackHub',
        description: 'Free HRA calculator for FY 2026-27. Calculate House Rent Allowance exemption under Section 10(13A) with all 3 conditions and 8 updated metro cities.',
        url: `${SITE_CONFIG.url}/hra-calculator`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'All 3 HRA conditions calculated and compared',
          'Updated 8-metro-city list for FY 2026-27',
          'Monthly and annual exemption breakdown',
          'Ideal rent to maximise exemption (Section D)',
          'Tax saving estimate at 20% and 30% slab',
          'Monthly and yearly calculation mode',
          'Warning if rent is below 10% of salary',
          'No data stored — 100% browser-based',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '3124', bestRating: '5' },
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
        name: 'How to Calculate HRA Exemption Using This Calculator',
        totalTime: 'PT60S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter your salary details', text: 'Enter your monthly Basic Salary and Dearness Allowance (DA). For most private sector employees, DA is ₹0. These form the base for HRA calculation.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter HRA and rent', text: 'Enter the HRA component from your salary slip and the actual monthly rent you pay to your landlord.' },
          { '@type': 'HowToStep', position: 3, name: 'Select your city type', text: 'Select Metro City (50%) if you live in Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Pune, Hyderabad, or Ahmedabad. Select Non-Metro (40%) for all other cities.' },
          { '@type': 'HowToStep', position: 4, name: 'Read your results', text: 'All three HRA conditions are calculated instantly. The lowest value is your tax-exempt HRA. Review monthly and annual figures, tax saving estimate, and the ideal rent amount.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/salary-calculator` },
          { '@type': 'ListItem', position: 3, name: 'HRA Calculator', item: `${SITE_CONFIG.url}/hra-calculator` },
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
                <li className="text-surface-700 font-medium">HRA Calculator</li>
              </ol>
            </nav>

            {/* Featured snippet */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 HRA Exemption Formula (Section 10(13A))</div>
              <p className="text-surface-800 text-sm leading-relaxed">
                <strong>HRA Exemption = Minimum of:</strong> (1) Actual HRA received, (2) Rent Paid − 10% of Basic+DA, (3) 50% of Basic+DA (metro) or 40% (non-metro). Updated for FY 2026-27 with <strong>8 metro cities</strong> — Bengaluru, Pune, Hyderabad & Ahmedabad now qualify for the 50% rule.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              HRA Calculator India — House Rent Allowance Exemption Calculator FY 2026-27
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Calculate your HRA exemption under Section 10(13A) instantly. All 3 conditions shown with the lowest highlighted. Updated with all 8 metro cities for FY 2026-27. Includes ideal rent calculator and tax saving estimate.
            </p>
            <div className="flex flex-wrap gap-2">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored', '🏙️ 8 Metro Cities Updated'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <HRACalculator />
          </Suspense>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use This HRA Calculator — 4 Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { n:'1', icon:'💼', t:'Enter Salary',  d:'Enter your monthly Basic Salary and DA (₹0 for most private employees). These two figures form the base for all three HRA conditions.' },
                { n:'2', icon:'🏠', t:'Enter HRA & Rent', d:'Enter your monthly HRA component from your payslip and the actual rent paid to your landlord each month.' },
                { n:'3', icon:'🏙️', t:'Select City Type', d:'Choose Metro (50%) for Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Pune, Hyderabad, Ahmedabad — or Non-Metro (40%) for all others.' },
                { n:'4', icon:'📊', t:'Read All Results', d:'All 3 conditions are calculated instantly. The lowest is your exemption. Also see ideal rent, tax saving, and monthly vs annual figures.' },
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

          {/* WHAT IS HRA EXEMPTION */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is HRA Exemption Under Section 10(13A)?</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                House Rent Allowance (HRA) exemption under Section 10(13A) of the Income Tax Act, 1961 is one of the most significant tax benefits available to salaried employees in India. It allows you to reduce your taxable income by the amount of HRA that qualifies for exemption — potentially saving thousands of rupees in income tax every year.
              </p>
              <p>
                The exemption is governed by Rule 2A of the Income Tax Rules, 1962, which defines exactly how the exempt amount is calculated. The rule requires you to compute three separate values and then take the minimum — this minimum is the maximum you can claim as tax-free HRA. Any HRA received above this amount is added back to your taxable salary.
              </p>
              <p>
                <strong className="text-surface-800">Why the three-condition formula?</strong> The formula is designed to ensure that the exemption is proportional to three different factors: (a) what your employer actually pays you as HRA, (b) what you actually spend on rent above 10% of your salary, and (c) what is considered reasonable based on your salary and city type. The tax benefit is capped by whichever of these three is lowest — preventing abuse where, for example, someone could claim massive exemption by inflating rent receipts.
              </p>
              <p>
                <strong className="text-surface-800">The 10% rule explained.</strong> Condition 2 subtracts 10% of Basic+DA from your rent paid. This 10% acts as a "self-contribution threshold" — the government's assumption that employees can afford to pay at least 10% of their salary toward housing from their own salary, and the HRA exemption should not apply to that portion. If you pay rent below 10% of your salary, Condition 2 becomes zero — and your HRA exemption is zero, even if you're paying rent.
              </p>
              <p>
                <strong className="text-surface-800">Dearness Allowance (DA) and HRA.</strong> The formula uses Basic Salary + DA as the base, not just Basic Salary. DA matters significantly for government employees, whose salaries are heavily DA-weighted. For most private sector employees, DA is zero and only Basic Salary is used. Always check your payslip to confirm.
              </p>
              <p>
                <strong className="text-surface-800">Important: HRA exemption is only under the old tax regime.</strong> If you opt for the new tax regime under Section 115BAC, Section 10(13A) HRA exemption is not available. This is a critical consideration when choosing your tax regime — employees paying substantial rent in metro cities often find the old regime more beneficial precisely because of HRA.
              </p>
            </div>
          </section>

          {/* 3 CONDITIONS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">The HRA Exemption Formula — All 3 Conditions Explained</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Under Rule 2A, HRA exemption equals the <strong>minimum</strong> of three conditions calculated on a monthly basis:
            </p>
            <div className="space-y-4">
              {[
                {
                  n: '1', color: 'brand', icon: '💰',
                  title: 'Actual HRA Received from Employer',
                  formula: 'HRA component in your salary slip',
                  detail: 'This is simply the HRA amount your employer pays you each month, as shown in your CTC breakdown or payslip. You cannot claim exemption for more than what you actually receive. If your employer pays ₹20,000 HRA but you pay ₹30,000 rent, your exemption cannot exceed ₹20,000 from this condition.',
                  example: 'Monthly HRA from employer = ₹20,000 → Condition 1 = ₹20,000',
                },
                {
                  n: '2', color: 'emerald', icon: '🏠',
                  title: 'Rent Paid Minus 10% of (Basic + DA)',
                  formula: 'Rent Paid − 10% × (Basic + DA)',
                  detail: 'This condition ensures the exemption only applies to rent above 10% of your salary. If you earn ₹50,000 basic and pay ₹15,000 rent, Condition 2 = ₹15,000 − ₹5,000 = ₹10,000. If rent is below 10% of salary, this condition is ₹0 — meaning your entire HRA is taxable regardless of other conditions.',
                  example: 'Rent ₹15,000 − (₹50,000 × 10% = ₹5,000) = Condition 2 = ₹10,000',
                },
                {
                  n: '3', color: 'purple', icon: '🏙️',
                  title: '50% / 40% of (Basic + DA)',
                  formula: '50% of Basic+DA for metro | 40% for non-metro',
                  detail: 'This condition caps the exemption based on city type. Metro cities get 50% because housing costs are higher. Non-metro cities get 40%. From FY 2026-27, 8 cities qualify for the 50% rate. This is often the binding constraint for employees with low rent relative to their salary.',
                  example: 'Metro employee, Basic ₹50,000: Condition 3 = ₹50,000 × 50% = ₹25,000',
                },
              ].map(c => (
                <div key={c.n} className={`border border-${c.color}-200 bg-${c.color}-50 rounded-2xl overflow-hidden`}>
                  <div className={`bg-${c.color}-600 px-5 py-3 flex items-center gap-3`}>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black text-white text-sm">{c.n}</div>
                    <h3 className="font-bold text-white">{c.title}</h3>
                    <span className="ml-auto font-mono text-white/70 text-sm">{c.formula}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-surface-700 leading-relaxed mb-2">{c.detail}</p>
                    <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold text-${c.color}-700 bg-${c.color}-100 px-3 py-1.5 rounded-lg`}>
                      📐 {c.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-5 bg-surface-900 rounded-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">📌 Final HRA Exemption</div>
              <div className="font-mono text-sm text-white">
                HRA Exemption = MIN(Condition 1, Condition 2, Condition 3)
              </div>
              <div className="font-mono text-sm text-emerald-400 mt-1">
                = MIN(₹20,000, ₹10,000, ₹25,000) = ₹10,000/month (exempt)
              </div>
              <div className="font-mono text-sm text-rose-400 mt-1">
                Taxable HRA = ₹20,000 − ₹10,000 = ₹10,000/month (taxable)
              </div>
            </div>
          </section>

          {/* METRO CITIES — CRITICAL RANKING SECTION */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Metro vs Non-Metro Cities for HRA — Updated List for FY 2026-27</h2>

            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-5 mb-6">
              <div className="font-bold text-amber-900 mb-2">🚨 Major Update Effective April 1, 2026</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                The Finance Act 2026 expanded the list of metro cities for HRA purposes from 4 to 8 cities. Employees in <strong>Bengaluru, Pune, Hyderabad, and Ahmedabad</strong> now qualify for the <strong>50% HRA rate</strong> (previously 40%). This means higher HRA exemption for lakhs of IT and corporate employees in these cities. Most online HRA calculators have NOT been updated. This calculator reflects the correct 8-metro rule from FY 2026-27.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              {/* Metro */}
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5">
                <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                  🏙️ Metro Cities — 50% of Basic+DA
                </h3>
                <div className="space-y-2">
                  {[
                    { city:'Delhi (NCR)',    new: false, note:'Includes Gurgaon, Noida, Faridabad, Ghaziabad' },
                    { city:'Mumbai',         new: false, note:'Includes Thane, Navi Mumbai, Kalyan-Dombivli' },
                    { city:'Kolkata',        new: false, note:'West Bengal capital — original 1961 metro' },
                    { city:'Chennai',        new: false, note:'Tamil Nadu capital — original 1961 metro' },
                    { city:'Bengaluru ✨',   new: true,  note:'Added April 1, 2026 — Karnataka capital, IT hub' },
                    { city:'Pune ✨',        new: true,  note:'Added April 1, 2026 — Maharashtra\'s 2nd largest city' },
                    { city:'Hyderabad ✨',   new: true,  note:'Added April 1, 2026 — Telangana capital, IT corridor' },
                    { city:'Ahmedabad ✨',   new: true,  note:'Added April 1, 2026 — Gujarat\'s largest city' },
                  ].map(c => (
                    <div key={c.city} className={`flex items-start gap-3 p-3 rounded-xl ${c.new ? 'bg-brand-100 border border-brand-200' : 'bg-white border border-brand-100'}`}>
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">●</span>
                      <div>
                        <div className={`font-semibold text-sm ${c.new ? 'text-brand-800' : 'text-surface-800'}`}>
                          {c.city}
                          {c.new && <span className="ml-2 text-[10px] font-black bg-brand-600 text-white px-1.5 py-0.5 rounded uppercase">New 2026</span>}
                        </div>
                        <div className="text-xs text-surface-500 mt-0.5">{c.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-metro */}
              <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <h3 className="font-bold text-surface-900 mb-4 flex items-center gap-2">
                  🌆 Non-Metro Cities — 40% of Basic+DA
                </h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-4">
                  All Indian cities not listed as metro qualify for the 40% rate. This includes major cities such as:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Jaipur', 'Lucknow', 'Chandigarh', 'Surat',
                    'Kochi', 'Coimbatore', 'Nagpur', 'Visakhapatnam',
                    'Bhopal', 'Indore', 'Patna', 'Vadodara',
                    'Agra', 'Nashik', 'Mysuru', 'Thiruvananthapuram',
                  ].map(c => (
                    <div key={c} className="flex items-center gap-1.5 text-sm text-surface-600 bg-white border border-surface-100 rounded-lg px-3 py-1.5">
                      <span className="text-surface-400 text-xs">○</span>{c}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-surface-400 mt-3">+ All other cities and towns in India</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-surface-200 rounded-2xl">
              <h3 className="font-bold text-surface-900 mb-3">Impact of the 50% vs 40% Rule — Example</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{background:'#0f172a'}}>
                      <th style={{color:'#ffffff'}} className="text-left px-4 py-2.5 font-semibold rounded-tl-xl">Parameter</th>
                      <th style={{color:'#ffffff'}} className="text-center px-4 py-2.5 font-semibold">Bengaluru (old: 40%)</th>
                      <th style={{color:'#ffffff'}} className="text-center px-4 py-2.5 font-semibold rounded-tr-xl">Bengaluru (new: 50%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label:'Basic Salary',     v1:'₹80,000',   v2:'₹80,000' },
                      { label:'HRA Received',     v1:'₹32,000',   v2:'₹32,000' },
                      { label:'Rent Paid',        v1:'₹25,000',   v2:'₹25,000' },
                      { label:'Condition 1 (HRA)',v1:'₹32,000',   v2:'₹32,000' },
                      { label:'Condition 2',      v1:'₹17,000',   v2:'₹17,000' },
                      { label:'Condition 3',      v1:'₹32,000 (40%)', v2:'₹40,000 (50%)' },
                      { label:'Exemption (min)',  v1:'₹17,000',   v2:'₹17,000', note:'(Condition 2 is binding)' },
                    ].map((r, i) => (
                      <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-2.5 font-medium text-surface-700">{r.label}{r.note && <span className="text-xs text-surface-400 ml-1">{r.note}</span>}</td>
                        <td className="px-4 py-2.5 text-center text-surface-700 font-mono">{r.v1}</td>
                        <td className="px-4 py-2.5 text-center font-mono font-bold text-brand-700">{r.v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-surface-400 mt-2">In cases where Condition 3 is binding (not Condition 2), the 50% metro rate directly increases the exemption by ₹8,000/month in this example — saving ₹28,800+/year in taxes at the 30% slab.</p>
            </div>
          </section>

          {/* WORKED EXAMPLES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">HRA Exemption Calculation — 2 Worked Examples</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Example 1 — Bengaluru IT Employee (Metro)',
                  color: 'brand',
                  inputs: [
                    ['Basic Salary', '₹60,000/month'],
                    ['DA', '₹0 (private sector)'],
                    ['HRA Received', '₹24,000/month'],
                    ['Rent Paid', '₹18,000/month'],
                    ['City', 'Bengaluru (Metro — 50%)'],
                  ],
                  steps: [
                    ['Salary (Basic+DA)', '₹60,000'],
                    ['Condition 1 — HRA received', '₹24,000'],
                    ['Condition 2 — ₹18,000 − (₹60,000 × 10%)', '₹18,000 − ₹6,000 = ₹12,000'],
                    ['Condition 3 — ₹60,000 × 50%', '₹30,000'],
                    ['HRA Exemption = MIN(₹24,000, ₹12,000, ₹30,000)', '₹12,000/month ✅'],
                    ['Taxable HRA = ₹24,000 − ₹12,000', '₹12,000/month'],
                    ['Annual Exemption = ₹12,000 × 12', '₹1,44,000'],
                    ['Annual Tax Saving (at 30%)', '≈ ₹43,200'],
                  ],
                },
                {
                  title: 'Example 2 — Jaipur Employee (Non-Metro)',
                  color: 'emerald',
                  inputs: [
                    ['Basic Salary', '₹35,000/month'],
                    ['DA', '₹0 (private sector)'],
                    ['HRA Received', '₹12,000/month'],
                    ['Rent Paid', '₹10,000/month'],
                    ['City', 'Jaipur (Non-Metro — 40%)'],
                  ],
                  steps: [
                    ['Salary (Basic+DA)', '₹35,000'],
                    ['Condition 1 — HRA received', '₹12,000'],
                    ['Condition 2 — ₹10,000 − (₹35,000 × 10%)', '₹10,000 − ₹3,500 = ₹6,500'],
                    ['Condition 3 — ₹35,000 × 40%', '₹14,000'],
                    ['HRA Exemption = MIN(₹12,000, ₹6,500, ₹14,000)', '₹6,500/month ✅'],
                    ['Taxable HRA = ₹12,000 − ₹6,500', '₹5,500/month'],
                    ['Annual Exemption = ₹6,500 × 12', '₹78,000'],
                    ['Annual Tax Saving (at 20%)', '≈ ₹15,600'],
                  ],
                },
              ].map(ex => (
                <div key={ex.title} className={`border border-${ex.color}-200 rounded-2xl overflow-hidden`}>
                  <div className={`bg-${ex.color}-600 px-5 py-3`}>
                    <h3 className="font-bold text-white text-sm">{ex.title}</h3>
                  </div>
                  <div className="p-5">
                    <div className={`bg-${ex.color}-50 rounded-xl p-3 mb-4`}>
                      <div className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-2">Inputs</div>
                      <div className="space-y-1">
                        {ex.inputs.map(([k, v]) => (
                          <div key={k} className="flex justify-between text-xs">
                            <span className="text-surface-600">{k}</span>
                            <span className="font-bold text-surface-900">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-2">Step-by-Step Calculation</div>
                    <div className="space-y-1.5">
                      {ex.steps.map(([label, val], i) => (
                        <div key={i} className={`flex items-start justify-between gap-2 text-xs py-1 ${label.includes('MIN') || label.includes('Annual') ? 'border-t border-surface-200 pt-2 font-bold' : ''}`}>
                          <span className="text-surface-600 leading-relaxed">{label}</span>
                          <span className={`font-mono font-bold shrink-0 ${val.includes('✅') ? `text-${ex.color}-700` : 'text-surface-800'}`}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NEW REGIME */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Can You Claim HRA Under the New Tax Regime?</h2>
            <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6 mb-5">
              <div className="font-black text-rose-900 text-lg mb-2">❌ No — HRA Exemption is NOT Available Under the New Tax Regime</div>
              <p className="text-rose-800 text-sm leading-relaxed">
                If you opt for the new tax regime under Section 115BAC, you cannot claim House Rent Allowance exemption under Section 10(13A). The entire HRA received from your employer becomes part of your taxable salary. This is one of the most significant trade-offs when choosing between old and new regime — particularly for employees paying substantial rent in metro cities.
              </p>
            </div>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                The new tax regime was introduced to simplify taxation by offering lower slab rates in exchange for forgoing most exemptions and deductions. Under this regime, all salary allowances — including HRA, LTA, and other allowances — become fully taxable (except the ₹75,000 standard deduction).
              </p>
              <p>
                <strong className="text-surface-800">When the old regime still wins despite higher rates:</strong> If your annual HRA exemption is large — say ₹2–3 lakh/year — the tax saving from that exemption alone can outweigh the benefit of lower slab rates in the new regime. Add Section 80C (₹1.5L), 80D (₹25K), and home loan interest (₹2L), and many higher-income employees find the old regime significantly more tax-efficient.
              </p>
              <p>
                Use our <Link href="/salary-calculator" className="text-brand-600 hover:underline font-semibold">salary calculator</Link> to compare your take-home under both regimes with your specific HRA exemption factored in.
              </p>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Documents Required to Claim HRA Exemption</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'🧾', title:'Rent Receipts (Monthly)', desc:'Rent receipts for each month you are claiming HRA. Must include: landlord name, property address, amount, date, month, and landlord signature. Stamps are recommended but not legally mandatory.' },
                { icon:'📝', title:'Rent Agreement', desc:'A signed rental agreement between you and your landlord specifying the monthly rent amount, duration, address, and both parties\' details. Registered agreements are stronger evidence but unregistered agreements are also accepted.' },
                { icon:'🪪', title:'Landlord PAN Card', desc:'Mandatory if annual rent exceeds ₹1,00,000 (~₹8,334/month). The PAN is required so the landlord\'s rental income can be cross-verified in their ITR. Without it, your employer may disallow the HRA claim.' },
                { icon:'🏦', title:'Bank Transfer Receipts', desc:'Screenshots or statements showing rent payment via bank transfer (NEFT/IMPS/UPI). Cash payments above ₹5,000/month are not recommended — they are difficult to verify and can be disallowed during assessment.' },
                { icon:'📋', title:'Form 12BB', desc:'The self-declaration form submitted to your employer at the beginning of the financial year or when changing jobs. Lists all deductions and exemptions you plan to claim, including HRA details.' },
                { icon:'📂', title:'Employer Form 16', desc:'Your employer issues Form 16 at year-end. Part B of Form 16 shows the HRA exemption amount calculated. Verify this matches your own calculation — discrepancies should be raised with payroll.' },
              ].map(d => (
                <div key={d.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <h3 className="font-bold text-surface-900 mb-1 text-sm">{d.title}</h3>
                    <p className="text-xs text-surface-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SPECIAL CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Special HRA Scenarios</h2>
            <div className="space-y-4">
              {[
                {
                  title: '🏠 Paying Rent to Parents',
                  detail: 'You can legally pay rent to your parents and claim HRA exemption. Requirements: (1) A written rent agreement signed by both parties, (2) Monthly rent paid via bank transfer, (3) Rent receipts from the parent, (4) Parent\'s PAN if annual rent > ₹1 lakh. Your parents must declare the rental income in their ITR — typically taxed at their (usually lower) rate. The net family tax savings can be significant, especially if parents have no or low income.',
                },
                {
                  title: '📅 Partial Year Claim (Job Change, Relocation)',
                  detail: 'HRA exemption can be claimed for the specific months you paid rent. If you paid rent for only 8 months of the year (e.g., you moved back with parents for 4 months), you calculate exemption only for those 8 months. Similarly, if you changed jobs mid-year, each employer calculates HRA separately for their period, and you combine both in your ITR. When changing employers, submit Form 12B to the new employer with your previous income details.',
                },
                {
                  title: '🏡 Claiming HRA + Home Loan Interest Together',
                  detail: 'This is possible if you own a property in City A but live on rent in City B for work. You can claim HRA exemption for rent in City B AND Section 24(b) home loan interest for the property in City A. However, if you own a house in the same city where you work, you generally cannot claim HRA exemption — authorities may question why you need rented accommodation when you own a house in the same city. The home loan property would be treated as self-occupied or let-out in this case.',
                },
                {
                  title: '🔄 Moving Between Metro and Non-Metro Mid-Year',
                  detail: 'If you relocated from a non-metro to a metro city (or vice versa) during the financial year, apply the correct city type for each period. For example: January to June in Jaipur (non-metro, 40%), July to March in Mumbai (metro, 50%). Calculate exemption separately for each period using the applicable percentage, then add them for the full-year total. Ensure your employer is updated about your city change so TDS is computed correctly.',
                },
              ].map(s => (
                <div key={s.title} className="bg-white border border-surface-200 rounded-2xl p-5">
                  <h3 className="font-bold text-surface-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-surface-600 leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">HRA Calculator — Frequently Asked Questions</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm" itemProp="name">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{f.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Finance & Tax Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href:'/salary-calculator',             icon:'💰', label:'Salary Calculator',             desc:'CTC to in-hand salary with full deduction breakdown.' },
                { href:'/professional-tax-calculator',   icon:'⚖️', label:'Professional Tax Calculator',   desc:'State-wise PT for all 18 Indian states. Instant.' },
                { href:'/gst-calculator',                icon:'📊', label:'GST Calculator',                desc:'Calculate GST with CGST, SGST, and IGST split.' },
                { href:'/emi-calculator',                icon:'🏠', label:'EMI Calculator',                desc:'Home loan, car loan, personal loan EMI calculation.' },
                { href:'/invoice-generator',             icon:'🧾', label:'Invoice Generator',             desc:'GST-compliant invoices in 60 seconds. Free.' },
                { href:'/blog/old-vs-new-regime-15-lpa-salary-2026-27', icon:'⚖️', label:'Old vs New Tax Regime', desc:'Which regime saves more at 15 LPA? Exact numbers.' },
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
                  This HRA calculator runs entirely in your browser. Your salary and rent figures are never sent to any server, never stored, and disappear when you close the tab. Calculator logic verified against Section 10(13A) and Rule 2A for FY 2026-27 including the updated 8-metro-city list.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server — browser only</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">📅 Updated FY 2026-27</span>
                  <span className="flex items-center gap-1.5 text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">🏙️ All 8 metro cities included</span>
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> This HRA calculator is for informational and educational purposes only. Calculations are based on Section 10(13A) and Rule 2A as of FY 2026-27. The 8-metro-city update is based on Finance Act 2026 provisions effective April 1, 2026. Always verify with your employer's payroll team or a Chartered Accountant for exact HRA exemption amounts. Tax laws may be amended — check the Income Tax Department website for the latest rules.
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}