import Link from 'next/link';
import { categoryColors } from '../data/tools';

/**
 * ToolCard Component
 * Displays a single tool in a card format.
 * Used on the homepage grid and related tools sections.
 */
export default function ToolCard({ tool }) {
  const colors = categoryColors[tool.category] || categoryColors.utility;

  return (
    <Link href={`/tools/${tool.slug}`} className="block group" tabIndex={0}>
      <article className="tool-card h-full flex flex-col">
        {/* Card header */}
        <div className="flex items-start justify-between mb-3">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-surface-50 border border-surface-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200">
            {tool.icon}
          </div>

          {/* Category badge */}
          <span className={`badge ${colors.bg} ${colors.text} ${colors.border} border`}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {tool.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-semibold text-surface-900 group-hover:text-brand-600 transition-colors mb-1.5 text-base">
            {tool.name}
          </h3>
          <p className="text-sm text-surface-500 leading-relaxed line-clamp-2">
            {tool.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
          Use Tool
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
