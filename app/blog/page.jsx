import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blog';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Free Tools Blog | Tips, Guides & Tutorials | ToolStackHub',
  description: 'Free guides, tips, and tutorials on developer tools, image compression, JSON formatting, finance calculators, and productivity. By ToolStackHub.',
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: 'Free Tools Blog | Tips, Guides & Tutorials | ToolStackHub',
    description: 'Free guides on developer tools, image compression, JSON formatting, and productivity.',
    url: `${SITE_CONFIG.url}/blog`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Tools Blog | Tips, Guides & Tutorials | ToolStackHub',
    description: 'Free guides on developer tools, image compression, JSON formatting, and productivity.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${SITE_CONFIG.name} Blog`,
  description: 'Guides, tips, and tutorials on text tools, data cleaning, and developer productivity.',
  url: `${SITE_CONFIG.url}/blog`,
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
};

export default function BlogPage() {
  const featured    = blogPosts.filter(p => p.featured);
  const allPosts    = blogPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Hero ─────────────────────────────────────── */}
        <div
          className="relative overflow-hidden text-white"
          style={{ background: 'linear-gradient(135deg,#1a1f4e 0%,#1e235a 50%,#0f172a 100%)' }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-10 w-80 h-80"
            style={{ background: 'radial-gradient(circle,rgba(99,102,241,.22) 0%,transparent 70%)' }} />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64"
            style={{ background: 'radial-gradient(circle,rgba(139,92,246,.16) 0%,transparent 70%)' }} />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.14em] uppercase text-indigo-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              Knowledge Base
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-white mb-4">
              ToolStackHub Blog
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Practical guides on text cleaning, data formatting, developer tools,
              and productivity — written to solve real problems fast.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Text Tools', 'Developer', 'Productivity', 'Data Cleaning', 'How-To'].map(tag => (
                <span key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/65">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* ── Featured posts ───────────────────────── */}
          {featured.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-display font-bold text-xl text-surface-900">Featured Guides</h2>
                <div className="flex-1 h-px bg-surface-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featured.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white border border-surface-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

                    {/* Cover */}
                    <div className={`h-32 bg-gradient-to-br ${post.coverBg} flex items-center justify-center text-5xl`}>
                      {post.coverEmoji}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      {/* Category + read time */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-surface-400 font-medium">{post.readTime} min read</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-surface-900 group-hover:text-brand-700 text-base leading-snug mb-2 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-surface-500 leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                        <span className="text-xs text-surface-400">{post.author}</span>
                        <span className="text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                          Read guide →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── All posts ────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-display font-bold text-xl text-surface-900">All Guides</h2>
              <div className="flex-1 h-px bg-surface-200" />
              <span className="text-sm text-surface-400">{allPosts.length} article{allPosts.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="space-y-3">
              {allPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group flex items-center gap-5 p-5 bg-white border border-surface-200 rounded-xl hover:border-brand-300 hover:shadow-sm transition-all duration-200">

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.coverBg} flex items-center justify-center text-2xl shrink-0`}>
                    {post.coverEmoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">{post.category}</span>
                      <span className="text-surface-300 text-xs">·</span>
                      <span className="text-[10px] text-surface-400">{post.readTime} min read</span>
                    </div>
                    <h3 className="font-semibold text-surface-900 group-hover:text-brand-700 text-sm leading-snug mb-1 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-surface-500 line-clamp-1">{post.excerpt}</p>
                  </div>

                  <svg className="w-4 h-4 text-surface-300 group-hover:text-brand-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────── */}
          <div className="mt-16 rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#1a1f4e 0%,#1e235a 100%)' }}>
            <div className="px-8 py-10 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                36 Free Tools — No Signup Required
              </h3>
              <p className="text-white/55 mb-6 max-w-md mx-auto">
                Everything we write about, you can do for free. Browse all tools.
              </p>
              <Link href="/#all-tools"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
                Browse All Free Tools →
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}