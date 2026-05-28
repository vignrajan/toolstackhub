import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import CronBuilder from '../../components/tools/CronBuilder';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Cron Expression Builder – Generate & Validate Cron Jobs Free',
  description: 'Build cron expressions with a visual editor and get instant human-readable descriptions. 12 presets, field-by-field editing, copy button. Free, browser-based.',
  alternates: { canonical: `${SITE_CONFIG.url}/cron-expression-builder-online` },
  openGraph: {
    title: 'Cron Expression Builder – Generate & Validate Cron Jobs Free',
    description: 'Build and validate cron expressions with human-readable output. Free, instant.',
    url: `${SITE_CONFIG.url}/cron-expression-builder-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cron Expression Builder – Generate Cron Jobs Free',
    description: 'Visual cron expression builder with human-readable descriptions and 12 presets.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What is a cron expression?', a: 'A cron expression is a string of 5 fields (minute hour day month weekday) that defines a schedule for recurring tasks. Used by cron jobs on Linux/Unix, AWS EventBridge, GitHub Actions, and many other schedulers.' },
  { q: 'What does */5 mean in a cron expression?', a: '*/5 means "every 5 units". In the minute field, */5 means every 5 minutes. In the hour field, */6 means every 6 hours. The / character is the step operator.' },
  { q: 'How do I run a cron job on weekdays only?', a: 'Use 1-5 in the weekday field (Monday=1 through Friday=5). Example: 0 9 * * 1-5 runs at 9:00 AM on every weekday.' },
  { q: 'Is this cron builder free?', a: 'Yes — completely free, no signup required, runs entirely in your browser.' },
  { q: 'Does this work with AWS EventBridge / GitHub Actions?', a: 'Mostly yes. Standard 5-field cron expressions work across most platforms. AWS EventBridge uses a 6-field format with an additional year field. GitHub Actions uses the standard 5-field format.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Cron Expression Builder',
      url: `${SITE_CONFIG.url}/cron-expression-builder-online`,
      description: 'Free cron expression builder with visual field editor, human-readable descriptions, and 12 common presets. No signup required.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'Cron Builder',    item: `${SITE_CONFIG.url}/cron-expression-builder-online` },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

export default function CronBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/developer" className="hover:text-brand-600 transition-colors">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Cron Expression Builder</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Cron Expression Builder — Generate & Validate Cron Jobs
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Build cron expressions with a visual field editor. Get instant human-readable descriptions,
              use 12 common presets, and copy your expression. Works with Linux cron, AWS EventBridge,
              GitHub Actions, and any standard cron scheduler.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '⚡ Instant Description', '📋 12 Presets', '💻 All Platforms', '🔒 Browser-Only'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><CronBuilder /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <AdBanner variant="content" />
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Cron Syntax Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-surface-50 border border-surface-200">
                  <th className="px-4 py-2 text-left font-semibold text-surface-700">Field</th>
                  <th className="px-4 py-2 text-left font-semibold text-surface-700">Allowed values</th>
                  <th className="px-4 py-2 text-left font-semibold text-surface-700">Example</th>
                </tr></thead>
                <tbody className="divide-y divide-surface-100">
                  {[['Minute','0–59','*/15 = every 15 min'],['Hour','0–23','0 = midnight, 12 = noon'],['Day','1–31','1 = 1st of month'],['Month','1–12','1 = January, 12 = December'],['Weekday','0–6','0 = Sunday, 1 = Monday']].map(([f,v,e]) => (
                    <tr key={f} className="border-b border-surface-100">
                      <td className="px-4 py-2 font-medium text-surface-800">{f}</td>
                      <td className="px-4 py-2 font-mono text-surface-600">{v}</td>
                      <td className="px-4 py-2 text-surface-500 text-xs">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                  <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.q}<span className="text-surface-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedToolsCluster currentSlug="cron-expression-builder" />
        </div>
      </main>
      <Footer />
    </>
  );
}
