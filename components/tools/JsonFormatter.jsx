'use client';
import { useState } from 'react';

const SAMPLE_JSON = `{
  "name": "ToolStackHub",
  "version": "1.0.0",
  "tools": [
    { "id": 1, "name": "JSON Formatter", "category": "developer" },
    { "id": 2, "name": "Base64 Encoder", "category": "developer" }
  ],
  "active": true,
  "meta": { "created": "2024-01-01", "stars": 1234 }
}`;

export default function JsonFormatter() {
  const [input, setInput]     = useState('');
  const [output, setOutput]   = useState('');
  const [error, setError]     = useState('');
  const [indent, setIndent]   = useState(2);
  const [copied, setCopied]   = useState(false);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError('');
    } catch (e) {
      setError(e.message);
      setOutput('');
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError(e.message);
      setOutput('');
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError('');
      setOutput('✅ Valid JSON!');
    } catch (e) {
      setError(e.message);
      setOutput('');
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadSample = () => {
    setInput(SAMPLE_JSON.trim());
    setOutput('');
    setError('');
  };

  const highlight = (json) => {
    if (!json) return '';
    return json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
          let cls = 'text-amber-300';
          if (/^"/.test(match)) {
            cls = /:$/.test(match) ? 'text-sky-300' : 'text-emerald-300';
          } else if (/true|false/.test(match)) {
            cls = 'text-violet-300';
          } else if (/null/.test(match)) {
            cls = 'text-red-300';
          }
          return `<span class="${cls}">${match}</span>`;
        }
      );
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <button onClick={format}    className="btn-primary text-sm py-1.5">Format ✨</button>
        <button onClick={minify}    className="btn-secondary text-sm py-1.5">Minify 📦</button>
        <button onClick={validate}  className="btn-ghost text-sm py-1.5">Validate ✅</button>
        <div className="flex items-center gap-1.5 ml-auto">
          <label className="text-xs text-surface-500">Indent:</label>
          <select
            value={indent}
            onChange={e => setIndent(Number(e.target.value))}
            className="text-xs border border-surface-200 rounded-lg px-2 py-1 bg-white"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
          </select>
        </div>
        <button onClick={loadSample} className="text-xs text-surface-400 hover:text-brand-600 transition-colors">
          Load sample
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">
        <div className="p-4">
          <label className="block text-xs font-medium text-surface-500 mb-2 uppercase tracking-wider">Input JSON</label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Paste your JSON here…'
            className="w-full h-[320px] px-3 py-2.5 bg-surface-900 text-emerald-300 font-mono text-sm leading-relaxed rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none custom-scrollbar"
            spellCheck={false}
          />
          {error && (
            <p className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ❌ {error}
            </p>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">Output</label>
            {output && (
              <button onClick={copy} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            )}
          </div>
          <div
            className="w-full h-[320px] px-3 py-2.5 bg-surface-900 font-mono text-sm leading-relaxed rounded-xl overflow-auto custom-scrollbar"
            dangerouslySetInnerHTML={{ __html: highlight(output) || '<span class="text-surface-500">Output will appear here…</span>' }}
          />
        </div>
      </div>
    </div>
  );
}
