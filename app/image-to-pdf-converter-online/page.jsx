import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ImageToPdf from '../../components/tools/ImageToPdf';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Image to PDF Converter Online (Free & Fast JPG to PDF Tool)',
  description: 'Convert images to PDF online for free. Upload JPG, PNG or WEBP and download a single PDF instantly. No signup required. Fast and secure.',
  keywords: [
    'image to pdf converter online',
    'convert image to pdf',
    'jpg to pdf converter',
    'png to pdf',
    'image to pdf free',
    'photo to pdf',
    'webp to pdf',
    'multiple images to pdf',
    'combine images to pdf',
    'jpg to pdf online free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/image-to-pdf-converter-online` },
  openGraph: {
    title: 'Image to PDF Converter Online – Free JPG, PNG & WEBP to PDF',
    description: 'Convert JPG, PNG, and WEBP images to a single PDF file instantly. Free, no signup, runs in your browser.',
    url: `${SITE_CONFIG.url}/image-to-pdf-converter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Converter Online – Free & Fast',
    description: 'Convert JPG, PNG, WEBP images to PDF instantly. Free, no signup, no upload to server.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I convert an image to PDF online?',
    a: 'Click "Add Images" or drag and drop your JPG, PNG, or WEBP files into the upload area. Drag to reorder them if needed, then click "Convert & Download PDF". Your PDF downloads instantly — no email, no signup, no waiting.',
  },
  {
    q: 'Can I convert multiple images into one PDF?',
    a: 'Yes — upload as many images as you need. All images are combined into a single PDF file with one image per page. Drag the image cards to reorder them before converting, so the pages appear in exactly the right order.',
  },
  {
    q: 'Is the image to PDF converter free?',
    a: 'Completely free — no account, no subscription, no watermarks, and no page limits. Convert as many images as you need.',
  },
  {
    q: 'Are my images uploaded to a server?',
    a: 'No. All conversion happens locally in your browser using JavaScript and the jsPDF library. Your images never leave your device and are never sent to any server, stored, or logged.',
  },
  {
    q: 'What image formats are supported?',
    a: 'JPG/JPEG, PNG, and WEBP are all supported. PNG and WEBP images with transparent backgrounds are automatically converted with a white background in the PDF.',
  },
  {
    q: 'Can I use this on my phone or tablet?',
    a: 'Yes — the tool is fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. Upload images from your camera roll and convert to PDF directly on your phone.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Image to PDF Converter Online',
      description: 'Free browser-based tool to convert JPG, PNG, and WEBP images to a single PDF file. Supports multiple images, drag-to-reorder, and instant download.',
      url: `${SITE_CONFIG.url}/image-to-pdf-converter-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Convert JPG, PNG, WEBP to PDF',
        'Multiple images in one PDF',
        'Drag and drop reordering',
        'No server upload — 100% browser-based',
        'No watermarks',
        'Mobile friendly',
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
        { '@type': 'ListItem', position: 1, name: 'Home',         item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Image Tools',  item: `${SITE_CONFIG.url}/#image` },
        { '@type': 'ListItem', position: 3, name: 'Image to PDF', item: `${SITE_CONFIG.url}/image-to-pdf-converter-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert Images to PDF Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload images',    text: 'Click Add Images or drag and drop your JPG, PNG, or WEBP files into the upload area.' },
        { '@type': 'HowToStep', position: 2, name: 'Arrange order',    text: 'Drag the image cards to set the order they will appear as pages in the PDF.' },
        { '@type': 'HowToStep', position: 3, name: 'Convert to PDF',   text: 'Click "Convert & Download PDF". The PDF is generated in your browser instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Download the PDF', text: 'The PDF file downloads automatically to your device. No email or signup required.' },
      ],
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────
export default function ImageToPdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Top Ad */}
        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#image" className="hover:text-brand-600 transition-colors text-amber-600">Image Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Image to PDF</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Convert Image to PDF Online for Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Upload JPG, PNG, or WEBP images and convert them into a single PDF file instantly.
              Drag to reorder pages, then download your PDF — free, no signup, runs entirely
              in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔒 No Upload to Server',
                '💧 No Watermarks',
                '⚡ Instant Download',
                '🖼️ JPG · PNG · WEBP',
                '📄 Multiple Images → One PDF',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageToPdf />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Image to PDF Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Image to PDF Converter Online – Free, Fast & Secure
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Converting images to PDF is one of the most common document tasks — and our free
                <strong> image to PDF converter online</strong> makes it effortless. Whether you
                need to submit scanned documents, create a PDF portfolio from photos, combine
                multiple screenshots into a single file, or share images in a universally readable
                format — this tool handles it all in seconds with no software to install.
              </p>
              <p>
                Simply upload your JPG, PNG, or WEBP images, arrange them in the order you want
                (each image becomes one page in the PDF), and click Convert. The PDF is generated
                entirely in your browser using the jsPDF library — your images are never sent to
                any server, ensuring complete privacy and security.
              </p>
              <p>
                Unlike other <strong>JPG to PDF converter online</strong> tools that require email
                sign-up, charge for more than 2 files, or add watermarks to your output — this
                tool is genuinely free, with no watermarks, no page limits, and no account
                required. Whether you need to <strong>convert image to PDF free</strong> for
                personal or professional use, this is the fastest and most private way to do it.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert Images to PDF – Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📤', title: 'Upload Your Images',  desc: 'Click "Add Images" or drag and drop your JPG, PNG, or WEBP files directly into the upload area. Multiple files supported.' },
                { step: '02', icon: '🔀', title: 'Arrange Page Order',  desc: 'Drag the image cards to set the order they will appear as pages in the final PDF. The page number shows in the top-left corner of each card.' },
                { step: '03', icon: '📄', title: 'Click Convert',       desc: 'Click "Convert & Download PDF". The PDF is generated instantly in your browser — no waiting, no upload to server.' },
                { step: '04', icon: '⬇️', title: 'Download Your PDF',   desc: 'Your PDF downloads automatically. Open it in any PDF viewer — Adobe Acrobat, Preview, or any browser.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Features of Our Image to PDF Converter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'Free & Instant',                desc: 'Convert images to PDF in seconds with no payment, no trial period, and no usage caps.' },
                { icon: '🔒', title: 'No Server Upload',              desc: 'Everything runs in your browser. Your images never leave your device — 100% private.' },
                { icon: '💧', title: 'No Watermarks',                 desc: 'Your downloaded PDF is completely clean — no logos, no branding, no watermarks added.' },
                { icon: '🖼️', title: 'JPG · PNG · WEBP Support',    desc: 'All three major image formats are supported. PNG and WEBP transparency is handled automatically.' },
                { icon: '📄', title: 'Multiple Images → One PDF',    desc: 'Combine any number of images into a single PDF file with one image per page.' },
                { icon: '🔀', title: 'Drag to Reorder Pages',        desc: 'Rearrange images before converting by dragging the cards — the order you set becomes the page order.' },
                { icon: '📐', title: 'Auto Page Sizing',             desc: 'Each page is automatically sized to fit the image dimensions — portrait or landscape as needed.' },
                { icon: '📱', title: 'Mobile Friendly',              desc: 'Works on iPhone and Android browsers. Upload from your camera roll and convert on the go.' },
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

          {/* Section 4 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🏥',
                  title: 'Submit Documents Online',
                  desc: 'Most official forms, applications, and portals require PDF uploads. Convert your ID photos, scanned documents, and certificates to PDF before submitting to banks, government offices, or universities.',
                },
                {
                  icon: '📸',
                  title: 'Create PDF from Photos',
                  desc: 'Turn a set of photos from an event, project, or trip into a single organized PDF document for easy sharing via email or messaging apps — without requiring recipients to have any special viewer.',
                },
                {
                  icon: '🖨️',
                  title: 'Scan Documents with Phone',
                  desc: 'Take photos of paper documents with your phone camera, then use this tool to convert those photos into a proper PDF — replacing expensive scanners for most everyday document needs.',
                },
                {
                  icon: '📋',
                  title: 'Combine Screenshots into Report',
                  desc: 'Capture multiple screenshots of dashboards, analytics, or software interfaces and merge them into a single PDF report for stakeholder presentations or documentation.',
                },
                {
                  icon: '🎨',
                  title: 'Create PDF Portfolio',
                  desc: 'Designers, artists, and photographers can combine portfolio images into a single professional PDF to share with clients and employers without requiring Photoshop or InDesign.',
                },
                {
                  icon: '📚',
                  title: 'Study Notes from Images',
                  desc: 'Photograph textbook pages, handwritten notes, or whiteboard content and compile them into a single searchable PDF for organized studying and note-keeping.',
                },
                {
                  icon: '🏢',
                  title: 'Invoice & Receipt Collection',
                  desc: 'Photograph paper receipts and invoices and convert them into a single PDF for expense reporting, accounting, or tax filing without a dedicated receipt scanning app.',
                },
                {
                  icon: '🌐',
                  title: 'Prepare Images for Email',
                  desc: 'Combine multiple images into one PDF attachment instead of attaching 10 separate image files — reduces confusion, keeps emails clean, and ensures images display correctly for all recipients.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-amber-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Keyword variation paragraph */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Image to PDF Tool Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you search for a <strong>jpg to pdf converter online</strong>, a way to
                <strong> convert image to pdf free</strong>, a <strong>png to pdf tool</strong>,
                or simply a <strong>photo to pdf</strong> utility — this tool handles all of them
                in one place. There is no need to switch between different tools for different
                image formats, and no need to install any software on your device.
              </p>
              <p>
                The biggest advantage over web-based alternatives is privacy. When you use an
                online tool that uploads your files to a cloud server, you are trusting that
                service with potentially sensitive images — identity documents, medical records,
                financial statements. Our tool never touches a server. The entire
                image-to-PDF conversion runs as JavaScript in your browser tab, making it the
                most secure option available for free online image-to-PDF conversion.
              </p>
              <p>
                Need to <strong>combine multiple images into one PDF</strong>? Just upload all
                of them at once, drag to arrange the page order, and convert. The result is a
                clean, properly sized PDF with one image per page — ready for printing,
                sharing, or official submission.
              </p>
            </div>
          </section>

          {/* Section 6 — Quality guide */}
          <section aria-labelledby="tips-heading">
            <h2 id="tips-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Tips for Best Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '📷',
                  title: 'Use High-Resolution Images',
                  tip: 'For document submissions, use the highest resolution available. Lower resolution images appear blurry when printed from PDF.',
                  color: 'amber',
                },
                {
                  icon: '🔀',
                  title: 'Arrange Before Converting',
                  tip: 'Set the correct page order before clicking Convert. The numbered badge on each card shows the PDF page number.',
                  color: 'blue',
                },
                {
                  icon: '📐',
                  title: 'Portrait vs Landscape',
                  tip: 'Each page automatically sizes to your image\'s orientation. Mix portrait and landscape images freely — each page adapts independently.',
                  color: 'emerald',
                },
              ].map(t => (
                <div key={t.title} className={`p-5 bg-${t.color}-50 border border-${t.color}-200 rounded-2xl`}>
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className={`font-semibold text-${t.color}-900 mb-2`}>{t.title}</h3>
                  <p className={`text-sm text-${t.color}-700 leading-relaxed`}>{t.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
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

          {/* Section 8 — Related Image Tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Image Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/image-compressor',       icon: '🗜️', label: 'Compress Image Online',       desc: 'Reduce image file size by up to 90% without losing quality' },
                { href: '/tools/image-resizer',         icon: '📐', label: 'Resize Image Online',         desc: 'Resize images to any pixel dimension with aspect ratio lock' },
                { href: '/tools/jpg-to-png', icon: '🔄', label: 'JPG to PNG Converter',        desc: 'Convert JPEG images to lossless PNG format instantly' },
                { href: '/tools/color-picker',         icon: '🎨', label: 'Color Picker Online',         desc: 'Get HEX, RGB, HSL, and CMYK values from any color' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-amber-200 hover:bg-amber-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-amber-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="image-to-pdf-converter-online" />
      <Footer />
    </>
  );
}