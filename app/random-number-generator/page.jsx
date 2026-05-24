import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RandomNumber from '../../components/tools/RandomNumber';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Random Number Generator Online Free – Any Range, Instant Results',
  description: 'Generate random numbers online free. Set min/max range, integers or decimals, no duplicates, bulk up to 1000. Statistics included. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/random-number-generator` },
  openGraph: {
    title: 'Random Number Generator Online Free – Any Range, Instant Results',
    description: 'Generate random numbers online free. Set min/max range, integers or decimals, no duplicates, bulk up to 1000. Statistics included. No signup. Try now!',
    url: `${SITE_CONFIG.url}/random-number-generator`,
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
      name: 'Free Random Number Generator',
      description: 'Generate random numbers online free. Set min/max range, integers or decimals, no duplicates, bulk up to 1000. Statistics included. No signup. Try now!',
      url: `${SITE_CONFIG.url}/random-number-generator`,
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
        { '@type': 'ListItem', position: 3, name: 'Free Random Number Generator', item: `${SITE_CONFIG.url}/random-number-generator` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/password-generator-online', label: 'Password Generator Online', desc: 'Generate secure random passwords' },
              { href: '/uuid-generator-online', label: 'UUID Generator Online', desc: 'Generate unique random identifiers' },
              { href: '/age-calculator-online', label: 'Age Calculator Online', desc: 'Calculate with random birth dates' },
              { href: '/percentage-calculator-online', label: 'Percentage Calculator Online', desc: 'Calculate percentages of numbers' },
];

const variantLinks = [
  { href: '/random-number-1-to-100', label: 'Random Number 1 to 100' },
              { href: '/lottery-number-generator', label: 'Lottery Number Generator' },
              { href: '/dice-roller-online', label: 'Dice Roller Online' },
              { href: '/random-winner-picker', label: 'Random Winner Picker' },
];

const faqs = [
  { q: 'How random are the generated numbers?', a: 'Uses JavaScript Math.random() — pseudorandom, sufficient for games and simulations. Not for cryptographic use.' },
  { q: 'Can I generate decimal numbers?', a: 'Yes — toggle Include Decimals for floating-point numbers with 4 decimal places.' },
  { q: 'Can I prevent duplicate numbers?', a: 'Yes — enable No Duplicates mode. The range must be large enough for the requested quantity.' },
  { q: 'What is the maximum quantity?', a: 'Up to 1000 numbers per generation.' },
  { q: 'Is the generator free?', a: 'Yes — completely free with no signup required.' },
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
                <li className="text-surface-800 font-medium">Free Random Number Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Random Number Generator Online – Generate Numbers in Any Range Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Generate random numbers online free. Set min/max range, integers or decimals, no duplicates, bulk up to 1000. Statistics included. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RandomNumber />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Random Number Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎲', title: 'Games & Dice Rolls', desc: 'Simulate dice rolls (1–6), card draws, and random game events for tabletop games and probability education.' },
              { icon: '🎰', title: 'Lottery & Giveaways', desc: 'Pick lottery numbers (6 from 1–49) or randomly select a winner from a numbered contest list.' },
              { icon: '🧪', title: 'Software Testing', desc: 'Generate random test data values for unit tests, load tests, and fuzz testing of input validation.' },
              { icon: '📊', title: 'Statistics & Research', desc: 'Generate random samples for statistical research, Monte Carlo simulations, and data science.' },
              { icon: '🎯', title: 'Decision Making', desc: 'Use random number generation as a neutral tiebreaker when choosing between equally viable options.' },
              { icon: '🎮', title: 'Game Development', desc: 'Generate random seeds, item drops, level layouts, and procedural content for game design.' },
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
