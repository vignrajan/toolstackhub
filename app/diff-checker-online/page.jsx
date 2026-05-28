import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import DiffChecker from '../../components/tools/DiffChecker';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Diff Checker Online – Compare Two Text Files Free',
  description: 'Compare two texts side by side and highlight differences instantly. Split view and unified diff modes. Free, no signup — runs entirely in your browser.',
  alternates: { canonical: `${SITE_CONFIG.url}/diff-checker-online` },
  openGraph: {
    title: 'Diff Checker Online – Compare Two Text Files Free',
    description: 'Side-by-side text comparison with line-by-line diff highlighting. Free, browser-based.',
    url: `${SITE_CONFIG.url}/diff-checker-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diff Checker Online – Compare Two Texts Free',
    description: 'Compare texts side by side. See added, removed, and unchanged lines instantly.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What is a diff checker?',
    a: 'A diff checker compares two texts and highlights the differences line by line. It shows which lines were added (green), removed (red), and unchanged. Used by developers to compare code versions, writers to track edits, and data analysts to spot changes in exported data.',
  },
  {
    q: 'What is split view vs unified view?',
    a: 'Split view shows the original and modified texts side by side with differences highlighted in place. Unified view shows a single column diff with + for added lines and − for removed lines — similar to git diff output.',
  },
  {
    q: 'Is my text sent to any server?',
    a: 'No. The diff algorithm runs entirely in your browser using JavaScript. Your text never leaves your device.',
  },
  {
    q: 'Can I compare code files?',
    a: 'Yes — the diff checker works on any plain text: code files (JavaScript, Python, HTML, CSS, SQL), config files, markdown, CSV data, or any other text format.',
  },
  {
    q: 'What algorithm does this use?',
    a: 'The tool uses an LCS (Longest Common Subsequence) based diff algorithm — the same approach used by Unix diff and git diff. It finds the minimum number of insertions and deletions needed to transform the original into the modified text.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Diff Checker Online',
      url: `${SITE_CONFIG.url}/diff-checker-online`,
      description: 'Free browser-based diff checker. Compare two texts and see line-by-line differences with added (green), removed (red) highlighting. Split and unified views.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'Diff Checker',    item: `${SITE_CONFIG.url}/diff-checker-online` },
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

export default function DiffCheckerPage() {
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
                <li className="text-surface-800 font-medium">Diff Checker</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Diff Checker Online — Compare Two Texts Side by Side
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste two texts to instantly highlight line-by-line differences. Green lines were added,
              red lines were removed. Supports split view (side by side) and unified view (git-style).
              100% browser-based — your text never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 Browser-Only', '⚡ Instant', '💻 Split & Unified Views', '📝 Any Text Format'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <DiffChecker />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What Can You Compare?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: '💻', title: 'Source Code', desc: 'JS, Python, HTML, CSS, SQL, Java, PHP' },
                { icon: '⚙️', title: 'Config Files', desc: 'JSON, YAML, TOML, .env, XML' },
                { icon: '📄', title: 'Documents', desc: 'Contracts, reports, article drafts' },
                { icon: '📊', title: 'CSV / Data', desc: 'Data exports, database dumps' },
                { icon: '📋', title: 'Markdown', desc: 'README files, blog posts, docs' },
                { icon: '🔧', title: 'Any Plain Text', desc: 'Anything that can be pasted' },
              ].map(item => (
                <div key={item.title} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-surface-900">{item.title}</div>
                  <div className="text-xs text-surface-500 mt-1">{item.desc}</div>
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

          <RelatedToolsCluster currentSlug="diff-checker" />
        </div>

      </main>
      <Footer />
    </>
  );
}
