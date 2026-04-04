import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
  AI_TOOLS, AI_COMPARISONS, AI_USE_CASES,
  getAIToolBySlug, getAllAIToolSlugs,
  getAIComparisonBySlug, getAllAIComparisonSlugs,
  getAIUseCaseBySlug, getAllAIUseCaseSlugs,
} from '../../../data/ai-tools-data';
import { SITE_CONFIG } from '../../../data/tools';

export async function generateStaticParams() {
  return [
    ...getAllAIToolSlugs().map(slug => ({ slug })),
    ...getAllAIComparisonSlugs().map(slug => ({ slug })),
    ...getAllAIUseCaseSlugs().map(slug => ({ slug: `use-cases/${slug}` })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool  = getAIToolBySlug(slug);
  const comp  = getAIComparisonBySlug(slug);
  const isUseCase = slug.startsWith('use-cases/');
  const uc    = isUseCase ? getAIUseCaseBySlug(slug.replace('use-cases/', '')) : null;
  const item  = tool || comp || uc;
  if (!item) return {};
  return {
    title:       item.metaTitle + ' | ToolStackHub',
    description: item.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/ai-tools/${params.slug}` },
    openGraph: {
      title:       item.metaTitle,
      description: item.metaDesc,
      url:        `${SITE_CONFIG.url}/ai-tools/${params.slug}`,
      type:        'article',
      siteName:    SITE_CONFIG.name,
    },
  };
}

const COLOR = {
  emerald: { bg:'bg-emerald-50', border:'border-emerald-200', badge:'bg-emerald-100 text-emerald-800', text:'text-emerald-700', btn:'bg-emerald-600 hover:bg-emerald-700' },
  brand:   { bg:'bg-brand-50',   border:'border-brand-200',   badge:'bg-brand-100 text-brand-800',   text:'text-brand-700',   btn:'bg-brand-600 hover:bg-brand-700'   },
  blue:    { bg:'bg-blue-50',    border:'border-blue-200',    badge:'bg-blue-100 text-blue-800',    text:'text-blue-700',    btn:'bg-blue-600 hover:bg-blue-700'    },
  purple:  { bg:'bg-purple-50',  border:'border-purple-200',  badge:'bg-purple-100 text-purple-800', text:'text-purple-700', btn:'bg-purple-600 hover:bg-purple-700' },
  teal:    { bg:'bg-teal-50',    border:'border-teal-200',    badge:'bg-teal-100 text-teal-800',    text:'text-teal-700',    btn:'bg-teal-600 hover:bg-teal-700'    },
  green:   { bg:'bg-green-50',   border:'border-green-200',   badge:'bg-green-100 text-green-800',   text:'text-green-700',  btn:'bg-green-600 hover:bg-green-700'  },
  amber:   { bg:'bg-amber-50',   border:'border-amber-200',   badge:'bg-amber-100 text-amber-800',   text:'text-amber-700',  btn:'bg-amber-600 hover:bg-amber-700'  },
  surface: { bg:'bg-surface-50', border:'border-surface-200', badge:'bg-surface-100 text-surface-700',text:'text-surface-700',btn:'bg-surface-700 hover:bg-surface-800'},
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-4 h-4 ${s <= Math.round(rating) ? 'text-amber-400' : 'text-surface-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-surface-600 font-semibold">{rating}/5</span>
    </div>
  );
}

// ── TOOL PAGE ─────────────────────────────────────────────────
function ToolPage({ tool }) {
  const c   = COLOR[tool.color] || COLOR.brand;
  const alt = tool.alternatives?.map(s => AI_TOOLS.find(t => t.slug === s)).filter(Boolean) || [];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className={`${c.bg} border-b ${c.border}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/ai-tools" className="hover:text-brand-600">AI Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">{tool.name}</li>
              </ol>
            </nav>

            <div className="flex items-start gap-5 mb-5">
              <div className={`w-16 h-16 ${c.bg} border-2 ${c.border} rounded-2xl flex items-center justify-center text-3xl shrink-0`}>
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {tool.badge && <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{tool.badge}</span>}
                  {tool.pricing.free && <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Free tier available</span>}
                  <span className="text-xs text-surface-400">{tool.category}</span>
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-2">{tool.name} Review 2026</h1>
                <p className="text-surface-600 text-lg">{tool.tagline}</p>
              </div>
            </div>

            {/* Quick stats Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl border border-surface-200 p-4 text-center">
                <StarRating rating={tool.rating} />
                <div className="text-xs text-surface-400 mt-1">{tool.reviews.toLocaleString('en-IN')} reviews</div>
              </div>
              <div className="bg-white rounded-xl border border-surface-200 p-4 text-center">
                <div className={`font-bold text-lg ${c.text}`}>{tool.pricing.free ? 'Free' : 'Paid'}</div>
                <div className="text-xs text-surface-400">Starting price</div>
              </div>
              <div className="bg-white rounded-xl border border-surface-200 p-4 text-center">
                <div className="font-bold text-surface-900 text-sm">{tool.pricing.paid}</div>
                <div className="text-xs text-surface-400">Paid plan</div>
              </div>
              <div className="bg-white rounded-xl border border-surface-200 p-4 text-center">
                <div className="font-bold text-surface-900 text-sm">{tool.category}</div>
                <div className="text-xs text-surface-400">Category</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

          {/* What it does */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">What is {tool.name}?</h2>
            <p className="text-surface-600 leading-relaxed">{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-5 ${c.btn} text-white font-bold px-6 py-3 rounded-xl transition-colors`}>
              Try {tool.name} Free →
            </a>
          </section>

          {/* Use Cases — Bento */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Real Use Cases — Who Uses {tool.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.useCases.map(uc => (
                <div key={uc.title} className={`${c.bg} border ${c.border} rounded-xl p-4`}>
                  <div className="text-2xl mb-2">{uc.icon}</div>
                  <div className="font-bold text-surface-900 text-sm mb-1">{uc.title}</div>
                  <div className="text-xs text-surface-600 leading-relaxed">{uc.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.features.map(f => (
                <div key={f} className="flex items-start gap-3 p-3 bg-surface-50 border border-surface-100 rounded-xl">
                  <span className={`${c.text} shrink-0 font-bold`}>✓</span>
                  <span className="text-sm text-surface-700">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { tier:'Free',       price: tool.pricing.free ? tool.pricing.free : 'Not available', color: tool.pricing.free ? 'emerald' : 'surface' },
                { tier:'Paid',       price: tool.pricing.paid || 'See website',                      color: 'brand' },
                { tier:'Enterprise', price: tool.pricing.enterprise || 'Contact sales',              color: 'surface' },
              ].map(p => (
                <div key={p.tier} className={`${p.color === 'emerald' ? 'bg-emerald-50 border-emerald-200' : p.color === 'brand' ? 'bg-brand-50 border-brand-200 border-2' : 'bg-surface-50 border-surface-200'} border rounded-2xl p-5 text-center`}>
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">{p.tier}</div>
                  <div className={`font-black text-xl ${p.color === 'emerald' ? 'text-emerald-700' : p.color === 'brand' ? 'text-brand-700' : 'text-surface-700'}`}>{p.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pros and Cons — Bento */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Pros &amp; Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <h3 className="font-bold text-emerald-900 mb-3">✅ Pros</h3>
                <ul className="space-y-2">
                  {tool.pros.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-emerald-800">
                      <span className="shrink-0 text-emerald-500">+</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                <h3 className="font-bold text-rose-900 mb-3">❌ Cons</h3>
                <ul className="space-y-2">
                  {tool.cons.map(c => (
                    <li key={c} className="flex items-start gap-2 text-sm text-rose-800">
                      <span className="shrink-0 text-rose-500">−</span><span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Salary Calculator CTA */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-bold text-white mb-1">Calculate Your Salary — No AI Needed</div>
              <div className="text-brand-200 text-sm">Our free salary calculator gives exact in-hand salary instantly.</div>
            </div>
            <Link href="/salary-calculator" className="bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors shrink-0">
              Free Salary Calculator →
            </Link>
          </div>

          {/* Alternatives */}
          {alt.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">{tool.name} Alternatives</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {alt.map(a => (
                  <Link key={a.slug} href={`/ai-tools/${a.slug}`}
                    className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                    <span className="text-2xl">{a.icon}</span>
                    <div>
                      <div className="font-bold text-surface-900 group-hover:text-brand-700 text-sm">{a.name}</div>
                      <div className="text-xs text-surface-500">{a.pricing.free ? 'Free tier' : 'Paid only'}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back */}
          <div className="pt-4 border-t border-surface-100">
            <Link href="/ai-tools" className="text-sm text-brand-600 hover:text-brand-700 font-semibold">← Back to All AI Tools</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ── COMPARISON PAGE ───────────────────────────────────────────
function ComparisonPage({ comp }) {
  const t1 = AI_TOOLS.find(t => t.slug === comp.tool1);
  const t2 = AI_TOOLS.find(t => t.slug === comp.tool2);
  const winner = AI_TOOLS.find(t => t.slug === comp.verdict);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/ai-tools" className="hover:text-brand-600">AI Tools</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Comparison</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-4">{comp.title}</h1>
            <p className="text-surface-600 text-lg leading-relaxed max-w-2xl">{comp.verdictNote}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

          {/* Hero comparison Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[t1, t2].map((tool, i) => {
              if (!tool) return null;
              const c = COLOR[tool.color] || COLOR.brand;
              const isWinner = tool.slug === comp.verdict;
              return (
                <div key={tool.slug} className={`${c.bg} border-2 ${isWinner ? 'border-brand-400' : c.border} rounded-2xl p-6 relative`}>
                  {isWinner && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      🏆 Winner
                    </div>
                  )}
                  <div className="text-4xl mb-3 text-center">{tool.icon}</div>
                  <h2 className="font-bold text-2xl text-surface-900 text-center mb-2">{tool.name}</h2>
                  <div className="flex justify-center mb-4">
                    <StarRating rating={tool.rating} />
                  </div>
                  <p className="text-sm text-surface-600 text-center leading-relaxed mb-4">{tool.tagline}</p>
                  <div className="text-center text-sm text-surface-500 mb-4">
                    {tool.pricing.free ? '✅ Free tier available' : '❌ No free tier'}
                    <br/>{tool.pricing.paid}
                  </div>
                  <Link href={`/ai-tools/${tool.slug}`} className={`block text-center ${c.btn} text-white font-semibold py-2.5 rounded-xl transition-colors`}>
                    Read Full Review
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Detailed comparison table */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Feature-by-Feature Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Category</th>
                    <th className="text-center px-4 py-3 font-semibold">{t1?.icon} {t1?.name}</th>
                    <th className="text-center px-4 py-3 font-semibold">{t2?.icon} {t2?.name}</th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.categories.map((cat, i) => {
                    const w = cat.winner === comp.tool1 ? t1?.name : cat.winner === comp.tool2 ? t2?.name : 'Tie';
                    return (
                      <tr key={cat.cat} className={i%2===0?'bg-white':'bg-surface-50'}>
                        <td className="px-4 py-3 font-semibold text-surface-900">{cat.cat}</td>
                        <td className="px-4 py-3 text-center">
                          <div className={`text-lg font-bold ${cat.winner === comp.tool1 ? 'text-emerald-600' : 'text-surface-500'}`}>{cat.tool1Score}/10</div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className={`text-lg font-bold ${cat.winner === comp.tool2 ? 'text-emerald-600' : 'text-surface-500'}`}>{cat.tool2Score}/10</div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${cat.winner === 'tie' ? 'bg-surface-100 text-surface-600' : 'bg-emerald-100 text-emerald-800'}`}>
                            {w}
                          </span>
                          <div className="text-xs text-surface-400 mt-1 max-w-32 mx-auto leading-tight">{cat.note}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-brand-50 border-2 border-brand-200 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">🏆 Our Verdict</h2>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{winner?.icon}</span>
              <span className="font-bold text-2xl text-brand-700">{winner?.name} wins</span>
            </div>
            <p className="text-surface-700 leading-relaxed">{comp.verdictNote}</p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 text-center">
            <div className="font-bold text-white text-lg mb-2">Skip AI for Salary Calculations</div>
            <p className="text-brand-200 text-sm mb-4">Our free salary calculator gives exact results instantly — no prompting needed.</p>
            <Link href="/salary-calculator" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Free Salary Calculator →
            </Link>
          </div>

          <div className="pt-4 border-t border-surface-100">
            <Link href="/ai-tools" className="text-sm text-brand-600 hover:text-brand-700 font-semibold">← Back to All AI Tools</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ── USE CASE PAGE ─────────────────────────────────────────────
function UseCasePage({ uc }) {
  const c = COLOR[uc.color] || COLOR.brand;
  const featuredTools = uc.featuredTools.map(s => AI_TOOLS.find(t => t.slug === s)).filter(Boolean);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className={`${c.bg} border-b ${c.border}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/ai-tools" className="hover:text-brand-600">AI Tools</Link></li>
                <li>/</li>
                <li><Link href="/ai-tools" className="hover:text-brand-600">Use Cases</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">{uc.icon}</li>
              </ol>
            </nav>
            <div className="text-4xl mb-4">{uc.icon}</div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-4">{uc.title}</h1>
            <p className="text-surface-600 text-lg leading-relaxed max-w-2xl">{uc.intro}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

          {/* Problem / Solution Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
              <h3 className="font-bold text-rose-900 mb-3">😤 The Problem</h3>
              <p className="text-sm text-rose-800 leading-relaxed">{uc.problem}</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <h3 className="font-bold text-emerald-900 mb-3">✅ The Solution</h3>
              <p className="text-sm text-emerald-800 leading-relaxed">{uc.solution}</p>
            </div>
          </div>

          {/* Featured Tools — Bento */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Best AI Tools for This Use Case</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {featuredTools.map((tool, i) => {
                const tc = COLOR[tool.color] || COLOR.brand;
                const isFirst = i === 0;
                return (
                  <div key={tool.slug} className={`${tc.bg} border-2 ${isFirst ? 'border-brand-400' : tc.border} rounded-2xl p-5`}>
                    {isFirst && <div className="text-xs font-bold text-brand-600 mb-2">⭐ Best Pick</div>}
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <h3 className="font-bold text-surface-900 mb-1">{tool.name}</h3>
                    <p className="text-xs text-surface-600 mb-3 leading-relaxed">{tool.tagline}</p>
                    {tool.pricing.free && <span className="text-xs text-emerald-700 font-semibold">✓ Free tier</span>}
                    <div className="mt-3 flex gap-2">
                      <Link href={`/ai-tools/${tool.slug}`} className="flex-1 text-center bg-surface-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-surface-800 transition-colors">Review</Link>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-surface-200 bg-white rounded-lg text-xs font-semibold text-surface-700 hover:border-brand-300 transition-colors">Try →</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step-by-step */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">How to Use AI for This — Step by Step</h2>
            <div className="space-y-3">
              {uc.toolSteps.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{i+1}</div>
                  <div className="text-sm text-surface-700 leading-relaxed pt-1">{step}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal CTA */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-bold text-white mb-1">Start with Our Free Salary Calculator</div>
              <div className="text-brand-200 text-sm">Get exact in-hand salary, tax comparison, and CTC breakdown instantly.</div>
            </div>
            <Link href="/salary-calculator" className="bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors shrink-0">
              Open Free Calculator →
            </Link>
          </div>

          {/* All tools list */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">All Tools Mentioned</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {AI_TOOLS.filter(t => uc.featuredTools.includes(t.slug)).map(tool => (
                <Link key={tool.slug} href={`/ai-tools/${tool.slug}`}
                  className="flex items-center gap-2 p-3 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 group-hover:text-brand-700 text-xs">{tool.name}</div>
                    <div className="text-xs text-surface-400">{tool.pricing.free ? 'Free' : 'Paid'}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="pt-4 border-t border-surface-100">
            <Link href="/ai-tools" className="text-sm text-brand-600 hover:text-brand-700 font-semibold">← Back to All AI Tools</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ── MAIN ROUTER ───────────────────────────────────────────────
export default async function AIToolSlugPage({ params }) {
  const { slug } = await params;

  if (slug.startsWith('use-cases/')) {
    const ucSlug = slug.replace('use-cases/', '');
    const uc = getAIUseCaseBySlug(ucSlug);
    if (uc) return <UseCasePage uc={uc} />;
  }

  const tool = getAIToolBySlug(slug);
  if (tool) return <ToolPage tool={tool} />;

  const comp = getAIComparisonBySlug(slug);
  if (comp) return <ComparisonPage comp={comp} />;

  notFound();
}
