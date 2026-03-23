import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import ToolSearch from '../components/ToolSearch';
import AdBanner from '../components/AdBanner';
import { tools, categories, categoryColors, SITE_CONFIG } from '../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: `${SITE_CONFIG.name} — Free Online Tools for Everyone`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
};

// ── Bento grid data ───────────────────────────────────────────
const BENTO_HERO = {
  slug:    'typing-test',
  icon:    '⌨️',
  name:    'Typing Speed Test',
  desc:    'Test your WPM and accuracy in real time. 4 time modes, 3 difficulty levels.',
  vol:     '3.5M searches/mo',
  badge:   'New',
  href:    '/typing-test',
};

const BENTO_TOOLS = [
  { slug: 'compress-image-online',       icon: '🗜️', name: 'Compress Image',       vol: '450k/mo', badge: 'Hot',     href: '/compress-image-online'       },
  { slug: 'qr-code-generator-online',    icon: '📱', name: 'QR Code Generator',    vol: '180k/mo', badge: 'Hot',     href: '/qr-code-generator-online'    },
  { slug: 'json-formatter-online',       icon: '{ }',name: 'JSON Formatter',       vol: '200k/mo', badge: 'Top',     href: '/json-formatter-online'       },
  { slug: 'password-generator-online',   icon: '🔐', name: 'Password Generator',   vol: '150k/mo', badge: 'Hot',     href: '/password-generator-online'   },
  { slug: 'ai-prompt-generator-online',  icon: '🤖', name: 'AI Prompt Generator',  vol: '35k/mo',  badge: 'New',     href: '/ai-prompt-generator-online'  },
  { slug: 'percentage-calculator-online',icon: '📊', name: 'Percentage Calculator',vol: '70k/mo',  badge: 'Popular', href: '/percentage-calculator-online' },
  { slug: 'age-calculator-online',       icon: '🎂', name: 'Age Calculator',       vol: '80k/mo',  badge: 'Top',     href: '/age-calculator-online'       },
  { slug: 'color-picker-online',         icon: '🎨', name: 'Color Picker',         vol: '60k/mo',  badge: 'Top',     href: '/color-picker-online'         },
];

const BENTO_CHIPS = [
  { label: 'Word Counter',       href: '/word-counter-online',          icon: '📝' },
  { label: 'Base64 Encoder',     href: '/base64-encoder-online',        icon: '🔡' },
  { label: 'UUID Generator',     href: '/uuid-generator-online',        icon: '🆔' },
  { label: 'Regex Tester',       href: '/regex-tester-online',          icon: '🔍' },
  { label: 'CSS Minifier',       href: '/css-minifier-online',          icon: '⚡' },
  { label: 'Meta Tag Generator', href: '/meta-tag-generator-online',    icon: '🏷️' },
  { label: 'Timestamp',          href: '/unix-timestamp-converter',     icon: '⏱️' },
  { label: 'Binary Converter',   href: '/binary-to-decimal-converter',  icon: '💻' },
  { label: 'Password Checker',   href: '/password-strength-checker',    icon: '🛡️' },
  { label: 'Resize Image',       href: '/resize-image-online',          icon: '📐' },
];

const BADGE_CLS = {
  Hot:     'bg-rose-500 text-white',
  New:     'bg-emerald-500 text-white',
  Top:     'bg-violet-500 text-white',
  Popular: 'bg-amber-400 text-amber-900',
};

const STATS = [
  { value: `${tools.length}`, label: 'Free Tools'      },
  { value: '50k+',            label: 'Monthly Visitors' },
  { value: '0',               label: 'Signup Required'  },
  { value: '100%',            label: 'Free Forever'     },
];

// ── Homepage ──────────────────────────────────────────────────
export default function HomePage() {
  const toolsByCategory = categories.map(cat => ({
    ...cat,
    tools: tools.filter(t => t.category === cat.id),
  }));

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type':    'WebSite',
            name:        SITE_CONFIG.name,
            url:         SITE_CONFIG.url,
            description: SITE_CONFIG.description,
            potentialAction: {
              '@type':       'SearchAction',
              target:        `${SITE_CONFIG.url}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      <Header />

      <main className="flex-1">

        {/* ══════════════════════════════════════════════════════
            HERO SECTION — untouched, exactly as before
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-surface-900 text-white overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {tools.length} free tools · No sign-up required
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6"
            >
              Free Online Tools<br />
              <span className="gradient-text from-brand-300 to-violet-300 bg-clip-text text-transparent bg-gradient-to-r">
                for Everyone
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Image compressors, JSON formatters, QR generators, and more.
              Everything runs in your browser — fast, private, and free.
            </p>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto">
              <ToolSearch />
              <p className="text-sm text-white/40 mt-3">
                Try: "compress image", "json", "password", "qr code"
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: `${tools.length}+`, label: 'Free Tools'        },
                { value: '0',               label: 'Sign-ups Required'  },
                { value: '100%',            label: 'Browser-Based'      },
                { value: '< 1s',            label: 'Load Time'          },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-3xl text-white">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── END HERO ─────────────────────────────────────── */}


        {/* ══════════════════════════════════════════════════════
            POPULAR TOOLS — BENTO GRID
            Blends seamlessly from hero gradient into white
        ══════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="popular-heading"
          className="relative overflow-hidden"
          style={{
            background:
              'linear-gradient(180deg,#0f172a 0%,#131837 30%,#161c3e 60%,#111628 85%,#0c1022 100%)',
          }}
        >
          {/* Ambient glow — top left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -left-20 w-[420px] h-[420px]"
            style={{ background: 'radial-gradient(circle,rgba(99,102,241,.2) 0%,transparent 70%)' }}
          />
          {/* Ambient glow — bottom right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-12 w-[360px] h-[360px]"
            style={{ background: 'radial-gradient(circle,rgba(139,92,246,.14) 0%,transparent 70%)' }}
          />
          {/* Subtle grid lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">

            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.14em] uppercase text-indigo-300 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  </span>
                  Trending this week
                </span>
                <h2
                  id="popular-heading"
                  className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-2"
                >
                  Popular Free Tools
                </h2>
                <p className="text-white/45 text-base max-w-md leading-relaxed">
                  Used by 50,000+ visitors every month — free, no signup, no limits.
                </p>
              </div>
              <Link
                href="#all-tools"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white bg-white/[.08] hover:bg-white/[.13] border border-white/[.13] hover:border-white/25 px-4 py-2.5 rounded-xl transition-all duration-200"
              >
                Browse all {tools.length} tools
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ── BENTO GRID ─────────────────────────────────── */}
            <div className="grid grid-cols-6 gap-3">

              {/* ── HERO CELL (col-span-3, row-span-2) ── */}
              <Link
                href={BENTO_HERO.href}
                className="group col-span-6 sm:col-span-3 row-span-2 relative flex flex-col justify-end rounded-2xl p-6 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,.35)]"
                style={{
                  background: 'linear-gradient(135deg,rgba(79,70,229,.55) 0%,rgba(109,40,217,.5) 100%)',
                  border: '1px solid rgba(167,139,250,.35)',
                  minHeight: '220px',
                }}
              >
                {/* Top shimmer line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(196,181,253,.9),transparent)' }}
                />
                {/* Background glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(circle at 30% 50%,rgba(99,102,241,.25) 0%,transparent 60%)' }}
                />

                <div className="relative">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {BENTO_HERO.icon}
                  </div>
                  {BENTO_HERO.badge && (
                    <span className={`inline-block text-[10px] font-black tracking-wide px-2 py-0.5 rounded-full mb-3 ${BADGE_CLS[BENTO_HERO.badge]}`}>
                      ✦ {BENTO_HERO.badge}
                    </span>
                  )}
                  <div className="font-display font-extrabold text-xl text-white mb-2 leading-tight">
                    {BENTO_HERO.name}
                  </div>
                  <div className="text-sm text-white/55 leading-relaxed mb-4 max-w-xs">
                    {BENTO_HERO.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 font-medium">{BENTO_HERO.vol}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5 rounded-full transition-colors">
                      Try free →
                    </span>
                  </div>
                </div>
              </Link>

              {/* ── 8 TOOL CELLS ── */}
              {BENTO_TOOLS.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group col-span-3 sm:col-span-2 lg:col-span-1 relative flex flex-col rounded-2xl p-4 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(99,102,241,.2)]"
                  style={{
                    background: 'rgba(255,255,255,.055)',
                    border: '1px solid rgba(255,255,255,.09)',
                  }}
                >
                  {/* Top shimmer */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg,transparent,rgba(167,139,250,.7),transparent)' }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,.035)', border: '1px solid rgba(255,255,255,.18)' }}
                  />

                  <div className="relative">
                    {/* Badge */}
                    {tool.badge && (
                      <span className={`inline-block text-[9px] font-black tracking-wide px-1.5 py-0.5 rounded-full mb-2 ${BADGE_CLS[tool.badge]}`}>
                        {tool.badge}
                      </span>
                    )}
                    {/* Icon */}
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                      {tool.icon}
                    </div>
                    {/* Name */}
                    <div className="font-semibold text-[13px] text-white group-hover:text-white leading-snug mb-2 transition-colors">
                      {tool.name}
                    </div>
                    {/* Volume */}
                    <div className="flex items-center gap-1 text-[10px] text-white/30 font-medium mt-auto">
                      <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                      {tool.vol}
                    </div>
                  </div>
                </Link>
              ))}

              {/* ── STATS CELL (col-span-6 sm:col-span-2) ── */}
              <div
                className="col-span-3 sm:col-span-2 grid grid-cols-2 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,.08)' }}
              >
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex flex-col justify-center px-4 py-4"
                    style={{
                      background: 'rgba(255,255,255,.035)',
                      borderRight:  i % 2 === 0 ? '1px solid rgba(255,255,255,.07)' : 'none',
                      borderBottom: i < 2       ? '1px solid rgba(255,255,255,.07)' : 'none',
                    }}
                  >
                    <div className="font-display font-black text-2xl text-white leading-none">{s.value}</div>
                    <div className="text-[10px] text-white/35 font-medium mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* ── BROWSE ALL CELL ── */}
              <Link
                href="#all-tools"
                className="group col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(99,102,241,.35)]"
                style={{
                  background: 'linear-gradient(135deg,rgba(99,102,241,.45) 0%,rgba(139,92,246,.45) 100%)',
                  border: '1px solid rgba(167,139,250,.35)',
                }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">→</div>
                <div className="font-bold text-sm text-white leading-snug">All Tools</div>
                <div className="text-[10px] text-white/55 mt-0.5">{tools.length} free</div>
              </Link>

              {/* ── PEOPLE ALSO USE CHIPS (col-span-6) ── */}
              <div
                className="col-span-6 rounded-2xl px-5 py-4"
                style={{
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.07)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-3 h-3 text-white/25 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-[.14em] text-white/30">
                    People also use
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BENTO_CHIPS.map(chip => (
                    <Link
                      key={chip.href}
                      href={chip.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/50 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,.06)',
                        border: '1px solid rgba(255,255,255,.09)',
                      }}
                    >
                      <span className="text-sm leading-none">{chip.icon}</span>
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
            {/* ── END BENTO GRID ── */}

          </div>

          {/* Bottom fade into white */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
            style={{ background: 'linear-gradient(0deg,#ffffff 0%,transparent 100%)' }}
          />
        </section>
        {/* ══ END POPULAR TOOLS ════════════════════════════ */}


        {/* ── TOP BANNER AD ────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        {/* ── CATEGORIES SECTION ───────────────────────────── */}
        <section id="categories" className="py-16 bg-white" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="categories-heading" className="section-title text-3xl mb-3">
                Browse by Category
              </h2>
              <p className="text-surface-500 text-lg">
                Find exactly the tool you need
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map(cat => {
                const colors = categoryColors[cat.id];
                const count  = tools.filter(t => t.category === cat.id).length;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200
                      ${colors.border} ${colors.bg} hover:shadow-md hover:-translate-y-0.5`}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {cat.icon}
                    </span>
                    <div className="text-center">
                      <div className={`font-display font-semibold text-sm ${colors.text}`}>{cat.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{count} tools</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TOOLS BY CATEGORY ────────────────────────────── */}
        <section id="all-tools" className="py-16 bg-surface-50" aria-labelledby="tools-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="tools-heading" className="section-title text-3xl mb-12 text-center">
              All Free Tools
            </h2>

            <div className="space-y-16">
              {toolsByCategory.filter(cat => cat.tools.length > 0).map((cat, catIdx) => {
                const colors = categoryColors[cat.id];
                return (
                  <div key={cat.id} id={cat.id}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.border} border`}>
                        <span className="text-xl">{cat.icon}</span>
                        <h3 className={`font-display font-bold text-lg ${colors.text}`}>{cat.label}</h3>
                      </div>
                      <div className="flex-1 h-px bg-surface-200" />
                      <span className="text-sm text-surface-400">{cat.tools.length} tools</span>
                    </div>
                    <p className="text-surface-500 mb-6 -mt-2">{cat.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {cat.tools.map(tool => (
                        <ToolCard key={tool.slug} tool={tool} />
                      ))}
                    </div>

                    {catIdx === 1 && (
                      <div className="mt-10">
                        <AdBanner variant="content" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TRUST SECTION ────────────────────────────────── */}
        <section className="py-16 bg-white border-t border-surface-100" aria-labelledby="trust-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="trust-heading" className="section-title text-2xl mb-12">
              Why Use ToolStackHub?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: '🔒', title: '100% Private',     desc: 'All tools run in your browser. Your data never touches our servers.' },
                { icon: '⚡', title: 'Lightning Fast',   desc: 'Static pages load in under a second, anywhere in the world.'         },
                { icon: '🆓', title: 'Always Free',      desc: 'No subscriptions, no paywalls, no hidden fees. Ever.'                },
              ].map(item => (
                <div key={item.title} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}