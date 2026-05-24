import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Minifier Online Free – Compress & Minify JSON',
  description: 'Minify and compress JSON online for free. Remove all whitespace to reduce file size for production APIs and configs. No signup, browser-based.',
  keywords: ['json minifier', 'json minifier online', 'minify json online', 'compress json', 'json compressor', 'json minifier free', 'reduce json size'],
  alternates: { canonical: `${SITE_CONFIG.url}/json-minifier-online` },
  openGraph: {
    title: 'JSON Minifier Online Free – Compress & Minify JSON',
    description: 'Minify JSON to remove all whitespace and reduce file size. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/json-minifier-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Minifier Online Free – Compress & Minify JSON',
    description: 'Minify and compress JSON online for free. Remove all whitespace to reduce file size for production APIs and configs. No signup, browser-based.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What does a JSON minifier do?', a: 'A JSON minifier removes all unnecessary whitespace, line breaks, and indentation from JSON, compressing it into a single line to reduce file size.' },
  { q: 'Does minifying change my JSON data?', a: 'No — minifying only removes whitespace. All keys, values, and structure remain exactly the same.' },
  { q: 'Why should I minify JSON?', a: 'Minified JSON reduces file size, which speeds up API responses, reduces bandwidth usage, and improves page load times in production applications.' },
  { q: 'Can I reverse minified JSON back to readable format?', a: 'Yes — use the JSON Formatter or JSON Beautifier to re-expand minified JSON back into indented, readable format.' },
  { q: 'Is my JSON data safe?', a: 'Yes — all processing runs locally in your browser. Your JSON is never sent to any server.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JSON Minifier Online',
      description: 'Free online tool to minify and compress JSON by removing all whitespace. Reduces file size for production use.',
      url: `${SITE_CONFIG.url}/json-minifier-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'JSON Minifier Online', item: `${SITE_CONFIG.url}/json-minifier-online` },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'HowTo',
      name: 'How to Minify JSON Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your JSON', text: 'Paste your formatted or beautified JSON into the input panel.' },
        { '@type': 'HowToStep', position: 2, name: 'Click Minify', text: 'Click the Minify button to strip all whitespace and compress to a single line.' },
        { '@type': 'HowToStep', position: 3, name: 'Copy the output', text: 'Click Copy to copy the minified JSON string to your clipboard.' },
      ],
    },
  ],
};

export default function JsonMinifierPage() {
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
                <li className="text-surface-800 font-medium">JSON Minifier Online</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Minifier Online – Compress JSON for Production
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Remove all whitespace from your JSON to reduce file size for production APIs,
              configuration files, and data payloads. Paste formatted JSON, click Minify,
              and copy the compact output. Free, instant, no signup.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['✅ Free', '📦 Reduces File Size', '⚡ Instant', '🔒 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Minifier" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Why Minify JSON?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                <strong>JSON minification</strong> removes all unnecessary whitespace — spaces,
                tabs, and newlines — from a JSON document, producing a compact single-line string
                that is functionally identical to the original but significantly smaller in file size.
                For a typical JSON configuration file or API response, minification can reduce size by
                20–60%, depending on how much whitespace and indentation was present.
              </p>
              <p>
                In production environments, smaller payloads mean faster API response times,
                reduced bandwidth costs, and better application performance. Every millisecond
                saved in data transfer adds up across thousands or millions of requests per day.
                Minified JSON is also harder for humans to casually read, which provides a minor
                additional layer of obfuscation for configuration data.
              </p>
              <p>
                The <strong>JSON minifier online</strong> workflow is simple: paste your formatted
                JSON, click "Minify" in the toolbar, and copy the compressed output. Use it before
                deploying configuration files, embedding JSON in HTML, storing JSON in database
                columns, or sending JSON payloads in API requests where bandwidth efficiency matters.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              JSON Minifier vs JSON Formatter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                <div className="font-semibold text-surface-900 mb-2">📦 JSON Minifier</div>
                <ul className="text-sm text-surface-600 space-y-1">
                  <li>→ Removes all whitespace</li>
                  <li>→ Produces single-line output</li>
                  <li>→ Reduces file size 20–60%</li>
                  <li>→ Best for production deployment</li>
                  <li>→ Harder to read (intentional)</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="font-semibold text-blue-900 mb-2">{ } JSON Formatter</div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>→ Adds indentation and line breaks</li>
                  <li>→ Produces multi-line output</li>
                  <li>→ Larger file size</li>
                  <li>→ Best for development and debugging</li>
                  <li>→ Easy to read (intentional)</li>
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
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related JSON Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/tools/json-formatter', label: 'JSON Formatter Online', desc: 'Format, validate & minify JSON' },
                { href: '/json-beautifier-online', label: 'JSON Beautifier', desc: 'Beautify and pretty-print JSON' },
                { href: '/json-pretty-print', label: 'JSON Pretty Print', desc: 'Pretty-print with custom indent' },
                { href: '/json-validator-online', label: 'JSON Validator', desc: 'Validate JSON syntax instantly' },
                { href: '/json-viewer-online', label: 'JSON Viewer', desc: 'View and explore JSON structure' },
                { href: '/css-minifier-online', label: 'CSS Minifier', desc: 'Minify CSS files for production' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex flex-col gap-1 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors">
                  <div className="font-semibold text-surface-800 text-sm">{l.label}</div>
                  <div className="text-xs text-surface-500">{l.desc}</div>
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