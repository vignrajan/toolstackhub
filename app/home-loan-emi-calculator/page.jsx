import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import EMICalculator from '../../components/tools/EMICalculator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Home Loan EMI Calculator Free – Housing Loan EMI 2026',
  description: 'Calculate home loan EMI instantly. Compare SBI, HDFC, ICICI rates. Amortization schedule, prepayment savings table, tax benefits guide. Free, no signup.',
  keywords: ['home loan emi calculator', 'housing loan emi calculator', 'home loan emi calculator india', 'sbi home loan emi', 'hdfc home loan emi', 'home loan calculator 2026'],
  alternates: { canonical: `${SITE_CONFIG.url}/home-loan-emi-calculator` },
  openGraph: {
    title: 'Home Loan EMI Calculator Free 2026 – Housing Loan EMI',
    description: 'Calculate your home loan EMI with amortization schedule. Compare all bank rates. Free, no signup.',
    url: `${SITE_CONFIG.url}/home-loan-emi-calculator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Loan EMI Calculator Free 2026 – Housing Loan EMI',
    description: 'Calculate home loan EMI instantly. Compare SBI, HDFC, ICICI rates. Amortization schedule, prepayment savings table, tax benefits guide. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is the current home loan interest rate in 2026?', a: 'Home loan interest rates in India range from 8.35% to 9.65% per annum in 2026. SBI offers rates starting at 8.50%, HDFC Bank at 8.70%, ICICI Bank at 8.75%, and Bank of Baroda at 8.40%. Your actual rate depends on your CIBIL score — a score above 750 typically qualifies for the lowest available rate.' },
  { q: 'How much home loan can I get on my salary?', a: 'Banks typically approve home loans where the EMI does not exceed 40–50% of your monthly take-home salary. For a monthly salary of ₹1 lakh, you can typically borrow ₹40–55 lakh at current rates for a 20-year tenure. Banks use the FOIR (Fixed Obligation to Income Ratio) to determine eligibility.' },
  { q: 'What is the maximum home loan tenure?', a: 'Most banks offer home loan tenure up to 30 years. The maximum tenure is limited to your age at loan maturity — banks typically require the loan to be repaid by age 60 or 65. Longer tenures reduce monthly EMI but dramatically increase total interest paid.' },
  { q: 'Can I prepay my home loan without penalty?', a: 'Yes — RBI mandates that banks cannot charge prepayment penalties on floating-rate home loans. Most home loans today are on floating rates, so you can make partial or full prepayments at any time without charges. Even ₹50,000 per year in prepayments can reduce a 20-year loan by 3 years and save ₹7–8 lakh in interest.' },
  { q: 'What documents are required for a home loan?', a: 'Standard documents: Identity proof (Aadhaar, PAN), Address proof, Income proof (salary slips, Form 16, ITR for 2–3 years), Bank statements (6 months), Property documents (sale agreement, approved plan, NOC from builder), Employment proof. Self-employed applicants need GST returns and CA-certified financials.' },
  { q: 'Is it better to take a home loan from a bank or NBFC?', a: 'Banks offer lower rates (8.35–9.65%) but stricter eligibility. NBFCs like LIC Housing Finance approve loans for lower CIBIL scores and informal income but charge higher rates. If you have strong credit, go with a bank. If self-employed or moderate credit score, an NBFC may be more accessible.' },
  { q: 'What is the difference between fixed and floating home loan rates?', a: 'Fixed-rate loans lock your rate for the entire tenure — EMI never changes. Floating-rate loans change with the RBI repo rate. Fixed rates are typically 1–2% higher. Most financial advisors recommend floating-rate loans since rates tend to fall over long periods, and there is no prepayment penalty.' },
];

const BANK_RATES = [
  { bank: 'Bank of Baroda', rate: '8.40%', maxTenure: '30 yrs', maxAmount: '₹15 Cr', processing: '0.25–0.50%' },
  { bank: 'SBI',            rate: '8.50%', maxTenure: '30 yrs', maxAmount: '₹3 Cr',  processing: '0–0.35%'   },
  { bank: 'PNB',            rate: '8.45%', maxTenure: '30 yrs', maxAmount: '₹3 Cr',  processing: '0.35%'     },
  { bank: 'LIC HFL',        rate: '8.50%', maxTenure: '30 yrs', maxAmount: '₹15 Cr', processing: '0.25%'     },
  { bank: 'HDFC Bank',      rate: '8.70%', maxTenure: '30 yrs', maxAmount: '₹10 Cr', processing: '0.50%'     },
  { bank: 'ICICI Bank',     rate: '8.75%', maxTenure: '30 yrs', maxAmount: '₹5 Cr',  processing: '0.50%'     },
  { bank: 'Axis Bank',      rate: '8.75%', maxTenure: '30 yrs', maxAmount: '₹5 Cr',  processing: '1%'        },
  { bank: 'Kotak Bank',     rate: '8.75%', maxTenure: '20 yrs', maxAmount: '₹5 Cr',  processing: '0.50%'     },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Home Loan EMI Calculator', description: 'Free home loan EMI calculator with amortization schedule and bank rate comparison.', url: `${SITE_CONFIG.url}/home-loan-emi-calculator`, applicationCategory: 'FinanceApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'EMI Calculator', item: `${SITE_CONFIG.url}/emi-calculator` }, { '@type': 'ListItem', position: 3, name: 'Home Loan EMI', item: `${SITE_CONFIG.url}/home-loan-emi-calculator` }] },
  ],
};

export default function HomeLoanEMIPage() {
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
                <li><Link href="/emi-calculator" className="hover:text-brand-600 transition-colors text-brand-600">EMI Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Home Loan EMI</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Home Loan EMI Calculator – Free Housing Loan EMI Calculator 2026
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your exact home loan EMI in seconds. See your full amortization
              schedule, compare rates across all major banks, discover prepayment savings,
              and understand tax benefits. Free, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🏠 Home Loan Specific', '📊 Amortization Schedule', '🏦 8 Banks Compared', '💰 Prepayment Calculator', '🧾 Tax Benefits Guide'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
            <span className="text-xl shrink-0">💡</span>
            <div className="text-sm text-emerald-800">
              <strong>Home loan tip:</strong> Set interest rate between <strong>8.35% – 9.65%</strong> and tenure to <strong>15–30 years</strong>. Banks finance up to 90% for loans under ₹30L, 80% for ₹30–75L, and 75% for above ₹75L. Enter your <em>loan amount</em> — not the property price.
            </div>
          </div>
          <EMICalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Home Loan EMI — What Every Borrower Must Know Before Applying
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A home loan is the largest financial commitment most Indian families make — and a single percentage point difference in interest rate can mean paying ₹8–15 lakh more over the loan lifetime. Using a home loan EMI calculator before applying lets you compare offers objectively, negotiate from a position of knowledge, and choose the right combination of loan amount, tenure, and lender.</p>
              <p>Our calculator uses the standard reducing balance method — the same formula used by every RBI-regulated bank and NBFC in India. Each EMI consists of a principal component and an interest component. In the early months, 70–80% of your EMI goes toward interest. By the final years, 80–90% goes toward principal. This is why prepayment in the first 5 years has dramatically more impact than prepayment in the last 5 years.</p>
              <p>Use our <Link href="/percentage-calculator-online" className="text-brand-700 hover:underline font-medium">percentage calculator</Link> to determine the right down payment percentage, or the <Link href="/age-calculator-online" className="text-brand-700 hover:underline font-medium">age calculator</Link> to ensure your loan tenure ends comfortably before retirement.</p>
            </div>
          </section>

          {/* Steps */}
          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Calculate Home Loan EMI — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🏠', title: 'Enter Loan Amount',       desc: 'Enter the loan amount — typically 75–90% of property value depending on property cost. Not the property price.' },
                { step: '02', icon: '📊', title: 'Enter Interest Rate',     desc: 'Enter the annual rate from your bank offer. Use the comparison table below for current rates across all major banks.' },
                { step: '03', icon: '📅', title: 'Set Tenure',              desc: '15–25 years offers the best balance. Longer tenure = lower EMI but much higher total interest paid over the loan life.' },
                { step: '04', icon: '✅', title: 'View EMI + Amortization', desc: 'Your monthly EMI, total interest, and complete month-by-month schedule showing principal, interest, and balance appear instantly.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bank rates */}
          <section aria-labelledby="bank-rates">
            <h2 id="bank-rates" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Home Loan Interest Rates — All Major Banks (March 2026)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">Rates shown are starting rates for applicants with CIBIL score 750+. Enter these directly in the calculator above to compare your EMI across lenders.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Bank / Lender</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Interest Rate</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Max Tenure</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Max Amount</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {BANK_RATES.map((row, i) => (
                    <tr key={row.bank} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.bank}</td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-700">{row.rate}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{row.maxTenure}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{row.maxAmount}</td>
                      <td className="px-4 py-3 text-center text-surface-600">{row.processing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Indicative rates as of March 2026. Verify with your bank. Rates change with RBI repo rate revisions.</p>
          </section>

          {/* EMI by amount table */}
          <section aria-labelledby="emi-table">
            <h2 id="emi-table" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Home Loan EMI Table — Common Loan Amounts at 8.5% p.a.
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Loan Amount</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">10 Yr EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">15 Yr EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">20 Yr EMI</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">30 Yr EMI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { amt: '₹20 Lakh', y10: '₹24,797', y15: '₹19,696', y20: '₹17,356', y30: '₹15,378' },
                    { amt: '₹30 Lakh', y10: '₹37,195', y15: '₹29,543', y20: '₹26,035', y30: '₹23,067' },
                    { amt: '₹50 Lakh', y10: '₹61,992', y15: '₹49,239', y20: '₹43,391', y30: '₹38,446' },
                    { amt: '₹75 Lakh', y10: '₹92,988', y15: '₹73,858', y20: '₹65,087', y30: '₹57,669' },
                    { amt: '₹1 Crore', y10: '₹1,23,984',y15: '₹98,477', y20: '₹86,782', y30: '₹76,892' },
                  ].map((row, i) => (
                    <tr key={row.amt} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{row.amt}</td>
                      <td className="px-4 py-3 text-right text-surface-600">{row.y10}</td>
                      <td className="px-4 py-3 text-right text-brand-700 font-medium">{row.y15}</td>
                      <td className="px-4 py-3 text-right text-surface-600">{row.y20}</td>
                      <td className="px-4 py-3 text-right text-surface-500">{row.y30}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Prepayment */}
          <section aria-labelledby="prepayment">
            <h2 id="prepayment" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Prepayment Impact — How Much Can You Save on a ₹50 Lakh Loan?
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Annual Prepayment</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Tenure Reduced To</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Interest Saved</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Years Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prepay: '₹25,000/yr',   tenure: '18 yrs 4 mo', saved: '₹4.2 lakh',  yrs: '1 yr 8 mo' },
                    { prepay: '₹50,000/yr',   tenure: '17 yrs',      saved: '₹7.8 lakh',  yrs: '3 yrs'     },
                    { prepay: '₹1,00,000/yr', tenure: '14 yrs 8 mo', saved: '₹14.6 lakh', yrs: '5 yrs 4 mo'},
                    { prepay: '₹2,00,000/yr', tenure: '11 yrs 6 mo', saved: '₹24.1 lakh', yrs: '8 yrs 6 mo'},
                  ].map((row, i) => (
                    <tr key={row.prepay} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.prepay}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{row.tenure}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{row.saved}</td>
                      <td className="px-4 py-3 text-right text-brand-700 font-medium">{row.yrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-800">
              <strong>Key insight:</strong> Even ₹50,000/year extra cuts a 20-year loan by 3 years and saves ₹7.8 lakh.
              RBI mandates zero prepayment penalty on floating-rate home loans — use every surplus to prepay.
            </div>
          </section>

          {/* Tax benefits */}
          <section aria-labelledby="tax-benefits">
            <h2 id="tax-benefits" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Home Loan Tax Benefits in India (2026)
            </h2>
            <div className="space-y-3">
              {[
                { section: 'Section 24(b)', benefit: 'Interest Deduction',  limit: '₹2,00,000/yr', detail: 'Deduction on home loan interest for self-occupied property. For let-out property, entire interest is deductible with no upper limit.' },
                { section: 'Section 80C',  benefit: 'Principal Deduction',  limit: '₹1,50,000/yr', detail: 'Deduction on principal repayment, stamp duty, and registration charges. Shared with PPF, ELSS, EPF under the ₹1.5L limit.' },
                { section: 'Section 80EEA',benefit: 'Affordable Housing',   limit: '₹1,50,000/yr', detail: 'Additional deduction for affordable housing loans. Stamp duty value ≤ ₹45L. Loan sanctioned between April 2019–March 2022.' },
              ].map(t => (
                <div key={t.section} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <div className="shrink-0">
                    <div className="text-xs font-black text-brand-700 bg-brand-50 border border-brand-200 px-2 py-1 rounded-lg whitespace-nowrap">{t.section}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="font-semibold text-surface-900">{t.benefit}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Up to {t.limit}</span>
                    </div>
                    <p className="text-sm text-surface-500 leading-relaxed">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Home Loan EMI
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
                { href: '/emi-calculator',               label: 'EMI Calculator — All Loans'        },
                { href: '/car-loan-emi-calculator',      label: 'Car Loan EMI Calculator'           },
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
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',  desc: 'Calculate down payment % and loan-to-value ratio' },
                { href: '/age-calculator-online',        icon: '🎂', label: 'Age Calculator',         desc: 'Plan loan tenure to end before retirement age' },
                { href: '/countdown-timer-online',       icon: '⏳', label: 'Countdown Timer',        desc: 'Count down to your loan payoff milestone' },
                { href: '/qr-code-generator-online',     icon: '📱', label: 'QR Code Generator',      desc: 'Generate QR codes for UPI payment links' },
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
      <RelatedToolsCluster currentSlug="home-loan-emi-calculator" />
      <Footer />
    </>
  );
}