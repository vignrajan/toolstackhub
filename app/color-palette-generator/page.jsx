import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import ColorPaletteGenerator from '../../components/tools/ColorPaletteGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Color Palette Generator — Free Online Color Scheme Tool',
  description: 'Generate color palettes from any base color. Monochromatic, analogous, complementary, triadic, tetradic, tints & shades. Copy HEX, RGB, HSL instantly. Free.',
  alternates: { canonical: `${SITE_CONFIG.url}/color-palette-generator` },
  openGraph: {
    title: 'Color Palette Generator — Free Online Color Scheme Tool',
    description: 'Generate harmonious color palettes from any base color. 6 palette types, copy HEX/RGB/HSL. Free, browser-based.',
    url: `${SITE_CONFIG.url}/color-palette-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Palette Generator — Complementary, Analogous, Triadic',
    description: 'Generate 6 types of color palettes. Copy HEX, RGB, HSL. Free, instant.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What palette types does this generator support?',
    a: 'Six types: Monochromatic (variations of one hue at different lightness), Analogous (adjacent hues on the color wheel), Complementary (opposite colors), Triadic (three equally spaced hues), Tetradic (four equally spaced hues), and Tints & Shades (light to dark variations of one hue).',
  },
  {
    q: 'What is the difference between complementary and analogous colors?',
    a: 'Complementary colors are directly opposite on the color wheel (e.g. blue and orange). They create high contrast. Analogous colors are adjacent on the wheel (e.g. blue, blue-green, green). They create harmonious, calm palettes.',
  },
  {
    q: 'How do I copy the color values?',
    a: 'Click on any swatch to copy its HEX code. Or click the HEX, RGB, or HSL text below each swatch to copy that specific format. A confirmation appears briefly when copied.',
  },
  {
    q: 'What color format should I use for CSS?',
    a: 'HEX (#3b82f6) is most common for CSS. HSL is preferred when you want to programmatically manipulate colors (adjust lightness, saturation). RGB is useful when working with opacity (use rgba(r,g,b,0.5)).',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Color Palette Generator',
      url: `${SITE_CONFIG.url}/color-palette-generator`,
      description: 'Free online color palette generator. Create monochromatic, analogous, complementary, triadic, and tetradic palettes from any base color.',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'Color Palette Generator', item: `${SITE_CONFIG.url}/color-palette-generator` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function ColorPaletteGeneratorPage() {
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
                <li className="text-surface-800 font-medium">Color Palette Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Color Palette Generator — Free Online Color Scheme Tool
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Pick a base color and generate harmonious palettes for your design. Six palette types —
              monochromatic, analogous, complementary, triadic, tetradic, and tints & shades. Copy HEX, RGB, or HSL values.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🎨 6 Palette Types', '⚡ Real-Time', '📋 Copy HEX/RGB/HSL', '🔒 Browser-Only'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><ColorPaletteGenerator /></div>
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
          <RelatedToolsCluster currentSlug="color-palette-generator" />
        </div>
      </main>
      <Footer />
    </>
  );
}
