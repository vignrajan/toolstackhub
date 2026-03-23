# ToolStackHub 🛠️

> Free online tools collection optimized for SEO traffic — built with Next.js, Tailwind CSS, and deployed on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/toolstackhub)

---

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/toolstackhub
cd toolstackhub
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
toolstackhub/
├── app/
│   ├── layout.jsx              # Root layout (fonts, global SEO meta)
│   ├── page.jsx                # Homepage (Hero, Search, Tool grid)
│   ├── sitemap.js              # Auto-generated sitemap.xml
│   ├── robots.js               # Auto-generated robots.txt
│   ├── not-found.jsx           # 404 page
│   ├── about/
│   │   └── page.jsx
│   └── tools/
│       └── [slug]/
│           └── page.jsx        # Dynamic tool page (SSG)
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ToolCard.jsx
│   ├── ToolLayout.jsx          # Wrapper with breadcrumbs, FAQ, related tools
│   ├── ToolSearch.jsx
│   ├── AdBanner.jsx            # Monetization-ready ad slots
│   └── tools/
│       ├── ImageCompressor.jsx
│       ├── ImageResizer.jsx
│       ├── JpgToPng.jsx
│       ├── WordCounter.jsx
│       ├── CharacterCounter.jsx
│       ├── CaseConverter.jsx
│       ├── JsonFormatter.jsx
│       ├── Base64Encoder.jsx
│       ├── UuidGenerator.jsx
│       ├── TimestampConverter.jsx
│       ├── UrlEncoder.jsx
│       ├── QrCodeGenerator.jsx
│       ├── PasswordGenerator.jsx
│       ├── RandomNumber.jsx
│       └── MarkdownPreview.jsx
├── data/
│   └── tools.js                # 🔑 Central tool registry — add all tools here
├── styles/
│   └── globals.css
├── public/
│   └── manifest.json
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## ➕ How to Add a New Tool

Adding a tool takes **4 simple steps**. No other files need to be touched.

### Step 1: Add metadata to `/data/tools.js`

```js
{
  slug:        'color-picker',          // URL: /tools/color-picker
  name:        'Color Picker',
  category:    'utility',               // image | text | developer | seo | utility
  icon:        '🎨',
  description: 'Pick colors and get HEX, RGB, HSL values instantly.',
  longDescription: 'Full description for the tool page...',
  keywords: ['color picker', 'hex color', 'rgb color', 'color converter'],
  howToUse: [
    'Click on the color wheel to pick a color',
    'Copy the HEX, RGB, or HSL value',
  ],
  faqs: [
    { q: 'What formats are supported?', a: 'HEX, RGB, HSL, and HSV.' },
  ],
  relatedSlugs: ['image-compressor', 'qr-code-generator'],
},
```

### Step 2: Create the tool component

Create `/components/tools/ColorPicker.jsx`:

```jsx
'use client';
import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#6366f1');
  
  return (
    <div className="bg-white border border-surface-200 rounded-2xl p-6">
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <p className="font-mono mt-4">HEX: {color}</p>
    </div>
  );
}
```

### Step 3: Import in the tool page

In `/app/tools/[slug]/page.jsx`, add:

```js
import ColorPicker from '../../../components/tools/ColorPicker';

const TOOL_COMPONENTS = {
  // ... existing tools ...
  'color-picker': ColorPicker,
};
```

### Step 4: Done! 🎉

Run `npm run dev` and visit `/tools/color-picker`.

---

## 🌐 Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! 🎉

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Environment Setup (Optional)

Create `.env.local` for local overrides:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Update `data/tools.js`:
```js
export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://toolstackhub.com',
  // ...
};
```

### Custom Domain

In Vercel Dashboard → Project → Settings → Domains → Add your domain.

---

## 💰 Monetization Setup

### Google AdSense

1. Sign up at [google.com/adsense](https://adsense.google.com)
2. Get approved (requires traffic)
3. In `components/AdBanner.jsx`, uncomment the `<ins>` tag and replace:
   - `ca-pub-XXXXXXXXXXXXXXXXX` → your Publisher ID
   - `XXXXXXXXXX` → your Ad Unit slot ID
4. Add the AdSense script to `app/layout.jsx`:

```jsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
```

### Affiliate Links

Edit `components/AdBanner.jsx` → `AffiliateCTA` component.
Replace `#affiliate-placeholder` with your actual affiliate URL.
Add disclosure text per FTC guidelines.

---

## 📈 Scaling to 100+ Tools

### Categories to Add

| Category | Tools to Add |
|----------|-------------|
| SEO | Meta tag generator, keyword density checker, OG tag preview |
| Developer | Regex tester, HTML encoder, Color converter, CSS minifier |
| Text | Lorem ipsum generator, text diff, slug generator |
| Image | Color palette extractor, EXIF viewer, image to base64 |
| Calculator | Age calculator, percentage calculator, BMI calculator |
| Converter | Unit converter, currency converter, time zone converter |

### Performance Tips for 100+ Tools

1. **Lazy load tool components** — Use `next/dynamic`:
   ```js
   const HeavyTool = dynamic(() => import('../tools/HeavyTool'), {
     loading: () => <div>Loading...</div>,
   });
   ```

2. **Split tool data** — For 300+ tools, split `tools.js` by category:
   ```
   /data/tools/
     image.js
     developer.js
     text.js
     utility.js
   ```

3. **Image optimization** — Use `next/image` for all tool screenshots and OG images.

4. **Bundle analysis** — Run `ANALYZE=true npm run build` to find heavy dependencies.

5. **Edge caching** — Vercel automatically caches static pages globally on their CDN.

### SEO Growth Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Add your domain to Bing Webmaster Tools
- [ ] Create tool comparison pages (e.g., `/tools/json-vs-yaml`)
- [ ] Write blog posts about each tool category
- [ ] Get backlinks from developer communities (dev.to, hashnode)
- [ ] Monitor Core Web Vitals in Google Search Console

---

## 🛡️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 (App Router) | Framework + SSG |
| Tailwind CSS | Styling |
| Vercel | Hosting + CDN |
| JavaScript | Language |
| Browser APIs | All tool logic (Canvas, Crypto, etc.) |

---

## 📊 SEO Features Implemented

- ✅ Dynamic meta titles per tool
- ✅ Dynamic meta descriptions per tool
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ `SoftwareApplication` schema.org structured data
- ✅ `FAQPage` schema for each tool's FAQ
- ✅ `BreadcrumbList` schema
- ✅ `WebSite` schema with sitelinks searchbox
- ✅ Sitemap.xml (auto-generated)
- ✅ robots.txt (auto-generated)
- ✅ Web App Manifest

---

## 📄 License

MIT — Use freely for personal or commercial projects.
