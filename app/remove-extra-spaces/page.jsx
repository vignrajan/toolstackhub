import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RemoveLineBreaks from '../../components/tools/RemoveLineBreaks';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── Metadata ──────────────────────────────────────────────────
export const metadata = {
  title: 'Remove Extra Spaces Online – Clean Whitespace Free',
  description: 'Remove extra spaces and whitespace from text instantly online. Collapse double spaces, clean copied PDF text, and normalize whitespace. Free, no signup.',
  keywords: [
    'remove extra spaces online',
    'remove double spaces from text',
    'clean whitespace online',
    'collapse spaces in text',
    'remove extra whitespace',
    'fix extra spaces in text',
    'remove multiple spaces online free',
    'trim whitespace online',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/remove-extra-spaces` },
  openGraph: {
    title: 'Remove Extra Spaces Online – Clean Whitespace Free',
    description: 'Remove extra spaces and whitespace from text instantly. Free, browser-based, no signup.',
    url: `${SITE_CONFIG.url}/remove-extra-spaces`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Extra Spaces Online Free – Clean Whitespace',
    description: 'Collapse double spaces and clean whitespace from text instantly. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ ───────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What causes extra spaces in text?',
    a: 'Extra spaces appear for several reasons: PDFs use spaces to simulate column layout and padding when text is copied. Documents automatically insert double spaces after periods in some locales. Fixed-width data exports pad fields with trailing spaces. HTML non-breaking spaces (&nbsp;) become regular space characters when copied. Tab characters that don\'t render correctly appear as multiple spaces. All of these sources produce the same problem — text with more whitespace than intended.',
  },
  {
    q: 'How do I remove double spaces from text?',
    a: 'Use this tool with the "Replace breaks with space" toggle enabled. This joins all lines with a single space and collapses any multiple consecutive spaces into one. For text that is already on a single line, the tool\'s output trims and normalizes all whitespace. You can also manually use Find & Replace in most editors with the regex pattern "  +" (two or more spaces) → " " (one space).',
  },
  {
    q: 'Does this tool also remove leading and trailing spaces?',
    a: 'Yes — the tool trims leading and trailing whitespace from the overall output. Lines that begin or end with invisible spaces are cleaned up as part of the processing. This handles the common case of copied text that has invisible padding at the start or end of each line.',
  },
  {
    q: 'Can I use this to fix PDF text with extra spaces?',
    a: 'Yes — this is one of the most common use cases. When you copy text from a PDF, the PDF reader often inserts extra spaces between words to simulate the PDF\'s visual column layout. Paste the copied text, enable "Replace breaks with space", and click the button to get clean readable text with normalized spacing.',
  },
  {
    q: 'Is my text sent to a server?',
    a: 'No. All processing runs entirely in your browser using JavaScript. Your text never leaves your device and is never sent to any server. Safe for confidential documents, contracts, personal data, and API keys.',
  },
  {
    q: 'What is the difference between extra spaces and extra line breaks?',
    a: 'Extra spaces are horizontal whitespace characters (space, tab, non-breaking space) that appear within or around text on the same line. Extra line breaks are vertical — they create blank rows or additional newlines between lines of text. This tool handles both when used with the appropriate toggles. Use "replace with space" for line breaks, and the output automatically collapses multiple resulting spaces.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Remove Extra Spaces Online',
      description: 'Free browser-based tool to remove extra spaces and whitespace from text. Collapses multiple spaces, trims leading/trailing spaces, and normalizes whitespace from PDFs, documents, and data exports.',
      url: `${SITE_CONFIG.url}/remove-extra-spaces`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Collapse multiple spaces into single spaces',
        'Trim leading and trailing whitespace',
        'Fix PDF copied text with extra spaces',
        'Normalize whitespace-only lines',
        'Browser-based — no server upload',
        'No signup required',
      ],
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
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/tools/text` },
        { '@type': 'ListItem', position: 3, name: 'Remove Extra Spaces', item: `${SITE_CONFIG.url}/remove-extra-spaces` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Remove Extra Spaces from Text Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text',                  text: 'Copy text with extra spaces and paste into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Enable replace with space',        text: 'Toggle "Replace line breaks with space" to join lines and normalize spacing.' },
        { '@type': 'HowToStep', position: 3, name: 'Click the button',                 text: 'Click Remove Line Breaks to process. Multiple spaces are collapsed.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the normalized output',       text: 'Click Copy Output to copy the clean text to clipboard.' },
      ],
    },
  ],
};

// ── Advanced workflows ────────────────────────────────────────
const advancedUseCases = [
  {
    title: 'Fix Copied PDF Text',
    color: 'blue',
    icon: '📄',
    steps: [
      'Copy text from any PDF document — articles, reports, contracts, or forms',
      'Paste into the tool — you will see irregular spacing and line breaks from PDF layout',
      'Enable "Remove empty lines" AND "Replace breaks with space" toggles',
      'Click the button — get clean, readable text with normalized single spaces throughout',
    ],
  },
  {
    title: 'Normalize Database Field Values',
    color: 'violet',
    icon: '🗄️',
    steps: [
      'Export text fields (names, addresses, descriptions) from your database',
      'Paste the exported values — one per line or as a block of text',
      'Run through the tool to trim leading/trailing spaces and collapse doubles',
      'Re-import the normalized values — string comparisons and lookups will now work correctly',
    ],
  },
  {
    title: 'Clean Up Scraped Web Content',
    color: 'emerald',
    icon: '🌐',
    steps: [
      'Copy text extracted from web pages — which often contains &nbsp; and padding spaces',
      'Paste into the tool with replace-with-space enabled',
      'Output collapses all whitespace variants into clean single spaces',
      'Use the cleaned text for keyword analysis, content comparison, or publication',
    ],
  },
  {
    title: 'Prepare Data for Comparison',
    color: 'amber',
    icon: '🔍',
    steps: [
      'Take two lists of values to compare — from different sources with different formatting',
      'Remove extra spaces from both lists using this tool',
      'Now that whitespace is normalized, string comparisons will match correctly',
      'Use the cleaned lists with the duplicate lines remover to find intersections',
    ],
  },
];

// ── Why whitespace causes problems ───────────────────────────
const problems = [
  {
    icon: '🗄️',
    title: 'Database Query Failures',
    desc: 'SQL WHERE clauses use exact string matching by default. A search for "John Smith" will not match "John  Smith" (two spaces) or " John Smith" (leading space). Extra whitespace in stored values or query strings causes lookups to silently return no results — a notoriously hard bug to find.',
  },
  {
    icon: '📊',
    title: 'VLOOKUP and Formula Errors',
    desc: 'Excel VLOOKUP, INDEX/MATCH, and MATCH functions all use exact string comparison. A value with a trailing space ("Apple ") will not match "Apple" — causing #N/A errors that look like data mismatches but are actually whitespace issues. Normalizing spaces before pasting data prevents this entire class of spreadsheet problems.',
  },
  {
    icon: '🔐',
    title: 'Authentication Failures',
    desc: 'Passwords, API keys, and access tokens copied from documents sometimes carry trailing spaces. These cause authentication failures that are extremely difficult to debug because the extra space is invisible in log output. Always clean copied credentials through a whitespace normalizer before use.',
  },
  {
    icon: '🔍',
    title: 'Search and Deduplication Errors',
    desc: 'Deduplication algorithms, full-text search engines, and comparison tools treat "apple " and "apple" as different strings. When working with lists of names, products, or keywords from multiple sources, normalizing whitespace before deduplication prevents false duplicates from surviving cleanup.',
  },
];

export default function RemoveExtraSpacesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* Page header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Remove Extra Spaces</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Remove Extra Spaces Online – Clean Whitespace from Text Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Collapse multiple spaces, trim leading and trailing whitespace, and normalize
              spacing across any text. Fix copied PDF text, clean database exports, and
              prepare data for accurate comparisons. Free, browser-based, no signup.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Data Stored', '📄 Fixes PDF Text', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
            <span className="text-lg shrink-0">💡</span>
            <div className="text-sm text-blue-800">
              <strong>How to use:</strong> Paste your text below, enable the{' '}
              <strong>"Replace line breaks with space"</strong> toggle, then click the button.
              This joins all lines with single spaces and collapses any double spaces automatically.
            </div>
          </div>
          <RemoveLineBreaks />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Remove Extra Spaces from Text – Why It Matters More Than You Think
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Extra whitespace is the most invisible data quality problem in text processing.
                You cannot see double spaces in most text editors. You cannot see trailing
                spaces at the end of a cell in Excel. You cannot see the non-breaking space
                character that arrived when you copied text from a website. But these hidden
                characters cause real, concrete failures — broken database lookups, failing
                spreadsheet formulas, authentication errors, and deduplication mismatches that
                waste hours of debugging time.
              </p>
              <p>
                Our free <strong>remove extra spaces online</strong> tool solves this silently
                by normalizing all whitespace in one operation. Enable "Replace line breaks
                with space" to join multi-line text into a single clean string — the tool
                automatically collapses any resulting double spaces into single spaces as part
                of the join operation. The output is always trimmed of leading and trailing
                whitespace, giving you text that is clean from the first character to the last.
              </p>
              <p>
                For the most complete text cleanup, combine this tool with the{' '}
                <Link href="/tools/remove-empty-lines" className="text-emerald-700 hover:underline font-medium">
                  remove empty lines tool
                </Link>{' '}
                (enable both toggles simultaneously) and then run the output through the{' '}
                <Link href="/tools/remove-duplicate-lines" className="text-emerald-700 hover:underline font-medium">
                  remove duplicate lines tool
                </Link>{' '}
                for a fully normalized, deduplicated, single-spaced result ready for
                any downstream use.
              </p>
            </div>
          </section>

          {/* Section 2 — How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Remove Extra Spaces — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',             desc: 'Copy text from a PDF, document, spreadsheet, or any source with irregular spacing and paste into the input area.' },
                { step: '02', icon: '🔘', title: 'Enable Replace with Space',   desc: 'Toggle "Replace line breaks with space" on. This joins lines with single spaces and collapses multiple spaces automatically.' },
                { step: '03', icon: '✂️', title: 'Click the Button',            desc: 'Click "Remove Line Breaks". All extra whitespace is collapsed. Double spaces become single spaces throughout the output.' },
                { step: '04', icon: '📋', title: 'Copy Normalized Text',        desc: 'Click "Copy Output". Paste the clean, normalized text into your spreadsheet, database, email, or document.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Where extra spaces come from */}
          <section aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Where Do Extra Spaces Come From?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '📄', title: 'PDF Text Extraction',          desc: 'PDFs store text with absolute positioning. When you copy text, the PDF reader inserts extra spaces to simulate the visual column layout — often inserting 2–5 spaces between words where one space belongs.' },
                { icon: '📝', title: 'Double Space After Period',    desc: 'Some typists use double spaces after periods (an old typewriter convention). This inserts a second space after every sentence ending — invisible in most displays but present in the raw text.' },
                { icon: '📊', title: 'Fixed-Width Data Exports',     desc: 'Databases and legacy systems export fixed-width format files where every field is padded to a set length with trailing spaces. A 10-character field containing "Apple" becomes "Apple     " in the export.' },
                { icon: '🌐', title: 'HTML Non-Breaking Spaces',     desc: 'Web pages use &nbsp; (non-breaking space) to create visual spacing. When you copy web content, these characters become regular spaces in the clipboard — but they may appear doubled or tripled.' },
                { icon: '⌨️', title: 'Tab Characters',               desc: 'Tabs copied from spreadsheets, code editors, or terminal output often render as multiple spaces in plain text editors, creating irregular spacing that looks like extra spaces but is actually a different character.' },
                { icon: '🔄', title: 'Copy-Paste Accumulation',     desc: 'When text is copy-pasted multiple times between different applications, extra spaces accumulate from each application\'s formatting conventions — leading to progressively more cluttered whitespace.' },
              ].map(s => (
                <div key={s.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-blue-200 transition-colors">
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{s.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Why whitespace causes problems */}
          <section aria-labelledby="problems-heading">
            <h2 id="problems-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Extra Whitespace Causes Real Problems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map(p => (
                <div key={p.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{p.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Advanced workflows */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Advanced Use Cases — Step-by-Step Workflows
            </h2>
            <div className="space-y-4">
              {advancedUseCases.map(auc => (
                <div key={auc.title} className={`p-5 bg-${auc.color}-50 border border-${auc.color}-200 rounded-2xl`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{auc.icon}</span>
                    <h3 className={`font-display font-semibold text-${auc.color}-900`}>{auc.title}</h3>
                  </div>
                  <ol className="space-y-2">
                    {auc.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full bg-${auc.color}-200 text-${auc.color}-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5`}>{i + 1}</span>
                        <span className={`text-sm text-${auc.color}-800 leading-relaxed`}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Before / after visual */}
          <section aria-labelledby="example-heading">
            <h2 id="example-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Before and After — What the Tool Does
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-900 rounded-2xl p-5">
                <div className="text-surface-400 text-xs uppercase tracking-wider mb-3">Before — PDF copied text</div>
                <pre className="font-mono text-sm text-red-300 leading-7 whitespace-pre-wrap">{`The  quick  brown  fox
jumps  over  the  lazy
dog.   This  sentence
is   broken   across
multiple   lines.`}</pre>
              </div>
              <div className="bg-surface-900 rounded-2xl p-5">
                <div className="text-surface-400 text-xs uppercase tracking-wider mb-3">After — normalized output</div>
                <pre className="font-mono text-sm text-emerald-300 leading-7 whitespace-pre-wrap">{`The quick brown fox jumps over the lazy dog. This sentence is broken across multiple lines.`}</pre>
              </div>
            </div>
            <p className="text-sm text-surface-500 mt-3">
              All double spaces collapsed to single, all line breaks replaced with single spaces, leading/trailing whitespace trimmed.
            </p>
          </section>

          {/* Section 7 — Keyword coverage */}
          <section aria-labelledby="keyword-heading">
            <h2 id="keyword-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Tool to Remove Extra Spaces Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need to <strong>remove double spaces from text</strong> after
                copying from a PDF, <strong>clean whitespace online</strong> before a database
                import, <strong>trim whitespace</strong> from field values, or{' '}
                <strong>fix extra spaces in text</strong> from a legacy data export — this
                tool normalizes all whitespace in one operation without requiring any technical
                knowledge or command-line access.
              </p>
              <p>
                Use our{' '}
                <Link href="/tools/word-counter" className="text-emerald-700 hover:underline font-medium">
                  word counter
                </Link>{' '}
                to verify word count after cleaning, or our{' '}
                <Link href="/tools/character-counter" className="text-emerald-700 hover:underline font-medium">
                  character counter
                </Link>{' '}
                to confirm how much whitespace was removed. Pair with the{' '}
                <Link href="/tools/remove-empty-lines" className="text-emerald-700 hover:underline font-medium">
                  remove empty lines tool
                </Link>{' '}
                and the{' '}
                <Link href="/tools/remove-duplicate-lines" className="text-emerald-700 hover:underline font-medium">
                  remove duplicate lines tool
                </Link>{' '}
                for a complete text normalization pipeline.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Space & Whitespace Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/remove-empty-lines',           label: 'Remove Empty Lines',             desc: 'Delete blank lines alongside normalizing spaces' },
                { href: '/tools/remove-line-breaks',           label: 'Remove Line Breaks',             desc: 'Remove all newline characters from text' },
                { href: '/tools/remove-duplicate-lines',label: 'Remove Duplicate Lines',         desc: 'Deduplicate after normalizing whitespace' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors group">
                  <div className="font-semibold text-blue-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-blue-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Text Cleaning Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/remove-duplicate-lines', icon: '🧹', label: 'Remove Duplicate Lines',   desc: 'Remove repeated lines from any list or text' },
                { href: '/tools/remove-line-breaks',            icon: '✂️', label: 'Remove Line Breaks',        desc: 'Remove all newline characters from text' },
                { href: '/tools/remove-empty-lines',            icon: '📄', label: 'Remove Empty Lines',        desc: 'Delete blank lines from any text or list' },
                { href: '/tools/word-counter',           icon: '📝', label: 'Word Counter Online',       desc: 'Measure word count after cleaning whitespace' },
                { href: '/tools/character-counter',      icon: '🔢', label: 'Character Counter Online',  desc: 'Count characters after removing extra spaces' },
                { href: '/tools/case-converter',         icon: '🔡', label: 'Case Converter Online',     desc: 'Normalize text case as part of full cleanup' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-blue-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/remove-extra-spaces" />

        </div>
      </main>
      <RelatedToolsCluster currentSlug="remove-extra-spaces" />
      <Footer />
    </>
  );
}