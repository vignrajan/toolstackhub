'use client';
import { useState } from 'react';

function formatHTML(html) {
  let formatted = '', indent = 0;
  const VOID = ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'];
  const tokens = html.replace(/>\s*</g,'><').split(/(?<=>)(?=<)|(?<=\S)(?=<)/);
  for (const token of tokens) {
    const t = token.trim();
    if (!t) continue;
    if (t.startsWith('</')) {
      indent = Math.max(0, indent - 1);
      formatted += '  '.repeat(indent) + t + '\n';
    } else if (t.startsWith('<') && !t.startsWith('<!') && !t.startsWith('<?')) {
      const tag = (t.match(/<(\w+)/) || [])[1] || '';
      formatted += '  '.repeat(indent) + t + '\n';
      if (!VOID.includes(tag.toLowerCase()) && !t.endsWith('/>')) indent++;
    } else {
      formatted += '  '.repeat(indent) + t + '\n';
    }
  }
  return formatted.trim();
}

function minifyHTML(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

const SAMPLE = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sample Page</title></head><body><header><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul></nav></header><main><h1>Hello World</h1><p>This is a sample paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p></main></body></html>`;

export default function HtmlFormatter() {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode]     = useState('format');
  const [copied, setCopied] = useState(false);

  const process = () => {
    if (!input.trim()) return;
    setOutput(mode === 'format' ? formatHTML(input) : minifyHTML(input));
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <div className="flex rounded-xl border border-surface-200 overflow-hidden">
          {['format','minify'].map(m => (
            <button key={m} onClick={() => { setMode(m); setOutput(''); }}
              className={`px-4 py-1.5 text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-brand-600 text-white' : 'bg-white text-surface-600'}`}>
              {m === 'format' ? '✨ Format' : '📦 Minify'}
            </button>
          ))}
        </div>
        <button onClick={() => { setInput(SAMPLE); setOutput(''); }} className="text-xs text-surface-400 hover:text-brand-600 ml-auto">Load sample</button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="text-xs text-surface-400">Clear</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">
        <div className="p-4">
          <label className="block text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Input HTML</label>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            placeholder="Paste your HTML here..."
            className="w-full h-72 px-3 py-2.5 bg-surface-900 text-amber-300 font-mono text-sm leading-relaxed rounded-xl focus:outline-none resize-none custom-scrollbar" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">Output</label>
            {output && <button onClick={copy} className="text-xs btn-ghost py-1 px-2">{copied ? '✅ Copied!' : '📋 Copy'}</button>}
          </div>
          <pre className="w-full h-72 px-3 py-2.5 bg-surface-900 text-emerald-300 font-mono text-sm leading-relaxed rounded-xl overflow-auto custom-scrollbar whitespace-pre-wrap">
            {output || <span className="text-surface-500">Output appears here...</span>}
          </pre>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-surface-200">
        <button onClick={process} className="btn-primary">
          {mode === 'format' ? '✨ Format HTML' : '📦 Minify HTML'}
        </button>
      </div>
    </div>
  );
}
