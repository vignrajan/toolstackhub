import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../../components/AdBanner';
import ToolCard from '../../../components/ToolCard';
import WordCounter from '../../../components/tools/WordCounter';
import { SITE_CONFIG, tools } from '../../../data/tools';

export const metadata = {
  title: 'Word Counter Online Free – Count Words & Characters in Real Time',
  description: 'Count words, characters, sentences, paragraphs, and reading time instantly. Free online word counter for writers, students, and bloggers. No signup needed.',
  keywords: ['word counter', 'count words online', 'word count tool', 'character counter', 'reading time calculator', 'essay word counter', 'word frequency counter'],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_CONFIG.url}/tools/word-counter` },
  openGraph: {
    title: 'Word Counter Online Free – Count Words Instantly',
    description: 'Real-time word count, character count, sentence count, and reading time. Free, no signup.',
    url: `${SITE_CONFIG.url}/tools/word-counter`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const relatedTools = tools.filter(t => ['character-counter','case-converter','lorem-ipsum-generator','markdown-preview'].includes(t.slug));

const faqs = [
  { q: 'How do I count words online?', a: 'Paste or type your text into the tool — word count updates instantly in real time, no button press needed.' },
  { q: 'Does it count words in real time?', a: 'Yes — every stat (words, characters, sentences, paragraphs, reading time) updates live as you type.' },
  { q: 'How is reading time calculated?', a: 'Based on the average adult reading speed of 200 words per minute. A 1000-word article takes about 5 minutes to read.' },
  { q: 'Is the word counter free?', a: 'Yes — completely free with no account, no login, and no usage limits.' },
  { q: 'Is there a word or character limit?', a: 'No limit — analyze texts of any length directly in your browser.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Word Counter Online', description: 'Free real-time word counter with character count, sentence count, paragraph count, and reading time.', url: `${SITE_CONFIG.url}/tools/word-counter`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Word Counter', item: `${SITE_CONFIG.url}/tools/word-counter` }] },
  ],
};

export default function WordCounterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li><li>/</li>
                <li><Link href="/#text" className="hover:text-brand-600 text-emerald-600">Text Tools</Link></li><li>/</li>
                <li className="text-surface-800 font-medium">Word Counter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">Word Counter Online – Count Words, Characters & Reading Time</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Instantly count words, characters, sentences, paragraphs, and reading time as you type. Free word counter for writers, students, bloggers, and SEO professionals — no signup required.</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free','⚡ Real-Time Stats','📊 Word Frequency','🔒 No Signup','📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><WordCounter /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Word Counter" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section aria-labelledby="about-h2">
            <h2 id="about-h2" className="font-display font-bold text-2xl text-surface-900 mb-4">Free Online Word Counter – Why Developers and Writers Use It</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A <strong>word counter online</strong> is an essential tool for anyone who works with text professionally. Whether you are a student checking your essay meets a minimum word count requirement, a blogger verifying your article is long enough for SEO, a copywriter keeping ad copy within character limits, or a developer testing text input fields — our free word counter gives you every stat you need in real time.</p>
              <p>Unlike Microsoft Word's word count (which requires opening a full office suite), or Google Docs (which requires signing in), our tool works instantly in any browser. Paste your text and see words, characters, sentences, paragraphs, lines, reading time, and top word frequency all update simultaneously — with zero delay.</p>
              <p>The <strong>word frequency analyzer</strong> is especially useful for SEO content writers who need to monitor keyword density, ensuring their target keywords appear a natural number of times without over-optimization. The reading time calculator helps bloggers plan content length and set reader expectations with accurate read-time estimates.</p>
            </div>
          </section>

          <section aria-labelledby="howto-h2">
            <h2 id="howto-h2" className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use the Word Counter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step:'01', icon:'📋', title:'Paste Your Text', desc:'Click inside the text area and paste with Ctrl+V (Cmd+V on Mac), or type directly.' },
                { step:'02', icon:'📊', title:'View Stats', desc:'Word count, character count, sentence count, and reading time all update instantly.' },
                { step:'03', icon:'🔍', title:'Check Frequency', desc:'View the top 8 most-used words to spot keyword density and overused terms.' },
                { step:'04', icon:'🗑️', title:'Clear & Repeat', desc:'Click Clear to reset the text area and analyze new content.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-h2">
            <h2 id="usecases-h2" className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon:'🎓', title:'Academic Essays', desc:'Check your essay meets the required word count for college or university submissions — 500, 1000, 2000, or 5000 words.' },
                { icon:'✍️', title:'Blog & SEO Content', desc:'Most SEO-optimized blog posts target 1500–2500 words. Track your count and ensure you hit the sweet spot for rankings.' },
                { icon:'🐦', title:'Social Media Posts', desc:'Twitter has a 280-character limit, LinkedIn posts perform best under 1300 chars. Use the character count to stay on target.' },
                { icon:'📧', title:'Email Copywriting', desc:'Subject lines under 60 characters get better open rates. Preview text should be 85–100 characters for mobile email clients.' },
                { icon:'🔍', title:'SEO Keyword Density', desc:'Check that your target keyword appears at a natural rate (1–3%) using the word frequency panel to avoid over-optimization.' },
                { icon:'📖', title:'Reading Time Estimation', desc:'Blog posts with displayed read times get 40% more views. Add the reading time to your article header to set expectations.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-h2">
            <h2 id="faq-h2" className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><span itemProp="text">{faq.a}</span></div>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="more-h2">
            <h2 id="more-h2" className="font-display font-bold text-xl text-surface-900 mb-5">More Free Text Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(tool => (<ToolCard key={tool.slug} tool={tool} />))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
