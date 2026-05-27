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
  title: 'Text to Handwritten Notes Generator – Free Notebook Maker',
  description: 'Turn any text into handwritten notes on notebook paper. Free tool — choose style, paper, ink color, and download as PNG or PDF. No signup required.',
  keywords: [
    'text to handwritten notes',
    'text to handwriting notes',
    'typing to handwritten notes',
    'handwritten notes generator',
    'notebook notes generator online',
    'make handwritten notes from text',
    'text to notebook paper',
    'handwriting notes maker free',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/text-to-handwritten-notes`,
  },
  openGraph: {
    title: 'Text to Handwritten Notes – Free Notebook Notes Generator',
    description: 'Turn typed text into realistic handwritten notebook notes. Free tool with 6 fonts, 4 paper styles, ink colors, and PNG/PDF download.',
    url: `${SITE_CONFIG.url}/text-to-handwritten-notes`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text to Handwritten Notes – Free Notebook Notes Generator',
    description: 'Turn typed text into realistic handwritten notebook notes. Free, instant, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── Related tools ─────────────────────────────────────────────
const relatedTools = tools.filter(t =>
  ['word-counter', 'character-counter', 'case-converter', 'markdown-preview'].includes(t.slug)
);

// ── Structured Data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Text to Handwritten Notes Generator',
      description: 'Free tool to convert typed text into realistic handwritten notes on notebook paper. Download as PNG or PDF.',
      url: `${SITE_CONFIG.url}/text-to-handwritten-notes`,
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
          name: 'How do I turn text into handwritten notes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Type or paste your text into the tool, select a handwriting font and notebook paper style, then click Download PNG or PDF. Your handwritten notes are ready in seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I make my handwritten notes look like real notebook paper?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Choose the "Ruled Paper" option to get authentic notebook-style paper complete with blue ruled lines, a red margin line, and binding holes on the left side.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the handwritten notes generator free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Completely free. No account, no watermarks, no download limits. Use it as often as you need.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download handwritten notes as PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — click Download PDF to open a browser print dialog where you can save as PDF or send to a printer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best handwriting style for school notes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kalam or Patrick Hand are best for school notes — they are clear and easy to read, closely resembling neat everyday handwriting.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Text to Handwritten Notes', item: `${SITE_CONFIG.url}/text-to-handwritten-notes` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert Text to Handwritten Notes',
      description: 'Step-by-step guide to turning typed text into handwritten notebook notes.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter your text', text: 'Type or paste the text you want to convert into the input area.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose a handwriting style', text: 'Select from 6 realistic handwriting fonts.' },
        { '@type': 'HowToStep', position: 3, name: 'Pick notebook paper', text: 'Choose ruled notebook paper or another paper style.' },
        { '@type': 'HowToStep', position: 4, name: 'Download your notes', text: 'Download as PNG image or save as PDF.' },
      ],
    },
  ],
};

export default function TextToHandwrittenNotesPage() {
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
                <li className="text-surface-800 font-medium">Text to Handwritten Notes</li>
              </ol>
            </nav>

            {/* H1 */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Text to Handwritten Notes Generator
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Turn any typed text into realistic handwritten notebook notes in seconds.
              Pick your font, paper, and pen color — preview live and download as PNG or PDF.
              Completely free, no account needed.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              {['✅ 100% Free', '📓 Notebook Paper', '💧 No Watermark', '⚡ Live Preview', '📥 PNG & PDF'].map(b => (
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
          <AffiliateCTA toolName="handwritten notes generator" />
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
              What Is a Text to Handwritten Notes Generator?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong>text to handwritten notes generator</strong> is an online tool that takes
                your typed text and renders it in a handwriting font on a realistic paper background —
                producing the visual appearance of genuine handwritten notes without picking up a pen.
              </p>
              <p>
                Our tool uses six carefully selected Google handwriting fonts and the HTML5 Canvas API
                to draw your text on virtual notebook paper. You can choose between ruled lines (just
                like a real school notebook), grid paper, white paper, or a yellow notepad background.
                The red margin line, binding holes, and subtle paper texture make the output look
                indistinguishable from actual handwritten notes at a glance.
              </p>
              <p>
                Everything processes locally in your browser — there is no upload, no account,
                and no waiting. Just paste, customize, and download in under a minute.
              </p>
            </div>
          </section>

          {/* Section 2 - How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert Text to Handwritten Notes
            </h2>
            <ol className="space-y-4">
              {[
                {
                  n: 1,
                  title: 'Enter Your Text',
                  desc: 'Type directly into the text area or paste copied text. The tool handles multiple paragraphs and line breaks perfectly.',
                },
                {
                  n: 2,
                  title: 'Choose a Handwriting Style',
                  desc: 'Browse 6 fonts. For school notes, try Kalam (neat and clear). For a more personal feel, try Caveat or Indie Flower.',
                },
                {
                  n: 3,
                  title: 'Adjust Spacing and Size',
                  desc: 'Use the sliders to control font size, line spacing (how far apart the lines sit), and letter spacing for a natural look.',
                },
                {
                  n: 4,
                  title: 'Download Your Handwritten Notes',
                  desc: 'Click Download PNG for an image file or Download PDF to save and print using your browser\'s print dialog.',
                },
              ].map(step => (
                <li key={step.n} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 3 - Handwriting Styles */}
          <section aria-labelledby="styles-heading">
            <h2 id="styles-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Handwriting Styles for Your Notes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Caveat',              style: 'Natural, everyday handwriting',       best: 'Personal journals and casual notes' },
                { name: 'Kalam',               style: 'Neat, clear, easy to read',           best: 'School assignments and study notes' },
                { name: 'Patrick Hand',        style: 'Clean and consistent print-style',    best: 'Professional and formal handwriting' },
                { name: 'Dancing Script',      style: 'Elegant flowing cursive',             best: 'Creative projects and invitations' },
                { name: 'Shadows Into Light',  style: 'Relaxed casual handwriting',          best: 'Social media quotes and creative content' },
                { name: 'Indie Flower',        style: 'Fun, bubbly, rounded lettering',      best: 'Kids, crafts, and playful designs' },
              ].map(s => (
                <div key={s.name} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 mb-1">{s.name}</div>
                  <div className="text-sm text-surface-600 mb-2">{s.style}</div>
                  <div className="text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded-lg inline-block">
                    Best for: {s.best}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 - Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Popular Uses for Handwritten Notes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎓', title: 'School & College Work',   desc: 'Submit typed work that looks handwritten when teachers require handwritten assignments. Save time without sacrificing appearance.' },
                { icon: '📚', title: 'Study Notes',             desc: 'Research shows handwritten notes improve retention. Use our tool to create handwriting-style study materials quickly.' },
                { icon: '🎨', title: 'Creative & Art Projects', desc: 'Add authentic handwritten text to posters, artwork, scrapbooks, greeting cards, and collages.' },
                { icon: '📸', title: 'Social Media Content',    desc: 'Create aesthetic handwritten quotes for Instagram, Pinterest, and TikTok without needing perfect handwriting.' },
                { icon: '💌', title: 'Personal Messages',       desc: 'Write heartfelt notes and letters that look genuinely hand-penned for a personal and warm touch.' },
                { icon: '🏷️', title: 'Labels & Tags',           desc: 'Generate handwritten-look labels for products, gifts, recipe cards, and home organization.' },
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
                  q: 'How do I turn text into handwritten notes?',
                  a: 'Type or paste your text into the tool, select a handwriting font and notebook paper style, then click Download PNG or PDF. Your handwritten notes are ready in seconds.',
                },
                {
                  q: 'Can I make my notes look like real notebook paper?',
                  a: 'Yes. Choose the "Ruled Paper" option to get authentic notebook-style paper complete with blue ruled lines, a red margin line, and binding holes on the left side.',
                },
                {
                  q: 'Is the handwritten notes generator free?',
                  a: 'Completely free. No account, no watermarks, no download limits. Use it as often as you need.',
                },
                {
                  q: 'Can I download my handwritten notes as PDF?',
                  a: 'Yes — click Download PDF to open a browser print dialog where you can save as PDF or send directly to a printer.',
                },
                {
                  q: 'What is the best handwriting style for school notes?',
                  a: 'Kalam or Patrick Hand are best for school notes — they are clear and easy to read, closely resembling neat everyday handwriting.',
                },
                {
                  q: 'Does this work without installing anything?',
                  a: 'Yes, it runs entirely in your browser. No app download, no plugin, no installation required.',
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

          {/* Cross-links */}
          <section aria-labelledby="also-heading">
            <h2 id="also-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Handwriting Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tools/text-to-handwriting"
                className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors">
                <span className="text-2xl">✍️</span>
                <div>
                  <div className="font-semibold text-brand-800">Text to Handwriting Generator</div>
                  <div className="text-xs text-brand-600">Full-featured handwriting tool page</div>
                </div>
              </Link>
              <Link href="/convert-text-to-handwriting"
                className="flex items-center gap-3 p-4 bg-violet-50 border border-violet-200 rounded-xl hover:bg-violet-100 transition-colors">
                <span className="text-2xl">🖊️</span>
                <div>
                  <div className="font-semibold text-violet-800">Convert Text to Handwriting</div>
                  <div className="text-xs text-violet-600">Quick handwriting converter guide</div>
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

      <RelatedToolsCluster currentSlug="text-to-handwritten-notes" />
      <Footer />
    </>
  );
}