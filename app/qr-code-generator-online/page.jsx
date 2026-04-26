import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import QrCodeGenerator from '../../components/tools/QrCodeGenerator';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'QR Code Generator Online Free – Create Custom QR Codes',
  description: 'Generate QR codes for URLs, WiFi, email, and text online free. Custom colors, sizes, error correction. Download PNG instantly. No signup needed. Try now!',
  keywords: [
    'qr code generator online',
    'qr code maker free',
    'create qr code online',
    'custom qr code generator',
    'qr code for website free',
    'wifi qr code generator',
    'qr code download png',
    'free qr code creator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/qr-code-generator-online` },
  openGraph: {
    title: 'QR Code Generator Online Free – Create Custom QR Codes',
    description: 'Generate QR codes for URLs, WiFi, email, and text free. Custom colors and sizes. Download PNG instantly. No signup.',
    url: `${SITE_CONFIG.url}/qr-code-generator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code Generator Online Free – Custom QR Codes',
    description: 'Create QR codes for URLs, WiFi, email, and text. Custom colors, instant PNG download, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What can I encode in a QR code?',
    a: 'URLs, plain text, email addresses (mailto: links), phone numbers (tel: links), WiFi network credentials (SSID, password, security type), vCard contact information, and SMS message templates. Use the quick preset buttons in the tool to automatically format each content type correctly.',
  },
  {
    q: 'Is the QR code generator free?',
    a: 'Yes — completely free with no account, no watermarks, and no download limits. Generate and download as many QR codes as you need for personal or commercial use.',
  },
  {
    q: 'What size should my QR code be?',
    a: 'For print use, the minimum reliable size is 2×2cm at 300 DPI — use at least 512px when downloading. For web and digital use, 200×200px is the minimum. The more complex your content, the larger the QR code should be for reliable scanning.',
  },
  {
    q: 'Are my QR code details sent to a server?',
    a: 'No — all QR code generation runs locally in your browser. Your URLs, WiFi passwords, contact details, and other encoded content never leave your device and are never stored or logged anywhere.',
  },
  {
    q: 'Can I use custom colors in my QR code?',
    a: 'Yes — set any foreground and background color using the color pickers. Ensure sufficient contrast between the two colors for reliable scanning. Dark foreground on light background works best. Avoid low-contrast combinations like light gray on white.',
  },
  {
    q: 'Does the QR code work on all smartphones?',
    a: 'Yes — QR codes generated with this tool follow the ISO 18004 standard and are scannable by the native camera app on all modern iPhones and Android phones without any additional app required.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'QR Code Generator Online',
      description: 'Free browser-based QR code generator. Create QR codes for URLs, WiFi, email, phone, and vCard contacts. Custom colors, sizes, and error correction. Download PNG instantly.',
      url: `${SITE_CONFIG.url}/qr-code-generator-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'QR codes for URLs, text, email, phone, WiFi, and vCard',
        'Custom foreground and background colors',
        'Size options 128px to 512px',
        'Four error correction levels',
        'High-resolution PNG download',
        'No watermarks, no account required',
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
        { '@type': 'ListItem', position: 3, name: 'QR Code Generator', item: `${SITE_CONFIG.url}/qr-code-generator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Create a QR Code Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter your content', text: 'Type or paste your URL, text, WiFi credentials, or other content into the input field.' },
        { '@type': 'HowToStep', position: 2, name: 'Customize the QR code', text: 'Set your preferred size, colors, and error correction level.' },
        { '@type': 'HowToStep', position: 3, name: 'Generate', text: 'Click Generate QR Code to see the live preview.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Click Download PNG to save your QR code to your device.' },
      ],
    },
  ],
};

// ── QR content types ──────────────────────────────────────────
const contentTypes = [
  { type: 'URL',     icon: '🔗', example: 'https://yourwebsite.com',              desc: 'Link to any webpage, product, or landing page' },
  { type: 'WiFi',   icon: '📶', example: 'Network: MyWiFi | Password: abc123',   desc: 'Let guests connect without typing the password' },
  { type: 'Email',  icon: '📧', example: 'contact@company.com',                  desc: 'Open the email client with your address pre-filled' },
  { type: 'Phone',  icon: '📱', example: '+1 (555) 123-4567',                    desc: 'Dial a number directly from a QR code scan' },
  { type: 'vCard',  icon: '👤', example: 'Name, email, phone, company',           desc: 'Share full contact details in one scan' },
  { type: 'Text',   icon: '💬', example: 'Any plain text message',               desc: 'Encode any text — notes, codes, instructions' },
];

// ── Error correction guide ────────────────────────────────────
const errorLevels = [
  { level: 'L — 7%',  use: 'Clean digital displays, screens, and monitors where damage is unlikely.' },
  { level: 'M — 15%', use: 'General use — most balanced setting for both print and digital.' },
  { level: 'Q — 25%', use: 'Marketing materials where some wear is expected over time.' },
  { level: 'H — 30%', use: 'Product packaging, outdoor signage, and industrial labels that may get damaged.' },
];

// ── Page ──────────────────────────────────────────────────────
export default function QrCodeGeneratorOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Top Ad */}
        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">QR Code Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free QR Code Generator Online – Create Custom QR Codes Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate QR codes for URLs, WiFi, email, phone numbers, and vCard contacts.
              Custom colors, adjustable size, and high-resolution PNG download — free,
              no signup, no watermarks.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '💧 No Watermarks',
                '🎨 Custom Colors',
                '⚡ Instant Download',
                '🔒 No Signup',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <QrCodeGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="QR Code Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              QR Code Generator Online – Free, Custom & Instant
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>QR code generator online</strong> creates custom QR codes for
                any URL, text, WiFi credentials, email address, phone number, or vCard contact
                — in under 30 seconds, with no account required. QR codes are now everywhere:
                restaurant menus, business cards, product packaging, event tickets, and
                marketing materials. Getting a professional-quality, custom-colored QR code
                used to require expensive software. Now it takes one click.
              </p>
              <p>
                Full color customization lets you match your brand colors exactly — set any
                foreground and background color, not just the standard black and white.
                Choose from four error correction levels to ensure your QR code scans reliably
                even if it gets partially damaged or dirty on physical materials. Download as
                high-resolution PNG at up to 512×512 pixels — large enough for professional
                print use with no watermarks added.
              </p>
              <p>
                Whether you need a <strong>QR code maker free</strong> for a restaurant menu,
                a <strong>WiFi QR code generator</strong> for your office guest network, or
                a <strong>custom QR code</strong> for your next marketing campaign — this tool
                handles all content types with the same simple workflow.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Create a QR Code Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '✏️', title: 'Enter Your Content',    desc: 'Type or paste your URL, WiFi credentials, email, phone number, or plain text into the input field.' },
                { step: '02', icon: '🎯', title: 'Use a Quick Preset',    desc: 'Click URL, Email, Phone, WiFi, or vCard buttons to automatically format your content type correctly.' },
                { step: '03', icon: '📏', title: 'Set the Size',          desc: 'Adjust the size slider from 128px (web thumbnails) to 512px (high-quality print).' },
                { step: '04', icon: '🎨', title: 'Choose Your Colors',    desc: 'Set the QR code foreground and background colors using the color pickers to match your brand.' },
                { step: '05', icon: '🛡️', title: 'Set Error Correction',  desc: 'Choose L for digital use, M for general, Q for marketing, or H for outdoor and packaging.' },
                { step: '06', icon: '⬇️', title: 'Download PNG',          desc: 'Click Generate QR Code then Download PNG. Your QR code saves to your device instantly.' },
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

          {/* Section 3 — Content types */}
          <section aria-labelledby="types-heading">
            <h2 id="types-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              What Can You Encode in a QR Code?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentTypes.map(ct => (
                <div key={ct.type} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{ct.icon}</span>
                    <span className="font-semibold text-surface-900">{ct.type}</span>
                  </div>
                  <code className="text-xs text-violet-700 bg-violet-50 px-2 py-1 rounded block mb-2 truncate">{ct.example}</code>
                  <p className="text-xs text-surface-500">{ct.desc}</p>
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
                { icon: '🎨', title: 'Custom Colors',            desc: 'Set any foreground and background color. Match your brand palette exactly — not just black and white.' },
                { icon: '📏', title: '128px to 512px Sizes',     desc: 'Choose your output size. Use 512px for professional print — crisp and sharp at any print size above 2cm.' },
                { icon: '🛡️', title: '4 Error Correction Levels',desc: 'L (7%), M (15%), Q (25%), H (30%) — choose based on whether your QR code will be on screen or printed materials.' },
                { icon: '💧', title: 'No Watermarks',            desc: 'Your downloaded QR code is completely clean. No branding, no watermarks, no hidden text added.' },
                { icon: '⚡', title: 'Real-Time Preview',        desc: 'The QR code updates instantly as you type — see exactly how it will look before downloading.' },
                { icon: '🔒', title: 'Private & Secure',         desc: 'All QR generation runs locally in your browser. Your URLs, passwords, and contact details never leave your device.' },
                { icon: '♾️', title: 'No Download Limits',       desc: 'Generate and download unlimited QR codes. No daily cap, no subscription, no account needed.' },
                { icon: '📱', title: 'Scans on All Phones',      desc: 'Generated QR codes follow ISO 18004 standard and scan reliably with the native camera app on all modern smartphones.' },
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
                  icon: '🍽️',
                  title: 'Restaurant Digital Menus',
                  desc: 'Replace physical menus with QR codes linking to your online menu. Update prices and items instantly without reprinting — and keep tables hygienic with contactless ordering.',
                },
                {
                  icon: '💼',
                  title: 'Business Card Enhancement',
                  desc: 'Add a QR code that opens your LinkedIn profile, portfolio, or digital vCard. Turn a static paper card into an interactive introduction that recipients can scan and save instantly.',
                },
                {
                  icon: '📶',
                  title: 'WiFi Guest Access',
                  desc: 'Generate a WiFi QR code so guests and visitors connect to your network by scanning — no more awkwardly spelling out complex WPA2 passwords or writing them on whiteboards.',
                },
                {
                  icon: '🎫',
                  title: 'Event Tickets & Check-In',
                  desc: 'Create unique QR codes for event tickets, conference badges, and workshop registrations that staff can scan at the door for fast, contactless, paperless entry management.',
                },
                {
                  icon: '📦',
                  title: 'Product Packaging',
                  desc: 'Link QR codes on product labels to user manuals, tutorial videos, warranty registration pages, or customer support — turning packaging into an interactive customer experience.',
                },
                {
                  icon: '📣',
                  title: 'Print Marketing Materials',
                  desc: 'Add QR codes to flyers, posters, billboards, and magazine ads to bridge print and digital — track click-through rates by pointing the QR code to a UTM-tagged landing page URL.',
                },
                {
                  icon: '💳',
                  title: 'Payment Links',
                  desc: 'Generate QR codes for UPI, PayPal.me, Venmo, or Stripe payment links for quick cashless transactions at pop-up shops, events, and market stalls.',
                },
                {
                  icon: '🏢',
                  title: 'Office & Facilities',
                  desc: 'Place QR codes on equipment, meeting rooms, and workstations linking to booking systems, maintenance request forms, or usage instructions for staff and visitors.',
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

          {/* Section 6 — Error correction guide */}
          <section aria-labelledby="error-heading">
            <h2 id="error-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              How QR Code Error Correction Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
              <p>
                Error correction allows a QR code to be scanned successfully even if part of it
                is damaged, dirty, or obscured. The higher the error correction level, the more
                of the QR code can be missing while still scanning correctly — but higher
                correction also means a denser, more complex QR code pattern that requires
                slightly more scanning precision.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {errorLevels.map(e => (
                <div key={e.level} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <code className="text-sm font-mono font-bold text-violet-700 bg-violet-50 px-2 py-1 rounded shrink-0 h-fit">{e.level}</code>
                  <p className="text-sm text-surface-600 leading-relaxed">{e.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — How it works + Why use */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How QR Codes Are Generated
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                QR codes encode data as a matrix of black and white squares using the
                Reed-Solomon error correction algorithm. The generator encodes your input
                using the appropriate QR data mode — numeric, alphanumeric, byte, or kanji
                depending on the content type — then adds error correction data based on
                your chosen level, and renders the result to an HTML5 Canvas element for
                live preview and PNG export.
              </p>
              <p>
                The entire process runs locally in your browser using JavaScript. No content
                you encode — URLs, WiFi passwords, email addresses, or contact details — is
                ever sent to any server. This is particularly important for WiFi QR codes
                which contain your network password, and for vCard codes which contain
                personal contact information.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This QR Generator vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs QR Code Monkey / QRStuff', point: 'Most free QR generators add watermarks, limit downloads, or require account creation. This tool has zero restrictions at any quality setting.' },
                { label: 'vs Canva QR Generator',        point: 'Canva requires signing up and ties your QR codes to their platform. This tool works instantly with no account and no dependencies.' },
                { label: 'vs Dynamic QR Services',       point: 'Dynamic QR services charge monthly fees and break your QR codes if you cancel. These QR codes are static and work forever with no subscription.' },
                { label: 'vs Google Charts API',         point: 'The Google Charts QR API is deprecated and unreliable. This tool generates QR codes locally with no external API dependencies.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — Keyword variation paragraph */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free QR Code Generator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you are searching for a <strong>QR code maker free</strong> with no
                watermarks, a <strong>WiFi QR code generator</strong> for your business, or
                a way to <strong>create QR code online</strong> with custom brand colors — this
                tool covers every use case without requiring an account or subscription.
              </p>
              <p>
                For businesses, the ability to <strong>create a custom QR code</strong> that
                matches brand colors — instead of the generic black-and-white QR code — makes
                marketing materials look significantly more professional. For developers, the
                local processing and ISO-standard output ensures reliable scanning across
                all devices and scanning apps.
              </p>
            </div>
          </section>

          {/* Section 9 — FAQ */}
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

          {/* Section 10 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More QR Code Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/qr-code-for-website',       label: 'QR Code for Website',       desc: 'Generate a QR code linking directly to any webpage URL' },
                { href: '/wifi-qr-code-generator',    label: 'WiFi QR Code Generator',    desc: 'Create a scannable QR code for WiFi guest access' },
                { href: '/qr-code-for-business-card', label: 'QR Code for Business Card', desc: 'Business card QR code linking to your LinkedIn or portfolio' },
                { href: '/qr-code-download-png',      label: 'QR Code Download PNG',      desc: 'Download high-resolution QR codes for print use' },
                { href: '/custom-qr-code-generator',  label: 'Custom Color QR Code',      desc: 'QR codes with custom brand colors and styling' },
                { href: '/vcard-qr-code-generator',   label: 'vCard QR Code Generator',   desc: 'QR codes that share your full contact information' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-violet-50 border border-violet-200 rounded-xl hover:bg-violet-100 transition-colors group">
                  <div className="font-semibold text-violet-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-violet-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 11 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/url-encoder-online',         icon: '🔗', label: 'URL Encoder Online',         desc: 'Encode and decode URLs and query parameters' },
                { href: '/password-generator-online',  icon: '🔐', label: 'Password Generator Online',  desc: 'Generate strong WiFi and account passwords' },
                { href: '/compress-image-online',      icon: '🗜️', label: 'Compress Image Online',      desc: 'Compress your downloaded QR PNG for web use' },
                { href: '/image-to-pdf-converter-online',icon:'📄', label: 'Image to PDF Converter',    desc: 'Combine QR codes and images into PDF documents' },
                { href: '/meta-tag-generator-online',  icon: '🔍', label: 'Meta Tag Generator',         desc: 'Add SEO meta tags to your QR code landing pages' },
                { href: '/uuid-generator-online',      icon: '🆔', label: 'UUID Generator Online',      desc: 'Generate unique IDs for QR code tracking systems' },
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