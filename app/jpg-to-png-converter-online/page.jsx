import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JpgToPng from '../../components/tools/JpgToPng';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JPG to PNG Converter – Convert JPEG to PNG Instantly Free',
  description: 'Convert JPG to PNG online for free. Instant browser-based conversion with no quality loss. No upload required. Preview and download instantly. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/jpg-to-png-converter-online` },
  openGraph: {
    title: 'JPG to PNG Converter – Convert JPEG to PNG Instantly Free',
    description: 'Convert JPG to PNG online for free. Instant browser-based conversion with no quality loss. No upload required. Preview and download instantly. Try now!',
    url: `${SITE_CONFIG.url}/jpg-to-png-converter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PNG Converter – Convert JPEG to PNG Instantly Free',
    description: 'Convert JPG to PNG online for free. Instant browser-based conversion with no quality loss. No upload required. Preview and download instantly.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JPG to PNG Converter',
      description: 'Convert JPG to PNG online for free. Instant browser-based conversion with no quality loss. No upload required. Preview and download instantly. Try now!',
      url: `${SITE_CONFIG.url}/jpg-to-png-converter-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_CONFIG.url}/#image` },
        { '@type': 'ListItem', position: 3, name: 'JPG to PNG Converter', item: `${SITE_CONFIG.url}/jpg-to-png-converter-online` },
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

const relatedLinks = [
  { href: '/compress-image-online', label: 'Compress Image Online', desc: 'Reduce image file size by up to 90%' },
              { href: '/resize-image-online', label: 'Image Resizer Online', desc: 'Resize to any pixel dimension' },
              { href: '/color-picker-online', label: 'Color Picker Online', desc: 'Get HEX, RGB, HSL color codes' },
              { href: '/qr-code-generator-online', label: 'QR Code Generator', desc: 'Create custom QR codes free' },
];

const variantLinks = [
              { href: '/compress-image-online', label: 'Compress PNG After Converting' },
];

const faqs = [
  { q: 'Will I lose quality converting JPG to PNG?', a: 'No additional quality is lost. PNG is lossless so the output matches the source JPG pixel-for-pixel.' },
  { q: 'Why convert JPG to PNG?', a: 'PNG supports transparency (alpha channel) which JPG does not. PNG is also lossless — perfect for logos, icons, and graphics.' },
  { q: 'Does PNG support transparent backgrounds?', a: 'Yes, PNG supports full alpha channel transparency. However a converted JPG will have a solid background since JPG has no transparency channel.' },
  { q: 'Is my image uploaded to a server?', a: 'Conversion runs entirely in your browser using the HTML5 Canvas API. Your file is never uploaded anywhere.' },
  { q: 'Is this converter free?', a: 'Yes — no account, no watermarks, no download limits.' },
  { q: 'Is JPG or PNG better for websites?', a: 'Use JPG for photos and complex images (smaller file size). Use PNG for logos, icons, screenshots, and images needing transparent backgrounds (lossless, larger file size). WebP is best for modern browsers as it supports both.' },
  { q: 'Can I convert PNG to JPG with this tool?', a: 'This tool converts JPG to PNG only. For PNG to JPG conversion, use an image editor or search for a dedicated PNG to JPG converter tool.' },
];

export default function Page() {
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
                <li><span className="text-surface-300">/</span></li>
                <li>
                  <Link href="/#image" className="hover:text-brand-600 transition-colors text-amber-600">
                    Image Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">JPG to PNG Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JPG to PNG Converter Online – Convert JPEG to PNG for Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Convert JPG to PNG online for free. Instant browser-based conversion with no quality loss. No upload required. Preview and download instantly. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎨', title: 'Transparent Backgrounds', desc: 'Convert JPG logos to PNG to place them on any colored background without a white box.' },
              { icon: '🖥️', title: 'UI & App Design', desc: 'Design tools and developers prefer PNG for UI assets and icons that need sharp edges.' },
              { icon: '📝', title: 'Text & Graphics', desc: 'PNG preserves text and sharp edges without the blurring artifacts that JPEG compression introduces.' },
              { icon: '🖨️', title: 'Print Quality', desc: 'PNG lossless compression ensures print designs maintain maximum sharpness and color accuracy.' },
              { icon: '💡', title: 'Platform Requirements', desc: 'Some platforms specifically require PNG format for uploads, especially for logos and icons.' },
              { icon: '🔄', title: 'Further Editing', desc: 'Save as PNG when you plan to edit the image further to avoid quality loss from multiple JPEG saves.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">JPG vs PNG — When to Use Each Format</h2>
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

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {variantLinks.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
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
