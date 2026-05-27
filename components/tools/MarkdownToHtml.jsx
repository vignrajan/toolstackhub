'use client';
import { useState, useMemo } from 'react';

function parseMarkdown(md) {
  if (!md) return '';
  let html = md
    // Escape HTML entities first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Fenced code blocks (must be before inline code)
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code${lang ? ` class="language-${lang}"` : ''}>${code.trim()}</code></pre>`);

  // Block elements — process line by line
  const lines = html.split('\n');
  const result = [];
  let inUl = false, inOl = false, inBlockquote = false;

  const closeLists = () => {
    if (inUl) { result.push('</ul>'); inUl = false; }
    if (inOl) { result.push('</ol>'); inOl = false; }
  };
  const closeBlockquote = () => {
    if (inBlockquote) { result.push('</blockquote>'); inBlockquote = false; }
  };

  for (let line of lines) {
    // Headings
    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      closeLists(); closeBlockquote();
      const level = h[1].length;
      result.push(`<h${level}>${h[2]}</h${level}>`);
      continue;
    }
    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      closeLists(); closeBlockquote();
      result.push('<hr>');
      continue;
    }
    // Blockquote
    const bq = line.match(/^>\s*(.*)/);
    if (bq) {
      closeLists();
      if (!inBlockquote) { result.push('<blockquote>'); inBlockquote = true; }
      result.push(`<p>${bq[1]}</p>`);
      continue;
    }
    closeBlockquote();
    // Unordered list
    const ul = line.match(/^[*\-+]\s+(.*)/);
    if (ul) {
      if (inOl) { result.push('</ol>'); inOl = false; }
      if (!inUl) { result.push('<ul>'); inUl = true; }
      result.push(`<li>${ul[1]}</li>`);
      continue;
    }
    // Ordered list
    const ol = line.match(/^\d+\.\s+(.*)/);
    if (ol) {
      if (inUl) { result.push('</ul>'); inUl = false; }
      if (!inOl) { result.push('<ol>'); inOl = true; }
      result.push(`<li>${ol[1]}</li>`);
      continue;
    }
    closeLists();
    // Empty line → paragraph break
    if (line.trim() === '') {
      result.push('');
      continue;
    }
    // Regular paragraph line
    result.push(`<p>${line}</p>`);
  }
  closeLists();
  closeBlockquote();

  let out = result.join('\n');

  // Inline elements
  out = out
    // Bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    // Strikethrough
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Images (before links)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Auto-links
    .replace(/\bhttps?:\/\/[^\s<>"]+/g, url => `<a href="${url}">${url}</a>`);

  // Clean up empty paragraphs
  out = out.replace(/<p><\/p>/g, '').replace(/<p>\s*<\/p>/g, '');

  return out;
}

const EXAMPLE = `# Hello, Markdown!

This is a **bold** word and *italic* text. You can also do ***bold italic***.

## Features

- Unordered lists
- With multiple items

1. Ordered lists
2. Work too

### Code

Inline \`code\` works. And fenced blocks:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote.
> It can span multiple lines.

---

[Links work](https://toolstackhub.in) and ~~strikethrough~~ too.`;

export default function MarkdownToHtml() {
  const [md,      setMd]      = useState('');
  const [view,    setView]    = useState('split'); // split | preview | html
  const [copiedHtml, setCopiedHtml] = useState(false);

  const html = useMemo(() => parseMarkdown(md), [md]);

  const copyHtml = async () => {
    try { await navigator.clipboard.writeText(html); }
    catch {
      const el = document.createElement('textarea');
      el.value = html; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
    }
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-lg">
          {[['Split','split'],['Preview','preview'],['HTML','html']].map(([l,v]) => (
            <button key={v} onClick={() => setView(v)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${view===v ? 'bg-white shadow-sm text-surface-900' : 'text-surface-500 hover:text-surface-700'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {html && view === 'html' && (
            <button onClick={copyHtml} className="text-xs px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
              {copiedHtml ? 'Copied ✓' : 'Copy HTML'}
            </button>
          )}
          <button onClick={() => setMd(EXAMPLE)} className="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors">
            Load Example
          </button>
        </div>
      </div>

      <div className={`p-5 ${view === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' : ''}`}>
        {/* Markdown input */}
        {(view === 'split' || view === 'preview') && view !== 'html' ? (
          <>
            {view === 'split' && (
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Markdown</label>
                <textarea
                  value={md}
                  onChange={e => setMd(e.target.value)}
                  placeholder={`# Heading\n\n**Bold** and *italic* text.\n\n- List item\n- Another item`}
                  className="textarea-field font-mono text-sm min-h-[400px]"
                  spellCheck={false}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">
                {view === 'preview' ? 'Preview' : 'HTML Preview'}
              </label>
              {md ? (
                <div
                  className="prose prose-sm max-w-none min-h-[400px] p-4 bg-surface-50 border border-surface-200 rounded-xl"
                  dangerouslySetInnerHTML={{ __html: html }}
                  style={{
                    lineHeight: '1.7',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                />
              ) : (
                <div className="min-h-[400px] p-4 bg-surface-50 border border-surface-200 rounded-xl flex items-center justify-center text-surface-400 text-sm">
                  Preview will appear here
                </div>
              )}
            </div>
          </>
        ) : view === 'preview' ? (
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Preview</label>
            <div
              className="prose prose-sm max-w-none min-h-[200px] p-4 bg-surface-50 border border-surface-200 rounded-xl"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        ) : (
          // HTML view
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-surface-600 uppercase tracking-wider">HTML Output</label>
              {html && (
                <button onClick={copyHtml} className="text-xs px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
                  {copiedHtml ? 'Copied ✓' : 'Copy HTML'}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-surface-400 mb-2">Markdown Input</p>
                <textarea
                  value={md}
                  onChange={e => setMd(e.target.value)}
                  placeholder="Paste Markdown here…"
                  className="textarea-field font-mono text-sm min-h-[360px]"
                  spellCheck={false}
                />
              </div>
              <div>
                <p className="text-xs text-surface-400 mb-2">Generated HTML</p>
                <div className="bg-surface-900 rounded-xl min-h-[360px] overflow-auto">
                  {html ? (
                    <pre className="p-4 font-mono text-xs text-surface-100 leading-relaxed whitespace-pre-wrap">{html}</pre>
                  ) : (
                    <div className="flex items-center justify-center h-40 text-surface-500 text-sm">HTML will appear here</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
