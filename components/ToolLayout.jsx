import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import AdBanner, { AffiliateCTA } from './AdBanner';
import ToolCard from './ToolCard';
import { categoryColors } from '../data/tools';

/**
 * ToolLayout Component
 * ====================
 * Standard layout wrapper for every tool page.
 * Includes:
 * - Breadcrumb navigation
 * - Two-column layout (tool + sidebar ads)
 * - How-to-use section
 * - FAQ section (accordion)
 * - Related tools grid
 * - Structured data for SEO
 */
export default function ToolLayout({
  tool,
  relatedTools = [],
  children,
}) {
  const colors = categoryColors[tool.category] || categoryColors.utility;

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Top banner ad */}
        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-surface-500" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-brand-600 transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li><span>/</span></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className={`capitalize ${colors.text}`} itemProp="name">{tool.category} Tools</span>
                <meta itemProp="position" content="2" />
              </li>
              <li><span>/</span></li>
              <li className="text-surface-800 font-medium" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{tool.name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>
        </div>

        {/* Tool header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-surface-100 border border-surface-200 flex items-center justify-center text-2xl shrink-0">
              {tool.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`badge ${colors.bg} ${colors.text} ${colors.border} border text-xs`}>
                  {tool.category}
                </span>
                <span className="text-xs text-surface-400">Free · No signup required</span>
              </div>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-surface-900">
                {tool.name}
              </h1>
              <p className="mt-1.5 text-surface-500 text-base leading-relaxed max-w-2xl">
                {tool.description}
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* Left: Tool + Info */}
            <div className="space-y-8">
              {/* Tool interface */}
              <section aria-label="Tool interface">
                {children}
              </section>

              {/* Affiliate CTA */}
              <AffiliateCTA toolName={tool.name} />

              {/* In-content ad */}
              <AdBanner variant="content" />

              {/* Long description */}
              {tool.longDescription && (
                <section aria-labelledby="about-heading">
                  <h2 id="about-heading" className="font-display font-bold text-xl text-surface-900 mb-3">
                    About {tool.name}
                  </h2>
                  <p className="text-surface-600 leading-relaxed">{tool.longDescription}</p>
                </section>
              )}

              {/* How to use */}
              {tool.howToUse?.length > 0 && (
                <section aria-labelledby="howto-heading">
                  <h2 id="howto-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
                    How to Use {tool.name}
                  </h2>
                  <ol className="space-y-3">
                    {tool.howToUse.map((step, i) => (
                      <li key={i} className="flex gap-3 text-surface-600">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* FAQ */}
              {tool.faqs?.length > 0 && (
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                    {tool.faqs.map((faq, i) => (
                      <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right: Sidebar */}
            <aside className="space-y-6" aria-label="Sidebar">
              {/* Sidebar ad */}
              <AdBanner variant="sidebar" />

              {/* Related tools */}
              {relatedTools.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-surface-900 mb-4 text-base">
                    Related Tools
                  </h3>
                  <div className="space-y-3">
                    {relatedTools.map(t => (
                      <Link
                        key={t.slug}
                        href={`/tools/${t.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 bg-white hover:border-brand-200 hover:bg-brand-50 transition-all group"
                      >
                        <span className="text-xl">{t.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-surface-800 group-hover:text-brand-700">{t.name}</div>
                          <div className="text-xs text-surface-500 capitalize">{t.category}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* Related tools grid (bottom) */}
        {relatedTools.length > 0 && (
          <section className="bg-surface-50 border-t border-surface-100 py-12" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedTools.map(t => (
                  <ToolCard key={t.slug} tool={t} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

/** Accordion FAQ item */
function FAQItem({ q, a }) {
  return (
    <details
      className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
      itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
    >
      <summary
        className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
        itemProp="name"
      >
        {q}
        <svg
          className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div
        className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
      >
        <span itemProp="text">{a}</span>
      </div>
    </details>
  );
}
