import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import JwtDecoder from '../../components/tools/JwtDecoder';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JWT Decoder Online – Decode & Inspect JWT Tokens Free',
  description: 'Decode JWT tokens online instantly. View header, payload claims (sub, iat, exp), and signature. Check token expiry. All browser-based, no data sent to servers.',
  alternates: { canonical: `${SITE_CONFIG.url}/jwt-decoder-online` },
  openGraph: {
    title: 'JWT Decoder Online – Decode & Inspect JWT Tokens Free',
    description: 'Decode JWT tokens in your browser — no data leaves your device. Free, instant.',
    url: `${SITE_CONFIG.url}/jwt-decoder-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWT Decoder Online – Decode JWT Tokens Instantly',
    description: 'Decode JWT tokens: view header, payload, expiry. 100% browser-based.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'What is a JWT token?',
    a: 'JWT (JSON Web Token) is a compact, URL-safe token format used for authentication and authorization. It consists of 3 base64url-encoded parts: Header (algorithm), Payload (claims/data), and Signature (verification).',
  },
  {
    q: 'Is it safe to paste my JWT token here?',
    a: 'Yes — this tool runs entirely in your browser. Your JWT token is never sent to any server. However, production JWTs contain authentication credentials, so use a test token or decoded copy when possible.',
  },
  {
    q: 'Can this tool verify JWT signatures?',
    a: 'No — signature verification requires the secret key (HMAC) or public key (RSA/ECDSA), which is never shared. This tool only decodes the header and payload. Use your backend or a trusted library for signature verification.',
  },
  {
    q: 'What does the "exp" claim mean?',
    a: 'The "exp" (expiration) claim is a Unix timestamp indicating when the token expires. This tool automatically shows the human-readable date and flags tokens that have already expired.',
  },
  {
    q: 'What is base64url encoding?',
    a: 'Base64url is a URL-safe variant of Base64 that uses - instead of + and _ instead of /. JWTs use base64url encoding for each of the three parts. This tool automatically handles the decoding.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'JWT Decoder Online',
      url: `${SITE_CONFIG.url}/jwt-decoder-online`,
      description: 'Free browser-based JWT decoder. Paste any JWT to view header, payload claims, expiry time, and signature. No data sent to servers.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools',  item: `${SITE_CONFIG.url}/tools/developer` },
        { '@type': 'ListItem', position: 3, name: 'JWT Decoder',      item: `${SITE_CONFIG.url}/jwt-decoder-online` },
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

export default function JwtDecoderPage() {
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
                <li><Link href="/tools/developer" className="hover:text-brand-600 transition-colors">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">JWT Decoder</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JWT Decoder Online — Decode & Inspect JWT Tokens
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Paste any JSON Web Token to instantly decode the header, payload claims (sub, iat, exp, role),
              and signature. Checks token expiry and flags expired tokens. 100% browser-based — your token
              never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 Browser-Only', '⚡ Instant Decode', '🔍 Expiry Check', '💻 Developer Tool'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdBanner variant="top" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <JwtDecoder />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12">
          <AdBanner variant="content" />

          {/* JWT structure explanation */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">JWT Token Structure</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A JSON Web Token consists of three base64url-encoded parts separated by dots (<code className="bg-surface-100 px-1 rounded text-sm font-mono">.</code>):
              </p>
              <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
                <span className="text-rose-600 font-bold">HEADER</span>
                <span className="text-surface-400">.</span>
                <span className="text-violet-600 font-bold">PAYLOAD</span>
                <span className="text-surface-400">.</span>
                <span className="text-emerald-600 font-bold">SIGNATURE</span>
              </div>
              <ul className="space-y-2 text-sm list-none pl-0">
                <li><strong className="text-rose-600">Header:</strong> contains the algorithm (alg: HS256, RS256, etc.) and token type (typ: JWT)</li>
                <li><strong className="text-violet-600">Payload:</strong> contains the claims — sub (subject/user ID), iat (issued at), exp (expiry), and custom claims like email, role, name</li>
                <li><strong className="text-emerald-600">Signature:</strong> HMAC or RSA signature to verify the token hasn&apos;t been tampered with. Requires the secret/public key to verify.</li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
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

          <RelatedToolsCluster currentSlug="jwt-decoder-online" />
        </div>

      </main>
      <Footer />
    </>
  );
}
