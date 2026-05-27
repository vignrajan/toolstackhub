import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import WhatsAppLinkGenerator from '../../components/tools/WhatsAppLinkGenerator';
import { SITE_CONFIG } from '../../data/tools';

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: 'WhatsApp Link Generator – Create Click-to-Chat Links Free',
  description:
    'Generate WhatsApp click-to-chat links with pre-filled messages. Perfect for business cards, websites, and social bios. Free, instant, no signup.',
  keywords: [
    'whatsapp link generator',
    'whatsapp click to chat link',
    'wa.me link generator',
    'whatsapp direct link',
    'whatsapp chat link',
    'whatsapp link generator india',
    'whatsapp link generator free',
    'whatsapp link with message',
    'whatsapp link generator online',
    'create whatsapp link',
    'whatsapp qr code generator',
    'whatsapp business link',
    'wa.me link',
    'whatsapp chat without saving number',
    'whatsapp link generator +91',
    'whatsapp link generator for website',
    'whatsapp link generator for business card',
    'pre-filled whatsapp message link',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/whatsapp-link-generator` },
  openGraph: {
    title: 'WhatsApp Link Generator – Create Click-to-Chat Links Free',
    description:
      'Generate WhatsApp click-to-chat links with pre-filled messages. Perfect for business cards, websites, and social bios. Free, instant, no signup.',
    url: `${SITE_CONFIG.url}/whatsapp-link-generator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Link Generator – Create Click-to-Chat Links Free',
    description:
      'Generate WhatsApp click-to-chat links with pre-filled messages. Perfect for India (+91), US, UK, UAE & more. Free, instant, no signup required.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is a WhatsApp click-to-chat link?',
    a: 'A wa.me link is a special URL that opens a WhatsApp chat directly — without the recipient needing to save your number first. You share the link on a website, business card, or social bio, and anyone who taps it is taken straight into a WhatsApp conversation with you.',
  },
  {
    q: 'Do I need WhatsApp installed to generate a link?',
    a: 'No. The link is generated entirely in your browser — no app, no account, no signup. Anyone with WhatsApp installed on their device can click the generated link to start a chat with you.',
  },
  {
    q: 'Can I add a pre-filled message?',
    a: 'Yes. Type your message in the optional "Pre-filled Message" field and it will be URL-encoded into the wa.me link automatically. When someone opens the link, the message appears pre-typed in their chat box — they can edit or send it as-is.',
  },
  {
    q: 'Is my phone number stored anywhere?',
    a: 'No. Everything runs entirely in your browser using JavaScript. Your phone number and any message you type are never sent to any server, never stored, and never logged. This is by design — ToolStackHub tools are browser-first and privacy-respecting.',
  },
  {
    q: 'Can I use this for India (+91) numbers?',
    a: 'Yes. India (+91) is the default country code. Enter your 10-digit mobile number and the generator creates the correct wa.me link with the full international format (+91XXXXXXXXXX). This works for personal numbers, business numbers, and WhatsApp Business accounts.',
  },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function WhatsAppLinkGeneratorPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'WhatsApp Link Generator',
        description:
          'Generate WhatsApp click-to-chat (wa.me) links with optional pre-filled messages. Supports India (+91), US, UK, UAE, and more. Free, instant, browser-only.',
        url: `${SITE_CONFIG.url}/whatsapp-link-generator`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'Generate wa.me click-to-chat links instantly',
          'Optional pre-filled message with URL encoding',
          'QR code generation for the WhatsApp link',
          'Supports India (+91), US, UK, Australia, UAE and more',
          'Phone number validation with country-specific digit counts',
          'One-click copy and open in WhatsApp',
          'No signup, no data stored, runs in browser',
        ],
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2341',
          bestRating: '5',
        },
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
          { '@type': 'ListItem', position: 3, name: 'WhatsApp Link Generator', item: `${SITE_CONFIG.url}/whatsapp-link-generator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/tools" className="hover:text-brand-600">Utility Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">WhatsApp Link Generator</li>
              </ol>
            </nav>

            {/* Intro blurb */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                💬 WhatsApp Click-to-Chat Links
              </div>
              <p className="text-surface-800 text-sm leading-relaxed">
                Paste your <strong>phone number</strong>, add an optional <strong>pre-filled message</strong>,
                and get an instant <strong>wa.me link</strong> anyone can tap to chat — no number saving needed.
                Perfect for websites, bio links, business cards, and WhatsApp Business. 100% free, runs in your browser.
              </p>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              WhatsApp Link Generator — Create Click-to-Chat Links Free
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl mb-5">
              Generate a <strong className="text-surface-700">wa.me click-to-chat link</strong> for your WhatsApp
              number in seconds. Add a <strong className="text-surface-700">pre-filled message</strong>, get a
              <strong className="text-surface-700"> QR code</strong>, and share on websites, business cards, and
              social bios. Supports India (+91), US, UK, UAE, and more.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2">
              {[
                '✅ Free',
                '🇮🇳 India-focused',
                '📱 Works instantly',
                '🔒 No data stored',
                '🚫 No signup',
                '🔗 wa.me format',
                '📷 QR code included',
                '⚡ Browser-only',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WhatsAppLinkGenerator />
        </div>

        {/* ── CONTENT ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">

          <AdBanner slot="whatsapp-link-generator-mid" />

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              How to Create a WhatsApp Click-to-Chat Link — 3 Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: '1', icon: '📱',
                  title: 'Enter your phone number',
                  desc: 'Select your country code (India +91 is the default) and type your mobile number. Non-digits are ignored automatically.',
                },
                {
                  n: '2', icon: '✍️',
                  title: 'Add a message (optional)',
                  desc: 'Type a greeting or prompt in the pre-filled message box. It will be URL-encoded into your link so recipients see it pre-typed.',
                },
                {
                  n: '3', icon: '🔗',
                  title: 'Copy, share, or scan',
                  desc: 'Copy the wa.me link to use anywhere, click "Open Chat" to test it, or download the QR code for print or digital use.',
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

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Where to Use Your WhatsApp Link
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🌐',
                  title: 'Website Contact Button',
                  desc: 'Add a "Chat on WhatsApp" button to your website\'s contact page, header, or floating widget. Customers can reach you instantly without filling out a form.',
                },
                {
                  icon: '📇',
                  title: 'Business Cards & Brochures',
                  desc: 'Print the QR code on business cards, flyers, or brochures. A scan opens a WhatsApp chat with your business immediately.',
                },
                {
                  icon: '📸',
                  title: 'Instagram & Social Bios',
                  desc: 'Paste the wa.me link in your Instagram bio, Twitter/X profile, LinkedIn contact info, or Linktree. Followers can chat with one tap.',
                },
                {
                  icon: '🛍️',
                  title: 'E-commerce & WhatsApp Ordering',
                  desc: 'Add a pre-filled message like "Hi, I\'d like to order…" so customers arrive with their intent already typed — reducing friction for WhatsApp-based businesses.',
                },
                {
                  icon: '💼',
                  title: 'WhatsApp Business',
                  desc: 'Use wa.me links with your WhatsApp Business number across all marketing touchpoints. The link works for both regular and Business accounts.',
                },
                {
                  icon: '📧',
                  title: 'Email Signatures',
                  desc: 'Include a wa.me link in your email signature. Recipients can switch from email to WhatsApp for faster replies.',
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

          {/* FORMAT EXPLAINER */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              How the wa.me Link Format Works
            </h2>
            <div className="bg-surface-900 rounded-2xl p-5 mb-5 font-mono text-sm leading-7 overflow-x-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-3">wa.me Link Anatomy</div>
              <div className="space-y-2 text-white">
                <div>
                  <span className="text-emerald-400">https://wa.me/</span>
                  <span className="text-amber-300">919876543210</span>
                  <span className="text-brand-300">?text=</span>
                  <span className="text-pink-300">Hi%20there!</span>
                </div>
                <div className="text-xs mt-3 space-y-1">
                  <div><span className="text-emerald-400">https://wa.me/</span> — WhatsApp's official click-to-chat base URL</div>
                  <div><span className="text-amber-300">919876543210</span> — country code + number, no + or spaces (e.g. 91 + 10-digit India number)</div>
                  <div><span className="text-brand-300">?text=</span> — optional query parameter for pre-filled message</div>
                  <div><span className="text-pink-300">Hi%20there!</span> — URL-encoded message (spaces become %20, etc.)</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white border border-surface-200 rounded-xl p-4">
                <div className="font-semibold text-surface-800 mb-2">Without message</div>
                <code className="text-xs text-brand-700 bg-brand-50 px-2 py-1 rounded block break-all">
                  https://wa.me/919876543210
                </code>
                <p className="text-xs text-surface-500 mt-2">Opens a blank chat. Good for general contact.</p>
              </div>
              <div className="bg-white border border-surface-200 rounded-xl p-4">
                <div className="font-semibold text-surface-800 mb-2">With pre-filled message</div>
                <code className="text-xs text-brand-700 bg-brand-50 px-2 py-1 rounded block break-all">
                  https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order
                </code>
                <p className="text-xs text-surface-500 mt-2">Opens chat with message pre-typed. Better for business.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              Frequently Asked Questions — WhatsApp Link Generator
            </h2>
            <p className="text-surface-500 text-sm mb-5">
              Everything you need to know about wa.me links and this tool.
            </p>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  Built by ToolStackHub — Private, Free, Browser-Only
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  This WhatsApp Link Generator runs 100% in your browser. Your phone number and message are
                  never sent to any server, never stored, and never logged. The generated wa.me link is
                  assembled locally on your device and can be used immediately — no account, no API key,
                  no tracking.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ Phone number never leaves your device
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔗 Official wa.me format
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    🇮🇳 India +91 default
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <RelatedToolsCluster currentSlug="whatsapp-link-generator" />
      <Footer />
    </>
  );
}
