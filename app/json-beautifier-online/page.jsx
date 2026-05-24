import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Beautifier Online Free – Beautify & Pretty Print JSON',
  description: 'Beautify and pretty-print JSON online for free. Instant syntax highlighting, error detection, and clean indented output. No signup required. Try now!',
  keywords: ['json beautifier', 'json beautifier online', 'beautify json online', 'json pretty printer', 'json formatter beautifier'],
  alternates: { canonical: `${SITE_CONFIG.url}/json-beautifier-online` },
  openGraph: {
    title: 'JSON Beautifier Online Free – Pretty Print JSON Instantly',
    description: 'Beautify and pretty-print JSON with syntax highlighting. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/json-beautifier-online`,
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
      name: 'JSON Beautifier Online',
      description: 'Free online JSON beautifier. Instantly pretty-print and format JSON with syntax highlighting.',
      url: `${SITE_CONFIG.url}/json-beautifier-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'JSON Beautifier', item: `${SITE_CONFIG.url}/json-beautifier-online` },
      ],
    },
  ],
};

export default function JsonBeautifierPage() {
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
                <li className="text-surface-800 font-medium">JSON Beautifier Online</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Beautifier Online – Pretty Print JSON Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste any minified or messy JSON and instantly get clean, color-coded,
              properly indented output. Free JSON beautifier — no signup, no install,
              runs entirely in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['✅ Free', '🎨 Syntax Highlighting', '⚡ Instant', '🔒 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Beautifier" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Is a JSON Beautifier?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>JSON beautifier</strong> takes compact, minified, or poorly formatted JSON
                data and transforms it into clean, properly indented, human-readable output.
                The term "beautify" refers to making the JSON visually appealing and easy to
                navigate — adding consistent whitespace, line breaks, and color-coded syntax
                highlighting that distinguishes keys, strings, numbers, booleans, and null values.
              </p>
              <p>
                Our free <strong>JSON beautifier online</strong> does this instantly. When you
                receive a compressed API response like{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">
                  {`{"id":1,"name":"Alice","active":true}`}
                </code>{' '}
                and paste it into the tool, it immediately expands it into a clean,
                readable structure with each property on its own line and proper indentation
                showing the nesting depth.
              </p>
              <p>
                JSON beautification is also the first step in <strong>JSON pretty printing</strong> —
                the standard process developers use before committing data structures to
                documentation, sharing in code reviews, or pasting into Slack and Jira tickets.
                The beauty is in the clarity: a well-formatted JSON block communicates its
                structure instantly, without requiring the reader to mentally parse compressed text.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              JSON Beautifier vs JSON Formatter — Are They the Same?
            </h2>
            <p className="text-surface-600 leading-relaxed">
              Yes — in everyday developer usage, the terms "JSON beautifier", "JSON formatter",
              and "JSON pretty printer" all refer to the same operation: taking raw or minified JSON
              and outputting it in an indented, readable format. Some tools make subtle distinctions
              (a formatter may include validation, a beautifier may focus purely on visual output)
              but our tool combines all three into one: it formats, beautifies, validates, and
              optionally minifies — all from the same interface.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related JSON Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/json-formatter', label: 'JSON Formatter Online', desc: 'Full-featured format, validate & minify tool' },
                { href: '/json-pretty-print', label: 'JSON Pretty Print', desc: 'Pretty-print with custom indentation options' },
                { href: '/json-validator-online', label: 'JSON Validator Online', desc: 'Validate JSON syntax and find errors' },
                { href: '/json-minifier-online', label: 'JSON Minifier Online', desc: 'Compress JSON for production use' },
                { href: '/json-viewer-online', label: 'JSON Viewer Online', desc: 'Explore JSON tree structure visually' },
                { href: '/base64-encoder-online', label: 'Base64 Encoder', desc: 'Encode/decode Base64 strings in JSON' },
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