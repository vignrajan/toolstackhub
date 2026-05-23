import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import EMICalculator from '../../components/tools/EMICalculator';
import { SITE_CONFIG } from '../../data/tools';

// ── Metadata ──────────────────────────────────────────────────
export const metadata = {
  title: 'EMI Calculator Online Free – Home Loan, Car Loan, Personal Loan',
  description: 'Free EMI calculator online. Calculate monthly EMI for home loan, car loan, and personal loan instantly. See amortization schedule, total interest, and payment breakdown. No signup.',
  keywords: [
    'emi calculator',
    'emi calculator online',
    'home loan emi calculator',
    'car loan emi calculator',
    'personal loan emi calculator',
    'loan emi calculator',
    'emi calculation formula',
    'monthly emi calculator',
    'emi calculator india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/emi-calculator` },
  openGraph: {
    title: 'EMI Calculator Online Free – Home, Car & Personal Loan',
    description: 'Calculate your monthly EMI instantly. Free, accurate, no signup required.',
    url: `${SITE_CONFIG.url}/emi-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is EMI?',
    a: 'EMI stands for Equated Monthly Instalment. It is the fixed amount you pay to your lender every month to repay a loan. Each EMI consists of two parts: the principal repayment (reducing your loan balance) and the interest charged on the outstanding balance. The ratio of principal to interest changes each month — early EMIs have more interest, later EMIs have more principal.',
  },
  {
    q: 'What is the EMI formula?',
    a: 'The EMI formula is: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1). Where P = Principal loan amount, r = Monthly interest rate (annual rate divided by 12 and then by 100), and n = Number of monthly instalments. For example, for a ₹10 lakh loan at 8.5% p.a. for 20 years: r = 8.5/12/100 = 0.00708, n = 240 months, EMI = ₹8,678 per month.',
  },
  {
    q: 'How is EMI calculated for a home loan?',
    a: 'Home loan EMI is calculated using the same standard EMI formula. Enter your loan amount (typically ₹20–80 lakhs), the interest rate offered by your bank (currently 8–9.5% p.a. for most banks), and your chosen tenure (usually 15–30 years). Our calculator shows the exact monthly EMI, total interest payable, and a month-by-month amortization schedule showing how your balance reduces over time.',
  },
  {
    q: 'How can I reduce my EMI?',
    a: 'There are four ways to reduce your EMI: (1) Make a larger down payment to reduce the principal loan amount. (2) Choose a longer tenure — spreading the loan over more months reduces each monthly payment, though you pay more total interest. (3) Negotiate a lower interest rate or refinance to a lender offering better rates. (4) Make prepayments when possible — paying extra principal reduces your outstanding balance and lowers future interest.',
  },
  {
    q: 'What happens if I miss an EMI payment?',
    a: 'Missing an EMI has three consequences: (1) Penalty charges — most lenders charge 1–3% penalty on the overdue EMI. (2) Credit score damage — missed payments are reported to CIBIL and reduce your credit score, making future loans harder to get. (3) Compound interest — interest accrues on the unpaid amount, increasing your total debt. Contact your lender immediately if you anticipate difficulty paying — most banks offer restructuring options for genuine hardship cases.',
  },
  {
    q: 'Is a lower EMI always better?',
    a: 'Not necessarily. A lower EMI usually means a longer loan tenure, which means you pay significantly more interest over the loan lifetime. For example, a ₹50 lakh home loan at 9% for 20 years has EMI of ₹44,986 and total interest of ₹57.97 lakhs. The same loan for 30 years has lower EMI of ₹40,231 but total interest of ₹94.83 lakhs — you pay ₹36.86 lakhs more in interest for the lower EMI. Choosing the shortest tenure your cash flow comfortably supports is almost always the better financial decision.',
  },
  {
    q: 'What is an amortization schedule?',
    a: 'An amortization schedule is a complete table showing every monthly payment over the life of your loan. For each month it shows: the EMI paid, how much went toward principal, how much went toward interest, and the remaining loan balance. In early months, most of the EMI is interest. In later months, most is principal. Our EMI calculator generates a full amortization schedule so you can see exactly how your loan balance reduces.',
  },
];

// ── Loan type cards ───────────────────────────────────────────
const LOAN_TYPES = [
  {
    icon:    '🏠',
    name:    'Home Loan',
    href:    '/home-loan-emi-calculator',
    range:   '₹10L – ₹5Cr',
    rate:    '8.35% – 9.65%',
    tenure:  '5 – 30 years',
    color:   'emerald',
    desc:    'Lowest interest rate of all loan types. Long tenure reduces EMI but increases total interest paid.',
  },
  {
    icon:    '🚗',
    name:    'Car Loan',
    href:    '/car-loan-emi-calculator',
    range:   '₹2L – ₹50L',
    rate:    '8.75% – 14%',
    tenure:  '1 – 7 years',
    color:   'blue',
    desc:    'Short tenure, moderate rates. New car loans are cheaper than used car loans.',
  },
  {
    icon:    '💼',
    name:    'Personal Loan',
    href:    '/personal-loan-emi-calculator',
    range:   '₹50K – ₹40L',
    rate:    '10.5% – 24%',
    tenure:  '1 – 5 years',
    color:   'violet',
    desc:    'Highest rates, no collateral required. Best for short-term needs.',
  },
  {
    icon:    '🏢',
    name:    'Business Loan',
    href:    '/business-loan-emi-calculator',
    range:   '₹1L – ₹5Cr',
    rate:    '12% – 21%',
    tenure:  '1 – 5 years',
    color:   'amber',
    desc:    'Rates vary widely based on business credit history and collateral.',
  },
];

// ── Bank rates comparison ─────────────────────────────────────
const BANK_RATES = [
  { bank: 'SBI',          homeLoan: '8.50%', carLoan: '8.75%', personal: '11.15%' },
  { bank: 'HDFC Bank',    homeLoan: '8.70%', carLoan: '9.40%', personal: '10.50%' },
  { bank: 'ICICI Bank',   homeLoan: '8.75%', carLoan: '9.00%', personal: '10.65%' },
  { bank: 'Axis Bank',    homeLoan: '8.75%', carLoan: '9.20%', personal: '10.49%' },
  { bank: 'Kotak Bank',   homeLoan: '8.75%', carLoan: '7.99%', personal: '10.99%' },
  { bank: 'Bank of Baroda',homeLoan:'8.40%', carLoan: '8.80%', personal: '11.00%' },
];

// ── Programmatic variant pages ────────────────────────────────
const VARIANTS = [
  { href: '/home-loan-emi-calculator',     label: 'Home Loan EMI Calculator'     },
  { href: '/car-loan-emi-calculator',      label: 'Car Loan EMI Calculator'      },
  { href: '/personal-loan-emi-calculator', label: 'Personal Loan EMI Calculator' },
  { href: '/business-loan-emi-calculator', label: 'Business Loan EMI Calculator' },
  { href: '/emi-calculator-10-lakh',       label: 'EMI for ₹10 Lakh Loan'        },
  { href: '/emi-calculator-20-lakh',       label: 'EMI for ₹20 Lakh Loan'        },
  { href: '/emi-calculator-50-lakh',       label: 'EMI for ₹50 Lakh Loan'        },
  { href: '/emi-calculator-1-crore',       label: 'EMI for ₹1 Crore Loan'        },
  { href: '/sbi-home-loan-emi-calculator', label: 'SBI Home Loan EMI Calculator' },
  { href: '/hdfc-home-loan-emi-calculator',label: 'HDFC Home Loan EMI Calculator'},
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'EMI Calculator Online',
      description: 'Free online EMI calculator for home loan, car loan, and personal loan. Calculate monthly EMI, total interest, and view full amortization schedule instantly.',
      url: `${SITE_CONFIG.url}/emi-calculator`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Calculate EMI for any loan amount and tenure',
        'Home loan, car loan, and personal loan EMI',
        'Full amortization schedule',
        'Principal vs interest breakdown',
        'Share or copy results',
        'No signup required',
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
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Calculators',    item: `${SITE_CONFIG.url}/calculators` },
        { '@type': 'ListItem', position: 3, name: 'EMI Calculator', item: `${SITE_CONFIG.url}/emi-calculator` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate EMI Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter loan amount',    text: 'Enter your loan amount using the slider or type it directly.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter interest rate',  text: 'Enter the annual interest rate offered by your bank.' },
        { '@type': 'HowToStep', position: 3, name: 'Enter loan tenure',    text: 'Set the loan tenure in years or months.' },
        { '@type': 'HowToStep', position: 4, name: 'View your EMI',        text: 'Your monthly EMI, total interest, and amortization schedule are calculated instantly.' },
      ],
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────
export default function EMICalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* ── Page header ──────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/calculators" className="hover:text-brand-600 transition-colors text-brand-600">Calculators</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">EMI Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              EMI Calculator Online – Free Loan EMI Calculator
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your monthly loan EMI instantly for home loan, car loan, or personal
              loan. See the full amortization schedule, principal vs interest breakdown,
              and total payment. Free, accurate, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free & Accurate', '⚡ Instant Results', '📊 Amortization Schedule', '🏠 Home · Car · Personal', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Loan type quick links ─────────────────── */}
        <div className="bg-surface-50 border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2">
              {LOAN_TYPES.map(lt => (
                <Link key={lt.href} href={lt.href}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white border border-surface-200 rounded-full hover:border-brand-300 hover:text-brand-700 transition-colors text-surface-600">
                  <span>{lt.icon}</span>{lt.name} EMI
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculator ───────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <EMICalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* ── SEO Content ──────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is EMI */}
          <section aria-labelledby="what-is-emi">
            <h2 id="what-is-emi" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is EMI and How is it Calculated?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                <strong className="text-surface-800">EMI (Equated Monthly Instalment)</strong> is
                the fixed amount you pay your lender every month until your loan is fully repaid.
                Every EMI has two components — the <strong className="text-surface-800">principal</strong>{' '}
                (reducing your loan balance) and the <strong className="text-surface-800">interest</strong>{' '}
                (the cost of borrowing). In the early months of your loan, a larger share of each
                EMI goes toward interest. As the loan progresses, the interest component shrinks
                and the principal component grows.
              </p>
              <p>
                The standard EMI formula used by all Indian banks and financial institutions is:
              </p>
              {/* Formula */}
              <div className="bg-surface-900 rounded-2xl p-5">
                <div className="text-surface-400 text-xs uppercase tracking-wider mb-3">EMI Formula</div>
                <div className="font-mono text-emerald-300 text-sm leading-8">
                  <div>EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1)</div>
                  <div className="mt-3 space-y-1 text-surface-400 text-xs">
                    <div>P = Principal loan amount</div>
                    <div>r = Monthly interest rate = Annual rate ÷ 12 ÷ 100</div>
                    <div>n = Loan tenure in months</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-700">
                  <div className="text-surface-400 text-xs mb-2">Example: ₹50 lakh loan at 8.5% for 20 years</div>
                  <div className="font-mono text-xs text-amber-300 space-y-1">
                    <div>r = 8.5 ÷ 12 ÷ 100 = 0.007083</div>
                    <div>n = 20 × 12 = 240 months</div>
                    <div className="text-emerald-300 font-bold">EMI = ₹43,391 per month</div>
                  </div>
                </div>
              </div>
              <p>
                Our EMI calculator applies this exact formula — the same one used by SBI,
                HDFC, ICICI, and every RBI-regulated lender. The results are identical to
                what your bank would show you. You can also use our{' '}
                <Link href="/percentage-calculator-online" className="text-brand-700 hover:underline font-medium">
                  percentage calculator
                </Link>{' '}
                to calculate what percentage of your income should go toward loan repayment,
                or the{' '}
                <Link href="/age-calculator-online" className="text-brand-700 hover:underline font-medium">
                  age calculator
                </Link>{' '}
                to plan your loan tenure relative to your retirement age.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="how-to-use">
            <h2 id="how-to-use" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the EMI Calculator — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '💰', title: 'Enter Loan Amount', desc: 'Use the slider or type the loan amount directly. Range from ₹1 lakh to ₹1 crore for most loan types.' },
                { step: '02', icon: '📊', title: 'Set Interest Rate', desc: 'Enter the annual interest rate your bank has offered. Check the rates table below to compare current rates.' },
                { step: '03', icon: '📅', title: 'Choose Tenure', desc: 'Set how many years or months you want to repay the loan. Toggle between Years and Months for precision.' },
                { step: '04', icon: '✅', title: 'View Results', desc: 'Your EMI, total interest, total payment, and full amortization schedule are calculated and displayed instantly.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Loan type cards */}
          <section aria-labelledby="loan-types">
            <h2 id="loan-types" className="font-display font-bold text-2xl text-surface-900 mb-5">
              EMI Calculator by Loan Type
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOAN_TYPES.map(lt => (
                <Link key={lt.href} href={lt.href}
                  className={`group flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl hover:border-${lt.color}-300 hover:bg-${lt.color}-50 transition-all`}>
                  <span className="text-3xl shrink-0">{lt.icon}</span>
                  <div>
                    <div className={`font-display font-bold text-surface-900 group-hover:text-${lt.color}-800 mb-1`}>
                      {lt.name} EMI Calculator
                    </div>
                    <div className="text-xs text-surface-500 leading-relaxed mb-2">{lt.desc}</div>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="text-surface-600">💰 {lt.range}</span>
                      <span className="text-surface-600">📊 {lt.rate}</span>
                      <span className="text-surface-600">📅 {lt.tenure}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Bank rates */}
          <section aria-labelledby="bank-rates">
            <h2 id="bank-rates" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Current Bank Interest Rates (2026)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Use these rates in the EMI calculator above to compare your monthly EMI
              across different lenders. Rates are indicative — your actual rate depends
              on your CIBIL score, income, and loan type.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Bank</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">🏠 Home Loan</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">🚗 Car Loan</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">💼 Personal Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {BANK_RATES.map((row, i) => (
                    <tr key={row.bank} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.bank}</td>
                      <td className="px-4 py-3 text-center text-emerald-700 font-medium">{row.homeLoan}</td>
                      <td className="px-4 py-3 text-center text-blue-700 font-medium">{row.carLoan}</td>
                      <td className="px-4 py-3 text-center text-violet-700 font-medium">{row.personal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              * Rates are indicative as of March 2026. Actual rates vary by applicant profile. Verify with your bank before applying.
            </p>
          </section>

          {/* Tips to reduce EMI */}
          <section aria-labelledby="reduce-emi">
            <h2 id="reduce-emi" className="font-display font-bold text-2xl text-surface-900 mb-5">
              6 Proven Ways to Reduce Your EMI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '⬆️', title: 'Increase Your Down Payment',       desc: 'A higher down payment reduces the principal loan amount, directly reducing both EMI and total interest. Even a 5–10% larger down payment can save lakhs in interest over a 20-year home loan.' },
                { icon: '📅', title: 'Choose a Longer Tenure',           desc: 'Spreading your loan over more months reduces the monthly EMI. Use the calculator to see how extending tenure by 5 years affects your monthly payment versus total interest paid.' },
                { icon: '📈', title: 'Improve Your CIBIL Score',         desc: 'A CIBIL score above 750 qualifies you for the best interest rates — often 0.5–1% lower than standard rates. On a ₹50 lakh loan, that difference saves ₹3–6 lakh in total interest.' },
                { icon: '🔄', title: 'Refinance at a Lower Rate',        desc: 'If interest rates have fallen since you took the loan, refinancing (balance transfer) to a lender offering lower rates reduces both EMI and total interest. Calculate the savings against processing fees.' },
                { icon: '💰', title: 'Make Part Prepayments',            desc: 'Paying extra principal whenever you have surplus funds reduces the outstanding balance and future interest. Even annual prepayments of ₹50,000 can reduce a 20-year loan by 3–4 years.' },
                { icon: '🏦', title: 'Negotiate with Your Lender',       desc: 'Existing customers with good repayment history can negotiate rate reductions. During festive seasons (Diwali, New Year), banks offer promotional rates — time your loan application accordingly.' },
              ].map(tip => (
                <div key={tip.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{tip.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{tip.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{tip.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EMI vs tenure comparison */}
          <section aria-labelledby="emi-comparison">
            <h2 id="emi-comparison" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Tenure Affects EMI — ₹50 Lakh Loan at 8.5%
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              This table shows how choosing a longer tenure reduces your monthly EMI
              but dramatically increases the total interest you pay over the loan lifetime.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Tenure</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Monthly EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Total Interest</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Total Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tenure: '5 years',  emi: '₹1,02,676', interest: '₹16,06,000', total: '₹66,06,000',  highlight: false },
                    { tenure: '10 years', emi: '₹61,993',   interest: '₹24,39,000', total: '₹74,39,000',  highlight: false },
                    { tenure: '15 years', emi: '₹49,239',   interest: '₹38,63,000', total: '₹88,63,000',  highlight: true  },
                    { tenure: '20 years', emi: '₹43,391',   interest: '₹54,14,000', total: '₹1,04,14,000',highlight: false },
                    { tenure: '25 years', emi: '₹40,261',   interest: '₹70,78,000', total: '₹1,20,78,000',highlight: false },
                    { tenure: '30 years', emi: '₹38,446',   interest: '₹88,41,000', total: '₹1,38,41,000',highlight: false },
                  ].map((row, i) => (
                    <tr key={row.tenure} className={row.highlight ? 'bg-emerald-50 border-l-2 border-emerald-400' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">
                        {row.tenure} {row.highlight && <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">Best balance</span>}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-brand-700">{row.emi}</td>
                      <td className="px-4 py-3 text-right text-rose-600 font-medium">{row.interest}</td>
                      <td className="px-4 py-3 text-right text-surface-700 font-medium">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions About EMI
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic SEO variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More EMI Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VARIANTS.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600 text-lg">🧮</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              Related Free Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',   desc: 'Calculate loan-to-income ratio and down payment percentages' },
                { href: '/age-calculator-online',        icon: '🎂', label: 'Age Calculator',          desc: 'Plan loan tenure relative to your retirement age' },
                { href: '/random-number-generator',      icon: '🎲', label: 'Random Number Generator', desc: 'Generate random numbers for financial simulations' },
                { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',      desc: 'Count words in loan documents and agreements' },
                { href: '/countdown-timer-online',       icon: '⏳', label: 'Countdown Timer',         desc: 'Count down to your loan payoff date' },
                { href: '/qr-code-generator-online',     icon: '📱', label: 'QR Code Generator',       desc: 'Create QR codes for payment UPI links' },
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