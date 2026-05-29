import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../../components/AdBanner';
import ToolCard from '../../../components/ToolCard';
import CaseConverter from '../../../components/tools/CaseConverter';
import { SITE_CONFIG, tools } from '../../../data/tools';

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata = {
  title: 'Case Converter – Uppercase, Lowercase, Title Case & More',
  description: 'Free Case Converter tool to convert text to uppercase, lowercase, sentence case, title case, camelCase, snake_case and more. Change text case online.',
  keywords: [
    'case converter',
    'uppercase converter',
    'lowercase converter',
    'sentence case converter',
    'title case converter',
    'change text case',
    'text case changer',
    'convert text case online',
    'camelcase converter',
    'snake case converter',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/case-converter`,
  },
  openGraph: {
    title: 'Case Converter – Free Online Text Case Changer',
    description: 'Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case and more. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/tools/case-converter`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter – Free Online Text Case Changer',
    description: 'Convert text to any case format instantly. Uppercase, lowercase, title case, camelCase, snake_case and more.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Related tools ─────────────────────────────────────────────
const relatedTools = tools.filter(t =>
  ['word-counter', 'character-counter', 'lorem-ipsum-generator', 'markdown-preview'].includes(t.slug)
);

// ── FAQ + Structured Data ─────────────────────────────────────
const faqs = [
  {
    q: 'What is a case converter?',
    a: 'A case converter is an online tool that instantly changes the capitalization of your text. It can transform any text into uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and more — with a single click.',
  },
  {
    q: 'How do I convert text to uppercase?',
    a: 'Paste or type your text into the input area, then click the "UPPERCASE" button. All letters in your text will instantly be converted to capital letters.',
  },
  {
    q: 'Can I convert text to sentence case?',
    a: 'Yes. Click the "Sentence case" button to capitalize the first letter of each sentence while keeping everything else lowercase. This is perfect for correcting ALL CAPS text back to normal.',
  },
  {
    q: 'Is this case converter free?',
    a: 'Completely free with no sign-up, no account, and no usage limits. Use it as many times as you need.',
  },
  {
    q: 'Does the tool store my text?',
    a: 'No. All conversion happens locally in your browser. Your text is never sent to any server and is never stored or logged anywhere.',
  },
  {
    q: 'What is the difference between Title Case and Sentence case?',
    a: 'Title Case capitalizes the first letter of every word (used for headings and titles). Sentence case only capitalizes the first letter of each sentence (used for normal writing).',
  },
  {
    q: 'Can I use this to convert variable names for coding?',
    a: 'Yes — the tool supports camelCase, PascalCase, snake_case, and kebab-case, which are the most common naming conventions in programming languages like JavaScript, Python, and CSS.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Case Converter',
      description: 'Free online tool to convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.',
      url: `${SITE_CONFIG.url}/tools/case-converter`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` },
        { '@type': 'ListItem', position: 3, name: 'Case Converter', item: `${SITE_CONFIG.url}/tools/case-converter` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Use the Case Converter',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter your text', text: 'Type or paste your text into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose a case format', text: 'Click any case button such as UPPERCASE, lowercase, Title Case, or camelCase.' },
        { '@type': 'HowToStep', position: 3, name: 'Copy the result', text: 'Click the Copy button to copy the converted text to your clipboard.' },
      ],
    },
  ],
};

// ── Case formats reference data ───────────────────────────────
const caseFormats = [
  {
    name:    'UPPERCASE',
    example: 'HELLO WORLD',
    desc:    'Converts all letters to capitals. Used for acronyms, headings, emphasis, and ALL CAPS styling.',
    uses:    ['Acronyms & abbreviations', 'Warning messages', 'Headlines for emphasis'],
  },
  {
    name:    'lowercase',
    example: 'hello world',
    desc:    'Converts all letters to small letters. Useful for email addresses, URLs, and removing accidental caps.',
    uses:    ['Email addresses', 'URL slugs', 'Cleaning up accidental caps'],
  },
  {
    name:    'Sentence case',
    example: 'Hello world. This is a sentence.',
    desc:    'Capitalizes only the first letter of each sentence. The most natural case for general writing.',
    uses:    ['Body copy & paragraphs', 'Correcting ALL CAPS text', 'General writing'],
  },
  {
    name:    'Title Case',
    example: 'Hello World From Title Case',
    desc:    'Capitalizes the first letter of every word. Standard for article titles, book names, and headings.',
    uses:    ['Blog post titles', 'Book and movie titles', 'Page headings'],
  },
  {
    name:    'camelCase',
    example: 'helloWorldFromCamelCase',
    desc:    'First word lowercase, each subsequent word capitalized, no spaces. Common in JavaScript and Java.',
    uses:    ['JavaScript variables', 'JSON keys', 'API parameters'],
  },
  {
    name:    'PascalCase',
    example: 'HelloWorldFromPascalCase',
    desc:    'Every word capitalized, no spaces. Used for class names and component names in programming.',
    uses:    ['React component names', 'Class names', 'TypeScript interfaces'],
  },
  {
    name:    'snake_case',
    example: 'hello_world_from_snake_case',
    desc:    'All lowercase with underscores between words. The standard naming convention in Python and databases.',
    uses:    ['Python variables', 'Database column names', 'File names'],
  },
  {
    name:    'kebab-case',
    example: 'hello-world-from-kebab-case',
    desc:    'All lowercase with hyphens between words. Standard for CSS class names and URL slugs.',
    uses:    ['CSS class names', 'HTML attributes', 'URL slugs'],
  },
];

// ── Page Component ────────────────────────────────────────────
export default function CaseConverterPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1">

        {/* Top Ad */}
        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* ── PAGE HEADER ─────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500"
               >
                <li>
                  <Link href="/" className="hover:text-brand-600 transition-colors">
                    <span>Home</span>
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li>
                  <Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">
                    <span>Text Tools</span>
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">
                  <span>Case Converter</span>
                </li>
              </ol>
            </nav>

            {/* H1 */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Case Converter
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case,
              camelCase, snake_case, kebab-case, and more. Free, no sign-up, works in your browser.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔒 No Signup',
                '⚡ Instant Results',
                '📱 Mobile Friendly',
                '10 Case Formats',
              ].map(b => (
                <span key={b}
                  className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL INTERFACE ───────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CaseConverter />
        </div>

        {/* Affiliate + Ad */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Case Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* ── SEO CONTENT ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — What is it */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading"
              className="font-display font-bold text-2xl text-surface-900 mb-4">
              Convert Text Case Online — Free & Instant
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>case converter</strong> is an online tool that changes the capitalization
                of any text with a single click. Whether you need to fix a block of text
                accidentally typed in ALL CAPS, prepare a title for a blog post, or format
                a variable name for your code — a case converter does it instantly without
                any manual editing.
              </p>
              <p>
                Our free case converter supports <strong>10 different case formats</strong>,
                from everyday writing styles like Sentence case and Title Case, to programming
                conventions like camelCase, PascalCase, snake_case, and kebab-case. Just paste
                your text, click a button, and copy the result.
              </p>
              <p>
                Everything runs directly in your browser — your text is never sent to a server,
                never stored, and never logged. Fast, private, and completely free.
              </p>
            </div>
          </section>

          {/* Section 2 — How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading"
              className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the Case Converter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  step: '01',
                  title: 'Paste Your Text',
                  desc: 'Type or paste any text into the input area. Supports all languages and special characters.',
                  icon: '📋',
                },
                {
                  step: '02',
                  title: 'Choose a Case Format',
                  desc: 'Click any of the 10 case buttons — UPPERCASE, lowercase, Title Case, camelCase, and more.',
                  icon: '🔡',
                },
                {
                  step: '03',
                  title: 'Copy the Result',
                  desc: 'The converted text appears instantly. Click the Copy button to copy it to your clipboard.',
                  icon: '✅',
                },
              ].map(item => (
                <div key={item.step}
                  className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Case formats */}
          <section aria-labelledby="formats-heading">
            <h2 id="formats-heading"
              className="font-display font-bold text-2xl text-surface-900 mb-6">
              Available Case Formats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseFormats.map(fmt => (
                <div key={fmt.name}
                  className="p-5 bg-white border border-surface-200 rounded-2xl hover:border-brand-200 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-surface-900">{fmt.name}</h3>
                    <code className="text-xs bg-surface-900 text-emerald-300 px-2.5 py-1 rounded-lg font-mono shrink-0">
                      {fmt.example}
                    </code>
                  </div>
                  <p className="text-sm text-surface-500 leading-relaxed mb-3">{fmt.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {fmt.uses.map(u => (
                      <span key={u}
                        className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Why use */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading"
              className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Use a Case Converter?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: '✍️',
                  title: 'Writers & Bloggers',
                  desc: 'Quickly format blog post titles, article headings, and subheadings into consistent Title Case without manually editing every word.',
                },
                {
                  icon: '💻',
                  title: 'Developers',
                  desc: 'Convert variable names, function names, and identifiers between camelCase, snake_case, PascalCase, and kebab-case in one click.',
                },
                {
                  icon: '🎓',
                  title: 'Students & Academics',
                  desc: 'Fix essays accidentally typed in caps lock, or quickly format assignment titles and headings to match style guide requirements.',
                },
                {
                  icon: '📣',
                  title: 'Social Media Managers',
                  desc: 'Prepare consistent, on-brand captions and posts. Convert ALL CAPS drafts into proper sentence case for a professional appearance.',
                },
                {
                  icon: '🛒',
                  title: 'eCommerce & Marketing',
                  desc: 'Format product titles, ad copy, and email subject lines correctly to meet platform requirements and improve click-through rates.',
                },
                {
                  icon: '🗄️',
                  title: 'Data & Database Work',
                  desc: 'Standardize database column names, CSV headers, and data entries into snake_case or lowercase for consistent data management.',
                },
              ].map(uc => (
                <div key={uc.title}
                  className="flex gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading"
              className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3"
             >
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   
                  >
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div
                    className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   
                  >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 6 — More Free Tools */}
          <section aria-labelledby="more-tools-heading">
            <h2 id="more-tools-heading"
              className="font-display font-bold text-xl text-surface-900 mb-2">
              More Free Tools
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              You might also find these text tools useful:
            </p>

            {/* Featured internal links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  href:  '/tools/word-counter',
                  icon:  '📝',
                  name:  'Word Counter',
                  desc:  'Count words, characters, sentences, and reading time',
                  color: 'emerald',
                },
                {
                  href:  '/character-counter-online',
                  icon:  '🔢',
                  name:  'Character Counter',
                  desc:  'Count characters with Twitter, SMS & meta tag limits',
                  color: 'blue',
                },
                {
                  href:  '/text-to-handwriting-online',
                  icon:  '✍️',
                  name:  'Text to Handwriting Generator',
                  desc:  'Convert typed text to realistic handwritten notes',
                  color: 'violet',
                },
                {
                  href:  '/lorem-ipsum-generator',
                  icon:  '📄',
                  name:  'Lorem Ipsum Generator',
                  desc:  'Generate placeholder text for designs and mockups',
                  color: 'amber',
                },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 p-4 bg-${link.color}-50 border border-${link.color}-200 rounded-xl hover:bg-${link.color}-100 transition-colors group`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <div className={`font-semibold text-${link.color}-800 group-hover:underline text-sm`}>
                      {link.name}
                    </div>
                    <div className={`text-xs text-${link.color}-600 mt-0.5`}>{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tool cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}