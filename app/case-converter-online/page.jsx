import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import CaseConverter from '../../components/tools/CaseConverter';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Case Converter Online Free – UPPERCASE, Lowercase, Title Case & More',
  description: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Free online case converter. No signup needed. Try now!',
  keywords: ['case converter online', 'uppercase converter', 'lowercase converter', 'title case converter', 'camelcase converter', 'snake case converter'],
  alternates: { canonical: `${SITE_CONFIG.url}/case-converter-online` },
  openGraph: {
    title: 'Case Converter Online Free – UPPERCASE, Lowercase, Title Case & More',
    description: 'Convert text to any case format instantly. 10 formats including camelCase and snake_case. Free, no signup.',
    url: `${SITE_CONFIG.url}/case-converter-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: 'How do I convert text to uppercase online?', a: 'Paste your text and click the UPPERCASE button — all letters convert to capitals instantly with no delay.' },
  { q: 'What is the difference between Title Case and Sentence case?', a: 'Title Case capitalizes the first letter of every word. Sentence case only capitalizes the first letter of each sentence, leaving everything else lowercase.' },
  { q: 'Does it support programming variable name formats?', a: 'Yes — camelCase, PascalCase, snake_case, and kebab-case are all supported, covering the most common naming conventions in JavaScript, Python, and CSS.' },
  { q: 'Is the case converter free?', a: 'Yes — completely free with no limits, no account, and no watermarks.' },
  { q: 'Is my text stored anywhere?', a: 'No. The tool runs entirely in your browser. Your text is never sent to any server.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Case Converter Online', description: 'Free online tool to convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, alternating case, and inverse case.', url: `${SITE_CONFIG.url}/case-converter-online`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Case Converter', item: `${SITE_CONFIG.url}/case-converter-online` }] },
  ],
};

const caseFormats = [
  { name: 'UPPERCASE',        example: 'HELLO WORLD',              desc: 'All letters become capitals. Used for acronyms, headings, and emphasis.' },
  { name: 'lowercase',        example: 'hello world',              desc: 'All letters become small. Used for URLs, emails, and casual text.' },
  { name: 'Title Case',       example: 'Hello World From Here',    desc: 'First letter of every word capitalized. Standard for blog titles and headings.' },
  { name: 'Sentence case',    example: 'Hello world from here.',   desc: 'Only the first letter of each sentence is capitalized. Standard writing style.' },
  { name: 'camelCase',        example: 'helloWorldFromHere',       desc: 'No spaces, each word capitalized except the first. Used in JavaScript variables.' },
  { name: 'PascalCase',       example: 'HelloWorldFromHere',       desc: 'No spaces, every word capitalized. Used for class names and React components.' },
  { name: 'snake_case',       example: 'hello_world_from_here',    desc: 'Lowercase with underscores. Standard in Python and database column names.' },
  { name: 'kebab-case',       example: 'hello-world-from-here',    desc: 'Lowercase with hyphens. Standard for CSS class names and URL slugs.' },
];

export default function CaseConverterOnlinePage() {
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
                <li className="text-surface-800 font-medium">Case Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Case Converter Online – Convert Text to Any Case Format Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase,
              PascalCase, snake_case, kebab-case, and more. Free, instant, no signup required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant', '10 Case Formats', '💻 Dev Friendly', '🔒 No Signup'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><CaseConverter /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Case Converter" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">Free Case Converter Online – Change Text Case in One Click</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>A <strong>case converter online</strong> changes the capitalization style of any text with a single click — no manual editing required. Whether you need to fix accidentally typed ALL CAPS text, format a blog title in Title Case, or convert a variable name to camelCase or snake_case for your code, our free tool handles all 10 case formats instantly.</p>
              <p>This tool is used daily by writers, bloggers, developers, students, and social media managers. Instead of laboriously capitalizing or lowercasing every word by hand, paste your text, click a format button, and copy the result — the entire process takes under 5 seconds.</p>
              <p>Unlike other case converters, ours supports not just writing formats (UPPERCASE, lowercase, Title Case, Sentence case) but also all major programming naming conventions — <strong>camelCase</strong>, <strong>PascalCase</strong>, <strong>snake_case</strong>, and <strong>kebab-case</strong> — making it equally valuable for developers and writers.</p>
            </div>
          </section>

          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use the Case Converter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Text',   desc: 'Type or paste any text into the input area. Word and character count appear automatically.' },
                { step: '02', icon: '🔡', title: 'Choose a Format',   desc: 'Click any of the 10 case format buttons — UPPERCASE, Title Case, camelCase, snake_case, and more.' },
                { step: '03', icon: '✨', title: 'Instant Result',    desc: 'The converted text appears immediately in the output area with the active format highlighted.' },
                { step: '04', icon: '📋', title: 'Copy the Output',   desc: 'Click Copy to copy the converted text to clipboard. Try another format without re-entering text.' },
              ].map(item => (
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

          <section aria-labelledby="formats-heading">
            <h2 id="formats-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">All Available Case Formats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseFormats.map(fmt => (
                <div key={fmt.name} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-emerald-200 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-surface-900">{fmt.name}</h3>
                    <code className="text-xs bg-surface-900 text-emerald-300 px-2 py-1 rounded-lg font-mono shrink-0">{fmt.example}</code>
                  </div>
                  <p className="text-sm text-surface-500">{fmt.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔤', title: 'Fix CAPS LOCK Mistakes',  desc: 'Convert accidentally typed ALL CAPS text back to normal Sentence case in one click without retyping anything.' },
                { icon: '📝', title: 'Blog Post Titles',         desc: 'Format article headings in consistent Title Case to meet editorial style guide requirements instantly.' },
                { icon: '💻', title: 'Programming Variables',    desc: 'Convert between camelCase, PascalCase, snake_case, and kebab-case when renaming variables, functions, or CSS classes.' },
                { icon: '📱', title: 'Social Media Captions',    desc: 'Prepare properly capitalized social posts and captions that match your brand\'s tone and style.' },
                { icon: '🎓', title: 'Academic Writing',         desc: 'Fix inconsistent capitalization in essays and academic papers — convert headings to the required institutional format.' },
                { icon: '🗄️', title: 'Database Columns',        desc: 'Standardize database column names and JSON keys to snake_case or camelCase for consistent data architecture.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
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

          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">More Case Converter Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/uppercase-to-lowercase-converter', label: 'Uppercase to Lowercase Converter', desc: 'Convert ALL CAPS text to lowercase instantly' },
                { href: '/title-case-converter-online',      label: 'Title Case Converter Online',      desc: 'Format headings and titles in proper Title Case' },
                { href: '/sentence-case-converter',          label: 'Sentence Case Converter',          desc: 'Capitalize only the first letter of each sentence' },
                { href: '/camelcase-to-snake-case',          label: 'CamelCase to snake_case',          desc: 'Convert programming variable name formats' },
              ].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/case-converter-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}
