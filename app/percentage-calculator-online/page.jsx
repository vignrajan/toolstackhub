import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import PercentageCalculator from '../../components/tools/PercentageCalculator';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Percentage Calculator Online Free – Calculate Any % Instantly',
  description: 'Calculate percentages online free. Find what % of a number, percentage change, increase, decrease, and more. Four calculation modes. No signup. Try now!',
  keywords: [
    'percentage calculator online',
    'percentage calculator free',
    'percent calculator',
    'percentage change calculator',
    'percentage increase calculator',
    'percentage decrease calculator',
    'what is x percent of y',
    'calculate percentage of number',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/percentage-calculator-online` },
  openGraph: {
    title: 'Percentage Calculator Online Free – Calculate Any % Instantly',
    description: 'Calculate percentages online free. Four modes: % of number, change, increase, decrease. Instant results with formulas shown. No signup.',
    url: `${SITE_CONFIG.url}/percentage-calculator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator Online Free – Any % Instantly',
    description: 'Calculate percentages free. Four modes with formulas shown. Instant results, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I calculate a percentage of a number?',
    a: 'Multiply the number by the percentage and divide by 100. For example, 20% of 150 = (150 × 20) ÷ 100 = 30. In the tool, enter 20 in the percentage field and 150 in the number field under "What is X% of Y?" and the answer appears instantly.',
  },
  {
    q: 'How do I calculate percentage change between two numbers?',
    a: 'Percentage change = ((New Value − Old Value) ÷ Old Value) × 100. For example, if a price went from 80 to 100: ((100 − 80) ÷ 80) × 100 = 25% increase. A negative result means a decrease. The tool shows the formula alongside every result.',
  },
  {
    q: 'What is the difference between percentage increase and percentage change?',
    a: 'Percentage change can be positive (increase) or negative (decrease). Percentage increase specifically calculates how much a value grew relative to its original — always a positive number when the new value is higher. Percentage decrease calculates how much a value fell. The tool has dedicated modes for each to avoid confusion.',
  },
  {
    q: 'How do I find what percentage one number is of another?',
    a: 'Divide the part by the whole and multiply by 100. For example, 25 out of 200 = (25 ÷ 200) × 100 = 12.5%. Use the "X is what % of Y?" mode in the tool — enter 25 and 200 and get 12.5% instantly.',
  },
  {
    q: 'Is the percentage calculator free?',
    a: 'Yes — completely free with no account, no signup, and no usage limits. All four calculation modes are available with no restrictions.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Percentage Calculator Online',
      description: 'Free online percentage calculator with four modes: percentage of a number, percentage change, percentage increase, and percentage decrease. Shows formula and result instantly.',
      url: `${SITE_CONFIG.url}/percentage-calculator-online`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'What is X% of Y?',
        'X is what % of Y?',
        'Percentage change between two values',
        'Percentage increase and decrease',
        'Formula shown with every result',
        'Instant calculation, no submit button',
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
        { '@type': 'ListItem', position: 3, name: 'Percentage Calculator', item: `${SITE_CONFIG.url}/percentage-calculator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate a Percentage Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Choose a calculation mode', text: 'Select from: What is X% of Y, X is what % of Y, Percentage Change, or Percentage Increase/Decrease.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter your numbers',        text: 'Type the values into the input fields. Results update instantly as you type.' },
        { '@type': 'HowToStep', position: 3, name: 'Read the result',           text: 'The answer appears immediately with the formula used so you can verify the calculation.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the result',           text: 'Click the copy icon next to the result to copy it to your clipboard.' },
      ],
    },
  ],
};

// ── Calculation modes ─────────────────────────────────────────
const modes = [
  {
    title: 'What is X% of Y?',
    formula: '(Y × X) ÷ 100',
    example: 'What is 20% of 150? → 30',
    color: 'blue',
    icon: '📊',
    usedFor: 'Tips, discounts, tax calculations, commission amounts, sales targets',
  },
  {
    title: 'X is what % of Y?',
    formula: '(X ÷ Y) × 100',
    example: '25 is what % of 200? → 12.5%',
    color: 'emerald',
    icon: '🔢',
    usedFor: 'Grade percentages, completion rates, market share, survey results',
  },
  {
    title: 'Percentage Change',
    formula: '((New − Old) ÷ Old) × 100',
    example: '80 to 100 → +25% change',
    color: 'amber',
    icon: '📈',
    usedFor: 'Price changes, revenue growth, population change, stock returns',
  },
  {
    title: 'Percentage Increase / Decrease',
    formula: 'New = Old × (1 ± X ÷ 100)',
    example: '200 + 15% increase → 230',
    color: 'violet',
    icon: '⬆️',
    usedFor: 'Salary raises, price markups, inflation adjustments, interest rates',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function PercentageCalculatorOnlinePage() {
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
                <li className="text-surface-800 font-medium">Percentage Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Percentage Calculator Online – Calculate Any Percentage Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate percentages instantly with four dedicated modes — find a percentage
              of a number, calculate percentage change, increase, or decrease. The formula
              is shown alongside every result so you always understand the calculation.
              Free, no signup, works in any browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '4️⃣ Four Calculation Modes',
                '📋 Formula Shown',
                '⚡ Instant Results',
                '🔒 No Signup',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PercentageCalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Percentage Calculator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Percentage Calculator Online – Four Modes, Instant Results
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>percentage calculator online</strong> handles every
                common percentage calculation in one place — with four dedicated modes
                that cover the questions people actually ask: "What is 20% of 150?",
                "25 is what percent of 200?", "What is the percentage change from 80
                to 100?", and "What is 200 increased by 15%?". Each mode shows the
                formula alongside the result so you understand the calculation — not
                just memorize an answer.
              </p>
              <p>
                Results update instantly as you type — no submit button, no page reload.
                All calculations run locally in your browser with no server calls, making
                it faster than any online alternative and usable without an internet
                connection after the first load.
              </p>
              <p>
                Whether you need a <strong>percentage change calculator</strong> for a
                business report, a <strong>percentage increase calculator</strong> for a
                salary negotiation, a <strong>percent calculator</strong> for a shopping
                discount, or a quick way to calculate tax or tip — this tool covers
                every scenario without switching between different calculators.
              </p>
            </div>
          </section>

          {/* Section 2 — Calculation modes */}
          <section aria-labelledby="modes-heading">
            <h2 id="modes-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Four Percentage Calculation Modes Explained
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modes.map(m => (
                <div key={m.title} className={`p-5 bg-${m.color}-50 border-2 border-${m.color}-200 rounded-2xl`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{m.icon}</span>
                    <h3 className={`font-display font-bold text-${m.color}-900`}>{m.title}</h3>
                  </div>
                  <div className={`font-mono text-sm bg-${m.color}-100 text-${m.color}-800 px-3 py-1.5 rounded-lg mb-2`}>
                    Formula: {m.formula}
                  </div>
                  <div className={`text-sm text-${m.color}-700 font-medium mb-2`}>
                    Example: {m.example}
                  </div>
                  <div className={`text-xs text-${m.color}-600`}>
                    <strong>Used for:</strong> {m.usedFor}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the Percentage Calculator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🎯', title: 'Choose Your Mode',      desc: 'Select the calculation type that matches your question — four modes cover every common percentage scenario.' },
                { step: '02', icon: '✏️', title: 'Enter Your Numbers',    desc: 'Type your values into the input fields. Results appear instantly as you type — no submit button needed.' },
                { step: '03', icon: '📋', title: 'Read the Formula',      desc: 'The formula used is displayed alongside the result — understand the calculation, not just the answer.' },
                { step: '04', icon: '📊', title: 'Copy the Result',       desc: 'Click the copy icon to copy the result to your clipboard for use in documents, emails, or spreadsheets.' },
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

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '4️⃣', title: 'Four Calculation Modes',      desc: 'Covers every common percentage question — % of a number, what % is X of Y, percentage change, and increase/decrease.' },
                { icon: '📋', title: 'Formula Shown with Result',   desc: 'Every result is accompanied by the formula used — learn how percentages work, not just get an answer.' },
                { icon: '⚡', title: 'Instant Real-Time Results',   desc: 'Results update as you type — no submit button, no waiting. Change a number and the result updates immediately.' },
                { icon: '📈', title: 'Positive & Negative Change',  desc: 'Percentage change mode shows positive values for increases and negative values for decreases automatically.' },
                { icon: '📋', title: 'One-Click Copy',              desc: 'Copy any result to clipboard in one click for use in reports, emails, spreadsheets, and documents.' },
                { icon: '🔒', title: 'Private & Local',             desc: 'All calculations run in your browser. No data is sent to any server — works offline after first load.' },
                { icon: '📱', title: 'Mobile Optimized',            desc: 'Large input fields and touch-friendly buttons work perfectly on smartphones and tablets.' },
                { icon: '♾️', title: 'No Usage Limits',             desc: 'Calculate as many percentages as you need — no daily cap, no account, no restrictions.' },
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

          {/* Section 5 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🍽️',
                  title: 'Restaurant Tips',
                  desc: 'Calculate 15%, 18%, or 20% tips on restaurant bills instantly — no mental math required. Enter the bill amount and tip percentage for an exact tip amount and total.',
                },
                {
                  icon: '🛍️',
                  title: 'Shopping Discounts',
                  desc: 'Find the sale price after a percentage discount. Enter the original price and discount percentage to see exactly how much you save and the final amount to pay.',
                },
                {
                  icon: '💼',
                  title: 'Salary & Pay Raises',
                  desc: 'Calculate the new salary after a percentage raise, or figure out what percentage raise you received. Use the percentage increase mode for both scenarios.',
                },
                {
                  icon: '📈',
                  title: 'Business Performance',
                  desc: 'Calculate month-over-month revenue growth, user acquisition change, conversion rate improvement, and other KPI percentage changes for business reports and presentations.',
                },
                {
                  icon: '💰',
                  title: 'Tax Calculations',
                  desc: 'Calculate GST, VAT, sales tax, and other percentage-based taxes on purchases and invoices. Find the pre-tax amount or the total amount including tax in seconds.',
                },
                {
                  icon: '🎓',
                  title: 'Academic Grading',
                  desc: 'Convert raw exam scores to percentages for grade calculation. Find what percentage of total marks you scored, or calculate the marks needed for a target grade.',
                },
                {
                  icon: '🏠',
                  title: 'Real Estate & Finance',
                  desc: 'Calculate down payment percentages, loan-to-value ratios, property price changes, and investment returns. Essential for understanding mortgage and investment numbers.',
                },
                {
                  icon: '📊',
                  title: 'Data Analysis',
                  desc: 'Calculate the percentage composition of dataset elements, year-over-year change in metrics, percentage of total for pie charts, and relative frequency in surveys.',
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

          {/* Section 6 — How it works */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Percentage Formulas Reference
            </h2>
            <div className="bg-surface-900 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'What is X% of Y?',             formula: 'Result = Y × (X ÷ 100)',                   example: '20% of 150 = 150 × 0.20 = 30' },
                  { label: 'X is what % of Y?',            formula: 'Result = (X ÷ Y) × 100',                  example: '25 of 200 = (25 ÷ 200) × 100 = 12.5%' },
                  { label: 'Percentage Change',            formula: '((New − Old) ÷ Old) × 100',               example: '80 to 100 = (20 ÷ 80) × 100 = 25%' },
                  { label: 'Percentage Increase',          formula: 'New = Old × (1 + X ÷ 100)',               example: '200 + 15% = 200 × 1.15 = 230' },
                ].map(row => (
                  <div key={row.label}>
                    <div className="text-surface-400 text-xs uppercase tracking-wider mb-1">{row.label}</div>
                    <div className="font-mono text-emerald-300 text-sm mb-1">{row.formula}</div>
                    <div className="text-surface-500 text-xs">{row.example}</div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Calculator vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs Phone calculator',     point: 'A standard calculator requires you to know the formula and enter it step by step. This tool presents the right formula for your question automatically.' },
                { label: 'vs Google search',        point: 'Google\'s percentage calculator only handles "what is X% of Y". This tool has four modes including percentage change and increase/decrease.' },
                { label: 'vs Excel / Sheets',       point: 'Spreadsheets require formula knowledge and take time to set up. This tool gives instant answers with the formula shown — no spreadsheet needed.' },
                { label: 'vs Other online calculators', point: 'Most percentage calculators have a single mode. This tool has four dedicated modes covering every common percentage question in one place.' },
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
              The Best Free Percentage Calculator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need a <strong>percentage increase calculator</strong> for
                a salary raise, a <strong>percentage decrease calculator</strong> for
                a price drop, a <strong>percentage change calculator</strong> for a
                business report, or just a quick <strong>percent calculator</strong>
                to figure out a tip — all four scenarios are covered in one tool with
                instant results and the formula always shown.
              </p>
              <p>
                The formula display is the feature that sets this tool apart from
                every alternative. Rather than giving you an answer you have to trust,
                it shows you exactly how the calculation was performed — so you can
                verify it, explain it to someone else, or adapt it for a slightly
                different question. Learning the formula once means you can do the
                calculation in your head next time.
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
              More Percentage Calculator Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/percentage-increase-calculator', label: 'Percentage Increase Calculator', desc: 'Calculate the new value after a percentage increase' },
                { href: '/percentage-decrease-calculator', label: 'Percentage Decrease Calculator', desc: 'Calculate the new value after a percentage decrease' },
                { href: '/discount-percentage-calculator', label: 'Discount Calculator',            desc: 'Find the sale price after any percentage discount' },
                { href: '/tip-calculator-online',          label: 'Tip Calculator Online',          desc: 'Calculate restaurant tips at 15%, 18%, or 20%' },
                { href: '/gst-calculator-online',          label: 'GST Calculator Online',          desc: 'Add or remove GST from any price amount' },
                { href: '/percentage-of-number',          label: 'Percentage of a Number',         desc: 'Find X% of any number with the formula shown' },
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
                { href: '/age-calculator-online',      icon: '🎂', label: 'Age Calculator Online',      desc: 'Calculate exact age in years, months, and days from any birth date' },
                { href: '/random-number-generator',    icon: '🎲', label: 'Random Number Generator',    desc: 'Generate random numbers in any range instantly' },
                { href: '/countdown-timer-online',     icon: '⏳', label: 'Countdown Timer Online',     desc: 'Count down from any duration with an alarm' },
                { href: '/unix-timestamp-converter',   icon: '⏱️', label: 'Timestamp Converter',        desc: 'Convert Unix timestamps to readable dates and back' },
                { href: '/word-counter-online',        icon: '📝', label: 'Word Counter Online',        desc: 'Count words and characters in real time' },
                { href: '/qr-code-generator-online',   icon: '📱', label: 'QR Code Generator',          desc: 'Create custom QR codes for any URL or text' },
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