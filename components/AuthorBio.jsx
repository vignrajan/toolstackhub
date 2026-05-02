import Link from 'next/link';

// ── authorSchema — import this in every blog page's JSON-LD ──
export const authorSchema = {
  '@type': 'Person',
  name: 'Garry',
  url: 'https://www.toolstackhub.in/about/garry',
  image: 'https://www.toolstackhub.in/images/garry.jpg',
  jobTitle: 'Developer & Founder',
  description: 'Full-stack developer building free browser-based tools for Indian professionals and developers. Founder of ToolStackHub.',
  worksFor: {
    '@type': 'Organization',
    name: 'ToolStackHub',
    url: 'https://www.toolstackhub.in',
  },
  knowsAbout: [
    'Web Development', 'Next.js', 'React', 'TypeScript',
    'Indian Income Tax', 'GST', 'SEO', 'Technical SEO',
    'Schema Markup', 'Developer Tools', 'AI Tools', 'Prompt Engineering',
  ],
  sameAs: [
    'https://github.com/vignrajan',
    'https://www.toolstackhub.in/about/garry',
  ],
};

// ── AuthorBio component ───────────────────────────────────────
// Usage: <AuthorBio /> at the end of any blog post
// Optional compact variant: <AuthorBio compact />
export default function AuthorBio({ compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
          G
        </div>
        <div>
          <Link href="/about/garry" className="text-sm font-semibold text-surface-800 hover:text-brand-600">
            Garry
          </Link>
          <div className="text-xs text-surface-400">Developer & Founder, ToolStackHub</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-brand-700 flex items-center justify-center text-white font-black text-xl shrink-0">
          G
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <Link href="/about/garry" className="font-bold text-surface-900 hover:text-brand-600 transition-colors">
              Garry
            </Link>
            <span className="text-xs text-surface-400">·</span>
            <span className="text-xs text-surface-500">Developer & Founder, ToolStackHub</span>
          </div>

          <p className="text-sm text-surface-600 leading-relaxed mb-3">
            Full-stack developer building free, privacy-first tools for Indian professionals and developers.
            Everything on ToolStackHub runs in your browser — no accounts, no uploads, no nonsense.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/about/garry"
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              More about Garry →
            </Link>
            <a href="https://github.com/vignrajan" target="_blank" rel="me noopener noreferrer"
              className="text-xs font-semibold text-surface-400 hover:text-surface-700 transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <Link href="/blog"
              className="text-xs font-semibold text-surface-400 hover:text-surface-700 transition-colors">
              All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}