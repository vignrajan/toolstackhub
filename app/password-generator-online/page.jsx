import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import PasswordGenerator from '../../components/tools/PasswordGenerator';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Password Generator Online Free – Strong Secure Passwords',
  description: 'Generate cryptographically secure random passwords online free. Customize length, character types, and bulk generation up to 20. No signup required. Try now!',
  keywords: [
    'password generator online',
    'strong password generator',
    'random password generator free',
    'secure password creator',
    'generate strong password',
    'password generator with symbols',
    'bulk password generator',
    '16 character password generator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/password-generator-online` },
  openGraph: {
    title: 'Password Generator Online Free – Strong Secure Passwords',
    description: 'Generate cryptographically secure passwords free. Customize length and character types. Bulk generation up to 20. No signup.',
    url: `${SITE_CONFIG.url}/password-generator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Password Generator Online Free – Strong & Secure',
    description: 'Create cryptographically secure passwords free. Customize length, characters, and generate in bulk. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What makes a password strong?',
    a: 'Four factors determine password strength: length (12+ characters), character variety (uppercase, lowercase, numbers, and symbols), true randomness (no dictionary words, names, or patterns), and uniqueness (never reused across different accounts). Length has the greatest impact — a 16-character password is exponentially harder to crack than an 8-character one, regardless of complexity.',
  },
  {
    q: 'Are generated passwords stored anywhere?',
    a: 'No — passwords are generated and displayed in your browser only using JavaScript. Nothing is stored, transmitted to a server, or logged anywhere. Close the browser tab and the passwords are permanently gone. This is one of the key security advantages over cloud-based password generators.',
  },
  {
    q: 'Is the password generator free?',
    a: 'Yes — completely free with no account, no API keys, and no usage limits. Generate individual passwords or bulk sets of up to 20 at a time, as many times as you need.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes — fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. Generate and copy passwords directly from your smartphone.',
  },
  {
    q: 'What length password should I use?',
    a: '16 characters is the modern minimum recommendation for most accounts. Use 20+ characters for high-value accounts such as email, banking, cloud services, and password managers. The length increase has a far greater security impact than adding symbol requirements — a 20-character lowercase-only password is stronger than an 8-character password with all character types.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Password Generator Online',
      description: 'Free browser-based password generator using crypto.getRandomValues(). Customize length 4–128 chars, character types, ambiguous character exclusion, and bulk generation up to 20 passwords.',
      url: `${SITE_CONFIG.url}/password-generator-online`,
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Cryptographically secure using crypto.getRandomValues()',
        'Length customization 4–128 characters',
        'Toggle uppercase, lowercase, numbers, and symbols',
        'Ambiguous character exclusion',
        'Bulk generation up to 20 passwords',
        'Real-time password strength meter',
        'Passwords never stored or transmitted',
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
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Password Generator', item: `${SITE_CONFIG.url}/password-generator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Generate a Strong Password Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Set password length',    text: 'Use the slider to set your desired length. 16 characters is recommended minimum.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose character types', text: 'Toggle uppercase, lowercase, numbers, and symbols based on account requirements.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Generate',         text: 'Click Generate Password. The strength meter shows your password security rating instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy and use',           text: 'Click the copy icon next to the password and paste it into your account or password manager.' },
      ],
    },
  ],
};

// ── Strength guide data ───────────────────────────────────────
const strengthLevels = [
  { label: 'Weak',      chars: '8 chars, one type',       time: 'Minutes to hours',    color: 'red',    example: 'password123' },
  { label: 'Fair',      chars: '10–11 chars, mixed',      time: 'Days to weeks',        color: 'amber',  example: 'P@ssw0rd12' },
  { label: 'Strong',    chars: '14–15 chars, all types',  time: 'Years to centuries',   color: 'emerald',example: 'Kx9#mP2vLq!nR7' },
  { label: 'Very Strong',chars: '16+ chars, all types',   time: 'Billions of years',    color: 'blue',   example: 'Generated by this tool' },
];

// ── Page ──────────────────────────────────────────────────────
export default function PasswordGeneratorOnlinePage() {
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
                <li><Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Password Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Password Generator Online – Create Strong, Secure Passwords Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate cryptographically secure random passwords with customizable length,
              character types, and bulk generation. Free, no signup, runs entirely in your
              browser — your passwords never leave your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔐 Cryptographically Secure',
                '🔒 Never Stored',
                '⚡ Instant',
                '📦 Bulk Generation',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PasswordGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Password Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Strong Password Generator Online – Free & Cryptographically Secure
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>password generator online</strong> creates cryptographically
                secure random passwords using the browser's native{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">crypto.getRandomValues()</code>{' '}
                API — the same cryptographic standard used by operating systems, TLS encryption,
                and security professionals worldwide. This is fundamentally different from tools
                that use <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">Math.random()</code>,
                which is predictable and NOT suitable for security applications.
              </p>
              <p>
                Customize password length from 4 to 128 characters, toggle uppercase letters,
                lowercase letters, numbers, and symbols independently, exclude ambiguous
                characters like <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">l, I, 1, O, 0</code> to
                prevent transcription errors, and generate up to 20 passwords at once for bulk
                account setup or team deployments.
              </p>
              <p>
                Whether you need a <strong>strong password generator</strong> for a new account,
                a <strong>random password generator free</strong> for testing, or a
                <strong> bulk password generator</strong> for employee onboarding — this
                tool generates genuinely secure passwords that cannot be predicted or reverse-engineered.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Generate a Strong Password
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📏', title: 'Set Password Length',    desc: 'Drag the slider to your desired length. 16 characters minimum for most accounts, 20+ for banking and email.' },
                { step: '02', icon: '🔤', title: 'Choose Character Types', desc: 'Toggle uppercase (A–Z), lowercase (a–z), numbers (0–9), and symbols (!@#$%) based on account requirements.' },
                { step: '03', icon: '⚙️', title: 'Set Options',            desc: 'Enable "Exclude ambiguous characters" to remove l, I, 1, O, 0 that are easy to misread or mistype.' },
                { step: '04', icon: '📦', title: 'Set Quantity',            desc: 'Set to 1 for a single password or up to 20 for bulk generation. Click Generate to create them all at once.' },
                { step: '05', icon: '✨', title: 'Generate',                desc: 'Click Generate Password. The strength meter instantly shows Weak, Fair, Strong, or Very Strong.' },
                { step: '06', icon: '📋', title: 'Copy & Use',              desc: 'Click the copy icon next to any password or Copy All for bulk output. Paste into your account or password manager.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Strength guide */}
          <section aria-labelledby="strength-heading">
            <h2 id="strength-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Password Strength Guide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengthLevels.map(s => (
                <div key={s.label} className={`p-5 rounded-2xl border-2 bg-${s.color}-50 border-${s.color}-200`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-display font-bold text-lg text-${s.color}-700`}>{s.label}</span>
                    <span className={`text-xs font-medium text-${s.color}-600 bg-${s.color}-100 px-2 py-1 rounded-full`}>{s.chars}</span>
                  </div>
                  <div className={`text-sm text-${s.color}-800 mb-2`}>
                    <strong>Crack time:</strong> {s.time}
                  </div>
                  <code className={`text-xs text-${s.color}-700 bg-${s.color}-100 px-2 py-1 rounded block`}>{s.example}</code>
                </div>
              ))}
            </div>
            <p className="text-xs text-surface-400 mt-3">
              * Crack times assume 10 billion guesses per second (modern GPU brute force attack).
            </p>
          </section>

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔐', title: 'Cryptographically Secure',     desc: 'Uses crypto.getRandomValues() — the browser\'s CSPRNG. Same security standard as TLS encryption, not Math.random().' },
                { icon: '📏', title: 'Length 4–128 Characters',      desc: 'Full control over password length. 16 chars for standard accounts, up to 128 for maximum security applications.' },
                { icon: '🔤', title: 'Character Type Control',       desc: 'Toggle uppercase, lowercase, numbers, and symbols independently to match any account\'s password policy requirements.' },
                { icon: '👁️', title: 'Ambiguous Char Exclusion',    desc: 'Remove l, I, 1, O, 0, and other visually similar characters to prevent transcription errors when typing manually.' },
                { icon: '📦', title: 'Bulk Generation Up to 20',     desc: 'Generate up to 20 unique passwords at once for team deployments, test environments, or mass account creation.' },
                { icon: '📊', title: 'Real-Time Strength Meter',     desc: 'Instant Weak / Fair / Strong / Very Strong rating updates as you adjust settings — see security impact in real time.' },
                { icon: '🔒', title: 'Never Stored or Transmitted',  desc: 'Passwords exist only in your browser tab. Close it and they\'re gone. No logging, no analytics, no server calls.' },
                { icon: '📱', title: 'Mobile Friendly',              desc: 'Works on all modern mobile browsers. Generate and copy strong passwords on your phone or tablet.' },
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
                  icon: '🔐',
                  title: 'New Account Registration',
                  desc: 'Generate a unique strong password for every new account you create. Password reuse is the most common cause of account takeovers — using a unique password per account eliminates this risk entirely.',
                },
                {
                  icon: '🔑',
                  title: 'Password Manager Setup',
                  desc: 'Create strong unique passwords for all your existing accounts and import them into Bitwarden, 1Password, LastPass, or Dashlane. A password manager + strong unique passwords is the most effective individual security upgrade available.',
                },
                {
                  icon: '👥',
                  title: 'Employee Onboarding',
                  desc: 'IT administrators use bulk generation to create temporary initial passwords for new employee accounts that comply with organizational security policies — then force a password change on first login.',
                },
                {
                  icon: '🔌',
                  title: 'API Keys & Service Tokens',
                  desc: 'Create strong random strings for API secrets, webhook tokens, session signing keys, database passwords, and service account credentials in development and production environments.',
                },
                {
                  icon: '📶',
                  title: 'WiFi Network Passwords',
                  desc: 'Generate strong WPA2/WPA3 WiFi passwords that are resistant to dictionary attacks and brute force attempts. Use the "exclude ambiguous characters" option so guests can type the password without confusion.',
                },
                {
                  icon: '🧪',
                  title: 'Security Testing',
                  desc: 'Generate bulk test passwords to validate authentication systems, test password strength validation rules, verify login rate limiting, and stress test account creation workflows.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — How it works + Why use */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Cryptographically Secure Password Generation Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                The generator calls{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">window.crypto.getRandomValues()</code>{' '}
                which draws entropy from the operating system's CSPRNG (Cryptographically Secure
                Pseudo-Random Number Generator) — the same entropy pool used by your OS to
                generate encryption keys, TLS certificates, and session tokens. The resulting
                random numbers are mapped to your chosen character set to produce the final
                password string.
              </p>
              <p>
                This is critically different from{' '}
                <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">Math.random()</code>{' '}
                — a deterministic algorithm that produces predictable sequences if the seed
                is known. Many online password generators use <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">Math.random()</code> and
                are therefore NOT cryptographically secure. Always verify that a password
                generator uses a CSPRNG before trusting it for security-sensitive applications.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Generator vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs LastPass Generator',   point: 'LastPass requires their app or account. This tool works in any browser instantly with no account and no dependency on a third-party service.' },
                { label: 'vs Random.org',            point: 'Random.org sends your configuration to a remote server. This tool generates passwords entirely locally — your parameters and passwords never leave your device.' },
                { label: 'vs Password Manager Built-In', point: 'Built-in generators are only accessible through the app. This tool is available in any browser, on any device, in any situation where you need a quick secure password.' },
                { label: 'vs Using a Phrase',        point: 'Memorable passphrases are good for master passwords but slow for bulk account creation. This tool generates strong random passwords in bulk with one click.' },
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
              The Best Free Password Generator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need a <strong>strong password generator</strong> for a new account,
                a <strong>random password generator free</strong> for development testing,
                a <strong>secure password creator</strong> for employee onboarding, or a
                <strong> 16 character password generator</strong> that meets corporate security
                policies — this tool covers every scenario with genuine cryptographic security.
              </p>
              <p>
                The key differentiator is the use of{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">crypto.getRandomValues()</code> — not{' '}
                <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">Math.random()</code>.
                Combined with zero server communication, this provides both genuine randomness
                and complete privacy. The password you generate is seen only by you — never
                logged, never transmitted, never stored.
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
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Password Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/strong-password-generator',        label: 'Strong Password Generator',        desc: 'Maximum security passwords with all character types' },
                { href: '/random-password-generator',        label: 'Random Password Generator',        desc: 'Truly random passwords using cryptographic entropy' },
                { href: '/wifi-password-generator',          label: 'WiFi Password Generator',          desc: 'Strong WPA2/WPA3 network passwords without ambiguous chars' },
                { href: '/bulk-password-generator',          label: 'Bulk Password Generator',          desc: 'Generate up to 20 passwords at once for team deployments' },
                { href: '/memorable-password-generator',     label: 'Memorable Password Generator',     desc: 'Strong but typeable passwords without ambiguous characters' },
                { href: '/16-character-password-generator',  label: '16-Character Password Generator',  desc: 'Exactly 16 characters — the recommended security minimum' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-violet-50 border border-violet-200 rounded-xl hover:bg-violet-100 transition-colors group">
                  <div className="font-semibold text-violet-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-violet-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/password-strength-checker', icon: '🛡️', label: 'Password Strength Checker', desc: 'Test how strong your existing passwords are' },
                { href: '/uuid-generator-online',     icon: '🆔', label: 'UUID Generator Online',     desc: 'Generate cryptographically secure unique identifiers' },
                { href: '/random-number-generator',   icon: '🎲', label: 'Random Number Generator',   desc: 'Generate random numbers in any range' },
                { href: '/base64-encoder-online',     icon: '🔐', label: 'Base64 Encoder Online',     desc: 'Encode passwords and tokens in Base64 for transmission' },
                { href: '/qr-code-generator-online',  icon: '📱', label: 'QR Code Generator',         desc: 'Share passwords securely via QR code' },
                { href: '/json-formatter-online',     icon: '{ }', label: 'JSON Formatter Online',    desc: 'Format API responses containing auth tokens' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-violet-800 text-sm">{l.label}</div>
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