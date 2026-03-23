import Link from 'next/link';
import { SITE_CONFIG, categories, tools } from '../data/tools';

/**
 * Footer Component
 * - Sitemap-style links for SEO
 * - Category quick links
 * - Legal links
 */
export default function Footer() {
  const year = new Date().getFullYear();

  // Group tools by category for the footer sitemap
  const toolsByCategory = categories.map(cat => ({
    ...cat,
    tools: tools.filter(t => t.category === cat.id).slice(0, 5),
  })).filter(cat => cat.tools.length > 0);

  return (
    <footer className="bg-surface-900 text-surface-300 mt-auto">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">T</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Tool<span className="text-brand-400">Stack</span>Hub
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed mb-6">
              Free online tools for developers, designers, and everyone else.
              No registration required.
            </p>
            <div className="flex items-center gap-1 text-xs text-surface-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              All tools work in your browser
            </div>
          </div>

          {/* Tool categories */}
          {toolsByCategory.slice(0, 3).map(cat => (
            <div key={cat.id}>
              <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.tools.map(tool => (
                  <li key={tool.slug}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{tool.icon}</span>
                      {tool.name}
                    </Link>
                  </li>
                ))}
                {tools.filter(t => t.category === cat.id).length > 5 && (
                  <li>
                    <Link href={`/#${cat.id}`} className="text-xs text-surface-500 hover:text-brand-400 transition-colors">
                      + more {cat.label.toLowerCase()} →
                    </Link>
                  </li>
                )}
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
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-surface-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms"   className="hover:text-surface-300 transition-colors">Terms of Service</Link>
              <Link href="/sitemap.xml" className="hover:text-surface-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
