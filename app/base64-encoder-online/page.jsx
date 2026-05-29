import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import Base64Encoder from '../../components/tools/Base64Encoder';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Base64 Encoder Decoder Online Free – Encode & Decode Fast',
  description: 'Encode text to Base64 or decode Base64 strings online free. Full UTF-8 and Unicode support. Instant, browser-based, secure. No signup required. Try now!',
  keywords: [
    'base64 encoder online',
    'base64 decode online',
    'base64 encode string',
    'decode base64 to text',
    'base64 converter online free',
    'base64 encoder decoder',
    'base64 image encoder',
    'base64 to utf8',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/base64-encoder-online` },
  openGraph: {
    title: 'Base64 Encoder Decoder Online Free – Encode & Decode Fast',
    description: 'Encode text to Base64 or decode Base64 strings free. Full UTF-8 support, instant, browser-based. No signup.',
    url: `${SITE_CONFIG.url}/base64-encoder-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Encoder Decoder Online Free',
    description: 'Encode and decode Base64 strings instantly. Full UTF-8 support, browser-based, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is Base64 encoding used for?',
    a: 'Base64 encoding converts binary data into ASCII text for transmission through text-only systems. The most common uses are: encoding credentials for HTTP Basic Authentication headers, embedding images as data URIs in HTML and CSS, encoding API tokens for Authorization headers, decoding JWT token payloads, and transmitting binary file contents through JSON or XML APIs that only accept text.',
  },
  {
    q: 'Is Base64 the same as encryption?',
    a: 'No — Base64 is encoding, not encryption. It is trivially reversible by anyone who sees the encoded string. Base64 provides absolutely no security or confidentiality. Never use Base64 as a security measure. If you need to protect data, use proper encryption (AES, RSA) — not Base64.',
  },
  {
    q: 'Does it handle Unicode, emoji, and non-English characters?',
    a: 'Yes — full UTF-8 support. All languages (Arabic, Chinese, Japanese, Hindi, etc.), special symbols, and emoji are correctly encoded and decoded. The tool handles the UTF-8 to binary conversion before Base64 encoding, which prevents the common "Latin1" encoding errors that simpler implementations produce.',
  },
  {
    q: 'Is my data safe when using this tool?',
    a: 'Yes — all encoding and decoding runs locally in your browser using JavaScript\'s built-in btoa() and atob() functions with UTF-8 handling. Your data is never sent to any server, never stored, and never logged. This makes it safe for encoding API keys, credentials, tokens, and other sensitive strings.',
  },
  {
    q: 'Why does Base64 output end with = or ==?',
    a: 'Base64 encodes 3 bytes of input into 4 characters of output. When the input length is not divisible by 3, padding characters (=) are added to make the output length a multiple of 4. One = means 1 padding byte was added; == means 2 padding bytes were added. Some systems use "URL-safe" Base64 which omits this padding.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Base64 Encoder Decoder Online',
      description: 'Free browser-based Base64 encoder and decoder. Full UTF-8 and Unicode support. Encode text to Base64 or decode Base64 strings instantly with one-click swap and copy.',
      url: `${SITE_CONFIG.url}/base64-encoder-online`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Encode text to Base64',
        'Decode Base64 to text',
        'Full UTF-8 and Unicode support',
        'One-click swap for instant reversal',
        'Character count comparison',
        'Browser-based — data never sent to server',
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
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Base64 Encoder',  item: `${SITE_CONFIG.url}/base64-encoder-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Encode or Decode Base64 Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Select mode',      text: 'Choose Encode (text → Base64) or Decode (Base64 → text) using the toggle.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste your input', text: 'Paste or type your text or Base64 string into the input area.' },
        { '@type': 'HowToStep', position: 3, name: 'Get the result',   text: 'The output appears instantly in the result area.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy or swap',     text: 'Click Copy to copy the result, or Swap to reverse the operation instantly.' },
      ],
    },
  ],
};

// ── Real-world examples ───────────────────────────────────────
const examples = [
  {
    title: 'HTTP Basic Auth',
    input: 'username:password',
    output: 'dXNlcm5hbWU6cGFzc3dvcmQ=',
    usage: 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
    color: 'blue',
  },
  {
    title: 'JWT Payload (decoded)',
    input: '{"sub":"1234","name":"John","iat":1516239022}',
    output: 'eyJzdWIiOiIxMjM0IiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9',
    usage: 'Decode the second segment of any JWT token',
    color: 'violet',
  },
  {
    title: 'Data URI (Image)',
    input: '[binary image data]',
    output: 'data:image/png;base64,iVBORw0KGgo...',
    usage: '<img src="data:image/png;base64,..." />',
    color: 'emerald',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function Base64EncoderOnlinePage() {
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
                <li className="text-surface-800 font-medium">Base64 Encoder Decoder</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Base64 Encoder & Decoder Online – Encode and Decode Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Encode any text to Base64 or decode any Base64 string back to text — instantly,
              in your browser. Full UTF-8 and Unicode support, one-click swap, and a copy
              button for quick workflow. Free, no signup, your data never leaves your device.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔡 Full UTF-8 Support',
                '🔄 One-Click Swap',
                '🔒 No Server Upload',
                '⚡ Instant',
                '💻 Developer Ready',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Base64Encoder />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Base64 Encoder" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Base64 Encoder & Decoder Online – Free & Instant
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>Base64 encoder online</strong> converts text or binary data into
                Base64 format — a text-safe encoding scheme using 64 ASCII characters (A–Z,
                a–z, 0–9, +, /) — and our decoder reverses the process instantly. Base64
                is fundamental to web development: it is how HTTP Basic Authentication
                credentials are transmitted, how images are embedded as data URIs, how API
                tokens are formatted for Authorization headers, and how JWT payload sections
                are stored.
              </p>
              <p>
                Our free tool handles both encode and decode directions with full UTF-8 and
                Unicode support — meaning all languages, special characters, and emoji are
                handled correctly. Many simpler Base64 tools break on non-ASCII characters
                because they skip the required UTF-8 conversion step. This tool handles it
                correctly every time.
              </p>
              <p>
                Use it as a <strong>Base64 decode online</strong> tool to inspect JWT tokens,
                as a <strong>Base64 encode string</strong> tool for building auth headers,
                or as a quick <strong>Base64 converter online free</strong> for any
                development task that involves encoding binary data as text.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Encode or Decode Base64
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🔀', title: 'Select Mode',         desc: 'Click "Encode" to convert text → Base64, or "Decode" to convert Base64 → text. The mode switches the direction of conversion.' },
                { step: '02', icon: '📋', title: 'Paste Your Input',    desc: 'Type or paste your content into the left input area. The character count shows automatically.' },
                { step: '03', icon: '✨', title: 'Instant Result',      desc: 'The encoded or decoded result appears instantly in the right output area with its character count.' },
                { step: '04', icon: '🔄', title: 'Swap & Repeat',       desc: 'Click Swap to move the output into the input for instant reversal. Click Copy to copy the result to clipboard.' },
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

          {/* Section 3 — Real-world examples */}
          <section aria-labelledby="examples-heading">
            <h2 id="examples-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Real-World Base64 Examples
            </h2>
            <div className="space-y-4">
              {examples.map(ex => (
                <div key={ex.title} className={`p-5 bg-${ex.color}-50 border border-${ex.color}-200 rounded-2xl`}>
                  <h3 className={`font-semibold text-${ex.color}-900 mb-3`}>{ex.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-1">Input</div>
                      <code className="text-xs bg-surface-900 text-emerald-300 px-3 py-2 rounded-lg block font-mono break-all">{ex.input}</code>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-1">Base64 Output</div>
                      <code className="text-xs bg-surface-900 text-sky-300 px-3 py-2 rounded-lg block font-mono break-all">{ex.output}</code>
                    </div>
                  </div>
                  <div className={`mt-3 text-xs text-${ex.color}-700 bg-${ex.color}-100 px-3 py-2 rounded-lg font-mono`}>{ex.usage}</div>
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
                { icon: '🔡', title: 'Full UTF-8 & Unicode Support',  desc: 'Correctly handles all languages, emoji, and special symbols. Converts to UTF-8 binary before encoding — preventing the common "Latin1 encoding" error.' },
                { icon: '🔄', title: 'One-Click Swap',                desc: 'Move the output into the input area in one click to immediately reverse the operation without re-pasting.' },
                { icon: '📊', title: 'Character Count Comparison',    desc: 'See both input and output character counts side by side — useful for understanding the ~33% size increase that Base64 encoding adds.' },
                { icon: '📋', title: 'One-Click Copy',                desc: 'Copy the encoded or decoded result to clipboard in a single click without manually selecting the text.' },
                { icon: '🔒', title: 'Fully Local Processing',        desc: 'All encoding/decoding runs in your browser using JavaScript\'s btoa() and atob(). Your data is never sent to any server.' },
                { icon: '⚡', title: 'Instant Results',               desc: 'Encoding and decoding completes in milliseconds regardless of input size. No submit button, no loading state.' },
                { icon: '🌍', title: 'All Languages & Emoji',         desc: 'Arabic, Chinese, Japanese, Korean, Hindi, Russian, and all Unicode emoji encode and decode correctly.' },
                { icon: '📱', title: 'Mobile Friendly',               desc: 'Works on all modern mobile browsers. Encode and decode Base64 strings directly from your smartphone.' },
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
                  title: 'HTTP Basic Authentication',
                  desc: 'Build HTTP Basic Auth headers by encoding "username:password" to Base64. The Authorization header format is: Authorization: Basic [base64-encoded-credentials]. Useful for testing APIs, curl commands, and Postman requests.',
                },
                {
                  icon: '🖼️',
                  title: 'Inline Image Data URIs',
                  desc: 'Embed small images (icons, logos, SVGs) directly in HTML and CSS as Base64 data URIs to eliminate additional HTTP requests. Format: url("data:image/png;base64,[encoded-data]"). Reduces round trips for small assets.',
                },
                {
                  icon: '🎫',
                  title: 'JWT Token Inspection',
                  desc: 'Decode the second segment (payload) of any JWT token to inspect claims, expiration time (exp), issued-at time (iat), user ID (sub), and custom claims. Split the JWT on dots and decode the middle segment.',
                },
                {
                  icon: '🔑',
                  title: 'API Key & Token Encoding',
                  desc: 'Encode API keys, client IDs, and secret tokens for safe transmission in HTTP Authorization headers, where raw special characters in credentials could break header parsing.',
                },
                {
                  icon: '📧',
                  title: 'MIME Email Encoding',
                  desc: 'Understand how email clients handle attachments — all email attachments sent via SMTP are Base64-encoded binary data transmitted as ASCII text. Decode email source code to inspect attachment content.',
                },
                {
                  icon: '💾',
                  title: 'Binary Data in JSON & APIs',
                  desc: 'Encode binary file contents, cryptographic hashes, raw bytes, and binary blobs as Base64 strings for storage in JSON fields, REST API responses, and GraphQL scalar fields that only accept text.',
                },
                {
                  icon: '🔍',
                  title: 'Debugging Encoded Payloads',
                  desc: 'When an API returns Base64-encoded content in a response field, paste the value here to instantly decode and read it — no library or code required for quick debugging.',
                },
                {
                  icon: '🌐',
                  title: 'URL-Safe Data Encoding',
                  desc: 'Encode binary data or special characters for use in URLs and query parameters where raw binary would break URL parsing. Base64 is often used with slight modification (+ → -, / → _) for URL contexts.',
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
              How Base64 Encoding Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
              <p>
                Base64 encoding works by converting every 3 bytes (24 bits) of binary data
                into 4 Base64 characters (6 bits each). The 64 possible characters in the
                Base64 alphabet are: A–Z (26), a–z (26), 0–9 (10), + (1), and / (1).
                This encoding increases data size by approximately 33% but guarantees all
                output characters are safe for text-based protocols.
              </p>
              <p>
                For text input, the browser first converts the text to UTF-8 binary using{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">TextEncoder</code>,
                then encodes the resulting bytes using{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">btoa()</code>.
                Decoding reverses this: <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">atob()</code>{' '}
                converts Base64 to binary, then{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">TextDecoder</code>{' '}
                converts the binary back to UTF-8 text.
              </p>
            </div>

            {/* Visual encoding example */}
            <div className="bg-surface-900 rounded-2xl p-5 mb-8">
              <div className="text-xs text-surface-400 uppercase tracking-wider mb-3">Example: encoding "Hi" to Base64</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-surface-400 text-xs mb-2">Input text</div>
                  <div className="font-mono text-2xl text-emerald-300 mb-1">H i</div>
                  <div className="text-surface-500 text-xs">ASCII: 72, 105</div>
                </div>
                <div>
                  <div className="text-surface-400 text-xs mb-2">Binary (+ padding)</div>
                  <div className="font-mono text-xs text-amber-300 mb-1">01001000 01101001 00000000</div>
                  <div className="text-surface-500 text-xs">Split into 6-bit groups</div>
                </div>
                <div>
                  <div className="text-surface-400 text-xs mb-2">Base64 output</div>
                  <div className="font-mono text-2xl text-sky-300 mb-1">SGk=</div>
                  <div className="text-surface-500 text-xs">= padding added</div>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Tool vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs base64encode.org',      point: 'External tools upload your data to remote servers. Encoding API keys or credentials there is a security risk. This tool processes everything locally with no server calls.' },
                { label: 'vs Browser Console',       point: 'btoa() in the browser console breaks on Unicode input. This tool handles UTF-8 correctly, adding the necessary encoding step that the raw browser API skips.' },
                { label: 'vs Command Line (base64)', point: 'The terminal base64 command is not always available cross-platform and requires switching contexts. This tool works instantly in any browser without leaving your workflow.' },
                { label: 'vs IDE Extensions',        point: 'IDE Base64 plugins are version-specific and require installation. This tool is always available, always up to date, and works on any device including your phone.' },
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
              The Best Free Base64 Encoder and Decoder Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need to <strong>decode Base64 to text</strong> to inspect a JWT
                token, <strong>Base64 encode a string</strong> for an HTTP auth header,
                use it as a <strong>Base64 image encoder</strong> for CSS data URIs, or
                simply convert between Base64 and plain text with a free
                <strong> Base64 converter online</strong> — this tool handles every scenario
                with full Unicode support and zero server interaction.
              </p>
              <p>
                The UTF-8 handling is the most important technical differentiator. The raw
                browser{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">btoa()</code>{' '}
                function throws an error on non-ASCII characters unless the input is first
                properly encoded to UTF-8 bytes. This tool handles that conversion automatically,
                making it reliable for all languages and emoji — not just plain ASCII text.
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
              More Base64 Tools
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
                { href: '/tools/json-formatter',      icon: '{ }', label: 'JSON Formatter Online',    desc: 'Format and validate JSON containing Base64 encoded fields' },
                { href: '/tools/url-encoder',         icon: '🔗',  label: 'URL Encoder Online',       desc: 'Encode and decode URL query parameters and paths' },
                { href: '/tools/uuid-generator',      icon: '🆔',  label: 'UUID Generator Online',    desc: 'Generate cryptographically secure unique identifiers' },
                { href: '/tools/password-generator',  icon: '🔐',  label: 'Password Generator',       desc: 'Generate secure random passwords for API credentials' },
                { href: '/tools/regex-tester',        icon: '🔍',  label: 'Regex Tester Online',      desc: 'Test Base64 validation patterns with live highlighting' },
                { href: '/tools/binary-converter',icon: '💻',  label: 'Binary Converter',         desc: 'Convert between binary, decimal, hex, and octal' },
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
      <RelatedToolsCluster currentSlug="base64-encoder-online" />
      <Footer />
    </>
  );
}