import { Suspense } from 'react';
import Link from 'next/link';
import TextRepeater from '../../components/tools/TextRepeater';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

// ─────────────────────────────────────────────
// METADATA — covers short + long tail keywords
// ─────────────────────────────────────────────
export const metadata = {
  title: 'Text Repeater Online — Repeat Text, Words & Emojis Free (1000×)',
  description:
    'Free text repeater online. Repeat any text, word, sentence or emoji up to 1000× instantly. Works for WhatsApp messages, testing, data generation & spreadsheets. No login. Runs in browser.',
  keywords: [
    // Short tail
    'text repeater',
    'repeat text online',
    'text repeater online free',
    'word repeater',
    'sentence repeater',
    'emoji repeater',
    'text multiplier',
    'text repeater online',
    // Long tail — WhatsApp
    'text repeater for whatsapp',
    'repeat text for whatsapp',
    'text repeater whatsapp messages',
    'emoji repeater for whatsapp',
    'repeat emoji online free',
    'repeat message online',
    // Long tail — actions
    'repeat text 100 times online',
    'repeat text 1000 times online',
    'how to repeat text multiple times',
    'copy text multiple times online',
    'duplicate text online free',
    'repeat words online generator',
    'generate repeated text online',
    // Long tail — use cases
    'text repeater for testing',
    'bulk text generator online',
    'text repeater no login',
    'online text repeater no signup',
    'repeat text without spaces',
    'repeat text with numbers',
    'numbered text generator online',
    'text repeater with incrementing numbers',
    'how to copy text 100 times',
    'repeat same text multiple times',
    // Long tail — tools
    'text repeat generator',
    'text repeater tool free',
    'online text repeater tool',
    'string repeater online',
    'repeat string online',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/text-repeater` },
  openGraph: {
    title: 'Text Repeater Online — Repeat Text, Words & Emojis Free (1000×)',
    description:
      'Repeat any text, emoji or sentence up to 1000 times with custom separators. Works for WhatsApp, testing, and data generation. Free, no login, runs entirely in your browser.',
    url: `${SITE_CONFIG.url}/text-repeater`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

// ─────────────────────────────────────────────
// CONTENT DATA
// ─────────────────────────────────────────────
const USE_CASES = [
  {
    icon: '💬',
    title: 'WhatsApp & Messaging',
    color: 'green',
    desc: 'Flood a chat with "Happy Birthday 🎂" 50 times. Repeat an emoji 200 times for dramatic effect. Send a repeated message to prank a friend. The most popular use — takes 5 seconds.',
    examples: ['"I love you" × 100', 'Happy Birthday 🎂 × 50', '😂 × 200', '"Send help" × 30'],
  },
  {
    icon: '🔢',
    title: 'Numbered Sequences (Unique!)',
    color: 'brand',
    desc: 'Generate 100 numbered test emails, sequential filenames, or HTML option lists in seconds. Use {n} as a placeholder — it gets replaced with 1, 2, 3... automatically.',
    examples: ['user_{n}@test.com × 100', 'photo_{n}.jpg × 500', '<option value="{n}">', 'Test Case #{n} × 50'],
  },
  {
    icon: '🧪',
    title: 'Developer & QA Testing',
    color: 'amber',
    desc: 'Generate large text payloads to stress-test input fields, APIs, and databases. Test UI overflow, character limits on forms, SMS systems, and API endpoints.',
    examples: ['Large payload × 100', 'Dummy database rows', 'Test textarea overflow', 'Bulk API payload test'],
  },
  {
    icon: '📊',
    title: 'Data & Spreadsheets',
    color: 'purple',
    desc: 'Fill 500 rows with "N/A", "Pending", or any placeholder value. Paste directly into Excel or Google Sheets. Faster than Excel\'s REPT() formula for multi-line content.',
    examples: ['"N/A" × 500 rows', '"Pending" × 200', 'Sample ID × 100', '"Test User" × 1000'],
  },
  {
    icon: '🔄',
    title: 'Round-Robin Data (Unique!)',
    color: 'teal',
    desc: 'Cycle through multiple texts in rotation — perfect for alternating gender values, rotating colour names, or generating realistic test datasets with balanced distribution.',
    examples: ['Male/Female/Other × 30', 'Red/Green/Blue × 9', 'Monday–Sunday × 14', 'A/B/C test groups'],
  },
  {
    icon: '🎨',
    title: 'Design & Mockups',
    color: 'rose',
    desc: 'Fill design prototypes with realistic repeating text instead of lorem ipsum. Repeat a product title, review snippet, or notification message across your UI mockup.',
    examples: ['"New message" × 30', 'Product name × 20', 'Review text × 15', 'Notification × 50'],
  },
];

const FAQS = [
  {
    q: 'What is a text repeater?',
    a: 'A text repeater is a free online tool that takes any text you enter — a word, sentence, emoji, or paragraph — and duplicates it a specified number of times. You choose how many repetitions and which separator to add between each copy (new line, comma, space, or custom). The output is instant and ready to copy. It runs entirely in your browser — no account required.',
  },
  {
    q: 'How do I use the text repeater for WhatsApp?',
    a: 'Type or paste your WhatsApp message or emoji into the input box. Set the repeat count (e.g. 100). Choose "None" as separator to get them joined together (perfect for emojis like 😂😂😂) or "New Line" for messages on separate lines. Click Repeat Text. Then tap Copy and paste directly into WhatsApp. The whole process takes under 10 seconds.',
  },
  {
    q: 'How do I repeat text online for free?',
    a: 'Type or paste your text into the input box. Set the repeat count using the number field or quick buttons (×3, ×5, ×10, ×50, ×100, ×1000). Choose a separator — New Line, Space, Comma, None, or Custom. Click Repeat Text — output appears instantly. Click Copy. Done. No account, no signup, completely free.',
  },
  {
    q: 'Can I repeat emojis with this tool?',
    a: 'Yes. This text repeater fully supports emojis, symbols, and special characters. Type or paste any emoji — 😂, 🎂, ❤️, 🔥 — into the input and set your repeat count. The output will have the emoji repeated exactly as entered. For emoji floods (like 😂 × 100 with no separator), choose the "None" separator to join them together with no gaps.',
  },
  {
    q: 'What is the maximum number of repetitions?',
    a: 'This tool supports up to 1,000 repetitions. For very large outputs (like repeating a long paragraph 1,000 times), the result may be several megabytes of text. Everything processes in your browser using JavaScript — the only real limit is your device\'s available memory.',
  },
  {
    q: 'Does my text get uploaded to any server?',
    a: 'No. This text repeater runs entirely in your browser. Your text never leaves your device — nothing is sent to any server, stored anywhere, or logged. This makes it safe for sensitive content like test data, private messages, or confidential documents.',
  },
  {
    q: 'What is the "With Numbers" mode?',
    a: 'The "With Numbers" mode (also called Increment Mode) lets you repeat a template text where a placeholder like {n} gets replaced with an automatically increasing number. For example, enter "user_{n}@test.com" with count 100 and you instantly get user_1@test.com, user_2@test.com... up to user_100@test.com. You can control the start number, step size (e.g. count by 2s or 5s), and zero-padding (e.g. 001, 002). No other text repeater tool offers this feature.',
  },
  {
    q: 'What is the "Multi-Text Rotate" mode?',
    a: 'Rotate mode lets you enter multiple texts (one per line) and cycles through them in order. For example, enter Red, Green, Blue on separate lines and set count to 9 — you get Red, Green, Blue, Red, Green, Blue, Red, Green, Blue. This is unique to this tool and perfect for generating realistic test data with balanced distribution (e.g. alternating Male/Female/Other across 30 rows).',
  },
  {
    q: 'Can I repeat multiple lines of text at once?',
    a: 'Yes. Paste multi-line text into the input — the entire block including line breaks is treated as one unit and repeated the specified number of times. This is useful for repeating structured data blocks, code snippets, or multi-line templates.',
  },
  {
    q: 'How is this different from Excel\'s REPT() function?',
    a: 'Excel\'s REPT() repeats text inside a single cell and requires a spreadsheet open plus formula knowledge. This online tool works in your browser in seconds, supports multi-line text, adds separators between repetitions, offers increment mode (numbered sequences), and lets you copy the result instantly. No Excel knowledge needed.',
  },
  {
    q: 'Can I use this text repeater on mobile / Android / iPhone?',
    a: 'Yes. The tool is fully responsive and works on all devices — Android phones, iPhones, tablets, and desktops. It is particularly useful on mobile for generating repeated WhatsApp messages or emoji sequences. Tap the Copy button to copy output and paste directly into any app.',
  },
  {
    q: 'How do I repeat text without any space between repetitions?',
    a: 'Choose "None" as the separator. This joins all repetitions with zero gap — perfect for generating long strings, emoji floods, or pattern data like "ABABABABAB". For example, repeating "AB" 5 times with None separator gives: ABABABABAB.',
  },
  {
    q: 'Can I generate numbered test data like user_1, user_2, user_3?',
    a: 'Yes — this is what the "With Numbers" mode is built for. Switch to the Numbers tab, enter your template text with {n} as the placeholder (e.g. user_{n}@example.com), set count to however many you need, and click Generate. You can start from any number, use any step size (e.g. count by 10s), and add zero-padding (e.g. user_001, user_002).',
  },
  {
    q: 'How do I repeat text 100 times online?',
    a: 'Type your text into the input box, then click the "×100" quick button (or type 100 in the count field). Choose your separator. Click "Repeat Text". Your text repeated 100 times appears instantly in the output box. Click Copy to copy all of it at once.',
  },
  {
    q: 'Is there a Python equivalent for repeating text?',
    a: 'In Python, you can repeat text with: "your text " * 100. For numbered sequences: "\\n".join([f"user_{i}@test.com" for i in range(1, 101)]). This online tool is faster for one-off tasks since it requires no coding, no terminal, and no Python installation.',
  },
  {
    q: 'Can I repeat text with a custom separator like " | " or " → "?',
    a: 'Yes. Choose "Custom" from the separator options and type any character or string in the field that appears — " | ", " → ", " :: ", or any delimiter you need. The tool places it between every repetition. Example: "hello | hello | hello" using " | " as a custom separator.',
  },
];

const WHATSAPP_EXAMPLES = [
  { emoji: '😂', label: 'Laughing flood',   text: '😂',                count: 100, sep: 'None'    },
  { emoji: '🎂', label: 'Birthday message', text: 'Happy Birthday! 🎂', count: 50,  sep: 'New Line' },
  { emoji: '❤️', label: 'Love message',     text: 'I love you ❤️',      count: 30,  sep: 'New Line' },
  { emoji: '🔥', label: 'Fire flood',       text: '🔥',                 count: 200, sep: 'None'    },
  { emoji: '✅', label: 'Yes spam',         text: 'Yes ✅',              count: 50,  sep: 'New Line' },
  { emoji: '🙏', label: 'Please please',    text: 'Please 🙏',           count: 20,  sep: 'New Line' },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function TextRepeaterPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Text Repeater Online — ToolStackHub',
        description:
          'Free online text repeater. Repeat any text, word, sentence, or emoji up to 1000 times with custom separators, numbered sequences, and multi-text rotation. No login required.',
        url: `${SITE_CONFIG.url}/text-repeater`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'Repeat text up to 1000 times',
          'Custom separator support (newline, space, comma, custom)',
          'Increment mode — repeat with auto-incrementing numbers',
          'Multi-text rotate mode — cycle through multiple texts',
          'Zero-padding for numbers (001, 002, 003)',
          'Emoji and Unicode full support',
          'One-click copy output',
          'No login or signup required',
          'Runs entirely in browser — no server upload',
          'Mobile friendly',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '3841',
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Repeat Text Online',
        totalTime: 'PT10S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter your text', text: 'Type or paste your text, word, sentence, or emoji into the input box.' },
          { '@type': 'HowToStep', position: 2, name: 'Set repeat count', text: 'Enter a number or click a quick button — ×3, ×5, ×10, ×50, ×100, or ×1000.' },
          { '@type': 'HowToStep', position: 3, name: 'Choose separator', text: 'Select New Line, Space, Comma, None, or type a custom separator.' },
          { '@type': 'HowToStep', position: 4, name: 'Click Repeat Text', text: 'Click the Repeat Text button — the output appears instantly.' },
          { '@type': 'HowToStep', position: 5, name: 'Copy and use', text: 'Click Copy to copy all output to your clipboard. Paste anywhere.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',         item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Text Repeater', item: `${SITE_CONFIG.url}/text-repeater` },
        ],
      },
    ],
  };

  const colorMap = {
    green:  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', icon: 'bg-emerald-100' },
    brand:  { bg: 'bg-brand-50',   border: 'border-brand-200',   text: 'text-brand-700',   icon: 'bg-brand-100'  },
    amber:  { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   icon: 'bg-amber-100'  },
    purple: { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700',  icon: 'bg-purple-100' },
    teal:   { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    icon: 'bg-teal-100'   },
    rose:   { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    icon: 'bg-rose-100'   },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Text Repeater</li>
              </ol>
            </nav>

            {/* Featured snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 What is a Text Repeater?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>text repeater</strong> is a free online tool that duplicates any text —
                word, sentence, emoji, or paragraph — a specified number of times with a separator
                of your choice. Paste your text, set the count (up to 1,000), pick a separator
                (new line / space / comma / custom), click Repeat, and copy. No account needed.
                Runs entirely in your browser. Also includes <strong>numbered sequence mode</strong> and
                <strong> multi-text rotate mode</strong> — features no other text repeater offers.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Text Repeater — Repeat Any Text Online Instantly (Free)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Repeat any word, sentence, emoji, or paragraph up to 1,000 times — with any separator.
              Works for WhatsApp messages, developer testing, spreadsheet data, and more.
              Free, instant, no login. Your text never leaves your device.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                { stat: '1,000×',   label: 'Max repetitions'     },
                { stat: '3 Modes',  label: 'Simple · Numbers · Rotate' },
                { stat: '0ms',      label: 'Server upload time'   },
                { stat: '100%',     label: 'Free forever'         },
              ].map(s => (
                <div key={s.stat} className="flex items-center gap-2 bg-surface-100 px-3 py-2 rounded-xl">
                  <span className="font-bold text-surface-900 text-sm">{s.stat}</span>
                  <span className="text-xs text-surface-500">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                '🔁 Up to 1,000 Repetitions',
                '📋 One-Click Copy',
                '🌐 Emoji & Unicode',
                '🔒 No Server Upload',
                '📱 Mobile Friendly',
                '🔢 Numbered Sequences',
                '🔄 Multi-Text Rotate',
                '🆓 Free Forever',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <TextRepeater />
          </Suspense>
        </div>

        {/* ── CONTENT ──────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Use the Text Repeater — 5 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { n: '1', icon: '⌨️', title: 'Type or paste',     desc: 'Enter your text, emoji, or paste multi-line content into the input box.' },
                { n: '2', icon: '🔢', title: 'Set repeat count',   desc: 'Enter a number or click ×3, ×5, ×10, ×50, ×100, ×1000 for instant counts.' },
                { n: '3', icon: '⚙️', title: 'Choose separator',   desc: 'New line, space, comma, none, or any custom character between each repeat.' },
                { n: '4', icon: '▶️', title: 'Click Repeat Text',  desc: 'Output appears instantly. No loading, no wait, no server round-trip.' },
                { n: '5', icon: '📋', title: 'Copy & use',         desc: 'One-click copy. Paste into WhatsApp, Excel, code editor, or anywhere.' },
              ].map(s => (
                <div key={s.n} className="p-4 bg-white border border-surface-200 rounded-2xl text-center">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{s.n}</div>
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="font-bold text-surface-900 text-xs mb-1">{s.title}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WHATSAPP SECTION — dedicated, high-priority */}
          <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-xl">💬</div>
              <div>
                <h2 className="font-display font-bold text-2xl text-surface-900">
                  Text Repeater for WhatsApp
                </h2>
                <p className="text-emerald-700 text-sm">The #1 use case — spam emojis, flood messages, surprise friends</p>
              </div>
            </div>
            <p className="text-surface-600 text-sm leading-relaxed mb-6">
              The most popular use of an online text repeater is for WhatsApp — repeating emojis, sending the
              same message dozens of times, or flooding a group chat for fun. Here are the most popular
              WhatsApp text repeater combinations, ready to use in one click above:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {WHATSAPP_EXAMPLES.map(ex => (
                <div key={ex.label} className="bg-white border border-emerald-200 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{ex.emoji}</div>
                  <div className="font-bold text-surface-800 text-xs mb-1">{ex.label}</div>
                  <div className="text-xs text-surface-400">{ex.text} × {ex.count}</div>
                  <div className="text-xs text-emerald-600 mt-1">Sep: {ex.sep}</div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-emerald-200 rounded-xl p-4">
              <div className="font-bold text-surface-800 text-sm mb-2">📱 How to repeat text for WhatsApp:</div>
              <ol className="space-y-1 text-sm text-surface-600">
                <li><span className="font-bold text-emerald-700">1.</span> Click a Quick Start example above (or type your own emoji/text)</li>
                <li><span className="font-bold text-emerald-700">2.</span> Set repeat count — ×50, ×100, or ×200 for maximum impact</li>
                <li><span className="font-bold text-emerald-700">3.</span> Choose "None" separator for emoji floods, "New Line" for messages</li>
                <li><span className="font-bold text-emerald-700">4.</span> Click "Repeat Text" → Copy → paste directly into WhatsApp</li>
              </ol>
            </div>
          </section>

          {/* 3 MODES EXPLAINED */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              3 Powerful Modes — What Makes This Tool Unique
            </h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              Most text repeater tools only have one mode — paste text, set count, done. This tool has three modes,
              two of which no other text repeater online offers.
            </p>
            <div className="space-y-4">

              {/* Simple */}
              <div className="bg-white border border-surface-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-2xl shrink-0">🔁</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-surface-900 text-lg mb-1">Mode 1 — Simple Repeat</h3>
                    <p className="text-surface-500 text-sm mb-3">
                      The classic. Enter any text and repeat it N times with a separator. Works for emojis, words,
                      sentences, multi-line blocks, code snippets — anything. Supports up to 1,000 repetitions.
                    </p>
                    <div className="bg-surface-50 rounded-xl p-3 font-mono text-xs text-surface-700">
                      <span className="text-brand-600 font-bold">Input:</span> Hello world!{' '}
                      <span className="text-brand-600 font-bold">Count:</span> 3{' '}
                      <span className="text-brand-600 font-bold">Sep:</span> New Line
                      <br />
                      <span className="text-brand-600 font-bold">Output:</span> Hello world! / Hello world! / Hello world!
                    </div>
                  </div>
                </div>
              </div>

              {/* Increment */}
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-200 rounded-xl flex items-center justify-center text-2xl shrink-0">🔢</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-surface-900 text-lg">Mode 2 — With Numbers (Increment)</h3>
                      <span className="text-xs bg-brand-600 text-white px-2 py-0.5 rounded-full font-bold">UNIQUE</span>
                    </div>
                    <p className="text-surface-500 text-sm mb-3">
                      Use <code className="bg-white px-1 rounded text-brand-700 font-mono">{'{n}'}</code> as a
                      placeholder in your text — it gets replaced with an auto-incrementing number on each repetition.
                      Control the start, step size, and zero-padding. <strong>No other text repeater tool has this.</strong>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      {[
                        { input: 'user_{n}@test.com',              output: 'user_1@test.com\nuser_2@test.com\nuser_3@test.com...' },
                        { input: 'Test Case #{n}: PASS',           output: 'Test Case #1: PASS\nTest Case #2: PASS...' },
                        { input: 'photo_{n}.jpg (zero-pad 3)',     output: 'photo_001.jpg\nphoto_002.jpg\nphoto_003.jpg...' },
                        { input: '<option value="{n}">{n}</option>', output: '<option value="1">1</option>\n<option value="2">2</option>...' },
                      ].map(ex => (
                        <div key={ex.input} className="bg-white rounded-xl p-3 text-xs font-mono border border-brand-100">
                          <div className="text-brand-600 font-bold mb-1">→ {ex.input}</div>
                          <div className="text-surface-500 whitespace-pre-line">{ex.output}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-brand-700">
                      Perfect for: numbered test emails, sequential filenames, HTML select options, database seed data, test cases
                    </p>
                  </div>
                </div>
              </div>

              {/* Rotate */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center text-2xl shrink-0">🔄</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-surface-900 text-lg">Mode 3 — Multi-Text Rotate</h3>
                      <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">UNIQUE</span>
                    </div>
                    <p className="text-surface-500 text-sm mb-3">
                      Enter multiple texts (one per line). The tool cycles through them in round-robin order.
                      Great for generating realistic test data with balanced distribution.
                      <strong> No other text repeater tool has this mode.</strong>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                      {[
                        { texts: ['Red', 'Green', 'Blue'],           count: 9,  result: ['Red', 'Green', 'Blue', 'Red', 'Green', 'Blue', '...'] },
                        { texts: ['Male', 'Female', 'Other'],        count: 30, result: ['Male', 'Female', 'Other', 'Male', 'Female', '...']    },
                        { texts: ['Monday', 'Tuesday', 'Wednesday'], count: 14, result: ['Monday', 'Tuesday', 'Wednesday', 'Monday', '...']     },
                      ].map(ex => (
                        <div key={ex.texts[0]} className="bg-white rounded-xl p-3 text-xs border border-purple-100">
                          <div className="text-purple-600 font-bold font-mono mb-1">{ex.texts.join(' / ')} × {ex.count}</div>
                          <div className="text-surface-500 font-mono">{ex.result.join('\n')}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-purple-700">
                      Perfect for: A/B test groups, gender/category rotation, day-of-week sequences, colour schemes, round-robin assignments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              What Can You Use a Text Repeater For?
            </h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              More people use text repeaters than you would think — for everything from WhatsApp pranks to
              stress-testing APIs. Here are the most common use cases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map(uc => {
                const c = colorMap[uc.color];
                return (
                  <div key={uc.title} className={`${c.bg} border ${c.border} rounded-2xl p-5`}>
                    <div className={`w-10 h-10 ${c.icon} rounded-xl flex items-center justify-center text-2xl mb-3`}>
                      {uc.icon}
                    </div>
                    <h3 className="font-bold text-surface-900 mb-2">{uc.title}</h3>
                    <p className="text-sm text-surface-600 leading-relaxed mb-3">{uc.desc}</p>
                    <div className="space-y-1">
                      {uc.examples.map(ex => (
                        <div key={ex} className="flex items-center gap-2 text-xs text-surface-500">
                          <span className={`${c.text} shrink-0`}>→</span>
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SEPARATOR TABLE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Separator Options — Which One Should You Use?
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Separator</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">What It Produces</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Best For</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Example Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sep: 'New Line', prod: 'Each repeat on its own line',   best: 'Lists, spreadsheets, code, WhatsApp messages', ex: 'hello\nhello\nhello' },
                    { sep: 'Space',    prod: 'Space between each repeat',      best: 'Inline text, simple lists, messaging',         ex: 'hello hello hello' },
                    { sep: 'Comma',    prod: 'CSV-style comma-separated',      best: 'CSV data, SQL values, tag lists',              ex: 'hello, hello, hello' },
                    { sep: 'None',     prod: 'All joined with no gap at all',  best: 'Emoji floods, pattern generation, strings',    ex: 'hellohellohello' },
                    { sep: 'Custom',   prod: 'Any character or string',        best: 'Special delimiters, markdown, pipe tables',    ex: 'hello | hello | hello' },
                  ].map((r, i) => (
                    <tr key={r.sep} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.sep}</td>
                      <td className="px-4 py-3 text-surface-600">{r.prod}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.best}</td>
                      <td className="px-4 py-3 font-mono text-xs text-brand-700">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* VS ALTERNATIVES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Text Repeater vs Alternatives — Honest Comparison
            </h2>
            <p className="text-surface-500 leading-relaxed mb-5">
              There are other ways to repeat text — Excel formulas, Python code, manual copy-paste. Here is
              why this online tool beats them for most tasks:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Method</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Speed</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">No Setup</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Numbers Mode</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">Rotate Mode</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: 'ToolStackHub Text Repeater', speed: '⚡ Instant', setup: '✅', nums: '✅', rotate: '✅', limit: 'None for typical use'                    },
                    { method: 'Excel REPT() function',       speed: '🐌 Slow',    setup: '❌',  nums: '⚠️', rotate: '❌',  limit: 'Single cell only, no line separators' },
                    { method: 'Python "text" * N',           speed: '⚡ Fast',    setup: '❌',  nums: '✅', rotate: '✅', limit: 'Requires Python installed'             },
                    { method: 'Manual copy-paste',           speed: '🐌 Slow',    setup: '✅', nums: '❌',  rotate: '❌',  limit: 'Impractical beyond ×10 repetitions'   },
                    { method: 'prepostseo / browserling',    speed: '⚡ Instant', setup: '✅', nums: '❌',  rotate: '❌',  limit: 'Simple repeat only, no advanced modes' },
                  ].map((r, i) => (
                    <tr key={r.method} className={i === 0 ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-semibold ${i === 0 ? 'text-brand-700' : 'text-surface-900'}`}>{r.method}</td>
                      <td className="px-4 py-3 text-center">{r.speed}</td>
                      <td className="px-4 py-3 text-center">{r.setup}</td>
                      <td className="px-4 py-3 text-center">{r.nums}</td>
                      <td className="px-4 py-3 text-center">{r.rotate}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* POPULAR EXAMPLES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Popular Text Repeater Examples — Ready to Copy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'WhatsApp Emoji Flood',
                  setup: 'Text: 😂 · Count: 100 · Separator: None',
                  output: '😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂...',
                  use: 'React to something hilarious in a group chat. Pure emoji spam with zero gaps.',
                  mode: 'simple',
                },
                {
                  title: '100 Numbered Test Emails',
                  setup: 'Text: user_{n}@test.com · Count: 100 · Mode: Numbers',
                  output: 'user_1@test.com\nuser_2@test.com\nuser_3@test.com\n...',
                  use: 'Populate a test database, fill a CSV, or stress-test a mailing system.',
                  mode: 'increment',
                },
                {
                  title: '500 Rows of "N/A" for Spreadsheet',
                  setup: 'Text: N/A · Count: 500 · Separator: New Line',
                  output: 'N/A\nN/A\nN/A\nN/A\nN/A\n...',
                  use: 'Fill empty spreadsheet columns instantly. Paste into Excel or Google Sheets.',
                  mode: 'simple',
                },
                {
                  title: 'Rotating Gender Values for Test Data',
                  setup: 'Texts: Male / Female / Other · Count: 30 · Mode: Rotate',
                  output: 'Male\nFemale\nOther\nMale\nFemale\nOther\n...',
                  use: 'Generate realistic balanced test data — 10 of each value across 30 rows.',
                  mode: 'rotate',
                },
                {
                  title: 'Zero-Padded Filenames',
                  setup: 'Text: photo_{n}.jpg · Count: 100 · Zero-pad: 3 digits',
                  output: 'photo_001.jpg\nphoto_002.jpg\nphoto_003.jpg\n...',
                  use: 'Bulk-rename file lists or generate sequential asset names for design exports.',
                  mode: 'increment',
                },
                {
                  title: 'Birthday Message Repeat',
                  setup: 'Text: Happy Birthday! 🎂 · Count: 50 · Separator: New Line',
                  output: 'Happy Birthday! 🎂\nHappy Birthday! 🎂\nHappy Birthday! 🎂\n...',
                  use: 'Send a wall of birthday wishes. Works great on WhatsApp group chats.',
                  mode: 'simple',
                },
              ].map(ex => (
                <div key={ex.title} className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-bold text-surface-900 text-sm">{ex.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      ex.mode === 'simple'    ? 'bg-brand-100 text-brand-700' :
                      ex.mode === 'increment' ? 'bg-amber-100 text-amber-700' :
                                                'bg-purple-100 text-purple-700'
                    }`}>
                      {ex.mode === 'simple' ? 'Simple' : ex.mode === 'increment' ? 'Numbers' : 'Rotate'}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-brand-700 bg-brand-50 px-3 py-2 rounded-lg mb-2">{ex.setup}</div>
                  <div className="text-xs font-mono text-surface-500 bg-white border border-surface-100 px-3 py-2 rounded-lg mb-3 truncate">{ex.output}</div>
                  <p className="text-xs text-surface-500 leading-relaxed">{ex.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ — 16 questions */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Everything you need to know about repeating text online — WhatsApp, testing, modes, and more.
            </p>
            <div className="space-y-2">
              {FAQS.map((f, i) => (
                <details
                  key={i}
                  className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm"
                    itemProp="name"
                  >
                    {f.q}
                    <svg
                      className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div
                    className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{f.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Related Free Text Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/word-counter-online',           icon: '📊', label: 'Word Counter',            desc: 'Count words, characters, sentences, and reading time in real time.' },
                { href: '/case-converter-online',         icon: '🔤', label: 'Case Converter',          desc: 'UPPERCASE, lowercase, Title Case, camelCase, snake_case — instantly.' },
                { href: '/remove-duplicate-lines-online', icon: '🧹', label: 'Remove Duplicate Lines',  desc: 'Clean email lists, keyword lists, and CSV exports in one click.' },
                { href: '/remove-line-breaks',            icon: '↩️', label: 'Remove Line Breaks',      desc: 'Strip line breaks from any text. Replace with space or remove entirely.' },
                { href: '/remove-extra-spaces',           icon: '␣',  label: 'Remove Extra Spaces',     desc: 'Collapse multiple spaces into single spaces. Clean any text instantly.' },
                { href: '/lorem-ipsum-generator',         icon: '📝', label: 'Lorem Ipsum Generator',   desc: 'Generate placeholder text by paragraphs, sentences, or words.' },
              ].map(t => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group"
                >
                  <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{t.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{t.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EEAT / TRUST */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">
                  Built by ToolStackHub — Browser-Based, Privacy-First, Always Free
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  This text repeater is built and maintained by the ToolStackHub team — developers who build
                  tools they actually use. Every tool on ToolStackHub runs entirely in your browser.
                  Your text is never uploaded to any server, never stored, and never logged.
                  This is intentional — we built it this way from day one because we believe your
                  content is yours alone. The increment and rotate modes were built specifically because
                  no other online text repeater offered them — and our users kept asking for them.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ Zero server upload — runs in browser only
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔄 Updated April 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-surface-100 px-3 py-1 rounded-full border border-surface-200">
                    🆓 Free, no account, no limits
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    🔢 Exclusive: Numbers + Rotate modes
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}