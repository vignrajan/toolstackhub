import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import SalarySlipGenerator from '../../components/tools/SalarySlipGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Salary Slip Generator India — Free Printable Payslip Online',
  description: 'Generate a professional salary slip for any employee in seconds. Enter earnings, deductions, and PF — download as PDF or print. Free, no signup, no data saved.',
  alternates: { canonical: `${SITE_CONFIG.url}/salary-slip-generator` },
  openGraph: {
    title: 'Salary Slip Generator India — Free Printable Payslip Online',
    description: 'Create professional salary slips with earnings, deductions, EPF, and TDS. Print or download as PDF. Free, browser-based.',
    url: `${SITE_CONFIG.url}/salary-slip-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Salary Slip Generator India — Printable Payslip',
    description: 'Generate professional salary slips with EPF, TDS, and HRA breakdown. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What is a salary slip / payslip?',
    a: 'A salary slip (also called a payslip or pay stub) is a document issued by an employer every month detailing an employee\'s earnings, deductions, and net take-home pay. It includes components like basic salary, HRA, allowances, EPF deductions, professional tax, TDS, and the final net pay.',
  },
  {
    q: 'Is this salary slip generator free?',
    a: 'Yes, completely free. No signup required, no watermark, unlimited salary slips. All calculations happen in your browser — no data is ever sent to any server.',
  },
  {
    q: 'How do I download the salary slip as PDF?',
    a: 'Click the "Print / Download PDF" button. In the print dialog, select "Save as PDF" as the destination/printer. This works on all browsers — Chrome, Firefox, Edge, and Safari.',
  },
  {
    q: 'How is EPF contribution calculated?',
    a: 'Employee EPF contribution is 12% of Basic Salary (capped at 12% of ₹15,000 = ₹1,800 if basic exceeds ₹15,000). The employer also contributes 12% — of which 8.33% goes to EPS (pension) and 3.67% to EPF. This tool calculates employee contribution automatically.',
  },
  {
    q: 'What details are required to generate a salary slip?',
    a: 'You need: Employee name, ID, designation, department, company name, and the salary components — basic salary, HRA, allowances, and deductions. PAN, UAN, and bank details are optional but commonly included.',
  },
  {
    q: 'Can I use this for freelancers or contractual employees?',
    a: 'Yes. For freelancers or contractors where EPF may not apply, set EPF to ₹0. You can customize all earnings and deduction fields to match any employment arrangement.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Salary Slip Generator India',
      url: `${SITE_CONFIG.url}/salary-slip-generator`,
      description: 'Free online salary slip generator for Indian employees. Customize earnings, deductions, and EPF — download as PDF.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/tools/finance` },
        { '@type': 'ListItem', position: 3, name: 'Salary Slip Generator', item: `${SITE_CONFIG.url}/salary-slip-generator` },
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
  ],
};

export default function SalarySlipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/finance" className="hover:text-brand-600 transition-colors">Finance Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Salary Slip Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Salary Slip Generator India — Free Printable Payslip
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Create a professional salary slip instantly. Enter employee details, earnings components,
              and deductions. Download as PDF or print directly — no signup, no watermark, nothing uploaded.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 Browser-Only', '🖨️ Print / PDF', '📊 EPF & TDS', '💰 HRA & Allowances', '📋 No Watermark'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <SalarySlipGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What's Included in a Salary Slip?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: '💵', title: 'Basic Salary',      desc: 'Fixed core component — base for PF, HRA calculations' },
                { icon: '🏠', title: 'HRA',               desc: 'House Rent Allowance — tax-exempt up to limits' },
                { icon: '🚗', title: 'Allowances',        desc: 'Conveyance, medical, LTA, special allowance' },
                { icon: '📊', title: 'EPF Deduction',     desc: '12% of basic salary (employee\'s share)' },
                { icon: '🏛️', title: 'Professional Tax',  desc: 'State-levied tax, up to ₹2,500/year' },
                { icon: '📋', title: 'TDS',               desc: 'Tax Deducted at Source on monthly salary' },
              ].map(item => (
                <div key={item.title} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-surface-900">{item.title}</div>
                  <div className="text-xs text-surface-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-surface-50 border border-surface-200 rounded-xl p-4 group">
                  <summary className="font-semibold text-surface-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-surface-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-surface-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <RelatedToolsCluster currentSlug="salary-slip-generator" />
        </div>

      </main>
      <Footer />
    </>
  );
}
