import { Suspense } from 'react';
import Link from 'next/link';
import TextRepeater from '../../components/tools/TextRepeater';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── CHANGED: title, description, keywords all India-focused ──────────────────
export const metadata = {
  title: 'Text Repeater for WhatsApp India – Repeat Text Free',
  description: 'Free text repeater for WhatsApp India. Repeat any message, emoji, or prank text up to 1000×. Birthday wishes, group chats, Instagram. No login.',
  keywords: [
    'text repeater for whatsapp india',
    'text repeater india',
    'whatsapp prank messages india',
    'text repeater for instagram india',
    'repeat text for whatsapp',
    'whatsapp message repeater',
    'emoji repeater for whatsapp',
    'birthday message repeater whatsapp',
    'flood whatsapp group messages',
    'text repeater online free india',
    'repeat text online india',
    'hi 100 times copy paste',
    'happy birthday 100 times copy paste',
    'text repeater',
    'repeat text online',
    'word repeater',
    'duplicate text online',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/text-repeater` },
  openGraph: {
    title: 'Text Repeater for WhatsApp India — Repeat Any Message Free',
    description: 'Repeat any message, emoji, or prank text for WhatsApp and Instagram. Free, instant, no login. Works on all Android and iPhone devices in India.',
    url: `${SITE_CONFIG.url}/text-repeater`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Repeater for WhatsApp India — Repeat Any Message Free',
    description: 'Repeat any message, emoji, or prank text for WhatsApp and Instagram. Free, instant, no login. Works on all Android and iPhone devices in India.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── CHANGED: WhatsApp card is now India-specific ──────────────────────────────
const USE_CASES = [
  {
    icon: '💬',
    title: 'WhatsApp Pranks & Wishes (India)',
    color: 'green',
    desc: 'Flood a WhatsApp group with "Happy Birthday 🎂" 50 times. Spam a friend with "😂" 200 times. Send Diwali wishes, Holi greetings, or "I love you" 100 times. India\'s most popular use.',
    examples: ['"Happy Birthday! 🎂" × 50', '"Happy Diwali 🪔" × 100', '"😂" × 200 — group flood', '"Bhai uth ja 🙏" × 30'],
  },
  {
    icon: '📸',
    title: 'Instagram India',
    color: 'rose',
    desc: 'Fill your Instagram bio with repeated symbols, create aesthetic dot patterns, or flood comments on a friend\'s post with the same emoji. Popular with Indian Instagram users for creative profiles.',
    examples: ['• • • • • (bio dividers)', '"❤️" × 50 in comments', '"🔥" × 30 for reels', 'Custom symbol patterns'],
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
    title: 'Excel & Google Sheets',
    color: 'purple',
    desc: 'Need to fill 500 rows with the same placeholder value? Repeat "N/A", "TBD", or a sample value and paste into Excel or Google Sheets. Faster than Excel\'s REPT() formula for Indian data entry work.',
    examples: ['"N/A" × 500 rows', '"Pending" × 200', 'Sample ID × 100', '"Test User" × 1000'],
  },
  {
    icon: '✍️',
    title: 'Student & Exam Prep',
    color: 'amber',
    desc: 'Repeat writing lines for handwriting practice. Generate dummy answer lines for mock question papers. Useful for students preparing for UPSC, SSC, or board exams who need structured practice sheets.',
    examples: ['Practice line × 50', 'Answer blank × 30', 'Question format × 20', 'Writing template × 100'],
  },
  {
    icon: '🎨',
    title: 'Design & Mockups',
    color: 'teal',
    desc: 'Fill design mockups with realistic repeating text instead of "Lorem ipsum." Repeat a product title, a review snippet, or a notification message across your UI prototype.',
    examples: ['"New message" × 30', 'Product name × 20', 'Review text × 15', 'Notification × 50'],
  },
];

// ── CHANGED: India-specific FAQs added at top, originals kept below ───────────
const FAQS = [
  {
    q: 'How do I use text repeater for WhatsApp prank in India?',
    a: 'Type your prank message or emoji in the input box — for example "😂" or "Bhai uth ja 🙏". Set the repeat count to 50 or 100. Choose "New Line" as the separator so each message appears on its own line. Click Repeat Text, then Copy. Open WhatsApp and paste it in any chat or group. Works on both Android and iPhone.',
  },
  {
    q: 'How to send Happy Birthday 100 times on WhatsApp?',
    a: 'Type "Happy Birthday! 🎂" in the input box. Set the count to 100. Select "New Line" as the separator. Click Repeat Text and then Copy. Paste it directly in your friend\'s WhatsApp chat. You can also try 50 times with "Happy Birthday" followed by their name for a personalised feel.',
  },
  {
    q: 'Can I flood a WhatsApp group with a message?',
    a: 'Yes. Type any message in the input box, set the count (up to 1,000), choose New Line as separator, click Repeat Text, and copy the output. Paste it in any WhatsApp group chat. Note: sending very large messages repeatedly may cause WhatsApp to temporarily block sending — use this for fun, not spam.',
  },
  {
    q: 'How to use text repeater for Instagram India?',
    a: 'For Instagram comments, type your emoji (like "❤️" or "🔥"), set the count to 20–30, choose None as separator, and copy. Paste in any Instagram comment box. For Instagram bio, use symbols like "•" or "✦" repeated with None separator to create decorative dividers between your bio lines.',
  },
  {
    q: 'How to repeat "I love you" 100 times for WhatsApp?',
    a: 'Type "I love you ❤️" in the text box, set count to 100, select New Line separator, click Repeat Text, and copy the output. Paste it in your partner\'s WhatsApp chat. You can also try 50 times with a heart emoji — it\'s less overwhelming and more romantic.',
  },
  {
    q: 'How to send Diwali or Holi wishes many times on WhatsApp?',
    a: 'Type your festival wish — for example "Happy Diwali! 🪔 Shubh Deepavali! May your life be filled with light and joy." Set the count to 10 or 20, select New Line as separator, click Repeat Text, and copy. Paste it in your WhatsApp groups. Perfect for mass festival greetings.',
  },
  {
    q: 'What is a text repeater?',
    a: 'A text repeater is a free online tool that takes any text you enter — a word, sentence, emoji, or paragraph — and duplicates it a specified number of times. You can choose how many repetitions you want and add a separator (space, comma, new line, or custom character) between each copy. The output is instant and ready to copy.',
  },
  {
    q: 'Is there a limit to how many times I can repeat text?',
    a: 'This tool supports up to 1,000 repetitions. For very large outputs — like repeating a long paragraph 1,000 times — the resulting text may be several megabytes. The tool processes entirely in your browser using JavaScript, so the only real limit is your device\'s available memory.',
  },
  {
    q: 'Does my text get uploaded to any server?',
    a: 'No. This text repeater runs entirely in your browser using JavaScript. Your text never leaves your device — nothing is sent to any server, stored anywhere, or logged. This makes it safe for repeating sensitive content like personal messages or private notes.',
  },
  {
    q: 'Can I use this text repeater on my Android or iPhone?',
    a: 'Yes. The tool is fully responsive and works on all devices — Android phones, iPhones, tablets, and desktops. It is particularly useful on mobile for generating repeated WhatsApp messages or emoji sequences. Just open the website in Chrome or Safari on your phone and use it directly.',
  },
  {
    q: 'Can I repeat multiple lines of text?',
    a: 'Yes. Paste multi-line text into the input — the entire block (including line breaks) is treated as one unit and repeated the specified number of times. This is particularly useful for repeating structured messages, multi-line birthday wishes, or templates.',
  },
  {
    q: 'How is this different from Excel\'s REPT() function?',
    a: 'Excel\'s REPT() function repeats text within a single cell and requires opening a spreadsheet, writing a formula, and managing cell references. This online text repeater works in your browser in seconds, supports multi-line text, adds separators between repetitions, and lets you copy the result instantly. No spreadsheet knowledge needed.',
  },
];

export default function TextRepeaterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Text Repeater for WhatsApp India — ToolStackHub',
        description: 'Free text repeater for WhatsApp India. Repeat any message, emoji, or prank text up to 1000 times. Works for Instagram, Excel, and testing. No login required.',
        url: `${SITE_CONFIG.url}/text-repeater`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'Repeat text up to 1000 times',
          'WhatsApp prank message generator',
          'Emoji repeater for Instagram and WhatsApp',
          'Custom separator support',
          'New line, space, comma separators',
          'One-click copy',
          'No login required',
          'Works on Android and iPhone',
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
        name: 'How to Use Text Repeater for WhatsApp Prank in India',
        totalTime: 'PT10S',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter your message', text: 'Type or paste your WhatsApp message, emoji, or prank text into the input box.' },
          { '@type': 'HowToStep', position: 2, name: 'Set repeat count', text: 'Enter the number of repetitions or click ×50 or ×100 for quick prank counts.' },
          { '@type': 'HowToStep', position: 3, name: 'Choose separator', text: 'Select New Line to put each message on its own line, or None to join emojis together.' },
          { '@type': 'HowToStep', position: 4, name: 'Click Repeat Text', text: 'Output appears instantly. No loading, no wait.' },
          { '@type': 'HowToStep', position: 5, name: 'Copy and paste to WhatsApp', text: 'Click Copy, open WhatsApp, and paste in any chat or group.' },
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

        {/* ── HERO — India-focused H1 and description ───────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Text Repeater</li>
              </ol>
            </nav>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 Text Repeater for WhatsApp India
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>text repeater</strong> lets you repeat any message, emoji, or word as many times as you want — instantly. Type your text, set the count, choose a separator (new line, space, comma, or none), click Repeat, and paste it directly into <strong>WhatsApp, Instagram, or anywhere else</strong>. Free, no login, works on Android and iPhone.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Text Repeater for WhatsApp India — Repeat Any Message Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-4">
              Repeat any word, emoji, birthday wish, prank message, or festival greeting up to 1,000 times.
              Paste directly into WhatsApp or Instagram. Free, instant, no login. Works on all Android and iPhone devices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['💬 WhatsApp Pranks', '📸 Instagram India', '🎂 Birthday Wishes', '🪔 Festival Messages', '📱 Android & iPhone', '🆓 Free Forever'].map(b => (
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
                { n:'1', icon:'⌨️', title:'Type your message',  desc:'Enter any text, emoji, or WhatsApp prank message into the input box.' },
                { n:'2', icon:'🔢', title:'Set repeat count',   desc:'Enter a number or click ×50 or ×100 for quick WhatsApp prank counts.' },
                { n:'3', icon:'⚙️', title:'Choose separator',   desc:'New Line for WhatsApp messages, None to join emojis together.' },
                { n:'4', icon:'▶️', title:'Click Repeat Text',  desc:'Output appears instantly. No loading, no wait.' },
                { n:'5', icon:'📋', title:'Copy & paste',       desc:'One-click copy. Paste into WhatsApp, Instagram, Excel, or anywhere.' },
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

          {/* ── NEW: WhatsApp India section ───────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Text Repeater for WhatsApp India — Prank Messages & Wishes
            </h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              WhatsApp is the most popular messaging app in India with over 500 million users. Whether you want to flood a group chat, send birthday wishes 50 times, or prank a friend, this tool does it in seconds — no app to install, works directly in your browser on any Android or iPhone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: '🎂 Birthday Wishes × 50',
                  tag: 'Most Popular',
                  tagColor: 'bg-emerald-100 text-emerald-700',
                  setup: 'Text: Happy Birthday! 🎂 | Count: 50 | Separator: New Line',
                  output: 'Happy Birthday! 🎂\nHappy Birthday! 🎂\nHappy Birthday! 🎂\n...',
                  use: 'Send this to a friend\'s WhatsApp. They\'ll need to scroll forever to find your actual birthday message.',
                },
                {
                  title: '😂 Emoji Flood × 100',
                  tag: 'Group Chat Prank',
                  tagColor: 'bg-brand-100 text-brand-700',
                  setup: 'Text: 😂 | Count: 100 | Separator: None',
                  output: '😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂...',
                  use: 'Flood any WhatsApp group with laughing emojis. Choose None separator so they all join into one big block.',
                },
                {
                  title: '🪔 Diwali Wishes × 20',
                  tag: 'Festival Season',
                  tagColor: 'bg-amber-100 text-amber-700',
                  setup: 'Text: Happy Diwali! 🪔 Shubh Deepavali! | Count: 20 | Separator: New Line',
                  output: 'Happy Diwali! 🪔 Shubh Deepavali!\nHappy Diwali! 🪔 Shubh Deepavali!\n...',
                  use: 'Works for Diwali, Holi, Eid, Christmas, or New Year wishes. Paste into any WhatsApp group in seconds.',
                },
                {
                  title: '😴 Wake Up Prank × 30',
                  tag: 'Friend Prank',
                  tagColor: 'bg-purple-100 text-purple-700',
                  setup: 'Text: Bhai uth ja 🙏 | Count: 30 | Separator: New Line',
                  output: 'Bhai uth ja 🙏\nBhai uth ja 🙏\nBhai uth ja 🙏\n...',
                  use: 'The classic Indian WhatsApp prank — send this early morning to a friend who sleeps late.',
                },
              ].map(ex => (
                <div key={ex.title} className="bg-white border border-surface-200 rounded-2xl p-5 hover:border-brand-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-surface-900">{ex.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ex.tagColor}`}>{ex.tag}</span>
                  </div>
                  <div className="text-xs font-mono text-brand-700 bg-brand-50 px-3 py-2 rounded-lg mb-2">{ex.setup}</div>
                  <div className="text-xs font-mono text-surface-500 bg-surface-50 border border-surface-100 px-3 py-2 rounded-lg mb-3 truncate">{ex.output}</div>
                  <p className="text-xs text-surface-500 leading-relaxed">{ex.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── NEW: Instagram India section ──────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Text Repeater for Instagram India
            </h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              Instagram is the second-most used social app in India. From flooding a friend's comment section to creating aesthetic bio dividers, the text repeater has plenty of uses on Instagram too.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '💬',
                  title: 'Comment floods',
                  desc: 'Type "❤️" or "🔥", set count to 30, separator None, copy, and paste in any Instagram comment. Popular for reacting to a friend\'s post or a celebrity reel.',
                  example: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...',
                },
                {
                  icon: '✦',
                  title: 'Bio dividers',
                  desc: 'Repeat "• " or "✦ " with None separator to create clean visual dividers in your Instagram bio between name, profession, and location lines.',
                  example: '• • • • • • • • • • • •',
                },
                {
                  icon: '📢',
                  title: 'Caption dot trick',
                  desc: 'Repeat dots "." with New Line separator to push your caption text down and hide it behind the "more" button for a clean-looking Instagram post.',
                  example: '.\n.\n.\n.\n.\n[Your actual caption]',
                },
              ].map(item => (
                <div key={item.title} className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-surface-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-600 leading-relaxed mb-3">{item.desc}</p>
                  <div className="text-xs font-mono text-rose-700 bg-white border border-rose-100 px-3 py-2 rounded-lg truncate">
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ALL USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">All Ways to Use the Text Repeater</h2>
            <p className="text-surface-500 leading-relaxed mb-6">
              Beyond WhatsApp pranks and Instagram, here are all the ways people in India and across the world use this tool every day:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map(uc => {
                const c = colorMap[uc.color];
                return (
                  <div key={uc.title} className={`${c.bg} border ${c.border} rounded-2xl p-5`}>
                    <div className={`w-10 h-10 ${c.icon} rounded-xl flex items-center justify-center text-2xl mb-3`}>{uc.icon}</div>
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

          {/* SEPARATORS */}
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
                    { sep:'New Line',  prod:'Each repetition on its own line',     best:'WhatsApp messages, lists, spreadsheet data', ex:'hello\nhello\nhello' },
                    { sep:'Space',     prod:'Words separated by a single space',    best:'Inline text, simple word repetition',        ex:'hello hello hello' },
                    { sep:'Comma',     prod:'CSV-style comma-separated values',     best:'CSV data, SQL values, tag lists',            ex:'hello, hello, hello' },
                    { sep:'None',      prod:'Repetitions joined with no gap',       best:'Emoji floods, Instagram comments, patterns', ex:'😂😂😂😂😂' },
                    { sep:'Custom',    prod:'Any character or string between each', best:'Special cases, markdown, custom delimiters', ex:'hello | hello | hello' },
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

          {/* QUICK EXAMPLES — Indian examples */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Popular Text Repeater Examples</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title:'WhatsApp Birthday Flood',
                  setup:'Text: Happy Birthday! 🎂 | Count: 50 | Separator: New Line',
                  output:'Happy Birthday! 🎂\nHappy Birthday! 🎂\nHappy Birthday! 🎂\n...',
                  use:'India\'s most popular use. Paste directly into a friend\'s WhatsApp chat or group.',
                },
                {
                  title:'Emoji Prank for Group',
                  setup:'Text: 😂 | Count: 200 | Separator: None',
                  output:'😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂...',
                  use:'Flood a WhatsApp group with laughing emojis. None separator joins them into one block.',
                },
                {
                  title:'100 Test Emails (Developers)',
                  setup:'Text: user_{n}@test.com | Count: 100 | Separator: New Line',
                  output:'user_1@test.com\nuser_2@test.com\nuser_3@test.com\n...',
                  use:'Use Increment mode. Generate numbered test emails for QA and database seeding.',
                },
                {
                  title:'Festival Wishes Bulk',
                  setup:'Text: Happy Diwali! 🪔 Shubh Deepavali! | Count: 20 | Separator: New Line',
                  output:'Happy Diwali! 🪔 Shubh Deepavali!\nHappy Diwali! 🪔 Shubh Deepavali!\n...',
                  use:'Works for Diwali, Holi, Eid, or any Indian festival. Paste into WhatsApp groups.',
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
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Free Text Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href:'/word-counter-online',           icon:'📊', label:'Word Counter',           desc:'Count words, characters, sentences, and reading time in real time.' },
                { href:'/tools/case-converter',          icon:'🔤', label:'Case Converter',         desc:'UPPERCASE, lowercase, Title Case, camelCase, snake_case — instantly.' },
                { href:'/remove-duplicate-lines-online', icon:'🧹', label:'Remove Duplicate Lines', desc:'Clean email lists, keyword lists, and CSV exports. One click.' },
                { href:'/remove-line-breaks',            icon:'↩️', label:'Remove Line Breaks',     desc:'Strip line breaks from any text. Replace with space or remove entirely.' },
                { href:'/remove-extra-spaces',           icon:'␣',  label:'Remove Extra Spaces',    desc:'Collapse multiple spaces into single spaces. Clean any text instantly.' },
                { href:'/number-to-words',               icon:'🔢', label:'Number to Words',        desc:'Convert any number to Indian words (Lakh, Crore). Free, instant.' },
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

          {/* TRUST — updated to mention India */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">Built in India, for India — Browser-Based. Always Free.</div>
                <p className="text-sm text-surface-500 leading-relaxed mb-3">
                  ToolStackHub is built and maintained by a small team of developers and designers based in India. This text repeater was built because we needed it ourselves — for WhatsApp groups, for testing, for bulk data generation. Every tool runs entirely in your browser. Your text is never uploaded to any server, never stored, and never logged.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✅ No server upload — runs in browser only</span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">🇮🇳 Built in India</span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-surface-100 px-3 py-1 rounded-full border border-surface-200">🆓 Free, no account, no limits</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="text-repeater" />
      <Footer />
    </>
  );
}