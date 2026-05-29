'use client';
import Link from 'next/link';

/**
 * TextToolsLinks — shared internal linking cluster for all text tools.
 * Import this into every text tool page for Google-friendly topical authority.
 * currentSlug: the slug of the current page (to skip it from the list)
 */

const TEXT_TOOLS = [
  {
    href:  '/tools/word-counter',
    label: 'Word Counter Online',
    icon:  '📝',
    desc:  'Count words, characters, sentences, paragraphs, and reading time in real time.',
    tags:  ['writing', 'seo', 'blogging'],
  },
  {
    href:  '/tools/character-counter',
    label: 'Character Counter Online',
    icon:  '🔢',
    desc:  'Count characters with live Twitter, SMS, and meta description limit indicators.',
    tags:  ['social media', 'seo', 'email'],
  },
  {
    href:  '/tools/case-converter',
    label: 'Case Converter Online',
    icon:  '🔡',
    desc:  'Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more.',
    tags:  ['formatting', 'coding', 'writing'],
  },
  {
    href:  '/tools/lorem-ipsum-generator',
    label: 'Lorem Ipsum Generator',
    icon:  '📄',
    desc:  'Generate placeholder text by paragraphs, sentences, or words for design mockups.',
    tags:  ['design', 'development', 'prototyping'],
  },
  {
    href:  '/tools/text-to-handwriting',
    label: 'Text to Handwriting Generator',
    icon:  '✍️',
    desc:  'Convert typed text to realistic handwritten notes with notebook paper styles.',
    tags:  ['creative', 'school', 'social media'],
  },
  {
    href:  '/tools/markdown-preview',
    label: 'Markdown Editor Online',
    icon:  '📋',
    desc:  'Write and preview Markdown with live split-screen rendering and HTML export.',
    tags:  ['development', 'blogging', 'documentation'],
  },
  {
    href:  '/tools/text-to-speech',
    label: 'Text to Speech Online',
    icon:  '🔊',
    desc:  'Convert any text to spoken audio with multiple voices and adjustable speed.',
    tags:  ['accessibility', 'proofreading', 'learning'],
  },
  {
    href:  '/tools/remove-duplicate-lines',
    label: 'Remove Duplicate Lines Online',
    icon:  '🧹',
    desc:  'Remove duplicate lines from any text instantly. Case-sensitive and ignore-case modes.',
    tags:  ['data cleaning', 'lists', 'csv'],
  },
];

export default function TextToolsLinks({ currentHref = '' }) {
  const others = TEXT_TOOLS.filter(t => t.href !== currentHref);

  return (
    <section aria-labelledby="text-tools-heading" className="space-y-5">
      <div>
        <h2 id="text-tools-heading" className="font-display font-bold text-xl text-surface-900 mb-1">
          More Free Text Tools
        </h2>
        <p className="text-sm text-surface-500">
          All text tools work instantly in your browser — no signup, no data uploaded.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {others.map(tool => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-all group"
          >
            <span className="text-2xl shrink-0 mt-0.5">{tool.icon}</span>
            <div className="min-w-0">
              <div className="font-semibold text-surface-900 group-hover:text-emerald-700 text-sm transition-colors">
                {tool.label}
              </div>
              <div className="text-xs text-surface-500 mt-0.5 leading-relaxed line-clamp-2">
                {tool.desc}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {tool.tags.map(tag => (
                  <span key={tag}
                    className="text-[10px] font-medium text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}