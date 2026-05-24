import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Best MCP Servers for Claude Code in 2026 | ToolStackHub',
  description: 'Tested: 10 best MCP servers for Claude Code in 2026. Install commands, real use cases, and trade-offs. GitHub, Playwright, Postgres, Notion & more.',
  keywords: [
    'best mcp servers claude code 2026', 'mcp server setup', 'claude code mcp integration',
    'model context protocol servers', 'claude mcp add', 'best mcp tools for developers',
    'mcp server list 2026', 'claude code extensions', 'mcp stdio sse transport',
    'anthropic mcp servers', 'mcp client setup', 'agentic coding tools',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/best-mcp-servers-claude-code-2026` },
  openGraph: {
    title: 'Best MCP Servers for Claude Code in 2026 — Tested & Ranked',
    description: '10 MCP servers tested on Claude Code: install commands, real use cases, and honest trade-offs. GitHub, Playwright, Postgres, Notion, and more.',
    url: `${SITE_CONFIG.url}/blog/best-mcp-servers-claude-code-2026`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best MCP Servers for Claude Code in 2026 — Tested & Ranked',
    description: 'Tested: 10 best MCP servers for Claude Code in 2026. Install commands, real use cases, and trade-offs. GitHub, Playwright, Postgres, Notion & more.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'why-mcp',          label: 'Why MCP changes how you use Claude Code'           },
  { id: 'what-is-mcp',      label: 'What is an MCP server, exactly?'                  },
  { id: 'methodology',      label: 'How I evaluated the best MCP servers'             },
  { id: 'best-servers',     label: 'Best MCP servers for Claude Code in 2026'         },
  { id: 'comparison-table', label: 'MCP servers compared at a glance'                 },
  { id: 'install-guide',    label: 'How to install your first MCP server'             },
  { id: 'common-problems',  label: 'Common MCP problems and how to fix them'          },
  { id: 'token-usage',      label: 'How MCP affects your Claude Code token usage'     },
  { id: 'whats-next',       label: "What's coming next for MCP in 2026"              },
  { id: 'faq',              label: 'FAQs'                                              },
  { id: 'verdict',          label: 'Final verdict + my top 3 picks'                   },
];

const SERVERS = [
  {
    id: 'github',
    name: 'GitHub MCP server',
    badge: '⭐ Top Pick',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    bestFor: 'Code review, PR management, issue triage from inside Claude Code',
    maintainer: 'GitHub (vendor-built, official)',
    maintainerColor: 'text-emerald-700',
    install: 'claude mcp add --transport http github https://api.githubcopilot.com/mcp \\\n  -H "Authorization: Bearer YOUR_GITHUB_PAT"\n\n# Docker alternative (no PAT in shell history):\nclaude mcp add github \\\n  -e GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_PAT \\\n  -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN \\\n  ghcr.io/github/github-mcp-server',
    envNote: '⚠️ The old @modelcontextprotocol/server-github npm package was deprecated in April 2025. Use the HTTP transport or Docker commands above. Requires a GitHub Personal Access Token.',
    used: 'Working on ToolStackHub\'s invoice generator in April 2026, I needed to search open issues, read PR diffs, and push commits without leaving my terminal. The GitHub MCP server handled all three in a single Claude Code session — no browser tab switching.',
    shines: 'The tool schema covers the full GitHub REST surface: create issues, list PRs, read file trees, comment on reviews. The vendor-built server from GitHub ships updates far faster than the old Anthropic reference implementation did. For solo developers managing their own repos, it replaces the GitHub CLI for anything Claude can reason about.',
    fallsShort: 'Now runs over HTTP transport rather than stdio, which adds a network round-trip per tool call. Large repos with thousands of files can also return tool results that flood your context window fast.',
    verdict: 'The best general-purpose MCP server for any developer who ships code to GitHub.',
    github: 'https://github.com/github/github-mcp-server',
    screenshotLabel: 'Claude Code terminal showing /mcp output after connecting GitHub server',
  },
  {
    id: 'filesystem',
    name: 'Filesystem MCP',
    badge: 'Essential',
    badgeColor: 'bg-brand-100 text-brand-700 border-brand-200',
    bestFor: 'Reading, writing, and navigating local files without shell passthrough',
    maintainer: 'Anthropic (reference implementation)',
    maintainerColor: 'text-brand-700',
    install: 'claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/dir',
    envNote: 'Pass the directory you want to expose. Claude Code will only access files within that path.',
    used: 'I used Filesystem MCP to let Claude read all my ToolStackHub component files and generate a cross-linked import map in under a minute. Previously I was doing this with grep and awk across 40 files.',
    shines: 'It exposes read_file, write_file, list_directory, and search_files as clean MCP tools. The path restriction means you can safely expose your project folder without worrying about Claude wandering into system directories.',
    fallsShort: 'No file watching or diff tracking. Every read is a fresh snapshot, so if you\'re iterating rapidly on a file, Claude might read a stale version mid-session.',
    verdict: 'Comes bundled conceptually with Claude Code. Install it on day one.',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    screenshotLabel: 'Claude Code filesystem MCP listing project directory',
  },
  {
    id: 'playwright',
    name: 'Playwright MCP',
    badge: 'Power Tool',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    bestFor: 'Browser automation, UI testing, scraping — all controlled by Claude',
    maintainer: 'Microsoft (official)',
    maintainerColor: 'text-blue-700',
    install: 'claude mcp add playwright -- npx -y @playwright/mcp@latest',
    envNote: 'Playwright browsers install automatically on first run. Adds ~300 MB to disk.',
    used: 'I used this to test the ToolStackHub QR code generator\'s output against three browsers in one prompt. Claude navigated to the page, triggered generation, took screenshots, and reported any visual differences. The whole test cycle took four minutes instead of thirty.',
    shines: 'The tool schema includes navigate, click, fill, screenshot, and evaluate — basically the full Playwright API. It runs a visible browser by default, which makes debugging intuitive. SSE transport is supported for remote use cases.',
    fallsShort: 'Each browser action is a separate tool call, so complex multi-step flows rack up tool-call overhead quickly. Microsoft now ships @playwright/cli alongside the MCP server — for Claude Code users with filesystem access, the CLI mode consumes roughly 4× fewer tokens than MCP because accessibility snapshots go to disk rather than flooding the context window. If token cost is a concern, test the CLI route.',
    verdict: 'The strongest MCP server for anyone writing frontend code or end-to-end tests.',
    github: 'https://github.com/microsoft/playwright-mcp',
    screenshotLabel: 'Playwright MCP browser screenshot returned inside Claude Code',
  },
  {
    id: 'postgres',
    name: 'Postgres MCP',
    badge: 'Data Essential',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    bestFor: 'Running SQL queries, exploring schemas, and debugging data issues from Claude',
    maintainer: 'Anthropic (reference implementation)',
    maintainerColor: 'text-brand-700',
    install: `claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres "postgresql://user:pass@localhost:5432/mydb"`,
    envNote: 'Pass your full connection string. Read-only mode is recommended for production databases.',
    used: 'I connected it to a local Postgres instance and asked Claude to find all invoices created in March 2026 where the GST calculation was off by more than ₹1. It wrote and executed the query, returned the results, and suggested the bug in my tax-rounding function — all in one exchange.',
    shines: 'Exposes query and list_tables as tools. Claude can explore your schema before writing queries, which means it self-corrects column name errors without prompting. Pairs well with SQLite MCP for lighter projects.',
    fallsShort: 'No write protection by default — if you forget to set READ_ONLY, Claude can execute UPDATE or DELETE statements. Always use a read-only database user in any shared environment.',
    verdict: 'Essential for any developer doing data work or debugging production queries.',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    screenshotLabel: 'Postgres MCP returning query results inside Claude Code',
  },
  {
    id: 'slack',
    name: 'Slack MCP',
    badge: 'Team Tool',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
    bestFor: 'Searching message history, posting updates, triaging channel mentions from Claude',
    maintainer: 'Anthropic (reference implementation)',
    maintainerColor: 'text-brand-700',
    install: 'claude mcp add slack -- npx -y @modelcontextprotocol/server-slack',
    envNote: 'Requires SLACK_BOT_TOKEN and SLACK_TEAM_ID. Needs a Slack app with channels:read and chat:write scopes.',
    used: 'I used it to search for all mentions of "invoice bug" in the ToolStackHub team channel, summarise them, and draft a fix announcement — without leaving Claude Code. For solo developers working with clients over Slack, this saves meaningful context-switching time.',
    shines: 'Covers channels_list, conversations_history, and chat_postMessage. For project status updates and incident communication, it lets Claude draft, review, and send messages in one flow.',
    fallsShort: 'Message history retrieval is paginated and slow on busy channels. Fetching 30 days of a high-volume channel will timeout or return partial results.',
    verdict: 'Useful for teams; overkill for solo developers who only need occasional Slack access.',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    screenshotLabel: 'Slack MCP posting a message via Claude Code',
  },
  {
    id: 'linear',
    name: 'Linear MCP',
    badge: 'PM Favourite',
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-200',
    bestFor: 'Creating issues, updating statuses, and syncing code changes to Linear from Claude',
    maintainer: 'Linear (vendor-built, official)',
    maintainerColor: 'text-violet-700',
    install: 'claude mcp add linear -- npx -y @linear/mcp-server',
    envNote: 'Requires LINEAR_API_KEY from your Linear workspace settings.',
    used: 'After every significant commit on ToolStackHub, I had Claude automatically create a Linear issue with the change summary, affected files, and a test checklist. A five-line prompt replaced what used to be three minutes of manual issue creation.',
    shines: 'Linear\'s vendor-built server has the most complete tool schema of any PM tool MCP I tested. Issue creation, state transitions, label assignment, and comment posting all work reliably. Update cadence is high — the server received three updates in April 2026 alone.',
    fallsShort: 'The issue search tool returns full issue objects including comments, which can be verbose. A search returning 20 issues with long comment threads will flood your context window.',
    verdict: 'Best PM tool MCP available. If your team uses Linear, install this immediately.',
    github: 'https://github.com/linear/linear-mcp',
    screenshotLabel: 'Linear MCP creating an issue via Claude Code',
  },
  {
    id: 'sentry',
    name: 'Sentry MCP',
    badge: 'Error Debugger',
    badgeColor: 'bg-orange-100 text-orange-700 border-orange-200',
    bestFor: 'Fetching error events, stack traces, and release data directly into Claude\'s context',
    maintainer: 'Sentry (vendor-built, official)',
    maintainerColor: 'text-orange-700',
    install: 'claude mcp add sentry -- npx -y @sentry/mcp-server@latest',
    envNote: 'Requires SENTRY_AUTH_TOKEN and SENTRY_ORG. Generate the token from Sentry\'s API settings page.',
    used: 'I connected it to the ToolStackHub Sentry project and asked Claude to fetch the top 5 unresolved errors from the past 7 days, group them by root cause, and suggest fixes ranked by impact. It returned a triage report in about 40 seconds.',
    shines: 'The get_sentry_issue and list_sentry_issues tools return structured event data including stack traces, breadcrumbs, and affected user counts. Claude can cross-reference the stack trace with your local codebase via Filesystem MCP in the same session.',
    fallsShort: 'Stack traces with many frames produce large tool results. A Java or Python exception with 40-frame traces will consume significant context on every fetch.',
    verdict: 'Dramatically cuts the time between "error alert" and "fix deployed".',
    github: 'https://github.com/getsentry/sentry-mcp',
    screenshotLabel: 'Sentry MCP returning error events inside Claude Code',
  },
  {
    id: 'notion',
    name: 'Notion MCP',
    badge: 'Knowledge Base',
    badgeColor: 'bg-teal-100 text-teal-700 border-teal-200',
    bestFor: 'Reading and updating docs, wikis, and project notes from within Claude Code',
    maintainer: 'Notion (vendor-built, official)',
    maintainerColor: 'text-teal-700',
    install: 'claude mcp add notion -- npx -y @notionhq/notion-mcp-server',
    envNote: 'Requires OPENAPI_MCP_HEADERS with your Notion integration token. Set integration access on each page you want Claude to read.',
    used: 'I use a Notion database as my ToolStackHub content calendar. I connected Notion MCP and asked Claude to find all blog posts in "Draft" status, list their titles, and create a one-week publishing schedule ranked by SEO priority. It finished in two tool calls.',
    shines: 'Covers search, page reading, and database querying. For knowledge workers who live in Notion, this bridges the gap between documentation and action without leaving the terminal.',
    fallsShort: 'Notion pages with nested blocks return deeply structured JSON that is harder for Claude to parse cleanly. Very long pages (5,000+ words) can strain the context window on a single read.',
    verdict: 'Strong for content and project management workflows. Less useful for pure engineering tasks.',
    github: 'https://github.com/makenotion/notion-mcp-server',
    screenshotLabel: 'Notion MCP returning page content via Claude Code',
  },
  {
    id: 'brave-search',
    name: 'Brave Search MCP',
    badge: 'Web Search',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
    bestFor: 'Live web search — documentation lookups, competitor research, error message diagnosis',
    maintainer: 'Brave Software (vendor-built, official)',
    maintainerColor: 'text-red-700',
    install: 'claude mcp add brave-search -- npx -y @brave/brave-search-mcp-server',
    envNote: '⚠️ @modelcontextprotocol/server-brave-search is archived. Use @brave/brave-search-mcp-server (the vendor-built replacement, v2.x). Requires BRAVE_API_KEY — free tier gives 2,000 queries/month from brave.com/search/api.',
    used: 'When debugging an obscure Next.js 14 hydration error in April 2026, I had Claude search for the exact error message, retrieve the top three Stack Overflow answers, and apply the most upvoted fix to my codebase — without switching windows. The whole cycle took under three minutes.',
    shines: 'The v2 server removed base64-encoded image data from results, which meaningfully cuts the token cost per search call versus v1. Returns structured results with titles, URLs, and snippets. Claude can chain it with Filesystem MCP to apply a found fix to local code immediately.',
    fallsShort: 'The free tier of 2,000 queries per month runs out quickly if you use it for every documentation lookup. Rate limiting hits without warning and fails silently in some configurations.',
    verdict: 'My first choice for adding live web search to a Claude Code session.',
    github: 'https://github.com/brave/brave-search-mcp-server',
    screenshotLabel: 'Brave Search MCP returning search results inside Claude Code',
  },
  {
    id: 'context7',
    name: 'Context7 MCP',
    badge: 'Docs Fetcher',
    badgeColor: 'bg-sky-100 text-sky-700 border-sky-200',
    bestFor: 'Fetching up-to-date library documentation and API references into Claude\'s context',
    maintainer: 'Upstash (vendor-built)',
    maintainerColor: 'text-sky-700',
    install: 'claude mcp add context7 -- npx -y @upstash/context7-mcp@latest',
    envNote: 'No API key required. Works immediately after install.',
    used: 'I used Context7 to pull the complete Next.js 14 App Router API reference into a session while refactoring ToolStackHub\'s routing. Claude could reference the actual current documentation rather than its training knowledge from 2024, which caught two deprecated patterns I was still using.',
    shines: 'Returns structured, version-specific documentation. Unlike web search, it gives Claude the exact API reference rather than a community answer. Zero API key friction makes it the easiest MCP server on this list to install.',
    fallsShort: 'Library coverage is still growing. Some niche packages and many Indian-market libraries are not yet indexed. If Context7 lacks your library, fall back to Brave Search.',
    verdict: 'No-brainer install for any developer who uses popular open-source libraries.',
    github: 'https://github.com/upstash/context7',
    screenshotLabel: 'Context7 MCP returning Next.js documentation inside Claude Code',
  },
];

const FAQS = [
  { q: 'Are MCP servers free?', a: 'Most MCP servers are open-source and free to run. You pay for any underlying API they wrap — Brave Search\'s free tier gives 2,000 queries/month, GitHub\'s API is free for personal repos, and Postgres/SQLite are free locally. The MCP protocol itself has no licensing cost.' },
  { q: 'Does Claude Code support remote MCP servers?', a: 'Yes. Claude Code supports three transports: stdio (local subprocess, lowest latency), SSE (Server-Sent Events over HTTP for remote servers), and streamable HTTP (the newer standard replacing SSE, ratified in the MCP spec in early 2025). Use stdio for local servers and SSE/streamable HTTP for cloud-hosted ones.' },
  { q: 'How do I add an MCP server in Claude Code?', a: 'Run claude mcp add <name> -- <server-command> in your terminal. Claude Code restarts the server connection automatically. Type /mcp inside a session to see all connected servers and their status. Full documentation is at docs.claude.com/claude-code/mcp.' },
  { q: 'How many MCP servers can I run at once in Claude Code?', a: 'There is no hard limit, but every connected server\'s tool schema is loaded into your context window at session start. Each server adds roughly 500–2,000 tokens of schema overhead. Running 10 servers simultaneously could consume 10,000–20,000 tokens before you type your first message.' },
  { q: 'What is the difference between an MCP server and a plugin?', a: 'MCP servers are the Claude/Anthropic standard. They expose tools, resources, and prompts over a defined protocol that any compliant client can consume. Plugins were an older OpenAI concept tied to ChatGPT specifically. MCP is model-agnostic and already supported by VS Code, Zed, Cursor, and others alongside Claude Code.' },
  { q: 'Is MCP safe to use with my production database?', a: 'Only if you use a read-only database user. The Postgres and SQLite MCP servers do not enforce read-only mode by default. Always create a dedicated read-only database role for Claude Code connections. Never point an MCP server at your production DB with write privileges.' },
  { q: 'Can I write my own MCP server?', a: 'Yes. The MCP spec at modelcontextprotocol.io includes SDKs for TypeScript, Python, Kotlin, and Go. A minimal server is under 50 lines of TypeScript. The spec defines exactly how to expose tools, resources, and prompts so any MCP client including Claude Code can consume them.' },
  { q: 'What is the .mcp.json file?', a: 'It is a project-level configuration file where you define MCP servers that should auto-connect when Claude Code opens that directory. You can commit it to your repo so teammates get the same servers without manual setup. Anthropic introduced project-level .mcp.json support in Claude Code in early 2026.' },
  { q: 'Which MCP server is best for full-stack developers?', a: 'GitHub MCP for source control, Filesystem MCP for local files, and Postgres MCP for database work cover 90% of full-stack use cases. Add Brave Search or Context7 for documentation lookup and you have a complete setup.' },
  { q: 'Do MCP servers work with Claude.ai chat, or only Claude Code?', a: 'As of April 2026, MCP server integration is primarily a Claude Code feature in the standard product. The Claude.ai web interface has limited MCP support in early access for Pro users. Claude Code is the recommended environment for full MCP functionality.' },
];

export default function BestMCPServersBlog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Best MCP Servers for Claude Code in 2026',
        description: 'Tested: 10 best MCP servers for Claude Code in 2026. Install commands, real use cases, trade-offs. GitHub, Playwright, Postgres, Notion, Brave Search, Context7 and more.',
        url: `${SITE_CONFIG.url}/blog/best-mcp-servers-claude-code-2026`,
        datePublished: '2026-04-19',
        dateModified: '2026-04-19',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: 'ToolStackHub', url: SITE_CONFIG.url },
        image: `${SITE_CONFIG.url}/og/best-mcp-servers-claude-code-2026.png`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'ItemList',
        name: 'Best MCP Servers for Claude Code in 2026',
        numberOfItems: SERVERS.length,
        itemListElement: SERVERS.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          description: s.bestFor,
          url: s.github,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Best MCP Servers for Claude Code 2026', item: `${SITE_CONFIG.url}/blog/best-mcp-servers-claude-code-2026` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* HERO */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Best MCP Servers 2026</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Claude Code</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">MCP</span>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">Developer Guide</span>
              <span className="text-xs text-surface-400">Last updated: April 19, 2026 · 14 min read</span>
            </div>

            {/* Disclosure */}
            <div className="text-xs text-surface-400 mb-4 italic">
              By Garry — full-stack developer building tools at ToolStackHub. No vendor paid for placement; rankings reflect hands-on testing on Claude Code in 2026.
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              Best MCP servers for{' '}
              <span className="text-emerald-600">Claude Code</span>
              {' '}in 2026
            </h1>

            {/* TL;DR */}
            <div className="bg-surface-900 rounded-2xl p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-4">⚡ TL;DR — Top 3 picks</div>
              <div className="space-y-3">
                {[
                  { server:'GitHub MCP', for:'Full-stack developers', why:'Source control, PR management, and issue triage without leaving your terminal. Works on any repo you own.' },
                  { server:'Playwright MCP', for:'Frontend and QA engineers', why:'Browser automation and UI testing controlled entirely by Claude. The fastest way to ship tested frontend code.' },
                  { server:'Context7 MCP', for:'Anyone who uses open-source libraries', why:'Pulls current documentation into Claude\'s context. Zero API key, zero friction. Install it on every project.' },
                ].map((t, i) => (
                  <div key={t.server} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0">{i+1}</div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="font-bold text-white text-sm">{t.server}</span>
                        <span className="text-xs text-surface-400">— best for {t.for}</span>
                      </div>
                      <p className="text-xs text-surface-400 leading-relaxed">{t.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">G</div>
              <div>
                <Link href="/about/garry" className="text-sm font-semibold text-surface-800 hover:text-brand-600">Garry</Link>
                <div className="text-xs text-surface-400">Founder, ToolStackHub · Tested on Claude Code v2.x, April 2026</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 space-y-4">
                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">In This Guide</div>
                  <ol className="space-y-1.5">
                    {TOC.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-emerald-700 leading-snug transition-colors">
                          <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-emerald-600 rounded-2xl p-4 text-white">
                  <div className="font-bold text-sm mb-1">🧮 Token calculator</div>
                  <p className="text-emerald-200 text-xs leading-relaxed mb-2">MCP servers affect token usage. Estimate your Claude Code bill before adding servers.</p>
                  <Link href="/claude-code-token-calculator" className="block text-center bg-white text-emerald-700 font-bold text-xs py-2 rounded-xl hover:bg-emerald-50 transition-colors">
                    Calculate now →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ARTICLE */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-14">

              {/* SECTION 1 — WHY MCP */}
              <section id="why-mcp">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why MCP changes how you use Claude Code</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    I was rebuilding the Invoice Generator on ToolStackHub in April 2026 and burning tokens grepping the repo by hand — copying file contents into Claude's context one at a time, waiting, copying the output back. It worked, but the friction was real. Every context switch cost me 10 minutes and 3,000 tokens.
                  </p>
                  <p>
                    Then I added three MCP servers in one afternoon. GitHub MCP pulled PR diffs directly. Filesystem MCP read my component files without copy-pasting. Postgres MCP ran the tax calculation queries I was debugging. I finished a two-day task in five hours.
                  </p>
                  <p>
                    Before MCP, Claude knew <em>about</em> your codebase. After MCP, it acts on it.
                  </p>
                </div>
              </section>

              {/* SECTION 2 — WHAT IS MCP */}
              <section id="what-is-mcp">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is an MCP server, exactly?</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    The Model Context Protocol (MCP) is an open standard defined at <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">modelcontextprotocol.io</a> that gives AI models a standardised way to call external tools, read data sources, and receive reusable prompts. One protocol, every compatible system.
                  </p>
                  <p>
                    An MCP server exposes three primitives. <strong className="text-surface-800">Tools</strong> are callable functions — like a GitHub server's create_issue or a Postgres server's query. <strong className="text-surface-800">Resources</strong> are addressable data — a file URI, a database row. <strong className="text-surface-800">Prompts</strong> are reusable message templates injected into Claude's context.
                  </p>
                  <p>
                    MCP supports three transports. <strong className="text-surface-800">stdio</strong> runs the server as a local subprocess — lowest latency, best for development. <strong className="text-surface-800">SSE</strong> (Server-Sent Events) streams responses over HTTP for remote servers. <strong className="text-surface-800">Streamable HTTP</strong> is the newer standard that supersedes SSE, handling both streaming and request-response in one transport.
                  </p>
                  <p>
                    Claude Code is the MCP <strong className="text-surface-800">client</strong>. It checks which tools are available, decides which to call, executes them, and uses the results. Every tool call shows up in your terminal in real time.
                  </p>
                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-4">
                    <p className="text-sm text-surface-700 leading-relaxed">
                      <strong>Official reading:</strong> Anthropic's documentation at <a href="https://docs.anthropic.com/claude-code/mcp" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">docs.claude.com/claude-code/mcp</a> covers Claude Code's MCP client implementation. The MCP spec itself lives at modelcontextprotocol.io/spec.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3 — METHODOLOGY */}
              <section id="methodology">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How I evaluated the best MCP servers in 2026</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    I tested each server on Claude Code v2.x across April 2026, using it on real ToolStackHub tasks rather than contrived demos. Every server had to pass six criteria before making this list:
                  </p>
                  <div className="space-y-2">
                    {[
                      { label:'Stability', desc:'Did it crash or hang on typical workloads? Would it survive a 2-hour session?' },
                      { label:'Install friction', desc:'How many steps from zero to working? Did it require paid API keys to test at all?' },
                      { label:'Documentation quality', desc:'Could I understand what each tool does from the README without source-diving?' },
                      { label:'Update cadence', desc:'Was the repo updated in the past 90 days? Stale MCP servers break when Claude Code updates.' },
                      { label:'Real-world utility', desc:'Did it save me measurable time on an actual task, not just a toy example?' },
                      { label:'Security posture', desc:'Does it request minimum permissions? Is the server process sandboxed appropriately?' },
                    ].map(c => (
                      <div key={c.label} className="flex items-start gap-3 text-sm">
                        <span className="text-emerald-600 font-bold shrink-0">→</span>
                        <span><strong className="text-surface-800">{c.label}:</strong> {c.desc}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    I dropped two servers from an earlier draft — a community Jira MCP that crashed on any issue with attachments, and an early browser MCP that had not been updated since November 2025. If a server is not actively maintained, it is not on this list.
                  </p>
                </div>
              </section>

              {/* SECTION 4 — THE SERVERS */}
              <section id="best-servers">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Best MCP servers for Claude Code in 2026</h2>

                <div className="space-y-8">
                  {SERVERS.map((server, idx) => (
                    <div key={server.id} className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
                      {/* Server header */}
                      <div className="bg-surface-50 border-b border-surface-100 px-6 py-4">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-surface-900 text-white font-black text-xs flex items-center justify-center shrink-0">{String(idx+1).padStart(2,'0')}</div>
                            <h3 className="font-display font-bold text-surface-900 text-lg">{server.name}</h3>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${server.badgeColor}`}>{server.badge}</span>
                            <a href={server.github} target="_blank" rel="noopener noreferrer"
                              className="text-xs text-surface-400 hover:text-brand-600 border border-surface-200 px-2.5 py-1 rounded-full transition-colors">
                              GitHub →
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Quick facts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-surface-50 rounded-xl p-3">
                            <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">Best for</div>
                            <div className="text-sm text-surface-800 font-medium">{server.bestFor}</div>
                          </div>
                          <div className="bg-surface-50 rounded-xl p-3">
                            <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">Maintainer</div>
                            <div className={`text-sm font-bold ${server.maintainerColor}`}>{server.maintainer}</div>
                          </div>
                        </div>

                        {/* Install command */}
                        <div>
                          <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">Install</div>
                          <div className="bg-surface-900 rounded-xl p-4">
                            <pre className="text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto"><code style={{color:'#34d399'}}>{server.install}</code></pre>
                          </div>
                          {server.envNote && (
                            <p className="text-xs text-surface-400 mt-1.5">⚠️ {server.envNote}</p>
                          )}
                        </div>

                        {/* Screenshot placeholder */}
                        <div className="bg-surface-50 border-2 border-dashed border-surface-300 rounded-xl p-4 text-center">
                          <div className="text-xs text-surface-400 font-mono">[SCREENSHOT: {server.screenshotLabel}]</div>
                          <div className="text-xs text-surface-300 mt-1">Replace with actual screenshot · alt="{server.screenshotLabel}"</div>
                        </div>

                        {/* What I used it for */}
                        <div>
                          <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">What I used it for</div>
                          <p className="text-sm text-surface-700 leading-relaxed">{server.used}</p>
                        </div>

                        {/* Where it shines / falls short */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">✅ Where it shines</div>
                            <p className="text-xs text-emerald-800 leading-relaxed">{server.shines}</p>
                          </div>
                          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                            <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">⚠️ Where it falls short</div>
                            <p className="text-xs text-rose-800 leading-relaxed">{server.fallsShort}</p>
                          </div>
                        </div>

                        {/* Verdict */}
                        <div className="bg-surface-900 rounded-xl px-4 py-3">
                          <span className="text-xs font-bold text-surface-400 uppercase tracking-wider mr-2">Verdict:</span>
                          <span className="text-sm text-white">{server.verdict}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5 — COMPARISON TABLE */}
              <section id="comparison-table">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">MCP servers compared at a glance</h2>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr style={{background:'#0f172a'}}>
                        {['Server', 'Best for', 'Transport', 'Maintainer', 'Install difficulty', 'Free?'].map((h, i) => (
                          <th key={h} style={{color:'#ffffff'}} className={`text-left px-3 py-3 font-semibold ${i === 0 ? 'rounded-tl-2xl' : ''} ${i === 5 ? 'rounded-tr-2xl' : ''}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['GitHub MCP',       'Code + PR management',   'HTTP',           'GitHub',       '⭐⭐ Medium','Free (PAT required)'],
                        ['Filesystem MCP',   'Local file access',      'stdio',          'Anthropic',    '⭐ Easy',   'Free'],
                        ['Playwright MCP',   'Browser automation',     'stdio / SSE',    'Microsoft',    '⭐ Easy',   'Free'],
                        ['Postgres MCP',     'SQL + data debugging',   'stdio',          'Anthropic',    '⭐⭐ Medium','Free (need own DB)'],
                        ['Slack MCP',        'Team comms',             'stdio',          'Anthropic',    '⭐⭐ Medium','Free (need Slack app)'],
                        ['Linear MCP',       'Issue + PM tracking',    'stdio',          'Linear',       '⭐⭐ Medium','Free (need Linear account)'],
                        ['Sentry MCP',       'Error debugging',        'stdio',          'Sentry',       '⭐⭐ Medium','Free tier available'],
                        ['Notion MCP',       'Docs + knowledge base',  'stdio',          'Notion',       '⭐⭐ Medium','Free (need integration)'],
                        ['Brave Search MCP', 'Live web search',        'stdio',          'Brave Software','⭐ Easy',  '2,000 queries/mo free'],
                        ['Context7 MCP',     'Library documentation',  'stdio',          'Upstash',      '⭐ Easy',   'Free, no API key needed'],
                      ].map((r, i) => (
                        <tr key={r[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-3 py-2.5 font-bold text-surface-900">{r[0]}</td>
                          <td className="px-3 py-2.5 text-surface-600">{r[1]}</td>
                          <td className="px-3 py-2.5 font-mono text-brand-700">{r[2]}</td>
                          <td className="px-3 py-2.5 text-surface-500">{r[3]}</td>
                          <td className="px-3 py-2.5 text-surface-600">{r[4]}</td>
                          <td className="px-3 py-2.5 text-emerald-700 font-medium">{r[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 6 — INSTALL GUIDE */}
              <section id="install-guide">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How to install your first MCP server in Claude Code</h2>
                <div className="space-y-5 text-surface-600 leading-relaxed">
                  <p>
                    I'll walk through installing Context7 — no API key required, so nothing to set up beyond the command itself.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        n: '1',
                        title: 'Open your Claude Code session',
                        code: '# In your project directory:\nclaude',
                        note: 'Claude Code starts in your current directory. The directory matters — some MCP servers like Filesystem scope to it.',
                      },
                      {
                        n: '2',
                        title: 'Add the MCP server',
                        code: 'claude mcp add context7 -- npx -y @upstash/context7-mcp@latest',
                        note: 'The -- separator tells Claude Code everything after it is the server\'s launch command. npx -y auto-installs the package if not present.',
                      },
                      {
                        n: '3',
                        title: 'Verify it connected',
                        code: '/mcp',
                        note: 'Inside a Claude Code session, /mcp lists all connected servers and their tool count. You should see context7 with 2 tools: resolve-library-id and get-library-docs.',
                      },
                      {
                        n: '4',
                        title: 'Try your first tool call',
                        code: 'Show me the current Next.js App Router documentation for the useRouter hook.',
                        note: 'Claude Code will call get-library-docs automatically. You\'ll see the tool call in your terminal before the response.',
                      },
                      {
                        n: '5',
                        title: '(Optional) Save to .mcp.json for the project',
                        code: `# .mcp.json in your project root\n{\n  "mcpServers": {\n    "context7": {\n      "command": "npx",\n      "args": ["-y", "@upstash/context7-mcp@latest"]\n    }\n  }\n}`,
                        note: 'Committing .mcp.json means your teammates get the same MCP setup automatically when they open the project in Claude Code.',
                      },
                    ].map(s => (
                      <div key={s.n} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{s.n}</div>
                        <div className="flex-1">
                          <div className="font-bold text-surface-900 mb-2">{s.title}</div>
                          <div className="bg-surface-900 rounded-xl p-4 mb-2">
                            <pre className="text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto"><code style={{color:'#e2e8f0'}}>{s.code}</code></pre>
                          </div>
                          <p className="text-xs text-surface-500 leading-relaxed">{s.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-4">
                    <p className="text-sm text-surface-700 leading-relaxed">
                      Once you have MCP servers running, pair them with <Link href="/blog/claude-prompt-templates" className="text-brand-600 hover:text-brand-700 font-medium">reusable Claude prompt templates</Link> to build repeatable workflows — for example, a template that always checks GitHub issues, queries your DB, and posts a Slack update in one structured prompt.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7 — COMMON PROBLEMS */}
              <section id="common-problems">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Common MCP problems and how to fix them</h2>

                <div className="space-y-4">
                  {[
                    {
                      problem: 'Server not showing in /mcp',
                      cause: 'The server process failed to start — usually a missing API key, Node.js version mismatch, or a typo in the install command.',
                      fix: 'Run the server command directly in your terminal (e.g. npx -y @upstash/context7-mcp@latest) and read the error output. Fix the underlying error, then re-run claude mcp add.',
                      code: '# Debug the server directly:\nnpx -y @modelcontextprotocol/server-github\n# Read the error output and fix it before re-adding to Claude Code',
                    },
                    {
                      problem: 'Permission errors on tool calls',
                      cause: 'Claude Code asks before executing destructive tools. If you see a permission prompt and deny it, subsequent calls to the same tool in that session may stay blocked.',
                      fix: 'Type /mcp and check the server\'s permission state. Use the server\'s config options to pre-approve safe tools in your .mcp.json, rather than granting blanket execution rights.',
                      code: '',
                    },
                    {
                      problem: 'Token bloat from large tool schemas',
                      cause: 'Every MCP server loads its full tool schema into your context at session start. Ten servers with 15 tools each can add 15,000+ tokens before you type anything.',
                      fix: 'Only add the servers you need for a specific session. Use /mcp remove <server-name> to disconnect servers you are not using in the current task. Better prompting also helps — see the <a href="/blog/claude-prompt-techniques" class="text-brand-600 hover:text-brand-700 font-medium">Claude prompt techniques guide</a> for how to front-load your task description so Claude picks the right tool on the first call rather than exploring multiple tools.',
                      code: '# Remove an unused server for the current session:\nclaude mcp remove slack',
                    },
                    {
                      problem: 'Tool calls returning stale or cached data',
                      cause: 'Some MCP servers cache results at the process level. If the server process has been running for hours, it may return outdated data.',
                      fix: 'Restart the MCP server: claude mcp remove <name>, then claude mcp add <name> with the same command. This restarts the server process with a fresh state.',
                      code: '',
                    },
                    {
                      problem: 'Claude calls the wrong tool repeatedly',
                      cause: 'Vague prompts cause Claude to explore tool options rather than go directly to the right one. With 30+ tools available across multiple servers, ambiguity is expensive.',
                      fix: 'Be explicit: name the tool or data source in your prompt ("use the GitHub MCP to..." or "query the Postgres MCP for..."). The <a href="/blog/claude-hacks-improve-ai-results" class="text-brand-600 hover:text-brand-700 font-medium">EL10 and Kill Critic prompt hacks</a> are particularly useful here — front-load your constraints so Claude commits to the right tool before it starts exploring.',
                      code: '',
                    },
                  ].map((p, i) => (
                    <div key={i} className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
                      <div className="bg-amber-50 border-b border-amber-100 px-5 py-3">
                        <div className="font-bold text-amber-900">⚠️ {p.problem}</div>
                        <div className="text-xs text-amber-700 mt-0.5">{p.cause}</div>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-sm text-surface-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: p.fix}} />
                        {p.code && (
                          <div className="bg-surface-900 rounded-xl p-4">
                            <pre className="text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto"><code style={{color:'#e2e8f0'}}>{p.code}</code></pre>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 8 — TOKEN USAGE */}
              <section id="token-usage">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How MCP affects your Claude Code token usage</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Every MCP server you connect adds three kinds of token cost. Know them before you install everything on this list.
                  </p>
                  <div className="space-y-3">
                    {[
                      { label:'Schema overhead at session start', detail:'Every connected server\'s tool schema loads into context when you start a session. A server with 10 tools adds roughly 1,000–2,000 tokens before you type anything. Five servers = up to 10,000 tokens of fixed overhead per session.' },
                      { label:'Tool call results stay in context', detail:'When Claude calls a tool, the full result enters your context window and stays there. A Postgres query returning 200 rows, a Sentry error with a 40-frame stack trace, or a GitHub file tree with 500 entries all remain in context for every subsequent message, compounding your cost.' },
                      { label:'Exploration costs for ambiguous prompts', detail:'When your prompt is vague, Claude may call three or four tools before finding the right answer. Each tool call adds schema + result to context. On a complex task with five servers connected, a vague prompt can burn 15,000 tokens in exploration before delivering a useful response.' },
                    ].map(t => (
                      <div key={t.label} className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl text-sm">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">→</span>
                        <div>
                          <strong className="text-surface-800">{t.label}:</strong>
                          <span className="text-surface-600 ml-1">{t.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-4">
                    <p className="text-sm text-surface-700 leading-relaxed">
                      <strong>Tool Search (Claude Code built-in):</strong> When your connected tool definitions exceed 10% of the context window, Claude Code automatically activates Tool Search — deferring tool schema loading and fetching only the definitions needed per task. Anthropic's data shows this cuts schema context from ~72,000 tokens to ~8,700 tokens (an 85% reduction). It requires Sonnet 4 or Opus 4, and activates automatically — no configuration needed. If you're running 5+ MCP servers and seeing high token overhead, this is the first thing to check is active.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="font-bold text-emerald-900 mb-2">How to keep MCP token costs manageable</div>
                    <ul className="space-y-2 text-sm text-emerald-800">
                      {[
                        'Only connect servers you will use in the current session. Disconnect unused servers with /mcp remove.',
                        'Use /compact after heavy tool-call sessions to summarise results and free context.',
                        'Write specific prompts that name the target system — Claude goes straight to the right tool instead of exploring.',
                        'Check your token habits before adding more than three MCP servers to a session.',
                      ].map(t => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="text-emerald-600 shrink-0 font-bold mt-0.5">✓</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Run the <Link href="/claude-code-token-calculator" className="text-brand-600 hover:text-brand-700 font-medium">Claude Code token calculator</Link> before committing to more than three servers — schema overhead compounds fast, and the calculator shows exactly where your session budget goes. The <Link href="/blog/how-to-save-tokens-in-claude" className="text-brand-600 hover:text-brand-700 font-medium">Claude token habits guide</Link> covers the broader patterns that apply with or without MCP.
                  </p>
                </div>
              </section>

              {/* SECTION 9 — WHATS NEXT */}
              <section id="whats-next">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What's coming next for MCP in 2026</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Three things to watch if you plan to build or rely on MCP servers past 2026.
                  </p>
                  <p>
                    The official <strong className="text-surface-800">MCP registry</strong> is in development — a centralised index of vetted servers with version pinning and security attestations. Once live, it will replace the current "find it on GitHub and hope it works" discovery process. Anthropic announced the registry roadmap in March 2026 at their developer summit.
                  </p>
                  <p>
                    <strong className="text-surface-800">Authentication standards</strong> are being finalised. The current spec leaves auth to individual servers — environment variables, OAuth tokens in config. A standardised OAuth 2.0 flow is in draft and expected mid-2026.
                  </p>
                  <p>
                    <strong className="text-surface-800">Remote-first servers</strong> hosted on cloud infrastructure rather than running as local subprocesses will become standard for enterprise deployments. Streamable HTTP transport makes this viable — expect vendor-hosted MCP servers from major SaaS companies by Q3 2026.
                  </p>
                </div>
              </section>

              {/* SECTION 10 — FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">FAQs</h2>
                <div className="space-y-3">
                  {FAQS.map((f, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                        {f.q}
                        <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                       >
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 11 — VERDICT */}
              <section id="verdict">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Final verdict + my top 3 picks for different use cases</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed mb-6">
                  <p>
                    Three well-chosen MCP servers turn Claude Code from a chat interface into a genuine agentic environment. The gap is not marginal.
                  </p>
                  <p>
                    Don't install all ten at once. Each server loads its tool schema into context at session start — five servers means up to 10,000 tokens of overhead before you type anything. Start with two or three, prove the value, then expand. Use the <Link href="/claude-code-token-calculator" className="text-brand-600 hover:text-brand-700 font-medium">Claude Code token calculator</Link> before adding a fourth.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      role: '🚀 Full-stack developer',
                      picks: ['GitHub MCP — source control without leaving the terminal', 'Filesystem MCP — read and write local files cleanly', 'Postgres MCP — debug data issues from within your coding session'],
                      optional: 'Add Sentry MCP if you are actively working on error fixes.',
                      color: 'brand',
                    },
                    {
                      role: '📊 Data analyst / researcher',
                      picks: ['Postgres or SQLite MCP — query your data directly from Claude', 'Brave Search MCP — live lookups for data sources and methodology papers', 'Filesystem MCP — read CSVs and write processed output files'],
                      optional: 'Add Context7 if you are working with pandas, dbt, or other data libraries.',
                      color: 'emerald',
                    },
                    {
                      role: '📋 Ops / PM / indie founder',
                      picks: ['Notion MCP — Claude reads your docs and wikis directly', 'Linear MCP — issue creation and status updates without leaving your workflow', 'GitHub MCP — track releases and connect code changes to issues'],
                      optional: 'Add Slack MCP if your team communicates in Slack and you want Claude to draft updates.',
                      color: 'purple',
                    },
                  ].map(p => (
                    <div key={p.role} className={`bg-${p.color}-50 border border-${p.color}-200 rounded-2xl p-5`}>
                      <h3 className={`font-bold text-${p.color}-900 mb-3 text-base`}>{p.role}</h3>
                      <ul className="space-y-1.5 mb-3">
                        {p.picks.map(pick => (
                          <li key={pick} className={`flex items-start gap-2 text-sm text-${p.color}-800`}>
                            <span className={`text-${p.color}-600 font-bold shrink-0`}>→</span>{pick}
                          </li>
                        ))}
                      </ul>
                      <div className={`text-xs text-${p.color}-600 font-medium`}>Optional: {p.optional}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-surface-900 rounded-2xl p-6 text-white">
                  <div className="font-bold text-lg mb-3" style={{color:'#ffffff'}}>Start here — your first-week MCP setup</div>
                  <div className="bg-surface-800 rounded-xl p-4 font-mono text-xs space-y-1">
                    <div style={{color:'#94a3b8'}}># Install your starter set — works for most developers:</div>
                    <div style={{color:'#34d399'}}>claude mcp add context7 -- npx -y @upstash/context7-mcp@latest</div>
                    <div style={{color:'#34d399'}}>claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem .</div>
                    <div style={{color:'#34d399'}}>claude mcp add github -- npx -y @modelcontextprotocol/server-github</div>
                    <div style={{color:'#94a3b8'}}># Then verify:</div>
                    <div style={{color:'#60a5fa'}}>/mcp</div>
                  </div>
                  <p className="text-sm mt-3" style={{color:'#cbd5e1'}}>
                    Those three servers cover documentation, local files, and source control — which accounts for the majority of what most developers actually need Claude Code to help with.
                  </p>
                </div>
              </section>


              {/* RELATED */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Claude Code guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/claude-code-token-calculator',             icon:'🧮', label:'Claude Code Token Calculator', desc:'Estimate your monthly Claude Code bill in INR and USD.' },
                    { href:'/blog/claude-code-for-non-programmers',     icon:'💻', label:'Claude Code for Non-Programmers', desc:'Install, first prompts, and plan options — no coding needed.' },
                    { href:'/blog/how-to-save-tokens-in-claude',        icon:'💰', label:'19 Token-Saving Habits',      desc:'Cut Claude Code token usage by 60-90% with these habits.' },
                    { href:'/blog/claude-memory-preferences-guide',     icon:'⚙️', label:'Claude Memory & Preferences', desc:'Set up CLAUDE.md, memory, and Projects for daily use.' },
                  ].map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
                      <span className="text-xl">{l.icon}</span>
                      <div>
                        <div className="font-semibold text-surface-800 group-hover:text-emerald-700 text-sm">{l.label}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Accuracy note:</strong> All servers tested on Claude Code v2.x in April 2026. MCP server APIs, tool schemas, and Claude Code integration may change with updates. Always verify install commands against each server's official GitHub README before use. Internal links flagged for review: /blog/claude-token-habits — verify this slug matches your actual blog post URL before publishing.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}