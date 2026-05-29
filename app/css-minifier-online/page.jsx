import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import CssMinifier from '../../components/tools/CssMinifier';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'CSS Minifier Online Free – Compress & Minify CSS Instantly',
  description: 'Minify and compress CSS online for free. Remove whitespace and comments. Shows size reduction %. Includes CSS beautifier. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/css-minifier-online` },
  openGraph: {
    title: 'CSS Minifier Online Free – Compress & Minify CSS Instantly',
    description: 'Minify and compress CSS online for free. Remove whitespace and comments. Shows size reduction %. Includes CSS beautifier. No signup. Try now!',
    url: `${SITE_CONFIG.url}/css-minifier-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSS Minifier Online Free – Compress & Minify CSS Instantly',
    description: 'Minify and compress CSS online for free. Remove whitespace and comments. Shows size reduction %. Includes CSS beautifier. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free CSS Minifier',
      description: 'Minify and compress CSS online for free. Remove whitespace and comments. Shows size reduction %. Includes CSS beautifier. No signup. Try now!',
      url: `${SITE_CONFIG.url}/css-minifier-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Free CSS Minifier', item: `${SITE_CONFIG.url}/css-minifier-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/tools/html-formatter', label: 'HTML Formatter Online', desc: 'Beautify and minify HTML files' },
              { href: '/tools/json-formatter', label: 'JSON Formatter Online', desc: 'Format and minify JSON data' },
              { href: '/tools/color-picker', label: 'Color Picker Online', desc: 'Get color codes to use in CSS' },
              { href: '/tools/regex-tester', label: 'Regex Tester Online', desc: 'Test CSS selector patterns' },
];

const variantLinks = [
];

const faqs = [
  { q: 'Does minifying CSS break my styles?', a: 'No — only whitespace and comments are removed. The CSS rules themselves are completely unchanged.' },
  { q: 'How much does it reduce CSS file size?', a: 'Typically 20–60% reduction depending on whitespace and comments in the original.' },
  { q: 'Can it also beautify minified CSS?', a: 'Yes — click Beautify to convert compressed CSS back to clean, readable, properly indented format.' },
  { q: 'Is there a file size limit?', a: 'No — paste CSS of any size.' },
  { q: 'Is my CSS code safe?', a: 'Yes — all processing runs in your browser. Your code is never uploaded to any server.' },
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
                  <Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">
                    Developer Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free CSS Minifier</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free CSS Minifier Online – Minify and Compress CSS for Faster Load Times
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Minify and compress CSS online for free. Remove whitespace and comments. Shows size reduction %. Includes CSS beautifier. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CssMinifier />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free CSS Minifier" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🚀', title: 'Production Deployment', desc: 'Minify CSS before deploying to production to reduce page weight and improve Core Web Vitals.' },
              { icon: '📦', title: 'CDN Optimization', desc: 'Compress CSS served via CDN to reduce bandwidth costs and improve global delivery speed.' },
              { icon: '⚡', title: 'PageSpeed Improvement', desc: 'Eliminate CSS file size as a factor in Google PageSpeed Insights and Lighthouse audits.' },
              { icon: '📧', title: 'Email CSS', desc: 'Minify inline CSS in HTML email templates to reduce size and improve deliverability.' },
              { icon: '🔍', title: 'Third-Party CSS', desc: 'Beautify minified CSS from third-party libraries to read, understand, and debug them.' },
              { icon: '📱', title: 'Mobile Performance', desc: 'Smaller CSS loads faster on mobile connections — critical for users on 3G/4G networks.' },
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
      <RelatedToolsCluster currentSlug="css-minifier-online" />
      <Footer />
    </>
  );
}
