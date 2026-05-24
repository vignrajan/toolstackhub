import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RegexTester from '../../components/tools/RegexTester';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Regex Tester Online – Test Regular Expressions in Real Time',
  description: 'Test and debug regular expressions online for free. Real-time match highlighting, capture groups, and all JS flags (g, i, m, s). No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/regex-tester-online` },
  openGraph: {
    title: 'Regex Tester Online – Test Regular Expressions in Real Time',
    description: 'Test and debug regular expressions online for free. Real-time match highlighting, capture groups, and all JS flags (g, i, m, s). No signup required. Try now!',
    url: `${SITE_CONFIG.url}/regex-tester-online`,
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
      name: 'Free Regex Tester',
      description: 'Test and debug regular expressions online for free. Real-time match highlighting, capture groups, and all JS flags (g, i, m, s). No signup required. Try now!',
      url: `${SITE_CONFIG.url}/regex-tester-online`,
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
        { '@type': 'ListItem', position: 3, name: 'Free Regex Tester', item: `${SITE_CONFIG.url}/regex-tester-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/json-formatter-online', label: 'JSON Formatter Online', desc: 'Format JSON to extract data with regex' },
              { href: '/url-encoder-online', label: 'URL Encoder Online', desc: 'Encode URL patterns for use in regex' },
              { href: '/css-minifier-online', label: 'CSS Minifier Online', desc: 'Minify CSS after regex find/replace' },
              { href: '/base64-encoder-online', label: 'Base64 Encoder Online', desc: 'Encode data found via regex' },
];

const variantLinks = [
];

const faqs = [
  { q: 'What regex syntax is supported?', a: 'JavaScript (ECMAScript) regex — compatible with JS, Java, Python (mostly), PHP, and Ruby.' },
  { q: 'What do the regex flags do?', a: 'g = all matches, i = case-insensitive, m = ^ and $ match line boundaries, s = dot matches newlines.' },
  { q: 'Can I test capture groups?', a: 'Yes — all capture groups and their matched values are displayed in the results panel.' },
  { q: 'What happens if my regex has an error?', a: 'A clear syntax error message appears immediately so you can identify and fix the issue.' },
  { q: 'Is the regex tester free?', a: 'Yes — completely free with no account or download required.' },
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
                <li className="text-surface-800 font-medium">Free Regex Tester</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Regex Tester Online – Test Regular Expressions with Live Highlighting
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Test and debug regular expressions online for free. Real-time match highlighting, capture groups, and all JS flags (g, i, m, s). No signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RegexTester />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Regex Tester" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '✅', title: 'Form Validation', desc: 'Build and test email, phone, URL, and password validation patterns before implementing in code.' },
              { icon: '📋', title: 'Log File Parsing', desc: 'Create patterns to extract IPs, timestamps, and error codes from log files.' },
              { icon: '🔄', title: 'Find & Replace', desc: 'Test search patterns before using in code editor find-and-replace or text processing scripts.' },
              { icon: '🌐', title: 'URL Pattern Matching', desc: 'Build regex patterns for URL routing and path matching in Express.js and Next.js.' },
              { icon: '🧹', title: 'Data Cleaning', desc: 'Test patterns to remove unwanted characters and invalid data in text processing pipelines.' },
              { icon: '🔐', title: 'Security Validation', desc: 'Verify input sanitization patterns that filter SQL injection and XSS payloads.' },
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
