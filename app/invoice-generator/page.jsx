import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import InvoiceGenerator from '../../components/tools/InvoiceGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Free Invoice Generator Online – Create & Download PDF Invoice',
  description: 'Create professional invoices online free. Add items, GST, discount. Download as PDF instantly. No signup, no watermark, no limits. Works for freelancers & businesses.',
  keywords: [
    'invoice generator online free',
    'free invoice generator',
    'invoice maker online',
    'create invoice online free',
    'invoice generator india',
    'gst invoice generator free',
    'freelance invoice generator',
    'professional invoice maker',
    'pdf invoice generator free',
    'invoice generator no signup',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/invoice-generator` },
  openGraph: {
    title: 'Free Invoice Generator Online – Create PDF Invoice Instantly',
    description: 'Create professional invoices free. GST support, multiple currencies, PDF download. No signup.',
    url: `${SITE_CONFIG.url}/invoice-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: 'Is this invoice generator really free?',
    a: 'Yes — completely free. No subscription, no account required, no credit card, no hidden fees, and no watermark on downloaded invoices. You can create unlimited invoices and download them as PDF for free. The tool runs entirely in your browser.',
  },
  {
    q: 'How do I create a GST invoice online for free?',
    a: 'Open the invoice generator, fill in your company details including your GSTIN, add your client\'s GSTIN, enter your line items, enable the GST toggle and set your tax rate (typically 5%, 12%, 18%, or 28%), and click Download PDF. The invoice will include all GST-compliant fields.',
  },
  {
    q: 'Can I download the invoice as PDF?',
    a: 'Yes — click the "Download PDF" button and your browser\'s print dialog opens. Select "Save as PDF" as the destination. No third-party software is needed. The PDF preserves your invoice formatting exactly as you see it on screen.',
  },
  {
    q: 'Which currencies are supported?',
    a: 'The tool supports Indian Rupee (₹), US Dollar ($), Euro (€), British Pound (£), UAE Dirham (د.إ), and Singapore Dollar (S$). Select your currency from the dropdown before creating your invoice. The correct symbol appears throughout the invoice automatically.',
  },
  {
    q: 'Can I add discount to the invoice?',
    a: 'Yes — you can apply a percentage discount or a fixed amount discount. Enter the discount value and select "%" or the currency symbol from the discount field. The tool automatically calculates the discounted subtotal and applies tax on the discounted amount.',
  },
  {
    q: 'What invoice templates are available?',
    a: 'Four professional templates are available: Professional (blue), Minimal (black), Modern (purple), and Classic (amber). All templates are clean, business-appropriate, and print well on A4 paper. Switch between templates instantly with one click.',
  },
  {
    q: 'Is this tool GST compliant?',
    a: 'The tool includes all standard fields required for a GST-compliant tax invoice under Indian law: supplier GSTIN, recipient GSTIN, invoice number, invoice date, HSN/SAC code (in description), taxable value, GST rate, and total tax amount. For formal GST filing, we recommend having a CA verify your invoice format.',
  },
];

const INVOICE_TYPES = [
  { href: '/gst-invoice-generator',          icon: '🧾', name: 'GST Invoice Generator',        desc: 'GSTIN, CGST, SGST, IGST compliant' },
  { href: '/freelance-invoice-generator',    icon: '💼', name: 'Freelance Invoice Generator',   desc: 'For independent contractors and freelancers' },
  { href: '/proforma-invoice-generator',     icon: '📋', name: 'Proforma Invoice Generator',    desc: 'Pre-delivery invoice for advance payments' },
  { href: '/tax-invoice-generator',          icon: '📊', name: 'Tax Invoice Generator',         desc: 'Tax invoice with multiple rate support' },
  { href: '/service-invoice-generator',      icon: '⚙️', name: 'Service Invoice Generator',    desc: 'For service-based businesses' },
  { href: '/consulting-invoice-generator',   icon: '🤝', name: 'Consulting Invoice Generator',  desc: 'Hourly and project-based consulting' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free Invoice Generator Online',
      description: 'Create professional PDF invoices online for free. Supports GST, multiple currencies, discounts, and 4 templates. No signup, no watermark.',
      url: `${SITE_CONFIG.url}/invoice-generator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Create professional invoices online free',
        'Download as PDF with no watermark',
        'GST / tax calculation built in',
        'Percentage and fixed discount support',
        'Multiple currencies: INR, USD, EUR, GBP, AED, SGD',
        '4 professional invoice templates',
        'Unlimited invoices, no signup required',
        'GSTIN fields for buyer and seller',
        'Custom notes and terms',
        'Works on mobile and desktop',
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
        { '@type': 'ListItem', position: 1, name: 'Home',              item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Invoice Generator', item: `${SITE_CONFIG.url}/invoice-generator` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Create an Invoice Online Free',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter your details',     text: 'Add your business name, address, email, phone, and GSTIN.' },
        { '@type': 'HowToStep', position: 2, name: 'Add client details',     text: 'Enter your client\'s name, address, and GSTIN.' },
        { '@type': 'HowToStep', position: 3, name: 'Add line items',         text: 'Add your products or services with quantity and rate.' },
        { '@type': 'HowToStep', position: 4, name: 'Set tax and discount',   text: 'Enable GST and enter rate. Add discount if applicable.' },
        { '@type': 'HowToStep', position: 5, name: 'Download PDF',           text: 'Click Download PDF. Save as PDF from the print dialog.' },
      ],
    },
  ],
};

export default function InvoiceGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3 print:hidden">
          <AdBanner variant="top" />
        </div>

        {/* ── Header ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100 print:hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Invoice Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Invoice Generator Online – Create & Download PDF Invoice
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Create professional invoices in seconds. Add your business details, client
              info, line items, GST, and discount. Download as PDF instantly — no signup,
              no watermark, no limits. Free for freelancers and businesses.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free Forever',
                '🚫 No Signup Required',
                '🚫 No Watermark',
                '🧾 GST Compliant',
                '💱 6 Currencies',
                '🎨 4 Templates',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <InvoiceGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 print:hidden">
          <AdBanner variant="content" />
        </div>

        {/* ── SEO content ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14 print:hidden">

          {/* How to create */}
          <section aria-labelledby="how-to">
            <h2 id="how-to" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Create a Free Invoice Online — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', icon: '🏢', title: 'Your Details',     desc: 'Enter your business name, address, email, phone, and GSTIN in the top-left section.' },
                { step: '02', icon: '👤', title: 'Client Details',   desc: 'Fill in your client\'s name, address, and GSTIN in the Bill To section.' },
                { step: '03', icon: '📦', title: 'Add Line Items',   desc: 'Add products or services with description, quantity, and rate. Click + Add Line Item for more.' },
                { step: '04', icon: '🧮', title: 'Tax & Discount',   desc: 'Enable GST toggle and enter your rate. Add percentage or fixed discount if applicable.' },
                { step: '05', icon: '⬇️', title: 'Download PDF',    desc: 'Click Download PDF. In the print dialog, select Save as PDF and click Save.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-4 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900 text-sm">{s.title}</h3>
                  <p className="text-xs text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why use this */}
          <section aria-labelledby="why-use">
            <h2 id="why-use" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Why Use ToolStackHub Invoice Generator?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
              <p>
                Most free invoice generators online have a catch — they require an account,
                add a watermark, limit the number of invoices per month, or push you toward
                a paid plan. Our tool has none of these restrictions. It is genuinely free,
                with no account, no watermark, no monthly limit, and no data sent to any server.
                Everything you type stays in your browser.
              </p>
              <p>
                For Indian freelancers and small businesses, the GST compliance features are
                particularly important. The tool includes GSTIN fields for both parties, supports
                all GST rates (5%, 12%, 18%, 28%), and calculates tax on the discounted amount
                — following the correct order of operations under GST rules. You can also use
                our{' '}
                <Link href="/percentage-calculator-online" className="text-brand-700 hover:underline font-medium">
                  percentage calculator
                </Link>{' '}
                to verify tax calculations, or the{' '}
                <Link href="/emi-calculator" className="text-brand-700 hover:underline font-medium">
                  EMI calculator
                </Link>{' '}
                if your client is paying in installments.
              </p>
            </div>

            {/* Feature comparison */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">ToolStackHub</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Invoice Simple</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">Zoho Invoice</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Wave</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'No signup required',        us: '✅',        f1: '❌ Required', f2: '❌ Required', f3: '❌ Required' },
                    { feature: 'No watermark on PDF',       us: '✅',        f1: '❌ Paid only', f2: '✅',          f3: '✅'          },
                    { feature: 'Unlimited invoices free',   us: '✅',        f1: '❌ Limited',  f2: '❌ 5/month',  f3: '✅'          },
                    { feature: 'GST / tax calculation',     us: '✅',        f1: '✅',          f2: '✅',          f3: '✅'          },
                    { feature: 'Discount support',          us: '✅ % + ₹',  f1: '✅',          f2: '✅',          f3: '✅'          },
                    { feature: 'Multiple currencies',       us: '✅ 6',      f1: '✅',          f2: '✅',          f3: '✅'          },
                    { feature: 'No data uploaded to server',us: '✅',        f1: '❌',          f2: '❌',          f3: '❌'          },
                    { feature: 'Works on mobile',           us: '✅',        f1: '⚠️ App only', f2: '✅',          f3: '✅'          },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-medium text-surface-900">{row.feature}</td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-700">{row.us}</td>
                      <td className="px-4 py-3 text-center text-surface-500 text-xs">{row.f1}</td>
                      <td className="px-4 py-3 text-center text-surface-500 text-xs">{row.f2}</td>
                      <td className="px-4 py-3 text-center text-surface-500 text-xs">{row.f3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* GST invoice guide */}
          <section aria-labelledby="gst-guide">
            <h2 id="gst-guide" className="font-display font-bold text-2xl text-surface-900 mb-4">
              GST Invoice Requirements in India — What Must Be Included
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Under the GST Act, a tax invoice must contain specific mandatory fields.
              Our invoice generator includes all of them:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🏢', title: 'Supplier Details',             desc: 'Name, address, and GSTIN of the supplier issuing the invoice.' },
                { icon: '👤', title: 'Recipient Details',            desc: 'Name, address, and GSTIN of the buyer (for B2B transactions).' },
                { icon: '#️⃣', title: 'Invoice Number & Date',        desc: 'Unique sequential invoice number and the date of issue.' },
                { icon: '📦', title: 'Description of Goods/Services',desc: 'Description, HSN/SAC code, quantity, unit, and value.' },
                { icon: '💰', title: 'Taxable Value',                desc: 'Value of supply before applying GST — the tax base amount.' },
                { icon: '🧮', title: 'GST Rate & Amount',           desc: 'Rate of CGST/SGST (intra-state) or IGST (inter-state) and the tax amount.' },
                { icon: '✅', title: 'Total Invoice Value',          desc: 'Total amount payable including all taxes.' },
                { icon: '✍️', title: 'Signature',                    desc: 'Physical or digital signature of the authorized signatory.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              <strong>Note:</strong> Businesses with turnover below ₹1.5 crore can use a simplified GST invoice without HSN codes for goods. Service providers must include SAC codes. Businesses above ₹5 crore must issue e-invoices through the GST portal (IRP). This tool generates the invoice format — for e-invoicing compliance, upload to the IRP separately.
            </div>
          </section>

          {/* Invoice types */}
          <section aria-labelledby="invoice-types">
            <h2 id="invoice-types" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Invoice Generator by Type
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INVOICE_TYPES.map(t => (
                <Link key={t.href} href={t.href}
                  className="group flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:bg-brand-50 transition-all">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div>
                    <div className="font-display font-bold text-surface-900 group-hover:text-brand-700 text-sm mb-1">{t.name}</div>
                    <div className="text-xs text-surface-500">{t.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Invoicing tips */}
          <section aria-labelledby="tips">
            <h2 id="tips" className="font-display font-bold text-2xl text-surface-900 mb-5">
              7 Invoicing Tips Every Freelancer and Small Business Should Know
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🔢', title: 'Always Use Sequential Invoice Numbers',      desc: 'Never skip or reuse invoice numbers. GST audits require a continuous sequential trail. Start with INV-001 and never go back. Our tool auto-generates a number — adjust it to fit your sequence.' },
                { icon: '⏰', title: 'Send Invoices Immediately After Delivery',   desc: 'Every day of delay is a day added to your payment cycle. Send the invoice the same day you deliver work. Late invoicing is the single biggest cause of delayed payments in freelancing.' },
                { icon: '📅', title: 'Always Include a Clear Due Date',            desc: 'Vague terms like "Net 30" are less effective than a specific date: "Payment due by April 15, 2026." Specific dates create clearer accountability and reduce the ambiguity that clients use to delay payment.' },
                { icon: '💬', title: 'Include Your Payment Methods',               desc: 'Add your bank account details, UPI ID, or payment link in the notes section. Every friction point in the payment process adds days to your receivable cycle. Make it as easy as possible to pay you.' },
                { icon: '📌', title: 'Reference the Work in the Description',      desc: 'Instead of "Design Services," write "Website redesign for ABC Corp — Home, About, and Contact pages per brief dated March 10." Clear descriptions prevent disputes and make approvals faster.' },
                { icon: '🔄', title: 'Follow Up Systematically',                   desc: 'Send a polite reminder 3 days before due date, on the due date, and 3 days after. Most delayed payments are due to oversight, not bad faith. A gentle reminder is usually all it takes.' },
                { icon: '📂', title: 'Keep Copies of All Invoices',               desc: 'Save a PDF of every invoice you send. GST audits can require invoice records going back 6 years. Create a folder for each financial year: FY2025-26, FY2026-27, and save invoices by client.' },
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

          {/* FAQ */}
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

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Free Invoice Generators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/gst-invoice-generator',           label: 'GST Invoice Generator Free'        },
                { href: '/freelance-invoice-generator',     label: 'Freelance Invoice Generator'       },
                { href: '/proforma-invoice-generator',      label: 'Proforma Invoice Generator'        },
                { href: '/tax-invoice-generator',           label: 'Tax Invoice Generator Online'      },
                { href: '/service-invoice-generator',       label: 'Service Invoice Generator'         },
                { href: '/consulting-invoice-generator',    label: 'Consulting Invoice Generator'      },
                { href: '/invoice-generator-india',         label: 'Invoice Generator India'           },
                { href: '/invoice-maker-online-free',       label: 'Invoice Maker Online Free'         },
                { href: '/create-invoice-online-free',      label: 'Create Invoice Online Free'        },
                { href: '/invoice-generator-no-signup',     label: 'Invoice Generator No Signup'       },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">🧾</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              Related Free Business Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/percentage-calculator-online', icon: '📊', label: 'Percentage Calculator',   desc: 'Calculate GST percentage and discount amounts' },
                { href: '/emi-calculator',               icon: '🧮', label: 'EMI Calculator',          desc: 'Calculate installment payments for large invoices' },
                { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',     desc: 'Count words in invoice descriptions and terms' },
                { href: '/qr-code-generator-online',     icon: '📱', label: 'QR Code Generator',      desc: 'Generate QR codes for UPI payment links' },
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