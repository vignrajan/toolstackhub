import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Formatter Online – Beautify, Validate & Minify JSON',
  description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/json-formatter-online` },
  openGraph: {
    title: 'JSON Formatter Online – Beautify, Validate & Minify JSON',
    description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required. Try now!',
    url: `${SITE_CONFIG.url}/json-formatter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Formatter Online – Beautify, Validate & Minify JSON',
    description: 'Format, validate, and beautify JSON online for free. Instant syntax highlighting, error detection, and minifier included. No signup required.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'How do I format minified JSON?', a: 'Paste your minified JSON and click Format — instant indentation and line breaks added.' },
  { q: 'Can it detect JSON errors?', a: 'Yes — syntax errors show a specific message with the problem location.' },
  { q: 'Is there a file size limit?', a: 'No hard limit — large JSON processes based on your device performance.' },
  { q: 'Is my JSON data safe?', a: 'Yes — all processing runs in your browser. Your data is never sent to any server.' },
  { q: 'Can I format JSON on mobile?', a: 'Yes — the tool is responsive and works on all mobile browsers.' },
  { q: 'What is a JSON formatter?', a: 'A JSON formatter is an online tool that takes minified, compressed, or messy JSON data and reformats it into clean, properly indented, human-readable output. It adds consistent spacing, line breaks, and indentation so that nested structures are easy to navigate and understand. Most JSON formatters also include syntax highlighting that colors strings, numbers, booleans, and null values differently for even faster comprehension.' },
  { q: 'How do I format JSON online?', a: 'Paste your JSON string into the input panel on the left, then click the "Format" button. The tool instantly parses and reformats your JSON with proper indentation in the output panel on the right. If your JSON contains syntax errors, they are highlighted in red with a specific error message. Choose between 2-space and 4-space indentation using the selector in the toolbar.' },
  { q: 'Is the JSON formatter free?', a: 'Yes — completely free with no account, no subscription, and no usage limits. You can format, validate, and minify unlimited JSON documents without any payment or registration.' },
  { q: 'Can I use the JSON formatter on mobile?', a: 'Yes — the tool is fully responsive and works on all modern mobile browsers including Chrome for Android and Safari for iOS. The side-by-side panels stack vertically on small screens for comfortable use on smartphones and tablets.' },
];

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
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'JSON Formatter', item: `${SITE_CONFIG.url}/json-formatter-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Format JSON Online',
      description: 'Step-by-step guide to formatting JSON using the free online JSON formatter.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your JSON', text: 'Copy your raw or minified JSON and paste it into the left input panel.' },
        { '@type': 'HowToStep', position: 2, name: 'Click Format', text: 'Click the "Format" button in the toolbar to instantly beautify and indent your JSON.' },
        { '@type': 'HowToStep', position: 3, name: 'Check for errors', text: 'Any syntax errors are highlighted in red with a specific error message to help you fix them.' },
        { '@type': 'HowToStep', position: 4, name: 'Choose indentation', text: 'Select 2-space or 4-space indentation from the dropdown selector.' },
        { '@type': 'HowToStep', position: 5, name: 'Copy the output', text: 'Click the Copy button to copy the formatted JSON to your clipboard.' },
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

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">What Is a JSON Formatter Online?</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A <strong>JSON formatter online</strong> is a browser-based developer tool that transforms raw, minified, or poorly structured JSON (JavaScript Object Notation) data into clean, properly indented, easy-to-read output — in under a second. When you receive a JSON response from an API or read data from a database, it often arrives as a single compressed line with no whitespace. That makes it nearly impossible to read, debug, or review manually.</p>
              <p>Our free <strong>JSON beautifier</strong> solves this by parsing your JSON and applying consistent indentation, line breaks, and color-coded syntax highlighting. Strings appear in one color, numbers in another, booleans and null values in distinct colors — making the structure of deeply nested objects and arrays immediately scannable at a glance.</p>
              <p>Beyond formatting, the tool also acts as a <strong>JSON validator</strong> that catches syntax errors and shows a specific error message with the location of the problem. And when you are ready to deploy, the minifier compresses your JSON back to a single line to reduce payload size and API response time.</p>
            </div>
          </section>

          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Key Features of Our JSON Formatter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'Instant & Free', desc: 'Format JSON in milliseconds with no account, no subscription, and no usage limits — ever.' },
                { icon: '🎨', title: 'Syntax Highlighting', desc: 'Color-coded output: strings, numbers, booleans, null, keys — each visually distinct for fast scanning.' },
                { icon: '✅', title: 'JSON Validator', desc: 'Detects and displays specific syntax errors with error messages so you know exactly what to fix.' },
                { icon: '📦', title: 'JSON Minifier', desc: 'One-click minification removes all whitespace for production-ready, bandwidth-efficient JSON.' },
                { icon: '🔒', title: 'Zero Data Storage', desc: 'All processing runs locally in your browser. Your JSON is never sent to any server or stored anywhere.' },
                { icon: '📐', title: '2 or 4-Space Indent', desc: 'Choose your preferred indentation size to match your project\'s style guide or team conventions.' },
                { icon: '📊', title: 'Supports Large JSON', desc: 'Handles JSON files of any size — large API responses, bulk data exports, and complex nested structures.' },
                { icon: '📱', title: 'Mobile Friendly', desc: 'Fully responsive layout works on smartphones and tablets — format JSON from any device, anywhere.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases for JSON Formatting</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🔌', title: 'Debug API Responses', desc: 'When your REST API, GraphQL endpoint, or third-party service returns a minified JSON payload, paste it into the formatter to instantly visualize the data structure and spot unexpected values or missing fields.' },
                { icon: '⚙️', title: 'Format Configuration Files', desc: 'Messy package.json, tsconfig.json, .eslintrc, and other JSON configuration files become easy to read and edit after formatting. Catch misplaced commas and unclosed brackets before they break your build.' },
                { icon: '🗄️', title: 'Read Database Records', desc: 'MongoDB, Firestore, DynamoDB, and other NoSQL databases often return deeply nested JSON documents. Format them to understand the document structure before writing queries or update operations.' },
                { icon: '🧪', title: 'Prepare Test Payloads', desc: 'Format and validate JSON request bodies before using them in Postman, Insomnia, curl commands, or automated test suites to ensure they are syntactically correct before running tests.' },
                { icon: '🚀', title: 'Minify for Production', desc: 'Remove all whitespace from JSON configuration files, API responses, and data payloads before deployment to reduce file size, minimize network transfer time, and improve application performance.' },
                { icon: '📖', title: 'Validate JSON Schemas', desc: 'Check that your JSON Schema definitions, OpenAPI specification files, and data validation rules are syntactically correct before integrating them into your application or API documentation.' },
                { icon: '🤝', title: 'Collaborate on Data Structures', desc: 'Format JSON before pasting it into Slack, Jira tickets, code review comments, or documentation. Well-formatted JSON is significantly easier for teammates to review and understand.' },
                { icon: '🔗', title: 'Inspect Webhook Payloads', desc: 'Paste incoming webhook payloads from Stripe, GitHub, Twilio, Shopify, or any other service to instantly understand the event data structure and build correct handlers.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-blue-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">JSON Formatter vs JSON Validator — What Is the Difference?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{'{ }'}</span>
                  <h3 className="font-display font-bold text-lg text-blue-800">JSON Formatter</h3>
                </div>
                <p className="text-sm text-blue-900 leading-relaxed mb-3">A JSON formatter takes valid JSON and makes it visually readable. It adds consistent indentation, line breaks between properties, and syntax highlighting. The output is functionally identical to the input — just easier for humans to read.</p>
                <p className="text-sm text-blue-700 font-medium">Primary job: Improve readability</p>
                <ul className="mt-2 space-y-1 text-sm text-blue-800">
                  {['Adds indentation and whitespace', 'Applies color-coded syntax highlighting', 'Makes nested structures visually clear', 'Outputs identical data in readable form'].map(i => (
                    <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> {i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✅</span>
                  <h3 className="font-display font-bold text-lg text-emerald-800">JSON Validator</h3>
                </div>
                <p className="text-sm text-emerald-900 leading-relaxed mb-3">A JSON validator checks whether a JSON string is syntactically correct according to the JSON specification (RFC 8259). It reports specific errors like missing commas, unclosed brackets, invalid escape sequences, or duplicate keys.</p>
                <p className="text-sm text-emerald-700 font-medium">Primary job: Confirm correctness</p>
                <ul className="mt-2 space-y-1 text-sm text-emerald-800">
                  {['Checks syntax against JSON specification', 'Reports specific error location and type', 'Confirms JSON is safe to parse', 'Prevents runtime errors in applications'].map(i => (
                    <li key={i} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">→</span> {i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-5 bg-surface-50 border border-surface-200 rounded-xl mb-8">
              <p className="text-surface-700 text-sm leading-relaxed"><strong className="text-surface-900">Our tool does both.</strong> When you click "Format", it first validates your JSON (if it is invalid, it shows the error). If your JSON is valid, it formats and beautifies it. When you click "Validate", it checks syntax without reformatting. This means you get a complete workflow — validate → format → copy → optionally minify — in a single tool without switching between multiple online utilities.</p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">What Is JSON Formatting?</h3>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>JSON formatting is the process of taking a JSON string and restructuring it with consistent indentation, proper line breaks, and organized whitespace to make it human-readable. The formatted JSON is semantically identical to the original — parsers and applications read both versions exactly the same way.</p>
              <p>For example, this minified JSON:</p>
              <div className="bg-surface-900 text-emerald-300 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                {`{"user":{"name":"Alice","role":"admin","permissions":["read","write","delete"]}}`}
              </div>
              <p>Becomes this formatted JSON after beautification:</p>
              <div className="bg-surface-900 text-emerald-300 rounded-xl p-4 font-mono text-sm">
                <pre>{`{
  "user": {
    "name": "Alice",
    "role": "admin",
    "permissions": [
      "read",
      "write",
      "delete"
    ]
  }
}`}</pre>
              </div>
              <p>The formatted version is dramatically easier to read, review in code, debug, and share with colleagues. The minified version is better for production API responses and configuration file storage where file size matters.</p>
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

          <section aria-labelledby="more-json-heading">
            <h2 id="more-json-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More JSON Tools</h2>
            <p className="text-surface-500 text-sm mb-5">Looking for a specific JSON operation? These dedicated pages go deeper:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/json-beautifier-online', label: 'JSON Beautifier Online', desc: 'Focus on beautifying and pretty-printing JSON' },
                { href: '/json-pretty-print',      label: 'JSON Pretty Print',      desc: 'Pretty-print JSON with custom indentation' },
                { href: '/json-validator-online',  label: 'JSON Validator Online',  desc: 'Validate JSON syntax and structure' },
                { href: '/json-minifier-online',   label: 'JSON Minifier Online',   desc: 'Compress and minify JSON for production' },
                { href: '/json-viewer-online',     label: 'JSON Viewer Online',     desc: 'View and explore JSON tree structure' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors group">
                  <div className="font-semibold text-blue-800 group-hover:underline text-sm">{v.label}</div>
                  <div className="text-xs text-blue-600">{v.desc}</div>
                </Link>
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
