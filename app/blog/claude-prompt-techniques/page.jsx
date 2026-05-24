import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Claude Prompt Techniques That Work in 2026 (Expert Guide)',
  description: 'Advanced Claude prompt techniques with copy-paste examples. Role stacking, context compression, chain-of-thought, output control — used by real experts daily.',
  keywords: [
    'claude prompt techniques', 'claude prompt examples', 'best claude prompts',
    'claude prompt engineering', 'claude ai prompts guide', 'claude prompt tricks',
    'how to write prompts for claude', 'claude vs chatgpt prompts',
    'claude prompting strategies', 'anthropic claude prompts',
    'latest claude prompt techniques 2026', 'advanced claude prompt engineering tips',
    'claude prompts that actually work', 'claude prompts for developers',
    'claude prompts for content creation', 'claude prompts for seo',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/claude-prompt-techniques` },
  openGraph: {
    title: 'Claude Prompt Techniques That Work in 2026 (Expert Guide)',
    description: '10 advanced Claude prompt techniques with copy-paste examples. Real outputs, pro tips, and mistakes to avoid.',
    url: `${SITE_CONFIG.url}/blog/claude-prompt-techniques`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Prompt Techniques That Work in 2026 (Expert Guide)',
    description: 'Advanced Claude prompt techniques with copy-paste examples. Role stacking, context compression, chain-of-thought, output control — used by real experts daily.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const TOC = [
  { id:'claude-vs-chatgpt-prompting',  label:'Why Claude Prompting Is Different'           },
  { id:'technique-1',                   label:'Technique 1 — Role + Constraint Stacking'    },
  { id:'technique-2',                   label:'Technique 2 — Context Compression'           },
  { id:'technique-3',                   label:'Technique 3 — Instruction Layering'          },
  { id:'technique-4',                   label:'Technique 4 — Output Format Control'         },
  { id:'technique-5',                   label:'Technique 5 — Chain-of-Thought (Claude)'     },
  { id:'technique-6',                   label:'Technique 6 — Few-Shot Priming'              },
  { id:'technique-7',                   label:'Technique 7 — System-Style Prompting'        },
  { id:'technique-8',                   label:'Technique 8 — Prompt Chaining Systems'       },
  { id:'technique-9',                   label:'Technique 9 — Minimal Token Prompting'       },
  { id:'technique-10',                  label:'Technique 10 — Negative Constraint Prompting'},
  { id:'real-use-cases',                label:'Real Use Cases by Industry'                   },
  { id:'common-mistakes',               label:'Common Mistakes That Kill Output Quality'    },
  { id:'advanced-pro-tips',             label:'Advanced Pro Tips (Expert Only)'             },
  { id:'free-templates',                label:'Free Claude Prompt Templates'                 },
  { id:'faq',                           label:'FAQ'                                          },
];

const TECHNIQUES = [
  {
    id:'technique-1',
    n:'01',
    icon:'🎭',
    name:'Role + Constraint Stacking',
    tagline:'The most underused combination in Claude prompting.',
    color:'brand',
    what:'You are probably already setting a role. But stacking a role with a behavioral constraint — not just a tone — is what separates good outputs from exceptional ones. The constraint tells Claude what kind of expert to behave like, not just what label to wear.',
    why:'Claude\'s training makes it particularly responsive to behavioral constraints. When you say "You are a developer," Claude interprets that broadly. When you add "who refuses to write anything that isn\'t production-ready," you activate a much more specific behavioral mode.',
    prompt:`You are a senior product manager at a Series B SaaS company.
Constraint: You have been burned by feature bloat before.
You default to "what is the minimum version that tests this hypothesis?"

Task: Review this feature spec and identify what can be cut for an MVP.
Input: [paste feature spec]

Rules:
- Mark each item as: ESSENTIAL / NICE-TO-HAVE / CUT
- For each CUT item: 1-sentence reason.
- Total response: under 200 words.`,
    output:'Claude returns a ruthlessly prioritized spec. It cuts things most PM reviews would keep — because the behavioral constraint locks in a specific decision-making lens.',
    proTip:'The constraint should describe a lived experience or strong opinion, not just a skill. "You hate unnecessary complexity" activates a different response pattern than "You prefer simple solutions."',
    useCase:'Product specs, content strategy, budget reviews, technical architecture decisions.',
  },
  {
    id:'technique-2',
    n:'02',
    icon:'🗜️',
    name:'Context Compression',
    tagline:'Get Claude to carry your full context at 10% of the token cost.',
    color:'emerald',
    what:'Instead of re-pasting long context into every follow-up, you get Claude to compress it into a reusable anchor block. Then each new message references the anchor — not the full original.',
    why:'Claude has exceptional summarization ability — far better than most users realize. A 3,000-word document can be compressed to a 300-word anchor that retains 95% of the actionable content. Subsequent prompts that reference the anchor avoid re-processing the full document.',
    prompt:`You are a knowledge architect.
Task: Compress the following into a "Context Anchor" — a structured summary I can paste into any future prompt about this topic.

Format:
## Context Anchor: [Topic Name]
- Core premise: [1 sentence]
- Key facts: [3–5 bullets, 1 sentence each]
- Constraints to remember: [2–3 bullets]
- Open questions: [2–3 bullets]
- Do NOT assume unless stated: [list 2–3 common wrong assumptions]

Input: [paste your long document, conversation, or briefing]`,
    output:'A portable context block you paste once into future chats. Claude will reference it as established context — saving thousands of tokens across a project.',
    proTip:'Add "Do NOT assume unless stated" to the anchor. This is the highest-value line. It prevents Claude from filling gaps with plausible-but-wrong assumptions — the source of most hallucination in context-heavy tasks.',
    useCase:'Long research projects, client briefs, codebases, product roadmaps, legal documents.',
  },
  {
    id:'technique-3',
    n:'03',
    icon:'🏗️',
    name:'Instruction Layering',
    tagline:'Three-layer prompts that produce professional outputs, not drafts.',
    color:'purple',
    what:'Most prompts give Claude one instruction layer: the task. Instruction layering adds two more: the quality filter and the output review. You are essentially building a mini editorial process into the prompt itself.',
    why:'Claude applies instructions in sequence. By adding a "before responding, check:" layer, you invoke a self-review process that catches the most common output failures before they reach you. It is like having Claude edit its own work before returning it.',
    prompt:`[Layer 1 — Role + Task]
You are a conversion copywriter with 10 years of direct response experience.
Task: Write a landing page hero section for [product/service].

[Layer 2 — Quality Filter]
Before writing, apply these filters:
- Is the headline about the customer outcome, not the product feature?
- Does it address the #1 objection in the first 3 lines?
- Is every sentence under 15 words?

[Layer 3 — Self-Review Before Output]
After writing, check:
- Would someone in the target audience say "that's exactly my problem"?
- Is there anything a competitor could also say? Remove it.
- Rate clarity 1–10. If below 8, rewrite.

Target audience: [describe in 2 sentences]
Key outcome: [what customer achieves]
Main objection: [what holds them back]`,
    output:'Claude runs through all three layers before responding. The final output is closer to a second draft than a first draft — catching the most common failures automatically.',
    proTip:'"Is there anything a competitor could also say? Remove it." is a professional copywriting filter most marketers never apply. Adding this one check produces significantly more differentiated copy.',
    useCase:'Landing pages, email campaigns, ad copy, product descriptions, pitch decks.',
  },
  {
    id:'technique-4',
    n:'04',
    icon:'📐',
    name:'Output Format Control',
    tagline:'Tell Claude what "done" looks like before it starts.',
    color:'amber',
    what:'The single biggest source of unusable Claude output is undefined output format. When Claude doesn\'t know your exact format, it invents one — and it is almost never exactly what you needed. Output format control gives Claude a visual template to fill rather than a blank page to design.',
    why:'Claude is exceptionally good at slot-filling structured formats. When you give it a template with clear labels and size constraints per cell, it activates a more precise and consistent mode than when given open-ended instructions. The output becomes predictable and directly usable.',
    prompt:`Task: Write a LinkedIn post about [topic].

Use EXACTLY this format:

---
[HOOK LINE — 1 sentence, creates curiosity or makes a bold statement]

[BODY — 3–4 short paragraphs, each 2–3 lines. Double line break between paragraphs.]

[LIST — 3–5 bullet points, each starting with an emoji]

[CTA — 1 question that invites comments]

[HASHTAGS — exactly 3, relevant, not generic]
---

Constraints:
- Hook must not start with "I" or "Have you ever"
- No more than 1,500 characters total
- Conversational, not corporate
- Topic: [your topic]`,
    output:'A LinkedIn post that matches exactly the format your audience responds to — no editing required. Claude fills the template precisely.',
    proTip:'Save your format templates in a text file. Reuse them with different topics. The format is the asset — not the individual prompt.',
    useCase:'Social media, emails, reports, API responses, data extraction, documentation.',
  },
  {
    id:'technique-5',
    n:'05',
    icon:'🧠',
    name:'Chain-of-Thought (Claude-Optimized)',
    tagline:'Claude thinks differently than GPT. Use that to your advantage.',
    color:'teal',
    what:'Chain-of-thought prompting asks the model to reason step by step before answering. But Claude\'s version of this differs from ChatGPT\'s — Claude is trained with constitutional AI principles that make it more likely to flag uncertainty, acknowledge limitations, and revise its own reasoning mid-chain. You can exploit this.',
    why:'Standard CoT tells the model to think aloud. Claude-optimized CoT adds "identify where you are most uncertain" before the final answer. This forces Claude to surface assumptions you might otherwise miss — and it produces more reliable outputs on complex tasks because it routes around overconfidence.',
    prompt:`Problem: [describe the decision, analysis, or problem]

Think through this step by step:

Step 1: What are the 3 most important factors?
Step 2: What is the strongest case FOR the most obvious answer?
Step 3: What is the strongest case AGAINST that answer?
Step 4: Where are you most uncertain in your reasoning?
Step 5: What additional information would change your conclusion?
Step 6: Given all of the above, what is your best recommendation?

Constraints:
- Flag any step where you are working from assumption, not evidence.
- If steps 2 and 3 are equally strong, say so — don't force a false conclusion.`,
    output:'A structured analysis that surfaces the reasoning gaps most responses hide. The uncertainty flags in Step 4 are often the most valuable part — they tell you exactly what to validate before acting.',
    proTip:'For technical decisions (architecture, tooling, strategy), the Step 4 uncertainty flag is worth more than the final answer. It tells you exactly which assumption to pressure-test first.',
    useCase:'Technical decisions, strategy planning, financial analysis, product prioritization, legal reasoning.',
  },
  {
    id:'technique-6',
    n:'06',
    icon:'🔬',
    name:'Few-Shot Priming',
    tagline:'Show Claude exactly what good looks like. Then ask for more.',
    color:'green',
    what:'Few-shot prompting gives Claude 2–3 examples of the exact output you want before asking for the real one. Claude reads the examples, infers the implicit rules, and applies them. It is faster and more reliable than explaining what you want in words.',
    why:'Explaining "write in a conversational but authoritative tone with specific examples" takes 20 words and produces inconsistent results. Showing Claude two examples of that tone takes the same space but activates pattern matching — Claude infers the rules from the examples rather than interpreting your description.',
    prompt:`I need product descriptions in a specific style.
Here are two examples of the style I want:

Example 1:
[paste example output 1]

Example 2:
[paste example output 2]

Now write a product description in exactly the same style for:
Product name: [name]
Key features: [list 3–5]
Target customer: [1 sentence]
Main benefit: [what problem it solves]

Do not explain your approach. Output only the product description.`,
    output:'A product description that matches your brand voice more precisely than any prompt instruction would achieve — because Claude is pattern matching, not interpreting.',
    proTip:'For few-shot prompting, the examples matter more than the instruction. Bad examples + clear instructions = mediocre output. Great examples + minimal instructions = great output. Spend time curating your examples.',
    useCase:'Brand voice matching, writing style replication, data formatting, code style enforcement, translation with cultural nuance.',
  },
  {
    id:'technique-7',
    n:'07',
    icon:'⚙️',
    name:'System-Style Prompting Without System Role',
    tagline:'Get system-level behavioral control in standard Claude chats.',
    color:'rose',
    what:'Claude\'s API has a system prompt field that sets persistent behavior. In the standard Claude.ai interface, you don\'t have that field — but you can replicate it in the first user message by structuring your setup as a behavioral contract rather than a simple instruction.',
    why:'When framed as a contract ("you will always," "you will never," "when I say X, you will Y"), Claude treats these as persistent rules for the conversation rather than one-off instructions. It is behaviorally similar to a system prompt — even when sent in the user turn.',
    prompt:`This is a persistent setup for our entire conversation. Read and apply throughout.

Identity: You are [role + specific expertise].

Persistent behaviors:
- Always respond in [format/length/style].
- Never include [what to exclude].
- When I give you [specific trigger], you will [specific behavior].
- Default to [preference] unless I specify otherwise.

Output contract:
- If a question is ambiguous, ask one clarifying question before answering.
- If you are uncertain, say "I'm not certain, but..." before continuing.
- If I ask for a list, default to [N] items unless I specify.

Confirm you understand this setup by responding: "Setup confirmed. Ready for [task type]."`,
    output:'Claude confirms the setup and applies the behavioral contract for the entire conversation — no need to repeat instructions in follow-up messages.',
    proTip:'The "Confirm by responding X" instruction at the end is critical. It verifies Claude read and applied the setup rather than silently acknowledging it. If Claude doesn\'t confirm as instructed, retry.',
    useCase:'Long-form writing projects, research sessions, ongoing coding help, customer-facing response generation.',
  },
  {
    id:'technique-8',
    n:'08',
    icon:'🔗',
    name:'Prompt Chaining Systems',
    tagline:'Build a production workflow where each Claude output feeds the next.',
    color:'indigo',
    what:'Prompt chaining uses Claude\'s output from one step as the structured input for the next step. Instead of one mega-prompt that tries to do everything, you design a sequence of tight, single-purpose prompts. Each is faster, more reliable, and easier to debug than one monolithic prompt.',
    why:'A single prompt asking Claude to research, outline, write, edit, and format a 2,000-word article will produce mediocre results at each stage. The same work split into 5 specialized prompts produces research-grade output at each stage — because each prompt has a single, focused job.',
    prompt:`=== CHAIN PROMPT — SEO BLOG POST ===

STEP 1 (Run first):
"List the top 5 search intent variations for the keyword: [keyword]. Format: numbered list, 1 sentence per intent."

STEP 2 (Feed Step 1 output in):
"Given these search intents: [paste Step 1 output]
Create an H1, 3 H2s, and 6 H3s for a blog post that satisfies all 5 intents. No body copy yet."

STEP 3 (Feed Step 2 output in):
"Write the introduction for this blog post structure: [paste Step 2 output]
Target: 150 words. Hook the primary keyword in first 10 words. End with a preview of what the reader will learn."

STEP 4 (Run for each H2):
"Write the section under [H2 heading] from this outline: [paste Step 2].
Target: 250 words. Include 1 real example. End with a transition to the next section."`,
    output:'A modular content production system. Each step produces a specialized output you can review and refine before feeding it forward. One bad step doesn\'t corrupt the whole piece.',
    proTip:'Save each chain as a numbered document. When a chain produces a great output, you have a reusable workflow — not just a one-time result. Build a library of chains for your most common content types.',
    useCase:'Long-form content, research reports, codebase analysis, multi-step data processing, proposal writing.',
  },
  {
    id:'technique-9',
    n:'09',
    icon:'⚡',
    name:'Minimal Token Prompting',
    tagline:'Do more with less. The expert move for heavy Claude users.',
    color:'orange',
    what:'Minimal token prompting is the discipline of achieving precise outputs using the fewest possible tokens in both the prompt and the expected response. It combines output constraints, format specifications, and instruction compression into a single tight block.',
    why:'Every word in your prompt costs tokens. Every word in Claude\'s response costs session budget. On a long project, the difference between verbose prompts and minimal prompts can be 3–5× the total token usage — meaning you either hit limits 3× faster or you produce 3× the work in the same session.',
    prompt:`Role: [1-word or 1-phrase role]
Task: [goal in 10 words max]
Input: [label + paste only relevant section]
Output: [exact format + max length]
Rules: [3 rules max, each under 8 words]`,
    output:'The shortest possible prompt that produces a complete, usable output. No filler. No explanation. No conversation.',
    proTip:'Test your prompts against this filter: could you cut any line without losing output quality? If yes — cut it. The best prompt is the one that produces the right output with nothing removable.',
    useCase:'High-volume tasks, API integrations, batch processing, any workflow where you run the same prompt type repeatedly.',
  },
  {
    id:'technique-10',
    n:'10',
    icon:'🚫',
    name:'Negative Constraint Prompting',
    tagline:'Define the boundaries, not just the target.',
    color:'surface',
    what:'Instead of only telling Claude what to do, you explicitly tell it what NOT to do. Negative constraints are dramatically more efficient at preventing specific failure modes than positive instructions — because they target the exact behaviors you want to eliminate.',
    why:'Claude\'s default is to be helpful and comprehensive. Without negative constraints, it adds hedges, qualifiers, alternatives, and closing summaries you didn\'t ask for. Each "do not" instruction removes a specific class of output pollution — often saving 100–300 tokens per response.',
    prompt:`Task: Write a cold email for [product] targeting [audience].

Negative constraints (apply strictly):
- Do NOT start with "I hope this finds you well" or any variation.
- Do NOT mention competitors.
- Do NOT use the word "synergy," "leverage," or "game-changer."
- Do NOT include more than 1 question.
- Do NOT pitch before line 4.
- Do NOT include a subject line (I will write my own).

Positive constraints:
- Open with a specific insight about [audience's] industry.
- Keep under 100 words.
- End with a soft CTA: one specific action, low commitment.`,
    output:'A cold email that avoids every cliché because the negative constraints systematically block them. Claude cannot default to lazy opener patterns when they are explicitly banned.',
    proTip:'Build a personal "never use" list for your most common tasks. After each output you don\'t like, add the specific thing you didn\'t like as a negative constraint to your template. Your templates get better with every bad output.',
    useCase:'Cold outreach, ad copy, pitch decks, PR copy, social media — anywhere generic defaults ruin quality.',
  },
];

const colorHdr = {
  brand:'bg-brand-600', emerald:'bg-emerald-600', purple:'bg-purple-600',
  amber:'bg-amber-600', teal:'bg-teal-600', green:'bg-green-600',
  rose:'bg-rose-600', indigo:'bg-indigo-600', orange:'bg-orange-500', surface:'bg-surface-700',
};
const colorBdr = {
  brand:'border-brand-200', emerald:'border-emerald-200', purple:'border-purple-200',
  amber:'border-amber-200', teal:'border-teal-200', green:'border-green-200',
  rose:'border-rose-200', indigo:'border-indigo-200', orange:'border-orange-200', surface:'border-surface-200',
};
const colorTxt = {
  brand:'text-brand-700', emerald:'text-emerald-700', purple:'text-purple-700',
  amber:'text-amber-700', teal:'text-teal-700', green:'text-green-700',
  rose:'text-rose-700', indigo:'text-indigo-700', orange:'text-orange-700', surface:'text-surface-700',
};
const colorBg = {
  brand:'bg-brand-50', emerald:'bg-emerald-50', purple:'bg-purple-50',
  amber:'bg-amber-50', teal:'bg-teal-50', green:'bg-green-50',
  rose:'bg-rose-50', indigo:'bg-indigo-50', orange:'bg-orange-50', surface:'bg-surface-50',
};

const FREE_TEMPLATES = [
  {
    n:'01', icon:'🚀', title:'Viral Thread Starter',
    desc:'Generates a 10-tweet thread on any topic, optimized for engagement and follows.',
    template:`You are a viral content strategist who has grown 3 accounts past 100K followers.
Task: Write a 10-tweet thread about [topic].

Rules:
- Tweet 1: Bold, surprising statement — not a question.
- Tweets 2–9: One insight per tweet. Each standalone. Each under 280 characters.
- Tweet 10: CTA that invites replies (not just "follow me").
- No hashtags. No em-dashes. No corporate language.
- At least 2 tweets must include a specific number or statistic.

Output: Numbered list of 10 tweets only. No intro. No outro.`,
  },
  {
    n:'02', icon:'💻', title:'Code Bug Explainer',
    desc:'Explains any bug in plain English plus the exact fix — no lecture.',
    template:`You are a senior engineer who mentors juniors by explaining root causes, not just fixes.
Task: Explain this bug and how to fix it.

Input:
[paste error message + code snippet]

Output format:
Root cause: [1 sentence — what is actually broken and why]
Fix: [exact code change — patch format only]
How to prevent: [1 sentence — what practice avoids this class of bug]

Rules: No explanation beyond the 3-line format. No extra commentary.`,
  },
  {
    n:'03', icon:'📝', title:'SEO Section Writer',
    desc:'Writes any H2 section for a blog post — search-intent-aware, not keyword-stuffed.',
    template:`You are an SEO content writer who ranks pages, not just writes them.
Task: Write the section under this H2 for a blog post about [topic].

H2: [your H2 heading]
Primary keyword: [keyword]
Search intent: [informational / transactional / navigational]
Target reader: [describe in 1 sentence]

Rules:
- Open with the answer to what the heading promises (don't bury it).
- 200–250 words.
- Include 1 concrete example or statistic.
- Do not use the primary keyword more than 2 times.
- End with a smooth transition sentence to the next section.
- No fluff openers like "In this section..." or "It's important to note..."`,
  },
  {
    n:'04', icon:'📧', title:'Executive Summary Generator',
    desc:'Turns any long document into a 200-word executive summary decision-makers will actually read.',
    template:`You are a chief of staff who summarizes complex information for C-suite audiences.
Task: Turn the following into an executive summary.

Input: [paste document / report / research]

Output format:
## Executive Summary

**Situation:** [1 sentence — what is happening]
**Implication:** [1 sentence — why it matters now]
**Options:** [2–3 bullets — possible responses, each 1 sentence]
**Recommendation:** [1 sentence — what to do and why]
**Immediate action required:** [1 sentence — what decision-maker must do in next 48 hours]

Rules:
- Total word count: under 200 words.
- No jargon the reader would need to look up.
- No passive voice.`,
  },
  {
    n:'05', icon:'🎯', title:'Competitor Comparison Table',
    desc:'Instantly creates a decision-ready competitive analysis on any two tools, products, or strategies.',
    template:`You are a strategic analyst who helps teams make tool decisions without analysis paralysis.
Task: Compare [Option A] vs [Option B] for [specific context/use case].

Output — strict table format:
| Dimension | [Option A] | [Option B] |
|-----------|-----------|-----------|
| Primary strength | | |
| Primary weakness | | |
| Best for | | |
| Worst for | | |
| Cost | | |
| Learning curve | | |
| Recommendation | | |

Rules:
- Each cell: 1 short phrase. No full sentences.
- Recommendation row: clear winner for the stated context. Not "it depends."
- No text before or after the table.
- If you do not have reliable data for a cell, write "Verify before deciding."`,
  },
];

export default function ClaudePromptTechniquesBlog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Claude Prompt Techniques That Actually Work in 2026 — Expert Guide',
        description: '10 advanced Claude prompt techniques with real examples, copy-paste prompts, and pro tips used by experts daily.',
        url: `${SITE_CONFIG.url}/blog/claude-prompt-techniques`,
        datePublished: '2026-04-01',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What are Claude prompt techniques?', acceptedAnswer: { '@type': 'Answer', text: 'Claude prompt techniques are structured methods for writing prompts that produce precise, high-quality outputs efficiently. They include role + constraint stacking, output format control, chain-of-thought prompting, few-shot priming, and negative constraint prompting. Unlike generic AI tips, Claude-specific techniques exploit how Claude\'s constitutional AI training makes it respond differently to behavioral framing, uncertainty flags, and explicit output contracts.' } },
          { '@type': 'Question', name: 'How is Claude prompting different from ChatGPT prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Claude responds better to behavioral constraints, uncertainty acknowledgment, and explicit behavioral contracts than ChatGPT. Claude is more likely to flag its own uncertainty when prompted to, more likely to apply persistent behavioral rules set in a first message, and more capable with extremely long documents (200K token context window). ChatGPT responds better to step-by-step task decomposition and tool-use workflows.' } },
          { '@type': 'Question', name: 'What are the best Claude prompts for content creation?', acceptedAnswer: { '@type': 'Answer', text: 'The best Claude prompts for content creation combine output format control (exact template to fill), few-shot examples (2–3 examples of the style you want), and negative constraints (what to exclude). This combination produces brand-consistent content in one shot rather than through revision cycles. For SEO content, add a chain-of-thought step that identifies search intent before writing.' } },
          { '@type': 'Question', name: 'Can Claude replace ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'Claude and ChatGPT excel at different tasks. Claude is superior for long document analysis, maintaining behavioral consistency across long conversations, and nuanced reasoning with uncertainty acknowledgment. ChatGPT is superior for tool use, image generation (DALL-E), plugin ecosystems, and step-by-step task automation. Most power users use both — Claude for depth, ChatGPT for breadth.' } },
          { '@type': 'Question', name: 'How do you write better prompts for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'Write better Claude prompts by: (1) setting role + behavioral constraint, not just role title, (2) defining output format before the task, (3) adding negative constraints for common failure modes, (4) using few-shot examples instead of style descriptions, and (5) adding a self-review layer ("before responding, check:") for quality-sensitive tasks. The biggest single improvement: define what "done" looks like before Claude starts.' } },
          { '@type': 'Question', name: 'Is Claude better for long-form content than ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most long-form content tasks. Claude\'s 200K token context window means it can hold an entire book, long research paper, or large codebase in context simultaneously. Its constitutional AI training also makes it less likely to drift stylistically across long documents. For content above 5,000 words, Claude maintains consistency in tone and structure significantly better than GPT-4o in testing.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Claude Prompt Techniques', item: `${SITE_CONFIG.url}/blog/claude-prompt-techniques` },
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
                <li className="text-surface-600">Claude Prompt Techniques</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">AI Tools</span>
              <span className="text-xs text-surface-400">Updated April 1, 2026 · 15 min read</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              Claude Prompt Techniques That Actually Work —
              <span className="text-brand-600"> Expert Guide (2026)</span>
            </h1>

            {/* Hook */}
            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6 max-w-2xl">
              <p>
                Here is the thing no one tells you about Claude: <strong className="text-surface-800">the model is not the differentiator. The prompts are.</strong>
              </p>
              <p>
                Two people using identical Claude subscriptions — one gets generic, verbose outputs they have to rewrite. The other gets precise, production-ready results first time. The difference is not intelligence or creativity. It is how they structure their prompts.
              </p>
              <p>
                After running thousands of Claude prompts across coding, content, research, and business workflows, these are the 10 techniques that consistently produce the sharpest outputs — with copy-paste templates you can use immediately.
              </p>
            </div>

            {/* Quick snippet */}
            <div className="bg-surface-900 rounded-2xl p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">
                📌 The 10 Claude Prompt Techniques — At a Glance
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TECHNIQUES.map(t => (
                  <a key={t.id} href={`#${t.id}`}
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                    className="flex items-center gap-2.5 text-sm transition-colors hover:opacity-80">
                    <span style={{ color: '#94a3b8' }} className="font-mono text-xs font-bold shrink-0">{t.n}</span>
                    <span className="text-base shrink-0">{t.icon}</span>
                    <span style={{ color: '#ffffff' }} className="font-semibold">{t.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub AI Team</div>
                <div className="text-xs text-surface-400">Based on production Claude usage across content, engineering, and research workflows. April 2026.</div>
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
                <ol className="space-y-1.5">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-brand-700 leading-snug transition-colors">
                        <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 pt-4 border-t border-surface-200 space-y-2">
                  <Link href="/ai-tools/claude" className="block w-full text-center bg-brand-600 text-white font-semibold text-xs py-2 rounded-xl hover:bg-brand-700 transition-colors">
                    Claude Full Review →
                  </Link>
                  <Link href="/blog/claude-prompt-templates-save-tokens" className="block w-full text-center bg-surface-100 text-surface-700 font-semibold text-xs py-2 rounded-xl hover:bg-surface-200 transition-colors">
                    Prompt Templates →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-14">

              {/* Claude vs ChatGPT */}
              <section id="claude-vs-chatgpt-prompting">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Why Claude Prompting Is Different from ChatGPT</h2>
                <p className="text-surface-600 leading-relaxed mb-5">
                  Most prompt engineering advice is platform-agnostic. This is a mistake. Claude and ChatGPT have fundamentally different training approaches — and that means they respond differently to the same prompt structure.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-surface-200 mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface-900">
                        <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Prompting Factor</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold">Claude</th>
                        <th style={{color:'#ffffff'}} className="text-center px-4 py-3 font-semibold rounded-tr-2xl">ChatGPT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { factor:'Behavioral constraints',    claude:'Responds strongly — behavioral framing activates specific modes', gpt:'Responds to task-based instructions better', winner:'claude' },
                        { factor:'Uncertainty acknowledgment',claude:'Will flag uncertainty when explicitly prompted',                   gpt:'Tends to answer confidently even when uncertain', winner:'claude' },
                        { factor:'Long document context',     claude:'200K tokens — entire codebases or books',                         gpt:'128K tokens (GPT-4o)',                         winner:'claude' },
                        { factor:'Tool use & plugins',        claude:'Limited tool ecosystem (API)',                                     gpt:'Strong plugin and tool ecosystem',              winner:'gpt'   },
                        { factor:'System prompt compliance',  claude:'Highly consistent — behavioral rules persist',                    gpt:'Solid but more variable across turns',          winner:'claude' },
                        { factor:'Output consistency',        claude:'More consistent tone across long outputs',                        gpt:'More variable on long-form',                    winner:'claude' },
                        { factor:'Image generation',          claude:'Analysis only (no generation)',                                   gpt:'DALL-E integration',                            winner:'gpt'   },
                        { factor:'Few-shot learning',         claude:'Excellent — strong pattern matching',                             gpt:'Excellent — comparable',                        winner:'tie'   },
                      ].map((r, i) => (
                        <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-semibold text-surface-900">{r.factor}</td>
                          <td className={`px-4 py-3 text-center text-xs ${r.winner === 'claude' ? 'text-emerald-700 font-semibold' : 'text-surface-600'}`}>
                            {r.winner === 'claude' && '✓ '}{r.claude}
                          </td>
                          <td className={`px-4 py-3 text-center text-xs ${r.winner === 'gpt' ? 'text-emerald-700 font-semibold' : 'text-surface-600'}`}>
                            {r.winner === 'gpt' && '✓ '}{r.gpt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-5 bg-brand-50 border-l-4 border-brand-600 rounded-r-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">🧠 Expert Insight</div>
                  <p className="text-sm text-surface-700 leading-relaxed">
                    Claude's constitutional AI training makes it unusually responsive to <strong>behavioral framing</strong>. When you say "you are a developer who refuses to ship untested code," Claude activates a behavioral mode — not just a persona. ChatGPT responds better to procedural instructions ("Step 1, Step 2..."). Use the right framing for the right model.
                  </p>
                </div>
              </section>

              {/* 10 TECHNIQUES */}
              {TECHNIQUES.map(t => (
                <section key={t.id} id={t.id}>
                  {/* Technique header */}
                  <div className={`${colorHdr[t.color]} text-white rounded-t-2xl px-6 py-5`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-white text-sm font-black">Technique {t.n}</span>
                      <span className="text-2xl">{t.icon}</span>
                    </div>
                    <h2 className="font-display font-black text-2xl text-white">{t.name}</h2>
                    <div className="text-sm text-white mt-1 italic">{t.tagline}</div>
                  </div>

                  <div className={`border-2 ${colorBdr[t.color]} rounded-b-2xl p-6 space-y-6`}>

                    {/* What + Why */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">What It Is</div>
                        <p className="text-sm text-surface-700 leading-relaxed">{t.what}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">Why It Works</div>
                        <p className="text-sm text-surface-700 leading-relaxed">{t.why}</p>
                      </div>
                    </div>

                    {/* Prompt block */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-surface-400">📋 Copy-Paste Prompt</div>
                        <span className={`text-xs font-bold ${colorTxt[t.color]}`}>Use this exactly</span>
                      </div>
                      <pre className={`${colorBg[t.color]} border ${colorBdr[t.color]} rounded-xl p-5 text-sm font-mono ${colorTxt[t.color]} whitespace-pre-wrap leading-relaxed overflow-x-auto`}>
                        {t.prompt}
                      </pre>
                    </div>

                    {/* Expected output */}
                    <div className="bg-surface-900 rounded-xl p-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">
                        ⚡ What Claude Returns
                      </div>
                      <p className="text-sm text-white leading-relaxed">{t.output}</p>
                    </div>

                    {/* Pro tip + Use case */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <div className="text-xs font-bold text-amber-700 mb-1">⚡ Pro Tip</div>
                        <p className="text-xs text-amber-800 leading-relaxed">{t.proTip}</p>
                      </div>
                      <div className={`${colorBg[t.color]} border ${colorBdr[t.color]} rounded-xl p-4`}>
                        <div className={`text-xs font-bold ${colorTxt[t.color]} mb-1`}>🎯 Use Case</div>
                        <p className="text-xs text-surface-700 leading-relaxed">{t.useCase}</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              {/* REAL USE CASES */}
              <section id="real-use-cases">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Real-World Claude Prompt Use Cases</h2>

                <div className="space-y-4">
                  {[
                    {
                      industry:'Content Creation & SEO',
                      icon:'📝',
                      techniques:['Prompt Chaining (research → outline → write)', 'Output Format Control (exact post structure)', 'Few-Shot Priming (match brand voice)'],
                      workflow:'Chain: keyword intent analysis → heading structure → section writing → meta description. Each step reviewed before feeding forward.',
                      result:'Long-form SEO content that maintains search intent alignment from headline to conclusion — no drift, no keyword stuffing.',
                    },
                    {
                      industry:'Software Development',
                      icon:'💻',
                      techniques:['Role + Constraint Stacking (production-ready constraint)', 'Negative Constraint Prompting (no untested code)', 'Minimal Token Prompting (patch mode)'],
                      workflow:'Set behavioral contract at session start. Use patch-only prompts for all changes. Code review prompt at the end.',
                      result:'Changes that touch only what was asked. Clear, testable diffs. No creative rewrites of working code.',
                    },
                    {
                      industry:'Business Automation',
                      icon:'⚙️',
                      techniques:['System-Style Prompting (persistent behavior contract)', 'Instruction Layering (quality filter built in)', 'Context Compression (portable project anchors)'],
                      workflow:'Create a behavioral contract per workflow type. Compress project context into anchors. Run tight, repeatable prompts against anchors.',
                      result:'Consistent outputs across team members using the same prompts. Predictable results that can be templated into SOPs.',
                    },
                    {
                      industry:'Research & Analysis',
                      icon:'🔍',
                      techniques:['Chain-of-Thought with uncertainty flags', 'Context Compression (50-page → 5-bullet anchor)', 'Negative Constraints (no speculation)'],
                      workflow:'Compress source documents. Run chain-of-thought analysis. Flag uncertainty at every inferential step. Never state speculation as fact.',
                      result:'Research summaries with built-in confidence calibration — you know exactly where Claude is reasoning from evidence vs. inference.',
                    },
                  ].map(u => (
                    <div key={u.industry} className="bg-white border border-surface-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{u.icon}</span>
                        <h3 className="font-bold text-surface-900 text-lg">{u.industry}</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">Techniques Used</div>
                          <ul className="space-y-1">
                            {u.techniques.map(t => (
                              <li key={t} className="text-xs text-surface-600 flex items-start gap-1.5">
                                <span className="text-brand-400 shrink-0">→</span>{t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">Workflow</div>
                          <p className="text-xs text-surface-600 leading-relaxed">{u.workflow}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">Result</div>
                          <p className="text-xs text-emerald-700 leading-relaxed font-medium">{u.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="common-mistakes">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Mistakes That Kill Output Quality</h2>
                <div className="space-y-3">
                  {[
                    {
                      mistake:'Giving Claude a role without a behavioral constraint',
                      damage:'High',
                      detail:'"You are a copywriter" activates a broad persona. "You are a copywriter who never uses passive voice and hates adjective overuse" activates a specific one. The constraint is what makes the role useful.',
                      fix:'Always add a behavioral constraint after the role — a strong opinion, a professional habit, or a past experience that shapes decision-making.',
                    },
                    {
                      mistake:'Using vague quality descriptors instead of format specs',
                      damage:'Very High',
                      detail:'"Write in a conversational, engaging, clear tone" is almost meaningless. Claude\'s interpretation of "conversational" varies significantly. Format specs are unambiguous: "Max 15 words per sentence. One idea per paragraph. No passive voice."',
                      fix:'Replace tone adjectives with measurable format rules. Instead of "clear," say "no sentence over 20 words." Instead of "engaging," show two examples.',
                    },
                    {
                      mistake:'Asking Claude to choose between options without context',
                      damage:'High',
                      detail:'"Should I use React or Vue?" produces a balanced essay about both. "Should I use React or Vue for a 3-person team building an internal admin tool with a 2-month timeline?" produces a decision.',
                      fix:'Every decision question needs: the specific context, the constraints, and what matters most. Without context, Claude defaults to "it depends."',
                    },
                    {
                      mistake:'Not using negative constraints for predictable failure modes',
                      damage:'Medium',
                      detail:'You know Claude will add a closing summary you don\'t want. You know it will use em-dashes. You know it will hedge with "it\'s worth noting." These are predictable — ban them preemptively.',
                      fix:'Build a personal "never use" list for every recurring task type. Add one item every time Claude produces output you don\'t want. Iterate your templates over time.',
                    },
                    {
                      mistake:'Running complex multi-step tasks in a single prompt',
                      damage:'Very High',
                      detail:'Research + analyze + write + edit + format in one prompt produces mediocre output at every step. Each is a specialized skill — and like humans, Claude does specialized work better than generalized work.',
                      fix:'Decompose into a prompt chain. Accept that chaining takes more messages — it produces far better work at each stage.',
                    },
                    {
                      mistake:'Correcting output with new messages instead of editing the prompt',
                      damage:'High (token cost)',
                      detail:'Sending "make it shorter" as message 2 costs the full re-reading of conversation history. Editing message 1 to add "max 150 words" costs nothing — and prevents the problem in every future iteration.',
                      fix:'Never send corrections as follow-up messages. Always edit the original prompt. Build the correction into the template so you never make the same mistake twice.',
                    },
                  ].map((m, i) => (
                    <div key={i} className="border border-surface-200 rounded-2xl overflow-hidden bg-white">
                      <div className="flex items-center gap-3 px-5 py-3 bg-surface-50">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.damage === 'Very High' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                          {m.damage} damage
                        </span>
                        <h3 className="font-bold text-surface-900 text-sm">✗ {m.mistake}</h3>
                      </div>
                      <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-bold text-surface-400 mb-1">Why it hurts</div>
                          <p className="text-xs text-surface-600 leading-relaxed">{m.detail}</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-3">
                          <div className="text-xs font-bold text-emerald-700 mb-1">✓ Fix</div>
                          <p className="text-xs text-emerald-800 leading-relaxed">{m.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ADVANCED PRO TIPS */}
              <section id="advanced-pro-tips">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Advanced Pro Tips — What Experts Actually Do</h2>

                <div className="space-y-4">
                  {[
                    {
                      tip:'Build a personal prompt library, not individual prompts',
                      detail:'Every time you write a prompt that produces a great output, save it as a template with [bracketed placeholders]. Within a month, you\'ll have a library of 20–30 reliable prompts that cover 80% of your tasks. You\'ll stop writing from scratch.',
                      icon:'📚',
                    },
                    {
                      tip:'Use "flag uncertainties" as a standard rule in all analytical prompts',
                      detail:'Adding "flag any step where you\'re working from assumption, not evidence" transforms Claude from a confident answer machine into a calibrated reasoning partner. The flags tell you exactly what to verify before acting on the output.',
                      icon:'🚩',
                    },
                    {
                      tip:'Set the output contract before the task, not after',
                      detail:'Most people write task first, format last. Experts write format first. Why? Because the format shapes how Claude frames the task. "A numbered list of 5 risks" produces different thinking than "a narrative analysis of risks." The format is a cognitive constraint, not just an aesthetic preference.',
                      icon:'📐',
                    },
                    {
                      tip:'Chain summarization sessions, not conversation turns',
                      detail:'When a project gets long, don\'t continue the same chat. Use the Summarize + Next Steps template to create a handoff document, start a fresh chat, paste the summary, and continue. Repeat every 15–20 messages. This is how you run a 200-message project without hitting limits.',
                      icon:'🔄',
                    },
                    {
                      tip:'Test your prompts against the "could a competitor use this?" filter',
                      detail:'For any marketing or positioning output, ask Claude: "Does any sentence in this response apply equally to a competitor?" If yes, flag it. This one filter eliminates generic output and forces differentiated messaging — and you can build it directly into the prompt as a self-review layer.',
                      icon:'🎯',
                    },
                    {
                      tip:'Use the "What would change your answer?" closing question',
                      detail:'After any analysis or recommendation, add: "What additional information would meaningfully change this recommendation?" This surfaces the hidden assumptions that would cause Claude\'s output to be wrong — and it tells you exactly what to research next.',
                      icon:'❓',
                    },
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl">
                      <span className="text-2xl shrink-0">{tip.icon}</span>
                      <div>
                        <h3 className="font-bold text-surface-900 mb-2">{tip.tip}</h3>
                        <p className="text-sm text-surface-600 leading-relaxed">{tip.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FREE TEMPLATES */}
              <section id="free-templates">
                <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 mb-6">
                  <h2 className="font-display font-black text-2xl text-white mb-1">🎁 Free Claude Prompt Templates</h2>
                  <p className="text-brand-200 text-sm">5 high-value prompts you can copy and use immediately — no setup needed.</p>
                </div>

                <div className="space-y-6">
                  {FREE_TEMPLATES.map(tpl => (
                    <div key={tpl.n} className="border border-surface-200 rounded-2xl overflow-hidden bg-white">
                      <div className="bg-surface-50 px-5 py-4 flex items-center gap-3">
                        <span className="font-mono text-surface-400 text-xs">{tpl.n}</span>
                        <span className="text-xl">{tpl.icon}</span>
                        <div>
                          <h3 className="font-bold text-surface-900">{tpl.title}</h3>
                          <p className="text-xs text-surface-500">{tpl.desc}</p>
                        </div>
                      </div>
                      <div className="p-5">
                        <pre className="bg-surface-900 text-emerald-300 rounded-xl p-4 text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                          {tpl.template}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-bold text-white mb-1">More Claude Guides on ToolStackHub</div>
                  <div className="text-brand-200 text-sm">Token saving habits, low-token prompt templates, and Claude vs ChatGPT comparison.</div>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link href="/blog/claude-prompt-templates-save-tokens" className="bg-white text-brand-700 font-bold px-4 py-2 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                    Prompt Templates →
                  </Link>
                  <Link href="/blog/how-to-save-tokens-in-claude" className="bg-white/10 text-white font-semibold px-4 py-2 rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/20">
                    Token Guide →
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {
                      q:'What are Claude prompt techniques?',
                      a:'Claude prompt techniques are structured methods for writing prompts that produce precise, high-quality outputs efficiently. They include role + constraint stacking, output format control, chain-of-thought prompting, few-shot priming, context compression, and negative constraint prompting. Unlike generic AI prompting tips, Claude-specific techniques exploit how Claude\'s constitutional AI training makes it respond differently to behavioral framing, uncertainty flags, and explicit output contracts.',
                    },
                    {
                      q:'How is Claude prompting different from ChatGPT prompting?',
                      a:'Claude responds strongly to behavioral constraints and uncertainty acknowledgment — framing like "you have been burned by X before" activates specific decision-making modes. ChatGPT responds better to step-by-step procedural instructions. Claude maintains behavioral consistency better across long conversations and handles much longer documents (200K tokens vs 128K). For pure tool use, plugins, and image generation, ChatGPT has a stronger ecosystem.',
                    },
                    {
                      q:'What are the best Claude prompts for content creation?',
                      a:'The best Claude prompts for content creation combine three elements: output format control (exact template with labeled sections), few-shot examples (2–3 samples of the style you want), and negative constraints (list of patterns to exclude). For SEO content specifically, add a prompt chaining step that identifies search intent variations before writing — so every section serves a specific search intent rather than just covering the topic.',
                    },
                    {
                      q:'Can Claude replace ChatGPT for everyday use?',
                      a:'For most text-based tasks — writing, analysis, research, coding — Claude is at least comparable and often superior. Where Claude clearly wins: long document analysis, maintaining behavioral consistency, nuanced reasoning with uncertainty acknowledgment. Where ChatGPT wins: tool use integrations, image generation, plugin ecosystem, broader third-party app support. Most power users use both: Claude for depth and analysis, ChatGPT for workflows requiring tools or image generation.',
                    },
                    {
                      q:'How do you write better prompts for Claude?',
                      a:'Write better Claude prompts by: (1) adding a behavioral constraint after the role — not just "you are a developer" but "you refuse to write untested code," (2) defining the output format before the task with labeled sections, (3) adding negative constraints for predictable failures, (4) using few-shot examples instead of style descriptions, and (5) adding a self-review layer with "before responding, check:". The single biggest improvement: define what "done" looks like before Claude starts writing.',
                    },
                    {
                      q:'Is Claude better than ChatGPT for long-form content?',
                      a:'For most long-form content tasks, yes. Claude\'s 200K token context window holds entire books or codebases simultaneously. Its constitutional AI training produces more consistent tone and style across long documents. In direct comparison, Claude shows significantly less style drift across 3,000+ word pieces. For short-form tasks under 1,000 words, both models perform comparably with good prompts — the technique matters more than the model.',
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

              {/* Conclusion */}
              <section className="bg-surface-900 rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-4">The Takeaway</h2>
                <p className="text-white text-sm leading-relaxed mb-5">
                  Every technique in this guide comes down to one principle: <strong className="text-white">tell Claude what "done" looks like before it starts.</strong> Role without constraint is vague. Task without format is open-ended. Instruction without a negative constraint is an invitation for the defaults you don't want.
                </p>
                <p className="text-white text-sm leading-relaxed mb-6">
                  The experts who get the most out of Claude are not smarter than everyone else. They have built a library of reliable prompt templates through iteration — and they add to it every time they encounter an output they don't want. Start with the templates in this guide. Adapt them. Save what works. You\'ll hit your stride faster than you expect.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/ai-tools/claude" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                    Claude Full Review →
                  </Link>
                  <Link href="/blog/claude-prompt-templates-save-tokens" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm">
                    More Prompt Templates →
                  </Link>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/blog/how-to-save-tokens-in-claude',           icon:'🧠', label:'10 Habits to Save Claude Tokens',   desc:'Why message 30 costs 928× more than message 1'       },
                    { href:'/blog/claude-prompt-templates-save-tokens',    icon:'📋', label:'8 Low-Token Prompt Templates',      desc:'Copy-paste templates with real examples'             },
                    { href:'/ai-tools/claude-vs-chatgpt',                  icon:'⚔️', label:'Claude vs ChatGPT 2026',           desc:'Feature-by-feature comparison for every use case'    },
                    { href:'/ai-tools',                                     icon:'🤖', label:'Best AI Tools 2026',               desc:'Claude, Gemini, Jasper — reviewed and ranked'        },
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
                <strong>Note:</strong> All prompt examples tested on Claude Sonnet (April 2026). Output quality varies by task complexity, context length, and Claude model version. Anthropic updates Claude regularly — prompt behavior may evolve. Templates are starting points — iterate based on your specific use case.
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}