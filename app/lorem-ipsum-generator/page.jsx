import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import LoremIpsum from '../../components/tools/LoremIpsum';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Lorem Ipsum Generator Online Free – Instant Placeholder Text',
  description: 'Generate Lorem Ipsum placeholder text online for free. Choose paragraphs, sentences, or words. Classic or random dummy text. No signup required. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/lorem-ipsum-generator` },
  openGraph: {
    title: 'Lorem Ipsum Generator Online Free – Instant Placeholder Text',
    description: 'Generate Lorem Ipsum placeholder text online for free. Choose paragraphs, sentences, or words. Classic or random dummy text. No signup required. Try now!',
    url: `${SITE_CONFIG.url}/lorem-ipsum-generator`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: 'What is Lorem Ipsum?', a: 'A scrambled excerpt from Cicero used as standard placeholder text since the 1500s in design and publishing.' },
  { q: 'Can I generate a specific number of words?', a: 'Yes — switch to Words mode and enter any number from 1 to 500 to generate exactly the amount of text you need.' },
  { q: 'Is the text always the same?', a: 'The classic opening follows standard Lorem Ipsum. Additional paragraphs are randomly generated variations fresh on every click.' },
  { q: 'Can I use Lorem Ipsum in final products?', a: 'Lorem Ipsum is strictly placeholder — always replace with real content before publishing or launching your project.' },
  { q: 'Is the generator free?', a: 'Yes — completely free with unlimited generations and no account required.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Lorem Ipsum Generator Online Free – Instant Placeholder Text', description: 'Generate Lorem Ipsum placeholder text online for free. Choose paragraphs, sentences, or words. Classic or random dummy text. No signup required. Try now!', url: `${SITE_CONFIG.url}/lorem-ipsum-generator`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Lorem Ipsum Generator – Generate Placeholder Text Instantly', item: `${SITE_CONFIG.url}/lorem-ipsum-generator` }] },
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
                <li className="text-surface-800 font-medium">Lorem Ipsum Generator – Generate Placeholder Text Instantly</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">Lorem Ipsum Generator – Generate Placeholder Text Instantly</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Generate Lorem Ipsum placeholder text online for free. Choose paragraphs, sentences, or words. Classic or random dummy text. No signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant', '📝 Paragraphs · Sentences · Words', '🔒 No Signup'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><LoremIpsum /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Lorem Ipsum Generator – Generate Placeholder Text Instantly" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">About This Tool</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: 'A <strong>Lorem Ipsum generator online</strong> creates standard placeholder text used by designers and developers worldwide. Whether you are designing a website mockup, testing a typography system, creating a UI prototype in Figma, or filling a database with dummy content for development — Lorem Ipsum is the universal filler text. Our free tool generates text by paragraphs, sentences, or individual words with a toggle for the classic opening line.' }} />
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{step: '01', icon: '📐', title: 'Select Output Type', desc: 'Choose between Paragraphs, Sentences, or Words depending on how much text you need.'},
              {step: '02', icon: '🔢', title: 'Set the Quantity', desc: 'Enter the number of paragraphs, sentences, or words to generate.'},
              {step: '03', icon: '🔤', title: 'Toggle Classic Opening', desc: 'Turn on or off the classic "Lorem ipsum dolor sit amet..." opening line.'},
              {step: '04', icon: '⚡', title: 'Click Generate', desc: 'Hit Generate to produce your placeholder text — copy with one click.'}].map(item => (
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
              {[{icon: '⚡', title: 'Instant Generation', desc: 'Placeholder text is generated in milliseconds — no wait, no loading.'},
              {icon: '📝', title: 'Three Output Modes', desc: 'Generate by paragraphs, sentences, or exact word count.'},
              {icon: '🔤', title: 'Classic Opening Toggle', desc: 'Choose the standard Lorem ipsum opening or fully random text.'},
              {icon: '♾️', title: 'No Usage Limits', desc: 'Generate as many times as needed with no restrictions.'},
              {icon: '📋', title: 'One-Click Copy', desc: 'Copy all generated text to clipboard in a single click.'},
              {icon: '🔒', title: 'Private & Secure', desc: 'Runs in your browser — nothing is sent to any server.'}].map(f => (
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
              {[{icon: '🎨', title: 'Website Mockups', desc: 'Fill wireframes with realistic-looking text so clients evaluate layout and design without being distracted by placeholder labels.'},
              {icon: '🔠', title: 'Typography Testing', desc: 'Test font sizes, line heights, letter spacing, and paragraph styles with multi-paragraph Lorem Ipsum in real reading conditions.'},
              {icon: '💾', title: 'Database Seeding', desc: 'Populate development and staging databases with dummy text records for unit testing, load testing, and UI development.'},
              {icon: '📧', title: 'Email Templates', desc: 'Fill email template designs with body copy to check how the layout handles different text lengths across email clients.'},
              {icon: '🖼️', title: 'Design Prototypes', desc: 'Insert placeholder text into Figma, Adobe XD, Sketch, and InVision prototypes without waiting for real copy from clients.'},
              {icon: '📊', title: 'Presentations', desc: 'Add filler text to slide deck layouts and presentation templates while the real content is still being written.'}].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">More About This Tool</h2>
            <div className="text-surface-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'Whether you need a <strong>dummy text generator</strong>, a <strong>random placeholder text generator</strong>, or a classic <strong>lipsum generator online</strong> — this tool handles all of it. Use it as a <strong>lorem ipsum paragraph generator</strong> for design mockups, or generate lorem ipsum 500 words for longer content tests. It is the most versatile free lorem ipsum online tool for designers and developers.' }} />
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><span itemProp="text">{faq.a}</span></div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Lorem Ipsum Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{href: '/lorem-ipsum-500-words', label: 'Lorem Ipsum 500 Words', desc: 'Generate exactly 500 words of placeholder text'},
              {href: '/lorem-ipsum-paragraph-generator', label: 'Lorem Ipsum Paragraph Generator', desc: 'Generate multiple placeholder paragraphs'},
              {href: '/dummy-text-generator', label: 'Dummy Text Generator', desc: 'Random dummy text for any design project'},
              {href: '/placeholder-text-for-figma', label: 'Placeholder Text for Figma', desc: 'Generate placeholder text for Figma designs'}].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/lorem-ipsum-generator" />

        </div>
      </main>
      <Footer />
    </>
  );
}
