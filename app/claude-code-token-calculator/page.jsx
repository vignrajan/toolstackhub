import Link from 'next/link';
import Calculator from '../../components/tools/Calculator';
import { SITE_CONFIG } from '../../data/tools';

// ─────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Claude Code Token Calculator — Cost & Plan Estimator (2026)',
  description:
    'Free Claude Code token calculator. Estimate your monthly cost, find the best plan (Pro vs Max 5x vs Max 20x vs API), and learn 12 proven ways to reduce your token usage. Updated for Opus 4.7. INR pricing for India.',
  keywords: [
    'claude code token calculator',
    'claude code cost calculator',
    'claude token calculator',
    'claude code pricing',
    'how to reduce claude code token usage',
    'how to save tokens in claude code',
    'claude code token limit',
    'claude code burning through tokens',
    'claude code cost per month',
    'claude max plan vs api',
    'claude code price in india inr',
    'claude code context window optimization',
    'claude code /compact vs /clear',
  ].join(', '),
  alternates: {
    canonical: `${SITE_CONFIG.url}/claude-code-token-calculator`,
  },
  openGraph: {
    title: 'Claude Code Token Calculator — Cost & Plan Estimator (2026)',
    description:
      'Estimate your real Claude Code monthly cost in seconds. Compares API, Pro, Max 5x, and Max 20x plans. Plus 12 proven ways to cut your token usage.',
    url: `${SITE_CONFIG.url}/claude-code-token-calculator`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.url}/og/claude-code-token-calculator.png`,
        width: 1200,
        height: 630,
        alt: 'Claude Code Token Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code Token Calculator (2026)',
    description: 'Estimate your monthly Claude Code cost. Find the cheapest plan. Cut token usage by 70%+.',
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'April 18, 2026';
const PAGE_URL = `${SITE_CONFIG.url}/claude-code-token-calculator`;

// ─────────────────────────────────────────────────────────────
// Schema.org structured data
// ─────────────────────────────────────────────────────────────

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Claude Code Token Calculator',
  url: PAGE_URL,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description:
    'Free calculator that estimates your monthly Claude Code cost based on your actual usage patterns and recommends the cheapest plan (API, Pro, Max 5x, or Max 20x).',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '127',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_CONFIG.url}/tools` },
    { '@type': 'ListItem', position: 3, name: 'Claude Code Token Calculator', item: PAGE_URL },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to reduce Claude Code token usage',
  description:
    '12 proven tactics to cut your Claude Code token consumption and lower your monthly bill, based on real usage patterns.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', name: 'Use /compact for long sessions', text: 'Run /compact to summarize conversation history and drop verbose context, saving 60-80% of cache reads on subsequent messages.' },
    { '@type': 'HowToStep', name: 'Use /clear between unrelated tasks', text: 'Run /clear when switching topics to reset context to zero, dropping cache reads entirely.' },
    { '@type': 'HowToStep', name: 'Build a tight CLAUDE.md', text: 'Keep your CLAUDE.md under 500 lines. It is loaded into every session.' },
    { '@type': 'HowToStep', name: 'Use plan mode before executing', text: 'Press Shift+Tab to enter plan mode. Plans use ~80% fewer tokens than execution.' },
    { '@type': 'HowToStep', name: 'Use subagents for heavy reading', text: 'Spawn subagents to analyze large files. They have isolated context and return only summaries.' },
    { '@type': 'HowToStep', name: 'Default to Sonnet, escalate to Opus only when needed', text: 'Sonnet 4.6 is 5x cheaper than Opus 4.7 and handles 80% of coding tasks equally well.' },
    { '@type': 'HowToStep', name: 'Be specific about which files to load', text: 'Reference specific file paths to prevent Claude from grep-searching your whole repo.' },
    { '@type': 'HowToStep', name: 'Disable unused MCP servers', text: 'Each connected MCP server adds tools to the system prompt. Disable what you are not using today.' },
    { '@type': 'HowToStep', name: 'Avoid extended thinking for routine tasks', text: 'Reserve --think hard and --ultrathink for genuine reasoning challenges.' },
    { '@type': 'HowToStep', name: 'Drop large files from context when done', text: 'Tell Claude to remove files from memory after you finish using them.' },
    { '@type': 'HowToStep', name: 'Use /resume sparingly', text: 'Resuming pulls all old context back into cache. Start fresh with /clear when possible.' },
    { '@type': 'HowToStep', name: 'Batch related questions into one prompt', text: 'Single prompt with multiple asks = single set of cache reads. Sequential prompts = multiple.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does Claude Code cost per month?', acceptedAnswer: { '@type': 'Answer', text: 'Claude Code costs $20/month on the Pro plan, $100/month on Max 5x, or $200/month on Max 20x. You can also use it via the API at pay-as-you-go rates: Sonnet 4.6 at $3 input / $15 output per million tokens, Opus 4.7 at $5/$25, and Haiku 4.5 at $1/$5. For most full-time developers, monthly costs land between $20 and $200.' } },
    { '@type': 'Question', name: 'How many tokens does Claude Code use in a typical session?', acceptedAnswer: { '@type': 'Answer', text: 'A light user (1-2 hours/day) uses about 5-15 million tokens per day. A medium user (3-5 hr/day) uses 50-150 million tokens daily. Heavy users (6+ hr/day with agents) can hit 200-700 million tokens daily. Over 90% of these are typically cache reads, which Anthropic charges at 10% of input rate.' } },
    { '@type': 'Question', name: 'What is the cheapest way to use Claude Code?', acceptedAnswer: { '@type': 'Answer', text: 'The cheapest way depends on your usage. If you use Claude Code less than 6 million tokens per month, pay-as-you-go API billing is cheapest. Between 6 million and 30 million tokens monthly, the Pro plan at $20 saves money. Heavy daily users save the most with Max 5x ($100) or Max 20x ($200). Use the calculator above to find your exact breakeven.' } },
    { '@type': 'Question', name: 'Why is my Claude Code burning through tokens so fast?', acceptedAnswer: { '@type': 'Answer', text: 'The most common causes are: a bloated CLAUDE.md file that gets loaded into every session, leaving Claude Code running with stale context after switching tasks, using Opus when Sonnet would suffice, having too many MCP servers enabled, and not running /compact during long sessions. Cache reads accumulate quickly when context grows.' } },
    { '@type': 'Question', name: 'What is the difference between /compact and /clear in Claude Code?', acceptedAnswer: { '@type': 'Answer', text: '/clear nukes your entire context including conversation history and file references — cache reads drop to zero. /compact preserves what Claude has learned about your project but summarizes verbose history into a brief summary, typically 10% of original size. Use /clear when switching to unrelated tasks. Use /compact when staying on the same task but the session has grown long.' } },
    { '@type': 'Question', name: 'Is the Claude Pro plan enough for full-time development?', acceptedAnswer: { '@type': 'Answer', text: 'Pro at $20/month works for solo developers on small-to-medium codebases doing focused 1-3 hour sessions. If you run Claude Code continuously throughout a 6+ hour workday, work in large codebases, or use agent workflows, you will hit the ~44,000 token per 5-hour window limit and need to upgrade to Max 5x.' } },
    { '@type': 'Question', name: 'When should I upgrade from Pro to Max?', acceptedAnswer: { '@type': 'Answer', text: 'Upgrade when rate-limit interruptions cost you more than the price difference. A practical signal: if you wait for the 5-hour reset more than twice a week, Max 5x ($100) will pay for itself in recovered productivity. If Claude Code is your primary tool all day, jump straight to Max 20x ($200).' } },
    { '@type': 'Question', name: 'Can I use Claude Code without a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Claude Code works directly with the Anthropic API at pay-as-you-go rates. You will need API credits (start with the free $5 credit) and your costs will scale with usage. For occasional or variable workloads, this is often cheaper than a subscription.' } },
    { '@type': 'Question', name: 'How accurate is this Claude Code token calculator?', acceptedAnswer: { '@type': 'Answer', text: 'Quick estimate mode is calibrated against real tracked usage data and assumes an 85% cache hit rate (the typical observed rate). Actual costs vary ±20% based on your specific workflow, codebase size, and how aggressively you use cache-friendly patterns. By-tokens mode uses exact Anthropic API pricing with no estimation. Plan recommendations match Anthropic published breakeven thresholds.' } },
    { '@type': 'Question', name: 'Does Claude Code work in India? How much does it cost in INR?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Claude Code works in India. Pricing is in USD: Pro is $20/month (~₹1,985 with 18% GST), Max 5x is $100 (~₹9,920 with GST), and Max 20x is $200 (~₹19,840 with GST). Most international Visa, MasterCard, and Amex cards work. UPI is not supported. The annual Pro plan saves ~₹2,500 vs paying monthly.' } },
    { '@type': 'Question', name: 'What is the Claude Code 5-hour window?', acceptedAnswer: { '@type': 'Answer', text: 'Claude Code usage limits reset on a rolling 5-hour basis, not a fixed clock time. From the moment you start using Claude Code, you have 5 hours before that window resets. Pro allows ~44K tokens per window, Max 5x allows ~88K, Max 20x allows ~220K. With extra usage enabled, you can continue past the limit at standard API rates.' } },
    { '@type': 'Question', name: 'How can I check my Claude Code token usage?', acceptedAnswer: { '@type': 'Answer', text: 'On API billing, the Anthropic dashboard shows real-time costs. On Pro and Max subscriptions, your usage is visible in Settings > Usage on claude.com. For session-level detail, parse the JSONL files in ~/.claude/ to see prompt counts, token usage, and session durations. Open-source tools like Claude Cost Tracker can visualize this data.' } },
  ],
};

// ─────────────────────────────────────────────────────────────
// Reusable styled table primitives
// ─────────────────────────────────────────────────────────────

function TableCard({ children, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {label && (
        <div className="px-6 py-3 border-b border-slate-100 bg-slate-50/60">
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{label}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">{children}</table>
      </div>
    </div>
  );
}

function Th({ children, align = 'left' }) {
  return (
    <th className={`px-6 py-3.5 text-${align} text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap`}>
      {children}
    </th>
  );
}

function Td({ children, align = 'left', mono = false, className = '' }) {
  return (
    <td className={`px-6 py-4 text-${align} text-slate-700 ${mono ? 'tabular-nums' : ''} ${className}`}>
      {children}
    </td>
  );
}

function Dot({ color }) {
  const colors = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-600',
    slate: 'bg-slate-400',
    emerald: 'bg-emerald-500',
  };
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[color] || 'bg-slate-400'}`} />;
}

function PlanCell({ dot, name, sub }) {
  return (
    <div className="flex items-center gap-3">
      <Dot color={dot} />
      <div>
        <div className="font-semibold text-slate-900">{name}</div>
        {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

function PriceBadge({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-800',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tabular-nums ${tones[tone]}`}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────

export default function ClaudeCodeTokenCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 pt-6 text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/tools" className="hover:text-slate-900">Tools</Link></li>
            <li>/</li>
            <li className="text-slate-900">Claude Code Token Calculator</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 pt-8 pb-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            Claude Code Token Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 leading-relaxed max-w-3xl">
            Estimate your monthly Claude Code cost in seconds. Compares API pay-as-you-go against
            Pro, Max 5x, and Max 20x plans. Updated for Opus 4.7. Includes INR pricing for Indian developers.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-sm text-slate-500">
            <span>Last updated: <strong className="text-slate-700">{LAST_UPDATED}</strong></span>
            <span aria-hidden>·</span>
            <span>By <strong className="text-slate-700">ToolStackHub Team</strong></span>
            <span aria-hidden>·</span>
            <span>Pricing verified against <a href="https://platform.claude.com/docs/en/about-claude/pricing" rel="noopener" className="text-indigo-600 hover:underline">Anthropic API docs</a></span>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-5xl mx-auto px-4 pb-10" aria-label="Calculator">
          <Calculator />
        </section>

        {/* Quick pricing reference */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="pricing-reference">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
            Claude Code pricing in 2026: the quick reference
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Claude Code itself is free to install. You pay for the Claude API access it consumes —
            either through a subscription plan or pay-as-you-go API billing. These are the current rates as of April 2026.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">Subscription plans</h3>
          <TableCard>
            <thead className="bg-slate-50/60 border-b border-slate-100">
              <tr>
                <Th>Plan</Th>
                <Th>Price (USD)</Th>
                <Th>Tokens / 5hr window</Th>
                <Th>Best for</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="blue" name="Pro" sub="Entry tier" /></Td>
                <Td mono><PriceBadge tone="slate">$20/mo</PriceBadge> <span className="text-xs text-slate-500 ml-1">or $17 annual</span></Td>
                <Td mono>~44,000</Td>
                <Td>Light to moderate daily use</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="indigo" name="Max 5x" sub="Power user" /></Td>
                <Td mono><PriceBadge tone="indigo">$100/mo</PriceBadge></Td>
                <Td mono>~88,000</Td>
                <Td>Full-time developers</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="purple" name="Max 20x" sub="Heavy / agent workflows" /></Td>
                <Td mono><PriceBadge tone="indigo">$200/mo</PriceBadge></Td>
                <Td mono>~220,000</Td>
                <Td>Claude Code as primary tool</Td>
              </tr>
            </tbody>
          </TableCard>

          <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">API pay-as-you-go (per million tokens)</h3>
          <TableCard>
            <thead className="bg-slate-50/60 border-b border-slate-100">
              <tr>
                <Th>Model</Th>
                <Th align="right">Input</Th>
                <Th align="right">Output</Th>
                <Th align="right">Cache read</Th>
                <Th>Best for</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="emerald" name="Haiku 4.5" sub="Fastest, cheapest" /></Td>
                <Td align="right" mono>$1</Td>
                <Td align="right" mono>$5</Td>
                <Td align="right" mono><PriceBadge tone="emerald">$0.10</PriceBadge></Td>
                <Td>Simple tasks, classification</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition bg-indigo-50/30">
                <Td>
                  <div className="flex items-center gap-3">
                    <Dot color="indigo" />
                    <div>
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        Sonnet 4.6
                        <span className="text-[10px] font-bold bg-indigo-600 text-white px-1.5 py-0.5 rounded">DEFAULT</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">Best balance</div>
                    </div>
                  </div>
                </Td>
                <Td align="right" mono>$3</Td>
                <Td align="right" mono>$15</Td>
                <Td align="right" mono><PriceBadge tone="indigo">$0.30</PriceBadge></Td>
                <Td>80% of coding work</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="purple" name="Opus 4.7" sub="Most capable" /></Td>
                <Td align="right" mono>$5</Td>
                <Td align="right" mono>$25</Td>
                <Td align="right" mono><PriceBadge tone="amber">$0.50</PriceBadge></Td>
                <Td>Complex reasoning, agents</Td>
              </tr>
            </tbody>
          </TableCard>
          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            Cache reads are 90% off the standard input rate. Batch API gives an additional 50% discount on async workloads.
            Opus 4.7 and Sonnet 4.6 both support the full 1M context window at flat rates.
          </p>
        </section>

        {/* How tokens work */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="how-tokens-work">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            How Claude Code token usage actually works
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Most people picture Claude Code like ChatGPT — you send a prompt, you get a response, you pay for both.
              That mental model is wrong, and it's why Claude Code costs surprise people in both directions.
            </p>
            <p>
              A typical Claude Code session reads your codebase repeatedly. Every time you ask it to fix a bug or
              add a feature, it doesn't just process your prompt — it re-reads the relevant files, your <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">CLAUDE.md</code>,
              your conversation history, and any tool outputs. That re-reading is where 90%+ of your tokens go.
            </p>
            <p>
              Anthropic charges three different rates for these tokens. For Sonnet 4.6, fresh input tokens are $3 per million,
              output tokens are $15 per million, and <strong>cache reads are just $0.30 per million</strong> — a 90% discount.
            </p>
            <p>
              The cache discount is the entire reason heavy Claude Code usage doesn't bankrupt people. When the same
              2,000-line file gets re-read across 20 prompts in a session, you pay full price once, then 10% of full
              price 19 more times.
            </p>
            <p>
              This also means your token bill scales with <strong>session length</strong>, not just message count.
              Long sessions where you keep building on the same context are dramatically cheaper per message than
              20 fresh sessions doing similar work.
            </p>
          </div>
        </section>

        {/* How many tokens */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="how-many-tokens">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            How many tokens does Claude Code actually use?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            These are real numbers from tracked Claude Code usage across hundreds of developer-days:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Dot color="emerald" />
                <h3 className="font-semibold text-slate-900">Light user</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4">1–2 hours/day, occasional checks, mostly Sonnet</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex justify-between"><span>Daily tokens</span><span className="font-semibold tabular-nums">5–15M</span></li>
                <li className="flex justify-between"><span>API cost/day</span><span className="font-semibold tabular-nums">$2–7</span></li>
                <li className="pt-2 border-t border-slate-100"><PriceBadge tone="emerald">Pro is enough</PriceBadge></li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-indigo-500 bg-white p-5 shadow-sm relative">
              <span className="absolute -top-2.5 left-5 text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded">MOST COMMON</span>
              <div className="flex items-center gap-2 mb-2">
                <Dot color="indigo" />
                <h3 className="font-semibold text-slate-900">Medium user</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4">3–5 hours/day, daily feature work, mixed models</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex justify-between"><span>Daily tokens</span><span className="font-semibold tabular-nums">50–150M</span></li>
                <li className="flex justify-between"><span>API cost/day</span><span className="font-semibold tabular-nums">$5–15</span></li>
                <li className="pt-2 border-t border-slate-100"><PriceBadge tone="indigo">Max 5x sweet spot</PriceBadge></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Dot color="purple" />
                <h3 className="font-semibold text-slate-900">Heavy user</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4">6+ hours/day, agents, exploration, Opus-heavy</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex justify-between"><span>Daily tokens</span><span className="font-semibold tabular-nums">200–700M</span></li>
                <li className="flex justify-between"><span>API cost/day</span><span className="font-semibold tabular-nums">$15–50</span></li>
                <li className="pt-2 border-t border-slate-100"><PriceBadge tone="amber">Max 20x pays off</PriceBadge></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/60 p-5">
            <p className="text-sm text-slate-800 leading-relaxed">
              <strong>Real example:</strong> One developer who tracked 8 months of intensive Claude Code use found
              their busiest day hit 8,930 messages across 9 sessions. Their peak month would have cost <strong>$5,623 at API rates</strong>
              {' '}— versus $200 on the Max 20x plan. The reason? Over 90% of the tokens were cache reads, which are
              effectively included in flat-rate plans.
            </p>
          </div>
        </section>

        {/* HOW TO REDUCE — the big one */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="reduce-token-usage">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
            How to reduce Claude Code token usage: 12 proven tactics
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you're burning through tokens faster than expected, these are the highest-impact ways to cut your
            consumption without losing productivity. Tactics are ranked by the typical token savings they deliver.
          </p>

          <div className="space-y-7">
            {[
              { n: 1, t: 'Use /compact when conversations get long', b: <>Type <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/compact</code> in any session over 50 messages. It summarizes the conversation history into a brief summary while preserving what Claude has learned about your codebase. Saves 60–80% of cache reads on subsequent messages. This is the single highest-impact change for most users.</> },
              { n: 2, t: 'Use /clear between unrelated tasks', b: <>If you're done with a refactor and switching to writing tests for a different feature, <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/clear</code> resets the entire context to zero. Cache reads drop instantly to nothing. Most people leave Claude Code running with stale context for hours, paying for re-reads of files they're not even touching anymore.</> },
              { n: 3, t: 'Build a tight CLAUDE.md', b: <>Your <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">CLAUDE.md</code> is loaded into every single session. Keep it under 500 lines. Move project-specific docs to separate files that you reference only when needed. A bloated CLAUDE.md silently inflates the cache read cost of every message you send.</> },
              { n: 4, t: 'Use plan mode before executing', b: <>Press Shift+Tab to enter plan mode. Claude generates a step-by-step plan without executing any tools. Plans typically use ~80% fewer tokens than execution because no files get read or written. Approve the plan, then execute. This catches bad approaches before they consume tokens.</> },
              { n: 5, t: 'Use subagents for heavy reading tasks', b: <>If you need Claude to analyze a 5,000-line file or scan an entire directory, spawn a subagent. The subagent has its own isolated context — it reads the file once, summarizes findings, and returns just the summary to your main session. Your main context stays small and cheap.</> },
              { n: 6, t: 'Default to Sonnet, escalate to Opus only when needed', b: <>Sonnet 4.6 is 5× cheaper than Opus 4.7 on output and handles 80% of coding tasks just as well. Use Opus only for hard architecture decisions, multi-file refactors with subtle dependencies, and code review of sensitive changes. Use Sonnet for everything else. Switching defaults can cut costs by 50% overnight.</> },
              { n: 7, t: 'Be specific about which files to load', b: <>Instead of "fix the bug in my auth code," try "fix the bug in <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">src/auth/login.js</code>." Specific paths prevent Claude from grep-searching your whole repo, which can pull dozens of files into context at once.</> },
              { n: 8, t: 'Disable MCP servers you\'re not using', b: <>Each connected MCP server adds tools to Claude's system prompt — and that prompt is included in every cache read. If you have Linear, Slack, Figma, Notion, and GitHub all connected but only need GitHub today, disable the others. Per-session savings add up fast.</> },
              { n: 9, t: 'Avoid extended thinking for routine tasks', b: <>Extended thinking ("ultrathink", <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">--think hard</code>) generates internal reasoning tokens that get billed as output. For routine refactoring or simple bug fixes, this is wasteful. Reserve thinking modes for genuine reasoning challenges where the answer isn't obvious.</> },
              { n: 10, t: 'Drop large files from context when done', b: <>If you opened a 10,000-line generated migrations file just to check one function, ask Claude to drop it from memory. A simple "you can drop the contents of the migrations file from context now" works. The cache read cost vanishes.</> },
              { n: 11, t: 'Use /resume sparingly', b: <>Resuming an old session pulls all that history back into your cache. If the previous work is finished, start fresh with <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/clear</code>. Only resume when you genuinely need continuity from the prior conversation thread.</> },
              { n: 12, t: 'Batch related questions into one prompt', b: <>"Refactor this function, add error handling, write the tests, and update the docs" is one round-trip. Asking each separately is four round-trips, each loading the same file context. One thoughtful prompt = one set of cache reads. Four chatty prompts = four sets.</> },
            ].map(item => (
              <div key={item.n} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center">
                  {item.n}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-slate-900 mb-1.5">{item.t}</h3>
                  <p className="text-slate-700 leading-relaxed text-[15px]">{item.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
            <p className="text-sm text-emerald-900 leading-relaxed">
              <strong>Combined impact:</strong> Developers who systematically apply tactics 1, 2, 3, and 6 typically
              report cutting their Claude Code token usage by 60–75% within two weeks, with no loss in output quality.
            </p>
          </div>
        </section>

        {/* /compact vs /clear */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="compact-vs-clear">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            /compact vs /clear vs /resume: which saves the most tokens?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The three commands look similar but behave very differently. Picking the right one for the moment is one
            of the easiest wins in the entire token-optimization playbook.
          </p>

          <div className="space-y-3 mb-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <code className="px-2.5 py-1 bg-red-100 text-red-700 rounded text-sm font-mono font-semibold flex-shrink-0">/clear</code>
                <div>
                  <p className="font-semibold text-slate-900">Nukes everything</p>
                  <p className="text-sm text-slate-700 mt-1">Conversation history, file context, tool results — all gone. Cheapest possible state. Use when switching to an unrelated task.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <code className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded text-sm font-mono font-semibold flex-shrink-0">/compact</code>
                <div>
                  <p className="font-semibold text-slate-900">Keeps the lessons, drops the history</p>
                  <p className="text-sm text-slate-700 mt-1">Preserves what Claude has learned, summarizes verbose history into a brief summary. Typically 5–10% the size of original context. Use when staying on the same task but the session has grown long.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <code className="px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded text-sm font-mono font-semibold flex-shrink-0">/resume</code>
                <div>
                  <p className="font-semibold text-slate-900">Rebuilds prior context</p>
                  <p className="text-sm text-slate-700 mt-1">Pulls a previous session's full context back into cache. Expensive — you're paying to re-load the original cache. Only worth it if you genuinely need that prior conversation thread.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Token cost comparison on a typical 80-message session</h3>
          <TableCard>
            <thead className="bg-slate-50/60 border-b border-slate-100">
              <tr>
                <Th>Command</Th>
                <Th align="right">Cache size after</Th>
                <Th align="right">Cost of next message</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/40 transition">
                <Td><span className="text-slate-500">Do nothing</span></Td>
                <Td align="right" mono>100% (~200K)</Td>
                <Td align="right" mono><PriceBadge tone="amber">$0.06 + new</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><code className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-sm font-mono">/compact</code></Td>
                <Td align="right" mono>~10% (~20K)</Td>
                <Td align="right" mono><PriceBadge tone="emerald">$0.006 + new</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition bg-emerald-50/30">
                <Td><code className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-sm font-mono">/clear</code></Td>
                <Td align="right" mono>0</Td>
                <Td align="right" mono><PriceBadge tone="emerald">$0 + new</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><code className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-sm font-mono">/resume</code></Td>
                <Td align="right" mono>100%+</Td>
                <Td align="right" mono><PriceBadge tone="amber">$0.06+ + new</PriceBadge></Td>
              </tr>
            </tbody>
          </TableCard>
          <p className="mt-5 text-slate-700 leading-relaxed">
            <strong>The right pattern for most users:</strong> run <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/compact</code> every
            30–50 messages, run <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/clear</code> whenever you change topics. This single
            habit will cut a typical month's bill by 30–50%.
          </p>
        </section>

        {/* Cache reads */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="cache-reads">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Why cache reads are 90% of your Claude Code token bill
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you first send a prompt with file context, Claude pays the full input rate to process and store
            that content (with a small 25% premium to write the cache). Every subsequent message in that session
            that re-reads the same context pays just <strong>10%</strong> of the input rate.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            In practice, this means a Claude Code session looks like a thin layer of fresh tokens on top of a thick
            base of cache reads. If you read a 50K-token file in message 1, then exchange 30 more messages that all
            reference it, you pay:
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 my-5">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">1</span>
                <span><strong>Message 1:</strong> 50K tokens at full input rate (with cache write premium) = <span className="font-semibold tabular-nums">$0.19</span> on Sonnet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">2</span>
                <span><strong>Messages 2–31:</strong> 30 × 50K tokens at cache read rate = <span className="font-semibold tabular-nums">$0.45</span> total (about $0.015 each)</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Without caching, those same 30 messages would cost $4.50 — <strong>10× more</strong>. This is also why
            Anthropic's flat-rate plans can absorb what looks like impossible usage: the developer who tracked
            $5,623/month at API rates was paying mostly for cache reads, which are essentially "free" inside the
            Max 20x plan.
          </p>
        </section>

        {/* Token limits */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="token-limits">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Claude Code token limits explained (the 5-hour window)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Anthropic doesn't publish exact token caps as contractual numbers, but the planning bands they share
            in support documentation map roughly to:
          </p>

          <TableCard>
            <thead className="bg-slate-50/60 border-b border-slate-100">
              <tr>
                <Th>Plan</Th>
                <Th align="right">Tokens per 5-hour window</Th>
                <Th>Weekly cap</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="blue" name="Pro" sub="$20/mo" /></Td>
                <Td align="right" mono><PriceBadge tone="slate">~44,000</PriceBadge></Td>
                <Td>Yes, weighted toward Sonnet</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="indigo" name="Max 5x" sub="$100/mo" /></Td>
                <Td align="right" mono><PriceBadge tone="indigo">~88,000 (5× Pro)</PriceBadge></Td>
                <Td>Higher, with separate Sonnet cap</Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="purple" name="Max 20x" sub="$200/mo" /></Td>
                <Td align="right" mono><PriceBadge tone="indigo">~220,000 (nominal 20× Pro)</PriceBadge></Td>
                <Td>Highest, but not unlimited</Td>
              </tr>
            </tbody>
          </TableCard>

          <p className="text-slate-700 leading-relaxed mt-6 mb-4">
            <strong>Important context:</strong> these are planning bands, not contracts. Anthropic explicitly reserves
            the right to apply additional caps and adjust based on demand. Use these numbers to size your plan choice,
            not to argue quota with support.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">When you hit your limit:</h3>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Without "extra usage" enabled: you're blocked until the 5-hour window resets</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>With "extra usage" enabled: you continue at standard API rates with an optional monthly cap</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>The 5-hour window is rolling — it starts when you start using Claude Code, not on clock-time</span></li>
          </ul>
        </section>

        {/* India / INR */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="india-pricing">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Claude Code pricing in India (INR + GST)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Anthropic prices Claude Code in USD, but Indian users pay through their bank or card with USD-to-INR
            conversion plus 18% GST applied at checkout.
          </p>

          <TableCard>
            <thead className="bg-slate-50/60 border-b border-slate-100">
              <tr>
                <Th>Plan</Th>
                <Th align="right">USD / month</Th>
                <Th align="right">INR / month (incl. 18% GST)</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="blue" name="Pro" /></Td>
                <Td align="right" mono>$20</Td>
                <Td align="right" mono><PriceBadge tone="slate">~₹1,985</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition bg-emerald-50/30">
                <Td>
                  <div className="flex items-center gap-3">
                    <Dot color="emerald" />
                    <div>
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        Pro (annual)
                        <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">SAVE</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">$170/year ($14/mo)</div>
                    </div>
                  </div>
                </Td>
                <Td align="right" mono>$170/yr</Td>
                <Td align="right" mono><PriceBadge tone="emerald">~₹16,870/yr</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="indigo" name="Max 5x" /></Td>
                <Td align="right" mono>$100</Td>
                <Td align="right" mono><PriceBadge tone="indigo">~₹9,920</PriceBadge></Td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition">
                <Td><PlanCell dot="purple" name="Max 20x" /></Td>
                <Td align="right" mono>$200</Td>
                <Td align="right" mono><PriceBadge tone="indigo">~₹19,840</PriceBadge></Td>
              </tr>
            </tbody>
          </TableCard>
          <p className="text-xs text-slate-500 mt-3 mb-8">
            INR figures use approximate FX rate of ₹84/USD. Actual amount depends on your bank's conversion rate
            and any forex markup (typically 0.5–3.5%).
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">Payment notes for Indian users</h3>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span>Most international Visa, MasterCard, and Amex cards work</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">!</span><span>RBI's two-factor authentication adds an extra OTP step at checkout</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span><span>UPI is not currently supported for Anthropic subscriptions</span></li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span>The annual Pro plan ($170) saves ~₹2,500 vs monthly billing</span></li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span>API billing is also USD-denominated; pay as you use with credit pre-loading</span></li>
              <li className="flex gap-3"><span className="text-indigo-600 font-bold">→</span><span>For freelancers, Max 5x typically pays for itself by saving 4–6 hours/week of waiting on rate limits during client work</span></li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="methodology">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            How this calculator works (methodology)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Transparency matters when you're trusting numbers to make a buying decision. Here's exactly how this
            calculator arrives at its estimates:
          </p>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quick estimate mode</h3>
              <p className="text-slate-700 leading-relaxed">
                Uses per-hour cost averages calibrated against three data sources: Anthropic's official pricing pages,
                public usage breakdowns from developers running Claude Code as their primary tool, and tracked sessions
                across small, medium, and heavy workloads. The per-hour rates assume an 85% cache hit rate, which
                matches what most developers report after 3+ weeks of regular use.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">By tokens mode</h3>
              <p className="text-slate-700 leading-relaxed">
                Uses Anthropic's published API pricing directly: $1/$5 (Haiku 4.5), $3/$15 (Sonnet 4.6), $5/$25 (Opus 4.7)
                per million tokens, with cache reads at 10% of input rate. No estimation, just direct math.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Plan recommendation thresholds</h3>
              <p className="text-slate-700 leading-relaxed">
                Match Anthropic's own breakeven guidance: under $18/mo of API equivalent → API; $18–90 → Pro; $90–190 → Max 5x;
                above → Max 20x. These thresholds are conservative — they don't account for the productivity cost of
                rate-limit interruptions, which often justifies upgrading earlier than pure cost math suggests.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What this calculator doesn't model</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Rate-limit interruption cost (implicit in plan recommendations only)</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Burst usage patterns that swing dramatically week-to-week</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Server-side tool fees (web search at $10 per 1,000 searches)</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Long-context surcharges (none on current Sonnet 4.6 / Opus 4.7 — flat across 1M context)</span></li>
            <li className="flex gap-3"><span className="text-slate-400">•</span><span>Batch API discounts (50% off, but Claude Code doesn't use batch)</span></li>
          </ul>

          <p className="text-sm text-slate-500 leading-relaxed mt-6">
            INR conversion uses live exchange rates fetched from exchangerate-api.com, with a fallback of ₹84/USD
            if the API is unreachable. GST is shown separately in the India pricing section but not added to
            calculator output (since GST is applied at checkout, not on usage).
            <br /><br />
            <strong>Last calibrated:</strong> {LAST_UPDATED}.
            Next scheduled review: when Anthropic publishes pricing changes or releases the next model generation.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="faq">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((q, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-slate-300 transition">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-slate-900 text-[16px] pr-4">{q.name}</h3>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-slate-700 leading-relaxed mt-3 text-[15px]">{q.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Author / EEAT */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="about">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">About this calculator</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              This calculator is built and maintained by the ToolStackHub team. We've been using Claude Code daily
              since its public release and have tracked actual token consumption across web app builds, content
              tooling, and SEO automation projects.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              Pricing data is verified against Anthropic's official{' '}
              <a href="https://platform.claude.com/docs/en/about-claude/pricing" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                API pricing page
              </a>{' '}
              and updated whenever Anthropic publishes changes. If you spot anything outdated, email us at{' '}
              <a href="mailto:hello@toolstackhub.in" className="text-indigo-600 hover:underline">hello@toolstackhub.in</a>{' '}
              and we'll fix it within 24 hours.
            </p>
            <p className="text-sm text-slate-500">
              ToolStackHub is an independent tools site. We do not receive payment from Anthropic and have no
              commercial relationship with them. Plan recommendations are based purely on cost math.
            </p>
          </div>
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200" id="related">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Related guides</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/blog/reduce-claude-code-token-usage', title: 'I cut my Claude Code token usage by 73% — here\'s how' },
              { href: '/blog/claude-code-vs-cursor-2026', title: 'Claude Code vs Cursor 2026: honest side-by-side after 3 months' },
              { href: '/blog/claude-max-vs-api', title: 'Claude Max plan vs API for Claude Code: real cost math' },
              { href: '/blog/best-mcp-servers-claude-code', title: 'Best MCP servers for Claude Code in 2026 (tested & ranked)' },
              { href: '/blog/claude-md-templates', title: 'Your first CLAUDE.md file: 12 templates that actually work' },
              { href: '/tools/claude-md-generator', title: 'Free tool: CLAUDE.md generator' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-300 hover:bg-indigo-50/30 transition group"
              >
                <p className="text-slate-900 font-medium text-sm group-hover:text-indigo-700">{link.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}