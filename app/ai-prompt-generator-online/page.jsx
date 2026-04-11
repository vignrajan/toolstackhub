import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import AiPromptGenerator from '../../components/tools/AiPromptGenerator';
import { SITE_CONFIG } from '../../data/tools';
import NewsletterBanner from '../../components/NewsletterBanner';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'AI Prompt Generator Online Free – ChatGPT, Claude & Gemini',
  description: 'Generate optimized prompts for ChatGPT, Claude, and Gemini online free. Set tone, format, and persona. Model-specific output. No signup required. Try now!',
  keywords: [
    'ai prompt generator online',
    'chatgpt prompt generator',
    'claude prompt generator',
    'gemini prompt generator',
    'ai writing prompt generator',
    'prompt engineering tool free',
    'generate ai prompts',
    'chatgpt prompt maker',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/ai-prompt-generator-online` },
  openGraph: {
    title: 'AI Prompt Generator Online Free – ChatGPT, Claude & Gemini',
    description: 'Generate optimized prompts for ChatGPT, Claude, and Gemini free. Set tone, format, persona, and output style. No signup needed.',
    url: `${SITE_CONFIG.url}/ai-prompt-generator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Generator Online Free – ChatGPT, Claude & Gemini',
    description: 'Generate optimized AI prompts for ChatGPT, Claude, and Gemini free. Model-specific output. No signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is an AI prompt generator?',
    a: 'An AI prompt generator is a tool that helps you write better instructions for AI models like ChatGPT, Claude, and Gemini. Instead of typing a vague request and hoping for a good response, you fill in structured fields — task, tone, format, persona, and output length — and the tool builds a well-structured prompt that consistently produces higher-quality AI output.',
  },
  {
    q: 'Why are prompts different for ChatGPT, Claude, and Gemini?',
    a: 'Each AI model was trained differently and responds to different instruction styles. Claude responds best to XML tags and explicit structured formatting instructions. ChatGPT responds well to role-based persona instructions ("You are a..."). Gemini prefers markdown headers and structured context. Using the right prompt structure for each model can dramatically improve output quality.',
  },
  {
    q: 'What is prompt engineering?',
    a: 'Prompt engineering is the practice of designing and structuring AI inputs to consistently produce higher-quality, more accurate, and more useful outputs. A well-engineered prompt specifies the task clearly, sets the tone and format, provides relevant context, and constrains the output length — all of which guide the AI to give you exactly what you need rather than a generic response.',
  },
  {
    q: 'Can I use the generated prompts directly in ChatGPT or Claude?',
    a: 'Yes — click Copy and paste the generated prompt directly into ChatGPT.com, Claude.ai, or Google Gemini. The prompts are formatted specifically for each platform and ready to use without modification.',
  },
  {
    q: 'Is the AI prompt generator free?',
    a: 'Yes — completely free with no account, no API key, and no usage limits. Generate as many prompts as you need for any task or AI model.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'AI Prompt Generator Online',
      description: 'Free online AI prompt generator for ChatGPT, Claude, and Gemini. Set task, tone, format, persona, and output length. Generates model-specific prompts optimized for each AI platform.',
      url: `${SITE_CONFIG.url}/ai-prompt-generator-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Model-specific prompts for ChatGPT, Claude, and Gemini',
        'Tone selection: professional, casual, technical, creative',
        'Format selection: paragraph, bullet points, table, step-by-step',
        'Persona/role assignment for role-based prompting',
        'Output length control',
        'One-click copy for immediate use',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Utility Tools', item: `${SITE_CONFIG.url}/#utility` },
        { '@type': 'ListItem', position: 3, name: 'AI Prompt Generator', item: `${SITE_CONFIG.url}/ai-prompt-generator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Generate an AI Prompt Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Select your AI model',   text: 'Choose ChatGPT, Claude, or Gemini — the prompt structure is optimized for each model.' },
        { '@type': 'HowToStep', position: 2, name: 'Describe your task',     text: 'Enter what you want the AI to do in plain language — a sentence or two is enough.' },
        { '@type': 'HowToStep', position: 3, name: 'Set tone and format',    text: 'Choose tone (professional, casual, technical, creative) and output format (paragraph, bullets, table, steps).' },
        { '@type': 'HowToStep', position: 4, name: 'Copy and use',           text: 'Click Generate Prompt, then Copy. Paste directly into your chosen AI model and run it.' },
      ],
    },
  ],
};

// ── Model comparison ──────────────────────────────────────────
const models = [
  {
    name: 'ChatGPT',
    company: 'OpenAI',
    color: 'emerald',
    icon: '🤖',
    promptStyle: 'Role-based instructions',
    bestFor: 'General writing, coding help, brainstorming, Q&A',
    tipTitle: 'Start with a persona',
    tip: 'ChatGPT responds strongly to "You are a [role] with [expertise]..." at the start. This anchors the response style and knowledge domain for the entire conversation.',
    example: 'You are a senior marketing strategist with 15 years of experience...',
  },
  {
    name: 'Claude',
    company: 'Anthropic',
    color: 'violet',
    icon: '🧠',
    promptStyle: 'XML tags and structured formatting',
    bestFor: 'Long-form writing, analysis, document processing, nuanced reasoning',
    tipTitle: 'Use XML tags for structure',
    tip: 'Claude was trained to follow XML-tagged instructions precisely. Wrapping context in <context>, task in <task>, and format in <format> tags produces consistently better output.',
    example: '<task>Write a product description</task><tone>professional</tone><length>150 words</length>',
  },
  {
    name: 'Gemini',
    company: 'Google',
    color: 'blue',
    icon: '✨',
    promptStyle: 'Markdown headers and structured context',
    bestFor: 'Research, factual Q&A, multimodal tasks, Google Workspace integration',
    tipTitle: 'Structure with markdown headers',
    tip: 'Gemini responds well to markdown-structured prompts with clear ## Context, ## Task, and ## Output Format sections that mirror document structure.',
    example: '## Task\nSummarize the following article\n## Format\nBullet points, max 5 items',
  },
];

// ── Prompt components ─────────────────────────────────────────
const promptComponents = [
  {
    component: 'Task / Goal',
    icon: '🎯',
    why: 'The single most important element. Be specific about what you want — vague tasks produce vague answers.',
    weak: 'Write about marketing',
    strong: 'Write a 200-word Instagram caption promoting a summer sale for a women\'s clothing brand targeting 25–35 year olds',
  },
  {
    component: 'Persona / Role',
    icon: '👤',
    why: 'Assigning an expert role anchors the AI\'s knowledge domain and response style to match that expertise.',
    weak: 'Explain this code',
    strong: 'You are a senior Python developer with 10 years of experience in data engineering. Explain this code...',
  },
  {
    component: 'Tone & Style',
    icon: '🎨',
    why: 'Without a specified tone, AI defaults to a neutral academic style that may not match your use case.',
    weak: 'Write an email',
    strong: 'Write a professional but warm email that balances formal courtesy with approachable language',
  },
  {
    component: 'Output Format',
    icon: '📋',
    why: 'Specifying format prevents the AI from choosing an unsuitable structure for your content.',
    weak: 'List the benefits',
    strong: 'List the 5 key benefits as bullet points, each starting with a strong action verb, max 15 words each',
  },
  {
    component: 'Context',
    icon: '📄',
    why: 'Background context helps the AI produce relevant, specific answers rather than generic responses.',
    weak: 'Improve my headline',
    strong: 'The target audience is CTOs at mid-sized SaaS companies. Improve this headline for a LinkedIn ad: [headline]',
  },
  {
    component: 'Constraints',
    icon: '📏',
    why: 'Length, word count, and exclusion constraints prevent AI from over-explaining or going off-topic.',
    weak: 'Write a summary',
    strong: 'Write a summary in exactly 3 sentences. Do not include opinions or recommendations — facts only.',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function AiPromptGeneratorOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#utility" className="hover:text-brand-600 transition-colors text-violet-600">Utility Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">AI Prompt Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free AI Prompt Generator – Create Perfect Prompts for ChatGPT, Claude & Gemini
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate optimized AI prompts for ChatGPT, Claude, and Gemini in seconds.
              Set your task, tone, format, and persona — the tool builds a model-specific
              prompt that consistently produces better AI output. Free, no signup, copy
              and paste directly into any AI model.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🤖 ChatGPT',
                '🧠 Claude',
                '✨ Gemini',
                '🎯 Model-Specific',
                '🔒 No Signup',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AiPromptGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="AI Prompt Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              AI Prompt Generator Online – Better Prompts, Better Results
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                The quality of AI output depends almost entirely on the quality of
                the prompt. A vague instruction like "write a blog post about marketing"
                produces a generic, forgettable result. A well-structured prompt that
                specifies the audience, tone, format, word count, and key points
                produces content that is publication-ready. Our free{' '}
                <strong>AI prompt generator online</strong> bridges that gap — helping
                you write prompts that work regardless of your experience with AI tools.
              </p>
              <p>
                The tool generates model-specific prompts for <strong>ChatGPT</strong>,
                <strong> Claude</strong>, and <strong>Gemini</strong> — because each
                model responds differently to different instruction styles. Claude
                responds best to XML-tagged structured instructions. ChatGPT responds
                strongly to role-based persona assignments. Gemini responds well to
                markdown-structured context. Using the wrong prompt structure for the
                wrong model is one of the most common reasons AI output disappoints.
              </p>
              <p>
                Whether you need a <strong>ChatGPT prompt generator</strong> for content
                creation, a <strong>Claude prompt generator</strong> for long-form
                analysis, a <strong>Gemini prompt generator</strong> for research
                tasks, or a general <strong>AI writing prompt generator</strong> for
                any creative or professional task — this tool produces ready-to-use
                prompts in under 30 seconds.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Generate an AI Prompt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '🤖', title: 'Select Your AI Model',    desc: 'Choose ChatGPT, Claude, or Gemini. The prompt structure and formatting style adapts to each model\'s training.' },
                { step: '02', icon: '✏️', title: 'Describe Your Task',      desc: 'Explain what you want the AI to do in plain language. One or two sentences — the tool structures it correctly.' },
                { step: '03', icon: '🎨', title: 'Set Tone & Format',       desc: 'Choose tone (professional, casual, technical, creative) and output format (paragraph, bullets, table, steps).' },
                { step: '04', icon: '👤', title: 'Add Persona (Optional)',  desc: 'Assign an expert role like "senior financial analyst" to anchor the AI\'s knowledge domain and response style.' },
                { step: '05', icon: '📏', title: 'Set Output Length',       desc: 'Choose short, medium, or long output. This adds explicit word count guidance to prevent over-long or too-brief responses.' },
                { step: '06', icon: '📋', title: 'Generate & Copy',         desc: 'Click Generate Prompt. Review the structured output, click Copy, and paste directly into your AI model of choice.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Model comparison */}
          <section aria-labelledby="models-heading">
            <h2 id="models-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              ChatGPT vs Claude vs Gemini – Prompt Style Guide
            </h2>
            <div className="space-y-4">
              {models.map(m => (
                <div key={m.name} className={`p-5 bg-${m.color}-50 border border-${m.color}-200 rounded-2xl`}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl shrink-0">{m.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-display font-bold text-lg text-${m.color}-900`}>{m.name}</h3>
                        <span className={`text-xs text-${m.color}-600 bg-${m.color}-100 px-2 py-0.5 rounded-full`}>by {m.company}</span>
                      </div>
                      <div className={`text-sm text-${m.color}-700 mb-1`}>
                        <strong>Prompt style:</strong> {m.promptStyle}
                      </div>
                      <div className={`text-sm text-${m.color}-700`}>
                        <strong>Best for:</strong> {m.bestFor}
                      </div>
                    </div>
                  </div>
                  <div className={`bg-${m.color}-100 rounded-xl p-4`}>
                    <div className={`font-semibold text-${m.color}-900 text-sm mb-1`}>💡 {m.tipTitle}</div>
                    <p className={`text-sm text-${m.color}-800 mb-3 leading-relaxed`}>{m.tip}</p>
                    <code className={`text-xs font-mono text-${m.color}-700 bg-${m.color}-200 px-3 py-2 rounded-lg block`}>{m.example}</code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Prompt components */}
          <section aria-labelledby="components-heading">
            <h2 id="components-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              The 6 Components of a Perfect AI Prompt
            </h2>
            <div className="space-y-4">
              {promptComponents.map(pc => (
                <div key={pc.component} className="p-5 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl shrink-0">{pc.icon}</span>
                    <div>
                      <h3 className="font-semibold text-surface-900">{pc.component}</h3>
                      <p className="text-sm text-surface-500 mt-0.5">{pc.why}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <div className="text-xs font-medium text-red-600 uppercase tracking-wider mb-1">❌ Weak</div>
                      <div className="text-sm bg-red-50 border border-red-100 text-red-800 px-3 py-2 rounded-lg">{pc.weak}</div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-1">✅ Strong</div>
                      <div className="text-sm bg-emerald-50 border border-emerald-100 text-emerald-800 px-3 py-2 rounded-lg">{pc.strong}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎯', title: 'Model-Specific Output',          desc: 'Prompts are formatted specifically for ChatGPT, Claude, or Gemini — not a generic one-size-fits-all template.' },
                { icon: '🎨', title: 'Tone Selection',                 desc: 'Professional, casual, technical, creative, and persuasive tones — each changes the language register of the generated prompt.' },
                { icon: '📋', title: 'Format Control',                 desc: 'Paragraph, bullet points, numbered list, table, and step-by-step formats — the AI is explicitly told how to structure its output.' },
                { icon: '👤', title: 'Persona Assignment',             desc: 'Assign an expert role to anchor the AI\'s knowledge domain. Makes a significant difference to output accuracy and depth.' },
                { icon: '📏', title: 'Length Guidance',                desc: 'Short (~100 words), medium (~300 words), or long (~600 words) — prevents AI from writing either too little or too much.' },
                { icon: '📋', title: 'One-Click Copy',                 desc: 'Click Copy and paste the complete prompt directly into ChatGPT, Claude, or Gemini — no reformatting needed.' },
                { icon: '🔒', title: 'No API Key Required',            desc: 'The generator builds prompts locally — no AI API calls, no costs, no account. The prompt is the product.' },
                { icon: '📱', title: 'Mobile Friendly',                desc: 'Generate prompts on your phone and paste directly into the mobile AI app of your choice.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '📝',
                  title: 'Content Writing',
                  desc: 'Generate ChatGPT prompts for blog posts, social media captions, email newsletters, and ad copy — with tone, audience, and word count specified for publication-ready output.',
                },
                {
                  icon: '💻',
                  title: 'Code Assistance',
                  desc: 'Build Claude prompts for code review, bug explanations, refactoring suggestions, and documentation generation — with the programming language and expertise level specified.',
                },
                {
                  icon: '🔬',
                  title: 'Research & Analysis',
                  desc: 'Create structured Gemini prompts for research summaries, competitive analysis, market research, and literature reviews — with source format and citation style specified.',
                },
                {
                  icon: '📊',
                  title: 'Business Reports',
                  desc: 'Generate prompts for executive summaries, SWOT analyses, investment memos, and strategic recommendation documents — with audience, format, and length all specified.',
                },
                {
                  icon: '🎓',
                  title: 'Education & Learning',
                  desc: 'Create prompts for concept explanation in simple terms, quiz generation, study guide creation, flashcard sets, and personalized tutoring sessions for any subject.',
                },
                {
                  icon: '🎨',
                  title: 'Creative Projects',
                  desc: 'Build prompts for story outlines, character development, worldbuilding, screenplay dialogue, poetry, and other creative writing tasks with genre and style specified.',
                },
                {
                  icon: '🤝',
                  title: 'Customer Communication',
                  desc: 'Generate prompts for customer service responses, complaint handling, follow-up emails, and support documentation — with brand voice and resolution goal specified.',
                },
                {
                  icon: '🔄',
                  title: 'Workflow Automation',
                  desc: 'Build reusable prompt templates for recurring AI-assisted tasks — weekly report generation, meeting summaries, email drafting, and content repurposing workflows.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free AI Prompt Generator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need a <strong>ChatGPT prompt generator</strong> for content
                marketing, a <strong>Claude prompt generator</strong> for document
                analysis, a <strong>Gemini prompt generator</strong> for research tasks,
                or a general <strong>AI writing prompt generator</strong> for any
                creative or professional task — this tool produces structured, ready-to-use
                prompts in seconds.
              </p>
              <p>
                The model-specific formatting is what separates this from generic prompt
                templates. Using Claude's XML tag structure with ChatGPT, or ChatGPT's
                persona-first format with Gemini, produces noticeably worse results.
                This tool applies the right prompt engineering technique for each model
                automatically — no manual research into prompt engineering best practices
                required.
              </p>
            </div>
          </section>

          {/* Section 8 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More AI Prompt Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/chatgpt-prompt-generator',      label: 'ChatGPT Prompt Generator',      desc: 'Prompts optimized for GPT-4 and ChatGPT conversation style' },
                { href: '/claude-prompt-generator',       label: 'Claude Prompt Generator',       desc: 'XML-structured prompts optimized for Anthropic Claude' },
                { href: '/gemini-prompt-generator',       label: 'Gemini Prompt Generator',       desc: 'Markdown-structured prompts for Google Gemini' },
                { href: '/ai-writing-prompt-generator',   label: 'AI Writing Prompt Generator',   desc: 'Writing-specific prompts for blog posts and articles' },
                { href: '/midjourney-prompt-generator',   label: 'Midjourney Prompt Generator',   desc: 'Detailed image generation prompts for Midjourney' },
                { href: '/stable-diffusion-prompt',       label: 'Stable Diffusion Prompts',      desc: 'Optimized prompts for Stable Diffusion image generation' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-violet-50 border border-violet-200 rounded-xl hover:bg-violet-100 transition-colors group">
                  <div className="font-semibold text-violet-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-violet-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/word-counter-online',         icon: '📝', label: 'Word Counter Online',         desc: 'Count words and measure reading time in your AI output' },
                { href: '/case-converter-online',       icon: '🔡', label: 'Case Converter Online',       desc: 'Format headings and titles in your AI-generated content' },
                { href: '/remove-duplicate-lines-online',icon:'🧹', label: 'Remove Duplicate Lines',      desc: 'Clean up repetitive lines in AI-generated lists and content' },
                { href: '/character-counter-online',    icon: '🔢', label: 'Character Counter Online',    desc: 'Check AI output length against platform character limits' },
                { href: '/lorem-ipsum-generator',       icon: '📄', label: 'Lorem Ipsum Generator',       desc: 'Generate placeholder text when testing AI prompt templates' },
                { href: '/text-to-speech-online',       icon: '🔊', label: 'Text to Speech Online',       desc: 'Listen to your AI-generated content read aloud for review' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-violet-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <NewsletterBanner variant="tool" />
      <Footer />
    </>
  );
}