import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import CharacterCounter from '../../components/tools/CharacterCounter';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Character Counter – Count Letters, Numbers & Symbols Free',
  description: 'Count characters with and without spaces, letters, numbers, and special chars. Check Twitter, SMS, and meta description limits in real time. Free, no signup.',
  keywords: ['character counter online', 'count characters online', 'letter counter', 'twitter character counter', 'sms character limit', 'meta description length'],
  alternates: { canonical: `${SITE_CONFIG.url}/character-counter-online` },
  openGraph: {
    title: 'Character Counter – Count Letters, Numbers & Symbols Free',
    description: 'Count characters with live Twitter, SMS, and meta description limit indicators. Free, no signup.',
    url: `${SITE_CONFIG.url}/character-counter-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Character Counter – Count Letters, Numbers & Symbols Free',
    description: 'Count characters with and without spaces, letters, numbers, and special chars. Check Twitter, SMS, and meta description limits in real time. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'How do I count characters online?', a: 'Type or paste text — character count updates instantly with no button press needed. All stats are live.' },
  { q: 'Does it count spaces as characters?', a: 'It shows both total characters (with spaces) and characters without spaces separately so you have both counts.' },
  { q: 'What is the Twitter character limit?', a: 'Twitter/X allows 280 characters per post. Our tool shows a live progress bar so you always know how close you are.' },
  { q: 'Can I check meta description length?', a: 'Yes — the tool shows live limit bars for meta descriptions (160 chars) and meta title tags (60 chars) for SEO optimization.' },
  { q: 'Is the character counter free?', a: 'Yes — completely free with no account or download required. Use it as many times as you need.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Character Counter Online', description: 'Free real-time character counter with letter, number, and symbol breakdown plus live platform limit indicators.', url: `${SITE_CONFIG.url}/character-counter-online`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Character Counter', item: `${SITE_CONFIG.url}/character-counter-online` }] },
  ],
};

export default function CharacterCounterOnlinePage() {
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
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Character Counter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Character Counter Online – Count Letters, Numbers & Special Characters
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Instantly count characters with and without spaces, letters, numbers, and symbols.
              Live limit bars for Twitter, SMS, meta descriptions, and more. Free, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Real-Time Count', '🐦 Twitter Limit', '📱 SMS Limit', '🔍 SEO Meta Limit'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><CharacterCounter /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Character Counter" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">Free Character Counter Online – Real-Time Stats for Every Platform</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A <strong>character counter online</strong> is a must-have for social media managers, SEO specialists, developers, and anyone writing text with strict character limits. Whether you are crafting a Twitter post, writing an SMS, optimizing a meta description, or filling in a form field — knowing your exact character count is critical to staying within limits.</p>
              <p>Our free tool provides a complete breakdown: total characters (with spaces), characters without spaces, letter count, number count, special character count, and line count — all updating live as you type. The platform limit indicators change color as you approach and exceed each platform's maximum, giving you instant visual feedback without any manual checking.</p>
              <p>Use it as a <strong>Twitter character count tool</strong>, an <strong>SMS character counter</strong>, or a <strong>meta description length checker</strong> — it handles all three simultaneously so you never have to switch between tools.</p>
            </div>
          </section>

          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use the Character Counter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',     desc: 'Click the text area and type or paste your content. Stats update immediately as you type.' },
                { step: '02', icon: '📊', title: 'View Breakdown',      desc: 'See total chars, chars without spaces, letters, numbers, and symbols counted separately.' },
                { step: '03', icon: '🎯', title: 'Check Platform Bars', desc: 'Live progress bars for Twitter (280), SMS (160), meta description (160), and title (60).' },
                { step: '04', icon: '✏️', title: 'Edit to Fit',         desc: 'Edit your text in real time until you hit the exact character count you need.' },
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

          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'Real-Time Counting',        desc: 'Every stat updates instantly as you type — no button, no delay, no refresh needed.' },
                { icon: '🔢', title: 'Full Breakdown',            desc: 'Total chars, without spaces, letters only, numbers only, and special characters counted separately.' },
                { icon: '🐦', title: 'Twitter / X Limit',        desc: 'Live 280-character progress bar with color change as you approach and exceed the limit.' },
                { icon: '💬', title: 'SMS Limit',                 desc: 'Live 160-character SMS indicator — avoid multi-part messages automatically.' },
                { icon: '🔍', title: 'SEO Meta Limits',           desc: 'Live bars for meta description (160 chars) and title tag (60 chars) for perfect SEO length.' },
                { icon: '🔒', title: 'Private & Secure',          desc: 'Runs in your browser. Your text is never sent to any server or stored anywhere.' },
                { icon: '🌍', title: 'Unicode & Emoji Support',   desc: 'Handles all languages, Unicode characters, and emoji correctly in the character count.' },
                { icon: '📱', title: 'Mobile Friendly',           desc: 'Fully responsive layout works perfectly on smartphones and tablets.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{f.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🐦', title: 'Twitter & X Posts',      desc: 'Stay within Twitter\'s 280-character limit for standard posts and 280×25 for threads. Live indicator shows exactly where you stand.' },
                { icon: '💬', title: 'SMS Marketing',          desc: 'Keep SMS messages under 160 characters to avoid splitting into multiple messages, which increases carrier costs.' },
                { icon: '🔍', title: 'SEO Meta Tags',          desc: 'Google displays meta descriptions up to ~160 characters and title tags up to ~60. Optimize both for better click-through rates.' },
                { icon: '📧', title: 'Email Subject Lines',    desc: 'Email subject lines under 60 characters get better open rates on mobile. Track your count in real time as you write.' },
                { icon: '📱', title: 'Instagram Captions',     desc: 'Instagram captions can be up to 2200 characters but perform best under 150. Monitor your count as you craft each post.' },
                { icon: '📝', title: 'Form Field Validation',  desc: 'Test input field character limits before coding validation logic to handle edge cases and user experience correctly.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">The Most Complete Character Counter Online</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>Use this as a <strong>letter counter online</strong>, a <strong>text character counter</strong>, or a <strong>special character counter</strong> — it handles all three simultaneously. Whether you need to count characters in a sentence, check Twitter character limits, or verify your meta description is the right length for Google, this single tool covers every scenario.</p>
              <p>The platform limit bars make it the most practical <strong>online character count checker</strong> available. Instead of manually counting or switching between tools, you get every limit displayed as a color-coded progress bar — green when you are safe, amber when approaching, red when exceeded.</p>
            </div>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More Character Counter Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
              ].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/character-counter-online" />

          <RelatedToolsCluster currentSlug="character-counter-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}
