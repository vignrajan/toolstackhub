import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG, tools } from '../../../data/tools';

export const metadata = {
  title: 'Free Utility Tools – QR Generator, Password, Calculators & More',
  description: 'Free online utility tools: QR code generator, password generator, EMI calculator, GST calculator, salary calculator, age calculator, BMI calculator, and more.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/utility` },
  openGraph: {
    title: 'Free Utility Tools – QR Generator, Password, Calculators & More',
    description: 'Free browser-based utility tools for everyday tasks. No signup required.',
    url: `${SITE_CONFIG.url}/tools/utility`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Utility Tools – QR Generator, Password, Calculators & More',
    description: 'Free utility tools: QR codes, passwords, EMI, GST, salary calculators and more.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Utility Tools Online',
      description: 'Free browser-based utility tools including QR code generator, password generator, EMI calculator, GST calculator, and more.',
      url: `${SITE_CONFIG.url}/tools/utility`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/tools/utility` },
      ],
    },
  ],
};

export default function UtilityToolsCategoryPage() {
  const utilityTools = tools.filter(t => t.category === 'utility');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Utility Tools</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-3xl">🛠️</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Utility Tools Online
                </h1>
                <p className="text-surface-500 mt-1">{utilityTools.length} tools · All free · No signup</p>
              </div>
            </div>
            <p className="text-surface-600 text-lg leading-relaxed max-w-3xl">
              QR code generator, password manager, EMI calculators, GST tools, salary calculators,
              age calculator, BMI calculator, and more. All tools run in your browser — private,
              free, and instant. No signup, no watermarks.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free Forever', '🇮🇳 India-Specific Finance Tools', '🔒 Private', '⚡ Instant', '📱 Mobile Ready'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Tools grid — dynamic from data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {utilityTools.map(tool => (
              <Link
                key={tool.slug}
                href={tool.href || `/${tool.slug}`}
                className="group flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-xl">
                    {tool.icon}
                  </div>
                  <div className="font-semibold text-sm text-surface-900 group-hover:text-brand-700 transition-colors leading-snug">
                    {tool.name}
                  </div>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed line-clamp-2">{tool.description}</p>
              </Link>
            ))}
          </div>

          {/* SEO content */}
          <div className="space-y-10 max-w-3xl">
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                India-Specific Finance Calculators
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  Most global utility tool sites lack India-specific finance calculators that
                  account for Indian tax rules, salary structures, and banking norms. ToolStackHub
                  is built with India-first finance tools: the{' '}
                  <Link href="/tools/gst-calculator" className="text-brand-700 hover:underline font-medium">GST calculator</Link>{' '}
                  includes all current GST slabs (5%, 12%, 18%, 28%), the{' '}
                  <Link href="/tools/salary-calculator" className="text-brand-700 hover:underline font-medium">salary calculator</Link>{' '}
                  handles CTC-to-in-hand with PF, professional tax, and HRA deductions, and the{' '}
                  <Link href="/tools/emi-calculator" className="text-brand-700 hover:underline font-medium">EMI calculator</Link>{' '}
                  computes home loan, car loan, and personal loan EMIs with amortization schedules.
                </p>
                <p>
                  The{' '}
                  <Link href="/tools/professional-tax-calculator" className="text-brand-700 hover:underline font-medium">professional tax calculator</Link>{' '}
                  includes state-wise PT slabs for Maharashtra, Karnataka, Andhra Pradesh, Tamil Nadu,
                  and West Bengal. The{' '}
                  <Link href="/tools/hra-calculator" className="text-brand-700 hover:underline font-medium">HRA calculator</Link>{' '}
                  follows the Income Tax Act Section 10(13A) formula to compute your actual HRA exemption.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Popular Utility Tools
              </h2>
              <div className="space-y-3 text-surface-600 leading-relaxed">
                <p>
                  The{' '}
                  <Link href="/tools/qr-code-generator" className="text-brand-700 hover:underline font-medium">QR code generator</Link>{' '}
                  creates scannable QR codes for URLs, text, and contact details — used by 180,000+
                  people monthly. The{' '}
                  <Link href="/tools/password-generator" className="text-brand-700 hover:underline font-medium">password generator</Link>{' '}
                  creates cryptographically strong passwords with custom length and character sets,
                  running entirely offline in your browser. The{' '}
                  <Link href="/tools/age-calculator" className="text-brand-700 hover:underline font-medium">age calculator</Link>{' '}
                  computes exact age from a date of birth in years, months, and days — useful for
                  form filling, KYC documents, and birthday planning.
                </p>
              </div>
            </section>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
