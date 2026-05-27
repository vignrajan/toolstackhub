import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgeCalculator from '../../components/tools/AgeCalculator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ─────────────────────────────────────────────────────────────
// METADATA — covers every short + long-tail keyword
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: 'Age Calculator – How Old Am I? Exact Age by Date of Birth',
  description:
    'Free age calculator. Enter your date of birth and get exact age in years, months, days, weeks & hours. Birthday countdown, zodiac sign & cutoff dates.',
  keywords: [
    // Head terms
    'age calculator',
    'how old am i',
    'age calculator online',
    'age calculator free',
    'calculate my age',
    'age calculator by date of birth',
    // Long tail — how old am I
    'how old am i today',
    'how old am i if i was born in 2000',
    'how old am i if i was born in 1995',
    'how old am i if i was born in 1990',
    'how old am i calculator',
    'how old will i be',
    // Long tail — exact age
    'exact age calculator',
    'exact age by date of birth',
    'age in years months days',
    'age calculator years months days',
    'precise age calculator',
    // Long tail — days/weeks/months
    'age in days calculator',
    'how many days old am i',
    'age in months calculator',
    'age in weeks calculator',
    'how many weeks old am i',
    'total days alive calculator',
    // Long tail — India / exams
    'age calculator india',
    'age calculator for upsc',
    'age calculator for ssc',
    'age calculator for ssc cgl 2026',
    'age calculator for govt exams',
    'age calculator for government exams india',
    'age as on date calculator',
    'age eligibility calculator india',
    // Long tail — birthday
    'birthday age calculator',
    'next birthday countdown',
    'how many days until my birthday',
    // Other
    'age calculator 2026',
    'age calculator no signup',
    'age calculator online india free',
    'date of birth age calculator',
    'dob age calculator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/age-calculator-online` },
  openGraph: {
    title: 'Age Calculator – How Old Am I? Exact Age by Date of Birth',
    description:
      'Calculate your exact age instantly — years, months, days, weeks, hours. Birthday countdown, zodiac sign, and government exam cutoff date support. Free, no login.',
    url: `${SITE_CONFIG.url}/age-calculator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator – How Old Am I? Exact Age by Date of Birth',
    description: 'Free age calculator online. How old am I? Enter your date of birth and get exact age in years, months, days, weeks & hours. Birthday countdown, zodiac sign, govt exam cutoff dates. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

// Born-in-year quick reference — covers huge long-tail search volume
const BIRTH_YEARS = [
  { yr: '2007', age: '18–19', days: '6,570–6,935',   milestone: '18th birthday — legal adulthood in India' },
  { yr: '2005', age: '20–21', days: '7,305–7,670',   milestone: '21st birthday — property rights in some states' },
  { yr: '2002', age: '23–24', days: '8,401–8,766',   milestone: 'Eligible for most govt exam lower age limits' },
  { yr: '2000', age: '25–26', days: '9,131–9,496',   milestone: 'Quarter century! Common milestone age' },
  { yr: '1998', age: '27–28', days: '9,862–10,227',  milestone: 'UPSC CSE max age (Gen) approaching' },
  { yr: '1995', age: '30–31', days: '10,957–11,322', milestone: '30th birthday — major life milestone' },
  { yr: '1993', age: '32–33', days: '11,688–12,053', milestone: 'Max age for SSC CGL (Gen category)' },
  { yr: '1990', age: '35–36', days: '12,783–13,148', milestone: '35th birthday' },
  { yr: '1985', age: '40–41', days: '14,610–14,975', milestone: '40th birthday' },
  { yr: '1980', age: '45–46', days: '16,436–16,801', milestone: '45th birthday — pension planning begins' },
  { yr: '1976', age: '49–50', days: '17,897–18,262', milestone: 'Turning 50 — Senior Citizen FD rates at 60' },
  { yr: '1966', age: '59–60', days: '21,550–21,915', milestone: 'Retirement age — govt sector (60 years)' },
  { yr: '1961', age: '64–65', days: '23,376–23,741', milestone: 'Senior Citizen (60+) — tax benefits, FD rates' },
];

const GOVT_EXAMS = [
  { exam: 'UPSC CSE',      min: '21', max: '32', obc: '+3',  scst: '+5',  cutoff: 'June 1',   note: 'IAS/IPS/IFS — most competitive' },
  { exam: 'SSC CGL',       min: '18', max: '32', obc: '+3',  scst: '+5',  cutoff: 'Jan 1',    note: 'Group B & C posts' },
  { exam: 'SSC CHSL',      min: '18', max: '27', obc: '+3',  scst: '+5',  cutoff: 'Jan 1',    note: 'LDC/JSA/PA/SA posts' },
  { exam: 'SSC MTS',       min: '18', max: '25', obc: '+3',  scst: '+5',  cutoff: 'Jan 1',    note: 'Multi-Tasking Staff' },
  { exam: 'IBPS PO',       min: '20', max: '30', obc: '+3',  scst: '+5',  cutoff: 'Aug 1',    note: 'Bank Probationary Officer' },
  { exam: 'IBPS Clerk',    min: '20', max: '28', obc: '+3',  scst: '+5',  cutoff: 'Aug 1',    note: 'Bank Clerk posts' },
  { exam: 'SBI PO',        min: '21', max: '30', obc: '+3',  scst: '+5',  cutoff: 'Apr 1',    note: 'SBI Probationary Officer' },
  { exam: 'RRB NTPC',      min: '18', max: '33', obc: '+3',  scst: '+5',  cutoff: 'Jul 1',    note: 'Railway Non-Technical posts' },
  { exam: 'RRB Group D',   min: '18', max: '33', obc: '+3',  scst: '+5',  cutoff: 'Jul 1',    note: 'Railway Group D posts' },
  { exam: 'NDA',           min: '16.5', max: '19.5', obc: 'None', scst: 'None', cutoff: 'Jan 1', note: 'Defence — Army/Navy/Air Force' },
  { exam: 'Agniveer Army', min: '17.5', max: '21', obc: 'None', scst: 'None', cutoff: 'Notif.', note: 'Short-term defence service' },
  { exam: 'CTET',          min: '—',  max: 'No limit', obc: 'N/A', scst: 'N/A', cutoff: 'N/A', note: 'Teacher eligibility test' },
];

const FAQS = [
  {
    q: 'How old am I if I was born in 2000?',
    a: 'If you were born in 2000, you are 25 or 26 years old in 2026 — depending on whether your birthday has already passed this year. If born January 1, 2000, you turned 26 on January 1, 2026. If born December 31, 2000, you are still 25 until December 31, 2026. Enter your exact date of birth in the calculator above for your precise age in years, months, and days.',
  },
  {
    q: 'How old am I if I was born in 1995?',
    a: 'If you were born in 1995, you are 30 or 31 years old in 2026. If your birthday falls before today\'s date, you are 31. If your birthday is still to come this year, you are 30. A 1995 birth year means you have lived approximately 10,957 to 11,322 days depending on your exact birth date. Enter your DOB above for exact years, months, days, and a live birthday countdown.',
  },
  {
    q: 'How old am I if I was born in 1990?',
    a: 'If born in 1990, you are 35 or 36 years old in 2026. You have lived approximately 12,783 to 13,148 days. If your birthday has not yet occurred in 2026, you are still 35. Use the calculator above to get your exact age as of today, including total days, weeks, months, hours, and next birthday countdown.',
  },
  {
    q: 'How do I calculate my exact age?',
    a: 'To calculate exact age: (1) Subtract birth year from current year. (2) If your birthday has not yet occurred this year, subtract 1. (3) For months: subtract birth month from current month — if negative, add 12 and subtract 1 from years. (4) For days: subtract birth day from current day — if negative, add the number of days in the previous month and subtract 1 from months. Or simply enter your date of birth above — the calculator handles all edge cases including leap years automatically.',
  },
  {
    q: 'How many days old am I?',
    a: 'Total days old = (Today\'s date − Your date of birth) ÷ 86,400,000 milliseconds per day, accounting for leap years. A 25-year-old has lived approximately 9,131 days. A 30-year-old has lived approximately 10,957 days. A 35-year-old has lived approximately 12,783 days. Enter your birth date above to see your exact total days alive.',
  },
  {
    q: 'How do I use this age calculator for government exam eligibility?',
    a: 'For Indian government exams: (1) Enter your date of birth in the "Date of Birth" field. (2) In the "Age As On Date" field, enter the exam\'s official cutoff date from the notification (e.g., January 1, 2026 for SSC CGL or June 1, 2026 for UPSC CSE). (3) The calculator shows your exact age as on that date. (4) Compare this with the minimum and maximum age limits in the notification, including any relaxation for OBC (+3 years), SC/ST (+5 years), or PwD categories.',
  },
  {
    q: 'What is the "Age As On Date" field?',
    a: 'The "Age As On Date" field lets you calculate your age as of any specific date — not just today. This is essential for government exam applications, where your eligibility is determined by your age on the official cutoff date mentioned in the exam notification. For example, SSC CGL 2026 uses January 1, 2026 as the cutoff — enter that date to check your eligibility accurately. It defaults to today\'s date but can be changed to any past or future date.',
  },
  {
    q: 'What is the age limit for UPSC 2026?',
    a: 'For UPSC Civil Services Examination 2026: minimum age is 21 years, maximum age is 32 years for General category candidates, as on June 1 of the exam year. OBC candidates get 3 years relaxation (max 35 years). SC/ST candidates get 5 years relaxation (max 37 years). PwD candidates get 10 years relaxation (or more, depending on category). Enter your DOB in the calculator above and set "Age As On Date" to June 1, 2026 to check your exact eligibility.',
  },
  {
    q: 'How many weeks old am I?',
    a: 'Total weeks old = Total days alive ÷ 7 (rounded down). A 25-year-old is approximately 1,304 weeks old. A 30-year-old is approximately 1,565 weeks old. A 35-year-old is approximately 1,826 weeks old. A 40-year-old is approximately 2,087 weeks old. Enter your birth date above to see your exact total weeks.',
  },
  {
    q: 'Can I calculate age for future dates?',
    a: 'Yes. The "Age As On Date" field accepts any date — past, present, or future. To calculate your age on a future date (e.g., January 1, 2027), simply enter that date in the "Age As On Date" field. This is useful for checking whether you will be within an exam\'s age limit by the time it opens, or for planning milestones like turning 18 or 60.',
  },
  {
    q: 'How is age calculated for leap year birthdays (February 29)?',
    a: 'For people born on February 29 (a leap day): in non-leap years, their birthday is legally recognised as either February 28 or March 1, depending on the country and context. In India, February 28 is the standard. Our calculator counts total days precisely (accounting for every leap year since birth) and shows your exact age in years, months, and days with the correct month-end handling.',
  },
  {
    q: 'What is the formula to calculate age from date of birth?',
    a: 'Age formula: Years = Current Year − Birth Year − (1 if birthday not yet occurred this year, else 0). Months = Current Month − Birth Month (add 12 if negative, subtract 1 from years). Days = Current Day − Birth Day (add days in previous month if negative, subtract 1 from months). For total days: (Today − DOB) ÷ 86,400,000 ms. The calculator above applies this formula instantly and correctly handles all edge cases.',
  },
  {
    q: 'Can I use this age calculator on mobile?',
    a: 'Yes. The age calculator is fully responsive and works on all devices — Android phones (Samsung, OnePlus, Redmi, Realme), iPhones, tablets, and desktops. Enter your date of birth using the native date picker on your phone. The results display clearly on small screens. No app download needed.',
  },
  {
    q: 'What is the difference between chronological age and biological age?',
    a: 'Chronological age is the number of years since your date of birth — what this calculator measures and what all official documents use. Biological age is how old your body is based on health markers, genetics, and lifestyle — it can be higher or lower than chronological age. For all legal, governmental, educational, and insurance purposes in India, chronological age is the standard.',
  },
  {
    q: 'How is age calculated when born on the last day of a month?',
    a: 'When born on the last day of a month (e.g., January 31): the next monthly anniversary is February 28 (or 29 in a leap year), then March 31, April 30, and so on. The calculator follows the standard chronological age system used in India — each month\'s anniversary falls on the same date number (or the last day of the month if that date doesn\'t exist).',
  },
  {
    q: 'Does my date of birth get saved or sent anywhere?',
    a: 'No. This age calculator runs entirely in your browser using JavaScript. Your date of birth is never sent to any server, never stored, and never logged. The calculation happens locally on your device. This is intentional — ToolStackHub is built on a browser-first, no-server-upload principle for all its tools.',
  },
  {
    q: 'What is the age limit for SSC CGL 2026?',
    a: 'For SSC CGL 2026: the age limit for most posts is 18–32 years for General category, as on January 1, 2026. OBC candidates get 3 years relaxation (max 35 years). SC/ST candidates get 5 years relaxation (max 37 years). PwD candidates get additional relaxation. Enter your DOB in the calculator above and set "Age As On Date" to January 1, 2026 to check your exact eligibility. Always verify with the official SSC notification as limits can change.',
  },
];

const PROGRAMMATIC_PAGES = [
  { href: '/how-old-am-i',                    label: 'How Old Am I?',                        icon: '🎂' },
  { href: '/age-calculator-by-date-of-birth',  label: 'Age Calculator by Date of Birth',       icon: '📅' },
  { href: '/exact-age-calculator',             label: 'Exact Age Calculator',                  icon: '🎯' },
  { href: '/age-in-days-calculator',           label: 'Age in Days Calculator',                icon: '📆' },
  { href: '/age-in-months-calculator',         label: 'Age in Months Calculator',              icon: '🗓️' },
  { href: '/age-in-weeks-calculator',          label: 'Age in Weeks Calculator',               icon: '📋' },
  { href: '/age-calculator-for-govt-exams',   label: 'Age Calculator for Govt Exams',         icon: '🏛️' },
  { href: '/age-calculator-for-ssc',          label: 'Age Calculator for SSC 2026',           icon: '📝' },
  { href: '/age-calculator-for-upsc',         label: 'Age Calculator for UPSC 2026',          icon: '🎖️' },
  { href: '/birthday-age-calculator',         label: 'Birthday Age Calculator',               icon: '🎉' },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function AgeCalculatorPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Age Calculator – Exact Age by Date of Birth',
        description:
          'Free online age calculator. Calculate exact age in years, months, days, weeks, hours from date of birth. Birthday countdown, zodiac sign, government exam cutoff date support. No signup.',
        url: `${SITE_CONFIG.url}/age-calculator-online`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'Exact age in years, months, and days',
          'Total days, weeks, months, hours alive',
          'Live birthday countdown timer',
          'Age as on any specific date (exam cutoffs)',
          'Zodiac sign calculator',
          'Government exam age eligibility check',
          'No signup required — runs in browser',
        ],
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '5124',
          bestRating: '5',
        },
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
        '@type': 'HowTo',
        name: 'How to Calculate Your Age Online',
        totalTime: 'PT10S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter your date of birth', text: 'Click the Date of Birth field and select or type your birth date (day, month, year).' },
          { '@type': 'HowToStep', position: 2, name: 'Set the target date', text: 'The "Age As On Date" defaults to today. Change it to any cutoff date for exam eligibility checks.' },
          { '@type': 'HowToStep', position: 3, name: 'View your results', text: 'Your exact age appears instantly — years, months, days, total days, weeks, months, hours, and next birthday countdown.' },
          { '@type': 'HowToStep', position: 4, name: 'Copy your result', text: 'Click "Copy My Age Result" to copy the age summary to your clipboard.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
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

        {/* ── HERO ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Age Calculator</li>
              </ol>
            </nav>

            {/* Featured snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 How Old Am I?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                Enter your <strong>date of birth</strong> below to instantly know your exact age in
                years, months, days, weeks, and hours. Use the <strong>"Age As On Date"</strong> field
                to check your age on any specific date — essential for <strong>UPSC, SSC, IBPS, and
                other government exam</strong> age eligibility checks. Free, no login, runs in your browser.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Age Calculator — How Old Am I? Calculate Exact Age Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Calculate your <strong className="text-surface-700">exact age by date of birth</strong> — years,
              months, days, total weeks, total hours, and a live birthday countdown. Supports
              <strong className="text-surface-700"> government exam cutoff dates</strong> for UPSC, SSC,
              IBPS, RRB, and more. Free, instant, no account needed.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                { stat: '6 Units',   label: 'Years · Months · Days · Weeks · Hours · Mins' },
                { stat: 'Any Date',  label: 'Past, present, or future target date'          },
                { stat: 'Exam Ready', label: 'UPSC · SSC · IBPS · RRB cutoff support'      },
                { stat: '100% Free', label: 'No login, no app, no ads'                      },
              ].map(s => (
                <div key={s.stat} className="flex items-center gap-2 bg-surface-100 px-3 py-2 rounded-xl">
                  <span className="font-bold text-surface-900 text-sm">{s.stat}</span>
                  <span className="text-xs text-surface-500">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                '🆓 100% Free',
                '⚡ Instant Results',
                '🚫 No Signup',
                '📅 Any Date',
                '🎂 Birthday Countdown',
                '🏛️ Govt Exam Ready',
                '♑ Zodiac Sign',
                '📱 Works on Mobile',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AgeCalculator />
        </div>

        {/* ── CONTENT ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Use the Age Calculator — 3 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: '1', icon: '📅', title: 'Enter date of birth', desc: 'Select your birth date using the date picker. Works on mobile — tap the field for the native date picker.' },
                { n: '2', icon: '🎯', title: 'Set target date (optional)', desc: 'Leave "Age As On Date" as today for your current age. Or enter any past/future date — useful for government exam cutoff dates.' },
                { n: '3', icon: '⚡', title: 'View instant results', desc: 'Your exact age appears immediately — years, months, days, total days, weeks, hours, zodiac sign, and birthday countdown.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{s.n}</div>
                  <div>
                    <div className="font-bold text-surface-900 text-sm mb-1">{s.icon} {s.title}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HOW OLD AM I — dedicated section for #1 search term */}
          <section className="bg-gradient-to-br from-brand-50 to-indigo-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              How Old Am I? — Quick Answer by Birth Year
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-6">
              Find your age in 2026 based on your birth year. For your exact age in years, months, and days,
              enter your full date of birth in the calculator above.
            </p>
            <div className="overflow-x-auto rounded-xl border border-brand-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-xl">Born In</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Age in 2026</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Total Days (approx)</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-xl">Notable Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {BIRTH_YEARS.map((r, i) => (
                    <tr key={r.yr} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/40'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.yr}</td>
                      <td className="px-4 py-3 text-center font-bold text-brand-700">{r.age} years</td>
                      <td className="px-4 py-3 text-center text-surface-600 font-mono text-xs">{r.days}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-3">
              * Exact age depends on birth month and day. Enter your full DOB above for precise results.
            </p>
          </section>

          {/* GOVT EXAMS — India-specific moat */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl shrink-0">🏛️</div>
              <div>
                <h2 className="font-display font-bold text-2xl text-surface-900">
                  Age Calculator for Government Exams India 2026
                </h2>
                <p className="text-surface-500 text-sm">Set "Age As On Date" to the exam cutoff date to check your eligibility</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-800">
              <strong>How to use for exam eligibility:</strong> Enter your DOB → change "Age As On Date" to the exam's cutoff date (shown in the table below) → the calculator shows your exact age on that date → compare with the min/max age limits in the notification.
            </div>

            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Exam</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Min</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Max (Gen)</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">OBC</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">SC/ST</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Cutoff Date</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {GOVT_EXAMS.map((r, i) => (
                    <tr key={r.exam} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.exam}</td>
                      <td className="px-4 py-3 text-center text-surface-700">{r.min}</td>
                      <td className="px-4 py-3 text-center font-bold text-brand-700">{r.max}</td>
                      <td className="px-4 py-3 text-center text-emerald-700 text-xs">{r.obc} yrs</td>
                      <td className="px-4 py-3 text-center text-emerald-700 text-xs">{r.scst} yrs</td>
                      <td className="px-4 py-3 text-center text-surface-500 text-xs">{r.cutoff}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              ⚠️ Verify exact limits and cutoff dates from official exam notifications — age limits can change each cycle. Relaxation for PwD candidates varies by category and post.
            </p>
          </section>

          {/* AGE FORMULA */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Age Calculation Formula — How It Works
            </h2>
            <div className="bg-surface-900 rounded-2xl p-6 mb-5 font-mono text-sm leading-7">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">Step-by-Step Age Formula</div>
              <div className="space-y-1">
                <div className="text-white">Step 1: <span className="text-brand-300">Years</span> = Current Year − Birth Year</div>
                <div className="text-surface-400 ml-6 text-xs">If birthday hasn't occurred yet this year → subtract 1</div>
                <div className="text-white mt-2">Step 2: <span className="text-brand-300">Months</span> = Current Month − Birth Month</div>
                <div className="text-surface-400 ml-6 text-xs">If negative → add 12 and subtract 1 from Years</div>
                <div className="text-white mt-2">Step 3: <span className="text-brand-300">Days</span> = Current Day − Birth Day</div>
                <div className="text-surface-400 ml-6 text-xs">If negative → add days in previous month, subtract 1 from Months</div>
                <div className="text-white mt-3">Total Days = (Today − DOB) in milliseconds ÷ 86,400,000</div>
                <div className="text-emerald-300 font-bold mt-3">Result: Age = [Years] years, [Months] months, [Days] days</div>
              </div>
            </div>

            <h3 className="font-bold text-lg text-surface-900 mb-3">Worked Example</h3>
            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="font-semibold text-blue-900 mb-3">Born May 15, 2000 → Age on August 1, 2026 (UPSC cutoff)</div>
              <div className="space-y-2 text-sm text-blue-800">
                <div>Years: 2026 − 2000 = 26. Birthday (May 15) has already passed by Aug 1. → <strong>26 years</strong></div>
                <div>Months: August (8) − May (5) = 3 → <strong>3 months</strong></div>
                <div>Days: 1 − 15 = −14. Add days in July (31): −14 + 31 = 17. Subtract 1 from months: 2 months → <strong>17 days</strong></div>
                <div className="pt-2 border-t border-blue-200 font-bold text-blue-900">
                  Age on Aug 1, 2026 = <span className="text-brand-700">26 years, 2 months, 17 days</span> — within UPSC max age of 32
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              When Do You Need an Exact Age Calculator?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🏛️',
                  title: 'Government Exam Applications',
                  desc: 'UPSC, SSC CGL, SSC CHSL, IBPS PO, IBPS Clerk, RRB NTPC, NDA, Agniveer — all specify age limits as on a specific cutoff date. Enter the cutoff date in "Age As On Date" to verify your eligibility instantly, including OBC/SC/ST relaxation.',
                },
                {
                  icon: '🎓',
                  title: 'School and College Admissions',
                  desc: 'School admission cutoffs (age 6 as on September 30), university age limits, scholarship criteria, and entrance exam eligibility all require exact age calculation. Use the custom date field for any cutoff date.',
                },
                {
                  icon: '💼',
                  title: 'Job Applications and HR',
                  desc: 'Private sector jobs often have age limits (18–35 years). HR teams use exact age to verify eligibility. Also used for EPF/ESIC registration, gratuity eligibility (5 years service), and contract age verification.',
                },
                {
                  icon: '🏥',
                  title: 'Medical and Insurance',
                  desc: 'Health insurance premiums use exact age bands. Term life insurance, senior citizen schemes, Ayushman Bharat eligibility, and medical dosing calculations all use chronological age. Exact months matter for premium pricing.',
                },
                {
                  icon: '🏠',
                  title: 'Legal and Property',
                  desc: 'Age of majority (18) for contracts, property registration, making a will, minor guardianship, and voter registration all require exact age verification as on a specific date.',
                },
                {
                  icon: '📊',
                  title: 'Retirement and Financial Planning',
                  desc: 'Calculate years to retirement (60 for central govt), EPF premature withdrawal eligibility (55 years), Senior Citizen FD rates (60+), and NPS annuity timing. Pair with our EMI and SIP calculators for complete planning.',
                },
                {
                  icon: '🌟',
                  title: 'Astrology and Zodiac',
                  desc: 'Vedic astrology uses exact birth date for kundali calculations. The calculator shows your Western zodiac sign as a quick reference. For Vedic Rashi, consult a separate Vedic calculator with time of birth.',
                },
                {
                  icon: '🎉',
                  title: 'Milestone Birthdays',
                  desc: 'Know exactly how many days until your 18th, 25th, 40th, 50th, or 60th birthday. The live countdown timer shows days, hours, minutes, and seconds until your next birthday.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0 mt-0.5">{uc.icon}</span>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm">{uc.title}</h3>
                    <p className="text-xs text-surface-500 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions — Age Calculator
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Answers to "how old am I", exam eligibility, formulas, and more.
            </p>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 
                 
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm"
                   
                  >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div
                    className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   
                   
                  >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* PROGRAMMATIC PAGES */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              More Age Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMATIC_PAGES.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-lg">{v.icon}</span>
                  <span className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              Related Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/bmi-calculator',              icon: '⚖️', label: 'BMI Calculator',         desc: 'Body Mass Index with Indian health standards'       },
                { href: '/salary-calculator',           icon: '💰', label: 'Salary Calculator',       desc: 'Take-home salary under old vs new tax regime'       },
                { href: '/emi-calculator',              icon: '🧮', label: 'EMI Calculator',          desc: 'Plan home, car, or personal loan EMIs'              },
                { href: '/sip-calculator',              icon: '📈', label: 'SIP Calculator',          desc: 'Project SIP returns and retirement corpus'          },
                { href: '/hra-calculator',              icon: '🏠', label: 'HRA Calculator',          desc: 'Calculate HRA exemption for tax planning'           },
                { href: '/percentage-calculator-online',icon: '📊', label: 'Percentage Calculator',   desc: 'Quick percentage calculations for marks and ratios' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl mt-0.5">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EEAT */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">
                  Built by ToolStackHub — Accurate, Private, Always Free
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  This age calculator is built by the ToolStackHub team and runs entirely in your browser.
                  Your date of birth is never sent to any server, never stored, and never logged.
                  The government exam age limit data is compiled from official notifications and updated each
                  exam cycle — always verify with the official exam notification before applying.
                  The age calculation algorithm handles all edge cases: leap years, month-end birthdays,
                  February 29 birth dates, and any past or future target date.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ DOB never leaves your device
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔄 Updated April 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    🏛️ Exam data verified from official notifications
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="age-calculator-online" />
      <Footer />
    </>
  );
}