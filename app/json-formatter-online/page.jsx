import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Formatter Online Free – Beautify, Validate & Minify JSON',
  description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/json-formatter-online` },
  openGraph: {
    title: 'JSON Formatter Online Free – Beautify, Validate & Minify JSON',
    description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!',
    url: `${SITE_CONFIG.url}/json-formatter-online`,
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
      name: 'JSON Formatter',
      description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!',
      url: `${SITE_CONFIG.url}/json-formatter-online`,
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
        { '@type': 'ListItem', position: 3, name: 'JSON Formatter', item: `${SITE_CONFIG.url}/json-formatter-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/base64-encoder-online', label: 'Base64 Encoder Online', desc: 'Encode/decode Base64 strings in JSON' },
              { href: '/url-encoder-online', label: 'URL Encoder Online', desc: 'Encode URL values in JSON strings' },
              { href: '/uuid-generator-online', label: 'UUID Generator Online', desc: 'Generate UUIDs for JSON objects' },
              { href: '/regex-tester-online', label: 'Regex Tester Online', desc: 'Test patterns on JSON strings' },
];

const variantLinks = [
  { href: '/json-beautifier-online', label: 'JSON Beautifier Online' },
              { href: '/json-validator-online', label: 'JSON Validator Online' },
              { href: '/json-minifier-online', label: 'JSON Minifier Online' },
              { href: '/json-viewer-online', label: 'JSON Viewer Online' },
];

const faqs = [
  { q: 'How do I format minified JSON?', a: 'Paste your minified JSON and click Format — instant indentation and line breaks added.' },
  { q: 'Can it detect JSON errors?', a: 'Yes — syntax errors show a specific message with the problem location.' },
  { q: 'Is there a file size limit?', a: 'No hard limit — large JSON processes based on your device performance.' },
  { q: 'Is my JSON data safe?', a: 'Yes — all processing runs in your browser. Your data is never sent to any server.' },
  { q: 'Can I format JSON on mobile?', a: 'Yes — the tool is responsive and works on all mobile browsers.' },
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
                <li className="text-surface-800 font-medium">JSON Formatter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Formatter Online – Beautify, Validate & Minify JSON Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Formatter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔌', title: 'Debug API Responses', desc: 'Instantly visualize API and webhook payloads by beautifying compressed JSON responses.' },
              { icon: '⚙️', title: 'Config Files', desc: 'Format package.json, tsconfig.json, .eslintrc and other config files for easy editing.' },
              { icon: '🗄️', title: 'Database Records', desc: 'Format MongoDB, Firestore, and DynamoDB documents to understand structure before writing queries.' },
              { icon: '🧪', title: 'Test Payloads', desc: 'Validate JSON request bodies before using in Postman, Insomnia, or curl tests.' },
              { icon: '🚀', title: 'Minify for Production', desc: 'Remove all whitespace to reduce payload size for production API responses.' },
              { icon: '📖', title: 'Schema Validation', desc: 'Check JSON Schema definitions and OpenAPI specs for syntax errors before integration.' },
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
