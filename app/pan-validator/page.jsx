import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import PanValidator from '../../components/tools/PanValidator';
import { SITE_CONFIG } from '../../data/tools';

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: 'PAN Card Validator – Verify PAN Number Online Free',
  description:
    'Validate any PAN card number instantly online. Check PAN format, identify holder type (Individual, Company, HUF), and decode PAN structure. Free, no signup.',
  keywords: [
    'PAN card validator',
    'PAN number validator',
    'verify PAN number online',
    'PAN card verification',
    'PAN format checker',
    'PAN number format',
    'validate PAN card',
    'PAN card check',
    'PAN number check online',
    'PAN card number format India',
    'income tax PAN validator',
    'free PAN validator',
    'PAN card structure',
    'AAAAA9999A format',
    'PAN holder type',
    'individual PAN verification',
    'company PAN verification',
    'HUF PAN card',
    'PAN card online tool',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/pan-validator` },
  openGraph: {
    title: 'PAN Card Validator – Verify PAN Number Online Free',
    description:
      'Validate any PAN card number instantly. Check format, identify holder type (Individual, Company, HUF, Firm), decode all 10 characters. Free, browser-only, no signup.',
    url: `${SITE_CONFIG.url}/pan-validator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAN Card Validator – Verify PAN Number Online Free',
    description:
      'Validate your PAN number format instantly. Decodes holder type (Individual, Company, HUF) and all 10 characters. 100% browser-based, no data stored.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is a PAN card number format?',
    a: 'A PAN number is a 10-character alphanumeric code: first 5 letters, next 4 digits, last 1 letter. Example: ABCDE1234F. The 4th character indicates the taxpayer type.',
  },
  {
    q: 'How do I know if my PAN is valid?',
    a: 'Enter your PAN number in the validator above. It checks the format against the official AAAAA9999A pattern and decodes the taxpayer type instantly.',
  },
  {
    q: 'What does the 4th character of PAN mean?',
    a: 'P = Individual, C = Company, H = HUF (Hindu Undivided Family), F = Firm, A = Association of Persons, B = Body of Individuals, G = Government, L = Local Authority, J = Artificial Juridical Person, T = Trust.',
  },
  {
    q: 'Is my PAN number safe to enter here?',
    a: 'Yes. This tool runs entirely in your browser. Your PAN number is never sent to any server or stored anywhere.',
  },
  {
    q: 'Can this tool verify my PAN with the Income Tax Department?',
    a: 'No — this tool validates the format and structure only. For official verification, use the Income Tax e-filing portal at incometax.gov.in.',
  },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function PanValidatorPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'PAN Card Validator – Verify PAN Number Online Free',
        description:
          'Validate any PAN card number format online. Decode holder type, officer initials, surname initial, and check digit. Free, no signup, runs in browser.',
        url: `${SITE_CONFIG.url}/pan-validator`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'Validates PAN format against official AAAAA9999A pattern',
          'Decodes taxpayer type (Individual, Company, HUF, Firm, etc.)',
          'Breaks down all 10 characters with explanations',
          'Clickable example PANs for quick testing',
          'Copy PAN to clipboard',
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
          { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/utility-tools` },
          { '@type': 'ListItem', position: 3, name: 'PAN Card Validator', item: `${SITE_CONFIG.url}/pan-validator` },
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
                <li className="text-surface-700 font-medium">PAN Card Validator</li>
              </ol>
            </nav>

            {/* Featured snippet block */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                📌 What is a PAN Number?
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                A <strong>Permanent Account Number (PAN)</strong> is a 10-character alphanumeric identifier
                issued by the <strong>Income Tax Department of India</strong> to every taxpayer. The format
                is <strong className="font-mono">AAAAA9999A</strong> — five letters, four digits, one letter.
                The 4th character indicates the taxpayer type (P = Individual, C = Company, H = HUF, etc.).
                Enter any PAN below to validate its format and decode its structure instantly.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              PAN Card Validator — Verify PAN Number Online Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Instantly validate any <strong className="text-surface-700">PAN card number</strong> against the
              official <strong className="text-surface-700">AAAAA9999A format</strong>. Decode the holder type
              (Individual, Company, HUF, Firm), issuing officer initials, surname initial, and check digit.
              100% free, browser-only, no data stored.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                { stat: '10 Chars',     label: '5 letters · 4 digits · 1 letter'            },
                { stat: '10 Types',     label: 'Individual, Company, HUF, Firm & more'       },
                { stat: 'Instant',      label: 'Real-time validation as you type'            },
                { stat: '100% Private', label: 'Never sent to any server'                    },
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
                '🇮🇳 India-Specific',
                '⚡ Instant Results',
                '🔒 No Data Stored',
                '🚫 No Signup',
                '📱 Works on Mobile',
                '🔍 Format Decoder',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PanValidator />
        </div>

        {/* ── CONTENT ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          {/* AD BANNER */}
          <AdBanner slot="pan-validator-mid" />

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Use the PAN Validator — 3 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: '1', icon: '⌨️', title: 'Type or paste your PAN', desc: 'Enter any 10-character PAN in the field above. It auto-converts to uppercase and accepts only valid characters.' },
                { n: '2', icon: '⚡', title: 'Get real-time feedback', desc: 'As you type, the validator shows partial hints. Once all 10 characters are entered, the full validation result appears instantly.' },
                { n: '3', icon: '🔍', title: 'Read the decoded details', desc: 'For valid PANs, see the holder type, issuing officer initials, surname initial, serial number, and check digit explained.' },
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

          {/* PAN STRUCTURE */}
          <section className="bg-gradient-to-br from-brand-50 to-indigo-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Understanding the PAN Card Number Structure
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-6">
              Every PAN follows the format <span className="font-mono font-bold text-surface-800">AAAAA9999A</span>.
              Each of the 10 characters carries specific information about the taxpayer and the issuing authority.
            </p>

            <div className="overflow-x-auto rounded-xl border border-brand-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ color: '#ffffff' }} className="text-center px-4 py-3 font-semibold rounded-tl-xl">Position</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Type</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold">Meaning</th>
                    <th style={{ color: '#ffffff' }} className="text-left px-4 py-3 font-semibold rounded-tr-xl">Example (ABCPE1234F)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pos: '1–3', type: '3 Letters', meaning: 'Alphabetic series issued by the Assessing Officer (AO)',  ex: 'ABC' },
                    { pos: '4',   type: '1 Letter',  meaning: 'Taxpayer type (P=Individual, C=Company, H=HUF…)',         ex: 'P'   },
                    { pos: '5',   type: '1 Letter',  meaning: 'First letter of surname / entity name',                   ex: 'E'   },
                    { pos: '6–9', type: '4 Digits',  meaning: 'Unique sequential number within the AO series',           ex: '1234'},
                    { pos: '10',  type: '1 Letter',  meaning: 'Alphabetic check character for format integrity',          ex: 'F'   },
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

          {/* TAXPAYER TYPES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              PAN Taxpayer Type Codes — What the 4th Character Means
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { ch: 'P', label: 'Individual',                   icon: '👤', desc: 'For salaried employees, self-employed professionals, freelancers, and any natural person filing income tax.' },
                { ch: 'C', label: 'Company',                      icon: '🏢', desc: 'Corporations and companies registered under the Companies Act, 2013 or the earlier Companies Act, 1956.' },
                { ch: 'H', label: 'Hindu Undivided Family (HUF)', icon: '👨‍👩‍👧', desc: 'A joint family entity governed by Hindu law. Has a separate PAN from the individual members.' },
                { ch: 'F', label: 'Firm / LLP',                   icon: '🤝', desc: 'Partnership firms and Limited Liability Partnerships (LLPs) registered under the relevant Acts.' },
                { ch: 'A', label: 'Association of Persons (AOP)', icon: '👥', desc: 'A group of persons joining for a common purpose — e.g. cooperative societies, AOPs under the IT Act.' },
                { ch: 'B', label: 'Body of Individuals (BOI)',    icon: '🫂', desc: 'A group of individuals — different from AOP in that it cannot include non-individual members.' },
                { ch: 'G', label: 'Government',                   icon: '🏛️', desc: 'Central and State Government departments, ministries, and government bodies.' },
                { ch: 'J', label: 'Artificial Juridical Person',  icon: '⚖️', desc: 'Entities with legal personality but not falling into other categories — e.g. universities, statutory bodies.' },
                { ch: 'L', label: 'Local Authority',              icon: '🏙️', desc: 'Municipalities, panchayats, cantonment boards, port trusts, and other local governing bodies.' },
                { ch: 'T', label: 'Trust / AOP (Trusts)',         icon: '🏥', desc: 'Registered trusts and associations of persons formed as trusts — e.g. charitable trusts, religious trusts.' },
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
          </section>

          {/* AFFILIATE CTA */}
          <AffiliateCTA />

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions — PAN Card Validator
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Common questions about PAN format, validation, and taxpayer types.
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
                { href: '/tools/gst-calculator',             icon: '🧾', label: 'GST Calculator',              desc: 'Add or remove GST at 3%, 5%, 12%, 18%, 28%'          },
                { href: '/tools/salary-calculator',           icon: '💰', label: 'Salary Calculator',            desc: 'Take-home salary under old vs new tax regime'         },
                { href: '/tools/hra-calculator',              icon: '🏠', label: 'HRA Calculator',               desc: 'Calculate HRA exemption for income tax'               },
                { href: '/tools/professional-tax-calculator', icon: '📋', label: 'Professional Tax Calculator',  desc: 'State-wise professional tax calculation'              },
                { href: '/tools/emi-calculator',              icon: '🧮', label: 'EMI Calculator',               desc: 'Plan home, car, or personal loan EMIs'                },
                { href: '/tools/percentage-calculator',icon: '📊', label: 'Percentage Calculator',        desc: 'Quick percentage calculations for marks and ratios'   },
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
                  This PAN validator is built by the ToolStackHub team and runs entirely in your browser.
                  Your PAN number is never sent to any server, never stored, and never logged.
                  The validation checks the official Income Tax Department format (AAAAA9999A) and decodes
                  all 10 characters using the published PAN structure rules. This tool performs
                  <strong> format validation only</strong> — it does not connect to the Income Tax database.
                  For official PAN verification, use the Income Tax e-filing portal at incometax.gov.in.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ PAN never leaves your device
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🇮🇳 India Income Tax Department format
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
      <RelatedToolsCluster currentSlug="pan-validator" />
      <Footer />
    </>
  );
}
