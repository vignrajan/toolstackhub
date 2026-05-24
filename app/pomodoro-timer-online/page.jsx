import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import PomodoroTimer from '../../components/tools/PomodoroTimer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Pomodoro Timer Online – 25-Minute Focus Sessions',
  description: 'Free Pomodoro timer with 25-minute focus sessions and 5-minute breaks. Customizable. Audio alarm. Session counter. No signup, no install.',
  alternates: { canonical: `${SITE_CONFIG.url}/pomodoro-timer-online` },
  openGraph: {
    title: 'Pomodoro Timer Online – 25-Minute Focus Sessions',
    description: 'Free Pomodoro timer with 25-minute focus sessions and 5-minute breaks. Customizable. Audio alarm. Session counter. No signup, no install.',
    url: `${SITE_CONFIG.url}/pomodoro-timer-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pomodoro Timer Online – 25-Minute Focus Sessions',
    description: 'Free Pomodoro timer with 25-minute focus sessions and 5-minute breaks. Customizable. Audio alarm. Session counter. No signup, no install.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free Pomodoro Timer',
      description: 'Free Pomodoro timer with 25-minute focus sessions and 5-minute breaks. Customizable. Audio alarm. Session counter. No signup, no install. Try now!',
      url: `${SITE_CONFIG.url}/pomodoro-timer-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Free Pomodoro Timer', item: `${SITE_CONFIG.url}/pomodoro-timer-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/online-stopwatch', label: 'Online Stopwatch', desc: 'Measure elapsed time with lap timer' },
              { href: '/countdown-timer-online', label: 'Countdown Timer Online', desc: 'Set a custom countdown duration' },
              { href: '/word-counter-online', label: 'Word Counter Online', desc: 'Count output from each Pomodoro session' },
              { href: '/random-number-generator', label: 'Random Number Generator', desc: 'Pick a random task to focus on' },
];

const variantLinks = [
];

const faqs = [
  { q: 'What is the Pomodoro Technique?', a: 'A time management method by Francesco Cirillo: 25-minute focused work sessions separated by 5-minute breaks to improve focus.' },
  { q: 'Can I customize the timer durations?', a: 'Yes — adjust focus time, short break, and long break durations to suit your personal work rhythm.' },
  { q: 'Does it make a sound when the timer ends?', a: 'Yes — an audio alarm plays at the end of each session.' },
  { q: 'Is the Pomodoro timer free?', a: 'Yes — completely free with no download or account required.' },
  { q: 'Does it work in the background?', a: 'Yes — the timer continues running accurately when you switch browser tabs.' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li>
                  <Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">
                    Utility Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free Pomodoro Timer</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Pomodoro Timer Online – Boost Productivity with Structured Focus Sessions
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Free Pomodoro timer with 25-minute focus sessions and 5-minute breaks. Customizable. Audio alarm. Session counter. No signup, no install. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PomodoroTimer />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Pomodoro Timer" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '💻', title: 'Deep Work Coding', desc: 'Structure long coding sessions into focused 25-minute sprints to maintain concentration without burnout.' },
              { icon: '📚', title: 'Study Sessions', desc: 'Use Pomodoro intervals for exam preparation — spaced studying improves memory retention significantly.' },
              { icon: '✍️', title: 'Writing Projects', desc: "Break through writer's block by committing to write for exactly 25 minutes before a guilt-free break." },
              { icon: '🏠', title: 'Remote Work', desc: 'Maintain work-life separation and avoid overworking by structuring your home office workday.' },
              { icon: '📋', title: 'Task Management', desc: 'Track productivity by counting completed Pomodoros — each represents ~25 minutes of focused output.' },
              { icon: '🎨', title: 'Creative Projects', desc: 'Use structured focus sessions for design, illustration, and other creative work requiring sustained attention.' },
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

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {variantLinks.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
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
