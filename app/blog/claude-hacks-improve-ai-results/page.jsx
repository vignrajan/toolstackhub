import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: '5 Claude Hacks That Improve Your AI Results (Tested 2026)',
  description: 'Most people use Claude wrong. These 5 proven Claude hacks — /human, EL10, X10, Alt Three, Kill Critic — improve output quality. Copy-paste prompts inside.',
  keywords: [
    'claude prompt hacks', 'claude ai tips', 'how to use claude effectively',
    'best claude prompts', 'claude prompt techniques', 'claude hacks 2026',
    'claude ai prompts guide', 'improve claude output', 'claude prompt tricks',
    'how to get better results from claude',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-hacks-improve-ai-results` },
  openGraph: {
    title: '5 Claude Hacks That Improve Your AI Results (Tested 2026)',
    description: '5 proven Claude hacks with copy-paste prompts. /human, EL10, X10, Alt Three, Kill Critic — tested and explained.',
    url: `${SITE_CONFIG.url}/blog/claude-hacks-improve-ai-results`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Claude Hacks That Improve Your AI Results (Tested 2026)',
    description: 'Most people use Claude wrong. These 5 proven Claude hacks — /human, EL10, X10, Alt Three, Kill Critic — improve output quality. Copy-paste prompts inside.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const HACKS = [
  {
    id:      'human',
    n:       '01',
    emoji:   '🗣️',
    name:    '/human — Make Claude Sound Like an Actual Person',
    tag:     'Naturalness Hack',
    color:   'brand',
    what:    'Adding /human to your prompt tells Claude to drop the assistant voice entirely and write as though a real, experienced person is speaking — no hedge phrases, no "certainly!", no robotic paragraph structure. Just natural, direct communication.',
    why:     `Claude's default output is optimized for safety and comprehensiveness — which often means it sounds like a press release. The /human flag activates a different output pattern: shorter sentences, natural rhythm, first-person perspective, and the kind of informal confidence you hear from someone who actually knows what they're talking about.`,
    steps: [
      'Write your normal prompt',
      'Add "/human" at the end or beginning',
      'Optionally specify who the human is: "/human — write as a 10-year marketing veteran"',
      'Run the prompt and notice the tone shift immediately',
    ],
    prompt:  `/human

Explain why most startups fail in year two. Write it conversationally, like you've watched it happen firsthand.`,
    before:  'Startups often face significant challenges in their second year of operation. These challenges may include cash flow management, scaling difficulties, and market competition. According to research, a substantial percentage of new businesses fail to sustain operations beyond their initial period.',
    after:   `Year two is where the illusion dies. The early adrenaline is gone. The initial customers are retained or lost. And suddenly you're running a real business — with real payroll, real churn, and a product that the market is telling you isn't quite right yet. Most founders weren't ready for that conversation.`,
    proTip:  'Pair /human with a specific persona: "/human — write as a burned-out but brilliant CFO." The persona gives Claude a specific voice rather than a generic "casual" tone.',
    colorHex:'#2563eb',
  },
  {
    id:      'el10',
    n:       '02',
    emoji:   '🧒',
    name:    'EL10 — Simplify Anything to Grade-Level Clarity',
    tag:     'Clarity Hack',
    color:   'emerald',
    what:    'EL10 stands for "Explain Like I\'m 10." Adding this to any Claude prompt forces it to strip out jargon, shorten sentences, and use analogies a child could follow. It is the fastest way to get a clear explanation of anything — from quantum physics to tax law.',
    why:     `Claude normally calibrates its explanation depth to the assumed sophistication of the question. Ask about "monetary policy" and Claude assumes you want the full economic context. EL10 overrides this — forcing Claude into first-principles thinking. Paradoxically, the EL10 constraint often produces more useful explanations for everyone, not just beginners. If you can't explain it simply, you don't fully understand it.`,
    steps: [
      'Add "EL10:" before any complex topic or question',
      'For extra simplicity, add "use an analogy"',
      'For a specific audience, try "EL10 for a first-year business student"',
      'Use it on long Claude outputs to compress them: "EL10: summarize the above"',
    ],
    prompt:  `EL10: How does compound interest actually work? Use an analogy.`,
    before:  'Compound interest refers to the process whereby interest is calculated on both the initial principal and the accumulated interest from previous periods. This results in exponential growth over time, as opposed to simple interest which is calculated solely on the principal amount.',
    after:   `Imagine your money is a snowball rolling down a hill. Every time it rolls, it picks up more snow — and the bigger it gets, the more snow it picks up each roll. Compound interest works the same way. Your money earns interest. Then that interest also earns interest. Then all of that earns interest too. The longer you wait, the faster the snowball grows.`,
    proTip:  'EL10 is underrated for writing. Run your first draft through "EL10: rewrite this to be clearer." Claude will ruthlessly strip complexity without losing meaning — often better than any editing you\'d do yourself.',
    colorHex:'#059669',
  },
  {
    id:      'x10',
    n:       '03',
    emoji:   '🔥',
    name:    'X10 — Unlock a 10× Richer, Deeper Response',
    tag:     'Depth Hack',
    color:   'purple',
    what:    'Adding X10 to your Claude prompt tells it to produce output that is 10 times more detailed, nuanced, and useful than its standard response. Think of it as turning off Claude\'s "good enough" mode and activating its "thorough professional" mode.',
    why:     `Claude optimizes for efficiency by default. It produces answers that satisfy the question at a reasonable length — often stopping before getting to the genuinely useful nuances. X10 tells Claude that brevity is not the goal. Depth is. It unlocks examples, edge cases, alternative perspectives, and the kind of rich detail that makes an output actually valuable rather than merely correct.`,
    steps: [
      'Add "X10:" before your prompt',
      'Be specific about what dimension you want amplified: "X10 depth" or "X10 examples" or "X10 nuance"',
      'Use it for research, analysis, or any output that needs to be comprehensive',
      'Combine with other hacks: "X10 /human: explain the psychology of pricing"',
    ],
    prompt:  `X10: What are the real reasons people procrastinate? Go beyond the surface — include psychology, neuroscience, and practical patterns most people miss.`,
    before:  'Procrastination is often caused by a lack of motivation, fear of failure, or poor time management skills. People may also procrastinate when tasks feel overwhelming or when they struggle with prioritization.',
    after:   `Procrastination is almost never about laziness. That's the surface story.

At the neurological level, your brain's prefrontal cortex (rational planning) is constantly battling your limbic system (immediate feelings). Procrastination is the limbic system winning — specifically, it's your brain treating an uncomfortable task as a threat and routing around it.

The fear of failure angle is real, but it's more specific than most articles admit: it's not fear of failing the task. It's fear of discovering you tried your best and it still wasn't good enough. Procrastination protects your self-image — if you fail after barely trying, you can always tell yourself "I could have done better with more time."

Then there's the dopamine loop. Every time you switch from a hard task to checking email or social media, your brain gets a small dopamine hit. You're not broken — you're being systematically rewarded for avoiding discomfort.

The pattern most people miss: procrastination peaks on tasks that are important but ambiguous. The clearer the task, the less procrastination. This is why "write the report" causes procrastination but "write the first paragraph of the report" usually doesn't.`,
    proTip:  'X10 works best when paired with a specific dimension. "X10 examples" gives you 10+ real-world cases. "X10 nuance" digs into edge cases. "X10 depth" goes several levels deeper into the why. Unspecified X10 just produces longer — specify the dimension for the most useful output.',
    colorHex:'#7c3aed',
  },
  {
    id:      'alt3',
    n:       '04',
    emoji:   '🎯',
    name:    'Alt Three — Get 3 Genuinely Different Options Instantly',
    tag:     'Variation Hack',
    color:   'amber',
    what:    '"Alt Three" tells Claude to generate three meaningfully different versions of the same output — not three variations on the same idea, but three genuinely distinct approaches, angles, or styles. It\'s the fastest way to break out of creative ruts and see your options before committing to one.',
    why:     `Without Alt Three, Claude picks what it thinks is the best answer and gives you that. Which is fine — until you're making a decision that requires seeing the option space. Alt Three forces Claude into parallel-generation mode: it has to produce three outputs that don't resemble each other, which means it can't default to its first instinct. The second and third alternatives are often where the most interesting ideas live.`,
    steps: [
      'Add "Alt Three:" before any creative, strategic, or writing task',
      'Specify the dimension of difference: "Alt Three — one formal, one casual, one provocative"',
      'Or leave it open: "Alt Three: give me three completely different angles"',
      'Use Alt Three on headlines, email subjects, positioning statements, opening lines, and CTAs',
    ],
    prompt:  `Alt Three: Write an opening line for a blog post about why most people waste their mornings. Make each one genuinely different — not variations on the same idea.`,
    before:  'The morning hours are often considered the most productive time of day, yet many people fail to make the most of this valuable time period.',
    after:   `Option 1 (Data-led): The average person makes their most important decision of the day before 9 AM — what to have for breakfast.

Option 2 (Provocative): Your morning routine is probably optimized for comfort, not results. And you already know it.

Option 3 (Story-driven): My most productive morning ever started with a cancelled flight, a dead phone, and no coffee for four hours.`,
    proTip:  'Alt Three is most powerful when you tell Claude to maximize contrast between options: "Alt Three — make them as different as possible from each other." Without that instruction, Claude tends to cluster its three options around the same center. Forced contrast produces genuinely different thinking.',
    colorHex:'#d97706',
  },
  {
    id:      'killcritic',
    n:       '05',
    emoji:   '🔓',
    name:    'Kill Critic — Remove Claude\'s Over-Cautious Filter',
    tag:     'Directness Hack',
    color:   'rose',
    what:    '"Kill Critic" tells Claude to stop hedging, stop adding disclaimers, stop softening opinions, and just say what it actually thinks. It\'s the difference between "there are many valid perspectives on this" and "here\'s the honest answer."',
    why:     `Claude is trained to be helpful, harmless, and honest — and that training adds a reflexive layer of qualifications to almost everything it says. "It's worth noting that..." "This may vary..." "Some experts argue..." These phrases exist to cover edge cases, but they also bury the useful answer. Kill Critic tells Claude to prioritize honest directness over protective hedging. The result is more useful, more quotable, and more actionable.`,
    steps: [
      'Add "Kill Critic:" before any prompt where you want a direct opinion',
      'Be specific: "Kill Critic — give me your honest take, not a balanced overview"',
      'Use it for evaluating ideas, getting feedback, or asking Claude to judge between options',
      'Combine with X10: "Kill Critic X10: review my business idea honestly"',
    ],
    prompt:  `Kill Critic: I'm thinking of leaving my stable corporate job to start a food delivery startup in a city that already has Zomato and Swiggy. Give me your honest assessment — not a balanced view, your actual take.`,
    before:  'Starting a food delivery business can be challenging, particularly in markets with established players. However, there may be opportunities in niche segments or underserved areas. It would be important to conduct thorough market research and develop a differentiated value proposition.',
    after:   `This is a genuinely bad idea in its current form — not because startups are bad, but because the specific market you're describing has already been won. Zomato and Swiggy have spent billions building the logistics infrastructure, restaurant relationships, and consumer habits you'd need. You can't out-cheap them, and you likely can't out-execute them.

The only versions of this that work: hyper-local (a single neighbourhood they're ignoring), hyper-niche (a cuisine or dietary segment they don't serve well), or B2B (corporate meal programs, which have different dynamics entirely).

If you're committed to this space — don't compete on the same surface. Find the gap they're not profitable serving and own that. If you can't find that gap after one week of research, the business isn't ready.`,
    proTip:  'Kill Critic is most useful for getting honest feedback on your own work. Paste your writing, your business plan, or your pitch deck and ask: "Kill Critic: what is actually wrong with this?" Claude will tell you what a polite human reviewer would soften. Uncomfortable — and extremely useful.',
    colorHex:'#e11d48',
  },
];

const colorBg = { brand:'bg-brand-50', emerald:'bg-emerald-50', purple:'bg-purple-50', amber:'bg-amber-50', rose:'bg-rose-50' };
const colorBorder = { brand:'border-brand-200', emerald:'border-emerald-200', purple:'border-purple-200', amber:'border-amber-200', rose:'border-rose-200' };
const colorText = { brand:'text-brand-700', emerald:'text-emerald-700', purple:'text-purple-700', amber:'text-amber-700', rose:'text-rose-700' };

export default function ClaudeHacksBlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: '5 Claude Hacks That Instantly Improve Your AI Results (Tested & Proven)',
        description: '5 proven Claude prompt hacks with copy-paste examples. /human, EL10, X10, Alt Three, Kill Critic — each one tested and explained with before/after outputs.',
        url: `${SITE_CONFIG.url}/blog/claude-hacks-improve-ai-results`,
        datePublished: '2026-04-04',
        dateModified: '2026-04-04',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What are Claude prompt hacks?', acceptedAnswer: { '@type': 'Answer', text: 'Claude prompt hacks are short prefixes or modifiers you add to any Claude prompt to dramatically change the output style, depth, or tone. Examples include /human (makes responses natural and human-like), EL10 (simplifies to Grade 5 level), X10 (produces 10× more depth), Alt Three (generates 3 genuinely different options), and Kill Critic (removes hedging for direct, honest answers).' } },
          { '@type': 'Question', name: 'Do these Claude hacks actually work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. These prompt modifiers work because Claude is highly responsive to explicit output instructions. When you specify a format, style, or constraint, Claude shifts its generation pattern accordingly. The before/after examples in this article demonstrate real differences in output quality and style.' } },
          { '@type': 'Question', name: 'Can I combine these Claude prompt hacks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes and it is highly recommended. Combining hacks multiplies their effect. "X10 /human" produces deep, natural-sounding output. "Kill Critic X10" gives an honest and comprehensive critique. "Alt Three /human" generates three genuinely different human-toned options. Start with two hacks and add more as you get comfortable.' } },
          { '@type': 'Question', name: 'What is the best Claude hack for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'EL10 is the best starting hack for most people because it immediately makes Claude more useful for understanding complex topics. Add "EL10:" before any confusing question and you\'ll get a clearer, simpler answer. It works on any topic — from tax rules to technical documentation to medical information.' } },
          { '@type': 'Question', name: 'How is using Claude different from ChatGPT prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Claude responds particularly well to behavioral constraints and output contracts — like /human, Kill Critic, and Alt Three. These modifiers work because Claude\'s training makes it highly responsive to explicit style and behavior instructions. ChatGPT tends to respond better to step-by-step task decomposition. The hacks in this article are optimized specifically for how Claude processes instructions.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: '5 Claude Hacks', item: `${SITE_CONFIG.url}/blog/claude-hacks-improve-ai-results` },
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
                <li>/</li>
                <li className="text-surface-600">Claude Hacks</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs text-surface-400">April 4, 2026 · 8 min read</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-6 leading-tight tracking-tight">
              5 Claude Hacks That Instantly Improve Your AI Results
              <span className="text-brand-600"> (Tested & Proven)</span>
            </h1>

            {/* Hook */}
            <div className="space-y-4 text-surface-600 text-lg leading-relaxed">
              <p>
                Most people use Claude the same way they send a Google search — type a question, get an answer, move on.
              </p>
              <p>
                That approach works. But it's like driving a sports car in first gear.
              </p>
              <p>
                After months of daily Claude usage across writing, research, coding, and business work, I found five prompt modifiers that consistently produce dramatically better results. They're not official features. They're not documented anywhere. They're patterns that work because of how Claude processes instructions — and once you start using them, you'll wonder how you ever prompted without them.
              </p>
              <p>
                <strong className="text-surface-800">Here are the five, with copy-paste prompts and real before/after examples.</strong>
              </p>
            </div>

            {/* Quick reference */}
            <div className="mt-8 bg-surface-900 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{color:'#94a3b8'}}>📌 The 5 Claude Hacks — Quick Reference</div>
              <div className="space-y-2">
                {HACKS.map(h => (
                  <a key={h.id} href={`#${h.id}`}
                    style={{display:'flex', alignItems:'center', gap:'0.75rem', textDecoration:'none', color:'#ffffff'}}>
                    <span style={{color:'#94a3b8', fontFamily:'monospace', fontSize:'0.75rem', fontWeight:700, flexShrink:0}}>{h.n}</span>
                    <span style={{fontSize:'1.1rem', flexShrink:0}}>{h.emoji}</span>
                    <span style={{fontSize:'0.875rem', fontWeight:600, color:'#ffffff'}}>{h.name.split('—')[0].trim()}</span>
                    <span style={{color:'#a3aac4', fontSize:'0.75rem', marginLeft:'auto', flexShrink:0}}>{h.tag}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub AI Team</div>
                <div className="text-xs text-surface-400">Tested on Claude Sonnet, April 2026. All before/after examples are real outputs.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

          {/* What is Claude section */}
          <div className="p-6 bg-surface-50 border border-surface-200 rounded-2xl">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">Why Prompting Claude Differently Actually Matters</h2>
            <div className="space-y-3 text-surface-600 text-sm leading-relaxed">
              <p>
                Claude is a large language model built by Anthropic — trained to be helpful, harmless, and honest. Those three goals are mostly great. But "harmless" often means hedging. And "helpful" often means comprehensive, which means long.
              </p>
              <p>
                The default Claude output is safe, thorough, and slightly boring. The hacks below don't change what Claude knows — they change <strong className="text-surface-800">how it expresses what it knows</strong>. They're output contracts: explicit instructions that override Claude's defaults and activate more useful modes.
              </p>
              <p>
                None of these are official Anthropic features. They're prompting patterns that work because Claude's training makes it exceptionally responsive to explicit behavioral instructions.
              </p>
            </div>
          </div>

          {/* THE 5 HACKS */}
          {HACKS.map((hack) => {
            const bg = colorBg[hack.color];
            const bd = colorBorder[hack.color];
            const tx = colorText[hack.color];
            return (
              <article key={hack.id} id={hack.id} className="space-y-0">
                {/* Hack header */}
                <div className="rounded-t-2xl px-7 py-6 text-white"
                  style={{ backgroundColor: hack.colorHex }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-white/50 text-sm font-black">Hack {hack.n}</span>
                    <span className="text-2xl">{hack.emoji}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/20">{hack.tag}</span>
                  </div>
                  <h2 className="font-display font-black text-2xl" style={{color:'#ffffff'}}>{hack.name}</h2>
                </div>

                <div className={`border-2 ${bd} rounded-b-2xl p-6 space-y-6`}>

                  {/* What it is */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">🧾 What It Is</div>
                    <p className="text-surface-700 leading-relaxed">{hack.what}</p>
                  </div>

                  {/* Why it works */}
                  <div className={`${bg} border ${bd} rounded-xl p-5`}>
                    <div className={`text-xs font-bold uppercase tracking-wider ${tx} mb-2`}>⚡ Why It Works</div>
                    <p className="text-surface-700 text-sm leading-relaxed">{hack.why}</p>
                  </div>

                  {/* How to use */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">🛠️ How to Use It</div>
                    <div className="space-y-2">
                      {hack.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0 mt-0.5"
                            style={{ backgroundColor: hack.colorHex }}>
                            {i + 1}
                          </div>
                          <span className="text-sm text-surface-700 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Copy-paste prompt */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">📋 Copy-Paste Prompt</div>
                    <pre className={`${bg} border ${bd} rounded-xl p-4 text-sm font-mono ${tx} whitespace-pre-wrap leading-relaxed overflow-x-auto`}>
                      {hack.prompt}
                    </pre>
                  </div>

                  {/* Before / After */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">💡 Before vs After</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                        <div className="text-xs font-bold text-rose-600 mb-2">❌ Without this hack</div>
                        <p className="text-xs text-surface-700 leading-relaxed italic">{hack.before}</p>
                      </div>
                      <div className={`${bg} border ${bd} rounded-xl p-4`}>
                        <div className={`text-xs font-bold ${tx} mb-2`}>✅ With {hack.name.split('—')[0].trim()}</div>
                        <p className="text-xs text-surface-700 leading-relaxed whitespace-pre-line">{hack.after}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pro tip */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-amber-700 mb-1">🚀 Pro Tip</div>
                    <p className="text-sm text-amber-800 leading-relaxed">{hack.proTip}</p>
                  </div>

                </div>
              </article>
            );
          })}

          {/* Combining hacks */}
          <div className="bg-surface-900 rounded-2xl p-7">
            <h2 className="font-display font-bold text-xl mb-4" style={{color:'#ffffff'}}>Combine Hacks for Maximum Effect</h2>
            <p className="text-sm leading-relaxed mb-5" style={{color:'#94a3b8'}}>
              Each hack is powerful alone. Combined, they produce outputs that feel professionally edited — on the first try.
            </p>
            <div className="space-y-3">
              {[
                { combo:'X10 /human',         result:'Deep, thorough response that reads like a senior expert wrote it — not a robot.'        },
                { combo:'Kill Critic X10',     result:'Honest, comprehensive critique. Useful for reviewing your own work without mercy.'       },
                { combo:'Alt Three /human',    result:'Three genuinely different options, each sounding natural and direct.'                    },
                { combo:'EL10 + Alt Three',    result:'Three simple explanations of the same concept — great for teaching or explaining options.'},
                { combo:'/human Kill Critic',  result:'Direct, honest, conversational. Closest to asking a trusted expert friend.'              },
              ].map(c => (
                <div key={c.combo} className="flex items-start gap-4 p-3 rounded-xl" style={{background:'rgba(255,255,255,0.06)'}}>
                  <code className="text-sm font-mono font-bold shrink-0 px-2 py-0.5 rounded" style={{background:'rgba(159,167,255,0.15)', color:'#9fa7ff'}}>
                    {c.combo}
                  </code>
                  <span className="text-sm" style={{color:'#dee5ff'}}>{c.result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">✅ What You Actually Gain from Using These Hacks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon:'⚡', title:'Less editing time',         desc:'Outputs that match your intended style from the first generation — not after three rounds of "make it less formal."' },
                { icon:'🎯', title:'More useful answers',       desc:'X10 and Kill Critic unlock the depth that standard prompts leave on the table. You get the thinking, not just the summary.' },
                { icon:'🗣️', title:'Natural-sounding content',  desc:'/human eliminates the AI texture that makes readers (and Google) subtly uncomfortable with generated content.' },
                { icon:'🔄', title:'More creative options',     desc:'Alt Three breaks decision paralysis — you\'re choosing between real alternatives instead of accepting the first answer.' },
                { icon:'🧒', title:'Clarity on demand',         desc:'EL10 makes any complex topic immediately understandable. Use it for your own learning or for writing for non-expert audiences.' },
                { icon:'⏱️', title:'Higher output per session', desc:'When Claude gets it right on the first try, you do more with the same token budget and the same amount of time.' },
              ].map(b => (
                <div key={b.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                  <span className="text-2xl shrink-0">{b.icon}</span>
                  <div>
                    <div className="font-bold text-surface-900 mb-1">{b.title}</div>
                    <p className="text-sm text-surface-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mistakes to avoid */}
          <div>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">⚠️ Common Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  mistake:'Stacking too many hacks at once',
                  detail:'Three or four modifiers in one prompt can create conflicting instructions. X10 wants depth. EL10 wants simplicity. Combined without a clear goal, they cancel each other out. Start with one. Add a second once you see it working.',
                },
                {
                  mistake:'Using Kill Critic when you actually want balance',
                  detail:'Kill Critic is for when you want honest directness — not when you\'re exploring a nuanced topic that genuinely has multiple valid answers. Misusing it will get you overconfident takes on topics that deserve more careful treatment.',
                },
                {
                  mistake:'Treating these as magic words instead of output contracts',
                  detail:'These hacks work because they give Claude explicit instructions about what to produce. They\'re not magic — they\'re specificity. If your underlying prompt is vague, the hack won\'t save it. Be specific about the task before adding the modifier.',
                },
                {
                  mistake:'Never iterating on the output',
                  detail:'Even with these hacks, Claude\'s first output is a starting point. The best workflow: hack + prompt → review → edit one specific thing → regenerate. Don\'t just accept the first result — but with these hacks, you should need far fewer iterations.',
                },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✗</span>
                  <div>
                    <div className="font-bold text-surface-900 mb-1">{m.mistake}</div>
                    <p className="text-sm text-surface-600 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q:'What are Claude prompt hacks?', a:'Claude prompt hacks are short modifiers you add to any prompt — like /human, EL10, X10, Alt Three, or Kill Critic — that dramatically change Claude\'s output style, depth, or tone. They work because Claude\'s training makes it highly responsive to explicit behavioral instructions.' },
                { q:'Do these Claude hacks actually work in 2026?', a:'Yes. All five hacks in this article have been tested on current Claude models (Sonnet and Opus). The before/after examples are real outputs. They work because they give Claude explicit output contracts — not vague style preferences, but specific behavioral instructions.' },
                { q:'Can I combine these Claude prompt hacks?', a:'Yes — combining hacks multiplies their effect. "X10 /human" gives deep, natural-sounding output. "Kill Critic X10" produces an honest, comprehensive critique. Start with two hacks, see how they interact, then add more as needed.' },
                { q:'What is the best Claude hack for beginners?', a:'EL10 is the best starting point. Add "EL10:" before any confusing question and you\'ll immediately get a clearer, simpler answer. It works on any topic — taxes, code, medicine, or anything else Claude struggles to explain simply by default.' },
                { q:'Is Claude better than ChatGPT for these prompting techniques?', a:'Claude responds particularly well to behavioral constraints — like /human and Kill Critic — because of how its constitutional AI training works. ChatGPT tends to respond better to step-by-step procedural instructions. For these specific hacks, Claude is the stronger platform.' },
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
          </div>

          {/* Conclusion + CTA */}
          <div className="bg-surface-900 rounded-2xl p-8 text-white">
            <h2 className="font-display font-bold text-2xl mb-4" style={{color:'#ffffff'}}>Start Using These Today</h2>
            <p className="text-sm leading-relaxed mb-3" style={{color:'#a3aac4'}}>
              These five hacks — /human, EL10, X10, Alt Three, Kill Critic — are not tricks. They're a different way of communicating with Claude. Instead of hoping Claude guesses what you want, you tell it exactly what kind of output to produce.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{color:'#a3aac4'}}>
              Try one today. Pick the hack that solves your most common frustration with Claude's default output. Give it three prompts. You'll see the difference immediately.
            </p>

            {/* Cheat sheet */}
            <div className="space-y-2 mb-6 p-4 rounded-xl" style={{background:'rgba(255,255,255,0.06)'}}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{color:'#94a3b8'}}>📋 Quick Cheat Sheet</div>
              {HACKS.map(h => (
                <div key={h.id} className="flex items-center gap-3 text-sm">
                  <code className="font-mono font-bold px-2 py-0.5 rounded text-xs" style={{background:'rgba(159,167,255,0.15)', color:'#9fa7ff'}}>
                    {h.name.split('—')[0].trim().split(' ')[0]}
                  </code>
                  <span style={{color:'#dee5ff'}}>{h.tag} — {h.what.split('.')[0]}.</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/blog/claude-prompt-techniques"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                Advanced Techniques →
              </Link>
              <Link href="/blog/claude-prompt-templates-save-tokens"
                className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm border border-white/20 hover:bg-white/10"
                style={{color:'#ffffff'}}>
                Prompt Templates →
              </Link>
              <Link href="/ai-tools/claude"
                className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm border border-white/20 hover:bg-white/10"
                style={{color:'#ffffff'}}>
                Claude Full Review →
              </Link>
            </div>
          </div>

          {/* Related */}
          <div>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Claude Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href:'/blog/claude-prompt-techniques',            icon:'🧠', label:'10 Advanced Claude Prompt Techniques', desc:'Role stacking, chain-of-thought, few-shot priming' },
                { href:'/blog/claude-prompt-templates-save-tokens', icon:'📋', label:'8 Low-Token Prompt Templates',         desc:'Copy-paste templates that save 60% of tokens'   },
                { href:'/blog/how-to-save-tokens-in-claude',        icon:'💾', label:'10 Habits to Save Claude Tokens',      desc:'Why message 30 costs 928× more than message 1'  },
                { href:'/ai-tools/claude-vs-chatgpt',               icon:'⚔️', label:'Claude vs ChatGPT 2026',              desc:'Honest feature-by-feature comparison'            },
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
          </div>

          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Note:</strong> All before/after examples were generated using Claude Sonnet in April 2026. Output quality may vary by model version and prompt specifics. These hacks are prompting patterns — not official Anthropic features. Always review and edit AI outputs before using them professionally.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}