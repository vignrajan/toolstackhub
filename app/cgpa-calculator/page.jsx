import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CgpaCalculator from '../../components/tools/CgpaCalculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'CGPA Calculator Online Free – CGPA to Percentage | ToolStackHub',
  description: 'Free CGPA calculator for Indian students. Calculate CGPA from subjects & credits, convert CGPA to percentage for VTU, Mumbai, Anna University, DU, CBSE. Instant, no signup.',
  keywords: [
    'cgpa calculator',
    'cgpa calculator online',
    'cgpa to percentage calculator',
    'cgpa calculator india',
    'cgpa to percentage',
    'how to calculate cgpa',
    'cgpa calculator for engineering students',
    'cgpa to percentage vtu',
    'cgpa to percentage anna university',
    'cgpa to percentage mumbai university',
    'sgpa to cgpa calculator',
    'gpa calculator india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/cgpa-calculator` },
  openGraph: {
    title: 'CGPA Calculator Online Free – CGPA to Percentage India',
    description: 'Calculate CGPA from your subjects and credits. Convert to percentage for VTU, Mumbai, Anna University, DU, CBSE. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/cgpa-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGPA Calculator Free – CGPA to Percentage India',
    description: 'Calculate CGPA and convert to percentage for VTU, Anna, Mumbai, DU. Instant, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'How is CGPA calculated?',
    a: 'CGPA = Sum of (Grade Points × Credits for each subject) ÷ Total Credits. For example, if you have 3 subjects: Math (4 credits, grade 8), Physics (3 credits, grade 7), Chemistry (3 credits, grade 9): CGPA = (4×8 + 3×7 + 3×9) ÷ (4+3+3) = (32 + 21 + 27) ÷ 10 = 8.0.',
  },
  {
    q: 'How to convert CGPA to percentage?',
    a: 'The conversion formula depends on your university. Most common: (1) CGPA × 10 — used by VTU, Mumbai University, Delhi University. (2) CGPA × 9.5 — recommended by CBSE and many affiliated colleges. (3) (CGPA − 0.5) × 10 — used by Anna University. Enter your CGPA in this calculator and it shows all formulas at once.',
  },
  {
    q: 'What is the difference between SGPA and CGPA?',
    a: 'SGPA (Semester Grade Point Average) is your GPA for one semester. CGPA (Cumulative Grade Point Average) is your running average across all semesters completed. CGPA = Sum of (SGPA × Credits in each semester) ÷ Total Credits across all semesters.',
  },
  {
    q: 'What CGPA is equivalent to a first class?',
    a: 'On a 10-point scale: First Class with Distinction = 7.5 and above; First Class = 6.0 to 7.49; Second Class = 5.0 to 5.99; Pass Class = 4.0 to 4.99. Note that specific thresholds vary by university — always check your university\'s official grade chart.',
  },
  {
    q: 'How do I calculate CGPA if my grading is in marks?',
    a: 'First convert marks to grade points using your university\'s conversion table. Typical 10-point scale: 90-100 = O (10), 80-89 = A+ (9), 70-79 = A (8), 60-69 = B+ (7), 50-59 = B (6), 40-49 = C (5), 35-39 = P (4), <35 = F (0). Then use those grade points in this calculator.',
  },
  {
    q: 'Is 7.5 CGPA good for placements?',
    a: 'Most top IT companies (TCS, Infosys, Wipro) require a minimum CGPA of 6.0 or 60%. Product-based companies (Amazon, Microsoft, Google) typically look for 7.0+ or 70%, but give higher weight to coding skills and interview performance. Core engineering companies often need 7.5+ on a 10-point scale.',
  },
  {
    q: 'Can I use this for both CGPA and GPA calculation?',
    a: 'Yes — this calculator supports both the 10-point scale (used by most Indian universities) and the 4-point GPA scale (used by BITS Pilani, some private universities, and US-style programs). Switch between scales using the toggle at the top.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'CGPA Calculator',
      description: 'Free online CGPA calculator for Indian students. Calculate CGPA from subjects and credits, convert CGPA to percentage.',
      url: `${SITE_CONFIG.url}/cgpa-calculator`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'CGPA Calculator',  item: `${SITE_CONFIG.url}/cgpa-calculator` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate CGPA Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Choose your scale', text: 'Select 10-point (most Indian universities) or 4-point (GPA) scale.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter your subjects', text: 'Add each subject with its credit hours and grade.' },
        { '@type': 'HowToStep', position: 3, name: 'Read your CGPA', text: 'Your CGPA is calculated instantly. The percentage equivalent for multiple university formulas is shown below.' },
      ],
    },
  ],
};

export default function CgpaCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/calculators" className="hover:text-brand-600 transition-colors">Calculators</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">CGPA Calculator</li>
              </ol>
            </nav>
            <div className="flex items-start gap-4">
              <div className="text-4xl p-3 bg-blue-100 rounded-2xl shrink-0">🎓</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  CGPA Calculator
                </h1>
                <p className="text-surface-500 text-lg leading-relaxed mt-2 max-w-3xl">
                  Calculate your CGPA from subject credits and grades. Supports 10-point and 4-point scales.
                  Instantly converts CGPA to percentage for VTU, Mumbai, Anna University, DU, and CBSE.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '🎓 All Indian Universities', '📊 CGPA to %', '🔒 No Data Stored', '📱 Mobile-Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ──────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CgpaCalculator />
        </div>

        {/* ── How CGPA is calculated ────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">How CGPA is Calculated</h2>
            <div className="space-y-3 text-sm text-surface-600 leading-relaxed">
              <p>
                <strong>Formula:</strong> CGPA = Σ (Grade Points × Credits) ÷ Total Credits
              </p>
              <div className="bg-white border border-blue-200 rounded-xl p-4 font-mono text-xs text-surface-700 space-y-1">
                <p>Subject: Maths  | Credits: 4 | Grade: 8 (A)  → 4 × 8 = 32</p>
                <p>Subject: Physics| Credits: 3 | Grade: 7 (B+) → 3 × 7 = 21</p>
                <p>Subject: English| Credits: 3 | Grade: 9 (A+) → 3 × 9 = 27</p>
                <p className="border-t border-blue-100 mt-2 pt-2">Total Credits = 10 | Weighted Sum = 80</p>
                <p className="font-bold text-brand-700">CGPA = 80 ÷ 10 = 8.0</p>
              </div>
              <p>
                Each subject's contribution is weighted by its credit hours — a 4-credit subject counts
                twice as much as a 2-credit subject.
              </p>
            </div>
          </div>
        </div>

        {/* ── CGPA to Percentage quick reference ────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
            CGPA to Percentage — Quick Reference
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-surface-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-50 border-b border-surface-200">
                  <th className="text-left px-5 py-3 font-semibold text-surface-700">CGPA</th>
                  <th className="text-right px-4 py-3 font-semibold text-surface-700">× 10 (VTU/DU)</th>
                  <th className="text-right px-4 py-3 font-semibold text-surface-700">× 9.5 (CBSE)</th>
                  <th className="text-right px-4 py-3 font-semibold text-surface-700">Anna Univ.</th>
                  <th className="text-right px-4 py-3 font-semibold text-surface-700">Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[10, 9.5, 9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4].map(cgpa => {
                  const cls = cgpa >= 9 ? 'Outstanding' : cgpa >= 7.5 ? 'First Class Dist.' : cgpa >= 6 ? 'First Class' : cgpa >= 5 ? 'Second Class' : cgpa >= 4 ? 'Pass' : 'Fail';
                  return (
                    <tr key={cgpa} className="hover:bg-surface-50 transition-colors">
                      <td className="px-5 py-2.5 font-semibold text-surface-900">{cgpa.toFixed(1)}</td>
                      <td className="px-4 py-2.5 text-right text-surface-700">{(cgpa * 10).toFixed(1)}%</td>
                      <td className="px-4 py-2.5 text-right text-surface-700">{(cgpa * 9.5).toFixed(1)}%</td>
                      <td className="px-4 py-2.5 text-right text-surface-700">{Math.max(0, (cgpa - 0.5) * 10).toFixed(1)}%</td>
                      <td className="px-4 py-2.5 text-right text-surface-500 text-xs">{cls}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-surface-400 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ── Related tools ─────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Tools for Students</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/percentage-calculator-online', icon: '💯', label: 'Percentage Calculator' },
              { href: '/age-calculator-online',        icon: '🎂', label: 'Age Calculator'         },
              { href: '/bmi-calculator',               icon: '⚖️', label: 'BMI Calculator'         },
              { href: '/calculators',                  icon: '🧮', label: 'All Calculators'         },
            ].map(t => (
              <Link
                key={t.href}
                href={t.href}
                className="flex flex-col items-center gap-2 p-4 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-semibold text-surface-700">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
