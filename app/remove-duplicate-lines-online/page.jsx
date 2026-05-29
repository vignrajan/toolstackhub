import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RemoveDuplicateLines from '../../components/tools/RemoveDuplicateLines';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Remove Duplicate Lines Online (Free Text Cleaner Tool)',
  description: 'Remove duplicate lines online. Clean text, logs, CSV data, and keyword lists with this free browser-based tool. Case-sensitive option. No signup required.',
  keywords: [
    'remove duplicate lines online',
    'remove duplicate text lines',
    'delete duplicate lines',
    'remove repeated lines',
    'unique lines generator',
    'deduplicate text online',
    'remove duplicate lines free',
    'online duplicate line remover',
    'clean duplicate text',
    'remove repeated lines tool',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/remove-duplicate-lines-online` },
  openGraph: {
    title: 'Remove Duplicate Lines Online (Free Text Cleaner Tool)',
    description: 'Remove duplicate lines from any text instantly. Free, browser-based, case-sensitive option, no signup required.',
    url: `${SITE_CONFIG.url}/remove-duplicate-lines-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Duplicate Lines Online – Free Text Cleaner',
    description: 'Remove duplicate lines from text instantly. Case-sensitive option, sort output, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I remove duplicate lines online?',
    a: 'Paste your text into the input area, choose your options (case sensitivity, trim whitespace, sort output), then click "Remove Duplicates". Unique lines appear instantly in the output panel. Click Copy or Download to save the result. The entire process takes under 5 seconds regardless of how many lines you paste.',
  },
  {
    q: 'What is the difference between case sensitive and case insensitive duplicate removal?',
    a: 'Case insensitive mode (default) treats "Apple", "APPLE", and "apple" as the same line — only the first occurrence is kept. Case sensitive mode treats them as three different lines and keeps all three. Use case insensitive for email lists and keyword lists where capitalization is inconsistent. Use case sensitive for code, URLs, and data where capitalization carries meaning.',
  },
  {
    q: 'Is this duplicate line remover free?',
    a: 'Yes — completely free with no account, no subscription, and no usage limits. Paste and clean as much text as you need, as many times as you need.',
  },
  {
    q: 'Does it support large text files?',
    a: 'Yes. The tool processes text entirely in your browser using JavaScript, so it can handle thousands of lines quickly. Very large inputs (100,000+ lines) may take a moment depending on your device, but there is no hard limit.',
  },
  {
    q: 'Is my text data safe?',
    a: 'Completely safe. All processing happens locally in your browser. Your text is never sent to any server, never stored, and never logged. You can safely paste sensitive data including email lists, API keys, and confidential documents.',
  },
  {
    q: 'Can I remove duplicate lines on mobile?',
    a: 'Yes — the tool is fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. Paste text from any app and clean it directly on your phone.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Remove Duplicate Lines Online',
      description: 'Free browser-based tool to remove duplicate lines from any text. Supports case-sensitive and case-insensitive modes, whitespace trimming, empty line removal, sorted output, and .txt download.',
      url: `${SITE_CONFIG.url}/remove-duplicate-lines-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Remove duplicate lines instantly',
        'Case-sensitive and case-insensitive modes',
        'Trim whitespace from each line',
        'Ignore empty lines',
        'Sort output alphabetically',
        'Download as .txt file',
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
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` },
        { '@type': 'ListItem', position: 3, name: 'Remove Duplicate Lines', item: `${SITE_CONFIG.url}/remove-duplicate-lines-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Remove Duplicate Lines Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text',          text: 'Copy your list, log entries, CSV rows, or any line-separated text and paste it into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose options',           text: 'Select case sensitivity, whether to trim whitespace, ignore empty lines, and whether to sort output.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Remove Duplicates',  text: 'Click the button. Unique lines appear instantly in the output panel with a stats bar showing duplicates removed.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy or download',         text: 'Click Copy to copy to clipboard, or Download to save as a .txt file to your device.' },
      ],
    },
  ],
};

// ── Advanced use cases ────────────────────────────────────────
const advancedUseCases = [
  {
    title: 'Merge Multiple Keyword Lists',
    steps: [
      'Export keyword lists from Google Search Console, Ahrefs, SEMrush, and manual research',
      'Paste all lists into a single text document with one keyword per line',
      'Run through the duplicate remover with case-insensitive mode',
      'Download the clean master keyword list — ready for content planning',
    ],
    color: 'blue',
    icon: '🔍',
  },
  {
    title: 'Clean Scraped Email Lists',
    steps: [
      'Combine subscriber lists from multiple lead magnets, forms, or imports',
      'Paste all email addresses — one per line — into the input',
      'Use case-insensitive mode so "User@Gmail.com" and "user@gmail.com" match',
      'Download the deduplicated list for your email marketing platform',
    ],
    color: 'emerald',
    icon: '📧',
  },
  {
    title: 'Deduplicate Server Log Files',
    steps: [
      'Copy repeated error messages or log entries from your server log',
      'Paste into the tool — identical repeated lines are filtered out instantly',
      'Enable Sort Output to group similar log entries together',
      'Copy the clean log to your incident report or debugging session',
    ],
    color: 'amber',
    icon: '📋',
  },
  {
    title: 'Normalize Database Export Values',
    steps: [
      'Export a column of values from PostgreSQL, MySQL, or CSV export',
      'Paste the values — one per line',
      'Enable Trim Whitespace to catch duplicates with inconsistent spacing',
      'Use the result to build a DISTINCT value set for your query or import',
    ],
    color: 'violet',
    icon: '🗄️',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function RemoveDuplicateLinesPage() {
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
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Remove Duplicate Lines</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Remove Duplicate Lines from Text Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste any text and instantly remove all duplicate lines — keeping only unique
              lines in your output. Free, browser-based, with case-sensitive and
              case-insensitive modes, whitespace trimming, and optional sorted output.
              No signup, no upload, your data never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '⚡ Instant Results',
                '⚙️ Case Sensitive Option',
                '🔡 Sort Output',
                '🔒 No Data Stored',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RemoveDuplicateLines />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Duplicate Line Remover" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — Intro */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Remove Duplicate Lines Online – What It Does and Why You Need It
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Duplicate lines appear in text files, lists, logs, and data exports more
                often than you might expect. When you copy email lists from multiple
                sources, export database records, combine CSV files, or compile keyword
                lists — duplicates are almost inevitable. Manually scanning hundreds or
                thousands of lines to find and delete repeated entries is tedious,
                error-prone, and time-consuming.
              </p>
              <p>
                Our free <strong>remove duplicate lines online</strong> tool eliminates
                this problem instantly. Paste your text — no matter how large — click
                one button, and get a clean list of unique lines in under a second.
                The tool also lets you <strong>remove duplicate text lines</strong> in
                case-insensitive mode, so "Apple" and "apple" are treated as the same
                entry. You can also trim leading and trailing whitespace from each line
                before comparison — critical when working with real-world data that
                often contains inconsistent spacing.
              </p>
              <p>
                Whether you need to <strong>delete duplicate lines</strong> from a
                keyword list, <strong>remove repeated lines</strong> from a log file,
                or use it as a <strong>unique lines generator</strong> to extract only
                the distinct entries from a large dataset — this tool handles all of
                it with zero configuration and no sign-up required. Use it alongside
                our{' '}
                <Link href="/tools/word-counter" className="text-emerald-700 hover:underline font-medium">
                  word counter online
                </Link>{' '}
                to check the size of your cleaned output, or pair it with the{' '}
                <Link href="/tools/case-converter" className="text-emerald-700 hover:underline font-medium">
                  case converter online
                </Link>{' '}
                to normalize text before deduplication.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Remove Duplicate Lines — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',         desc: 'Copy your list, CSV rows, log entries, or any line-separated text and paste it into the input area on the left.' },
                { step: '02', icon: '⚙️', title: 'Set Your Options',        desc: 'Choose case sensitivity, whether to trim whitespace from each line, ignore empty lines, and whether to sort the output.' },
                { step: '03', icon: '✨', title: 'Click Remove Duplicates', desc: 'Hit the button. Unique lines appear instantly in the output panel. The stats bar shows exactly how many duplicates were removed.' },
                { step: '04', icon: '📊', title: 'Review the Stats',        desc: 'The stats bar shows total lines in, unique lines kept, and how many duplicates were found and removed.' },
                { step: '05', icon: '📋', title: 'Copy to Clipboard',       desc: 'Click Copy to copy all unique lines to your clipboard — ready to paste into a spreadsheet, email tool, or code editor.' },
                { step: '06', icon: '⬇️', title: 'Download as .txt',        desc: 'Click Download to save the unique lines as a .txt file directly to your device for later use.' },
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

          {/* Section 3 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Features of Our Duplicate Line Remover
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'Instant & Free',             desc: 'Removes duplicates in milliseconds regardless of input size. No payment, no trial, no usage limits.' },
                { icon: '🔡', title: 'Case Sensitive Mode',        desc: 'Toggle between case-sensitive (Apple ≠ apple) and case-insensitive (Apple = apple) comparison for accurate deduplication.' },
                { icon: '✂️', title: 'Whitespace Trimming',        desc: 'Strip leading and trailing spaces from each line before comparison — catches duplicates with inconsistent spacing.' },
                { icon: '🗑️', title: 'Empty Line Removal',        desc: 'Optionally skip blank lines so they don\'t count as duplicate empty entries in your output.' },
                { icon: '🔤', title: 'Alphabetical Sorting',       desc: 'Sort the unique output lines alphabetically — useful for keyword lists, glossaries, and organized datasets.' },
                { icon: '📊', title: 'Live Stats Display',         desc: 'After processing, see total lines input, unique lines kept, and exactly how many duplicates were removed.' },
                { icon: '⬇️', title: 'Download as .txt',          desc: 'Save your clean unique lines as a .txt file directly to your device with one click.' },
                { icon: '🔒', title: 'Private & Secure',           desc: 'Runs entirely in your browser — your text is never sent to any server, stored, or logged anywhere.' },
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

          {/* Section 4 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '📧',
                  title: 'Clean Email Lists',
                  desc: 'Merge subscriber lists from multiple sources and remove all duplicate email addresses in one pass — ensuring each subscriber appears only once before sending a campaign.',
                },
                {
                  icon: '🔍',
                  title: 'Deduplicate Keyword Lists',
                  desc: 'Combine keyword lists from Google Search Console, Ahrefs, SEMrush, and manual research, then remove all duplicates to get a clean master keyword list for SEO content planning.',
                },
                {
                  icon: '📊',
                  title: 'Clean CSV and Data Files',
                  desc: 'Paste rows from CSV exports and remove duplicate rows before importing into a database, spreadsheet, or CRM system to prevent data integrity issues.',
                },
                {
                  icon: '📋',
                  title: 'Remove Duplicate Log Entries',
                  desc: 'Clean up server logs, error logs, and event logs by removing repeated log lines — making it faster to identify unique events and debug issues.',
                },
                {
                  icon: '💻',
                  title: 'Deduplicate Code Arrays',
                  desc: 'Paste the contents of a text-based array or list from your codebase and instantly get the unique values — useful when cleaning hardcoded data or config files.',
                },
                {
                  icon: '🛒',
                  title: 'Clean Product or Category Lists',
                  desc: 'Remove duplicate product names, SKUs, categories, or tags from eCommerce exports before uploading to Shopify, WooCommerce, or any other platform.',
                },
                {
                  icon: '🗃️',
                  title: 'Normalize Database Records',
                  desc: 'Paste exported database values and deduplicate them before writing back — useful for normalizing tags, categories, and user-generated content with inconsistent entries.',
                },
                {
                  icon: '✅',
                  title: 'Clean To-Do and Task Lists',
                  desc: 'Combine tasks from multiple planning sessions or tools and remove any duplicated tasks to get a clean consolidated action list without repetition.',
                },
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

          {/* Section 5 — Advanced Use Cases */}
          <section aria-labelledby="advanced-usecases-heading">
            <h2 id="advanced-usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
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

          {/* Section 6 — How It Works + Case Sensitivity */}
          <section aria-labelledby="how-it-works-heading">
            <h2 id="how-it-works-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              How Duplicate Line Removal Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                The deduplication process follows three simple steps internally:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2 text-surface-600">
                <li><strong className="text-surface-800">Split:</strong> Your input text is split into individual lines at every newline character.</li>
                <li><strong className="text-surface-800">Scan:</strong> Each line is scanned in order. A "seen" set tracks which lines have already been encountered.</li>
                <li><strong className="text-surface-800">Filter:</strong> If a line has not been seen before, it is added to the output. If it has already appeared, it is silently removed.</li>
              </ol>
              <p>
                The result preserves the original order of first occurrence — the first time
                a line appears it is kept, and every subsequent occurrence is removed. This
                means the output always reflects the natural order of your original text,
                not a random reordering. If you want alphabetical order, enable Sort Output
                before clicking Remove Duplicates.
              </p>
            </div>

            {/* Case Sensitivity section */}
            <h3 className="font-display font-bold text-xl text-surface-900 mb-5">
              Case Sensitive vs Case Insensitive — What Is the Difference?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h4 className="font-semibold text-blue-800 mb-3">🔡 Case Insensitive (Default)</h4>
                <p className="text-sm text-blue-700 leading-relaxed mb-4">
                  Treats uppercase and lowercase letters as identical. "Apple", "APPLE",
                  and "apple" are all considered the same line — only the first occurrence
                  is kept. Best for email lists, keyword lists, and product names where
                  capitalization is inconsistent.
                </p>
                <div className="bg-blue-900 rounded-lg p-3 font-mono text-xs">
                  <div className="text-surface-400 mb-1">Input:</div>
                  <div className="text-emerald-300">Apple<br />APPLE<br />apple<br />Banana</div>
                  <div className="text-surface-400 mt-2 mb-1">Output:</div>
                  <div className="text-sky-300">Apple<br />Banana</div>
                  <div className="text-surface-500 mt-2">2 duplicates removed</div>
                </div>
              </div>
              <div className="p-5 bg-violet-50 border-2 border-violet-200 rounded-2xl">
                <h4 className="font-semibold text-violet-800 mb-3">🔠 Case Sensitive</h4>
                <p className="text-sm text-violet-700 leading-relaxed mb-4">
                  Treats uppercase and lowercase letters as different characters. "Apple",
                  "APPLE", and "apple" are all considered unique lines — all three are
                  kept. Best for code identifiers, URLs, and data where capitalization
                  carries semantic meaning.
                </p>
                <div className="bg-violet-900 rounded-lg p-3 font-mono text-xs">
                  <div className="text-surface-400 mb-1">Input:</div>
                  <div className="text-emerald-300">Apple<br />APPLE<br />apple<br />Banana</div>
                  <div className="text-surface-400 mt-2 mb-1">Output:</div>
                  <div className="text-sky-300">Apple<br />APPLE<br />apple<br />Banana</div>
                  <div className="text-surface-500 mt-2">0 duplicates removed</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-600">
              <strong className="text-surface-800">When to use case sensitive:</strong> Use it
              when your data needs exact-match deduplication — for example, programming
              variable names where <code className="bg-surface-100 text-surface-700 px-1 rounded font-mono">userName</code> and{' '}
              <code className="bg-surface-100 text-surface-700 px-1 rounded font-mono">UserName</code> are meaningfully
              different entries.
            </div>
          </section>

          {/* Section 7 — Why It Matters */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Removing Duplicate Lines Matters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '📊',
                  title: 'Data Quality',
                  desc: 'Duplicate entries in databases and spreadsheets cause inflated metrics, incorrect aggregate calculations, and misleading reports. Removing duplicates before data import is a fundamental data hygiene practice.',
                },
                {
                  icon: '📧',
                  title: 'Email Deliverability',
                  desc: 'Sending the same email to the same address twice increases unsubscribe rates, spam complaints, and can damage your sender reputation with ESPs. Clean lists are required for good deliverability.',
                },
                {
                  icon: '🔍',
                  title: 'SEO Keyword Strategy',
                  desc: 'Keyword lists compiled from multiple sources routinely contain 20–40% duplicates. Deduplicating before content planning prevents creating multiple pages targeting the same term.',
                },
                {
                  icon: '⚡',
                  title: 'System Performance',
                  desc: 'Processing duplicate records in batch jobs, ETL pipelines, and API calls wastes computation, increases costs, and slows throughput. Deduplicated inputs produce faster, cheaper, cleaner outputs.',
                },
              ].map(w => (
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

          {/* Section 8 — Keyword Coverage / Related text tools */}
          <section aria-labelledby="related-text-heading">
            <h2 id="related-text-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Other Free Text Cleaning & Formatting Tools
            </h2>
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              After removing duplicate lines, these tools help you further clean,
              format, analyze, and transform your text — all free, all browser-based,
              and all work without a signup.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/tools/word-counter',
                  label: 'Word Counter Online',
                  desc: 'Count words, characters, sentences, and reading time after cleaning your text',
                  icon: '📝',
                },
                {
                  href: '/tools/character-counter',
                  label: 'Character Counter Online',
                  desc: 'Count characters with live Twitter, SMS, and meta description limit bars',
                  icon: '🔢',
                },
                {
                  href: '/tools/case-converter',
                  label: 'Case Converter Online',
                  desc: 'Convert deduplicated text to UPPERCASE, lowercase, Title Case, or camelCase',
                  icon: '🔡',
                },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
                  <span className="text-2xl shrink-0">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-emerald-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Duplicate Removal Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/remove-duplicate-lines-case-sensitive', label: 'Remove Duplicate Lines Case Sensitive', desc: 'Exact-match deduplication' },
                { href: '/remove-duplicate-lines-ignore-case',    label: 'Remove Duplicate Lines Ignore Case',    desc: 'Case-insensitive deduplication' },
                { href: '/remove-duplicate-words-online',         label: 'Remove Duplicate Words Online',         desc: 'Remove repeated words in text' },
                { href: '/remove-duplicate-sentences',            label: 'Remove Duplicate Sentences',            desc: 'Deduplicate full sentences' },
                { href: '/remove-duplicate-paragraphs',           label: 'Remove Duplicate Paragraphs',           desc: 'Remove repeated paragraph blocks' },
                { href: '/unique-lines-generator',                label: 'Unique Lines Generator',                desc: 'Extract only unique lines' },
                { href: '/remove-duplicate-csv-rows',             label: 'Remove Duplicate CSV Rows',             desc: 'Clean duplicate rows in CSV' },
                { href: '/remove-duplicate-list-items',           label: 'Remove Duplicate List Items',           desc: 'Deduplicate bullet lists' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — FAQ */}
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

          {/* Section 11 — TextToolsLinks internal linking cluster */}
          <TextToolsLinks currentHref="/remove-duplicate-lines-online" />

        </div>
      </main>
      <RelatedToolsCluster currentSlug="remove-duplicate-lines-online" />
      <Footer />
    </>
  );
}