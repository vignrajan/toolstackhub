import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import UnitConverter from '../../components/tools/UnitConverter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Unit Converter Online — Length, Weight, Temperature, Area & More',
  description: 'Free online unit converter for length, weight, temperature, area, volume, speed, and digital storage. Convert between all units instantly. No signup required.',
  alternates: { canonical: `${SITE_CONFIG.url}/unit-converter` },
  openGraph: {
    title: 'Unit Converter Online — Length, Weight, Temperature, Area & More',
    description: 'Convert units across 7 categories: length, weight, temperature, area, volume, speed, and digital storage. Free, instant, browser-based.',
    url: `${SITE_CONFIG.url}/unit-converter`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Converter Online — Free, All Categories',
    description: 'Convert length, weight, temperature, area, volume, speed and more. Free, instant.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What unit categories does this converter support?',
    a: 'Length (km, m, cm, mm, mile, yard, foot, inch), Weight (kg, g, lb, oz, stone), Temperature (Celsius, Fahrenheit, Kelvin), Area (m², km², hectare, acre), Volume (liter, gallon, cup, ml), Speed (km/h, m/s, mph, knot), and Digital Storage (bit, byte, KB, MB, GB, TB).',
  },
  {
    q: 'How do I convert between units?',
    a: 'Enter your value in the Value field, select the source unit from the "From Unit" dropdown, and all converted values appear instantly below. Click any result to use it as the new input for further conversion.',
  },
  {
    q: 'How is Fahrenheit to Celsius converted?',
    a: 'Celsius = (Fahrenheit − 32) × 5/9. For example, 100°F = (100−32) × 5/9 = 37.78°C. For Celsius to Fahrenheit: °F = (°C × 9/5) + 32.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Unit Converter Online',
      url: `${SITE_CONFIG.url}/unit-converter`,
      description: 'Free online unit converter for length, weight, temperature, area, volume, speed, and digital storage.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools',  item: `${SITE_CONFIG.url}/tools/utility` },
        { '@type': 'ListItem', position: 3, name: 'Unit Converter', item: `${SITE_CONFIG.url}/unit-converter` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function UnitConverterPage() {
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
                <li><Link href="/tools/utility" className="hover:text-brand-600 transition-colors">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Unit Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Unit Converter Online — Length, Weight, Temperature & More
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert units across 7 categories in one place. Enter any value, pick the source unit, and see
              all conversions instantly. Click any result to use it as the next input.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '⚡ Instant', '📏 7 Categories', '🔒 Browser-Only', '📋 Copy Values'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><UnitConverter /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />
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
          <RelatedToolsCluster currentSlug="unit-converter" />
        </div>
      </main>
      <Footer />
    </>
  );
}
