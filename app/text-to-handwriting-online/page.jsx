import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import TextToHandwriting from '../../components/tools/TextToHandwriting';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Text to Handwriting Generator Free – Convert Text to Handwritten Notes',
  description: 'Convert typed text to realistic handwritten notes online free. 6 fonts, 4 paper styles, pen colors, PNG and PDF download. No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/text-to-handwriting-online` },
  openGraph: {
    title: 'Text to Handwriting Generator Free – Convert Text to Handwritten Notes',
    description: 'Convert typed text to realistic handwritten notes online free. 6 fonts, 4 paper styles, pen colors, PNG and PDF download. No signup required. Try now!',
    url: `${SITE_CONFIG.url}/text-to-handwriting-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: 'What is a text to handwriting generator?', a: 'A tool that renders typed text in a handwriting font on virtual notebook paper, creating the appearance of genuine handwritten notes.' },
  { q: 'Is the tool free?', a: 'Yes — completely free with no watermarks, no account, and no download limits.' },
  { q: 'Can I download the handwriting as PDF?', a: 'Yes — click Download PDF to open your browser print dialog where you can save as PDF or print directly.' },
  { q: 'What handwriting styles are available?', a: 'Caveat (natural), Kalam (neat), Patrick Hand (clean), Dancing Script (cursive), Shadows Into Light (casual), and Indie Flower (bubbly).' },
  { q: 'Is my text safe?', a: 'Yes — all processing uses the Canvas API in your browser. Your text never leaves your device.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Text to Handwriting Generator Free – Convert Text to Handwritten Notes', description: 'Convert typed text to realistic handwritten notes online free. 6 fonts, 4 paper styles, pen colors, PNG and PDF download. No signup required. Try now!', url: `${SITE_CONFIG.url}/text-to-handwriting-online`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Text to Handwriting Generator – Convert Text to Handwritten Notes Online', item: `${SITE_CONFIG.url}/text-to-handwriting-online` }] },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Text to Handwriting Generator – Convert Text to Handwritten Notes Online</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">Text to Handwriting Generator – Convert Text to Handwritten Notes Online</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Convert typed text to realistic handwritten notes online free. 6 fonts, 4 paper styles, pen colors, PNG and PDF download. No signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '✍️ 6 Handwriting Fonts', '📄 4 Paper Styles', '🖊️ 6 Pen Colors', '📥 PNG & PDF'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><TextToHandwriting /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Text to Handwriting Generator – Convert Text to Handwritten Notes Online" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">About This Tool</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: 'Our free <strong>text to handwriting generator online</strong> converts any typed text into realistic handwritten notes rendered on virtual notebook paper — instantly, in your browser, with no uploads required. Choose from 6 authentic handwriting fonts, 4 paper styles including ruled notebook paper with red margin line and binding holes, 6 pen ink colors, and customize font size, line spacing, and letter spacing. Preview updates live as you make changes. Download as high-resolution PNG or PDF.' }} />
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{step: '01', icon: '✍️', title: 'Type or Paste Text', desc: 'Enter any text into the input area. The tool handles multiple lines and paragraphs.'},
              {step: '02', icon: '🎨', title: 'Choose Handwriting Style', desc: 'Select from 6 fonts: Caveat, Kalam, Patrick Hand, Dancing Script, Shadows Into Light, or Indie Flower.'},
              {step: '03', icon: '📄', title: 'Select Paper & Ink', desc: 'Pick ruled notebook, white, yellow notepad, or grid paper. Choose from 6 pen ink colors.'},
              {step: '04', icon: '⚙️', title: 'Adjust Spacing', desc: 'Use sliders to control font size, line spacing, and letter spacing for a natural look.'},
              {step: '05', icon: '👁️', title: 'Preview Live', desc: 'The canvas updates in real time — see exactly how your handwriting will look.'},
              {step: '06', icon: '⬇️', title: 'Download PNG or PDF', desc: 'Click Download PNG for an image file or Download PDF to save or print.'}].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{icon: '✍️', title: '6 Handwriting Fonts', desc: 'Caveat (natural), Kalam (neat), Patrick Hand (clean), Dancing Script (cursive), Shadows Into Light (casual), Indie Flower (bubbly).'},
              {icon: '📄', title: '4 Paper Styles', desc: 'Ruled notebook with margin line and holes, white paper, yellow notepad, and grid paper.'},
              {icon: '🖊️', title: '6 Pen Colors', desc: 'Blue, black, dark blue, red, green, and purple ink colors.'},
              {icon: '🎚️', title: 'Adjustable Spacing', desc: 'Control font size (18–42px), line spacing, and letter spacing with sliders.'},
              {icon: '👁️', title: 'Live Canvas Preview', desc: 'Canvas re-renders in real time as you type and adjust settings.'},
              {icon: '📥', title: 'PNG & PDF Download', desc: 'High-resolution PNG download and browser print-to-PDF support.'}].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{f.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{icon: '🎓', title: 'School Assignments', desc: 'Convert typed essays to a handwritten appearance for school submissions that require handwritten work.'},
              {icon: '📸', title: 'Social Media Content', desc: 'Create aesthetic handwritten quote images for Instagram and Pinterest without needing perfect handwriting.'},
              {icon: '💌', title: 'Personal Messages', desc: 'Write heartfelt notes and letters that look genuinely handwritten for a warm, personal digital touch.'},
              {icon: '🎨', title: 'Creative Projects', desc: 'Add authentic handwritten text to artwork, posters, greeting cards, scrapbooks, and creative designs.'},
              {icon: '📚', title: 'Study Materials', desc: 'Convert study notes to handwriting style — research suggests handwritten-style notes can improve memory retention.'},
              {icon: '🏷️', title: 'Labels & Tags', desc: 'Generate handwritten-style labels for products, gift tags, recipe cards, and home organization.'}].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">More About This Tool</h2>
            <div className="text-surface-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'Whether you need a <strong>text to handwriting converter online free</strong>, a <strong>cursive text generator</strong>, or a <strong>typing to handwriting tool</strong> — this is the most complete solution available. Use it to convert text to handwritten notes, create notebook paper handwriting, or generate cursive writing from typed text. Everything runs in your browser with no data uploaded.' }} />
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Handwriting Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{href: '/convert-text-to-handwriting', label: 'Convert Text to Handwriting', desc: 'Step-by-step guide to converting text'},
              {href: '/text-to-handwritten-notes', label: 'Text to Handwritten Notes', desc: 'Convert typing to handwritten notebook notes'},
              {href: '/cursive-handwriting-generator', label: 'Cursive Handwriting Generator', desc: 'Generate elegant cursive handwriting'},
              {href: '/notebook-paper-handwriting', label: 'Notebook Paper Handwriting', desc: 'Render handwriting on ruled notebook paper'}].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/text-to-handwriting-online" />

          <RelatedToolsCluster currentSlug="text-to-handwriting-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}
