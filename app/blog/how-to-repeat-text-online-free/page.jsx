import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

const POST = {
  slug:        'how-to-repeat-text-online-free',
  title:       'How to Repeat Text Online Free (10 Real Uses You Need to Know)',
  metaDesc:    'Learn how to repeat text online instantly using a free tool. 10 real use cases for developers, students, and designers. No code, no signup. Try now.',
  category:    'Text Tools',
  categorySlug:'text-tools',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-24',
  updatedAt:   '2026-03-24',
  readTime:    7,
  coverEmoji:  '🔁',
  coverBg:     'from-brand-500 to-violet-600',
};

export const metadata = {
  title:       `${POST.title} | ToolStackHub Blog`,
  description:  POST.metaDesc,
  alternates: { canonical: `${SITE_CONFIG.url}/blog/${POST.slug}` },
  openGraph: {
    title:       POST.title,
    description: POST.metaDesc,
    url:        `${SITE_CONFIG.url}/blog/${POST.slug}`,
    type:        'article',
    siteName:    SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    publishedTime: POST.publishedAt,
    modifiedTime:  POST.updatedAt,
    authors:       [POST.author],
  },
  twitter: {
    card:        'summary_large_image',
    title:        POST.title,
    description:  POST.metaDesc,
    creator:      SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'How do I repeat text multiple times online?',
    a: 'Use the free ToolStackHub Text Repeater at toolstackhub.in/text-repeater. Paste your text, set how many times to repeat (up to 1,000), choose a separator (new line, space, comma, or custom), and click the button. The repeated output is ready to copy in under a second.',
  },
  {
    q: 'How do I repeat text in Word without copy-pasting?',
    a: 'In Microsoft Word, you can use a macro: press Alt+F11 to open the VBA editor, insert a module, and write: For i = 1 To 10 : Selection.TypeText Text:="your text" & Chr(13) : Next i. But for most users, a free online text repeater is significantly faster and requires no coding or Word knowledge.',
  },
  {
    q: 'How do I repeat text in Excel?',
    a: 'Excel has a built-in REPT() function: =REPT("your text",10) repeats "your text" 10 times within a single cell. To repeat across multiple rows, use a drag-fill or paste the formula down a column. For repeating text into multiple separate cells, an online text repeater is faster — paste the output directly into the spreadsheet.',
  },
  {
    q: 'How do I repeat a word 100 times?',
    a: 'Go to toolstackhub.in/text-repeater, type or paste your word, click the ×100 quick chip, choose your separator (new line for a list, space for inline), and click Repeat Text. Your word repeated 100 times is ready to copy in under a second. No signup, no file upload required.',
  },
  {
    q: 'Can I repeat text with Python?',
    a: 'Yes — Python makes text repetition simple. For repeating with a newline: result = "hello\\n" * 100. For repeating with a separator: result = ", ".join(["hello"] * 100). For a loop with step-up: result = "\\n".join([f"Item {i}" for i in range(1, 101)]). If you need a quick one-off repetition without coding, the online tool is faster.',
  },
  {
    q: 'Is it free to repeat text online?',
    a: 'Yes — the ToolStackHub Text Repeater is completely free. No account, no subscription, no file upload, and no limit on how often you use it. The tool processes text entirely in your browser using JavaScript — your text never leaves your device.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: POST.title,
      description: POST.metaDesc,
      url: `${SITE_CONFIG.url}/blog/${POST.slug}`,
      datePublished: POST.publishedAt,
      dateModified:  POST.updatedAt,
      author: { '@type': 'Organization', name: POST.author, url: SITE_CONFIG.url },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url:  SITE_CONFIG.url,
        logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${POST.slug}` },
      articleSection: POST.category,
      keywords: 'how to repeat text online, text repeater, repeat text free, repeat word online, word repeater tool',
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: POST.title, item: `${SITE_CONFIG.url}/blog/${POST.slug}` },
      ],
    },
  ],
};

export default function PostTextRepeater() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">{POST.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full">
                {POST.category}
              </span>
              <span className="text-sm text-surface-400">{POST.readTime} min read</span>
              <span className="text-surface-300">·</span>
              <time dateTime={POST.publishedAt} className="text-sm text-surface-400">
                {new Date(POST.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-4">
              {POST.title}
            </h1>

            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              Repeating text manually — copy, paste, copy, paste, 50 times — is one of those
              tasks that seems trivial until you're on repetition 30 and wondering if there's
              a better way. There is. This guide covers every method to repeat text online,
              in Word, in Excel, and in code — and shows 10 real workflows where a text
              repeater saves significant time.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-base">🛠️</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                <div className="text-xs text-surface-400">
                  {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────────── */}
        <div className={`h-44 sm:h-52 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-7xl mb-2">{POST.coverEmoji}</div>
            <div className="text-white/70 text-sm font-medium">Repeat · Duplicate · Multiply</div>
          </div>
        </div>

        {/* ── Article body ───────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10">

            {/* ── Intro ─────────────────────────────────── */}
            <section>
              <p className="text-surface-700 text-lg leading-relaxed">
                Manually repeating text more than a few times is one of those tasks that feels
                like it should have a better solution — and it does. Whether you need to repeat
                a word 10 times for a study sheet, duplicate a data row 100 times for testing,
                or generate a repeated pattern for a design mockup, the right tool makes it
                a one-second job instead of a five-minute one.
              </p>
              <p className="text-surface-600 leading-relaxed mt-4">
                In this guide, we cover the fastest free method to{' '}
                <strong className="text-surface-800">repeat text online</strong>, plus how to
                do it in Word, Excel, and Python. We also cover 10 real use cases — including
                several you may not have thought of — where a text repeater becomes an
                indispensable productivity tool.
              </p>
            </section>

            {/* ── Free tool CTA ─────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-brand-200"
              style={{ background: 'linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)' }}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">🔁</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1">Free Tool</div>
                    <h3 className="font-display font-bold text-xl text-brand-900 mb-2">
                      Repeat Any Text Online — Free, Instant, No Signup
                    </h3>
                    <p className="text-brand-800 text-sm leading-relaxed mb-4">
                      Type or paste text, set the repeat count (up to 1,000×), choose
                      a separator (new line, space, comma, or custom), and copy the
                      output. Works for words, sentences, paragraphs, and special
                      characters. Everything runs in your browser.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link href="/text-repeater"
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        Use Text Repeater Free →
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-brand-700">
                        <span>✓ Up to 1,000×</span>
                        <span>✓ 5 separator options</span>
                        <span>✓ Private</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── How to repeat online ──────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                How to Repeat Text Online — The Fastest Method
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                The fastest way to repeat text online with no setup:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Open the Free Text Repeater',
                    body: <p className="text-surface-600 text-sm leading-relaxed">
                      Go to{' '}
                      <Link href="/text-repeater" className="text-brand-700 hover:underline font-medium">
                        toolstackhub.in/text-repeater
                      </Link>{' '}
                      in any browser on any device. No account, no extension, no installation required.
                    </p>,
                  },
                  {
                    step: 2,
                    title: 'Paste Your Text',
                    body: <p className="text-surface-600 text-sm leading-relaxed">
                      Type or paste the text you want to repeat. Works with single words,
                      full sentences, multi-line paragraphs, numbers, emoji, or any
                      combination of characters.
                    </p>,
                  },
                  {
                    step: 3,
                    title: 'Set Repeat Count and Separator',
                    body: (
                      <div className="space-y-2 text-sm text-surface-600">
                        <p>Click a quick chip (×3, ×5, ×10, ×25, ×50, ×100) or type a custom count up to 1,000.</p>
                        <p>Choose your separator:</p>
                        <ul className="ml-4 space-y-1 text-surface-600">
                          <li><strong className="text-surface-800">New Line</strong> — each repetition on its own line (best for lists and data)</li>
                          <li><strong className="text-surface-800">Space</strong> — repetitions separated by a space (best for inline use)</li>
                          <li><strong className="text-surface-800">Comma</strong> — comma-separated output (best for CSV and spreadsheets)</li>
                          <li><strong className="text-surface-800">None</strong> — no separator (best for testing maximum length inputs)</li>
                          <li><strong className="text-surface-800">Custom</strong> — any character or string you define</li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    step: 4,
                    title: 'Click Repeat Text and Copy',
                    body: <p className="text-surface-600 text-sm leading-relaxed">
                      Click the button. Your repeated text appears instantly with a line count,
                      character count, and word count. Click Copy Output to copy to clipboard.
                    </p>,
                  },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-surface-900 mb-2">{item.title}</h3>
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 10 use cases ──────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                10 Real Use Cases for Repeating Text Online
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                Most people discover text repeaters for one specific task — and then realize
                there are nine other workflows where it saves time.
              </p>

              <div className="space-y-4">
                {[
                  {
                    n: '01',
                    icon: '🧪',
                    title: 'Generating Test Data for Developers',
                    color: 'violet',
                    body: 'QA engineers and backend developers constantly need bulk test data — 50 sample records, 100 email addresses, 200 product names. Instead of writing a script or manually typing, paste one sample record and repeat 100 times. The output is ready to paste into a database seed file, a CSV import, or a Postman request body in seconds.',
                    tip: 'Use "New Line" separator to get one record per line — paste directly into a .csv file.',
                  },
                  {
                    n: '02',
                    icon: '💻',
                    title: 'Testing Maximum Input Length',
                    color: 'blue',
                    body: 'Every text input, database field, and API parameter has a maximum length. Testing those limits manually — typing 255 characters into a form — wastes minutes. Use the text repeater to generate exactly 255, 500, or 1,000 characters by repeating a single letter with "None" separator. Paste into your form or API to test overflow handling, truncation, and error states.',
                    tip: 'Type "a" → set separator to None → repeat 255 times → paste into your field to test the limit.',
                  },
                  {
                    n: '03',
                    icon: '🎨',
                    title: 'Filling Design Mockups with Realistic Content',
                    color: 'pink',
                    body: 'Lorem Ipsum is fine for body text, but it breaks down for UI elements where content length and pattern matter — navigation items, table rows, dropdown options, notification badges. Repeat a realistic label ("John Smith", "Product Name", "Active") to fill your mockup with content that mimics production data better than Lorem Ipsum.',
                    tip: 'Use "New Line" separator and paste into Figma\'s bulk text replacement for instant realistic fill.',
                  },
                  {
                    n: '04',
                    icon: '🎓',
                    title: 'Language Learning Study Sheets',
                    color: 'emerald',
                    body: 'Research on vocabulary acquisition consistently shows that handwriting a word multiple times improves retention more than passive reading. Students use text repeaters to generate 20–30 repetitions of a new word or phrase on a single document — ready to print and practice. Language teachers use it to create repetition worksheets for their classes without manual typing.',
                    tip: 'Repeat the word 25 times on new lines, paste into Google Docs, print for handwriting practice.',
                  },
                  {
                    n: '05',
                    icon: '📊',
                    title: 'Populating Spreadsheet Columns',
                    color: 'amber',
                    body: 'When you need a column in Excel or Google Sheets filled with the same value — a status ("Active"), a category ("Electronics"), a default value ("N/A") — repeating it manually across hundreds of rows is tedious. Generate the value repeated however many rows you need using "New Line" separator, copy, and paste directly into the first cell of the column. The spreadsheet fills all rows instantly.',
                    tip: 'Paste output starting from cell A1 — each line fills the next row automatically.',
                  },
                  {
                    n: '06',
                    icon: '🔍',
                    title: 'Creating Keyword Lists for SEO',
                    color: 'teal',
                    body: 'SEO content writers use text repeaters to generate keyword variation lists — repeating a base keyword and manually modifying each repetition. For example, repeating "best [X]" 10 times and then editing each instance to create: "best laptop", "best smartphone", "best headphones", etc. Faster than typing each from scratch when many share a common structure.',
                    tip: 'Repeat your base keyword phrase on new lines, then bulk-edit in VS Code or Google Docs.',
                  },
                  {
                    n: '07',
                    icon: '📧',
                    title: 'Email Template Variable Testing',
                    color: 'blue',
                    body: 'Email marketing platforms let you preview templates with variable substitution — but testing edge cases requires specific inputs. Generate a very long name (repeat "Alexander" with spaces to make a 50-character name) or a very long company name to test how your email template handles overflow — whether it truncates, wraps, or breaks the layout.',
                    tip: 'Repeat a first name 3–4 times with spaces to simulate an unusually long name for template testing.',
                  },
                  {
                    n: '08',
                    icon: '🏗️',
                    title: 'Generating Code Boilerplate',
                    color: 'violet',
                    body: 'Developers writing repetitive code patterns — 10 similar HTML list items, 20 similar CSS class rules, 50 similar SQL INSERT statements — use text repeaters to generate the base structure, then make targeted edits. Far faster than writing each line from scratch and quicker to adjust than writing a generator script for a one-time task.',
                    tip: 'Write one template line with a placeholder → repeat → do multi-cursor edit in VS Code to differentiate each.',
                  },
                  {
                    n: '09',
                    icon: '📱',
                    title: 'Social Media Content Scheduling',
                    color: 'pink',
                    body: 'Social media managers scheduling posts sometimes need the same call-to-action, hashtag block, or disclosure text repeated across multiple post drafts. Repeat the standard footer text the number of posts you are scheduling, then paste each repetition into the scheduling tool. Saves copy-pasting the same block dozens of times across multiple tools.',
                    tip: 'Repeat your hashtag block on new lines, copy, and paste each into your scheduling tool\'s draft fields.',
                  },
                  {
                    n: '10',
                    icon: '🎯',
                    title: 'Affirmation and Journaling Practice',
                    color: 'emerald',
                    body: 'Personal development practices often involve writing affirmations repeatedly — a technique based on neurological research showing that repetitive writing reinforces belief patterns more than passive reading. Generate your affirmation repeated 15–20 times on new lines, print, and write it out by hand. Or repeat it digitally to create a focus document for your journaling practice.',
                    tip: 'Keep sentences short (under 10 words) for affirmations — they\'re easier to write repeatedly without fatigue.',
                  },
                ].map(uc => (
                  <div key={uc.n} className={`p-5 bg-${uc.color}-50 border border-${uc.color}-200 rounded-2xl`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-black text-${uc.color}-700 bg-${uc.color}-200 w-8 h-8 rounded-full flex items-center justify-center shrink-0`}>{uc.n}</span>
                      <span className="text-xl">{uc.icon}</span>
                      <h3 className={`font-display font-bold text-${uc.color}-900`}>{uc.title}</h3>
                    </div>
                    <p className={`text-sm text-${uc.color}-800 leading-relaxed mb-3`}>{uc.body}</p>
                    <div className={`flex items-start gap-2 text-xs text-${uc.color}-700 bg-${uc.color}-100 px-3 py-2 rounded-lg`}>
                      <span className="shrink-0">💡</span>
                      <span><strong>Tip:</strong> {uc.tip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Alternative methods ───────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Other Ways to Repeat Text (And Why the Online Tool Is Fastest)
              </h2>

              <div className="space-y-4">

                {/* Word */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">📝</span>
                    <h3 className="font-semibold text-surface-900">How to Repeat Text in Microsoft Word</h3>
                    <span className="ml-auto text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium">Requires macro</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <p className="text-sm text-surface-600 leading-relaxed">For a small number of repetitions, use Find & Replace with the text repeated in the Replace field. For bulk repetition (10+), use a Word macro:</p>
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-6">
                      <div className="text-surface-400 mb-1">' Word VBA macro — repeat text 20 times</div>
                      <div>Sub RepeatText()</div>
                      <div className="ml-4">Dim i As Integer</div>
                      <div className="ml-4">For i = 1 To 20</div>
                      <div className="ml-8">Selection.TypeText Text:="your text" & Chr(13)</div>
                      <div className="ml-4">Next i</div>
                      <div>End Sub</div>
                    </div>
                    <p className="text-sm text-surface-600"><strong className="text-surface-800">Limitation:</strong> Requires opening the VBA editor, writing code, and running the macro. Takes 3–5 minutes of setup for what the online tool does in 5 seconds.</p>
                  </div>
                </div>

                {/* Excel */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">📊</span>
                    <h3 className="font-semibold text-surface-900">How to Repeat Text in Excel</h3>
                    <span className="ml-auto text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">REPT() function</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-6">
                      <div className="text-surface-400 mb-1">// Repeat within a single cell</div>
                      <div>=REPT("hello ", 10)</div>
                      <div className="text-surface-400 mt-3 mb-1">// Repeat across multiple rows (drag formula down)</div>
                      <div>{'=IF(ROW()<=20, "hello", "")'}</div>
                      <div className="text-surface-400 mt-3 mb-1">// Repeat with row number suffix</div>
                      <div>{'={"hello "&ROW()}'}</div>
                    </div>
                    <p className="text-sm text-surface-600"><strong className="text-surface-800">Limitation:</strong> REPT() repeats within a single cell only. Repeating across separate cells requires a column formula and drag-fill. The online tool generates newline-separated output that pastes directly into multiple cells at once.</p>
                  </div>
                </div>

                {/* Python */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">🐍</span>
                    <h3 className="font-semibold text-surface-900">How to Repeat Text in Python</h3>
                    <span className="ml-auto text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">For developers</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-6">
                      <div className="text-surface-400 mb-1"># Simple repetition with newline</div>
                      <div>result = "hello\n" * 20</div>
                      <div className="mt-2 text-surface-400"># Repetition with custom separator</div>
                      <div>result = ", ".join(["hello"] * 20)</div>
                      <div className="mt-2 text-surface-400"># Repetition with join and strip</div>
                      <div>result = "\n".join(["hello"] * 20)</div>
                      <div className="mt-2 text-surface-400"># Numbered repetitions</div>
                      <div>result = "\n".join([f"Item {"{i}"}" for i in range(1, 21)])</div>
                    </div>
                    <p className="text-sm text-surface-600"><strong className="text-surface-800">When to use this:</strong> When repetition is part of a larger automated workflow, when you need dynamic content (numbered items, variable substitution), or when you need to write output directly to a file. For a quick one-off task, the browser tool is faster.</p>
                  </div>
                </div>

                {/* JavaScript */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">🟨</span>
                    <h3 className="font-semibold text-surface-900">How to Repeat Text in JavaScript</h3>
                    <span className="ml-auto text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">String.repeat()</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-6">
                      <div className="text-surface-400 mb-1">// String.repeat() method</div>
                      <div>{`const result = "hello ".repeat(20);`}</div>
                      <div className="mt-2 text-surface-400">// Array fill + join for separator control</div>
                      <div>{`const result = Array(20).fill("hello").join("\\n");`}</div>
                      <div className="mt-2 text-surface-400">// With custom separator</div>
                      <div>{`const result = Array(20).fill("hello").join(", ");`}</div>
                    </div>
                    <p className="text-sm text-surface-600">JavaScript's native <code className="bg-surface-100 text-surface-700 px-1 rounded font-mono">String.repeat()</code> method is the cleanest programmatic solution. The browser console provides instant access — open DevTools, paste the line, and copy the result. For non-developers, the online tool requires no code at all.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Comparison table ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                All Methods Compared
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Method</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Speed</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Separator Control</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">No Code</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Max Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: '🔁 ToolStackHub Tool', speed: '< 1 second', sep: '✅ 5 options', nocode: '✅ Yes',  max: '1,000×' },
                      { method: '📝 Manual Copy-Paste', speed: 'Minutes',    sep: '⚠️ Manual',   nocode: '✅ Yes',  max: '~20×'   },
                      { method: '📝 Word Macro',         speed: '3–5 min setup', sep: '⚠️ Limited', nocode: '❌ VBA', max: 'Unlimited' },
                      { method: '📊 Excel REPT()',       speed: 'Fast',      sep: '❌ None',     nocode: '✅ Yes',  max: 'Unlimited' },
                      { method: '🐍 Python',             speed: 'Fast',      sep: '✅ Full',     nocode: '❌ Code', max: 'Unlimited' },
                      { method: '🟨 JavaScript',         speed: 'Fast',      sep: '✅ Full',     nocode: '❌ Code', max: 'Unlimited' },
                    ].map((row, i) => (
                      <tr key={row.method} className={i === 0 ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className={`px-4 py-3 font-medium ${i === 0 ? 'text-brand-700' : 'text-surface-800'}`}>{row.method}</td>
                        <td className="px-4 py-3 text-center text-surface-600 text-xs">{row.speed}</td>
                        <td className="px-4 py-3 text-center text-xs">{row.sep}</td>
                        <td className="px-4 py-3 text-center text-xs">{row.nocode}</td>
                        <td className="px-4 py-3 text-center text-xs font-mono">{row.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
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

            {/* ── Related tools ─────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Related Free Text Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/text-repeater',                icon: '🔁', label: 'Text Repeater Tool',           desc: 'The free tool covered in this guide' },
                  { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',           desc: 'Count words and lines in repeated output' },
                  { href: '/character-counter-online',     icon: '🔢', label: 'Character Counter Online',      desc: 'Check character count against limits' },
                  { href: '/remove-duplicate-lines-online',icon: '🧹', label: 'Remove Duplicate Lines',        desc: 'Remove repeated lines from your output' },
                  { href: '/lorem-ipsum-generator',        icon: '📄', label: 'Lorem Ipsum Generator',         desc: 'Generate placeholder text of any length' },
                  { href: '/case-converter-online',        icon: '🔡', label: 'Case Converter Online',         desc: 'Change case of your repeated text' },
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

            {/* ── Related posts ─────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Guides</h2>
              <div className="space-y-3">
                {[
                  { href: '/blog/how-to-remove-duplicate-lines-from-text', emoji: '🧹', bg: 'from-emerald-500 to-teal-600',  label: 'How to Remove Duplicate Lines from Text', desc: '5 methods — tool, Excel, Notepad++, Python' },
                  { href: '/blog/how-to-compress-images-without-losing-quality', emoji: '🗜️', bg: 'from-orange-500 to-rose-500', label: 'How to Compress Images Without Losing Quality', desc: 'Format guide, Core Web Vitals, before/after' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${l.bg} flex items-center justify-center text-xl shrink-0`}>
                      {l.emoji}
                    </div>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-brand-200"
              style={{ background: 'linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-4xl mb-3">🔁</div>
                <h3 className="font-display font-bold text-xl text-brand-900 mb-2">
                  Ready to Repeat Your Text?
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  Use the free ToolStackHub Text Repeater — paste your text, choose your
                  count and separator, and copy the output in under 5 seconds.
                  No signup, no ads during use, everything stays on your device.
                </p>
                <Link href="/text-repeater"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
                  Repeat Text Now — Free →
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-brand-600">
                  <span>✓ Up to 1,000×</span>
                  <span>✓ 5 separator options</span>
                  <span>✓ No signup</span>
                  <span>✓ Private</span>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}