import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'How to Save Tokens in Claude — 19 Proven Habits for Chat & Code (2026)',
  description: 'Save tokens in Claude chat and Claude Code. 19 proven habits to cut token usage by 60-90% — context management, model switching, .claudeignore, /compact & more.',
  keywords: [
    'claude token usage', 'how to save tokens in claude', 'claude usage limits',
    'claude pricing tokens', 'how to reduce token usage in claude ai',
    'why claude uses more tokens in long chats', 'claude token calculation explained',
    'how to avoid hitting claude limits', 'claude usage tips 2026',
    'how claude context window works', 'claude cost optimization strategies',
    'claude ai token cost per message', 'how to use claude efficiently',
    'save tokens claude code', 'claude code token usage', 'reduce claude code costs',
    'claude code context management', 'claudeignore', 'compact claude code',
    'claude code opus plan mode', 'claude code cost per day',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-save-tokens-in-claude` },
  openGraph: {
    title: 'How to Save Tokens in Claude — 19 Proven Habits for Chat & Code (2026)',
    description: 'The complete guide to Claude token optimization for Chat and Claude Code. 19 proven habits, cheat sheets, and workflows.',
    url: `${SITE_CONFIG.url}/blog/how-to-save-tokens-in-claude`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
};

const TOC = [
  { id:'what-are-tokens',      label:'What Are Tokens in Claude?'               },
  { id:'token-math',           label:'Why Long Chats Cost More Exponentially'    },
  { id:'common-mistakes',      label:'Common Mistakes That Waste Tokens'         },
  { id:'10-habits',            label:'10 Chat Habits to Save Tokens'             },
  { id:'claude-code-tokens',   label:'9 Claude Code Habits to Save Tokens'       },
  { id:'claude-code-cheatsheet',label:'Claude Code Command Cheat Sheet'          },
  { id:'best-workflow',        label:'Best Workflow for Heavy Users'             },
  { id:'claude-vs-chatgpt',    label:'Claude vs ChatGPT Token Usage'             },
  { id:'faq',                  label:'Frequently Asked Questions'                },
];

const HABITS = [
  {
    n:'01', icon:'✏️',
    title:'Edit Your Prompt — Don\'t Send a Follow-Up',
    why:'Every new message adds to the conversation history. When you send a correction as a new message, Claude re-reads every single word you\'ve exchanged before answering. The correction itself is almost free — the re-reading of history is what burns tokens.',
    example:'You ask Claude to write a product description. It goes too formal. Instead of sending "Make it more casual" as message 2, click Edit on message 1 and add "in a casual, friendly tone" to the original prompt.',
    do:'Click Edit on your original message → fix it → regenerate',
    dont:'Send "No, I meant..." or "Make it more casual" as follow-up messages',
    saving:'One edit saves you the full cost of re-reading your entire conversation.',
    color:'emerald',
  },
  {
    n:'02', icon:'🔄',
    title:'Start a Fresh Chat Every 15–20 Messages',
    why:'After 20 messages, each new prompt forces Claude to re-read the equivalent of a short novel before responding. Most of that history is irrelevant to your current question. A fresh chat with a summary drops context from 2.5M tokens to under 5,000.',
    example:'You\'ve been debugging code for 25 messages. Ask Claude: "Summarize the problem we solved, the final solution, and any gotchas for next time." Copy that summary. Open a new chat. Paste it as message 1. Continue fresh.',
    do:'Summarize → Copy → New chat → Paste summary as first message',
    dont:'Let one thread run for 50+ messages "to keep context"',
    saving:'Fresh chats cut token usage by 85–95% on long conversations.',
    color:'brand',
  },
  {
    n:'03', icon:'📦',
    title:'Batch Your Questions Into One Message',
    why:'Three separate messages means three full context loads. One message with three tasks means one context load. You save tokens AND Claude gives better answers because it sees the complete picture at once.',
    example:'Instead of: "Summarize this." → "Now list key points." → "Now suggest a headline." Send: "Read the text below. (1) Summarize in 3 sentences. (2) List 5 key points. (3) Suggest a headline. [paste text]"',
    do:'Combine related tasks into one prompt with numbered instructions',
    dont:'Send three short messages when one structured message would do',
    saving:'3 questions in 1 prompt ≈ 1/3 the token cost.',
    color:'purple',
  },
  {
    n:'04', icon:'📁',
    title:'Upload Recurring Files to Projects',
    why:'Every time you upload the same PDF to a new chat, Claude processes it from scratch — re-tokenising the entire document. If you reference a 50-page report daily, you\'re paying to re-read it every single time.',
    example:'You use a product spec document in every customer support chat. Create a Project, upload the spec once, and start every support chat inside that project. Claude reads it once and retains it.',
    do:'Create a Project → Upload file once → Run all related chats inside it',
    dont:'Re-upload the same document in every new conversation',
    saving:'If you use the same file in 5+ chats per day, Projects can eliminate 70–80% of file-related token consumption.',
    color:'amber',
  },
  {
    n:'05', icon:'🧠',
    title:'Set Up Memory & User Preferences',
    why:'Without saved preferences, you spend the first 3–5 messages of every chat telling Claude who you are, how you like to write, and what you\'re working on. These setup messages add up to hundreds of wasted tokens per day.',
    example:'"I\'m a fintech product manager. Write in clear, concise language for a technical audience. Default to bullet points for lists. Never use passive voice." — saved once in Preferences, never re-typed again.',
    do:'Settings → Memory and User Preferences → Save your role, tone, and defaults',
    dont:'Start every chat with "Act as a..." or "I\'m a [role] who..."',
    saving:'Saves 3–5 setup messages per chat — hundreds of tokens per day for heavy users.',
    color:'teal',
  },
  {
    n:'06', icon:'⚡',
    title:'Use Haiku for Simple Tasks',
    why:'Claude Haiku is optimized for speed and efficiency on straightforward tasks. Grammar checks, list generation, simple formatting, and quick translations do not require the reasoning power of Sonnet or Opus. Using a sledgehammer to crack a nut wastes the sledgehammer.',
    example:'Grammar check? Haiku. Brainstorming 10 product names? Haiku. Translating a paragraph? Haiku. Analyzing a complex contract for legal risk? Sonnet. Writing a nuanced research report? Opus.',
    do:'Pick the model that matches task complexity from the model picker',
    dont:'Default to Opus or Sonnet for every task out of habit',
    saving:'Haiku frees up 50–70% of your session budget for tasks that actually need intelligence.',
    color:'green',
  },
  {
    n:'07', icon:'🔌',
    title:'Turn Off Features You\'re Not Using',
    why:'Web search, Extended Thinking, and active connectors all consume tokens when switched on — even on tasks where they\'re not needed. Extended Thinking in particular can multiply your token usage significantly before Claude even begins writing.',
    example:'If you\'re brainstorming product ideas, you don\'t need web search or Extended Thinking. Turn them off. Save them for when you genuinely need real-time data or complex multi-step reasoning.',
    do:'Enable features only when the specific task requires them',
    dont:'Leave all features on "just in case"',
    saving:'Turning off Extended Thinking on simple tasks can cut token usage by 40–60%.',
    color:'rose',
  },
  {
    n:'08', icon:'⏰',
    title:'Spread Your Work Across the Day',
    why:'Claude uses a rolling 5-hour window — not a midnight reset. Work done at 9 AM rolls off by 2 PM. If you dump all your heavy tasks into one 3-hour session, you\'re burning all your budget at once and leaving the rest of your day empty.',
    example:'Instead of a 3-hour Claude marathon from 9 AM to noon, split into: 9–10 AM (research tasks), 1–2 PM (writing tasks), 7–8 PM (review and iteration). By the time you return for session 2, session 1 is already rolling off.',
    do:'Split heavy work into 2–3 sessions: morning, afternoon, evening',
    dont:'Run all complex tasks in a single marathon session',
    saving:'Spreading work can effectively double your daily productive output from Claude.',
    color:'blue',
  },
  {
    n:'09', icon:'📅',
    title:'Avoid Peak Hours for Heavy Tasks',
    why:'Since March 26, 2026, Claude processes usage limits with greater intensity during peak hours — meaning the same prompt costs more effective budget during rush hour than off-peak. This is especially important for Indian users.',
    example:'Need to process a long document or run 20 follow-up iterations on a complex project? Do it at 7 AM or 9 PM rather than 6 PM on a weekday.',
    do:'Shift complex, token-intensive work to evenings or early mornings',
    dont:'Schedule your heaviest Claude sessions during weekday peak hours',
    saving:'Peak hours (5:30–11:30 PM IST weekdays) apply more pressure per session. Off-peak usage goes further.',
    color:'indigo',
  },
  {
    n:'10', icon:'🛡️',
    title:'Enable Extra Usage as a Safety Net',
    why:'Even with perfect optimization, some tasks simply require more. Rather than lose momentum mid-project when your session limit hits, enable pay-as-you-go billing. Claude switches to API rates and you continue working without interruption.',
    example:'You\'re three-quarters through a complex code refactor when your limit hits. Without overage enabled, you wait 5 hours or start over. With it enabled, you finish the task and pay a small API rate for the extra tokens.',
    do:'Settings → Usage → Enable Overage → Set a monthly spending cap',
    dont:'Risk losing mid-project work because of unexpected limit hit',
    saving:'This doesn\'t save tokens — but it protects your workflow and your momentum.',
    color:'surface',
  },
];

const colorMap = {
  emerald:'bg-emerald-50 border-emerald-200 text-emerald-700',
  brand:  'bg-brand-50 border-brand-200 text-brand-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
  amber:  'bg-amber-50 border-amber-200 text-amber-700',
  teal:   'bg-teal-50 border-teal-200 text-teal-700',
  green:  'bg-green-50 border-green-200 text-green-700',
  rose:   'bg-rose-50 border-rose-200 text-rose-700',
  blue:   'bg-blue-50 border-blue-200 text-blue-700',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  surface:'bg-surface-50 border-surface-200 text-surface-700',
  cyan:   'bg-cyan-50 border-cyan-200 text-cyan-700',
  orange: 'bg-orange-50 border-orange-200 text-orange-700',
  sky:    'bg-sky-50 border-sky-200 text-sky-700',
  lime:   'bg-lime-50 border-lime-200 text-lime-700',
  fuchsia:'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
  violet: 'bg-violet-50 border-violet-200 text-violet-700',
  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  pink:   'bg-pink-50 border-pink-200 text-pink-700',
  slate:  'bg-slate-50 border-slate-200 text-slate-700',
};

const CODE_HABITS = [
  {
    n:'11', icon:'🧹',
    title:'Use /clear Between Unrelated Tasks',
    why:'When you switch from debugging authentication to writing a new API endpoint in the same session, Claude still carries the entire auth debugging history in its context. Every new message pays the tax of re-reading irrelevant history. /clear wipes it.',
    example:'You just finished debugging a login issue (15 messages deep). Now you need to write a new database migration. Type /clear before starting the migration work. The auth context was costing you tokens on every subsequent message.',
    do:'Type /clear whenever you switch to an unrelated task or module',
    dont:'Carry context from Feature A into a conversation about Feature B',
    saving:'Eliminates 100% of stale context tax — the single biggest lever in Claude Code.',
    color:'cyan',
  },
  {
    n:'12', icon:'📦',
    title:'Use /compact to Compress Context',
    why:'Sometimes you don\'t want to lose context entirely — you just want to slim it down. /compact summarizes the current conversation while preserving key information you specify. Far more targeted than /clear.',
    example:'You\'re 20 messages into building a feature. Run: /compact keep the auth module changes, test results, and the database schema. Claude compresses everything else and frees up context space.',
    do:'Run /compact every 15-20 messages — tell it what to keep',
    dont:'Wait until "context full" warnings appear — by then you\'ve already overpaid',
    saving:'Reduces context by 50-70% while preserving what matters. Run proactively, not reactively.',
    color:'orange',
  },
  {
    n:'13', icon:'🔀',
    title:'Switch Models with /model — Sonnet for Most, Opus for Architecture',
    why:'The default for most Claude Code users is Opus — the most expensive model. Every file read, every simple refactor, every formatting task runs on it. Sonnet handles 80% of coding tasks equally well at a fraction of the cost.',
    example:'Writing a test? /model sonnet. Simple refactor? /model sonnet. Designing a complex multi-service architecture? /model opus. Quick file read? /model haiku.',
    do:'/model sonnet as your default — switch to opus only for complex reasoning',
    dont:'Leave Opus as default for every task out of habit',
    saving:'Sonnet handles most coding tasks well and costs significantly less than Opus. Reserve Opus for architectural decisions.',
    color:'sky',
  },
  {
    n:'14', icon:'📄',
    title:'Keep CLAUDE.md Under 200 Lines — Move Details to Skills',
    why:'CLAUDE.md loads at session start and stays in context for the entire session. Every token in that file is processed on every single turn. A bloated CLAUDE.md with your full project history is silently burning tokens from the moment you start.',
    example:'Move your API docs to docs/API.md, testing patterns to docs/TESTING.md, and deployment steps to docs/DEPLOYMENT.md. Keep CLAUDE.md to: project summary (3 lines), tech stack (1 line), key conventions, active TODOs.',
    do:'Keep CLAUDE.md under 200 lines — move workflow docs into Skills (loaded on-demand)',
    dont:'Put your entire project history, architecture docs, and changelogs in CLAUDE.md',
    saving:'Every line removed from CLAUDE.md saves tokens on every turn, for every session. Savings compound daily.',
    color:'lime',
  },
  {
    n:'15', icon:'🚫',
    title:'Add .claudeignore to Exclude Junk Files',
    why:'Without a .claudeignore, Claude Code reads and indexes everything — including node_modules, lock files, build artifacts, and generated code that will never be relevant to any coding task.',
    example:'Create .claudeignore in your project root: node_modules/, dist/, build/, *.lock, *.min.js, *.min.css, .next/, coverage/, __pycache__/, target/',
    do:'Create .claudeignore on day one of every project — treat it like .gitignore',
    dont:'Let Claude scan 10,000 files in node_modules to help you fix a bug in one component',
    saving:'Prevents Claude from reading thousands of irrelevant files. Can reduce per-session cost by 20-40% on large projects.',
    color:'fuchsia',
  },
  {
    n:'16', icon:'🤖',
    title:'Delegate Verbose Output to Subagents',
    why:'When Claude Code runs npm test, git log, or build scripts, the full output enters your main context window — and gets re-read on every subsequent turn. 200 test results or 100 git commits = thousands of wasted tokens.',
    example:'Instead of running a full test suite in your main context, delegate it to a subagent. The verbose output stays in the subagent\'s context — only a clean summary returns to your main conversation.',
    do:'Use subagents for test suites, build logs, git history, and codebase scans',
    dont:'Run verbose shell commands directly in your main conversation',
    saving:'Keeps your main context lean. Only summaries return — not 10,000 lines of test output.',
    color:'violet',
  },
  {
    n:'17', icon:'💡',
    title:'Cap Extended Thinking with /effort',
    why:'Extended Thinking runs a long internal reasoning chain before responding. The default budget can be tens of thousands of tokens per request. For a simple file read or variable rename, that\'s money burned on reasoning that requires no reasoning.',
    example:'Renaming a variable across files? /effort low. Designing a caching strategy for a distributed system? /effort high. Or set a global cap: MAX_THINKING_TOKENS=8000 in your environment.',
    do:'/effort low for routine tasks — /effort high only for complex multi-step problems',
    dont:'Leave Extended Thinking at default for every request regardless of complexity',
    saving:'Capping thinking tokens on simple tasks can reduce per-request cost by 40-60%.',
    color:'yellow',
  },
  {
    n:'18', icon:'🧠',
    title:'Use Opus Plan Mode — /model opus-plan',
    why:'This splits work between two models: Opus handles planning and reasoning (where it excels), Sonnet handles execution and code writing (where Opus is overkill). Since execution is 60-80% of token budget in a coding session, the savings are massive.',
    example:'Type /model opus-plan before a complex feature build. Opus designs the approach and identifies edge cases. Sonnet implements the plan. There\'s a review step in between where you catch mistakes before execution begins.',
    do:'/model opus-plan for any task that needs smart planning but routine execution',
    dont:'Use Opus for everything when Sonnet can handle the execution phase',
    saving:'Opus-quality reasoning at Sonnet-level execution costs. Best cost-to-quality ratio in Claude Code.',
    color:'pink',
  },
  {
    n:'19', icon:'🎯',
    title:'Write Specific Prompts — Vague Equals Expensive',
    why:'Vague prompts trigger file exploration across your entire codebase. Claude reads dozens of files hunting for what you might mean. Specific prompts go directly to the right file and function — minimal exploration, minimal tokens.',
    example:'Instead of "Fix the bug in the authentication flow" (triggers full codebase scan), say "Fix the null reference error in loadUserMetrics in dashboard/analytics.js — user.preferences is undefined when no preferences are set."',
    do:'Name the exact file, exact function, and describe expected vs actual behavior',
    dont:'Say "fix the bug" and let Claude play detective across your entire project',
    saving:'Specific prompts can reduce per-request tokens by 50-80% compared to vague ones. Specificity is free — vagueness is not.',
    color:'slate',
  },
];

export default function ClaudeTokenBlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Save Tokens in Claude — 19 Proven Habits for Chat & Code (2026)',
        description: 'The complete guide to Claude token optimization for Chat and Claude Code. 19 proven habits, cheat sheets, and workflows.',
        url: `${SITE_CONFIG.url}/blog/how-to-save-tokens-in-claude`,
        datePublished: '2026-04-01',
        dateModified: '2026-04-12',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What are tokens in Claude?', acceptedAnswer: { '@type': 'Answer', text: 'Tokens are the units Claude uses to measure text. Roughly 1 token = 0.75 words in English, or about 4 characters. A typical message is 100–300 tokens. An uploaded PDF page is 500–800 tokens. Claude counts total tokens in the entire conversation history, not just your latest message.' } },
          { '@type': 'Question', name: 'Why does Claude use more tokens in longer chats?', acceptedAnswer: { '@type': 'Answer', text: 'Claude re-reads the entire conversation history before responding to each new message. Message 1 costs only your prompt. Message 30 costs your prompt PLUS the full history of 29 previous exchanges. This creates exponential growth — message 30 costs roughly 31x more than message 1 in terms of token consumption.' } },
          { '@type': 'Question', name: 'How can I check my Claude token usage?', acceptedAnswer: { '@type': 'Answer', text: 'Go to Settings > Usage in Claude.ai to see your current session usage. You can also see your 5-hour rolling window consumption. Claude Pro, Max 5x, and Max 20x subscribers have different base limits before reaching overage rates.' } },
          { '@type': 'Question', name: 'Does Claude reset token limits at midnight?', acceptedAnswer: { '@type': 'Answer', text: 'No. Claude uses a rolling 5-hour window, not a midnight reset. Usage from 9 AM rolls off by 2 PM. This means spreading work throughout the day is more efficient than a single long session, because earlier usage disappears from the window while you work.' } },
          { '@type': 'Question', name: 'Is Claude more expensive than ChatGPT for token usage?', acceptedAnswer: { '@type': 'Answer', text: 'Direct comparison is complex because both use subscription models. Claude\'s context window (up to 200K tokens for Claude Pro) is significantly larger than ChatGPT\'s standard window. However, larger context windows also mean more tokens consumed per message in long conversations. For most typical daily tasks, the per-message cost is comparable.' } },
          { '@type': 'Question', name: 'What is the best model to use to save Claude tokens?', acceptedAnswer: { '@type': 'Answer', text: 'Claude Haiku is the most token-efficient model for simple tasks like grammar checks, formatting, brainstorming, and translations. Use Haiku for 70% of tasks and save Sonnet and Opus for complex reasoning, long document analysis, and nuanced creative work.' } },
          { '@type': 'Question', name: 'How do I save tokens in Claude Code?', acceptedAnswer: { '@type': 'Answer', text: 'Use /clear when switching between unrelated tasks, use /compact every 15-20 messages to compress context, switch to Sonnet or Haiku for routine tasks with /model, keep CLAUDE.md under 200 lines, and add a .claudeignore file to exclude node_modules, lock files, and build artifacts.' } },
          { '@type': 'Question', name: 'What is /compact in Claude Code?', acceptedAnswer: { '@type': 'Answer', text: 'The /compact command summarizes your current conversation context while preserving key information, freeing up space in your context window. You can specify what to keep: /compact keep the auth module changes and test results. Set permanent rules in CLAUDE.md under a Compact instructions heading.' } },
          { '@type': 'Question', name: 'What is Opus Plan Mode in Claude Code?', acceptedAnswer: { '@type': 'Answer', text: 'Opus Plan Mode (/model opus-plan) splits coding tasks between two models: Opus handles planning and reasoning, Sonnet handles execution and code writing. Since execution accounts for 60-80% of token usage, this delivers Opus-quality thinking at a fraction of the cost.' } },
          { '@type': 'Question', name: 'How much does Claude Code cost per day?', acceptedAnswer: { '@type': 'Answer', text: 'According to Anthropic documentation, the average cost is approximately $13 per developer per active day, with 90% of users below $30 per active day. Monthly costs range from $150 to $250 per developer. Claude Max and Pro subscribers have usage included in their subscription.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'How to Save Tokens in Claude', item: `${SITE_CONFIG.url}/blog/how-to-save-tokens-in-claude` },
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
                <li className="text-surface-600">Claude Token Usage</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs text-surface-400">Updated April 12, 2026 · 18 min read</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              How to Save Tokens in Claude —<br className="hidden sm:block"/>
              <span className="text-brand-600">19 Proven Habits for Chat & Code (2026)</span>
            </h1>

            {/* PAS Hook */}
            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6 max-w-2xl">
              <p>
                You hit Claude's limit again. Mid-project. Mid-thought. And now you're waiting 5 hours.
              </p>
              <p>
                The frustrating part? <strong className="text-surface-800">Most of those tokens weren't spent on your work.</strong> They were spent on Claude re-reading conversations you'd already had — history that added nothing new.
              </p>
              <p>
                This guide explains exactly why that happens, how token usage grows exponentially with every message, and 19 specific habits that prevent it — for both Claude.ai chat and Claude Code.
              </p>
            </div>

            {/* Featured snippet — quick answer */}
            <div className="bg-surface-900 rounded-2xl p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-3">
                <span style={{ color: '#94a3b8' }}>📌 Quick Answer — How to Save Tokens in Claude</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-2">
                <span style={{ color: '#818cf8' }}>💬 Claude Chat (claude.ai)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {[
                  'Edit prompts instead of sending corrections',
                  'Start a fresh chat every 15–20 messages',
                  'Batch multiple questions into one message',
                  'Use Claude Haiku for simple tasks',
                  'Turn off unused features (Extended Thinking, Search)',
                  'Spread work across the day (5-hour rolling window)',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="shrink-0 font-bold" style={{ color: '#818cf8' }}>{String(i+1).padStart(2,'0')}</span>
                    <span style={{ color: '#ffffff' }}>{tip}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-2">
                <span style={{ color: '#34d399' }}>⌨️ Claude Code (CLI)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Use /clear between unrelated tasks',
                  'Use /compact to compress context',
                  'Switch models with /model — Sonnet for most work',
                  'Keep CLAUDE.md under 200 lines',
                  'Add .claudeignore to exclude junk files',
                  'Use Opus Plan Mode (/model opus-plan)',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="shrink-0 font-bold" style={{ color: '#34d399' }}>{String(i+11).padStart(2,'0')}</span>
                    <span style={{ color: '#ffffff' }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub AI Team</div>
                <div className="text-xs text-surface-400">Based on Anthropic documentation, usage analytics, and real-world testing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 bg-surface-50 border border-surface-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">Table of Contents</div>
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
                <div className="mt-5 pt-4 border-t border-surface-200">
                  <Link href="/ai-tools"
                    className="block w-full text-center bg-brand-600 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                    Explore AI Tools →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* WHAT ARE TOKENS */}
              <section id="what-are-tokens">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What Are Tokens in Claude?</h2>
                <div className="space-y-3 text-surface-600 leading-relaxed">
                  <p>
                    Tokens are the fundamental unit Claude uses to measure and process text. They are not characters, not words, not sentences.
                    <strong className="text-surface-800"> They sit somewhere in between.</strong>
                  </p>
                  <p>
                    As a rough guide: <strong className="text-surface-800">1 token ≈ 0.75 words in English</strong>, or approximately 4 characters. Common words like "the", "is", and "of" are each one token. Longer words like "optimization" may be 2–3 tokens.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                    {[
                      { item:'Short message', val:'~100–200 tokens' },
                      { item:'Detailed prompt', val:'~300–600 tokens' },
                      { item:'PDF page', val:'~500–800 tokens' },
                      { item:'Long document', val:'~50,000+ tokens' },
                    ].map(c => (
                      <div key={c.item} className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-center">
                        <div className="font-bold text-brand-700 text-sm mb-1">{c.val}</div>
                        <div className="text-xs text-surface-500">{c.item}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expert insight box */}
                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">🧠 Expert Insight</div>
                    <p className="text-sm text-surface-700 leading-relaxed">
                      <strong>The critical distinction most users miss:</strong> Claude doesn't count tokens per message.
                      It counts tokens across the <em>entire conversation history</em> every single time you send a new message.
                      This is called the context window — and every message you send forces Claude to process everything that came before it.
                    </p>
                  </div>
                </div>
              </section>

              {/* TOKEN MATH */}
              <section id="token-math">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why Long Chats Cost More Exponentially</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  This is the single most important thing to understand about Claude token usage — and almost nobody explains it clearly.
                </p>

                {/* The math */}
                <div className="bg-surface-900 rounded-2xl overflow-hidden mb-5">
                  <div className="px-5 py-3 border-b border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400">The Token Math — Why It Grows So Fast</div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left px-5 py-3 font-semibold text-surface-400">Message #</th>
                          <th className="text-right px-5 py-3 font-semibold text-surface-400">Tokens in that message</th>
                          <th className="text-right px-5 py-3 font-semibold text-surface-400">Total tokens processed</th>
                          <th className="text-right px-5 py-3 font-semibold text-brand-400">Cost multiplier</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { msg:'Message 1',  tokens:'~250',   total:'~250',    mult:'1×',  highlight:false },
                          { msg:'Message 5',  tokens:'~250',   total:'~7,500',  mult:'30×', highlight:false },
                          { msg:'Message 10', tokens:'~250',   total:'~27,500', mult:'110×',highlight:false },
                          { msg:'Message 20', tokens:'~250',   total:'~105,000',mult:'420×',highlight:true  },
                          { msg:'Message 30', tokens:'~250',   total:'~232,000',mult:'928×',highlight:true  },
                        ].map((r, i) => (
                          <tr key={r.msg} className={`border-b border-white/5 ${r.highlight ? 'bg-rose-900/30' : i % 2 === 0 ? 'bg-white/5' : ''}`}>
                            <td className="px-5 py-3 font-semibold text-white">{r.msg}</td>
                            <td className="px-5 py-3 text-right text-surface-300">{r.tokens}</td>
                            <td className="px-5 py-3 text-right text-surface-300">{r.total}</td>
                            <td className={`px-5 py-3 text-right font-black ${r.highlight ? 'text-rose-400' : 'text-brand-400'}`}>{r.mult}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-5 py-3 text-xs text-surface-400">
                    * Estimates based on ~250 token average per exchange (prompt + response). Actual usage varies by message length.
                  </div>
                </div>

                <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl text-sm text-rose-800">
                  <strong>Real-world example:</strong> You've had a 30-message coding session. You ask one more simple question — "What's the variable name we used for the user ID?" That simple question costs Claude 232,000+ tokens to answer, because it re-reads your entire 30-message history. The answer itself is 5 tokens. The history tax is enormous.
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="common-mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Mistakes That Waste Tokens</h2>
                <div className="space-y-3">
                  {[
                    {
                      mistake:'Sending corrections as new messages',
                      impact:'High',
                      why:'Each correction adds to history AND forces Claude to re-read everything before it.',
                      fix:'Edit the original prompt instead.',
                    },
                    {
                      mistake:'Uploading the same file to multiple chats',
                      impact:'Very High',
                      why:'Every upload is reprocessed from scratch — 500–800 tokens per page, every time.',
                      fix:'Use Projects to upload once and reuse across all chats.',
                    },
                    {
                      mistake:'Running all tasks in one mega session',
                      impact:'High',
                      why:'Tokens accumulate exponentially. Session 3 in one chat costs far more than 3 fresh chats.',
                      fix:'Start new chats with summaries every 15–20 messages.',
                    },
                    {
                      mistake:'Using Sonnet/Opus for simple tasks',
                      impact:'Medium',
                      why:'These models consume your premium session budget on tasks Haiku handles equally well.',
                      fix:'Match model to task complexity.',
                    },
                    {
                      mistake:'Leaving Extended Thinking on by default',
                      impact:'Very High',
                      why:'Extended Thinking runs a long internal reasoning process before responding — even on simple prompts.',
                      fix:'Enable only for genuinely complex multi-step problems.',
                    },
                    {
                      mistake:'Repeating context Claude already has',
                      impact:'Medium',
                      why:'"As I mentioned earlier..." followed by re-explaining the context — Claude already has this in history.',
                      fix:'Reference what you said without re-stating it. Just say "use the constraint from message 3."',
                    },
                  ].map((m, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                      <div className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full ${m.impact === 'Very High' ? 'bg-rose-100 text-rose-700' : m.impact === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-surface-100 text-surface-600'}`}>
                        {m.impact}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-surface-900 text-sm mb-1">✗ {m.mistake}</div>
                        <div className="text-xs text-surface-500 mb-1">{m.why}</div>
                        <div className="text-xs text-emerald-700 font-semibold">✓ Fix: {m.fix}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 10 HABITS */}
              <section id="10-habits">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">10 Chat Habits to Save Tokens in Claude</h2>
                <p className="text-surface-600 leading-relaxed mb-6">
                  These habits apply to Claude.ai — the chat interface. Each one directly targets a specific way Claude consumes tokens — with an explanation of why it works, a concrete example, and the exact saving.
                </p>

                <div className="space-y-6">
                  {HABITS.map(h => {
                    const c = colorMap[h.color] || colorMap.surface;
                    return (
                      <div key={h.n} className={`border-2 ${c.split(' ')[1]} rounded-2xl overflow-hidden`}>
                        {/* Header */}
                        <div className={`${c.split(' ')[0]} px-6 py-4 flex items-center gap-4`}>
                          <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-sm ${c.split(' ')[2]}`}>
                            {h.n}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{h.icon}</span>
                            <h3 className="font-display font-bold text-surface-900 text-base">{h.title}</h3>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          {/* Why */}
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-1">Why It Matters</div>
                            <p className="text-sm text-surface-700 leading-relaxed">{h.why}</p>
                          </div>

                          {/* Example */}
                          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">📝 Example</div>
                            <p className="text-sm text-surface-700 leading-relaxed">{h.example}</p>
                          </div>

                          {/* DO / DON'T */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                              <div className="text-xs font-bold text-emerald-700 mb-1">✅ DO</div>
                              <div className="text-sm text-emerald-800">{h.do}</div>
                            </div>
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                              <div className="text-xs font-bold text-rose-700 mb-1">❌ DON'T</div>
                              <div className="text-sm text-rose-800">{h.dont}</div>
                            </div>
                          </div>

                          {/* Saving */}
                          <div className={`p-3 ${c.split(' ')[0]} border ${c.split(' ')[1]} rounded-xl text-xs font-semibold ${c.split(' ')[2]}`}>
                            💾 {h.saving}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* CLAUDE CODE HABITS */}
              <section id="claude-code-tokens">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display font-bold text-2xl text-surface-900">9 Claude Code Habits to Save Tokens</h2>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">CLI</span>
                </div>
                <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
                  <p>
                    Everything above applies to Claude's chat interface at claude.ai. If you use <strong className="text-surface-800">Claude Code</strong> — Anthropic's command-line coding agent — the token dynamics are different and the stakes are higher.
                  </p>
                  <p>
                    Claude Code charges by API token consumption. According to Anthropic's documentation, the average cost across enterprise deployments is around <strong className="text-surface-800">$13 per developer per active day</strong> and <strong className="text-surface-800">$150–250 per developer per month</strong>. Most of that cost comes from context bloat — Claude re-reading files, build logs, and stale conversation history that has nothing to do with the current task.
                  </p>
                </div>

                <div className="space-y-6">
                  {CODE_HABITS.map(h => {
                    const c = colorMap[h.color] || colorMap.surface;
                    return (
                      <div key={h.n} className={`border-2 ${c.split(' ')[1]} rounded-2xl overflow-hidden`}>
                        {/* Header */}
                        <div className={`${c.split(' ')[0]} px-6 py-4 flex items-center gap-4`}>
                          <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-sm ${c.split(' ')[2]}`}>
                            {h.n}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{h.icon}</span>
                            <h3 className="font-display font-bold text-surface-900 text-base">{h.title}</h3>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          {/* Why */}
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-1">Why It Matters</div>
                            <p className="text-sm text-surface-700 leading-relaxed">{h.why}</p>
                          </div>

                          {/* Example */}
                          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">📝 Example</div>
                            <p className="text-sm text-surface-700 leading-relaxed">{h.example}</p>
                          </div>

                          {/* DO / DON'T */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                              <div className="text-xs font-bold text-emerald-700 mb-1">✅ DO</div>
                              <div className="text-sm text-emerald-800">{h.do}</div>
                            </div>
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                              <div className="text-xs font-bold text-rose-700 mb-1">❌ DON'T</div>
                              <div className="text-sm text-rose-800">{h.dont}</div>
                            </div>
                          </div>

                          {/* Saving */}
                          <div className={`p-3 ${c.split(' ')[0]} border ${c.split(' ')[1]} rounded-xl text-xs font-semibold ${c.split(' ')[2]}`}>
                            💾 {h.saving}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* CLAUDE CODE CHEAT SHEET */}
              <section id="claude-code-cheatsheet">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Claude Code Command Cheat Sheet</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Quick reference for every token-saving command in Claude Code. Bookmark this table.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900">
                        <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl" style={{ color: '#ffffff' }}>Command</th>
                        <th className="text-left px-4 py-3 font-semibold" style={{ color: '#ffffff' }}>What It Does</th>
                        <th className="text-left px-4 py-3 font-semibold rounded-tr-2xl" style={{ color: '#ffffff' }}>When To Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cmd:'/clear',                 what:'Wipes conversation history',                when:'Switching to unrelated task'        },
                        { cmd:'/compact',               what:'Summarizes context, frees space',           when:'Every 15-20 messages'               },
                        { cmd:'/compact keep [topic]',  what:'Summarizes but preserves specific info',    when:'When you need partial context'      },
                        { cmd:'/context',               what:'Shows context breakdown by category',       when:'Before deciding to clear or compact' },
                        { cmd:'/model sonnet',          what:'Switches to Sonnet (cheaper)',               when:'Everyday coding tasks'              },
                        { cmd:'/model opus',            what:'Switches to Opus (powerful)',                when:'Complex architecture decisions'     },
                        { cmd:'/model haiku',           what:'Switches to Haiku (cheapest)',               when:'File reads, simple questions'       },
                        { cmd:'/model opus-plan',       what:'Opus plans, Sonnet executes',               when:'Best cost-to-quality ratio'         },
                        { cmd:'/effort low',            what:'Reduces thinking depth',                    when:'Simple, straightforward tasks'      },
                        { cmd:'/effort high',           what:'Full reasoning power',                      when:'Complex multi-step problems'        },
                        { cmd:'/cost',                  what:'Shows session token usage (API users)',      when:'Monitoring spend'                   },
                        { cmd:'/stats',                 what:'Shows usage patterns (subscribers)',         when:'Tracking daily patterns'            },
                      ].map((r, i) => (
                        <tr key={r.cmd} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-mono font-bold text-brand-700 text-xs whitespace-nowrap">{r.cmd}</td>
                          <td className="px-4 py-3 text-surface-700">{r.what}</td>
                          <td className="px-4 py-3 text-surface-500">{r.when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">* Commands accurate as of April 2026. Claude Code updates commands regularly — check docs for the latest.</p>
              </section>

              {/* BEST WORKFLOW */}
              <section id="best-workflow">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Best Workflow for Heavy Claude Users</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Combine these habits into a daily workflow and you can effectively double or triple your productive Claude output without upgrading your plan.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      period:'Morning Session (9–10 AM)',
                      tasks:['Set up Projects for the day\'s recurring files', 'Handle research tasks and long document analysis', 'Batch all related questions into single prompts'],
                      model:'Sonnet or Opus for complex analysis',
                      color:'brand',
                    },
                    {
                      period:'Afternoon Session (1–2 PM)',
                      tasks:['Writing and content tasks', 'Code generation and debugging', 'Start fresh chats with morning summaries pasted in'],
                      model:'Haiku for drafts, Sonnet for complex code',
                      color:'emerald',
                    },
                    {
                      period:'Evening Session (7–8 PM)',
                      tasks:['Review, editing, and iteration', 'Simple formatting, grammar, and cleanup', 'Off-peak = more effective budget per task'],
                      model:'Haiku for most editing tasks',
                      color:'purple',
                    },
                  ].map(s => (
                    <div key={s.period} className={`p-5 bg-${s.color}-50 border border-${s.color}-200 rounded-2xl`}>
                      <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                        <h3 className={`font-bold text-${s.color}-900`}>{s.period}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 bg-${s.color}-100 text-${s.color}-700 rounded-full`}>
                          {s.model}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {s.tasks.map(t => (
                          <li key={t} className={`flex items-start gap-2 text-sm text-${s.color}-800`}>
                            <span className="shrink-0">→</span><span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-5 bg-surface-900 rounded-2xl text-white">
                  <div className="font-bold text-white mb-3">🏆 The Power User Summary</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    {[
                      { label:'Fresh chat rule', val:'Every 15–20 messages' },
                      { label:'Peak hours to avoid', val:'5:30–11:30 PM IST' },
                      { label:'Default model', val:'Haiku for 70% of tasks' },
                    ].map(s => (
                      <div key={s.label} className="bg-white/10 rounded-xl p-3">
                        <div className="text-surface-400 text-xs mb-1">{s.label}</div>
                        <div className="font-bold text-brand-300">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CLAUDE CODE WORKFLOW */}
              <section>
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Best Workflow for Claude Code Users</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  If you use Claude Code daily, build these habits into your session routine. They take 30 seconds each and save hundreds of tokens per hour.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      period:'Start of Session',
                      tasks:['Run /context to check your starting state', 'Ensure .claudeignore and CLAUDE.md are current and lean', 'Set /model sonnet as your default model'],
                      model:'Setup — 30 seconds',
                      color:'emerald',
                    },
                    {
                      period:'During Coding',
                      tasks:['/clear between unrelated tasks or modules', '/compact keep [current feature] every 15-20 messages', '/model opus only for architecture decisions', '/effort low for routine file changes and refactors'],
                      model:'Sonnet for most, Opus for complex',
                      color:'brand',
                    },
                    {
                      period:'Complex Features',
                      tasks:['/model opus-plan for smart planning + cheap execution', 'Delegate test runs and log analysis to subagents', 'Write specific prompts with exact file paths and function names'],
                      model:'Opus Plan Mode',
                      color:'purple',
                    },
                    {
                      period:'End of Session',
                      tasks:['Run /cost or /stats to track your usage', 'Note which tasks burned the most tokens', 'Optimize those patterns first tomorrow'],
                      model:'Review — 60 seconds',
                      color:'amber',
                    },
                  ].map(s => (
                    <div key={s.period} className={`p-5 bg-${s.color}-50 border border-${s.color}-200 rounded-2xl`}>
                      <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                        <h3 className={`font-bold text-${s.color}-900`}>{s.period}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 bg-${s.color}-100 text-${s.color}-700 rounded-full`}>
                          {s.model}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {s.tasks.map(t => (
                          <li key={t} className={`flex items-start gap-2 text-sm text-${s.color}-800`}>
                            <span className="shrink-0">→</span><span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLAUDE vs ChatGPT */}
              <section id="claude-vs-chatgpt">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Claude vs ChatGPT Token Usage — Key Differences</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Both platforms use tokens. But they handle context windows, limits, and pricing very differently.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-surface-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900">
                        <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl" style={{ color: '#ffffff' }}>Factor</th>
                        <th className="text-center px-4 py-3 font-semibold" style={{ color: '#ffffff' }}>Claude (Anthropic)</th>
                        <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl" style={{ color: '#ffffff' }}>ChatGPT (OpenAI)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { factor:'Context window',      claude:'Up to 200K tokens',      gpt:'Up to 128K tokens (GPT-4o)',      winner:'claude'  },
                        { factor:'Usage limit type',    claude:'Rolling 5-hour window',  gpt:'Daily message limit',             winner:'neither' },
                        { factor:'Re-reads history',    claude:'Yes — full history',     gpt:'Yes — full history',              winner:'neither' },
                        { factor:'Model tiers',         claude:'Haiku, Sonnet, Opus',    gpt:'GPT-4o mini, GPT-4o',             winner:'neither' },
                        { factor:'Extended Thinking',   claude:'Available (token-heavy)',gpt:'Not available',                   winner:'neither' },
                        { factor:'Document upload',     claude:'Projects feature',       gpt:'Memory (limited)',                winner:'claude'  },
                        { factor:'Best for long docs',  claude:'Superior (200K window)', gpt:'Good (128K window)',              winner:'claude'  },
                        { factor:'Limit transparency',  claude:'Session-based, clearer', gpt:'Message count limit, simpler',   winner:'neither' },
                        { factor:'CLI / Code tool',     claude:'Claude Code (full agent)',gpt:'GitHub Copilot (completion)',   winner:'claude'  },
                      ].map((r, i) => (
                        <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-semibold text-surface-900">{r.factor}</td>
                          <td className={`px-4 py-3 text-center text-sm ${r.winner === 'claude' ? 'text-emerald-700 font-bold' : 'text-surface-600'}`}>
                            {r.winner === 'claude' && '✓ '}{r.claude}
                          </td>
                          <td className={`px-4 py-3 text-center text-sm ${r.winner === 'gpt' ? 'text-emerald-700 font-bold' : 'text-surface-600'}`}>
                            {r.winner === 'gpt' && '✓ '}{r.gpt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">* Accurate as of April 2026. Both platforms update their limits and models regularly.</p>
              </section>

              {/* CTA mid-article */}
              <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-bold text-white mb-1">Explore All AI Tools — Reviewed & Ranked</div>
                  <div className="text-brand-200 text-sm">Claude, ChatGPT, Gemini, Grammarly, Midjourney and more — honest reviews with pricing and use cases.</div>
                </div>
                <Link href="/ai-tools" className="shrink-0 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                  Browse AI Tools →
                </Link>
              </div>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                  {[
                    {
                      q:'What are tokens in Claude?',
                      a:'Tokens are the units Claude uses to measure and process text. Roughly 1 token equals 0.75 words in English. A typical prompt is 100–300 tokens. An uploaded PDF page is 500–800 tokens. Importantly, Claude counts the total tokens across your entire conversation history — not just your latest message.',
                    },
                    {
                      q:'Why does Claude use more tokens in longer chats?',
                      a:'Claude re-reads the entire conversation history before responding to each new message. This is called the context window. Message 1 costs only your prompt (~250 tokens). Message 30 costs your prompt PLUS the full history of 29 previous exchanges — approximately 232,000 tokens total. The 30th message costs roughly 928× more to process than the first.',
                    },
                    {
                      q:'Does Claude reset token limits at midnight?',
                      a:'No. Claude uses a rolling 5-hour window, not a midnight reset. Usage from 9 AM rolls off by 2 PM. Spreading work across the day is more efficient than one long session, because earlier usage disappears from the window while you work.',
                    },
                    {
                      q:'How can I check my Claude token usage?',
                      a:'Go to Settings → Usage in Claude.ai to see your current session consumption. You can see the rolling 5-hour window status. Claude Pro, Max 5x, and Max 20x subscribers have progressively higher base limits before overage rates apply.',
                    },
                    {
                      q:'What is the best Claude model to save tokens on simple tasks?',
                      a:'Claude Haiku is the most efficient model for simple tasks — grammar checks, brainstorming, formatting, translations, and quick summaries. Use Haiku for approximately 70% of everyday tasks and reserve Sonnet and Opus for complex reasoning, long document analysis, and nuanced creative work.',
                    },
                    {
                      q:'How is Claude token usage different from ChatGPT?',
                      a:'Both platforms re-read full conversation history per message. Key differences: Claude\'s context window extends up to 200K tokens vs ChatGPT\'s 128K for GPT-4o. Claude uses a rolling 5-hour session limit vs ChatGPT\'s daily message count. Claude\'s Projects feature allows file reuse across chats, which ChatGPT\'s Memory handles differently and more limitedly.',
                    },
                    {
                      q:'How do I save tokens in Claude Code?',
                      a:'The most effective strategies are: use /clear when switching between unrelated tasks, use /compact every 15-20 messages to compress context, switch to Sonnet or Haiku for routine tasks with /model, keep your CLAUDE.md file under 200 lines by moving detailed docs into separate files, and add a .claudeignore file to exclude node_modules, lock files, and build artifacts.',
                    },
                    {
                      q:'What is /compact in Claude Code?',
                      a:'The /compact command summarizes your current conversation context while preserving key information you specify, freeing up space in your context window. Run /compact keep [specific topics] to tell Claude what to preserve. You can set permanent compaction rules in your CLAUDE.md under a "# Compact instructions" heading. It is more targeted than /clear because it retains useful context in compressed form.',
                    },
                    {
                      q:'What is Opus Plan Mode in Claude Code?',
                      a:'Opus Plan Mode (/model opus-plan) splits coding tasks between two models: Claude Opus handles the planning and reasoning phase, while Claude Sonnet handles the execution and code writing. Since execution typically accounts for 60-80% of token usage in a session, this delivers Opus-quality thinking at significantly lower cost. There is a built-in review step between planning and execution.',
                    },
                    {
                      q:'How much does Claude Code cost per day?',
                      a:'According to Anthropic\'s official documentation, the average cost across enterprise deployments is approximately $13 per developer per active day, with 90% of users staying below $30 per active day. Monthly costs typically range from $150 to $250 per developer. Claude Max and Pro subscribers have usage included in their subscription and are not charged per token.',
                    },
                  ].map((faq, i) => (
                    <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                      itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm" itemProp="name">
                        {faq.q}
                        <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <span itemProp="text">{faq.a}</span>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Summary */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-5" style={{ color: '#ffffff' }}>TL;DR — Claude Token Saving Cheatsheet (19 Habits)</h2>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>💬 Claude Chat</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {[
                    'Edit prompts — don\'t send follow-up corrections',
                    'Fresh chat every 15–20 messages with a summary',
                    'Batch 3 questions into 1 message',
                    'Upload recurring files to Projects, not every chat',
                    'Save your preferences in Settings — not in prompts',
                    'Use Haiku for 70% of tasks (it\'s more than enough)',
                    'Turn off Extended Thinking unless you really need it',
                    'Spread work across the day — 5-hour rolling window',
                    'Avoid 5:30–11:30 PM IST for heavy tasks (peak hours)',
                    'Enable overage billing to protect mid-project momentum',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 font-mono text-xs mt-0.5" style={{ color: '#818cf8' }}>{String(i+1).padStart(2,'0')}</span>
                      <span className="text-sm" style={{ color: '#ffffff' }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#34d399' }}>⌨️ Claude Code</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    '/clear between unrelated tasks — kill stale context',
                    '/compact every 15-20 messages — preserve what matters',
                    '/model sonnet default — opus only for architecture',
                    'CLAUDE.md under 200 lines — move docs to Skills',
                    '.claudeignore on day one — exclude junk files',
                    'Subagents for verbose output — tests, logs, git',
                    '/effort low for routine tasks — cap thinking tokens',
                    '/model opus-plan — smart planning, cheap execution',
                    'Specific prompts — name the file, function, and error',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 font-mono text-xs mt-0.5" style={{ color: '#34d399' }}>{String(i+11).padStart(2,'0')}</span>
                      <span className="text-sm" style={{ color: '#ffffff' }}>{t}</span>
                    </div>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="font-bold mb-2" style={{ color: '#ffffff' }}>🔖 Bookmark This Page</div>
                  <p className="text-sm mb-4" style={{ color: '#ffffffb3' }}>
                    Claude's limits update regularly. Bookmark this guide and check back for the latest optimization strategies.
                    Share it with your team — every person using Claude more efficiently saves the whole team's budget.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/ai-tools"
                      className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                      Browse All AI Tools →
                    </Link>
                    <Link href="/ai-tools/claude"
                      className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm">
                      Claude Full Review →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/ai-tools',               icon:'🤖', label:'Best AI Tools 2026',          desc:'Claude, ChatGPT, Gemini reviewed and ranked'     },
                    { href:'/ai-tools/claude',         icon:'🧠', label:'Claude Full Review 2026',      desc:'Features, pricing, and honest pros and cons'     },
                    { href:'/ai-tools/claude-vs-chatgpt', icon:'⚔️', label:'Claude vs ChatGPT',        desc:'Feature-by-feature comparison for 2026'          },
                    { href:'/blog/claude-prompt-templates-save-tokens', icon:'📝', label:'Claude Prompt Templates', desc:'Copy-paste templates that cut token usage by 60%' },
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

              {/* Disclaimer */}
              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Accuracy Note:</strong> Token counts and usage estimates are based on typical usage patterns as of April 2026.
                Anthropic updates Claude's pricing, limits, and model capabilities regularly. Claude Code commands and costs may change with updates. Peak hour definitions and rolling window durations may change.
                Always check <a href="https://support.claude.ai" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">support.claude.ai</a> and <a href="https://code.claude.com/docs/en/costs" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">Claude Code docs</a> for the most current information.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}