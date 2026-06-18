import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'How to Save Income Tax in India — 12 Legal Ways (FY 2025-26)',
  description:
    'Complete guide to reducing your income tax in FY 2025-26. 12 legal tax-saving methods — which apply under new regime, which under old, and the exact rupee saving for each. Updated for Budget 2025.',
  keywords: [
    'how to save income tax in india',
    'income tax saving tips fy 2025-26',
    'how to reduce income tax india',
    'income tax deductions fy 2025-26',
    'tax saving investments india 2025-26',
    '80c deductions fy 2025-26',
    'new regime tax saving',
    'old regime vs new regime which is better',
    'income tax exemptions india salaried',
    'how to pay less tax india 2025',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-save-income-tax-india-fy-2025-26` },
  openGraph: {
    title: 'How to Save Income Tax in India — 12 Legal Ways (FY 2025-26)',
    description:
      '12 legal ways to cut your income tax bill in FY 2025-26. New vs old regime map for every deduction, exact rupee savings, and a free calculator to verify your numbers.',
    url: `${SITE_CONFIG.url}/blog/how-to-save-income-tax-india-fy-2025-26`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Save Income Tax in India — 12 Legal Ways (FY 2025-26)',
    description: '12 legal tax-saving methods for salaried employees in India, FY 2025-26. New vs old regime for every deduction — and a free calculator.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const METHODS = [
  {
    num: '01',
    title: 'Standard Deduction — ₹75,000 (New) / ₹50,000 (Old)',
    section: 'Section 16 / Section 16(ia)',
    regime: 'both',
    maxSaving: '₹22,500 (new) / ₹15,000 (old) at 30% slab',
    summary:
      'You get this automatically — no investment, no proof, no declaration needed. Under the new regime you pocket ₹75,000 off your gross salary; under the old regime it is ₹50,000. The ₹25,000 higher standard deduction is one of the biggest structural advantages of the new regime.',
    tips: [
      'Nothing to do — your employer applies it automatically.',
      'Under the new regime, ₹75,000 standard deduction + ₹12 lakh rebate makes salary up to ₹12.75 lakh effectively tax-free.',
      'Old regime gives only ₹50,000 — the gap directly widens the taxable income.',
    ],
  },
  {
    num: '02',
    title: 'Section 80C — Up to ₹1,50,000',
    section: 'Section 80C',
    regime: 'old',
    maxSaving: '₹46,800 at 30% slab + 4% cess',
    summary:
      'The most used deduction in India. Up to ₹1.5 lakh invested in eligible instruments reduces your taxable income by the same amount — but only under the old tax regime.',
    instruments: [
      { name: 'Employee Provident Fund (EPF)', note: 'Your 12% share counts' },
      { name: 'Public Provident Fund (PPF)',   note: '15-year lock-in, tax-free maturity' },
      { name: 'ELSS Mutual Funds',             note: 'Shortest 3-year lock-in, market returns' },
      { name: 'Life Insurance Premium',         note: 'For self, spouse, and children' },
      { name: 'NSC (National Savings Certificate)', note: '5-year, guaranteed return' },
      { name: '5-Year Tax-Saver Bank FD',       note: 'Interest is taxable, principal is deductible' },
      { name: 'Home Loan Principal Repayment',  note: 'Deductible within the ₹1.5L limit' },
      { name: "Children's School/College Fees", note: 'For 2 children, full-time education' },
    ],
    warning: 'Section 80C deductions are not available under the new regime. If you choose new regime, your EPF and PPF contributions still grow tax-efficiently — but they won\'t reduce your taxable income.',
  },
  {
    num: '03',
    title: 'Section 80D — Health Insurance Up to ₹1,00,000',
    section: 'Section 80D',
    regime: 'old',
    maxSaving: '₹31,200 at 30% slab',
    summary:
      'Premiums you pay for health insurance are deductible up to defined limits. Helps most for people paying separate premiums for parents, especially if parents are senior citizens.',
    instruments: [
      { name: 'Self + Family (below 60)',     note: 'Up to ₹25,000' },
      { name: 'Parents (below 60)',            note: 'Up to ₹25,000 additional' },
      { name: 'Parents (senior citizens 60+)', note: 'Up to ₹50,000 additional' },
      { name: 'Preventive health check-up',    note: 'Up to ₹5,000 within above limits' },
    ],
    warning: 'Available only under old regime. Not deductible under new regime.',
  },
  {
    num: '04',
    title: 'NPS Contribution — Extra ₹50,000 via Section 80CCD(1B)',
    section: 'Section 80CCD(1B)',
    regime: 'old',
    maxSaving: '₹15,600 at 30% slab (on top of 80C savings)',
    summary:
      'Your own NPS Tier-I contribution up to ₹50,000 is deductible over and above the ₹1.5L ceiling under Section 80C — making it a unique way to claim ₹2 lakh in total deductions on retirement savings alone.',
    tips: [
      'Opens an additional ₹50,000 deduction beyond the ₹1.5L 80C limit.',
      'NPS Tier-I has a lock-in until age 60 — plan accordingly.',
      'Tier-II contributions are not deductible.',
    ],
    warning: 'Section 80CCD(1B) is available only under the old regime.',
  },
  {
    num: '05',
    title: "Employer's NPS Contribution — Section 80CCD(2), Both Regimes",
    section: 'Section 80CCD(2)',
    regime: 'both',
    maxSaving: 'Up to 14% of Basic+DA — no upper cap for private sector',
    summary:
      "If your employer contributes to your NPS Tier-I, that amount is deductible under Section 80CCD(2) — and crucially, this deduction is available under BOTH the new and old regime. It's one of the very few deductions that survives the new regime.",
    tips: [
      'Ask HR if your company offers an NPS contribution as part of your CTC.',
      'Private sector employees can claim up to 10% of Basic+DA; government employees up to 14%.',
      'On a ₹10 lakh salary with ₹5 lakh Basic and a 10% NPS contribution, that\'s ₹50,000 tax-free under the new regime.',
      "This is one of the best new-regime tax hacks — restructure your CTC to maximise employer NPS.",
    ],
  },
  {
    num: '06',
    title: 'HRA Exemption — Up to 50% of Basic Salary',
    section: 'Section 10(13A)',
    regime: 'old',
    maxSaving: 'Depends on salary and rent paid — often ₹1–3L+ for metro earners',
    summary:
      'If you receive House Rent Allowance and actually pay rent, the exempt portion reduces your taxable income. The exemption is the minimum of three conditions — and it only applies under the old tax regime.',
    conditions: [
      'Actual HRA received from employer',
      'Rent paid minus 10% of Basic salary',
      '50% of Basic salary (metro city) or 40% (non-metro)',
    ],
    tips: [
      'If your monthly rent is less than 10% of your Basic, HRA exemption is zero regardless of the actual HRA.',
      'Metro cities for HRA: Delhi, Mumbai, Chennai, Kolkata. Bengaluru, Hyderabad, and Pune are non-metro for HRA purposes.',
      'You can claim HRA exemption only if you are not claiming deduction under Section 80GG (for non-HRA salary structures).',
    ],
    warning: 'HRA exemption is not available under the new tax regime.',
  },
  {
    num: '07',
    title: 'Home Loan Interest — ₹2,00,000 via Section 24(b)',
    section: 'Section 24(b)',
    regime: 'old',
    maxSaving: '₹62,400 at 30% slab on ₹2L deduction',
    summary:
      'If you have a home loan on a self-occupied property, you can deduct up to ₹2 lakh of the annual interest paid. For let-out properties, the entire interest is deductible (though the rental income becomes taxable). This is the main reason the old regime can beat the new regime at higher incomes.',
    tips: [
      'For a self-occupied house: max ₹2 lakh interest deduction under Section 24(b).',
      'For a let-out house: entire interest is deductible, but rental income is added to your income.',
      'Home loan principal repayment counts under 80C (within ₹1.5L).',
      'Stamp duty and registration charges paid for the property can also be claimed under 80C once.',
    ],
    warning: 'Section 24(b) interest deduction is only available under the old regime.',
  },
  {
    num: '08',
    title: 'Section 80E — Education Loan Interest (Unlimited)',
    section: 'Section 80E',
    regime: 'old',
    maxSaving: 'No upper limit — entire interest paid is deductible for up to 8 years',
    summary:
      'If you have taken an education loan for yourself, your spouse, or your children, the entire interest paid is deductible for up to 8 assessment years. There is no cap on the deduction amount — a rare feature in India\'s tax code.',
    tips: [
      'Applies to loans from recognised financial institutions or approved charitable institutions.',
      'The deduction starts from the year repayment begins and continues for 8 years.',
      'Only the interest component is deductible — not the principal.',
      'Loan must be for higher education (after senior secondary school).',
    ],
    warning: 'Section 80E is only available under the old regime.',
  },
  {
    num: '09',
    title: 'Leave Travel Allowance (LTA) — Up to 2 Domestic Trips',
    section: 'Section 10(5)',
    regime: 'old',
    maxSaving: 'Capped at actual fare; max ₹5,000–₹20,000+ depending on salary',
    summary:
      'If your salary includes LTA, the actual travel fare for up to 2 domestic trips in a 4-year block can be exempt from tax — but only on travel within India and for the shortest air/rail route.',
    tips: [
      'Current 4-year block: 2022–2025. Block 2026–2029 starts this FY.',
      'Exemption covers economy air fare, first-class AC rail fare, or AC bus fare on the shortest route.',
      'Keep tickets and boarding passes as documentary proof.',
      'LTA covers only travel cost — not hotel, food, or local transport.',
    ],
    warning: 'LTA exemption is not available under the new tax regime.',
  },
  {
    num: '10',
    title: 'PPF + EPF — Long-Term Wealth With EEE Tax Status',
    section: 'Section 10(11), 10(12), 80C',
    regime: 'old',
    maxSaving: 'Tax-free interest + maturity on top of 80C deduction',
    summary:
      'PPF and EPF enjoy "EEE" (Exempt-Exempt-Exempt) status — contributions (up to limits), interest earned, and maturity/withdrawal are all tax-free. This makes them exceptional long-term wealth instruments even when the tax deduction angle disappears under the new regime.',
    tips: [
      'EPF: 12% of your Basic salary is deducted each month. Your employer matches it. 8.25% interest (FY 2023-24).',
      'PPF: ₹1.5L max per year, 7.1% interest (Q2 FY 2025-26), 15-year lock-in. Interest and maturity are fully tax-free.',
      'Under the new regime, contributions still grow tax-free — you just lose the upfront deduction. The wealth creation benefit remains.',
    ],
  },
  {
    num: '11',
    title: 'Gratuity and Leave Encashment — Exempt on Exit',
    section: 'Section 10(10), 10(10AA)',
    regime: 'both',
    maxSaving: 'Gratuity up to ₹20 lakh fully exempt; leave encashment up to ₹25 lakh',
    summary:
      'When you leave a job after 5+ years, gratuity up to ₹20 lakh is fully exempt under both regimes. Leave encashment received at retirement is exempt up to ₹25 lakh. These exemptions require no action — they apply automatically on the year of receipt.',
    tips: [
      'Gratuity = 15 days × Basic per year of service ÷ 26. Tax-free up to ₹20 lakh for private sector.',
      'Government employees: full leave encashment is exempt on retirement.',
      'Private sector leave encashment at retirement: exempt up to ₹25 lakh.',
    ],
  },
  {
    num: '12',
    title: 'Choose the Right Regime — The Single Biggest Tax Decision',
    section: 'Section 115BAC / Section 115BAC(1A)',
    regime: 'both',
    maxSaving: 'Up to ₹62,400/year (the difference between regimes at 15 LPA)',
    summary:
      'The biggest tax saving move for most salaried Indians in FY 2025-26 is simply picking the correct regime. For incomes below ₹12.75 lakh, new regime means zero tax. Above that, the break-even depends on your total deductions. The calculator does this in seconds.',
    tips: [
      'New regime is the default from FY 2024-25. If you do nothing, you pay new regime tax.',
      'Old regime requires you to actively opt in — tell HR at the start of April.',
      'You can switch regimes every year as a salaried employee (when filing ITR).',
      'New regime usually wins for: freshers, mid-income earners without home loans, those who prefer simplicity.',
      'Old regime wins for: large home loan interest + max 80C + 80D + NPS contributions.',
    ],
  },
];

const FAQS = [
  {
    q: 'What is the maximum tax I can save in FY 2025-26?',
    a: 'Under the new regime, salary up to ₹12.75 lakh is tax-free — saving up to ₹54,600. Under the old regime with maximum deductions (~₹4–5 lakh: 80C ₹1.5L + 80D ₹75K + NPS ₹50K + HRA ₹1.5L+), the maximum tax saving can reach ₹1.5–2 lakh per year at higher income levels versus a no-deduction baseline.',
  },
  {
    q: 'Which tax-saving investments work under the new regime?',
    a: 'Very few. Under the new regime, only the standard deduction (₹75,000), employer NPS contribution under Section 80CCD(2), and certain allowances like gratuity/leave encashment exemptions apply. Deductions like 80C, 80D, HRA, Section 24(b) home loan interest, and NPS 80CCD(1B) are not available. If you want these deductions, opt for the old regime.',
  },
  {
    q: 'Is income up to ₹12 lakh really tax-free in FY 2025-26?',
    a: 'Yes — for salaried employees up to approximately ₹12.75 lakh CTC under the new regime. The Section 87A rebate (₹60,000) eliminates tax on taxable income up to ₹12 lakh. After the ₹75,000 standard deduction, this corresponds to a gross salary of ₹12.75 lakh. Gross above ₹12.75 lakh will have some tax to pay.',
  },
  {
    q: 'Can I claim both 80C and HRA exemption in the same year?',
    a: 'Yes, under the old regime you can claim both. 80C covers your investments (EPF, PPF, ELSS, etc.) and home loan principal. HRA covers your rent paid. They are separate deductions and their individual limits are applied independently. You cannot claim these under the new regime.',
  },
  {
    q: 'What if I forget to declare my regime to my employer?',
    a: 'If you do not declare, your employer will deduct TDS under the new regime by default. When filing your ITR (deadline July 31, 2026 for most), you can choose the regime you want — even if it differs from what your employer used for TDS. If the ITR regime gives a lower tax, you will get a refund.',
  },
  {
    q: 'Does the 87A rebate apply to STCG or LTCG income?',
    a: 'No. Section 87A rebate applies only to normal income under the slab rates. Short-term capital gains taxed at 20% (STCG after July 2024 under Section 111A) and long-term capital gains are taxed separately and the 87A rebate cannot be used to offset them.',
  },
];

export default function HowToSaveIncomeTaxBlog() {
  const publishDate = '2026-06-18';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Save Income Tax in India — 12 Legal Ways (FY 2025-26)',
        description:
          '12 legal tax-saving methods for salaried employees in India, FY 2025-26. Each mapped to new regime / old regime with exact rupee savings.',
        url: `${SITE_CONFIG.url}/blog/how-to-save-income-tax-india-fy-2025-26`,
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
          { '@type': 'ListItem', position: 3, name: 'How to Save Income Tax FY 2025-26', item: `${SITE_CONFIG.url}/blog/how-to-save-income-tax-india-fy-2025-26` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Save Income Tax FY 2025-26</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Income Tax</span>
              <span className="text-xs text-surface-400">June 18, 2026 · 14 min read</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">FY 2025-26</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              How to Save Income Tax in India —
              <span className="text-brand-600"> 12 Legal Ways for FY 2025-26</span>
            </h1>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-800 leading-relaxed">
              <strong>Accuracy note:</strong> All figures are based on the Income Tax Act for FY 2025-26 (AY 2026-27). New-regime slabs reflect the Budget 2025 revision — Section 87A rebate up to ₹12 lakh taxable income, ₹75,000 standard deduction. Old-regime deduction limits unchanged. Updated June 18, 2026.
            </div>

            <div className="space-y-3 text-surface-600 text-lg leading-relaxed">
              <p>
                Every April, millions of salaried Indians pick a tax regime and declare investments — often in a rush, often choosing the wrong one, often missing deductions worth thousands of rupees.
              </p>
              <p>
                This guide maps every major legal tax-saving method to the correct regime, gives you the exact rupee saving at a 30% slab, and links to a free calculator so you can verify every figure against your own numbers — no CA visit required for this part.
              </p>
              <p>
                One upfront warning: <strong className="text-surface-800">most deductions in this list work only under the old regime.</strong> If you have chosen the new regime, only methods 1, 5, 11, and 12 apply to you. We'll flag this clearly for each method.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Calculations verified against Income Tax Act, FY 2025-26 slab rates and Budget 2025 revisions.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* ── Quick-check calculator CTA ────────────────── */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-2">Before you read — check your tax first</div>
            <p className="text-white text-sm leading-relaxed mb-4">
              Enter your salary and deductions into our free Income Tax Calculator and see your new-regime vs old-regime tax side by side. The rest of this guide explains how to reduce whichever number you see.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools/income-tax-calculator"
                className="bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                Calculate My Income Tax — Free →
              </Link>
              <Link href="/tools/salary-calculator"
                className="bg-white/15 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/25 transition-colors text-sm">
                In-Hand Salary Calculator
              </Link>
            </div>
          </div>

          {/* ── Regime map ───────────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Which Tax-Saving Method Works Under Which Regime?</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The single biggest confusion in India's tax planning. Here's the complete map before we go into each method:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Tax-Saving Method</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">New Regime</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Old Regime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: 'Standard Deduction (₹75K new / ₹50K old)',           nw: '✅ ₹75,000', od: '✅ ₹50,000' },
                    { method: 'Section 80C (EPF, PPF, ELSS, LIC, 5yr FD…)',          nw: '❌',          od: '✅ ₹1.5L' },
                    { method: 'Section 80D (Health insurance)',                       nw: '❌',          od: '✅ ₹25K–₹1L' },
                    { method: 'Section 80CCD(1B) — NPS own contribution',             nw: '❌',          od: '✅ ₹50K extra' },
                    { method: "Section 80CCD(2) — Employer's NPS contribution",       nw: '✅',          od: '✅' },
                    { method: 'HRA Exemption — Section 10(13A)',                      nw: '❌',          od: '✅ Up to 50% Basic' },
                    { method: 'Home Loan Interest — Section 24(b)',                   nw: '❌',          od: '✅ ₹2L' },
                    { method: 'Section 80E — Education Loan Interest',                nw: '❌',          od: '✅ Unlimited' },
                    { method: 'LTA — Leave Travel Allowance',                         nw: '❌',          od: '✅ Actual fare' },
                    { method: 'PPF / EPF (EEE tax-free growth)',                      nw: '✅ Growth',   od: '✅ Growth + 80C' },
                    { method: 'Gratuity / Leave Encashment (on exit)',                nw: '✅',          od: '✅' },
                    { method: 'Choosing the right regime',                            nw: '✅',          od: '✅' },
                  ].map((r, i) => (
                    <tr key={r.method} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 text-surface-800 font-medium">{r.method}</td>
                      <td className={`px-4 py-3 text-center font-bold ${r.nw.startsWith('✅') ? 'text-emerald-700' : 'text-surface-400'}`}>{r.nw}</td>
                      <td className={`px-4 py-3 text-center font-bold ${r.od.startsWith('✅') ? 'text-emerald-700' : 'text-surface-400'}`}>{r.od}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-3 leading-relaxed">
              ✅ = Applicable and deductible &nbsp;·&nbsp; ❌ = Not available in this regime.
              Old-regime deductions require you to formally opt in — inform your employer before the first salary of the financial year.
            </p>
          </section>

          {/* ── TOC ─────────────────────────────────────── */}
          <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">12 Methods — Jump to Any Section</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {METHODS.map(m => (
                <a key={m.num} href={`#method-${m.num}`}
                  className="text-xs text-surface-600 hover:text-brand-700 transition-colors flex items-center gap-2">
                  <span className="text-brand-400 font-bold w-5">{m.num}</span>
                  <span>{m.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Each method ─────────────────────────────── */}
          {METHODS.map((m) => (
            <section key={m.num} id={`method-${m.num}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-600 text-white font-black text-sm flex items-center justify-center">{m.num}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="font-display font-bold text-xl text-surface-900">{m.title}</h2>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="font-mono text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded">{m.section}</span>
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      m.regime === 'both' ? 'bg-emerald-100 text-emerald-700' :
                      m.regime === 'old'  ? 'bg-amber-100 text-amber-700'    :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {m.regime === 'both' ? '✅ Both Regimes' : m.regime === 'old' ? '🔒 Old Regime Only' : '🆕 New Regime Only'}
                    </span>
                    {m.maxSaving && (
                      <span className="text-surface-500">Max saving: <strong className="text-surface-700">{m.maxSaving}</strong></span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-surface-600 leading-relaxed mb-4">{m.summary}</p>

              {m.instruments && (
                <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-100">
                        <th className="text-left px-4 py-2.5 font-semibold text-surface-700">Instrument</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-surface-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m.instruments.map((ins, i) => (
                        <tr key={ins.name} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-2.5 text-surface-800 font-medium">{ins.name}</td>
                          <td className="px-4 py-2.5 text-surface-500 text-xs">{ins.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {m.conditions && (
                <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">HRA Exemption = Minimum of These 3</div>
                  <div className="space-y-2">
                    {m.conditions.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-surface-700">
                        <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {m.tips && (
                <ul className="space-y-2 mb-4">
                  {m.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-surface-600 leading-relaxed">
                      <span className="text-brand-600 mt-0.5 shrink-0 font-bold">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}

              {m.warning && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
                  ⚠️ {m.warning}
                </div>
              )}
            </section>
          ))}

          {/* ── Break-even decision box ─────────────────── */}
          <section id="break-even">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The Break-Even Rule — When Does the Old Regime Win?</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              The new regime has a higher standard deduction (₹75K vs ₹50K) and the ₹12L Section 87A rebate. The old regime has all the deductions listed above. The question is: at what total deduction level does switching to old regime make sense?
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Annual Salary (CTC)</th>
                    <th style={{ color: '#ffffff' }} className="text-right px-4 py-3 font-semibold">New Regime Tax</th>
                    <th style={{ color: '#ffffff' }} className="text-right px-4 py-3 font-semibold">Deductions Needed for Old Regime to Win</th>
                    <th style={{ color: '#ffffff' }} className="text-right px-4 py-3 font-semibold rounded-tr-2xl">Typical Old-Regime Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ctc: '₹10 LPA',  newTax: 'Nil',     needed: 'N/A — new regime is free', verdict: 'New Regime ✅', hilite: false },
                    { ctc: '₹12 LPA',  newTax: 'Nil',     needed: 'N/A — new regime is free', verdict: 'New Regime ✅', hilite: false },
                    { ctc: '₹15 LPA',  newTax: '₹88,503', needed: '₹5,79,330+',               verdict: 'New Regime ✅ (unless home loan)', hilite: true },
                    { ctc: '₹20 LPA',  newTax: '₹2,10,600', needed: '₹4,50,000+',             verdict: 'Depends on deductions',            hilite: false },
                    { ctc: '₹25 LPA',  newTax: '₹3,51,300', needed: '₹3,80,000+',             verdict: 'Old regime may win with 80C+HRA+HL', hilite: false },
                    { ctc: '₹30 LPA+', newTax: 'Higher',   needed: '₹3,50,000+',              verdict: 'Old regime often wins', hilite: false },
                  ].map((r, i) => (
                    <tr key={r.ctc} className={r.hilite ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.ctc}</td>
                      <td className="px-4 py-3 text-right font-mono text-surface-700">{r.newTax}</td>
                      <td className="px-4 py-3 text-right text-surface-600">{r.needed}</td>
                      <td className={`px-4 py-3 text-right text-xs font-bold ${r.verdict.startsWith('New') ? 'text-emerald-700' : r.verdict.startsWith('Old') ? 'text-brand-700' : 'text-amber-700'}`}>{r.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-surface-500 leading-relaxed">
              Use the{' '}
              <Link href="/tools/income-tax-calculator" className="text-brand-600 hover:text-brand-700 font-semibold underline">
                Income Tax Calculator
              </Link>{' '}
              with your actual deductions to get the exact break-even for your salary. The ₹10L and ₹12L rows are clickable:
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { href: '/income-tax-on-10-lakh-salary',  label: 'Tax on ₹10 LPA' },
                { href: '/income-tax-on-15-lakh-salary',  label: 'Tax on ₹15 LPA' },
                { href: '/income-tax-on-20-lakh-salary',  label: 'Tax on ₹20 LPA' },
                { href: '/income-tax-on-25-lakh-salary',  label: 'Tax on ₹25 LPA' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-100 transition-colors">
                  {l.label} →
                </Link>
              ))}
            </div>
          </section>

          {/* ── Action plan box ─────────────────────────── */}
          <div className="bg-surface-900 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-white mb-4">Your 4-Step Tax-Saving Action Plan for FY 2025-26</h2>
            <div className="space-y-3">
              {[
                {
                  n: '1',
                  title: 'Calculate your tax under both regimes',
                  desc: 'Enter your income and likely deductions into the Income Tax Calculator and see the exact difference.',
                  href: '/tools/income-tax-calculator',
                  cta: 'Open Calculator',
                },
                {
                  n: '2',
                  title: 'Check your TDS is being deducted correctly',
                  desc: 'Cross-check your employer\'s TDS against your own calculation to catch over- or under-deductions early.',
                  href: '/tools/tds-calculator',
                  cta: 'TDS Calculator',
                },
                {
                  n: '3',
                  title: 'Calculate your HRA exemption (old regime only)',
                  desc: 'HRA is often under-claimed. Use the HRA Calculator to find the exact exempt amount for your rent and city.',
                  href: '/tools/hra-calculator',
                  cta: 'HRA Calculator',
                },
                {
                  n: '4',
                  title: 'Verify your total in-hand salary',
                  desc: 'Once you pick a regime, run the salary calculator with your full breakup to confirm the monthly in-hand.',
                  href: '/tools/salary-calculator',
                  cta: 'Salary Calculator',
                },
              ].map(step => (
                <div key={step.n} className="flex gap-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center shrink-0">{step.n}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm mb-0.5">{step.title}</div>
                    <div className="text-surface-300 text-xs leading-relaxed mb-2">{step.desc}</div>
                    <Link href={step.href}
                      className="text-xs font-bold text-brand-300 hover:text-white transition-colors">
                      {step.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tax tools cluster ───────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Free India Tax Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/income-tax-calculator',      icon: '🧮', label: 'Income Tax Calculator',         desc: 'New vs old regime, FY 2025-26 slabs, 87A rebate' },
                { href: '/tools/tds-calculator',             icon: '🧾', label: 'TDS Calculator',                desc: 'Salary, rent, FD interest, professional fees, contractor' },
                { href: '/tools/salary-calculator',          icon: '💰', label: 'Salary Calculator',             desc: 'CTC to in-hand, all deductions, state PT' },
                { href: '/tools/hra-calculator',             icon: '🏠', label: 'HRA Exemption Calculator',      desc: 'All 3 conditions, metro/non-metro, exact exempt amount' },
                { href: '/tools/form-16-calculator',         icon: '📋', label: 'Form 16 Tax Calculator',        desc: 'Old vs new regime with deductions, monthly TDS' },
                { href: '/tools/ppf-calculator',             icon: '🏦', label: 'PPF Calculator',                desc: '7.1% interest, year-by-year growth, tax-free maturity' },
                { href: '/tools/epf-calculator',             icon: '💼', label: 'EPF Calculator',                desc: 'Corpus, employer match, withdrawal estimate' },
                { href: '/tools/professional-tax-calculator',icon: '⚖️', label: 'Professional Tax Calculator',   desc: '18 states, monthly & annual deduction' },
              ].map(tool => (
                <Link key={tool.href} href={tool.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{tool.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{tool.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{tool.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────── */}
          <section id="faq">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── Related articles ─────────────────────────── */}
          <div>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/blog/old-vs-new-tax-regime-2025-26',          icon: '⚖️', label: 'Old vs New Regime — Full Guide',             desc: 'Decision table for every income level'                 },
                { href: '/blog/old-vs-new-regime-15-lpa-salary-2026-27',icon: '📊', label: 'Old vs New Regime for 15 LPA',               desc: 'Exact rupee comparison with break-even analysis'        },
                { href: '/blog/how-to-calculate-hra-exemption-fy-2026-27',icon:'🏠',label: 'HRA Exemption Guide',                        desc: 'All 3 conditions, step-by-step with examples'          },
                { href: '/blog/income-tax-changes-2026-india',           icon: '📋', label: 'Income Tax Changes 2026 India',             desc: 'New Tax Act 2025, slab changes, ITR deadlines'         },
                { href: '/blog/how-to-calculate-in-hand-salary-india',   icon: '💰', label: 'How to Calculate In-Hand Salary',           desc: 'CTC vs gross vs net — India salaried guide'            },
                { href: '/blog/in-hand-salary-calculator-lpa-india',     icon: '🧮', label: 'In-Hand Salary for 5–30 LPA',              desc: 'Monthly take-home for every CTC level'                 },
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

          {/* ── Disclaimer ───────────────────────────────── */}
          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> All deduction limits and slab rates are based on the Income Tax Act for FY 2025-26 (AY 2026-27) as of June 2026. Tax savings shown assume the 30% slab rate. Actual savings depend on your income, applicable slab, and documented deductions. This guide is for educational purposes — consult a Chartered Accountant for personalised tax advice.
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
