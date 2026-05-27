import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GstValidator from '../../components/tools/GstValidator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: 'GST Number Validator – Verify GSTIN Online Free',
  description:
    'Validate any GSTIN (GST number) instantly online. Check format, decode state code, entity type, and embedded PAN. Covers all Indian states. Free, no signup.',
  keywords: [
    'GST number validator',
    'GSTIN validator',
    'verify GSTIN online',
    'GST number check',
    'GSTIN format checker',
    'validate GST number',
    'GST registration number check',
    'GSTIN verification free',
    'GST number format India',
    'GSTIN state code lookup',
    'GST number decoder',
    'GST number online tool',
    'GSTIN structure',
    'GST number check online free',
    'how to verify GSTIN',
    'GSTIN validity checker',
    'GST number validator India',
    'DDAAAAA9999A9Z9 format',
    'GST number PAN embedded',
    'fake GSTIN checker',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/gst-number-validator` },
  openGraph: {
    title: 'GST Number Validator – Verify GSTIN Online Free',
    description:
      'Validate any GSTIN instantly. Decode state code, embedded PAN, entity type, and check digit. Covers all 28 states and 8 Union Territories. Free, no signup.',
    url: `${SITE_CONFIG.url}/gst-number-validator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Number Validator – Verify GSTIN Online Free',
    description:
      'Validate any GSTIN format instantly. Decodes state code, entity type, embedded PAN. All Indian states covered. 100% browser-based, no data stored.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is a GSTIN?',
    a: 'GSTIN (Goods and Services Tax Identification Number) is a 15-character alphanumeric unique identifier assigned to every GST-registered business in India.',
  },
  {
    q: 'What does each part of GSTIN mean?',
    a: 'First 2 digits: state code. Characters 3–12: the business\'s PAN number. 13th character: entity registration number (1–9 for multiple registrations in same state). 14th character: always Z. 15th character: check digit.',
  },
  {
    q: 'How can I verify a GSTIN is real?',
    a: 'This tool validates the format and structure of a GSTIN. For official verification (to check if a GSTIN is active/cancelled), visit the GST portal at gst.gov.in.',
  },
  {
    q: 'Is this GST validator free?',
    a: 'Yes — completely free with no login, no limits, and no signup required.',
  },
  {
    q: 'Which states are covered?',
    a: 'All 28 states and 8 Union Territories of India are covered, identified by the first two digits of the GSTIN.',
  },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function GstValidatorPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'GST Number Validator – Verify GSTIN Online Free',
        description:
          'Validate any GSTIN (GST Identification Number) online. Decode state code, embedded PAN, entity type, and check digit. Covers all Indian states and UTs. Free, no signup, runs in browser.',
        url: `${SITE_CONFIG.url}/gst-number-validator`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'Validates GSTIN format against official DDAAAAA9999A9Z9 pattern',
          'Decodes state code with full state name (all 28 states + 8 UTs)',
          'Extracts embedded PAN number from GSTIN',
          'Identifies entity type (Proprietor, Company, HUF, etc.)',
          'Clickable example GSTINs for quick testing',
          'Copy GSTIN to clipboard',
          'Runs entirely in browser — no server, no data storage',
        ],
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Utility Tools',  item: `${SITE_CONFIG.url}/utility-tools` },
          { '@type': 'ListItem', position: 3, name: 'GST Number Validator', item: `${SITE_CONFIG.url}/gst-number-validator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/utility-tools" className="hover:text-brand-600">Utility Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">GST Number Validator</li>
              </ol>
            </nav>

            {/* Featured snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 What is a GSTIN?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>GSTIN (Goods and Services Tax Identification Number)</strong> is a
                <strong> 15-character alphanumeric code</strong> assigned by India's GST Network (GSTN)
                to every GST-registered business. The format is{' '}
                <strong className="font-mono">DDAAAAA9999A9Z9</strong> — first 2 digits identify the
                state, the next 10 characters embed the business's <strong>PAN number</strong>, and the
                remaining 3 characters encode the entity type, a fixed Z, and a check digit.
                Enter any GSTIN below to validate and decode it instantly.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              GST Number Validator — Verify GSTIN Online Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Instantly validate any <strong className="text-surface-700">GSTIN (GST Identification Number)</strong> against
              the official <strong className="text-surface-700">DDAAAAA9999A9Z9 format</strong>. Decode the{' '}
              <strong className="text-surface-700">state code</strong>, embedded{' '}
              <strong className="text-surface-700">PAN number</strong>, entity type, and check digit.
              Covers all Indian states and Union Territories. 100% free, browser-only, no data stored.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                { stat: '15 Chars',     label: '2 state · 10 PAN · 1 entity · Z · 1 check'  },
                { stat: '36 States/UTs', label: 'All states and Union Territories covered'    },
                { stat: 'Instant',      label: 'Real-time validation as you type'             },
                { stat: '100% Private', label: 'Never sent to any server'                     },
              ].map(s => (
                <div key={s.stat} className="flex items-center gap-2 bg-surface-100 px-3 py-2 rounded-xl">
                  <span className="font-bold text-surface-900 text-sm">{s.stat}</span>
                  <span className="text-xs text-surface-500">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                '✅ Free',
                '🇮🇳 India GST',
                '⚡ Instant Results',
                '🔒 No Data Stored',
                '🚫 No Signup',
                '📱 Works on Mobile',
                '🔍 Full Decoder',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <GstValidator />
        </div>

        {/* ── CONTENT ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Use the GST Number Validator — 3 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: '1', icon: '⌨️', title: 'Type or paste the GSTIN', desc: 'Enter any 15-character GSTIN in the field above. It auto-converts to uppercase and accepts only valid characters (letters and digits).' },
                { n: '2', icon: '⚡', title: 'Get real-time feedback', desc: 'As you type, partial hints appear. Once all 15 characters are entered, the full validation result and decoded breakdown appear instantly.' },
                { n: '3', icon: '🔍', title: 'Read the decoded details', desc: 'For valid GSTINs, see the full state name, embedded PAN, entity type, and whether the Z and check digit positions are correct.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{s.n}</div>
                  <div>
                    <div className="font-bold text-surface-900 text-sm mb-1">{s.icon} {s.title}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GSTIN STRUCTURE TABLE */}
          <section className="bg-gradient-to-br from-brand-50 to-indigo-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Understanding the GSTIN Structure
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-6">
              Every GSTIN follows the format{' '}
              <span className="font-mono font-bold text-surface-800">DDAAAAA9999A9Z9</span>.
              Each segment carries specific information about the taxpayer and their GST registration.
            </p>

            <div className="overflow-x-auto rounded-xl border border-brand-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold rounded-tl-xl">Position</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Type</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Meaning</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-xl">Example (27AAPFU0939F1ZV)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pos: '1–2',  type: '2 Digits',  meaning: 'State code — identifies the state/UT of GST registration',          ex: '27' },
                    { pos: '3–7',  type: '5 Letters', meaning: 'First 5 characters of the business PAN (letters)',                   ex: 'AAPFU' },
                    { pos: '8–11', type: '4 Digits',  meaning: 'Next 4 characters of the business PAN (digits)',                     ex: '0939' },
                    { pos: '12',   type: '1 Letter',  meaning: 'Last character of the embedded PAN (check letter)',                  ex: 'F' },
                    { pos: '13',   type: '1 Char',    meaning: 'Entity registration number (1–9, A–Z) — for multiple registrations', ex: '1' },
                    { pos: '14',   type: '1 Letter',  meaning: 'Always the letter Z — reserved by GSTN',                            ex: 'Z' },
                    { pos: '15',   type: '1 Char',    meaning: 'Check digit — alphanumeric integrity character',                     ex: 'V' },
                  ].map((r, i) => (
                    <tr key={r.pos} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/40'}>
                      <td className="px-4 py-3 text-center font-bold font-mono text-brand-700">{r.pos}</td>
                      <td className="px-4 py-3 font-medium text-surface-700">{r.type}</td>
                      <td className="px-4 py-3 text-surface-600">{r.meaning}</td>
                      <td className="px-4 py-3 font-mono font-bold text-surface-900">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* STATE CODE TABLE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              GST State Codes — All Indian States &amp; Union Territories
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5">
              The first two digits of every GSTIN identify the state or Union Territory where the business
              is registered for GST. All 36 codes are listed below.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold rounded-tl-2xl">Code</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">State / Union Territory</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['01','Jammu & Kashmir'],['02','Himachal Pradesh'],['03','Punjab'],
                    ['04','Chandigarh'],['05','Uttarakhand'],['06','Haryana'],
                    ['07','Delhi'],['08','Rajasthan'],['09','Uttar Pradesh'],
                    ['10','Bihar'],['11','Sikkim'],['12','Arunachal Pradesh'],
                    ['13','Nagaland'],['14','Manipur'],['15','Mizoram'],
                    ['16','Tripura'],['17','Meghalaya'],['18','Assam'],
                    ['19','West Bengal'],['20','Jharkhand'],['21','Odisha'],
                    ['22','Chhattisgarh'],['23','Madhya Pradesh'],['24','Gujarat'],
                    ['25','Daman & Diu'],['26','Dadra & Nagar Haveli'],['27','Maharashtra'],
                    ['28','Andhra Pradesh (old)'],['29','Karnataka'],['30','Goa'],
                    ['31','Lakshadweep'],['32','Kerala'],['33','Tamil Nadu'],
                    ['34','Puducherry'],['35','Andaman & Nicobar Islands'],['36','Telangana'],
                    ['37','Andhra Pradesh'],['38','Ladakh'],['97','Other Territory'],['99','Centre Jurisdiction'],
                  ].map(([code, name], i) => (
                    <tr key={code} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-2.5 text-center font-bold font-mono text-brand-700">{code}</td>
                      <td className="px-4 py-2.5 text-surface-700">{name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ENTITY TYPE TABLE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              GSTIN Entity Type Codes — What the 13th Character Means
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { ch: '1', icon: '👤', label: 'Proprietor',                     desc: 'Sole proprietorship — first GST registration in the state under this PAN.' },
                { ch: '2', icon: '🤝', label: 'Partnership Firm',                desc: 'Partnership business registered for GST in this state.' },
                { ch: '3', icon: '👨‍👩‍👧', label: 'Hindu Undivided Family (HUF)', desc: 'A joint Hindu family entity with its own GST registration.' },
                { ch: '4', icon: '🏢', label: 'Private / Public Limited Company',desc: 'Companies incorporated under the Companies Act with GST registration.' },
                { ch: '5', icon: '🏛️', label: 'LLP / Partnership',              desc: 'Limited Liability Partnership or formal partnership firm.' },
                { ch: '6', icon: '🏥', label: 'Trust',                           desc: 'Registered trusts — charitable, religious, or otherwise.' },
                { ch: '7', icon: '🏛️', label: 'Government Department',          desc: 'Central or State Government departments with GST registration.' },
                { ch: '8', icon: '🔧', label: 'Public Sector Undertaking (PSU)', desc: 'Government-owned or controlled companies registered for GST.' },
                { ch: '9', icon: '📋', label: 'Other (9th+ registration)',        desc: 'A business\'s 9th or higher GST registration in the same state.' },
              ].map(t => (
                <div key={t.ch} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                    <span className="font-mono font-black text-brand-700 text-lg">{t.ch}</span>
                  </div>
                  <div>
                    <div className="font-bold text-surface-900 text-sm mb-1">{t.icon} {t.label}</div>
                    <p className="text-xs text-surface-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-surface-400 mt-4">
              Characters A–Z in position 13 indicate additional places of business. For example, if a Maharashtra company has two places of business, the second GSTIN has "2" in position 13.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions — GST Number Validator
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Common questions about GSTIN format, validation, state codes, and entity types.
            </p>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              Related Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/pan-validator',               icon: '🪪', label: 'PAN Card Validator',          desc: 'Validate & decode any PAN card number'                },
                { href: '/gst-calculator',               icon: '🧾', label: 'GST Calculator',              desc: 'Add or remove GST at 5%, 12%, 18%, 28%'               },
                { href: '/salary-calculator',             icon: '💰', label: 'Salary Calculator',           desc: 'Take-home salary under old vs new tax regime'         },
                { href: '/hra-calculator',                icon: '🏠', label: 'HRA Calculator',              desc: 'Calculate HRA exemption for income tax'               },
                { href: '/professional-tax-calculator',   icon: '📋', label: 'Professional Tax Calculator', desc: 'State-wise professional tax calculation'              },
                { href: '/percentage-calculator-online',  icon: '📊', label: 'Percentage Calculator',       desc: 'Quick percentage calculations for marks and ratios'   },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl mt-0.5">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EEAT */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">
                  Built by ToolStackHub — Accurate, Private, Always Free
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  This GST number validator is built by the ToolStackHub team and runs entirely in your browser.
                  Your GSTIN is never sent to any server, never stored, and never logged.
                  The validator checks the official GSTN format (DDAAAAA9999A9Z9) and decodes all 15 characters
                  using the published GSTIN structure rules. This tool performs{' '}
                  <strong>format validation only</strong> — it does not connect to the GSTN or GST portal database.
                  For official GSTIN verification (active/cancelled status), use the GST portal at gst.gov.in.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ GSTIN never leaves your device
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🇮🇳 Covers all Indian states &amp; UTs
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    ⚠️ Format check only — not official verification
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="gst-number-validator" />
      <Footer />
    </>
  );
}
