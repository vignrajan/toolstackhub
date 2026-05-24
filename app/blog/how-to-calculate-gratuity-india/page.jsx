import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'How to Calculate Gratuity in India 2026 – Formula & Examples',
  description: 'Complete guide to gratuity in India 2026. 15/26 formula, step-by-step examples, new labour code changes, tax rules, and eligibility. Free calculator included.',
  keywords: [
    'how to calculate gratuity', 'gratuity formula india', 'gratuity calculation 2026',
    'gratuity formula 15 26', 'gratuity eligibility india', 'what is gratuity',
    'gratuity calculation example', 'new gratuity rules 2026', 'gratuity for private employees',
    'gratuity tax exemption india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-calculate-gratuity-india` },
  openGraph: {
    title: 'How to Calculate Gratuity in India 2026 – Formula & Examples',
    description: 'The only gratuity guide you need. Formula, 6 real examples, 2026 labour code changes, tax rules. Updated March 2026.',
    url: `${SITE_CONFIG.url}/blog/how-to-calculate-gratuity-india`,
    type: 'article',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Gratuity in India 2026 – Formula & Examples',
    description: 'Complete guide to gratuity in India 2026. 15/26 formula, step-by-step examples, new labour code changes, tax rules, and eligibility. Free calculator included.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'what-is-gratuity',         label: 'What is Gratuity?'                        },
  { id: 'eligibility',              label: 'Who is Eligible?'                          },
  { id: 'formula',                  label: 'The Gratuity Formula (15/26)'              },
  { id: 'why-15-26',                label: 'Why 15 and Why 26?'                        },
  { id: 'examples',                 label: 'Step-by-Step Examples (6 Salary Ranges)'  },
  { id: 'not-covered',              label: 'Employers NOT Covered Under the Act'       },
  { id: 'rounding-rules',           label: 'Rounding Rules — The 6-Month Rule'        },
  { id: 'new-labour-code-2026',     label: 'New Labour Code 2026 — What Changed'      },
  { id: 'maximum-limit',            label: 'Maximum Gratuity Limit'                   },
  { id: 'tax',                      label: 'Is Gratuity Taxable?'                      },
  { id: 'when-paid',                label: 'When Must Employer Pay Gratuity?'          },
  { id: 'faq',                      label: 'Frequently Asked Questions'               },
];

export default function GratuityBlogPage() {
  const publishDate = '2026-03-29';
  const updateDate  = '2026-03-29';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Calculate Gratuity in India 2026 – Formula, Examples & New Labour Code Rules',
        description: 'Complete guide to gratuity calculation in India 2026 with the 15/26 formula, examples for every salary range, new labour code changes, tax treatment, and eligibility rules.',
        url: `${SITE_CONFIG.url}/blog/how-to-calculate-gratuity-india`,
        datePublished: publishDate,
        dateModified: updateDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: {
          '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url,
          logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/how-to-calculate-gratuity-india` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the formula for gratuity calculation in India?', acceptedAnswer: { '@type': 'Answer', text: 'Gratuity = (Last Drawn Basic Salary + DA) × 15 ÷ 26 × Number of completed years of service. This formula applies to employers covered under the Payment of Gratuity Act, 1972 (now the Code on Social Security, 2020). For uncovered employers, 30 is used instead of 26.' } },
          { '@type': 'Question', name: 'What is the minimum years of service for gratuity?', acceptedAnswer: { '@type': 'Answer', text: 'For permanent employees, the minimum is 5 years of continuous service. Under the new labour codes (effective November 21, 2025), fixed-term/contract employees are eligible for pro-rata gratuity after just 1 year of service. In cases of death or permanent disability, the 5-year rule does not apply.' } },
          { '@type': 'Question', name: 'Is gratuity taxable in India?', acceptedAnswer: { '@type': 'Answer', text: 'For government employees, gratuity is fully exempt from income tax. For private sector employees under the Gratuity Act, the least of the following is tax-exempt: (a) actual gratuity received, (b) ₹20 lakh, or (c) last drawn salary × 15/26 × years of service. Any gratuity above ₹20 lakh is taxed as salary income.' } },
          { '@type': 'Question', name: 'What is the maximum gratuity in India 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The maximum tax-exempt gratuity for private sector employees is ₹20 lakh (₹20,00,000). For central government employees, the cap is ₹25 lakh. Any amount above these limits is treated as ex-gratia and taxed as salary.' } },
          { '@type': 'Question', name: 'Does 4 years 8 months count as 5 years for gratuity?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you have completed 4 years and 240 working days (or more), many courts and the Payment of Gratuity Act interpretation treats this as completing the 5th year. Additionally, if remaining months after full years are 6 or more, they round up to the next full year. So 4 years 6 months = 5 years for gratuity calculation.' } },
          { '@type': 'Question', name: 'What changed in gratuity rules under the new labour code 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Three key changes effective November 21, 2025: (1) Fixed-term employees are now eligible for gratuity after 1 year of service (pro-rata basis). (2) The wage definition is broader — basic must be at least 50% of CTC, increasing the gratuity calculation base. (3) Full & Final settlement timeline tightened — employers must pay within 30 days of gratuity becoming due.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'How to Calculate Gratuity India 2026', item: `${SITE_CONFIG.url}/blog/how-to-calculate-gratuity-india` },
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
                <li className="text-surface-600">Gratuity Calculation India 2026</li>
              </ol>
            </nav>

            {/* Category + Read time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Finance & Tax</span>
              <span className="text-xs text-surface-400">Updated March 2026 · 12 min read</span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">🆕 New Labour Code 2026</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-4 leading-tight tracking-tight">
              How to Calculate Gratuity in India 2026 — Formula, Examples &amp; New Rules
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-6 max-w-2xl">
              The complete, up-to-date guide to gratuity calculation in India — covering the 15/26 formula,
              worked examples for 6 salary ranges, the new Labour Code changes effective November 2025,
              tax rules, and answers to every question you have.
            </p>

            {/* Author + Date */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Finance Team</div>
                <div className="text-xs text-surface-400">Published {new Date(publishDate).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })} · Verified against Ministry of Labour FAQs (March 2026)</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ──────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sidebar TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Table of Contents</div>
                <ol className="space-y-2">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-2 text-sm text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                        <span className="text-surface-400 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* Quick Answer Box — Featured snippet target */}
              <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">Quick Answer</div>
                <div className="font-bold text-lg text-surface-900 mb-2">Gratuity Formula (India)</div>
                <div className="bg-white border border-brand-200 rounded-xl p-4 font-mono text-sm text-surface-800 leading-7">
                  <div className="text-brand-700 font-bold">Gratuity = (Basic + DA) × 15 ÷ 26 × Years of Service</div>
                  <div className="mt-2 text-surface-500 text-xs">
                    Example: Basic ₹50,000/month, 10 years service<br/>
                    = 50,000 × 15 ÷ 26 × 10 = <strong className="text-surface-800">₹2,88,461</strong>
                  </div>
                </div>
                <p className="text-sm text-surface-600 mt-3">
                  This formula applies to employers covered under the Payment of Gratuity Act (companies with 10+ employees).
                  For uncovered employers, use 30 instead of 26.
                </p>
              </div>

              {/* Section 1 */}
              <section id="what-is-gratuity">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is Gratuity?</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    <strong className="text-surface-800">Gratuity</strong> is a statutory lump-sum payment made by an employer
                    to an employee as a financial reward for long-term service. It is not a bonus or a performance-linked
                    payment — it is a legal obligation under the{' '}
                    <strong className="text-surface-800">Code on Social Security, 2020</strong> (which replaced the Payment
                    of Gratuity Act, 1972, effective November 21, 2025).
                  </p>
                  <p>
                    Think of gratuity as a <strong className="text-surface-800">loyalty reward</strong>: for every year you
                    work for an employer, you earn 15 days of your basic salary as gratuity. Work for 10 years and you have
                    earned 150 days of your basic salary sitting with your employer, payable when you leave.
                  </p>
                  <p>
                    Gratuity is paid as a lump sum when an employee leaves due to retirement, resignation (after 5+ years),
                    death, or permanent disability. It is separate from your salary, PF withdrawal, or any other exit
                    settlement.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="eligibility">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who is Eligible for Gratuity?</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
                      <h3 className="font-bold text-emerald-900 mb-3">✅ Eligible</h3>
                      <ul className="space-y-2 text-sm text-emerald-800">
                        {[
                          'Permanent employees with 5+ years continuous service',
                          'Fixed-term employees after 1 year (new 2026 rule)',
                          'Employees retiring due to superannuation (age)',
                          'Employees resigning after 5 years',
                          'Nominee/heirs of employee who died (5-year rule waived)',
                          'Permanently disabled employees (5-year rule waived)',
                          'Employees in companies with 10+ employees',
                        ].map(e => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="text-emerald-600 shrink-0">•</span><span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl">
                      <h3 className="font-bold text-rose-900 mb-3">❌ Not Eligible</h3>
                      <ul className="space-y-2 text-sm text-rose-800">
                        {[
                          'Employees with less than 5 years service (except fixed-term, death, disability)',
                          'Apprentices under the Apprentices Act',
                          'Employees dismissed for misconduct (partial forfeiture may apply)',
                          'Employees in companies with fewer than 10 employees (unless contract states otherwise)',
                          'Independent contractors (not on payroll)',
                        ].map(e => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="text-rose-600 shrink-0">•</span><span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                    <strong>Important — The "4 years 240 days" rule:</strong> Under the Payment of Gratuity Act, an employee who
                    has worked for 4 years and 240 working days (in organizations with 6-day work weeks) may be
                    considered eligible for gratuity. Several High Court judgments support this interpretation.
                    However, under the new Labour Code, the formal requirement remains 5 years — consult your
                    legal advisor for your specific situation.
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="formula">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">The Gratuity Formula — Explained Simply</h2>
                <div className="bg-surface-900 rounded-2xl p-6 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">For employers covered under the Gratuity Act (10+ employees)</div>
                  <div className="font-mono text-lg text-white mb-4">
                    Gratuity = <span className="text-emerald-300">(Basic + DA)</span> × <span className="text-amber-300">15</span> ÷ <span className="text-amber-300">26</span> × <span className="text-brand-300">Years of Service</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {[
                      { term: 'Basic + DA', meaning: 'Last drawn Basic Salary + Dearness Allowance. HRA, special allowance, bonus are NOT included.' },
                      { term: '15', meaning: '15 days of salary earned per year of service — representing half a month\'s wages.' },
                      { term: '26', meaning: 'Number of working days in a month (excludes 4 Sundays from 30 calendar days).' },
                    ].map(f => (
                      <div key={f.term} className="bg-white/10 rounded-xl p-4">
                        <div className="font-bold text-white text-sm mb-1">{f.term}</div>
                        <div className="text-white/60 text-xs leading-relaxed">{f.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">For employers NOT covered under the Gratuity Act (&lt;10 employees)</div>
                  <div className="font-mono text-base text-surface-800">
                    Gratuity = (Basic + DA) × 15 ÷ <span className="text-rose-600 font-bold">30</span> × Years of Service
                  </div>
                  <p className="text-sm text-surface-500 mt-2">
                    The denominator changes from 26 to 30. This gives a lower gratuity amount since 30 calendar
                    days per month is used instead of 26 working days.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="why-15-26">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why 15 and Why 26? (Most People Get This Wrong)</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    The numbers 15 and 26 in the gratuity formula confuse almost everyone. Here is the simple explanation:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-white border border-surface-200 rounded-xl">
                      <h3 className="font-semibold text-surface-900 mb-2">Why 15 days?</h3>
                      <p className="text-sm text-surface-600 leading-relaxed">
                        The law rewards you with <strong>half a month's salary</strong> for each year of service.
                        Half of 30 days = 15 days. So for every year you work, you earn 15 days of basic pay as gratuity.
                        Work 10 years → earn 150 days of basic pay as gratuity.
                      </p>
                    </div>
                    <div className="p-5 bg-white border border-surface-200 rounded-xl">
                      <h3 className="font-semibold text-surface-900 mb-2">Why 26 days?</h3>
                      <p className="text-sm text-surface-600 leading-relaxed">
                        A month has ~30 calendar days but only ~26 <strong>working days</strong> (30 days minus
                        4 Sundays). Dividing your monthly salary by 26 gives your daily wage on a working-day
                        basis. Multiplying by 15 gives 15 working days of pay — slightly higher than
                        15/30 of monthly pay.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-brand-50 border border-brand-100 rounded-xl text-sm text-brand-800">
                    <strong>Practical implication:</strong> Using 26 (working days) instead of 30 (calendar days)
                    gives employees a higher gratuity amount. This is intentional — it is a benefit to employees.
                    For covered employers, using 30 instead of 26 is technically incorrect.
                  </div>
                </div>
              </section>

              {/* Section 5 — Examples */}
              <section id="examples">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                  Step-by-Step Gratuity Calculation Examples — 6 Salary Ranges
                </h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  All examples below assume: (1) employer is covered under the Gratuity Act, (2) no Dearness Allowance
                  (common in private sector), so Basic = wage base. (3) years rounded per the 6-month rule.
                </p>

                <div className="space-y-5">
                  {[
                    { ctc:'₹3 LPA', basic: 12500, years: 5,  result: 36058,  label:'Junior employee, 5 years' },
                    { ctc:'₹5 LPA', basic: 20833, years: 7,  result: 84134,  label:'Mid-level, 7 years' },
                    { ctc:'₹8 LPA', basic: 33333, years: 10, result: 192307, label:'Senior role, 10 years' },
                    { ctc:'₹12 LPA',basic: 50000, years: 10, result: 288461, label:'Manager, 10 years' },
                    { ctc:'₹20 LPA',basic: 83333, years: 15, result: 721153, label:'Senior manager, 15 years' },
                    { ctc:'₹40 LPA',basic:166666, years: 20, result:1923076, label:'Director-level, 20 years' },
                  ].map((ex, i) => (
                    <div key={ex.ctc} className="border border-surface-200 rounded-2xl overflow-hidden bg-white">
                      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-100">
                        <div className="font-bold text-surface-900">Example {i+1}: {ex.label}</div>
                        <div className="text-xs text-surface-400">CTC: {ex.ctc}</div>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Last drawn Basic</div>
                            <div className="font-bold text-surface-900">₹{ex.basic.toLocaleString('en-IN')}/mo</div>
                          </div>
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Years of service</div>
                            <div className="font-bold text-surface-900">{ex.years} years</div>
                          </div>
                          <div>
                            <div className="text-surface-400 text-xs mb-0.5">Gratuity amount</div>
                            <div className="font-bold text-emerald-700 text-lg">₹{ex.result.toLocaleString('en-IN')}</div>
                          </div>
                        </div>
                        <div className="bg-surface-50 rounded-xl p-3 font-mono text-xs text-surface-600">
                          = ₹{ex.basic.toLocaleString('en-IN')} × 15 ÷ 26 × {ex.years}<br/>
                          = ₹{ex.basic.toLocaleString('en-IN')} × 0.5769 × {ex.years}<br/>
                          = <strong className="text-surface-800">₹{ex.result.toLocaleString('en-IN')}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calculator CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl text-center">
                  <div className="text-white font-bold text-lg mb-2">Calculate Your Exact Gratuity Instantly</div>
                  <p className="text-brand-200 text-sm mb-4">Enter your basic salary and years of service to get your exact gratuity amount in seconds.</p>
                  <Link href="/salary-calculator"
                    className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
                    Use Free Gratuity Calculator →
                  </Link>
                </div>
              </section>

              {/* Section 6 */}
              <section id="not-covered">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Employers NOT Covered Under the Gratuity Act</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    The Payment of Gratuity Act (now Code on Social Security) applies to establishments
                    employing <strong className="text-surface-800">10 or more employees</strong> at any time
                    during the year. If your employer has fewer than 10 employees, the Act does not technically
                    apply — but employers can still choose to pay gratuity voluntarily.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-surface-100">
                          <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Factor</th>
                          <th className="text-center px-4 py-3 font-semibold text-surface-700">Covered (10+ employees)</th>
                          <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Not Covered (&lt;10 employees)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { factor:'Denominator in formula', cov:'26 working days', nc:'30 calendar days' },
                          { factor:'Gratuity amount (same salary)', cov:'Higher (÷26)', nc:'Lower (÷30)' },
                          { factor:'Legal obligation', cov:'Mandatory', nc:'Voluntary' },
                          { factor:'Maximum limit', cov:'₹20 lakh (private)', nc:'No statutory limit' },
                          { factor:'Dispute resolution', cov:'Labour Commissioner', nc:'Civil court' },
                        ].map((r, i) => (
                          <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-3 font-medium text-surface-900">{r.factor}</td>
                            <td className="px-4 py-3 text-center text-emerald-700 font-semibold">{r.cov}</td>
                            <td className="px-4 py-3 text-center text-surface-500">{r.nc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="rounding-rules">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Rounding Rules — The 6-Month Rule Explained</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed mb-5">
                  <p>
                    Years of service are not always round numbers. Here is exactly how to count
                    your service years for gratuity:
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { scenario:'4 years 5 months',  rounds:'4 years',  color:'bg-amber-50 border-amber-200', textCol:'text-amber-800', result:'Months below 6 → round DOWN' },
                    { scenario:'4 years 6 months',  rounds:'5 years',  color:'bg-emerald-50 border-emerald-200', textCol:'text-emerald-800', result:'Months = 6 or above → round UP' },
                    { scenario:'7 years 7 months',  rounds:'8 years',  color:'bg-emerald-50 border-emerald-200', textCol:'text-emerald-800', result:'7 months → round UP to 8 years' },
                    { scenario:'12 years 11 months',rounds:'13 years', color:'bg-emerald-50 border-emerald-200', textCol:'text-emerald-800', result:'11 months → round UP to 13 years' },
                    { scenario:'10 years 3 months', rounds:'10 years', color:'bg-amber-50 border-amber-200', textCol:'text-amber-800', result:'3 months → round DOWN to 10 years' },
                  ].map(r => (
                    <div key={r.scenario} className={`flex items-center gap-4 p-4 border rounded-xl ${r.color}`}>
                      <div className="font-mono text-sm font-bold text-surface-900 w-32 shrink-0">{r.scenario}</div>
                      <div className="text-surface-400 shrink-0">→</div>
                      <div className={`font-bold text-sm ${r.textCol}`}>Counted as: {r.rounds}</div>
                      <div className="text-xs text-surface-500 ml-auto hidden sm:block">{r.result}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-800">
                  <strong>Rule of thumb:</strong> If your remaining months in the last partial year are 6 or more, count it as a full year for gratuity. Fewer than 6 months — that partial year is not counted.
                </div>
              </section>

              {/* Section 8 — New Labour Code */}
              <section id="new-labour-code-2026">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                  New Labour Code 2026 — What Changed for Gratuity
                </h2>
                <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-sm text-amber-900 mb-5 flex gap-3">
                  <span className="text-lg shrink-0">🆕</span>
                  <div>
                    <strong>Effective November 21, 2025</strong> — The Code on Social Security, 2020 replaced the
                    Payment of Gratuity Act, 1972. These changes apply to gratuity earned from November 21, 2025.
                    Pre-November 2025 service is calculated under the old rules.
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      tag:'Change 1',
                      title:'Fixed-term employees now eligible after 1 year',
                      old:'Previously: Only permanent employees eligible, and only after 5 years.',
                      new:'Now: Fixed-term/contract employees can claim pro-rata gratuity after completing just 1 year of continuous service. Massive change for India\'s gig and contract workforce.',
                      impact:'High — millions of contract workers now qualify for gratuity.',
                    },
                    {
                      tag:'Change 2',
                      title:'Broader wage definition — Basic must be 50% of CTC',
                      old:'Previously: Employers could structure salaries with Basic at 30-40% of CTC, lowering the gratuity base.',
                      new:'Now: Basic wage must be at least 50% of total CTC. If excluded allowances exceed 50% of remuneration, the excess is added back to wages for gratuity calculation.',
                      impact:'Significant — gratuity payouts will increase by 25-65% for employees where Basic was structured below 50% of CTC.',
                    },
                    {
                      tag:'Change 3',
                      title:'Faster F&F settlement — 30-day deadline tightened',
                      old:'Previously: Employers could delay gratuity payments with limited enforcement.',
                      new:'Now: Employers must determine gratuity within 30 days of it becoming payable. Delay attracts mandatory interest. F&F settlement timelines tightened in many cases.',
                      impact:'Moderate — better protection for employees, more compliance burden for employers.',
                    },
                  ].map((c, i) => (
                    <div key={i} className="border border-surface-200 rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-1 rounded">{c.tag}</span>
                        <h3 className="font-bold text-surface-900 text-sm">{c.title}</h3>
                      </div>
                      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">Before (Old Rules)</div>
                          <p className="text-sm text-surface-600 leading-relaxed">{c.old}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">After (New 2026 Rules)</div>
                          <p className="text-sm text-surface-600 leading-relaxed">{c.new}</p>
                        </div>
                        <div className="sm:col-span-2 p-3 bg-amber-50 rounded-lg">
                          <strong className="text-xs text-amber-800">Impact: </strong>
                          <span className="text-xs text-amber-800">{c.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* New Labour Code Salary Impact */}
                <div className="mt-6 overflow-x-auto">
                  <div className="text-sm font-bold text-surface-700 mb-3">Impact of 50% Wage Rule on Gratuity — Before vs After</div>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-100">
                        <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">CTC</th>
                        <th className="text-right px-4 py-3 font-semibold text-surface-700">Old Basic (35%)</th>
                        <th className="text-right px-4 py-3 font-semibold text-surface-700">New Basic (50%)</th>
                        <th className="text-right px-4 py-3 font-semibold text-surface-700">Old Gratuity (10 yrs)</th>
                        <th className="text-right px-4 py-3 font-semibold text-emerald-700 rounded-tr-xl">New Gratuity (10 yrs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { ctc:'₹6 LPA',   oldB:'₹17,500', newB:'₹25,000', oldG:'₹1,00,962', newG:'₹1,44,230' },
                        { ctc:'₹10 LPA',  oldB:'₹29,167', newB:'₹41,667', oldG:'₹1,68,270', newG:'₹2,40,385' },
                        { ctc:'₹15 LPA',  oldB:'₹43,750', newB:'₹62,500', oldG:'₹2,52,404', newG:'₹3,60,577' },
                        { ctc:'₹25 LPA',  oldB:'₹72,917', newB:'₹1,04,167',oldG:'₹4,20,673',newG:'₹6,00,962'},
                      ].map((r, i) => (
                        <tr key={r.ctc} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-bold text-surface-900">{r.ctc}</td>
                          <td className="px-4 py-3 text-right text-surface-600">{r.oldB}</td>
                          <td className="px-4 py-3 text-right font-semibold text-surface-800">{r.newB}</td>
                          <td className="px-4 py-3 text-right text-rose-600">{r.oldG}</td>
                          <td className="px-4 py-3 text-right font-bold text-emerald-700">{r.newG}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-surface-400 mt-2">* Approximate figures. Actual values depend on exact CTC structure and years of service.</p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="maximum-limit">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Maximum Gratuity Limit in India 2026</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white border-2 border-brand-200 rounded-2xl text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Private Sector Employees</div>
                    <div className="text-4xl font-black text-brand-700 mb-1">₹20 Lakh</div>
                    <div className="text-sm text-surface-500">Maximum tax-exempt gratuity</div>
                    <div className="text-xs text-surface-400 mt-2">Any amount above ₹20 lakh is taxed as salary income</div>
                  </div>
                  <div className="p-5 bg-white border-2 border-emerald-200 rounded-2xl text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Central Government Employees</div>
                    <div className="text-4xl font-black text-emerald-700 mb-1">₹25 Lakh</div>
                    <div className="text-sm text-surface-500">Maximum tax-exempt gratuity</div>
                    <div className="text-xs text-surface-400 mt-2">Fully tax-exempt under Income Tax Act</div>
                  </div>
                </div>
                <p className="text-sm text-surface-600 leading-relaxed mt-4">
                  Even if your formula-based gratuity exceeds ₹20 lakh, the employer is only legally obligated to
                  pay ₹20 lakh (for private sector). Any additional amount paid is called <strong>ex-gratia</strong> —
                  a voluntary payment above the statutory obligation. Employers can choose to pay more, but are not
                  required to.
                </p>
              </section>

              {/* Section 10 */}
              <section id="tax">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Is Gratuity Taxable in India?</h2>
                <div className="space-y-4">
                  <div className="border border-surface-200 rounded-2xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface-100">
                          <th className="text-left px-4 py-3 font-semibold text-surface-700">Employee Type</th>
                          <th className="text-left px-4 py-3 font-semibold text-surface-700">Tax Exemption</th>
                          <th className="text-left px-4 py-3 font-semibold text-surface-700">Taxable Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-3 font-semibold text-surface-900">Government employees<br/><span className="font-normal text-xs text-surface-400">(Central, State, Local)</span></td>
                          <td className="px-4 py-3 text-emerald-700 font-semibold">100% fully exempt</td>
                          <td className="px-4 py-3 text-surface-500">Nil — no tax at all</td>
                        </tr>
                        <tr className="bg-surface-50 border-t border-surface-100">
                          <td className="px-4 py-3 font-semibold text-surface-900">Private employees<br/><span className="font-normal text-xs text-surface-400">(Covered under Gratuity Act)</span></td>
                          <td className="px-4 py-3 text-amber-700 font-semibold">Least of three amounts exempt</td>
                          <td className="px-4 py-3 text-surface-600 text-xs">Amount exceeding exemption is taxed as salary</td>
                        </tr>
                        <tr className="bg-white border-t border-surface-100">
                          <td className="px-4 py-3 font-semibold text-surface-900">Private employees<br/><span className="font-normal text-xs text-surface-400">(Not covered under Act)</span></td>
                          <td className="px-4 py-3 text-amber-700 font-semibold">Least of three amounts exempt</td>
                          <td className="px-4 py-3 text-surface-600 text-xs">Formula differs slightly (uses ½ month salary)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-5 bg-surface-50 border border-surface-200 rounded-2xl">
                    <h3 className="font-bold text-surface-900 mb-3">For private sector employees — the "Least of Three" rule:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">a</span>
                        <span className="text-surface-600">Actual gratuity received from employer</span>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">b</span>
                        <span className="text-surface-600">₹20,00,000 (the statutory maximum)</span>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">c</span>
                        <span className="text-surface-600">Calculated as: Last drawn salary × 15/26 × number of completed years of service</span>
                      </div>
                      <div className="mt-3 p-3 bg-white border border-surface-200 rounded-xl text-xs text-surface-600">
                        The <strong>lowest</strong> of (a), (b), and (c) is exempt from income tax. Any gratuity received above this exemption is added to your salary income and taxed at your applicable slab rate.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section id="when-paid">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">When Must the Employer Pay Gratuity?</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    Under the Code on Social Security, 2020, gratuity must be paid within
                    <strong className="text-surface-800"> 30 days</strong> from the date it becomes payable.
                    For delays beyond 30 days, the employer is liable to pay <strong className="text-surface-800">simple interest</strong> on
                    the outstanding amount.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-surface-100">
                          <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Scenario</th>
                          <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">When Gratuity is Payable</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { s:'Resignation after 5 years',       t:'On the last working day'                          },
                          { s:'Retirement/Superannuation',       t:'On the date of retirement'                        },
                          { s:'Death of employee',               t:'Within 30 days to nominee/legal heir'             },
                          { s:'Permanent disability',            t:'Within 30 days of claim application'              },
                          { s:'Fixed-term contract end (1+ yr)', t:'Within 30 days of contract termination (new rule)'},
                          { s:'Employer delay beyond 30 days',   t:'Simple interest payable on unpaid amount'         },
                        ].map((r, i) => (
                          <tr key={r.s} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-3 font-medium text-surface-900">{r.s}</td>
                            <td className="px-4 py-3 text-surface-600">{r.t}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
                    <strong>Your rights if employer delays:</strong> File a complaint with the Controlling Authority (Assistant Labour Commissioner) of your district. Under the Gratuity Act, you can also approach the Labour Court. The employer can be penalized with interest on unpaid gratuity plus fine.
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                  Frequently Asked Questions — Gratuity Calculation India 2026
                </h2>
                <div className="space-y-3">
                  {[
                    { q:'What is the formula for gratuity calculation in India?', a:'Gratuity = (Last Drawn Basic Salary + DA) × 15 ÷ 26 × Number of completed years of service. This formula applies to employers covered under the Gratuity Act (companies with 10+ employees). For uncovered employers, use 30 instead of 26.' },
                    { q:'What is the minimum years of service for gratuity?', a:'For permanent employees, the minimum is 5 years of continuous service. Under the new labour codes (effective November 21, 2025), fixed-term/contract employees are eligible for pro-rata gratuity after just 1 year. In cases of death or permanent disability, the 5-year rule does not apply.' },
                    { q:'Does 4 years 8 months count as 5 years for gratuity?', a:'If remaining months are 6 or more, they round up to a full year. So 4 years 6 months = 5 years for gratuity. 4 years 5 months = 4 years. Additionally, in organizations with 6-day work weeks, 4 years and 240 working days may also qualify — courts have supported this interpretation.' },
                    { q:'Is gratuity calculated on basic salary or CTC?', a:'Gratuity is calculated ONLY on basic salary + dearness allowance (DA). HRA, special allowance, performance bonus, medical allowance, and all other components of CTC are excluded. Under the new labour code, basic must be at least 50% of CTC — so the gratuity base has effectively increased for many employees.' },
                    { q:'What is the maximum gratuity in India 2026?', a:'The maximum tax-exempt gratuity for private sector employees is ₹20 lakh. For central government employees, the cap is ₹25 lakh. Any amount above these limits is ex-gratia and taxed as salary.' },
                    { q:'Is gratuity taxable in India?', a:'For government employees — fully exempt. For private employees under the Gratuity Act — the least of (a) actual gratuity, (b) ₹20 lakh, or (c) formula-based amount is tax-exempt. Any gratuity above the exemption limit is taxed as salary.' },
                    { q:'What changed in gratuity rules under the new labour code 2026?', a:'Three key changes from November 21, 2025: (1) Fixed-term employees eligible after 1 year. (2) Wage base broadened — basic must be 50% of CTC, increasing gratuity amounts significantly. (3) Payment timeline tightened — employers must pay within 30 days or pay interest.' },
                    { q:'Can gratuity be forfeited?', a:'Yes, partially or fully, if the employee is terminated for willful damage, destruction of employer\'s property, or other offenses specified in the Gratuity Act. However, it cannot be forfeited for misconduct alone without proven damage. An employee who resigns voluntarily cannot have gratuity forfeited.' },
                  ].map((faq, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
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

              {/* Key Takeaways */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5">Key Takeaways — Gratuity in India 2026</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Formula: (Basic + DA) × 15 ÷ 26 × Years of service',
                    'Minimum 5 years service (1 year for fixed-term — new 2026 rule)',
                    'Only Basic + DA counts — not full CTC',
                    'Basic must be 50%+ of CTC under new labour code',
                    'Max ₹20 lakh tax-exempt for private sector',
                    'Government employees pay zero tax on gratuity',
                    'Employer must pay within 30 days — delay attracts interest',
                    '6+ months in last year rounds up to full year',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-brand-400 mt-0.5 shrink-0">✓</span>
                      <span className="text-white/80 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Calculator CTA */}
              <section>
                <div className="border border-brand-200 rounded-2xl p-6 bg-brand-50">
                  <h2 className="font-display font-bold text-xl text-surface-900 mb-3">Calculate Your Gratuity Now</h2>
                  <p className="text-surface-600 text-sm leading-relaxed mb-4">
                    Use our free salary and gratuity calculator to instantly calculate your exact gratuity amount,
                    in-hand salary, and full CTC breakdown. No signup required.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/salary-calculator"
                      className="inline-flex items-center gap-2 bg-brand-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm">
                      Gratuity Calculator →
                    </Link>
                    <Link href="/gst-calculator"
                      className="inline-flex items-center gap-2 bg-white text-surface-700 font-semibold px-5 py-3 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors text-sm">
                      GST Calculator
                    </Link>
                    <Link href="/emi-calculator"
                      className="inline-flex items-center gap-2 bg-white text-surface-700 font-semibold px-5 py-3 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors text-sm">
                      EMI Calculator
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/salary-calculator',  icon:'💰', label:'Salary Calculator',    desc:'Calculate in-hand salary, PF, and gratuity from CTC' },
                    { href:'/gst-calculator',     icon:'🧮', label:'GST Calculator',        desc:'Calculate CGST, SGST, IGST on any amount'           },
                    { href:'/emi-calculator',     icon:'🏠', label:'EMI Calculator',        desc:'Plan your home loan, car loan, personal loan EMI'    },
                    { href:'/bmi-calculator',     icon:'⚖️', label:'BMI Calculator',        desc:'Check your BMI with Indian health standards'         },
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

              {/* Disclaimer */}
              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and updated to the best of our knowledge as of March 2026. Gratuity rules may vary by state, industry, and specific employment contracts. Always verify with the Ministry of Labour FAQs or a qualified legal/HR professional for decisions affecting your specific situation. Sources: Code on Social Security 2020, Ministry of Labour FAQs (March 2026), Fisher Phillips LLP, ET, Upstox.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}