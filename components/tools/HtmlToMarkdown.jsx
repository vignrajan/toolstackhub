'use client';
import { useState, useMemo } from 'react';

function htmlToMarkdown(html) {
  if (!html.trim()) return '';

  let md = html
    // Preserve newlines in certain block elements
    .replace(/<\/?(div|section|article|main|aside|header|footer)[^>]*>/gi, '\n')
    // Headings
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `# ${strip(c)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `## ${strip(c)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `### ${strip(c)}\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `#### ${strip(c)}\n`)
    .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, c) => `##### ${strip(c)}\n`)
    .replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, (_, c) => `###### ${strip(c)}\n`)
    // Horizontal rule
    .replace(/<hr\s*\/?>/gi, '\n---\n')
    // Blockquote
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) => c.split('\n').map(l => `> ${l}`).join('\n') + '\n')
    // Pre / code blocks
    .replace(/<pre[^>]*><code[^>]*class="language-([^"]+)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, lang, c) => `\`\`\`${lang}\n${decodeEntities(c)}\n\`\`\`\n`)
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, c) => `\`\`\`\n${decodeEntities(c)}\n\`\`\`\n`)
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, c) => `\`\`\`\n${decodeEntities(c)}\n\`\`\`\n`)
    // Lists
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, c) => c.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, i) => `- ${strip(i)}\n`) + '\n')
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, c) => {
      let n = 0;
      return c.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, i) => `${++n}. ${strip(i)}\n`) + '\n';
    })
    // Table (basic)
    .replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, content) => {
      const rows = [];
      const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
      let rowMatch;
      while ((rowMatch = rowRe.exec(content)) !== null) {
        const cells = [];
        const cellRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
        let cellMatch;
        while ((cellMatch = cellRe.exec(rowMatch[1])) !== null) {
          cells.push(strip(cellMatch[1]).replace(/\|/g, '\\|'));
        }
        rows.push('| ' + cells.join(' | ') + ' |');
      }
      if (rows.length > 0) {
        const separator = '| ' + rows[0].split('|').filter(s => s.trim()).map(() => '---').join(' | ') + ' |';
        rows.splice(1, 0, separator);
      }
      return rows.join('\n') + '\n';
    })
    // Inline elements
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, c) => `**${strip(c)}**`)
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, c) => `**${strip(c)}**`)
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, c) => `*${strip(c)}*`)
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, c) => `*${strip(c)}*`)
    .replace(/<del[^>]*>([\s\S]*?)<\/del>/gi, (_, c) => `~~${strip(c)}~~`)
    .replace(/<s[^>]*>([\s\S]*?)<\/s>/gi, (_, c) => `~~${strip(c)}~~`)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, c) => `\`${decodeEntities(c)}\``)
    // Links and images
    .replace(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (_, src, alt) => `![${alt}](${src})`)
    .replace(/<img[^>]+alt="([^"]*)"[^>]+src="([^"]*)"[^>]*\/?>/gi, (_, alt, src) => `![${alt}](${src})`)
    .replace(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${strip(text)}](${href})`)
    // Paragraphs and line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `${strip(c)}\n\n`)
    // Remove all remaining tags
    .replace(/<[^>]+>/g, '')
    // Decode entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    // Clean up
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return md;
}

function strip(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function decodeEntities(html) {
  return html
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
}

const EXAMPLE_HTML = `<h1>Welcome to HTML to Markdown</h1>
<p>This tool converts <strong>HTML</strong> to <em>clean Markdown</em> instantly.</p>
<h2>Features</h2>
<ul>
  <li>Headings h1–h6</li>
  <li>Bold and <em>italic</em> text</li>
  <li>Links and images</li>
</ul>
<h2>Code</h2>
<pre><code class="language-javascript">const hello = "world";</code></pre>
<blockquote><p>This is a blockquote from a wise person.</p></blockquote>
<p>Visit <a href="https://toolstackhub.in">ToolStackHub</a> for more tools.</p>`;

export default function HtmlToMarkdown() {
  const [input,  setInput]  = useState('');
  const [copied, setCopied] = useState(false);

  const markdown = useMemo(() => htmlToMarkdown(input), [input]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(markdown); }
    catch {
      const el = document.createElement('textarea');
      el.value = markdown; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">HTML → Markdown Converter</span>
        <button onClick={() => setInput(EXAMPLE_HTML)} className="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors">
          Load Example
        </button>
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">HTML Input</label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste HTML here…"
            className="textarea-field font-mono text-sm min-h-[380px]"
            spellCheck={false}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-surface-600 uppercase tracking-wider">Markdown Output</label>
            {markdown && (
              <button onClick={copy} className="text-xs px-3 py-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            )}
          </div>
          <div className="bg-surface-900 rounded-xl min-h-[380px] overflow-auto">
            {markdown ? (
              <pre className="p-4 font-mono text-xs text-surface-100 leading-relaxed whitespace-pre-wrap">{markdown}</pre>
            ) : (
              <div className="flex items-center justify-center h-40 text-surface-500 text-sm">
                Markdown will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
