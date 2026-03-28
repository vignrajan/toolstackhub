import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BMICalculator from '../../components/tools/BMICalculator';
import SpeechBubbleMaker from '../../components/tools/SpeechBubbleMaker';
import AgeCalculator from '../../components/tools/AgeCalculator';
import { getBMIPageBySlug, getAllBMISlugs } from '../../data/bmi-pages';
import { getPageBySlug, getRelatedPages, getAllSlugs } from '../../data/speech-bubble-pages';
import { getAgePageBySlug, getAllAgeSlugs } from '../../data/age-pages';
import { SITE_CONFIG } from '../../data/tools';

// ── Collect all slugs from every programmatic dataset ─────────
export async function generateStaticParams() {
  return [
    ...getAllBMISlugs().map(slug => ({ slug })),
    ...getAllSlugs().map(slug => ({ slug })),
    ...getAllAgeSlugs().map(slug => ({ slug })),
  ];
}

// ── Dynamic metadata ──────────────────────────────────────────
export async function generateMetadata({ params }) {
  const bmi    = getBMIPageBySlug(params.slug);
  const speech = getPageBySlug(params.slug);
  const age    = getAgePageBySlug(params.slug);
  const page   = bmi || speech || age;
  if (!page) return {};
  return {
    title:       `${page.title} | ToolStackHub`,
    description:  page.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/${params.slug}` },
    openGraph: {
      title:       page.title,
      description: page.metaDesc,
      url:        `${SITE_CONFIG.url}/${params.slug}`,
      type:        'website',
      siteName:    SITE_CONFIG.name,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    },
  };
}

// ── BMI variant page ──────────────────────────────────────────
function BMIPage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: page.title, description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'BMI Calculator', item: `${SITE_CONFIG.url}/bmi-calculator` },
          { '@type': 'ListItem', position: 3, name: page.h1,          item: `${SITE_CONFIG.url}/${page.slug}` },
        ],
      },
    ],
  };

  const LINK_META = {
    '/bmi-calculator':                { icon: '⚖️', label: 'BMI Calculator India'     },
    '/bmi-calculator-for-men':        { icon: '♂️', label: 'BMI Calculator for Men'   },
    '/bmi-calculator-for-women':      { icon: '♀️', label: 'BMI Calculator for Women' },
    '/bmi-calculator-kg-cm':          { icon: '📏', label: 'BMI Calculator kg/cm'     },
    '/ideal-weight-calculator-india':  { icon: '⚖️', label: 'Ideal Weight Calculator' },
    '/age-calculator-online':         { icon: '🎂', label: 'Age Calculator'           },
    '/salary-calculator':             { icon: '💰', label: 'Salary Calculator'        },
    '/healthy-bmi-for-indians':       { icon: '🇮🇳', label: 'Healthy BMI for Indians' },
    '/bmi-calculator-with-age':       { icon: '📊', label: 'BMI with Age'            },
    '/bmi-chart-for-indian-women':    { icon: '📋', label: 'BMI Chart for Women'      },
    '/bmi-calculator-for-obesity':    { icon: '🏥', label: 'Obesity BMI Calculator'   },
    '/bmi-calculator-overweight':     { icon: '⚠️', label: 'Overweight BMI Check'     },
    '/bmi-calculator-for-children':   { icon: '🧒', label: 'BMI for Children'         },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/bmi-calculator" className="hover:text-brand-600 text-brand-600">BMI Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🇮🇳 Indian BMI Standards', '✅ Free & No Login', '⚖️ WHO Asian Thresholds'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <BMICalculator prefill={page.prefill || {}} />
          </Suspense>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
            <strong>Medical Disclaimer:</strong> This BMI calculator is for informational purposes only. Not a substitute for professional medical advice. Consult a qualified healthcare provider for health decisions.
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Tips for {page.h1.replace(/–.*/, '').trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-sm text-surface-600 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">{page.useCaseH2}</h2>
            <p className="text-surface-600 leading-relaxed">{page.useCaseText}</p>
          </section>

          {page.additionalContent?.map((section, i) => (
            <section key={i}>
              <h3 className="font-display font-bold text-lg text-surface-900 mb-3">{section.h3}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-surface-600">
                    <span className="text-brand-600 mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More BMI Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/bmi-calculator"
                className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">⚖️</span>
                <div>
                  <div className="font-bold text-white text-sm">BMI Calculator India</div>
                  <div className="text-xs text-brand-200">Main tool — all features</div>
                </div>
              </Link>
              {(page.internalLinks || [])
                .filter(l => l !== `/${page.slug}` && l !== '/bmi-calculator')
                .slice(0, 3)
                .map(href => {
                  const meta = LINK_META[href] || { icon: '⚖️', label: href.replace(/^\/|-/g, m => m === '/' ? '' : ' ') };
                  return (
                    <Link key={href} href={href}
                      className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                      <span className="text-xl">{meta.icon}</span>
                      <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{meta.label}</div>
                    </Link>
                  );
                })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ── Speech Bubble variant page ────────────────────────────────
function SpeechBubblePage({ page }) {
  const related = getRelatedPages(page.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: page.title, description: page.metaDesc,
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
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/speech-bubble-maker" className="hover:text-brand-600 text-brand-600">Speech Bubble Maker</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free', '🚫 No Login', '⬇️ PNG Download', '💬 6 Bubble Styles', '🔒 Private'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <SpeechBubbleMaker />
          </Suspense>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Tips for {page.h1.replace(/–.*/, '').trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-sm text-surface-600 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">How to Use This Tool</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { n: '1', label: 'Upload Image', desc: 'Click "Upload Image" or start with blank canvas' },
                { n: '2', label: 'Add Bubble',   desc: 'Click "+ Add Bubble" and choose your style'     },
                { n: '3', label: 'Customize',    desc: 'Type text, pick colors, font, and style'        },
                { n: '4', label: 'Download PNG', desc: 'Click Download — no watermark, instant save'    },
              ].map(s => (
                <div key={s.n} className="p-4 bg-brand-50 border border-brand-200 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mb-2">{s.n}</div>
                  <div className="font-semibold text-brand-900 text-sm">{s.label}</div>
                  <div className="text-xs text-brand-700 mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Speech Bubble Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/speech-bubble-maker"
                className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-bold text-white text-sm">Free Speech Bubble Maker</div>
                  <div className="text-xs text-brand-200">Main tool — all features</div>
                </div>
              </Link>
              {related.map(r => (
                <Link key={r.slug} href={`/${r.slug}`}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-brand-600 text-xl">💬</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{r.h1}</div>
                    <div className="text-xs text-surface-500 mt-0.5 truncate">{r.metaDesc?.slice(0, 55)}…</div>
                  </div>
                </Link>
              ))}
              <Link href="/compress-image-online"
                className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                <span className="text-xl">🗜️</span>
                <div>
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">Image Compressor</div>
                  <div className="text-xs text-surface-500 mt-0.5">Compress after adding speech bubbles</div>
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

// ── Age Calculator variant page ───────────────────────────────
function AgePage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: page.title, description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Age Calculator', item: `${SITE_CONFIG.url}/age-calculator-online` },
          { '@type': 'ListItem', position: 3, name: page.h1,          item: `${SITE_CONFIG.url}/${page.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/age-calculator-online" className="hover:text-brand-600 text-brand-600">Age Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 Free', '⚡ Instant', '🚫 No Signup', '🎂 Birthday Countdown', '🏛️ Govt Exam Ready'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <AgeCalculator />
          </Suspense>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Tips & Notes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-sm text-surface-600 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">{page.useCaseH2}</h2>
            <p className="text-surface-600 leading-relaxed">{page.useCaseText}</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Age Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/age-calculator-online"
                className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">🎂</span>
                <div>
                  <div className="font-bold text-white text-sm">Age Calculator</div>
                  <div className="text-xs text-brand-200">Main tool — all features</div>
                </div>
              </Link>
              {[
                { href: '/bmi-calculator',    icon: '⚖️', label: 'BMI Calculator'    },
                { href: '/salary-calculator', icon: '💰', label: 'Salary Calculator' },
                { href: '/emi-calculator',    icon: '🧮', label: 'EMI Calculator'    },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
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

// ── Main router ───────────────────────────────────────────────
export default function DynamicSlugPage({ params }) {
  const bmiPage    = getBMIPageBySlug(params.slug);
  if (bmiPage)    return <BMIPage page={bmiPage} />;

  const speechPage = getPageBySlug(params.slug);
  if (speechPage) return <SpeechBubblePage page={speechPage} />;

  const agePage    = getAgePageBySlug(params.slug);
  if (agePage)    return <AgePage page={agePage} />;

  notFound();
}