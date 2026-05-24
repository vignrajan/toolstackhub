import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

const POST = {
  slug:        'free-invoice-generator-online-complete-guide',
  title:       'Free Invoice Generator Online – Create GST Invoice Fast',
  metaDesc:    'Create professional invoices free online. No signup, no watermark, instant PDF download. Complete guide for freelancers, small businesses & GST invoicing in India.',
  category:    'Business Tools',
  categorySlug:'business-tools',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-25',
  updatedAt:   '2026-03-25',
  readTime:    10,
  coverEmoji:  '🧾',
  coverBg:     'from-emerald-600 to-teal-700',
};

export const metadata = {
  title:       `Free Invoice Generator Online – Create GST Invoice in 60s`,
  description:  POST.metaDesc,
  alternates: { canonical: `${SITE_CONFIG.url}/blog/${POST.slug}` },
  openGraph: {
    title:       'Free Invoice Generator Online – Create GST Invoice Fast',
    description: POST.metaDesc,
    url:        `${SITE_CONFIG.url}/blog/${POST.slug}`,
    type:        'article',
    siteName:    SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    publishedTime: POST.publishedAt,
    modifiedTime:  POST.updatedAt,
    authors:       [POST.author],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator Online – Create GST Invoice in 60 Seconds',
    description: 'Create professional invoices free online. No signup, no watermark, instant PDF download. Complete guide for freelancers, small businesses & GST invoicing in India.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'Is there a free invoice generator with no signup?',
    a: 'Yes — ToolStackHub\'s invoice generator is 100% free with no signup, no account, and no credit card required. Open the tool, fill in your details, and download your invoice as a PDF. No registration wall, no free trial, no paid plan. It is completely free forever with zero limitations.',
  },
  {
    q: 'How do I create a GST invoice online for free?',
    a: 'Go to toolstackhub.in/invoice-generator. Enter your business name and GSTIN in the "From" section. Add your client\'s GSTIN in the "Bill To" section. Add your line items with HSN/SAC codes in the description. Enable the GST toggle and select your rate (5%, 12%, 18%, or 28%). Click Download PDF. Your GST-compliant invoice is ready.',
  },
  {
    q: 'Can I download the invoice as PDF without installing software?',
    a: 'Yes. Click "Download PDF" in the tool. Your browser\'s print dialog opens — select "Save as PDF" as the printer destination and click Save. No software installation is needed. Works on Chrome, Firefox, Safari, and Edge on both desktop and mobile.',
  },
  {
    q: 'Is the invoice generator free for freelancers?',
    a: 'Completely free for freelancers. You can create unlimited invoices, download them with no watermark, and use all features including GST, multi-currency, discount, and professional templates — all without paying anything or creating an account.',
  },
  {
    q: 'What is the difference between an invoice and a GST invoice?',
    a: 'A regular invoice records a business transaction — goods or services sold, their value, and payment terms. A GST invoice additionally includes GSTIN numbers for both parties, HSN/SAC codes for goods/services, the applicable GST rate (CGST+SGST for intra-state, IGST for inter-state), the tax amount, and a sequential invoice number for audit trails. Under GST law, registered businesses must issue a GST tax invoice for every taxable supply.',
  },
  {
    q: 'How many invoices can I create for free?',
    a: 'Unlimited. There is no monthly cap, no invoice limit, and no feature gated behind a paid plan. Every invoice you create on ToolStackHub is free, has no watermark, and downloads as a clean PDF.',
  },
  {
    q: 'Does the invoice generator work on mobile?',
    a: 'Yes — fully responsive on all modern mobile browsers including Safari on iPhone and Chrome on Android. Fill in all invoice details on your phone and download the PDF directly to your device.',
  },
  {
    q: 'Is my invoice data stored on your servers?',
    a: 'No. All invoice data — your business name, client details, line items, pricing — exists only in your browser. Nothing is uploaded to any server, nothing is stored, and nothing is shared with any third party. Your invoice data is completely private.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: POST.title,
      description: POST.metaDesc,
      url: `${SITE_CONFIG.url}/blog/${POST.slug}`,
      datePublished: POST.publishedAt,
      dateModified:  POST.updatedAt,
      author: { '@type': 'Organization', name: POST.author, url: SITE_CONFIG.url },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url:  SITE_CONFIG.url,
        logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${POST.slug}` },
      articleSection: POST.category,
      keywords: 'free invoice generator, invoice generator online, invoice generator no login, GST invoice generator India, create invoice online free, invoice maker free',
      wordCount: 2200,
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
      '@type': 'SoftwareApplication',
      name: 'Free Invoice Generator Online',
      url: `${SITE_CONFIG.url}/invoice-generator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Create professional GST invoices free',
        'No signup or login required',
        'Download as PDF with no watermark',
        'GST calculation with multiple rates',
        'Discount support (percentage and fixed)',
        'Multiple currencies including INR, USD, EUR',
        '4 professional invoice templates',
        'Unlimited invoices',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: POST.title, item: `${SITE_CONFIG.url}/blog/${POST.slug}` },
      ],
    },
  ],
};

export default function PostInvoiceGenerator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Hero / Above the fold ──────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">Free Invoice Generator Guide</li>
              </ol>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                {POST.category}
              </span>
              <span className="text-sm text-surface-400">{POST.readTime} min read</span>
              <span className="text-surface-300">·</span>
              <time dateTime={POST.publishedAt} className="text-sm text-surface-400">
                {new Date(POST.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            {/* H1 */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-5">
              {POST.title}
            </h1>

            {/* Hero CTA block */}
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-300 mb-8"
              style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)' }}>
              <div className="p-6">
                <div className="text-lg font-bold text-emerald-900 mb-2">
                  Stop wasting time on Excel invoices. Create a professional invoice in 60 seconds — free.
                </div>
                <div className="flex flex-wrap gap-3 mb-5 text-sm text-emerald-800">
                  {['🚫 No Login Required', '🚫 No Watermark', '✅ GST Compliant', '✅ PDF Download', '✅ Unlimited Free', '✅ 6 Currencies'].map(t => (
                    <span key={t} className="flex items-center gap-1">{t}</span>
                  ))}
                </div>
                <Link href="/invoice-generator"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-6 py-3 rounded-xl transition-colors">
                  🧾 Use Free Invoice Generator Now →
                </Link>
                <div className="text-xs text-emerald-600 mt-3">
                  Used by 10,000+ freelancers and small businesses. No credit card ever required.
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">🛠️</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                <div className="text-xs text-surface-400">Updated {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────────── */}
        <div className={`h-40 sm:h-48 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-7xl mb-2">{POST.coverEmoji}</div>
            <div className="text-white/70 text-sm font-medium">Create · Download · Get Paid</div>
          </div>
        </div>

        {/* ── Article ────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10">

            {/* ── Intro ─────────────────────────────────── */}
            <section>
              <p className="text-surface-700 text-lg leading-relaxed">
                Creating an invoice should not take longer than the work itself. Yet most
                freelancers in India spend 20–40 minutes per invoice — hunting for Excel
                templates, manually calculating GST, and wrestling with PDF converters that
                add watermarks or demand a subscription.
              </p>
              <p className="text-surface-600 leading-relaxed mt-4">
                This guide covers everything you need to know about{' '}
                <strong className="text-surface-800">free invoice generation online</strong> —
                what to include, how to create a GST-compliant invoice, the fastest tools
                available, and how to get paid faster once you send it. Every method in this
                guide is free, and the fastest one takes under 60 seconds.
              </p>
            </section>

            {/* ── What is an Invoice Generator ──────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                What Is an Online Invoice Generator?
              </h2>
              <p className="text-surface-600 leading-relaxed">
                An <strong className="text-surface-800">online invoice generator</strong> is a
                browser-based tool that lets you create, customize, and download professional
                invoices without installing any software. You fill in your business details,
                your client's information, and your line items — the tool calculates totals,
                applies tax and discounts, formats everything professionally, and generates a
                PDF you can download and send immediately.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                The key advantages over Excel or Word templates: automatic tax calculations,
                professional formatting that works on every device, no formula errors, and
                instant PDF export. For Indian businesses, the best tools also include
                GSTIN fields, HSN/SAC code support, and the correct GST calculation methodology
                (tax applied to discounted value, not original value).
              </p>
            </section>

            {/* ── Step by step ──────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">
                How to Create a Free Invoice Online in 5 Steps
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                Using the{' '}
                <Link href="/invoice-generator" className="text-emerald-700 hover:underline font-medium">
                  ToolStackHub free invoice generator
                </Link>
                , here is the exact process:
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Enter Your Business Details',
                    body: 'In the top-left section, type your business name (it appears large as your brand header), address, email, phone, and GSTIN. This is your "From" section — it identifies you as the seller. Fill this once and it becomes your standard invoice identity.',
                    tip: 'Use your registered business name exactly as it appears on your GST certificate for compliance.',
                  },
                  {
                    step: 2,
                    title: 'Add Your Client\'s Details',
                    body: 'Fill in the "Bill To" section with your client\'s business name, address, email, and GSTIN. For B2B transactions under GST, the buyer\'s GSTIN is mandatory on the invoice. For B2C (selling to individuals), GSTIN is not required.',
                    tip: 'For export invoices, include the buyer\'s country name and mark the supply as "Zero Rated" in the notes.',
                  },
                  {
                    step: 3,
                    title: 'Add Your Invoice Number and Dates',
                    body: 'The tool auto-generates a unique invoice number (e.g., INV-2026-4521). Edit it to match your sequential numbering system. Set the invoice date and due date — 30 days from invoice date is standard for most freelance work in India.',
                    tip: 'Never reuse or skip invoice numbers. GST audits require a sequential, unbroken trail of invoice numbers.',
                  },
                  {
                    step: 4,
                    title: 'Add Line Items with Quantity and Rate',
                    body: 'Click in the Description column and describe your service or product. Add the HSN/SAC code at the end if required. Set the quantity and rate — the amount calculates automatically. Click "+ Add Line Item" for each additional service.',
                    tip: 'Be specific in descriptions: "Website redesign — Home page (Apr 1–15)" outperforms "Design Services" for dispute prevention.',
                  },
                  {
                    step: 5,
                    title: 'Set GST, Discount, and Download',
                    body: 'Toggle GST on and select your rate (typically 18% for most services). Add a percentage or fixed discount if applicable. Review the total, add notes and payment terms, then click Download PDF. In the print dialog, select "Save as PDF."',
                    tip: 'Under GST rules, discount is applied first, then GST is calculated on the post-discount value — our tool does this correctly automatically.',
                  },
                ].map(s => (
                  <div key={s.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">{s.title}</h3>
                      <p className="text-sm text-surface-600 leading-relaxed mb-2">{s.body}</p>
                      <div className="flex items-start gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                        <span className="shrink-0">💡</span>
                        <span>{s.tip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mid-article CTA */}
              <div className="mt-6 p-5 rounded-2xl border border-emerald-200 bg-emerald-50 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-bold text-emerald-900">Ready to create your first invoice?</div>
                  <div className="text-sm text-emerald-700 mt-0.5">Free, no signup, no watermark. Takes 60 seconds.</div>
                </div>
                <Link href="/invoice-generator"
                  className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                  Create Invoice Free →
                </Link>
              </div>
            </section>

            {/* ── Features ──────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Features That Make This the Best Free Invoice Generator
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🚫', title: 'Zero Login Required',           desc: 'Open and use instantly. No account creation, no email verification, no password. Click, fill, download.' },
                  { icon: '🚫', title: 'No Watermark',                  desc: 'Every downloaded PDF is clean and professional. No "Created with [Tool]" footer. Your brand, your invoice.' },
                  { icon: '♾️',  title: 'Unlimited Invoices',           desc: 'No monthly cap. Create 1 invoice or 1,000 — same tool, same quality, same price: free.' },
                  { icon: '🧮', title: 'Auto GST Calculation',          desc: 'Enable the tax toggle, set your rate, and tax is calculated correctly on the taxable (post-discount) value.' },
                  { icon: '💱', title: '6 Currencies',                  desc: 'INR ₹, USD $, EUR €, GBP £, AED د.إ, SGD S$. Select before creating — symbols update everywhere.' },
                  { icon: '🎨', title: '4 Professional Templates',      desc: 'Professional (blue), Minimal (black), Modern (purple), Classic (amber). Switch with one click.' },
                  { icon: '📉', title: 'Discount Support',              desc: 'Apply percentage or fixed discount. Applied before tax calculation as required under GST rules.' },
                  { icon: '🔒', title: '100% Private',                  desc: 'All data stays in your browser. Nothing uploaded, nothing stored, nothing shared. Safe for client data.' },
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
            </section>

            {/* ── Use cases ─────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Who Uses a Free Online Invoice Generator?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    audience: 'Freelancers',
                    icon: '💼',
                    color: 'violet',
                    who: 'Graphic designers, web developers, content writers, video editors, social media managers, consultants',
                    pain: 'Sending professional invoices without looking like they use a free tool. No time to set up accounting software for occasional invoicing.',
                    solution: 'Create a branded invoice in 60 seconds with their business name, logo area, payment details, and custom notes. Download as PDF and email directly. No recurring subscription for what might be 5 invoices a month.',
                  },
                  {
                    audience: 'Small Businesses in India',
                    icon: '🏪',
                    color: 'emerald',
                    who: 'Trading companies, retail shops, service providers, manufacturers under ₹5 crore turnover',
                    pain: 'Creating GST-compliant invoices with correct GSTIN fields, HSN codes, and tax calculation without buying accounting software.',
                    solution: 'The tool includes all mandatory GST fields — seller GSTIN, buyer GSTIN, HSN/SAC in description, taxable value, GST rate, and total. Correct calculation order (discount first, then GST). Download and file.',
                  },
                  {
                    audience: 'Agencies and Studios',
                    icon: '🎯',
                    color: 'blue',
                    who: 'Digital marketing agencies, design studios, software development firms',
                    pain: 'Billing multiple clients simultaneously with different service lines, different GST rates (18% for services, 5% for printing), and different currencies for international clients.',
                    solution: 'Create separate invoices per client with the correct currency (INR for domestic, USD for international) and applicable GST rate. Multiple line items with different descriptions keep billing transparent.',
                  },
                  {
                    audience: 'International Freelancers',
                    icon: '🌍',
                    color: 'amber',
                    who: 'Indian professionals billing US, UK, UAE, and Singapore clients',
                    pain: 'Sending invoices in the client\'s preferred currency while maintaining professional presentation without paying for international billing software.',
                    solution: 'Switch currency to USD, GBP, AED, or SGD. The correct symbol appears throughout the invoice. Note in the invoice that the supply is an export of services (zero-rated under GST). No subscription required.',
                  },
                ].map(uc => (
                  <div key={uc.audience} className={`p-5 bg-${uc.color}-50 border border-${uc.color}-200 rounded-2xl`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{uc.icon}</span>
                      <h3 className={`font-display font-bold text-lg text-${uc.color}-900`}>{uc.audience}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-${uc.color}-600 mb-1`}>Who</div>
                        <p className={`text-${uc.color}-800 leading-relaxed`}>{uc.who}</p>
                      </div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-${uc.color}-600 mb-1`}>The Problem</div>
                        <p className={`text-${uc.color}-800 leading-relaxed`}>{uc.pain}</p>
                      </div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-${uc.color}-600 mb-1`}>The Solution</div>
                        <p className={`text-${uc.color}-800 leading-relaxed`}>{uc.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── GST Invoice Guide ─────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                GST Invoice Guide for Indian Businesses — What Must Be Included
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Under the CGST Act 2017, every registered business must issue a tax invoice
                for taxable supplies. Missing even one mandatory field makes the invoice
                non-compliant — and the buyer cannot claim Input Tax Credit (ITC) on it.
                Here is exactly what every GST invoice must contain:
              </p>

              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Mandatory Field</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Requirement</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">In Our Tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { field: 'Supplier Name & Address', req: 'Legal name of the supplier', has: '✅' },
                      { field: 'Supplier GSTIN',          req: '15-digit GST number of seller', has: '✅' },
                      { field: 'Invoice Number',          req: 'Unique sequential number', has: '✅ Auto' },
                      { field: 'Invoice Date',            req: 'Date of issue', has: '✅' },
                      { field: 'Recipient Name & Address',req: 'Buyer\'s name and address', has: '✅' },
                      { field: 'Recipient GSTIN',         req: 'Required for B2B transactions', has: '✅' },
                      { field: 'HSN / SAC Code',          req: 'Goods (HSN) or Services (SAC)', has: '✅ In description' },
                      { field: 'Description of Supply',   req: 'Nature of goods or services', has: '✅' },
                      { field: 'Quantity & Unit',         req: 'For goods; optional for services', has: '✅' },
                      { field: 'Taxable Value',           req: 'Value before GST', has: '✅ Auto' },
                      { field: 'GST Rate & Amount',       req: 'Rate applied and tax computed', has: '✅ Auto' },
                      { field: 'Total Invoice Value',     req: 'Total including all taxes', has: '✅ Auto' },
                    ].map((r, i) => (
                      <tr key={r.field} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-900 text-xs">{r.field}</td>
                        <td className="px-4 py-3 text-surface-600 text-xs">{r.req}</td>
                        <td className="px-4 py-3 text-center font-bold text-emerald-700">{r.has}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                <strong>Important:</strong> Businesses with annual turnover above ₹5 crore must generate
                e-invoices through the Government's Invoice Registration Portal (IRP). This tool generates
                the invoice format — for IRP e-invoicing, upload to the portal separately to get your IRN
                and QR code.
              </div>
            </section>

            {/* ── Invoice Generator vs Excel ────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Invoice Generator vs Excel — Which Should You Use?
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Excel is the default for most Indian freelancers and small businesses. But
                it comes with real costs — in time, in errors, and in professional appearance.
                Here is the honest comparison:
              </p>

              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Comparison Point</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Online Invoice Generator</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Excel / Word Template</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { point: 'Time to create first invoice',   us: '60 seconds',           excel: '20–40 minutes (template setup)' },
                      { point: 'Time per subsequent invoice',    us: '2–3 minutes',           excel: '10–15 minutes'                  },
                      { point: 'GST calculation errors',         us: 'Zero (auto-calculated)', excel: 'Common (formula mistakes)'     },
                      { point: 'Professional appearance',        us: 'Always consistent',     excel: 'Varies by template quality'    },
                      { point: 'PDF export',                     us: 'One click',             excel: 'Requires separate steps'       },
                      { point: 'Mobile use',                     us: 'Full mobile support',   excel: 'Poor on mobile'                },
                      { point: 'Software required',              us: 'None',                  excel: 'Microsoft Office (₹4,199/yr)'  },
                      { point: 'Multi-currency support',         us: 'Built in',              excel: 'Manual formatting'             },
                    ].map((r, i) => (
                      <tr key={r.point} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-900 text-xs">{r.point}</td>
                        <td className="px-4 py-3 text-center text-emerald-700 font-medium text-xs">{r.us}</td>
                        <td className="px-4 py-3 text-center text-surface-500 text-xs">{r.excel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-surface-600 leading-relaxed">
                The verdict: for anyone creating more than 2–3 invoices per month, an online
                invoice generator saves significant time and eliminates a common source of
                errors. Excel templates make sense only for one-off invoicing or when you
                need custom formatting beyond what standard tools offer.
              </p>
            </section>

            {/* ── How to get paid faster ────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                5 Ways to Get Paid Faster After Sending Your Invoice
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Creating a professional invoice is step one. Getting paid on time is step two.
                Here are the highest-impact actions you can take:
              </p>
              <div className="space-y-3">
                {[
                  { n: 1, title: 'Add a specific due date — not just "Net 30"',     desc: 'Write "Payment due by April 24, 2026" — not "Payment due within 30 days." Specific dates create clearer accountability. Studies show invoices with specific due dates are paid 4 days faster on average.' },
                  { n: 2, title: 'Include your UPI ID or bank details on the invoice', desc: 'Every payment friction point adds days. Add your UPI ID, account number and IFSC, and your bank\'s name in the notes section. One click to pay after reading the invoice.' },
                  { n: 3, title: 'Send a reminder 3 days before the due date',      desc: 'A brief message: "Hi [Name], just a reminder that invoice INV-2026-001 for ₹X is due on [date]. Please let me know if you need anything." This alone reduces late payments by 40%.' },
                  { n: 4, title: 'Send the invoice as PDF, not an editable file',   desc: 'A PDF invoice looks professional, cannot be accidentally edited, and displays consistently on every device. Our tool generates PDFs that match your screen exactly.' },
                  { n: 5, title: 'Use late payment terms in your invoice',           desc: 'Add a late fee clause in your terms: "1.5% per month on outstanding amounts after due date." This is legally enforceable in India under the MSME Act and significantly improves payment discipline.' },
                ].map(tip => (
                  <div key={tip.n} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0">{tip.n}</div>
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">{tip.title}</div>
                      <div className="text-sm text-surface-500 mt-0.5 leading-relaxed">{tip.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Internal links ───────────────────────── */}
            <section className="p-5 bg-surface-50 border border-surface-200 rounded-2xl">
              <h3 className="font-display font-bold text-lg text-surface-900 mb-4">
                More Free Business Tools You Might Need
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/invoice-generator',         icon: '🧾', label: 'Invoice Generator',          desc: 'Create professional invoices free' },
                  { href: '/emi-calculator',            icon: '🧮', label: 'EMI Calculator',             desc: 'Plan installment payment schedules' },
                  { href: '/percentage-calculator-online',icon: '📊',label: 'Percentage Calculator',     desc: 'Calculate GST, discount percentages' },
                  { href: '/qr-code-generator-online',  icon: '📱', label: 'QR Code Generator',          desc: 'Generate UPI payment QR codes' },
                  { href: '/compress-image-online',     icon: '🗜️', label: 'Image Compressor',           desc: 'Compress product images for invoices' },
                  { href: '/remove-duplicate-lines-online',icon:'🧹',label:'Remove Duplicate Lines',     desc: 'Clean up client email lists' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-3 bg-white border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
                    <span className="text-lg">{l.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-emerald-800 text-xs">{l.label}</div>
                      <div className="text-[10px] text-surface-500">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                Frequently Asked Questions — Free Invoice Generator
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

            {/* ── Programmatic SEO suggestions ─────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                More Invoice Generators
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/invoice-generator-india',          label: 'Invoice Generator India'                },
                  { href: '/proforma-invoice-generator',       label: 'Proforma Invoice Generator'             },
                ].map(v => (
                  <Link key={v.href} href={v.href}
                    className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                    <span className="text-emerald-600">🧾</span>
                    <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-300"
              style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-4xl mb-3">🧾</div>
                <h3 className="font-display font-bold text-2xl text-emerald-900 mb-2">
                  Create Your First Free Invoice Right Now
                </h3>
                <p className="text-emerald-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  No signup. No watermark. No limits. Professional GST-compliant invoice
                  in 60 seconds. Join 10,000+ freelancers and small businesses who use
                  ToolStackHub to invoice their clients.
                </p>
                <Link href="/invoice-generator"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-colors">
                  🧾 Use Free Invoice Generator Now →
                </Link>
                <div className="flex items-center justify-center gap-5 mt-4 text-xs text-emerald-600">
                  <span>✓ No signup</span>
                  <span>✓ No watermark</span>
                  <span>✓ GST compliant</span>
                  <span>✓ PDF download</span>
                  <span>✓ Unlimited free</span>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}