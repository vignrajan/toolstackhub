import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Free Online Calculators — Finance, Tax, Health, EMI & More | ToolStackHub',
  description: 'Free online calculators for India: EMI calculator, GST calculator, salary calculator, HRA, EPF, PPF, SIP, BMI, age, percentage, and more. No login, instant results.',
  keywords: [
    'free online calculators india',
    'emi calculator',
    'gst calculator',
    'salary calculator india',
    'bmi calculator',
    'age calculator',
    'percentage calculator',
    'sip calculator',
    'ppf calculator',
    'hra calculator',
    'epf calculator',
    'tax calculator india',
    'loan calculator india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/calculators` },
  openGraph: {
    title: 'Free Online Calculators — Finance, Tax, Health & More | ToolStackHub',
    description: '20+ free calculators for India: EMI, GST, salary, HRA, EPF, PPF, SIP, BMI, age, percentage. No login required, all calculations run in your browser.',
    url: `${SITE_CONFIG.url}/calculators`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Calculators India — EMI, GST, Salary, BMI & More',
    description: '20+ free calculators: EMI, GST, salary, HRA, EPF, SIP, BMI, age, percentage. Instant results, no login.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Tool groups ────────────────────────────────────────────────────────────────

const FINANCE_CALCULATORS = [
  {
    slug: 'emi-calculator',
    href: '/emi-calculator',
    name: 'EMI Calculator',
    icon: '🧮',
    desc: 'Calculate monthly EMI for home, car, or personal loan with full amortization schedule.',
    badge: 'Popular',
  },
  {
    slug: 'home-loan-emi-calculator',
    href: '/home-loan-emi-calculator',
    name: 'Home Loan EMI Calculator',
    icon: '🏠',
    desc: 'Home loan EMI with SBI, HDFC, ICICI rate comparison and year-wise interest breakdown.',
  },
  {
    slug: 'car-loan-emi-calculator',
    href: '/car-loan-emi-calculator',
    name: 'Car Loan EMI Calculator',
    icon: '🚗',
    desc: 'Car and two-wheeler loan EMI. See total interest payable and payment breakdown.',
  },
  {
    slug: 'sip-calculator',
    href: '/sip-calculator',
    name: 'SIP Calculator',
    icon: '📈',
    desc: 'Mutual fund SIP returns and maturity value with step-up SIP and lumpsum options.',
    badge: 'Popular',
  },
  {
    slug: 'ppf-calculator',
    href: '/ppf-calculator',
    name: 'PPF Calculator',
    icon: '🏦',
    desc: 'PPF maturity value at 7.1% with year-by-year interest and EEE tax-exempt status.',
  },
];

const TAX_SALARY_CALCULATORS = [
  {
    slug: 'salary-calculator',
    href: '/salary-calculator',
    name: 'Salary & Gratuity Calculator',
    icon: '💰',
    desc: 'CTC to take-home salary, old vs new tax regime comparison, and gratuity. FY 2025-26.',
    badge: 'Popular',
  },
  {
    slug: 'gst-calculator',
    href: '/gst-calculator',
    name: 'GST Calculator',
    icon: '🧾',
    desc: 'Add or remove GST instantly. CGST/SGST/IGST breakdown for all GST rates.',
    badge: 'Popular',
  },
  {
    slug: 'form-16-calculator',
    href: '/form-16-calculator',
    name: 'Form 16 Tax Calculator',
    icon: '📋',
    desc: 'Compute income tax from Form 16 data. Compare old vs new regime with exact figures.',
  },
  {
    slug: 'hra-calculator',
    href: '/hra-calculator',
    name: 'HRA Exemption Calculator',
    icon: '🏡',
    desc: 'HRA exemption under Section 10(13A) with metro/non-metro city rules for FY 2026-27.',
  },
  {
    slug: 'epf-calculator',
    href: '/epf-calculator',
    name: 'EPF Calculator',
    icon: '📊',
    desc: 'EPF balance projection, monthly PF deductions, and EPS pension fund estimate.',
  },
  {
    slug: 'professional-tax-calculator',
    href: '/professional-tax-calculator',
    name: 'Professional Tax Calculator',
    icon: '⚖️',
    desc: 'Professional tax for all 18 PT-levying Indian states with monthly and annual amounts.',
  },
];

const HEALTH_CALCULATORS = [
  {
    slug: 'bmi-calculator',
    href: '/bmi-calculator',
    name: 'BMI Calculator',
    icon: '⚖️',
    desc: 'Calculate Body Mass Index with Indian health guidelines. Underweight, normal, overweight, obese ranges.',
    badge: 'Popular',
  },
];

const GENERAL_CALCULATORS = [
  {
    slug: 'age-calculator',
    href: '/age-calculator-online',
    name: 'Age Calculator',
    icon: '🎂',
    desc: 'Exact age in years, months, days, hours, and minutes with next birthday countdown.',
    badge: 'Popular',
  },
  {
    slug: 'percentage-calculator',
    href: '/percentage-calculator-online',
    name: 'Percentage Calculator',
    icon: '💯',
    desc: 'Find what % of a number, percentage change, percentage difference — all in one tool.',
  },
  {
    slug: 'number-to-words',
    href: '/number-to-words',
    name: 'Number to Words',
    icon: '🔤',
    desc: 'Convert rupee amounts to Indian words (Lakh, Crore) for cheques and GST invoices.',
  },
  {
    slug: 'random-number-generator',
    href: '/random-number-generator',
    name: 'Random Number Generator',
    icon: '🎲',
    desc: 'Generate random integers or decimals in any range. Single or bulk number generation.',
  },
];

const TIME_TOOLS = [
  {
    slug: 'pomodoro-timer',
    href: '/pomodoro-timer-online',
    name: 'Pomodoro Timer',
    icon: '🍅',
    desc: '25-minute focus sessions with short and long breaks. Boost productivity the Pomodoro way.',
    badge: 'Popular',
  },
  {
    slug: 'countdown-timer',
    href: '/countdown-timer-online',
    name: 'Countdown Timer',
    icon: '⏳',
    desc: 'Set hours, minutes, seconds and count down with an alarm. No signup needed.',
  },
  {
    slug: 'stopwatch',
    href: '/stopwatch-online',
    name: 'Stopwatch Online',
    icon: '⏱️',
    desc: 'Precise online stopwatch with lap time recording. Works in any browser.',
  },
];

const ALL_TOOLS = [
  ...FINANCE_CALCULATORS,
  ...TAX_SALARY_CALCULATORS,
  ...HEALTH_CALCULATORS,
  ...GENERAL_CALCULATORS,
  ...TIME_TOOLS,
];

// ── FAQ ────────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Are all these calculators completely free?',
    a: 'Yes — every calculator on ToolStackHub is 100% free with no hidden charges, no signup, and no subscription. All tools work instantly in your browser.',
  },
  {
    q: 'Is my data safe when I use these calculators?',
    a: 'Absolutely. All calculations happen entirely in your browser. Your salary figures, loan amounts, and financial data are never sent to any server and disappear when you close the tab.',
  },
  {
    q: 'Which tax regime is better in FY 2025-26 — old or new?',
    a: 'It depends on your deductions. Use the Salary Calculator to compare both regimes with your exact CTC, HRA, 80C investments, and home loan interest. The new regime suits those with fewer deductions; the old regime benefits those with HRA, 80C, and home loan deductions.',
  },
  {
    q: 'How accurate are the EMI calculations?',
    a: 'The EMI calculators use the standard reducing balance formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1). Results match bank EMI quotes exactly when using the correct monthly interest rate.',
  },
  {
    q: 'Do these calculators work on mobile?',
    a: 'Yes — all calculators are fully responsive and work on Android, iPhone, and any modern browser. No app download needed.',
  },
  {
    q: 'Are the tax calculators updated for Budget 2025?',
    a: 'Yes. All tax tools reflect the latest Budget 2025 changes: new tax regime standard deduction of ₹75,000, updated Section 87A rebate, and revised tax slabs for FY 2025-26 / AY 2026-27.',
  },
];

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Online Calculators — Finance, Tax, Health & More',
      description: `${ALL_TOOLS.length} free online calculators for India: EMI, GST, salary, HRA, EPF, PPF, SIP, BMI, age, percentage, and more. Browser-based, no login required.`,
      url: `${SITE_CONFIG.url}/calculators`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      hasPart: ALL_TOOLS.map(t => ({
        '@type': 'SoftwareApplication',
        name: t.name,
        url: `${SITE_CONFIG.url}${t.href}`,
        applicationCategory: 'UtilitiesApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${SITE_CONFIG.url}/calculators` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

// ── Reusable tool card ─────────────────────────────────────────────────────────

function ToolCard({ tool, accentHover }) {
  return (
    <Link
      href={tool.href}
      className={`group relative p-5 bg-white border border-surface-200 rounded-2xl hover:shadow-md transition-all ${accentHover}`}
    >
      {tool.badge && (
        <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">
          {tool.badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none mt-0.5">{tool.icon}</span>
        <div className="min-w-0">
          <h3 className="font-semibold text-surface-900 text-sm group-hover:text-brand-700 transition-colors pr-12">
            {tool.name}
          </h3>
          <p className="text-xs text-surface-500 mt-1 leading-relaxed">{tool.desc}</p>
        </div>
      </div>
    </Link>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────────

function Section({ id, icon, title, subtitle, tools, accent, accentHover, bgColor, borderColor }) {
  return (
    <section id={id} className="scroll-mt-6">
      <div className={`flex items-center gap-3 mb-4`}>
        <div className={`text-2xl p-2.5 ${bgColor} rounded-xl`}>{icon}</div>
        <div>
          <h2 className="font-display font-bold text-xl text-surface-900">{title}</h2>
          <p className="text-sm text-surface-500 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(t => (
          <ToolCard key={t.slug} tool={t} accentHover={accentHover} />
        ))}
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function CalculatorsHubPage() {
  const totalTools = ALL_TOOLS.length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Calculators</li>
              </ol>
            </nav>

            <div className="flex items-start gap-4">
              <div className="text-4xl p-3 bg-brand-100 rounded-2xl shrink-0">🧮</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Online Calculators
                </h1>
                <p className="text-surface-500 text-lg leading-relaxed mt-3 max-w-3xl">
                  {totalTools} free calculators for finance, tax, health, and everyday math — built for India.
                  EMI, GST, salary, SIP, BMI, age, percentage and more. No login. Your data stays on your device.
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                `🧮 ${totalTools} Calculators`,
                '✅ 100% Free',
                '🔒 Browser-Only',
                '🇮🇳 India-Specific',
                '📊 FY 2025-26 Updated',
                '📱 Works on Mobile',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>

            {/* Jump links */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { id: 'finance',    label: '💳 Finance & Loan' },
                { id: 'tax',        label: '🧾 Tax & Salary' },
                { id: 'health',     label: '⚖️ Health' },
                { id: 'general',    label: '📐 General' },
                { id: 'time',       label: '⏱️ Time & Timers' },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool sections ──────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

          <Section
            id="finance"
            icon="💳"
            title="Finance & Loan Calculators"
            subtitle={`${FINANCE_CALCULATORS.length} tools · EMI, SIP, PPF, home loan, car loan`}
            tools={FINANCE_CALCULATORS}
            accentHover="hover:border-emerald-300"
            bgColor="bg-emerald-100"
          />

          <Section
            id="tax"
            icon="🧾"
            title="Tax & Salary Calculators"
            subtitle={`${TAX_SALARY_CALCULATORS.length} tools · GST, salary, HRA, EPF, professional tax`}
            tools={TAX_SALARY_CALCULATORS}
            accentHover="hover:border-brand-300"
            bgColor="bg-brand-100"
          />

          <Section
            id="health"
            icon="⚖️"
            title="Health Calculators"
            subtitle={`${HEALTH_CALCULATORS.length} tool · BMI with Indian health guidelines`}
            tools={HEALTH_CALCULATORS}
            accentHover="hover:border-rose-300"
            bgColor="bg-rose-100"
          />

          <Section
            id="general"
            icon="📐"
            title="General Calculators"
            subtitle={`${GENERAL_CALCULATORS.length} tools · Age, percentage, number to words, random numbers`}
            tools={GENERAL_CALCULATORS}
            accentHover="hover:border-amber-300"
            bgColor="bg-amber-100"
          />

          <Section
            id="time"
            icon="⏱️"
            title="Time & Productivity Tools"
            subtitle={`${TIME_TOOLS.length} tools · Pomodoro, countdown timer, stopwatch`}
            tools={TIME_TOOLS}
            accentHover="hover:border-violet-300"
            bgColor="bg-violet-100"
          />

        </div>

        {/* ── Why use section ────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">
              Why Use ToolStackHub Calculators?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-surface-600">
              <div>
                <p className="font-semibold text-surface-800 mb-1">🇮🇳 Built for Indian context</p>
                <p>
                  Indian tax slabs, GST rates, state-wise professional tax, metro/non-metro HRA rules,
                  IFSC codes, and INR formatting — updated for FY 2025-26 / AY 2026-27.
                </p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">🔒 Your data never leaves your device</p>
                <p>
                  Every calculation runs entirely in your browser using JavaScript. Your salary, loan
                  amounts, and health data are never sent to any server.
                </p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">⚡ Instant, real-time results</p>
                <p>
                  No waiting, no server round-trips. Results update as you type — see your EMI,
                  tax saving, or BMI category the moment you enter a value.
                </p>
              </div>
              <div>
                <p className="font-semibold text-surface-800 mb-1">📊 Detailed breakdowns, not just numbers</p>
                <p>
                  Old vs new tax regime tables, year-wise amortization schedules, SIP growth charts,
                  EPF year-by-year projections — full visibility, not just a single output.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details
                key={faq.q}
                className="bg-surface-50 border border-surface-200 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-surface-400 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ── Related hubs ──────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
            Explore More Tool Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/tools/finance',   icon: '💰', label: 'Finance Tools' },
              { href: '/tools/image',     icon: '🖼️', label: 'Image Tools' },
              { href: '/tools/text',      icon: '📝', label: 'Text Tools' },
              { href: '/tools/developer', icon: '💻', label: 'Developer Tools' },
            ].map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex flex-col items-center gap-2 p-4 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-semibold text-surface-700">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
