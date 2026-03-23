'use client';
import { useState } from 'react';

const SAMPLE_MD = `# Welcome to Markdown Preview

## Text Formatting

**Bold text** and *italic text* and ~~strikethrough~~.

> This is a blockquote. Markdown is great for documentation!

## Lists

**Unordered:**
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

**Ordered:**
1. First step
2. Second step
3. Third step

**Task List:**
- [x] Design the tool
- [x] Write the code
- [ ] Deploy to production

## Code

Inline \`code\` looks like this.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`

## Table

| Tool | Category | Free |
|------|----------|------|
| JSON Formatter | Developer | ✅ |
| Image Compressor | Image | ✅ |
| QR Generator | Utility | ✅ |

## Links & Images

[Visit ToolStackHub](https://toolstackhub.com)

---

*Made with ❤️ using Markdown*
`;

// Simple Markdown to HTML parser (no dependencies needed for SSR compatibility)
function parseMarkdown(md) {
  let html = md
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Code blocks (fenced) — must be before inline code
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre class="bg-surface-900 text-emerald-300 rounded-xl p-4 overflow-x-auto my-4 font-mono text-sm"><code>${code.trim()}</code></pre>`)
    // H1-H4
    .replace(/^#### (.+)$/gm, '<h4 class="font-display font-semibold text-base text-surface-900 mt-4 mb-1">$1</h4>')
    .replace(/^### (.+)$/gm,  '<h3 class="font-display font-semibold text-lg text-surface-900 mt-5 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm,   '<h2 class="font-display font-bold text-xl text-surface-900 mt-6 mb-3 pb-2 border-b border-surface-200">$1</h2>')
    .replace(/^# (.+)$/gm,    '<h1 class="font-display font-bold text-3xl text-surface-900 mt-6 mb-4 pb-3 border-b-2 border-brand-200">$1</h1>')
    // Blockquote
    .replace(/^&gt; (.+)$/gm, '<blockquote class="border-l-4 border-brand-400 pl-4 py-1 my-3 text-surface-600 italic bg-brand-50 rounded-r-lg">$1</blockquote>')
    // HR
    .replace(/^---$/gm, '<hr class="my-6 border-surface-200" />')
    // Tables
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.slice(1, -1).split('|').map(c => c.trim());
      return '<tr>' + cells.map(c => `<td class="px-3 py-2 border border-surface-200">${c}</td>`).join('') + '</tr>';
    })
    // Bold + Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-surface-900">$1</strong>')
    .replace(/\*(.+?)\*/g,    '<em class="italic">$1</em>')
    .replace(/~~(.+?)~~/g,    '<del class="line-through text-surface-500">$1</del>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 underline hover:text-brand-800" target="_blank" rel="noopener">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded-xl my-4" />')
    // Task lists (before regular lists)
    .replace(/^- \[x\] (.+)$/gm, '<li class="flex items-start gap-2 my-1"><span class="text-emerald-600 font-bold mt-0.5">☑</span><span class="line-through text-surface-500">$1</span></li>')
    .replace(/^- \[ \] (.+)$/gm, '<li class="flex items-start gap-2 my-1"><span class="text-surface-400 mt-0.5">☐</span><span>$1</span></li>')
    // Unordered lists
    .replace(/^[-*] (.+)$/gm, '<li class="ml-4 my-1 list-disc">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 my-1 list-decimal">$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, m => `<ul class="my-3 space-y-1 pl-4">${m}</ul>`)
    // Paragraphs (double newline)
    .replace(/\n\n(?!<)/g, '</p><p class="my-3 text-surface-700 leading-relaxed">')
    // Wrap in paragraph
    .replace(/^(?!<)/, '<p class="my-3 text-surface-700 leading-relaxed">')
    .replace(/(?<!>)$/, '</p>');

  // Wrap table rows
  html = html.replace(/(<tr>[\s\S]*?<\/tr>\n?)+/g, m => `<div class="overflow-x-auto my-4"><table class="min-w-full border-collapse border border-surface-200 rounded-xl overflow-hidden text-sm">${m}</table></div>`);

  return html;
}

export default function MarkdownPreview() {
  const [md, setMd]       = useState(SAMPLE_MD);
  const [view, setView]   = useState('split'); // 'split' | 'edit' | 'preview'
  const [copied, setCopied] = useState(false);

  const html = parseMarkdown(md);

  const copyHtml = () => {
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMd = () => {
    const blob = new Blob([md], { type: 'text/markdown' });
    const a    = document.createElement('a');
    a.href     = URL.createObjectURL(blob);
    a.download = 'document.md';
    a.click();
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        {/* View mode switcher */}
        <div className="flex rounded-xl border border-surface-200 overflow-hidden">
          {[
            { id: 'edit',    label: 'Edit'    },
            { id: 'split',   label: 'Split'   },
            { id: 'preview', label: 'Preview' },
          ].map(v => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${view === v.id ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setMd(SAMPLE_MD)} className="text-xs text-surface-400 hover:text-brand-600 transition-colors">
            Load sample
          </button>
          <button onClick={() => setMd('')} className="text-xs text-surface-400 hover:text-surface-700">Clear</button>
          <button onClick={copyHtml} className="btn-ghost text-xs py-1 px-2">
            {copied ? '✅ Copied!' : '📋 Copy HTML'}
          </button>
          <button onClick={downloadMd} className="btn-ghost text-xs py-1 px-2">
            ⬇️ Download .md
          </button>
        </div>
      </div>

      <div
        className={`grid divide-surface-200 ${
          view === 'split' ? 'grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x' :
          view === 'edit'  ? 'grid-cols-1' :
          'grid-cols-1'
        }`}
      >
        {/* Editor */}
        {(view === 'edit' || view === 'split') && (
          <div className="p-4">
            <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Markdown Input</p>
            <textarea
              value={md}
              onChange={e => setMd(e.target.value)}
              className="w-full h-[480px] px-3 py-2.5 bg-surface-900 text-emerald-200 font-mono text-sm leading-relaxed rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none custom-scrollbar"
              placeholder="Start typing Markdown…"
              spellCheck={false}
            />
          </div>
        )}

        {/* Preview */}
        {(view === 'preview' || view === 'split') && (
          <div className="p-4">
            <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Preview</p>
            <div
              className="h-[480px] overflow-y-auto custom-scrollbar prose prose-slate max-w-none px-4 py-3 bg-white rounded-xl border border-surface-200"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}
      </div>

      {/* Footer stats */}
      <div className="px-5 py-2.5 bg-surface-50 border-t border-surface-200 flex gap-4 text-xs text-surface-400">
        <span>{md.split(/\s+/).filter(Boolean).length} words</span>
        <span>{md.length} characters</span>
        <span>{md.split('\n').length} lines</span>
      </div>
    </div>
  );
}
