import Link from 'next/link';
import { SITE_CONFIG, categories, tools } from '../data/tools';

export default function Footer() {
  const year = new Date().getFullYear();

  const toolsByCategory = categories.map(cat => ({
    ...cat,
    tools: tools.filter(t => t.category === cat.id),
  })).filter(cat => cat.tools.length > 0);

  return (
    <footer className="bg-surface-900 text-surface-300 mt-auto">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Brand row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12 pb-12 border-b border-surface-800">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">T</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Tool<span className="text-brand-400">Stack</span>Hub
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed mb-4">
              Free online tools for developers, designers, and everyone else.
              No registration required.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-surface-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              All tools work in your browser
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/#categories"  className="text-surface-400 hover:text-brand-400 transition-colors">Categories</Link>
            <Link href="/#all-tools"   className="text-surface-400 hover:text-brand-400 transition-colors">All Tools</Link>
            <Link href="/blog"         className="text-surface-400 hover:text-brand-400 transition-colors">Blog</Link>
            <Link href="/about"        className="text-surface-400 hover:text-brand-400 transition-colors">About</Link>
            <Link href="/contact"      className="text-surface-400 hover:text-brand-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Tool sitemap — all categories, all tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {toolsByCategory.map(cat => (
            <div key={cat.id}>
              <h3 className="font-display font-semibold text-white mb-3 text-xs uppercase tracking-widest">
                {cat.icon} {cat.label}
              </h3>
              <ul className="space-y-1.5">
                {cat.tools.map(tool => (
                  <li key={tool.slug}>
                    <Link
                      href={tool.href || `/${tool.slug}`}
                      className="text-xs text-surface-400 hover:text-brand-400 transition-colors leading-snug block"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-500">
            <p>© {year} {SITE_CONFIG.name}. Free online tools for everyone.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy"     className="hover:text-surface-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms"       className="hover:text-surface-300 transition-colors">Terms of Service</Link>
              <Link href="/disclaimer"  className="hover:text-surface-300 transition-colors">Disclaimer</Link>
              <Link href="/sitemap.xml" className="hover:text-surface-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
