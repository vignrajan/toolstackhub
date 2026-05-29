import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import PasswordStrengthChecker from '../../components/tools/PasswordStrengthChecker';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

export const metadata = {
  title: 'Password Strength Checker – Test Password Security',
  description: 'Check how strong your password is instantly. Security score, crack time estimate, and specific improvement tips. 100% local — password never transmitted.',
  alternates: { canonical: `${SITE_CONFIG.url}/password-strength-checker` },
  openGraph: {
    title: 'Password Strength Checker – Test Password Security',
    description: 'Check how strong your password is instantly. Security score, crack time estimate, and specific improvement tips. 100% local — password never transmitted.',
    url: `${SITE_CONFIG.url}/password-strength-checker`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Password Strength Checker – Test Password Security',
    description: 'Check how strong your password is instantly. Security score, crack time estimate, and specific improvement tips. 100% local — password never transmitted.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free Password Strength Checker',
      description: 'Check how strong your password is instantly. Security score, crack time estimate, and specific improvement tips. 100% local — password never transmitted.',
      url: `${SITE_CONFIG.url}/password-strength-checker`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'Free Password Strength Checker', item: `${SITE_CONFIG.url}/password-strength-checker` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/tools/password-generator', label: 'Password Generator Online', desc: 'Generate a cryptographically strong password' },
              { href: '/tools/uuid-generator', label: 'UUID Generator Online', desc: 'Generate unique identifiers as tokens' },
              { href: '/tools/base64-encoder', label: 'Base64 Encoder Online', desc: 'Encode passwords for transmission' },
              { href: '/tools/random-number-generator', label: 'Random Number Generator', desc: 'Generate random password components' },
];

const variantLinks = [
];

const faqs = [
  { q: 'Is it safe to type my real password here?', a: 'Yes — all analysis runs in your browser. Your password is never sent to any server, never stored, and never logged.' },
  { q: 'What makes a password very strong?', a: '16+ characters, mix of uppercase/lowercase/numbers/symbols, no dictionary words, no sequential patterns.' },
  { q: 'How is crack time estimated?', a: 'Based on 10 billion guesses per second — a reasonable estimate for a modern GPU-based brute force attack.' },
  { q: 'Is the checker free?', a: 'Yes — completely free with no account required.' },
  { q: 'Should I use this with my actual passwords?', a: 'Yes — it is safe. The best practice after finding a weak password is to generate a stronger replacement.' },
];

export default function Page() {
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
                <li>
                  <Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">
                    Utility Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free Password Strength Checker</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Password Strength Checker – Test Password Security & Crack Time Estimate
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Check how strong your password is instantly. Security score, crack time estimate, and specific improvement tips. 100% local — password never transmitted.</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PasswordStrengthChecker />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free Password Strength Checker" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔍', title: 'Password Auditing', desc: 'Test the strength of existing passwords before using them for critical accounts.' },
              { icon: '🏢', title: 'Security Policy', desc: 'Verify that generated passwords meet your organization minimum security requirements.' },
              { icon: '🎓', title: 'Security Education', desc: 'Demonstrate password security by testing weak vs strong passwords with concrete crack time estimates.' },
              { icon: '💼', title: 'Employee Training', desc: 'Show employees why password length and complexity matter in security awareness training.' },
              { icon: '🔐', title: 'High-Value Accounts', desc: 'Verify passwords protecting email, banking, and cloud accounts meet very strong standards.' },
              { icon: '🛡️', title: 'Security Research', desc: 'Analyze password patterns and strengths for red team exercises and penetration testing.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {variantLinks.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="password-strength-checker" />
      <Footer />
    </>
  );
}
