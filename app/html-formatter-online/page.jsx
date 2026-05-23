import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import HtmlFormatter from '../../components/tools/HtmlFormatter';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'HTML Formatter Online Free – Beautify & Minify HTML Instantly',
  description: 'Format and beautify HTML code online for free. Minify HTML to reduce file size or pretty-print for easy editing. 2 or 4-space indent. No signup. Try now!',
  alternates: { canonical: `${SITE_CONFIG.url}/html-formatter-online` },
  openGraph: {
    title: 'HTML Formatter Online Free – Beautify & Minify HTML Instantly',
    description: 'Format and beautify HTML code online for free. Minify HTML to reduce file size or pretty-print for easy editing. 2 or 4-space indent. No signup. Try now!',
    url: `${SITE_CONFIG.url}/html-formatter-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free HTML Formatter',
      description: 'Format and beautify HTML code online for free. Minify HTML to reduce file size or pretty-print for easy editing. 2 or 4-space indent. No signup. Try now!',
      url: `${SITE_CONFIG.url}/html-formatter-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Free HTML Formatter', item: `${SITE_CONFIG.url}/html-formatter-online` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/css-minifier-online', label: 'CSS Minifier Online', desc: 'Minify the CSS in your HTML files' },
              { href: '/json-formatter-online', label: 'JSON Formatter Online', desc: 'Format JSON embedded in HTML' },
              { href: '/url-encoder-online', label: 'URL Encoder Online', desc: 'Encode URLs used in HTML attributes' },
              { href: '/meta-tag-generator-online', label: 'Meta Tag Generator', desc: 'Generate HTML meta tags' },
];

const variantLinks = [
  { href: '/html-beautifier-online', label: 'HTML Beautifier Online' },
              { href: '/html-minifier-online', label: 'HTML Minifier Online' },
              { href: '/html-code-formatter', label: 'HTML Code Formatter' },
              { href: '/html-email-formatter', label: 'HTML Email Formatter' },
];

const faqs = [
  { q: 'Does it validate HTML?', a: 'It formats HTML but does not validate W3C compliance. Use the W3C Markup Validator for full validation.' },
  { q: 'Can it format HTML email templates?', a: 'Yes — it handles inline styles, table-based layouts, and email-specific HTML structures.' },
  { q: 'What is the difference between Format and Minify?', a: 'Format adds indentation for readability. Minify removes it to reduce file size for production.' },
  { q: 'Is there a size limit?', a: 'No — handles HTML of any length.' },
  { q: 'Is my HTML code safe?', a: 'Yes — runs entirely in your browser. Your code never leaves your device.' },
];

export default function Page() {
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
                <li>
                  <Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">
                    Developer Tools
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Free HTML Formatter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free HTML Formatter Online – Beautify & Minify HTML Code Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Format and beautify HTML code online for free. Minify HTML to reduce file size or pretty-print for easy editing. 2 or 4-space indent. No signup. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Results', '🔒 No Signup', '📱 Mobile Friendly', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <HtmlFormatter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Free HTML Formatter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔍', title: 'Debugging Layouts', desc: 'Beautify minified HTML from production websites to read the structure and debug layout issues.' },
              { icon: '📧', title: 'Email Templates', desc: 'Format HTML email templates from WYSIWYG builders before editing or integrating into an ESP.' },
              { icon: '📦', title: 'Production Minification', desc: 'Minify HTML landing pages before deployment to reduce bandwidth and improve load speed.' },
              { icon: '👥', title: 'Code Reviews', desc: 'Format HTML before pasting into GitHub PRs, Jira tickets, and Slack for easier peer review.' },
              { icon: '🏗️', title: 'CMS Integration', desc: 'Clean up HTML exported from WordPress, Webflow, and other CMSes before integrating into templates.' },
              { icon: '📚', title: 'Learning HTML', desc: 'Beautify minified example code from documentation to study indentation and nesting structure.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {variantLinks.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
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
