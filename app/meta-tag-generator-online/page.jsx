import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import MetaTagGenerator from '../../components/tools/MetaTagGenerator';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Meta Tag Generator Online Free – SEO Meta Tags in Seconds',
  description: 'Generate SEO meta tags, Open Graph tags, and Twitter Card tags online free. Character counters included. Ready-to-paste HTML. No signup. Try now!',
  keywords: [
    'meta tag generator online',
    'seo meta tags generator',
    'open graph generator',
    'twitter card generator',
    'meta description generator',
    'canonical url generator',
    'og tag generator',
    'html meta tag creator',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/meta-tag-generator-online` },
  openGraph: {
    title: 'Meta Tag Generator Online Free – SEO Meta Tags in Seconds',
    description: 'Generate complete SEO meta tags, Open Graph tags, and Twitter Cards free. Character counters, ready-to-paste HTML. No signup.',
    url: `${SITE_CONFIG.url}/meta-tag-generator-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Tag Generator Online Free – SEO Tags in Seconds',
    description: 'Generate SEO meta tags, Open Graph, and Twitter Cards free. Character counters and ready-to-paste HTML output.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What are meta tags and why do they matter for SEO?',
    a: 'Meta tags are HTML elements placed in the <head> section of a page that provide metadata to search engines and social platforms. The title tag is a direct Google ranking signal. The meta description does not directly affect rankings but controls the text shown in search results — a well-written description increases click-through rate (CTR), which indirectly improves rankings. Open Graph and Twitter Card tags control how your page looks when shared on social media.',
  },
  {
    q: 'What is the ideal meta description length?',
    a: 'Google displays meta descriptions up to approximately 155–160 characters on desktop and 120 characters on mobile. Descriptions longer than this are truncated with an ellipsis (...), cutting off your call to action. Aim for 140–155 characters — long enough to be descriptive but short enough to display fully on all devices. Our tool shows a live character counter and turns red when you exceed 160 characters.',
  },
  {
    q: 'What are Open Graph tags?',
    a: 'Open Graph (OG) tags are meta tags using the og: prefix that control how your page appears when shared on Facebook, LinkedIn, WhatsApp, Slack, and other platforms that support the Open Graph protocol. The most important are og:title (the displayed title), og:description (the preview text), og:image (the thumbnail image shown), and og:url (the canonical URL). Without OG tags, platforms scrape your page and often display incorrect or ugly previews.',
  },
  {
    q: 'Is the meta tag generator free?',
    a: 'Yes — completely free with no account required. Generate meta tags for unlimited pages. The output is ready-to-paste HTML that you can copy directly into your page\'s <head> section.',
  },
  {
    q: 'Do I need both Open Graph and Twitter Card tags?',
    a: 'Twitter Card tags control specifically how links appear on Twitter/X. If Twitter Card tags are missing, Twitter falls back to Open Graph tags. If both are missing, Twitter generates a minimal link card with no image. For maximum social media reach, include both — our generator creates both sets simultaneously from the same input.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Meta Tag Generator Online',
      description: 'Free online meta tag generator. Creates SEO meta tags, Open Graph tags for social sharing, and Twitter Card tags. Includes real-time character counters for title (60 chars) and description (160 chars). Ready-to-paste HTML output.',
      url: `${SITE_CONFIG.url}/meta-tag-generator-online`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'SEO meta tags (title, description, keywords, robots, canonical)',
        'Open Graph tags for Facebook and LinkedIn',
        'Twitter Card tags for Twitter previews',
        'Real-time character counters for title and description',
        'Warning indicators for fields exceeding recommended limits',
        'One-click copy for all generated tags',
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
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'SEO Tools',  item: `${SITE_CONFIG.url}/#seo` },
        { '@type': 'ListItem', position: 3, name: 'Meta Tag Generator', item: `${SITE_CONFIG.url}/meta-tag-generator-online` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Generate SEO Meta Tags Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter page title',       text: 'Type your page title — aim for 50–60 characters. Watch the live counter.' },
        { '@type': 'HowToStep', position: 2, name: 'Write meta description', text: 'Write a compelling description of 140–160 characters including a call to action.' },
        { '@type': 'HowToStep', position: 3, name: 'Add canonical URL',      text: 'Enter the full canonical URL for this page including https://' },
        { '@type': 'HowToStep', position: 4, name: 'Fill Open Graph fields', text: 'Add your OG image URL (1200×630px recommended) for social sharing previews.' },
        { '@type': 'HowToStep', position: 5, name: 'Copy the HTML',          text: 'Click Copy All to copy the complete meta tag block for your page head section.' },
      ],
    },
  ],
};

// ── Meta tag types ────────────────────────────────────────────
const tagTypes = [
  {
    category: 'Basic SEO Tags',
    color: 'blue',
    icon: '🔍',
    tags: [
      { name: '<title>',                  purpose: 'Page title shown in browser tab and Google search results. Direct ranking signal.' },
      { name: '<meta name="description">', purpose: 'Description shown in search results. Affects CTR. 140–160 chars recommended.' },
      { name: '<link rel="canonical">',   purpose: 'Tells Google which URL is the original when duplicate content exists.' },
      { name: '<meta name="robots">',     purpose: 'Controls whether Google indexes the page and follows its links.' },
    ],
  },
  {
    category: 'Open Graph Tags',
    color: 'emerald',
    icon: '📱',
    tags: [
      { name: 'og:title',       purpose: 'Title shown in Facebook, LinkedIn, WhatsApp, and Slack link previews.' },
      { name: 'og:description', purpose: 'Description text shown below the title in social media link cards.' },
      { name: 'og:image',       purpose: 'Thumbnail image shown in social previews. Use 1200×630px for best results.' },
      { name: 'og:url',         purpose: 'Canonical URL for the page — prevents duplicate sharing across URL variants.' },
    ],
  },
  {
    category: 'Twitter Card Tags',
    color: 'violet',
    icon: '🐦',
    tags: [
      { name: 'twitter:card',        purpose: 'Sets the card type. summary_large_image shows a large image above the title.' },
      { name: 'twitter:title',       purpose: 'Title shown in Twitter link cards. Falls back to og:title if omitted.' },
      { name: 'twitter:description', purpose: 'Description in Twitter cards. Falls back to og:description if omitted.' },
      { name: 'twitter:image',       purpose: 'Image in Twitter cards. Minimum 300×157px, 3MB max. Falls back to og:image.' },
    ],
  },
];

// ── Character limits reference ────────────────────────────────
const charLimits = [
  { field: 'Title Tag',          recommended: '50–60 chars',  max: '~60 chars',   consequence: 'Title truncated with ... in Google search results and browser tabs' },
  { field: 'Meta Description',   recommended: '140–155 chars',max: '~160 chars',  consequence: 'Description cut off before the call to action in search results' },
  { field: 'OG Title',           recommended: '40–60 chars',  max: '~88 chars',   consequence: 'Title truncated on Facebook and LinkedIn link cards' },
  { field: 'OG Description',     recommended: '120–130 chars',max: '~200 chars',  consequence: 'Description cut off in social preview cards on most platforms' },
  { field: 'Twitter Title',      recommended: '50–60 chars',  max: '~70 chars',   consequence: 'Title truncated in Twitter/X link cards on mobile' },
  { field: 'Twitter Description',recommended: '100–120 chars',max: '~200 chars',  consequence: 'Description truncated in Twitter/X link preview cards' },
];

// ── Page ──────────────────────────────────────────────────────
export default function MetaTagGeneratorOnlinePage() {
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
                <li><Link href="/#seo" className="hover:text-brand-600 transition-colors text-pink-600">SEO Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Meta Tag Generator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Meta Tag Generator Online – Generate SEO & Social Media Meta Tags
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Generate complete SEO meta tags, Open Graph tags for social sharing, and
              Twitter Card tags — all from a single form. Live character counters warn
              before you exceed title and description limits. Copy ready-to-paste HTML
              in one click. Free, no signup.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🔍 SEO Meta Tags',
                '📱 Open Graph Tags',
                '🐦 Twitter Cards',
                '📏 Character Counters',
                '🔒 No Signup',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <MetaTagGenerator />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Meta Tag Generator" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Meta Tag Generator Online – SEO & Social Media Tags in Seconds
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>meta tag generator online</strong> creates a complete set
                of HTML meta tags for any web page — including basic SEO meta tags, Open
                Graph tags for Facebook and LinkedIn sharing previews, and Twitter Card
                tags for Twitter link cards — all from a single form, in seconds. Writing
                meta tags manually is repetitive, error-prone, and easy to get wrong.
                This tool ensures every tag is correctly formatted and includes all required
                attributes.
              </p>
              <p>
                Real-time character counters track your title (60 char limit) and meta
                description (160 char limit) as you type — turning amber as you approach
                the limit and red when you exceed it. This prevents the most common SEO
                mistake: writing titles and descriptions that get truncated in Google search
                results before readers see your call to action.
              </p>
              <p>
                Whether you need an <strong>SEO meta tags generator</strong> for a new blog
                post, an <strong>Open Graph generator</strong> for better social sharing
                previews, or a <strong>Twitter Card generator</strong> to control how your
                links appear on Twitter — this single tool generates all three tag sets
                simultaneously so you never have to write repetitive HTML meta tags by hand.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Generate Meta Tags for Your Page
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '✏️', title: 'Enter Page Title',         desc: 'Type your page title. Aim for 50–60 characters — the counter turns red if you exceed 60. Include your primary keyword near the start.' },
                { step: '02', icon: '📝', title: 'Write Meta Description',   desc: 'Write a 140–155 character description with a call to action. This is what users read in Google results before clicking.' },
                { step: '03', icon: '🔗', title: 'Add Canonical URL',        desc: 'Enter the full page URL including https://. This becomes the og:url and canonical link tag to prevent duplicate content.' },
                { step: '04', icon: '🖼️', title: 'Add OG Image URL',        desc: 'Paste the URL of your social sharing image. Use 1200×630px for best display on all platforms.' },
                { step: '05', icon: '🐦', title: 'Set Twitter Handle',       desc: 'Optional: Enter your Twitter @username (e.g. @yourbrand) for the twitter:site tag. Leave blank if not applicable.' },
                { step: '06', icon: '📋', title: 'Copy All & Paste',         desc: 'Click Copy All to copy the complete HTML meta tag block. Paste it inside the <head> section of your page.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Meta tag types */}
          <section aria-labelledby="types-heading">
            <h2 id="types-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              All Meta Tags This Tool Generates
            </h2>
            <div className="space-y-5">
              {tagTypes.map(group => (
                <div key={group.category} className={`p-5 bg-${group.color}-50 border border-${group.color}-200 rounded-2xl`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className={`font-display font-semibold text-${group.color}-900`}>{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.tags.map(tag => (
                      <div key={tag.name} className="bg-white rounded-xl p-3 border border-surface-100">
                        <code className={`text-xs font-mono font-bold text-${group.color}-700 block mb-1`}>{tag.name}</code>
                        <p className="text-xs text-surface-500 leading-relaxed">{tag.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Character limits */}
          <section aria-labelledby="limits-heading">
            <h2 id="limits-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Character Limits Reference Guide
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Field</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Recommended</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Hard Limit</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">If Exceeded</th>
                  </tr>
                </thead>
                <tbody>
                  {charLimits.map((row, i) => (
                    <tr key={row.field} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-medium text-surface-900">{row.field}</td>
                      <td className="px-4 py-3 text-emerald-700 font-mono text-xs">{row.recommended}</td>
                      <td className="px-4 py-3 text-amber-700 font-mono text-xs">{row.max}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔍', title: 'Complete SEO Meta Tags',        desc: 'Generates title, description, keywords, canonical URL, robots directive, and author tags in one block.' },
                { icon: '📱', title: 'Open Graph Tags',               desc: 'Full og:title, og:description, og:image, og:url, og:type, and og:site_name for Facebook and LinkedIn.' },
                { icon: '🐦', title: 'Twitter Card Tags',             desc: 'twitter:card, twitter:title, twitter:description, twitter:image, twitter:site, and twitter:creator.' },
                { icon: '📏', title: 'Live Character Counters',       desc: 'Real-time counters for title (60) and description (160) with color-coded warnings as you type.' },
                { icon: '⚠️', title: 'Limit Warning Indicators',     desc: 'Fields turn amber near the limit and red when exceeded — catch truncation issues before publishing.' },
                { icon: '📋', title: 'One-Click Copy All',            desc: 'Copy the complete meta tag block to clipboard in one click — ready to paste into your <head> section.' },
                { icon: '🔄', title: 'Auto-Fill Fallbacks',          desc: 'OG and Twitter tags automatically use your basic title and description as fallbacks if left empty.' },
                { icon: '🔒', title: 'No Signup Required',           desc: 'Generate meta tags for unlimited pages with no account, no API key, and no usage restrictions.' },
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
                  icon: '🔍',
                  title: 'New Page SEO Setup',
                  desc: 'Generate a complete meta tag block for every new page or blog post before publishing. Properly configured meta tags ensure Google indexes your page with the right title, description, and canonical URL from day one.',
                },
                {
                  icon: '📱',
                  title: 'Social Sharing Appearance',
                  desc: 'Control exactly how your pages look when shared on Facebook, LinkedIn, WhatsApp, and Slack. Without Open Graph tags, platforms scrape inconsistent content — often showing the wrong image, title, or description.',
                },
                {
                  icon: '🐦',
                  title: 'Twitter Link Previews',
                  desc: 'Generate Twitter Card tags to get rich link previews with large images when your content is shared on Twitter. Summary_large_image cards dramatically increase click-through rates compared to bare link text.',
                },
                {
                  icon: '🔗',
                  title: 'Canonical URL Management',
                  desc: 'Set canonical tags for paginated content, URL parameter variants (e.g. ?ref=), print pages, and syndicated content to tell Google which URL to index and rank, consolidating link equity.',
                },
                {
                  icon: '🤖',
                  title: 'Crawl Control',
                  desc: 'Set meta robots tags to noindex pages you don\'t want in Google\'s index — thank-you pages, admin pages, duplicate content, and staging URLs that accidentally get crawled.',
                },
                {
                  icon: '📊',
                  title: 'SEO Audit Remediation',
                  desc: 'Quickly generate replacement meta tags for pages identified as missing titles, duplicate descriptions, or descriptions exceeding character limits in SEO audit tools like Screaming Frog, Ahrefs, or SEMrush.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-pink-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — How it works + Why use */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Meta Tags Affect Google Rankings & Social Sharing
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                The <strong>title tag</strong> is one of Google's most significant on-page
                ranking signals. It tells Google the primary topic of your page and appears
                as the clickable blue link in search results. Including your target keyword
                near the start of the title tag — within the first 50 characters — gives it
                maximum weight as a ranking signal.
              </p>
              <p>
                The <strong>meta description</strong> is not a direct ranking signal, but it
                directly affects your click-through rate (CTR). Google uses CTR as an indirect
                ranking signal — pages that get more clicks relative to their position tend
                to rank higher over time. A compelling meta description with a clear benefit
                and call to action can increase CTR by 5–10%, which compounds into meaningful
                ranking improvements over months.
              </p>
              <p>
                <strong>Open Graph tags</strong> have no direct SEO value but have significant
                indirect value: when your content is shared on social media with an attractive
                preview image and compelling title, it gets more clicks and shares — generating
                backlinks and traffic signals that Google uses as ranking factors.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Generator vs Writing Tags Manually
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Prevent missing required tags',    point: 'It\'s easy to forget og:image or twitter:card when writing manually. This tool generates all required tags for each protocol automatically, ensuring nothing is missed.' },
                { label: 'Avoid character limit mistakes',   point: 'Without a live counter, titles and descriptions routinely exceed 60 and 160 characters — getting truncated in search results and social cards. The live counter prevents this.' },
                { label: 'Ensure correct HTML syntax',       point: 'Meta tag property names, name attributes, and content formatting differ between basic SEO, Open Graph, and Twitter Card specs. This tool formats each correctly every time.' },
                { label: 'Save time across multiple pages',  point: 'For sites with 10–100 pages, manually writing meta tags for each adds hours. This generator reduces each page to a 2-minute form fill with one-click copy output.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Meta Tag Generator Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need an <strong>SEO meta tags generator</strong> for a new blog
                post, an <strong>Open Graph generator</strong> to fix ugly social media
                previews, a <strong>Twitter Card generator</strong> for better link cards,
                or a <strong>meta description generator</strong> with a built-in character
                counter — this tool generates all three tag sets in one pass with no
                repetitive manual HTML writing.
              </p>
              <p>
                The <strong>canonical URL generator</strong> feature is especially valuable
                for sites with pagination, URL parameters, or syndicated content. Setting
                the canonical tag correctly from day one prevents duplicate content penalties
                and ensures Google consolidates all ranking signals to the right URL version.
              </p>
            </div>
          </section>

          {/* Section 9 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                   >
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 10 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More SEO Tag Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors group">
                  <div className="font-semibold text-pink-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-pink-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 11 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/character-counter-online',     icon: '🔢', label: 'Character Counter Online',     desc: 'Count characters with live Twitter, SMS, and meta description limit bars' },
                { href: '/word-counter-online',          icon: '📝', label: 'Word Counter Online',          desc: 'Count words and measure reading time in your page content' },
                { href: '/url-encoder-online',           icon: '🔗', label: 'URL Encoder Online',           desc: 'Encode canonical URLs with special characters properly' },
                { href: '/compress-image-online',        icon: '🗜️', label: 'Compress Image Online',        desc: 'Optimize your Open Graph images before using their URL' },
                { href: '/resize-image-online',          icon: '📐', label: 'Resize Image Online',          desc: 'Resize images to exactly 1200×630px for Open Graph' },
                { href: '/json-formatter-online',        icon: '{ }',label: 'JSON Formatter Online',       desc: 'Format JSON-LD structured data to add alongside meta tags' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-pink-200 hover:bg-pink-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-pink-800 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <RelatedToolsCluster currentSlug="meta-tag-generator-online" />
      <Footer />
    </>
  );
}