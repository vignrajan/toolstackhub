import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgeCalculator from '../../components/tools/AgeCalculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Age Calculator – Calculate Exact Age in Years, Months & Days | Free',
  description: 'Free age calculator by date of birth. Get exact age in years, months, days, weeks, hours. Next birthday countdown, zodiac sign. No signup, instant results.',
  keywords: [
    'age calculator', 'calculate my age', 'how old am i', 'age calculator by date of birth',
    'exact age calculator', 'age in days calculator', 'age in months', 'age calculator india',
    'how many days old am i', 'birthday age calculator', 'age calculator online free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/age-calculator-online` },
  openGraph: {
    title: 'Age Calculator – Exact Age in Years, Months, Days | Free Online',
    description: 'Calculate your exact age instantly. Years, months, days, weeks, hours. Birthday countdown. Free, no signup.',
    url: `${SITE_CONFIG.url}/age-calculator-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: 'How do I calculate my exact age?',
    a: 'To calculate your exact age: subtract your birth year from the current year, then adjust for whether your birthday has occurred this year. If your birthday is still to come this year, subtract 1. For months and days: count complete months since your last birthday, then remaining days. Or simply enter your date of birth above — the calculator does all of this instantly and shows your age in years, months, days, weeks, hours, and minutes.',
  },
  {
    q: 'How many days old am I?',
    a: 'To calculate total days old: count the number of days from your date of birth to today, accounting for leap years (which have 366 days). The formula is: Total days = (Today\'s date − Date of Birth) in milliseconds ÷ 86,400,000 (milliseconds per day). For example, someone born on January 1, 2000 is approximately 9,583 days old as of March 2026. Enter your birthdate above to get your exact total days.',
  },
  {
    q: 'How old am I if I was born in 2000?',
    a: 'If you were born in 2000, you are 25 or 26 years old in 2026, depending on whether your birthday has passed this year. If born January 1, 2000, you turned 26 on January 1, 2026. If born December 31, 2000, you are still 25 years old until December 31, 2026. Enter your exact birthdate in the calculator above to get your precise age in years, months, and days.',
  },
  {
    q: 'What is the formula to calculate age from date of birth?',
    a: 'The age formula is: Age in years = Current year − Birth year − (1 if birthday not yet occurred this year, else 0). For complete age with months and days: (1) Calculate years as above. (2) Months = current month − birth month (add 12 if negative, subtract 1 from years). (3) Days = current day − birth day (add days in previous month if negative, subtract 1 from months). The online calculator above handles all edge cases including leap years automatically.',
  },
  {
    q: 'How many weeks old am I?',
    a: 'Total weeks old = Total days old ÷ 7 (rounded down). A 25-year-old is approximately 1,304 weeks old. A 30-year-old is approximately 1,565 weeks old. The exact number depends on your birth date and the number of leap years in between. Use the calculator above to see your exact total weeks.',
  },
  {
    q: 'How do I calculate age for a government exam or job application in India?',
    a: 'For Indian government exam age calculation: (1) Use the official cutoff date from the notification (usually January 1 or August 1 of the exam year). (2) Calculate your age as on that specific cutoff date — not today\'s date. (3) Check if you meet the minimum and maximum age limits specified in the notification. The "Age As On Date" field in our calculator lets you enter any specific cutoff date to check your eligibility accurately.',
  },
  {
    q: 'How is age calculated when birthdate is the last day of a month?',
    a: 'When calculating age for birthdays at month-end: if born February 28 (or 29 in a leap year), age increases by one month on March 28 (or 29 in non-leap year). If born January 31, the next monthly anniversary is February 28 (or 29 in leap year). Our calculator uses the standard chronological age system used in India and most countries.',
  },
  {
    q: 'What is the difference between chronological age and biological age?',
    a: 'Chronological age is the number of years since your date of birth — what this calculator measures. Biological age is how old your body is based on health markers, lifestyle, and genetics — it can be higher or lower than your chronological age. This age calculator measures chronological age, which is the legal age used for all official purposes including government exams, voting eligibility, retirement planning, and legal documents.',
  },
];

const PROGRAMMATIC_PAGES = [
  { href: '/how-old-am-i',                 label: 'How Old Am I – Age Calculator'          },
  { href: '/age-calculator-by-date-of-birth',label:'Age Calculator by Date of Birth'       },
  { href: '/exact-age-calculator',          label: 'Exact Age Calculator'                  },
  { href: '/age-in-days-calculator',        label: 'Age in Days Calculator'                },
  { href: '/age-in-months-calculator',      label: 'Age in Months Calculator'              },
  { href: '/age-calculator-for-govt-exams', label: 'Age Calculator for Government Exams'  },
  { href: '/age-calculator-for-ssc',        label: 'Age Calculator for SSC'               },
  { href: '/age-calculator-for-upsc',       label: 'Age Calculator for UPSC'              },
  { href: '/birthday-age-calculator',       label: 'Birthday Age Calculator'              },
  { href: '/age-in-weeks-calculator',       label: 'Age in Weeks Calculator'              },
];

export default function AgeCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Age Calculator – Exact Age by Date of Birth',
        description: 'Free online age calculator. Calculate exact age in years, months, days, weeks, hours from date of birth. Birthday countdown, zodiac sign. No signup required.',
        url: `${SITE_CONFIG.url}/age-calculator-online`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'Exact age in years, months, days',
          'Total days, weeks, months, hours',
          'Next birthday live countdown',
          'Age as on any specific date',
          'Zodiac sign calculator',
          'Age for government exam cutoff dates',
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
          { '@type': 'ListItem', position: 2, name: 'Age Calculator', item: `${SITE_CONFIG.url}/age-calculator-online` },
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Age Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Age Calculator – Calculate Exact Age in Years, Months and Days
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your <strong className="text-surface-700">exact age by date of birth</strong> instantly.
              Get age in years, months, days, weeks, total hours, next birthday countdown, and
              zodiac sign. Works for any date — past or future. Free, no login, no app required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free', '⚡ Instant Results', '🚫 No Signup', '📅 Any Date', '🎂 Birthday Countdown', '🏛️ Govt Exam Ready'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculator ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AgeCalculator />
        </div>

        {/* ── SEO Content ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1: What is an Age Calculator */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is an Age Calculator?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                An <strong className="text-surface-800">age calculator</strong> is a tool that computes the exact
                time elapsed between your date of birth and today — or any other target date. Unlike simply
                subtracting birth year from current year, a proper age calculator accounts for the exact day
                and month, leap years, and the varying number of days in each month.
              </p>
              <p>
                The result is your <strong className="text-surface-800">chronological age</strong> — the legal
                age used for all official purposes in India: government exam eligibility, school admissions,
                job applications, retirement calculations, insurance policies, and legal documents.
                Our calculator shows your complete age breakdown: years, months, days, total weeks,
                total days, total hours, and a live countdown to your next birthday.
              </p>
              <p>
                The "Age As On Date" feature is especially useful for Indian government exam aspirants —
                enter the exam's official cutoff date (e.g., August 1, 2026 for SSC CGL) to check your
                exact age as on that date and verify your eligibility instantly.
              </p>
            </div>
          </section>

          {/* Section 2: How to Calculate Age Manually */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Calculate Age Manually — Step by Step
            </h2>
            <div className="bg-surface-900 rounded-2xl p-6 mb-5 font-mono text-sm leading-7">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">Age Calculation Formula</div>
              <div className="space-y-1">
                <div className="text-white">Step 1: Years = Current Year − Birth Year</div>
                <div className="text-surface-400 ml-4">If birthday hasn't occurred yet this year: subtract 1</div>
                <div className="text-white mt-2">Step 2: Months = Current Month − Birth Month</div>
                <div className="text-surface-400 ml-4">If negative: add 12 and subtract 1 from years</div>
                <div className="text-white mt-2">Step 3: Days = Current Day − Birth Day</div>
                <div className="text-surface-400 ml-4">If negative: add days in previous month, subtract 1 from months</div>
                <div className="text-emerald-300 font-bold mt-3">Result: Age = Years years, Months months, Days days</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-surface-900">Worked Example</h3>
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="font-semibold text-blue-900 mb-3">Example: Born May 15, 2000 → Age on March 28, 2026</div>
                <div className="space-y-2 text-sm text-blue-800">
                  <div>Years: 2026 − 2000 = 26. But May 15 has not come yet in 2026. So: <strong>25 years</strong></div>
                  <div>Months: March (3) − May (5) = −2. Add 12 = 10 months. <strong>10 months</strong></div>
                  <div>Days: 28 − 15 = 13. <strong>13 days</strong></div>
                  <div className="pt-2 border-t border-blue-200 font-bold">Age = 25 years, 10 months, 13 days</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Age examples table */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Age Calculation Examples — Birth Years to 2026
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Quick reference for common birth years. Exact age depends on birth month and day.
              Use the calculator above for your precise age:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Birth Year</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Age in 2026</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Total Days (approx)</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Total Weeks (approx)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { yr:'2010', age:'15–16', days:'5,479–5,844',  weeks:'783–835'   },
                    { yr:'2005', age:'20–21', days:'7,305–7,670',  weeks:'1,043–1,095'},
                    { yr:'2000', age:'25–26', days:'9,131–9,496',  weeks:'1,304–1,356'},
                    { yr:'1995', age:'30–31', days:'10,957–11,322',weeks:'1,565–1,617'},
                    { yr:'1990', age:'35–36', days:'12,783–13,148',weeks:'1,826–1,878'},
                    { yr:'1985', age:'40–41', days:'14,610–14,975',weeks:'2,087–2,139'},
                    { yr:'1980', age:'45–46', days:'16,436–16,801',weeks:'2,348–2,400'},
                    { yr:'1970', age:'55–56', days:'20,089–20,454',weeks:'2,870–2,922'},
                    { yr:'1960', age:'65–66', days:'23,741–24,106',weeks:'3,391–3,443'},
                  ].map((r, i) => (
                    <tr key={r.yr} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.yr}</td>
                      <td className="px-4 py-3 text-right font-bold text-brand-700">{r.age} years</td>
                      <td className="px-4 py-3 text-right text-surface-600">{r.days}</td>
                      <td className="px-4 py-3 text-right text-surface-600">{r.weeks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Use Cases */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              When Do You Need an Exact Age Calculator?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🏛️', title: 'Government Exam Applications',
                  desc: 'UPSC, SSC, IBPS, RRB, NDA, Agniveer — all government exam notifications specify age limits calculated as on a specific cutoff date. Enter the cutoff date in "Age As On Date" to check your exact eligibility, including relaxations for OBC, SC/ST, and PwD categories.' },
                { icon: '🎓', title: 'School and College Admissions',
                  desc: 'School admission cutoffs (typically age 6 as on September 30), university age limits, scholarship age criteria, and entrance exam eligibility all require exact age calculation. Our tool handles all these with the custom date feature.' },
                { icon: '💼', title: 'Job Applications and HR',
                  desc: 'Private sector jobs often have age limits (e.g., 18–35 years). HR professionals use exact age calculation to verify eligibility. The calculator is also used for EPF/ESI registration, contract age verification, and gratuity eligibility (minimum 5 years service at age 18+).' },
                { icon: '🏥', title: 'Medical and Insurance',
                  desc: 'Health insurance premiums are based on exact age bands. Term life insurance, senior citizen schemes, and Ayushman Bharat eligibility all use specific age criteria. Medical professionals use chronological age for pediatric dosing and developmental milestone assessment.' },
                { icon: '🏠', title: 'Legal and Property Matters',
                  desc: 'Age of majority (18 years) for contracts, 21 years for property registration in some states, age for making a will, minor guardianship cases — all require exact age verification. Courts and legal documents often require age as on a specific date.' },
                { icon: '📊', title: 'Retirement and Financial Planning',
                  desc: 'Calculate years to retirement (60 for government, 58 for some PSUs), EPF withdrawal eligibility (55 years for premature withdrawal), Senior Citizen FD rates (60+ years), and pension scheme eligibility. Use our EMI calculator alongside age planning for loan tenures.' },
                { icon: '🌟', title: 'Astrology and Numerology',
                  desc: 'Vedic astrology uses exact age and birth time for kundali matching, dasha calculations, and auspicious event timing. Numerology uses birth date to calculate life path number. Our calculator shows your Western zodiac sign as a quick reference.' },
                { icon: '🎉', title: 'Milestone Birthdays',
                  desc: 'Plan for 18th, 21st, 25th, 50th, 60th, and 75th (Amrit Mahotsav) birthday celebrations. The live countdown to your next birthday makes it easy to know exactly how many days, hours, and seconds until your special day.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{uc.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Government exam age limits */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Age Limits for Major Indian Government Exams (2026)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Use the "Age As On Date" field in the calculator above with the cutoff dates below
              to check your exact eligibility for each exam:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Exam</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Min Age</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Max Age (Gen)</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">OBC Relax</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">SC/ST Relax</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { exam:'UPSC CSE',    min:'21', max:'32', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'SSC CGL',     min:'18', max:'32', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'SSC CHSL',    min:'18', max:'27', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'IBPS PO',     min:'20', max:'30', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'IBPS Clerk',  min:'20', max:'28', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'RRB NTPC',    min:'18', max:'33', obc:'+3 yrs', scst:'+5 yrs' },
                    { exam:'NDA',         min:'16.5','max':'19.5', obc:'None', scst:'None' },
                    { exam:'Agniveer',    min:'17.5','max':'21',   obc:'None', scst:'None' },
                  ].map((r, i) => (
                    <tr key={r.exam} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.exam}</td>
                      <td className="px-4 py-3 text-center text-surface-700">{r.min}</td>
                      <td className="px-4 py-3 text-center font-bold text-brand-700">{r.max}</td>
                      <td className="px-4 py-3 text-center text-emerald-700">{r.obc}</td>
                      <td className="px-4 py-3 text-center text-emerald-700">{r.scst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-surface-400 mt-2">
                * Verify exact limits and cutoff dates from official notifications. Age limits may change each cycle.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Age Calculator
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic pages */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Age Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMATIC_PAGES.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">🎂</span>
                  <span className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/bmi-calculator',         icon: '⚖️', label: 'BMI Calculator',           desc: 'Calculate body mass index with Indian standards'      },
                { href: '/salary-calculator',      icon: '💰', label: 'Salary & Gratuity',         desc: 'Check gratuity eligibility based on years of service' },
                { href: '/emi-calculator',         icon: '🧮', label: 'EMI Calculator',            desc: 'Plan loans based on age and retirement timeline'      },
                { href: '/percentage-calculator-online', icon:'📊', label:'Percentage Calculator', desc: 'Calculate age percentages and ratios'                 },
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
      <Footer />
    </>
  );
}