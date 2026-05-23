import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

const POST = {
  slug:        'how-to-check-typing-speed-online',
  title:       'How to Check Your Typing Speed Online (Free WPM Test)',
  metaDesc:    'Learn how to check your typing speed online for free. Measure WPM, accuracy, and errors in real time. Tips to improve from 40 to 80 WPM included.',
  category:    'Typing & Productivity',
  categorySlug:'productivity',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-23',
  updatedAt:   '2026-03-23',
  readTime:    8,
  coverEmoji:  '⌨️',
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
    q: 'What is a good typing speed in WPM?',
    a: 'The average person types at 40 WPM. The average office worker types at 55 WPM. Professional typists reach 75–100 WPM. Above 60 WPM puts you in the top 30% of typists. Above 80 WPM is considered expert-level and is common among programmers, writers, and administrative professionals who type for hours every day.',
  },
  {
    q: 'How is WPM calculated?',
    a: 'WPM (Words Per Minute) is calculated by counting the number of correctly typed words divided by the time elapsed in minutes. A "word" is standardized as 5 characters — so "hello world" counts as 2.2 words. This standardization ensures fair comparison regardless of whether test passages use short or long words.',
  },
  {
    q: 'How long does it take to improve typing speed?',
    a: 'With consistent practice of 15–20 minutes per day, most people improve by 10–15 WPM within 4 weeks. The biggest gains come from switching to touch typing — using all 10 fingers without looking at the keyboard. This transition feels slow initially but produces dramatically faster speeds within 2–3 months.',
  },
  {
    q: 'What is the difference between WPM and accuracy?',
    a: 'WPM measures raw speed — how many correctly typed words you produce per minute. Accuracy measures the percentage of words typed correctly. High WPM with low accuracy is counterproductive — fixing errors takes more time than typing carefully. Aim for 95%+ accuracy before trying to increase speed.',
  },
  {
    q: 'Is 1 minute enough to measure typing speed?',
    a: 'A 1-minute test gives a reliable baseline for most purposes. However, 2–5 minute tests give a more accurate picture of your sustained typing speed, since most people can sprint for 60 seconds but slow down over longer durations. For job applications that require a specific WPM, practice with the same test duration the employer uses.',
  },
  {
    q: 'What typing speed do employers require?',
    a: 'Requirements vary by role. Data entry positions typically require 60–80 WPM. Administrative and secretarial roles usually require 50–60 WPM. Customer service chat support requires 40–50 WPM with high accuracy. Most general office roles benefit from 45+ WPM but do not specify a minimum in job descriptions.',
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
      keywords: 'how to check typing speed online, typing speed test, wpm test online, typing speed checker, words per minute test',
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

export default function PostTypingSpeed() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Article header ─────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">{POST.title}</li>
              </ol>
            </nav>

            {/* Meta row */}
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

            {/* Title */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-4">
              {POST.title}
            </h1>

            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              Most people have no idea how fast they actually type. They guess somewhere around "pretty fast" — but guess is the key word.
              This guide shows you exactly how to check your typing speed online in under 2 minutes, what your WPM score actually means,
              and the proven techniques that move the needle fastest.
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-base">🛠️</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                <div className="text-xs text-surface-400">
                  Updated {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────── */}
        <div className={`h-44 sm:h-56 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-7xl mb-2">{POST.coverEmoji}</div>
            <div className="text-white/70 text-sm font-medium">WPM · Accuracy · Speed</div>
          </div>
        </div>

        {/* ── Article body ───────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10">

            {/* ── Why typing speed matters ─────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Why Knowing Your Typing Speed Actually Matters
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Typing is one of the few skills that directly affects the speed of almost
                every other knowledge work task you do. Writing emails, writing code, filling
                forms, taking notes, chatting in Slack — all of it runs through your fingers
                on a keyboard. A developer who types at 30 WPM spends twice as long at the
                keyboard as one typing at 60 WPM, even if their thinking speed is identical.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                But beyond personal productivity, typing speed has become a practical
                requirement for job applications. Data entry roles, customer service positions,
                administrative jobs, transcription work, and legal assistant roles all list
                minimum WPM requirements. If you do not know your current speed, you are
                applying blind.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                The good news: checking your typing speed takes less than 2 minutes, and
                improving it is one of the most linear, measurable skill progressions available.
                Unlike most productivity improvements, typing speed responds directly and
                predictably to consistent practice.
              </p>
            </section>

            {/* ── Free tool CTA ─────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-brand-200"
              style={{ background: 'linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)' }}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">⌨️</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1">Free Tool</div>
                    <h3 className="font-display font-bold text-xl text-brand-900 mb-2">
                      Check Your Typing Speed Right Now — Free
                    </h3>
                    <p className="text-brand-800 text-sm leading-relaxed mb-4">
                      Our free typing speed test measures your WPM, accuracy, and errors
                      in real time with color-coded feedback. Choose easy, medium, or hard
                      difficulty. 30 seconds, 1 minute, 2 minute, or 5 minute modes.
                      No signup. Instant results with a benchmark comparison.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link href="/typing-test"
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        Take the Free Typing Test →
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-brand-700">
                        <span>✓ No signup</span>
                        <span>✓ Instant WPM</span>
                        <span>✓ Accuracy tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Step by step ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                How to Check Your Typing Speed Online — Step by Step
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                Here is the complete process using the free ToolStackHub typing test —
                from opening the tool to understanding your results.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Open the Typing Speed Test',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Go to{' '}
                        <Link href="/typing-test" className="text-brand-700 hover:underline font-medium">
                          toolstackhub.in/typing-test
                        </Link>{' '}
                        in any browser on any device. No account, extension, or installation required.
                        The test is ready immediately — one of the fastest-loading typing tests online.
                      </p>
                    ),
                  },
                  {
                    step: 2,
                    title: 'Choose Your Difficulty and Duration',
                    body: (
                      <div className="text-sm text-surface-600 space-y-2">
                        <p>Set two options before you start:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                          <div className="p-3 bg-surface-50 border border-surface-200 rounded-xl">
                            <div className="font-semibold text-surface-800 mb-1">Difficulty</div>
                            <ul className="space-y-0.5 text-xs text-surface-500">
                              <li><strong className="text-surface-700">Easy:</strong> Simple everyday vocabulary</li>
                              <li><strong className="text-surface-700">Medium:</strong> Standard office/general text</li>
                              <li><strong className="text-surface-700">Hard:</strong> Technical and academic language</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-surface-50 border border-surface-200 rounded-xl">
                            <div className="font-semibold text-surface-800 mb-1">Duration</div>
                            <ul className="space-y-0.5 text-xs text-surface-500">
                              <li><strong className="text-surface-700">30 seconds:</strong> Quick speed check</li>
                              <li><strong className="text-surface-700">1 minute:</strong> Standard baseline (recommended)</li>
                              <li><strong className="text-surface-700">2–5 minutes:</strong> Sustained speed / job prep</li>
                            </ul>
                          </div>
                        </div>
                        <p className="mt-2">For your first test, use <strong className="text-surface-800">Medium difficulty + 1 minute</strong> — this gives the most accurate and comparable baseline score.</p>
                      </div>
                    ),
                  },
                  {
                    step: 3,
                    title: 'Click the Input Area and Start Typing',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click the typing area (or anywhere on the page) and start typing
                        the passage shown above. The timer starts automatically with your
                        first keystroke — no button to press. Type as fast and accurately
                        as you can. Words turn green when correct and red when you make
                        an error — you can see exactly where you are losing time.
                      </p>
                    ),
                  },
                  {
                    step: 4,
                    title: 'Read Your Results',
                    body: (
                      <div className="text-sm text-surface-600 space-y-2">
                        <p>When the timer ends, your results appear immediately:</p>
                        <ul className="space-y-1 ml-4">
                          <li><strong className="text-surface-800">WPM:</strong> Your words per minute — the primary speed metric</li>
                          <li><strong className="text-surface-800">Accuracy:</strong> Percentage of words typed correctly</li>
                          <li><strong className="text-surface-800">Correct words:</strong> Total words that matched exactly</li>
                          <li><strong className="text-surface-800">Errors:</strong> Total words that did not match</li>
                          <li><strong className="text-surface-800">Benchmark bar:</strong> How you compare to average person, office worker, and professional typist</li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    step: 5,
                    title: 'Share Your Score or Retry',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click <strong>Share Score</strong> to copy a message with your WPM
                        and accuracy to your clipboard — ready to paste into LinkedIn, Slack,
                        or a job application. Click <strong>Try Again</strong> for a fresh
                        passage at the same settings, or <strong>Level Up</strong> to advance
                        to harder difficulty automatically.
                      </p>
                    ),
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

            {/* ── WPM benchmarks ────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                What Is a Good Typing Speed? The WPM Benchmark Guide
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Once you have your WPM score, here is exactly what it means — and what
                the next milestone to aim for looks like.
              </p>

              <div className="space-y-3">
                {[
                  { range: '0–20 WPM',   label: 'Hunt & Peck',     color: 'red',    desc: 'Using 1–2 fingers, looking at the keyboard. Very common for first-time computer users. The biggest speed gain available: switch to touch typing.', next: 'Focus entirely on learning home row finger placement before worrying about speed.' },
                  { range: '20–40 WPM',  label: 'Novice',           color: 'amber',  desc: 'Below the global average. Often happens with self-taught typing using inconsistent finger patterns. Functional but slow for professional work.', next: 'Practice touch typing consistently. Accept temporary slowdown while building correct muscle memory.' },
                  { range: '40–55 WPM',  label: 'Average',          color: 'yellow', desc: 'Around the global average for adults. Functional for most work but leaves significant time on the table for heavy keyboard users.', next: 'Focus on accuracy over speed. Once errors drop below 3%, speed will follow naturally.' },
                  { range: '55–70 WPM',  label: 'Above Average',    color: 'emerald',desc: 'Faster than most office workers. Comfortable touch typist who has built solid muscle memory. Good for professional environments.', next: 'Work on problem keys — the ones you consistently mistype. Target specific words that slow you down.' },
                  { range: '70–90 WPM',  label: 'Fast',             color: 'blue',   desc: 'Top 15% of typists. Common among programmers, writers, and administrative professionals. Speed that noticeably impacts daily productivity.', next: 'Practice with harder text including punctuation-heavy passages and technical vocabulary.' },
                  { range: '90+ WPM',    label: 'Expert',           color: 'violet', desc: 'Top 5% of typists. Professional typists, court reporters, and competitive typists. Meaningful advantage in any role involving heavy text output.', next: 'Work on consistency — maintaining expert speed under real working conditions, not just test conditions.' },
                ].map(b => (
                  <div key={b.range}
                    className={`p-4 bg-${b.color}-50 border border-${b.color}-200 rounded-xl`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-mono font-bold text-sm text-${b.color}-700 bg-${b.color}-100 px-2 py-0.5 rounded`}>{b.range}</span>
                      <span className={`font-display font-bold text-${b.color}-800`}>{b.label}</span>
                    </div>
                    <p className={`text-sm text-${b.color}-700 leading-relaxed mb-2`}>{b.desc}</p>
                    <div className={`text-xs text-${b.color}-600 bg-${b.color}-100 px-3 py-1.5 rounded-lg`}>
                      <strong>Next step:</strong> {b.next}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── How to improve ───────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                6 Proven Ways to Improve Your Typing Speed
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                These are not generic tips. They are the specific techniques that produce
                measurable WPM improvement — ranked by impact.
              </p>

              <div className="space-y-4">
                {[
                  {
                    rank: '01',
                    icon: '🏠',
                    title: 'Master the Home Row First',
                    impact: 'Highest impact',
                    impactColor: 'emerald',
                    body: 'Place your left fingers on A-S-D-F and right fingers on J-K-L-;. This is the home row — every key on the keyboard is one or two positions away. Every time you type a key, return to home row immediately. This single habit transforms hunt-and-peck into touch typing. It will feel slower for 2–3 weeks. Push through — the payoff is permanent.',
                  },
                  {
                    rank: '02',
                    icon: '👁️',
                    title: 'Stop Looking at the Keyboard',
                    impact: 'High impact',
                    impactColor: 'blue',
                    body: 'Looking at the keyboard while typing limits you to the speed at which your eyes can scan between screen and keys. Touch typists keep their eyes on the screen the entire time. Cover your keyboard with a cloth if necessary. The first week is frustrating — your speed will drop significantly. By week 3, you will be back to your original speed and accelerating past it.',
                  },
                  {
                    rank: '03',
                    icon: '🎯',
                    title: 'Focus on Accuracy Before Speed',
                    impact: 'High impact',
                    impactColor: 'blue',
                    body: 'Backspacing to fix an error takes more time than typing the word correctly the first time. If your accuracy is below 95%, deliberately slow down until errors disappear. Speed is a natural byproduct of accuracy — the opposite is rarely true. During practice, aim for 98%+ accuracy even if your WPM drops by 30%.',
                  },
                  {
                    rank: '04',
                    icon: '⏱️',
                    title: 'Practice 15 Minutes Daily — Not 2 Hours Weekly',
                    impact: 'Medium-high impact',
                    impactColor: 'amber',
                    body: 'Typing improvement is a motor skill — it lives in muscle memory, not conscious knowledge. Motor skills respond to frequent short sessions more than infrequent long ones. 15 minutes of deliberate daily practice will outperform a 2-hour Saturday session every time. After 4 weeks at 15 minutes/day, most people gain 10–15 WPM.',
                  },
                  {
                    rank: '05',
                    icon: '🔍',
                    title: 'Identify and Drill Your Slow Keys',
                    impact: 'Medium impact',
                    impactColor: 'amber',
                    body: 'Every typist has 3–5 keys they consistently mistype or hesitate on. These bottleneck your overall speed. After each typing test, notice which words slowed you down. Practice those specific letter combinations — not random passages. If you consistently fumble "qu" or "th", drill those bigrams specifically until they become automatic.',
                  },
                  {
                    rank: '06',
                    icon: '💪',
                    title: 'Use All Ten Fingers — Assign Keys Correctly',
                    impact: 'Medium impact',
                    impactColor: 'amber',
                    body: 'Each finger has specific key responsibilities. Left pinky handles Q-A-Z and Shift. Left ring handles W-S-X. Right thumb handles Space. Using the wrong finger — even if it feels natural — creates inefficiency that compounds over millions of keystrokes. Look up the standard finger map and enforce it during practice sessions even when it feels awkward.',
                  },
                ].map(tip => (
                  <div key={tip.rank} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-surface-900 text-white font-bold text-xs flex items-center justify-center">{tip.rank}</div>
                      <div className="text-lg">{tip.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-surface-900">{tip.title}</h3>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full bg-${tip.impactColor}-100 text-${tip.impactColor}-700`}>
                          {tip.impact}
                        </span>
                      </div>
                      <p className="text-sm text-surface-600 leading-relaxed">{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Typing speed for jobs ─────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Typing Speed Requirements by Job Role
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                If you are checking your speed for a job application or pre-employment
                assessment, here are the standard requirements by role.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Job Role</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Min WPM</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Accuracy</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: 'Data Entry',                   wpm: '60–80',   acc: '98%+', note: 'Speed and accuracy both critical' },
                      { role: 'Administrative / Secretary',   wpm: '50–60',   acc: '95%+', note: 'Consistent speed more important than peak' },
                      { role: 'Customer Service (Chat)',      wpm: '40–50',   acc: '95%+', note: 'Multi-tab awareness matters more than speed' },
                      { role: 'Transcription',                wpm: '80–100',  acc: '99%+', note: 'Highest accuracy requirement of any role' },
                      { role: 'Legal Secretary',              wpm: '70–90',   acc: '98%+', note: 'Specialized legal vocabulary required' },
                      { role: 'Medical Transcription',        wpm: '60–75',   acc: '99%+', note: 'Errors can have clinical consequences' },
                      { role: 'Software Developer',           wpm: '50–70',   acc: '95%+', note: 'No formal requirement but directly impacts output' },
                      { role: 'General Office',               wpm: '40–55',   acc: '90%+', note: 'Rarely specified but universally beneficial' },
                    ].map((row, i) => (
                      <tr key={row.role} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-900">{row.role}</td>
                        <td className="px-4 py-3 font-mono font-bold text-brand-700">{row.wpm}</td>
                        <td className="px-4 py-3 text-surface-600">{row.acc}</td>
                        <td className="px-4 py-3 text-surface-500 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                <strong>Pro tip:</strong> Before a typing test for a job, practice with the
                same test duration the employer uses. Most assessments are 3–5 minutes —
                not 1 minute. Sustained speed matters more than peak sprint speed.
              </div>
            </section>

            {/* ── Why this tool vs others ───────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Free Typing Tests Compared — Why ToolStackHub Ranks Better
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                There are dozens of free typing tests online. Here is how ours compares
                to the most popular alternatives.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Feature</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">ToolStackHub</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">10FastFingers</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">TypeRacer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Real-time word highlighting', us: '✅', f1: '✅', f2: '✅' },
                      { feature: 'No signup required',          us: '✅', f1: '✅', f2: '❌' },
                      { feature: 'Multiple time modes',         us: '✅ 4 modes', f1: '❌', f2: '❌' },
                      { feature: 'Difficulty levels',           us: '✅ Easy/Med/Hard', f1: '❌', f2: '❌' },
                      { feature: 'WPM benchmark comparison',   us: '✅', f1: '❌', f2: '❌' },
                      { feature: 'Mobile optimized',            us: '✅', f1: '⚠️ Partial', f2: '⚠️ Partial' },
                      { feature: 'Modern clean UI',             us: '✅', f1: '⚠️ Dated', f2: '⚠️ Dated' },
                      { feature: 'No ads during test',          us: '✅', f1: '❌ Has ads', f2: '❌ Has ads' },
                    ].map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-800">{row.feature}</td>
                        <td className="px-4 py-3 text-center text-emerald-700 font-medium">{row.us}</td>
                        <td className="px-4 py-3 text-center text-surface-500">{row.f1}</td>
                        <td className="px-4 py-3 text-center text-surface-500">{row.f2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────── */}
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
                      <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

            {/* ── Related tools ────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Related Free Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/typing-test',                  icon: '⌨️', label: 'Typing Speed Test',          desc: 'Take the free WPM test covered in this guide' },
                  { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',         desc: 'Count words and measure reading time in real time' },
                  { href: '/character-counter-online',     icon: '🔢', label: 'Character Counter Online',    desc: 'Count characters for platform limits and forms' },
                  { href: '/pomodoro-timer-online',        icon: '🍅', label: 'Pomodoro Timer Online',       desc: 'Structure your typing practice in 25-min sessions' },
                  { href: '/lorem-ipsum-generator',        icon: '📄', label: 'Lorem Ipsum Generator',       desc: 'Generate custom text passages for typing practice' },
                  { href: '/countdown-timer-online',       icon: '⏳', label: 'Countdown Timer Online',      desc: 'Set timed typing practice sessions with an alarm' },
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

            {/* ── Related blog posts ───────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                More Guides
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { href: '/blog/how-to-remove-duplicate-lines-from-text', emoji: '🧹', label: 'How to Remove Duplicate Lines from Text (Easy Guide)', desc: '5 methods compared — tool, Excel, Notepad++, Python' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xl shrink-0">
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

            {/* ── Final CTA ─────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-brand-200"
              style={{ background: 'linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-4xl mb-3">⌨️</div>
                <h3 className="font-display font-bold text-xl text-brand-900 mb-2">
                  Ready to Find Out How Fast You Type?
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  Take the free ToolStackHub typing speed test right now. Get your WPM,
                  accuracy, and a benchmark comparison in under 2 minutes. No signup,
                  no ads during the test, instant results.
                </p>
                <Link href="/typing-test"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
                  Take the Free WPM Test Now →
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-brand-600">
                  <span>✓ No signup required</span>
                  <span>✓ 4 time modes</span>
                  <span>✓ 3 difficulty levels</span>
                  <span>✓ Instant results</span>
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