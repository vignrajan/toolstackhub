import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ToolCard from '../../components/ToolCard';
import TextToHandwriting from '../../components/tools/TextToHandwriting';
import { SITE_CONFIG, tools } from '../../data/tools';
import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata = {
  title: 'Convert Text to Handwriting Online Free – Instant Results',
  description: 'Convert text to handwriting online in seconds. Paste your text, pick a handwriting style and paper, then download as PNG or PDF. Free, no signup required.',
  keywords: [
    'convert text to handwriting',
    'text to handwriting converter',
    'text to handwriting online',
    'handwriting converter online free',
    'type text get handwriting',
    'handwriting font converter',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/convert-text-to-handwriting`,
  },
  openGraph: {
    title: 'Convert Text to Handwriting Online Free',
    description: 'Convert text to handwriting online in seconds. Free handwriting converter with multiple styles, paper types, and PNG/PDF download.',
    url: `${SITE_CONFIG.url}/convert-text-to-handwriting`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Text to Handwriting Online Free',
    description: 'Free handwriting converter — paste text, choose style, download PNG or PDF instantly.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Related tools to show at bottom ──────────────────────────
const relatedTools = tools.filter(t =>
  ['word-counter', 'case-converter', 'lorem-ipsum-generator', 'markdown-preview'].includes(t.slug)
);

// ── Structured Data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Convert Text to Handwriting',
      description: 'Free online tool to convert any typed text into realistic handwriting. Supports multiple fonts, paper styles, pen colors, and PNG/PDF download.',
      url: `${SITE_CONFIG.url}/convert-text-to-handwriting`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I convert text to handwriting online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paste your text into the input box, choose a handwriting font and paper style, adjust the size and spacing, then click Download PNG or PDF. The entire process takes under 30 seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the text to handwriting converter free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no watermarks, no sign-up, and no usage limits. Download as many times as you like.',
          },
        },
        {
          '@type': 'Question',
          name: 'What handwriting styles are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Six styles: Caveat (natural everyday writing), Kalam (neat and clear), Patrick Hand (clean print-style), Dancing Script (elegant cursive), Shadows Into Light (casual), and Indie Flower (bubbly and fun).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert text to handwriting and download as PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Click the Download PDF button to open your browser print dialog where you can save or print your handwriting as a PDF document.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the handwriting converter work on mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the converter is fully responsive and works on all smartphones, tablets, and desktop browsers.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Convert Text to Handwriting', item: `${SITE_CONFIG.url}/convert-text-to-handwriting` },
      ],
    },
  ],
};

export default function ConvertTextToHandwritingPage() {
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

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-surface-800 font-medium">Convert Text to Handwriting</li>
              </ol>
            </nav>

            {/* H1 */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Convert Text to Handwriting Online
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Paste any text and instantly convert it to realistic handwriting. 
              Choose your font, paper, and ink color — then download as PNG or PDF. 
              Free, no watermarks, no sign-up.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              {['✅ 100% Free', '🔒 No Signup', '💧 No Watermark', '⚡ Instant Preview', '📱 Works on Mobile'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* TOOL INTERFACE */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TextToHandwriting />
        </div>

        {/* Affiliate CTA */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="handwriting converter" />
        </div>

        {/* In-content Ad */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <AdBanner variant="content" />
        </div>

        {/* SEO CONTENT */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          {/* Section 1 */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Convert Text to Handwriting Online — How It Works
            </h2>
            <div className="prose-like space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our <strong>text to handwriting converter</strong> uses browser-based Canvas rendering
                combined with authentic handwriting fonts to transform your typed text into realistic
                handwritten output — instantly, with no server uploads required.
              </p>
              <p>
                Unlike basic font changers, this tool renders your text onto a realistic paper background
                complete with ruled lines, a red margin line, and notebook holes. Every character is
                drawn with subtle natural variation, making the output look genuinely hand-written
                rather than simply printed in a cursive font.
              </p>
              <p>
                You get full control over the result: change the handwriting style, paper type, ink color,
                font size, line spacing, and letter spacing. When you are happy with the preview, download
                it as a high-resolution PNG or open the print dialog to save as PDF.
              </p>
            </div>
          </section>

          {/* Section 2 - How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert Text to Handwriting — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '01',
                  title: 'Enter Your Text',
                  desc: 'Type or paste any text into the large input area. Supports multiple paragraphs and line breaks.',
                },
                {
                  step: '02',
                  title: 'Choose Handwriting Style',
                  desc: 'Pick from 6 realistic handwriting fonts — from neat everyday writing to elegant cursive.',
                },
                {
                  step: '03',
                  title: 'Customize Paper & Ink',
                  desc: 'Select ruled notebook, white, yellow notepad, or grid paper. Choose from 6 pen ink colors.',
                },
                {
                  step: '04',
                  title: 'Adjust & Download',
                  desc: 'Fine-tune font size, line spacing, and letter spacing. Then download your PNG or PDF.',
                },
              ].map(item => (
                <div key={item.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 - Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Features of Our Text to Handwriting Converter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🖊️', title: '6 Handwriting Fonts',     desc: 'Caveat, Kalam, Patrick Hand, Dancing Script, Shadows Into Light, Indie Flower' },
                { icon: '📄', title: '4 Paper Styles',           desc: 'Ruled notebook, white, yellow notepad, and grid paper backgrounds' },
                { icon: '🎨', title: '6 Pen Colors',             desc: 'Blue, black, dark blue, red, green, and purple ink' },
                { icon: '🔠', title: 'Adjustable Font Size',     desc: 'Scale text from small to large to suit your paper format' },
                { icon: '↕️', title: 'Line & Letter Spacing',    desc: 'Control spacing for a natural, personalized handwriting look' },
                { icon: '⬇️', title: 'PNG & PDF Download',       desc: 'Download high-resolution PNG or save/print as PDF' },
                { icon: '👁️', title: 'Live Preview',             desc: 'Canvas updates in real time as you type and adjust settings' },
                { icon: '🔒', title: 'Private & Secure',         desc: 'All processing is done locally in your browser — nothing is uploaded' },
                { icon: '📱', title: 'Mobile Friendly',          desc: 'Works perfectly on smartphones and tablets' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 - Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Why Convert Text to Handwriting?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎓', title: 'School Assignments',  desc: 'Submit typed work that looks handwritten for teachers who require handwritten submissions.' },
                { icon: '📝', title: 'Personal Notes',      desc: 'Create beautiful handwritten-style notes, journals, and reminders for personal use.' },
                { icon: '🎨', title: 'Creative Projects',   desc: 'Design handwritten-look posters, cards, invitations, and social media content.' },
                { icon: '💼', title: 'Professional Use',    desc: 'Add a personal touch to thank-you notes, signatures, and client communications.' },
                { icon: '🌐', title: 'Content Creation',    desc: 'Create authentic-looking handwritten quotes and captions for Instagram and Pinterest.' },
                { icon: '📚', title: 'Study Materials',     desc: 'Convert study notes into handwriting format to improve memory retention.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl hover:border-brand-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-0.5 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 - FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: 'How do I convert text to handwriting online?',
                  a: 'Paste your text into the input box, choose a handwriting font and paper style, adjust the size and spacing, then click Download PNG or PDF. The entire process takes under 30 seconds.',
                },
                {
                  q: 'Is the text to handwriting converter free?',
                  a: 'Yes, completely free with no watermarks, no sign-up, and no usage limits. Download as many times as you like.',
                },
                {
                  q: 'What handwriting styles can I choose from?',
                  a: 'Six styles: Caveat (natural everyday writing), Kalam (neat and clear), Patrick Hand (clean print-style), Dancing Script (elegant cursive), Shadows Into Light (casual), and Indie Flower (bubbly and fun).',
                },
                {
                  q: 'Can I convert text to handwriting and save as PDF?',
                  a: 'Yes. Click the Download PDF button to open your browser print dialog where you can save or print your handwriting as a PDF document.',
                },
                {
                  q: 'Does the handwriting converter work on mobile?',
                  a: 'Yes, the converter is fully responsive and works on all smartphones, tablets, and desktop browsers without any app download.',
                },
                {
                  q: 'Is my text private when I use this converter?',
                  a: 'Completely private. All processing happens locally in your browser using the HTML5 Canvas API. Your text is never sent to any server.',
                },
              ].map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

          {/* Cross-links to other pages */}
          <section aria-labelledby="also-heading">
            <h2 id="also-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              Also Available
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tools/text-to-handwriting"
                className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors">
                <span className="text-2xl">✍️</span>
                <div>
                  <div className="font-semibold text-brand-800">Text to Handwriting Generator</div>
                  <div className="text-xs text-brand-600">Full-featured tool page with SEO guide</div>
                </div>
              </Link>
              <Link href="/text-to-handwritten-notes"
                className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors">
                <span className="text-2xl">📓</span>
                <div>
                  <div className="font-semibold text-emerald-800">Text to Handwritten Notes</div>
                  <div className="text-xs text-emerald-600">Convert typing to handwritten notebook notes</div>
                </div>
              </Link>
            </div>
          </section>

          {/* More Free Tools */}
          <section aria-labelledby="more-tools-heading">
            <h2 id="more-tools-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <RelatedToolsCluster currentSlug="convert-text-to-handwriting" />
      <Footer />
    </>
  );
}