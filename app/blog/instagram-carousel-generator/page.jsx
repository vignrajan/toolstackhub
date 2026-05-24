import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'How to Create Instagram Carousels That Stop the Scroll',
  description: 'Design export-ready Instagram carousels with proper slide architecture, color systems, and typography pairings. A complete system used by top creators.',
  keywords: [
    'instagram carousel generator', 'instagram carousel design', 'create instagram carousel',
    'carousel design system', 'instagram carousel template', 'instagram post design',
    'social media design system', 'instagram carousel tool', 'carousel slide design',
    'instagram content design 2026',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/instagram-carousel-generator` },
  openGraph: {
    title: 'How to Create Instagram Carousels That Stop the Scroll',
    description: 'A complete system for building on-brand, export-ready Instagram carousels — color system, typography, slide architecture, and export workflow.',
    url: `${SITE_CONFIG.url}/blog/instagram-carousel-generator`,
    type: 'article',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Instagram Carousels That Stop the Scroll',
    description: 'Design export-ready Instagram carousels with proper slide architecture, color systems, and typography pairings. A complete system used by top creators.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const FAQS = [
  {
    q: 'What is an Instagram carousel generator?',
    a: 'An Instagram carousel generator is a tool or system that helps you design, preview, and export multi-slide Instagram posts. Instead of building each slide manually in Canva or Figma, a carousel generator handles the design system — color palette, typography, progress bars, and slide sequence — and outputs individual PNG images at Instagram\'s native 1080×1350px resolution.',
  },
  {
    q: 'What is the best aspect ratio for Instagram carousels?',
    a: 'The optimal aspect ratio for Instagram carousels in 2026 is 4:5 (portrait), which means 1080×1350px. This ratio takes up the maximum vertical space in the feed without being cropped. Square (1:1) is acceptable but gives you less screen real estate. Stories and Reels use 9:16 (vertical).',
  },
  {
    q: 'How many slides should an Instagram carousel have?',
    a: '7 slides is the sweet spot for engagement. It\'s enough to tell a complete story (hook → problem → solution → features → depth → how-to → CTA) without losing the audience. Instagram supports up to 10 slides, but most high-performing carousels stay between 5 and 9. Always end on a dedicated CTA slide with no swipe arrow.',
  },
  {
    q: 'What makes a carousel slide design brand-consistent?',
    a: 'Brand consistency comes from a single design system: one primary color that generates your full palette, one heading font paired with one body font, consistent spacing (36px content padding, 52px bottom clearance for the progress bar), and repeating component patterns like tag labels, feature lists, and numbered steps used identically across every slide.',
  },
  {
    q: 'How do I export Instagram carousel slides as high-resolution PNGs?',
    a: 'The most reliable method is to build the carousel in HTML at 420px wide, then use Playwright (headless Chrome) with device_scale_factor=2.57 to render at 1080px output without reflowing the layout. Each slide is captured individually by translating the carousel track. This gives you true 1080×1350 PNGs with crisp text and correct spacing.',
  },
  {
    q: 'What fonts work best for Instagram carousels?',
    a: 'The best-performing font pairings for carousels are: Playfair Display + DM Sans (editorial/premium), Plus Jakarta Sans bold + regular (modern/clean), Lora + Nunito Sans (warm/approachable), and Space Grotesk (technical). Use heading fonts at 28–34px with -0.3 to -0.5px letter-spacing for visual impact, and body fonts at 14px for readability.',
  },
];

const TOC = [
  { id: 'problem',      label: 'Why Most Carousel Designs Fail'            },
  { id: 'system',       label: 'The Design System Approach'                },
  { id: 'color',        label: 'Building a 6-Token Color Palette'          },
  { id: 'typography',   label: 'Typography That Travels Across Slides'     },
  { id: 'architecture', label: 'The 7-Slide Narrative Arc'                 },
  { id: 'components',   label: 'Reusable Components Every Carousel Needs'  },
  { id: 'export',       label: 'Exporting at Instagram Resolution'         },
  { id: 'usecases',     label: 'Who This System Is For'                   },
  { id: 'faq',          label: 'FAQ'                                        },
];

export default function InstagramCarouselBlog() {
  const publishDate = '2026-04-11';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Create Instagram Carousels That Stop the Scroll (2026 Designer\'s Playbook)',
        description: 'A complete system for building on-brand, export-ready Instagram carousels with color systems, typography pairings, and a 7-slide narrative arc.',
        url: `${SITE_CONFIG.url}/blog/instagram-carousel-generator`,
        datePublished: publishDate,
        dateModified: publishDate,
        author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',  item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Blog',  item: `${SITE_CONFIG.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Instagram Carousel Generator', item: `${SITE_CONFIG.url}/blog/instagram-carousel-generator` },
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
                <li className="text-surface-600">Instagram Carousel Design</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">Design Systems</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">Social Media</span>
              <span className="text-xs text-surface-400">April 11, 2026 · 9 min read</span>
            </div>

            {/* Featured snippet */}
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-violet-600 mb-2">📌 Instagram Carousel Best Practices — 2026</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Ideal Slide Count',  val: '7 slides'          },
                  { label: 'Best Aspect Ratio',  val: '4:5 (1080×1350px)' },
                  { label: 'Export Resolution',  val: '1080×1350px PNG'   },
                  { label: 'Color Tokens',       val: '6-token palette'    },
                ].map(f => (
                  <div key={f.label} className="bg-white rounded-xl p-3 border border-violet-100 text-center">
                    <div className="text-xs text-surface-500 mb-0.5">{f.label}</div>
                    <div className="font-black text-violet-700 text-sm">{f.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-950 mb-5 leading-tight tracking-tight">
              How to Create Instagram Carousels That Stop the Scroll —
              <span className="text-violet-600"> The 2026 Designer's Playbook</span>
            </h1>

            <div className="space-y-3 text-surface-600 text-lg leading-relaxed mb-6">
              <p>
                Most Instagram carousels look like PowerPoint decks from 2014. Mismatched fonts, random colors, no visual rhythm between slides. They get a swipe — the wrong kind.
              </p>
              <p>
                The carousels that <strong className="text-surface-800">stop the scroll</strong> share one thing: a design system. Not a template — a system. A set of rules that makes every slide look intentional, every swipe feel smooth, and every pixel work toward conversion.
              </p>
              <p>
                This guide breaks down exactly how to build that system — from a single brand color to export-ready 1080px PNGs. Whether you're a solo creator, a SaaS marketer, or an agency designing at scale, this is the framework that makes carousel design repeatable and fast.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
              <div className="w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-sm">T</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">ToolStackHub Design Team</div>
                <div className="text-xs text-surface-400">April 11, 2026 · 9 min read</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* TOC */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-6">
                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">In This Guide</div>
                  <ol className="space-y-1.5">
                    {TOC.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="flex gap-2 text-xs text-surface-600 hover:text-violet-700 leading-snug transition-colors">
                          <span className="text-surface-300 shrink-0 font-mono">{String(i+1).padStart(2,'0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 order-1 lg:order-2 space-y-12">

              {/* PROBLEM */}
              <section id="problem">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Why Most Carousel Designs Fail Before the Second Swipe</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Open any brand's Instagram feed and you'll see the same pattern: slide one looks polished. Then the second slide uses a slightly different shade of blue. The third has a different font weight. By slide four, the visual coherence has collapsed entirely.
                  </p>
                  <p>
                    This happens because most creators build carousels <strong className="text-surface-800">slide by slide</strong>, not system by system. They make decisions in isolation — this heading color, that background — without a framework that keeps everything aligned across seven swipes.
                  </p>

                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 my-5">
                    <div className="font-bold text-rose-900 mb-3">The most common carousel mistakes:</div>
                    <div className="space-y-2">
                      {[
                        'Using a different color for every slide (inconsistent brand recall)',
                        'No visual indicator telling users how many slides remain',
                        'Last slide looks identical to slide three — no clear end signal',
                        'Text running into the bottom edge, no breathing room',
                        'Exporting at 72 DPI from a browser — looks blurry on Retina displays',
                        'Starting with a description instead of a hook — the first slide is your entire job interview',
                      ].map(m => (
                        <div key={m} className="flex items-start gap-2 text-sm text-rose-800">
                          <span className="text-rose-500 shrink-0 font-bold mt-0.5">×</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    The fix isn't a better template. It's a design system — one that makes all these decisions upfront so you never have to make them again mid-carousel.
                  </p>
                </div>
              </section>

              {/* SYSTEM */}
              <section id="system">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The Design System Approach to Carousel Creation</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    A design system for Instagram carousels works exactly like a UI design system for a product: you define the rules once, then apply them consistently everywhere. Seven slides, ten carousels, fifty posts — the brand always looks the same.
                  </p>
                  <p>
                    The system has four components that need to be locked in before you write a single word of slide copy:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                    {[
                      { n:'①', title:'Color Palette',   icon:'🎨', desc:'6 tokens derived from one primary color. Every background, text, border, and accent is named and fixed.' },
                      { n:'②', title:'Typography',      icon:'🔤', desc:'One heading font, one body font. Fixed size scale. Never deviated from across any slide.' },
                      { n:'③', title:'Slide Architecture', icon:'📐', desc:'A 7-slide narrative arc with defined background alternation, content padding rules, and mandatory UI elements.' },
                      { n:'④', title:'Reusable Components', icon:'🧩', desc:'Tag pills, feature lists, numbered steps, CTA buttons — all built once and reused identically.' },
                    ].map(c => (
                      <div key={c.n} className="bg-white border border-surface-200 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl font-black text-violet-600">{c.n}</span>
                          <span className="text-lg">{c.icon}</span>
                          <h3 className="font-bold text-surface-900 text-sm">{c.title}</h3>
                        </div>
                        <p className="text-xs text-surface-600 leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p>
                    When these four components are defined, designing a carousel becomes an assembly process — not a creative process from scratch every time. That's what makes it scalable.
                  </p>
                </div>
              </section>

              {/* COLOR */}
              <section id="color">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Building a 6-Token Color Palette from One Brand Color</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    The most important constraint in a carousel design system is this: <strong className="text-surface-800">every color must be derived from one primary</strong>. Not chosen freely — derived algorithmically. This ensures everything stays coherent even when you're alternating between light and dark slide backgrounds.
                  </p>

                  <div className="bg-surface-900 rounded-2xl p-5 my-5 font-mono text-sm">
                    <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-4">The 6-Token Color System</div>
                    <div className="space-y-2">
                      {[
                        { token:'BRAND_PRIMARY', desc:'Your main color — progress bar fill, icons, tag text, active states', example:'#6B46C1' },
                        { token:'BRAND_LIGHT',   desc:'Primary lightened ~20% — tags on dark slides, pill backgrounds', example:'#9F7AEA' },
                        { token:'BRAND_DARK',    desc:'Primary darkened ~30% — gradient anchor, CTA text color', example:'#44337A' },
                        { token:'LIGHT_BG',      desc:'Tinted off-white complementing the primary temperature', example:'#F7F5FF' },
                        { token:'LIGHT_BORDER',  desc:'One shade darker than LIGHT_BG — dividers on light slides', example:'#E9E4FA' },
                        { token:'DARK_BG',       desc:'Near-black with brand temperature tint — dark slide backgrounds', example:'#130E1A' },
                      ].map(t => (
                        <div key={t.token} className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{background: t.example}} />
                          <div>
                            <span className="text-violet-400 font-bold">{t.token}</span>
                            <span className="text-surface-400"> — {t.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 text-surface-400 text-xs">
                      Brand gradient: <span className="text-violet-400">linear-gradient(165deg, BRAND_DARK 0%, BRAND_PRIMARY 50%, BRAND_LIGHT 100%)</span>
                    </div>
                  </div>

                  <p>
                    The temperature rule matters: if your brand is warm (orange, amber, red), LIGHT_BG should be a warm cream. If it's cool (blue, violet, teal), use a cool off-white. DARK_BG follows the same logic — warm brands get <code className="text-violet-700 bg-violet-50 px-1 rounded text-sm">#1A1918</code>, cool brands get <code className="text-violet-700 bg-violet-50 px-1 rounded text-sm">#0F172A</code>.
                  </p>
                  <p>
                    This is what separates a professional carousel from a Canva default — the backgrounds <em>feel</em> like the brand, not just the foreground elements.
                  </p>
                </div>
              </section>

              {/* TYPOGRAPHY */}
              <section id="typography">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Typography That Travels Across Slides Without Breaking</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    Font choice on Instagram carousels is high-stakes. The heading font is your brand personality — it's what users see for a fraction of a second when they pause. The body font is your credibility — it makes your content readable at scroll speed.
                  </p>
                  <p>
                    Always use exactly two fonts. One display/heading font, one body font. Never three.
                  </p>

                  {/* Font pairing table */}
                  <div className="overflow-x-auto rounded-2xl border border-surface-200 my-5">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr style={{background:'#0f172a'}}>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Brand Feel</th>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold">Heading Font</th>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Body Font</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feel:'Editorial / Premium',   head:'Playfair Display',      body:'DM Sans'            },
                          { feel:'Modern / Clean',        head:'Plus Jakarta Sans 700',  body:'Plus Jakarta Sans 400' },
                          { feel:'Warm / Approachable',   head:'Lora',                  body:'Nunito Sans'        },
                          { feel:'Technical / Sharp',     head:'Space Grotesk',         body:'Space Grotesk'      },
                          { feel:'Bold / Expressive',     head:'Fraunces',              body:'Outfit'             },
                          { feel:'Classic / Trustworthy', head:'Libre Baskerville',     body:'Work Sans'          },
                          { feel:'Rounded / Friendly',    head:'Bricolage Grotesque',   body:'Bricolage Grotesque'},
                        ].map((r, i) => (
                          <tr key={r.feel} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-3 font-semibold text-surface-900">{r.feel}</td>
                            <td className="px-4 py-3 text-violet-700 font-medium">{r.head}</td>
                            <td className="px-4 py-3 text-surface-600">{r.body}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    The size scale is fixed regardless of brand: headings at <strong className="text-surface-800">28–34px, weight 600, -0.4px letter-spacing</strong>. Body at 14px, weight 400. Tags at 10px, uppercase, 2px letter-spacing. These aren't suggestions — deviating from them breaks visual rhythm.
                  </p>
                </div>
              </section>

              {/* NARRATIVE ARC */}
              <section id="architecture">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The 7-Slide Narrative Arc That Drives Saves and Shares</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    The sequence of your slides is not a creative choice — it's a conversion architecture. Each slide has a job. The job of slide one is to stop the scroll. The job of slide two is to make the problem feel real. The job of slide seven is to convert.
                  </p>

                  <div className="space-y-3 my-5">
                    {[
                      { n:'01', type:'Hero', bg:'Light BG',       purpose:'Hook — bold statement + logo. This slide competes with everything in the feed. Lead with a value proposition, not a description.' },
                      { n:'02', type:'Problem', bg:'Dark BG',     purpose:'Pain point — what\'s broken, frustrating, or outdated. Dark background creates contrast and signals a shift in energy.' },
                      { n:'03', type:'Solution', bg:'Gradient',   purpose:'The answer — introduce your concept, product, or framework. The brand gradient signals this is the turning point.' },
                      { n:'04', type:'Features', bg:'Light BG',   purpose:'What you get — feature list with icons. Back to light for breathing room after the gradient intensity.' },
                      { n:'05', type:'Details', bg:'Dark BG',     purpose:'Depth — specs, differentiators, customization options. Dark background signals we\'re going deeper.' },
                      { n:'06', type:'How-To', bg:'Light BG',     purpose:'Steps — numbered workflow. How to get started. Light background for easy reading.' },
                      { n:'07', type:'CTA', bg:'Gradient',        purpose:'Call to action — logo, tagline, action button. No swipe arrow. Full progress bar. The visual signals "this is the end."' },
                    ].map(s => (
                      <div key={s.n} className="flex items-start gap-4 p-4 bg-white border border-surface-200 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-xs shrink-0">{s.n}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-surface-900 text-sm">{s.type}</span>
                            <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full">{s.bg}</span>
                          </div>
                          <p className="text-xs text-surface-600 leading-relaxed">{s.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p>
                    The light/dark alternation isn't aesthetic — it's psychological. It creates visual rhythm that keeps the eye engaged across multiple swipes. The gradient slides (3 and 7) act as punctuation marks — they signal a shift in the story.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
                    <strong>The first slide rule:</strong> Lead with a value proposition or bold claim — never a description. "5 things you didn't know about X" beats "A guide to X" every time. Visual proof (a screenshot, a result, a before/after) in slide one immediately validates the hook.
                  </div>
                </div>
              </section>

              {/* COMPONENTS */}
              <section id="components">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The 7 Reusable Components Every Carousel Needs</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    A design system isn't just colors and fonts — it's a component library. These are the building blocks you define once and reuse across every slide, every carousel, every brand.
                  </p>

                  <div className="space-y-4 my-5">
                    {[
                      {
                        name:'Progress Bar',
                        why:'The single most important UX element on a carousel. It tells users where they are and how much is left — which directly reduces abandonment. Place it at the absolute bottom of every slide, 3px tall, with a fill that represents slide position.',
                        rule:'Light slides: rgba(0,0,0,0.08) track, brand primary fill. Dark slides: rgba(255,255,255,0.12) track, white fill. Counter beside bar: "1/7" format.',
                      },
                      {
                        name:'Swipe Arrow',
                        why:'A subtle chevron on the right edge tells users there\'s more. Critically, it disappears on the last slide — the absence of the arrow is itself a design element signalling the end.',
                        rule:'Remove on slide 7. Adapts opacity to match slide background. Never positioned over content.',
                      },
                      {
                        name:'Tag / Category Label',
                        why:'10px uppercase labels above headings give context instantly. They work like section headers in a long article — they orient the reader before they read a word of body copy.',
                        rule:'BRAND_PRIMARY on light slides. BRAND_LIGHT on dark slides. rgba(255,255,255,0.6) on gradient slides.',
                      },
                      {
                        name:'Feature List Row',
                        why:'Icon + label + description, separated by a bottom border. The most scannable format for benefit communication — Instagram users scan, they don\'t read.',
                        rule:'Standard padding: 10px top/bottom. Icon at 15px, brand primary color. Label at 14px/600, body copy at 12px.',
                      },
                      {
                        name:'Numbered Steps',
                        why:'The display-font large number creates visual anchoring. Users\'s eyes go to the biggest element first — making the step number the entry point into each row.',
                        rule:'26px, weight 300, heading font. The lightness contrasts with the 600-weight label. Always left-aligned.',
                      },
                      {
                        name:'Prompt / Quote Box',
                        why:'Semi-transparent boxes create depth on gradient/dark slides without requiring a separate background asset. Use for example inputs, testimonials, or key stats.',
                        rule:'rgba(0,0,0,0.15) background, 12px border-radius, 1px border at rgba(255,255,255,0.08).',
                      },
                      {
                        name:'CTA Button',
                        why:'The last slide\'s button must look clickable even though it\'s a static image. The LIGHT_BG background + BRAND_DARK text creates a high-contrast pill that reads as interactive.',
                        rule:'LIGHT_BG background, BRAND_DARK text, 28px border-radius, 12px 28px padding. Only on slide 7.',
                      },
                    ].map((c, i) => (
                      <div key={c.name} className="border border-surface-200 rounded-2xl overflow-hidden">
                        <div className="flex items-center gap-3 bg-surface-50 px-5 py-3">
                          <div className="w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-black flex items-center justify-center shrink-0">{i+1}</div>
                          <h3 className="font-bold text-surface-900">{c.name}</h3>
                        </div>
                        <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-1">Why it matters</div>
                            <p className="text-xs text-surface-600 leading-relaxed">{c.why}</p>
                          </div>
                          <div className="bg-violet-50 rounded-xl p-3">
                            <div className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-1">Implementation rule</div>
                            <p className="text-xs text-violet-900 leading-relaxed">{c.rule}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* EXPORT */}
              <section id="export">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Exporting at Instagram Resolution — Without Breaking Your Layout</h2>

                <div className="space-y-4 text-surface-600 leading-relaxed">
                  <p>
                    This is where most technical implementations fail. Instagram needs 1080×1350px PNG files. Your HTML carousel is 420px wide. The instinct is to set the export viewport to 1080px — and that's exactly wrong.
                  </p>
                  <p>
                    Setting the viewport to 1080px reflows the layout. Fonts get bigger. Spacing breaks. Elements that looked balanced at 420px look like a beginner's first Canva template at 1080px.
                  </p>

                  <div className="bg-surface-900 rounded-2xl p-5 my-5">
                    <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-3">The correct export approach</div>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="text-white">Keep viewport at <span className="text-violet-400">420×525px</span> (the design width)</div>
                      <div className="text-white">Set <span className="text-violet-400">device_scale_factor = 1080/420 = 2.571</span></div>
                      <div className="text-white">The browser renders at high DPI → <span className="text-emerald-400">1080px output, 420px layout</span></div>
                      <div className="text-surface-400 text-xs border-t border-white/10 pt-3 mt-2">
                        Fonts, spacing, and element positions stay exactly as they appeared in your HTML preview. Only the pixel density increases.
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-surface-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr style={{background:'#0f172a'}}>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Common Mistake</th>
                          <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tr-2xl">What Goes Wrong</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { mistake:'Setting viewport to 1080×1350px',         result:'Layout reflows — fonts become tiny, spacing collapses' },
                          { mistake:'Using shell scripts to generate HTML',      result:'$ signs and numbers get interpolated, HTML breaks' },
                          { mistake:'Not waiting for fonts to load',            result:'Headings render in system fallback fonts in export' },
                          { mistake:'Not hiding Instagram frame UI before export', result:'Export includes the header, dots, and caption area' },
                          { mistake:'Not embedding images as base64',           result:'External image URLs fail in headless browser context' },
                        ].map((r, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                            <td className="px-4 py-3 text-rose-700 font-medium text-xs">{r.mistake}</td>
                            <td className="px-4 py-3 text-surface-600 text-xs">{r.result}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    The export tool of choice here is <strong className="text-surface-800">Playwright</strong> (headless Chromium). It handles Google Fonts loading, device pixel ratios, and per-slide navigation via JavaScript evaluation. Always wait 3 seconds after page load for fonts — skipping this is the most common reason exported carousels look wrong.
                  </p>
                </div>
              </section>

              {/* USE CASES */}
              <section id="usecases">
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Who This System Is Built For</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon:'🚀', title:'SaaS Founders & Product Teams',
                      desc:'Launch announcements, feature reveals, and changelogs that look as polished as your product. The system means your design intern and your CEO produce the same quality output.',
                    },
                    {
                      icon:'✍️', title:'Content Creators & Educators',
                      desc:'"How-to" carousels, numbered frameworks, and thought leadership threads. The 7-slide arc maps directly to the teach-prove-CTA content structure that drives saves.',
                    },
                    {
                      icon:'🏢', title:'Marketing Agencies',
                      desc:'Onboard a new client, derive their palette from a single hex code, and produce a full carousel in one session. The system is the repeatable process that makes agency margins work.',
                    },
                    {
                      icon:'🛍️', title:'E-commerce Brands',
                      desc:'Product story carousels, collection reveals, and social proof compilations. The light/dark alternation showcases products cleanly while the gradient slide drives the purchase CTA.',
                    },
                    {
                      icon:'💼', title:'Freelance Designers',
                      desc:'Stop rebuilding from scratch for every client. The 6-token color system and component library let you deliver a custom-feeling carousel in half the time.',
                    },
                    {
                      icon:'🤖', title:'AI-Augmented Teams',
                      desc:'The system is designed to work with generative AI for copy and an HTML/CSS render pipeline for output. It\'s the bridge between LLM output and Instagram-ready assets.',
                    },
                  ].map(uc => (
                    <div key={uc.title} className="bg-white border border-surface-200 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{uc.icon}</span>
                        <h3 className="font-bold text-surface-900 text-sm">{uc.title}</h3>
                      </div>
                      <p className="text-xs text-surface-600 leading-relaxed">{uc.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONCLUSION + CTA */}
              <section>
                <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The System vs. The Template</h2>
                <div className="space-y-4 text-surface-600 leading-relaxed mb-6">
                  <p>
                    Templates give you one carousel that looks good once. Systems give you infinite carousels that look consistently good.
                  </p>
                  <p>
                    The difference is upfront investment. Defining your 6-token palette, locking your font pairing, and building your component library takes time the first time. But from that point, every carousel you create is assembly — not design.
                  </p>
                  <p>
                    That's the competitive advantage. While everyone else is agonising over whether to use #4A90E2 or #4B91E3 on slide four, you're already posting.
                  </p>
                </div>

                <div className="bg-violet-600 rounded-2xl p-7 text-white">
                  <h2 className="font-display font-bold text-2xl mb-3" style={{color:'#ffffff'}}>Build Your First System-Designed Carousel</h2>
                  <p className="text-sm leading-relaxed mb-5" style={{color:'#c4b5fd'}}>
                    Start with your primary brand color. Derive the 6 tokens. Pick a font pairing. Map your content to the 7-slide arc. The system does the rest.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/ai-tools" className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors text-sm">
                      🎨 Explore AI Tools →
                    </Link>
                    <Link href="/blog" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20 hover:bg-white/10" style={{color:'#ffffff'}}>
                      📚 More Design Guides →
                    </Link>
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

              {/* RELATED */}
              <section>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Tools & Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href:'/ai-tools',                            icon:'🤖', label:'AI Tools Hub',                  desc:'Find the right AI tool for content, design, and productivity.' },
                    { href:'/ai-tools/claude',                     icon:'🧠', label:'Claude Review 2026',             desc:'How to use Claude for carousel copy and content frameworks.' },
                    { href:'/blog/claude-prompt-techniques',       icon:'💬', label:'Claude Prompt Techniques',       desc:'10 advanced techniques for better AI-generated content.' },
                    { href:'/blog/indieappcircle-review',          icon:'🔄', label:'IndieAppCircle Review',          desc:'Get early feedback on your creator tools from real developers.' },
                  ].map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                      <span className="text-xl">{l.icon}</span>
                      <div>
                        <div className="font-semibold text-surface-800 group-hover:text-violet-700 text-sm">{l.label}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}