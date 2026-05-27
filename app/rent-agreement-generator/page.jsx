import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import RentAgreementGenerator from '../../components/tools/RentAgreementGenerator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Rent Agreement Generator India — Free Printable Format Online',
  description: 'Generate a legally formatted rent agreement for India in 2 minutes. Customizable landlord, tenant, property, and rent terms. Download as PDF or print. Free, no signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/rent-agreement-generator` },
  openGraph: {
    title: 'Rent Agreement Generator India — Free Printable Format',
    description: 'Create a professional rent agreement with all standard clauses. Enter landlord, tenant, and property details — get a formatted legal document instantly.',
    url: `${SITE_CONFIG.url}/rent-agreement-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Rent Agreement Generator India — Printable PDF Format',
    description: 'Generate rent agreements with all standard Indian legal clauses. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'Is this rent agreement legally valid in India?',
    a: 'This tool generates a rent agreement in the standard format used across India. However, for it to be legally enforceable, the agreement should be printed on stamp paper of the appropriate value (usually ₹100 to ₹500 depending on the state) and registered with the local Sub-Registrar office for tenancies exceeding 11 months. For 11-month agreements, registration is optional in most states but notarization is recommended.',
  },
  {
    q: 'Why are most rent agreements for 11 months?',
    a: 'Agreements of 12 months or more must be compulsorily registered under the Registration Act, 1908, which involves stamp duty and registration fees. To avoid this, most landlords and tenants in India opt for 11-month agreements, which are renewed annually. This is a common and legally accepted practice.',
  },
  {
    q: 'What is stamp duty for a rent agreement?',
    a: 'Stamp duty varies by state. In Maharashtra, it\'s 0.25% of total rent + deposit for up to 5 years. In Karnataka, it\'s ₹20 for up to 1 year, ₹50 for 1-3 years. Delhi charges 2% of annual rent for 1-3 year agreements. Check your state\'s stamp duty schedule for exact rates.',
  },
  {
    q: 'Can I add custom clauses to this agreement?',
    a: 'This tool generates the standard clauses. After generating, you can copy the text and add any additional clauses specific to your agreement (such as pet policy, parking charges, maintenance specifics, or sub-letting restrictions) before printing. Always have a lawyer review significant modifications.',
  },
  {
    q: 'What documents are needed along with the rent agreement?',
    a: 'Typically required: (1) Landlord\'s ID proof (Aadhaar, PAN), (2) Tenant\'s ID proof, (3) Property documents (latest electricity bill or ownership proof), (4) Passport-size photographs of both parties, (5) Witnesses\' ID proofs. Requirements may vary by state and society rules.',
  },
  {
    q: 'Is police verification required for renting?',
    a: 'Yes, in most states and cities, landlords are legally required to notify the local police station when they rent their property. Many cities (Delhi, Mumbai, Bengaluru) have online police verification portals. This is separate from the rent agreement and usually done within 24-48 hours of the tenant moving in.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Rent Agreement Generator India',
      url: `${SITE_CONFIG.url}/rent-agreement-generator`,
      description: 'Free online rent agreement generator for India. Create printable, customizable rent agreements with all standard clauses.',
      applicationCategory: 'LegalApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Finance Tools', item: `${SITE_CONFIG.url}/tools/finance` },
        { '@type': 'ListItem', position: 3, name: 'Rent Agreement Generator', item: `${SITE_CONFIG.url}/rent-agreement-generator` },
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

export default function RentAgreementPage() {
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
                <li className="text-surface-800 font-medium">Rent Agreement Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Rent Agreement Generator India — Free Printable Format
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate a professionally formatted rent agreement in minutes. Enter landlord and tenant details,
              property address, and rent terms. Download as PDF or print on stamp paper. Nothing is saved — runs entirely in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 Browser-Only', '🖨️ Print / PDF', '📋 All Standard Clauses', '🇮🇳 India Format', '⚡ 2-Minute Setup'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-sm text-amber-800">
              <strong>Disclaimer:</strong> This tool generates a standard rent agreement format for reference purposes.
              For legally binding tenancies exceeding 11 months, get the agreement registered with the Sub-Registrar.
              Consult a lawyer for complex or high-value agreements.
            </p>
          </div>
          <RentAgreementGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <AdBanner variant="content" />

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Clauses Included in the Agreement</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: '📅', title: 'Tenancy Period',     desc: 'Start/end dates and lock-in period' },
                { icon: '💰', title: 'Rent & Deposit',     desc: 'Monthly rent, due date, security deposit' },
                { icon: '🔧', title: 'Maintenance',        desc: 'Who pays — tenant or landlord' },
                { icon: '📢', title: 'Notice Period',      desc: 'Advance notice required to vacate' },
                { icon: '🏠', title: 'Use of Property',    desc: 'Permitted use and sub-letting restriction' },
                { icon: '⚖️', title: 'Jurisdiction',      desc: 'Legal jurisdiction for dispute resolution' },
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

          <RelatedToolsCluster currentSlug="rent-agreement-generator" />
        </div>

      </main>
      <Footer />
    </>
  );
}
