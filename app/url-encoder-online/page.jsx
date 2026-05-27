import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import UrlEncoder from '../../components/tools/UrlEncoder';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'URL Encoder Decoder – Encode & Decode URLs Instantly Free',
  description: 'Encode or decode URLs and query strings online for free. Convert special characters to percent-encoded format and back. Supports Unicode. No signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/url-encoder-online` },
  openGraph: {
    title: 'URL Encoder Decoder – Encode & Decode URLs Instantly Free',
    description: 'Encode or decode URLs and query strings online for free. Convert special characters to percent-encoded format and back. Supports Unicode. No signup.',
    url: `${SITE_CONFIG.url}/url-encoder-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Encoder Decoder – Encode & Decode URLs Instantly Free',
    description: 'Encode or decode URLs and query strings online for free. Convert special characters to percent-encoded format. Supports Unicode. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'URL Encoder & Decoder',
      description: 'Encode or decode URLs and query strings online for free. Convert special characters to percent-encoded format and back. Supports Unicode. No signup.',
      url: `${SITE_CONFIG.url}/url-encoder-online`,
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
        { '@type': 'ListItem', position: 3, name: 'URL Encoder & Decoder', item: `${SITE_CONFIG.url}/url-encoder-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/base64-encoder-online', label: 'Base64 Encoder Online', desc: 'Encode/decode Base64 strings' },
              { href: '/json-formatter-online', label: 'JSON Formatter Online', desc: 'Format JSON with URL-encoded values' },
              { href: '/meta-tag-generator-online', label: 'Meta Tag Generator', desc: 'Generate canonical URLs properly' },
              { href: '/regex-tester-online', label: 'Regex Tester Online', desc: 'Test URL patterns with regex' },
];

const variantLinks = [
];

const faqs = [
  { q: 'What is URL encoding?', a: 'Converting characters unsafe in URLs to percent format — space becomes %20, & becomes %26.' },
  { q: 'When should I encode a URL?', a: 'Before using user input as a query parameter value, or when a URL contains special or Unicode characters.' },
  { q: 'Is URL encoding the same as Base64?', a: 'No — they are different encoding schemes for different purposes.' },
  { q: 'Is my URL data safe?', a: 'Yes — all encoding/decoding runs in your browser. Nothing is sent to a server.' },
  { q: 'Does it handle full URLs or just parameters?', a: 'Both — encode an entire URL or just individual query parameter values.' },
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
                <li className="text-surface-800 font-medium">URL Encoder & Decoder</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              URL Encoder & Decoder Online – Encode and Decode URLs Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Encode or decode URLs and query strings online for free. Convert special characters to percent-encoded format and back. Supports Unicode. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <UrlEncoder />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="URL Encoder & Decoder" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔌', title: 'API Query Strings', desc: 'Encode query parameter values before appending to API endpoint URLs for safe transmission.' },
              { icon: '📊', title: 'Analytics Decoding', desc: 'Decode percent-encoded URLs from Google Analytics and Search Console reports.' },
              { icon: '🔐', title: 'OAuth Redirects', desc: 'Encode redirect_uri values for OAuth2 authorization flows where callbacks must be encoded.' },
              { icon: '🌐', title: 'International URLs', desc: 'Encode Unicode characters for international domain names and non-ASCII query parameters.' },
              { icon: '📧', title: 'Email Link Parameters', desc: 'Encode UTM tracking parameters in email links to ensure they survive email client processing.' },
              { icon: '🔍', title: 'Search URL Building', desc: 'Build search URLs with properly encoded query parameters for complex search queries.' },
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
      <RelatedToolsCluster currentSlug="url-encoder-online" />
      <Footer />
    </>
  );
}
