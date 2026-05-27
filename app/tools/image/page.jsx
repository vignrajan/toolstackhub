import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Free Image Tools – Compress, Resize, Convert Images Online',
  description: 'Free online image tools: compress images, resize photos, convert JPG to PNG, convert images to PDF, and more. No upload, no signup — 100% browser-based.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/image` },
  openGraph: {
    title: 'Free Image Tools – Compress, Resize, Convert Images Online',
    description: 'Free browser-based image tools. Compress, resize, convert formats, and more — no server upload.',
    url: `${SITE_CONFIG.url}/tools/image`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image Tools – Compress, Resize, Convert Images Online',
    description: 'Free browser-based image tools. Compress, resize, convert — no upload needed.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const IMAGE_TOOLS = [
  { href: '/compress-image-online',       icon: '🗜️', name: 'Image Compressor',       desc: 'Reduce JPEG, PNG, and WebP file sizes by up to 90% without visible quality loss.' },
  { href: '/resize-image-online',         icon: '📐', name: 'Image Resizer',           desc: 'Resize images to exact pixel dimensions with optional aspect ratio lock.' },
  { href: '/jpg-to-png-converter-online', icon: '🔄', name: 'JPG to PNG Converter',   desc: 'Convert JPEG images to PNG format with transparency support.' },
  { href: '/image-to-pdf-converter-online', icon: '📄', name: 'Image to PDF',          desc: 'Combine one or more images into a single PDF document instantly.' },
  { href: '/color-picker-online',         icon: '🎨', name: 'Color Picker',           desc: 'Pick, convert, and copy color codes in HEX, RGB, and HSL formats.' },
  { href: '/compress-image-online',       icon: '📸', name: 'WebP Compressor',        desc: 'Compress WebP files for faster web page loading.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Image Tools Online',
      description: 'Free browser-based image tools: compress, resize, convert JPG to PNG, create PDFs from images, pick colors, and more.',
      url: `${SITE_CONFIG.url}/tools/image`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_CONFIG.url}/tools/image` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are these image tools free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — all image tools on ToolStackHub are completely free with no signup, no watermarks, and no usage limits.' },
        },
        {
          '@type': 'Question',
          name: 'Do you upload my images to a server?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. All image processing runs entirely in your browser using the Canvas API and JavaScript. Your images never leave your device.' },
        },
        {
          '@type': 'Question',
          name: 'What image formats are supported?',
          acceptedAnswer: { '@type': 'Answer', text: 'JPEG, PNG, and WebP for compression and resizing. JPG to PNG conversion is also available. PDF output is supported via the Image to PDF tool.' },
        },
      ],
    },
  ],
};

export default function ImageToolsCategoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Image Tools</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl">🖼️</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Image Tools Online
                </h1>
                <p className="text-surface-500 mt-1">{IMAGE_TOOLS.length} tools · All free · No server upload</p>
              </div>
            </div>
            <p className="text-surface-600 text-lg leading-relaxed max-w-3xl">
              Compress, resize, convert, and optimize images directly in your browser. No server
              uploads, no watermarks, no sign-up. Your images never leave your device — everything
              runs locally using the browser&apos;s Canvas API.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ No Server Upload', '🔒 100% Private', '🆓 Always Free', '📱 Mobile Friendly', '⚡ Instant Results'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {IMAGE_TOOLS.map(tool => (
              <Link
                key={tool.href + tool.name}
                href={tool.href}
                className="group flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl">
                    {tool.icon}
                  </div>
                  <div className="font-semibold text-sm text-surface-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {tool.name}
                  </div>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>

          {/* SEO content */}
          <div className="space-y-10 max-w-3xl">
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Why Use Browser-Based Image Tools?
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  Traditional image editing requires desktop software like Photoshop, GIMP, or
                  Lightroom — all of which need installation and steep learning curves. For the
                  most common tasks (compressing a JPEG before uploading, resizing a banner to
                  exact pixel dimensions, converting a PNG to JPG), browser-based tools are
                  infinitely faster.
                </p>
                <p>
                  Our{' '}
                  <Link href="/compress-image-online" className="text-amber-700 hover:underline font-medium">image compressor</Link>{' '}
                  uses the browser&apos;s native Canvas API to reduce file sizes by 40–90% without
                  installing anything. The{' '}
                  <Link href="/resize-image-online" className="text-amber-700 hover:underline font-medium">image resizer</Link>{' '}
                  lets you set exact pixel dimensions with aspect ratio lock, perfect for social
                  media thumbnails and banner ads. The{' '}
                  <Link href="/jpg-to-png-converter-online" className="text-amber-700 hover:underline font-medium">JPG to PNG converter</Link>{' '}
                  handles format conversion while preserving image quality.
                </p>
                <p>
                  Since all processing happens locally, there is zero privacy risk. Your photos,
                  company logos, and design assets never touch any external server. This makes
                  ToolStackHub image tools suitable for processing confidential documents,
                  sensitive images, and proprietary assets.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Are these image tools free?', a: 'Yes — all image tools on ToolStackHub are completely free with no signup, no watermarks, and no usage limits.' },
                  { q: 'Do you upload my images to a server?', a: 'No. All image processing runs entirely in your browser using the Canvas API and JavaScript. Your images never leave your device.' },
                  { q: 'What image formats are supported?', a: 'JPEG, PNG, and WebP for compression and resizing. JPG to PNG conversion is available. PDF output via the Image to PDF converter.' },
                ].map(faq => (
                  <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                    <summary className="font-semibold text-surface-900 cursor-pointer">{faq.q}</summary>
                    <p className="mt-2 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
