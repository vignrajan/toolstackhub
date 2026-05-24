import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RemoveDuplicateLines from '../../components/tools/RemoveDuplicateLines';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Unique Lines Generator – Extract Unique Lines Free',
  description: 'Generate a list of unique lines from any text online free. Remove all duplicates and keep only distinct lines. No signup required.',
  alternates: { canonical: `${SITE_CONFIG.url}/unique-lines-generator` },
  openGraph: {
    title: 'Unique Lines Generator – Extract Unique Lines Free',
    description: 'Generate a list of unique lines from any text online free. Remove all duplicates and keep only distinct lines. No signup required.',
    url: `${SITE_CONFIG.url}/unique-lines-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Lines Generator – Extract Unique Lines Free',
    description: 'Generate a list of unique lines from any text online free. Remove all duplicates and keep only distinct lines. No signup required.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Unique Lines Generator Online Free – Extract Unique Lines Instantly',
      description: 'Generate a list of unique lines from any text online free. Remove all duplicates and keep only distinct lines. No signup required. Try now!',
      url: `${SITE_CONFIG.url}/unique-lines-generator`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` },
        { '@type': 'ListItem', position: 3, name: 'Unique Lines Generator Online – Extract Only Unique Lines from Text',       item: `${SITE_CONFIG.url}/unique-lines-generator` },
      ],
    },
  ],
};

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
                <li><Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">Unique Lines Generator Online – Extract Only Unique Lines from Text</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Unique Lines Generator Online – Extract Only Unique Lines from Text
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Extract only the unique, distinct lines from any text input. This is the same as removing duplicates but framed as a generator — you are building a clean set of unique entries. Perfect for generating unique keyword sets, building unique ID lists, and extracting distinct values from data exports.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '🔐 No Data Stored', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RemoveDuplicateLines />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Duplicate Line Remover" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">All Duplicate Removal Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/remove-duplicate-lines-online',          label: 'Remove Duplicate Lines Online' },
                { href: '/remove-duplicate-lines-case-sensitive',  label: 'Remove Duplicate Lines Case Sensitive' },
                { href: '/remove-duplicate-lines-ignore-case',     label: 'Remove Duplicate Lines Ignore Case' },
                { href: '/remove-duplicate-words-online',          label: 'Remove Duplicate Words Online' },
                { href: '/remove-duplicate-sentences',             label: 'Remove Duplicate Sentences' },
                { href: '/remove-duplicate-paragraphs',            label: 'Remove Duplicate Paragraphs' },
                { href: '/unique-lines-generator',                 label: 'Unique Lines Generator' },
                { href: '/remove-duplicate-csv-rows',              label: 'Remove Duplicate CSV Rows' },
                { href: '/remove-duplicate-list-items',            label: 'Remove Duplicate List Items' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-3 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Text Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/word-counter-online',      label: 'Word Counter Online',      desc: 'Count words, characters, sentences, and reading time' },
                { href: '/character-counter-online', label: 'Character Counter Online', desc: 'Count characters with Twitter, SMS, and meta limits' },
                { href: '/case-converter-online',    label: 'Case Converter Online',    desc: 'Convert text to UPPERCASE, lowercase, Title Case and more' },
                { href: '/lorem-ipsum-generator',    label: 'Lorem Ipsum Generator',    desc: 'Generate placeholder text by paragraphs, sentences, or words' },
              ].map(l => (
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
