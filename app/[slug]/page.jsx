import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BMICalculator from '../../components/tools/BMICalculator';
import SpeechBubbleMaker from '../../components/tools/SpeechBubbleMaker';
import AgeCalculator from '../../components/tools/AgeCalculator';
import InvoiceGenerator from '../../components/tools/InvoiceGenerator';
import NumberToWords from '../../components/tools/NumberToWords';
import EMICalculator from '../../components/tools/EMICalculator';
import GSTCalculator from '../../components/tools/GSTCalculator';
import SalaryGratuityCalculator from '../../components/tools/SalaryGratuityCalculator';
import { getBMIPageBySlug, getAllBMISlugs } from '../../data/bmi-pages';
import { getPageBySlug, getRelatedPages, getAllSlugs } from '../../data/speech-bubble-pages';
import { getAgePageBySlug, getAllAgeSlugs } from '../../data/age-pages';
import { getInvoicePageBySlug, getAllInvoiceSlugs } from '../../data/invoice-pages';
import { getNumberWordsPageBySlug, getAllNumberWordsSlugs } from '../../data/number-words-pages';
import { getEmiBankPageBySlug, getAllEmiBankSlugs } from '../../data/emi-bank-pages';
import { getGstStatePageBySlug, getAllGstStateSlugs } from '../../data/gst-state-pages';
import { getSalaryCityPageBySlug, getAllSalaryCitySlugs } from '../../data/salary-city-pages';
import { SITE_CONFIG } from '../../data/tools';

// ── Static params — all slugs from all datasets ───────────────
export async function generateStaticParams() {
  return [
    ...getAllBMISlugs().map(slug => ({ slug })),
    ...getAllSlugs().map(slug => ({ slug })),
    ...getAllAgeSlugs().map(slug => ({ slug })),
    ...getAllInvoiceSlugs().map(slug => ({ slug })),
    ...getAllNumberWordsSlugs().map(slug => ({ slug })),
    ...getAllEmiBankSlugs().map(slug => ({ slug })),
    ...getAllGstStateSlugs().map(slug => ({ slug })),
    ...getAllSalaryCitySlugs().map(slug => ({ slug })),
  ];
}

// ── Dynamic metadata ──────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bmi      = getBMIPageBySlug(slug);
  const speech   = getPageBySlug(slug);
  const age      = getAgePageBySlug(slug);
  const invoice  = getInvoicePageBySlug(slug);
  const numWords = getNumberWordsPageBySlug(slug);
  const emiBank  = getEmiBankPageBySlug(slug);
  const gstState = getGstStatePageBySlug(slug);
  const salaryCity = getSalaryCityPageBySlug(slug);
  const page     = bmi || speech || age || invoice || numWords || emiBank || gstState || salaryCity;
  if (!page) return {};
  return {
    title:       `${page.title} | ToolStackHub`,
    description:  page.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/${slug}` },
    openGraph: {
      title:       page.title,
      description: page.metaDesc,
      url:        `${SITE_CONFIG.url}/${slug}`,
      type:        'website',
      siteName:    SITE_CONFIG.name,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    },
  };
}


// ══════════════════════════════════════════════════════════════
// NUMBER WORDS PAGE
// ══════════════════════════════════════════════════════════════
function NumberWordsPage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: page.h1,
        description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        datePublished: '2026-03-29',
        dateModified:  '2026-03-29',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Number to Words',  item: `${SITE_CONFIG.url}/number-to-words` },
          { '@type': 'ListItem', position: 3, name: page.h1,            item: `${SITE_CONFIG.url}/${page.slug}` },
        ],
      },
    ],
  };

  const formatted = '₹' + page.amount.toLocaleString('en-IN');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/tools/number-to-words" className="hover:text-brand-600 text-brand-600">Number to Words</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
          </div>
        </div>

        {/* Quick answer — featured snippet target */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
              {formatted} in Words
            </div>
            <div className="space-y-3">
              {[
                { label: 'Plain words',   value: page.words,  key: 'w' },
                { label: 'Rupees format', value: page.rupees, key: 'r' },
                { label: 'Cheque format', value: page.cheque, key: 'c' },
              ].map(row => (
                <div key={row.key} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-brand-100">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-brand-500 font-semibold uppercase tracking-wider mb-1">{row.label}</div>
                    <div className="text-xl font-black text-surface-900">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator with prefill */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Try the Number to Words Converter</h2>
            <Suspense fallback={<div className="h-64 bg-surface-100 rounded-2xl animate-pulse" />}>
              <NumberToWords prefill={page.amount} />
            </Suspense>
          </div>

          {/* Facts */}
          {page.facts?.length > 0 && (
            <div className="mb-8">
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Key Facts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                    <span className="text-brand-600 shrink-0">•</span>
                    <span className="text-sm text-surface-700">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related amounts */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Amounts in Words</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/tools/number-to-words" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">🔤</span>
                <div>
                  <div className="font-bold text-white text-sm">Number to Words Tool</div>
                  <div className="text-xs text-brand-200">Convert any amount</div>
                </div>
              </Link>
              {(page.related || []).map(rel => (
                <Link key={rel} href={`/${rel}`}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm capitalize">
                    {rel.replace(/-/g, ' ').replace('in words', 'in Words')}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href:'/invoice-generator', icon:'🧾', label:'Invoice Generator', desc:'Create GST invoices — amount in words auto-filled' },
              { href:'/gst-calculator',    icon:'🧮', label:'GST Calculator',     desc:'Calculate CGST, SGST, IGST on any amount'       },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                <span className="text-xl">{l.icon}</span>
                <div>
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                  <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// BMI PAGE
// ══════════════════════════════════════════════════════════════
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
                <li><Link href="/tools/bmi-calculator" className="hover:text-brand-600 text-brand-600">BMI Calculator</Link></li>
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
            <strong>Medical Disclaimer:</strong> This BMI calculator is for informational purposes only. Not a substitute for professional medical advice.
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Tips for {page.h1.replace(/–.*/, '').trim()}</h2>
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
                    <span className="text-brand-600 mt-0.5 shrink-0">•</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More BMI Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/tools/bmi-calculator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">⚖️</span>
                <div><div className="font-bold text-white text-sm">BMI Calculator India</div><div className="text-xs text-brand-200">Main tool — all features</div></div>
              </Link>
              {(page.internalLinks || []).filter(l => l !== `/${page.slug}` && l !== '/bmi-calculator').slice(0, 3).map(href => {
                const meta = LINK_META[href] || { icon: '⚖️', label: href.replace(/^\/|-/g, m => m === '/' ? '' : ' ') };
                return (
                  <Link key={href} href={href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
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

// ══════════════════════════════════════════════════════════════
// SPEECH BUBBLE PAGE
// ══════════════════════════════════════════════════════════════
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
                <li><Link href="/tools/speech-bubble-maker" className="hover:text-brand-600 text-brand-600">Speech Bubble Maker</Link></li>
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
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Tips for {page.h1.replace(/–.*/, '').trim()}</h2>
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
                { n:'1', label:'Upload Image', desc:'Click "Upload Image" or start with blank canvas' },
                { n:'2', label:'Add Bubble',   desc:'Click "+ Add Bubble" and choose your style'     },
                { n:'3', label:'Customize',    desc:'Type text, pick colors, font, and style'        },
                { n:'4', label:'Download PNG', desc:'Click Download — no watermark, instant save'    },
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
              <Link href="/tools/speech-bubble-maker" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">💬</span>
                <div><div className="font-bold text-white text-sm">Free Speech Bubble Maker</div><div className="text-xs text-brand-200">Main tool — all features</div></div>
              </Link>
              {related.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-brand-600 text-xl">💬</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{r.h1}</div>
                    <div className="text-xs text-surface-500 mt-0.5 truncate">{r.metaDesc?.slice(0, 55)}…</div>
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

// ══════════════════════════════════════════════════════════════
// AGE PAGE
// ══════════════════════════════════════════════════════════════
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
                <li><Link href="/tools/age-calculator" className="hover:text-brand-600 text-brand-600">Age Calculator</Link></li>
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
              <Link href="/tools/age-calculator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">🎂</span>
                <div><div className="font-bold text-white text-sm">Age Calculator</div><div className="text-xs text-brand-200">Main tool — all features</div></div>
              </Link>
              {[
                { href:'/bmi-calculator',    icon:'⚖️', label:'BMI Calculator'    },
                { href:'/salary-calculator', icon:'💰', label:'Salary Calculator' },
                { href:'/emi-calculator',    icon:'🧮', label:'EMI Calculator'    },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
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

// ══════════════════════════════════════════════════════════════
// INVOICE PAGE
// ══════════════════════════════════════════════════════════════
function InvoicePage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: page.title, description: page.metaDesc,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',              item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Invoice Generator', item: `${SITE_CONFIG.url}/invoice-generator` },
          { '@type': 'ListItem', position: 3, name: page.h1,             item: `${SITE_CONFIG.url}/${page.slug}` },
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
                <li><Link href="/tools/invoice-generator" className="hover:text-brand-600 text-brand-600">Invoice Generator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free', '🚫 No Signup', '✅ GST Compliant', '📄 PDF Download', '🏷️ No Watermark'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <InvoiceGenerator />
          </Suspense>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          {page.tips?.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Tips & Guidance</h2>
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
                    <span className="text-brand-600 mt-0.5 shrink-0">•</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Invoice Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/tools/invoice-generator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
                <span className="text-2xl">🧾</span>
                <div><div className="font-bold text-white text-sm">Free Invoice Generator</div><div className="text-xs text-brand-200">Main tool — all features</div></div>
              </Link>
              {(page.internalLinks || [])
                .filter(l => l !== `/${page.slug}` && l !== '/invoice-generator')
                .slice(0, 3)
                .map(href => {
                  const LABELS = {
                    '/gst-calculator':                     { icon: '🧮', label: 'GST Calculator'          },
                    '/salary-calculator':                   { icon: '💰', label: 'Salary Calculator'       },
                    '/emi-calculator':                      { icon: '📊', label: 'EMI Calculator'          },
                    '/gst-invoice-generator-free':          { icon: '🧾', label: 'GST Invoice Generator'   },
                    '/free-invoice-maker-online-no-login':  { icon: '🧾', label: 'Invoice Maker No Login'  },
                    '/invoice-generator-for-freelancers':   { icon: '💻', label: 'Invoice for Freelancers' },
                    '/invoice-generator-for-small-business':{ icon: '🏪', label: 'Invoice for Small Biz'  },
                  };
                  const meta = LABELS[href] || { icon: '🧾', label: href.replace(/^\/|-/g, m => m === '/' ? '' : ' ') };
                  return (
                    <Link key={href} href={href} className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
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

// ══════════════════════════════════════════════════════════════
// MAIN ROUTER — checks all datasets in order
// ══════════════════════════════════════════════════════════════
export default async function DynamicSlugPage({ params }) {
  const { slug } = await params;

  const bmiPage     = getBMIPageBySlug(slug);
  if (bmiPage)     return <BMIPage page={bmiPage} />;

  const speechPage  = getPageBySlug(slug);
  if (speechPage)  return <SpeechBubblePage page={speechPage} />;

  const agePage     = getAgePageBySlug(slug);
  if (agePage)     return <AgePage page={agePage} />;

  const invoicePage = getInvoicePageBySlug(slug);
  if (invoicePage) return <InvoicePage page={invoicePage} />;

  const numWordsPage = getNumberWordsPageBySlug(slug);
  if (numWordsPage) return <NumberWordsPage page={numWordsPage} />;

  const emiBankPage = getEmiBankPageBySlug(slug);
  if (emiBankPage) return <EmiBankPage page={emiBankPage} />;

  const gstStatePage = getGstStatePageBySlug(slug);
  if (gstStatePage) return <GstStatePage page={gstStatePage} />;

  const salaryCityPage = getSalaryCityPageBySlug(slug);
  if (salaryCityPage) return <SalaryCityPage page={salaryCityPage} />;

  notFound();
}

// ══════════════════════════════════════════════════════════════
// EMI BANK PAGE
// ══════════════════════════════════════════════════════════════
function EmiBankPage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: page.title,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        description: page.metaDesc,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'EMI Calculator',  item: `${SITE_CONFIG.url}/emi-calculator` },
          { '@type': 'ListItem', position: 3, name: page.h1,           item: `${SITE_CONFIG.url}/${page.slug}` },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/emi-calculator" className="hover:text-brand-600 transition-colors">EMI Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[`💰 Rate from ${page.rate}% p.a.`, '✅ Free', '⚡ Instant', '📊 Amortization Schedule'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-sm text-amber-800"><strong>Note:</strong> {page.rateNote}</p>
          </div>
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <EMICalculator />
          </Suspense>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">About {page.bank} {page.loanType}</h2>
            <p className="text-surface-600 text-sm leading-relaxed">{page.intro}</p>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/emi-calculator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
              <span className="text-2xl">🏦</span>
              <div><div className="font-bold text-white text-sm">EMI Calculator</div><div className="text-xs text-brand-200">Compare all banks</div></div>
            </Link>
            <Link href="/tools/home-loan-emi-calculator" className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 transition-colors">
              <span className="text-2xl">🏠</span>
              <div><div className="font-semibold text-surface-800 text-sm">Home Loan EMI</div><div className="text-xs text-surface-500">With amortization schedule</div></div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// GST STATE PAGE
// ══════════════════════════════════════════════════════════════
function GstStatePage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: page.title,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        description: page.metaDesc,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'GST Calculator', item: `${SITE_CONFIG.url}/gst-calculator` },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/gst-calculator" className="hover:text-brand-600 transition-colors">GST Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.h1}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ Free', '⚡ Instant', '🧮 All GST Rates', '📊 CGST/SGST/IGST'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <GSTCalculator />
          </Suspense>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5">
            <h2 className="font-semibold text-surface-900 mb-2">About GST in {page.state}</h2>
            <p className="text-surface-600 text-sm leading-relaxed">{page.notes}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/gst-calculator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
              <span className="text-2xl">🧮</span>
              <div><div className="font-bold text-white text-sm">GST Calculator</div><div className="text-xs text-brand-200">All rates, all states</div></div>
            </Link>
            <Link href="/tools/gst-number-validator" className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 transition-colors">
              <span className="text-2xl">✅</span>
              <div><div className="font-semibold text-surface-800 text-sm">GST Number Validator</div><div className="text-xs text-surface-500">Validate GSTIN instantly</div></div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// SALARY CITY PAGE
// ══════════════════════════════════════════════════════════════
function SalaryCityPage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: page.title,
        url: `${SITE_CONFIG.url}/${page.slug}`,
        description: page.metaDesc,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',              item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Salary Calculator', item: `${SITE_CONFIG.url}/salary-calculator` },
          { '@type': 'ListItem', position: 3, name: page.h1,             item: `${SITE_CONFIG.url}/${page.slug}` },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/tools/salary-calculator" className="hover:text-brand-600 transition-colors">Salary Calculator</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium truncate">{page.city}</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">{page.h1}</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[`🏙️ ${page.city}`, `⚖️ PT ₹${page.pt.toLocaleString('en-IN')}/yr`, `🏠 HRA ${page.hraPct}%`, '✅ Free', '⚡ Instant'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <SalaryGratuityCalculator />
          </Suspense>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5">
            <h2 className="font-semibold text-surface-900 mb-2">Cost of Living in {page.city}</h2>
            <p className="text-surface-600 text-sm leading-relaxed">{page.costNote}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/salary-calculator" className="flex items-center gap-3 p-4 bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
              <span className="text-2xl">💰</span>
              <div><div className="font-bold text-white text-sm">Salary Calculator</div><div className="text-xs text-brand-200">Full CTC breakdown</div></div>
            </Link>
            <Link href="/tools/form-16-calculator" className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 transition-colors">
              <span className="text-2xl">🧾</span>
              <div><div className="font-semibold text-surface-800 text-sm">Form 16 Tax Calculator</div><div className="text-xs text-surface-500">Old vs new regime</div></div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}