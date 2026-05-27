import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IfscFinder from '../../components/tools/IfscFinder';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: 'IFSC Code Finder – Find Bank Branch Details Instantly Free',
  description:
    'Find bank branch details by IFSC code instantly. Get bank name, branch address, city, MICR, and SWIFT code. Covers all Indian banks. Free, no signup.',
  keywords: [
    'ifsc code finder',
    'ifsc code search',
    'find ifsc code',
    'ifsc code lookup',
    'bank branch details by ifsc',
    'ifsc code checker',
    'ifsc code validator',
    'sbi ifsc code',
    'hdfc ifsc code',
    'icici ifsc code',
    'axis bank ifsc code',
    'ifsc code india',
    'bank ifsc search online',
    'ifsc micr code finder',
    'neft rtgs ifsc code',
    'ifsc code full form',
    'what is ifsc code',
    'ifsc code meaning',
    'find bank branch by ifsc',
    'ifsc code list india',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/ifsc-finder` },
  openGraph: {
    title: 'IFSC Code Finder – Find Bank Branch Details Instantly Free',
    description:
      'Find bank branch details by IFSC code instantly. Get bank name, branch address, city, MICR, and SWIFT code. Covers all Indian banks. Free, no signup.',
    url: `${SITE_CONFIG.url}/ifsc-finder`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IFSC Code Finder – Find Bank Branch Details Instantly Free',
    description:
      'Find bank branch details by IFSC code instantly. Get bank name, branch address, city, MICR, and SWIFT code. Covers all Indian banks. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is an IFSC code?',
    a: 'IFSC (Indian Financial System Code) is an 11-character alphanumeric code that uniquely identifies a bank branch in India. It is used for NEFT, RTGS, and IMPS transactions.',
  },
  {
    q: 'Where is the IFSC code on my cheque?',
    a: 'The IFSC code is printed on the cheque leaf, typically at the top-left corner on the MICR band line or mentioned in the cheque book details page.',
  },
  {
    q: 'What do the characters in IFSC mean?',
    a: 'The first 4 characters identify the bank (e.g., SBIN for State Bank of India, HDFC for HDFC Bank). The 5th character is always 0. The last 6 characters identify the specific branch.',
  },
  {
    q: 'Is this IFSC finder free?',
    a: 'Yes — completely free with no login, no limits, and no signup required.',
  },
  {
    q: 'What banks are covered?',
    a: 'All banks operating in India including SBI, HDFC, ICICI, Axis Bank, Kotak Mahindra, PNB, Bank of Baroda, Canara Bank, and 200+ other banks and cooperative banks.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'IFSC Code Finder',
      description:
        'Free online IFSC code finder. Enter an 11-character IFSC code to instantly retrieve bank name, branch address, city, state, MICR, contact, and SWIFT code. Covers all Indian banks.',
      url: `${SITE_CONFIG.url}/ifsc-finder`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      featureList: [
        'Instant IFSC code lookup',
        'Bank name, branch, address, city, state',
        'MICR and SWIFT code retrieval',
        'Real-time IFSC format validation',
        'No login or signup required',
        'Covers 200+ Indian banks',
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
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/tools` },
        { '@type': 'ListItem', position: 3, name: 'IFSC Code Finder', item: `${SITE_CONFIG.url}/ifsc-finder` },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function IfscFinderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/tools" className="hover:text-brand-600">Utility Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">IFSC Code Finder</li>
              </ol>
            </nav>

            {/* Featured snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                🏦 What is an IFSC Code?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                An <strong>IFSC code</strong> (Indian Financial System Code) is an
                <strong> 11-character alphanumeric code</strong> that uniquely identifies every bank branch
                in India. It is mandatory for <strong>NEFT, RTGS, and IMPS</strong> fund transfers. Enter
                your IFSC code below to instantly find the bank name, branch address, city, MICR, and SWIFT code — free, no signup.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              IFSC Code Finder — Find Bank Branch Details Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Look up any Indian bank branch by its <strong className="text-surface-700">IFSC code</strong>.
              Get the complete branch details — bank name, address, city, state, MICR, contact number, and SWIFT code.
              Covers <strong className="text-surface-700">SBI, HDFC, ICICI, Axis, Kotak, PNB</strong>, and 200+ other banks.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2">
              {[
                '✅ Free',
                '🇮🇳 India Banking',
                '⚡ Instant',
                '🔒 No Login',
                '🏦 200+ Banks',
                '📍 Branch Address',
                '🔢 MICR Code',
                '🌐 SWIFT Code',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ──────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <IfscFinder />
        </div>

        {/* ── CONTENT ───────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Find Bank Details by IFSC Code — 3 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: '1',
                  icon: '⌨️',
                  title: 'Enter your IFSC code',
                  desc: 'Type or paste your 11-character IFSC code in the input box. It auto-converts to uppercase. The tool validates the format in real time.',
                },
                {
                  n: '2',
                  icon: '🔍',
                  title: 'Click Find',
                  desc: 'Press the Find button or hit Enter. The tool fetches live branch data from the Razorpay IFSC API — the most up-to-date database of Indian bank branches.',
                },
                {
                  n: '3',
                  icon: '📋',
                  title: 'Copy the details',
                  desc: 'Instantly see the bank name, branch, full address, city, state, MICR, contact, and SWIFT code. Use the copy buttons to copy IFSC or MICR to clipboard.',
                },
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

          {/* IFSC STRUCTURE */}
          <section className="bg-gradient-to-br from-brand-50 to-indigo-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              IFSC Code Format Explained
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-6">
              Every IFSC code follows a strict 11-character format. Here is what each part means:
            </p>

            {/* Visual breakdown */}
            <div className="flex gap-1 font-mono text-sm mb-6 flex-wrap">
              <div className="px-4 py-3 bg-blue-100 border border-blue-300 rounded-xl text-center">
                <div className="font-bold text-blue-900 text-lg">SBIN</div>
                <div className="text-xs text-blue-700 font-sans mt-1">Bank Code<br />(4 letters)</div>
              </div>
              <div className="px-4 py-3 bg-amber-100 border border-amber-300 rounded-xl text-center">
                <div className="font-bold text-amber-900 text-lg">0</div>
                <div className="text-xs text-amber-700 font-sans mt-1">Always 0<br />(reserved)</div>
              </div>
              <div className="px-4 py-3 bg-emerald-100 border border-emerald-300 rounded-xl text-center flex-1 min-w-[140px]">
                <div className="font-bold text-emerald-900 text-lg">001234</div>
                <div className="text-xs text-emerald-700 font-sans mt-1">Branch Code<br />(6 alphanumeric)</div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-brand-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-xl">Characters</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Meaning</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-xl">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { chars: '1–4', meaning: 'Bank code — 4 uppercase letters identifying the bank', example: 'SBIN = State Bank of India' },
                    { chars: '5',   meaning: '5th character is always "0" — reserved for future use', example: '0' },
                    { chars: '6–11', meaning: 'Branch code — 6 alphanumeric characters identifying the specific branch', example: '001234 = specific branch' },
                  ].map((r, i) => (
                    <tr key={r.chars} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/40'}>
                      <td className="px-4 py-3 font-mono font-bold text-brand-700">{r.chars}</td>
                      <td className="px-4 py-3 text-surface-700">{r.meaning}</td>
                      <td className="px-4 py-3 font-mono text-surface-600 text-xs">{r.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* POPULAR BANKS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              IFSC Codes for Popular Indian Banks
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Bank</th>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold">IFSC Prefix</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Example IFSC</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bank: 'State Bank of India',   prefix: 'SBIN', example: 'SBIN0001234', type: 'Public Sector' },
                    { bank: 'HDFC Bank',             prefix: 'HDFC', example: 'HDFC0000001', type: 'Private Sector' },
                    { bank: 'ICICI Bank',            prefix: 'ICIC', example: 'ICIC0000001', type: 'Private Sector' },
                    { bank: 'Axis Bank',             prefix: 'UTIB', example: 'UTIB0000001', type: 'Private Sector' },
                    { bank: 'Kotak Mahindra Bank',   prefix: 'KKBK', example: 'KKBK0000001', type: 'Private Sector' },
                    { bank: 'Punjab National Bank',  prefix: 'PUNB', example: 'PUNB0000100', type: 'Public Sector' },
                    { bank: 'Bank of Baroda',        prefix: 'BARB', example: 'BARB0000001', type: 'Public Sector' },
                    { bank: 'Canara Bank',           prefix: 'CNRB', example: 'CNRB0000001', type: 'Public Sector' },
                    { bank: 'Union Bank of India',   prefix: 'UBIN', example: 'UBIN0000001', type: 'Public Sector' },
                    { bank: 'IndusInd Bank',         prefix: 'INDB', example: 'INDB0000001', type: 'Private Sector' },
                  ].map((r, i) => (
                    <tr key={r.bank} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{r.bank}</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-brand-700">{r.prefix}</td>
                      <td className="px-4 py-3 font-mono text-surface-600 text-xs">{r.example}</td>
                      <td className="px-4 py-3 text-xs text-surface-500">
                        <span className={`px-2 py-0.5 rounded-full font-medium ${
                          r.type === 'Public Sector'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}>{r.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">
              * Enter the example IFSC in the tool above to see live branch details.
            </p>
          </section>

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              When Do You Need an IFSC Code?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '💸',
                  title: 'NEFT / RTGS / IMPS Transfers',
                  desc: 'All online fund transfers — NEFT (any amount, batched), RTGS (above ₹2 lakh, real-time), and IMPS (instant, 24x7) — require the IFSC code of the beneficiary\'s bank branch.',
                },
                {
                  icon: '📱',
                  title: 'UPI and Mobile Banking',
                  desc: 'Adding a new bank account to a UPI app (PhonePe, GPay, Paytm) or net banking portal requires the branch IFSC code to link and verify the account.',
                },
                {
                  icon: '🏢',
                  title: 'Salary and Vendor Payments',
                  desc: 'HR teams and finance departments use IFSC codes to set up salary accounts, vendor payments, and direct benefit transfers (DBT). Each branch has a unique IFSC.',
                },
                {
                  icon: '🏦',
                  title: 'Loan and Investment Applications',
                  desc: 'Opening a fixed deposit, mutual fund account, or applying for a home/personal loan online requires the IFSC code of your savings or current account branch.',
                },
                {
                  icon: '🌐',
                  title: 'International Transfers (SWIFT)',
                  desc: 'For receiving international wire transfers, banks use the SWIFT/BIC code alongside the IFSC. Our finder retrieves both codes in one lookup.',
                },
                {
                  icon: '🧾',
                  title: 'Tax Refunds and Govt Payments',
                  desc: 'Income tax refunds (ITR processing), government scheme payments (PM-KISAN, scholarships, DBT), and court payments require a valid IFSC code registered with your bank.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0 mt-0.5">{uc.icon}</span>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm">{uc.title}</h3>
                    <p className="text-xs text-surface-500 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions — IFSC Code
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Everything you need to know about IFSC codes, format, and usage.
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

          {/* EEAT */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">
                  Built by ToolStackHub — Accurate, Free, Always Available
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  This IFSC code finder is powered by the Razorpay IFSC API — one of the most comprehensive
                  and regularly updated databases of Indian bank branches. Your IFSC lookup is done live;
                  no data is stored or logged on our servers. The tool covers all RBI-recognised banks
                  including public sector banks, private sector banks, regional rural banks (RRBs),
                  cooperative banks, and small finance banks operating in India.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ No data stored
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔄 Live API data
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    🏦 200+ Indian banks covered
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="ifsc-finder" />
      <Footer />
    </>
  );
}
