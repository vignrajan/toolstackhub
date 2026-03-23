'use client';
import { useState } from 'react';

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')   // remove comments
    .replace(/\s+/g, ' ')               // collapse whitespace
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')
    .replace(/;}/g, '}')                // remove last semicolon before }
    .trim();
}

function beautifyCSS(css) {
  let out = '', indent = 0;
  const lines = minifyCSS(css).split('');
  for (const ch of lines) {
    if (ch === '{') { out += ' {\n' + '  '.repeat(++indent); }
    else if (ch === '}') { indent = Math.max(0, indent-1); out += '\n' + '  '.repeat(indent) + '}\n'; }
    else if (ch === ';') { out += ';\n' + '  '.repeat(indent); }
    else { out += ch; }
  }
  return out.trim();
}

const SAMPLE = `/* Navigation Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}`;

export default function CssMinifier() {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode]     = useState('minify');
  const [copied, setCopied] = useState(false);

  const process = (m = mode, val = input) => {
    if (!val.trim()) return;
    setOutput(m === 'minify' ? minifyCSS(val) : beautifyCSS(val));
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const savings = input && output && mode === 'minify'
    ? Math.max(0, ((1 - output.length / input.length) * 100)).toFixed(1)
    : null;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <div className="flex rounded-xl border border-surface-200 overflow-hidden">
          {['minify','beautify'].map(m => (
            <button key={m} onClick={() => { setMode(m); setOutput(''); }}
              className={`px-4 py-1.5 text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}>
              {m}
            </button>
          ))}
        </div>
        <button onClick={() => { setInput(SAMPLE); setOutput(''); }} className="text-xs text-surface-400 hover:text-brand-600 transition-colors ml-auto">
          Load sample
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="text-xs text-surface-400 hover:text-surface-700">Clear</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">
        <div className="p-4">
          <label className="block text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Input CSS</label>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            placeholder="Paste your CSS here..."
            className="w-full h-72 px-3 py-2.5 bg-surface-900 text-sky-300 font-mono text-sm leading-relaxed rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none custom-scrollbar" />
          <p className="text-xs text-surface-400 mt-1.5">{input.length.toLocaleString()} characters</p>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">Output</label>
            {output && <button onClick={copy} className="text-xs btn-ghost py-1 px-2">{copied ? '✅ Copied!' : '📋 Copy'}</button>}
          </div>
          <div className="w-full h-72 px-3 py-2.5 bg-surface-900 text-emerald-300 font-mono text-sm leading-relaxed rounded-xl overflow-auto custom-scrollbar whitespace-pre-wrap">
            {output || <span className="text-surface-500">Output appears here...</span>}
          </div>
          {savings && (
            <p className="text-xs text-emerald-600 mt-1.5 font-medium">✅ {savings}% smaller · {output.length.toLocaleString()} chars</p>
          )}
        </div>
      </div>

      <div className="px-5 py-3 border-t border-surface-200">
        <button onClick={() => process(mode, input)} className="btn-primary">
          {mode === 'minify' ? '📦 Minify CSS' : '✨ Beautify CSS'}
        </button>
      </div>
    </div>
  );
}
