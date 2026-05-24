import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import BinaryConverter from '../../components/tools/BinaryConverter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Binary to Decimal Converter Online Free – Binary, Hex & Octal',
  description: 'Convert between binary, decimal, hexadecimal, and octal online for free. All formats update simultaneously. Text to binary included. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/binary-to-decimal-converter` },
  openGraph: {
    title: 'Binary to Decimal Converter Online Free – Binary, Hex & Octal',
    description: 'Convert between binary, decimal, hexadecimal, and octal online for free. All formats update simultaneously. Text to binary included. No signup. Try now!',
    url: `${SITE_CONFIG.url}/binary-to-decimal-converter`,
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
      name: 'Free Binary Converter',
      description: 'Convert between binary, decimal, hexadecimal, and octal online for free. All formats update simultaneously. Text to binary included. No signup. Try now!',
      url: `${SITE_CONFIG.url}/binary-to-decimal-converter`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Free Binary Converter', item: `${SITE_CONFIG.url}/binary-to-decimal-converter` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/base64-encoder-online', label: 'Base64 Encoder Online', desc: 'Encode binary data as text' },
              { href: '/json-formatter-online', label: 'JSON Formatter Online', desc: 'Format JSON with hex/decimal values' },
              { href: '/uuid-generator-online', label: 'UUID Generator Online', desc: 'Generate 128-bit random identifiers' },
              { href: '/color-picker-online', label: 'Color Picker Online', desc: 'Get hex color codes' },
];

const variantLinks = [
  { href: '/decimal-to-binary-converter', label: 'Decimal to Binary Converter' },
              { href: '/binary-to-hex-converter', label: 'Binary to Hex Converter' },
              { href: '/hex-to-decimal-converter', label: 'Hex to Decimal Converter' },
              { href: '/text-to-binary-converter', label: 'Text to Binary Converter' },
];

const faqs = [
  { q: 'What is binary?', a: 'Base-2 number system using only 0 and 1 — the fundamental language of computers and digital systems.' },
  { q: 'What is hexadecimal used for?', a: 'Hex is used in programming, HTML color codes (#FF5733), memory addresses, and network protocols.' },
  { q: 'Can it convert text to binary?', a: 'Yes — use the ASCII text section to convert any text string into binary representation.' },
  { q: 'What is octal used for?', a: 'Octal (base-8) is used in Unix file permissions (chmod 755) and some low-level programming contexts.' },
  { q: 'Is the converter free?', a: 'Yes — completely free with no account required.' },
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
                  <Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">
                    Developer Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free Binary Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Binary Converter Online – Convert Binary, Decimal, Hex & Octal
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Convert between binary, decimal, hexadecimal, and octal online for free. All formats update simultaneously. Text to binary included. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BinaryConverter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Binary Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '💻', title: 'Computer Science Study', desc: 'Convert between number bases for coursework, assignments, and exam preparation.' },
              { icon: '🌐', title: 'Networking', desc: 'Convert IP addresses and subnet masks between decimal and binary for subnetting calculations.' },
              { icon: '🎨', title: 'Color Codes', desc: 'Convert hex color codes to decimal RGB and binary for graphics programming and shader work.' },
              { icon: '🔐', title: 'Permissions', desc: 'Convert Unix permission values between octal, binary, and decimal for chmod and access control.' },
              { icon: '🔌', title: 'Embedded Systems', desc: 'Convert between binary, hex, and decimal for microcontrollers and memory addresses.' },
              { icon: '📚', title: 'Education', desc: "Teach and learn binary arithmetic, two's complement, and bit shifting fundamentals." },
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
