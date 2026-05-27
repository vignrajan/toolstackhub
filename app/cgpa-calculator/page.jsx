import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import CgpaCalculator from '../../components/tools/CgpaCalculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'CGPA to Percentage Calculator — VTU, Anna, Mumbai, Pune & More',
  description: 'Convert CGPA to percentage for VTU, Anna University, Mumbai University, Pune (SPPU), and 6 other universities. Calculate grade-wise CGPA from subject marks. Free.',
  alternates: { canonical: `${SITE_CONFIG.url}/cgpa-calculator` },
  openGraph: {
    title: 'CGPA to Percentage Calculator India — All Universities',
    description: 'Convert CGPA to percentage for any Indian university. Grade-wise CGPA calculator. VTU, Anna, Mumbai, Pune, Osmania formulas. Free.',
    url: `${SITE_CONFIG.url}/cgpa-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGPA Calculator — VTU, Anna, Mumbai, Pune Formulas',
    description: 'Free CGPA to percentage calculator for Indian universities. Grade-wise calculator included.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'How is CGPA calculated?',
    a: 'CGPA (Cumulative Grade Point Average) is calculated as the weighted average of grade points earned in each subject, weighted by the number of credits. Formula: CGPA = Σ(Grade Points × Credits) / Σ(Credits). For example, if you score 9 in a 4-credit subject and 7 in a 3-credit subject, CGPA = (9×4 + 7×3) / (4+3) = (36+21)/7 = 8.14.',
  },
  {
    q: 'What is the CGPA to percentage formula for VTU?',
    a: 'For Visvesvaraya Technological University (VTU), the formula is: Percentage = CGPA × 10. So a CGPA of 7.5 equals 75%.',
  },
  {
    q: 'What is the CGPA to percentage formula for Anna University?',
    a: 'For Anna University, the formula is: Percentage = (CGPA − 0.5) × 10. So a CGPA of 8.0 equals (8.0 − 0.5) × 10 = 75%.',
  },
  {
    q: 'What is the general CGPA to percentage formula (CBSE / most universities)?',
    a: 'For CBSE and most Indian universities on a 10-point scale: Percentage = CGPA × 9.5. This is the formula recommended by CBSE and used by a majority of central universities.',
  },
  {
    q: 'What is First Class with Distinction in CGPA?',
    a: 'Typically, a CGPA of 8.5 and above (on a 10-point scale) corresponds to First Class with Distinction. 7.5-8.49 is First Class, 6.5-7.49 is Second Class, and 5.0-6.49 is a Pass.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'CGPA to Percentage Calculator India',
      url: `${SITE_CONFIG.url}/cgpa-calculator`,
      description: 'Free CGPA calculator for Indian students. Grade-wise CGPA computation and CGPA-to-percentage conversion for VTU, Anna University, Mumbai, Pune, and more.',
      applicationCategory: 'EducationApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Student Tools',  item: `${SITE_CONFIG.url}/tools/student` },
        { '@type': 'ListItem', position: 3, name: 'CGPA Calculator', item: `${SITE_CONFIG.url}/cgpa-calculator` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function CgpaCalculatorPage() {
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
                <li><Link href="/tools/student" className="hover:text-brand-600 transition-colors">Student Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">CGPA Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              CGPA to Percentage Calculator — All Indian Universities
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your CGPA from subject grades, or convert an existing CGPA to percentage.
              Supports VTU, Anna University, Mumbai University, Pune (SPPU), Osmania, CBSE, and more.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🎓 7 University Formulas', '📊 Grade-wise CGPA', '🔒 Browser-Only', '⚡ Instant'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><AdBanner variant="top" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><CgpaCalculator /></div>
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
          <RelatedToolsCluster currentSlug="cgpa-calculator" />
        </div>
      </main>
      <Footer />
    </>
  );
}
