import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'CLAUDE.md Guide — The Perfect Setup for Every Project Type (2026)',
  description:
    'Complete CLAUDE.md guide with 7 copy-paste templates for React, Python, Node.js, Go & more. Best practices, diagnostic checklist, and token-saving strategies.',
  keywords: [
    'claude.md guide',
    'claude.md best practices',
    'claude.md template',
    'claude.md example',
    'claude code configuration',
    'claude.md setup',
    'claude.md react',
    'claude.md python',
    'claude.md nextjs',
    'claude code claude.md',
    'how to write claude.md',
    'claude.md file structure',
    'claude code setup guide 2026',
    'agents.md',
    'claude.md vs skills',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-md-guide` },
  openGraph: {
    title: 'CLAUDE.md Guide — 7 Copy-Paste Templates + Best Practices (2026)',
    description:
      'The only CLAUDE.md guide with ready-to-use templates for every project type. Stop repeating yourself. Start shipping faster.',
    url: `${SITE_CONFIG.url}/blog/claude-md-guide`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLAUDE.md Guide — 7 Copy-Paste Templates + Best Practices (2026)',
    description: 'Complete CLAUDE.md guide with 7 copy-paste templates for React, Python, Node.js, Go & more. Best practices, diagnostic checklist, and token-saving strategies.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_CONFIG.url}/blog/claude-md-guide#article`,
      headline: 'CLAUDE.md Guide — The Perfect Setup for Every Project Type (2026)',
      description:
        'Complete CLAUDE.md guide with 7 copy-paste templates for React, Python, Node.js, Go & more.',
      datePublished: '2026-04-12',
      dateModified: '2026-04-12',
      author: {
        '@type': 'Person',
        name: 'Garry',
        url: `${SITE_CONFIG.url}/about/garry`,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      url: `${SITE_CONFIG.url}/blog/claude-md-guide`,
      mainEntityOfPage: `${SITE_CONFIG.url}/blog/claude-md-guide`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CLAUDE.md Guide',
          item: `${SITE_CONFIG.url}/blog/claude-md-guide`,
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Set Up CLAUDE.md for Your Project',
      description: 'A step-by-step guide to creating an effective CLAUDE.md configuration file for Claude Code.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Run /init to generate a starter file',
          text: 'Open Claude Code in your project root and run the /init command. Claude will scan your project structure, detect your build system, test framework, and dependencies, and generate a baseline CLAUDE.md.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Add the 7 essential sections',
          text: 'Structure your CLAUDE.md with: Project Overview, Tech Stack & Conventions, Key Commands, Code Style Rules, Architecture Constraints, File Structure Overview, and Active TODOs.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Prune ruthlessly to stay under 200 lines',
          text: 'Remove anything Claude already knows from its training. Only document things Claude gets wrong without explicit instruction. Target 80–150 lines for optimal compliance.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Move heavy docs to docs/ and workflows to Skills',
          text: 'API documentation, deployment procedures, and architecture deep-dives belong in separate files. Reference them in CLAUDE.md with path hints. Move multi-step workflows into Skills for on-demand use.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Review and update every two weeks',
          text: 'Ask Claude: "Review my CLAUDE.md and suggest improvements." Prune outdated TODOs, add new conventions that emerged, and remove rules Claude now follows by default.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CLAUDE.md?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CLAUDE.md is a special configuration file that Claude Code automatically reads at the start of every session. It acts as a project onboarding document for Claude — telling it your tech stack, coding conventions, important commands, and architectural constraints. Without it, Claude starts each session with zero memory of your project. With it, Claude follows your rules from the very first message.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should I put CLAUDE.md?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are three valid locations: ~/.claude/CLAUDE.md (global, applies to all projects), your project root CLAUDE.md (most common, commit to git), and subdirectory CLAUDE.md files (scoped to that folder). All are loaded and cascade together. Use the global file for personal preferences like tone and formatting. Use the project root for project-specific rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long should CLAUDE.md be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep it under 200 lines or roughly 5,000 tokens. LLMs can reliably follow about 150–200 instructions total, but Claude Code\'s system prompt already uses around 50. That leaves you about 100–150 instruction slots. A bloated CLAUDE.md doesn\'t make Claude smarter — it makes it ignore rules. Lean is almost always better.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does CLAUDE.md work with other AI coding tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most modern AI coding tools support similar configuration files. Cursor, Zed, and OpenCode use AGENTS.md. The content is essentially the same — you may need to rename the file. Some tools support both filenames. The principles in this guide apply universally.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I generate a CLAUDE.md automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Run /init inside Claude Code at your project root. It scans your project and auto-generates a starter CLAUDE.md based on what it detects — your package manager, test framework, build system, and code patterns. Use it as a starting point, then prune and customize. The auto-generated file typically saves 30 minutes of manual setup.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between CLAUDE.md and Skills?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CLAUDE.md is loaded every session automatically — it\'s always-on context. Skills are on-demand: you invoke them with a slash command when you need a specific workflow. Put things Claude needs every session (stack, commands, style rules) in CLAUDE.md. Put complex multi-step workflows (release process, data migration) in Skills. Skills also keep your CLAUDE.md lean.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I commit CLAUDE.md to Git?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, for your project root CLAUDE.md. It is team documentation — every developer using Claude Code on the project benefits from the same conventions. Treat it like you would a .editorconfig or .eslintrc. The global ~/.claude/CLAUDE.md is personal and should not be committed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update CLAUDE.md?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every two to four weeks, or after major stack changes. A good habit: at the start of a new session, ask Claude to review your CLAUDE.md and suggest improvements. Claude will spot outdated commands, ambiguous rules, and missing conventions it has been correcting on its own. It takes about five minutes and pays for itself immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does CLAUDE.md use up tokens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CLAUDE.md is injected into every session\'s context window. A 5,000-token CLAUDE.md costs 5,000 tokens per session in input. However, a well-written CLAUDE.md replaces 10–15 setup messages per session, which would cost far more. The net effect is almost always a significant token saving. Keep it lean and it pays for itself.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if Claude ignores my CLAUDE.md rules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common cause is a file that\'s too long. When CLAUDE.md exceeds 200 lines, Claude starts deprioritizing rules. The fix is to prune, not to emphasize. Remove anything Claude already knows. Move documentation to docs/. Move workflows to Skills. Another cause is ambiguous phrasing — rewrite rules as direct commands, not suggestions. See the Diagnostic section for a full symptom-to-fix guide.',
          },
        },
      ],
    },
  ],
};

const tocItems = [
  { id: 'what-is-claude-md', label: 'What Is CLAUDE.md?' },
  { id: 'where-to-put', label: 'Where to Put CLAUDE.md' },
  { id: 'seven-sections', label: 'The 7 Essential Sections' },
  { id: 'templates', label: '7 Copy-Paste Templates' },
  { id: 'where-does-it-belong', label: 'CLAUDE.md vs Skills vs docs/' },
  { id: 'diagnostic', label: 'CLAUDE.md Diagnostic' },
  { id: 'before-after', label: 'Before & After: Token Savings' },
  { id: 'dynamic-init', label: 'Advanced: Dynamic /init' },
  { id: 'common-mistakes', label: 'Common Mistakes' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const relatedGuides = [
  {
    href: '/blog/how-to-save-tokens-in-claude',
    icon: '💰',
    label: 'Save Tokens in Claude',
    desc: '19 habits for chat and code — cut usage by 60-90%',
  },
  {
    href: '/blog/claude-prompt-templates-save-tokens',
    icon: '📝',
    label: 'Claude Prompt Templates',
    desc: 'Copy-paste templates that save 60% on tokens',
  },
  {
    href: '/blog/claude-hacks-improve-ai-results',
    icon: '🔥',
    label: '5 Claude Hacks',
    desc: 'Prompt modifiers that dramatically improve output',
  },
  {
    href: '/ai-tools/claude',
    icon: '🧠',
    label: 'Claude Full Review 2026',
    desc: 'Features, pricing, and honest pros and cons',
  },
];

function CodeBlock({ children, className = '' }) {
  return (
    <div className={`bg-surface-900 rounded-xl p-5 overflow-x-auto ${className}`}>
      <pre>
        <code style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: '1.7', display: 'block', whiteSpace: 'pre' }}>
          {children}
        </code>
      </pre>
    </div>
  );
}

function SectionBadge({ children }) {
  return (
    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

function ExpertBox({ children }) {
  return (
    <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5 my-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-surface-700 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}

function WarningBox({ children }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <div className="text-surface-700 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}

export default function ClaudeMdGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white min-h-screen">
        <Header />

        {/* Hero */}
        <section className="bg-white border-b border-surface-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <SectionBadge>Claude Code</SectionBadge>
              <span className="text-xs text-surface-400 font-medium">April 12, 2026 · 18 min read</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 leading-tight tracking-tight mb-5">
              CLAUDE.md Guide — The Perfect Setup for Every Project Type (2026)
            </h1>
            <p className="text-surface-600 leading-relaxed text-lg mb-7 max-w-3xl">
              After six months of using Claude Code daily, I've learned what makes a CLAUDE.md actually work — and what
              makes Claude silently ignore it. This guide covers 7 copy-paste templates, a diagnostic checklist, real
              token savings, and the decision tree I use to decide what belongs where.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <div>
                <Link
                  href="/about/garry"
                  className="text-sm font-semibold text-surface-800 hover:text-brand-600"
                >
                  Garry
                </Link>
                <div className="text-xs text-surface-400">
                  Developer & Founder, ToolStackHub · Using Claude Code daily since launch
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-4">
                  Table of Contents
                </p>
                <nav className="flex flex-col gap-1">
                  {tocItems.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm text-surface-600 hover:text-brand-600 py-1 px-2 rounded-lg hover:bg-white transition-colors leading-snug"
                    >
                      <span className="text-surface-400 mr-1.5">{i + 1}.</span>
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 pt-4 border-t border-surface-200">
                  <p className="text-xs text-surface-400 leading-relaxed">
                    🕒 ~18 min read · Updated April 2026
                  </p>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 space-y-14">

              {/* ── Section 1 ── */}
              <section id="what-is-claude-md">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  1. What Is CLAUDE.md and Why Does It Matter?
                </h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Every Claude Code session starts with a blank slate. Claude has no memory of the conversation you
                    had yesterday, no recollection of the naming convention you spent 20 minutes explaining last week,
                    and zero knowledge of the landmines buried in your codebase. You start from zero, every single time.
                  </p>
                  <p>
                    <strong className="text-surface-800">CLAUDE.md is the only file Claude Code loads automatically at session start.</strong>{' '}
                    It's your project's onboarding document — not for a new human developer, but for your AI collaborator.
                    Think of it as a README, except instead of explaining the project to humans, you're explaining it
                    to Claude in a way that immediately changes its behavior.
                  </p>
                  <p>
                    Without a CLAUDE.md, you waste the first 10–15 messages of every session re-explaining context.
                    Claude makes wrong assumptions about your tech stack, uses the wrong test command, and occasionally
                    reaches into a folder it absolutely should not touch. With a well-written CLAUDE.md, Claude follows
                    your conventions from message one, runs the right commands, and avoids your landmines.
                  </p>
                  <p>
                    It's also worth knowing that CLAUDE.md isn't exclusive to Claude Code.{' '}
                    <strong className="text-surface-800">Cursor, Zed, and OpenCode use AGENTS.md</strong> — same concept,
                    different filename. The principles in this guide apply to all of them. Once you understand how to
                    write a good CLAUDE.md, you can adapt it to any AI coding tool in minutes.
                  </p>
                </div>
                <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 mt-6">
                  <p className="text-sm font-semibold text-surface-800 mb-2">⚡ The Token Budget Reality</p>
                  <p className="text-sm text-surface-600 leading-relaxed">
                    LLMs can reliably follow approximately 150–200 distinct instructions. Claude Code's built-in system
                    prompt already consumes around 50 of those slots. That leaves you{' '}
                    <strong className="text-surface-800">roughly 100–150 instruction slots</strong> in your CLAUDE.md
                    before compliance quality starts to degrade. This is why lean CLAUDE.md files outperform comprehensive
                    ones — you're working with a finite budget.
                  </p>
                </div>
              </section>

              {/* ── Section 2 ── */}
              <section id="where-to-put">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  2. Where to Put CLAUDE.md (File Hierarchy Explained)
                </h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  Claude Code supports CLAUDE.md files in three locations. They all load together and cascade — think
                  of it like CSS specificity, where more specific (deeper) files win conflicts.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-3 border border-surface-200 font-semibold text-surface-800 rounded-tl-lg">Location</th>
                        <th className="text-left p-3 border border-surface-200 font-semibold text-surface-800">Scope</th>
                        <th className="text-left p-3 border border-surface-200 font-semibold text-surface-800 rounded-tr-lg">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-surface-200 font-mono text-purple-700 bg-purple-50 text-xs">~/.claude/CLAUDE.md</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Global — all projects</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Personal preferences: tone, response format, output language</td>
                      </tr>
                      <tr className="bg-surface-50/50">
                        <td className="p-3 border border-surface-200 font-mono text-purple-700 text-xs">~/project/CLAUDE.md</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Project root — most common</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Stack, commands, style rules, architecture constraints. Commit to git.</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-surface-200 font-mono text-purple-700 text-xs">~/project/src/CLAUDE.md</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Directory-scoped</td>
                        <td className="p-3 border border-surface-200 text-surface-600">Monorepos — per-package rules that override the root file</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ExpertBox>
                  <strong>My setup:</strong> Global CLAUDE.md holds my personal preferences — I like concise responses,
                  I prefer TypeScript, and I want Claude to flag breaking changes before implementing them. The project
                  root CLAUDE.md holds everything project-specific. I commit the project one to Git so the whole team
                  benefits. The global one stays on my machine.
                </ExpertBox>
              </section>

              {/* ── Section 3 ── */}
              <section id="seven-sections">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  3. The 7 Sections Every CLAUDE.md Needs
                </h2>
                <p className="text-surface-600 leading-relaxed mb-8">
                  After months of iteration, I've landed on seven sections that cover everything Claude needs without
                  bloating the file. Here's each one with the reasoning behind it.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      num: '01',
                      title: 'Project Overview',
                      guidance: '2–3 lines max. What it is, the core tech, and a one-liner purpose.',
                      example: `# Project: ShopFlow\nE-commerce platform for D2C brands. Next.js 14 App Router,\nPrisma ORM, Stripe, Tailwind CSS. Deployed on Vercel.`,
                      note: 'The overview anchors every response. Without it, Claude sometimes drifts toward patterns from its training data rather than your actual project.',
                    },
                    {
                      num: '02',
                      title: 'Tech Stack & Conventions',
                      guidance: '5–10 lines. Language version, framework, key libraries, naming conventions, import style.',
                      example: `## Tech Stack\n- Node 20 / TypeScript 5.4 (strict mode)\n- Next.js 14 App Router (NOT Pages Router)\n- Tailwind CSS — no CSS modules\n- Prisma + PostgreSQL\n- Zod for all input validation\n- camelCase variables, PascalCase components\n- ES modules only — never require()`,
                      note: 'The most important line is usually the one clarifying what version or pattern you\'re NOT using. "App Router, NOT Pages Router" has saved me countless corrections.',
                    },
                    {
                      num: '03',
                      title: 'Key Commands',
                      guidance: '5–8 lines. The exact commands Claude should run, not guesses.',
                      example: `## Commands\n- Dev:    npm run dev\n- Build:  npm run build\n- Test:   npx jest --watch\n- Lint:   npm run lint\n- DB:     npx prisma migrate dev\n- Deploy: vercel --prod`,
                      note: 'Claude will try to guess your commands from package.json patterns. It\'s usually right, but "usually" isn\'t good enough when it\'s about to run a destructive migration.',
                    },
                    {
                      num: '04',
                      title: 'Code Style Rules',
                      guidance: '5–10 lines. Only rules Claude gets wrong without explicit instruction.',
                      example: `## Code Style\n- Named exports only — never default exports\n- API routes return { success: boolean, data?: T, error?: string }\n- Use React Query for data fetching — never useEffect for data\n- Server Components are default — only add "use client" when needed\n- All dates stored/returned as ISO 8601 strings`,
                      note: 'The key insight: don\'t document things Claude already knows. Only add rules for things you\'ve had to correct Claude on at least twice.',
                    },
                    {
                      num: '05',
                      title: 'Architecture Constraints',
                      guidance: '3–5 lines. The "never touch" rules — phrased with NEVER for emphasis.',
                      example: `## Architecture Rules\n- NEVER modify files in /prisma/migrations/ directly\n- All DB changes go through: npx prisma migrate dev\n- NEVER commit .env — use .env.local\n- API routes must validate with Zod before any DB call\n- Images must use next/image — never raw <img>`,
                      note: 'These are your landmines. Phrasing with NEVER in caps genuinely improves compliance — Claude weights it differently than softer language.',
                    },
                    {
                      num: '06',
                      title: 'File Structure Overview',
                      guidance: '5–10 lines. Only what\'s non-obvious. Skip anything standard.',
                      example: `## Structure\n- app/          Pages and API routes (App Router)\n- components/   Reusable UI components\n- lib/          Utilities and shared logic\n- lib/db.ts     Singleton Prisma client — use this, don't import Prisma directly\n- prisma/       Schema and migrations\n- public/       Static assets`,
                      note: 'The lib/db.ts note is the kind of thing that saves a session. Without it, Claude might instantiate a new Prisma client in every file.',
                    },
                    {
                      num: '07',
                      title: 'Active TODOs / Current Focus',
                      guidance: '3–5 lines. What you\'re working on right now.',
                      example: `## Current Focus\n- Migrating checkout flow from Pages Router to App Router\n- DO NOT refactor auth — it's being replaced next sprint\n- New API routes should follow pattern in app/api/products/route.ts`,
                      note: 'This section has the highest ROI of any section. It eliminates the 5-minute context dump at the start of every session. Update it when your focus shifts.',
                    },
                  ].map((s) => (
                    <div key={s.num} className="bg-surface-50 border border-surface-200 rounded-xl overflow-hidden">
                      <div className="flex items-start gap-4 p-5 pb-3">
                        <span
                          className="text-3xl font-bold flex-shrink-0 leading-none"
                          style={{ color: '#c4b5fd' }}
                        >
                          {s.num}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-surface-900 text-base mb-1">{s.title}</h3>
                          <p className="text-sm text-surface-500">{s.guidance}</p>
                        </div>
                      </div>
                      <div className="px-5 pb-3">
                        <CodeBlock>{s.example}</CodeBlock>
                      </div>
                      <div className="px-5 pb-4">
                        <p className="text-xs text-surface-500 italic">💬 {s.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assembled Example */}
                <div className="mt-8">
                  <p className="font-semibold text-surface-800 mb-3">Complete assembled example (all 7 sections):</p>
                  <CodeBlock>
{`# Project: ShopFlow
E-commerce for D2C brands. Next.js 14 App Router, Prisma + PostgreSQL,
Stripe, Tailwind CSS. Deployed on Vercel.

## Tech Stack
- Node 20 / TypeScript 5.4 strict
- Next.js 14 App Router (NOT Pages Router)
- Tailwind CSS (no CSS modules)
- Prisma ORM + PostgreSQL
- Zod for all input validation
- camelCase vars, PascalCase components, kebab-case files
- ES modules only — never require()

## Commands
- Dev:    npm run dev
- Build:  npm run build
- Test:   npx jest --watch
- Lint:   npm run lint
- DB:     npx prisma migrate dev
- Deploy: vercel --prod

## Code Style
- Named exports only — no default exports
- API responses: { success: boolean, data?: T, error?: string }
- Use React Query for data fetching — not useEffect
- Server Components are default — add "use client" only when needed
- All dates: ISO 8601 strings

## Architecture Rules
- NEVER edit /prisma/migrations/ directly
- NEVER commit .env — use .env.local
- All API routes validate input with Zod before any DB call
- Images: next/image only — never raw <img>

## Structure
- app/         Pages and API routes
- components/  Reusable UI
- lib/         Shared utilities
- lib/db.ts    Singleton Prisma client — import this, not prisma directly
- prisma/      Schema + migrations

## Current Focus
- Migrating checkout from Pages to App Router
- DO NOT refactor auth — being replaced next sprint
- Follow pattern in app/api/products/route.ts for new routes`}
                  </CodeBlock>
                </div>
              </section>

              {/* ── Section 4: Templates ── */}
              <section id="templates">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                  4. 7 Copy-Paste Templates by Project Type
                </h2>
                <p className="text-surface-600 leading-relaxed mb-8">
                  These templates are written as if I'm actually working with each stack daily — because I have been.
                  Each one is immediately usable. Copy the one matching your project, swap the placeholder names, and
                  prune anything that doesn't apply.
                </p>

                {/* Template 1 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">⚛️</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 1: Next.js 14 / React</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name]
Next.js 14 App Router with TypeScript, Tailwind CSS, and Prisma.

## Tech Stack
- Next.js 14 (App Router, NOT Pages Router)
- TypeScript strict mode
- Tailwind CSS (no CSS modules)
- Prisma ORM with PostgreSQL
- Deployed on Vercel

## Commands
- Dev:        npm run dev
- Build:      npm run build
- Test:       npx jest --watch
- Lint:       npm run lint
- DB migrate: npx prisma migrate dev
- DB studio:  npx prisma studio

## Code Style
- Named exports (not default exports) for all components
- "use client" only when hooks or browser APIs are needed
- Server Components are default — don't add "use client" unnecessarily
- ES module imports only — never require()
- Destructure: import { useState } from "react"
- All API input validated with Zod

## Architecture Rules
- NEVER edit /prisma/migrations/ directly
- All API routes in app/api/ return NextResponse.json()
- API routes must validate input with Zod before DB calls
- Environment vars: .env.local (never commit .env)
- Images: next/image only — never raw <img>
- Singleton Prisma client lives in lib/db.ts

## File Structure
- app/         Pages and API routes (App Router)
- components/  Reusable React components
- lib/         Utilities and shared logic
- lib/db.ts    Prisma singleton — use this everywhere
- prisma/      Schema and migrations
- public/      Static assets

## Current Focus
- [What you're working on right now]`}
                  </CodeBlock>
                </div>

                {/* Template 2 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🐍</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 2: Python / Django</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name]
Django 5.x REST API + PostgreSQL. Serves a React frontend via DRF.

## Tech Stack
- Python 3.12 / Django 5.1
- Django REST Framework (DRF) for API
- PostgreSQL via psycopg2-binary
- Redis for caching and Celery
- Black formatter, isort, mypy for type checking
- Virtual env: .venv (activate: source .venv/bin/activate)

## Commands
- Dev server:    python manage.py runserver
- Shell:         python manage.py shell_plus
- Migrate:       python manage.py migrate
- Make migration:python manage.py makemigrations
- Tests:         python manage.py test --verbosity=2
- Coverage:      coverage run -m pytest && coverage report
- Celery worker: celery -A config worker -l info

## Code Style
- Type hints on all function signatures (PEP 484)
- Black formatting (line length 88) — run before every commit
- isort for import ordering
- Docstrings on all public methods (Google style)
- snake_case for variables and functions
- Use Django ORM — never raw SQL unless explicitly needed
- All API views use DRF serializers — no manual response dicts

## Architecture Rules
- NEVER run migrations in production directly — always review first
- Settings split: config/settings/base.py, local.py, production.py
- Secrets via environment variables — never hardcode
- All model changes require migration files committed with the change
- Use select_related / prefetch_related — NEVER query inside loops
- Custom managers in models.py — not raw .filter() in views

## File Structure
- config/       Django project settings and URLs
- apps/         All Django apps (one app per domain concept)
- apps/users/   Auth, user model (custom AbstractUser)
- templates/    Django templates (admin only — DRF handles API)
- requirements/ base.txt, dev.txt, prod.txt

## Current Focus
- [Current sprint / active feature]`}
                  </CodeBlock>
                </div>

                {/* Template 3 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🟩</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 3: Node.js / Express API</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name]
Node.js + Express REST API. TypeScript. PostgreSQL via Knex.

## Tech Stack
- Node 20 LTS / TypeScript 5.4
- Express 4.x
- Knex.js query builder + PostgreSQL
- Zod for request validation
- Jest + Supertest for testing
- ESLint + Prettier

## Commands
- Dev (hot reload): npm run dev        (uses tsx watch)
- Build:            npm run build      (tsc)
- Start prod:       npm start
- Test:             npm test
- Test watch:       npm run test:watch
- Migrate:          npm run db:migrate
- Rollback:         npm run db:rollback
- Seed:             npm run db:seed

## Code Style
- All route handlers are async — always try/catch or use asyncHandler wrapper
- Standard error response: { success: false, error: string, code?: string }
- Standard success response: { success: true, data: T }
- Validate ALL request bodies/params with Zod schemas at route level
- Middleware order: cors → auth → validate → handler → errorHandler
- Named exports — never default exports from route files

## Architecture Rules
- NEVER write raw SQL — use Knex builder
- NEVER return database error messages to clients — sanitize first
- Auth middleware must run before any protected route handler
- Rate limiting applied at router level, not individual routes
- All DB queries go through repository functions in /repositories
- NEVER access req.user without running auth middleware first

## File Structure
- src/routes/       Express route definitions
- src/controllers/  Request handlers (thin — delegate to services)
- src/services/     Business logic
- src/repositories/ Database queries (Knex)
- src/middleware/   Auth, validation, error handling
- src/lib/          DB connection, logger, config

## Current Focus
- [Current active work]`}
                  </CodeBlock>
                </div>

                {/* Template 4 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">📱</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 4: Flutter / Dart</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name]
Flutter app (iOS + Android). Riverpod for state management.

## Tech Stack
- Flutter 3.24 / Dart 3.5
- Riverpod 2.x (code generation enabled)
- go_router for navigation
- Dio for HTTP (with interceptors)
- Freezed + json_serializable for models
- Hive for local storage

## Commands
- Run:          flutter run
- Build Android: flutter build apk --release
- Build iOS:    flutter build ios --release
- Test:         flutter test
- Analyze:      flutter analyze
- Pub get:      flutter pub get
- Code gen:     dart run build_runner build --delete-conflicting-outputs

## Code Style
- Always run dart run build_runner after model changes
- Use Freezed for all data classes — never plain Dart classes for models
- Riverpod providers: prefer AsyncNotifierProvider for server data
- No setState in stateful widgets — use Riverpod ConsumerWidget
- Platform-specific code goes in platform/ with conditional imports
- Widget files: one widget per file, PascalCase filename

## Architecture Rules
- NEVER call APIs directly from widgets — go through a repository
- ALL API calls must handle DioException — never let them bubble raw
- Avoid BuildContext across async gaps — use mounted check
- Navigation only through go_router — never Navigator.push directly
- Local storage keys defined as constants in lib/constants/storage.dart

## File Structure
- lib/features/    Feature-based modules (auth, home, profile)
- lib/shared/      Reusable widgets and utilities
- lib/core/        App config, theme, router, DI
- lib/data/        Repositories and API services
- assets/          Images, fonts, translations

## Current Focus
- [Active feature or platform]`}
                  </CodeBlock>
                </div>

                {/* Template 5 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🐹</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 5: Go / Golang</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name]
Go REST API. Standard library net/http + chi router. PostgreSQL via pgx.

## Tech Stack
- Go 1.23
- chi v5 router
- pgx v5 for PostgreSQL (no ORM)
- sqlc for type-safe SQL queries
- golang-migrate for migrations
- golangci-lint for linting
- testify for assertions

## Commands
- Run:           go run ./cmd/server
- Build:         go build -o bin/server ./cmd/server
- Test:          go test ./... -v
- Test coverage: go test ./... -coverprofile=coverage.out
- Lint:          golangci-lint run
- Generate SQL:  sqlc generate
- Migrate up:    migrate -path db/migrations -database $DATABASE_URL up
- Format:        gofmt -w . && goimports -w .

## Code Style
- Always run gofmt — non-negotiable, CI will fail without it
- Error handling: check every error, no _ for error values
- Errors wrap with context: fmt.Errorf("getUserByID: %w", err)
- Use structured logging via slog (stdlib) — never fmt.Println in production
- Table-driven tests for all pure functions
- No panic() outside of main initialization

## Architecture Rules
- NEVER use ORM — SQL goes through sqlc-generated functions only
- All DB queries in internal/store/ — never in handlers
- Handlers are thin: parse → validate → call service → respond
- Middleware applied to router groups, not individual routes
- Config loaded from environment via os.Getenv — no config files in repo
- NEVER log sensitive data (passwords, tokens, PII)

## File Structure
- cmd/server/     main.go entry point
- internal/       All application code (not exported)
- internal/api/   HTTP handlers and router
- internal/store/ sqlc-generated DB layer
- internal/service/ Business logic
- db/migrations/  SQL migration files
- db/queries/     SQL queries for sqlc

## Current Focus
- [Active module or feature]`}
                  </CodeBlock>
                </div>

                {/* Template 6 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🏗️</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 6: Monorepo (Turborepo)</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name] Monorepo
Turborepo monorepo. Web (Next.js), API (Express), shared packages.

## Workspace Structure
- apps/web        Next.js 14 frontend
- apps/api        Express REST API
- packages/ui     Shared component library
- packages/types  Shared TypeScript types
- packages/utils  Shared utility functions
- packages/config Shared ESLint, TS, Tailwind configs

## Tech Stack
- Node 20 / TypeScript 5.4
- Turborepo for task orchestration
- pnpm workspaces (ALWAYS use pnpm — never npm or yarn in this repo)
- Changesets for versioning packages

## Commands
- Dev all:      pnpm dev           (turbo runs all dev tasks)
- Dev web only: pnpm --filter web dev
- Dev api only: pnpm --filter api dev
- Build all:    pnpm build
- Test all:     pnpm test
- Lint all:     pnpm lint
- Add dep:      pnpm --filter [app] add [package]
- Add shared:   pnpm --filter [app] add @repo/ui

## Code Style
- Imports from shared packages: @repo/ui, @repo/types, @repo/utils
- NEVER copy-paste code between apps — create a shared package
- All shared types live in packages/types — never duplicate
- Component exports from packages/ui follow named export pattern

## Architecture Rules
- NEVER install the same dependency in two apps — extract to packages/
- Cross-package changes must run: pnpm build in affected packages first
- Internal packages use workspace: * versioning
- API types shared via packages/types — always keep in sync
- NEVER import from apps/ directory in packages/ (one-way dependency)

## Which Package to Touch
- UI change:         packages/ui → then apps that use it
- New API endpoint:  apps/api + packages/types (for response types)
- New page:          apps/web only
- Shared logic:      packages/utils

## Current Focus
- [Current cross-package work or migration]`}
                  </CodeBlock>
                </div>

                {/* Template 7 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🌐</span>
                    <h3 className="font-display font-bold text-surface-900 text-lg">Template 7: WordPress / PHP</h3>
                  </div>
                  <CodeBlock>
{`# Project: [Name] — WordPress
Custom WordPress theme + plugin. PHP 8.2. WooCommerce.

## Tech Stack
- WordPress 6.7 / PHP 8.2
- Custom theme: wp-content/themes/[theme-name]
- Custom plugin: wp-content/plugins/[plugin-name]
- WooCommerce 9.x
- WP-CLI for automation
- Composer for PHP dependencies
- Node + webpack for asset bundling (npm run build)

## Commands
- Dev assets:    npm run dev        (webpack watch)
- Build assets:  npm run build
- WP CLI:        wp [command]       (from /var/www/html)
- Install plugin: wp plugin install [slug] --activate
- Export DB:     wp db export backup.sql
- Cache flush:   wp cache flush
- PHP lint:      vendor/bin/phpcs --standard=WordPress .

## Code Style
- Follow WordPress Coding Standards (WPCS) — CI enforces this
- snake_case for all PHP functions and variables
- Prefix ALL functions, hooks, and classes: [prefix]_function_name
- Enqueue scripts/styles via wp_enqueue_scripts hook — never inline
- Use wp_nonce_field() for all forms — CSRF protection required
- Escape ALL output: esc_html(), esc_attr(), esc_url(), wp_kses_post()
- Sanitize ALL input: sanitize_text_field(), absint(), etc.

## Architecture Rules
- NEVER modify core WordPress files or WooCommerce files directly
- Extend WooCommerce via hooks/filters — never edit plugin files
- All custom DB tables use $wpdb with proper escaping
- Custom post types registered in [prefix]-post-types.php
- NEVER use short PHP tags: <?php only
- Meta values stored with update_post_meta — no custom tables for simple data

## File Structure (Theme)
- functions.php     Autoloader + hook registration
- inc/              PHP includes (post types, taxonomies, helpers)
- template-parts/   Reusable template fragments
- assets/src/       Raw JS and SCSS
- assets/dist/      Built assets (gitignored)

## WP Hooks Reference
- Init logic:       add_action('init', ...)
- Admin pages:      add_action('admin_menu', ...)
- WC cart change:   add_action('woocommerce_add_to_cart', ...)

## Current Focus
- [Active theme/plugin feature]`}
                  </CodeBlock>
                </div>
              </section>

              {/* ── Section 5 ── */}
              <section id="where-does-it-belong">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  5. CLAUDE.md vs Skills vs docs/ — Where Does It Belong?
                </h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  One of the most common mistakes I see is treating CLAUDE.md as a catch-all documentation dump. It's
                  not. Here's the decision framework I use.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900">
                        <th className="text-left p-3 border border-surface-700 font-semibold rounded-tl-lg" style={{ color: '#e2e8f0' }}>Content Type</th>
                        <th className="text-left p-3 border border-surface-700 font-semibold" style={{ color: '#e2e8f0' }}>Put it in…</th>
                        <th className="text-left p-3 border border-surface-700 font-semibold rounded-tr-lg" style={{ color: '#e2e8f0' }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Project overview, tech stack', 'CLAUDE.md', 'Needed every session'],
                        ['Build / test / lint commands', 'CLAUDE.md', 'Used constantly'],
                        ['Code style rules', 'CLAUDE.md', 'Applies to every edit'],
                        ['API documentation', 'docs/API.md', 'Too long for CLAUDE.md; reference when needed'],
                        ['Deployment procedures', 'docs/DEPLOY.md or Skill', 'Only needed occasionally'],
                        ['Complex workflow (e.g. release)', 'Skill', 'On-demand, not every session'],
                        ['One-time setup instructions', 'docs/SETUP.md', 'Only needed once'],
                        ['Architecture deep-dive', 'docs/ARCHITECTURE.md', 'Reference, not every-session'],
                        ['Linting / formatting rules', 'Hooks', 'Deterministic 100% enforcement'],
                        ['Security rules (never commit secrets)', 'CLAUDE.md + Hook', 'Belt and suspenders'],
                      ].map(([type, location, why], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50/50'}>
                          <td className="p-3 border border-surface-200 text-surface-700 font-medium">{type}</td>
                          <td className="p-3 border border-surface-200">
                            <span className="text-xs font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded">{location}</span>
                          </td>
                          <td className="p-3 border border-surface-200 text-surface-500 text-xs">{why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ExpertBox>
                  <strong>The key mental model:</strong> CLAUDE.md is advisory — expect roughly 80% compliance on a
                  well-written file. Hooks are deterministic — 100% enforcement, every time. If something <em>must</em>{' '}
                  happen without exception (like formatting, or blocking a secret from being committed), make it a hook.
                  If it's guidance that shapes judgment calls, CLAUDE.md is the right place.
                </ExpertBox>
              </section>

              {/* ── Section 6: Diagnostic ── */}
              <section id="diagnostic">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  6. CLAUDE.md Diagnostic — Fix What's Broken
                </h2>
                <p className="text-surface-600 leading-relaxed mb-8">
                  If Claude isn't behaving the way your CLAUDE.md says it should, here's how to diagnose it. These are
                  the exact symptoms I've hit — and the fixes that actually worked.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      symptom: 'Claude ignores your rules entirely',
                      cause: 'CLAUDE.md is too long (>200 lines)',
                      fix: 'Prune ruthlessly. Remove anything Claude knows by default. Move docs to docs/. Move workflows to Skills. Target 80–120 lines.',
                      severity: 'high',
                    },
                    {
                      symptom: 'Claude asks questions already answered in CLAUDE.md',
                      cause: 'Instructions are phrased as suggestions, not commands',
                      fix: 'Rewrite ambiguous lines as direct commands. "You should use named exports" → "Use named exports. Never use default exports."',
                      severity: 'medium',
                    },
                    {
                      symptom: 'Claude uses wrong build/test commands',
                      cause: 'Commands section is missing or the commands are stale',
                      fix: 'Add a Commands section with exact, copy-paste commands. Update it every time your scripts change.',
                      severity: 'medium',
                    },
                    {
                      symptom: "Claude modifies files it shouldn't",
                      cause: 'No architecture constraints defined',
                      fix: 'Add NEVER rules in caps. "NEVER edit /prisma/migrations/ directly." The capitalization genuinely improves compliance.',
                      severity: 'high',
                    },
                    {
                      symptom: "Claude's code style doesn't match yours",
                      cause: 'Style rules are too vague',
                      fix: 'Replace vague rules with concrete DO/DON\'T examples in the code style section. Show the actual pattern you want.',
                      severity: 'medium',
                    },
                    {
                      symptom: 'Sessions start noticeably slow to get productive',
                      cause: 'CLAUDE.md is loading too much context',
                      fix: 'Move heavy documentation to Skills (invoked on demand). Keep CLAUDE.md under 5,000 tokens.',
                      severity: 'low',
                    },
                    {
                      symptom: 'Claude gets worse (sloppier) mid-session',
                      cause: 'Context window bloat — your CLAUDE.md is competing with growing conversation',
                      fix: 'Run /compact periodically. Keep CLAUDE.md lean so it stays dominant. Put standing instructions in the highest-priority position (early in the file).',
                      severity: 'medium',
                    },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="bg-surface-50 border border-surface-200 rounded-xl p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">
                          {d.severity === 'high' ? '🔴' : d.severity === 'medium' ? '🟡' : '🟢'}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-surface-800 text-sm mb-1">
                            Symptom: {d.symptom}
                          </p>
                          <p className="text-xs text-surface-500 mb-2">
                            <strong>Cause:</strong> {d.cause}
                          </p>
                          <p className="text-sm text-surface-600 bg-white border border-surface-200 rounded-lg p-3 leading-relaxed">
                            <strong>Fix:</strong> {d.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Section 7: Before & After ── */}
              <section id="before-after">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  7. Before & After — Real Token Savings
                </h2>
                <p className="text-surface-600 leading-relaxed mb-8">
                  I tracked my actual Claude Code usage across two projects before and after adding a proper CLAUDE.md.
                  The results were more dramatic than I expected.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Example 1 */}
                  <div className="bg-surface-50 border border-surface-200 rounded-xl overflow-hidden">
                    <div className="bg-surface-900 px-5 py-3">
                      <p className="text-sm font-bold" style={{ color: '#e2e8f0' }}>Example 1: React / Next.js Project</p>
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">❌ Before (No CLAUDE.md)</p>
                        <ul className="text-sm text-surface-600 space-y-1">
                          <li>• 15 messages per session just to set up context</li>
                          <li>• ~3,000 tokens per setup conversation</li>
                          <li>• 15 sessions/week = ~45,000 wasted tokens/week</li>
                          <li>• Claude used wrong test runner 40% of the time</li>
                          <li>• Default exports on every component</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">✅ After (35-line CLAUDE.md)</p>
                        <ul className="text-sm text-surface-600 space-y-1">
                          <li>• 0 setup messages — productive from message 1</li>
                          <li>• CLAUDE.md costs ~900 tokens per session</li>
                          <li>• 15 sessions/week = 13,500 tokens on context</li>
                          <li>• Correct commands every time</li>
                          <li>• Named exports consistently applied</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-green-800">
                          ~70% reduction in context tokens. Sessions start productive immediately.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Example 2 */}
                  <div className="bg-surface-50 border border-surface-200 rounded-xl overflow-hidden">
                    <div className="bg-surface-900 px-5 py-3">
                      <p className="text-sm font-bold" style={{ color: '#e2e8f0' }}>Example 2: Monorepo Project</p>
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">❌ Before (400-line CLAUDE.md)</p>
                        <ul className="text-sm text-surface-600 space-y-1">
                          <li>• Full API docs embedded in CLAUDE.md</li>
                          <li>• ~12,000 tokens per session just for the file</li>
                          <li>• Claude followed only ~40% of the rules</li>
                          <li>• Architecture rules ignored half the time</li>
                          <li>• Slow session starts, frequent /compact needed</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">✅ After (80-line CLAUDE.md + Skills)</p>
                        <ul className="text-sm text-surface-600 space-y-1">
                          <li>• Core rules in CLAUDE.md (~2,400 tokens)</li>
                          <li>• API docs moved to docs/API.md (Skill-loaded)</li>
                          <li>• Release workflow moved to a Skill</li>
                          <li>• Rule compliance improved to ~85%</li>
                          <li>• Sessions faster, less /compact needed</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-green-800">
                          80% fewer context tokens AND better rule compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <ExpertBox>
                  <strong>The counterintuitive lesson:</strong> A bigger CLAUDE.md doesn't give Claude more guidance —
                  it gives Claude more to ignore. The sweet spot is a lean file that covers exactly what Claude gets
                  wrong without instruction. Everything else belongs elsewhere.
                </ExpertBox>
              </section>

              {/* ── Section 8: Dynamic /init ── */}
              <section id="dynamic-init">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  8. Advanced: Dynamic CLAUDE.md with /init
                </h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    If you're setting up CLAUDE.md for the first time, don't start from scratch. Run{' '}
                    <code className="bg-surface-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono">/init</code>{' '}
                    inside Claude Code at your project root. Claude will scan your project and automatically detect your
                    build system, test framework, code patterns, key dependencies, and file structure. The result is a
                    generated starter CLAUDE.md that takes about 30 seconds instead of 30 minutes.
                  </p>
                  <p>
                    <strong className="text-surface-800">What /init detects:</strong> package manager (npm/pnpm/yarn),
                    test runner (Jest/Vitest/pytest), framework version, CI configuration, linting setup, and common
                    code patterns across your files. It's not perfect — it won't know your architecture constraints or
                    your current focus — but it gives you 60% of a solid CLAUDE.md instantly.
                  </p>
                  <p>
                    <strong className="text-surface-800">After running /init:</strong> treat the output as a first draft.
                    Read every line. Prune what Claude already knows. Add your architecture rules, NEVER constraints,
                    and current focus. The generated file tends to be verbose — your job is to cut it down to what
                    genuinely changes Claude's behavior.
                  </p>
                  <p>
                    For ongoing maintenance, I've built a simple habit: every two weeks, I paste my current CLAUDE.md
                    into a session and ask:{' '}
                    <em>"Review my CLAUDE.md. Flag anything outdated, ambiguous, or redundant. Suggest what to remove
                    and what's missing."</em> Claude is genuinely good at this — it spots rules it's been silently
                    ignoring and conventions that have drifted.
                  </p>
                </div>
                <div className="mt-5 bg-surface-900 rounded-xl p-5">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>
                    /init workflow
                  </p>
                  <CodeBlock>
{`# 1. Generate starter
/init

# 2. Review what was generated
# Claude opens the file for you to inspect

# 3. Prune aggressively
# Remove anything Claude knows by default
# Remove anything you haven't needed to correct

# 4. Add your specifics
# Architecture constraints, NEVER rules, current focus

# 5. Periodic review (every 2 weeks)
# "Review my CLAUDE.md and suggest improvements"
# Ask Claude to flag: outdated commands, ambiguous rules,
# things it's been correcting without being asked`}
                  </CodeBlock>
                </div>
              </section>

              {/* ── Section 9: Common Mistakes ── */}
              <section id="common-mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  9. Common Mistakes That Make Claude Ignore Your Rules
                </h2>
                <p className="text-surface-600 leading-relaxed mb-7">
                  I've made all of these. They're not obvious until you understand how Claude actually processes the
                  file — which is why most guides don't cover them.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      dont: 'Writing a comprehensive project manual',
                      do: 'Document only what Claude gets wrong without explicit instruction',
                      detail: 'If Claude already handles it correctly, the rule wastes a precious instruction slot. Every line should earn its place.',
                    },
                    {
                      dont: '"Never use --foo-bar flag" (negative-only)',
                      do: '"Never use --foo-bar; use --baz instead" (give the alternative)',
                      detail: 'Negative-only rules leave Claude guessing. Always pair a prohibition with the correct alternative — it\'s more efficient and more effective.',
                    },
                    {
                      dont: 'Auto-generating with /init and never editing',
                      do: 'Treat CLAUDE.md like code: review, prune, test, iterate',
                      detail: 'The generated file is a starting point. Left unedited, it\'s usually 2–3x longer than it needs to be and includes rules Claude already follows.',
                    },
                    {
                      dont: 'Duplicating your linter or formatter rules in CLAUDE.md',
                      do: 'Use hooks for formatting enforcement, CLAUDE.md for judgment calls',
                      detail: 'If ESLint catches it, CLAUDE.md doesn\'t need to say it. Reserve CLAUDE.md for things that require Claude\'s judgment, not mechanical rules.',
                    },
                    {
                      dont: 'One massive CLAUDE.md for the entire monorepo',
                      do: 'Per-package CLAUDE.md files that cascade from the root',
                      detail: 'A 500-line CLAUDE.md for a 10-package monorepo is almost useless. Scope rules to the packages where they apply.',
                    },
                    {
                      dont: 'Writing instructions Claude already follows by default',
                      do: 'Add a rule only after Claude has gotten something wrong at least twice',
                      detail: 'This is the most common bloat source. Claude is already trained on best practices for most stacks — you don\'t need to re-teach them.',
                    },
                    {
                      dont: 'Adding more emphasis when Claude ignores a rule',
                      do: 'Prune the file — the rule is being crowded out, not overlooked',
                      detail: 'The instinct is to bold the text or add IMPORTANT: prefix. The real fix is removing 20 other rules so this one has room to land.',
                    },
                  ].map((m, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface-50 border border-surface-200 rounded-xl overflow-hidden">
                      <div className="p-4 border-b md:border-b-0 md:border-r border-surface-200">
                        <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">❌ Don't</p>
                        <p className="text-sm text-surface-700">{m.dont}</p>
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">✅ Do</p>
                        <p className="text-sm text-surface-700">{m.do}</p>
                      </div>
                      <div className="md:col-span-2 px-4 pb-4">
                        <p className="text-xs text-surface-400 italic">{m.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── TL;DR Cheatsheet ── */}
              <section>
                <div className="bg-surface-900 rounded-2xl p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#818cf8' }}>
                    ⚡ TL;DR — CLAUDE.md Cheatsheet
                  </p>
                  <div className="space-y-3">
                    {[
                      'Start with /init — then prune ruthlessly to under 200 lines / 5,000 tokens',
                      '7 sections: overview · stack · commands · style · constraints · structure · TODOs',
                      'Move API docs to docs/ — move workflows to Skills — move enforcement to Hooks',
                      'NEVER rules in caps improve compliance — always pair with the correct alternative',
                      'A lean 80-line CLAUDE.md outperforms a bloated 400-line one, every time',
                      'Review every 2 weeks: "Claude, review my CLAUDE.md and suggest improvements"',
                      'If Claude ignores a rule — cut the file, don\'t add emphasis',
                      'Commit project CLAUDE.md to Git — your team deserves consistent Claude behavior',
                    ].map((tip, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-xs font-bold flex-shrink-0 mt-0.5" style={{ color: '#818cf8' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 10: FAQ ── */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                  10. Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      q: 'What exactly is CLAUDE.md?',
                      a: `CLAUDE.md is a configuration file that Claude Code reads automatically at the start of every session. It's your project's onboarding document for Claude — telling it your tech stack, coding conventions, important commands, and architectural rules. Think of it as a README, except written for an AI collaborator rather than a human developer. Without it, every session starts with zero context. With it, Claude follows your conventions from the very first message, runs the right commands, and avoids the mistakes it would otherwise make by default.`,
                    },
                    {
                      q: 'Where should I put CLAUDE.md?',
                      a: `Three locations are supported: the global ~/.claude/CLAUDE.md (applies to all your projects), your project root CLAUDE.md (the most common — commit this to git), and subdirectory CLAUDE.md files for directory-level scoping (especially useful in monorepos). All are loaded and cascade together. Use the global file for personal preferences like your preferred response format or language. Use the project root for everything project-specific. Add per-directory files in monorepos to scope rules to specific packages.`,
                    },
                    {
                      q: 'How long should CLAUDE.md be?',
                      a: `Keep it under 200 lines or roughly 5,000 tokens. LLMs can reliably follow about 150–200 total instructions, but Claude Code's system prompt already uses around 50 of those slots. That gives you roughly 100–150 instruction slots before compliance quality degrades. In practice, I've found that 80–120 lines hits the sweet spot — comprehensive enough to cover the real edge cases, lean enough that Claude actually follows all of it. A 400-line CLAUDE.md is almost always worse than an 80-line one.`,
                    },
                    {
                      q: 'Does CLAUDE.md work with other AI coding tools?',
                      a: `Yes. Most modern AI coding tools support similar configuration files. Cursor, Zed, and OpenCode use AGENTS.md — same concept, different filename. The content is essentially identical: you may just need to rename the file (or in some cases, tools support both filenames). The principles in this guide — lean files, direct commands, architecture constraints, regular pruning — apply universally regardless of which AI coding tool you're using.`,
                    },
                    {
                      q: 'How do I generate a CLAUDE.md automatically?',
                      a: `Run /init inside Claude Code at your project root. Claude will scan your project structure and auto-generate a starter CLAUDE.md based on what it detects — your package manager, test framework, build system, and common code patterns. It typically saves 30 minutes of manual setup. Treat it as a first draft: prune anything Claude already follows by default, add your architecture constraints and NEVER rules, and update the current focus section to reflect what you're actually working on.`,
                    },
                    {
                      q: "What's the difference between CLAUDE.md and Skills?",
                      a: `CLAUDE.md is always-on context — it's loaded automatically every session. Skills are on-demand: you invoke them with a slash command when you need a specific workflow. Put things Claude needs in every session (stack, commands, style rules, architecture constraints) in CLAUDE.md. Put complex multi-step workflows — like your release process, data migration procedure, or onboarding checklist — in Skills. The combination keeps CLAUDE.md lean while still giving Claude access to deep workflow knowledge when needed.`,
                    },
                    {
                      q: 'Should I commit CLAUDE.md to Git?',
                      a: `Yes, for your project root CLAUDE.md. It's team documentation — every developer on the project who uses Claude Code benefits from the same established conventions. Treat it like .editorconfig or .eslintrc: it belongs in version control, it should be reviewed in PRs, and it should evolve with the project. The only exception is your personal ~/.claude/CLAUDE.md — that lives on your machine and shouldn't be committed anywhere.`,
                    },
                    {
                      q: 'How often should I update CLAUDE.md?',
                      a: `Every two to four weeks, or after any significant stack change. The practical habit I've settled into: at the start of a new session, occasionally ask Claude to review the CLAUDE.md and suggest improvements. Claude is good at spotting outdated commands, ambiguous rules, and conventions it's been correcting silently without being asked. It takes about five minutes and consistently pays for itself with the next few sessions.`,
                    },
                    {
                      q: 'Does CLAUDE.md use up tokens?',
                      a: `Yes — CLAUDE.md is injected into your context window every session. A 5,000-token CLAUDE.md costs 5,000 input tokens per session. However, a well-written CLAUDE.md typically replaces 10–15 setup messages per session, which would cost significantly more. The net effect for most developers is a substantial token saving — particularly if you have multiple sessions per day. Keep it lean (under 5,000 tokens) and it easily pays for itself.`,
                    },
                    {
                      q: 'What if Claude keeps ignoring my CLAUDE.md rules?',
                      a: `The most common cause is a file that's too long. When CLAUDE.md exceeds 200 lines, Claude begins deprioritizing rules as the context window fills. The fix is to prune, not to emphasize — adding bold text or IMPORTANT: prefixes doesn't help if the file is already too long. Remove anything Claude follows by default. Move documentation to docs/. Move workflows to Skills. If the file is a reasonable length and a specific rule is still being ignored, the problem is usually ambiguous phrasing — rewrite it as a direct, unambiguous command.`,
                    },
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-surface-50 transition-colors">
                        <span className="font-semibold text-surface-800 text-sm leading-snug">{faq.q}</span>
                        <span className="text-surface-400 flex-shrink-0 transition-transform group-open:rotate-180 text-lg">
                          ↓
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-surface-600 leading-relaxed text-sm border-t border-surface-100 pt-4">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* ── Related Guides ── */}
              <section>
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedGuides.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      className="bg-surface-50 border border-surface-200 rounded-xl p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{g.icon}</span>
                        <div>
                          <p className="font-semibold text-surface-800 text-sm group-hover:text-brand-700 transition-colors">
                            {g.label}
                          </p>
                          <p className="text-xs text-surface-500 mt-0.5 leading-snug">{g.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* ── Author Footer ── */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
                <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <div>
                  <Link
                    href="/about/garry"
                    className="text-sm font-semibold text-surface-800 hover:text-brand-600"
                  >
                    Garry
                  </Link>
                  <div className="text-xs text-surface-400">
                    Developer & Founder, ToolStackHub · Using Claude Code daily since launch
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}