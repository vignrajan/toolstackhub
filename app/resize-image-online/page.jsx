import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ImageResizer from '../../components/tools/ImageResizer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Resize Image Online Free – Resize to Any Pixel Dimension',
  description: 'Resize images online for free to any pixel dimensions. Set exact width and height, maintain aspect ratio, use presets, download instantly. No signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/resize-image-online` },
  openGraph: {
    title: 'Resize Image Online Free – Resize to Any Pixel Dimension',
    description: 'Resize images online for free to any pixel dimensions. Set exact width and height, maintain aspect ratio, use presets, download instantly. No signup.',
    url: `${SITE_CONFIG.url}/resize-image-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Online Free – Resize to Any Pixel Dimension',
    description: 'Resize images online for free to any pixel dimensions. Set exact width and height, maintain aspect ratio, use presets, download instantly. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Resize Image',
      description: 'Resize images online for free to any pixel dimensions. Set exact width and height, maintain aspect ratio, use presets, download instantly. No signup.',
      url: `${SITE_CONFIG.url}/resize-image-online`,
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
        { '@type': 'ListItem', position: 3, name: 'Resize Image', item: `${SITE_CONFIG.url}/resize-image-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click or drag your image into the upload area.' },
        { '@type': 'HowToStep', position: 2, name: 'Set dimensions', text: 'Enter your desired width and height in pixels, or choose a preset size.' },
        { '@type': 'HowToStep', position: 3, name: 'Resize', text: 'Click "Resize Image" to process.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Download your resized image.' },
      ],
    },
  ],
};

const presets = [
  { name: 'HD', size: '1280 × 720px', use: 'YouTube thumbnails, presentations' },
  { name: 'Full HD', size: '1920 × 1080px', use: 'Wallpapers, website banners' },
  { name: 'Social Square', size: '1080 × 1080px', use: 'Instagram, Facebook posts' },
  { name: 'Profile Picture', size: '400 × 400px', use: 'Profile avatars, team photos' },
  { name: 'Twitter Header', size: '1500 × 500px', use: 'Twitter/X profile header' },
  { name: 'Thumbnail', size: '150 × 150px', use: 'Website thumbnails, icons' },
];

const relatedLinks = [
  { href: '/compress-image-online', label: 'Compress Image Online', desc: 'Reduce image file size by up to 90%' },
              { href: '/jpg-to-png-converter-online', label: 'JPG to PNG Converter', desc: 'Convert JPEG to lossless PNG' },
              { href: '/color-picker-online', label: 'Color Picker Online', desc: 'Get HEX, RGB, HSL color codes' },
              { href: '/screen-resolution-checker', label: 'Screen Resolution Checker', desc: 'Check your display dimensions' },
];

const variantLinks = [
];

const faqs = [
  { q: 'How do I resize an image without losing quality?', a: 'Reducing size maintains quality well. Enlarging beyond original resolution reduces sharpness as new pixels must be interpolated.' },
  { q: 'What is aspect ratio lock?', a: 'Keeps width and height proportional so your image never looks stretched or squished when resizing.' },
  { q: 'What formats does the resizer support?', a: 'JPEG, PNG, and WebP. The output format matches the input format.' },
  { q: 'Is my image uploaded to a server?', a: 'No. All resizing happens locally in your browser via the HTML5 Canvas API.' },
  { q: 'Is the image resizer free?', a: 'Yes — completely free with no account, no limits, and no watermarks.' },
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
                <li className="text-surface-800 font-medium">Resize Image</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Resize Image Online – Change Image Dimensions to Any Size
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Resize images online for free to any pixel dimensions. Set exact width and height, maintain aspect ratio, use presets, download instantly. No signup required.</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageResizer />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Resize Image" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📱', title: 'Social Media', desc: 'Resize photos to exact platform requirements for Instagram, Facebook, Twitter, and LinkedIn.' },
              { icon: '🌐', title: 'Website Images', desc: 'Resize to exact display dimensions before uploading to your CMS to avoid browser-side scaling.' },
              { icon: '📧', title: 'Email Campaigns', desc: 'Reduce image dimensions before using in email to improve loading speed and deliverability.' },
              { icon: '🖨️', title: 'Print & Documents', desc: 'Match specific DPI and pixel requirements for print designs and document layouts.' },
              { icon: '🎮', title: 'App Assets', desc: 'Resize sprites, icons, and textures to exact sizes required by mobile apps and game engines.' },
              { icon: '👤', title: 'Profile Pictures', desc: 'Resize profile photos to perfect squares for platforms requiring specific avatar dimensions.' },
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

          <section aria-labelledby="presets-heading">
            <h2 id="presets-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Common Image Size Presets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {presets.map(p => (
                <div key={p.name} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-amber-300 transition-colors">
                  <div className="font-semibold text-surface-900 mb-1">{p.name}</div>
                  <div className="font-mono text-sm text-amber-700 bg-amber-50 px-2 py-0.5 rounded mb-2 inline-block">{p.size}</div>
                  <div className="text-xs text-surface-500">{p.use}</div>
                </div>
              ))}
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
