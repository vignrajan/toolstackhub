import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ImageCompressor from '../../components/tools/ImageCompressor';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Compress Image Online Free – Reduce Size Without Losing Quality',
  description: 'Compress JPEG, PNG and WebP images online for free. Reduce file size by up to 90% without losing quality. No upload to server, no signup needed. Try now!',
  keywords: [
    'compress image online',
    'compress image without losing quality',
    'reduce image size online',
    'image compressor free',
    'compress jpeg online',
    'compress png online',
    'reduce photo size online',
    'image optimizer free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/compress-image-online` },
  openGraph: {
    title: 'Compress Image Online Free – Reduce Size Without Losing Quality',
    description: 'Compress JPEG, PNG and WebP images online free. Reduce file size by up to 90% with no quality loss. Browser-based, no upload to server.',
    url: `${SITE_CONFIG.url}/compress-image-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image Online Free – No Quality Loss',
    description: 'Reduce image file size by up to 90% without losing quality. Free, browser-based, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I compress an image without losing quality?',
    a: 'Set the quality slider between 75–85%. This range reduces file size by 40–70% with no perceptible quality difference to the human eye. At 80% quality, most compressed images are visually indistinguishable from the original. Use the side-by-side preview to compare before downloading.',
  },
  {
    q: 'Is the image compressor free?',
    a: 'Yes — completely free with no account, no payment, no watermarks, and no usage limits. Compress as many images as you need.',
  },
  {
    q: 'Are my images uploaded to a server?',
    a: 'No. All compression runs locally in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored or logged anywhere. This makes it safe for compressing sensitive documents, personal photos, and client work.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes — fully responsive and works on iPhone, Android, and all modern tablet browsers. Upload directly from your camera roll and compress images on the go.',
  },
  {
    q: 'Does compression affect image quality?',
    a: 'At 80%+ quality, the difference is invisible to the human eye. Very low quality settings (below 50%) may introduce visible compression artifacts. Use the side-by-side comparison preview to find the ideal balance for your specific image.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Image Compressor Online',
      description: 'Free browser-based tool to compress JPEG, PNG, and WebP images. Reduce file size by up to 90% without losing quality. No server upload required.',
      url: `${SITE_CONFIG.url}/compress-image-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Compress JPEG, PNG, and WebP images',
        'Quality slider 10–100% for full control',
        'Side-by-side original vs compressed comparison',
        'Shows exact file size reduction percentage',
        'Browser-based — images never leave your device',
        'No watermarks, no account required',
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
        { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_CONFIG.url}/#image` },
        { '@type': 'ListItem', position: 3, name: 'Image Compressor', item: `${SITE_CONFIG.url}/compress-image-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click the upload area or drag and drop your JPEG, PNG, or WebP image.' },
        { '@type': 'HowToStep', position: 2, name: 'Set quality level', text: 'Adjust the quality slider. 80% is recommended for the best size/quality balance.' },
        { '@type': 'HowToStep', position: 3, name: 'Compress the image', text: 'Click Compress Image and see the size reduction percentage instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Click Download to save the compressed image to your device.' },
      ],
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────
export default function CompressImageOnlinePage() {
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
                <li className="text-surface-800 font-medium">Image Compressor</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Compress Image Online – Reduce Image File Size Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Compress JPEG, PNG, and WebP images online for free. Reduce file size by up to 90%
              without visible quality loss — no server upload, no signup, works entirely in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔒 No Server Upload',
                '💧 No Watermarks',
                '⚡ Instant',
                '🖼️ JPEG · PNG · WebP',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageCompressor />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Image Compressor" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Compress Images Online – Free, Fast & Secure
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                An <strong>image compressor online</strong> reduces the file size of JPEG, PNG,
                and WebP images — without visibly degrading quality. When you upload photos to
                a website, send images via email, or post on social media, large file sizes slow
                down delivery and waste bandwidth. Our free tool solves this instantly — reducing
                file size by up to 90% with no server upload, no signup, and no quality compromise
                visible to the human eye.
              </p>
              <p>
                Unlike desktop software that requires installation, or cloud tools that upload
                your images to remote servers, this compressor runs entirely in your browser
                using the HTML5 Canvas API. Set the quality slider to 80% (recommended),
                preview the side-by-side comparison, and download in one click. A 3MB photo
                can often become 300KB with absolutely no visible difference.
              </p>
              <p>
                Whether you need to <strong>compress images without losing quality</strong> for
                a website, <strong>reduce image size online</strong> before emailing,
                or quickly <strong>compress JPEG online</strong> for social media — this
                free image compressor handles all formats with zero friction.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Compress an Image Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '📤', title: 'Upload Your Image',    desc: 'Click the upload area or drag and drop your JPEG, PNG, or WebP image — up to 10MB per file.' },
                { step: '02', icon: '🎚️', title: 'Set Quality Level',   desc: 'Adjust the quality slider. 80% is recommended for the best size/quality balance for most images.' },
                { step: '03', icon: '🗜️', title: 'Compress the Image',  desc: 'Click "Compress Image". The tool processes instantly and shows the exact size reduction percentage.' },
                { step: '04', icon: '🔍', title: 'Review the Preview',   desc: 'Compare the original and compressed versions side by side — zoom in to check quality before downloading.' },
                { step: '05', icon: '⬇️', title: 'Download the Result', desc: 'Click Download to save the compressed image to your device. The filename shows the size reduction.' },
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

          {/* Section 3 — Quality guide */}
          <section aria-labelledby="quality-heading">
            <h2 id="quality-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Choosing the Right Compression Quality
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  range: '90–100%',
                  label: 'High Quality',
                  color: 'emerald',
                  desc: 'Near-lossless. Minimal size reduction (~10–20%). Best for professional photography, print materials, and images requiring archival quality.',
                },
                {
                  range: '70–85%',
                  label: '⭐ Recommended',
                  color: 'amber',
                  desc: 'Best balance. Size reduction of 40–70% with no visible quality loss. Perfect for website images, blog photos, and social media content.',
                },
                {
                  range: '40–65%',
                  label: 'Max Compression',
                  color: 'red',
                  desc: 'Aggressive compression. 70–90% size reduction. Suitable for thumbnails, previews, and images where file size matters more than quality.',
                },
              ].map(q => (
                <div key={q.range} className={`p-5 rounded-2xl border-2 bg-${q.color}-50 border-${q.color}-200`}>
                  <div className={`text-2xl font-display font-bold mb-1 text-${q.color}-700`}>{q.range}</div>
                  <div className={`font-semibold mb-2 text-sm text-${q.color}-800`}>{q.label}</div>
                  <p className="text-sm text-surface-600 leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features of Our Image Compressor
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🖼️', title: 'JPEG · PNG · WebP Support',  desc: 'Compresses all three major web image formats. JPEG compression is adjustable via quality slider. PNG uses lossless compression.' },
                { icon: '🎚️', title: 'Quality Slider 10–100%',     desc: 'Full control over the compression level. See the exact file size and percentage reduction update in real time.' },
                { icon: '🔍', title: 'Side-by-Side Preview',        desc: 'Compare original and compressed images at a glance before downloading to confirm quality meets your needs.' },
                { icon: '📊', title: 'File Size Reduction Display', desc: 'The tool shows the exact before/after file sizes and calculates the percentage reduction for transparency.' },
                { icon: '🔒', title: 'No Server Upload',            desc: 'All compression runs locally in your browser using the HTML5 Canvas API. Your images never leave your device.' },
                { icon: '💧', title: 'No Watermarks',               desc: 'Your downloaded images are completely clean — no logos, branding, or watermarks added at any quality setting.' },
                { icon: '⚡', title: 'Instant Processing',          desc: 'Compression completes in milliseconds for most images. No upload wait, no processing queue, no email required.' },
                { icon: '📱', title: 'Mobile Friendly',             desc: 'Works on iPhone, Android, and all modern tablet browsers. Upload directly from your camera roll on any device.' },
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
                  icon: '🌐',
                  title: 'Website Performance',
                  desc: 'Compress hero images, product photos, and blog images before uploading to WordPress, Shopify, or any CMS. Smaller images improve Google PageSpeed scores, Core Web Vitals, and search rankings — page speed is a confirmed Google ranking factor.',
                },
                {
                  icon: '📧',
                  title: 'Email Attachments',
                  desc: 'Most email clients have 10–25MB attachment limits that large photos frequently exceed. Compress images before attaching to emails to ensure reliable delivery and faster loading for recipients on mobile.',
                },
                {
                  icon: '📱',
                  title: 'Social Media Uploads',
                  desc: 'Instagram, LinkedIn, and Twitter compress uploaded images again on their servers — often with poor results if your original is already large. Pre-compress to maintain quality control over how your images appear on feeds.',
                },
                {
                  icon: '🛒',
                  title: 'eCommerce Product Images',
                  desc: 'Product page load speed directly impacts conversion rates — a 1-second delay reduces conversions by up to 7%. Compress product images to reduce page weight without any visible impact on the quality shoppers see.',
                },
                {
                  icon: '💾',
                  title: 'Cloud Storage Savings',
                  desc: 'Compress photo libraries before uploading to Google Drive, Dropbox, or iCloud to maximize storage quota and reduce sync time. A folder of 100 photos at 3MB each becomes manageable at 300KB each after compression.',
                },
                {
                  icon: '🖥️',
                  title: 'Web Development',
                  desc: 'Frontend developers use image compression as a standard pre-deployment step to pass Lighthouse performance audits, meet performance budgets, and satisfy Google\'s Core Web Vitals thresholds for Largest Contentful Paint (LCP).',
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

          {/* Section 6 — How it works + Why use */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              How Image Compression Works
            </h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                The compressor uses the browser's HTML5 Canvas API to redraw your image at a
                specified quality level and re-encode it as JPEG or PNG. For JPEG images, the
                quality slider controls how aggressively the DCT (Discrete Cosine Transform)
                compression algorithm discards imperceptible pixel frequency data. At 80% quality,
                this typically achieves a 40–70% file size reduction with zero visible quality
                difference to the human eye.
              </p>
              <p>
                PNG images use lossless compression — the original pixel data is preserved
                exactly, but redundant data patterns in the file structure are eliminated.
                WebP images can use either lossy or lossless compression depending on the
                quality setting.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mt-8 mb-4">
              Why Use This Tool Instead of Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs Photoshop',       point: 'Photoshop costs $20/month and requires installation. This tool opens in 2 seconds in any browser and is completely free.' },
                { label: 'vs TinyPNG / Squoosh', point: 'Many cloud tools upload your images to remote servers. This tool processes everything locally — your images never leave your device.' },
                { label: 'vs WordPress Plugins', point: 'Plugins compress images after upload and often add watermarks on free plans. This tool compresses before upload with no restrictions.' },
                { label: 'vs Canva / Figma',   point: 'Design tools are not optimized for compression. This dedicated compressor gives you precise quality control with a real-time size preview.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword variation paragraph */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Image Compressor Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you are searching for a <strong>jpg to pdf converter online</strong> that
                also compresses, a way to <strong>reduce image size online free</strong> without
                installing software, or a <strong>compress jpeg online</strong> tool that works
                from your phone — this tool handles all of it. There is no need to switch between
                different tools for different formats or different use cases.
              </p>
              <p>
                The biggest advantage of this <strong>free image optimizer</strong> over most
                alternatives is privacy. Cloud-based compression tools upload your images to
                remote servers — exposing potentially sensitive content like ID documents,
                client work, or proprietary product images. Every byte of compression here
                runs as JavaScript in your browser tab, making it the most secure option
                available for free online image compression.
              </p>
            </div>
          </section>

          {/* Section 8 — FAQ */}
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

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Image Compression Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/compress-image-to-50kb',            label: 'Compress Image to 50KB',              desc: 'Reduce any image down to under 50KB for size-restricted uploads' },
                { href: '/compress-image-to-100kb',           label: 'Compress Image to 100KB',             desc: 'Target exactly 100KB for government forms and portals' },
                { href: '/compress-jpeg-without-losing-quality', label: 'Compress JPEG Without Losing Quality', desc: 'Maximum JPEG compression with no visible artifacts' },
                { href: '/reduce-png-file-size',              label: 'Reduce PNG File Size',                 desc: 'Lossless PNG optimization for logos and graphics' },
                { href: '/compress-image-for-website',        label: 'Compress Image for Website',           desc: 'Optimize images specifically for web performance' },
                { href: '/compress-image-to-200kb',           label: 'Compress Image to 200KB',             desc: 'Target 200KB file size for social media and email' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors group">
                  <div className="font-semibold text-amber-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-amber-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Image Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-online',          icon: '📐', label: 'Resize Image Online',          desc: 'Resize images to any pixel dimension with aspect ratio lock' },
                { href: '/jpg-to-png-converter-online',  icon: '🔄', label: 'JPG to PNG Converter',         desc: 'Convert JPEG images to lossless PNG format instantly' },
                { href: '/image-to-pdf-converter-online',icon: '📄', label: 'Image to PDF Converter',       desc: 'Combine multiple images into a single PDF file' },
                { href: '/color-picker-online',          icon: '🎨', label: 'Color Picker Online',          desc: 'Get HEX, RGB, HSL, and CMYK values from any color' },
                { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',          desc: 'Count words and characters in your content' },
                { href: '/meta-tag-generator-online',    icon: '🔍', label: 'Meta Tag Generator',           desc: 'Generate SEO meta tags for your optimized pages' },
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
      <Footer />
    </>
  );
}