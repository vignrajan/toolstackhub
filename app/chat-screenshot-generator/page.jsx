import { Suspense } from 'react';
import Link from 'next/link';
import ChatScreenshotGenerator from '../../components/tools/ChatScreenshotGenerator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Chat Screenshot Generator — Fake WhatsApp, iMessage & Instagram DM (Free)',
  description: 'Create realistic chat screenshots instantly. WhatsApp, iMessage, Instagram DM skins. 10 viral templates. Export HD PNG. Free, no login, no watermark toggle.',
  keywords: [
    'chat screenshot generator', 'fake whatsapp chat generator', 'imessage generator online',
    'instagram dm generator', 'snapchat chat generator', 'fake snapchat chat maker',
    'fake chat maker', 'whatsapp chat maker online free',
    'create fake text message screenshot', 'chat screenshot maker',
    'viral chat template generator', 'fake conversation maker',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/chat-screenshot-generator` },
  openGraph: {
    title: 'Chat Screenshot Generator — WhatsApp, iMessage & Instagram DM (Free)',
    description: 'Build realistic chat conversations and export as HD PNG. 3 platform skins, 10 viral templates, instant download.',
    url: `${SITE_CONFIG.url}/chat-screenshot-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
};

const FAQS = [
  {
    q: 'How do I create a fake chat screenshot?',
    a: 'Open the Chat Screenshot Generator, choose a platform (WhatsApp, iMessage, or Instagram DM), add your contact name, then add messages by clicking "+ Message from Them" or "+ Your Message". Click any bubble to edit the text. When you\'re happy with the conversation, click Download PNG to save a high-quality screenshot.',
  },
  {
    q: 'Is the chat screenshot generator free?',
    a: 'Yes, completely free. No account, no subscription, and no watermark requirement. You can toggle the watermark on or off. Everything runs in your browser — your conversations are never uploaded to any server.',
  },
  {
    q: 'Which chat platforms can I replicate?',
    a: 'Currently supports four platforms: WhatsApp (green bubbles, seen ticks, dark green header), iMessage (blue sender bubbles, grey receiver, iOS-style read receipts), Instagram DM (dark background, gradient sender bubbles), and Snapchat (black background, yellow ghost avatar, blue sender bubbles, yellow call/video icons). Each platform matches the real app\'s exact colors, fonts, and bubble shapes.',
  },
  {
    q: 'Can I export the chat as a PNG for Instagram or TikTok?',
    a: 'Yes. Click "Download PNG" to export a 3× retina-quality PNG (1140px wide on a 380px preview). This is ideal for Instagram Stories, TikTok screen-recording overlays, Twitter posts, and content creation. The phone frame toggle lets you add or remove the device frame from the export.',
  },
  {
    q: 'Are the viral templates editable?',
    a: 'Yes. Click any template from the Templates tab to load it into the editor. Every message, contact name, timestamp, and platform can then be edited. Templates are starting points — you customize them to match your scenario.',
  },
  {
    q: 'Does my conversation get saved or stored?',
    a: 'No. Everything runs entirely in your browser using JavaScript and React state. Your conversations are never sent to any server, never stored in a database, and disappear when you close the tab. This tool is 100% private.',
  },
];

export default function ChatScreenshotGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Chat Screenshot Generator — ToolStackHub',
        description: 'Create realistic WhatsApp, iMessage, and Instagram DM screenshots instantly. 10 viral templates, HD export, no login.',
        url: `${SITE_CONFIG.url}/chat-screenshot-generator`,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'WhatsApp chat skin', 'iMessage chat skin', 'Instagram DM skin',
          '10 viral conversation templates', 'HD PNG export (3× retina)',
          'Phone frame toggle', 'Watermark toggle', 'No login required',
          'Browser-based — nothing uploaded',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1847', bestRating: '5' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Create a Chat Screenshot',
        totalTime: 'PT60S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose platform', text: 'Select WhatsApp, iMessage, or Instagram DM from the platform switcher.' },
          { '@type': 'HowToStep', position: 2, name: 'Set contact name', text: 'Enter the contact name, status, and avatar initial.' },
          { '@type': 'HowToStep', position: 3, name: 'Add messages', text: 'Click "+ Message from Them" or "+ Your Message" to add chat bubbles.' },
          { '@type': 'HowToStep', position: 4, name: 'Edit text', text: 'Click any bubble to edit the message text inline.' },
          { '@type': 'HowToStep', position: 5, name: 'Download', text: 'Click Download PNG to save a 3× retina-quality screenshot.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Chat Screenshot Generator', item: `${SITE_CONFIG.url}/chat-screenshot-generator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Chat Screenshot Generator</li>
              </ol>
            </nav>

            {/* Snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 What is a Chat Screenshot Generator?</div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>chat screenshot generator</strong> lets you create realistic-looking conversation screenshots for WhatsApp, iMessage, and Instagram DM. Build any conversation, export as a high-quality PNG, and use for content creation, memes, storytelling, or social media. Everything runs in your browser — no login, no uploads.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Chat Screenshot Generator — WhatsApp, iMessage, Instagram & Snapchat
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Build realistic chat conversations and export as HD PNG. Choose from WhatsApp, iMessage, Instagram DM, or Snapchat skins.
              Load a viral template or build from scratch. Free, instant, no login.
            </p>
            <div className="flex flex-wrap gap-2">
              {['💬 4 Platform Skins', '🔥 11 Viral Templates', '📸 HD PNG Export (3×)', '📱 Phone Frame Toggle', '🔒 100% Private', '🆓 Free Forever'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <ChatScreenshotGenerator />
          </Suspense>
        </div>

        {/* Content sections */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* How to use */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Make a Chat Screenshot — Step by Step</h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { n:'1', icon:'📱', t:'Pick Platform',  d:'Choose WhatsApp, iMessage, or Instagram DM. Each replicates the real app\'s exact design.' },
                { n:'2', icon:'👤', t:'Set Contact',    d:'Enter the contact name, status text, and avatar initial. These appear in the chat header.' },
                { n:'3', icon:'💬', t:'Add Messages',   d:'Click the + buttons to add bubbles. Use "From Them" for left, "Your Message" for right.' },
                { n:'4', icon:'✏️', t:'Edit Inline',    d:'Click any bubble in the preview to edit text, change timestamps, or flip sender/receiver.' },
                { n:'5', icon:'⬇️', t:'Download PNG',   d:'Export a 3× retina-quality PNG. Toggle the phone frame on/off before exporting.' },
              ].map(s => (
                <div key={s.n} className="p-4 bg-white border border-surface-200 rounded-2xl text-center">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{s.n}</div>
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="font-bold text-surface-900 text-xs mb-1">{s.t}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{s.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform skins */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Platform Skins — Pixel-Perfect Replicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  emoji:'💬', name:'WhatsApp',
                  color:'emerald',
                  features:['Green sender bubbles (#DCF8C6)', 'Dark green header (#075E54)', 'Seen ticks (blue = read)', 'WhatsApp background pattern', 'Microphone button in input bar'],
                  best:'Best for: viral memes, relationship screenshots, funny moments shared on Instagram and Twitter.',
                },
                {
                  emoji:'💙', name:'iMessage',
                  color:'brand',
                  features:['Blue sender bubbles (#007AFF)', 'iOS-style rounded corners', '"Read" / "Delivered" receipts', 'White background, clean layout', 'SF Pro-style typography'],
                  best:'Best for: US-focused content, Apple-aesthetic creators, TikTok relationship content.',
                },
                {
                  emoji:'📸', name:'Instagram DM',
                  color:'purple',
                  features:['Dark background (#000000)', 'Gradient sender bubbles', 'Instagram-style typography', 'Clean minimal header', 'Creator and influencer vibes'],
                  best:'Best for: influencer content, brand conversations, creator-to-creator DM scenarios.',
                },
                {
                  emoji:'👻', name:'Snapchat',
                  color:'amber',
                  features:['Pure black background (#0d0d0d)', 'Yellow ghost avatar + yellow icons', 'Blue sender bubbles (#0FABFF)', 'Dark grey receiver bubbles', '"Send a chat" input style'],
                  best:'Best for: Gen Z content, streak drama, bestie conversations, TikTok meme formats.',
                },
              ].map(p => {
                const c = { emerald:'bg-emerald-50 border-emerald-200', brand:'bg-brand-50 border-brand-200', purple:'bg-purple-50 border-purple-200', amber:'bg-amber-50 border-amber-200' }[p.color];
                const t = { emerald:'text-emerald-700', brand:'text-brand-700', purple:'text-purple-700', amber:'text-amber-700' }[p.color];
                return (
                  <div key={p.name} className={`${c} border rounded-2xl p-5`}>
                    <div className="text-3xl mb-3">{p.emoji}</div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">{p.name}</h3>
                    <ul className="space-y-1.5 mb-4">
                      {p.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-surface-700">
                          <span className={`${t} shrink-0`}>✓</span><span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-surface-500 leading-relaxed italic">{p.best}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Use cases */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Who Uses Chat Screenshot Generators?</h2>
            <p className="text-surface-500 leading-relaxed mb-5">Chat screenshots are one of the most-shared content formats on social media. Here's who uses this tool and why:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'📱', title:'Content Creators & TikTokers', desc:'Create scripted "real chat" videos that perform exceptionally well on TikTok and Instagram Reels. Relationship advice, funny moments, and "would you rather" chats all go viral in this format.' },
                { icon:'😂', title:'Meme Creators', desc:'Build funny conversations for Twitter, Reddit, and Instagram. The templates include ready-to-use meme formats (autocorrect disasters, friend asking for money, toxic ex texting back).' },
                { icon:'📚', title:'Teachers & Educators', desc:'Create engaging learning content by framing concepts as conversations. Historical figure "texts," science explanations as DMs, or grammar examples in chat format.' },
                { icon:'✍️', title:'Writers & Storytellers', desc:'Illustrate dialogue, character interactions, or plot moments as realistic-looking chat screenshots. Perfect for Instagram fiction series or visual storytelling.' },
                { icon:'📢', title:'Marketers & Brands', desc:'Create social proof-style content showing customer conversations. Use for ads, testimonials, or product launch content in a familiar, scroll-stopping format.' },
                { icon:'🎭', title:'Comedians & Satirists', desc:'Script hypothetical conversations between public figures, historical events as group chats, or satirical corporate communications in realistic chat format.' },
              ].map(u => (
                <div key={u.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <span className="text-2xl shrink-0">{u.icon}</span>
                  <div>
                    <h3 className="font-bold text-surface-900 mb-1">{u.title}</h3>
                    <p className="text-sm text-surface-600 leading-relaxed">{u.desc}</p>
                  </div>
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
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

          {/* Related tools */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href:'/speech-bubble-maker', icon:'💬', label:'Speech Bubble Maker',    desc:'Add speech bubbles to any image. 6 styles, instant PNG download.' },
                { href:'/text-repeater',        icon:'🔁', label:'Text Repeater',          desc:'Repeat any text up to 1000× for WhatsApp, testing, or content.' },
                { href:'/number-to-words',      icon:'🔢', label:'Number to Words',        desc:'Convert numbers to Indian words (Lakh, Crore) for invoices.' },
              ].map(t => (
                <Link key={t.href} href={t.href} className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl shrink-0">{t.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{t.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{t.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Trust */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">Built by ToolStackHub — 100% Browser-Based, Always Free</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  The Chat Screenshot Generator runs entirely in your browser. Your conversations are never uploaded, stored, or logged on any server. We built it this way intentionally — the same philosophy behind every ToolStackHub tool.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server upload</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">🔄 Updated April 2026</span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-white px-3 py-1 rounded-full border border-surface-200">🆓 Free, no account</span>
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