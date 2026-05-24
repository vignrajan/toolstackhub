import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InvoiceGenerator from '../../components/tools/InvoiceGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Free Invoice Generator – Create GST Invoice Online',
  description: 'Create professional GST invoices free online. CGST/SGST/IGST, PDF download, no signup, no watermark. For freelancers and small businesses in India.',
  keywords: [
    'invoice generator online free', 'free invoice maker', 'gst invoice generator',
    'create invoice online free', 'invoice generator india', 'free invoice generator no login',
    'online bill generator', 'invoice generator pdf', 'gst invoice maker free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/invoice-generator` },
  openGraph: {
    title: 'Free Invoice Generator – Create GST Invoice Online',
    description: 'Create professional GST invoices free. PDF download, no signup, no watermark. Works for freelancers and businesses in India.',
    url: `${SITE_CONFIG.url}/invoice-generator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator – Create GST Invoice Online',
    description: 'Create professional GST invoices free online. CGST/SGST/IGST, PDF download, no signup, no watermark. For freelancers and small businesses in India.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'Is this invoice generator completely free?',
    a: 'Yes — completely free with no hidden catches. No signup required, no watermark on downloaded invoices, no monthly invoice limits, no credit card needed. You can create unlimited invoices and download them as PDF at zero cost. Unlike Zoho Invoice, Refrens, or Vyapar which require account creation for full features, ToolStackHub invoice generator works entirely in your browser with no registration.',
  },
  {
    q: 'Is the invoice GST compliant for Indian businesses?',
    a: 'Yes. The invoice includes all mandatory GST fields: GSTIN for both sender and recipient, CGST and SGST breakup for intrastate transactions, IGST for interstate transactions. The format meets Indian GST rules for a valid tax invoice under the CGST Act, 2017. For registered businesses, the invoice includes supplier GSTIN, recipient GSTIN, invoice serial number, date, taxable value, and applicable GST rates.',
  },
  {
    q: 'What information must a GST invoice include?',
    a: 'A valid GST tax invoice must include: (1) The word "Tax Invoice" displayed. (2) Supplier name, address, and GSTIN. (3) Consecutive serial number. (4) Date of issue. (5) Recipient name, address, and GSTIN. (6) HSN/SAC code. (7) Description, quantity, and unit. (8) Total taxable value. (9) Rate and amount of CGST + SGST or IGST. (10) Place of supply. Our invoice generator includes all mandatory fields.',
  },
  {
    q: 'How do I download the invoice as a PDF?',
    a: 'Click the "Download / Print" button after filling in your invoice details. Your browser print dialog will open — select "Save as PDF" as the destination and click Save. The PDF downloads cleanly to your device with professional formatting. No third-party PDF software required. The PDF is ready to send to clients via email or WhatsApp.',
  },
  {
    q: 'Can I add my company logo to the invoice?',
    a: 'Yes — click the logo upload area in the invoice header to add your company logo. Supported formats are PNG and JPG. The logo appears in the top-left of the invoice header. This gives your invoice a professional, branded appearance. Logo upload is completely free with no watermark.',
  },
  {
    q: 'What currencies does the invoice generator support?',
    a: 'The invoice generator supports 6 currencies: Indian Rupee (₹ INR), US Dollar ($ USD), Euro (€ EUR), British Pound (£ GBP), UAE Dirham (AED), and Singapore Dollar (SGD). Useful for Indian freelancers and businesses billing international clients.',
  },
  {
    q: 'Can I use this for freelance invoices?',
    a: 'Absolutely — freelancers are one of the primary users. For freelancers without GST registration, simply leave the GSTIN field blank. For services, enter your description, rate, and quantity (hours or units). Add your bank account details in the notes field for payment. If you earn above ₹20 lakh annually, you are required to register for GST — our generator supports both GST and non-GST invoices.',
  },
  {
    q: 'How is an invoice different from a receipt?',
    a: 'An invoice requests payment — sent before or at the time of payment. It lists what was provided, the amount due, and payment due date. A receipt confirms payment was received — issued after payment. Both are important for business record-keeping. For generating a receipt, mark the invoice as "PAID" and add a payment date in the notes.',
  },
];

const PROGRAMMATIC_PAGES = [
  { href: '/gst-invoice-generator-free',          label: 'GST Invoice Generator Free'              },
  { href: '/free-invoice-maker-online-no-login',   label: 'Free Invoice Maker Online No Login'      },
  { href: '/invoice-generator-for-freelancers',    label: 'Invoice Generator for Freelancers India' },
  { href: '/invoice-generator-for-small-business', label: 'Invoice Generator for Small Business'   },
  { href: '/proforma-invoice-generator',           label: 'Proforma Invoice Generator Online'       },
  { href: '/invoice-generator-with-gst',           label: 'Invoice Generator with GST India'        },
  { href: '/create-invoice-online-free',           label: 'Create Invoice Online Free'              },
  { href: '/bill-generator-online-free',           label: 'Bill Generator Online Free India'        },
  { href: '/invoice-generator-india',              label: 'Invoice Generator India Free'            },
  { href: '/tax-invoice-generator-india',          label: 'Tax Invoice Generator India'             },
];

export default function InvoiceGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Free Invoice Generator Online – India',
        description: 'Create professional GST invoices online free. No signup, no watermark, instant PDF download. Supports INR, USD, EUR, GBP, AED, SGD.',
        url: `${SITE_CONFIG.url}/invoice-generator`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'GST invoice with CGST, SGST, IGST breakdown',
          'PDF download — no watermark',
          'No signup or login required',
          'Logo upload',
          '6 currencies: INR, USD, EUR, GBP, AED, SGD',
          'Discount support',
          'Multiple line items',
          'Auto-calculated totals',
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
          { '@type': 'ListItem', position: 2, name: 'Invoice Generator', item: `${SITE_CONFIG.url}/invoice-generator` },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Create a GST Invoice Online Free',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter Your Details', text: 'Add your business name, address, and GSTIN.' },
          { '@type': 'HowToStep', position: 2, name: 'Add Client Details', text: 'Enter your client name, address, and GSTIN.' },
          { '@type': 'HowToStep', position: 3, name: 'Add Line Items', text: 'Enter products or services with quantity and rate.' },
          { '@type': 'HowToStep', position: 4, name: 'Configure Tax', text: 'Select GST rate — CGST+SGST or IGST.' },
          { '@type': 'HowToStep', position: 5, name: 'Download PDF', text: 'Click Download/Print and save as PDF. No watermark.' },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Invoice Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Invoice Generator Online – Create GST Invoice Instantly (No Login)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Create professional invoices free — <strong className="text-surface-700">no signup, no watermark, no limits</strong>.
              GST-compliant with CGST/SGST/IGST breakdown. Download PDF instantly, add your logo,
              supports 6 currencies. Perfect for freelancers and small businesses in India.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free Forever','🚫 No Signup Required','✅ GST Compliant','📄 PDF Download','🏷️ No Watermark','💱 6 Currencies'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <InvoiceGenerator />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is it */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is an Online Invoice Generator?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                An <strong className="text-surface-800">online invoice generator</strong> is a browser-based
                tool that creates professional, formatted invoices without requiring Word, Excel, or expensive
                accounting software. Fill in your details, add line items, select tax settings, and download
                a print-ready PDF in under 60 seconds.
              </p>
              <p>
                For Indian businesses and freelancers, an invoice generator must handle
                <strong className="text-surface-800"> GST compliance</strong> — including GSTIN fields,
                CGST/SGST split for intrastate transactions, and IGST for interstate. Our tool handles
                all of this automatically. Unlike Zoho Invoice or Refrens which require account creation,
                ToolStackHub is genuinely free — your data stays in your browser, never on our servers.
              </p>
              <p>
                Use it alongside our <Link href="/gst-calculator" className="text-brand-700 hover:underline font-medium">GST calculator</Link>{' '}
                to verify tax amounts, and the{' '}
                <Link href="/salary-calculator" className="text-brand-700 hover:underline font-medium">salary calculator</Link>{' '}
                to compare contractor vs employee costs for your business.
              </p>
            </div>
          </section>

          {/* How to */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Create a GST Invoice Online — 5 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { n:'01', icon:'🏢', title:'Your Details',       desc:'Business name, address, GSTIN, logo upload.' },
                { n:'02', icon:'👤', title:'Client Details',     desc:'Client name, address, and GSTIN.'            },
                { n:'03', icon:'📋', title:'Add Line Items',     desc:'Services or products with rate and quantity.' },
                { n:'04', icon:'🧮', title:'Tax & Discount',     desc:'GST rate, CGST+SGST or IGST, discount.'      },
                { n:'05', icon:'📥', title:'Download PDF',       desc:'Click Download → Save as PDF. No watermark.' },
              ].map(s => (
                <div key={s.n} className="flex flex-col gap-3 p-4 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">{s.n}</div>
                    <span className="text-lg">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900 text-sm">{s.title}</h3>
                  <p className="text-xs text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who Uses This Invoice Generator?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'💻', title:'Freelancers & Consultants',    desc:'Web developers, designers, writers billing clients. Works for both GST-registered and non-registered freelancers. Add service description, rate, and bank details in notes.' },
                { icon:'🏪', title:'Small Business Owners',        desc:'Traders, shop owners, and manufacturers creating B2B invoices with CGST/SGST or IGST. Add GSTIN, HSN codes, and payment terms. Required for businesses above ₹20L turnover.' },
                { icon:'🎨', title:'Creative Professionals',       desc:'Photographers, videographers, and social media managers. Add your logo for branded invoices. Include deliverables and usage rights in line item descriptions.' },
                { icon:'🛒', title:'E-commerce & Online Sellers',  desc:'Amazon and Flipkart sellers creating invoices for direct customers. IGST for interstate sales. Multiple items with individual HSN codes and auto-calculated totals.' },
                { icon:'🚗', title:'Transport & Logistics',        desc:'Truckers and cab operators billing for transport services. SAC code 996511. Add vehicle number and route in description. 5% GST on freight under GTA.' },
                { icon:'🏗️', title:'Contractors & Construction',   desc:'Civil contractors billing for works contract services. 18% GST (SAC 995415). Include material and labour breakup in line items for accurate tax calculation.' },
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

          {/* GST guide */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              GST Invoice Requirements in India — Complete Guide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <h3 className="font-bold text-emerald-900 mb-3">✅ Mandatory GST Invoice Fields</h3>
                <ul className="space-y-1.5 text-sm text-emerald-800">
                  {[
                    'Supplier name, address, and GSTIN',
                    'Consecutive serial number (unique per year)',
                    'Date of issue',
                    'Recipient name, address, and GSTIN',
                    'HSN code (goods) or SAC code (services)',
                    'Description, quantity, and unit of supply',
                    'Taxable value of supply',
                    'CGST + SGST rate and amount (intrastate)',
                    'IGST rate and amount (interstate)',
                    'Place of supply (state)',
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-emerald-600 shrink-0 mt-0.5">•</span><span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-3 py-2 font-semibold text-surface-700 rounded-tl-xl">Transaction</th>
                      <th className="text-left px-3 py-2 font-semibold text-surface-700 rounded-tr-xl">Tax Applied</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type:'Intrastate (same state)',       tax:'CGST + SGST (equal split)' },
                      { type:'Interstate (different states)', tax:'IGST (full rate)'           },
                      { type:'Export (outside India)',        tax:'Zero-rated (0%)'            },
                      { type:'Import (into India)',           tax:'IGST on customs value'      },
                      { type:'Exempt supplies',               tax:'No tax applicable'          },
                    ].map((r, i) => (
                      <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-3 py-2.5 font-medium text-surface-900 text-xs">{r.type}</td>
                        <td className="px-3 py-2.5 font-bold text-brand-700 text-xs">{r.tax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Competitor comparison */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              ToolStackHub vs Other Invoice Generators
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold text-brand-700">ToolStackHub</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-600">Zoho Invoice</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-600">Refrens</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-600 rounded-tr-xl">Vyapar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feat:'No signup required',        tsh:'✅', zoho:'❌',        ref:'❌',        vyp:'❌'        },
                    { feat:'No watermark on PDF',       tsh:'✅', zoho:'✅',        ref:'✅',        vyp:'✅'        },
                    { feat:'Unlimited invoices (free)', tsh:'✅', zoho:'✅',        ref:'⚠️ Limited',vyp:'⚠️ Limited'},
                    { feat:'GST compliance (India)',    tsh:'✅', zoho:'✅',        ref:'✅',        vyp:'✅'        },
                    { feat:'Data stays on your device', tsh:'✅', zoho:'❌ Cloud',  ref:'❌ Cloud',  vyp:'❌ Cloud'  },
                    { feat:'Works offline',             tsh:'✅', zoho:'❌',        ref:'❌',        vyp:'⚠️ App'   },
                    { feat:'Instant PDF download',      tsh:'✅', zoho:'✅',        ref:'✅',        vyp:'✅'        },
                    { feat:'Invoice tracking',          tsh:'❌', zoho:'✅',        ref:'✅',        vyp:'✅'        },
                  ].map((r, i) => (
                    <tr key={r.feat} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-medium text-surface-900">{r.feat}</td>
                      <td className={`px-4 py-3 text-center font-bold ${r.tsh==='✅'?'text-emerald-700':'text-rose-600'}`}>{r.tsh}</td>
                      <td className="px-4 py-3 text-center text-surface-500">{r.zoho}</td>
                      <td className="px-4 py-3 text-center text-surface-500">{r.ref}</td>
                      <td className="px-4 py-3 text-center text-surface-500">{r.vyp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Invoice Generator
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic pages */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Invoice Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMATIC_PAGES.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">🧾</span>
                  <span className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Business Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href:'/gst-calculator',          icon:'🧮', label:'GST Calculator',      desc:'Calculate GST on any amount instantly'       },
                { href:'/salary-calculator',       icon:'💰', label:'Salary & Gratuity',    desc:'Calculate CTC, in-hand salary and gratuity'  },
                { href:'/emi-calculator',          icon:'📊', label:'EMI Calculator',       desc:'Plan business loan repayments'               },
                { href:'/fuel-bill-generator',     icon:'⛽', label:'Fuel Bill Generator',  desc:'Create fuel bills for reimbursement'         },
                { href:'/percentage-calculator-online',icon:'%',label:'Percentage Calc',   desc:'Calculate discounts and tax percentages'     },
                { href:'/age-calculator-online',   icon:'🎂', label:'Age Calculator',       desc:'Calculate exact age for business documents'  },
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