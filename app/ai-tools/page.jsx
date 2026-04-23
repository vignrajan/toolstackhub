import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AI_TOOLS, AI_CATEGORIES, AI_USE_CASES, AI_COMPARISONS } from '../../data/ai-tools-data';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Best AI Tools 2026 — Reviews, Comparisons & Use Cases',
  description: 'Find the best AI tools for writing, coding, design, and productivity in 2026. Honest reviews, free vs paid comparisons, and use-case guides for professionals, developers, and students.',
  keywords: ['best ai tools 2026', 'chatgpt vs claude', 'free ai tools', 'ai tools for students', 'best ai writing tools', 'ai coding tools', 'ai image generators'],
  alternates: { canonical: `${SITE_CONFIG.url}/ai-tools` },
  openGraph: {
    title: 'Best AI Tools 2026 — Reviews & Comparisons',
    description: 'Honest AI tool reviews, pricing breakdowns, and use-case guides for professionals, developers, and students.',
    url: `${SITE_CONFIG.url}/ai-tools`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

// Color map for Tailwind (must be complete strings for Tailwind JIT)
const COLOR = {
  emerald: { bg:'bg-emerald-50', border:'border-emerald-200', badge:'bg-emerald-100 text-emerald-800', dot:'bg-emerald-500', icon:'bg-emerald-100' },
  brand:   { bg:'bg-brand-50',   border:'border-brand-200',   badge:'bg-brand-100 text-brand-800',   dot:'bg-brand-500',   icon:'bg-brand-100' },
  blue:    { bg:'bg-blue-50',    border:'border-blue-200',    badge:'bg-blue-100 text-blue-800',    dot:'bg-blue-500',    icon:'bg-blue-100' },
  purple:  { bg:'bg-purple-50',  border:'border-purple-200',  badge:'bg-purple-100 text-purple-800', dot:'bg-purple-500', icon:'bg-purple-100' },
  teal:    { bg:'bg-teal-50',    border:'border-teal-200',    badge:'bg-teal-100 text-teal-800',    dot:'bg-teal-500',    icon:'bg-teal-100' },
  green:   { bg:'bg-green-50',   border:'border-green-200',   badge:'bg-green-100 text-green-800',   dot:'bg-green-500',  icon:'bg-green-100' },
  amber:   { bg:'bg-amber-50',   border:'border-amber-200',   badge:'bg-amber-100 text-amber-800',   dot:'bg-amber-500',  icon:'bg-amber-100' },
  surface: { bg:'bg-surface-50', border:'border-surface-200', badge:'bg-surface-100 text-surface-700',dot:'bg-surface-400',icon:'bg-surface-100'},
  orange:  { bg:'bg-orange-50',  border:'border-orange-200',  badge:'bg-orange-100 text-orange-800',  dot:'bg-orange-500',  icon:'bg-orange-100' },
  violet:  { bg:'bg-violet-50',  border:'border-violet-200',  badge:'bg-violet-100 text-violet-800',  dot:'bg-violet-500',  icon:'bg-violet-100' },
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? 'text-amber-400' : 'text-surface-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-surface-500 ml-1">{rating}</span>
    </div>
  );
}

export default function AIToolsHub() {
  const featured = AI_TOOLS.slice(0, 3);
  const rest     = AI_TOOLS.slice(3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best AI Tools 2026 — ToolStackHub',
    description: 'Curated reviews of the best AI tools for professionals, developers, and students.',
    url: `${SITE_CONFIG.url}/ai-tools`,
    hasPart: AI_TOOLS.map(t => ({
      '@type': 'SoftwareApplication',
      name: t.name,
      description: t.description,
      url: `${SITE_CONFIG.url}/ai-tools/${t.slug}`,
      applicationCategory: t.category,
      offers: { '@type': 'Offer', price: t.pricing.free ? '0' : '', priceCurrency: 'USD' },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO BENTO ─────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-surface-950 to-surface-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🤖</span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">AI Tools Hub</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight tracking-tight text-white">
                The Best AI Tools
                <span className="text-brand-400"> You Actually Need</span>
                <br/>in 2026
              </h1>
              <p className="text-surface-300 text-xl leading-relaxed mb-8 max-w-2xl">
                Honest reviews, pricing breakdowns, and use-case guides for {AI_TOOLS.length}+ AI tools.
                Find the right tool for writing, coding, design, and productivity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#tools" className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Browse All Tools →
                </Link>
                <Link href="/ai-tools/claude-vs-chatgpt" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20">
                  Claude vs ChatGPT →
                </Link>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
              {[
                { n:`${AI_TOOLS.length}+`,     l:'Tools Reviewed'     },
                { n:'15+',                     l:'Use-Case Guides'    },
                { n:'Free',                    l:'Always Free'        },
                { n:'Global',                  l:'Pricing & Access'   },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black text-white">{s.n}</div>
                  <div className="text-xs text-surface-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CATEGORY FILTER ───────────────────────────────── */}
        <div className="border-b border-surface-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
              <span className="text-xs font-semibold text-surface-500 shrink-0">Filter:</span>
              <Link href="/ai-tools" className="shrink-0 text-xs font-bold px-3 py-1.5 bg-brand-600 text-white rounded-full">All Tools</Link>
              {AI_CATEGORIES.map(cat => (
                <Link key={cat.slug} href={`/ai-tools?category=${cat.slug}`}
                  className="shrink-0 text-xs font-semibold px-3 py-1.5 bg-surface-100 text-surface-600 hover:bg-brand-50 hover:text-brand-700 rounded-full transition-colors whitespace-nowrap">
                  {cat.icon} {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="tools">

          {/* ── FEATURED TOOLS — BENTO LARGE ─────────────────── */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-2xl text-surface-900">🏆 Top Picks for 2026</h2>
              <Link href="#all-tools" className="text-sm text-brand-600 hover:text-brand-700 font-semibold">See all →</Link>
            </div>

            {/* Bento grid — featured 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {featured.map((tool, i) => {
                const c = COLOR[tool.color] || COLOR.brand;
                const isLarge = i === 0;
                return (
                  <div key={tool.slug}
                    className={`${c.bg} border-2 ${c.border} rounded-2xl p-6 flex flex-col hover:shadow-lg transition-all group ${isLarge ? 'lg:col-span-1' : ''}`}>
                    {/* Tool header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${c.icon} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                        {tool.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {tool.badge && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{tool.badge}</span>
                        )}
                        {tool.pricing.free && (
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Free tier ✓</span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-surface-900 mb-1 group-hover:text-brand-700 transition-colors">{tool.name}</h3>
                    <p className="text-sm text-surface-600 leading-relaxed mb-4 flex-1">{tool.tagline}</p>

                    <StarRating rating={tool.rating} />

                    {/* Quick features */}
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                      {tool.tags.slice(0,3).map(tag => (
                        <span key={tag} className="text-xs text-surface-500 bg-white/70 px-2 py-0.5 rounded-full border border-surface-200">{tag}</span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Link href={`/ai-tools/${tool.slug}`}
                        className="flex-1 text-center bg-surface-900 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-surface-800 transition-colors">
                        Read Review →
                      </Link>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer"
                        className="px-4 py-2.5 border border-surface-200 bg-white rounded-xl text-sm font-semibold text-surface-700 hover:border-brand-300 hover:text-brand-700 transition-colors">
                        Try Free
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── ALL TOOLS GRID ─────────────────────────────── */}
          <section id="all-tools">
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">All AI Tools — Reviewed & Ranked</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {rest.map(tool => {
                const c = COLOR[tool.color] || COLOR.brand;
                return (
                  <Link key={tool.slug} href={`/ai-tools/${tool.slug}`}
                    className={`${c.bg} border ${c.border} rounded-2xl p-5 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all group`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${c.icon} rounded-xl flex items-center justify-center text-xl`}>{tool.icon}</div>
                      {tool.pricing.free
                        ? <span className="text-xs font-semibold text-emerald-700">Free ✓</span>
                        : <span className="text-xs font-semibold text-surface-400">Paid only</span>
                      }
                    </div>
                    <div className="font-bold text-surface-900 group-hover:text-brand-700 transition-colors mb-1">{tool.name}</div>
                    <p className="text-xs text-surface-500 leading-relaxed mb-3 flex-1">{tool.tagline.slice(0,70)}...</p>
                    <StarRating rating={tool.rating} />
                    <div className={`mt-3 pt-3 border-t ${c.border} text-xs font-bold text-surface-600 group-hover:text-brand-600 transition-colors`}>
                      Read full review →
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ── USE CASE PAGES — BENTO ────────────────────── */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-surface-900">🎯 AI Tools by Use Case</h2>
                <p className="text-surface-500 text-sm mt-1">Find the right tool for your specific problem</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AI_USE_CASES.map(uc => {
                const c = COLOR[uc.color] || COLOR.brand;
                return (
                  <Link key={uc.slug} href={`/ai-tools/use-cases/${uc.slug}`}
                    className={`${c.bg} border ${c.border} rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group`}>
                    <div className="text-2xl mb-3">{uc.icon}</div>
                    <h3 className="font-bold text-surface-900 group-hover:text-brand-700 transition-colors text-sm leading-snug mb-2">{uc.title}</h3>
                    <p className="text-xs text-surface-500 leading-relaxed mb-4">{uc.intro.slice(0,100)}...</p>
                    <div className="flex items-center gap-2">
                      {uc.featuredTools.slice(0,3).map(t => {
                        const tool = AI_TOOLS.find(x => x.slug === t);
                        return tool ? (
                          <span key={t} className="text-xs bg-white/70 border border-surface-200 px-2 py-0.5 rounded-full text-surface-600">{tool.icon} {tool.name}</span>
                        ) : null;
                      })}
                    </div>
                  </Link>
                );
              })}

              {/* CTA card */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3">💰</div>
                  <h3 className="font-bold text-white text-sm mb-2">Estimate your Claude Code Token Usage</h3>
                  <p className="text-brand-200 text-xs leading-relaxed">
                    See exactly how many tokens you'll use and what Claude Code costs per month in INR and USD.
                  </p>
                </div>
                <Link href="/claude-code-token-calculator"
                  className="mt-4 bg-white text-brand-700 font-bold text-xs px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors text-center">
                  Claude Code Token Calculator →
                </Link>
              </div>
            </div>
          </section>

          {/* ── COMPARISON BENTO ──────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">⚔️ Head-to-Head Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {AI_COMPARISONS.map(comp => {
                const t1 = AI_TOOLS.find(t => t.slug === comp.tool1);
                const t2 = AI_TOOLS.find(t => t.slug === comp.tool2);
                return (
                  <Link key={comp.slug} href={`/ai-tools/${comp.slug}`}
                    className="bg-white border-2 border-surface-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 text-center">
                        <div className="text-3xl mb-1">{t1?.icon}</div>
                        <div className="font-bold text-surface-900 text-sm">{t1?.name}</div>
                        <StarRating rating={t1?.rating || 0} />
                      </div>
                      <div className="text-xl font-black text-surface-400">VS</div>
                      <div className="flex-1 text-center">
                        <div className="text-3xl mb-1">{t2?.icon}</div>
                        <div className="font-bold text-surface-900 text-sm">{t2?.name}</div>
                        <StarRating rating={t2?.rating || 0} />
                      </div>
                    </div>
                    <h3 className="font-bold text-surface-900 group-hover:text-brand-700 transition-colors text-sm mb-2">{comp.title}</h3>
                    <p className="text-xs text-surface-500 leading-relaxed mb-3">{comp.verdictNote}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-surface-400">Winner: <span className="font-bold text-surface-700">{AI_TOOLS.find(t => t.slug === comp.verdict)?.name}</span></div>
                      <span className="text-xs font-bold text-brand-600 group-hover:text-brand-700">Read comparison →</span>
                    </div>
                  </Link>
                );
              })}

              {/* More comparisons card */}
              <div className="bg-surface-50 border-2 border-dashed border-surface-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-3">🆚</div>
                <div className="font-bold text-surface-700 mb-2">More Comparisons Coming</div>
                <div className="text-xs text-surface-500 mb-4">Gemini vs Claude, Jasper vs ChatGPT, Midjourney vs DALL-E</div>
                <Link href="/salary-calculator" className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                  Use our free tools instead →
                </Link>
              </div>
            </div>
          </section>

          {/* ── INTERNAL LINKS — SALARY TOOLS ──────────────── */}
          <section className="bg-gradient-to-r from-surface-900 to-surface-950 rounded-2xl p-8">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div className="max-w-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">Free Calculators</div>
                <h2 className="font-display font-bold text-2xl text-white mb-3">
                  Don't Need AI for These — Our Tools Do It Instantly
                </h2>
                <p className="text-surface-300 text-sm leading-relaxed">
                  For salary calculation, tax comparison, EMI planning, and GST — our free calculators give you
                  exact answers instantly. No prompt engineering needed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href:'/salary-calculator',               icon:'💰', label:'Salary Calculator'    },
                  { href:'/blog/old-vs-new-tax-regime-2025-26', icon:'⚖️', label:'Tax Regime Guide' },
                  { href:'/gst-calculator',                  icon:'🧮', label:'GST Calculator'        },
                  { href:'/emi-calculator',                  icon:'🏠', label:'EMI Calculator'        },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-4 py-3 transition-colors group">
                    <span className="text-lg">{l.icon}</span>
                    <span className="text-white text-xs font-semibold group-hover:text-brand-300 transition-colors">{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ───────────────────────────────────────── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q:'Which is the best free AI tool in India in 2026?', a:'ChatGPT (free tier with GPT-4o), Google Gemini (free with real-time search), and Grammarly (free grammar checker) are the best free AI tools for Indian users. Claude also has a free tier excellent for document analysis. For most users, the combination of ChatGPT + Grammarly covers 90% of use cases for free.' },
                { q:'Is ChatGPT or Claude better in 2026?', a:'ChatGPT is better overall for most users — it has a stronger free tier, image generation, and a larger ecosystem. Claude is better specifically for long document analysis (200K token context), nuanced reasoning, and tasks where accuracy and honesty matter more than speed. Use ChatGPT by default; switch to Claude when processing long PDFs or reports.' },
                { q:'Which AI tool is best for salary calculation and tax planning in India?', a:'For exact calculations, use ToolStackHub\'s free Salary Calculator — it is purpose-built for Indian salary structures and gives accurate in-hand salary after PF, professional tax, and income tax under both old and new regimes. For explanations and what-if scenarios, use ChatGPT or Claude to understand the reasoning behind the numbers.' },
                { q:'Are these AI tools safe to use with personal financial data?', a:'Do not share your PAN number, Aadhaar, bank account details, or exact tax documents with any AI tool. For financial calculations, use dedicated tools like ToolStackHub Salary Calculator which process everything locally. AI chatbots can help you understand concepts and formulas, but keep your sensitive data private.' },
                { q:'Which AI tool is best for Indian students for free?', a:'ChatGPT free tier (GPT-4o) is the best overall AI for students. Combine it with Grammarly free for writing assignments, Google Gemini free for real-time research on current events, and Claude free for analyzing research papers and long PDFs. All four have free tiers sufficient for student use.' },
                { q:'What is the cheapest paid AI tool in India in 2026?', a:'Grammarly Premium at approximately ₹1,000/month is one of the most affordable and useful paid AI tools. ChatGPT Plus and Claude Pro are both $20/month (approximately ₹1,680). Google Gemini Advanced is ₹1,950/month. For most Indians, the free tiers of ChatGPT, Claude, and Gemini are sufficient without paying.' },
              ].map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}