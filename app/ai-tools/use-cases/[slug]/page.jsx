import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import {
  AI_TOOLS,
  getAIUseCaseBySlug, getAllAIUseCaseSlugs,
} from '../../../../data/ai-tools-data';
import { SITE_CONFIG } from '../../../../data/tools';

// Dedicated route for /ai-tools/use-cases/[slug].
// A single dynamic segment is required here — a non-catch-all [slug] under
// /ai-tools cannot contain a "/" (it gets URL-encoded to %2F and 404s), so
// use-cases live in their own nested route.
export async function generateStaticParams() {
  return getAllAIUseCaseSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const uc = getAIUseCaseBySlug(slug);
  if (!uc) return {};
  return {
    title:       uc.metaTitle + ' | ToolStackHub',
    description: uc.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/ai-tools/use-cases/${slug}` },
    openGraph: {
      title:       uc.metaTitle,
      description: uc.metaDesc,
      url:        `${SITE_CONFIG.url}/ai-tools/use-cases/${slug}`,
      type:        'article',
      siteName:    SITE_CONFIG.name,
    },
  };
}

const COLOR = {
  emerald: { bg:'bg-emerald-50', border:'border-emerald-200' },
  brand:   { bg:'bg-brand-50',   border:'border-brand-200'   },
  blue:    { bg:'bg-blue-50',    border:'border-blue-200'    },
  purple:  { bg:'bg-purple-50',  border:'border-purple-200'  },
  teal:    { bg:'bg-teal-50',    border:'border-teal-200'    },
  green:   { bg:'bg-green-50',   border:'border-green-200'   },
  amber:   { bg:'bg-amber-50',   border:'border-amber-200'   },
  surface: { bg:'bg-surface-50', border:'border-surface-200' },
  orange:  { bg:'bg-orange-50',  border:'border-orange-200'  },
  violet:  { bg:'bg-violet-50',  border:'border-violet-200'  },
};

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
            <Link href="/tools/salary-calculator" className="bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors shrink-0">
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

export default async function AIUseCasePage({ params }) {
  const { slug } = await params;
  const uc = getAIUseCaseBySlug(slug);
  if (!uc) notFound();
  return <UseCasePage uc={uc} />;
}
