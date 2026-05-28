import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import MarkdownToHtml from '../../components/tools/MarkdownToHtml';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Markdown to HTML Converter Online — Free, Instant',
  description: 'Convert Markdown to HTML instantly. Live preview, raw HTML output, headers, bold, italic, lists, code blocks, links. Free, browser-based, no signup required.',
  alternates: { canonical: `${SITE_CONFIG.url}/markdown-to-html` },
  openGraph: {
    title: 'Markdown to HTML Converter Online — Free, Instant',
    description: 'Convert Markdown to HTML with live preview. Supports all common Markdown syntax — free, no signup.',
    url: `${SITE_CONFIG.url}/markdown-to-html`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to HTML Converter — Free Online Tool',
    description: 'Convert Markdown to HTML with live preview and raw HTML output. Free, instant.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What is Markdown?',
    a: 'Markdown is a lightweight markup language created by John Gruber in 2004. It uses plain text formatting syntax (like **bold**, # headings, - lists) that converts to HTML. It\'s widely used for README files, documentation, blog posts, and content management systems.',
  },
  {
    q: 'What Markdown syntax is supported?',
    a: 'This tool supports: headings (# H1 to ###### H6), bold (**text**), italic (*text*), bold+italic (***text***), strikethrough (~~text~~), inline code (`code`), fenced code blocks (```), unordered lists (- item), ordered lists (1. item), blockquotes (> text), horizontal rules (---), links ([text](url)), images (![alt](url)), and auto-linked URLs.',
  },
  {
    q: 'Is my content saved anywhere?',
    a: 'No. All conversion happens locally in your browser using JavaScript. Your Markdown text is never sent to any server.',
  },
  {
    q: 'Can I use the generated HTML directly?',
    a: 'Yes. Switch to HTML view and copy the generated HTML. You can paste it directly into any HTML page, CMS (WordPress, Ghost, etc.), or email template. For best results, add appropriate CSS styling for elements like h1-h6, code, pre, blockquote, and lists.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Markdown to HTML Converter Online',
      url: `${SITE_CONFIG.url}/markdown-to-html`,
      description: 'Free browser-based Markdown to HTML converter with live preview and raw HTML output.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'Markdown to HTML', item: `${SITE_CONFIG.url}/markdown-to-html` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function MarkdownToHtmlPage() {
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
                <li className="text-surface-800 font-medium">Markdown to HTML</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Markdown to HTML Converter — Free Online Tool
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert Markdown to clean HTML instantly. Live preview shows rendered output while you type.
              Switch to HTML view to copy the generated code. Supports all common Markdown syntax.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🔒 Browser-Only', '⚡ Live Preview', '💻 Split View', '📋 Copy HTML', '📝 All Markdown Syntax'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><MarkdownToHtml /></div>
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
          <RelatedToolsCluster currentSlug="markdown-to-html" />
        </div>
      </main>
      <Footer />
    </>
  );
}
