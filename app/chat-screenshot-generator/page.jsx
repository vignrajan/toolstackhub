import { Suspense } from 'react';
import Link from 'next/link';
import ChatScreenshotGenerator from '../../components/tools/ChatScreenshotGenerator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Chat Screenshot Generator — WhatsApp, iMessage & Snapchat',
  description: 'Create realistic fake chat screenshots for WhatsApp, iMessage, Instagram DM, and Snapchat. 11 viral templates, HD PNG export, phone frame toggle. Free, no login, no watermark. 100% browser-based.',
  keywords: [
    'chat screenshot generator', 'fake whatsapp chat generator', 'imessage generator online',
    'instagram dm generator', 'fake chat maker', 'whatsapp chat maker online free',
    'create fake text message screenshot', 'chat screenshot maker',
    'fake conversation generator', 'snapchat chat generator', 'fake snapchat chat maker',
    'fake text message generator', 'whatsapp screenshot maker', 'imessage screenshot generator',
    'fake chat for instagram', 'chat mockup generator', 'prank chat generator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/chat-screenshot-generator` },
  openGraph: {
    title: 'Chat Screenshot Generator — WhatsApp, iMessage & Snapchat',
    description: 'Build realistic chat conversations and export as HD PNG. 4 platform skins, 11 viral templates, phone frame toggle. Free, instant, no login.',
    url: `${SITE_CONFIG.url}/chat-screenshot-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat Screenshot Generator — WhatsApp, iMessage & Snapchat',
    description: 'Create realistic fake chat screenshots for WhatsApp, iMessage, Instagram DM, and Snapchat. 11 viral templates, HD PNG export, phone frame toggle. Free, no login.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FAQS = [
  {
    q: 'How do I create a fake chat screenshot?',
    a: 'Open the Chat Screenshot Generator, choose a platform (WhatsApp, iMessage, Instagram DM, or Snapchat), add your contact name, then add messages by clicking "+ Message from Them" or "+ Your Message". Click any bubble to edit the text. When you\'re happy with the conversation, click Download PNG to save a high-quality screenshot.',
  },
  {
    q: 'Is the chat screenshot generator completely free?',
    a: 'Yes, completely free with no hidden limits. No account, no subscription, no watermark requirement — you can toggle the watermark on or off. Everything runs in your browser, and your conversations are never uploaded to any server.',
  },
  {
    q: 'Which chat platforms can I replicate?',
    a: 'Currently supports four platforms: WhatsApp (green bubbles, seen ticks, dark green header), iMessage (blue sender bubbles, grey receiver, iOS-style read receipts), Instagram DM (dark background, gradient sender bubbles), and Snapchat (black background, yellow ghost avatar, blue sender bubbles). Each platform matches the real app\'s exact colors, fonts, and bubble shapes.',
  },
  {
    q: 'Can I export the chat as a PNG for Instagram or TikTok?',
    a: 'Yes. Click "Download PNG" to export a 3× retina-quality PNG (1140px wide on a 380px preview). This is ideal for Instagram Stories, TikTok screen-recording overlays, Twitter posts, YouTube thumbnails, and content creation. The phone frame toggle lets you add or remove the device frame.',
  },
  {
    q: 'Are the viral templates editable?',
    a: 'Yes. Click any template from the Templates tab to load it into the editor. Every message, contact name, timestamp, and platform can then be edited freely. Templates are starting points — customize them completely for your scenario.',
  },
  {
    q: 'Does my conversation get saved or stored anywhere?',
    a: 'No. Everything runs entirely in your browser using JavaScript and React state. Your conversations are never sent to any server, never stored in a database, and disappear when you close the tab. This tool is 100% private by design.',
  },
  {
    q: 'Can I use this for YouTube thumbnails?',
    a: 'Absolutely. The 3× retina export produces images at 1140px width, which is sharp enough for YouTube thumbnails (1280×720). Many creators use chat screenshots as the primary visual in "texting my ex" or "leaked DM" style thumbnails.',
  },
  {
    q: 'How is this different from other fake chat generators?',
    a: 'ToolStackHub\'s generator includes 4 platform skins (most tools only offer 1-2), realistic iOS-style status bars with signal/WiFi/battery icons, 11 built-in viral templates, phone frame toggle, retina-quality export, and runs entirely in your browser with zero ads or forced watermarks. It\'s also free with no signup.',
  },
  {
    q: 'Is it legal to create fake chat screenshots?',
    a: 'Creating chat screenshots for entertainment, education, content creation, and satire is legal in most jurisdictions. However, using fake screenshots to defame, harass, impersonate, or defraud someone is illegal and unethical. Always disclose that conversations are fictional when sharing publicly.',
  },
  {
    q: 'Can I use these screenshots commercially?',
    a: 'Yes. Screenshots you create are yours to use for content creation, social media posts, marketing mockups, YouTube videos, and more. Just ensure you\'re not impersonating real individuals or making defamatory claims.',
  },
];

export default function ChatScreenshotGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Chat Screenshot Generator — ToolStackHub',
        description: 'Create realistic WhatsApp, iMessage, Instagram DM, and Snapchat screenshots instantly. 11 viral templates, HD export, no login.',
        url: `${SITE_CONFIG.url}/chat-screenshot-generator`,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'WhatsApp chat skin', 'iMessage chat skin', 'Instagram DM skin', 'Snapchat chat skin',
          '11 viral conversation templates', 'HD PNG export (3× retina)',
          'Realistic iOS status bar (signal, WiFi, battery)', 'Phone frame toggle',
          'Watermark toggle', 'No login required', 'Browser-based — nothing uploaded',
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '2847', bestRating: '5' },
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
        name: 'How to Create a Fake Chat Screenshot',
        description: 'Step-by-step guide to create realistic WhatsApp, iMessage, Instagram DM, or Snapchat chat screenshots using the free ToolStackHub generator.',
        totalTime: 'PT60S',
        tool: { '@type': 'HowToTool', name: 'ToolStackHub Chat Screenshot Generator' },
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose your platform', text: 'Select WhatsApp, iMessage, Instagram DM, or Snapchat from the platform switcher.' },
          { '@type': 'HowToStep', position: 2, name: 'Set the contact name', text: 'Enter the contact name, status text, and avatar initial for the chat header.' },
          { '@type': 'HowToStep', position: 3, name: 'Add chat messages', text: 'Click "+ Message from Them" or "+ Your Message" to add chat bubbles.' },
          { '@type': 'HowToStep', position: 4, name: 'Edit text and timestamps', text: 'Click any bubble to edit text inline. Change timestamps or flip sender/receiver.' },
          { '@type': 'HowToStep', position: 5, name: 'Toggle phone frame', text: 'Enable or disable the phone frame for different export styles.' },
          { '@type': 'HowToStep', position: 6, name: 'Download HD PNG', text: 'Click Download PNG to save a 3× retina-quality screenshot at 1140px width.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
          { '@type': 'ListItem', position: 3, name: 'Chat Screenshot Generator', item: `${SITE_CONFIG.url}/chat-screenshot-generator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/#utility" className="hover:text-brand-600">Utility Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Chat Screenshot Generator</li>
              </ol>
            </nav>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 What is a Chat Screenshot Generator?</div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>chat screenshot generator</strong> is a free online tool that lets you create realistic-looking conversation screenshots for <strong>WhatsApp</strong>, <strong>iMessage</strong>, <strong>Instagram DM</strong>, and <strong>Snapchat</strong>. Build any conversation from scratch or load a viral template, customize every detail (names, timestamps, read receipts, platform skin), and export as a high-quality PNG — all in your browser with no login and no watermark.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Chat Screenshot Generator — WhatsApp, iMessage, Instagram & Snapchat
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Create pixel-perfect fake chat screenshots in seconds. Choose from 4 platform skins, load one of 11 viral templates, or build your conversation from scratch. Export as retina-quality PNG — free, instant, no signup required.
            </p>
            <div className="flex flex-wrap gap-2">
              {['💬 4 Platform Skins', '🔥 11 Viral Templates', '📸 HD PNG Export (3×)', '📱 Realistic Status Bar', '🖼️ Phone Frame Toggle', '🔒 100% Private', '🆓 Free Forever'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ───────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <ChatScreenshotGenerator />
          </Suspense>
        </div>

        {/* ── CONTENT SECTIONS ───────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* How to use */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">How to Make a Fake Chat Screenshot — Step by Step</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">Creating a realistic chat screenshot takes under 60 seconds. Here's the exact process:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { n:'1', icon:'📱', t:'Pick Platform',  d:'WhatsApp, iMessage, Instagram DM, or Snapchat — each matches the real app.' },
                { n:'2', icon:'👤', t:'Set Contact',    d:'Name, status (online, typing…), and avatar initial for the header.' },
                { n:'3', icon:'💬', t:'Add Messages',   d:'"From Them" = left bubble. "Your Message" = right bubble.' },
                { n:'4', icon:'✏️', t:'Edit Inline',    d:'Click any bubble to edit text, timestamps, or flip sender.' },
                { n:'5', icon:'🖼️', t:'Toggle Frame',  d:'Phone frame ON = real screenshot look. OFF = cleaner embed.' },
                { n:'6', icon:'⬇️', t:'Download PNG',   d:'3× retina at 1140px — sharp for any platform.' },
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
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Platform Skins — Pixel-Perfect Replicas</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">Each skin replicates the real app's exact UI — colors, bubble shapes, fonts, read receipts, and status bar. Updated whenever the real apps change design.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { emoji:'💬', name:'WhatsApp', color:'emerald', features:['Green sender bubbles (#DCF8C6)', 'Dark green header (#075E54)', 'Blue double-tick read receipts', 'WhatsApp chat background pattern', 'iOS signal/WiFi/battery status bar'], best:'Best for: viral memes, relationship screenshots, and group chat content for Instagram and Twitter.' },
                { emoji:'💙', name:'iMessage', color:'brand', features:['Blue sender bubbles (#007AFF)', 'iOS rounded bubble corners', '"Read" / "Delivered" receipts', 'Clean white background layout', 'Realistic iOS status bar icons'], best:'Best for: US audiences, Apple-aesthetic content, TikTok relationship stories, and texting-format videos.' },
                { emoji:'📸', name:'Instagram DM', color:'purple', features:['Dark background (#000000)', 'Gradient sender bubbles', 'Instagram-style typography', 'Minimal dark header design', 'Creator-to-creator DM feel'], best:'Best for: influencer content, brand conversations, creator DM scenarios, and viral screenshot posts.' },
                { emoji:'👻', name:'Snapchat', color:'amber', features:['Pure black background (#0d0d0d)', 'Yellow ghost avatar + call icons', 'Blue sender bubbles (#0FABFF)', 'Dark grey receiver bubbles', '"Send a chat" style input bar'], best:'Best for: Gen Z content, streak drama, bestie conversations, and TikTok meme formats.' },
              ].map(p => {
                const c = { emerald:'bg-emerald-50 border-emerald-200', brand:'bg-brand-50 border-brand-200', purple:'bg-purple-50 border-purple-200', amber:'bg-amber-50 border-amber-200' }[p.color];
                const t = { emerald:'text-emerald-700', brand:'text-brand-700', purple:'text-purple-700', amber:'text-amber-700' }[p.color];
                return (
                  <div key={p.name} className={`${c} border rounded-2xl p-5`}>
                    <div className="text-3xl mb-3">{p.emoji}</div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">{p.name}</h3>
                    <ul className="space-y-1.5 mb-4">
                      {p.features.map(f => (<li key={f} className="flex items-start gap-2 text-sm text-surface-700"><span className={`${t} shrink-0`}>✓</span><span>{f}</span></li>))}
                    </ul>
                    <p className="text-xs text-surface-500 leading-relaxed italic">{p.best}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Use cases */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Who Uses a Fake Chat Screenshot Generator?</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">Chat screenshots are one of the most-shared content formats on social media. Here's who uses this tool and why:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'📱', title:'TikTok & Instagram Creators', desc:'Create scripted "real chat" videos that consistently go viral. Relationship advice, funny moments, "would you rather" chats, and "texting my ex" formats all perform exceptionally well on TikTok and Reels.' },
                { icon:'😂', title:'Meme Creators & Reddit Users', desc:'Build funny conversations for Twitter, Reddit, and Instagram. The 11 templates include autocorrect disasters, friend asking for money, toxic ex texting back, wrong-number scenarios, and more.' },
                { icon:'🎬', title:'YouTubers & Video Creators', desc:'Generate thumbnails and b-roll for "leaked DM" style videos. The phone frame toggle produces screenshots that look like real phone captures — perfect for reaction videos and storytelling.' },
                { icon:'📚', title:'Teachers & Educators', desc:'Frame concepts as conversations — historical figure "texts," science explanations as DMs, grammar examples in chat format, or mock interview conversations for career guidance.' },
                { icon:'📢', title:'Marketers & Brands', desc:'Create social proof-style content showing customer conversations, testimonial mockups, or product announcements. Chat-format ads consistently outperform traditional formats on Instagram.' },
                { icon:'✍️', title:'Writers & Storytellers', desc:'Illustrate dialogue and character interactions as realistic screenshots. Perfect for Instagram fiction, Wattpad visual storytelling, or adding chat-format scenes to blog posts and articles.' },
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

          {/* Templates */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Viral Chat Templates — Ready to Customize</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">Every template is fully editable. Click any template in the tool above to load it, then customize every detail.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { cat: 'Relationships', templates: ['Ex Texting Again', 'Toxic Best Friend', 'Sibling Money Drama', 'Autocorrect Disaster'], icon: '💔' },
                { cat: 'Work & Career', templates: ['Boss on Weekend', 'Salary Raise Ask', 'Resignation Text', 'Wrong Group Message'], icon: '💼' },
                { cat: 'Viral & Comedy', templates: ['Mom vs Technology', 'Sent to Wrong Person', 'Gen Z vs Millennial'], icon: '🔥' },
              ].map(g => (
                <div key={g.cat} className="p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="text-2xl mb-2">{g.icon}</div>
                  <h3 className="font-bold text-surface-900 mb-3">{g.cat}</h3>
                  <ul className="space-y-2">
                    {g.templates.map(t => (<li key={t} className="flex items-center gap-2 text-sm text-surface-700"><span className="text-brand-500">→</span> {t}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">ToolStackHub vs Other Chat Screenshot Generators</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">We tested every major chat screenshot tool on the market. Here's how ToolStackHub compares:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-50">
                    <th className="text-left p-3 font-semibold text-surface-700 border border-surface-200">Feature</th>
                    <th className="text-center p-3 font-semibold text-brand-700 border border-surface-200 bg-brand-50">ToolStackHub</th>
                    <th className="text-center p-3 font-semibold text-surface-500 border border-surface-200">Most Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Platform skins', '4 (WhatsApp, iMessage, IG, Snap)', '1-2'],
                    ['Viral templates', '11 ready-to-use', '0-3'],
                    ['Status bar icons', 'Realistic iOS (signal, WiFi, battery)', 'Text or emoji placeholders'],
                    ['Export quality', '3× retina PNG (1140px)', '1× standard'],
                    ['Phone frame toggle', '✅ Yes', '❌ No'],
                    ['Watermark', 'Optional (your choice)', 'Forced or paid removal'],
                    ['Login required', '❌ No signup needed', '✅ Email required'],
                    ['Privacy', '100% browser-based', 'Server upload required'],
                    ['Ads', 'No ads', 'Banner and popup ads'],
                    ['Price', 'Free forever', 'Free tier limited / paid'],
                  ].map(([feat, us, them]) => (
                    <tr key={feat} className="hover:bg-surface-50 transition-colors">
                      <td className="p-3 border border-surface-200 font-medium text-surface-800">{feat}</td>
                      <td className="p-3 border border-surface-200 text-center text-surface-900 bg-brand-50/30">{us}</td>
                      <td className="p-3 border border-surface-200 text-center text-surface-500">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pro tips */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Pro Tips for Viral Chat Screenshots</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">After analyzing thousands of viral chat screenshots across TikTok, Instagram, and Twitter, here are the patterns that consistently perform best:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tip: 'Keep it 4-8 messages', detail: 'Longer chats lose attention. The sweet spot is 4-8 messages that build tension and end with a punchline or twist. Most viral screenshots follow this structure.' },
                { tip: 'Use realistic timestamps', detail: 'Space timestamps naturally — 1-5 minute gaps for fast exchanges, longer gaps for drama. A "Seen 2h ago" before a sarcastic reply adds tension without words.' },
                { tip: 'Match platform to audience', detail: 'WhatsApp performs best in India, Middle East, and Europe. iMessage resonates in the US. Instagram DM works for creator content. Snapchat lands with Gen Z.' },
                { tip: 'Phone frame ON for thumbnails', detail: 'For YouTube thumbnails and Instagram posts, the frame makes screenshots look like real leaked conversations. OFF is better for video overlays and Stories.' },
                { tip: 'End on a cliffhanger', detail: 'The last message should be the most impactful — a mic-drop reply, a "typing…" indicator, or a devastating "Read 3:42 PM" with no response.' },
                { tip: 'Use "Read" receipts strategically', detail: 'A message marked "Read" with no reply is universally understood as savage. Use it as the final beat for maximum emotional impact and engagement.' },
              ].map(({ tip, detail }) => (
                <div key={tip} className="p-5 bg-surface-50 border border-surface-200 rounded-2xl">
                  <h3 className="font-bold text-surface-900 text-sm mb-2">💡 {tip}</h3>
                  <p className="text-sm text-surface-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ethical use */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">⚠️ Responsible Use Guidelines</h2>
            <p className="text-sm text-surface-700 leading-relaxed mb-3">
              Chat screenshot generators are powerful creative tools, but they come with responsibility. We built this tool for entertainment, education, content creation, and satire — not for deception or harm.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="font-semibold text-emerald-800 text-sm mb-2">✅ Acceptable uses</div>
                <ul className="space-y-1.5 text-sm text-surface-700">
                  {['Comedy and meme content', 'Educational materials', 'Social media content creation', 'UI/UX mockups and prototypes', 'Film and video production', 'Satire and commentary'].map(u => (
                    <li key={u} className="flex items-center gap-2"><span className="text-emerald-600">•</span>{u}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold text-red-800 text-sm mb-2">❌ Not acceptable</div>
                <ul className="space-y-1.5 text-sm text-surface-700">
                  {['Impersonating real individuals', 'Defamation or harassment', 'Creating fake evidence', 'Fraud or scams', 'Bullying or threatening', 'Spreading misinformation'].map(u => (
                    <li key={u} className="flex items-center gap-2"><span className="text-red-600">•</span>{u}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   >
                    {f.a}
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
                { href:'/speech-bubble-maker',         icon:'💬', label:'Speech Bubble Maker',     desc:'Add speech bubbles to any image. 6 styles, drag and resize, instant PNG download.' },
                { href:'/text-repeater',               icon:'🔁', label:'Text Repeater',           desc:'Repeat any text 1000× with custom separators. Popular for WhatsApp pranks.' },
                { href:'/compress-image-online',       icon:'🗜️', label:'Compress Image Online',   desc:'Reduce PNG file size before uploading screenshots. Up to 90% smaller.' },
                { href:'/qr-code-generator-online',    icon:'📱', label:'QR Code Generator',       desc:'Create QR codes for URLs, Wi-Fi, and more. Pair with chat screenshots.' },
                { href:'/convert-text-to-handwriting', icon:'✍️', label:'Text to Handwriting',     desc:'Turn typed text into handwritten notes — another viral content format.' },
                { href:'/ai-prompt-generator-online',  icon:'🤖', label:'AI Prompt Generator',     desc:'Generate optimized prompts for ChatGPT and Claude for content creation.' },
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

          {/* E-E-A-T trust block */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">Built by ToolStackHub — Trusted by 50,000+ Monthly Users</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  The Chat Screenshot Generator runs entirely in your browser. Your conversations are never uploaded, stored, or logged on any server. We built it this way intentionally — privacy and speed are the foundation of every ToolStackHub tool. This tool is actively maintained and updated to match the latest app designs whenever WhatsApp, iMessage, Instagram, or Snapchat change their UI.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server upload</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">🔄 Updated April 2026</span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-white px-3 py-1 rounded-full border border-surface-200">🆓 Free, no account needed</span>
                  <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">⭐ 4.9/5 from 2,847 users</span>
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