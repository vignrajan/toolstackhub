import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RemoveDuplicateLines from '../../components/tools/RemoveDuplicateLines';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Remove Duplicate Lines Ignore Case – Free Online Tool',
  description: 'Remove duplicate lines ignoring capitalization online free. "Apple", "APPLE", and "apple" all treated as duplicates. No signup needed. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/remove-duplicate-lines-ignore-case` },
  openGraph: {
    title: 'Remove Duplicate Lines Ignore Case – Free Online Tool',
    description: 'Remove duplicate lines ignoring capitalization online free. "Apple", "APPLE", and "apple" all treated as duplicates. No signup needed. Try now!',
    url: `${SITE_CONFIG.url}/remove-duplicate-lines-ignore-case`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Duplicate Lines Ignore Case – Free Online Tool',
    description: 'Remove duplicate lines ignoring capitalization online free. "Apple", "APPLE", and "apple" all treated as duplicates. No signup needed.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  { q: 'What does ignore-case matching mean?', a: '"Apple", "APPLE", and "apple" are all treated as the same line. Any line that matches another line when lowercased is considered a duplicate.' },
  { q: 'When should I use ignore-case mode?', a: 'Use it when capitalization differences are not meaningful — city names, product names, usernames, or any list where you want "New York" and "new york" treated as the same entry.' },
  { q: 'Which version of a duplicate is kept?', a: 'The first occurrence is kept exactly as written. The capitalization of the kept line is not changed.' },
  { q: 'Does it preserve line order?', a: 'Yes — lines appear in the order they first appeared in the original text.' },
  { q: 'Is there a line limit?', a: 'No hard limit — the tool processes any number of lines in your browser with no upload or server required.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Remove Duplicate Lines Ignore Case – Free Online Tool',
      description: 'Remove duplicate lines ignoring capitalization online free. "Apple", "APPLE", and "apple" all treated as duplicates. No signup needed. Try now!',
      url: `${SITE_CONFIG.url}/remove-duplicate-lines-ignore-case`,
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
        { '@type': 'ListItem', position: 3, name: 'Remove Duplicate Lines Ignore Case – Case-Insensitive Deduplication',       item: `${SITE_CONFIG.url}/remove-duplicate-lines-ignore-case` },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'HowTo',
      name: 'How to Remove Duplicate Lines Ignoring Case',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your text', text: 'Paste your list or multi-line text into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Case-insensitive mode is active', text: '"Apple", "APPLE", and "apple" are all treated as the same line.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Remove Duplicates', text: 'The tool removes all lines that match any other line when capitalization is ignored.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the result', text: 'Click Copy to copy the deduplicated output to your clipboard.' },
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
                <li className="text-surface-800 font-medium truncate">Remove Duplicate Lines Ignore Case – Case-Insensitive Deduplication</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Remove Duplicate Lines Ignore Case – Case-Insensitive Deduplication
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Case-insensitive mode treats "Apple", "APPLE", and "apple" as the same line — only the first occurrence is kept. This is the most common mode for cleaning real-world data like email lists, keyword lists, and product names where capitalization is inconsistent.
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
      <RelatedToolsCluster currentSlug="remove-duplicate-lines-ignore-case" />
      <Footer />
    </>
  );
}
