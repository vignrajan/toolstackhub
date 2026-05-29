import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../../components/AdBanner';
import ToolCard from '../../../components/ToolCard';
import JpgToPng from '../../../components/tools/JpgToPng';
import { SITE_CONFIG, tools } from '../../../data/tools';

export const metadata = {
  title: 'JPG to PNG Converter – Convert JPEG to PNG Online Free',
  description: 'Convert JPG to PNG online for free. Instant browser-based JPEG to PNG converter with no quality loss. No upload, no signup, download instantly.',
  keywords: [
    'jpg to png',
    'jpeg to png converter',
    'convert jpg to png online',
    'jpg to png free',
    'convert jpeg to png',
    'image format converter',
    'jpg png converter online',
    'change jpg to png',
    'jpg to png without losing quality',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/tools/jpg-to-png` },
  openGraph: {
    title: 'JPG to PNG Converter – Free Online JPEG to PNG Tool',
    description: 'Convert JPG/JPEG images to PNG format instantly. Free, no upload, no quality loss, download in one click.',
    url: `${SITE_CONFIG.url}/tools/jpg-to-png`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PNG Converter – Free Online Tool',
    description: 'Convert JPG to PNG instantly. Free, no upload required, no quality loss.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const relatedTools = tools.filter(t =>
  ['image-compressor', 'image-resizer', 'color-picker', 'qr-code-generator'].includes(t.slug)
);

const faqs = [
  {
    q: 'How do I convert JPG to PNG online?',
    a: 'Upload your JPG or JPEG file, preview it in the tool, then click "Convert to PNG". Your PNG file will be ready to download instantly.',
  },
  {
    q: 'Will I lose quality when converting JPG to PNG?',
    a: 'No. PNG uses lossless compression, so the output will be at least as sharp as your source JPG. You cannot gain quality that was lost during original JPEG compression, but you will not lose any additional quality.',
  },
  {
    q: 'Why convert JPG to PNG?',
    a: 'PNG supports transparency (transparent backgrounds), which JPG does not. PNG is also lossless — perfect for logos, icons, screenshots, and graphics that need crisp edges without compression artifacts.',
  },
  {
    q: 'Does PNG support transparent backgrounds?',
    a: 'Yes, PNG supports full alpha channel transparency. However, when converting from JPG (which has no transparency), the background will be white or solid since JPG cannot contain transparency data.',
  },
  {
    q: 'Is JPG or PNG better for websites?',
    a: 'Use JPG for photos and complex images (smaller file size). Use PNG for logos, icons, screenshots, and images needing transparent backgrounds (lossless, larger file size). WebP is best for modern browsers as it supports both.',
  },
  {
    q: 'Can I convert PNG to JPG with this tool?',
    a: 'This tool converts JPG to PNG only. For PNG to JPG conversion, use an image editor or search for a dedicated PNG to JPG converter tool.',
  },
  {
    q: 'Is my image uploaded to a server?',
    a: 'No. The conversion happens entirely in your browser using the HTML5 Canvas API. Your image never leaves your device.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JPG to PNG Converter',
      description: 'Free online tool to convert JPG and JPEG images to PNG format instantly in your browser. No upload required.',
      url: `${SITE_CONFIG.url}/tools/jpg-to-png`,
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
        { '@type': 'ListItem', position: 3, name: 'JPG to PNG Converter', item: `${SITE_CONFIG.url}/tools/jpg-to-png` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert JPG to PNG Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload JPG', text: 'Click or drag your JPG or JPEG file into the upload area.' },
        { '@type': 'HowToStep', position: 2, name: 'Preview', text: 'Your image is displayed in the preview area.' },
        { '@type': 'HowToStep', position: 3, name: 'Convert', text: 'Click "Convert to PNG".' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Download your PNG file instantly.' },
      ],
    },
  ],
};

export default function JpgToPngPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/#image" className="hover:text-brand-600 transition-colors text-amber-600">Image Tools</Link></li>
                <li>/</li>
                <li className="text-surface-800 font-medium">JPG to PNG Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JPG to PNG Converter
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Convert JPG and JPEG images to PNG format instantly online for free.
              Lossless conversion, no quality loss, no upload required — works entirely in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 No Upload', '🎨 Lossless PNG', '⚡ Instant', '📱 Works on Mobile'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JpgToPng />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JPG to PNG Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Convert JPG to PNG Online — Free & Lossless
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our <strong>free JPG to PNG converter</strong> transforms your JPEG images into
                high-quality PNG files instantly in your browser. PNG uses lossless compression,
                meaning every pixel is preserved exactly — making it ideal for logos, icons,
                screenshots, and any image that needs crisp edges and solid colors.
              </p>
              <p>
                The key difference between JPG and PNG is that <strong>PNG supports transparency</strong>
                while JPG does not. If you need to place an image on a colored background without a
                white box around it, PNG is the format you need.
              </p>
              <p>
                No registration, no server upload, no watermarks. Your image is converted entirely
                in your browser using the HTML5 Canvas API.
              </p>
            </div>
          </section>

          {/* JPG vs PNG comparison */}
          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              JPG vs PNG — When to Use Each Format
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-orange-50 border-2 border-orange-200 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📷</span>
                  <h3 className="font-display font-bold text-lg text-orange-800">JPG / JPEG</h3>
                </div>
                <ul className="space-y-2 text-sm text-orange-900">
                  {['Lossy compression (smaller files)', 'Best for photos and complex images', 'No transparency support', 'Smaller file sizes', 'Best for: blog photos, product images'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-brand-50 border-2 border-brand-300 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🖼️</span>
                  <h3 className="font-display font-bold text-lg text-brand-800">PNG</h3>
                </div>
                <ul className="space-y-2 text-sm text-brand-900">
                  {['Lossless compression (no quality loss)', 'Best for logos, icons, screenshots', 'Full transparency support ✅', 'Larger file sizes', 'Best for: logos, graphics, UI elements'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert JPG to PNG — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📤', title: 'Upload JPG', desc: 'Click the upload area or drag and drop your JPG or JPEG file.' },
                { step: '02', icon: '👁️', title: 'Preview', desc: 'Your original image is shown in the preview. Check it looks correct.' },
                { step: '03', icon: '🔄', title: 'Convert', desc: 'Click "Convert to PNG". The conversion takes less than a second.' },
                { step: '04', icon: '⬇️', title: 'Download PNG', desc: 'Click "Download PNG" to save your converted image.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Convert JPG to PNG?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎨', title: 'Transparent Background', desc: 'PNG supports transparency. Convert your JPG logo to PNG to place it on any colored background without a white box.' },
                { icon: '🖥️', title: 'UI & App Design', desc: 'Design tools and developers prefer PNG for UI assets, icons, and interface elements that need sharp edges.' },
                { icon: '📝', title: 'Text & Graphics', desc: 'PNG preserves text, lines, and sharp edges without the blurring artifacts that JPEG compression introduces.' },
                { icon: '🖨️', title: 'Print Quality', desc: 'PNG\'s lossless compression ensures print designs maintain maximum sharpness and color accuracy.' },
                { icon: '💡', title: 'Platform Requirements', desc: 'Some platforms and tools specifically require PNG format for uploads, especially for logos and icons.' },
                { icon: '🔄', title: 'Further Editing', desc: 'Save as PNG when you need to edit the image further to avoid quality degradation from multiple JPG saves.' },
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