import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import GSTCalculator from '../../components/tools/GSTCalculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'GST Calculator Online Free – Calculate GST Amount Instantly',
  description: 'Free GST calculator online. Calculate GST for all rates (3%, 5%, 12%, 18%, 28%). Add or remove GST, CGST/SGST/IGST breakdown, intra & inter-state. No signup.',
  keywords: [
    'gst calculator', 'gst calculator online', 'gst calculator india',
    'gst calculator online free', 'calculate gst online', 'gst amount calculator',
    'cgst sgst calculator', 'igst calculator', 'gst inclusive exclusive calculator',
    'gst calculator 18 percent', 'remove gst from amount', 'add gst calculator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/gst-calculator` },
  openGraph: {
    title: 'GST Calculator Online Free – CGST, SGST, IGST Breakdown',
    description: 'Calculate GST instantly. All rates, CGST/SGST/IGST split, intra/inter-state. Free, no signup.',
    url: `${SITE_CONFIG.url}/gst-calculator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: 'How do I calculate GST on an amount?',
    a: 'To add GST: GST Amount = Original Amount × (GST Rate ÷ 100). Total Amount = Original Amount + GST Amount. Example: ₹10,000 at 18% GST → GST = ₹1,800 → Total = ₹11,800. To remove GST from a GST-inclusive amount: Original Amount = Total ÷ (1 + GST Rate ÷ 100). Example: ₹11,800 inclusive of 18% GST → Original = ₹11,800 ÷ 1.18 = ₹10,000.',
  },
  {
    q: 'What is the difference between CGST, SGST, and IGST?',
    a: 'CGST (Central GST) and SGST (State GST) apply to intra-state transactions — when the buyer and seller are in the same state. Each is half the total GST rate. For 18% GST, CGST = 9% and SGST = 9%. IGST (Integrated GST) applies to inter-state transactions — when buyer and seller are in different states, or for imports/exports. IGST equals the full GST rate (18% in this example). The government then distributes IGST between the centre and the destination state.',
  },
  {
    q: 'What are the GST rates in India in 2026?',
    a: 'India has six GST slabs: 0% (essential items — basic food, healthcare, education), 3% (gold, silver, precious stones), 5% (economy hotels, restaurants without AC, basic transport, essential packaged food), 12% (processed food, business class hotels, books, medicines), 18% (IT services, telecom, most professional services, restaurant in AC premises), and 28% (luxury goods — premium cars, tobacco, cement, large appliances, aerated drinks).',
  },
  {
    q: 'How do I remove GST from an amount that includes GST?',
    a: 'To extract the original price from a GST-inclusive amount, use: Original Price = GST-Inclusive Amount ÷ (1 + GST Rate ÷ 100). Example: A product costs ₹5,900 including 18% GST. Original price = ₹5,900 ÷ 1.18 = ₹5,000. GST amount = ₹5,900 − ₹5,000 = ₹900. Use the "Remove GST" mode in our calculator to do this instantly.',
  },
  {
    q: 'What is the GST rate on services in India?',
    a: 'Most services in India attract 18% GST. This includes IT and software services, professional services (consulting, legal, accounting), telecom services, financial services, digital marketing, and most B2B services. Some services have different rates: restaurants (5%), healthcare (0%), construction (5% or 12% depending on the project), and insurance (18%). Export of services is zero-rated under GST with no tax payable.',
  },
  {
    q: 'Is GST calculated on the discounted price or original price?',
    a: 'Under GST rules, if a discount is mentioned on the invoice at the time of sale, GST is calculated on the discounted (net) price — not the original price. If a post-sale discount is given (like a retrospective rebate), GST must be reversed using a credit note. Example: Product MRP ₹10,000, 10% discount on invoice. Taxable value = ₹9,000. GST at 18% = ₹1,620 (not ₹1,800).',
  },
  {
    q: 'Who needs to register for GST in India?',
    a: 'GST registration is mandatory for: businesses with annual turnover above ₹40 lakh (goods) or ₹20 lakh (services) in normal states. Threshold is ₹20 lakh for goods and ₹10 lakh for services in special category states. Also mandatory for: inter-state suppliers regardless of turnover, e-commerce operators, input service distributors, and those paying tax under reverse charge mechanism. Voluntary registration is also allowed below threshold.',
  },
];

const GST_RATES_TABLE = [
  { rate: '0%',  examples: 'Fresh fruits, vegetables, milk, eggs, bread, education services, healthcare, books',   applicable: 'Essential goods and services' },
  { rate: '3%',  examples: 'Gold, silver, diamonds, precious stones, jewellery',                                    applicable: 'Precious metals and stones' },
  { rate: '5%',  examples: 'Sugar, tea, coffee, edible oil, domestic LPG, medicines, economy hotels, Railways AC', applicable: 'Essential processed items' },
  { rate: '12%', examples: 'Frozen meat, butter, cheese, fruit juices, computers, mobile phones, business hotels',  applicable: 'Standard processed goods' },
  { rate: '18%', examples: 'IT services, telecom, restaurants (AC), financial services, hotel above ₹7,500/night', applicable: 'Most services & mid-range goods' },
  { rate: '28%', examples: 'Luxury cars, tobacco, pan masala, cement, paint, ACs, dishwashers, aerated drinks',    applicable: 'Luxury & sin goods' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'GST Calculator Online',
      description: 'Free online GST calculator for India. Calculate GST for all rates with CGST, SGST, and IGST breakdown. Add or remove GST, intra-state and inter-state calculations.',
      url: `${SITE_CONFIG.url}/gst-calculator`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Calculate GST for all rates: 3%, 5%, 12%, 18%, 28%',
        'Add GST to amount (exclusive)',
        'Remove GST from amount (inclusive)',
        'CGST and SGST breakdown for intra-state',
        'IGST calculation for inter-state',
        'Copy result to clipboard',
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
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Calculators',    item: `${SITE_CONFIG.url}/calculators` },
        { '@type': 'ListItem', position: 3, name: 'GST Calculator', item: `${SITE_CONFIG.url}/gst-calculator` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate GST Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter amount',       text: 'Type the amount in the input field.' },
        { '@type': 'HowToStep', position: 2, name: 'Select GST rate',    text: 'Click the applicable rate: 3%, 5%, 12%, 18%, or 28%.' },
        { '@type': 'HowToStep', position: 3, name: 'Choose mode',        text: 'Select Add GST (exclusive) or Remove GST (inclusive).' },
        { '@type': 'HowToStep', position: 4, name: 'Select transaction', text: 'Choose Intra-State (CGST+SGST) or Inter-State (IGST).' },
        { '@type': 'HowToStep', position: 5, name: 'View breakdown',     text: 'See base amount, CGST/SGST or IGST, and total instantly.' },
      ],
    },
  ],
};

export default function GSTCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        {/* ── Header ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/emi-calculator" className="hover:text-brand-600 text-brand-600">Calculators</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">GST Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              GST Calculator Online Free – Calculate GST Amount Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate GST for all rates — 3%, 5%, 12%, 18%, 28%. Add GST to a price
              or extract GST from a GST-inclusive amount. Get CGST/SGST breakdown for
              intra-state and IGST for inter-state transactions. Free, instant, no signup.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ All GST Rates', '🔄 Add & Remove GST', '🏙️ CGST + SGST', '🌏 IGST', '📋 Copy Result', '⚡ Instant'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <GSTCalculator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        {/* ── SEO content ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* How to calculate */}
          <section aria-labelledby="how-to-calculate">
            <h2 id="how-to-calculate" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How to Calculate GST – Formula with Examples
            </h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>GST calculation uses two simple formulas depending on whether the amount you have is exclusive (before tax) or inclusive (after tax).</p>

              {/* Formula cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-900 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-3">Add GST (Exclusive Amount)</div>
                  <div className="font-mono text-emerald-300 text-sm leading-7">
                    <div>GST = Amount × Rate ÷ 100</div>
                    <div>Total = Amount + GST</div>
                    <div className="mt-3 text-surface-400 text-xs">Example: ₹10,000 at 18%</div>
                    <div className="text-amber-300">GST = 10,000 × 18 ÷ 100 = ₹1,800</div>
                    <div className="text-emerald-300 font-bold">Total = ₹11,800</div>
                  </div>
                </div>
                <div className="bg-surface-900 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-violet-300 mb-3">Remove GST (Inclusive Amount)</div>
                  <div className="font-mono text-emerald-300 text-sm leading-7">
                    <div>{'Original = Total ÷ (1 + Rate÷100)'}</div>
                    <div>GST = Total − Original</div>
                    <div className="mt-3 text-surface-400 text-xs">Example: ₹11,800 incl. 18%</div>
                    <div className="text-amber-300">Original = 11,800 ÷ 1.18 = ₹10,000</div>
                    <div className="text-emerald-300 font-bold">GST = ₹1,800</div>
                  </div>
                </div>
              </div>

              {/* CGST/SGST/IGST explanation */}
              <div className="mt-2 p-5 bg-white border border-surface-200 rounded-2xl">
                <h3 className="font-semibold text-surface-900 mb-3">CGST, SGST, and IGST — How the Split Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                    <div className="font-bold text-blue-900 mb-1">CGST</div>
                    <div className="text-blue-700 text-xs">Central GST — goes to the Central Government. Always equals SGST. For 18% GST: CGST = 9%.</div>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <div className="font-bold text-emerald-900 mb-1">SGST</div>
                    <div className="text-emerald-700 text-xs">State GST — goes to the State Government. Always equals CGST. For 18% GST: SGST = 9%.</div>
                  </div>
                  <div className="p-3 bg-violet-50 border border-violet-100 rounded-xl">
                    <div className="font-bold text-violet-900 mb-1">IGST</div>
                    <div className="text-violet-700 text-xs">Integrated GST — applies to inter-state sales. Full rate collected by Centre, then distributed to destination state.</div>
                  </div>
                </div>
                <p className="text-xs text-surface-500 mt-3">
                  Rule: Same state supplier and buyer → CGST + SGST. Different state supplier and buyer → IGST only.
                </p>
              </div>
            </div>
          </section>

          {/* GST rates table */}
          <section aria-labelledby="gst-rates">
            <h2 id="gst-rates" className="font-display font-bold text-2xl text-surface-900 mb-4">
              GST Rate List in India 2026 – Complete Slab Guide
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              India has a multi-tier GST structure with six slabs. Use this as a quick reference to find the correct rate for your product or service before calculating.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl w-16">Rate</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Applicable To</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {GST_RATES_TABLE.map((row, i) => (
                    <tr key={row.rate} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3">
                        <span className="font-black text-brand-700 text-base">{row.rate}</span>
                      </td>
                      <td className="px-4 py-3 font-medium text-surface-800">{row.applicable}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs leading-relaxed">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              * GST rates are subject to change by the GST Council. Verify with your CA or the official GST portal for the latest rates.
            </p>
          </section>

          {/* GST calculation examples */}
          <section aria-labelledby="examples">
            <h2 id="examples" className="font-display font-bold text-2xl text-surface-900 mb-5">
              GST Calculation Examples — Common Scenarios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'IT Services Invoice', amount: '₹50,000', rate: '18%', gst: '₹9,000', total: '₹59,000', type: 'CGST ₹4,500 + SGST ₹4,500', txn: 'Intra-state' },
                { title: 'Restaurant Bill (AC)', amount: '₹2,000', rate: '18%', gst: '₹360', total: '₹2,360', type: 'CGST ₹180 + SGST ₹180', txn: 'Intra-state' },
                { title: 'Mobile Phone Purchase', amount: '₹30,000', rate: '12%', gst: '₹3,600', total: '₹33,600', type: 'IGST ₹3,600', txn: 'Inter-state' },
                { title: 'Gold Jewellery', amount: '₹1,00,000', rate: '3%', gst: '₹3,000', total: '₹1,03,000', type: 'CGST ₹1,500 + SGST ₹1,500', txn: 'Intra-state' },
                { title: 'Cement (50 kg bag)', amount: '₹400', rate: '28%', gst: '₹112', total: '₹512', type: 'CGST ₹56 + SGST ₹56', txn: 'Intra-state' },
                { title: 'Economy Hotel Stay', amount: '₹2,500', rate: '12%', gst: '₹300', total: '₹2,800', type: 'CGST ₹150 + SGST ₹150', txn: 'Intra-state' },
              ].map(ex => (
                <div key={ex.title} className="p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 mb-3">{ex.title}</div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between"><span className="text-surface-500">Base Amount</span><span className="font-medium">{ex.amount}</span></div>
                    <div className="flex justify-between"><span className="text-surface-500">GST Rate</span><span className="font-medium">{ex.rate}</span></div>
                    <div className="flex justify-between"><span className="text-surface-500">Breakdown</span><span className="font-medium text-amber-700 text-xs">{ex.type}</span></div>
                    <div className="flex justify-between pt-1.5 border-t border-surface-100">
                      <span className="font-bold text-surface-800">Total</span>
                      <span className="font-black text-brand-700">{ex.total}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Intra vs inter state */}
          <section aria-labelledby="intra-inter">
            <h2 id="intra-inter" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Intra-State vs Inter-State GST — Key Differences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h3 className="font-display font-bold text-blue-900 text-lg mb-3">🏙️ Intra-State Supply</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Supplier and buyer in the <strong>same state</strong></span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Tax = CGST + SGST (split equally)</span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Both Centre and State collect tax</span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Example: Mumbai seller, Mumbai buyer</span></div>
                  <div className="mt-2 p-2 bg-blue-100 rounded-lg text-xs">
                    18% GST → CGST 9% + SGST 9%
                  </div>
                </div>
              </div>
              <div className="p-5 bg-violet-50 border-2 border-violet-200 rounded-2xl">
                <h3 className="font-display font-bold text-violet-900 text-lg mb-3">🌏 Inter-State Supply</h3>
                <div className="space-y-2 text-sm text-violet-800">
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Supplier and buyer in <strong>different states</strong></span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Tax = IGST only (no split)</span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Centre collects, distributes to destination state</span></div>
                  <div className="flex gap-2"><span className="shrink-0">✓</span><span>Example: Mumbai seller, Delhi buyer</span></div>
                  <div className="mt-2 p-2 bg-violet-100 rounded-lg text-xs">
                    18% GST → IGST 18% (full rate)
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              <strong>Important for ITC:</strong> Businesses can claim Input Tax Credit on CGST paid against CGST liability, SGST against SGST liability, and IGST against IGST, CGST, or SGST liability (in that order). Cross-utilization between CGST and SGST is not permitted.
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — GST Calculator
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More GST Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/gst-calculator-18-percent',    label: 'GST Calculator 18%'              },
                { href: '/gst-calculator-28-percent',    label: 'GST Calculator 28%'              },
                { href: '/gst-calculator-12-percent',    label: 'GST Calculator 12%'              },
                { href: '/gst-calculator-5-percent',     label: 'GST Calculator 5%'               },
                { href: '/cgst-sgst-calculator',         label: 'CGST SGST Calculator'            },
                { href: '/igst-calculator',              label: 'IGST Calculator'                 },
                { href: '/remove-gst-from-amount',       label: 'Remove GST from Amount'          },
                { href: '/gst-inclusive-exclusive-calculator', label: 'GST Inclusive Exclusive Calculator' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
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
                { href: '/invoice-generator',            icon: '🧾', label: 'Invoice Generator',           desc: 'Create GST invoices with auto tax calculation' },
                { href: '/emi-calculator',               icon: '🧮', label: 'EMI Calculator',              desc: 'Calculate loan EMI for home, car, personal loans' },
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',       desc: 'Calculate percentages, discounts, and margins' },
                { href: '/sip-calculator',               icon: '📈', label: 'SIP Calculator',              desc: 'Calculate mutual fund SIP returns' },
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