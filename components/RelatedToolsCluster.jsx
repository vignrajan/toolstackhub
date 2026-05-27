import Link from 'next/link';
import { getRelatedTools, TOOL_META } from '../data/related-tools';
import ShareButtons from './ShareButtons';
import { SITE_CONFIG } from '../data/tools';

/**
 * RelatedToolsCluster
 * ──────────────────────────────────────────────────────────────
 * Drop this at the bottom of every tool page.
 * It automatically pulls the right related + seeAlso tools
 * from related-tools.js based on the current tool's slug.
 *
 * Usage:
 *   <RelatedToolsCluster currentSlug="compress-image-online" />
 */
export default function RelatedToolsCluster({ currentSlug }) {
  const { related, seeAlso } = getRelatedTools(currentSlug);

  if (!related.length && !seeAlso.length) return null;

  const getHref = (slug) => {
    const meta = TOOL_META[slug];
    return meta?.href || `/${slug}`;
  };

  const getMeta = (slug) => TOOL_META[slug] || {};

  const currentMeta = getMeta(currentSlug);
  const toolName = currentMeta?.name || currentSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const toolUrl  = `${SITE_CONFIG.url}/${currentSlug}`;

  return (
    <div className="space-y-8">

      {/* Share buttons */}
      <div className="flex items-center justify-between flex-wrap gap-3 py-4 border-t border-surface-100">
        <p className="text-sm text-surface-500">Found this tool helpful?</p>
        <ShareButtons toolName={toolName} toolUrl={toolUrl} />
      </div>

      {/* Related tools — same cluster */}
      {related.length > 0 && (
        <section aria-labelledby="related-cluster-heading">
          <h2 id="related-cluster-heading"
            className="font-display font-bold text-xl text-surface-900 mb-2">
            Tools People Use Together
          </h2>
          <p className="text-sm text-surface-500 mb-4">
            These tools are commonly used alongside{' '}
            <strong className="text-surface-700">{getMeta(currentSlug)?.name || currentSlug}</strong>{' '}
            as part of the same workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map(tool => {
              const meta = getMeta(tool.slug);
              return (
                <Link
                  key={tool.slug}
                  href={getHref(tool.slug)}
                  className="group flex gap-3 p-4 bg-white border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors"
                >
                  <span className="text-2xl shrink-0">{meta.icon || '🔧'}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-surface-900 group-hover:text-brand-700 truncate">
                      {tool.label}
                    </div>
                    <div className="text-xs text-surface-400 mt-0.5 leading-snug">
                      {tool.reason}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* See also — cross-category */}
      {seeAlso.length > 0 && (
        <section aria-labelledby="seealso-heading">
          <h2 id="seealso-heading"
            className="font-display font-bold text-xl text-surface-900 mb-2">
            You Might Also Need
          </h2>
          <p className="text-sm text-surface-500 mb-4">
            Free tools that complement your current workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {seeAlso.map(tool => {
              const meta = getMeta(tool.slug);
              return (
                <Link
                  key={tool.slug}
                  href={getHref(tool.slug)}
                  className="group flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-surface-300 hover:bg-white transition-colors"
                >
                  <span className="text-2xl shrink-0">{meta.icon || '🔧'}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-surface-800 group-hover:text-surface-900 truncate">
                      {tool.label}
                    </div>
                    <div className="text-xs text-surface-400 mt-0.5 leading-snug">
                      {tool.reason}
                    </div>
                  </div>
                  <span className="ml-auto text-surface-300 group-hover:text-surface-500 shrink-0">→</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}