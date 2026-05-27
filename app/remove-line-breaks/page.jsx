import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RemoveLineBreaks from '../../components/tools/RemoveLineBreaks';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── Metadata ──────────────────────────────────────────────────
export const metadata = {
  title: 'Remove Line Breaks Online Free – Clean Text Instantly',
  description: 'Remove line breaks from text online for free. Paste text, remove new lines instantly. Options: remove empty lines, replace with space. No signup. Try now!',
  keywords: [
    'remove line breaks online',
    'remove line breaks from text',
    'remove new lines from text',
    'text cleaner tool',
    'remove line breaks free',
    'clean text online',
    'remove paragraph breaks',
    'line break remover',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/remove-line-breaks` },
  openGraph: {
    title: 'Remove Line Breaks Online Free – Clean Text Instantly',
    description: 'Remove line breaks from any text instantly. Free, browser-based, no signup.',
    url: `${SITE_CONFIG.url}/remove-line-breaks`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Line Breaks Online Free – Clean Text Instantly',
    description: 'Remove line breaks from any text instantly. Free, browser-based, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a line break?',
    a: 'A line break is an invisible character (\\n or \\r\\n) that tells text editors and applications to start a new line. When you press Enter in a text editor, you insert a line break. They are necessary for formatting text documents but become a problem when pasting text into systems that treat each line break as a new record or paragraph.',
  },
  {
    q: 'Why do I need to remove line breaks from text?',
    a: 'You need to remove line breaks when copying multi-line text into a single-line input (like a spreadsheet cell, SQL query, or search box), when cleaning up text copied from PDFs or documents that break sentences mid-line, or when preparing content for systems that treat newlines as delimiters.',
  },
  {
    q: 'What is the difference between "remove line breaks" and "replace with space"?',
    a: 'Remove line breaks deletes the newline characters entirely — words on adjacent lines are joined with no space between them (e.g. "hello\\nworld" becomes "helloworld"). Replace with space substitutes each line break with a single space — words are properly separated (e.g. "hello\\nworld" becomes "hello world"). Use replace with space when your text has meaningful content on each line.',
  },
  {
    q: 'What does "Remove empty lines" do?',
    a: 'Empty lines are lines that contain only whitespace or nothing at all. They add vertical space between paragraphs but are often unwanted in data processing. Enabling this option strips out all blank lines before the main line break removal, giving you a clean single-block output.',
  },
  {
    q: 'Is my text stored or sent to a server?',
    a: 'No. All processing runs entirely in your browser using JavaScript. Your text never leaves your device and is never sent to any server. This makes the tool safe for confidential documents, code, API keys, and sensitive business data.',
  },
  {
    q: 'Can I use this on mobile?',
    a: 'Yes — the tool is fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. Paste text from any app and clean it instantly on your phone.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Remove Line Breaks Online',
      description: 'Free browser-based tool to remove line breaks from any text. Options to remove empty lines and replace line breaks with spaces. Instant, private, no signup.',
      url: `${SITE_CONFIG.url}/remove-line-breaks`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Remove all line breaks from text',
        'Remove empty lines toggle',
        'Replace line breaks with space toggle',
        'Copy output to clipboard',
        'Character and line count display',
        'Browser-based — no data uploaded',
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
        { '@type': 'ListItem', position: 3, name: 'Remove Line Breaks', item: `${SITE_CONFIG.url}/remove-line-breaks` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Remove Line Breaks Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text',          text: 'Copy and paste your multi-line text into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose options',           text: 'Toggle "Remove empty lines" or "Replace breaks with space" as needed.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Remove Line Breaks', text: 'Click the button to process your text instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the result',          text: 'Click Copy Output to copy the cleaned text to your clipboard.' },
      ],
    },
  ],
};

// ── Use cases ─────────────────────────────────────────────────
const usecases = [
  {
    icon: '💻',
    title: 'Developers & Programmers',
    desc: 'Clean multi-line API responses, log file entries, or copied code snippets into single-line strings for SQL queries, JSON values, or CLI commands. Essential when pasting text into environments that interpret newlines as command terminators.',
  },
  {
    icon: '📊',
    title: 'Excel & Spreadsheet Users',
    desc: 'Excel and Google Sheets treat newlines inside cells as line breaks within that cell — not as delimiters between rows. When pasting multi-line addresses, descriptions, or notes, remove line breaks first so all content fits in a single cell without wrapping.',
  },
  {
    icon: '📋',
    title: 'Copy-Paste Cleanup',
    desc: 'PDF text copied to clipboard often breaks mid-sentence with newlines from the PDF\'s column layout. Remove line breaks to turn fragmented lines back into readable paragraphs before pasting into emails, documents, or presentations.',
  },
  {
    icon: '🔍',
    title: 'SEO & Content Writers',
    desc: 'When extracting text from HTML source, scraped web pages, or CMS exports for editing or analysis, remove structural line breaks to get clean running text that can be reformatted or processed without layout artifacts.',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Prepare body copy for email platforms by removing line breaks from draft text before pasting — many email editors add double spacing or unwanted paragraph breaks when they encounter newline characters.',
  },
  {
    icon: '🗄️',
    title: 'Database & Data Work',
    desc: 'Database imports using CSV or TSV files treat newlines as row delimiters. Multi-line cell content must have internal line breaks removed before export to prevent data from splitting across multiple rows during import.',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function RemoveLineBreaksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Remove Line Breaks</li>
              </ol>
            </nav>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Remove Line Breaks Online (Free Text Cleaner Tool)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste any text and remove all line breaks instantly — with options to strip
              empty lines or replace newlines with spaces. Free, browser-based, and completely
              private. No signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Data Stored', '⚙️ 2 Clean Modes', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RemoveLineBreaks />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Line Break Remover" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What are line breaks */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Are Line Breaks and Why Do They Cause Problems?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>line break</strong> is an invisible character inserted into text every
                time you press the Enter key. In plain text files, there are two common formats:
                a Unix-style line feed (<code className="bg-surface-100 text-brand-700 px-1 rounded text-sm font-mono">\n</code>)
                and a Windows-style carriage return plus line feed
                (<code className="bg-surface-100 text-brand-700 px-1 rounded text-sm font-mono">\r\n</code>).
                Most text editors, web browsers, and applications treat these characters as
                instructions to start a new line of text.
              </p>
              <p>
                Line breaks are essential for structured documents — they create paragraphs,
                separate list items, and organize code. But they become a significant problem
                in many real-world workflows. When you copy text from a PDF, a website, or a
                document and paste it into a spreadsheet cell, a database field, a URL, or a
                single-line input — those hidden newline characters break the formatting,
                split data across unintended rows, or cause errors in systems that expect
                single-line strings.
              </p>
              <p>
                This is where a <strong>remove line breaks online</strong> tool becomes
                essential. Instead of manually scanning and deleting newlines — an error-prone
                process with long texts — you paste your content, click one button, and get
                perfectly cleaned text in under a second. You can also use our{' '}
                <Link href="/remove-duplicate-lines-online" className="text-emerald-700 hover:underline font-medium">
                  remove duplicate lines tool
                </Link>{' '}
                to clean up repeated entries after removing line breaks, or the{' '}
                <Link href="/word-counter-online" className="text-emerald-700 hover:underline font-medium">
                  word counter
                </Link>{' '}
                to verify the size of your cleaned output.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Remove Line Breaks — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',          desc: 'Copy any multi-line text — from a PDF, document, email, or web page — and paste it into the input area.' },
                { step: '02', icon: '⚙️', title: 'Set Your Options',         desc: 'Toggle "Remove empty lines" to strip blank lines. Toggle "Replace with space" to join lines with a space instead of deleting the break.' },
                { step: '03', icon: '✂️', title: 'Click Remove Line Breaks', desc: 'Click the button to process instantly. The cleaned text appears in the output panel immediately.' },
                { step: '04', icon: '📋', title: 'Copy & Use',               desc: 'Click Copy Output to copy the cleaned text to clipboard. Paste it into your spreadsheet, email, code, or any other destination.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Who Needs a Line Break Remover — Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usecases.map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-emerald-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why remove line breaks */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Why Remove Line Breaks? The Technical Explanation
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                At a technical level, <strong>removing new lines from text</strong> converts
                multi-line strings into single-line strings — a transformation needed in dozens
                of programming and data workflows. In Python, JavaScript, and most languages,
                string functions like <code className="bg-surface-100 text-surface-700 px-1 rounded text-sm font-mono">.replace('\n', '')</code> or
                regex patterns like <code className="bg-surface-100 text-surface-700 px-1 rounded text-sm font-mono">/\r?\n/g</code> perform
                this operation. This <strong>text cleaner tool</strong> does the same thing
                visually — without requiring any code.
              </p>
              <p>
                The "Replace with space" option is particularly important. When PDF text is
                copied, each visual line in the document becomes a separate line in the clipboard.
                A sentence that reads "The quick brown fox jumps over the lazy dog" might arrive
                as:
              </p>
              <div className="bg-surface-900 rounded-xl p-4 font-mono text-sm">
                <div className="text-red-400">The quick brown fox<br />jumps over the lazy<br />dog</div>
                <div className="text-surface-500 text-xs mt-3">↓ After "Replace with space"</div>
                <div className="text-emerald-300 mt-1">The quick brown fox jumps over the lazy dog</div>
              </div>
              <p>
                Without replacing with spaces, removing the line breaks would produce
                "The quick brown foxjumps over the lazydog" — incorrect and unreadable.
                Always use "Replace with space" when cleaning up naturally-flowing prose.
                Use "Remove" (without space) only for data lists where each line is an
                independent value you want concatenated.
              </p>
              <p>
                You can combine this tool with our{' '}
                <Link href="/character-counter-online" className="text-emerald-700 hover:underline font-medium">
                  character counter online
                </Link>{' '}
                to measure the size difference before and after cleaning, or use the{' '}
                <Link href="/case-converter-online" className="text-emerald-700 hover:underline font-medium">
                  case converter
                </Link>{' '}
                to normalize text after removing line breaks.
              </p>
            </div>
          </section>

          {/* Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Features of This Line Break Remover
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '✂️', title: 'Instant Removal',              desc: 'Processes text of any length in milliseconds — no upload, no waiting, no page refresh.' },
                { icon: '🔤', title: 'Replace with Space Option',    desc: 'Joins lines with a single space instead of deleting the break — keeps sentences readable after cleaning.' },
                { icon: '🗑️', title: 'Remove Empty Lines',          desc: 'Strips blank lines from the input before processing — ideal for cleaning up structured exports.' },
                { icon: '📊', title: 'Live Line & Char Counter',     desc: 'Shows input and output line count and character count side by side — measure your reduction instantly.' },
                { icon: '🔒', title: 'Fully Private',                desc: 'All processing happens in your browser. Text is never sent to any server, never stored, never logged.' },
                { icon: '📱', title: 'Mobile Responsive',            desc: 'Works on all modern mobile browsers. Clean text on the go without switching to desktop.' },
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

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              Related Text Cleaning Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/remove-duplicate-lines-online', icon: '🧹', label: 'Remove Duplicate Lines',  desc: 'Remove repeated lines from any list or text' },
                { href: '/remove-empty-lines',            icon: '📄', label: 'Remove Empty Lines',       desc: 'Strip all blank lines from your text instantly' },
                { href: '/remove-extra-spaces',           icon: '⎵',  label: 'Remove Extra Spaces',      desc: 'Collapse multiple spaces into single spaces' },
                { href: '/word-counter-online',           icon: '📝', label: 'Word Counter Online',      desc: 'Count words and characters in your cleaned text' },
                { href: '/case-converter-online',         icon: '🔡', label: 'Case Converter Online',    desc: 'Convert text to UPPER, lower, or Title Case' },
                { href: '/character-counter-online',      icon: '🔢', label: 'Character Counter Online', desc: 'Count characters and check platform limits' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-emerald-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Line Break & Space Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* TextTools cluster links */}
          <TextToolsLinks currentHref="/remove-line-breaks" />

        </div>
      </main>
      <RelatedToolsCluster currentSlug="remove-line-breaks" />
      <Footer />
    </>
  );
}