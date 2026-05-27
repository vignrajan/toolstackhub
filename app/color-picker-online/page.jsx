import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import ColorPicker from '../../components/tools/ColorPicker';
import { SITE_CONFIG } from '../../data/tools';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Color Picker Online Free – Get HEX, RGB, HSL & CMYK Codes',
  description: 'Pick any color and instantly get HEX, RGB, HSL, and CMYK values. Free online color picker with sliders, presets, and one-click copy. No signup required.',
  keywords: [
    'color picker online',
    'hex color picker',
    'rgb color picker online',
    'hex to rgb converter',
    'color code picker',
    'hsl color picker',
    'cmyk color picker',
    'color picker free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/color-picker-online` },
  openGraph: {
    title: 'Color Picker Online Free – Get HEX, RGB, HSL & CMYK Codes',
    description: 'Pick any color and get HEX, RGB, HSL, and CMYK values instantly. Free, no signup, copy in one click.',
    url: `${SITE_CONFIG.url}/color-picker-online`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Picker Online Free – HEX, RGB, HSL & CMYK',
    description: 'Pick any color and instantly get HEX, RGB, HSL, and CMYK codes. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I get a HEX color code from a color?',
    a: 'Click the color swatch or use the hue/saturation/lightness sliders to select your color. The 6-digit HEX code appears instantly in the HEX field and updates in real time as you adjust. Click the copy icon next to the HEX value to copy it to your clipboard.',
  },
  {
    q: 'What is the difference between HEX, RGB, and HSL?',
    a: 'All three represent the same color in different formats. HEX (#FF5733) uses base-16 notation — the most common format in web development and CSS. RGB (255, 87, 51) uses decimal values from 0–255 for red, green, and blue channels — common in design software. HSL (11°, 100%, 60%) represents hue (color angle), saturation (intensity), and lightness — more intuitive for adjusting colors programmatically.',
  },
  {
    q: 'When should I use CMYK instead of RGB or HEX?',
    a: 'Use CMYK (Cyan, Magenta, Yellow, Black) for print design. Printers use CMYK ink — not RGB light. Screen colors (RGB/HEX) and print colors (CMYK) have different gamuts, which is why colors sometimes look different on screen vs in print. Use CMYK values when working in Adobe Illustrator, InDesign, or any print-production workflow.',
  },
  {
    q: 'Can I enter a HEX code to get the RGB and HSL values?',
    a: 'Yes — type any valid 6-digit HEX code (with or without the # symbol) directly into the HEX input field and all other format values update instantly. This works as a HEX to RGB converter and HEX to HSL converter simultaneously.',
  },
  {
    q: 'Is the color picker free?',
    a: 'Yes — completely free with no account, no signup, and no usage limits. Pick colors and copy values as many times as you need.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Color Picker Online',
      description: 'Free online color picker. Select any color and instantly get HEX, RGB, HSL, and CMYK values with one-click copy. Includes color sliders, preset palette, and format conversion.',
      url: `${SITE_CONFIG.url}/color-picker-online`,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'HEX, RGB, HSL, and CMYK color values',
        'Interactive color picker with sliders',
        'One-click copy for each format',
        'Preset color palette',
        'HEX to RGB and RGB to HEX conversion',
        'No account required',
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
        { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools',  item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Color Picker',     item: `${SITE_CONFIG.url}/color-picker-online` },
      ],
    },
  ],
};

// ── Color format reference ────────────────────────────────────
const formats = [
  {
    name: 'HEX',
    example: '#FF5733',
    color: 'amber',
    usedIn: 'CSS, HTML, web design, Tailwind config, design tokens',
    desc: 'Six hexadecimal digits representing red, green, and blue channels. The most common color format in web development. Shorthand 3-digit form (#F53) is also valid when each pair is identical.',
  },
  {
    name: 'RGB',
    example: 'rgb(255, 87, 51)',
    color: 'red',
    usedIn: 'CSS, Canvas API, React Native, Flutter, image processing',
    desc: 'Three decimal values (0–255) for red, green, and blue light channels. Used in CSS color functions and most design/development tools. RGBA adds a fourth value (0–1) for opacity.',
  },
  {
    name: 'HSL',
    example: 'hsl(11°, 100%, 60%)',
    color: 'emerald',
    usedIn: 'CSS, design systems, programmatic color manipulation, theming',
    desc: 'Hue (0–360° color wheel angle), Saturation (0–100% intensity), and Lightness (0–100%). More intuitive than RGB for creating color variations — darken by decreasing L, desaturate by decreasing S.',
  },
  {
    name: 'CMYK',
    example: 'cmyk(0%, 66%, 80%, 0%)',
    color: 'blue',
    usedIn: 'Print design, Adobe Illustrator, InDesign, offset printing',
    desc: 'Cyan, Magenta, Yellow, and Key (Black) — the four ink colors used by printers. Screen displays use RGB light; printers use CMYK ink. Always convert to CMYK before sending designs to print.',
  },
];

// ── Use cases ─────────────────────────────────────────────────
const usecases = [
  {
    icon: '🎨',
    title: 'CSS Styling & Web Design',
    desc: 'Get HEX and RGB values to paste directly into CSS stylesheets, Tailwind configuration files, CSS custom properties, and CSS-in-JS solutions like styled-components.',
  },
  {
    icon: '🖌️',
    title: 'Design System Color Tokens',
    desc: 'Build brand color palettes and design token values for Figma, Storybook, and component libraries by visually picking colors and exporting all four format values simultaneously.',
  },
  {
    icon: '🖨️',
    title: 'Print Design Workflow',
    desc: 'Get CMYK values for print projects in Adobe Illustrator and InDesign. Screen-to-print color conversion is essential to prevent unexpected color shifts when designs are physically printed.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Pick UI colors and export RGB values for React Native StyleSheet, Flutter Color(), SwiftUI Color(), and Android XML color resources — all from the same picker in the right format for each platform.',
  },
  {
    icon: '🏷️',
    title: 'Brand Color Matching',
    desc: 'Enter a known brand HEX color from a style guide to instantly get the equivalent RGB, HSL, and CMYK values for use across different tools and workflows that require different color formats.',
  },
  {
    icon: '🌈',
    title: 'Accessibility Contrast Checking',
    desc: 'Pick foreground and background colors to visually verify WCAG contrast ratios for accessibility compliance before coding — ensuring text remains readable for users with color vision deficiencies.',
  },
  {
    icon: '🔄',
    title: 'Color Format Conversion',
    desc: 'Convert between HEX, RGB, HSL, and CMYK instantly. Type a HEX code from a design file and get the RGB values needed for a CSS variable, or the CMYK values needed for a print vendor.',
  },
  {
    icon: '💡',
    title: 'Color Exploration & Palettes',
    desc: 'Explore color relationships using the HSL sliders — shift hue to find complementary colors, adjust saturation to create tints, or change lightness to create shades for a cohesive color palette.',
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function ColorPickerOnlinePage() {
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
                <li><Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Color Picker</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Online Color Picker – Get HEX, RGB, HSL & CMYK Color Codes Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Pick any color using the interactive sliders or enter a HEX code to instantly
              get all four color format values — HEX, RGB, HSL, and CMYK. One-click copy
              for each format. Free, no signup, works in any browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '🎨 HEX · RGB · HSL · CMYK',
                '📋 One-Click Copy',
                '🔄 Format Conversion',
                '🔒 No Signup',
                '📱 Mobile Friendly',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ColorPicker />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Color Picker" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Color Picker Online – Get Every Color Format Instantly
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>color picker online</strong> lets you select any color
                using an interactive visual picker and instantly see the equivalent values
                in all four major color formats: HEX, RGB, HSL, and CMYK. No matter
                which tool or workflow you are working in — CSS, Figma, Illustrator,
                React Native, or a print production pipeline — the right color format
                is always one click away.
              </p>
              <p>
                Use the hue, saturation, and lightness sliders to explore color space
                visually, or type a known HEX code directly into the input field to
                convert it to RGB, HSL, and CMYK simultaneously. The large color preview
                swatch updates in real time so you always see exactly what you are
                selecting before copying.
              </p>
              <p>
                Whether you need an <strong>RGB color picker online</strong> for a
                React Native stylesheet, a <strong>HEX color picker</strong> for a
                CSS variable, a <strong>CMYK color picker</strong> for a print vendor,
                or a <strong>color code picker</strong> to reverse-engineer a brand
                color from its HEX value — this single tool handles all four formats
                with individual copy buttons for each.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Use the Color Picker
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '🎨', title: 'Pick a Color Visually',  desc: 'Click the large color swatch to open the native browser color picker, or use the hue and saturation sliders to dial in your exact color.' },
                { step: '02', icon: '✏️', title: 'Or Enter a HEX Code',    desc: 'Type any 6-digit HEX code (with or without #) directly into the HEX input field. All other format values update instantly.' },
                { step: '03', icon: '🔍', title: 'View All Four Formats',  desc: 'HEX, RGB, HSL, and CMYK values all update simultaneously. The large preview swatch shows your selected color at a glance.' },
                { step: '04', icon: '📋', title: 'Copy Your Format',       desc: 'Click the copy icon next to whichever format you need. Each format has its own individual copy button for fast workflow.' },
                { step: '05', icon: '🌈', title: 'Use Preset Palette',     desc: 'Click any color in the preset palette for instant selection of common web and brand colors with all format values ready.' },
                { step: '06', icon: '🔄', title: 'Convert Between Formats',desc: 'Enter a value in any field (HEX, RGB, or HSL) and all other fields update to show the equivalent values in every format.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Color format guide */}
          <section aria-labelledby="formats-heading">
            <h2 id="formats-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Color Formats Explained – HEX, RGB, HSL & CMYK
            </h2>
            <div className="space-y-4">
              {formats.map(fmt => (
                <div key={fmt.name} className={`p-5 bg-${fmt.color}-50 border border-${fmt.color}-200 rounded-2xl`}>
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`font-display font-bold text-2xl text-${fmt.color}-700 shrink-0 w-16`}>{fmt.name}</div>
                    <div>
                      <code className={`text-sm font-mono font-bold text-${fmt.color}-800 bg-${fmt.color}-100 px-2 py-1 rounded`}>{fmt.example}</code>
                      <div className={`text-xs text-${fmt.color}-600 mt-1`}><strong>Used in:</strong> {fmt.usedIn}</div>
                    </div>
                  </div>
                  <p className={`text-sm text-${fmt.color}-800 leading-relaxed`}>{fmt.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🎨', title: 'All 4 Color Formats',         desc: 'HEX, RGB, HSL, and CMYK values displayed simultaneously — copy whichever format your workflow requires.' },
                { icon: '🖱️', title: 'Interactive Visual Picker',   desc: 'Native browser color picker with full color space navigation — no JavaScript color wheel limitations.' },
                { icon: '✏️', title: 'Direct HEX Input',            desc: 'Type any HEX code to instantly convert to RGB, HSL, and CMYK — works as a multi-format color converter.' },
                { icon: '📋', title: 'Per-Format Copy Buttons',     desc: 'Each color format has its own copy button — copy the exact format string needed for CSS, design tools, or print.' },
                { icon: '🌈', title: 'Preset Color Palette',        desc: 'Quick-select common web colors, brand primaries, and CSS named colors from the built-in preset palette.' },
                { icon: '🔍', title: 'Large Color Preview',         desc: 'Full-width color swatch shows your selected color at size — see clearly before copying to avoid mistakes.' },
                { icon: '⚡', title: 'Real-Time Updates',           desc: 'All four format values update simultaneously as you move sliders or type — zero lag, zero submit button.' },
                { icon: '📱', title: 'Mobile Friendly',             desc: 'Touch-optimized sliders work on iPhone and Android. Pick colors for mobile app development on mobile.' },
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

          {/* Section 5 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usecases.map(uc => (
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

          {/* Section 6 — How it works + Why use */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Color Format Conversion Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                All color formats represent the same visible color using different
                mathematical models. The color picker converts between them using
                standard formulas that run locally in your browser — no server needed.
              </p>
              <p>
                <strong>HEX to RGB:</strong> Split the 6-digit HEX into three 2-digit
                pairs and convert each from base-16 to decimal.{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">#FF5733</code>{' '}
                → R: FF=255, G: 57=87, B: 33=51 →{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">rgb(255, 87, 51)</code>
              </p>
              <p>
                <strong>RGB to HSL:</strong> Normalize RGB to 0–1, find min/max channels,
                calculate lightness from their average, saturation from their range, and
                hue from which channel is dominant and by how much.
              </p>
              <p>
                <strong>RGB to CMYK:</strong> Normalize to 0–1, calculate the black key
                channel as <code className="bg-surface-100 text-surface-700 px-1.5 py-0.5 rounded text-sm font-mono">1 - max(R,G,B)</code>,
                then derive cyan, magenta, and yellow from the remaining difference.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Tool vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs Browser DevTools eyedropper', point: 'DevTools gives HEX only. This tool gives all four formats simultaneously — saving the manual conversion step when you need RGB for a React Native component or CMYK for print.' },
                { label: 'vs Figma / Adobe color picker',  point: 'Design tools require opening the full application. This works instantly in any browser tab, even on a machine without Figma or Adobe installed.' },
                { label: 'vs Google "color picker" search', point: 'Google\'s built-in color picker only gives HEX and RGB. This tool also provides HSL (essential for programmatic color theming) and CMYK (essential for print).' },
                { label: 'vs Coolors / Paletton',           point: 'Palette generators are for creating color schemes. This tool is for getting exact color values for a specific color you already have in mind — a different use case.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Color Picker Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need an <strong>HEX color picker</strong> for CSS, an{' '}
                <strong>RGB color picker online</strong> for a Canvas element, an{' '}
                <strong>HSL color picker</strong> for a design token system, or a{' '}
                <strong>CMYK color picker</strong> for a print production file — this
                single tool provides all four simultaneously so you never need to visit
                multiple tools or manually convert between formats.
              </p>
              <p>
                The <strong>HEX to RGB converter</strong> functionality is particularly
                useful for developers moving between CSS (HEX) and JavaScript Canvas
                operations (RGB), or between web design (HEX) and React Native
                stylesheets (RGB). Type the HEX code once and all four format values
                are ready to copy in whichever order you need them.
              </p>
            </div>
          </section>

          {/* Section 8 — FAQ */}
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

          {/* Section 9 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Color Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
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
                { href: '/css-minifier-online',          icon: '⚡', label: 'CSS Minifier Online',          desc: 'Minify CSS containing your color variables for production' },
                { href: '/html-formatter-online',        icon: '🔤', label: 'HTML Formatter Online',        desc: 'Format and beautify HTML that uses your color codes' },
                { href: '/meta-tag-generator-online',    icon: '🔍', label: 'Meta Tag Generator',           desc: 'Add theme-color meta tags using your picked color' },
                { href: '/compress-image-online',        icon: '🗜️', label: 'Compress Image Online',        desc: 'Optimize images after designing with your color palette' },
                { href: '/qr-code-generator-online',     icon: '📱', label: 'QR Code Generator',           desc: 'Create custom-colored QR codes using your picked colors' },
                { href: '/json-formatter-online',        icon: '{ }',label: 'JSON Formatter Online',       desc: 'Format JSON theme configuration files with color tokens' },
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
      <RelatedToolsCluster currentSlug="color-picker-online" />
      <Footer />
    </>
  );
}