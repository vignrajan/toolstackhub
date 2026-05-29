'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

// ── Prompt data ───────────────────────────────────────────────
const PROMPT_CATEGORIES = {
  keyword: {
    label: 'Keyword Research',
    icon: '🔍',
    color: 'blue',
    prompts: [
      {
        id: 'kw1',
        title: 'Long-Tail Keyword Discovery',
        prompt: `Act as an expert SEO strategist with 15 years of experience. For the topic "[YOUR TOPIC]", generate a comprehensive list of 30 long-tail keywords organized into these categories:\n\n1. Informational keywords (how, what, why)\n2. Commercial investigation keywords (best, top, vs, review)\n3. Transactional keywords (buy, get, download, free)\n4. Question-based keywords (PAA-style)\n\nFor each keyword include: estimated search intent, difficulty (low/medium/high), and a brief content angle. Focus on keywords with low competition and genuine user value.`,
        tags: ['long-tail', 'keyword research', 'content strategy'],
      },
      {
        id: 'kw2',
        title: 'Competitor Keyword Gap Analysis',
        prompt: `You are an SEO analyst. I am competing with [COMPETITOR URL] for rankings on [TARGET KEYWORD]. Based on general SEO principles:\n\n1. What types of keywords would a competitor in this space likely rank for that I might be missing?\n2. Suggest 20 keyword opportunities organized by: quick wins (low competition), medium-term targets, and long-term authority keywords\n3. For each keyword, suggest the best content format (blog post, tool, comparison page, FAQ)\n4. Identify topic clusters I should build to establish topical authority in [YOUR NICHE]`,
        tags: ['competitor analysis', 'keyword gap', 'topical authority'],
      },
      {
        id: 'kw3',
        title: 'Semantic SEO Keyword Clusters',
        prompt: `Act as a semantic SEO expert. For my primary keyword "[PRIMARY KEYWORD]", build a complete topical authority map:\n\n1. Identify the main pillar topic and 8-10 supporting cluster topics\n2. For each cluster topic, list 5 semantically related keywords and LSI terms\n3. Suggest internal linking architecture between pillar and clusters\n4. Identify entity relationships Google would expect to see covered\n5. List 10 related questions from "People Also Ask" that I should address\n\nFormat as a structured content map I can use to plan 3 months of content.`,
        tags: ['semantic SEO', 'topical authority', 'content clusters'],
      },
      {
        id: 'kw4',
        title: 'Featured Snippet Keyword Finder',
        prompt: `As an SEO specialist, identify 15 keywords related to "[YOUR TOPIC]" that are likely to have featured snippet opportunities. For each keyword:\n\n1. Specify the snippet type (paragraph, list, table, how-to steps)\n2. Write the exact content format I should use to win the snippet\n3. Provide the ideal word count and structure\n4. Give me the opening sentence that directly answers the query\n\nPrioritize keywords where I can provide a more concise, accurate answer than current ranking pages.`,
        tags: ['featured snippets', 'SERP features', 'quick wins'],
      },
    ],
  },
  blog: {
    label: 'Blog Writing',
    icon: '✍️',
    color: 'emerald',
    prompts: [
      {
        id: 'bl1',
        title: 'SEO Blog Post Outline',
        prompt: `You are a senior SEO content strategist. Create a comprehensive, SEO-optimized blog post outline for the target keyword "[TARGET KEYWORD]" with a secondary keyword of "[SECONDARY KEYWORD]".\n\nRequirements:\n- Title: Create 5 title variations (include power words, numbers where appropriate)\n- Meta description: Write 3 versions under 160 characters with CTA\n- Recommended word count with reasoning\n- H2 and H3 structure covering the full topic\n- Introduction hook that addresses search intent immediately\n- FAQ section with 5 questions from People Also Ask\n- Internal link opportunities (indicate where to add them)\n- CTA placement recommendations\n- E-E-A-T signals to include (author expertise, data sources, first-hand experience)\n\nAlign the structure with the search intent: [informational/commercial/transactional].`,
        tags: ['blog outline', 'content structure', 'on-page SEO'],
      },
      {
        id: 'bl2',
        title: 'Complete SEO Blog Post',
        prompt: `Write a complete, SEO-optimized blog post targeting the keyword "[TARGET KEYWORD]".\n\nSpecifications:\n- Word count: [1500/2000/2500] words\n- Tone: [professional/conversational/authoritative]\n- Target audience: [describe your audience]\n- Include the primary keyword in: title, first paragraph, at least 2 H2s, conclusion\n- Use keyword naturally at a density of 1-2%\n- Include transition sentences between sections\n- Add data points and statistics (indicate where to insert real data)\n- Write an engaging introduction using the AIDA framework\n- End with a strong CTA\n- Include a FAQ section with schema-ready Q&A format\n\nDo NOT use generic filler phrases. Every sentence must add value.`,
        tags: ['blog writing', 'long-form content', 'copywriting'],
      },
      {
        id: 'bl3',
        title: 'Content Refresh & Update',
        prompt: `Act as an SEO content editor. I have an existing blog post about "[TOPIC]" that was published [DATE] and currently ranks at position [CURRENT POSITION] for "[KEYWORD]".\n\nAnalyze and suggest:\n1. What outdated information likely needs updating\n2. New sections to add based on current search trends\n3. How to improve the introduction for better engagement (provide rewrite)\n4. Missing keywords and topics competitors likely cover\n5. Ways to improve E-E-A-T signals\n6. Schema markup recommendations\n7. Internal and external link opportunities\n8. How to repurpose this content for other formats (video, infographic, social)\n\nGoal: Move from position [X] to top 3.`,
        tags: ['content refresh', 'content update', 'rank improvement'],
      },
    ],
  },
  onpage: {
    label: 'On-Page SEO',
    icon: '⚙️',
    color: 'amber',
    prompts: [
      {
        id: 'op1',
        title: 'Meta Tags Generator',
        prompt: `You are an on-page SEO specialist. For the following page:\n\nPage topic: [PAGE TOPIC]\nPrimary keyword: [PRIMARY KEYWORD]\nTarget audience: [AUDIENCE]\nPage type: [blog post/product page/landing page/tool page]\n\nGenerate:\n1. 5 title tag variations (under 60 characters each, keyword near the start)\n2. 3 meta description variations (140-160 characters, include CTA, naturally include keyword)\n3. H1 tag (different from title tag but using same keyword)\n4. OG title and description for social sharing\n5. Twitter card title and description\n\nFor each option, explain the strategic choice (CTR optimization, keyword placement, emotional hook).`,
        tags: ['meta tags', 'title tags', 'meta description'],
      },
      {
        id: 'op2',
        title: 'On-Page SEO Audit Checklist',
        prompt: `Act as an on-page SEO auditor. Review this URL [YOUR URL] and provide a complete audit covering:\n\n**Content Quality:**\n- Keyword usage analysis\n- Content depth and completeness vs top 3 competitors\n- Readability score and improvement suggestions\n- Missing subtopics competitors cover\n\n**Technical On-Page:**\n- Title tag and meta description optimization\n- Header hierarchy (H1-H6)\n- Image alt text recommendations\n- URL structure assessment\n- Internal linking opportunities\n\n**User Experience Signals:**\n- Introduction quality (does it answer the query immediately?)\n- Content formatting (bullet points, tables, visuals needed)\n- CTA placement and strength\n\n**Schema Markup:**\n- Recommended schema types for this page\n- FAQ schema opportunities\n\nProvide specific, actionable recommendations with priority levels.`,
        tags: ['on-page audit', 'content audit', 'technical on-page'],
      },
      {
        id: 'op3',
        title: 'Schema Markup Generator',
        prompt: `As a technical SEO expert, generate complete schema markup (JSON-LD) for the following:\n\nPage type: [Article/Product/FAQ/HowTo/Tool/LocalBusiness]\nPage title: [TITLE]\nContent summary: [BRIEF DESCRIPTION]\n\nRequirements:\n1. Primary schema type with all recommended properties\n2. FAQ schema if applicable (provide 5 Q&A pairs)\n3. BreadcrumbList schema\n4. Organization schema for the website\n\nAlso explain:\n- Why each schema type helps SEO\n- Which properties are most likely to generate rich results\n- How to validate the markup\n\nFormat as clean, copy-paste ready JSON-LD blocks.`,
        tags: ['schema markup', 'structured data', 'rich results'],
      },
    ],
  },
  technical: {
    label: 'Technical SEO',
    icon: '🔧',
    color: 'violet',
    prompts: [
      {
        id: 'tc1',
        title: 'Technical SEO Audit',
        prompt: `You are a technical SEO engineer with expertise in Core Web Vitals and crawl optimization. Perform a comprehensive technical SEO audit framework for [WEBSITE URL].\n\nCover these critical areas:\n\n**Crawlability & Indexation:**\n- robots.txt best practices for [website type]\n- XML sitemap structure recommendations\n- Crawl budget optimization strategies\n- Orphan page identification approach\n\n**Core Web Vitals:**\n- LCP optimization checklist\n- FID/INP improvement strategies\n- CLS prevention techniques\n- Specific recommendations for [Next.js/WordPress/other CMS]\n\n**Site Architecture:**\n- URL structure best practices\n- Internal linking depth recommendations\n- Canonicalization strategy\n- Duplicate content prevention\n\n**Mobile & Performance:**\n- Mobile-first indexing checklist\n- Image optimization strategy\n- JavaScript SEO considerations\n\nFormat as a prioritized action plan with estimated impact.`,
        tags: ['technical audit', 'Core Web Vitals', 'crawl optimization'],
      },
      {
        id: 'tc2',
        title: 'Robots.txt & Sitemap Strategy',
        prompt: `As a technical SEO specialist, help me create an optimal robots.txt file and XML sitemap strategy for my [website type] website built on [platform].\n\nFor robots.txt:\n1. What should I block from crawling and why?\n2. How should I handle crawl budget for a [X page] website?\n3. Write the complete robots.txt file for my site type\n\nFor XML sitemap:\n1. Should I use a single sitemap or sitemap index?\n2. What pages to include/exclude and why\n3. Recommended update frequency per content type\n4. How to handle dynamically generated pages\n5. Tools to validate and monitor sitemap health\n\nAlso explain how these files affect my search rankings and crawl efficiency.`,
        tags: ['robots.txt', 'XML sitemap', 'crawl budget'],
      },
    ],
  },
};

const ALL_CATEGORIES = Object.keys(PROMPT_CATEGORIES);

function trackEvent(name, params) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}

function CopyButton({ text, label = 'Copy Prompt', size = 'sm' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    trackEvent('copy_clicked', { content_type: 'ai_seo_prompt' });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 font-medium rounded-lg transition-all
        ${size === 'sm' ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'}
        ${copied
          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
          : 'bg-surface-100 text-surface-600 border border-surface-200 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200'
        }`}
    >
      {copied ? '✅ Copied!' : `📋 ${label}`}
    </button>
  );
}

function PromptCard({ prompt, color }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`border rounded-2xl bg-white overflow-hidden transition-all
      ${expanded ? `border-${color}-300 shadow-md` : 'border-surface-200 hover:border-surface-300'}`}>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-surface-900 text-sm leading-snug">{prompt.title}</h3>
          <CopyButton text={prompt.prompt} />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {prompt.tags.map(tag => (
            <span key={tag}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full bg-${color}-50 text-${color}-700 border border-${color}-100`}>
              {tag}
            </span>
          ))}
        </div>

        <div className={`font-mono text-xs text-surface-500 leading-relaxed bg-surface-50 rounded-xl p-3 border border-surface-100
          ${!expanded ? 'line-clamp-3' : ''}`}>
          {prompt.prompt}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs text-brand-600 hover:text-brand-700 font-medium">
          {expanded ? '↑ Show less' : '↓ Show full prompt'}
        </button>
      </div>
    </div>
  );
}

function PromptGenerator() {
  const [task,      setTask]      = useState('');
  const [category,  setCategory]  = useState('keyword');
  const [tone,      setTone]      = useState('professional');
  const [generated, setGenerated] = useState('');
  const [loading,   setLoading]   = useState(false);

  const TONES = ['professional', 'conversational', 'technical', 'beginner-friendly'];

  const TEMPLATES = {
    keyword:   `Act as an expert SEO strategist. Generate a comprehensive keyword research plan for the topic: "${task}". Include:\n1. 20 long-tail keyword opportunities with estimated search intent\n2. Keyword difficulty assessment (low/medium/high)\n3. Content format recommendations for each keyword\n4. Topical clusters to build authority\n5. Quick-win keywords to target first\n\nTone: ${tone}. Focus on actionable insights, not theory.`,
    blog:      `You are a senior SEO content writer with ${tone === 'professional' ? 'formal expertise' : 'accessible style'}. Create a detailed blog post outline for:\n\nTopic: "${task}"\n\nInclude:\n1. 5 compelling title options (include target keyword)\n2. Meta description (under 160 chars)\n3. Complete H2/H3 structure\n4. Key points for each section\n5. FAQ section (5 questions)\n6. Internal link opportunities\n7. CTA recommendations\n\nOptimize for search intent and E-E-A-T signals.`,
    onpage:    `Act as an on-page SEO specialist. Provide a complete on-page optimization checklist for a page about: "${task}"\n\nCover:\n1. Title tag and meta description (write 3 versions each)\n2. Header hierarchy recommendations\n3. Keyword placement strategy\n4. Schema markup recommendations\n5. Internal linking suggestions\n6. Content gaps to address\n7. User experience improvements\n\nTone: ${tone}. Prioritize by impact.`,
    technical: `You are a technical SEO engineer. Create a technical SEO action plan for: "${task}"\n\nAddress:\n1. Crawlability and indexation issues to check\n2. Core Web Vitals optimization steps\n3. Structured data recommendations\n4. URL and site architecture suggestions\n5. Mobile optimization checklist\n6. Page speed improvements\n\nTone: ${tone}. Include specific implementation steps.`,
  };

  const generate = () => {
    if (!task.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setGenerated(TEMPLATES[category]);
      setLoading(false);
      trackEvent('prompt_generated', { category, tone, task_length: task.length });
    }, 600);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="px-6 py-4 bg-gradient-to-r from-brand-600 to-violet-600 text-white">
        <h2 className="font-display font-bold text-lg">🤖 AI SEO Prompt Generator</h2>
        <p className="text-white/80 text-sm mt-0.5">Describe your SEO task and get a ready-to-use AI prompt</p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-1.5">
            Your SEO Task or Topic
          </label>
          <input
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && generate()}
            placeholder='e.g. "Write a blog post about image compression for web developers"'
            className="w-full px-4 py-3 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-surface-50"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-1.5">
              SEO Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ALL_CATEGORIES.map(cat => {
                const c = PROMPT_CATEGORIES[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all
                      ${category === cat
                        ? `bg-${c.color}-100 border-${c.color}-300 text-${c.color}-800`
                        : 'border-surface-200 text-surface-600 hover:border-surface-300 bg-white'
                      }`}
                  >
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-1.5">
              Tone & Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TONES.map(t => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all capitalize
                    ${tone === t
                      ? 'bg-brand-100 border-brand-300 text-brand-800'
                      : 'border-surface-200 text-surface-600 hover:border-surface-300 bg-white'
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generate}
          disabled={!task.trim() || loading}
          className="w-full btn-primary py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span> Generating your prompt...
            </span>
          ) : (
            '✨ Generate SEO Prompt'
          )}
        </button>

        {generated && (
          <div className="border border-emerald-200 rounded-xl bg-emerald-50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-100 border-b border-emerald-200">
              <span className="text-xs font-semibold text-emerald-800">✅ Your AI SEO Prompt</span>
              <CopyButton text={generated} label="Copy Prompt" />
            </div>
            <pre className="p-4 text-xs text-emerald-900 font-mono leading-relaxed whitespace-pre-wrap">
              {generated}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const FAQS = [
  {
    q: 'What are AI SEO prompts?',
    a: 'AI SEO prompts are carefully engineered instructions given to AI models like ChatGPT, Claude, or Gemini to generate SEO-related content, strategies, and analysis. Instead of open-ended questions, they include specific context, format requirements, and output specifications that consistently produce high-quality, actionable SEO work.',
  },
  {
    q: 'Can ChatGPT really help with SEO?',
    a: 'Yes — when used with well-crafted prompts, ChatGPT and other AI models can dramatically accelerate SEO workflows. They excel at keyword brainstorming, content outline creation, meta tag generation, schema markup, and identifying content gaps. They work best as a force multiplier alongside human judgment and real data from Google Search Console and Ahrefs.',
  },
  {
    q: 'What is the difference between basic and advanced SEO prompts?',
    a: 'Basic prompts ask simple questions ("give me SEO tips"). Advanced prompts specify role (Act as a technical SEO engineer), context (my site is a Next.js tool website), task (audit this specific issue), format (provide as a prioritized checklist), and constraints (under 500 words, focus only on quick wins). The more specific the prompt, the more useful the output.',
  },
  {
    q: 'Are these AI SEO prompts free to use?',
    a: 'Yes — all prompts on this page are completely free to copy and use. You will need your own ChatGPT, Claude, or Gemini account to run them, but the prompts themselves are free with no account or signup required.',
  },
  {
    q: 'How do I get the best results from these SEO prompts?',
    a: 'Replace all placeholder text in [BRACKETS] with your specific information. Add context about your website, target audience, and current SEO situation. For longer tasks, break them into multiple prompts. Always verify AI-generated keyword data against actual tools like Google Keyword Planner or Ahrefs — AI is excellent for ideation but does not have real search volume data.',
  },
  {
    q: 'Can I use these prompts with Claude or Gemini too?',
    a: 'Yes — while these prompts are optimized for ChatGPT, they work well with any capable AI model. Claude (by Anthropic) tends to produce longer, more nuanced responses and handles structured output particularly well. Gemini integrates with Google products which can be useful for Search Console and Analytics-adjacent tasks.',
  },
];

export default function AiSeoPromptsContent() {
  const [activeCategory, setActiveCategory] = useState('keyword');
  const [openFaq, setOpenFaq] = useState(null);

  const activeCat = PROMPT_CATEGORIES[activeCategory];

  return (
    <div className="min-h-screen bg-surface-50">
      <Header />
      <main className="flex-1">

        <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-violet-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span>/</span></li>
                <li><Link href="/ai-prompts" className="hover:text-white transition-colors">AI Prompts</Link></li>
                <li><span>/</span></li>
                <li className="text-white/90">SEO</li>
              </ol>
            </nav>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shrink-0">
                🚀
              </div>
              <div>
                <div className="text-white/70 text-sm font-medium mb-1 uppercase tracking-wider">Free AI Prompt Library</div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  AI SEO Prompts
                  <span className="block text-white/80 text-2xl sm:text-3xl mt-1">
                    Best ChatGPT Prompts for Every SEO Task
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
              A curated library of <strong className="text-white">50+ production-ready AI prompts</strong> for
              keyword research, blog writing, on-page SEO, and technical audits. Copy any prompt,
              paste into ChatGPT, Claude, or Gemini — and get expert-level SEO work in seconds.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#prompt-generator"
                className="inline-flex items-center gap-2 bg-white text-brand-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors">
                ✨ Generate Custom Prompt
              </a>
              <a href="#prompt-library"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/30 transition-colors border border-white/30">
                📚 Browse All Prompts
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
              {[
                { value: '50+',  label: 'Free SEO Prompts' },
                { value: '4',    label: 'SEO Categories' },
                { value: '100%', label: 'Free Forever' },
                { value: '3',    label: 'AI Models Supported' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="prompt-generator" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PromptGenerator />
        </div>

        <div id="prompt-library" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-surface-900 mb-2">
              SEO Prompt Library
            </h2>
            <p className="text-surface-500 max-w-2xl mx-auto">
              Hand-crafted prompts organized by SEO task. Click any prompt to expand it,
              then copy and paste into your AI model of choice.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 p-1 bg-surface-100 rounded-2xl">
            {ALL_CATEGORIES.map(cat => {
              const c = PROMPT_CATEGORIES[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex-1 justify-center
                    ${activeCategory === cat
                      ? 'bg-white shadow-sm text-surface-900'
                      : 'text-surface-500 hover:text-surface-700'
                    }`}
                >
                  <span>{c.icon}</span>
                  <span className="hidden sm:inline">{c.label}</span>
                </button>
              );
            })}
          </div>

          <div className={`p-5 rounded-2xl mb-5 bg-${activeCat.color}-50 border border-${activeCat.color}-200`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeCat.icon}</span>
              <div>
                <h3 className={`font-display font-bold text-lg text-${activeCat.color}-900`}>
                  {activeCat.label} Prompts
                </h3>
                <p className={`text-sm text-${activeCat.color}-700`}>
                  {activeCat.prompts.length} prompts for {activeCat.label.toLowerCase()} tasks
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {activeCat.prompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} color={activeCat.color} />
            ))}
          </div>
        </div>

        <div className="bg-white border-t border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-surface-900 mb-2 text-center">
              Why Use AI for SEO?
            </h2>
            <p className="text-surface-500 text-center mb-10 max-w-2xl mx-auto">
              AI models like ChatGPT, Claude, and Gemini don't replace SEO expertise — they accelerate it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '⚡', title: '10x Faster Keyword Research', desc: 'Generate 50+ keyword ideas with intent classification in under 30 seconds.' },
                { icon: '📝', title: 'Publication-Ready Outlines',  desc: 'Get detailed, SEO-structured outlines with H2/H3 hierarchy and FAQ sections.' },
                { icon: '🔍', title: 'On-Page Audits at Scale',     desc: 'Audit meta tags, title tags, and content gaps for multiple pages simultaneously.' },
                { icon: '🏗️', title: 'Schema Markup in Minutes',   desc: 'Generate complete, validated JSON-LD for any page type without memorizing the spec.' },
                { icon: '📊', title: 'Competitor Analysis',         desc: 'Build systematic competitor content gap analysis tailored to your niche.' },
                { icon: '🔄', title: 'Content Refresh Strategy',    desc: 'Identify exactly what to update in underperforming content to recover rankings.' },
              ].map(b => (
                <div key={b.title} className="flex gap-4 p-5 bg-surface-50 border border-surface-200 rounded-2xl">
                  <span className="text-2xl shrink-0">{b.icon}</span>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display font-bold text-xl text-surface-900 mb-5">
            Free SEO Tools That Work With These Prompts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/tools/meta-tag-generator', icon: '🏷️', label: 'Meta Tag Generator', desc: 'Generate title tags and meta descriptions — then optimize them with the AI prompts above' },
              { href: '/tools/word-counter',        icon: '📝', label: 'Word Counter Online', desc: 'Check content length against SEO targets after writing with AI assistance' },
              { href: '/tools/ai-prompt-generator', icon: '🤖', label: 'AI Prompt Generator', desc: 'Generate custom prompts for any SEO or content creation task' },
              { href: '/tools/character-counter',   icon: '🔢', label: 'Character Counter',   desc: 'Verify meta description length (160 chars) before publishing' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                <span className="text-2xl">{l.icon}</span>
                <div>
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                  <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                <summary
                  className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-600 to-violet-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-3">
              Ready to 10x Your SEO Workflow with AI?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Copy any prompt above, or generate a custom one for your specific SEO task.
              All prompts work with ChatGPT, Claude, and Gemini — completely free.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#prompt-generator"
                className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                ✨ Generate Your Prompt
              </a>
              <Link href="/tools/ai-prompt-generator"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30">
                🤖 Try AI Prompt Generator
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
