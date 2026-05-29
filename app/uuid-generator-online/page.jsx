import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import UuidGenerator from '../../components/tools/UuidGenerator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'UUID Generator Online Free – Generate UUID v4 Instantly',
  description: 'Generate cryptographically secure UUID v4 online free. Single or bulk up to 100. Uppercase, lowercase, with or without hyphens. No signup needed. Try now!',
  keywords: [
    'uuid generator online',
    'uuid v4 generator',
    'guid generator online',
    'generate unique id online',
    'bulk uuid generator',
    'random uuid generator',
    'uuid without hyphens',
    'uuid generator free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/uuid-generator-online` },
  openGraph: {
    title: 'UUID Generator Online Free – Generate UUID v4 Instantly',
    description: 'Generate cryptographically secure UUID v4 free. Single or bulk up to 100. Uppercase, lowercase, with or without hyphens. No signup.',
    url: `${SITE_CONFIG.url}/uuid-generator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UUID Generator Online Free – UUID v4 Instantly',
    description: 'Generate cryptographically secure UUID v4 free. Bulk up to 100, custom formatting, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is UUID v4?',
    a: 'UUID v4 (Universally Unique Identifier version 4) is a randomly generated 128-bit identifier formatted as 32 hexadecimal characters in the pattern 8-4-4-4-12 (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx). The "4" in the third group indicates version 4, and the "y" in the fourth group is constrained to 8, 9, a, or b to indicate the RFC 4122 variant. With 5.3×10³⁶ possible values, duplicate UUIDs are statistically impossible.',
  },
  {
    q: 'Is UUID the same as GUID?',
    a: 'GUID (Globally Unique Identifier) is Microsoft\'s terminology for the same concept. GUIDs and UUIDs use the same format and are completely interchangeable in virtually all programming contexts. The terms are used synonymously in .NET, SQL Server, and COM programming, while UUID is more common in open-source and cross-platform contexts.',
  },
  {
    q: 'Are generated UUIDs truly unique?',
    a: 'Yes — using crypto.randomUUID() which calls the OS cryptographically secure random number generator. The probability of generating a duplicate UUID v4 is approximately 1 in 5.3×10³⁶. To put that in perspective: generating 1 billion UUIDs per second for the entire age of the universe would give you a less than 0.00000001% chance of a collision.',
  },
  {
    q: 'Is the UUID generator free?',
    a: 'Yes — completely free with no account, no API keys, and no usage limits. Generate single UUIDs or bulk sets of up to 100 as many times as you need.',
  },
  {
    q: 'Can I generate UUIDs without hyphens?',
    a: 'Yes — toggle the hyphens off to get a compact 32-character hex string without separators. This format is commonly used in database storage, URL slugs, and systems that don\'t support the standard hyphenated UUID format.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'UUID Generator Online',
      description: 'Free browser-based UUID v4 generator using crypto.randomUUID(). Supports single and bulk generation up to 100, uppercase/lowercase toggle, and hyphens on/off formatting.',
      url: `${SITE_CONFIG.url}/uuid-generator-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Generates UUID version 4 using crypto.randomUUID()',
        'Bulk generation up to 100 UUIDs at once',
        'Uppercase and lowercase toggle',
        'Hyphens on/off formatting option',
        'Individual and bulk copy buttons',
        '100% free with no account required',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
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
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools',  item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'UUID Generator',   item: `${SITE_CONFIG.url}/uuid-generator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Generate a UUID Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Set quantity',        text: 'Enter how many UUIDs you need — 1 for single, up to 100 for bulk.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose format',       text: 'Toggle uppercase or lowercase, and hyphens on or off.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Generate',      text: 'Click Generate UUID to create your UUIDs instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy and use',        text: 'Click the copy icon next to any UUID or Copy All for the full list.' },
      ],
    },
  ],
};

// ── UUID version comparison ───────────────────────────────────
const uuidVersions = [
  { version: 'v1', basis: 'Timestamp + MAC address', use: 'When you need sortable IDs tied to creation time. Exposes machine MAC address — privacy concern in some contexts.', recommended: false },
  { version: 'v3', basis: 'MD5 hash of namespace + name', use: 'When you need deterministic IDs from a name — same input always produces same UUID. MD5 is outdated.', recommended: false },
  { version: 'v4', basis: 'Cryptographically random', use: 'General purpose unique IDs. Best choice for database keys, session tokens, and file names. No information leakage.', recommended: true },
  { version: 'v5', basis: 'SHA-1 hash of namespace + name', use: 'Deterministic IDs like v3 but using SHA-1. Use when the same name must always resolve to the same UUID.', recommended: false },
];

// ── Page ──────────────────────────────────────────────────────
export default function UuidGeneratorOnlinePage() {
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
                <li><Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">UUID Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free UUID Generator Online – Generate Cryptographically Secure UUID v4
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate UUID v4 identifiers instantly using your browser's native{' '}
              <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">crypto.randomUUID()</code> API.
              Single or bulk up to 100, uppercase or lowercase, with or without hyphens.
              Free, no signup, fully local.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔐 crypto.randomUUID()',
                '📦 Bulk up to 100',
                '⚡ Instant',
                '🔒 No Signup',
                '💻 Developer Ready',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <UuidGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="UUID Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              UUID Generator Online – Free, Secure & Instant
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>UUID generator online</strong> creates universally unique identifiers —
                128-bit values with 5.3×10³⁶ possible combinations — used as primary keys in
                databases, session tokens in APIs, file identifiers in cloud storage, and unique
                IDs across distributed systems. Our free generator uses the browser's native{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">crypto.randomUUID()</code>{' '}
                API for cryptographically secure generation — not{' '}
                <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">Math.random()</code>.
              </p>
              <p>
                Generate a single UUID or up to 100 at once, with options for uppercase or
                lowercase hex and with or without hyphens. The standard hyphenated format
                (<code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx</code>)
                is used by default — matching the RFC 4122 specification used by PostgreSQL,
                MySQL, MongoDB, .NET, Java, and Python UUID libraries. No installation, no
                API keys, no account required.
              </p>
              <p>
                Whether you need a <strong>UUID v4 generator</strong> for database primary keys,
                a <strong>GUID generator online</strong> for .NET applications, or a
                <strong> bulk UUID generator</strong> for seeding test databases — this tool
                produces correctly formatted, genuinely random identifiers every time.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Generate a UUID Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🔢', title: 'Set Quantity',       desc: 'Enter how many UUIDs you need — 1 for a single UUID, up to 100 for bulk generation for test data or batch operations.' },
                { step: '02', icon: '🔡', title: 'Choose Case',        desc: 'Toggle uppercase (A–F) or lowercase (a–f) hex characters. Most systems accept either — lowercase is the most common convention.' },
                { step: '03', icon: '➖', title: 'Toggle Hyphens',     desc: 'Hyphens on gives the standard format. Hyphens off gives a compact 32-char string for databases that store UUIDs as CHAR(32).' },
                { step: '04', icon: '✨', title: 'Generate & Copy',    desc: 'Click Generate UUID. Copy individual UUIDs with the copy icon, or click Copy All to copy the full list to clipboard.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — UUID versions */}
          <section aria-labelledby="versions-heading">
            <h2 id="versions-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              UUID Versions Explained – Which One Should You Use?
            </h2>
            <div className="space-y-3">
              {uuidVersions.map(v => (
                <div key={v.version}
                  className={`p-4 rounded-xl border-2 ${v.recommended ? 'bg-blue-50 border-blue-300' : 'bg-surface-50 border-surface-200'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 font-mono font-bold text-lg px-3 py-1 rounded-lg ${v.recommended ? 'bg-blue-600 text-white' : 'bg-surface-200 text-surface-600'}`}>
                      {v.version}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-semibold text-sm ${v.recommended ? 'text-blue-900' : 'text-surface-800'}`}>
                          Based on: {v.basis}
                        </span>
                        {v.recommended && (
                          <span className="text-xs font-medium bg-blue-600 text-white px-2 py-0.5 rounded-full">⭐ Recommended</span>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${v.recommended ? 'text-blue-700' : 'text-surface-500'}`}>{v.use}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔐', title: 'crypto.randomUUID() API',       desc: 'Uses the browser\'s cryptographically secure PRNG — the same entropy source as TLS encryption. Not Math.random().' },
                { icon: '📦', title: 'Bulk Generation up to 100',     desc: 'Generate 1 to 100 UUIDs in a single click. Perfect for seeding test databases, creating batch records, or populating fixture files.' },
                { icon: '🔡', title: 'Uppercase / Lowercase Toggle',  desc: 'Switch between uppercase (A1B2C3...) and lowercase (a1b2c3...) hex output. Lowercase is the RFC 4122 standard.' },
                { icon: '➖', title: 'Hyphens On / Off',              desc: 'Standard format with hyphens (8-4-4-4-12) or compact without (32 chars). Both formats are valid and widely supported.' },
                { icon: '📋', title: 'Individual & Bulk Copy',        desc: 'Copy a single UUID with its row copy button, or copy the entire generated list at once with Copy All.' },
                { icon: '🔒', title: 'Fully Local',                   desc: 'All generation runs in your browser. No UUIDs are sent to a server, logged, or stored anywhere.' },
                { icon: '♾️', title: 'No Rate Limits',                desc: 'Generate as many times as you need. No daily cap, no API key, no account required.' },
                { icon: '💻', title: 'RFC 4122 Compliant',            desc: 'Generated UUIDs follow the RFC 4122 specification — compatible with all major databases, languages, and frameworks.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🗄️',
                  title: 'Database Primary Keys',
                  desc: 'Use UUID v4 as primary keys in PostgreSQL (uuid type), MySQL (CHAR(36)), MongoDB (_id field), and SQLite. UUIDs prevent sequential ID enumeration attacks and enable safe distributed inserts across multiple database replicas.',
                },
                {
                  icon: '🔑',
                  title: 'API Session & Request IDs',
                  desc: 'Generate session identifiers, request correlation IDs, and trace IDs for distributed systems. UUIDs in log entries allow you to trace a single request across multiple microservices without collision.',
                },
                {
                  icon: '☁️',
                  title: 'Cloud Storage Filenames',
                  desc: 'Use UUIDs as file names for S3 buckets, Firebase Storage, and Azure Blob Storage. This prevents naming conflicts when multiple users upload files simultaneously and eliminates the need to check for existing filenames.',
                },
                {
                  icon: '🧪',
                  title: 'Test Data Generation',
                  desc: 'Bulk-generate UUIDs for unit test fixtures, integration test payloads, and database seed scripts. Using real UUIDs in tests prevents brittle hardcoded strings that might conflict with actual data.',
                },
                {
                  icon: '📡',
                  title: 'Event & Analytics IDs',
                  desc: 'Assign unique IDs to analytics events, user actions, A/B test variants, and telemetry data points in tracking and observability systems like Segment, Mixpanel, and OpenTelemetry.',
                },
                {
                  icon: '📄',
                  title: 'Document & Record IDs',
                  desc: 'Generate document IDs for Firestore, DynamoDB, CouchDB, and other NoSQL databases that require developer-specified IDs rather than auto-generated ones.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-blue-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — How it works */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How UUID v4 Generation Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                UUID v4 is generated using{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">crypto.randomUUID()</code>{' '}
                — a browser API that draws entropy from the operating system's cryptographically
                secure pseudo-random number generator (CSPRNG). The 128-bit random value is
                formatted as 32 hexadecimal characters separated by hyphens in the pattern
                8-4-4-4-12.
              </p>
              <p>
                Two bits are reserved to indicate the UUID variant (RFC 4122), and four bits
                indicate version 4 — the remaining 122 bits are cryptographically random. This
                gives 2¹²² ≈ 5.3×10³⁶ possible UUIDs. Generating 1 billion UUIDs per second
                for 85 years would give approximately a 50% chance of a single collision — in
                practice, the collision probability is effectively zero for any real application.
              </p>

              <div className="bg-surface-900 rounded-xl p-4 font-mono text-sm mt-4">
                <div className="text-surface-400 text-xs mb-2">{'// UUID v4 structure'}</div>
                <div className="text-emerald-300">
                  xxxxxxxx - xxxx - <span className="text-amber-300">4</span>xxx - <span className="text-violet-300">y</span>xxx - xxxxxxxxxxxx
                </div>
                <div className="text-surface-500 text-xs mt-3 space-y-1">
                  <div><span className="text-emerald-400">x</span> = random hex digit (0–f)</div>
                  <div><span className="text-amber-400">4</span> = version indicator (always 4 for v4)</div>
                  <div><span className="text-violet-400">y</span> = variant indicator (8, 9, a, or b)</div>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Generator vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs UUID npm package',       point: 'Requires Node.js or a bundler. This tool works instantly in any browser — useful when you just need a quick UUID outside a development environment.' },
                { label: 'vs uuidgenerator.net',      point: 'Cloud-based generators send your request to a remote server. All generation here is local — no network call, no server logging your UUID request.' },
                { label: 'vs crypto.randomUUID() direct', point: 'You can call this in the browser console, but this tool adds bulk generation, formatting options, and one-click copy — saving time for repeated tasks.' },
                { label: 'vs sequential integer IDs', point: 'Auto-increment integer IDs expose your record counts and are unsafe in distributed systems. UUIDs are safe to generate client-side without a database roundtrip.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free UUID Generator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need a <strong>UUID v4 generator</strong> for database primary keys,
                a <strong>GUID generator online</strong> for .NET and SQL Server applications,
                a <strong>bulk UUID generator</strong> for test fixture files, or a
                <strong> unique ID generator online</strong> for any distributed system — this
                tool covers every use case with genuine cryptographic security and RFC 4122
                compliance.
              </p>
              <p>
                The formatting options — uppercase/lowercase and hyphens on/off — cover the
                three most common UUID storage patterns used in production systems: the standard
                hyphenated lowercase format for PostgreSQL and most ORMs, uppercase for SQL
                Server compatibility, and no-hyphens compact format for systems storing UUIDs
                as fixed-length strings.
              </p>
            </div>
          </section>

          {/* Section 8 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More UUID & ID Generator Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors group">
                  <div className="font-semibold text-blue-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-blue-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Developer Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tools/password-generator',  icon: '🔐', label: 'Password Generator Online',  desc: 'Generate cryptographically secure random passwords' },
                { href: '/tools/random-number-generator',    icon: '🎲', label: 'Random Number Generator',    desc: 'Generate random numbers in any range' },
                { href: '/tools/base64-encoder',      icon: '🔡', label: 'Base64 Encoder Online',      desc: 'Encode and decode Base64 strings and data' },
                { href: '/tools/json-formatter',      icon: '{ }',label: 'JSON Formatter Online',     desc: 'Format and validate JSON containing UUID fields' },
                { href: '/tools/timestamp-converter',   icon: '⏱️', label: 'Timestamp Converter',        desc: 'Convert timestamps to pair with UUID primary keys' },
                { href: '/tools/regex-tester',        icon: '🔍', label: 'Regex Tester Online',        desc: 'Test UUID validation regex patterns in real time' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-blue-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="uuid-generator-online" />
      <Footer />
    </>
  );
}