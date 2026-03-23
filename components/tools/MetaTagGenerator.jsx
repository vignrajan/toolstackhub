'use client';
import { useState } from 'react';

export default function MetaTagGenerator() {
  const [form, setForm] = useState({
    title:          '',
    description:    '',
    keywords:       '',
    author:         '',
    ogTitle:        '',
    ogDescription:  '',
    ogImage:        '',
    ogUrl:          '',
    twitterCard:    'summary_large_image',
    twitterSite:    '',
    canonical:      '',
    robots:         'index, follow',
    viewport:       'width=device-width, initial-scale=1',
  });
  const [copied, setCopied] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  // Effective values — OG fields fall back to basic fields
  const effectiveTitle = form.ogTitle        || form.title;
  const effectiveDesc  = form.ogDescription  || form.description;

  const generateTags = () => {
    const lines = [];

    // ── Basic ──
    lines.push('<!-- Basic SEO -->');
    if (form.viewport)    lines.push(`<meta name="viewport" content="${form.viewport}">`);
    if (form.title)       lines.push(`<title>${form.title}</title>`);
    if (form.description) lines.push(`<meta name="description" content="${form.description}">`);
    if (form.keywords)    lines.push(`<meta name="keywords" content="${form.keywords}">`);
    if (form.author)      lines.push(`<meta name="author" content="${form.author}">`);
    if (form.robots)      lines.push(`<meta name="robots" content="${form.robots}">`);
    if (form.canonical)   lines.push(`<link rel="canonical" href="${form.canonical}">`);

    // ── Open Graph ──
    if (effectiveTitle || effectiveDesc || form.ogImage || form.ogUrl) {
      lines.push('');
      lines.push('<!-- Open Graph / Social -->');
      lines.push(`<meta property="og:type" content="website">`);
      if (effectiveTitle) lines.push(`<meta property="og:title" content="${effectiveTitle}">`);
      if (effectiveDesc)  lines.push(`<meta property="og:description" content="${effectiveDesc}">`);
      if (form.ogUrl)     lines.push(`<meta property="og:url" content="${form.ogUrl}">`);
      if (form.ogImage)   lines.push(`<meta property="og:image" content="${form.ogImage}">`);
    }

    // ── Twitter ──
    if (effectiveTitle || effectiveDesc || form.ogImage) {
      lines.push('');
      lines.push('<!-- Twitter Card -->');
      lines.push(`<meta name="twitter:card" content="${form.twitterCard}">`);
      if (form.twitterSite) lines.push(`<meta name="twitter:site" content="${form.twitterSite}">`);
      if (effectiveTitle)   lines.push(`<meta name="twitter:title" content="${effectiveTitle}">`);
      if (effectiveDesc)    lines.push(`<meta name="twitter:description" content="${effectiveDesc}">`);
      if (form.ogImage)     lines.push(`<meta name="twitter:image" content="${form.ogImage}">`);
    }

    return lines.join('\n');
  };

  const output = generateTags();
  const copy   = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleLen = form.title.length;
  const descLen  = form.description.length;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Meta Tag Generator</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* ── LEFT: Inputs ── */}
        <div className="p-5 space-y-6 overflow-y-auto max-h-[620px] custom-scrollbar">

          {/* Basic SEO */}
          <div>
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Basic SEO</p>
            <div className="space-y-3">

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-surface-700">Page Title</label>
                  <span className={`text-xs ${titleLen > 60 ? 'text-red-500 font-bold' : 'text-surface-400'}`}>
                    {titleLen}/60
                  </span>
                </div>
                <input
                  value={form.title}
                  onChange={e => set('title', e.target.value)}
                  className={`input-field ${titleLen > 60 ? 'border-red-300 focus:border-red-400' : ''}`}
                  placeholder="My Awesome Page Title"
                  maxLength={80}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-surface-700">Meta Description</label>
                  <span className={`text-xs ${descLen > 160 ? 'text-red-500 font-bold' : 'text-surface-400'}`}>
                    {descLen}/160
                  </span>
                </div>
                <textarea
                  value={form.description}
                  onChange={e => set('description', e.target.value)}
                  className={`textarea-field min-h-[80px] ${descLen > 160 ? 'border-red-300' : ''}`}
                  placeholder="A brief description of your page (150-160 characters recommended)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Keywords</label>
                <input value={form.keywords} onChange={e => set('keywords', e.target.value)}
                  className="input-field" placeholder="keyword1, keyword2, keyword3" />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Author</label>
                <input value={form.author} onChange={e => set('author', e.target.value)}
                  className="input-field" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Canonical URL</label>
                <input value={form.canonical} onChange={e => set('canonical', e.target.value)}
                  className="input-field" placeholder="https://example.com/your-page" />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Robots</label>
                <select value={form.robots} onChange={e => set('robots', e.target.value)} className="input-field">
                  <option value="index, follow">index, follow (default)</option>
                  <option value="noindex, follow">noindex, follow</option>
                  <option value="index, nofollow">index, nofollow</option>
                  <option value="noindex, nofollow">noindex, nofollow</option>
                </select>
              </div>
            </div>
          </div>

          {/* Open Graph */}
          <div>
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-1">Open Graph (Social Sharing)</p>
            <p className="text-xs text-surface-400 mb-3">Leave blank to use basic title/description above</p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">OG Title (optional)</label>
                <input value={form.ogTitle} onChange={e => set('ogTitle', e.target.value)}
                  className="input-field" placeholder={form.title || 'Uses page title'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">OG Description (optional)</label>
                <textarea value={form.ogDescription} onChange={e => set('ogDescription', e.target.value)}
                  className="textarea-field min-h-[70px]" placeholder={form.description || 'Uses meta description'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">OG Image URL</label>
                <input value={form.ogImage} onChange={e => set('ogImage', e.target.value)}
                  className="input-field" placeholder="https://example.com/og-image.jpg (1200x630px)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Page URL</label>
                <input value={form.ogUrl} onChange={e => set('ogUrl', e.target.value)}
                  className="input-field" placeholder="https://example.com/your-page" />
              </div>
            </div>
          </div>

          {/* Twitter */}
          <div>
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Twitter Card</p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Card Type</label>
                <select value={form.twitterCard} onChange={e => set('twitterCard', e.target.value)} className="input-field">
                  <option value="summary_large_image">Summary Large Image (recommended)</option>
                  <option value="summary">Summary</option>
                  <option value="app">App</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Twitter Account</label>
                <input value={form.twitterSite} onChange={e => set('twitterSite', e.target.value)}
                  className="input-field" placeholder="@yourhandle" />
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Output ── */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider">
              Generated Tags
              {output && <span className="ml-2 text-emerald-600 normal-case font-normal">— ready to copy</span>}
            </p>
            <button onClick={copy} className="btn-ghost text-xs py-1 px-2" disabled={!output}>
              {copied ? '✅ Copied!' : '📋 Copy All'}
            </button>
          </div>
          <pre className="flex-1 bg-surface-900 text-emerald-300 rounded-xl p-4 text-xs font-mono leading-relaxed overflow-auto min-h-[500px] custom-scrollbar whitespace-pre-wrap">
            {output || '← Fill in the Title and Description fields on the left to generate your meta tags'}
          </pre>
          {!form.title && (
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              ⚠️ Start by entering a Page Title — it is the most important SEO field.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
