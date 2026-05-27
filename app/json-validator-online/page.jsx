import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'JSON Validator Online Free – Validate JSON Syntax Instantly',
  description: 'Validate JSON syntax online for free. Instantly detect missing commas, unclosed brackets, invalid escapes, and all JSON errors. No signup needed. Try now!',
  keywords: ['json validator', 'json validator online', 'validate json online', 'json syntax checker', 'json lint', 'check json syntax', 'json error checker'],
  alternates: { canonical: `${SITE_CONFIG.url}/json-validator-online` },
  openGraph: {
    title: 'JSON Validator Online Free – Check JSON Syntax Instantly',
    description: 'Validate JSON syntax and find all errors instantly. Free, no signup, runs in your browser.',
    url: `${SITE_CONFIG.url}/json-validator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Validator Online Free – Check JSON Syntax Instantly',
    description: 'Validate JSON syntax online for free. Instantly detect missing commas, unclosed brackets, invalid escapes, and all JSON errors. No signup needed.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JSON Validator Online',
      description: 'Free online tool to validate JSON syntax. Detects all JSON errors with specific error messages and locations.',
      url: `${SITE_CONFIG.url}/json-validator-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a JSON validator check?',
          acceptedAnswer: { '@type': 'Answer', text: 'A JSON validator checks your JSON string against the JSON specification (RFC 8259). It detects missing commas, unclosed brackets and braces, invalid string escape sequences, duplicate keys, trailing commas, and incorrect data types. Any error is reported with a specific message.' },
        },
        {
          '@type': 'Question',
          name: 'Is the JSON validator free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — completely free with no account, no usage limits, and no signup required.' },
        },
        {
          '@type': 'Question',
          name: 'Is my JSON data safe to validate here?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — all validation runs in your browser using JavaScript. Your JSON data is never sent to any server or stored anywhere.' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'JSON Validator Online', item: `${SITE_CONFIG.url}/json-validator-online` },
      ],
    },
  ],
};

const commonErrors = [
  { error: 'Missing comma', example: '{"name": "Alice" "age": 30}', fix: 'Add comma between properties: {"name": "Alice", "age": 30}' },
  { error: 'Trailing comma', example: '{"name": "Alice", "age": 30,}', fix: 'Remove the trailing comma after the last property' },
  { error: 'Unclosed bracket', example: '{"users": [{"id": 1}', fix: 'Close all open brackets: {"users": [{"id": 1}]}' },
  { error: 'Single quotes', example: "{\"name\": 'Alice'}", fix: 'JSON requires double quotes: {"name": "Alice"}' },
  { error: 'Unquoted key', example: '{name: "Alice"}', fix: 'JSON keys must be quoted: {"name": "Alice"}' },
];

export default function JsonValidatorPage() {
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
                <li className="text-surface-800 font-medium">JSON Validator Online</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Validator Online – Check JSON Syntax & Find Errors
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Instantly validate any JSON string for syntax errors. Detects missing commas,
              unclosed brackets, invalid escape sequences, trailing commas, and all other
              JSON specification violations — with specific error messages to help you fix them.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['✅ Free', '🔍 Specific Error Messages', '⚡ Instant Validation', '🔒 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Validator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Common JSON Errors and How to Fix Them
            </h2>
            <p className="text-surface-600 mb-5">
              Our <strong>JSON validator</strong> detects all of these common errors and provides
              specific messages to help you fix them quickly:
            </p>
            <div className="space-y-3">
              {commonErrors.map(e => (
                <div key={e.error} className="p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">❌</span>
                    <div className="flex-1">
                      <div className="font-semibold text-surface-900 mb-1">{e.error}</div>
                      <div className="font-mono text-xs text-red-600 bg-red-50 px-2 py-1 rounded mb-2">{e.example}</div>
                      <div className="text-sm text-emerald-700">
                        <span className="font-medium">Fix: </span>{e.fix}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Is JSON Validation?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                <strong>JSON validation</strong> is the process of checking whether a JSON string
                conforms to the JSON specification defined in RFC 8259. Valid JSON must follow
                strict syntax rules: all keys must be double-quoted strings, values must be one
                of the six allowed types (string, number, object, array, boolean, null), commas
                must separate all elements except the last one, and all opened brackets and braces
                must be properly closed.
              </p>
              <p>
                Our free <strong>JSON validator online</strong> checks all of these rules instantly.
                When you click "Validate", it parses your JSON using the browser's native JSON parser
                and returns either a success message confirming valid JSON, or a specific error
                message identifying the exact problem so you can fix it immediately. This is
                especially important before sending JSON in API requests, storing it in databases,
                or including it in configuration files where a single syntax error can break
                an entire application.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related JSON Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/tools/json-formatter', label: 'JSON Formatter Online', desc: 'Format, validate & minify JSON' },
                { href: '/json-beautifier-online', label: 'JSON Beautifier', desc: 'Beautify and pretty-print JSON' },
                { href: '/json-pretty-print', label: 'JSON Pretty Print', desc: 'Pretty-print with custom indent' },
                { href: '/json-minifier-online', label: 'JSON Minifier', desc: 'Compress JSON for production' },
                { href: '/json-viewer-online', label: 'JSON Viewer', desc: 'View and explore JSON structure' },
                { href: '/regex-tester-online', label: 'Regex Tester', desc: 'Test patterns on JSON strings' },
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
      <RelatedToolsCluster currentSlug="json-validator-online" />
      <Footer />
    </>
  );
}