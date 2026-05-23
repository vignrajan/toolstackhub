import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import WordCounter from '../../components/tools/WordCounter';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Word Counter Online Free – Count Words & Characters in Real Time',
  description: 'Count words, characters, sentences, paragraphs, and reading time instantly. Free word counter for writers, students, and bloggers. No signup needed.',
  keywords: [
    'word counter online',
    'count words online',
    'word count tool',
    'character counter',
    'reading time calculator',
    'essay word counter',
    'word frequency counter',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/word-counter-online` },
  openGraph: {
    title: 'Word Counter Online Free – Count Words & Characters in Real Time',
    description: 'Count words, characters, sentences, paragraphs, and reading time instantly. Free, no signup.',
    url: `${SITE_CONFIG.url}/word-counter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word Counter Online Free – Count Words in Real Time',
    description: 'Free real-time word counter with character count, sentence count, and reading time.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Structured Data ───────────────────────────────────────────
const faqs = [
  {
    q: 'How do I count words online?',
    a: 'Paste or type your text into the tool — word count updates instantly in real time. No button press needed.',
  },
  {
    q: 'Does it count words in real time?',
    a: 'Yes — every stat updates live as you type: words, characters, sentences, paragraphs, lines, and reading time.',
  },
  {
    q: 'How is reading time calculated?',
    a: 'Based on the average adult reading speed of 200 words per minute. A 1000-word article takes approximately 5 minutes to read.',
  },
  {
    q: 'Is the word counter free?',
    a: 'Yes — completely free with no account, no login, and no usage limits. Use it as many times as you need.',
  },
  {
    q: 'Is there a word or character limit?',
    a: 'No limit — paste and analyze text of any length directly in your browser.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Word Counter Online',
      description: 'Free real-time word counter with character count, sentence count, paragraph count, reading time, and word frequency analysis.',
      url: `${SITE_CONFIG.url}/word-counter-online`,
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
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` },
        { '@type': 'ListItem', position: 3, name: 'Word Counter', item: `${SITE_CONFIG.url}/word-counter-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Count Words Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text', text: 'Click inside the text area and paste your content using Ctrl+V or Cmd+V.' },
        { '@type': 'HowToStep', position: 2, name: 'View live stats', text: 'Word count, character count, sentences, and reading time all update instantly.' },
        { '@type': 'HowToStep', position: 3, name: 'Check word frequency', text: 'View the top 8 most-used words to analyze keyword density.' },
        { '@type': 'HowToStep', position: 4, name: 'Clear and repeat', text: 'Click Clear to reset the text area and analyze new content.' },
      ],
    },
  ],
};

// ── Page Component ────────────────────────────────────────────
export default function WordCounterOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Top Ad */}
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
                <li className="text-surface-800 font-medium">Word Counter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Word Counter Online – Real-Time Word, Character & Reading Time Counter
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Instantly count words, characters, sentences, paragraphs, and reading time as you type.
              Free word counter for writers, students, bloggers, and SEO professionals — no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Real-Time Stats', '📊 Word Frequency', '🔒 No Signup', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WordCounter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Word Counter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Free Online Word Counter – Instant Stats for Any Text
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>word counter online</strong> is an essential tool for anyone who works
                with text professionally. Whether you are a student checking your essay meets a
                minimum word count, a blogger verifying your article is long enough for SEO, a
                copywriter keeping ad copy within character limits, or a developer testing text
                input fields — our free word counter gives you every stat you need in real time.
              </p>
              <p>
                Unlike Microsoft Word which requires opening a full office suite, or Google Docs
                which requires signing in, this tool works instantly in any browser. Paste your
                text and see words, characters, sentences, paragraphs, lines, reading time, and
                top word frequency all update simultaneously with zero delay.
              </p>
              <p>
                The <strong>word frequency analyzer</strong> is especially useful for SEO content
                writers who need to monitor keyword density — ensuring target keywords appear
                naturally without over-optimization. The <strong>reading time calculator</strong>
                helps bloggers plan content length and set reader expectations before publishing.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the Word Counter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',  desc: 'Click inside the text area and paste with Ctrl+V (Cmd+V on Mac), or start typing directly.' },
                { step: '02', icon: '📊', title: 'View Live Stats',  desc: 'Word count, character count, sentences, paragraphs, and reading time update instantly as you type.' },
                { step: '03', icon: '🔍', title: 'Check Frequency',  desc: 'View the top 8 most-used words to spot keyword density and overused terms in your writing.' },
                { step: '04', icon: '🗑️', title: 'Clear & Repeat',  desc: 'Click Clear to reset the text area and start analyzing new content from scratch.' },
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
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'Real-Time Counting',      desc: 'Every stat updates instantly as you type — no button press, no delay.' },
                { icon: '📝', title: 'Word Count',              desc: 'Accurate word count based on space-separated tokens in any language.' },
                { icon: '🔢', title: 'Character Count',         desc: 'Shows total characters and characters without spaces separately.' },
                { icon: '📖', title: 'Reading Time',            desc: 'Estimated reading time based on 200 words per minute average adult speed.' },
                { icon: '📊', title: 'Word Frequency',          desc: 'Top 8 most-used words with counts — useful for keyword density analysis.' },
                { icon: '🔒', title: 'Private & Secure',        desc: 'Runs in your browser. Your text is never sent to any server.' },
                { icon: '🌍', title: 'Any Language',            desc: 'Works with any language that uses spaces between words.' },
                { icon: '📱', title: 'Mobile Friendly',         desc: 'Fully responsive — works on all smartphones and tablets.' },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎓', title: 'Academic Essays',       desc: 'Verify your essay meets the required word count for college submissions — 500, 1000, 2000, or 5000 words.' },
                { icon: '✍️', title: 'Blog & SEO Content',   desc: 'Most SEO-optimized blog posts target 1500–2500 words. Track your count and hit the sweet spot for rankings.' },
                { icon: '🐦', title: 'Social Media Posts',   desc: 'Twitter has a 280-character limit. Instagram captions work best under 2200 characters. Stay on target.' },
                { icon: '📧', title: 'Email Copywriting',    desc: 'Subject lines under 60 characters get better open rates. Track character count to optimize every send.' },
                { icon: '🔍', title: 'SEO Keyword Density',  desc: 'Use the word frequency panel to check keyword density. Aim for 1–3% to avoid over-optimization penalties.' },
                { icon: '📖', title: 'Reading Time Display', desc: 'Blog posts displaying read time get more engagement. Calculate it before publishing and add it to your header.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Keyword variation paragraph */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Fastest Way to Check Word Count Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you use it as a <strong>word count checker</strong>, a free
                <strong> character counter online</strong>, or a <strong>sentence counter</strong> —
                this tool gives you all of it in one place. Use it to count words in a paragraph,
                check word count for essay submissions, or analyze word frequency for SEO content.
              </p>
              <p>
                It also works as an <strong>online reading time calculator</strong> — just paste your
                article and see instantly how long it takes to read. Blog posts and articles that
                display read time see up to 40% more engagement than those that do not. Knowing your
                reading time before you publish lets you set the right expectations for your audience.
              </p>
              <p>
                Unlike browser extensions or desktop apps, this <strong>word count tool online</strong>
                requires nothing — no installation, no account, no permissions. Open the page, paste
                your text, and every metric is instantly in front of you.
              </p>
            </div>
          </section>

          {/* Section 6 — FAQ */}
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

          {/* Section 7 — Internal linking cluster */}
          {/* Section 7 — Word Counter variant pages */}
<section aria-labelledby="variants-heading">
  <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
    More Word Counter Tools
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      { href: '/word-counter-for-essays',  label: 'Word Counter for Essays',   desc: 'Check essay word count for college and university submissions' },
      { href: '/reading-time-calculator',  label: 'Reading Time Calculator',   desc: 'Calculate how long your article or blog post takes to read' },
      { href: '/word-counter-twitter',     label: 'Word Counter for Twitter',  desc: 'Count words and characters for Twitter posts and threads' },
      { href: '/paragraph-counter-online', label: 'Paragraph Counter Online',  desc: 'Count paragraphs and lines in any text instantly' },
    ].map(v => (
      <Link key={v.href} href={v.href}
        className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
        <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
        <div className="text-xs text-emerald-600">{v.desc}</div>
      </Link>
    ))}
  </div>
</section>

{/* Section 8 — Internal linking cluster */}
<TextToolsLinks currentHref="/word-counter-online" />

          <RelatedToolsCluster currentSlug="word-counter-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}