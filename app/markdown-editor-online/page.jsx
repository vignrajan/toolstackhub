import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import MarkdownPreview from '../../components/tools/MarkdownPreview';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Markdown Editor Online Free – Live Preview & Split-Screen Renderer',
  description: 'Write Markdown and see a live rendered preview. Supports GFM, tables, task lists, code blocks. Export HTML or download .md file. Free. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/markdown-editor-online` },
  openGraph: {
    title: 'Markdown Editor Online Free – Live Preview & Split-Screen Renderer',
    description: 'Write Markdown and see a live rendered preview. Supports GFM, tables, task lists, code blocks. Export HTML or download .md file. Free. No signup. Try now!',
    url: `${SITE_CONFIG.url}/markdown-editor-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [('What Markdown features are supported?', 'Full GitHub Flavored Markdown: headings, bold, italic, links, images, lists, tables, task lists, strikethrough, code blocks, blockquotes, and horizontal rules.'), ('Can I export as HTML?', 'Yes — click Copy HTML to get the fully rendered HTML output ready to paste into any web project or CMS.'), ('Does it support syntax highlighting in code blocks?', 'Yes — fenced code blocks with language specifiers (e.g. ```javascript) render with color-coded syntax highlighting.'), ('Can I download the Markdown file?', 'Yes — click Download .md to save your content as a Markdown file directly to your device.'), ('Is the editor free?', 'Yes — completely free with no account or download required.')];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Markdown Editor Online Free – Live Preview & Split-Screen Renderer', description: 'Write Markdown and see a live rendered preview. Supports GFM, tables, task lists, code blocks. Export HTML or download .md file. Free. No signup. Try now!', url: `${SITE_CONFIG.url}/markdown-editor-online`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Markdown Editor Online – Live Split-Screen Markdown Preview', item: `${SITE_CONFIG.url}/markdown-editor-online` }] },
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
                <li className="text-surface-800 font-medium">Markdown Editor Online – Live Split-Screen Markdown Preview</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">Markdown Editor Online – Live Split-Screen Markdown Preview</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Write Markdown and see a live rendered preview. Supports GFM, tables, task lists, code blocks. Export HTML or download .md file. Free. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Live Preview', '📋 GFM Support', '💾 Export HTML & .md', '🔒 No Signup'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><MarkdownPreview /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Markdown Editor Online – Live Split-Screen Markdown Preview" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">About This Tool</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: 'Our free <strong>Markdown editor online</strong> renders your Markdown in a live split-screen preview as you type — with no delay. Supports full GitHub Flavored Markdown (GFM) including tables, task lists, strikethrough, fenced code blocks with syntax highlighting, blockquotes, links, images, and all standard Markdown elements. Switch between Split, Edit-only, and Preview-only views. Export the rendered HTML or download your content as a .md file.' }} />
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{step: '01', icon: '✍️', title: 'Write Your Markdown', desc: 'Type or paste Markdown in the left editor panel. The right panel updates live instantly.'},
              {step: '02', icon: '👁️', title: 'See Live Preview', desc: 'The rendered preview updates in real time showing exactly how your Markdown will look.'},
              {step: '03', icon: '🔄', title: 'Switch View Modes', desc: 'Toggle between Split, Edit-only, and Preview-only views using the toolbar buttons.'},
              {step: '04', icon: '📊', title: 'Check Word Count', desc: 'View word count, character count, and line count in the bottom toolbar at any time.'},
              {step: '05', icon: '📋', title: 'Copy as HTML', desc: 'Click Copy HTML to get the fully rendered HTML output ready to paste into any web project.'},
              {step: '06', icon: '💾', title: 'Download .md File', desc: 'Click Download .md to save your Markdown content as a file to your device.'}].map(item => (
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
              {[{icon: '⚡', title: 'Live Split-Screen Preview', desc: 'Rendered preview updates in real time as you type — no button press needed.'},
              {icon: '📋', title: 'GitHub Flavored Markdown', desc: 'Full GFM support: tables, task lists, strikethrough, fenced code blocks, and more.'},
              {icon: '🎨', title: 'Syntax Highlighting', desc: 'Code blocks with language specifiers render with color-coded syntax highlighting.'},
              {icon: '📤', title: 'Export as HTML', desc: 'Copy the fully rendered HTML output for use in any web project or CMS.'},
              {icon: '💾', title: 'Download .md File', desc: 'Save your Markdown content as a .md file directly to your device.'},
              {icon: '📊', title: 'Word & Character Count', desc: 'Live word count, character count, and line count displayed in the toolbar.'}].map(f => (
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
              {[{icon: '📄', title: 'README Files', desc: 'Write and preview README.md files before pushing to GitHub or GitLab repositories.'},
              {icon: '📝', title: 'Blog Posts', desc: 'Draft blog posts for Ghost, Hashnode, Dev.to with real-time preview before publishing.'},
              {icon: '📚', title: 'Documentation', desc: 'Write software documentation, API guides, and technical tutorials with live preview.'},
              {icon: '🗒️', title: 'Notes & Journaling', desc: 'Take rich formatted notes for Obsidian, Notion, Joplin, and other Markdown apps.'},
              {icon: '🌐', title: 'Static Sites', desc: 'Preview content for Jekyll, Hugo, Gatsby, and other Markdown-based static site generators.'},
              {icon: '✅', title: 'Task Lists', desc: 'Create formatted task lists and project checklists using GFM task list syntax.'}].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">More About This Tool</h2>
            <div className="text-surface-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'Use this as a <strong>markdown editor online free</strong>, a <strong>live markdown preview tool</strong>, or a <strong>markdown renderer online</strong>. It works as a <strong>markdown viewer free</strong> and an <strong>online markdown writer</strong> simultaneously. Whether you need to preview markdown online, convert markdown to HTML, or use a markdown live editor for writing — this tool provides the best free markdown preview experience available.' }} />
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors" itemProp="name">
                    {faq[0]}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><span itemProp="text">{faq[1]}</span></div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Markdown Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{href: '/markdown-to-html-converter', label: 'Markdown to HTML Converter', desc: 'Convert Markdown to HTML output'},
              {href: '/github-markdown-preview', label: 'GitHub Markdown Preview', desc: 'Preview GitHub Flavored Markdown GFM'},
              {href: '/readme-preview-online', label: 'README Preview Online', desc: 'Preview README.md files before pushing'},
              {href: '/markdown-table-generator', label: 'Markdown Table Generator', desc: 'Generate Markdown tables easily'}].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/markdown-editor-online" />

          <RelatedToolsCluster currentSlug="markdown-editor-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}
