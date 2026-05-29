import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Free Developer Tools – JSON, Base64, UUID, Regex & More',
  description: 'Free online developer tools: JSON formatter, Base64 encoder, UUID generator, regex tester, URL encoder, binary converter, CSS minifier, and more. No signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/developer` },
  openGraph: {
    title: 'Free Developer Tools – JSON, Base64, UUID, Regex & More',
    description: 'Free browser-based developer utilities for everyday coding tasks. No signup required.',
    url: `${SITE_CONFIG.url}/tools/developer`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Developer Tools – JSON, Base64, UUID, Regex & More',
    description: 'Free browser-based dev tools: JSON, Base64, UUID, regex, and more.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const DEV_TOOLS = [
  { href: '/tools/json-formatter',      icon: '{ }', name: 'JSON Formatter',         desc: 'Beautify, minify, and validate JSON with syntax highlighting.' },
  { href: '/json-validator-online',      icon: '✅',  name: 'JSON Validator',          desc: 'Validate JSON syntax and get detailed error messages with line numbers.' },
  { href: '/json-minifier-online',       icon: '⚡',  name: 'JSON Minifier',           desc: 'Minify JSON by removing whitespace for smaller payload sizes.' },
  { href: '/json-beautifier-online',     icon: '🎨',  name: 'JSON Beautifier',         desc: 'Prettify compressed JSON with 2 or 4 space indentation.' },
  { href: '/json-viewer-online',         icon: '👁️',  name: 'JSON Viewer',             desc: 'Explore JSON as a collapsible tree for easy navigation.' },
  { href: '/tools/json-to-csv',      icon: '📊',  name: 'JSON to CSV',             desc: 'Convert JSON arrays to CSV format with custom delimiters.' },
  { href: '/tools/base64-encoder',      icon: '🔡',  name: 'Base64 Encoder/Decoder', desc: 'Encode or decode Base64 strings instantly in your browser.' },
  { href: '/tools/uuid-generator',      icon: '🆔',  name: 'UUID Generator',          desc: 'Generate v4 UUIDs (universally unique identifiers) in bulk.' },
  { href: '/tools/url-encoder',         icon: '🔗',  name: 'URL Encoder/Decoder',    desc: 'Encode special characters for URLs or decode percent-encoded strings.' },
  { href: '/tools/regex-tester',        icon: '🔍',  name: 'Regex Tester',            desc: 'Test regular expressions with live highlighting and match details.' },
  { href: '/tools/binary-converter', icon: '💻', name: 'Binary Converter',        desc: 'Convert between binary, decimal, octal, and hexadecimal.' },
  { href: '/tools/css-minifier',        icon: '⚡',  name: 'CSS Minifier',            desc: 'Minify CSS files to reduce stylesheet file size.' },
  { href: '/tools/html-formatter',      icon: '🏷️',  name: 'HTML Formatter',          desc: 'Beautify minified HTML with proper indentation.' },
  { href: '/tools/markdown-preview',     icon: '📋',  name: 'Markdown Editor',         desc: 'Write and preview Markdown with side-by-side live rendering.' },
  { href: '/tools/timestamp-converter',   icon: '⏱️',  name: 'Timestamp Converter',    desc: 'Convert between Unix timestamps and human-readable dates.' },
  { href: '/tools/color-picker',        icon: '🎨',  name: 'Color Picker',            desc: 'Pick colors and copy HEX, RGB, and HSL values instantly.' },
  { href: '/tools/meta-tag-generator',  icon: '🏷️',  name: 'Meta Tag Generator',      desc: 'Generate open graph, Twitter card, and SEO meta tags.' },
  { href: '/tools/lorem-ipsum-generator',      icon: '📄',  name: 'Lorem Ipsum Generator',   desc: 'Generate placeholder text for wireframes and mockups.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Developer Tools Online',
      description: 'Free browser-based developer tools: JSON formatter/validator/minifier, Base64 encoder, UUID generator, regex tester, URL encoder, binary converter, and more.',
      url: `${SITE_CONFIG.url}/tools/developer`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools',  item: `${SITE_CONFIG.url}/tools/developer` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are these developer tools free to use?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — all tools are completely free, no signup required, and have no usage limits.' },
        },
        {
          '@type': 'Question',
          name: 'Do these tools send my data to a server?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Every tool runs entirely in your browser. Your JSON, code, and data never leave your device.' },
        },
        {
          '@type': 'Question',
          name: 'What is the most popular developer tool here?',
          acceptedAnswer: { '@type': 'Answer', text: 'The JSON Formatter is the most-used tool, with over 200,000 monthly searches. It formats, validates, and minifies JSON with syntax highlighting.' },
        },
      ],
    },
  ],
};

export default function DeveloperToolsCategoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Developer Tools</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl">💻</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Developer Tools Online
                </h1>
                <p className="text-surface-500 mt-1">{DEV_TOOLS.length} tools · All free · No signup</p>
              </div>
            </div>
            <p className="text-surface-600 text-lg leading-relaxed max-w-3xl">
              A complete toolkit for everyday development tasks — JSON formatting, Base64
              encoding, UUID generation, regex testing, URL encoding, binary conversion,
              and more. Everything runs in your browser. No installation, no sign-up, no limits.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ No Signup', '🔒 Data Stays in Browser', '🆓 Always Free', '⚡ Instant', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {DEV_TOOLS.map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl hover:border-violet-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-xl font-mono">
                    {tool.icon}
                  </div>
                  <div className="font-semibold text-sm text-surface-900 group-hover:text-violet-700 transition-colors leading-snug">
                    {tool.name}
                  </div>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>

          {/* SEO content */}
          <div className="space-y-10 max-w-3xl">
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Browser-Based Dev Tools — No Installation Required
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  Every developer deals with the same repetitive tasks: formatting a JSON payload
                  from an API response, encoding a string to Base64 for an Authorization header,
                  generating a UUID for a test fixture, or debugging a regex pattern. These tasks
                  don&apos;t require an IDE or desktop app — they can be done instantly in a browser tab.
                </p>
                <p>
                  The{' '}
                  <Link href="/tools/json-formatter" className="text-violet-700 hover:underline font-medium">JSON Formatter</Link>{' '}
                  is the most-used tool on ToolStackHub, handling over 200,000 monthly searches.
                  It formats, validates, minifies, and syntax-highlights JSON in a single interface.
                  The{' '}
                  <Link href="/tools/base64-encoder" className="text-violet-700 hover:underline font-medium">Base64 encoder/decoder</Link>{' '}
                  handles both encoding and decoding in one tool. The{' '}
                  <Link href="/tools/regex-tester" className="text-violet-700 hover:underline font-medium">regex tester</Link>{' '}
                  supports all JavaScript regex flags with live match highlighting and a replace mode.
                </p>
                <p>
                  All data stays in your browser. When you paste an API key, a JWT token, or
                  internal JSON data into these tools, none of it is transmitted to any server.
                  This makes ToolStackHub developer tools safe to use with sensitive data in
                  professional environments.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Are these developer tools free to use?', a: 'Yes — all tools are completely free, no signup required, and have no usage limits.' },
                  { q: 'Do these tools send my data to a server?', a: 'No. Every tool runs entirely in your browser. Your JSON, code, and data never leave your device.' },
                  { q: 'What is the most popular developer tool here?', a: 'The JSON Formatter is the most-used tool, with over 200,000 monthly searches. It formats, validates, and minifies JSON with syntax highlighting.' },
                ].map(faq => (
                  <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                    <summary className="font-semibold text-surface-900 cursor-pointer">{faq.q}</summary>
                    <p className="mt-2 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
