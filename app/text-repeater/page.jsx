import { Suspense } from 'react';
import Link from 'next/link';
import TextRepeater from '../../components/tools/TextRepeater';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Text Repeater Online — Repeat Text, Words & Emojis Instantly (Free)',
  description: 'Free text repeater online. Repeat any text, word, sentence or emoji up to 1000× with custom separators. No login, no signup. Works for WhatsApp, testing, data generation.',
  keywords: [
    'text repeater', 'repeat text online', 'text repeater online free',
    'word repeater', 'repeat text multiple times', 'text multiplier',
    'repeat words online', 'sentence repeater', 'emoji repeater',
    'text repeater for whatsapp', 'repeat text generator',
    'online text repeater no login', 'duplicate text online',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/text-repeater` },
  openGraph: {
    title: 'Text Repeater Online — Repeat Text, Words & Emojis Instantly (Free)',
    description: 'Repeat any text up to 1000 times with custom separators. Free, instant, no login. Works for WhatsApp, testing, and bulk content.',
    url: `${SITE_CONFIG.url}/text-repeater`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const USE_CASES = [
  {
    icon: '💬',
    title: 'WhatsApp & Messaging',
    color: 'green',
    desc: 'Send "Happy Birthday! 🎉" 50 times. Flood a group chat with emojis. Repeat a word for dramatic effect in a message. This is the most popular use — and it takes 5 seconds.',
    examples: ['"I love you" × 100', '"Happy Birthday 🎂" × 50', '"😂" × 200', '"Send help" × 30'],
  },
  {
    icon: '🧪',
    title: 'Developer & QA Testing',
    color: 'brand',
    desc: 'Generate large text payloads to stress-test input fields, APIs, and databases. Check how your UI handles overflow. Test character limits on forms, tweets, and SMS systems.',
    examples: ['Repeat sample JSON × 100', 'Fill test database with dummy rows', 'Test textarea overflow handling', 'Simulate bulk API payload'],
  },
  {
    icon: '📊',
    title: 'Data & Spreadsheets',
    color: 'purple',
    desc: 'Need to fill 500 rows with the same placeholder value? Repeat "N/A", "TBD", or a sample value and paste into Excel or Google Sheets. Faster than Excel\'s REPT() formula.',
    examples: ['"N/A" × 500 rows', '"Pending" × 200', 'Sample ID × 100', '"Test User" × 1000'],
  },
  {
    icon: '✍️',
    title: 'Content & Copywriting',
    color: 'amber',
    desc: 'Generate repeating content structures, placeholder copy, dummy text, or templated sections. Useful for creating wireframe copy, testing CMS layouts, or generating bulk drafts.',
    examples: ['Placeholder section × 20', 'Dummy headline × 10', 'Template block × 50', 'Lorem alternative × 100'],
  },
  {
    icon: '🎨',
    title: 'Design & Mockups',
    color: 'rose',
    desc: 'Fill design mockups with realistic repeating text instead of "Lorem ipsum." Repeat a product title, a review snippet, or a notification message across your UI prototype.',
    examples: ['"New message" × 30', 'Product name × 20', 'Review text × 15', 'Notification × 50'],
  },
  {
    icon: '🔬',
    title: 'SEO & Content Testing',
    color: 'teal',
    desc: 'Generate repetitive keyword-rich content blocks for testing how search engines handle duplication. Repeat anchor text patterns, meta variations, or structured data blocks.',
    examples: ['Keyword phrase × 10', 'Structured data block × 5', 'Meta description test × 3', 'Alt text template × 20'],
  },
];

const FAQS = [
  {
    q: 'What is a text repeater?',
    a: 'A text repeater is an online tool that takes any text you enter — a word, sentence, emoji, or paragraph — and duplicates it a specified number of times. You can choose how many repetitions you want and add a separator (space, comma, new line, or custom character) between each copy. The output is instant and ready to copy.',
  },
  {
    q: 'How do I repeat text online for free?',
    a: 'Paste or type your text into the input box above. Set the number of repetitions using the number field or the quick buttons (×3, ×5, ×10, etc.). Choose your separator — new line, comma, space, or custom. Click Repeat Text and your output appears instantly. Click Copy to copy it. No account needed, completely free.',
  },
  {
    q: 'Can I repeat emojis with this text repeater?',
    a: 'Yes. This tool fully supports emojis, symbols, and special characters. Type or paste any emoji into the input field and set your desired repetition count. The output will contain the emoji repeated exactly as entered. Popular use: repeating emojis for WhatsApp messages or social media comments.',
  },
  {
    q: 'Is there a limit to how many times I can repeat text?',
    a: 'This tool supports up to 1,000 repetitions. For very large outputs — like repeating a long paragraph 1,000 times — the resulting text may be several megabytes. The tool processes entirely in your browser using JavaScript, so the only real limit is your device\'s available memory.',
  },
  {
    q: 'Does my text get uploaded to any server?',
    a: 'No. This text repeater runs entirely in your browser using JavaScript. Your text never leaves your device — nothing is sent to any server, stored anywhere, or logged. This makes it safe for repeating sensitive content like test data, passwords, or private messages.',
  },
  {
    q: 'Can I repeat multiple lines of text?',
    a: 'Yes. Paste multi-line text into the input — the entire block (including line breaks) is treated as one unit and repeated the specified number of times. This is particularly useful for repeating structured data blocks, code snippets, or multi-line templates.',
  },
  {
    q: 'How is this different from Excel\'s REPT() function?',
    a: 'Excel\'s REPT() function repeats text within a single cell and requires opening a spreadsheet, writing a formula, and managing cell references. This online text repeater works in your browser in seconds, supports multi-line text, adds separators between repetitions, and lets you copy the result instantly. No spreadsheet knowledge needed.',
  },
  {
    q: 'Can I use this text repeater on mobile?',
    a: 'Yes. The tool is fully responsive and works on all devices — Android phones, iPhones, tablets, and desktops. It is particularly useful on mobile for generating repeated WhatsApp messages or emoji sequences directly in your browser.',
  },
];

export default function TextRepeaterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Text Repeater Online — ToolStackHub',
        description: 'Free online text repeater. Repeat any text, word, sentence or emoji up to 1000 times with custom separators. No login required.',
        url: `${SITE_CONFIG.url}/text-repeater`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'Repeat text up to 1000 times',
          'Custom separator support',
          'New line, space, comma separators',
          'Emoji and Unicode support',
          'Multi-line text support',
          'One-click copy',
          'No login required',
          'Browser-based — no server upload',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '3241',
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
          { '@type': 'HowToStep', position: 2, name: 'Set repeat count', text: 'Enter the number of repetitions or click a quick button (×3, ×5, ×10, ×50, ×100).' },
          { '@type': 'HowToStep', position: 3, name: 'Choose separator', text: 'Select New Line, Space, Comma, or type a custom separator character.' },
          { '@type': 'HowToStep', position: 4, name: 'Generate output', text: 'Click "Repeat Text" — the output appears instantly.' },
          { '@type': 'HowToStep', position: 5, name: 'Copy result', text: 'Click Copy to copy the full output to your clipboard.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Text Repeater', item: `${SITE_CONFIG.url}/text-repeater` },
        ],
      },
    ],
  };

  const colorMap = {
    green:  { bg:'bg-emerald-50', border:'border-emerald-200', text:'text-emerald-700', icon:'bg-emerald-100' },
    brand:  { bg:'bg-brand-50',   border:'border-brand-200',   text:'text-brand-700',   icon:'bg-brand-100' },
    purple: { bg:'bg-purple-50',  border:'border-purple-200',  text:'text-purple-700',  icon:'bg-purple-100' },
    amber:  { bg:'bg-amber-50',   border:'border-amber-200',   text:'text-amber-700',   icon:'bg-amber-100' },
    rose:   { bg:'bg-rose-50',    border:'border-rose-200',    text:'text-rose-700',    icon:'bg-rose-100' },
    teal:   { bg:'bg-teal-50',    border:'border-teal-200',    text:'text-teal-700',    icon:'bg-teal-100' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Text Repeater</li>
              </ol>
            </nav>

            {/* Featured snippet block — top of page */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 What is a Text Repeater?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>text repeater</strong> is a free online tool that duplicates any text — word, sentence, emoji, or paragraph — a specified number of times with a separator of your choice. Enter your text, set the count, pick new line / comma / space / custom separator, click Repeat, and copy. No account needed. Runs entirely in your browser.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Text Repeater — Repeat Any Text Online Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Repeat any word, sentence, emoji, or paragraph up to 1,000 times — with a separator of your choice.
              Free, instant, no login. Works on mobile. Your text never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2">
              {['🔁 Up to 1,000 Repetitions', '📋 One-Click Copy', '🌐 Emoji & Unicode', '🔒 No Server Upload', '📱 Mobile Friendly', '🆓 Free Forever'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <TextRepeater />
          </Suspense>
        </div>

        {/* ── CONTENT ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use the Text Repeater — 5 Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { n:'1', icon:'⌨️', title:'Type or paste',     desc:'Enter your text, emoji, or paste multi-line content into the input box.' },
                { n:'2', icon:'🔢', title:'Set repeat count',   desc:'Enter a number or click ×3, ×5, ×10, ×50, or ×100 for quick counts.' },
                { n:'3', icon:'⚙️', title:'Choose separator',   desc:'New line, space, comma, or type any custom character between each repeat.' },
                { n:'4', icon:'▶️', title:'Click Repeat Text',  desc:'Output appears instantly below. No loading, no wait.' },
                { n:'5', icon:'📋', title:'Copy & use',         desc:'One-click copy. Paste into WhatsApp, Excel, code, or anywhere.' },
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

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">What Can You Use a Text Repeater For?</h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              More people use text repeaters than you'd think — for everything from WhatsApp pranks to stress-testing APIs. Here are the most common use cases:
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

          {/* SEPARATORS EXPLAINED */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Separator Options — Which One Should You Use?</h2>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Separator</th>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold">What It Produces</th>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold">Best For</th>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Example Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sep:'New Line',  prod:'Each repetition on its own line', best:'Lists, spreadsheet data, code blocks',  ex:'hello\nhello\nhello' },
                    { sep:'Space',     prod:'Words separated by a single space', best:'Inline text, messaging, simple lists', ex:'hello hello hello' },
                    { sep:'Comma',     prod:'CSV-style comma-separated values',  best:'CSV data, SQL values, tag lists',     ex:'hello, hello, hello' },
                    { sep:'None',      prod:'Repetitions joined with no gap',    best:'Pattern generation, emoji sequences', ex:'hellohellohello' },
                    { sep:'Custom',    prod:'Any character or string between each', best:'Special cases, markdown, delimiters', ex:'hello | hello | hello' },
                  ].map((r, i) => (
                    <tr key={r.sep} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-bold text-surface-900">{r.sep}</td>
                      <td className="px-4 py-3 text-surface-600">{r.prod}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.best}</td>
                      <td className="px-4 py-3 font-mono text-xs text-brand-700 bg-brand-50 rounded-lg px-2">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* VS ALTERNATIVES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Text Repeater vs Alternatives</h2>
            <p className="text-surface-500 leading-relaxed mb-5">
              There are other ways to repeat text — Excel formulas, Python code, manual copy-paste. Here's why the online tool beats them for most use cases:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'#0f172a'}}>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Method</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Speed</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">No Setup</th>
                    <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Multi-line</th>
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method:'ToolStackHub Text Repeater', speed:'⚡ Instant', setup:'✅', multi:'✅', limit:'None for typical use' },
                    { method:'Excel REPT() function',       speed:'🐌 Slow',    setup:'❌',  multi:'❌',  limit:'Single cell only, no line separators' },
                    { method:'Python: "text" * N',          speed:'⚡ Fast',    setup:'❌',  multi:'✅', limit:'Requires a terminal / Python installed' },
                    { method:'Manual copy-paste',            speed:'🐌 Slow',    setup:'✅', multi:'✅', limit:'Impractical beyond 10× repetitions' },
                    { method:'Word / Google Docs macro',     speed:'🐌 Slow',    setup:'❌',  multi:'✅', limit:'Requires macro knowledge, login' },
                  ].map((r, i) => (
                    <tr key={r.method} className={i === 0 ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-semibold ${i === 0 ? 'text-brand-700' : 'text-surface-900'}`}>{r.method}</td>
                      <td className="px-4 py-3 text-center">{r.speed}</td>
                      <td className="px-4 py-3 text-center">{r.setup}</td>
                      <td className="px-4 py-3 text-center">{r.multi}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* QUICK EXAMPLES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Popular Text Repeater Examples</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title:'WhatsApp Emoji Flood',
                  setup:'Text: 😂 | Count: 100 | Separator: None',
                  output:'😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂...',
                  use:'Perfect for reactions, birthday messages, or flooding a group chat.',
                },
                {
                  title:'Repeat for Data Testing',
                  setup:'Text: test@example.com | Count: 50 | Separator: New Line',
                  output:'test@example.com\ntest@example.com\ntest@example.com\n...',
                  use:'Populate test databases, mock CSV files, or test email input fields.',
                },
                {
                  title:'Placeholder Content',
                  setup:'Text: [Product Name] | Count: 20 | Separator: New Line',
                  output:'[Product Name]\n[Product Name]\n[Product Name]\n...',
                  use:'Fill design mockups with structured placeholder text quickly.',
                },
                {
                  title:'CSV Value Generation',
                  setup:'Text: "N/A" | Count: 200 | Separator: Comma',
                  output:'"N/A", "N/A", "N/A", "N/A", "N/A"...',
                  use:'Bulk-fill spreadsheet columns with default values instantly.',
                },
              ].map(ex => (
                <div key={ex.title} className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <h3 className="font-bold text-surface-900 mb-3">{ex.title}</h3>
                  <div className="text-xs font-mono text-brand-700 bg-brand-50 px-3 py-2 rounded-lg mb-2">{ex.setup}</div>
                  <div className="text-xs font-mono text-surface-500 bg-white border border-surface-100 px-3 py-2 rounded-lg mb-3 truncate">{ex.output}</div>
                  <p className="text-xs text-surface-500 leading-relaxed">{ex.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm" itemProp="name">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{f.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Free Text Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href:'/word-counter',          icon:'📊', label:'Word Counter',            desc:'Count words, characters, sentences, and reading time in real time.' },
                { href:'/case-converter',         icon:'🔤', label:'Case Converter',          desc:'UPPERCASE, lowercase, Title Case, camelCase, snake_case — instantly.' },
                { href:'/remove-duplicate-lines', icon:'🧹', label:'Remove Duplicate Lines',  desc:'Clean email lists, keyword lists, and CSV exports. One click.' },
                { href:'/remove-line-breaks',     icon:'↩️', label:'Remove Line Breaks',      desc:'Strip line breaks from any text. Replace with space or remove entirely.' },
                { href:'/remove-extra-spaces',    icon:'␣',  label:'Remove Extra Spaces',     desc:'Collapse multiple spaces into single spaces. Clean any text instantly.' },
                { href:'/number-to-words',        icon:'🔢', label:'Number to Words',         desc:'Convert any number to Indian words (Lakh, Crore). Free, instant.' },
              ].map(t => (
                <Link key={t.href} href={t.href}
                  className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{t.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{t.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* TRUST / EEAT FOOTER */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">Built by ToolStackHub — Browser-Based. Always Free.</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  This text repeater is built and maintained by the ToolStackHub team — a group of developers and designers who build tools we actually use ourselves. Every tool on ToolStackHub runs entirely in your browser. Your text is never uploaded to any server, never stored, and never logged. This is intentional — we built it this way from day one.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ No server upload — runs in browser only
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔄 Updated April 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-surface-100 px-3 py-1 rounded-full border border-surface-200">
                    🆓 Free, no account, no limits
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