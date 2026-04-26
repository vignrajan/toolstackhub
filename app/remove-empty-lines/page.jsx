import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RemoveLineBreaks from '../../components/tools/RemoveLineBreaks';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

// ── Metadata ──────────────────────────────────────────────────
export const metadata = {
  title: 'Remove Empty Lines Online Free – Delete Blank Lines from Text',
  description: 'Remove all empty and blank lines from text instantly. Free browser-based tool. Works with CSV data, code, logs, and pasted content. No signup required. Try now!',
  keywords: [
    'remove empty lines online',
    'delete blank lines from text',
    'remove blank lines online',
    'remove empty lines from text free',
    'strip blank lines tool',
    'clean empty lines online',
    'remove empty rows from text',
    'blank line remover',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/remove-empty-lines` },
  openGraph: {
    title: 'Remove Empty Lines Online Free – Delete Blank Lines from Text',
    description: 'Remove all blank lines from any text instantly. Free, browser-based, no signup required.',
    url: `${SITE_CONFIG.url}/remove-empty-lines`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Empty Lines Online Free – Delete Blank Lines',
    description: 'Strip all blank lines from text instantly. Free, no signup, browser-based.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ ───────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What counts as an empty line?',
    a: 'An empty line is any line that produces no visible output — it may be completely blank, or contain only whitespace characters like spaces, tabs, or non-breaking spaces. This tool removes all of them, including lines that look empty but contain hidden whitespace characters.',
  },
  {
    q: 'What is the difference between removing empty lines and removing line breaks?',
    a: 'Removing empty lines only deletes blank rows — lines with actual content are kept exactly as they are, including their line breaks. Removing all line breaks joins every line together into one continuous string. Use "remove empty lines" when you want to keep your content structured but eliminate the gaps between sections.',
  },
  {
    q: 'Will this work with large text files?',
    a: 'Yes. The tool processes text entirely in your browser using JavaScript, with no file size limit enforced by a server. Very large inputs (100,000+ lines) may take a moment depending on your device, but there is no hard cap on what you can paste.',
  },
  {
    q: 'Is my text safe to paste here?',
    a: 'Completely safe. All processing happens locally in your browser. Your text is never sent to any server, never stored, and never logged. You can safely paste confidential documents, database exports, code, API keys, and business data.',
  },
  {
    q: 'Can I remove empty lines and also remove duplicate lines?',
    a: 'Yes — use this tool first to remove empty lines, then paste the output into our remove duplicate lines tool to also deduplicate the remaining content. The two tools work as a natural pair for data cleaning workflows.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes — fully responsive on all modern mobile browsers including Safari on iPhone and Chrome on Android. Paste from any app and clean your text on the go.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Remove Empty Lines Online',
      description: 'Free browser-based tool to remove all empty and blank lines from any text. Processes CSV data, code, log files, and pasted content instantly with no server upload.',
      url: `${SITE_CONFIG.url}/remove-empty-lines`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Remove all empty and blank lines',
        'Handles whitespace-only lines',
        'Works with any text format',
        'Browser-based — no server upload',
        'Instant results',
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
        { '@type': 'ListItem', position: 3, name: 'Remove Empty Lines', item: `${SITE_CONFIG.url}/remove-empty-lines` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Remove Empty Lines from Text Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text',           text: 'Copy your text with blank lines and paste it into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Enable remove empty lines', text: 'Toggle the "Remove empty lines" option in the toolbar.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Remove Line Breaks',  text: 'Click the button. All blank lines are stripped instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the result',           text: 'Click Copy Output to copy the cleaned text to your clipboard.' },
      ],
    },
  ],
};

// ── Advanced use cases ────────────────────────────────────────
const advancedUseCases = [
  {
    title: 'Clean CSV and Data Exports',
    color: 'blue',
    icon: '📊',
    steps: [
      'Export records from your database, CRM, or spreadsheet application',
      'Open the exported file and copy the content',
      'Paste into the tool with "Remove empty lines" enabled',
      'Copy the clean output and re-import — no phantom blank rows in your dataset',
    ],
  },
  {
    title: 'Clean Up Code Output and Logs',
    color: 'violet',
    icon: '💻',
    steps: [
      'Copy terminal output, server logs, or compiled code with excessive blank lines',
      'Paste into the tool and enable the empty lines toggle',
      'Get compact, readable output with content-only lines preserved',
      'Paste into your incident report, debugging notes, or code review',
    ],
  },
  {
    title: 'Normalize Multi-Source Text',
    color: 'emerald',
    icon: '📋',
    steps: [
      'Merge content from multiple documents, emails, or web pages into one block',
      'Paste the combined text — it will have inconsistent blank line spacing',
      'Run through empty line remover to normalize the spacing',
      'Optionally follow with the duplicate lines remover for fully clean output',
    ],
  },
  {
    title: 'Prepare Text for Word Count Analysis',
    color: 'amber',
    icon: '📝',
    steps: [
      'Copy long-form content with double spacing between paragraphs',
      'Remove empty lines to eliminate padding that inflates line counts',
      'Paste the clean output into the word counter tool for accurate analysis',
      'Use the result to compare content density across documents',
    ],
  },
];

// ── Why it matters ────────────────────────────────────────────
const whyMatters = [
  {
    icon: '🗄️',
    title: 'Database Import Accuracy',
    desc: 'When importing text data into databases via CSV or TSV, each line is treated as a record. Empty lines become blank records — corrupting row counts, triggering validation errors, and inserting NULL rows that must be manually cleaned later.',
  },
  {
    icon: '⚙️',
    title: 'Script and Pipeline Reliability',
    desc: 'Bash scripts, Python scripts, and data pipelines that process text line by line will encounter empty strings when they hit blank lines. These cause off-by-one errors, empty array elements, and conditional logic failures that are hard to debug.',
  },
  {
    icon: '📊',
    title: 'Spreadsheet Formula Accuracy',
    desc: 'COUNTA, VLOOKUP, and array formulas in Excel and Google Sheets are affected by empty rows in the data range. Removing blank lines before pasting data into a spreadsheet prevents formulas from including empty cells in their calculations.',
  },
  {
    icon: '🔍',
    title: 'Content Analysis Quality',
    desc: 'Word frequency tools, keyword density checkers, and readability analyzers count blank lines as structure — affecting line counts and paragraph detection. Remove empty lines before analysis for accurate metrics.',
  },
];

export default function RemoveEmptyLinesPage() {
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
                <li className="text-surface-800 font-medium">Remove Empty Lines</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Remove Empty Lines Online – Delete All Blank Lines from Text Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Strip every empty and blank line from any text in one click. Works with
              CSV data, code files, log output, and pasted documents. Free, completely
              browser-based, your text never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Data Stored', '📋 Copy Output', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
            <span className="text-lg shrink-0">💡</span>
            <div className="text-sm text-emerald-800">
              <strong>How to use:</strong> Paste your text below, then enable the{' '}
              <strong>"Remove empty lines"</strong> toggle in the toolbar before clicking the button.
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
              Remove Empty Lines from Text – Free & Instant Online Tool
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Empty lines are one of the most common and overlooked sources of data quality
                problems in text processing workflows. They appear in exported spreadsheets as
                phantom rows, in copied document text as double spacing, in log files as
                separator padding, and in database exports as NULL record placeholders. Our
                free <strong>remove empty lines online</strong> tool eliminates all of them in
                a single click — with no installation, no account, and no upload to any server.
              </p>
              <p>
                The tool handles every type of blank line: completely empty lines with zero
                characters, lines containing only spaces, lines containing only tab characters,
                and lines with any combination of invisible whitespace. What you see as a blank
                line in your text editor is preserved as a blank line in the input — and removed
                completely from the output. Only lines with actual visible content are kept.
              </p>
              <p>
                You can also combine this with the{' '}
                <Link href="/remove-line-breaks" className="text-emerald-700 hover:underline font-medium">
                  remove line breaks tool
                </Link>{' '}
                — enable both toggles simultaneously to first strip empty lines and then join all
                remaining lines into a single continuous string. Or pair it with the{' '}
                <Link href="/remove-duplicate-lines-online" className="text-emerald-700 hover:underline font-medium">
                  remove duplicate lines tool
                </Link>{' '}
                for a complete deduplication and cleanup workflow.
              </p>
            </div>
          </section>

          {/* Section 2 — How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Remove Empty Lines — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',           desc: 'Copy your text — CSV export, log file, document content, or any multi-line text with blank rows — and paste into the input area.' },
                { step: '02', icon: '🔘', title: 'Enable the Toggle',         desc: 'Click the "Remove empty lines" toggle in the toolbar to turn it on. The toggle turns brand-colored when active.' },
                { step: '03', icon: '✂️', title: 'Click the Button',          desc: 'Click "Remove Line Breaks". All blank lines are stripped instantly. The output shows only lines with visible content.' },
                { step: '04', icon: '📋', title: 'Copy & Use',                desc: 'Click "Copy Output" to copy all cleaned lines to your clipboard. Paste into your spreadsheet, database, or document.' },
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

          {/* Section 3 — Use cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases for Removing Empty Lines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '📊', title: 'CSV and Spreadsheet Imports',    desc: 'Blank rows in CSV files become empty records when imported into databases or spreadsheets. Remove them before uploading to prevent phantom rows, broken formulas, and import validation errors.' },
                { icon: '💻', title: 'Code and Log File Cleanup',      desc: 'Terminal output, server logs, and compiled code often contain blank lines between entries. Removing them produces compact, readable logs that are easier to scan and parse programmatically.' },
                { icon: '📋', title: 'Pasted Document Cleanup',        desc: 'Text copied from Word documents and PDFs arrives with double blank lines between paragraphs. Removing empty lines normalizes the spacing before pasting into another tool or document.' },
                { icon: '🗄️', title: 'Database Record Normalization',  desc: 'Multi-line text fields exported from databases often include blank separator lines between records. Remove them before re-importing to keep record boundaries clean.' },
                { icon: '🔍', title: 'Keyword List Cleaning',          desc: 'Keyword lists from SEO tools, brainstorming sessions, or aggregated sources have gaps between sections. Remove empty lines to get a clean contiguous list for further processing.' },
                { icon: '📝', title: 'Content Preparation',            desc: 'Before running text through a word counter, character counter, or content analysis tool — remove empty lines to get accurate metrics that reflect only the actual content, not the whitespace.' },
              ].map(uc => (
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

          {/* Section 4 — Advanced workflows */}
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

          {/* Section 5 — Why it matters */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Removing Empty Lines Matters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyMatters.map(w => (
                <div key={w.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{w.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{w.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — How it works + features */}
          <section aria-labelledby="how-it-works-heading">
            <h2 id="how-it-works-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Empty Line Removal Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                The tool splits your input text at every newline character
                (<code className="bg-surface-100 text-brand-700 px-1 rounded text-sm font-mono">\n</code> or{' '}
                <code className="bg-surface-100 text-brand-700 px-1 rounded text-sm font-mono">\r\n</code>),
                producing an array of individual lines. Each line is then checked:
                if it contains no visible characters after trimming whitespace, it is
                discarded. Lines with any visible content — even a single character —
                are preserved in their original order and joined back together with newlines.
              </p>

              {/* Visual before/after */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-surface-900 rounded-xl p-4">
                  <div className="text-surface-400 text-xs uppercase tracking-wider mb-2">Before</div>
                  <div className="font-mono text-sm leading-6">
                    <div className="text-emerald-300">apple</div>
                    <div className="text-red-400/60">{'  '}</div>
                    <div className="text-emerald-300">banana</div>
                    <div className="text-red-400/60">{'  '}</div>
                    <div className="text-red-400/60">{'  '}</div>
                    <div className="text-emerald-300">cherry</div>
                    <div className="text-surface-500 text-xs mt-2">6 lines (3 blank)</div>
                  </div>
                </div>
                <div className="bg-surface-900 rounded-xl p-4">
                  <div className="text-surface-400 text-xs uppercase tracking-wider mb-2">After</div>
                  <div className="font-mono text-sm leading-6">
                    <div className="text-emerald-300">apple</div>
                    <div className="text-emerald-300">banana</div>
                    <div className="text-emerald-300">cherry</div>
                    <div className="text-surface-500 text-xs mt-5">3 lines (0 blank)</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Tool vs Alternatives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs Find & Replace in Word',    point: 'Word\'s regex find \\n\\n → \\n requires enabling regex mode and knowing the correct pattern. This tool does it in one toggle click with no pattern knowledge needed.' },
                { label: 'vs Excel TRIM function',       point: 'TRIM() removes leading/trailing spaces but not empty rows. Removing blank rows in Excel requires filtering or VBA macros. This tool handles it instantly from a paste.' },
                { label: 'vs sed/awk in terminal',       point: 'sed \'/^$/d\' removes blank lines from files but requires a terminal, knowledge of the command, and a file path. This tool works in any browser tab in seconds.' },
                { label: 'vs Python script',             point: 'list(filter(None, text.split())) works in Python but requires a runtime, an editor, and writing code. This tool does the same operation with a single button click.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword coverage */}
          <section aria-labelledby="keyword-heading">
            <h2 id="keyword-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Tool to Remove Empty Lines Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need to <strong>delete blank lines from text</strong> before a
                database import, <strong>remove empty rows</strong> from a pasted CSV, strip
                blank lines from a server log, or <strong>clean empty lines online</strong>
                from a keyword list before analysis — this tool handles every scenario
                instantly in your browser. No upload, no API, no command line required.
              </p>
              <p>
                For further cleaning, use our{' '}
                <Link href="/word-counter-online" className="text-emerald-700 hover:underline font-medium">
                  word counter online
                </Link>{' '}
                to measure your content after removing blanks, the{' '}
                <Link href="/character-counter-online" className="text-emerald-700 hover:underline font-medium">
                  character counter
                </Link>{' '}
                to verify output length, or the{' '}
                <Link href="/case-converter-online" className="text-emerald-700 hover:underline font-medium">
                  case converter
                </Link>{' '}
                to normalize text casing after cleanup.
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
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Empty Line & Whitespace Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/remove-blank-lines-online',  label: 'Remove Blank Lines Online',  desc: 'Variant of blank line removal for all text types' },
                { href: '/delete-empty-lines-text',    label: 'Delete Empty Lines from Text', desc: 'Remove empty rows from pasted plain text' },
                { href: '/remove-empty-lines-csv',     label: 'Remove Empty Lines from CSV',  desc: 'Strip blank rows before CSV import or analysis' },
                { href: '/strip-empty-lines-online',   label: 'Strip Empty Lines Online',     desc: 'Lightweight blank line stripper for any input' },
                { href: '/remove-line-breaks',         label: 'Remove Line Breaks',           desc: 'Remove all newline characters entirely' },
                { href: '/remove-extra-spaces',        label: 'Remove Extra Spaces',          desc: 'Collapse multiple whitespace into single spaces' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
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
                { href: '/remove-duplicate-lines-online', icon: '🧹', label: 'Remove Duplicate Lines',   desc: 'Remove repeated lines from keyword lists and data' },
                { href: '/remove-line-breaks',            icon: '✂️', label: 'Remove Line Breaks',        desc: 'Remove all newline characters from text' },
                { href: '/remove-extra-spaces',           icon: '⎵',  label: 'Remove Extra Spaces',       desc: 'Collapse multiple spaces into single spaces' },
                { href: '/word-counter-online',           icon: '📝', label: 'Word Counter Online',       desc: 'Count words and lines in cleaned text' },
                { href: '/character-counter-online',      icon: '🔢', label: 'Character Counter Online',  desc: 'Check character count after removing blank lines' },
                { href: '/case-converter-online',         icon: '🔡', label: 'Case Converter Online',     desc: 'Normalize text case after cleanup' },
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

          <TextToolsLinks currentHref="/remove-empty-lines" />

        </div>
      </main>
      <Footer />
    </>
  );
}