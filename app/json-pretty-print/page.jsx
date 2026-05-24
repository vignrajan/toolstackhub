import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Pretty Print Online Free – Pretty-Print JSON Instantly',
  description: 'Pretty-print JSON online for free. Paste raw or minified JSON and get clean, indented, syntax-highlighted output. No signup, no install. Try now!',
  keywords: ['json pretty print', 'json pretty printer', 'pretty print json online', 'json pretty format', 'json pretty print free'],
  alternates: { canonical: `${SITE_CONFIG.url}/json-pretty-print` },
  openGraph: {
    title: 'JSON Pretty Print Online Free',
    description: 'Pretty-print JSON with clean indentation and syntax highlighting. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/json-pretty-print`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Pretty Print Online Free',
    description: 'Pretty-print JSON online for free. Paste raw or minified JSON and get clean, indented, syntax-highlighted output. No signup, no install.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is JSON pretty print?', a: 'JSON pretty print formats raw or minified JSON into readable output with consistent indentation and line breaks, making the structure easy to scan and understand.' },
  { q: 'What indentation does pretty print use?', a: 'By default, 2-space indentation is used. Many tools also offer 4-space indentation to match different style guides.' },
  { q: 'Is pretty printing the same as formatting or beautifying?', a: 'Yes — "pretty print", "format", and "beautify" all refer to the same operation: adding whitespace to make JSON human-readable.' },
  { q: 'Does pretty printing validate my JSON?', a: 'Yes — the tool must parse your JSON before printing it. If your JSON has syntax errors, an error message is shown instead.' },
  { q: 'Is my JSON data safe?', a: 'Yes — all processing runs locally in your browser. Your JSON is never sent to any server.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JSON Pretty Print Online',
      description: 'Free online tool to pretty-print and format JSON with clean indentation and syntax highlighting.',
      url: `${SITE_CONFIG.url}/json-pretty-print`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'JSON Pretty Print', item: `${SITE_CONFIG.url}/json-pretty-print` },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'HowTo',
      name: 'How to Pretty Print JSON Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your JSON', text: 'Paste your compact or minified JSON into the input panel.' },
        { '@type': 'HowToStep', position: 2, name: 'Click Pretty Print', text: 'Click the Format or Pretty Print button to apply indentation and line breaks.' },
        { '@type': 'HowToStep', position: 3, name: 'Copy the output', text: 'Click Copy to copy the pretty-printed JSON to your clipboard.' },
      ],
    },
  ],
};

export default function JsonPrettyPrintPage() {
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
                <li className="text-surface-800 font-medium">JSON Pretty Print</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Pretty Print Online – Clean, Indented JSON Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Pretty-print any JSON with perfect indentation and syntax highlighting.
              Choose 2-space or 4-space indent, validate syntax errors, and copy the
              formatted output in one click. Free, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['✅ Free', '📐 2 or 4-Space Indent', '🎨 Syntax Highlighting', '⚡ Instant'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Pretty Print" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Is JSON Pretty Printing?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                <strong>JSON pretty printing</strong> is the process of formatting a compact or
                minified JSON string by adding consistent whitespace, indentation, and line breaks
                to make the data structure visually clear and easy to read. The term comes from
                "pretty-print" — a computer science concept meaning to output data in a
                formatted, human-readable way rather than in its raw compressed form.
              </p>
              <p>
                When you <strong>pretty-print JSON online</strong>, the tool parses the JSON
                and outputs each key-value pair on its own line, with each nested level
                indented by a consistent number of spaces (typically 2 or 4). Arrays are
                expanded with each element on a separate line. This structure makes it easy
                to navigate deeply nested JSON objects without losing track of depth.
              </p>
              <p>
                Pretty-printing is especially valuable when debugging API responses,
                reviewing webhook payloads, reading database documents, or sharing JSON
                structures in documentation and code reviews. A single-line JSON blob
                that is 500 characters long can become a clearly structured 30-line
                document after pretty-printing — transforming something unreadable into
                something immediately understandable.
              </p>
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
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              Related JSON Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/tools/json-formatter', label: 'JSON Formatter Online', desc: 'Format, validate & minify JSON' },
                { href: '/json-beautifier-online', label: 'JSON Beautifier', desc: 'Beautify and pretty-print JSON' },
                { href: '/json-validator-online', label: 'JSON Validator', desc: 'Validate JSON syntax instantly' },
                { href: '/json-minifier-online', label: 'JSON Minifier', desc: 'Compress JSON for production' },
                { href: '/json-viewer-online', label: 'JSON Viewer', desc: 'View and explore JSON structure' },
                { href: '/base64-encoder-online', label: 'Base64 Encoder', desc: 'Encode/decode Base64 in JSON payloads' },
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