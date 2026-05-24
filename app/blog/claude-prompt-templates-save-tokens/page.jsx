import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Claude Prompt Templates That Save Tokens (2026 Guide)',
  description: 'Copy-paste Claude prompt templates that cut token usage by 60%. Low-token prompts for coding, writing, review, and decisions — with real examples and pro tips.',
  keywords: [
    'claude prompt templates', 'low token prompts claude', 'optimize claude token usage',
    'claude prompt engineering guide', 'best prompts for claude ai', 'reduce token cost claude',
    'how to reduce token usage in claude', 'claude prompt engineering examples',
    'how to write efficient prompts for claude', 'claude api prompts', 'efficient ai prompting',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-prompt-templates-save-tokens` },
  openGraph: {
    title: 'Claude Prompt Templates That Save Tokens (2026 Guide)',
    description: '8 copy-paste prompt templates that cut Claude token usage by up to 60%. Real examples, pro tips, and mistakes to avoid.',
    url: `${SITE_CONFIG.url}/blog/claude-prompt-templates-save-tokens`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
};

const TOC = [
  { id: 'what-makes-prompt-token-heavy', label: 'Why Most Prompts Waste Tokens'          },
  { id: 'token-minimal-anatomy',         label: 'Anatomy of a Low-Token Prompt'           },
  { id: 'template-1',                    label: 'Template 1 — Role + Style Setup'         },
  { id: 'template-2',                    label: 'Template 2 — One-Shot Fix (Edit/Code)'  },
  { id: 'template-3',                    label: 'Template 3 — Build a Feature (Dev)'     },
  { id: 'template-4',                    label: 'Template 4 — Refactor Without Drift'    },
  { id: 'template-5',                    label: 'Template 5 — Batch Brainstorm'           },
  { id: 'template-6',                    label: 'Template 6 — Summarize + Next Steps'    },
  { id: 'template-7',                    label: 'Template 7 — Code Review'               },
  { id: 'template-8',                    label: 'Template 8 — Table Comparison'          },
  { id: 'universal-rules',               label: 'Universal Rules for Token-Light Prompts' },
  { id: 'mistakes',                       label: 'Mistakes That Bloat Tokens'             },
  { id: 'faq',                           label: 'FAQ'                                     },
];

const TEMPLATES = [
  {
    id:        'template-1',
    n:         '01',
    icon:      '🎭',
    title:     'Role + Style Setup',
    subtitle:  'Use once per chat. Never repeat again.',
    color:     'brand',
    why:       'Most people re-explain their role and tone preference in every message. This template sets both in one compact block at the start of the chat — and Claude carries it forward automatically.',
    when:      'Opening any new chat where you\'ll send 3+ messages. Copywriting, customer support drafts, email assistance.',
    template: `You are a [role].
Tone: [concise / casual / formal].
Respond in 3–5 short sentences max.
Do not add explanations unless asked.`,
    example: {
      context: 'A marketing manager opening a new chat to write 10 social captions.',
      filled: `You are a marketing copywriter for a B2B SaaS brand.
Tone: friendly and casual.
Respond in 3–5 short sentences max.
Do not add explanations unless asked.`,
      output: 'Every follow-up message in this chat stays short and on-brand. No need to re-specify role or tone ever again.',
    },
    tokenSaving: 'Saves 50–150 tokens per follow-up by eliminating repeated role setup.',
    proTip: 'Add "Output only the final result. No commentary." to cut response length by 30–40% on tasks like caption writing or email drafts.',
    mistake: 'Setting role AND tone AND format AND length AND audience in message 1 — that\'s over-engineering. Keep the setup under 4 lines.',
  },
  {
    id:        'template-2',
    n:         '02',
    icon:      '✂️',
    title:     'One-Shot Fix — Editing & Code',
    subtitle:  'Get a precise fix without the essay.',
    color:     'emerald',
    why:       'Open-ended requests like "fix this" prompt Claude to explain what was wrong, what it changed, and why. That explanation can be 3–5× longer than the actual fix. This template forces output-only mode.',
    when:      'Grammar corrections, code bug fixes, UI copy rewrites, API response cleanup. Anything where you know what\'s broken and just need it fixed.',
    template: `You are a [role].
Task: [goal in 10 words or fewer].
Input:
[paste your text or code here]

Rules:
- Only change what is broken or explicitly requested.
- Return only the corrected output. No explanation.
- Keep under [X] lines.`,
    example: {
      context: 'A developer with a broken TypeScript function.',
      filled: `You are a TypeScript engineer.
Task: Fix the type error in this function.
Input:
function getUser(id) {
  return users.find(u => u.id === id)
}

Rules:
- Only fix the type error.
- Return only corrected code. No explanation.
- Keep under 10 lines.`,
      output: 'Claude returns the corrected function with proper typing. No essay about TypeScript generics. No "here\'s what I changed" paragraph.',
    },
    tokenSaving: 'Eliminates 100–400 token explanations on every simple fix.',
    proTip: 'For code, add "Return as a patch — only the changed lines." Claude will output a diff-style result, cutting response tokens by 60–80% on large files.',
    mistake: 'Writing "Can you please take a look at this and fix any issues you find and also maybe improve the style?" — vague tasks produce verbose answers.',
  },
  {
    id:        'template-3',
    n:         '03',
    icon:      '🏗️',
    title:     'Build a Feature — Dev Workflow',
    subtitle:  'Batched, phased, diff-first output.',
    color:     'purple',
    why:       'Asking Claude to "build this feature" without structure produces full file rewrites — potentially thousands of tokens per response. This template forces Claude into patch mode: small, targeted diffs, a plan first, and test steps.',
    when:      'Any feature implementation, bug resolution, or refactor that touches 3–5 files. Perfect for engineering teams using Claude in production workflows.',
    template: `You are a senior [stack] engineer.
Goal: Implement [feature — 1 phrase].

Context:
- Tech: [frameworks/libraries]
- Files: [list 3–5 file paths]
- Current behavior: [1–2 sentences]
- Expected behavior: [1–2 sentences]

Task:
1. Propose a 5–7 step implementation plan.
2. Show code as PATCHES (changed lines only) per file.
3. Provide 3–5 manual test steps.

Rules:
- No long explanations. Plan only, then patches.
- Prefer minimal diffs over full file rewrites.`,
    example: {
      context: 'Adding a rate limiter to a Node.js API.',
      filled: `You are a senior Node.js engineer.
Goal: Add per-user rate limiting to the /api/search endpoint.

Context:
- Tech: Express.js, Redis, express-rate-limit
- Files: routes/search.js, middleware/rateLimit.js, config/redis.js
- Current behavior: /api/search has no rate limiting
- Expected behavior: Max 30 requests per user per minute; 429 on exceed

Task:
1. Propose a 5–7 step plan.
2. Show code as PATCHES per file.
3. Provide 3–5 manual test steps.

Rules:
- No long explanations.
- Patches only — no full file rewrites.`,
      output: 'Claude returns a numbered plan, small patches for each of 3 files, and clear test steps. No rewriting entire files. No lecture on rate limiting theory.',
    },
    tokenSaving: 'Patch mode vs full-file mode: typically 3,000–8,000 tokens saved per feature implementation.',
    proTip: 'Limit to 3–5 files per prompt. If your feature touches 10 files, split into 2 prompts. Each file you add roughly doubles Claude\'s context load.',
    mistake: 'Pasting entire files when only 1 function is being modified. Paste only the relevant function or section — not the whole module.',
  },
  {
    id:        'template-4',
    n:         '04',
    icon:      '🔧',
    title:     'Refactor Without Drift',
    subtitle:  'Clean code. Same behavior. No surprises.',
    color:     'amber',
    why:       'Without explicit constraints, Claude will "improve" code beyond what you asked — renaming variables, reorganizing structure, changing behavior. This template locks behavior and forces a minimal diff.',
    when:      'Code cleanup, legacy refactoring, readability improvements, naming conventions. Whenever you want cleaner code but the same logic.',
    template: `You are a [role].
Goal: Refactor this code for clarity and maintainability.
Input:
[paste code snippet]

Rules:
- Do NOT change behavior or logic.
- Only simplify: variable names, structure, or repetition.
- Return changed lines as a patch only.
- Flag any line you are unsure about instead of changing it.`,
    example: {
      context: 'A Python developer with a messy data transformation function.',
      filled: `You are a Python engineer.
Goal: Refactor this function for clarity.
Input:
def proc(d, t, fl):
  r = []
  for i in d:
    if i['type'] == t and i['active'] == fl:
      r.append(i['value'] * 2)
  return r

Rules:
- Do NOT change behavior or logic.
- Only improve names and readability.
- Return as patch. Flag anything uncertain.`,
      output: 'Claude renames parameters and clarifies the list comprehension — same output, much more readable. No logic changes, no silent rewrites.',
    },
    tokenSaving: 'The "patch only" rule cuts response length by 50–70% compared to full-file rewrites.',
    proTip: '"Flag any line you\'re unsure about" is the most powerful safety net. Claude will mark uncertain changes rather than silently altering behavior.',
    mistake: 'Not including "do not change behavior" — Claude treats refactor as permission to optimize, which can introduce subtle bugs.',
  },
  {
    id:        'template-5',
    n:         '05',
    icon:      '💡',
    title:     'Batch Brainstorm',
    subtitle:  'Ideas fast. No conversational back-and-forth.',
    color:     'teal',
    why:       'Brainstorming as a conversation is the fastest way to burn tokens. Each exchange grows the history. This template gets 10 ideas in one shot, forces a structured output, and ends the conversation.',
    when:      'Blog topic ideas, product naming, feature naming, campaign concepts, interview questions, email subject lines.',
    template: `You are a [role].
Goal: Brainstorm [topic] and select the top [N] options.

Constraints:
- Each idea: 1 sentence max.
- Output: numbered list only.
- Rank by [criteria: e.g. originality / user impact / SEO potential].
- No commentary before or after the list.`,
    example: {
      context: 'A content manager needing blog ideas for an AI tools site.',
      filled: `You are a content strategist for an AI tools website.
Goal: Brainstorm blog post ideas targeting Indian professionals using AI tools. Select top 8.

Constraints:
- Each idea: 1 sentence max (title + angle).
- Output: numbered list only.
- Rank by search traffic potential.
- No commentary.`,
      output: 'Eight sharp blog titles, ranked. No "Great question!" opener. No "I hope this helps!" closer. Just the list.',
    },
    tokenSaving: 'One-shot brainstorming vs 10-message back-and-forth: saves 3,000–7,000 tokens per session.',
    proTip: 'Add "Include 3 contrarian ideas — angles most content creators ignore." This produces higher-quality differentiated ideas without extra tokens.',
    mistake: 'Asking for 20 ideas when you need 5. Longer lists = longer responses. Start small. You can always ask for more.',
  },
  {
    id:        'template-6',
    n:         '06',
    icon:      '📋',
    title:     'Summarize + Next Steps',
    subtitle:  'The bridge between long chats and fresh starts.',
    color:     'green',
    why:       'Long chats are the biggest source of wasted tokens. This template generates a compact handoff document — key decisions, outcomes, and actions — so you can start a new chat without losing context.',
    when:      'At the end of any long coding, writing, or research session. Any time a chat hits 15+ messages. Before switching tasks.',
    template: `You are a [role].
Goal: Summarize this conversation into a handoff document.

Output format:
- 5 bullet points: Key decisions made (1 sentence each)
- 3 bullet points: Open questions / unresolved issues
- 3 next-step actions (prioritized, 1 sentence each)

Rules:
- 1 sentence per bullet. No elaboration.
- If something is unclear, flag it in open questions.`,
    example: {
      context: 'A developer finishing a 20-message debugging session.',
      filled: `You are a senior engineer.
Goal: Summarize this debugging session as a handoff document.

Output format:
- 5 bullets: Root cause, changes made, files affected, test results, remaining edge cases
- 3 bullets: Open questions
- 3 next-step actions

Rules:
- 1 sentence per bullet. No elaboration.`,
      output: 'A tight summary you can paste into a new chat as message 1. The new chat starts with full context at a fraction of the token cost.',
    },
    tokenSaving: 'Starting fresh with a 500-token summary vs continuing a 30,000-token chat: 98% token reduction.',
    proTip: 'Save these summaries as a text file. They double as a project log — and you can paste them into any new chat with Claude, GPT, or Gemini without re-explaining the project.',
    mistake: 'Asking for a summary at message 50. Do it at message 15–20 before the history gets enormous.',
  },
  {
    id:        'template-7',
    n:         '07',
    icon:      '🔍',
    title:     'Code Review — Security & Performance',
    subtitle:  'Critical issues only. No filler.',
    color:     'rose',
    why:       'Standard code review prompts produce 10–20 observations, most of them nitpicks. This template forces Claude to filter to the top 5 critical issues and give a one-sentence fix for each — the 80/20 of code review.',
    when:      'Security review before deployment, performance audit before scaling, bug hunt in production-bound code.',
    template: `You are a Senior [Backend / Frontend / Security] Engineer.
Goal: Review this code for [bugs / security risks / performance issues].
Input:
[paste code snippet]

Rules:
- List only critical issues. Max 5 items.
- For each: 1 sentence on what is wrong + 1 sentence on the fix.
- Rank by severity (critical first).
- No praise, no general tips, no summary paragraph.`,
    example: {
      context: 'A backend engineer reviewing an auth endpoint before shipping.',
      filled: `You are a Senior Security Engineer.
Goal: Review this Express.js auth endpoint for security risks.
Input:
app.post('/login', async (req, res) => {
  const user = await db.query(\`SELECT * FROM users WHERE email = '\${req.body.email}'\`)
  if (user && req.body.password === user.password) {
    res.json({ token: jwt.sign({ id: user.id }, 'secret') })
  }
})

Rules:
- List only critical security issues. Max 5.
- For each: 1 sentence problem + 1 sentence fix.
- Rank by severity. No summary paragraph.`,
      output: 'Claude returns 3 critical issues (SQL injection, plaintext password comparison, hardcoded JWT secret) with one-sentence fixes each. No 800-word security lecture.',
    },
    tokenSaving: 'Focused review vs open-ended review: saves 300–800 tokens per response. More importantly, saves the human reading time.',
    proTip: 'Run security review and performance review as separate prompts. Mixing concerns in one review produces shallower analysis of both.',
    mistake: 'Pasting 300 lines when the issue is in 20. Identify the specific function or block being reviewed. Claude\'s analysis quality improves dramatically with focus.',
  },
  {
    id:        'template-8',
    n:         '08',
    icon:      '📊',
    title:     'Table Comparison',
    subtitle:  'Decisions made fast. No debate.',
    color:     'indigo',
    why:       'Comparison questions invite Claude into essay mode — paragraphs weighing pros and cons of each option. Forcing table format compresses a 500-word comparison into 6 rows and forces Claude to commit to a recommendation.',
    when:      'Tech stack decisions, tool selection, pricing plan comparison, vendor evaluation, feature prioritization.',
    template: `You are a [role].
Goal: Compare [Option A] vs [Option B] for [specific context].

Output format — strict table:
| Aspect | [Option A] | [Option B] |
|--------|-----------|-----------|

Rows to include (exactly these 6):
1. Scope / use case
2. Cost
3. Speed / performance
4. Risk / downsides
5. Setup effort
6. Recommendation for [specific context]

Rules:
- Each cell: 1 short phrase. No full sentences.
- Last row must give a clear winner, not "it depends."
- No paragraphs before or after the table.`,
    example: {
      context: 'A startup deciding between Supabase and Firebase.',
      filled: `You are a senior full-stack engineer.
Goal: Compare Supabase vs Firebase for a bootstrapped SaaS with <1,000 users.

Output format — strict table:
| Aspect | Supabase | Firebase |

Rows:
1. Scope / use case
2. Cost at 1K users
3. Query performance
4. Risk / lock-in
5. Setup effort
6. Recommendation for bootstrapped SaaS

Rules:
- Each cell: 1 short phrase.
- Last row: clear winner. Not "it depends."
- No text outside the table.`,
      output: 'A clean 6-row table. Last row says "Supabase — lower cost, SQL familiarity, no vendor lock-in." Decision made. No 800-word comparison essay to read.',
    },
    tokenSaving: 'Table response vs essay response: 60–75% fewer tokens in Claude\'s output.',
    proTip: '"The last row must give a clear winner, not it depends" is the most important instruction. Without it, Claude defaults to wishy-washy conclusions.',
    mistake: 'Comparing 4+ options in one table. Stick to 2. For 4 options, run 2 separate comparison prompts and compare the winners.',
  },
];

const colorBg = {
  brand:'bg-brand-50 border-brand-200',
  emerald:'bg-emerald-50 border-emerald-200',
  purple:'bg-purple-50 border-purple-200',
  amber:'bg-amber-50 border-amber-200',
  teal:'bg-teal-50 border-teal-200',
  green:'bg-green-50 border-green-200',
  rose:'bg-rose-50 border-rose-200',
  indigo:'bg-indigo-50 border-indigo-200',
};
const colorText = {
  brand:'text-brand-700',
  emerald:'text-emerald-700',
  purple:'text-purple-700',
  amber:'text-amber-700',
  teal:'text-teal-700',
  green:'text-green-700',
  rose:'text-rose-700',
  indigo:'text-indigo-700',
};
const colorHeader = {
  brand:'bg-brand-600',
  emerald:'bg-emerald-600',
  purple:'bg-purple-600',
  amber:'bg-amber-600',
  teal:'bg-teal-600',
  green:'bg-green-600',
  rose:'bg-rose-600',
  indigo:'bg-indigo-600',
};

export default function ClaudePromptTemplatesBlog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Claude Prompt Templates That Save Tokens — 8 Copy-Paste Templates (2026)',
        description: '8 low-token Claude prompt templates with real examples, pro tips, and mistakes to avoid.',
        url: `${SITE_CONFIG.url}/blog/claude-prompt-templates-save-tokens`,
        datePublished: '2026-04-01',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is a low-token prompt in Claude?', acceptedAnswer: { '@type': 'Answer', text: 'A low-token prompt is a prompt structured to produce a precise, complete output in the fewest tokens possible. It achieves this by specifying a role in one line, constraining output format (list, table, patch), limiting explanation ("no commentary"), and batching related tasks into a single message instead of a conversation chain.' } },
          { '@type': 'Question', name: 'How do you reduce token usage in Claude?', acceptedAnswer: { '@type': 'Answer', text: 'Reduce token usage by: (1) editing prompts instead of sending corrections, (2) using output constraints like "numbered list only" or "patch only," (3) starting fresh chats every 15–20 messages with a summary, (4) specifying "no explanation" for simple tasks, and (5) batching multiple related questions into one prompt.' } },
          { '@type': 'Question', name: 'What is prompt engineering for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering for Claude is the practice of structuring prompts to get accurate, complete, and concise outputs efficiently. It involves setting a clear role, defining the output format (table, bullet list, code patch), specifying constraints ("max 5 items," "1 sentence each"), and batching context to minimize back-and-forth exchanges.' } },
          { '@type': 'Question', name: 'What format does Claude respond best to?', acceptedAnswer: { '@type': 'Answer', text: 'Claude responds most precisely when given: a one-line role, a goal in 10 words or fewer, structured input (labeled sections like Input: and Rules:), explicit output constraints (numbered list, table, patch), and a length limit. This structure eliminates ambiguity and prevents long explanatory responses.' } },
          { '@type': 'Question', name: 'Should I use XML tags in Claude prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, XML-style tags like <task>, <input>, and <rules> help Claude parse your prompt accurately — especially for complex tasks with multiple components. They reduce the chance of Claude misinterpreting which section is the goal vs the input. For simple 3–4 line prompts, plain labeled sections (Task: / Input: / Rules:) are equally effective and slightly more token-efficient.' } },
          { '@type': 'Question', name: 'How many tokens does a typical Claude prompt use?', acceptedAnswer: { '@type': 'Answer', text: 'A simple prompt is 50–200 tokens. A detailed prompt with context is 200–500 tokens. An uploaded PDF page adds 500–800 tokens. In a long conversation, Claude re-reads all previous messages before each response — so a 30-message chat can force Claude to process 200,000+ tokens per response, even for a simple question.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Claude Prompt Templates', item: `${SITE_CONFIG.url}/blog/claude-prompt-templates-save-tokens` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Claude Prompt Templates</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs text-surface-400">Updated April 1, 2026 · 12 min read</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              Claude Prompt Templates That Save Tokens —
              <span className="text-brand-600"> 8 Copy-Paste Templates (2026)</span>
            </h1>

            {/* PAS Hook */}
            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6 max-w-2xl">
              <p>
                You are already hitting Claude's limits. But the problem is not how often you use Claude — it is <strong className="text-surface-800">how you write your prompts.</strong>
              </p>
              <p>
                An open-ended prompt like "can you help me fix this code?" invites Claude to explain the bug, discuss alternatives, and add suggestions you didn't ask for. That unstructured output can be 5× longer than necessary — burning tokens on words you won't use.
              </p>
              <p>
                These 8 prompt templates solve that. Each one is structured to get a precise, complete answer in the fewest tokens possible — with a real example showing exactly what output to expect.
              </p>
            </div>

            {/* Featured snippet block */}
            <div className="bg-surface-900 text-white rounded-2xl p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#94a3b8' }}>
                📌 What Makes a Claude Prompt Low-Token?
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#ffffff' }}>
                A low-token Claude prompt constrains output format, specifies role in one line, limits explanation ("no commentary"), and batches related tasks into a single message. It tells Claude exactly what to produce — and exactly what to leave out.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { do: true,  text: 'Specify format: "numbered list only"'            },
                  { do: true,  text: 'Limit length: "max 5 items"'                      },
                  { do: true,  text: 'Block explanation: "no commentary"'               },
                  { do: true,  text: 'Use patches for code: "changed lines only"'      },
                  { do: false, text: '"Can you help me with..."'                        },
                  { do: false, text: 'Open-ended: "what do you think?"'                },
                  { do: false, text: 'No output constraints'                            },
                  { do: false, text: 'Pasting entire files for 1-function fixes'       },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm font-medium">
                    <span className="shrink-0 font-bold" style={{color: item.do ? '#4ade80' : '#f87171'}}>{item.do ? '✓' : '✗'}</span>
                    <span style={{color: item.do ? '#4ade80' : '#f87171'}}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub AI Team</div>
                <div className="text-xs text-surface-400">Tested in production Claude workflows. Based on Anthropic prompt engineering documentation and real usage analysis.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Contents</div>
                <ol className="space-y-2">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                        <span className="text-surface-400 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 pt-4 border-t border-surface-200 space-y-2">
                  <Link href="/ai-tools/claude" className="block w-full text-center bg-brand-600 text-white font-semibold text-xs py-2 rounded-xl hover:bg-brand-700 transition-colors">
                    Claude Full Review →
                  </Link>
                  <Link href="/blog/how-to-save-tokens-in-claude" className="block w-full text-center bg-surface-100 text-surface-700 font-semibold text-xs py-2 rounded-xl hover:bg-surface-200 transition-colors">
                    Token Saving Guide →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* WHY PROMPTS WASTE TOKENS */}
              <section id="what-makes-prompt-token-heavy">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why Most Prompts Waste Tokens</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    Token waste doesn't come from bad questions. It comes from <strong className="text-surface-800">ambiguous questions</strong>.
                    When Claude doesn't know exactly what format you want, it defaults to comprehensive.
                    That means explanations, context, alternatives, and caveats — most of which you didn't need.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                    <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl">
                      <div className="font-bold text-rose-900 mb-3">❌ Token-Heavy Prompt</div>
                      <div className="font-mono text-xs text-rose-800 bg-white rounded-xl p-3 mb-3 leading-relaxed">
                        "Can you help me improve this function? It's a bit slow and the naming isn't great. Maybe also check for any bugs?"
                      </div>
                      <div className="text-xs text-rose-700">
                        Result: 600–1,200 token response. Performance analysis, naming lecture, bug list, suggested rewrites, closing paragraph.
                      </div>
                    </div>
                    <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
                      <div className="font-bold text-emerald-900 mb-3">✅ Low-Token Prompt</div>
                      <div className="font-mono text-xs text-emerald-800 bg-white rounded-xl p-3 mb-3 leading-relaxed">
                        "You are a Python engineer. Task: Rename variables for clarity. Return patch only. No commentary."
                      </div>
                      <div className="text-xs text-emerald-700">
                        Result: 80–150 token response. Just the renamed variables as a diff. Exactly what was asked.
                      </div>
                    </div>
                  </div>

                  <p>
                    The difference is not the task — it is the <strong className="text-surface-800">output contract</strong>.
                    Every template below includes an explicit output contract that tells Claude what to produce and what to omit.
                  </p>
                </div>
              </section>

              {/* ANATOMY */}
              <section id="token-minimal-anatomy">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Anatomy of a Low-Token Prompt</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Every prompt template below follows the same four-part structure. Learn this once and you can write low-token prompts for any task.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      part: 'Role (1 line)',
                      example: 'You are a senior TypeScript engineer.',
                      why: 'Sets Claude\'s knowledge frame without setup overhead. 1 line is enough — don\'t add backstory.',
                    },
                    {
                      part: 'Goal (≤10 words)',
                      example: 'Goal: Fix the type error in this function.',
                      why: 'Specificity eliminates scope creep. "Fix X" produces a fix. "Improve this" produces an essay.',
                    },
                    {
                      part: 'Input (labeled clearly)',
                      example: 'Input:\n[paste only the relevant code section]',
                      why: 'Label the input so Claude knows exactly what to operate on. Never paste the whole file when one function is the target.',
                    },
                    {
                      part: 'Rules (output constraints)',
                      example: 'Rules:\n- Return patch only.\n- No explanation.\n- Max 10 lines.',
                      why: 'This is the most important part. Output constraints prevent Claude from expanding into explanation mode.',
                    },
                  ].map(item => (
                    <div key={item.part} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">✦</div>
                      <div className="flex-1">
                        <div className="font-bold text-surface-900 mb-1">{item.part}</div>
                        <div className="font-mono text-xs text-brand-700 bg-brand-50 rounded-lg px-3 py-2 mb-2 whitespace-pre">{item.example}</div>
                        <div className="text-xs text-surface-500 leading-relaxed">{item.why}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expert insight */}
                <div className="mt-5 bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">🧠 Expert Insight</div>
                  <p className="text-sm text-surface-700 leading-relaxed">
                    The "Rules" section is where most people underinvest. A prompt without output constraints relies on Claude to guess the right format, length, and depth. It usually guesses "comprehensive." Your job is to tell Claude what "done" looks like — so it stops before doing extra work you didn't ask for.
                  </p>
                </div>
              </section>

              {/* 8 TEMPLATES */}
              {TEMPLATES.map(t => {
                const bg = colorBg[t.color] || colorBg.brand;
                const tx = colorText[t.color] || colorText.brand;
                const hd = colorHeader[t.color] || colorHeader.brand;
                return (
                  <section key={t.id} id={t.id}>
                    {/* Header */}
                    <div className={`${hd} rounded-t-2xl px-6 py-5`}>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-black font-mono text-sm" style={{ color: '#ffffff' }}>{t.n}</span>
                        <span className="text-2xl">{t.icon}</span>
                      </div>
                      <h2 className="font-display font-black text-xl" style={{ color: '#ffffff' }}>{t.title}</h2>
                      <div className="text-sm mt-1" style={{ color: '#ffffff' }}>{t.subtitle}</div>
                    </div>

                    <div className={`border-2 ${bg.split(' ')[1]} rounded-b-2xl p-6 space-y-6`}>

                      {/* Why + When */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">Why It Works</div>
                          <p className="text-sm text-surface-700 leading-relaxed">{t.why}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">When to Use This</div>
                          <p className="text-sm text-surface-700 leading-relaxed">{t.when}</p>
                        </div>
                      </div>

                      {/* Template block */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">📋 Template — Copy This</div>
                        <pre className={`${bg.split(' ')[0]} border ${bg.split(' ')[1]} rounded-xl p-4 text-sm font-mono ${tx} whitespace-pre-wrap leading-relaxed overflow-x-auto`}>
                          {t.template}
                        </pre>
                      </div>

                      {/* Real example */}
                      <div className="bg-surface-900 rounded-xl overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/10">
                          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#94a3b8' }}>
                            Real Example — {t.example.context}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="text-xs font-bold mb-2" style={{ color: '#94a3b8' }}>Filled Template:</div>
                          <pre className="text-sm font-mono whitespace-pre-wrap leading-relaxed mb-4 overflow-x-auto" style={{ color: '#6ee7b7' }}>
                            {t.example.filled}
                          </pre>
                          <div className="text-xs font-bold mb-2" style={{ color: '#94a3b8' }}>What Claude Returns:</div>
                          <div className="text-sm bg-white/10 rounded-lg p-3 leading-relaxed" style={{ color: '#ffffff' }}>
                            {t.example.output}
                          </div>
                        </div>
                      </div>

                      {/* Token saving + Pro tip + Mistake */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className={`${bg.split(' ')[0]} border ${bg.split(' ')[1]} rounded-xl p-4`}>
                          <div className={`text-xs font-bold ${tx} mb-1`}>💾 Token Saving</div>
                          <div className="text-xs text-surface-700">{t.tokenSaving}</div>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                          <div className="text-xs font-bold text-amber-700 mb-1">⚡ Pro Tip</div>
                          <div className="text-xs text-amber-800">{t.proTip}</div>
                        </div>
                        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                          <div className="text-xs font-bold text-rose-700 mb-1">⚠️ Mistake to Avoid</div>
                          <div className="text-xs text-rose-800">{t.mistake}</div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}

              {/* UNIVERSAL RULES */}
              <section id="universal-rules">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Universal Rules for Token-Light Prompts</h2>
                <div className="space-y-3">
                  {[
                    {
                      rule:'One task per prompt',
                      detail:'Every additional task you add increases the chance Claude expands into explanation mode to "connect" the tasks. Separate tasks = separate prompts = cleaner outputs.',
                      example:'"Fix the bug" is one task. "Fix the bug and also explain what caused it and suggest how to prevent it in future" is three tasks — and will produce a 500-token response for what should be a 50-token fix.',
                    },
                    {
                      rule:'"No explanation" is the most powerful rule',
                      detail:'Claude\'s default is to explain. Explicitly blocking explanation can cut response length by 40–60% on simple tasks. Add it whenever explanation would be obvious or unwanted.',
                      example:'"You are a grammar editor. Correct this email. Return corrected version only. No explanation." — The corrected email is what you needed. The explanation of what was wrong was not.',
                    },
                    {
                      rule:'Ask for patches, not full files',
                      detail:'For code tasks, a patch (only changed lines) produces 5–10× fewer tokens than a full file rewrite. The actual content delivered is identical — just without the unchanged lines.',
                      example:'Fixing a 3-line bug in a 200-line file: patch = 15 tokens. Full file = 800 tokens. Same fix, 98% fewer output tokens.',
                    },
                    {
                      rule:'Use labeled sections, not paragraphs',
                      detail:'Structured prompts (Role: / Goal: / Input: / Rules:) parse faster than prose paragraphs. Claude extracts intent more accurately, reducing the need for clarification.',
                      example:'"Role: marketing writer. Goal: rewrite this CTA. Input: [text]. Rules: max 15 words, active voice." is clearer than a two-paragraph explanation of what you want.',
                    },
                    {
                      rule:'Batch related questions into one message',
                      detail:'Three separate messages = three full context loads. One message with three questions = one context load. At message 20, each separate message costs the re-reading of 20 messages.',
                      example:'"Review this code for: (1) security risks, (2) performance issues, (3) naming clarity. Format: 3 separate numbered lists, max 3 items each." — One message, three scoped answers.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-surface-200 rounded-2xl overflow-hidden">
                      <div className="bg-surface-50 px-5 py-4 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0">{i+1}</div>
                        <h3 className="font-bold text-surface-900">{item.rule}</h3>
                      </div>
                      <div className="px-5 py-4 space-y-3">
                        <p className="text-sm text-surface-600 leading-relaxed">{item.detail}</p>
                        <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
                          <div className="text-xs font-bold text-brand-600 mb-1">Example</div>
                          <div className="text-xs text-surface-700 leading-relaxed">{item.example}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* MISTAKES */}
              <section id="mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Mistakes That Bloat Token Usage</h2>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900">
                        <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Mistake</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Token Impact</th>
                        <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Fix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { mistake:'Vague task descriptions',                    impact:'Very High', fix:'Specify goal in 10 words or fewer'                },
                        { mistake:'No output format specified',                  impact:'Very High', fix:'Add "numbered list / table / patch only"'          },
                        { mistake:'Asking for explanation you don\'t need',      impact:'High',      fix:'Add "no explanation unless asked"'                 },
                        { mistake:'Pasting entire files for 1-function fixes',  impact:'High',      fix:'Paste only the relevant function or section'       },
                        { mistake:'Sending corrections as new messages',         impact:'High',      fix:'Edit the original prompt instead'                  },
                        { mistake:'Multi-task prompts without format per task',  impact:'Medium',    fix:'Number each task with its own output format'       },
                        { mistake:'"Please", "can you", "I was wondering"',     impact:'Low',       fix:'Direct commands: "Review:", "Fix:", "List:"'        },
                        { mistake:'Mixing unrelated tasks in one prompt',        impact:'Medium',    fix:'One topic per prompt. Batch only related tasks.'   },
                      ].map((r, i) => (
                        <tr key={r.mistake} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 text-surface-800">✗ {r.mistake}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.impact === 'Very High' ? 'bg-rose-100 text-rose-700' : r.impact === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-surface-100 text-surface-600'}`}>
                              {r.impact}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-emerald-700 text-xs font-medium">✓ {r.fix}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-bold text-white mb-1">Want to Save Even More Tokens?</div>
                  <div className="text-brand-200 text-sm">Read our complete guide on Claude token optimization — 10 habits that cut usage by 85–90%.</div>
                </div>
                <Link href="/blog/how-to-save-tokens-in-claude" className="shrink-0 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                  Token Saving Guide →
                </Link>
              </div>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {
                      q:'What is a low-token prompt in Claude?',
                      a:'A low-token prompt is structured to get a precise, complete answer in the fewest tokens possible. It specifies a role in one line, constrains the output format (numbered list, table, code patch), adds "no commentary" to block explanation, and batches related tasks into a single message instead of a conversational chain.',
                    },
                    {
                      q:'How do you reduce token usage in Claude?',
                      a:'Reduce token usage by: (1) editing prompts instead of sending corrections as new messages, (2) adding output constraints like "numbered list only" or "patch only," (3) starting fresh chats every 15–20 messages with a compact summary, (4) writing "no explanation" for simple tasks, and (5) batching multiple related questions into one prompt instead of a back-and-forth chain.',
                    },
                    {
                      q:'What is prompt engineering for Claude?',
                      a:'Prompt engineering for Claude is structuring prompts to get accurate, complete, and concise outputs efficiently. It means setting a clear one-line role, defining output format explicitly, specifying constraints like "max 5 items" or "1 sentence each," and batching context to minimize back-and-forth exchanges that grow conversation history.',
                    },
                    {
                      q:'Should I use XML tags in Claude prompts?',
                      a:'XML-style tags like <task>, <input>, and <rules> help Claude parse complex prompts accurately — especially when there are multiple components. For simple 3–4 line prompts, plain labeled sections (Task: / Input: / Rules:) work equally well and are slightly more token-efficient. Use XML when your prompt has 5+ distinct sections.',
                    },
                    {
                      q:'What format does Claude respond best to?',
                      a:'Claude responds most precisely when given: a one-line role, a goal in 10 words or fewer, clearly labeled input, explicit output constraints (numbered list, table, patch), and a length limit. This structure eliminates ambiguity and prevents Claude from expanding into explanation or comprehensive mode.',
                    },
                    {
                      q:'Is it worth writing a longer, more detailed prompt to save tokens?',
                      a:'Yes — if the detail is output constraints, not context. A prompt that adds "Return numbered list only. Max 5 items. No explanation." costs 15 extra tokens but saves 200–500 tokens in Claude\'s response. The ROI is extremely positive. However, adding background context, examples, and backstory to a prompt that doesn\'t need them just burns tokens on both sides.',
                    },
                  ].map((faq, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                     >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                        {faq.q}
                        <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                       >
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Summary */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5" style={{ color: '#ffffff' }}>Cheatsheet — 8 Templates at a Glance</h2>
                <div className="space-y-2 mb-6">
                  {TEMPLATES.map(t => (
                    <div key={t.id} className="flex items-start gap-3">
                      <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: '#64748b' }}>{t.n}</span>
                      <span className="text-lg shrink-0">{t.icon}</span>
                      <div>
                        <span className="font-semibold text-sm" style={{ color: '#ffffff' }}>{t.title}</span>
                        <span className="text-xs ml-2" style={{ color: '#94a3b8' }}>— {t.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="font-bold mb-2" style={{ color: '#ffffff' }}>🔖 Bookmark This Page</div>
                  <p className="text-sm mb-4" style={{ color: '#ffffff' }}>
                    These templates are ready to copy-paste. Save this page and come back whenever you start a new Claude session.
                    Share with your team — every prompt they write efficiently saves collective budget.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/ai-tools/claude" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                      Claude Full Review →
                    </Link>
                    <Link href="/blog/how-to-save-tokens-in-claude" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm">
                      Token Saving Guide →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/how-to-save-tokens-in-claude',            icon:'🧠', label:'10 Habits to Save Claude Tokens',   desc:'Why long chats cost 928× more — and how to fix it'        },
                    { href:'/ai-tools/claude',                               icon:'📖', label:'Claude Full Review 2026',           desc:'Features, pricing, and honest pros and cons'              },
                    { href:'/ai-tools/claude-vs-chatgpt',                   icon:'⚔️', label:'Claude vs ChatGPT',                 desc:'Which AI handles long docs and token limits better?'       },
                    { href:'/ai-tools',                                      icon:'🤖', label:'Best AI Tools 2026',                desc:'Claude, Gemini, Jasper, Grammarly — ranked and reviewed'  },
                  ].map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                      <span className="text-xl">{l.icon}</span>
                      <div>
                        <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Note:</strong> Token estimates are based on Claude Sonnet usage patterns and Anthropic's tokenizer as of April 2026. Actual token counts vary by model, content, and language. Template effectiveness depends on task specificity. Always test templates on your specific use case.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}