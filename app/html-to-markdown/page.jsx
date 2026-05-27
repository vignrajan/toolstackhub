import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import HtmlToMarkdown from '../../components/tools/HtmlToMarkdown';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'HTML to Markdown Converter Online — Free, Instant',
  description: 'Convert HTML to clean Markdown online. Handles headings, bold, italic, lists, code blocks, links, images, tables, and blockquotes. Free, browser-based, no signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/html-to-markdown` },
  openGraph: {
    title: 'HTML to Markdown Converter Online — Free, Instant',
    description: 'Convert HTML to Markdown instantly. Supports all common HTML elements. Free, no signup.',
    url: `${SITE_CONFIG.url}/html-to-markdown`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML to Markdown Converter — Free Online Tool',
    description: 'Convert HTML to clean Markdown. Handles all standard HTML elements. Free, instant.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What HTML elements are supported?',
    a: 'This converter handles: headings (h1-h6), paragraphs, bold (strong/b), italic (em/i), strikethrough (del/s), inline code, code blocks (pre/code), unordered and ordered lists, blockquotes, links (a), images (img), horizontal rules (hr), and basic tables. Layout divs and semantic tags (section, article, header, footer) are converted to blank lines.',
  },
  {
    q: 'Why would I convert HTML to Markdown?',
    a: 'Common use cases: (1) Migrating content from an HTML website to a static site generator like Jekyll, Hugo, or Next.js MDX; (2) Importing content into a Markdown-based CMS like Contentful or Ghost; (3) Pasting web page content into a Markdown editor (Notion, Obsidian, GitHub); (4) Converting scraped HTML content to a readable format.',
  },
  {
    q: 'Is my HTML content sent to any server?',
    a: 'No. The entire conversion runs in your browser using JavaScript. Your HTML content never leaves your device.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'HTML to Markdown Converter Online',
      url: `${SITE_CONFIG.url}/html-to-markdown`,
      description: 'Free browser-based HTML to Markdown converter. Handles headings, lists, code blocks, tables, and more.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'HTML to Markdown', item: `${SITE_CONFIG.url}/html-to-markdown` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function HtmlToMarkdownPage() {
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
                <li className="text-surface-800 font-medium">HTML to Markdown</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              HTML to Markdown Converter — Free Online Tool
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert HTML to clean, readable Markdown in one click. Supports all standard HTML elements —
              headings, lists, code blocks, tables, blockquotes, links, and images. Browser-based, nothing uploaded.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🔒 Browser-Only', '⚡ Instant', '📋 Copy Output', '🏷️ Tables Support', '💻 Code Blocks'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><HtmlToMarkdown /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                  <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.q}<span className="text-surface-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedToolsCluster currentSlug="html-to-markdown" />
        </div>
      </main>
      <Footer />
    </>
  );
}
