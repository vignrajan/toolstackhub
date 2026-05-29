import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import EMICalculator from '../../components/tools/EMICalculator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Car Loan EMI Calculator Free – Auto Loan EMI 2026',
  description: 'Calculate car loan EMI instantly. Compare bank rates for new and used car loans. Amortization schedule, down payment guide, and new vs used comparison.',
  keywords: ['car loan emi calculator', 'auto loan emi calculator', 'car loan calculator india', 'car emi calculator 2026', 'two wheeler loan emi', 'used car loan emi calculator'],
  alternates: { canonical: `${SITE_CONFIG.url}/car-loan-emi-calculator` },
  openGraph: {
    title: 'Car Loan EMI Calculator Free 2026 – Auto Loan EMI',
    description: 'Calculate car loan EMI instantly. Compare all bank rates. Full amortization schedule. Free.',
    url: `${SITE_CONFIG.url}/car-loan-emi-calculator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan EMI Calculator Free 2026 – Auto Loan EMI',
    description: 'Calculate car loan EMI instantly. Compare bank rates for new and used car loans. Amortization schedule, down payment guide, and new vs used comparison.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is the current car loan interest rate in 2026?', a: 'Car loan interest rates in India range from 7.99% to 14% per annum in 2026. Kotak Bank offers new car loans starting at 7.99%, SBI at 8.75%, HDFC Bank at 9.40%, and ICICI Bank at 9.00%. Used car loans have higher rates — typically 11–16%. Your actual rate depends on your CIBIL score, car model, and down payment percentage.' },
  { q: 'What is the maximum car loan tenure?', a: 'Most banks offer car loan tenure up to 7 years (84 months). Some lenders offer up to 8 years for higher loan amounts. Financial advisors recommend keeping car loan tenure to 5 years maximum — longer tenures mean you are paying interest on a rapidly depreciating asset. A car loses 15–20% of value in the first year alone.' },
  { q: 'How much car loan can I get?', a: 'Banks typically finance 85–90% of the on-road price for new cars and 75–80% for used cars. The maximum loan amount depends on your income and repayment capacity. Banks usually require the EMI to be 40–50% or less of your monthly take-home salary. Most major banks have no upper limit on car loan amount for high-income applicants.' },
  { q: 'What is the minimum CIBIL score for a car loan?', a: 'Most major banks require a minimum CIBIL score of 700–720 for car loans. A score above 750 qualifies for the best rates. Scores between 650–700 may get approved with higher rates or a larger down payment. Below 650, consider NBFCs or apply with a co-applicant with a better credit profile.' },
  { q: 'Should I make a larger down payment on a car loan?', a: 'Yes — a larger down payment reduces principal, interest, and monthly EMI. It also prevents being "underwater" on the loan (owing more than the car is worth) since cars depreciate rapidly. Ideal down payment is 20–30% of the car\'s on-road price. Never go below 10% as it signals financial instability to lenders.' },
  { q: 'New car loan vs used car loan — what is the difference?', a: 'New car loans have lower interest rates (7.99–12%), longer tenures (up to 7 years), and higher LTV ratios (85–90%). Used car loans have higher rates (11–16%), shorter tenures (3–5 years), and lower LTV ratios (70–80%). The age and condition of the used car significantly impacts approval and rate. Most banks will not finance cars older than 5 years, and the maximum tenure is restricted for older vehicles.' },
  { q: 'Can I foreclose a car loan early?', a: 'Yes, but unlike home loans, car loans on floating rates may still have foreclosure charges depending on the bank. Most banks charge 2–5% of the outstanding principal as foreclosure fee. Check your loan agreement before making a full prepayment. Partial prepayments are usually free or have minimal charges and are recommended to reduce total interest.' },
];

const BANK_RATES = [
  { bank: 'Kotak Bank',    newCar: '7.99%',  usedCar: '11.99%', maxTenure: '7 yrs', processing: '1–2%'    },
  { bank: 'Union Bank',    newCar: '8.70%',  usedCar: '11.00%', maxTenure: '7 yrs', processing: '0.50%'   },
  { bank: 'SBI',           newCar: '8.75%',  usedCar: '12.00%', maxTenure: '7 yrs', processing: '0.35%'   },
  { bank: 'ICICI Bank',    newCar: '9.00%',  usedCar: '12.50%', maxTenure: '7 yrs', processing: '1%'      },
  { bank: 'HDFC Bank',     newCar: '9.40%',  usedCar: '13.75%', maxTenure: '7 yrs', processing: '0.50%'   },
  { bank: 'Axis Bank',     newCar: '9.25%',  usedCar: '14.00%', maxTenure: '7 yrs', processing: '1–1.5%'  },
  { bank: 'IndusInd Bank', newCar: '9.25%',  usedCar: '13.00%', maxTenure: '7 yrs', processing: '1%'      },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Car Loan EMI Calculator', description: 'Free car loan EMI calculator for new and used cars with full amortization schedule and bank rate comparison.', url: `${SITE_CONFIG.url}/car-loan-emi-calculator`, applicationCategory: 'FinanceApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'EMI Calculator', item: `${SITE_CONFIG.url}/emi-calculator` }, { '@type': 'ListItem', position: 3, name: 'Car Loan EMI', item: `${SITE_CONFIG.url}/car-loan-emi-calculator` }] },
  ],
};

export default function CarLoanEMIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/emi-calculator" className="hover:text-brand-600 transition-colors text-brand-600">EMI Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Car Loan EMI</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Car Loan EMI Calculator – Free Auto Loan EMI Calculator 2026
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your car loan EMI instantly for new cars, used cars, and two-wheelers.
              Compare rates across all major banks, see the full amortization schedule,
              and find out how much total interest you will pay. Free, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🚗 New & Used Cars', '🏍️ Two-Wheelers', '🏦 7 Banks Compared', '📊 Amortization Schedule', '💡 Smart Buying Tips'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
            <span className="text-xl shrink-0">💡</span>
            <div className="text-sm text-blue-800">
              <strong>Car loan tip:</strong> New car loans: use <strong>8.75% – 10%</strong> and <strong>3–7 year</strong> tenure.
              Used car loans: use <strong>11% – 14%</strong> and <strong>3–5 years</strong>. Keep tenure as short as possible — cars depreciate fast.
            </div>
          </div>
          <EMICalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Car Loan EMI — Everything You Need to Know Before Buying
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A car loan is one of the most common consumer loans in India — but it is also one of the most misunderstood. Unlike a home loan where the asset (property) appreciates over time, a car depreciates from the moment you drive it out of the showroom. This fundamental difference means car loan decisions need different thinking than home loans.</p>
              <p>A new car loses 15–20% of its value in the first year and 10–15% per year after that. If you take a 7-year car loan with a 10% down payment, for the first 2–3 years you will owe more than the car is worth — a situation called being "underwater" or having negative equity. Our car loan EMI calculator helps you model scenarios with different down payments and tenures so you can make an informed decision before visiting the dealership.</p>
              <p>Use our <Link href="/tools/percentage-calculator" className="text-brand-700 hover:underline font-medium">percentage calculator</Link> to determine the right down payment percentage, or the <Link href="/tools/emi-calculator" className="text-brand-700 hover:underline font-medium">main EMI calculator</Link> to compare car loan against home loan and personal loan scenarios.</p>
            </div>
          </section>

          {/* Bank rates */}
          <section aria-labelledby="bank-rates">
            <h2 id="bank-rates" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Car Loan Interest Rates — All Major Banks (March 2026)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">Enter these rates in the calculator above to compare your EMI across lenders. New car rates apply to cars less than 6 months old. Used car rates apply to pre-owned vehicles.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Bank</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">🚗 New Car</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">🔧 Used Car</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Max Tenure</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {BANK_RATES.map((row, i) => (
                    <tr key={row.bank} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.bank}</td>
                      <td className="px-4 py-3 text-center font-bold text-blue-700">{row.newCar}</td>
                      <td className="px-4 py-3 text-center text-amber-700 font-medium">{row.usedCar}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{row.maxTenure}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{row.processing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Indicative rates as of March 2026. Verify with your bank before applying.</p>
          </section>

          {/* EMI by car price */}
          <section aria-labelledby="emi-table">
            <h2 id="emi-table" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Car Loan EMI Table — Common Car Prices at 9% p.a.
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">Assuming 90% financing (10% down payment). Amounts shown are for the loan amount — not the on-road price.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">On-Road Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Loan Amount</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">3 Yr EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">5 Yr EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">7 Yr EMI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { price: '₹5 Lakh',   loan: '₹4.5 Lakh',  y3: '₹14,307', y5: '₹9,338',  y7: '₹7,215' },
                    { price: '₹8 Lakh',   loan: '₹7.2 Lakh',  y3: '₹22,892', y5: '₹14,940', y7: '₹11,545'},
                    { price: '₹12 Lakh',  loan: '₹10.8 Lakh', y3: '₹34,337', y5: '₹22,410', y7: '₹17,317'},
                    { price: '₹20 Lakh',  loan: '₹18 Lakh',   y3: '₹57,229', y5: '₹37,350', y7: '₹28,862'},
                    { price: '₹35 Lakh',  loan: '₹31.5 Lakh', y3: '₹1,00,151',y5: '₹65,363', y7: '₹50,509'},
                  ].map((row, i) => (
                    <tr key={row.price} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{row.price}</td>
                      <td className="px-4 py-3 text-surface-600">{row.loan}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.y3}</td>
                      <td className="px-4 py-3 text-right text-brand-700 font-medium">{row.y5}</td>
                      <td className="px-4 py-3 text-right text-surface-500">{row.y7}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* New vs used car */}
          <section aria-labelledby="new-vs-used">
            <h2 id="new-vs-used" className="font-display font-bold text-2xl text-surface-900 mb-5">
              New Car Loan vs Used Car Loan — Which Should You Choose?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h3 className="font-display font-bold text-blue-900 text-lg mb-3">🚗 New Car Loan</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex gap-2"><span className="text-blue-500 shrink-0">✓</span><span>Lower interest rate (7.99–10%)</span></div>
                  <div className="flex gap-2"><span className="text-blue-500 shrink-0">✓</span><span>Longer tenure available (up to 7 years)</span></div>
                  <div className="flex gap-2"><span className="text-blue-500 shrink-0">✓</span><span>Higher LTV — finance up to 90%</span></div>
                  <div className="flex gap-2"><span className="text-blue-500 shrink-0">✓</span><span>Manufacturer warranty covers repair costs</span></div>
                  <div className="flex gap-2"><span className="text-rose-500 shrink-0">✗</span><span>Higher depreciation in first 3 years</span></div>
                  <div className="flex gap-2"><span className="text-rose-500 shrink-0">✗</span><span>Higher on-road price vs market value</span></div>
                </div>
              </div>
              <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                <h3 className="font-display font-bold text-amber-900 text-lg mb-3">🔧 Used Car Loan</h3>
                <div className="space-y-2 text-sm text-amber-800">
                  <div className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>Significantly lower purchase price</span></div>
                  <div className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>Depreciation curve is flatter after 3 years</span></div>
                  <div className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>More car for the same EMI budget</span></div>
                  <div className="flex gap-2"><span className="text-rose-500 shrink-0">✗</span><span>Higher interest rate (11–16%)</span></div>
                  <div className="flex gap-2"><span className="text-rose-500 shrink-0">✗</span><span>Shorter tenure (max 5 years)</span></div>
                  <div className="flex gap-2"><span className="text-rose-500 shrink-0">✗</span><span>No manufacturer warranty on older cars</span></div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-700">
              <strong>Rule of thumb:</strong> If the used car is 1–3 years old with low mileage and full service history, the lower price and slower depreciation often make it the better financial choice — even at a higher interest rate. For brand-new segments or first-time buyers who want predictability, a new car loan makes more sense.
            </div>
          </section>

          {/* Smart tips */}
          <section aria-labelledby="tips">
            <h2 id="tips" className="font-display font-bold text-2xl text-surface-900 mb-5">
              6 Smart Tips to Get the Best Car Loan Deal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '💰', title: 'Pay 20–30% Down Payment',       desc: 'Never finance the full on-road price. A 20–30% down payment avoids negative equity, reduces your EMI, and signals financial stability to lenders — often getting you a better rate.' },
                { icon: '⏰', title: 'Keep Tenure Under 5 Years',      desc: 'A 7-year car loan means you\'re still paying for a car that\'s rapidly losing value. Shorter tenure = more financial flexibility and less total interest. Calculate the difference using this EMI calculator.' },
                { icon: '🏦', title: 'Get Pre-Approved Before Visiting', desc: 'Apply for pre-approval from your bank before going to the dealership. You\'ll know your eligible loan amount and rate — giving you negotiating power and preventing the dealer from marking up the interest rate.' },
                { icon: '📊', title: 'Compare On-Road Price, Not Sticker Price', desc: 'Always calculate EMI on the total on-road price including registration, insurance, and dealer charges — not just the ex-showroom price shown in ads. On-road can be 10–15% higher.' },
                { icon: '🔄', title: 'Avoid "Zero EMI" Schemes',      desc: '"Zero interest EMI" schemes from dealers hide the cost in a higher product price. The car is marked up to cover the interest waived. Always compare the total cost (price + interest) across options.' },
                { icon: '🎁', title: 'Time Your Purchase for Festive Season', desc: 'Banks and manufacturers offer the best deals during Diwali, year-end, and financial year-end. Processing fees are waived, interest rates drop, and manufacturers offer cashbacks that effectively reduce the loan amount.' },
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

          {/* Cost of interest visualization */}
          <section aria-labelledby="cost-of-interest">
            <h2 id="cost-of-interest" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Total Interest Paid — ₹10 Lakh Car Loan at 9% p.a.
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">This table shows how tenure choice affects both your monthly EMI and the total interest you pay — helping you find the right balance for your budget.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Tenure</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Monthly EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Total Interest</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Total Payment</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Interest %</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tenure: '1 year',  emi: '₹87,604', interest: '₹51,248',  total: '₹10,51,248', pct: '5.1%'  },
                    { tenure: '2 years', emi: '₹45,685', interest: '₹96,440',  total: '₹10,96,440', pct: '9.6%', highlight: false },
                    { tenure: '3 years', emi: '₹31,800', interest: '₹1,44,800', total: '₹11,44,800', pct: '14.5%', highlight: true },
                    { tenure: '5 years', emi: '₹20,758', interest: '₹2,45,480', total: '₹12,45,480', pct: '24.5%', highlight: false },
                    { tenure: '7 years', emi: '₹16,029', interest: '₹3,46,436', total: '₹13,46,436', pct: '34.6%', highlight: false },
                  ].map((row, i) => (
                    <tr key={row.tenure} className={row.highlight ? 'bg-blue-50 border-l-4 border-blue-400' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">
                        {row.tenure} {row.highlight && <span className="ml-2 text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded-full">Recommended</span>}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-brand-700">{row.emi}</td>
                      <td className="px-4 py-3 text-right text-rose-600 font-medium">{row.interest}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.total}</td>
                      <td className="px-4 py-3 text-right text-surface-600">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              <strong>Key insight:</strong> Choosing 7 years over 3 years saves ₹15,771/month in EMI but costs ₹2,01,636 more in total interest. That extra interest could buy significant fuel or maintenance for years.
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Car Loan EMI
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More EMI Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/emi-calculator',               label: 'EMI Calculator — All Loans'        },
                { href: '/tools/home-loan-emi-calculator',     label: 'Home Loan EMI Calculator'          },
                { href: '/tools/percentage-calculator', label: 'Percentage Calculator'             },
              ].map(v => (
                <Link key={v.href} href={v.href} className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">🧮</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/percentage-calculator', icon: '📊', label: 'Percentage Calculator', desc: 'Calculate down payment % and loan-to-value ratio' },
                { href: '/tools/age-calculator',        icon: '🎂', label: 'Age Calculator',        desc: 'Calculate your age for loan eligibility' },
                { href: '/tools/emi-calculator',               icon: '🧮', label: 'EMI Calculator',        desc: 'Calculate EMI for home loan and personal loan too' },
                { href: '/tools/countdown-timer',       icon: '⏳', label: 'Countdown Timer',       desc: 'Count down to your car loan payoff date' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
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
      <RelatedToolsCluster currentSlug="car-loan-emi-calculator" />
      <Footer />
    </>
  );
}