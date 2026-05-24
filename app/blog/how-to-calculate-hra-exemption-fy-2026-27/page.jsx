import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'HRA Exemption FY 2026-27 — New 8 Metro Cities Rule Explained',
  description: 'Complete HRA exemption guide for FY 2026-27. New 8-metro-city rule, Section 10(13A) formula, step-by-step examples, and the ideal rent to maximise your exemption.',
  keywords: [
    'hra exemption calculation fy 2026-27', 'hra 8 metro cities 2026', 'section 10 13a hra',
    'how to calculate hra exemption', 'hra metro cities bengaluru pune hyderabad ahmedabad',
    'hra exemption formula india', 'hra new tax regime 2026', 'hra calculation example',
    'hra rent 10 percent rule', 'house rent allowance exemption guide',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-calculate-hra-exemption-fy-2026-27` },
  openGraph: {
    title: 'HRA Exemption FY 2026-27 — New 8 Metro Cities Rule Explained',
    description: 'New HRA rules from April 2026: Bengaluru, Pune, Hyderabad & Ahmedabad now qualify for 50% metro rate. Full Section 10(13A) guide with step-by-step examples.',
    url: `${SITE_CONFIG.url}/blog/how-to-calculate-hra-exemption-fy-2026-27`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate HRA Exemption FY 2026-27 — New 8 Metro Cities Rule',
    description: 'Complete HRA exemption guide for FY 2026-27. New 8-metro-city rule, Section 10(13A) formula, step-by-step examples, and the ideal rent to maximise your exemption.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'what-changed',       label: 'What Changed for HRA in FY 2026-27'             },
  { id: 'new-8-metro-cities', label: 'The New 8 Metro Cities — Full List'             },
  { id: 'hra-formula',        label: 'The HRA Exemption Formula (Section 10(13A))'    },
  { id: 'three-conditions',   label: 'The 3 Conditions Explained Simply'              },
  { id: 'examples',           label: 'Step-by-Step Calculation Examples'              },
  { id: 'ideal-rent',         label: 'What Is the Ideal Rent to Maximise HRA?'        },
  { id: 'new-regime',         label: 'HRA Under New Tax Regime — The Bad News'        },
  { id: 'mistakes',           label: 'Common HRA Mistakes That Cost You Money'        },
  { id: 'professional-tax',   label: 'HRA and Professional Tax — Understanding Both' },
  { id: 'faq',                label: 'FAQ'                                             },
];

export default function HRAExemptionBlog() {
  const publishDate = '2026-04-11';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Calculate HRA Exemption FY 2026-27 — New 8 Metro Cities Rule Explained',
        description: 'Complete HRA exemption guide for FY 2026-27 with updated 8-metro-city list, Section 10(13A) formula, worked examples, and ideal rent calculator.',
        url: `${SITE_CONFIG.url}/blog/how-to-calculate-hra-exemption-fy-2026-27`,
        datePublished: publishDate,
        dateModified: publishDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which are the 8 metro cities for HRA exemption in FY 2026-27?',
            acceptedAnswer: { '@type': 'Answer', text: 'From April 1, 2026, the 8 metro cities for HRA are: Delhi (NCR), Mumbai, Kolkata, Chennai (original four) and Bengaluru, Pune, Hyderabad, Ahmedabad (four new additions). Employees in these cities qualify for the 50% of Basic+DA rate. All other cities use 40%.' },
          },
          {
            '@type': 'Question',
            name: 'What is the HRA exemption formula under Section 10(13A)?',
            acceptedAnswer: { '@type': 'Answer', text: 'HRA exemption = Minimum of: (1) Actual HRA received from employer, (2) Rent paid minus 10% of Basic+DA, (3) 50% of Basic+DA for metro cities or 40% for non-metro cities. The lowest of these three values is the tax-exempt portion of your HRA.' },
          },
          {
            '@type': 'Question',
            name: 'Can I claim HRA exemption under the new tax regime?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. HRA exemption under Section 10(13A) is not available under the new tax regime (Section 115BAC). Your entire HRA becomes taxable if you choose the new regime. This is a major consideration when deciding between old and new regime — particularly for employees paying significant rent in metro cities.' },
          },
          {
            '@type': 'Question',
            name: 'What is the ideal monthly rent to maximise HRA exemption?',
            acceptedAnswer: { '@type': 'Answer', text: 'The ideal rent = (minimum of Condition 1 and Condition 3) + 10% of Basic+DA. This ensures Condition 2 is not the binding constraint. Paying below this amount means your exemption is reduced by Condition 2. Use our free HRA calculator to get the exact ideal rent for your salary.' },
          },
          {
            '@type': 'Question',
            name: 'What if my rent is below 10% of my basic salary?',
            acceptedAnswer: { '@type': 'Answer', text: 'If your rent paid is less than 10% of your Basic+DA, Condition 2 becomes zero or negative. Since HRA exemption is the minimum of three conditions, and one condition is zero, your entire HRA exemption becomes zero — despite paying rent. You will need to pay higher rent or your full HRA becomes taxable.' },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'HRA Exemption FY 2026-27', item: `${SITE_CONFIG.url}/blog/how-to-calculate-hra-exemption-fy-2026-27` },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">HRA Exemption FY 2026-27</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Income Tax</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">FY 2026-27</span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">🚨 Updated April 2026</span>
              <span className="text-xs text-surface-400">April 11, 2026 · 11 min read</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              How to Calculate HRA Exemption FY 2026-27 —
              <span className="text-brand-600"> New 8 Metro Cities Rule Explained</span>
            </h1>

            {/* Featured snippet */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 HRA Exemption Formula — Section 10(13A)</div>
              <p className="text-surface-800 text-sm leading-relaxed mb-3">
                <strong>HRA Exemption = Minimum of:</strong>
              </p>
              <div className="space-y-1.5 font-mono text-sm">
                <div className="flex gap-3 text-surface-800"><span className="text-brand-600 font-bold shrink-0">①</span><span>Actual HRA received from employer</span></div>
                <div className="flex gap-3 text-surface-800"><span className="text-brand-600 font-bold shrink-0">②</span><span>Rent Paid − 10% × (Basic Salary + DA)</span></div>
                <div className="flex gap-3 text-surface-800"><span className="text-brand-600 font-bold shrink-0">③</span><span>50% × (Basic+DA) for metro cities <em>or</em> 40% for non-metro</span></div>
              </div>
              <p className="text-xs text-surface-500 mt-3">
                From April 1, 2026: Metro cities expanded to 8 — Delhi, Mumbai, Kolkata, Chennai, <strong className="text-brand-700">Bengaluru, Pune, Hyderabad, Ahmedabad</strong>.
              </p>
            </div>

            {/* Hook */}
            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6">
              <p>
                Your salary slip shows an HRA component. Your payroll team deducts some of it as taxable, exempts the rest. But do you know <strong className="text-surface-800">exactly how much you're entitled to keep tax-free</strong> — and whether you're getting the full exemption you deserve?
              </p>
              <p>
                For FY 2026-27, there's a significant change that affects hundreds of thousands of salaried employees: <strong className="text-surface-800">Bengaluru, Pune, Hyderabad, and Ahmedabad have been added to the metro cities list</strong> for HRA purposes. If you work in any of these cities and your employer hasn't updated the calculation, you may be paying more tax than necessary.
              </p>
              <p>
                This guide walks you through the exact formula, the new 8-metro-city list, two worked examples, and the often-overlooked concept of "ideal rent" — the amount you should be paying to get maximum exemption.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Verified against Section 10(13A), Rule 2A, and Finance Act 2026. April 11, 2026.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 space-y-4">
                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">In This Guide</div>
                  <ol className="space-y-1.5">
                    {TOC.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                          <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tool CTA */}
                <div className="bg-brand-600 rounded-2xl p-5 text-white">
                  <div className="font-bold mb-2">🏠 Free HRA Calculator</div>
                  <p className="text-brand-200 text-xs leading-relaxed mb-3">Calculate your exact HRA exemption with the 8-metro update. See all 3 conditions + ideal rent.</p>
                  <Link href="/hra-calculator" className="block w-full text-center bg-white text-brand-700 font-bold text-sm py-2 rounded-xl hover:bg-brand-50 transition-colors">
                    Calculate Now →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* WHAT CHANGED */}
              <section id="what-changed">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What Changed for HRA in FY 2026-27?</h2>

                <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 mb-5">
                  <div className="font-bold text-amber-900 mb-2 text-lg">🚨 The Big Change: 4 New Metro Cities from April 1, 2026</div>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    The Finance Act 2026 (effective April 1, 2026) expanded the list of metro cities for HRA purposes under Section 10(13A). Bengaluru, Pune, Hyderabad, and Ahmedabad now qualify for the <strong>50% of Basic+DA</strong> rate — previously they were calculated at 40% like all other non-metro cities. This is the most significant HRA rule change in over three decades.
                  </p>
                </div>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Until March 31, 2026, India's metro cities for HRA purposes were limited to Delhi, Mumbai, Kolkata, and Chennai — the four cities defined under the original Income Tax rules that have remained unchanged since 1961. The 40% rule applied to every other city, including Bengaluru and Hyderabad — India's two largest IT hubs by employee count.
                  </p>
                  <p>
                    This was a significant anomaly. A software engineer paying ₹30,000 rent in Bengaluru — where rental costs are comparable to Delhi — was getting 20% less HRA exemption than a counterpart in Delhi doing the identical job. The Finance Act 2026 corrected this by recognising the economic reality of housing costs in India's fastest-growing cities.
                  </p>
                  <p>
                    <strong className="text-surface-800">Impact for employees:</strong> If you are in Bengaluru, Pune, Hyderabad, or Ahmedabad and Condition 3 (the metro/non-metro percentage) was the binding constraint in your HRA calculation, your annual exemption increases immediately. For a ₹80,000 basic salary employee, this means Condition 3 jumps from ₹32,000/month to ₹40,000/month — potentially saving ₹28,800+ in additional taxes per year at the 30% slab.
                  </p>
                  <p>
                    <strong className="text-surface-800">Important action:</strong> Verify that your employer's payroll system has been updated to reflect the 50% rate for your city. Many payroll software systems update automatically, but some smaller companies or manual payroll setups may not have made the change yet. If your payslip still shows 40% for Bengaluru/Pune/Hyderabad/Ahmedabad, raise it with your HR or payroll team immediately. The excess TDS deducted can be reclaimed in your ITR filing.
                  </p>
                </div>
              </section>

              {/* 8 METRO CITIES */}
              <section id="new-8-metro-cities">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">The New 8 Metro Cities for HRA — Complete List FY 2026-27</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {/* Original 4 */}
                  <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Original 4 Metros (Since 1961)</div>
                    <div className="space-y-3">
                      {[
                        { city:'Delhi (NCR)',   note:'Includes Gurgaon, Noida, Faridabad, Ghaziabad' },
                        { city:'Mumbai',        note:'Includes Thane, Navi Mumbai' },
                        { city:'Kolkata',       note:'West Bengal capital' },
                        { city:'Chennai',       note:'Tamil Nadu capital' },
                      ].map(c => (
                        <div key={c.city} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-surface-700 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">M</div>
                          <div>
                            <div className="font-bold text-surface-900 text-sm">{c.city}</div>
                            <div className="text-xs text-surface-400">{c.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* New 4 */}
                  <div className="bg-brand-50 border-2 border-brand-300 rounded-2xl p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">✨ New 4 Metros (From April 1, 2026)</div>
                    <div className="space-y-3">
                      {[
                        { city:'Bengaluru',   note:'Karnataka capital — India\'s IT capital. Previously 40%' },
                        { city:'Pune',        note:'Maharashtra — major IT & education hub. Previously 40%' },
                        { city:'Hyderabad',   note:'Telangana capital — HITEC City. Previously 40%' },
                        { city:'Ahmedabad',   note:'Gujarat\'s largest city — financial hub. Previously 40%' },
                      ].map(c => (
                        <div key={c.city} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">N</div>
                          <div>
                            <div className="font-bold text-brand-900 text-sm">{c.city} <span className="text-[10px] font-black bg-brand-600 text-white px-1.5 py-0.5 rounded ml-1">NEW</span></div>
                            <div className="text-xs text-brand-700">{c.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* HRA rate impact table */}
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{background:'#0f172a'}}>
                        <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">City</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">FY 2025-26 Rate</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">FY 2026-27 Rate</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { city:'Delhi / Mumbai / Kolkata / Chennai', old:'50%', newR:'50%',  change:'No change',   changed: false },
                        { city:'Bengaluru',                          old:'40%', newR:'50%',  change:'+10% ✅',     changed: true  },
                        { city:'Pune',                               old:'40%', newR:'50%',  change:'+10% ✅',     changed: true  },
                        { city:'Hyderabad',                          old:'40%', newR:'50%',  change:'+10% ✅',     changed: true  },
                        { city:'Ahmedabad',                          old:'40%', newR:'50%',  change:'+10% ✅',     changed: true  },
                        { city:'All other cities',                   old:'40%', newR:'40%',  change:'No change',   changed: false },
                      ].map((r, i) => (
                        <tr key={r.city} className={r.changed ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className={`px-4 py-3 font-semibold ${r.changed ? 'text-brand-800' : 'text-surface-800'}`}>{r.city}</td>
                          <td className={`px-4 py-3 text-center font-mono ${r.changed ? 'text-surface-400 line-through' : 'text-surface-700'}`}>{r.old}</td>
                          <td className={`px-4 py-3 text-center font-mono font-bold ${r.changed ? 'text-brand-700' : 'text-surface-700'}`}>{r.newR}</td>
                          <td className={`px-4 py-3 text-center text-xs font-bold ${r.changed ? 'text-emerald-700' : 'text-surface-400'}`}>{r.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Inline tool CTA 1 */}
                <div className="mt-5 bg-brand-50 border border-brand-200 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-bold text-brand-900">Calculate with the updated 8-metro rule instantly</div>
                    <p className="text-sm text-brand-700 mt-1">Our <Link href="/hra-calculator" className="font-bold underline">free HRA calculator</Link> is already updated with all 8 metro cities for FY 2026-27. Select your city type and get your exact exemption in seconds.</p>
                  </div>
                  <Link href="/hra-calculator" className="shrink-0 bg-brand-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors text-sm">
                    Try HRA Calculator →
                  </Link>
                </div>
              </section>

              {/* FORMULA */}
              <section id="hra-formula">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The HRA Exemption Formula — Section 10(13A) and Rule 2A</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    HRA exemption in India is governed by <strong className="text-surface-800">Section 10(13A) of the Income Tax Act, 1961</strong>, read with <strong className="text-surface-800">Rule 2A of the Income Tax Rules, 1962</strong>. Together they define exactly how the tax-exempt portion of HRA is computed.
                  </p>
                  <p>
                    The formula requires you to compute three separate monetary values and then identify the minimum. That minimum — whichever is lowest — is your tax-exempt HRA. The rest is added to your taxable income and taxed at your applicable slab rate.
                  </p>

                  {/* Formula display */}
                  <div className="bg-surface-900 rounded-2xl p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-4">📐 The Formula</div>
                    <div className="space-y-3">
                      <div className="font-mono text-sm text-white">
                        <span className="text-brand-400 font-bold">HRA Exemption</span> = MIN(C1, C2, C3)
                      </div>
                      <div className="border-t border-white/10 pt-3 space-y-2 text-sm font-mono">
                        <div><span className="text-emerald-400">C1</span> <span className="text-white/50">= </span><span className="text-white">Actual HRA received from employer</span></div>
                        <div><span className="text-emerald-400">C2</span> <span className="text-white/50">= </span><span className="text-white">Rent Paid − (10% × Basic+DA)</span></div>
                        <div><span className="text-emerald-400">C3</span> <span className="text-white/50">= </span><span className="text-white">50% × (Basic+DA) <span className="text-surface-400">if metro</span></span></div>
                        <div className="pl-7"><span className="text-white/50">or</span> <span className="text-white">40% × (Basic+DA) <span className="text-surface-400">if non-metro</span></span></div>
                      </div>
                      <div className="border-t border-white/10 pt-3 font-mono text-sm">
                        <div className="text-white"><span className="text-rose-400">Taxable HRA</span> = HRA Received − HRA Exemption</div>
                      </div>
                    </div>
                  </div>

                  <p>
                    <strong className="text-surface-800">Why "minimum"?</strong> The three-condition rule ensures the exemption is proportional to three independent factors simultaneously. You can't over-claim based on just one factor. If you're paying very little rent (Condition 2 drags the exemption down), the fact that your employer pays large HRA doesn't help. All three conditions constrain the exemption from three different angles.
                  </p>
                  <p>
                    <strong className="text-surface-800">What counts as "Basic+DA"?</strong> The formula uses Basic Salary plus Dearness Allowance — not your total salary. Special allowances, HRA itself, LTA, and other components are excluded from the base. For most private sector employees, DA is zero, so only Basic Salary is used. Government employees typically have significant DA components that substantially increase their HRA base.
                  </p>
                </div>
              </section>

              {/* 3 CONDITIONS */}
              <section id="three-conditions">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">The 3 Conditions Explained Simply</h2>

                <div className="space-y-5">
                  {[
                    {
                      n:'①', color:'brand',
                      title:'Condition 1 — Actual HRA from Your Employer',
                      simple:'The most straightforward condition. It\'s simply whatever HRA your employer pays you each month, as shown in your CTC breakdown or payslip.',
                      why:'This caps the exemption at what was actually paid. You can\'t claim exemption on HRA you didn\'t receive. If your employer pays ₹15,000 HRA but you pay ₹25,000 rent, you cannot claim exemption above ₹15,000 from this condition alone.',
                      example:'HRA in payslip = ₹18,000/month → Condition 1 = ₹18,000',
                      watch:'If your employer has restructured your salary and reduced the HRA component, your total exemption is capped at the lower HRA — even if you\'re paying higher rent.',
                    },
                    {
                      n:'②', color:'emerald',
                      title:'Condition 2 — Rent Paid Minus 10% of Salary',
                      simple:'This is where most people lose exemption without realising it. Take your actual monthly rent, then subtract 10% of your Basic+DA. The remainder is Condition 2.',
                      why:'The 10% threshold acts as a self-contribution floor — the government\'s assumption that you can afford to pay 10% of your salary toward housing from your own pocket. Only rent above this threshold qualifies for exemption. If rent is below 10% of salary, this condition is ₹0, and your entire HRA becomes taxable.',
                      example:'Rent ₹12,000, Basic ₹60,000 → 10% of ₹60,000 = ₹6,000 → Condition 2 = ₹12,000 − ₹6,000 = ₹6,000',
                      watch:'This is the most commonly binding condition. Employees whose rent is disproportionately low relative to their salary will find Condition 2 zeroing out their exemption. The fix is to either pay higher rent or understand that HRA has no tax benefit at current rent levels.',
                    },
                    {
                      n:'③', color:'purple',
                      title:'Condition 3 — 50% or 40% of Basic+DA',
                      simple:'This condition applies a percentage cap based on where you live. Metro city employees get 50%, non-metro get 40%. This is the condition most directly affected by the FY 2026-27 metro expansion.',
                      why:'The percentage cap acknowledges that housing costs vary by city. Higher costs in metros justify a higher exemption cap. For employees with high basic salaries and relatively low rent, this is often the binding condition — and the one where the metro reclassification makes the biggest difference.',
                      example:'Bengaluru employee, Basic ₹80,000 → FY 2025-26: ₹80,000 × 40% = ₹32,000 → FY 2026-27: ₹80,000 × 50% = ₹40,000',
                      watch:'If you just relocated to Bengaluru, Pune, Hyderabad, or Ahmedabad — update your city type with your employer immediately. Your TDS computation needs to reflect the 50% rate from April 2026 onwards.',
                    },
                  ].map(c => {
                    const colors = {
                      brand:  'bg-brand-50 border-brand-200',
                      emerald:'bg-emerald-50 border-emerald-200',
                      purple: 'bg-purple-50 border-purple-200',
                    };
                    const textColors = {
                      brand:  'text-brand-600',
                      emerald:'text-emerald-600',
                      purple: 'text-purple-600',
                    };
                    return (
                      <div key={c.n} className={`border-2 ${colors[c.color].split(' ')[1]} rounded-2xl overflow-hidden`}>
                        <div className={`${colors[c.color].split(' ')[0]} px-5 py-4 border-b ${colors[c.color].split(' ')[1]}`}>
                          <div className="flex items-center gap-3">
                            <span className={`text-2xl font-black ${textColors[c.color]}`}>{c.n}</span>
                            <h3 className="font-bold text-surface-900">{c.title}</h3>
                          </div>
                        </div>
                        <div className="p-5 space-y-3">
                          <div>
                            <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">In plain English</div>
                            <p className="text-sm text-surface-700 leading-relaxed">{c.simple}</p>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">Why this condition exists</div>
                            <p className="text-sm text-surface-600 leading-relaxed">{c.why}</p>
                          </div>
                          <div className="flex gap-4 flex-wrap">
                            <div className={`flex-1 ${colors[c.color].split(' ')[0]} rounded-xl p-3`}>
                              <div className={`text-xs font-bold ${textColors[c.color]} mb-1`}>📐 Example</div>
                              <div className={`text-xs font-mono ${textColors[c.color]}`}>{c.example}</div>
                            </div>
                            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3">
                              <div className="text-xs font-bold text-amber-700 mb-1">⚠️ Watch out for</div>
                              <div className="text-xs text-amber-800 leading-relaxed">{c.watch}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* EXAMPLES */}
              <section id="examples">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Step-by-Step HRA Calculation Examples</h2>

                {/* Example 1 */}
                <div className="mb-6">
                  <div className="bg-brand-600 rounded-t-2xl px-5 py-4">
                    <h3 className="font-bold text-white">Example 1 — Bengaluru IT Employee (Benefits from New Metro Rule)</h3>
                  </div>
                  <div className="border-2 border-brand-200 rounded-b-2xl p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {[['Basic Salary', '₹70,000'], ['HRA Received', '₹28,000'], ['Rent Paid', '₹22,000'], ['City', 'Bengaluru (Metro)']].map(([k, v]) => (
                        <div key={k} className="bg-brand-50 rounded-xl p-3 text-center">
                          <div className="text-xs text-surface-500 mb-0.5">{k}</div>
                          <div className="font-bold text-surface-900 text-sm">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-surface-900 rounded-xl p-5 font-mono text-sm space-y-2">
                      <div className="text-surface-400 text-xs font-bold uppercase tracking-wider mb-3">Calculation (FY 2026-27)</div>
                      <div className="text-white">C1 = HRA received = <span className="text-emerald-400 font-bold">₹28,000</span></div>
                      <div className="text-white">C2 = ₹22,000 − (₹70,000 × 10%) = ₹22,000 − ₹7,000 = <span className="text-emerald-400 font-bold">₹15,000</span></div>
                      <div className="text-white">C3 = ₹70,000 × <span className="text-brand-400">50% (metro)</span> = <span className="text-emerald-400 font-bold">₹35,000</span></div>
                      <div className="border-t border-white/10 pt-2 text-white">
                        HRA Exemption = MIN(₹28,000, <span className="text-yellow-400 font-black">₹15,000</span>, ₹35,000) = <span className="text-brand-400 font-black">₹15,000/month</span>
                      </div>
                      <div className="text-rose-400">Taxable HRA = ₹28,000 − ₹15,000 = ₹13,000/month</div>
                      <div className="border-t border-white/10 pt-2 text-emerald-400 font-bold">Annual Exemption = ₹15,000 × 12 = ₹1,80,000</div>
                      <div className="text-emerald-300">Tax Saving (30% slab) ≈ ₹54,000/year</div>
                    </div>
                    <div className="mt-3 p-3 bg-brand-50 border border-brand-200 rounded-xl text-xs text-brand-800">
                      <strong>Note:</strong> Condition 2 (₹15,000) is the binding constraint here. The employee could increase their rent to maximise exemption — see the "Ideal Rent" section below.
                    </div>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="mb-5">
                  <div className="bg-emerald-600 rounded-t-2xl px-5 py-4">
                    <h3 className="font-bold text-white">Example 2 — Chennai Employee Where Condition 3 Binds</h3>
                  </div>
                  <div className="border-2 border-emerald-200 rounded-b-2xl p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {[['Basic Salary', '₹1,00,000'], ['HRA Received', '₹40,000'], ['Rent Paid', '₹25,000'], ['City', 'Chennai (Metro)']].map(([k, v]) => (
                        <div key={k} className="bg-emerald-50 rounded-xl p-3 text-center">
                          <div className="text-xs text-surface-500 mb-0.5">{k}</div>
                          <div className="font-bold text-surface-900 text-sm">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-surface-900 rounded-xl p-5 font-mono text-sm space-y-2">
                      <div className="text-surface-400 text-xs font-bold uppercase tracking-wider mb-3">Calculation</div>
                      <div className="text-white">C1 = HRA received = <span className="text-emerald-400 font-bold">₹40,000</span></div>
                      <div className="text-white">C2 = ₹25,000 − (₹1,00,000 × 10%) = ₹25,000 − ₹10,000 = <span className="text-emerald-400 font-bold">₹15,000</span></div>
                      <div className="text-white">C3 = ₹1,00,000 × 50% = <span className="text-emerald-400 font-bold">₹50,000</span></div>
                      <div className="border-t border-white/10 pt-2 text-white">
                        HRA Exemption = MIN(₹40,000, <span className="text-yellow-400 font-black">₹15,000</span>, ₹50,000) = <span className="text-emerald-400 font-black">₹15,000/month</span>
                      </div>
                      <div className="text-rose-400">Taxable HRA = ₹40,000 − ₹15,000 = ₹25,000/month</div>
                      <div className="border-t border-white/10 pt-2 text-emerald-400 font-bold">Annual Exemption = ₹15,000 × 12 = ₹1,80,000</div>
                      <div className="text-emerald-300">Ideal rent to maximise = ₹40,000 + ₹10,000 = ₹50,000/month</div>
                    </div>
                    <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                      <strong>Key insight:</strong> Despite earning ₹1 lakh basic and living in a metro, this employee's exemption is constrained by Condition 2 (low rent relative to salary). Paying ₹50,000 rent would maximise exemption to ₹40,000/month — saving an extra ₹1,08,000 in taxes annually at the 30% slab.
                    </div>
                  </div>
                </div>

                {/* Inline tool CTA 2 */}
                <div className="bg-surface-900 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-bold" style={{color:'#ffffff'}}>Don't calculate manually — use the free calculator</div>
                    <p className="text-sm mt-1" style={{color:'#94a3b8'}}>Our <Link href="/hra-calculator" className="text-brand-400 font-bold hover:text-brand-300">HRA exemption calculator</Link> shows all 3 conditions, highlights the binding one, and gives you the ideal rent figure automatically.</p>
                  </div>
                  <Link href="/hra-calculator" className="shrink-0 bg-brand-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors text-sm">
                    Calculate My HRA →
                  </Link>
                </div>
              </section>

              {/* IDEAL RENT */}
              <section id="ideal-rent">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What Is the Ideal Rent to Maximise HRA Exemption?</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Most HRA guides stop at showing you the exemption for your current rent. The more useful question is: <strong className="text-surface-800">what rent should you be paying to get maximum exemption?</strong>
                  </p>
                  <p>
                    The binding constraint in most cases is Condition 2 — rent paid minus 10% of salary. To make this condition equal to (or exceed) the minimum of Conditions 1 and 3, your rent needs to be at least:
                  </p>

                  <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5 font-mono text-sm">
                    <div className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-3">Ideal Rent Formula</div>
                    <div className="text-surface-900 font-bold">
                      Ideal Monthly Rent = MIN(C1, C3) + 10% × (Basic+DA)
                    </div>
                    <div className="mt-2 text-surface-500">
                      Where C1 = HRA received, C3 = 50%/40% of Basic+DA
                    </div>
                    <div className="mt-3 border-t border-surface-200 pt-3 text-surface-700">
                      Example: Basic ₹60,000, HRA ₹20,000, Metro city<br />
                      C1 = ₹20,000 | C3 = ₹30,000 | MIN(C1,C3) = ₹20,000<br />
                      <span className="text-brand-700 font-bold">Ideal Rent = ₹20,000 + ₹6,000 = ₹26,000/month</span>
                    </div>
                  </div>

                  <p>
                    Paying more than the ideal rent does not increase your exemption further — it simply increases your actual outflow without additional tax benefit. Paying below the ideal rent means you're leaving exemption on the table.
                  </p>
                  <p>
                    This is particularly relevant for employees who have recently received salary hikes and haven't renegotiated their rent — or who are paying below-market rent (e.g., to family members) to minimise household expenses without realising it reduces their HRA benefit.
                  </p>
                  <p>
                    Our <Link href="/hra-calculator" className="text-brand-600 hover:underline font-semibold">HRA calculator</Link> automatically computes and displays the ideal rent as Section D of the results — a feature most other calculators don't provide.
                  </p>
                </div>
              </section>

              {/* NEW REGIME */}
              <section id="new-regime">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">HRA Under the New Tax Regime — The Bad News</h2>

                <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6 mb-5">
                  <div className="font-black text-rose-900 text-lg mb-2">❌ HRA Exemption is NOT Available Under the New Tax Regime</div>
                  <p className="text-rose-800 text-sm leading-relaxed">
                    If you have opted for the new tax regime under Section 115BAC, your entire HRA is taxable. Section 10(13A) exemption is explicitly excluded from the new regime. The new regime offers lower slab rates in exchange for forgoing this and most other deductions.
                  </p>
                </div>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    This is one of the most critical inputs when choosing between old and new regime. For an employee paying ₹20,000/month rent in Bengaluru with ₹18,000 HRA received and ₹60,000 basic, the annual HRA exemption under the old regime could be ₹1.44–2.16 lakh. The tax saving at 30% slab is ₹43,000–65,000 per year — often larger than the benefit from the new regime's lower slab rates.
                  </p>
                  <p>
                    The general rule of thumb: <strong className="text-surface-800">if your total deductions (HRA + 80C + 80D + home loan interest) exceed ₹3.5–4 lakh per year, the old regime is likely better.</strong> HRA alone frequently contributes ₹1.5–2 lakh+ of this for metro city employees.
                  </p>
                  <p>
                    Note that the new regime remains the <strong className="text-surface-800">default from FY 2024-25 onwards</strong>. If you don't actively declare your regime preference to your employer, TDS is computed under the new regime — which means no HRA exemption is applied. Always declare your regime preference early in the financial year.
                  </p>
                </div>
              </section>

              {/* MISTAKES */}
              <section id="mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common HRA Mistakes That Cost You Money</h2>
                <div className="space-y-3">
                  {[
                    {
                      mistake: 'Not updating city type after relocating to a new metro',
                      impact: 'High',
                      detail: 'If you moved to Bengaluru, Pune, Hyderabad, or Ahmedabad from FY 2026-27 but your employer still has you listed as non-metro (40%), you\'re losing 10% of Basic+DA in exemption every month. Submit a written request to HR with proof of your current city of residence.',
                      fix: 'Write to HR/payroll before April itself. Excess TDS can be reclaimed via ITR.',
                    },
                    {
                      mistake: 'Paying rent below 10% of basic salary and expecting exemption',
                      impact: 'Very High',
                      detail: 'If your rent is less than 10% of your Basic+DA, Condition 2 is zero or negative. Since the formula takes the minimum, your entire HRA exemption becomes zero. Thousands of employees paying ₹5,000–7,000 rent on ₹60,000+ basic wonder why they get no HRA benefit.',
                      fix: 'Either increase your rent to at least 10% of Basic+DA, or accept that HRA offers no tax benefit at current rent levels.',
                    },
                    {
                      mistake: 'Paying rent in cash above ₹5,000/month',
                      impact: 'Medium',
                      detail: 'While there\'s no absolute legal bar on cash rent payments, income tax officers during assessment frequently question large cash rent payments. If annual rent exceeds ₹1 lakh, PAN is mandatory regardless of payment mode. Bank transfers create a verifiable audit trail.',
                      fix: 'Pay rent via bank transfer (NEFT/UPI/IMPS). Keep screenshots of transfer confirmation.',
                    },
                    {
                      mistake: 'Not collecting PAN when annual rent exceeds ₹1,00,000',
                      impact: 'High',
                      detail: 'If annual rent > ₹1 lakh (i.e., more than ~₹8,334/month), providing the landlord\'s PAN to your employer is mandatory under Rule 26C. Without PAN, your employer may disallow the HRA exemption entirely for TDS purposes. You\'d then need to claim it yourself in your ITR.',
                      fix: 'Collect landlord PAN card copy before submitting rent proof to your employer.',
                    },
                    {
                      mistake: 'Claiming HRA without actually paying rent',
                      impact: 'Critical',
                      detail: 'This is tax fraud. Submitting fake rent receipts or fictitious rent agreements to claim HRA exemption you\'re not entitled to is a criminal offence under the Income Tax Act. Tax officers cross-check HRA claims, and landlords\' rental income is verified. The penalties include back taxes, interest, and penalty up to 300% of tax evaded.',
                      fix: 'Only claim exemption for rent you genuinely pay, with documentary proof.',
                    },
                  ].map((m, i) => (
                    <div key={i} className="border border-surface-200 rounded-2xl overflow-hidden bg-white">
                      <div className="flex items-center gap-3 px-5 py-3 bg-surface-50">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.impact === 'Critical' ? 'bg-red-100 text-red-800' : m.impact === 'Very High' ? 'bg-rose-100 text-rose-700' : m.impact === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-surface-100 text-surface-600'}`}>{m.impact}</span>
                        <h3 className="font-bold text-surface-900 text-sm">✗ {m.mistake}</h3>
                      </div>
                      <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="text-xs text-surface-600 leading-relaxed">{m.detail}</p>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                          <div className="text-xs font-bold text-emerald-700 mb-1">✓ Fix</div>
                          <p className="text-xs text-emerald-800 leading-relaxed">{m.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* HRA + PT CROSS-LINK */}
              <section id="professional-tax">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">HRA Exemption and Professional Tax — Understanding Both Together</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed mb-5">
                  <p>
                    HRA exemption and Professional Tax are two of the most important salary-related deductions for Indian employees — and they interact in ways most people don't think about.
                  </p>
                  <p>
                    <strong className="text-surface-800">Professional Tax reduces your taxable income first.</strong> Under Section 16(iii) of the Income Tax Act, Professional Tax paid during the year is fully deductible from your gross salary before any other deductions. This deduction is available under both old and new tax regimes. For most employees in states like Karnataka, Maharashtra, or Tamil Nadu, PT ranges from ₹1,800 to ₹2,500 annually.
                  </p>
                  <p>
                    <strong className="text-surface-800">The combined effect:</strong> If you are in Karnataka (PT: ₹2,400/year) claiming HRA exemption of ₹1,80,000/year under the old regime, your gross salary is reduced by ₹1,82,400 before income tax slabs are applied. At the 30% slab, that's a tax saving of approximately ₹54,720 — purely from these two deductions.
                  </p>
                  <p>
                    For employees in the 8 new metro cities who have both significant HRA exemption and monthly Professional Tax deductions, calculating your exact take-home requires accounting for both. Our tools help with each separately:
                  </p>
                </div>

                {/* Cross-link box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/hra-calculator"
                    className="block p-5 bg-brand-50 border-2 border-brand-200 rounded-2xl hover:border-brand-400 hover:bg-brand-100 transition-all group">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="font-bold text-brand-900 group-hover:text-brand-700 mb-1">HRA Exemption Calculator</div>
                    <div className="text-sm text-brand-700 leading-relaxed">Calculate your exact HRA exemption with the updated 8-metro rule. See all 3 conditions, ideal rent, and annual tax saving.</div>
                    <div className="text-xs font-bold text-brand-600 mt-3">Open Calculator →</div>
                  </Link>
                  <Link href="/professional-tax-calculator"
                    className="block p-5 bg-surface-50 border-2 border-surface-200 rounded-2xl hover:border-brand-300 hover:bg-brand-50 transition-all group">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-bold text-surface-900 group-hover:text-brand-700 mb-1">Professional Tax Calculator</div>
                    <div className="text-sm text-surface-600 leading-relaxed">Calculate Professional Tax for all 18 PT-levying Indian states. State-wise slab tables, monthly and annual PT, take-home breakdown.</div>
                    <div className="text-xs font-bold text-surface-500 group-hover:text-brand-600 mt-3">Open Calculator →</div>
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {
                      q: 'Which are the 8 metro cities for HRA exemption in FY 2026-27?',
                      a: 'From April 1, 2026, the 8 metro cities for HRA exemption are: Delhi (NCR), Mumbai, Kolkata, Chennai (original four since 1961) and Bengaluru, Pune, Hyderabad, and Ahmedabad (four new additions from FY 2026-27). Employees in all 8 cities qualify for the 50% of Basic+DA rate. All other cities use 40%. This is the most significant HRA rule change in over three decades.',
                    },
                    {
                      q: 'What is the HRA exemption formula under Section 10(13A)?',
                      a: 'HRA Exemption = Minimum of three conditions: (1) Actual HRA received from employer, (2) Rent Paid minus 10% of Basic Salary+DA, (3) 50% of Basic+DA for metro cities or 40% for non-metro cities. The lowest of these three values is your tax-exempt HRA. Any HRA received above this is added to your taxable salary.',
                    },
                    {
                      q: 'Can I claim HRA exemption under the new tax regime?',
                      a: 'No. HRA exemption under Section 10(13A) is not available if you opt for the new tax regime under Section 115BAC. Your entire HRA is taxable under the new regime. The new regime offers lower slab rates in exchange for forgoing most exemptions including HRA. Employees paying significant rent in metro cities may find the old regime more beneficial.',
                    },
                    {
                      q: 'What is the ideal monthly rent to maximise HRA exemption?',
                      a: 'Ideal rent = [Minimum of (HRA Received, 50%/40% of Basic+DA)] + 10% of (Basic+DA). This ensures that Condition 2 is not the binding constraint that reduces your exemption. Our HRA calculator displays this automatically in Section D of results. Paying below this amount means you\'re leaving exemption unclaimed.',
                    },
                    {
                      q: 'What if my rent is below 10% of my basic salary?',
                      a: 'If rent paid is less than 10% of Basic+DA, Condition 2 becomes zero or negative. Since HRA exemption equals the minimum of the three conditions — and one is zero — your entire HRA exemption becomes zero despite paying rent. You need to pay higher rent or accept that HRA offers no tax benefit at your current rent level.',
                    },
                    {
                      q: 'My employer still shows 40% for Bengaluru. What should I do?',
                      a: 'Raise a written request with your HR or payroll team citing the Finance Act 2026 change effective April 1, 2026. Bengaluru, Pune, Hyderabad, and Ahmedabad now qualify for 50%. If your employer has been deducting TDS at 40%, the excess deduction can be reclaimed when you file your ITR for FY 2026-27 by July 31, 2026. Keep documentary evidence of your city of residence.',
                    },
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
              {/* Final CTA */}
              <section className="bg-surface-900 rounded-2xl p-7 text-white">
                <h2 className="font-display font-bold text-2xl mb-4" style={{color:'#ffffff'}}>Calculate Your Exact HRA Exemption Now</h2>
                <p className="text-sm leading-relaxed mb-6" style={{color:'#cbd5e1'}}>
                  The formula has three variables, two city types, and a dozen edge cases. You shouldn't be computing this manually. Our free HRA calculator handles all of it — 8 updated metro cities, all 3 conditions shown side by side, ideal rent figure, and annual tax saving estimate — in under 30 seconds.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/hra-calculator" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                    🏠 Open HRA Calculator →
                  </Link>
                  <Link href="/professional-tax-calculator" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20 hover:bg-white/10" style={{color:'#ffffff'}}>
                    ⚖️ Professional Tax Calculator →
                  </Link>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Finance Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/old-vs-new-regime-15-lpa-salary-2026-27', icon:'⚖️', label:'Old vs New Regime — 15 LPA (Exact Numbers)', desc:'Step-by-step tax comparison with HRA impact included.' },
                    { href:'/blog/income-tax-changes-2026-india',           icon:'📋', label:'Income Tax Changes FY 2026-27',             desc:'New Tax Act 2025, slabs, ITR deadlines.' },
                    { href:'/blog/how-to-calculate-gratuity-india',         icon:'💰', label:'Gratuity Calculation Guide 2026',            desc:'Full formula with 6 worked examples.' },
                    { href:'/salary-calculator',                             icon:'💵', label:'Salary Calculator (CTC to In-Hand)',         desc:'Full deduction breakdown including HRA + PT.' },
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

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Disclaimer:</strong> This article is for educational and informational purposes only. HRA exemption rules are based on Section 10(13A), Rule 2A, and the Finance Act 2026 as of April 11, 2026. The 8-metro-city expansion is effective from FY 2026-27 (April 1, 2026). Tax laws may be amended — always verify with a Chartered Accountant or the Income Tax Department for advice specific to your situation.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}