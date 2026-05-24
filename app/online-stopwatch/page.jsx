import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import Stopwatch from '../../components/tools/Stopwatch';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Stopwatch Online Free – Millisecond Precision with Lap Timer',
  description: 'Free online stopwatch with millisecond precision and unlimited lap recording. Keyboard shortcuts: Space, L, R. Continues in background. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/online-stopwatch` },
  openGraph: {
    title: 'Stopwatch Online Free – Millisecond Precision with Lap Timer',
    description: 'Free online stopwatch with millisecond precision and unlimited lap recording. Keyboard shortcuts: Space, L, R. Continues in background. No signup. Try now!',
    url: `${SITE_CONFIG.url}/online-stopwatch`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free',
      description: 'Free online stopwatch with millisecond precision and unlimited lap recording. Keyboard shortcuts: Space, L, R. Continues in background. No signup. Try now!',
      url: `${SITE_CONFIG.url}/online-stopwatch`,
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
        { '@type': 'ListItem', position: 3, name: 'Free', item: `${SITE_CONFIG.url}/online-stopwatch` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/pomodoro-timer-online', label: 'Pomodoro Timer Online', desc: 'Structured focus sessions with breaks' },
              { href: '/countdown-timer-online', label: 'Countdown Timer Online', desc: 'Count down from a set duration' },
              { href: '/age-calculator-online', label: 'Age Calculator Online', desc: 'Calculate exact time elapsed' },
              { href: '/unix-timestamp-converter', label: 'Unix Timestamp Converter', desc: 'Convert elapsed time to timestamps' },
];

const variantLinks = [
  { href: '/online-stopwatch-with-laps', label: 'Online Stopwatch with Laps' },
              { href: '/stopwatch-milliseconds-online', label: 'Stopwatch Milliseconds Online' },
              { href: '/split-timer-online', label: 'Split Timer Online' },
              { href: '/lap-timer-online', label: 'Lap Timer Online' },
];

const faqs = [
  { q: 'How accurate is the stopwatch?', a: 'Millisecond precision using the performance.now() API — more accurate than Date.now().' },
  { q: 'Does it work when I switch tabs?', a: 'Yes — timing continues in the background and the display updates correctly when you return.' },
  { q: 'Can I record lap times?', a: 'Yes — press L or click Lap to record unlimited split times with individual lap durations shown.' },
  { q: 'What are the keyboard shortcuts?', a: 'Space to start/pause, L to record a lap, and R to reset the timer and clear all lap records.' },
  { q: 'Is the stopwatch free?', a: 'Yes — completely free with no account or download required.' },
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
                <li className="text-surface-800 font-medium">Free</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Online Stopwatch – Precise Millisecond Timing with Unlimited Laps
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Free online stopwatch with millisecond precision and unlimited lap recording. Keyboard shortcuts: Space, L, R. Continues in background. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Stopwatch />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏃', title: 'Athletic Training', desc: 'Time running laps, swimming sets, cycling intervals, and workout circuits with millisecond accuracy.' },
              { icon: '⏱️', title: 'Productivity Tracking', desc: 'Measure exactly how long individual tasks take to improve time estimates and find inefficiencies.' },
              { icon: '🎤', title: 'Presentation Rehearsal', desc: 'Time presentations, speeches, and pitches to ensure they fit within allotted time slots.' },
              { icon: '🧪', title: 'Scientific Experiments', desc: 'Record precise timing data for controlled experiments and reaction time tests.' },
              { icon: '🍳', title: 'Cooking Timing', desc: 'Track cooking steps with accurate timing when multiple recipe components have different cook times.' },
              { icon: '💻', title: 'Performance Testing', desc: 'Manually benchmark code execution time and API response times during development.' },
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
