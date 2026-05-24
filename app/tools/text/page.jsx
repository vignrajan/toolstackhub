import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Free Text Tools Online – Word Counter, Case Converter & More',
  description: 'Free online text tools: word counter, character counter, case converter, remove duplicates, remove line breaks, and more. No signup required.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/text` },
  openGraph: {
    title: 'Free Text Tools Online – Word Counter, Case Converter & More',
    description: 'Free online text tools for writers, developers, and students. All browser-based, no signup.',
    url: `${SITE_CONFIG.url}/tools/text`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Text Tools Online – Word Counter, Case Converter & More',
    description: 'Free online text tools for writers, developers, and students. All browser-based, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TEXT_TOOLS = [
  { href: '/word-counter-online',           icon: '📝', name: 'Word Counter Online',           desc: 'Count words, characters, sentences, and reading time in real time.' },
  { href: '/character-counter-online',      icon: '🔢', name: 'Character Counter Online',       desc: 'Count characters with Twitter, SMS, and meta description limit bars.' },
  { href: '/case-converter-online',         icon: '🔡', name: 'Case Converter Online',          desc: 'Convert text to UPPERCASE, lowercase, Title Case, camelCase, and more.' },
  { href: '/remove-duplicate-lines-online', icon: '🧹', name: 'Remove Duplicate Lines',         desc: 'Remove repeated lines from any list, email export, or keyword list.' },
  { href: '/remove-line-breaks',            icon: '✂️', name: 'Remove Line Breaks',             desc: 'Remove or replace line breaks from pasted text instantly.' },
  { href: '/remove-empty-lines',            icon: '📄', name: 'Remove Empty Lines',             desc: 'Strip all blank lines from text, code, or data exports.' },
  { href: '/remove-extra-spaces',           icon: '⎵',  name: 'Remove Extra Spaces',            desc: 'Collapse multiple whitespace characters into single spaces.' },
  { href: '/lorem-ipsum-generator',         icon: '📄', name: 'Lorem Ipsum Generator',          desc: 'Generate placeholder text in any length for design mockups.' },
  { href: '/text-to-handwriting-online',    icon: '✍️', name: 'Text to Handwriting',            desc: 'Convert typed text into realistic handwritten style images.' },
  { href: '/markdown-editor-online',        icon: '📋', name: 'Markdown Editor Online',         desc: 'Write and preview Markdown with live rendering.' },
  { href: '/text-to-speech-online',         icon: '🔊', name: 'Text to Speech Online',          desc: 'Convert any text to spoken audio in your browser.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Text Tools Online',
      description: 'A collection of free browser-based text tools including word counter, character counter, case converter, line break remover, duplicate line remover, and more.',
      url: `${SITE_CONFIG.url}/tools/text`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/tools/text` },
      ],
    },
  ],
};

export default function TextToolsCategoryPage() {
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
                <li className="text-surface-800 font-medium">Text Tools</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">📝</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Text Tools Online
                </h1>
                <p className="text-surface-500 mt-1">{TEXT_TOOLS.length} tools · All free · No signup</p>
              </div>
            </div>
            <p className="text-surface-600 text-lg leading-relaxed max-w-3xl">
              A complete suite of free browser-based text tools for writers, developers,
              students, and content creators. Count words, convert cases, clean up formatting,
              remove duplicates, and more — all without leaving your browser or signing up.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {TEXT_TOOLS.map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl hover:border-sky-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-xl">
                    {tool.icon}
                  </div>
                  <div className="font-semibold text-sm text-surface-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {tool.name}
                  </div>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>

          {/* SEO content */}
          <div className="space-y-10 max-w-3xl">

            <section aria-labelledby="about-text-tools">
              <h2 id="about-text-tools" className="font-display font-bold text-2xl text-surface-900 mb-4">
                Why Use Online Text Tools?
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  Text processing tasks that used to require writing scripts, opening a code
                  editor, or installing desktop software can now be done instantly in a browser
                  tab. Our free text tools handle the most common text manipulation tasks that
                  professionals face daily — without requiring any technical knowledge.
                </p>
                <p>
                  Writers use the{' '}
                  <Link href="/word-counter-online" className="text-sky-700 hover:underline font-medium">word counter online</Link>{' '}
                  to track article length and reading time. Developers use the{' '}
                  <Link href="/remove-line-breaks" className="text-sky-700 hover:underline font-medium">line break remover</Link>{' '}
                  to clean up multi-line strings for SQL queries and API calls. Data analysts use
                  the{' '}
                  <Link href="/remove-duplicate-lines-online" className="text-sky-700 hover:underline font-medium">duplicate line remover</Link>{' '}
                  to deduplicate keyword lists, email lists, and data exports. All tools run
                  entirely in your browser — your text never leaves your device.
                </p>
                <p>
                  The{' '}
                  <Link href="/case-converter-online" className="text-sky-700 hover:underline font-medium">case converter</Link>{' '}
                  is particularly useful for programmers who need to switch between camelCase,
                  snake_case, SCREAMING_SNAKE_CASE, and Title Case when working with different
                  codebases and APIs. The{' '}
                  <Link href="/character-counter-online" className="text-sky-700 hover:underline font-medium">character counter</Link>{' '}
                  includes live limit bars for Twitter (280), SMS (160), and meta descriptions
                  (160) — making it the fastest way to check if your content fits platform limits.
                </p>
              </div>
            </section>

            <section aria-labelledby="cleaning-tools">
              <h2 id="cleaning-tools" className="font-display font-bold text-2xl text-surface-900 mb-4">
                Text Cleaning Tools — Remove, Fix, and Normalize
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  The text cleaning tools on this page handle the most common data quality
                  issues in real-world text processing. The{' '}
                  <Link href="/remove-line-breaks" className="text-sky-700 hover:underline font-medium">remove line breaks tool</Link>{' '}
                  solves the universal problem of multi-line text that needs to be a single line
                  for spreadsheets, databases, or code. The{' '}
                  <Link href="/remove-empty-lines" className="text-sky-700 hover:underline font-medium">remove empty lines tool</Link>{' '}
                  cleans up blank rows in data exports. The{' '}
                  <Link href="/remove-extra-spaces" className="text-sky-700 hover:underline font-medium">remove extra spaces tool</Link>{' '}
                  normalizes whitespace issues from PDFs and document copies.
                </p>
                <p>
                  These tools are most powerful when used together. A typical workflow for
                  cleaning copied PDF text: remove line breaks (with replace-with-space enabled)
                  → remove extra spaces → run through the word counter to verify output.
                  This three-step process turns fragmented, line-broken PDF text into clean,
                  publication-ready paragraphs in under 30 seconds.
                </p>
              </div>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}