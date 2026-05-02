import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Garry — Developer, Builder & Author at ToolStackHub',
  description: 'Meet Garry, the developer and author behind ToolStackHub. Building free, browser-based tools for developers, designers, and Indian professionals.',
  keywords: ['garry toolstackhub', 'toolstackhub author', 'toolstackhub developer', 'indian tools developer'],
  alternates: { canonical: 'https://www.toolstackhub.in/about/garry' },
  openGraph: {
    title: 'Garry — Developer, Builder & Author at ToolStackHub',
    description: 'Full-stack developer building 50+ free browser-based tools for Indian professionals and developers. No logins. No uploads. No nonsense.',
    url: 'https://www.toolstackhub.in/about/garry',
    type: 'profile',
    siteName: SITE_CONFIG.name,
  },
};

// ── UPDATE THESE — replace null with your real URLs ──────────
const GITHUB_URL   = 'https://github.com/vignrajan';   // already known from repo
const LINKEDIN_URL = null;  // e.g. 'https://linkedin.com/in/yourhandle'
const TWITTER_URL  = null;  // e.g. 'https://x.com/yourhandle'

const SOCIAL_LINKS = [
  GITHUB_URL && {
    label: 'GitHub',
    href: GITHUB_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: 'text-surface-400 hover:text-white',
  },
  LINKEDIN_URL && {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'text-blue-400 hover:text-blue-300',
  },
  TWITTER_URL && {
    label: 'X / Twitter',
    href: TWITTER_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'text-surface-400 hover:text-white',
  },
].filter(Boolean);

const EXPERTISE = [
  { icon:'💻', title:'Web Development',          tags:['Next.js 14','React','TypeScript','Tailwind CSS','Node.js','App Router'] },
  { icon:'💰', title:'Indian Finance Tools',      tags:['Income Tax','GST','PPF','HRA','EMI','Salary Calculators','Professional Tax'] },
  { icon:'🔍', title:'SEO & Content',             tags:['Technical SEO','Schema Markup','Programmatic SEO','E-E-A-T','Content Strategy'] },
  { icon:'🛡️', title:'Privacy-First Architecture',tags:['Browser-side processing','Zero uploads','No auth required','localStorage only'] },
  { icon:'🤖', title:'AI & Prompt Engineering',   tags:['Claude','ChatGPT','Prompt techniques','Token optimization','AI tool reviews'] },
  { icon:'🧰', title:'Developer Utilities',        tags:['JSON tools','Base64','Regex','UUID','Text processing','QR codes'] },
];

const FEATURED_TOOLS = [
  { emoji:'🏦',  name:'PPF Calculator',              href:'/ppf-calculator'               },
  { emoji:'🏠',  name:'HRA Exemption Calculator',    href:'/hra-calculator'               },
  { emoji:'💰',  name:'Salary Calculator',           href:'/salary-calculator'            },
  { emoji:'📊',  name:'GST Calculator',              href:'/gst-calculator'               },
  { emoji:'🧾',  name:'Invoice Generator',           href:'/invoice-generator'            },
  { emoji:'{ }', name:'JSON Formatter',              href:'/json-formatter-online'        },
  { emoji:'🔁',  name:'Text Repeater',               href:'/text-repeater'                },
  { emoji:'🗜️', name:'Image Compressor',            href:'/compress-image-online'        },
  { emoji:'⌨️',  name:'Typing Speed Test',           href:'/typing-test'                  },
  { emoji:'⚖️',  name:'Professional Tax Calculator', href:'/professional-tax-calculator'  },
];

const RECENT_ARTICLES = [
  { title:'How to Calculate HRA Exemption FY 2026-27 — New 8 Metro Cities Rule',          date:'Apr 11, 2026', category:'Income Tax', href:'/blog/how-to-calculate-hra-exemption-fy-2026-27'   },
  { title:'Old vs New Tax Regime for 15 LPA Salary — FY 2026-27 (Exact Numbers)',          date:'Apr 5, 2026',  category:'Income Tax', href:'/blog/old-vs-new-regime-15-lpa-salary-2026-27'     },
  { title:'Best MCP Servers for Claude Code in 2026',                                       date:'Apr 19, 2026', category:'AI Tools',   href:'/blog/best-mcp-servers-claude-code-2026'           },
  { title:'Claude Code for Non-Programmers: A Gentle Beginner\'s Guide',                   date:'Apr 18, 2026', category:'AI Tools',   href:'/blog/claude-code-for-non-programmers'             },
  { title:'5 Claude Hacks That Instantly Improve Your AI Results',                          date:'Apr 4, 2026',  category:'AI Tools',   href:'/blog/claude-hacks-improve-ai-results'             },
  { title:'How to Calculate Gratuity in India 2026 — Formula & Examples',                  date:'Mar 29, 2026', category:'Finance',    href:'/blog/how-to-calculate-gratuity-india'             },
];

export default function GarryAuthorPage() {
  // Build sameAs array — only include real URLs
  const sameAs = [
    'https://www.toolstackhub.in/about/garry',
    GITHUB_URL,
    LINKEDIN_URL,
    TWITTER_URL,
  ].filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2026-01-01',
    dateModified: '2026-04-20',
    url: 'https://www.toolstackhub.in/about/garry',
    mainEntity: {
      '@type': 'Person',
      name: 'Garry',
      url: 'https://www.toolstackhub.in/about/garry',
      image: 'https://www.toolstackhub.in/images/garry.jpg',
      jobTitle: 'Developer & Founder',
      description: 'Full-stack developer building free browser-based tools for Indian professionals and developers. Founder of ToolStackHub.',
      worksFor: {
        '@type': 'Organization',
        name: 'ToolStackHub',
        url: 'https://www.toolstackhub.in',
      },
      knowsAbout: [
        'Web Development','Next.js','React','TypeScript','Indian Income Tax',
        'GST','SEO','Technical SEO','Schema Markup','Developer Tools',
        'AI Tools','Prompt Engineering','Privacy-First Architecture',
      ],
      sameAs,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* HERO */}
          <section>
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-600 font-medium">About Garry</li>
              </ol>
            </nav>

            <div className="flex flex-col sm:flex-row items-start gap-8">
              {/* Avatar — replace div with <img> when you have a real photo:
                  <img src="/images/garry.jpg" alt="Garry — Developer at ToolStackHub"
                    width={160} height={160}
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-surface-200 shrink-0" /> */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-brand-700 border-2 border-surface-200 flex items-center justify-center shrink-0">
                <span className="text-5xl font-black text-white select-none">G</span>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-surface-950 mb-1">Garry</h1>
                <p className="text-lg text-surface-500 mb-3">Developer & Founder, ToolStackHub</p>

                <div className="flex items-center gap-4 text-sm text-surface-500 mb-4 flex-wrap">
                  <span className="flex items-center gap-1.5">📍 India</span>
                  {SOCIAL_LINKS.map(s => (
                    <a key={s.label} href={s.href} rel="me noopener noreferrer" target="_blank"
                      className={`flex items-center gap-1.5 transition-colors ${s.color}`}
                      aria-label={`Garry on ${s.label}`}>
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>

                <p className="text-surface-600 leading-relaxed max-w-xl">
                  Building free, privacy-first tools for developers and Indian professionals.
                  50+ tools shipped. Zero logins required. Zero data uploaded to servers.
                  Everything runs in your browser, the way it should.
                </p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">About Me</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed max-w-3xl">
              <p>
                I'm a full-stack developer based in India, and I built ToolStackHub because I kept running into the same frustration: every useful online tool either asks you to create an account, slaps a watermark on your output, or quietly uploads your data to some server you've never heard of. I wanted tools that just <em>work</em> — no strings attached.
              </p>
              <p>
                My background is in web development. I work primarily with Next.js, React, TypeScript, and Tailwind CSS. Most of my focus right now is on two verticals: <strong className="text-surface-800">Indian finance tools</strong> (salary calculators, tax regime comparisons, HRA and PPF calculators) and <strong className="text-surface-800">developer utilities</strong> (JSON formatters, text repeaters, base64 encoders, QR generators).
              </p>
              <p>
                The architecture principle I care about most is browser-first processing. When you use a tool on this site, your data never leaves your device. No API calls with your salary figures, no server-side processing of your invoice details. Open the browser DevTools and check the network tab — you'll see what I mean.
              </p>
              <p>
                I also write about tax, productivity, and AI tools when I find something worth documenting. The blog follows the same philosophy as the tools: practical, specific, and written from actual experience.
              </p>
            </div>
          </section>

          {/* EXPERTISE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Expertise & Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXPERTISE.map(e => (
                <div key={e.title} className="bg-white border border-surface-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{e.icon}</span>
                    <h3 className="font-bold text-surface-900 text-sm">{e.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map(t => (
                      <span key={t} className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">Tools I've Built</h2>
            <p className="text-surface-500 mb-5 text-sm">50+ free tools, all browser-based. Here are some highlights.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {FEATURED_TOOLS.map(t => (
                <Link key={t.href} href={t.href}
                  className="flex flex-col items-center gap-2 p-4 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:bg-brand-50 transition-colors text-center group">
                  <span className="text-2xl">{t.emoji}</span>
                  <span className="text-xs font-semibold text-surface-700 group-hover:text-brand-700 leading-tight">{t.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-semibold">
                View all tools →
              </Link>
            </div>
          </section>

          {/* ARTICLES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Articles & Guides</h2>
            <div className="space-y-3">
              {RECENT_ARTICLES.map(a => (
                <Link key={a.href} href={a.href}
                  className="flex items-start justify-between gap-4 p-4 bg-white border border-surface-200 rounded-2xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <div className="flex-1">
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm leading-snug mb-1">{a.title}</div>
                    <div className="flex items-center gap-3 text-xs text-surface-400">
                      <span>{a.date}</span>
                      <span className="text-brand-600 font-medium">{a.category}</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-surface-300 group-hover:text-brand-500 shrink-0 mt-0.5 transition-colors"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-semibold">
                View all articles →
              </Link>
            </div>
          </section>

          {/* CONTACT */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-8 text-center">
            <div className="text-2xl mb-3">👋</div>
            <h2 className="font-bold text-surface-900 text-xl mb-2">Get in Touch</h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-5 max-w-md mx-auto">
              Got a tool idea, found a bug, or just want to say hello? I read every message.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {GITHUB_URL && (
                <a href={GITHUB_URL} rel="me noopener noreferrer" target="_blank"
                  className="inline-flex items-center gap-2 bg-surface-900 hover:bg-surface-700 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
                  GitHub
                </a>
              )}
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} rel="me noopener noreferrer" target="_blank"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
                  LinkedIn
                </a>
              )}
              {TWITTER_URL && (
                <a href={TWITTER_URL} rel="me noopener noreferrer" target="_blank"
                  className="inline-flex items-center gap-2 bg-white border border-surface-200 hover:border-surface-300 text-surface-700 font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
                  X / Twitter
                </a>
              )}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}