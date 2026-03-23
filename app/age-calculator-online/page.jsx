import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import AgeCalculator from '../../components/tools/AgeCalculator';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Age Calculator Online Free – Find Your Exact Age Instantly',
  description: 'Calculate your exact age in years, months, days, hours, and minutes free. Birth day of week and next birthday countdown included. No signup. Try now!',
  keywords: [
    'age calculator online',
    'age calculator by date of birth',
    'how old am i calculator',
    'exact age calculator',
    'age in days calculator',
    'birthday countdown calculator',
    'date of birth age calculator',
    'calculate age from birthday',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/age-calculator-online` },
  openGraph: {
    title: 'Age Calculator Online Free – Find Your Exact Age Instantly',
    description: 'Calculate exact age in years, months, days, hours, and minutes. Birth day of week and birthday countdown included. Free, no signup.',
    url: `${SITE_CONFIG.url}/age-calculator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator Online Free – Exact Age Instantly',
    description: 'Calculate your exact age in years, months, days, hours, and minutes. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How accurate is the age calculation?',
    a: 'The calculation is accurate to the day, accounting for all leap years, varying month lengths (28, 29, 30, or 31 days), and whether your birthday has already occurred in the current calendar year. The hours and minutes display is based on the current time at the moment you open the tool — it updates in real time.',
  },
  {
    q: 'Can I calculate age between two custom dates?',
    a: 'Yes — set both a start date and an end date to calculate the exact duration between any two historical or future dates. This is useful for calculating project durations, contract lengths, employment tenure, or time elapsed between any two events.',
  },
  {
    q: 'What day of the week was I born on?',
    a: 'The tool automatically shows the exact day of the week for any date of birth you enter — calculated precisely from the Gregorian calendar including all historical calendar adjustments. Enter your birth date and the day appears instantly below the result.',
  },
  {
    q: 'Is the age calculator free?',
    a: 'Yes — completely free with no account, no signup, and no usage limits. Calculate age for any date of birth instantly.',
  },
  {
    q: 'Does it account for leap years?',
    a: 'Yes — the calculator fully accounts for leap years. If you were born on February 29th (a leap day), the tool correctly handles age calculation for years when February 29th does not exist, following the standard convention of treating March 1st as the birthday in non-leap years.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Age Calculator Online',
      description: 'Free online age calculator. Calculate exact age in years, months, days, hours, and minutes from any date of birth. Shows birth day of week, next birthday countdown, and supports custom date ranges.',
      url: `${SITE_CONFIG.url}/age-calculator-online`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Exact age in years, months, days, hours, and minutes',
        'Day of the week for any date of birth',
        'Next birthday countdown in days',
        'Custom date range calculation',
        'Accurate leap year handling',
        'Real-time calculation — no submit button',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Age Calculator', item: `${SITE_CONFIG.url}/age-calculator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Your Age Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter date of birth', text: 'Click the date picker and select your date of birth — day, month, and year.' },
        { '@type': 'HowToStep', position: 2, name: 'View your age',       text: 'Your exact age appears instantly in years, months, days, hours, and minutes.' },
        { '@type': 'HowToStep', position: 3, name: 'See your birth day',  text: 'The day of the week you were born is shown automatically below your age.' },
        { '@type': 'HowToStep', position: 4, name: 'Check countdown',     text: 'The next birthday countdown shows how many days until your next birthday.' },
      ],
    },
  ],
};

// ── Age milestones data ───────────────────────────────────────
const milestones = [
  { age: '18',  label: 'Legal adulthood',      desc: 'Voting age in most countries, legal driving age in many regions, eligibility for adult contracts and agreements.' },
  { age: '21',  label: 'Full adult rights',    desc: 'Legal drinking age in the United States, full legal capacity in many jurisdictions for financial and legal matters.' },
  { age: '25',  label: 'Lower car insurance',  desc: 'Car insurance rates typically drop significantly at 25. Also the age for unrestricted car rental in most countries.' },
  { age: '59½', label: 'Retirement accounts',  desc: 'Minimum age for penalty-free withdrawals from US 401(k) and IRA retirement accounts.' },
  { age: '65',  label: 'Medicare & retirement',desc: 'Medicare eligibility age in the US. Full retirement age for Social Security benefits for many birth years.' },
  { age: '100', label: 'Centenarian',           desc: 'Reaching 100 years makes you a centenarian — a milestone recognized by heads of state in many countries.' },
];

// ── Page ──────────────────────────────────────────────────────
export default function AgeCalculatorOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Age Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Age Calculator Online – Find Your Exact Age in Years, Months & Days
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Enter your date of birth and instantly see your exact age in years, months,
              days, hours, and minutes. Includes your birth day of the week and a countdown
              to your next birthday. Free, no signup, updates in real time.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '📅 Exact to the Day',
                '🎂 Birthday Countdown',
                '🗓️ Day of Week',
                '⚡ Real-Time',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AgeCalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Age Calculator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Age Calculator Online – Exact Age from Any Date of Birth
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>age calculator online</strong> tells you exactly how old you
                are — down to years, months, days, hours, and minutes — with precise leap year
                handling that ensures a mathematically correct result rather than a rough
                approximation. Simple subtraction of birth year from current year gives the
                wrong answer for anyone whose birthday has not yet occurred this year. This
                tool handles all of those edge cases automatically.
              </p>
              <p>
                Enter your date of birth and your exact age appears instantly — no button press
                required. The calculator also shows the day of the week you were born (ever
                wondered if you were born on a Monday?), and a live countdown showing exactly
                how many days remain until your next birthday.
              </p>
              <p>
                Need to calculate age between two specific dates — not just birth to today?
                Set a custom end date and the tool calculates the exact duration between any
                two points in time. Use it as an <strong>age calculator by date of birth</strong>
                for official forms, as a <strong>how old am I calculator</strong> for curiosity,
                or as a date duration tool for project timelines and contract calculations.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Calculate Your Age Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📅', title: 'Enter Date of Birth',   desc: 'Click the date picker and select your birth date — day, month, and year. Or type it directly in the field.' },
                { step: '02', icon: '⚡', title: 'See Instant Result',    desc: 'Your exact age in years, months, days, hours, and minutes appears immediately — no submit button needed.' },
                { step: '03', icon: '🗓️', title: 'View Birth Day',        desc: 'See exactly what day of the week you were born on, calculated precisely from the Gregorian calendar.' },
                { step: '04', icon: '🎂', title: 'Check Your Countdown',  desc: 'The next birthday countdown shows how many days remain until your next birthday — down to today\'s date.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📊', title: 'Age in 5 Units',              desc: 'Years, months, days, hours, and minutes — all displayed simultaneously so you have the exact answer for any context.' },
                { icon: '🗓️', title: 'Birth Day of the Week',       desc: 'Instantly see which day of the week (Monday–Sunday) you were born on — calculated from the Gregorian calendar.' },
                { icon: '🎂', title: 'Next Birthday Countdown',     desc: 'Shows exactly how many days until your next birthday — updates daily and accounts for leap year birthdays.' },
                { icon: '📅', title: 'Custom Date Range',           desc: 'Calculate the exact duration between any two dates — not just birth to today. Use for project timelines, contracts, and anniversaries.' },
                { icon: '🔢', title: 'Accurate Leap Year Handling', desc: 'Full leap year support including February 29th birthdays, which are handled using the March 1st convention in non-leap years.' },
                { icon: '⚡', title: 'Real-Time Updates',           desc: 'Age updates instantly as you enter your date — no submit button needed. Hours and minutes update based on current time.' },
                { icon: '🔒', title: 'Private & Secure',            desc: 'All calculations run locally in your browser. Your date of birth is never sent to any server or stored anywhere.' },
                { icon: '📱', title: 'Mobile Friendly',             desc: 'The date picker works perfectly on iPhone and Android touch screens. Calculate your age directly on your phone.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '📋',
                  title: 'Official Forms & Applications',
                  desc: 'Calculate exact age for passport applications, visa forms, government ID applications, insurance forms, and other official documents that require precise age in years and months — not just birth year.',
                },
                {
                  icon: '🏦',
                  title: 'Financial & Retirement Planning',
                  desc: 'Determine exact age for retirement account eligibility thresholds (59½ for 401k withdrawal, 65 for Medicare), pension calculation milestones, and age-based contribution limit changes.',
                },
                {
                  icon: '🏥',
                  title: 'Medical & Clinical Records',
                  desc: 'Calculate patient age precisely for medical assessments, pediatric dosing calculations based on exact age in months, age-based health screening schedules, and clinical trial age eligibility.',
                },
                {
                  icon: '🎂',
                  title: 'Birthday Planning & Milestones',
                  desc: 'Find out exactly how many days until a significant birthday — 18th, 21st, 30th, 50th, or 100th. Calculate the exact day of the week a future birthday falls on for planning purposes.',
                },
                {
                  icon: '📅',
                  title: 'Project & Contract Durations',
                  desc: 'Calculate exact duration between any two dates — project start to end, contract signing to expiry, employment start date to today. Useful for notice period calculations, probation periods, and SLA verification.',
                },
                {
                  icon: '🎓',
                  title: 'Academic & Program Eligibility',
                  desc: 'Verify age eligibility for school enrollment cutoff dates, academic program requirements, scholarship age restrictions, competitive sports age categories, and age-restricted program participation.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Age milestones */}
          <section aria-labelledby="milestones-heading">
            <h2 id="milestones-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Important Age Milestones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {milestones.map(m => (
                <div key={m.age} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 font-display font-bold text-lg flex items-center justify-center shrink-0">
                      {m.age}
                    </div>
                    <div className="font-semibold text-surface-900 text-sm">{m.label}</div>
                  </div>
                  <p className="text-xs text-surface-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — How it works */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Age Calculation Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                A simple year subtraction (current year − birth year) gives the wrong answer
                for anyone whose birthday has not yet passed this year. For example, if you
                were born in November 1990 and the current date is March 2026, simple
                subtraction gives 36 — but your actual age is 35 because your 2026 birthday
                has not yet occurred.
              </p>
              <p>
                This calculator uses JavaScript's <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">Date</code> object
                to compute the difference precisely — first calculating full years elapsed
                (checking whether the birthday month and day have passed yet this year),
                then remaining months, then remaining days. Hours and minutes are calculated
                from the current timestamp for completeness.
              </p>
              <p>
                Leap years are handled automatically. The calendar system accounts for all
                366-day years since the Gregorian calendar reform, ensuring the day count
                is always exact regardless of how many leap years fall between the two dates.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Calculator vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs Manual calculation',     point: 'Mental arithmetic doesn\'t account for whether your birthday has passed this year, how many days are in each month, or leap years — leading to errors of 1 day to 1 year.' },
                { label: 'vs Phone calculator',       point: 'A standard calculator can only subtract years. It cannot calculate months, days, account for leap years, or show the day of the week you were born.' },
                { label: 'vs Age calculators on government sites', point: 'Most government and bank sites only calculate age to the nearest year. This tool gives you years, months, and days — the level of precision required for many forms and medical contexts.' },
                { label: 'vs Spreadsheet formulas',  point: 'DATEDIF in Excel and Sheets works but requires knowing the formula syntax. This tool gives instant results with no formula knowledge, on any device including phones.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Most Accurate Free Age Calculator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need an <strong>age calculator by date of birth</strong> for
                an official document, a <strong>how old am I calculator</strong> that gives
                the answer in days and hours, a <strong>birthday countdown calculator</strong>
                for your next milestone birthday, or an <strong>exact age calculator</strong>
                that properly handles leap years — this tool covers all of it in one place.
              </p>
              <p>
                The <strong>age in days calculator</strong> feature is especially useful for
                medical and scientific contexts where exact elapsed time matters — pediatric
                development milestones, clinical trial eligibility, newborn age calculations,
                and research studies that require age expressed in days rather than years.
              </p>
            </div>
          </section>

          {/* Section 8 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Age & Date Calculator Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/age-calculator-by-date-of-birth', label: 'Age Calculator by Date of Birth', desc: 'Calculate exact age from any specific date of birth' },
                { href: '/how-many-days-old-am-i',          label: 'How Many Days Old Am I',          desc: 'Find your exact age expressed as total days lived' },
                { href: '/birthday-countdown-calculator',   label: 'Birthday Countdown Calculator',   desc: 'Count down the days until your next birthday' },
                { href: '/age-calculator-years-months-days',label: 'Age in Years, Months & Days',     desc: 'Display age broken down into years, months, and days' },
                { href: '/date-difference-calculator',      label: 'Date Difference Calculator',      desc: 'Calculate the exact duration between any two dates' },
                { href: '/retirement-age-calculator',       label: 'Retirement Age Calculator',       desc: 'Calculate how many years until retirement age' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-violet-50 border border-violet-200 rounded-xl hover:bg-violet-100 transition-colors group">
                  <div className="font-semibold text-violet-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-violet-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Utility Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/unix-timestamp-converter',   icon: '⏱️', label: 'Unix Timestamp Converter',   desc: 'Convert Unix timestamps to human-readable dates and back' },
                { href: '/countdown-timer-online',     icon: '⏳', label: 'Countdown Timer Online',     desc: 'Count down from any duration with an audio alarm' },
                { href: '/percentage-calculator-online',icon: '📊',label: 'Percentage Calculator',      desc: 'Calculate percentage change, increase, and decrease' },
                { href: '/random-number-generator',    icon: '🎲', label: 'Random Number Generator',    desc: 'Generate random numbers in any range instantly' },
                { href: '/pomodoro-timer-online',      icon: '🍅', label: 'Pomodoro Timer Online',      desc: 'Structured 25-minute focus sessions with breaks' },
                { href: '/online-stopwatch',           icon: '⏱️', label: 'Online Stopwatch',           desc: 'Millisecond precision stopwatch with unlimited laps' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-violet-800 text-sm">{l.label}</div>
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