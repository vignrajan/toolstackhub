import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import TextRepeater from '../../components/tools/TextRepeater';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

// ── Metadata ──────────────────────────────────────────────────
export const metadata = {
  title: 'Text Repeater Online Free – Repeat Text & Words Instantly',
  description: 'Repeat any text, word, or sentence online instantly. Set how many times to repeat, choose separator (new line, space, comma). Free, no signup. Try now!',
  keywords: [
    'text repeater',
    'text repeater online',
    'repeat text online',
    'word repeater',
    'repeat words online free',
    'text repeater tool',
    'repeat sentence online',
    'copy text multiple times',
    'duplicate text online',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/text-repeater` },
  openGraph: {
    title: 'Text Repeater Online Free – Repeat Text Instantly',
    description: 'Repeat any text, word, or sentence instantly. Choose separator, set count. Free, no signup.',
    url: `${SITE_CONFIG.url}/text-repeater`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Repeater Online Free',
    description: 'Repeat any text online instantly. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ ───────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I repeat text multiple times online?',
    a: 'Paste your text into the input box, set how many times you want to repeat it using the number input or quick chips (×3, ×5, ×10, etc.), choose your separator (new line, space, comma, or custom), and click Repeat Text. The output appears instantly and can be copied with one click.',
  },
  {
    q: 'What is a text repeater used for?',
    a: 'Text repeaters are used for: generating test data (repeating sample values multiple times), filling forms with placeholder content, creating Lorem-style filler text, testing text input limits, generating bulk content for SEO or copywriting templates, creating repetitive patterns for design mockups, and testing how systems handle large amounts of identical data.',
  },
  {
    q: 'Can I repeat text with a custom separator?',
    a: 'Yes — select "Custom" from the separator options and type any character or string you want between repetitions. Common custom separators include a pipe character (|), a dash (-), a semicolon (;), or even multi-character strings like " | " or " -- ".',
  },
  {
    q: 'Is there a limit to how many times I can repeat text?',
    a: 'Our tool allows up to 1,000 repetitions. For very large outputs (e.g. repeating a long paragraph 1,000 times), the resulting text may be several megabytes in size. The tool processes entirely in your browser — your device\'s memory is the only limit.',
  },
  {
    q: 'Can I repeat multiple lines of text?',
    a: 'Yes — paste any multi-line text into the input. The entire block (including its line breaks) is repeated as a unit the specified number of times. This is useful for repeating structured data blocks, code snippets, or multi-line templates.',
  },
  {
    q: 'Is the text repeater free to use?',
    a: 'Completely free — no account, no subscription, no file upload. Everything runs in your browser using JavaScript. Your text never leaves your device.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Text Repeater Online',
      description: 'Free browser-based tool to repeat any text, word, or sentence multiple times. Choose separator and count. Instant results.',
      url: `${SITE_CONFIG.url}/text-repeater`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Repeat text up to 1000 times',
        'New line, space, comma, or custom separator',
        'Copy output to clipboard',
        'Character, word, and line count',
        'Quick repeat chips (×3, ×5, ×10, ×25, ×50, ×100)',
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
        { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools',  item: `${SITE_CONFIG.url}/tools/text` },
        { '@type': 'ListItem', position: 3, name: 'Text Repeater', item: `${SITE_CONFIG.url}/text-repeater` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Repeat Text Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Type or paste text',    text: 'Enter the text you want to repeat in the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Set repeat count',      text: 'Enter how many times to repeat, or click a quick chip (×3, ×5, ×10).' },
        { '@type': 'HowToStep', position: 3, name: 'Choose separator',      text: 'Select new line, space, comma, none, or a custom separator.' },
        { '@type': 'HowToStep', position: 4, name: 'Click Repeat Text',     text: 'Click the button and copy the output instantly.' },
      ],
    },
  ],
};

// ── Use cases ─────────────────────────────────────────────────
const useCases = [
  {
    icon: '🧪',
    title: 'Generating Test Data',
    desc: 'Developers and QA testers use text repeaters to generate bulk test data quickly. Repeat a sample record 100 times to test how a database handles bulk inserts, how a UI renders long lists, or how an API responds to large payloads — without writing a single line of code.',
  },
  {
    icon: '📝',
    title: 'Filling Forms & Templates',
    desc: 'Repeat placeholder text to fill form fields, email templates, or document sections during development or design review. Faster than Lorem Ipsum generators when you need specific placeholder content repeated across multiple fields.',
  },
  {
    icon: '🎓',
    title: 'Academic & Writing Practice',
    desc: 'Students use text repeaters to practice writing specific words, phrases, or sentences as part of learning exercises. Language learners repeat vocabulary words to create study sheets. Teachers generate repetitive practice worksheets quickly.',
  },
  {
    icon: '🎨',
    title: 'Design Mockups & Wireframes',
    desc: 'Repeat a product name, menu item, or UI label to fill a design mockup with realistic-looking content. Creates more accurate wireframes than generic Lorem Ipsum when the design depends on text length and pattern.',
  },
  {
    icon: '💻',
    title: 'Testing Input Limits',
    desc: 'Repeat a single character 500 or 1,000 times to test how a form, input field, or database column handles maximum length inputs. Essential for validating character limits, overflow handling, and input sanitization.',
  },
  {
    icon: '📊',
    title: 'Spreadsheet & Data Work',
    desc: 'Repeat a category label, status value, or default entry multiple times to fill a column in a spreadsheet. Copy the output and paste directly into Excel or Google Sheets to populate rows without manual entry.',
  },
];

// ── Separator guide ───────────────────────────────────────────
const separators = [
  { sep: 'New Line (↵)',   use: 'Best for creating a list — each repetition on its own line. Use for CSV rows, line-by-line data, or readable lists.',        example: 'hello\nhello\nhello'         },
  { sep: 'Space (⎵)',      use: 'Best for creating a continuous string of words. Use for repeating a word across a sentence or testing word frequency.',       example: 'hello hello hello'           },
  { sep: 'Comma (,)',      use: 'Best for CSV values or comma-separated lists. Paste directly into a spreadsheet as multiple column values in one row.',       example: 'hello, hello, hello'         },
  { sep: 'None (∅)',       use: 'Best for creating a single concatenated string with no separation. Use for testing maximum length fields or password fields.', example: 'hellohellohello'             },
  { sep: 'Custom',         use: 'Any character or string between repetitions — pipe (|), dash (-), semicolon (;), or any multi-character delimiter you need.', example: 'hello | hello | hello'       },
];

// ── Programmatic variants ─────────────────────────────────────
const variants = [
  { href: '/word-repeater-online',         label: 'Word Repeater Online'           },
  { href: '/repeat-text-100-times',        label: 'Repeat Text 100 Times'          },
  { href: '/repeat-word-online',           label: 'Repeat a Word Online'           },
  { href: '/sentence-repeater-online',     label: 'Sentence Repeater Online'       },
  { href: '/text-duplicator-online',       label: 'Text Duplicator Online'         },
  { href: '/copy-text-multiple-times',     label: 'Copy Text Multiple Times'       },
  { href: '/repeat-character-online',      label: 'Repeat Character Online'        },
  { href: '/repeat-number-online',         label: 'Repeat Number Online'           },
];

// ── Page ──────────────────────────────────────────────────────
export default function TextRepeaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* ── Page header ──────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Text Repeater</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Text Repeater Online – Repeat Any Text Instantly for Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Repeat any word, sentence, or paragraph as many times as you need.
              Choose new line, space, comma, or a custom separator between repetitions.
              Copy the output with one click. Free, browser-based, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔢 Up to 1,000×', '⚙️ 5 Separator Options', '📋 One-Click Copy', '🔒 Private'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TextRepeater />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* ── SEO content ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is a text repeater */}
          <section aria-labelledby="what-is">
            <h2 id="what-is" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What Is a Text Repeater and When Do You Need One?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong className="text-surface-800">text repeater</strong> is a tool that
                takes any piece of text — a word, phrase, sentence, or paragraph — and
                duplicates it a specified number of times with a separator of your choice.
                What sounds simple is surprisingly useful in dozens of real workflows for
                developers, writers, designers, and students.
              </p>
              <p>
                The most common use is generating test data. Instead of manually typing the
                same value 50 or 100 times, paste it once and repeat instantly. You can also
                use a text repeater to fill design mockups with realistic-looking content,
                test how forms handle long inputs, create study sheets for language learning,
                or generate bulk placeholder content for templates.
              </p>
              <p>
                Unlike a simple copy-paste loop, our repeater lets you control exactly how
                repetitions are separated — new lines for list data, spaces for inline
                repetition, commas for CSV output, or any custom delimiter. After repeating,
                you can pair it with the{' '}
                <Link href="/word-counter-online" className="text-brand-700 hover:underline font-medium">
                  word counter
                </Link>{' '}
                to verify the output length, or the{' '}
                <Link href="/character-counter-online" className="text-brand-700 hover:underline font-medium">
                  character counter
                </Link>{' '}
                to check against a specific limit.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="how-to">
            <h2 id="how-to" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the Text Repeater — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📝', title: 'Type or Paste Text',    desc: 'Enter the text you want to repeat in the input area. Works with single words, full sentences, multi-line paragraphs, or special characters.' },
                { step: '02', icon: '🔢', title: 'Set Repeat Count',      desc: 'Type a number (1–1000) or click a quick chip: ×3, ×5, ×10, ×25, ×50, or ×100. The quick chips let you change counts without typing.' },
                { step: '03', icon: '⚙️', title: 'Choose Separator',      desc: 'Pick how repetitions are separated: new line for a list, space for inline, comma for CSV, none for concatenation, or type a custom separator.' },
                { step: '04', icon: '📋', title: 'Repeat & Copy',         desc: 'Click Repeat Text. Your output appears instantly with a character, word, and line count. Click Copy Output to copy to clipboard.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section aria-labelledby="use-cases">
            <h2 id="use-cases" className="font-display font-bold text-2xl text-surface-900 mb-5">
              6 Real-World Use Cases for a Text Repeater
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-brand-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Separator guide */}
          <section aria-labelledby="separator-guide">
            <h2 id="separator-guide" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Which Separator Should You Use?
            </h2>
            <div className="space-y-3">
              {separators.map(s => (
                <div key={s.sep} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <div className="shrink-0 w-28">
                    <span className="text-xs font-black text-brand-700 bg-brand-50 border border-brand-200 px-2 py-1 rounded-lg whitespace-nowrap">{s.sep}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-surface-600 leading-relaxed mb-2">{s.use}</p>
                    <div className="font-mono text-xs bg-surface-900 text-emerald-300 px-3 py-1.5 rounded-lg inline-block">{s.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why use this vs alternatives */}
          <section aria-labelledby="vs-alternatives">
            <h2 id="vs-alternatives" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Text Repeater vs Alternatives — Why Use a Dedicated Tool?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  method: 'Manual Copy-Paste',
                  verdict: '❌ Slow',
                  desc: 'Copy-pasting text 20 or 50 times takes several minutes, introduces errors, and is impossible at 100+ repetitions. A text repeater does 1,000 repetitions in under a second.',
                },
                {
                  method: 'Find & Replace in Word',
                  verdict: '⚠️ Complex',
                  desc: 'Word\'s find and replace can repeat patterns but requires writing macros for bulk repetition. Overkill for a simple repeating task and requires the application to be open.',
                },
                {
                  method: 'Excel REPT() Function',
                  verdict: '⚠️ Limited',
                  desc: 'Excel\'s REPT() function repeats text within a single cell — not across multiple cells or lines. Requires opening a spreadsheet and writing a formula for what should be a 5-second task.',
                },
                {
                  method: 'Python/JavaScript Code',
                  verdict: '✅ Powerful but Technical',
                  desc: '"hello\n" * 100 in Python works — but requires a terminal, editor, or console. Our tool does the same operation in a browser with no code and adds separator options and copy functionality.',
                },
              ].map(m => (
                <div key={m.method} className="p-5 bg-white border border-surface-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-surface-900 text-sm">{m.method}</div>
                    <span className="text-xs font-bold">{m.verdict}</span>
                  </div>
                  <p className="text-sm text-surface-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced workflows */}
          <section aria-labelledby="advanced">
            <h2 id="advanced" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Advanced Workflows — What You Can Build With a Text Repeater
            </h2>
            <div className="space-y-4">
              {[
                {
                  title:   'Bulk CSV Row Generation',
                  color:   'blue',
                  icon:    '📊',
                  steps:   [
                    'Create one row of sample CSV data: "John Doe,john@example.com,Active"',
                    'Set separator to New Line, repeat 100 times',
                    'Paste the output into a .csv file to create 100 rows of test data instantly',
                    'Import into your database or spreadsheet tool to test bulk data handling',
                  ],
                },
                {
                  title:   'Input Length Testing for Developers',
                  color:   'violet',
                  icon:    '💻',
                  steps:   [
                    'Type a single character (e.g. "a") into the input',
                    'Set repeat count to 255, 500, or 1,000 — common input limits',
                    'Choose "None" as separator to create one long string',
                    'Paste into your form field or API input to test maximum length handling',
                  ],
                },
                {
                  title:   'Language Learning Study Sheets',
                  color:   'emerald',
                  icon:    '🎓',
                  steps:   [
                    'Type a vocabulary word or phrase you want to memorize',
                    'Set separator to New Line, repeat 20–30 times',
                    'Copy and paste into a document or notes app',
                    'Print or practice writing the word repeatedly using the sheet',
                  ],
                },
              ].map(auc => (
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

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
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
              More Text Repeater Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {variants.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">🔁</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              Related Free Text Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/word-counter-online',           icon: '📝', label: 'Word Counter Online',          desc: 'Count words and characters in your repeated text' },
                { href: '/character-counter-online',      icon: '🔢', label: 'Character Counter Online',     desc: 'Check character count against platform limits' },
                { href: '/remove-duplicate-lines-online', icon: '🧹', label: 'Remove Duplicate Lines',       desc: 'Remove repeated lines after generating test data' },
                { href: '/remove-line-breaks',            icon: '✂️', label: 'Remove Line Breaks',           desc: 'Join repeated lines into a single string' },
                { href: '/case-converter-online',         icon: '🔡', label: 'Case Converter Online',        desc: 'Change case of your repeated text output' },
                { href: '/lorem-ipsum-generator',         icon: '📄', label: 'Lorem Ipsum Generator',        desc: 'Generate placeholder text of any length' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/text-repeater" />

        </div>
      </main>
      <Footer />
    </>
  );
}