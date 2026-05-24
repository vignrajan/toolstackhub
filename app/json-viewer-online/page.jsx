import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonFormatter from '../../components/tools/JsonFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON Viewer Online Free – View & Explore JSON Instantly',
  description: 'View JSON online for free with syntax highlighting and clean indented output. Instantly explore nested JSON objects and arrays. No signup. Try now!',
  keywords: ['json viewer', 'json viewer online', 'view json online', 'json explorer', 'json reader online', 'json tree viewer', 'online json viewer free'],
  alternates: { canonical: `${SITE_CONFIG.url}/json-viewer-online` },
  openGraph: {
    title: 'JSON Viewer Online Free – View & Explore JSON',
    description: 'View and explore JSON with syntax highlighting. Free, instant, no signup required.',
    url: `${SITE_CONFIG.url}/json-viewer-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Viewer Online Free – View & Explore JSON',
    description: 'View JSON online for free with syntax highlighting and clean indented output. Instantly explore nested JSON objects and arrays. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JSON Viewer Online',
      description: 'Free online JSON viewer with syntax highlighting. View and explore nested JSON objects and arrays with clean indented output.',
      url: `${SITE_CONFIG.url}/json-viewer-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'JSON Viewer Online', item: `${SITE_CONFIG.url}/json-viewer-online` },
      ],
    },
  ],
};

export default function JsonViewerPage() {
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
                <li className="text-surface-800 font-medium">JSON Viewer Online</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON Viewer Online – View & Explore JSON with Syntax Highlighting
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Instantly view any JSON with color-coded syntax highlighting and clean indented
              formatting. Paste compressed or messy JSON and see it transformed into a
              clearly structured, easy-to-navigate view. Free, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['✅ Free', '🎨 Color-Coded Highlighting', '👁️ Instant View', '🔒 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON Viewer" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Is a JSON Viewer?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>JSON viewer online</strong> is a tool that renders raw or minified
                JSON data in a visually clear, human-readable format with syntax highlighting —
                making it easy to explore the structure of any JSON document at a glance.
                Colors distinguish different data types: strings appear in one color, numbers
                in another, boolean values and null in distinct colors, and key names in yet
                another — providing instant visual orientation within complex nested structures.
              </p>
              <p>
                When you receive a JSON response from an API, a database query, or a webhook
                payload, it typically arrives as compressed or minified text — a wall of
                characters with no visual structure. Pasting it into the <strong>JSON viewer</strong>
                instantly transforms it into a clearly indented, color-highlighted view where
                you can immediately see every key, value, array, and nested object at the
                correct depth level.
              </p>
              <p>
                Our free JSON viewer also validates your JSON as it renders — if there are
                syntax errors, it shows a specific error message rather than rendering
                broken output. This makes it a complete JSON inspection tool: view, validate,
                and optionally copy the formatted output for use in documentation or code.
              </p>
            </div>
          </section>

          {/* Color Guide */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              JSON Syntax Highlighting Color Guide
            </h2>
            <div className="bg-surface-900 rounded-2xl p-6">
              <div className="font-mono text-sm space-y-1 leading-relaxed">
                <div><span className="text-surface-400">{'{'}</span></div>
                <div className="ml-4"><span className="text-sky-300">"name"</span><span className="text-surface-400">: </span><span className="text-emerald-300">"Alice Johnson"</span><span className="text-surface-400">,</span></div>
                <div className="ml-4"><span className="text-sky-300">"age"</span><span className="text-surface-400">: </span><span className="text-amber-300">28</span><span className="text-surface-400">,</span></div>
                <div className="ml-4"><span className="text-sky-300">"active"</span><span className="text-surface-400">: </span><span className="text-violet-300">true</span><span className="text-surface-400">,</span></div>
                <div className="ml-4"><span className="text-sky-300">"address"</span><span className="text-surface-400">: </span><span className="text-red-300">null</span><span className="text-surface-400">,</span></div>
                <div className="ml-4"><span className="text-sky-300">"roles"</span><span className="text-surface-400">: [</span><span className="text-emerald-300">"admin"</span><span className="text-surface-400">, </span><span className="text-emerald-300">"editor"</span><span className="text-surface-400">]</span></div>
                <div><span className="text-surface-400">{'}'}</span></div>
              </div>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { color: 'text-sky-300', bg: 'bg-sky-900/30', label: 'Keys (property names)' },
                  { color: 'text-emerald-300', bg: 'bg-emerald-900/30', label: 'String values' },
                  { color: 'text-amber-300', bg: 'bg-amber-900/30', label: 'Number values' },
                  { color: 'text-violet-300', bg: 'bg-violet-900/30', label: 'Boolean (true/false)' },
                  { color: 'text-red-300', bg: 'bg-red-900/30', label: 'Null values' },
                  { color: 'text-surface-400', bg: 'bg-surface-800', label: 'Syntax ({, }, [, ])' },
                ].map(c => (
                  <div key={c.label} className={`flex items-center gap-2 px-3 py-2 ${c.bg} rounded-lg`}>
                    <div className={`w-3 h-3 rounded-full ${c.color.replace('text-', 'bg-')}`} />
                    <span className={`text-xs ${c.color}`}>{c.label}</span>
                  </div>
                ))}
              </div>
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
                { href: '/json-minifier-online', label: 'JSON Minifier', desc: 'Compress JSON for production' },
                { href: '/url-encoder-online', label: 'URL Encoder', desc: 'Encode URL values found in JSON' },
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