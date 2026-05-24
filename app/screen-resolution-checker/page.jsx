import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ScreenResolution from '../../components/tools/ScreenResolution';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Screen Resolution Checker Online Free – What Is My Screen Size?',
  description: 'Check screen resolution, viewport size, device pixel ratio, and browser dimensions instantly. Updates live on resize. Free. No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/screen-resolution-checker` },
  openGraph: {
    title: 'Screen Resolution Checker Online Free – What Is My Screen Size?',
    description: 'Check screen resolution, viewport size, device pixel ratio, and browser dimensions instantly. Updates live on resize. Free. No signup required. Try now!',
    url: `${SITE_CONFIG.url}/screen-resolution-checker`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free Screen Resolution Checker',
      description: 'Check screen resolution, viewport size, device pixel ratio, and browser dimensions instantly. Updates live on resize. Free. No signup required. Try now!',
      url: `${SITE_CONFIG.url}/screen-resolution-checker`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Free Screen Resolution Checker', item: `${SITE_CONFIG.url}/screen-resolution-checker` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/resize-image-online', label: 'Image Resizer Online', desc: 'Resize images to your detected screen size' },
              { href: '/color-picker-online', label: 'Color Picker Online', desc: 'Check color display capabilities' },
              { href: '/css-minifier-online', label: 'CSS Minifier Online', desc: 'Optimize CSS for different screen sizes' },
              { href: '/meta-tag-generator-online', label: 'Meta Tag Generator', desc: 'Add viewport meta tags' },
];

const variantLinks = [
  { href: '/what-is-my-screen-resolution', label: 'What Is My Screen Resolution' },
              { href: '/browser-viewport-size-checker', label: 'Browser Viewport Size Checker' },
              { href: '/device-pixel-ratio-checker', label: 'Device Pixel Ratio Checker' },
              { href: '/monitor-resolution-checker', label: 'Monitor Resolution Checker' },
];

const faqs = [
  { q: 'What is the difference between screen resolution and viewport?', a: 'Screen resolution is your monitor total pixels. Viewport is the browser visible content area — it changes when you resize the window.' },
  { q: 'What is device pixel ratio (DPR)?', a: 'DPR shows how many physical pixels make one CSS pixel. Retina displays have DPR=2 or 3.' },
  { q: 'Does viewport update when I resize the browser?', a: 'Yes — viewport width and height update in real time as you drag the browser window edge.' },
  { q: 'Is the screen checker free?', a: 'Yes — completely free with no account required.' },
  { q: 'Can I use it on mobile?', a: 'Yes — it detects mobile screen and viewport dimensions accurately on all smartphone and tablet browsers.' },
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
                  <Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">
                    Utility Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free Screen Resolution Checker</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Screen Resolution Checker – Detect Display Size, Viewport & Pixel Ratio
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Check screen resolution, viewport size, device pixel ratio, and browser dimensions instantly. Updates live on resize. Free. No signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ScreenResolution />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Screen Resolution Checker" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📱', title: 'Responsive Testing', desc: 'Check exact viewport dimensions at different browser sizes to verify CSS media query breakpoints.' },
              { icon: '🖥️', title: 'HiDPI Detection', desc: 'Check device pixel ratio to determine whether to serve standard or high-resolution @2x image assets.' },
              { icon: '🐛', title: 'Bug Reproduction', desc: 'Record exact screen and viewport dimensions when filing browser layout bug reports.' },
              { icon: '🎨', title: 'Asset Preparation', desc: 'Verify your display resolution before preparing screen-optimized graphics and icons.' },
              { icon: '⚙️', title: 'Browser Debugging', desc: 'Identify browser window dimensions affecting CSS layout issues and fixed position elements.' },
              { icon: '📊', title: 'Analytics Context', desc: 'Compare your screen size to site analytics data to understand if you match your typical user base.' },
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
