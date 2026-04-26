import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import TypingSpeedTest from '../../components/tools/TypingSpeedTest';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Typing Speed Test Online Free – Check Your WPM Instantly',
  description: 'Test your typing speed online free. Find your WPM, accuracy, and error count with a timed typing test. 30s, 1min, 2min, 5min modes. No signup required. Try now!',
  keywords: [
    'typing speed test',
    'typing test online',
    'wpm test',
    'typing test free',
    'words per minute test',
    'online typing test',
    'typing speed checker',
    'typing accuracy test',
    'free typing test',
    'keyboard typing test',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/typing-test` },
  openGraph: {
    title: 'Typing Speed Test Online Free – Check Your WPM Instantly',
    description: 'Test your typing speed free. WPM, accuracy, and errors tracked in real time. 30s to 5-minute modes. No signup.',
    url: `${SITE_CONFIG.url}/typing-test`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typing Speed Test – Free WPM Test Online',
    description: 'Check your WPM and accuracy with a free online typing speed test. 30s, 1min, 5min modes. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a good typing speed in WPM?',
    a: 'The average person types at 40 WPM. The average office worker types at 55 WPM. Professional typists reach 75–100 WPM. Touch typists (who type without looking at the keyboard) average 60–80 WPM. Competitive typists can exceed 120 WPM. If you are above 50 WPM you are faster than most people. Above 70 WPM puts you in the top 20% of typists.',
  },
  {
    q: 'How is WPM calculated?',
    a: 'WPM (Words Per Minute) is calculated by counting the number of correctly typed words divided by the time elapsed in minutes. A "word" in typing tests is standardized as 5 characters — so typing "hello world" counts as 2.2 words. This standardization ensures fair comparison regardless of whether the test passage uses long or short words.',
  },
  {
    q: 'How can I improve my typing speed?',
    a: 'The most effective methods are: (1) Learn touch typing — use all 10 fingers without looking at the keyboard. (2) Practice daily — even 15 minutes per day shows improvement within weeks. (3) Focus on accuracy first — speed follows naturally when you stop making errors. (4) Use proper posture and finger placement on home row keys (ASDF JKL;). (5) Take tests regularly to track your progress over time.',
  },
  {
    q: 'What typing speed do employers require?',
    a: 'Data entry jobs typically require 60–80 WPM. Administrative and secretarial roles often require 50–60 WPM. Customer service and chat support jobs usually require 40–50 WPM with high accuracy. Transcription roles may require 80+ WPM. Most general office jobs do not specify a minimum but benefit from 45+ WPM.',
  },
  {
    q: 'Is the typing test free?',
    a: 'Yes — completely free with no account, no signup, and no usage limits. Take as many tests as you need across all difficulty levels and time durations.',
  },
  {
    q: 'Does the test work on mobile and tablet?',
    a: 'Yes — the test is fully responsive and works on iPhone, Android phones, and tablets. The on-screen keyboard appears automatically on mobile. Note that WPM on touch screens is typically lower than on physical keyboards.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Typing Speed Test Online',
      description: 'Free online typing speed test. Measures WPM, accuracy, and errors in real time. Available in easy, medium, and hard difficulty with 30-second, 1-minute, 2-minute, and 5-minute timed modes.',
      url: `${SITE_CONFIG.url}/typing-test`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Real-time WPM calculation',
        'Accuracy and error tracking',
        'Easy, medium, and hard difficulty levels',
        '30-second, 1-minute, 2-minute, and 5-minute modes',
        'Color-coded correct and incorrect word highlighting',
        'WPM benchmark comparison',
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
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Typing Speed Test', item: `${SITE_CONFIG.url}/typing-test` },
      ],
    },
  ],
};

// ── WPM benchmarks ────────────────────────────────────────────
const benchmarks = [
  { range: '0–20 WPM',   label: 'Hunt & Peck',    desc: 'Using 1–2 fingers, looking at the keyboard. Very slow but common for beginners.',          color: 'red' },
  { range: '20–40 WPM',  label: 'Novice',          desc: 'Below average. Learning finger placement. Most new typists fall in this range.',            color: 'amber' },
  { range: '40–60 WPM',  label: 'Average',         desc: 'Around the global average. Functional for most work but room for improvement.',             color: 'yellow' },
  { range: '60–80 WPM',  label: 'Above Average',   desc: 'Faster than most office workers. Comfortable touch typist. Good for professional work.',    color: 'emerald' },
  { range: '80–100 WPM', label: 'Fast',             desc: 'Top 10% of typists. Professional-grade speed. Common among programmers and writers.',       color: 'blue' },
  { range: '100+ WPM',   label: 'Expert',           desc: 'World-class typing speed. Competitive typists and professional stenographers.',             color: 'violet' },
];

// ── Tips ──────────────────────────────────────────────────────
const tips = [
  {
    icon: '🏠',
    title: 'Master the Home Row',
    desc: 'Place your left fingers on ASDF and right fingers on JKL; — this is the home row. Every key on the keyboard is one or two positions away. Always return to home row between keystrokes.',
  },
  {
    icon: '👁️',
    title: 'Stop Looking at the Keyboard',
    desc: 'Touch typing — keeping your eyes on the screen — is the single biggest speed multiplier. It feels slow at first but within 2–3 weeks of practice becomes faster than looking down.',
  },
  {
    icon: '🎯',
    title: 'Accuracy Before Speed',
    desc: 'Fixing errors takes more time than typing slowly. If your accuracy is below 95%, slow down until you stop making mistakes. Speed comes naturally when errors disappear.',
  },
  {
    icon: '⏱️',
    title: 'Practice 15 Minutes Daily',
    desc: 'Daily short sessions beat occasional long ones. 15 minutes of focused practice every day improves WPM faster than one 2-hour session per week. Consistency is everything.',
  },
  {
    icon: '💪',
    title: 'Use All Ten Fingers',
    desc: 'Each finger is responsible for specific keys. Left pinky handles Q, A, Z and Shift. Right thumb handles Space. Using all ten fingers distributes the workload and dramatically increases speed.',
  },
  {
    icon: '📈',
    title: 'Track Your Progress',
    desc: 'Take this test every week and record your WPM. Seeing measurable improvement — even 2–3 WPM per week — is motivating and confirms your practice is working.',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function TypingTestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

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
                <li><Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Typing Speed Test</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Typing Speed Test – Check Your WPM & Accuracy Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Find out exactly how fast you type. Real-time WPM, accuracy, and error
              tracking with color-coded feedback. Choose easy, medium, or hard difficulty
              and test durations from 30 seconds to 5 minutes. Free, no signup, works
              on any device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '⚡ Real-Time WPM',
                '🎯 Accuracy Tracking',
                '📊 WPM Benchmark',
                '⏱️ 4 Time Modes',
                '🔒 No Signup',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TypingSpeedTest />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Typing Speed Test" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Free Online Typing Speed Test – Measure Your WPM Instantly
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>typing speed test online</strong> measures how fast you
                type in words per minute (WPM) with real-time accuracy tracking and
                color-coded word-by-word feedback. The test is simple: a passage of text
                appears on screen and you type it as fast and accurately as possible before
                the timer runs out. Your WPM, accuracy percentage, and error count are
                calculated and displayed the moment the test ends.
              </p>
              <p>
                Unlike other typing tests that only show you a final WPM number, this tool
                highlights every word as correct (green) or incorrect (red) in real time
                as you type — so you can immediately see which words slow you down. Choose
                from three difficulty levels to match your current skill level: easy passages
                use simple vocabulary, medium uses everyday language, and hard uses complex
                technical and academic writing.
              </p>
              <p>
                Whether you want to <strong>check your typing speed</strong> before applying
                for a job, use it as a <strong>WPM test online</strong> to track your
                improvement over time, take a <strong>1 minute typing test</strong> for a
                quick benchmark, or practice with a <strong>5 minute typing test</strong>
                for endurance — this tool covers every use case with professional-grade
                accuracy measurement.
              </p>
            </div>
          </section>

          {/* Section 2 — How to use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Take the Typing Speed Test
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '⚙️', title: 'Choose Difficulty',    desc: 'Select Easy, Medium, or Hard based on your current skill level. Easy uses simple words, Hard uses complex vocabulary.' },
                { step: '02', icon: '⏱️', title: 'Set Test Duration',    desc: 'Choose 30 seconds for a quick check, 1 minute for the standard test, 2 minutes for practice, or 5 minutes for endurance.' },
                { step: '03', icon: '⌨️', title: 'Start Typing',         desc: 'Click the input area and start typing the passage above. The timer starts automatically with your first keystroke.' },
                { step: '04', icon: '🎨', title: 'Watch the Feedback',   desc: 'Words turn green when correct and red when wrong in real time. Your live WPM and accuracy update with every word.' },
                { step: '05', icon: '📊', title: 'Read Your Results',     desc: 'When time ends, see your WPM, accuracy, correct words, and errors on the results screen with a benchmark comparison.' },
                { step: '06', icon: '🔄', title: 'Improve & Retry',       desc: 'Click Try Again for a fresh passage at the same difficulty, or Level Up to advance to harder text.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — WPM Benchmarks */}
          <section aria-labelledby="benchmarks-heading">
            <h2 id="benchmarks-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Typing Speed Benchmarks – What Is a Good WPM?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
              <p>
                WPM varies significantly based on age, experience, and typing method.
                The average adult types at approximately 40 WPM. Touch typists who use
                all ten fingers without looking at the keyboard average 60–80 WPM.
                Professional typists and transcriptionists typically reach 80–100 WPM.
                Here is how typing speeds are categorized:
              </p>
            </div>
            <div className="space-y-3">
              {benchmarks.map(b => (
                <div key={b.range}
                  className={`flex items-start gap-4 p-4 bg-${b.color}-50 border border-${b.color}-200 rounded-xl`}>
                  <div className={`font-mono font-bold text-sm text-${b.color}-700 w-20 shrink-0 pt-0.5`}>{b.range}</div>
                  <div className={`font-semibold text-${b.color}-800 w-28 shrink-0`}>{b.label}</div>
                  <div className={`text-sm text-${b.color}-700 leading-relaxed`}>{b.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Tips */}
          <section aria-labelledby="tips-heading">
            <h2 id="tips-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              6 Proven Tips to Improve Your Typing Speed
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tips.map(tip => (
                <div key={tip.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-brand-200 transition-colors">
                  <span className="text-2xl shrink-0">{tip.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{tip.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{tip.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Typing Test for Jobs, Students & Professionals
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>typing test for jobs</strong> is one of the most common
                pre-employment assessments — particularly for data entry, administrative,
                secretarial, transcription, customer service, and coding roles. Most
                employers require a minimum of 40–60 WPM. Taking a timed test regularly
                on this tool lets you know exactly where you stand before walking into
                an assessment.
              </p>
              <p>
                For students, a <strong>typing speed test for students</strong> provides
                a baseline and tracks improvement over time. College students who type
                faster can complete assignments more efficiently, take better notes in
                real time, and perform better in online exams with typed responses.
              </p>
              <p>
                For developers and writers, a <strong>words per minute test</strong> is
                a practical benchmark for productivity. A developer typing at 30 WPM
                instead of 60 WPM spends twice as long at the keyboard to produce the
                same amount of code — even if their thinking speed is identical. Improving
                typing speed is one of the few productivity improvements that applies to
                literally every task you do at a computer.
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

          {/* Section 7 — Variant pages */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Typing Test Modes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/typing-test-1-minute',          label: '1 Minute Typing Test',          desc: 'The standard 60-second typing speed benchmark test' },
                { href: '/typing-test-5-minutes',         label: '5 Minute Typing Test',          desc: 'Extended test for endurance and sustained accuracy' },
                { href: '/wpm-test-online',               label: 'WPM Test Online',               desc: 'Words per minute test with real-time feedback' },
                { href: '/typing-test-for-jobs',          label: 'Typing Test for Jobs',          desc: 'Employment-standard typing assessment format' },
                { href: '/typing-test-for-beginners',     label: 'Typing Test for Beginners',     desc: 'Easy passages designed for new typists learning the keyboard' },
                { href: '/advanced-typing-test',          label: 'Advanced Typing Test',          desc: 'Hard technical passages for expert typists' },
                { href: '/60-second-typing-test',         label: '60 Second Typing Test',         desc: 'Classic 1-minute timed typing challenge' },
                { href: '/typing-accuracy-test',          label: 'Typing Accuracy Test',          desc: 'Focus on accuracy percentage over raw speed' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-brand-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 8 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/word-counter-online',         icon: '📝', label: 'Word Counter Online',         desc: 'Count words, characters, and reading time in your typed text' },
                { href: '/character-counter-online',    icon: '🔢', label: 'Character Counter Online',    desc: 'Count characters for platform-specific text limits' },
                { href: '/pomodoro-timer-online',       icon: '🍅', label: 'Pomodoro Timer Online',       desc: 'Use structured 25-minute sessions to practice typing consistently' },
                { href: '/online-stopwatch',            icon: '⏱️', label: 'Online Stopwatch',            desc: 'Time your typing practice sessions with millisecond precision' },
                { href: '/ai-prompt-generator-online',  icon: '🤖', label: 'AI Prompt Generator',         desc: 'Generate text prompts to practice typing different content styles' },
                { href: '/lorem-ipsum-generator',       icon: '📄', label: 'Lorem Ipsum Generator',       desc: 'Generate practice text passages for typing exercises' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}