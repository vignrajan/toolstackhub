import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Claude Memory & Preferences — Set It Up Once, Save Hours (2026)',
  description: 'Complete guide to Claude memory, user preferences, and personalization. Copy-paste preference templates, ChatGPT migration, memory audit checklist. Updated April 2026.',
  keywords: [
    'claude memory settings', 'claude user preferences', 'how to use claude memory',
    'claude ai memory guide', 'claude preferences setup', 'claude memory 2026',
    'claude personalization', 'claude remember preferences', 'claude custom instructions',
    'claude project memory', 'import chatgpt memory to claude', 'claude memory import',
    'claude styles feature', 'claude memory vs chatgpt memory',
    'claude ai settings guide', 'claude profile setup',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-memory-preferences-guide` },
  openGraph: {
    title: 'Claude Memory & Preferences — The Complete Setup Guide (2026)',
    description: 'Stop repeating yourself. Set up Claude memory and preferences once and save hours every week. Includes 10 role templates and ChatGPT migration steps.',
    url: `${SITE_CONFIG.url}/blog/claude-memory-preferences-guide`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Memory & Preferences — The Complete Setup Guide (2026)',
    description: 'Complete guide to Claude memory, user preferences, and personalization. Copy-paste preference templates, ChatGPT migration, memory audit checklist. Updated April 2026.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'why-claude-forgets',    label: 'Why Claude Forgets You'                     },
  { id: 'four-layer-stack',      label: 'The 4-Layer Personalization Stack'           },
  { id: 'layer-memory',          label: 'Layer 1: Memory'                             },
  { id: 'layer-preferences',     label: 'Layer 2: User Preferences'                  },
  { id: 'layer-projects',        label: 'Layer 3: Projects'                           },
  { id: 'layer-styles',          label: 'Layer 4: Styles'                             },
  { id: 'generator-prompt',      label: 'The Preferences Generator Prompt'           },
  { id: 'role-templates',        label: '10 Templates by Role'                        },
  { id: 'chatgpt-migration',     label: 'Migrate from ChatGPT'                       },
  { id: 'memory-audit',          label: 'Memory Audit Checklist'                     },
  { id: 'common-mistakes',       label: 'Common Mistakes'                            },
  { id: 'faq',                   label: 'FAQ'                                         },
];

const FAQS = [
  {
    q: 'How do I turn on Claude memory?',
    a: 'Go to Settings → Capabilities and toggle "Generate memory from chat history" ON. You should also enable "Search and reference past chats" if you\'re on a paid plan — this lets Claude reference previous conversations, not just synthesized facts. Memory takes up to 24 hours to generate after you enable it, as Claude needs time to synthesize your existing conversation history.',
  },
  {
    q: 'Is Claude memory free?',
    a: 'Yes. The core memory feature (automatic fact extraction from conversations) is available on all plans including the free tier. The "Search and reference past chats" feature, which lets Claude actively search previous conversations, requires a paid plan (Pro, Team, or Max). User Preferences are available on all plans with no restrictions.',
  },
  {
    q: 'What does Claude remember about me?',
    a: 'Claude extracts and stores factual information from your conversations: your job title, tools and technologies you use, projects you\'re working on, writing preferences, location when mentioned, and behavioral preferences (like whether you want concise or detailed responses). Claude does NOT store full conversation transcripts, passwords, financial data, or sensitive personal information. You can see exactly what\'s stored in Settings → Capabilities → Memory → "View and edit your memory."',
  },
  {
    q: 'How do I delete Claude memories?',
    a: 'Go to Settings → Capabilities → Memory → "View and edit your memory." You\'ll see a list of all stored facts. Click the delete icon next to any fact you want to remove. You can also ask Claude directly in a conversation: "Please forget that I prefer bullet points" — Claude will remove that memory. To clear all memories at once, there\'s a "Clear all memories" option in the same settings panel.',
  },
  {
    q: 'Where do I set Claude user preferences?',
    a: 'Go to Settings → Profile → User Preferences. It\'s a free-text field where you write your permanent instructions. These are loaded into every single conversation automatically. Alternatively, click your profile icon in the top-right corner of the Claude interface → "User preferences." Keep the content under 1,500 characters for best results.',
  },
  {
    q: 'How long should my Claude preferences be?',
    a: 'Keep preferences under 1,500 characters. Claude reads your entire preferences block on every single message — bloated preferences waste tokens and, counterintuitively, make Claude less likely to follow your most important rules (they get buried). The 10 role templates in this guide average 400-700 characters. That\'s the sweet spot: specific enough to matter, short enough to be read in full every time.',
  },
  {
    q: 'Can I import my ChatGPT memories to Claude?',
    a: 'Not directly — there\'s no official one-click import. But you can do it manually in about 10 minutes. Export your ChatGPT memories using the prompt in Section 9 of this guide, then paste the structured output into a new Claude conversation and ask Claude to synthesize it into memories. For Custom Instructions, rewrite them in Claude\'s imperative format and paste into User Preferences. You\'ll have 90% parity on day one.',
  },
  {
    q: 'What\'s the difference between memory and preferences?',
    a: 'Memory is automatic — Claude extracts and stores facts from your conversations without you doing anything. Preferences are manual — you write rules that Claude must always follow. Think of memory as Claude\'s notebook ("Garry uses TypeScript") and preferences as your standing orders ("always use TypeScript, never JavaScript"). Preferences override conflicting memory. If memory says you like bullet points but preferences say avoid them, preferences win.',
  },
  {
    q: 'Do Claude Projects have their own memory?',
    a: 'Yes. Each Project has completely isolated memory that doesn\'t cross-contaminate with your global memory or other Projects. Work you discuss in a "Client ABC" Project stays in that Project\'s context. This isolation is the main reason to use Projects — it prevents your coding context from bleeding into your writing work and vice versa. Project memory is managed separately in each Project\'s settings.',
  },
  {
    q: 'Does Claude memory work in incognito chats?',
    a: 'No. Claude\'s memory system is disabled in incognito/private conversations by design. Incognito mode is explicitly for situations where you don\'t want anything stored. Your existing memories and preferences are also not applied in incognito mode. If you need personalization, use a regular (non-incognito) conversation.',
  },
  {
    q: 'Can Claude remember things I specifically tell it to?',
    a: 'Yes. You can tell Claude directly: "Remember that I always want TypeScript examples" or "Please note that my project deadline is March 2027." Claude will store this as a memory. You can also use the trigger phrase "Please remember..." to explicitly flag something for storage. This is useful for filling gaps where automatic memory extraction missed something important.',
  },
  {
    q: 'How often does Claude update its memory?',
    a: 'Claude synthesizes and updates its memory approximately every 24 hours. It doesn\'t update in real-time during a conversation — changes you make or things you say today will typically appear in your memory list by the next day. This means if you have a detailed conversation about a new project today, Claude won\'t automatically reference it in a new conversation until the next synthesis cycle. The 24-hour cadence is why initial setup (especially preferences) is so important.',
  },
];

const ROLE_TEMPLATES = [
  {
    role: 'Full-Stack Developer',
    icon: '💻',
    code: `I'm a full-stack developer building web apps with Next.js 14, TypeScript, Tailwind CSS, and Prisma.
Response style: concise and direct. Code first, explanation only if I ask.
Always use TypeScript. Use named exports. Use ES modules. Never write vanilla JS.
Include filename comments at the top of every code block (e.g., // app/page.tsx).
When debugging, show the fix — don't explain what went wrong unless I ask.
If code is longer than 20 lines, output as a file artifact.
Never say "Great question" or "I'd be happy to help." Just answer.
Ask one clarifying question if something is ambiguous — don't guess.`,
  },
  {
    role: 'Content Marketer',
    icon: '✍️',
    code: `I'm a content marketer writing blog posts, social media copy, and email sequences for B2B SaaS.
Tone: conversational but authoritative. No corporate jargon.
Short paragraphs only (2-3 sentences max). Write for skimmers.
Never use: "in today's digital landscape", "leverage", "utilize", "in conclusion", "game-changer".
When I share a draft, give specific line-level edits — not general feedback.
Match my voice: direct, slightly informal, uses concrete examples and analogies.
Headlines: specific and benefit-driven, never clickbait.
Don't add headers unless I ask — I'll structure the piece myself.`,
  },
  {
    role: 'Student',
    icon: '🎓',
    code: `I'm a university student studying computer science.
Explain concepts with a simple analogy before going technical.
Start every topic with the core idea in 2-3 sentences, then go deeper if I ask.
Use code examples in Python unless I specify otherwise.
If I share an assignment, help me understand the approach — don't write the solution.
When I'm wrong, explain WHY clearly — don't just give the right answer.
If I ask you to quiz me, use spaced repetition format: easy → medium → hard.
Flag when something is commonly misunderstood or has a tricky edge case.`,
  },
  {
    role: 'Technical Writer',
    icon: '📝',
    code: `I'm a technical writer creating API documentation, developer guides, and release notes.
Write in second person ("you") and active voice. Present tense always.
Sentences under 25 words. One idea per sentence.
Use numbered steps for procedures. Use tables for reference data. Use code blocks for all commands.
Code examples must be complete and runnable — never pseudo-code.
Never write "simply", "just", "easy", or "straightforward" — these minimize difficulty.
Follow Google Developer Documentation Style Guide conventions.
When reviewing drafts, flag passive voice, vague pronouns, and undefined terms.`,
  },
  {
    role: 'Product Manager',
    icon: '📋',
    code: `I'm a PM at a B2B SaaS company managing a cross-functional team of 8.
Default format: structured bullet points with clear hierarchy.
When I describe a problem, help me frame it as a user story before jumping to solutions.
Challenge my assumptions — if something has a flaw, say so directly without softening.
PRD structure: Problem, User Impact, Proposed Solution, Success Metrics, Risks, Open Questions.
Keep jargon to what my engineering team understands — no MBA buzzwords.
Don't over-qualify: "This could potentially maybe work" → "This works when [condition]."
When comparing options, give me a clear recommendation with one-line rationale.`,
  },
  {
    role: 'UI/UX Designer',
    icon: '🎨',
    code: `I'm a product designer working with Figma, React, and Tailwind CSS.
When I describe a UI problem, suggest solutions with specific component patterns — not abstract advice.
Reference real design systems (Material UI, Shadcn/ui, Radix) when relevant.
Color suggestions: give exact hex values and contrast ratios (WCAG 2.1 AA minimum).
Accessibility first: flag a11y issues before aesthetic ones.
When reviewing designs, be specific: "The CTA button is #4285F4 on white — that's 3.2:1, fails AA for normal text" not "consider improving contrast."
For copywriting in UI: max 5 words for labels, active voice, sentence case.`,
  },
  {
    role: 'Data Analyst',
    icon: '📊',
    code: `I'm a data analyst working with Python (pandas, numpy, matplotlib), SQL, and Tableau.
Default to pandas for data manipulation. Write SQL for database queries.
Always include inline comments explaining logic in code blocks.
When I share data or describe a dataset, look for outliers and unexpected patterns before I ask.
Present findings structure: insight first → evidence second → recommendation third.
Use tables for datasets under 20 rows. Suggest the right chart type for larger datasets.
Never round numbers without telling me original precision and rounding method.
If statistical claims need a test, suggest which test and why.`,
  },
  {
    role: 'Freelance Writer',
    icon: '🖊️',
    code: `I'm a freelance writer covering technology, productivity, and business for online publications.
My style: short punchy sentences, strong verbs, zero filler. Hemingway-adjacent.
When writing: match my tone from previous drafts — not default AI voice.
Banned words: "delve", "navigate", "landscape", "harness", "leverage", "it's important to note", "in conclusion".
Blog posts: 60-70% of paragraphs should be 1-2 sentences max.
Always suggest 3 headline alternatives — I pick the final one.
If you don't know a statistic, say so explicitly. Never fabricate data.
When I share a draft for editing, track changes with [ORIGINAL] → [REVISED] format.`,
  },
  {
    role: 'Startup Founder',
    icon: '🚀',
    code: `I'm a solo founder building a SaaS product. I'm wearing every hat: product, engineering, marketing.
Be direct and time-efficient. No long preambles.
80/20 everything: what has the most impact with least effort? Say that first.
For technical decisions, explain tradeoffs in 3 sentences, then recommend one option clearly.
Challenge scope creep: if something isn't essential right now, say so.
Emails to customers/investors: human and specific, never corporate.
When I'm overthinking something, tell me directly.
If I ask about a process or tool, tell me the fastest way to get a working version, not the perfect one.`,
  },
  {
    role: 'Academic Researcher',
    icon: '🔬',
    code: `I'm a PhD researcher in machine learning and natural language processing.
Use precise academic language — not simplified analogies unless I ask for them.
When evaluating research: methodology rigor before novelty.
Cite relevant papers with (Author, Year) inline and include full reference if you know it.
For literature reviews: organize by approach and method, not chronologically.
Academic writing: maintain passive voice where conventional, hedge appropriately ("suggests" not "proves").
LaTeX for all equations. BibTeX format for citations.
When I share my writing, flag unsupported claims, logical gaps, and overclaiming.`,
  },
];

export default function ClaudeMemoryBlog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Use Claude Memory & Preferences — Set It Up Once, Save Hours (2026)',
        description: 'Complete guide to Claude memory, user preferences, and personalization. Includes 10 role templates, ChatGPT migration steps, and a memory audit checklist.',
        url: `${SITE_CONFIG.url}/blog/claude-memory-preferences-guide`,
        datePublished: '2026-04-13',
        dateModified: '2026-04-13',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: 'ToolStackHub', url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Set Up Claude Memory and Preferences',
        totalTime: 'PT10M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enable Memory', text: 'Go to Settings → Capabilities → toggle "Generate memory from chat history" ON. Also enable "Search and reference past chats" if on a paid plan.' },
          { '@type': 'HowToStep', position: 2, name: 'Generate your preferences', text: 'Open a new Claude chat and paste the Preferences Generator Prompt from this guide. Answer the 8 questions to generate a ready-to-paste preferences block.' },
          { '@type': 'HowToStep', position: 3, name: 'Paste your preferences', text: 'Copy the generated block. Go to Settings → Profile → User Preferences. Paste it in. Keep it under 1,500 characters.' },
          { '@type': 'HowToStep', position: 4, name: 'Create Projects for focused work', text: 'Click Projects in the sidebar → New Project. Name it clearly (e.g. "Client Work", "Newsletter"). Add custom instructions and any reference documents.' },
          { '@type': 'HowToStep', position: 5, name: 'Audit monthly', text: 'Once a month: Settings → Memory → View all. Delete wrong facts, outdated info, and anything Claude inferred incorrectly. Test with a fresh chat.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Claude Memory & Preferences Guide', item: `${SITE_CONFIG.url}/blog/claude-memory-preferences-guide` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Claude Memory Guide</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">Claude</span>
              <span className="text-xs text-surface-400">April 13, 2026 · 14 min read</span>
            </div>

            {/* Featured snippet */}
            <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">📌 Claude Personalization — Quick Reference</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {[
                  { label: 'Turn on Memory',      val: 'Settings → Capabilities' },
                  { label: 'Set Preferences',     val: 'Settings → Profile'      },
                  { label: 'Max Prefs Length',    val: '~1,500 characters'       },
                  { label: 'Memory Sync Time',    val: '~24 hours'               },
                ].map(f => (
                  <div key={f.label} className="bg-white rounded-xl p-3 border border-brand-100">
                    <div className="text-xs text-surface-500 mb-0.5">{f.label}</div>
                    <div className="font-bold text-brand-700 text-sm">{f.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              How to Use Claude Memory & Preferences —
              <span className="text-purple-600"> Set It Up Once, Save Hours</span>
            </h1>

            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6">
              <p>
                You've told Claude you're a React developer 47 times this month. Tomorrow, it'll ask again.
              </p>
              <p>
                This isn't a bug. It's the default state of every Claude conversation: stateless, context-free, starting from zero. But Claude has a full personalization system that most users never configure — <strong className="text-surface-800">memory, preferences, projects, and styles</strong> — and once it's set up, you never explain yourself again.
              </p>
              <p>
                This is the guide I wish I had on day one. It includes a copy-paste generator prompt, 10 role-specific templates, a ChatGPT migration path, and the monthly audit checklist that keeps everything working.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">G</div>
              <div>
                <Link href="/about/garry" className="text-sm font-semibold text-surface-800 hover:text-brand-600">Garry</Link>
                <div className="text-xs text-surface-400">Developer & Founder, ToolStackHub · Daily Claude user since 2024</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* ── TOC ─────────────────────────────────────────── */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6 space-y-4">
                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">In This Guide</div>
                  <ol className="space-y-1.5">
                    {TOC.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-purple-700 leading-snug transition-colors">
                          <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sticky CTA */}
                <div className="bg-purple-600 rounded-2xl p-4 text-white">
                  <div className="font-bold text-sm mb-1">⚡ Quick Start</div>
                  <p className="text-purple-200 text-xs leading-relaxed mb-3">Skip to the generator prompt — 8 questions → ready-to-paste preferences in 5 minutes.</p>
                  <a href="#generator-prompt" className="block text-center bg-white text-purple-700 font-bold text-xs py-2 rounded-xl hover:bg-purple-50 transition-colors">
                    Jump to Generator →
                  </a>
                </div>
              </div>
            </aside>

            {/* ── ARTICLE ─────────────────────────────────────── */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-14">

              {/* SECTION 1 — WHY CLAUDE FORGETS */}
              <section id="why-claude-forgets">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why Claude Forgets You (and How to Fix It)</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Every Claude conversation starts fresh. No memory of last week's debugging session. No context from the 200-line PRD you refined together. No recollection that you prefer TypeScript, hate bullet points, and work in the APAC timezone.
                  </p>
                  <p>
                    This is not a flaw — it's how LLMs work. The model itself is stateless. Every message is processed without inherent knowledge of who sent it or what came before. The personalization system is a layer <em>on top</em> of the model, and it's opt-in.
                  </p>
                  <p>
                    <strong className="text-surface-800">The cost of ignoring this is real.</strong> Count the setup messages in a typical work session: "I'm a developer using Next.js. I prefer TypeScript. Keep answers concise. Here's my stack..." That's 3-5 messages before you even start the actual task. Across 10 conversations a day, that's 30-50 messages — hundreds of tokens — burned on pure context-setting. Every day.
                  </p>
                  <p>
                    The fix is Claude's 4-layer personalization stack. Configure it once — takes about 10 minutes total — and those setup messages disappear forever. Claude knows who you are before you say a word.
                  </p>
                </div>
              </section>

              {/* SECTION 2 — 4-LAYER STACK */}
              <section id="four-layer-stack">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The 4-Layer Personalization Stack</h2>

                <div className="space-y-3 mb-6">
                  {[
                    { layer:'Layer 1', name:'Memory',           scope:'All conversations', setup:'Automatic',        icon:'🧠', color:'bg-purple-50 border-purple-200', text:'text-purple-700', desc:'Claude extracts and stores facts from your conversations — job title, tools, preferences, projects. Works passively.' },
                    { layer:'Layer 2', name:'User Preferences', scope:'All conversations', setup:'Manual (you write)',icon:'⚙️', color:'bg-brand-50 border-brand-200',  text:'text-brand-700',  desc:'Your permanent rules. Written by you, loaded into every conversation. The highest-leverage thing you can configure.' },
                    { layer:'Layer 3', name:'Projects',         scope:'Per project',       setup:'Manual (you build)',icon:'📁', color:'bg-emerald-50 border-emerald-200', text:'text-emerald-700', desc:'Isolated workspaces with scoped memory, custom instructions, and knowledge files. Keeps work contexts separate.' },
                    { layer:'Layer 4', name:'Styles',           scope:'Per conversation',  setup:'Manual (you create)',icon:'🎨', color:'bg-amber-50 border-amber-200',   text:'text-amber-700',  desc:'Saved writing formats you switch between. One click to toggle between "formal report" and "casual email" mode.' },
                  ].map(l => (
                    <div key={l.layer} className={`flex items-start gap-4 p-5 border ${l.color.split(' ')[1]} ${l.color.split(' ')[0]} rounded-2xl`}>
                      <div className="text-2xl shrink-0">{l.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-xs font-bold uppercase tracking-wider ${l.text}`}>{l.layer}</span>
                          <span className="font-bold text-surface-900">{l.name}</span>
                          <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full">{l.scope}</span>
                          <span className="text-xs bg-white border border-surface-200 text-surface-500 px-2 py-0.5 rounded-full">{l.setup}</span>
                        </div>
                        <p className="text-sm text-surface-600 leading-relaxed">{l.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5">
                  <p className="text-sm text-surface-700 leading-relaxed">
                    <strong className="text-surface-900">The honest truth:</strong> Most people only use Layer 1 (memory) and wonder why Claude is still inconsistent. <strong className="text-brand-700">Layer 2 (preferences) is where 80% of the value lives</strong> — and fewer than 10% of Claude users have configured it. The next two sections cover both in detail.
                  </p>
                </div>
              </section>

              {/* SECTION 3 — LAYER 1 MEMORY */}
              <section id="layer-memory">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Layer 1: Memory — What Claude Remembers Automatically</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Memory is the passive layer. Once enabled, Claude watches your conversations and extracts facts — your role, your tools, your preferences, your projects — storing them in a dedicated memory bank it consults at the start of every new chat.
                  </p>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">How to Enable Memory</h3>
                  <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                    <ol className="space-y-3">
                      {[
                        { step:'1', text:'Settings → Capabilities → toggle "Generate memory from chat history" ON' },
                        { step:'2', text:'Toggle "Search and reference past chats" ON (paid plans only — worth it)' },
                        { step:'3', text:'Wait up to 24 hours. Claude synthesizes your existing conversation history.' },
                        { step:'4', text:'Check Settings → Capabilities → Memory → "View and edit your memory" to see what\'s been stored.' },
                      ].map(s => (
                        <li key={s.step} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</div>
                          <span className="text-sm text-surface-700">{s.text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">What Gets Stored (and What Doesn't)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">✅ Claude stores</div>
                      <ul className="space-y-1 text-sm text-emerald-800">
                        {['Job title and role', 'Tools, languages, frameworks', 'Active projects and goals', 'Writing and response preferences', 'Location when mentioned', 'Communication style preferences'].map(i => <li key={i}>→ {i}</li>)}
                      </ul>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                      <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">❌ Claude does NOT store</div>
                      <ul className="space-y-1 text-sm text-rose-800">
                        {['Full conversation transcripts', 'Passwords or credentials', 'Financial account details', 'Sensitive personal data', 'Incognito conversation content', 'Data explicitly deleted'].map(i => <li key={i}>→ {i}</li>)}
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">Global Memory vs Project Memory</h3>
                  <p>
                    Global memory applies to all conversations outside of Projects. Project memory is completely isolated per Project — your "Client ABC" context never bleeds into your "Personal" context. This separation is intentional and important for professional use.
                  </p>
                  <p>
                    You can manually trigger a memory by telling Claude: <em>"Remember that I always want TypeScript, not JavaScript."</em> Claude will store this immediately.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <strong>Go do this now.</strong> Settings → Memory. Most people are surprised by what Claude has (and hasn't) picked up. I found mine had stored "prefers bullet points" from one throwaway message — which was forcing bullets into every single response. Delete bad memories aggressively. A clean memory list beats a bloated one every time.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4 — LAYER 2 PREFERENCES */}
              <section id="layer-preferences">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Layer 2: User Preferences — Your Global Rulebook</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    If memory is Claude's notebook, preferences are your standing orders. They're loaded into every single conversation before your first message. Unlike memory (which Claude writes), <strong className="text-surface-800">preferences are YOUR rules</strong> — written by you, in your voice, with your exact constraints.
                  </p>
                  <p>
                    <strong>Location:</strong> Settings → Profile → User Preferences (or click your profile icon → "User preferences"). It's a free-text field. Whatever you write there runs as implicit context on every message.
                  </p>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">The 6 Categories to Cover</h3>

                  <div className="space-y-4">
                    {[
                      { cat:'1. Your Role', color:'bg-purple-50 border-purple-200', examples:['"I\'m a full-stack developer building SaaS products in Next.js and Python."'] },
                      { cat:'2. Response Format', color:'bg-brand-50 border-brand-200', examples:['"Default to concise (3-5 sentences) unless I ask for detail."', '"Use code blocks for any code. Always include the filename."', '"Never use bullet points unless I specifically ask for a list."'] },
                      { cat:'3. Tone & Style', color:'bg-emerald-50 border-emerald-200', examples:['"Write direct and professional. Skip pleasantries like \'Great question!\'"', '"Don\'t hedge with \'I think\' or \'It might be.\' Be direct."'] },
                      { cat:'4. Technical Context', color:'bg-amber-50 border-amber-200', examples:['"I use TypeScript, React 19, Next.js 14 App Router, Tailwind CSS, Prisma."', '"Use named exports and ES modules. Filename comment at top of every code block."'] },
                      { cat:'5. Behavior Rules', color:'bg-teal-50 border-teal-200', examples:['"If ambiguous, ask one clarifying question — don\'t guess."', '"Never apologize or say \'I\'d be happy to help.\' Just do the task."', '"When I share code, fix it — don\'t explain what\'s wrong."'] },
                      { cat:'6. Things to Avoid', color:'bg-rose-50 border-rose-200', examples:['"Never suggest I \'consult a professional\' for technical questions."', '"Don\'t repeat my question before answering."', '"No emojis in professional responses."'] },
                    ].map(c => (
                      <div key={c.cat} className={`border ${c.color.split(' ')[1]} ${c.color.split(' ')[0]} rounded-xl p-4`}>
                        <div className="font-bold text-surface-900 text-sm mb-2">{c.cat}</div>
                        <div className="space-y-1">
                          {c.examples.map(e => (
                            <div key={e} className="font-mono text-xs bg-white text-surface-700 px-3 py-1.5 rounded-lg border border-surface-100">{e}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-2">A Complete Assembled Preferences Block</h3>
                  <p className="text-sm mb-3">Here's what the above categories look like assembled into a real preferences block for a developer:</p>

                  <div className="bg-surface-900 rounded-xl p-5">
                    <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-3">Example: Full-Stack Developer Preferences</div>
                    <pre className="text-sm leading-relaxed overflow-x-auto"><code style={{color:'#e2e8f0'}}>{`I'm a full-stack developer building SaaS products with Next.js 14,
TypeScript, Tailwind CSS, and Prisma.

Response format: concise (3-5 sentences) unless I ask for detail.
Use code blocks for all code. Include filename as a comment at top.
Never use bullet points unless I explicitly ask for a list.

Tone: direct and professional. No "Great question!" or pleasantries.
Don't hedge with "I think" or "It might be" — be direct.

Stack: TypeScript only (never JS), React 19, App Router, ES modules,
named exports. Always include the filename in code block comments.

Rules:
- Ask one clarifying question if something is ambiguous. Don't guess.
- When I share code, fix it — don't explain what's wrong.
- Never suggest I "consult a professional" for technical questions.
- Don't repeat my question before answering.
- No emojis.`}</code></pre>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <strong className="text-amber-900">Keep it under 1,500 characters.</strong>
                    <p className="text-sm text-amber-800 mt-1 leading-relaxed">Claude reads your entire preferences block on every single message. Bloated preferences waste tokens and dilute your most important rules. The example above is ~620 characters — that's the sweet spot. Be ruthless: if a rule isn't changing Claude's behavior noticeably, cut it.</p>
                  </div>
                </div>
              </section>

              {/* SECTION 5 — LAYER 3 PROJECTS */}
              <section id="layer-projects">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Layer 3: Projects — Scoped Memory & Instructions</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Projects give you isolated workspaces. Each Project has its own memory, its own custom instructions, and its own knowledge files. Nothing bleeds between Projects or into your global conversations.
                  </p>

                  <h3 className="font-bold text-surface-900 text-lg mt-4 mb-3">When to Use a Project</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name:'Client Work',       files:'Brand guidelines, past deliverables, brief', rule:'Always use [client]\'s brand voice. Never suggest competitors.' },
                      { name:'Content Writing',   files:'Style guide, editorial calendar',            rule:'Headline format: [Verb] + [Specific Outcome]. Short paragraphs.' },
                      { name:'Product/Codebase',  files:'Architecture docs, API specs, README',       rule:'Follow our file structure. Use our component naming conventions.' },
                      { name:'Research',          files:'Papers, notes, methodology',                 rule:'Academic tone. Cite sources with (Author, Year) format.' },
                    ].map(p => (
                      <div key={p.name} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                        <div className="font-bold text-surface-900 text-sm mb-2">📁 {p.name}</div>
                        <div className="text-xs text-surface-500 mb-1"><strong>Knowledge files:</strong> {p.files}</div>
                        <div className="text-xs text-surface-500"><strong>Example rule:</strong> {p.rule}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-surface-900 text-lg mt-5 mb-3">How to Create a Project</h3>
                  <ol className="space-y-2">
                    {[
                      'Click "Projects" in the sidebar → "New Project"',
                      'Name it clearly: "Newsletter", "Client ABC", "Product Dev"',
                      'Add custom instructions (these are your project-specific preferences)',
                      'Upload knowledge files — documents Claude should reference in this context',
                      'Start all conversations for this work inside the Project',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-surface-200 text-surface-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</div>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  <h3 className="font-bold text-surface-900 text-lg mt-5 mb-2">Project Setup Generator (Copy-Paste)</h3>
                  <p className="text-sm mb-3">Paste this into Claude to get your Project's custom instructions written for you:</p>
                  <div className="bg-surface-900 rounded-xl p-5">
                    <pre className="text-sm leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`You are a Claude Project setup assistant. I need to create custom
instructions for a new Claude Project.

Interview me about this project with 5-8 focused questions, then
generate custom instructions I can paste directly into my Claude
Project settings.

Keep the output under 800 characters. Use imperative format.
Ask me one question at a time. Start with: "What is this project
about and what will you mainly use Claude for within it?"`}</code></pre>
                  </div>
                </div>
              </section>

              {/* SECTION 6 — LAYER 4 STYLES */}
              <section id="layer-styles">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Layer 4: Styles — Switch How Claude Writes</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Styles let you switch Claude's writing output format on demand — without editing your preferences. Create pre-set writing formats and apply them per conversation from the chat interface.
                  </p>
                  <p>
                    <strong className="text-surface-800">Location:</strong> Settings → Styles → Create New Style. Give it a name, describe the format, and save. Then apply it from the chat input via the style selector.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name:'Formal Report', desc:'Structured sections, professional tone, full sentences' },
                      { name:'Casual Email', desc:'Conversational, short paragraphs, no jargon' },
                      { name:'Technical Doc', desc:'Second person, numbered steps, code blocks' },
                      { name:'Social Post', desc:'Hook + value + CTA, 280 char limit, no em dashes' },
                    ].map(s => (
                      <div key={s.name} className="bg-surface-50 border border-surface-200 rounded-xl p-3 text-center">
                        <div className="font-bold text-surface-900 text-xs mb-1">{s.name}</div>
                        <div className="text-xs text-surface-400 leading-relaxed">{s.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p>
                    Styles are most useful when you switch writing contexts frequently — a marketer who drafts blog posts (casual) and investor updates (formal) in the same day, or a developer who writes Slack messages and technical specs back to back.
                  </p>
                </div>
              </section>

              {/* SECTION 7 — GENERATOR PROMPT */}
              <section id="generator-prompt">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The Preferences Generator Prompt (Copy-Paste)</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Most people stare at the empty User Preferences box and close the tab. This prompt solves that. It interviews you in 8 questions and writes a preferences block ready to paste — no blank-page paralysis.
                  </p>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                    <strong className="text-purple-900">How to use this:</strong>
                    <ol className="mt-2 space-y-1 text-sm text-purple-800">
                      <li>1. Open a new Claude chat</li>
                      <li>2. Paste the prompt below</li>
                      <li>3. Answer the 8 questions (takes ~5 minutes)</li>
                      <li>4. Copy the output block</li>
                      <li>5. Settings → Profile → User Preferences → Paste</li>
                    </ol>
                  </div>

                  <div className="bg-surface-900 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold text-surface-400 uppercase tracking-wider">Preferences Generator Prompt — Copy This</div>
                    </div>
                    <pre className="text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto"><code style={{color:'#e2e8f0'}}>{`I need you to help me create my Claude User Preferences. Ask me the
following questions one at a time. Wait for my answer before moving
to the next question.

1. What is your job title and what do you do day-to-day?
2. What tools, languages, or frameworks do you use most?
3. How do you prefer Claude to respond — short and direct, or
   detailed and thorough?
4. What tone do you want — casual, professional, technical, friendly?
5. What should Claude NEVER do in responses? (e.g., use emojis,
   apologize, hedge, use bullet points, add disclaimers)
6. When something is unclear, should Claude ask one question or
   make its best guess?
7. Are there specific formats you always want? (e.g., code blocks
   with filenames, tables for comparisons, numbered steps)
8. Anything else Claude should always know about you?

After all 8 answers, generate a clean User Preferences block I can
copy-paste directly into Settings → Profile → User Preferences.

Rules for the output:
- Keep it under 1,500 characters
- Use direct, imperative language ("Write in..." not "The user
  prefers...")
- No headers or section labels — just flowing rules
- Put the most important rules first`}</code></pre>
                  </div>
                </div>
              </section>

              {/* SECTION 8 — ROLE TEMPLATES */}
              <section id="role-templates">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">10 Preferences Templates by Role</h2>

                <p className="text-surface-600 leading-relaxed mb-6">
                  Use these as-is or as a starting point. Each is under 700 characters — paste directly into Settings → Profile → User Preferences. Edit the specific tools/context to match yours.
                </p>

                <div className="space-y-5">
                  {ROLE_TEMPLATES.map((t, i) => (
                    <div key={t.role} className="bg-surface-900 rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-3 bg-surface-800">
                        <span className="text-lg">{t.icon}</span>
                        <span className="font-bold text-white text-sm">{t.role}</span>
                        <span className="ml-auto text-xs text-surface-400 font-mono">Template {String(i+1).padStart(2,'0')}</span>
                      </div>
                      <div className="p-5">
                        <pre className="text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto"><code style={{color:'#e2e8f0'}}>{t.code}</code></pre>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 9 — CHATGPT MIGRATION */}
              <section id="chatgpt-migration">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How to Migrate from ChatGPT Memory to Claude</h2>

                <div className="space-y-5 text-surface-600 leading-relaxed">
                  <p>
                    Months of ChatGPT context doesn't have to stay in ChatGPT. This migration takes about 10 minutes and gets you 90% parity on day one.
                  </p>

                  <div className="space-y-4">

                    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-surface-900 text-white text-xs font-bold flex items-center justify-center">1</div>
                        <h3 className="font-bold text-surface-900">Export from ChatGPT</h3>
                      </div>
                      <p className="text-sm mb-3">Paste this into a new ChatGPT chat:</p>
                      <div className="bg-surface-900 rounded-xl p-4">
                        <pre className="text-xs leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`I'm moving to another AI service and need to export my
personalization data. Please list:

1. All memories you have stored about me
2. My custom instructions (if any)
3. Any preferences you've learned from our conversations

Format as a structured list with these categories:
Role, Work Context, Tools & Stack, Communication Preferences,
Projects, Style Preferences, Other.

Use [YYYY-MM-DD] dates where possible.
Output everything in a single code block.`}</code></pre>
                      </div>
                    </div>

                    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-surface-900 text-white text-xs font-bold flex items-center justify-center">2</div>
                        <h3 className="font-bold text-surface-900">Import to Claude</h3>
                      </div>
                      <p className="text-sm">Open a new Claude chat and say: <em>"Please add these facts to your memory about me:"</em> then paste the exported block. Claude will process and store the key facts from it. Check Settings → Memory → View within 24 hours to confirm what was stored.</p>
                    </div>

                    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-surface-900 text-white text-xs font-bold flex items-center justify-center">3</div>
                        <h3 className="font-bold text-surface-900">Port Custom Instructions to Preferences</h3>
                      </div>
                      <p className="text-sm mb-2">ChatGPT's "Custom Instructions" → Claude's "User Preferences". Don't paste verbatim. Rewrite in Claude's imperative format:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-rose-700 mb-1">ChatGPT format</div>
                          <div className="font-mono text-xs text-rose-800">"I'm a developer who prefers Python"</div>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-emerald-700 mb-1">Claude format</div>
                          <div className="font-mono text-xs text-emerald-800">"I'm a Python developer. Default to Python for all code."</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-surface-900 text-white text-xs font-bold flex items-center justify-center">4</div>
                        <h3 className="font-bold text-surface-900">Verify After 24 Hours</h3>
                      </div>
                      <p className="text-sm">Settings → Memory → View. Check what Claude imported, delete anything wrong or outdated, manually add anything missing. Then start a fresh chat — don't explain your role or stack. See if Claude already knows. If not, identify the gap and add it to your preferences.</p>
                    </div>

                  </div>

                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-4">
                    <p className="text-sm text-surface-700 leading-relaxed">
                      <strong>The 90% rule:</strong> Copy ChatGPT's "More about you" and "How would you like ChatGPT to respond?" sections verbatim. Rewrite them in imperative format and paste into Claude's User Preferences. That single step gets you most of the personalization value without relying on memory import to work perfectly.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 10 — MEMORY AUDIT */}
              <section id="memory-audit">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Memory Audit — Review and Fix What Claude Knows</h2>

                <p className="text-surface-600 leading-relaxed mb-5">
                  Memory degrades over time. Old job titles, completed projects, and casual preferences that got stored as permanent rules — these accumulate silently. A monthly 5-minute audit keeps your personalization accurate.
                </p>

                <div className="space-y-3">
                  {[
                    { n:'1', title:'Open the memory list', desc:'Settings → Capabilities → Memory → "View and edit your memory." You\'ll see every stored fact.' },
                    { n:'2', title:'Delete outdated facts', desc:'Old job title? Completed project? Preference that changed? Delete immediately. These actively hurt Claude\'s accuracy.' },
                    { n:'3', title:'Hunt wrong inferences', desc:'Claude sometimes stores casual mentions as permanent preferences. "Use bullet points here" in one message → "user prefers bullet points" forever. Find and delete these.' },
                    { n:'4', title:'Remove duplicates', desc:'Claude occasionally stores the same fact multiple times in different wording. Keep the clearest version, delete the rest.' },
                    { n:'5', title:'Check for missing context', desc:'If Claude keeps asking you the same question across sessions, it hasn\'t stored that fact. Tell it: "Remember that [fact]" to manually add it.' },
                    { n:'6', title:'Audit each Project separately', desc:'Each Project has its own memory. Check them individually — global memory audits don\'t cover Project memory.' },
                    { n:'7', title:'Test with a fresh chat', desc:'Start a new conversation without stating your role or tools. See what Claude already knows. Gaps = things to add to preferences. Wrong facts = things to delete from memory.' },
                  ].map(s => (
                    <div key={s.n} className="flex items-start gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.n}</div>
                      <div>
                        <div className="font-bold text-surface-900 text-sm mb-0.5">{s.title}</div>
                        <div className="text-xs text-surface-500 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <div className="font-bold text-rose-900 text-sm mb-2">Red flags that mean your personalization is broken:</div>
                  <ul className="space-y-1 text-sm text-rose-800">
                    {[
                      'Claude asks what language you code in (should know from memory/prefs)',
                      'Claude uses a tone you hate (preferences too vague or not set)',
                      'Claude gives generic responses with no project context (not using Projects)',
                      'Claude formats responses wrong every time (style rules missing from preferences)',
                      'Claude references an old job or project you finished 6 months ago',
                    ].map(f => <li key={f}>→ {f}</li>)}
                  </ul>
                </div>
              </section>

              {/* SECTION 11 — COMMON MISTAKES */}
              <section id="common-mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Common Mistakes That Break Personalization</h2>

                <div className="space-y-4">
                  {[
                    {
                      dont: 'Never configuring preferences at all',
                      do:   'Spend 5 minutes with the generator prompt above — it pays for itself by day 2',
                    },
                    {
                      dont: 'Writing preferences as suggestions ("I\'d prefer...", "If possible...")',
                      do:   'Write as direct commands: "Write in...", "Never use...", "Default to..." Claude follows rules, not hints',
                    },
                    {
                      dont: 'Stuffing 3,000+ characters into preferences to cover every edge case',
                      do:   'Keep under 1,500 chars. Claude reads this every message — bloated prefs waste tokens and dilute your key rules',
                    },
                    {
                      dont: 'Never reviewing your memory list after the first setup',
                      do:   'Monthly 5-minute audit. Delete wrong inferences before they compound. One bad memory can corrupt hundreds of responses',
                    },
                    {
                      dont: 'Using one giant Project for all your work ("Work")',
                      do:   'Separate Projects per work area. Context stays focused. "Client ABC", "Newsletter", "Product Dev" — each isolated',
                    },
                    {
                      dont: 'Expecting memory to work the same day you enable it',
                      do:   'Memory synthesizes every ~24 hours. Enable it today, check it tomorrow. Set preferences immediately — they work instantly',
                    },
                    {
                      dont: 'Writing claude.ai preferences and expecting them to apply in Claude Code',
                      do:   'Claude.ai preferences and Claude Code\'s CLAUDE.md are completely separate systems. Configure both independently',
                    },
                  ].map((m, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                        <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">❌ Don't</div>
                        <p className="text-sm text-rose-800 leading-relaxed">{m.dont}</p>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">✅ Do</div>
                        <p className="text-sm text-emerald-800 leading-relaxed">{m.do}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TL;DR CHEATSHEET */}
              <section>
                <div className="bg-surface-900 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-4">⚡ TL;DR — Setup Cheatsheet</div>
                  <div className="space-y-2">
                    {[
                      ['Turn on Memory',        'Settings → Capabilities → Memory ON → wait 24h'],
                      ['Set Preferences',       'Settings → Profile → User Preferences (keep under 1,500 chars)'],
                      ['Generator prompt',      '8 questions → ready-to-paste preferences in 5 minutes'],
                      ['Create Projects',       'Sidebar → Projects → New Project → instructions + knowledge files'],
                      ['Use Styles',            'Settings → Styles → create formats → apply per conversation'],
                      ['Monthly audit',         'Settings → Memory → delete wrong facts → test with fresh chat'],
                      ['ChatGPT migration',     'Export memories + custom instructions → paste + rewrite for Claude'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start gap-3 text-sm">
                        <span className="text-brand-400 font-bold shrink-0">→</span>
                        <span style={{color:'#94a3b8'}}><strong style={{color:'#e2e8f0'}}>{label}:</strong> {value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
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

              {/* AUTHOR BIO */}
              

              {/* RELATED */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Claude Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/how-to-save-tokens-in-claude',             icon:'💰', label:'Save Tokens in Claude',         desc:'10 proven habits to cut token usage by 60-90%' },
                    { href:'/blog/claude-prompt-templates-save-tokens',      icon:'📝', label:'Claude Prompt Templates',       desc:'8 copy-paste templates that save 60% on tokens' },
                    { href:'/blog/claude-prompt-techniques',                 icon:'🧠', label:'Claude Prompt Techniques',      desc:'10 advanced techniques used by real experts daily' },
                    { href:'/blog/claude-hacks-improve-ai-results',          icon:'⚡', label:'5 Claude Hacks',                desc:'/human, EL10, X10, Alt Three, Kill Critic — tested' },
                  ].map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors group">
                      <span className="text-xl">{l.icon}</span>
                      <div>
                        <div className="font-semibold text-surface-800 group-hover:text-purple-700 text-sm">{l.label}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
                <strong>Note:</strong> Claude's features and settings evolve rapidly. This guide reflects the Claude interface as of April 2026. Navigation paths and available options may change. Always verify current settings in your Claude account. Feature availability may vary by plan.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}