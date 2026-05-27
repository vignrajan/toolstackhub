import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import SqlFormatter from '../../components/tools/SqlFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'SQL Formatter Online — Free SQL Beautifier & Prettifier',
  description: 'Format and beautify SQL queries online. Choose keyword casing, indent style, and comma placement. Supports SELECT, JOIN, GROUP BY, subqueries. Free, browser-based.',
  alternates: { canonical: `${SITE_CONFIG.url}/sql-formatter-online` },
  openGraph: {
    title: 'SQL Formatter Online — Free SQL Beautifier & Prettifier',
    description: 'Instantly format SQL queries with configurable keyword case, indent size, and comma style. Free, no signup.',
    url: `${SITE_CONFIG.url}/sql-formatter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQL Formatter Online — Free SQL Beautifier',
    description: 'Format SQL with configurable keyword case, indentation, and comma style. Instant, browser-based.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What does a SQL formatter do?',
    a: 'A SQL formatter (also called a SQL beautifier or prettifier) reformats SQL queries to improve readability. It aligns clauses like SELECT, FROM, WHERE, and JOIN on separate lines, standardizes keyword casing (uppercase or lowercase), and controls indentation. This makes complex queries much easier to read, review, and debug.',
  },
  {
    q: 'Does this SQL formatter support MySQL, PostgreSQL, and other dialects?',
    a: 'The formatter handles standard SQL keywords common to MySQL, PostgreSQL, SQLite, SQL Server, and Oracle. Dialect-specific functions and syntax are left as-is (only standard reserved words are cased/formatted).',
  },
  {
    q: 'Should SQL keywords be uppercase or lowercase?',
    a: 'Both are valid SQL. The SQL standard uses uppercase for keywords (SELECT, FROM, WHERE), which most database tools and style guides recommend. Some modern teams prefer all lowercase for a cleaner look. This formatter lets you choose either — consistency within a codebase is what matters most.',
  },
  {
    q: 'Is my SQL sent to any server?',
    a: 'No. All formatting runs 100% in your browser using JavaScript. Your SQL queries never leave your device and are never stored anywhere.',
  },
  {
    q: 'What is comma-first vs comma-last style?',
    a: 'Comma-last style places commas at the end of each line (SELECT id, name,). Comma-first (or leading comma) style places commas at the start of new lines (SELECT id\\n  ,name). Some developers prefer comma-first because it\'s easier to spot missing commas. This is purely a style preference.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'SQL Formatter Online',
      url: `${SITE_CONFIG.url}/sql-formatter-online`,
      description: 'Free online SQL formatter and beautifier. Format SQL queries with configurable keyword case, indentation, and comma style.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'SQL Formatter',   item: `${SITE_CONFIG.url}/sql-formatter-online` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function SqlFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/developer" className="hover:text-brand-600 transition-colors">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">SQL Formatter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              SQL Formatter Online — Free SQL Beautifier
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste any SQL query to instantly format and beautify it. Choose keyword casing, indent style,
              and comma placement. Works with MySQL, PostgreSQL, SQLite, and SQL Server. 100% browser-based.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🔒 Browser-Only', '⚡ Instant', '🔡 Keyword Casing', '📐 Indentation Control', '🗃️ MySQL, PostgreSQL, SQLite'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <SqlFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Formatting Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🔡', title: 'Keyword Case',     desc: 'UPPERCASE or lowercase for SQL reserved words like SELECT, FROM, WHERE, JOIN.' },
                { icon: '📐', title: 'Indent Style',     desc: '2 spaces, 4 spaces, or tab indentation for subqueries and nested clauses.' },
                { icon: ',',  title: 'Comma Style',      desc: 'Trailing comma (column1,) or leading comma (,column1) — choose your team\'s style.' },
              ].map(item => (
                <div key={item.title} className="p-5 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="text-2xl font-mono font-bold text-brand-600 mb-2">{item.icon}</div>
                  <div className="font-semibold text-surface-900 mb-1">{item.title}</div>
                  <div className="text-sm text-surface-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                  <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-surface-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <RelatedToolsCluster currentSlug="sql-formatter-online" />
        </div>

      </main>
      <Footer />
    </>
  );
}
