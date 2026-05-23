import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../../components/AdBanner';
import ToolCard from '../../../components/ToolCard';
import ImageCompressor from '../../../components/tools/ImageCompressor';
import { SITE_CONFIG, tools } from '../../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Image Compressor – Compress Images Online Free Without Losing Quality',
  description: 'Compress JPEG, PNG and WebP images online for free. Reduce image file size by up to 90% without losing quality. No upload, no signup — works in your browser.',
  keywords: [
    'image compressor',
    'compress image online',
    'reduce image size',
    'image optimizer',
    'compress jpeg online',
    'compress png online',
    'free image compression',
    'reduce photo size',
    'image size reducer',
    'compress image without losing quality',
  ],
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/image-compressor`,
  },
  openGraph: {
    title: 'Image Compressor – Compress Images Online Free',
    description: 'Compress JPEG, PNG and WebP images online for free. Reduce file size by up to 90% without losing quality. Browser-based, no upload required.',
    url: `${SITE_CONFIG.url}/tools/image-compressor`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Compressor – Compress Images Online Free',
    description: 'Reduce image file size by up to 90% without losing quality. Free, instant, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Related tools ─────────────────────────────────────────────
const relatedTools = tools.filter(t =>
  ['image-resizer', 'jpg-to-png', 'qr-code-generator', 'color-picker'].includes(t.slug)
);

// ── Structured Data ───────────────────────────────────────────
const faqs = [
  {
    q: 'How do I compress an image without losing quality?',
    a: 'Use the quality slider and set it between 70–85%. This range reduces file size by 40–70% while keeping the image visually identical to the original. Our tool uses browser-based Canvas compression to achieve the best balance.',
  },
  {
    q: 'What image formats can I compress?',
    a: 'Our image compressor supports JPEG, JPG, PNG, and WebP formats. JPEG compression is lossy (adjustable quality), while PNG compression is lossless.',
  },
  {
    q: 'Is there a file size limit for compression?',
    a: 'You can compress images up to 10MB in size. For best performance, images under 5MB compress fastest.',
  },
  {
    q: 'Are my images uploaded to a server?',
    a: 'No. All compression happens locally in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server.',
  },
  {
    q: 'How much can I reduce an image file size?',
    a: 'Typically between 40–90% depending on the original image and quality setting. A 3MB photo can often be reduced to under 500KB with no visible quality loss.',
  },
  {
    q: 'Can I compress multiple images at once?',
    a: 'Currently the tool compresses one image at a time. Batch compression support is planned for a future update.',
  },
  {
    q: 'Why should I compress images for my website?',
    a: 'Smaller images load faster, improving your Core Web Vitals score, Google PageSpeed score, and overall user experience. Google uses page speed as a ranking factor, so image compression directly helps your SEO.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Image Compressor',
      description: 'Free online tool to compress JPEG, PNG and WebP images without losing quality. Reduce file size by up to 90% in your browser.',
      url: `${SITE_CONFIG.url}/tools/image-compressor`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_CONFIG.url}/#image` },
        { '@type': 'ListItem', position: 3, name: 'Image Compressor', item: `${SITE_CONFIG.url}/tools/image-compressor` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click the upload area or drag and drop your JPEG, PNG, or WebP image.' },
        { '@type': 'HowToStep', position: 2, name: 'Set quality level', text: 'Adjust the quality slider. 80% is recommended for the best size/quality balance.' },
        { '@type': 'HowToStep', position: 3, name: 'Compress', text: 'Click "Compress Image" to start. The compressed preview appears instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Click Download to save your compressed image.' },
      ],
    },
  ],
};

export default function ImageCompressorPage() {
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
                <li>/</li>
                <li><Link href="/#image" className="hover:text-brand-600 transition-colors text-amber-600">Image Tools</Link></li>
                <li>/</li>
                <li className="text-surface-800 font-medium">Image Compressor</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Image Compressor
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Compress JPEG, PNG, and WebP images online for free. Reduce file size by up to 90%
              without losing quality — no upload, no signup, works entirely in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 No Upload', '💧 No Watermark', '⚡ Instant', '📱 Mobile Friendly', '🖼️ JPEG · PNG · WebP'].map(b => (
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

          {/* About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Compress Images Online — Free & Without Losing Quality
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our <strong>free image compressor</strong> reduces JPEG, PNG, and WebP file sizes
                by up to 90% while keeping your images looking sharp and professional. Unlike many
                online tools, all compression happens directly in your browser using the HTML5 Canvas
                API — your images are never uploaded to any server.
              </p>
              <p>
                Compressing images is one of the most impactful things you can do for website
                performance. Large images are the number one cause of slow page load times, and
                Google uses page speed as a direct ranking factor. A 3MB hero image reduced to
                300KB can cut your page load time in half.
              </p>
              <p>
                Set the quality slider to your preferred level (80% is ideal for most use cases),
                preview the result side-by-side with the original, and download in one click.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Compress an Image Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📤', title: 'Upload Image', desc: 'Click or drag & drop your JPEG, PNG, or WebP image into the upload area.' },
                { step: '02', icon: '🎚️', title: 'Set Quality', desc: 'Adjust the quality slider. 80% gives the best balance of size and visual quality.' },
                { step: '03', icon: '🗜️', title: 'Compress', desc: 'Click "Compress Image". See the size reduction percentage instantly.' },
                { step: '04', icon: '⬇️', title: 'Download', desc: 'Download your compressed image and use it anywhere.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quality guide */}
          <section aria-labelledby="quality-heading">
            <h2 id="quality-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Choosing the Right Compression Quality
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { range: '90–100%', label: 'High Quality', color: 'emerald', desc: 'Near-lossless. Minimal size reduction (~10–20%). Best for professional photography and print.' },
                { range: '70–85%', label: 'Recommended', color: 'brand', desc: 'Best balance. Size reduction of 40–70% with no visible quality loss. Perfect for websites.' },
                { range: '40–65%', label: 'Maximum Compression', color: 'amber', desc: 'Aggressive compression. 70–90% size reduction. Suitable for thumbnails and previews.' },
              ].map(q => (
                <div key={q.range} className={`p-5 rounded-2xl border-2 ${
                  q.color === 'brand' ? 'bg-brand-50 border-brand-300' :
                  q.color === 'emerald' ? 'bg-emerald-50 border-emerald-200' :
                  'bg-amber-50 border-amber-200'
                }`}>
                  <div className={`text-2xl font-display font-bold mb-1 ${
                    q.color === 'brand' ? 'text-brand-700' :
                    q.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                  }`}>{q.range}</div>
                  <div className={`font-semibold mb-2 text-sm ${
                    q.color === 'brand' ? 'text-brand-800' :
                    q.color === 'emerald' ? 'text-emerald-800' : 'text-amber-800'
                  }`}>{q.label} {q.color === 'brand' && '⭐'}</div>
                  <p className="text-sm text-surface-600 leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              When to Compress Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🌐', title: 'Website Optimization', desc: 'Reduce page weight to improve load speed, Core Web Vitals, and Google search rankings.' },
                { icon: '📧', title: 'Email Attachments', desc: 'Shrink photos before emailing to avoid size limits and ensure fast delivery.' },
                { icon: '📱', title: 'Social Media', desc: 'Compress images to meet platform size limits for Instagram, Twitter, and Facebook.' },
                { icon: '🛒', title: 'eCommerce Product Photos', desc: 'Faster product image loading directly increases conversion rates and reduces bounce.' },
                { icon: '💾', title: 'Storage Saving', desc: 'Free up disk space on your device, cloud storage, or hosting by compressing photo libraries.' },
                { icon: '📊', title: 'Presentations & Docs', desc: 'Compress images before inserting into PowerPoint or Google Slides to keep file sizes small.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
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
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

          {/* More tools */}
          <section aria-labelledby="more-tools-heading">
            <h2 id="more-tools-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Image Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}