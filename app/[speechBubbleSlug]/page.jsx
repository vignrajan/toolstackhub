// app/[speechBubbleSlug]/page.jsx
// Dynamic route that serves ALL programmatic speech bubble pages

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import SpeechBubbleMaker from '../../components/tools/SpeechBubbleMaker';
import { getPageBySlug, getRelatedPages, getAllSlugs } from '../../data/speech-bubble-pages';
import { SITE_CONFIG } from '../../data/tools';

// ── Static params for build-time generation ───────────────────
export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ speechBubbleSlug: slug }));
}

// ── Dynamic metadata ──────────────────────────────────────────
export async function generateMetadata({ params }) {
  const page = getPageBySlug(params.speechBubbleSlug);
  if (!page) return {};
  return {
    title:       `${page.title} | ToolStackHub`,
    description:  page.metaDesc,
    keywords:    [page.slug.replace(/-/g, ' '), 'speech bubble maker', 'free online', 'no login'],
    alternates: { canonical: `${SITE_CONFIG.url}/${page.slug}` },
    openGraph: {
      title:       page.title,
      description: page.metaDesc,
      url:        `${SITE_CONFIG.url}/${page.slug}`,
      type:        'website',
      siteName:    SITE_CONFIG.name,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    },
  };
}

// ── Page component ────────────────────────────────────────────
export default function SpeechBubbleVariantPage({ params }) {
  const page    = getPageBySlug(params.speechBubbleSlug);
  const related = getRelatedPages(params.speechBubbleSlug);

  if (!page) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: page.title,
        description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',                item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Speech Bubble Maker', item: `${SITE_CONFIG.url}/speech-bubble-maker` },
          { '@type': 'ListItem', position: 3, name: page.h1,               item: `${SITE_CONFIG.url}/${page.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        {/* ── Header ────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li>
                  <Link href="/speech-bubble-maker" className="hover:text-brand-600 text-brand-600">
                    Speech Bubble Maker
                  </Link>
                </li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              {page.h1}
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              {page.intro}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free', '🚫 No Login', '⬇️ PNG Download', '💬 6 Bubble Styles', '🔒 Private'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ──────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SpeechBubbleMaker />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        {/* ── SEO content ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">

          {/* Tips for this use case */}
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Tips for {page.h1.replace(' – Free Online', '').replace(' – Free', '')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-sm text-surface-600 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* How to use quick guide */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              How to Use This Tool — Quick Guide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { n: '1', label: 'Upload Image',     desc: 'Click "Upload Image" or start with blank canvas' },
                { n: '2', label: 'Add Bubble',        desc: 'Click "+ Add Bubble" and choose your style' },
                { n: '3', label: 'Customize',         desc: 'Type text, pick colors, font, and bubble style' },
                { n: '4', label: 'Download PNG',      desc: 'Click Download — saves instantly, no watermark' },
              ].map(s => (
                <div key={s.n} className="p-4 bg-brand-50 border border-brand-200 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mb-2">{s.n}</div>
                  <div className="font-semibold text-brand-900 text-sm">{s.label}</div>
                  <div className="text-xs text-brand-700 mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links — main + related ─────────────────── */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
              More Speech Bubble Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Always link to main hub */}
              <Link href="/speech-bubble-maker"
                className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors group">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-bold text-white text-sm">Free Speech Bubble Maker</div>
                  <div className="text-xs text-brand-200">Main tool — all features, all styles</div>
                </div>
              </Link>

              {/* Related programmatic pages */}
              {related.map(r => (
                <Link key={r.slug} href={`/${r.slug}`}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-brand-600 text-xl">💬</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{r.h1}</div>
                    <div className="text-xs text-surface-500 mt-0.5 truncate">{r.metaDesc.slice(0, 60)}…</div>
                  </div>
                </Link>
              ))}

              {/* Image Compressor cross-link */}
              <Link href="/compress-image-online"
                className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                <span className="text-xl">🗜️</span>
                <div>
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">Image Compressor</div>
                  <div className="text-xs text-surface-500 mt-0.5">Compress your image after adding speech bubbles</div>
                </div>
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}