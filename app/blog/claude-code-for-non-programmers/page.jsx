import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Claude Code for Non-Programmers: A Gentle Beginner\'s Guide (2026)',
  description: 'Can you use Claude Code without knowing programming? Yes. Full guide: install, first prompts, cost in INR, Plan Mode, CLAUDE.md, and 9 mistakes to avoid.',
  keywords: [
    'claude code for non programmers', 'claude code beginners no coding',
    'claude code without programming experience', 'can non programmers use claude code',
    'claude code first time user guide 2026', 'claude code installation mac beginner',
    'claude code installation windows step by step', 'claude code desktop app no terminal',
    'claude code subscription price india', 'claude code pro plan inr',
    'claude code use cases writers marketers', 'claude code for students accountants',
    'what is plan mode claude code', 'what is claude md file',
    'claude code vs chatgpt non coders', 'claude code for non developers',
    'how to use claude code for spreadsheets', 'claude code invoice automation india',
    'claude code gst india', 'claude code beginner mistakes',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-code-for-non-programmers` },
  openGraph: {
    title: 'Claude Code for Non-Programmers: A Gentle Beginner\'s Guide (2026)',
    description: 'Never coded before? This guide covers everything: install routes without touching terminal, INR pricing, first prompts, real use cases for writers, marketers, accountants, and students.',
    url: `${SITE_CONFIG.url}/blog/claude-code-for-non-programmers`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Claude Code for Non-Programmers: A Gentle Beginner's Guide (2026)",
    description: 'Can you use Claude Code without knowing programming? Yes. Full guide: install, first prompts, cost in INR, Plan Mode, CLAUDE.md, and 9 mistakes to avoid.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id: 'honest-answer',    label: 'Is Claude Code actually for non-programmers?'       },
  { id: 'plain-english',    label: 'What is Claude Code, in plain English'              },
  { id: 'what-it-can-do',   label: 'What Claude Code can do without coding'            },
  { id: 'before-you-start', label: 'What you need before you start'                    },
  { id: 'install',          label: 'How to install Claude Code'                        },
  { id: 'first-15',         label: 'Your first 15 minutes inside Claude Code'          },
  { id: 'five-concepts',    label: 'The five concepts that make everything click'       },
  { id: 'cost',             label: 'How much does Claude Code really cost?'            },
  { id: 'mistakes',         label: '9 mistakes I made so you don\'t have to'           },
  { id: 'wrong-tool',       label: 'When Claude Code is the wrong tool'                },
  { id: '30-day-path',      label: 'Your 30-day learning path'                         },
  { id: 'faq',              label: 'Frequently asked questions'                        },
  { id: 'bottom-line',      label: 'The bottom line'                                   },
];

const FAQS = [
  {
    q: 'Do I need to know any programming to use Claude Code?',
    a: 'No. You need to know what you want to accomplish. Claude Code writes the code itself — your job is to describe the task in plain English. Knowing programming helps you check the output, but it\'s not a prerequisite to start. Thousands of writers, marketers, and analysts use it daily without any coding background.',
  },
  {
    q: 'Is Claude Code free?',
    a: 'No. Claude Code requires at minimum a Claude Pro plan ($20/month, about ₹1,700). The free Claude plan does not include Claude Code access. There\'s no free tier for Claude Code, but the Pro plan is the cheapest entry point and covers most non-programmer use cases comfortably.',
  },
  {
    q: 'What\'s the cheapest way to try Claude Code from India?',
    a: 'The Claude Pro plan at $20/month (about ₹1,700) is the minimum. Pay with a Visa/Mastercard international credit or debit card. Some users successfully use prepaid forex cards. This gets you Claude Code access with a reasonable usage limit. If you exceed limits often, the Max plan at $100/month (about ₹8,400) is the next step.',
  },
  {
    q: 'Can I use Claude Code without ever touching the terminal?',
    a: 'Yes, two ways. First: the Claude Desktop app runs Claude Code in a GUI — no terminal needed. Second: the VS Code extension lets you access Claude Code inside VS Code\'s editor interface. Both are genuinely terminal-free for most tasks. The terminal route unlocks more advanced features but is absolutely optional for beginners.',
  },
  {
    q: 'What\'s the difference between Claude Code and the Claude chat I already use?',
    a: 'Claude chat is like texting a very smart assistant — it sees what you type and replies. Claude Code has actual access to your computer\'s files, can read and write documents, run code, and take real actions on your machine. It\'s like the difference between asking someone for advice versus having them sit at your desk and do the work.',
  },
  {
    q: 'Will Claude Code delete my files by accident?',
    a: 'It won\'t delete files without asking. Claude Code uses a permissions system — before it reads, writes, or deletes anything, it tells you what it\'s about to do and waits for approval. Plan Mode (Shift+Tab) makes it show you a full plan before doing anything at all. Start in Plan Mode. Always.',
  },
  {
    q: 'How long does it take to learn Claude Code?',
    a: 'Most non-programmers feel comfortable with basic tasks within one focused afternoon session. Getting genuinely productive takes 1–2 weeks of regular use. The 30-day path at the end of this guide gives you a realistic week-by-week progression from installation to confident daily use.',
  },
  {
    q: 'What can I build with Claude Code in my first week?',
    a: 'Realistic first-week accomplishments: a working spreadsheet that auto-calculates GST, a PDF invoice template generator, a script that renames 200 files in one go, a simple data-cleaning tool for messy CSV exports, or a folder-organised system for your downloads. All without writing code yourself.',
  },
  {
    q: 'Is Claude Code better than ChatGPT for non-coders?',
    a: 'For tasks involving your own files, yes — significantly. ChatGPT (without plugins) can\'t directly read your spreadsheet or write to your folders. Claude Code can. For pure question-and-answer conversations with no file interaction, they\'re comparable. The deciding factor is whether your task involves your own documents or data.',
  },
  {
    q: 'Does Claude Code work offline?',
    a: 'No. Claude Code requires an active internet connection. All the actual AI processing happens on Anthropic\'s servers. The Claude Desktop app and VS Code extension are just interfaces — the intelligence is remote. This means it also won\'t work if Anthropic\'s servers are down, which is rare but happens occasionally.',
  },
  {
    q: 'How much does Claude Code cost per month if I use it daily?',
    a: 'For typical non-programmer daily use, the Pro plan at $20/month (₹1,700) covers most people. Heavy daily users — building complex things for hours each day — may find the Max plan at $100/month (₹8,400) more comfortable. See the cost section for the token math and a link to estimate your personal bill.',
  },
  {
    q: 'What should I do if Claude Code makes a mistake?',
    a: 'Don\'t panic, and don\'t undo manually yet. Type "that\'s not right — here\'s what I actually wanted: [describe it]" and let Claude correct itself. If files were changed incorrectly, Claude Code can undo them. For anything involving important files, keep a backup folder first. Mistakes are normal and almost always fixable.',
  },
];

export default function ClaudeCodeNonProgrammersBlog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Claude Code for Non-Programmers: A Gentle Beginner\'s Guide (2026)',
        description: 'A complete beginner\'s guide to Claude Code for non-programmers. Covers installation without a terminal, INR pricing, Plan Mode, CLAUDE.md, real use cases, and 9 beginner mistakes.',
        url: `${SITE_CONFIG.url}/blog/claude-code-for-non-programmers`,
        datePublished: '2026-04-18',
        dateModified: '2026-04-18',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: 'ToolStackHub', url: SITE_CONFIG.url },
        image: `${SITE_CONFIG.url}/og/claude-code-non-programmers.png`,
        inLanguage: 'en-IN',
        keywords: 'claude code for non programmers, claude code beginners, claude code india, claude code without coding',
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
        name: 'How to Install Claude Code Without Experience',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Get a Claude Pro plan', text: 'Sign up for Claude Pro at $20/month (about ₹1,700) at claude.ai. The free plan does not include Claude Code.' },
          { '@type': 'HowToStep', position: 2, name: 'Choose your install route', text: 'For no-terminal: download the Claude Desktop app or install the Claude VS Code extension. For terminal: install Node.js first, then run npm install -g @anthropic-ai/claude-code.' },
          { '@type': 'HowToStep', position: 3, name: 'Create a project folder', text: 'Create a new folder on your Desktop for your first project. Give it a clear name like "my-first-claude-project".' },
          { '@type': 'HowToStep', position: 4, name: 'Enable Plan Mode', text: 'Press Shift+Tab to activate Plan Mode before every task. This makes Claude show you a full plan before doing anything.' },
          { '@type': 'HowToStep', position: 5, name: 'Write your first prompt', text: 'Describe your task in plain English. Be specific about what files to read, what output you want, and in what format.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',  item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog',  item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Claude Code for Non-Programmers', item: `${SITE_CONFIG.url}/blog/claude-code-for-non-programmers` },
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
                <li className="text-surface-600">Claude Code for Non-Programmers</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">Claude Code</span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">🇮🇳 India Guide</span>
              <span className="text-xs text-surface-400">Last updated: April 18, 2026 · 13 min read</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              Claude Code for Non-Programmers:{' '}
              <span className="text-purple-600">A Gentle Beginner's Guide</span>
              {' '}(2026)
            </h1>

            {/* TL;DR */}
            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">⚡ TL;DR — The 5 things you need to know</div>
              <ul className="space-y-2">
                {[
                  'Claude Code is for non-programmers. You describe tasks in plain English; Claude writes and runs the code for you.',
                  'You do NOT need to learn programming. Not even a little bit. You need to know what you want.',
                  'It costs $20/month (about ₹1,700) — the Claude Pro plan is the minimum entry point.',
                  'You can install it without ever opening a terminal, using the Claude Desktop app or VS Code extension.',
                  'Always use Plan Mode (Shift+Tab) first. It shows you a preview of what Claude will do before it does anything.',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-surface-700">
                    <span className="text-purple-600 font-black shrink-0 mt-0.5">{i+1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Honesty box */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">📋 What I'm not being paid to say</div>
              <p className="text-sm text-amber-800 leading-relaxed">
                This post is not sponsored by Anthropic. There are no affiliate links. I pay for my own Claude subscription. I'll tell you exactly where Claude Code frustrated me, where it failed, and when you should use something else entirely.
              </p>
            </div>

            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6">
              <p>
                When I first heard about Claude Code, I spent three days not installing it because the name had the word "Code" in it. I assumed it was for software engineers. I was wrong, and those three days of hesitation cost me a week of productivity I still think about.
              </p>
              <p>
                Six weeks ago I'd never opened a terminal in my life. I've now used Claude Code to build a GST invoice tracker, clean 800 rows of messy client data, rename entire folders of files in seconds, and automate a weekly report that used to take me two hours. I wrote zero lines of code for any of it.
              </p>
              <p>
                This guide answers the question I couldn't find a straight answer to anywhere: <strong className="text-surface-800">is Claude Code actually for someone like me?</strong> Short answer: yes. Here's the long one.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">G</div>
              <div>
                <Link href="/about/garry" className="text-sm font-semibold text-surface-800 hover:text-brand-600">Garry</Link>
                <div className="text-xs text-surface-400">Founder, ToolStackHub · Writing about Claude since 2024 · Building tools for Indian professionals</div>
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
                        <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-purple-700 leading-snug transition-colors">
                          <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-purple-600 rounded-2xl p-4 text-white">
                  <div className="font-bold text-sm mb-2">💰 Estimate your bill</div>
                  <p className="text-purple-200 text-xs leading-relaxed mb-2">Worried about Claude costs? Calculate your monthly spend before committing.</p>
                  <Link href="https://www.toolstackhub.in/claude-code-token-calculator" className="block text-center bg-white text-purple-700 font-bold text-xs py-2 rounded-xl hover:bg-purple-50 transition-colors">
                    Token Guide →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ARTICLE */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-14">

              {/* SECTION 1 — HONEST ANSWER */}
              <section id="honest-answer">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Is Claude Code actually for non-programmers? (A brutally honest answer)</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Yes. But with a clarification that most guides miss.
                  </p>
                  <p>
                    Claude Code is not a coding tool in the way that word makes you picture lines of green text on a black screen. It's an AI that can interact with your computer — read your files, write code, run it, and give you the result — while you describe what you want in ordinary English. You are the project manager. Claude Code is the developer.
                  </p>
                  <p>
                    The word "Code" is in the name because, under the hood, Claude is writing and executing actual code to accomplish your tasks. But you never see most of it, and you certainly don't need to write it. Think of how you don't need to understand an engine to drive a car. Same principle.
                  </p>

                  <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5">
                    <p className="text-sm text-surface-700 leading-relaxed">
                      <strong>The honest caveat:</strong> Claude Code is not magic. It works best when you can describe your goal clearly and specifically. "Organise my downloads folder by file type and date" is a great prompt. "Make everything better" is not. The skill you're developing as a non-programmer is the ability to describe what you want precisely — which, it turns out, is a skill most people already have but underestimate.
                    </p>
                  </div>

                  <p>
                    <strong className="text-surface-800">Bottom line on this section:</strong> If you can describe a task clearly to a human assistant, you can use Claude Code. The terminal is optional. The coding knowledge is optional. The clarity about what you want is not.
                  </p>
                </div>
              </section>

              {/* SECTION 2 — PLAIN ENGLISH */}
              <section id="plain-english">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is Claude Code, in plain English</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Regular Claude (the chat at claude.ai) is a conversation. You type, it replies, nothing happens to your computer. It's like texting a very knowledgeable friend.
                  </p>
                  <p>
                    Claude Code is that same intelligence, but given a desk and a computer. It can open your files, read what's in them, write something new, save it, run a programme, and report the result. It takes actual actions, not just words.
                  </p>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">Claude Code vs the regular Claude chat — the one diagram you need</h3>

                  <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr style={{background:'#0f172a'}}>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Feature</th>
                          <th style={{color:'#a78bfa'}} className="text-center px-4 py-3 font-semibold">Claude Chat (claude.ai)</th>
                          <th style={{color:'#60a5fa'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Claude Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Reads your files',          '❌ You paste content manually', '✅ Opens them directly'  ],
                          ['Writes & saves files',      '❌ Gives you text to copy',    '✅ Creates and saves them'],
                          ['Runs code on your machine', '❌ No',                         '✅ Yes'                  ],
                          ['Memory across sessions',    '❌ Forgets each chat',          '✅ CLAUDE.md persists it' ],
                          ['Works on your folders',     '❌ No',                         '✅ Yes, with permission'  ],
                          ['Plan before acting',        '❌ N/A',                        '✅ Plan Mode (Shift+Tab)' ],
                          ['Needs a subscription',      '❌ Free tier exists',           '✅ Pro plan minimum'      ],
                        ].map((r, i) => (
                          <tr key={r[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-2.5 font-semibold text-surface-800">{r[0]}</td>
                            <td className="px-4 py-2.5 text-center text-surface-600 text-xs">{r[1]}</td>
                            <td className="px-4 py-2.5 text-center text-brand-700 text-xs font-medium">{r[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-bold text-surface-900 text-lg mt-6 mb-3">Claude Code vs ChatGPT, Cursor, and GitHub Copilot for non-coders</h3>

                  <div className="overflow-x-auto rounded-2xl border border-surface-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr style={{background:'#0f172a'}}>
                          {['', 'Claude Code', 'ChatGPT (Plus)', 'Cursor', 'GitHub Copilot'].map((h, i) => (
                            <th key={i} style={{color: i === 1 ? '#a78bfa' : '#ffffff'}}
                              className={`px-3 py-3 font-semibold text-left text-xs ${i === 0 ? 'rounded-tl-2xl' : ''} ${i === 4 ? 'rounded-tr-2xl' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Best for',           'All non-coder tasks', 'Q&A, writing',   'Devs in VS Code',    'Developers only'     ],
                          ['Touches your files', '✅ Yes',             '❌ No (default)', '✅ Yes',             '✅ Yes'              ],
                          ['No coding needed',   '✅ Fully',           '✅ Fully',        '⚠️ Helpful to know', '❌ Made for coders' ],
                          ['Cost in INR',        '~₹1,700/mo',        '~₹1,700/mo',      '~₹1,700/mo',        '~₹830/mo'            ],
                          ['Works offline',      '❌ No',             '❌ No',            '❌ No',             '⚠️ Partial'          ],
                          ['India context',      '✅ Strong',         '⚠️ OK',            '❌ Not focus',      '❌ Not focus'         ],
                        ].map((r, i) => (
                          <tr key={r[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-3 py-2.5 font-semibold text-surface-800 text-xs">{r[0]}</td>
                            <td className="px-3 py-2.5 text-purple-700 font-medium text-xs">{r[1]}</td>
                            <td className="px-3 py-2.5 text-surface-600 text-xs">{r[2]}</td>
                            <td className="px-3 py-2.5 text-surface-600 text-xs">{r[3]}</td>
                            <td className="px-3 py-2.5 text-surface-600 text-xs">{r[4]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 3 — WHAT IT CAN DO */}
              <section id="what-it-can-do">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What Claude Code can do for you if you've never written a line of code</h2>

                <div className="space-y-8">

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">✍️ For writers and content creators</h3>
                    <ul className="space-y-2 text-surface-600 text-sm">
                      {[
                        'Batch-rename 500 article files from random names to "YYYY-MM-DD_topic.docx" format',
                        'Build a local content calendar — a searchable spreadsheet from your folder of drafts',
                        'Extract all headings from a folder of Word documents and compile them into one overview file',
                        'Find every time you used a banned word across 100 articles and list the files and line numbers',
                        'Convert a folder of Markdown files into formatted HTML in one go',
                      ].map(i => (
                        <li key={i} className="flex items-start gap-2"><span className="text-purple-500 shrink-0 mt-0.5">→</span>{i}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">📣 For marketers and SEO folks</h3>
                    <ul className="space-y-2 text-surface-600 text-sm">
                      {[
                        'Parse a CSV of 10,000 keyword export rows and group them by topic cluster automatically',
                        'Build a local redirect map from an old URL list and a new URL list',
                        'Scrape metadata (title, description, H1) from a list of URLs and put it in a spreadsheet',
                        'Check a folder of images for missing alt-text patterns in your HTML files',
                        'Create a weekly SEO report template that auto-populates from your analytics CSV',
                      ].map(i => (
                        <li key={i} className="flex items-start gap-2"><span className="text-purple-500 shrink-0 mt-0.5">→</span>{i}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">🇮🇳 For accountants, freelancers, and small business owners (Indian use cases)</h3>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-3">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">🇮🇳 India-specific use cases</div>
                      <ul className="space-y-2 text-emerald-800 text-sm">
                        {[
                          'Build a GST invoice generator: input client name, items, amount → auto-calculates CGST/SGST/IGST and exports a formatted PDF',
                          'Create a TDS tracker: paste your 26AS data CSV and get a summary by deductor and quarter',
                          'Automate an ITR document checklist: read a folder of scanned PDFs and list what\'s present vs missing',
                          'Build a professional services invoice in the correct Indian format — GSTIN, HSN code, tax breakdowns included',
                          'Parse bank statement CSVs (HDFC, SBI, ICICI format) and categorise transactions by type automatically',
                        ].map(i => (
                          <li key={i} className="flex items-start gap-2"><span className="text-emerald-600 shrink-0 mt-0.5 font-bold">→</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-surface-500 text-xs">
                      Our <Link href="/invoice-generator" className="text-brand-600 hover:text-brand-700 font-medium">free invoice generator</Link> handles basic GST invoices instantly — but for custom automation across your existing data, Claude Code gives you something no pre-built tool can match.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">🎓 For students and researchers</h3>
                    <ul className="space-y-2 text-surface-600 text-sm">
                      {[
                        'Build a citation formatter: paste raw references and get them output in APA, MLA, or Chicago style',
                        'Create a literature review organiser: read a folder of PDFs and extract key arguments and author names',
                        'Build a personal quiz from your study notes — ask Claude to read your notes and generate 20 MCQs',
                        'Parse survey data CSVs and generate summary statistics with charts saved as image files',
                        'Batch-convert downloaded research PDFs into searchable text files for keyword searching',
                      ].map(i => (
                        <li key={i} className="flex items-start gap-2"><span className="text-purple-500 shrink-0 mt-0.5">→</span>{i}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">📊 For analysts working with messy spreadsheets</h3>
                    <ul className="space-y-2 text-surface-600 text-sm">
                      {[
                        'Read a messy CSV export with inconsistent date formats and standardise everything to DD/MM/YYYY',
                        'Merge 12 monthly sales reports into one master sheet with totals calculated automatically',
                        'Flag rows where a value in column C is missing but column D has data (common data quality issue)',
                        'Build a pivot-table-style summary from raw transaction data without opening Excel at all',
                        'Split one large CSV into separate files by the value in a specific column (e.g. by region or category)',
                      ].map(i => (
                        <li key={i} className="flex items-start gap-2"><span className="text-purple-500 shrink-0 mt-0.5">→</span>{i}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">📋 7 real prompts that worked on my first day (copy-paste ready)</h3>
                    <div className="space-y-3">
                      {[
                        { label:'File renamer', prompt:'Read all files in my Downloads folder. Rename each one using the pattern YYYY-MM-DD_original-name. Don\'t delete anything. Show me a preview list before making any changes.' },
                        { label:'GST calculator', prompt:'Create a simple HTML page that takes an amount and a GST rate (5%, 12%, 18%, or 28%), calculates CGST, SGST, and total, and shows the breakdown. Save it as gst-calculator.html on my Desktop.' },
                        { label:'CSV cleaner', prompt:'Read the file client-data.csv in my Documents folder. Find all rows where the phone number column has fewer than 10 digits or contains letters. Save those rows as errors.csv and the clean rows as clean-data.csv.' },
                        { label:'Folder organiser', prompt:'Look at my Desktop folder. Group all files by their file extension (pdf, docx, jpg, etc.) into subfolders. Show me the plan first — don\'t move anything until I approve.' },
                        { label:'Invoice template', prompt:'Create an invoice template as a Python script. It should ask me for client name, items, quantities, rates, and GSTIN. Output a formatted PDF invoice saved to my Desktop.' },
                        { label:'Word count by file', prompt:'Read all .docx files in my Articles folder and create a spreadsheet showing filename, word count, and date modified, sorted by date. Save it as article-stats.xlsx.' },
                        { label:'Duplicate finder', prompt:'Check my Photos folder for duplicate image files (same content, different names). List them in a text file — don\'t delete anything yet, just show me what\'s duplicated.' },
                      ].map(p => (
                        <div key={p.label} className="bg-surface-900 rounded-xl overflow-hidden">
                          <div className="bg-surface-800 px-4 py-2 flex items-center gap-2">
                            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{p.label}</span>
                          </div>
                          <div className="px-4 py-3">
                            <pre className="text-xs leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{p.prompt}</code></pre>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-surface-400 mt-3">
                      Notice the pattern: be specific, mention file paths, describe the output format, and ask for a preview before changes happen. The <Link href="/blog/claude-prompt-techniques" className="text-brand-600 hover:text-brand-700 font-medium">Claude prompting techniques guide</Link> covers the EL10 and Kill Critic methods that work inside Claude Code too.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4 — BEFORE YOU START */}
              <section id="before-you-start">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What you need before you start (the honest checklist)</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Hardware and OS requirements</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { os:'Mac', req:'macOS 12 (Monterey) or later. 8GB RAM minimum, 16GB recommended. Works best on M1/M2/M3 chips but Intel Macs with macOS 12+ work fine.' },
                        { os:'Windows', req:'Windows 10 or Windows 11 (64-bit). WSL2 (Windows Subsystem for Linux) recommended for the terminal route. The Claude Desktop app and VS Code extension avoid WSL entirely.' },
                        { os:'Linux', req:'Ubuntu 20.04 or later. Full terminal support. If you\'re on Linux, you likely already know the terminal — this guide still applies.' },
                        { os:'Chromebook', req:'Not supported for the terminal route. The Claude Desktop app and web version work, but Claude Code\'s file-access features are limited.' },
                      ].map(o => (
                        <div key={o.os} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                          <div className="font-bold text-surface-900 text-sm mb-1">💻 {o.os}</div>
                          <p className="text-xs text-surface-600 leading-relaxed">{o.req}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Which Claude plan you actually need — INR pricing</h3>
                    <div className="overflow-x-auto rounded-2xl border border-surface-200">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr style={{background:'#0f172a'}}>
                            {['Plan', 'Price', 'Claude Code?', 'Best for non-coders'].map((h, i) => (
                              <th key={h} style={{color:'#ffffff'}} className={`text-left px-4 py-3 font-semibold ${i === 0 ? 'rounded-tl-2xl' : ''} ${i === 3 ? 'rounded-tr-2xl' : ''}`}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Free',    'Free',                      '❌ Not included', 'Not for Claude Code — use claude.ai chat only'],
                            ['Pro',     '$20/mo (≈ ₹1,700)',         '✅ Yes',          'Most non-coders. Handles 1-3 hours of Claude Code use per day'],
                            ['Max',     '$100/mo (≈ ₹8,400)',        '✅ Yes',          'Heavy daily users: agencies, analysts, power users'],
                            ['API',     'Pay per use (~$3-15/1M tok)','✅ Yes (Claude Code uses it)', 'Technical founders, developers — not recommended for beginners'],
                          ].map((r, i) => (
                            <tr key={r[0]} className={i === 1 ? 'bg-purple-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                              <td className={`px-4 py-3 font-bold ${i === 1 ? 'text-purple-700' : 'text-surface-900'}`}>{r[0]}</td>
                              <td className={`px-4 py-3 font-mono font-semibold ${i === 1 ? 'text-purple-700' : 'text-surface-700'}`}>{r[1]}</td>
                              <td className="px-4 py-3 text-center">{r[2]}</td>
                              <td className="px-4 py-3 text-surface-600 text-xs">{r[3]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800">
                      <strong>⚠️ Watch out:</strong> The free Claude plan and Claude Pro are different things. Claude.ai has a free chat tier, but Claude Code access requires Pro minimum. Don't confuse the two when signing up.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5 — INSTALL */}
              <section id="install">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How to install Claude Code if you've never opened a terminal</h2>

                <div className="space-y-7">

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Route A: The Claude Desktop app (no terminal, no fuss)</h3>
                    <p className="text-surface-600 leading-relaxed mb-3 text-sm">
                      This is the recommended starting point for anyone who finds the terminal intimidating. The Claude Desktop app is a regular application — you download it, install it, and Claude Code capabilities are built in.
                    </p>
                    <ol className="space-y-2 text-sm">
                      {[
                        'Go to claude.ai/download. Download the app for your OS (Mac or Windows).',
                        'Install it like any other application (drag to Applications on Mac, run the installer on Windows).',
                        'Sign in with your Claude account. Make sure you\'re on the Pro plan.',
                        'In the app, click the "+" or "Projects" to create a new project.',
                        'You\'re ready. Claude Code features are available inside the Desktop app natively.',
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</div>
                          <span className="text-surface-600">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Route B: The VS Code extension (no terminal, more power)</h3>
                    <p className="text-surface-600 leading-relaxed mb-3 text-sm">
                      VS Code is a free code editor that many non-programmers use for writing Markdown, managing files, and working with CSV data. The Claude Code extension plugs directly into it.
                    </p>
                    <ol className="space-y-2 text-sm">
                      {[
                        'Download VS Code free from code.visualstudio.com. Install like any application.',
                        'Open VS Code. Press Ctrl+Shift+X (Windows) or Cmd+Shift+X (Mac) to open Extensions.',
                        'Search for "Claude" — install the official Anthropic Claude extension.',
                        'Sign in with your Claude credentials in the extension panel.',
                        'Open a folder (File → Open Folder) and start prompting from the Claude panel.',
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</div>
                          <span className="text-surface-600">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Route C: Terminal on Mac (if you want the full experience)</h3>
                    <div className="bg-surface-900 rounded-xl p-5">
                      <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-3">Step by step — Mac terminal install</div>
                      <div className="space-y-3 text-sm font-mono">
                        {[
                          { cmd:'# Step 1: Install Node.js first (needed by Claude Code)',   explain:'Node.js is a software Claude Code depends on. Download from nodejs.org and install it like any app.', type:'comment' },
                          { cmd:'node --version',   explain:'Type this and press Enter. If you see "v20.x.x" or similar, Node is installed.', type:'cmd' },
                          { cmd:'# Step 2: Install Claude Code',   explain:'', type:'comment' },
                          { cmd:'npm install -g @anthropic-ai/claude-code',   explain:'This downloads Claude Code. The "-g" means it installs globally (available everywhere on your Mac). Takes 30-60 seconds.', type:'cmd' },
                          { cmd:'# Step 3: Authenticate',   explain:'', type:'comment' },
                          { cmd:'claude',   explain:'Type "claude" and press Enter. It will open a browser window asking you to sign in to your Anthropic account. Sign in and return.', type:'cmd' },
                        ].map((s, i) => (
                          <div key={i}>
                            <div style={{color: s.type === 'comment' ? '#6b7280' : '#e2e8f0'}}>{s.cmd}</div>
                            {s.explain && <div className="text-xs pl-4 mt-0.5" style={{color:'#94a3b8'}}># {s.explain}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Route D: Terminal on Windows (PowerShell)</h3>
                    <div className="bg-surface-900 rounded-xl p-5">
                      <pre className="text-sm leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`# Step 1: Enable WSL2 (Windows Subsystem for Linux)
# Open PowerShell as Administrator (right-click → Run as Administrator)
wsl --install

# Restart your computer when prompted.

# Step 2: Open WSL (Ubuntu) from Start menu
# From here, the commands are identical to Mac:

node --version           # check Node is installed
npm install -g @anthropic-ai/claude-code
claude                   # opens browser for sign-in`}</code></pre>
                    </div>
                    <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-800">
                      <strong>⚠️ Windows tip:</strong> If WSL feels like too much setup, use Route A (Claude Desktop) or Route B (VS Code extension) instead. They work natively on Windows without WSL.
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Common install errors and exactly how to fix them</h3>
                    <div className="space-y-3">
                      {[
                        { error:'"command not found: npm"',      fix:'Node.js isn\'t installed. Go to nodejs.org, download the LTS version, install it, then try again.' },
                        { error:'"permission denied"',           fix:'On Mac, prefix the command with "sudo ": sudo npm install -g @anthropic-ai/claude-code. It will ask for your Mac password.' },
                        { error:'"EACCES error" on install',     fix:'Node was installed with the wrong permissions. The quickest fix: install Node.js using nvm. Search "install nvm mac" — it takes 5 minutes.' },
                        { error:'"claude: command not found" after install', fix:'The install path isn\'t in your terminal\'s PATH. Close the terminal completely, reopen it, try again.' },
                        { error:'Browser doesn\'t open for sign-in', fix:'Copy the URL shown in the terminal and paste it manually into your browser.' },
                      ].map(e => (
                        <div key={e.error} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                          <div className="font-mono text-sm font-bold text-rose-700 mb-1">{e.error}</div>
                          <div className="text-sm text-surface-600">→ {e.fix}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 6 — FIRST 15 MINUTES */}
              <section id="first-15">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Your first 15 minutes inside Claude Code (a guided walkthrough)</h2>

                <div className="space-y-6 text-surface-600 leading-relaxed">

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Creating your first project folder</h3>
                    <p className="text-sm">
                      Create a new folder on your Desktop. Name it something clear — "my-first-project" or "gst-invoices-2026". This is your project's workspace. Claude Code will work inside this folder.
                    </p>
                    <p className="text-sm mt-2">
                      If you're using the terminal, navigate into the folder with <code className="bg-surface-100 px-1.5 py-0.5 rounded text-surface-800 font-mono text-xs">cd ~/Desktop/my-first-project</code> and type <code className="bg-surface-100 px-1.5 py-0.5 rounded text-surface-800 font-mono text-xs">claude</code> to start. If you're in the Desktop app or VS Code, just open that folder.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">The magic of the @ symbol (referencing files)</h3>
                    <p className="text-sm mb-2">
                      Inside Claude Code, the @ symbol is how you reference specific files. Type <code className="bg-surface-100 px-1.5 py-0.5 rounded text-surface-800 font-mono text-xs">@filename.csv</code> in your prompt and Claude reads that file directly. No copy-pasting content.
                    </p>
                    <div className="bg-surface-900 rounded-xl p-4">
                      <pre className="text-xs leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`# Instead of pasting 500 rows of CSV data:
Read @sales-report.csv and tell me which salesperson 
had the highest revenue in Q1. Show totals by person.

# Claude reads the file directly and answers.`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Plan Mode — the safety net every beginner needs</h3>
                    <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl p-5">
                      <p className="text-sm text-surface-700 leading-relaxed">
                        <strong>This is the most important thing in this entire guide.</strong> Before every task, press <strong>Shift+Tab</strong> to enable Plan Mode. In Plan Mode, Claude shows you exactly what it plans to do — which files it will read, what changes it will make, what new files it will create — and waits for your approval before doing anything. Think of it as "show me the plan first." It's your safety net. Use it every time, especially while you're learning.
                      </p>
                      <p className="text-sm text-surface-700 leading-relaxed mt-2">
                        I cover Plan Mode and other workflow patterns in detail in the <Link href="/blog/claude-prompt-techniques" className="text-brand-600 hover:text-brand-700 font-medium">Claude prompting techniques guide</Link> — the same principles apply inside Claude Code.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Your first real prompt and what to expect</h3>
                    <p className="text-sm">
                      Type something simple. Don't try to automate your entire business on day one.
                    </p>
                    <div className="bg-surface-900 rounded-xl p-4 mt-2">
                      <pre className="text-xs leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`Create a simple text file called notes.txt in this folder.
Add today's date at the top, then write "First Claude Code
session" underneath it.`}</code></pre>
                    </div>
                    <p className="text-sm mt-3">
                      Claude will show you the plan, you approve, and it creates the file. Congratulations — you've used Claude Code. Now check your folder. The file is really there.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7 — FIVE CONCEPTS */}
              <section id="five-concepts">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The five concepts that make everything click</h2>

                <div className="space-y-6">

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">1. CLAUDE.md — the memory file that makes Claude remember you</h3>
                    <p className="text-surface-600 leading-relaxed text-sm mb-3">
                      Claude Code has no memory between sessions by default. Close the terminal, start again, and it's forgotten everything. CLAUDE.md fixes this. It's a plain text file you create in your project folder. Anything you put in it, Claude reads at the start of every session in that folder.
                    </p>
                    <div className="bg-surface-900 rounded-xl p-4">
                      <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">Example CLAUDE.md for a freelance accountant</div>
                      <pre className="text-xs leading-relaxed whitespace-pre-wrap"><code style={{color:'#e2e8f0'}}>{`# My preferences
- I am an accountant working with Indian GST and income tax
- All amounts are in INR unless otherwise specified
- GST rates I use: 5%, 12%, 18%, 28%
- My GSTIN: [leave blank, fill when needed]
- Output formats: Excel (.xlsx) for tables, PDF for reports
- Never delete any file without explicitly listing what 
  you will delete and getting my confirmation first
- When uncertain, ask me one clarifying question`}</code></pre>
                    </div>
                    <p className="text-surface-500 text-xs mt-2">
                      See <Link href="/blog/claude-prompt-templates-save-tokens" className="text-brand-600 hover:text-brand-700 font-medium">battle-tested Claude prompt templates</Link> for more CLAUDE.md starting points for different roles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">2. Context windows — why long conversations slow down</h3>
                    <p className="text-surface-600 leading-relaxed text-sm">
                      A context window is Claude's working memory for a session. Every file it reads, every message you exchange, and every response it generates fills it up. Once it's full, Claude starts forgetting earlier parts of the conversation. When tasks go slowly or Claude seems confused about something it knew earlier, the context window is usually why. The fix: use <code className="bg-surface-100 px-1.5 py-0.5 rounded text-surface-800 font-mono text-xs">/compact</code> to summarise and clear, or start a fresh session for a new task.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">3. Sub-agents — running multiple Claudes in parallel</h3>
                    <p className="text-surface-600 leading-relaxed text-sm">
                      For complex tasks, Claude Code can spin up sub-agents — separate Claude instances working on different parts of a task simultaneously. You don't control this directly; Claude decides when to use it. What matters for you: if you notice Claude saying it's "spawning" or "delegating" something, it's working efficiently, not failing. Don't interrupt it.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">4. Slash commands you'll actually use</h3>
                    <div className="overflow-x-auto rounded-xl border border-surface-200">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-surface-50">
                            <th className="text-left px-4 py-2.5 font-bold text-surface-700 text-xs">Command</th>
                            <th className="text-left px-4 py-2.5 font-bold text-surface-700 text-xs">What it does</th>
                            <th className="text-left px-4 py-2.5 font-bold text-surface-700 text-xs">When to use it</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['/clear',   'Clears conversation history',   'Starting a completely new task in the same session'],
                            ['/compact', 'Compresses context, keeps summary', 'Conversation getting long; Claude seems to be forgetting things'],
                            ['/plan',    'Enter Plan Mode (same as Shift+Tab)', 'When you forgot to use Shift+Tab before starting'],
                            ['/help',    'Shows all available commands',  'Exploring what else is available'],
                            ['/status',  'Shows current usage and context',  'Checking how much context you\'ve used'],
                          ].map((r, i) => (
                            <tr key={r[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                              <td className="px-4 py-2.5 font-mono font-bold text-purple-700 text-xs">{r[0]}</td>
                              <td className="px-4 py-2.5 text-surface-600 text-xs">{r[1]}</td>
                              <td className="px-4 py-2.5 text-surface-500 text-xs">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">5. Permissions — when to allow, when to pause</h3>
                    <p className="text-surface-600 leading-relaxed text-sm">
                      Claude Code asks for permission before taking actions: reading a file, writing to disk, running code. Always read the permission request before clicking yes. If it says it will "delete" something, that's worth a pause. If it says it will "read" a file you recognise, approving is fine. Think of permissions like the pop-up on your phone asking an app to access your photos — you check it before tapping Allow.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8 — COST */}
              <section id="cost">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">How much does Claude Code really cost? (with INR breakdown)</h2>

                <div className="space-y-5 text-surface-600 leading-relaxed">

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">Pro plan ($20/mo ≈ ₹1,700) vs Max ($100/mo ≈ ₹8,400) vs API</h3>
                    <p className="text-sm mb-3">
                      The Pro plan is enough for most non-programmers using Claude Code for 1-3 hours per day on typical tasks. The Max plan is for heavy users — agencies, analysts running large data jobs, or anyone who keeps hitting usage limits on Pro.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800">
                      <strong>💰 Cost note for India:</strong> Anthropic charges in USD. At current rates (~₹84/dollar), the Pro plan is about ₹1,680/month. Your bank may add a 2-3% foreign currency markup, making the effective cost ₹1,720-1,730. The Max plan runs ₹8,400-8,650 depending on your bank's rate.
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">How tokens actually get burned</h3>
                    <p className="text-sm">
                      Tokens are how AI measures text. Every word in your prompt, every file Claude reads, and every response it writes burns tokens. For non-programmers, the heavy usage activities are: reading large CSV files, processing long documents, and having very long conversations without using /compact. Short, specific prompts are always cheaper than long exploratory ones.
                    </p>
                    <p className="text-sm mt-2">
                      To understand the token maths and get habits that cut your bill significantly, the <Link href="/blog/how-to-save-tokens-in-claude" className="text-brand-600 hover:text-brand-700 font-medium">token-saving habits guide</Link> covers exactly how to estimate and reduce your monthly spend.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-surface-900 text-lg mb-3">6 cost-control habits worth knowing on day one</h3>
                    <div className="space-y-2">
                      {[
                        { n:'1', h:'Start every new task with /clear', d:'Previous conversation tokens don\'t need to be in context for a new task. Clear them and save the context budget for what matters.' },
                        { n:'2', h:'Use /compact for long sessions', d:'When a session runs long, /compact summarises the conversation and discards the verbatim history, freeing context for continued work.' },
                        { n:'3', h:'Describe what you want before what you don\'t', d:'Negative constraints burn extra tokens. "Create a clean summary" is cheaper than "Create a summary but don\'t include headers, don\'t use bullet points, and avoid tables."' },
                        { n:'4', h:'Keep files small when possible', d:'Reading a 50,000-row CSV to answer a question about 100 rows wastes tokens. Filter down or give Claude a smaller sample first.' },
                        { n:'5', h:'Use CLAUDE.md to avoid repeating context', d:'Context you type every session costs tokens every session. CLAUDE.md front-loads it once per session at a fraction of the cost.' },
                        { n:'6', h:'Break complex tasks into smaller steps', d:'One prompt that reads five files, runs analysis, and outputs three reports will burn more tokens on errors than five small prompts that do it step by step.' },
                      ].map(h => (
                        <div key={h.n} className="flex items-start gap-3 text-sm bg-surface-50 border border-surface-200 rounded-xl p-4">
                          <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{h.n}</div>
                          <div>
                            <div className="font-bold text-surface-900 mb-0.5">{h.h}</div>
                            <div className="text-surface-500 text-xs leading-relaxed">{h.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9 — MISTAKES */}
              <section id="mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">9 mistakes I made so you don't have to</h2>

                <div className="space-y-3">
                  {[
                    { n:'1', title:'Not using Plan Mode on my first task', what:'I asked Claude to "organise" a folder without using Plan Mode first. It reorganised 400 files. Correctly, actually — but not the way I wanted. Fifteen minutes of undoing.' },
                    { n:'2', title:'Working directly in my real documents folder', what:'I pointed Claude Code at my actual Documents folder for the first practice session. Work on a test folder with dummy files until you\'re confident.' },
                    { n:'3', title:'Writing vague prompts ("make it better")', what:'Claude can\'t read minds. "Make the spreadsheet better" gets a generic response. "Add a totals row, format amounts in INR with commas, highlight rows where amount > 50,000" gets what you wanted.' },
                    { n:'4', title:'Letting sessions run forever without /compact', what:'After an hour of back-and-forth, Claude started giving inconsistent answers because the context was overloaded. /compact every 20-30 minutes for long work sessions.' },
                    { n:'5', title:'Accepting the output without checking it', what:'Claude got the totals wrong in a financial calculation because the source CSV had a formatting quirk. Always verify outputs that involve numbers, especially financial ones.' },
                    { n:'6', title:'Not having a CLAUDE.md from day one', what:'I spent the first week re-explaining my context at the start of every session. CLAUDE.md pays back its setup time within the second session.' },
                    { n:'7', title:'Trying to do too much in one prompt', what:'"Read all my CSV files, clean them, merge them, calculate totals, create a report, and email it to me" is not a prompt — it\'s a project plan. Break it into steps.' },
                    { n:'8', title:'Panicking when something looked wrong', what:'Early on, Claude\'s output looked wrong and I immediately closed the session. Asking "this doesn\'t look right — I expected [x] but got [y], what happened?" usually resolves it in one reply.' },
                    { n:'9', title:'Forgetting to save my CLAUDE.md to the right folder', what:'I created CLAUDE.md on my Desktop, then started a Claude Code session in a different folder. It didn\'t read it. CLAUDE.md must be in the project folder you\'re working in.' },
                  ].map(m => (
                    <div key={m.n} className="flex items-start gap-4 p-4 bg-surface-50 border border-surface-200 rounded-2xl">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm flex items-center justify-center shrink-0">{m.n}</div>
                      <div>
                        <div className="font-bold text-surface-900 text-sm mb-0.5">✗ {m.title}</div>
                        <div className="text-xs text-surface-500 leading-relaxed">{m.what}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 10 — WRONG TOOL */}
              <section id="wrong-tool">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">When Claude Code is the wrong tool (and what to use instead)</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Claude Code is genuinely impressive, but there are situations where something else serves you better. Being honest about this matters.
                  </p>

                  <div className="space-y-3">
                    {[
                      { situation:'Quick one-off questions',                 better:'Claude chat (claude.ai free tier)',              why:'No file access needed, no install required, free. Don\'t pay for Pro just to ask a factual question.' },
                      { situation:'GST invoices for individual clients',      better:'ToolStackHub free invoice generator',            why:'Faster than setting up Claude Code for a one-time invoice. Claude Code shines for batch automation, not one-off forms.' },
                      { situation:'Complex financial modelling',             better:'Excel + a CA',                                  why:'Claude Code can help with data cleaning and formatting, but complex financial models require professional judgment that no AI should replace.' },
                      { situation:'Tasks needing an internet connection',    better:'Browsing AI tools (Perplexity, ChatGPT)',        why:'Claude Code reads files on your machine — it doesn\'t scrape the web (by default). For research requiring live data, use a browsing-enabled tool.' },
                      { situation:'Building production apps for customers',  better:'Hire a developer, or learn with a developer present', why:'Claude Code is excellent for personal automation and prototypes. Production software used by real customers needs proper engineering oversight.' },
                      { situation:'Real-time collaboration with a team',     better:'Google Docs, Notion, or dedicated project tools', why:'Claude Code works on local files. It\'s not a collaboration platform and can\'t sync with teammates.' },
                    ].map(r => (
                      <div key={r.situation} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl text-sm">
                        <div><span className="font-bold text-surface-700 block text-xs uppercase tracking-wider mb-1">Situation</span>{r.situation}</div>
                        <div><span className="font-bold text-emerald-700 block text-xs uppercase tracking-wider mb-1">Better tool</span>{r.better}</div>
                        <div><span className="font-bold text-surface-500 block text-xs uppercase tracking-wider mb-1">Why</span><span className="text-xs text-surface-500 leading-relaxed">{r.why}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* SECTION 11 — 30-DAY PATH */}
              <section id="30-day-path">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Your 30-day learning path from zero to confident</h2>

                <div className="space-y-4">
                  {[
                    {
                      period:'Week 1 — Get familiar',
                      color:'bg-purple-50 border-purple-200',
                      tc:'text-purple-700',
                      tasks:[
                        'Install using Route A (Desktop app) — no terminal needed',
                        'Create a test folder with dummy files',
                        'Complete the first 15-minute walkthrough above',
                        'Use all 7 copy-paste prompts from the "real prompts" section',
                        'Create your first CLAUDE.md with basic preferences',
                      ],
                    },
                    {
                      period:'Week 2 — Build something real',
                      color:'bg-brand-50 border-brand-200',
                      tc:'text-brand-700',
                      tasks:[
                        'Apply Claude Code to one real problem from your actual work',
                        'Work in Plan Mode for every task this week — build the habit',
                        'Practice using /compact when sessions run long',
                        'Learn the @ file-reference shortcut',
                        'Improve your CLAUDE.md based on what you keep re-explaining',
                      ],
                    },
                    {
                      period:'Week 3 — Go deeper',
                      color:'bg-emerald-50 border-emerald-200',
                      tc:'text-emerald-700',
                      tasks:[
                        'Tackle a task that involves multiple files or a folder',
                        'Try a data-cleaning task with a real CSV',
                        'Experiment with Route B (VS Code extension) for comparison',
                        'Read about token usage — estimate your monthly bill',
                        'Identify your top 3 most-used task types and refine prompts for them',
                      ],
                    },
                    {
                      period:'Week 4 — Make it routine',
                      color:'bg-amber-50 border-amber-200',
                      tc:'text-amber-700',
                      tasks:[
                        'Build one small automation that saves time weekly (file organiser, report template, invoice generator)',
                        'Teach one colleague or friend — explaining it consolidates your own understanding',
                        'Review your CLAUDE.md and update it with everything you\'ve learned',
                        'Explore slash commands beyond /clear and /compact',
                        'Decide: am I hitting Pro limits? Consider Max if yes.',
                      ],
                    },
                  ].map(w => (
                    <div key={w.period} className={`border ${w.color.split(' ')[1]} ${w.color.split(' ')[0]} rounded-2xl p-5`}>
                      <div className={`font-bold mb-3 ${w.tc}`}>{w.period}</div>
                      <ul className="space-y-1.5">
                        {w.tasks.map(t => (
                          <li key={t} className="flex items-start gap-2 text-sm text-surface-600">
                            <span className={`${w.tc} shrink-0 font-bold mt-0.5`}>→</span>{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently asked questions</h2>
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

              {/* BOTTOM LINE */}
              <section id="bottom-line">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The bottom line — should you actually try this?</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    If your work involves files, data, documents, or any kind of repetitive text processing — yes. Claude Code is genuinely accessible to non-programmers and genuinely useful once you're past the first hour of setup.
                  </p>
                  <p>
                    The terminal is optional. The programming knowledge is optional. The ability to describe what you want clearly is the only prerequisite, and you already have that.
                  </p>
                  <p>
                    Start with Route A (the Desktop app), create a test folder, enable Plan Mode, and try one of the copy-paste prompts above. Worst case: you spend an hour installing something that doesn't click for you right now. Best case: you've automated something that's been annoying you for months, before your chai goes cold.
                  </p>
                  <p>
                    <strong className="text-surface-800">The single most useful thing you can do after finishing this guide: stop reading and install the Claude Desktop app.</strong> Everything else is details you'll learn by doing.
                  </p>
                </div>

                <div className="mt-6 bg-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2" style={{color:'#ffffff'}}>Ready to start?</h3>
                  <p className="text-purple-200 text-sm leading-relaxed mb-4">
                    Get Claude Pro at claude.ai/upgrade and download the Desktop app. Your first test prompt is already in this guide — copy it and go.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://claude.ai/upgrade" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-5 py-2.5 rounded-xl hover:bg-purple-50 transition-colors text-sm">
                      Get Claude Pro →
                    </a>
                    <Link href="/blog/how-to-save-tokens-in-claude"
                      className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm border border-white/20 hover:bg-white/10" style={{color:'#ffffff'}}>
                      Read the token guide first
                    </Link>
                  </div>
                </div>
              </section>

              {/* AUTHOR BIO */}
              

              {/* RELATED */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Claude Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/how-to-save-tokens-in-claude',          icon:'💰', label:'How to Save Tokens in Claude',         desc:'Cut token usage by 60-90%. 10 habits that pay back daily.' },
                    { href:'/blog/claude-prompt-techniques',              icon:'🧠', label:'Claude Prompt Techniques',              desc:'10 expert techniques including Plan Mode context and EL10.' },
                    { href:'/blog/claude-prompt-templates-save-tokens',               icon:'📋', label:'Claude Prompt Templates',               desc:'8 copy-paste templates including CLAUDE.md starters.' },
                    { href:'/blog/claude-memory-preferences-guide',       icon:'⚙️', label:'Claude Memory & Preferences Guide',    desc:'Set up voice, preferences, and Projects for daily use.' },
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
                <strong>Note:</strong> Claude Code features, pricing, and installation steps reflect Anthropic's platform as of April 2026. Anthropic updates Claude Code frequently — verify current details at docs.anthropic.com/claude-code. INR pricing is approximate based on ₹84/USD exchange rate. Your bank may add a foreign currency conversion fee.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}