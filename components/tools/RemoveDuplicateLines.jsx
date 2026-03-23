'use client';
import { useState } from 'react';

const SAMPLE = `apple
banana
apple
orange
banana
grape
orange
mango
grape`;

export default function RemoveDuplicateLines() {
  const [input, setInput]       = useState('');
  const [output, setOutput]     = useState('');
  const [caseMode, setCaseMode] = useState('insensitive'); // 'sensitive' | 'insensitive'
  const [trimMode, setTrimMode] = useState(true);
  const [ignoreEmpty, setIgnoreEmpty] = useState(true);
  const [sortOutput, setSortOutput]   = useState(false);
  const [stats, setStats]       = useState(null);
  const [copied, setCopied]     = useState(false);

  const process = () => {
    const raw = input;
    if (!raw.trim()) return;

    let lines = raw.split('\n');

    // Trim whitespace from each line if enabled
    if (trimMode) lines = lines.map(l => l.trim());

    // Remove empty lines if enabled
    if (ignoreEmpty) lines = lines.filter(l => l.length > 0);

    const total = lines.length;
    const seen  = new Set();
    const unique = [];

    lines.forEach(line => {
      const key = caseMode === 'sensitive' ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(line);
      }
    });

    // Sort if enabled
    const result = sortOutput
      ? [...unique].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: caseMode === 'sensitive' ? 'variant' : 'base' }))
      : unique;

    setOutput(result.join('\n'));
    setStats({
      total,
      unique:   result.length,
      removed:  total - result.length,
    });
  };

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setInput(''); setOutput(''); setStats(null);
  };

  const loadSample = () => {
    setInput(SAMPLE); setOutput(''); setStats(null);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <button onClick={process}
          className="btn-primary text-sm py-1.5 px-4">
          Remove Duplicates ✨
        </button>
        <button onClick={clear}
          className="btn-secondary text-sm py-1.5 px-3">
          Clear
        </button>
        <button onClick={loadSample}
          className="text-xs text-surface-400 hover:text-brand-600 transition-colors">
          Load sample
        </button>

        {/* Options */}
        <div className="flex flex-wrap items-center gap-3 ml-auto">
          {/* Case mode */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs text-surface-500 font-medium">Case:</label>
            <select
              value={caseMode}
              onChange={e => setCaseMode(e.target.value)}
              className="text-xs border border-surface-200 rounded-lg px-2 py-1.5 bg-white text-surface-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="insensitive">Ignore case</option>
              <option value="sensitive">Case sensitive</option>
            </select>
          </div>

          {/* Toggles */}
          <label className="flex items-center gap-1.5 text-xs text-surface-600 cursor-pointer">
            <input type="checkbox" checked={trimMode}
              onChange={e => setTrimMode(e.target.checked)}
              className="accent-brand-600 w-3.5 h-3.5" />
            Trim whitespace
          </label>
          <label className="flex items-center gap-1.5 text-xs text-surface-600 cursor-pointer">
            <input type="checkbox" checked={ignoreEmpty}
              onChange={e => setIgnoreEmpty(e.target.checked)}
              className="accent-brand-600 w-3.5 h-3.5" />
            Ignore empty lines
          </label>
          <label className="flex items-center gap-1.5 text-xs text-surface-600 cursor-pointer">
            <input type="checkbox" checked={sortOutput}
              onChange={e => setSortOutput(e.target.checked)}
              className="accent-brand-600 w-3.5 h-3.5" />
            Sort output
          </label>
        </div>
      </div>

      {/* Stats bar */}
      {stats && (
        <div className="flex items-center gap-6 px-5 py-2.5 bg-emerald-50 border-b border-emerald-200">
          <span className="text-xs text-emerald-700">
            <strong>{stats.total}</strong> lines input
          </span>
          <span className="text-xs text-emerald-700">
            <strong>{stats.unique}</strong> unique lines
          </span>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
            ✅ {stats.removed} duplicate{stats.removed !== 1 ? 's' : ''} removed
          </span>
        </div>
      )}

      {/* Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* Input */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">
              Input Text
            </label>
            <span className="text-xs text-surface-400">
              {input.split('\n').filter(Boolean).length} lines
            </span>
          </div>
          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setOutput(''); setStats(null); }}
            placeholder={'Paste your text here — one item per line.\n\nExample:\napple\nbanana\napple\norange\nbanana'}
            className="w-full h-[360px] px-3 py-2.5 bg-surface-900 text-emerald-300 font-mono text-sm leading-relaxed rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">
              Unique Lines Only
            </label>
            {output && (
              <button onClick={copy} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            )}
          </div>
          <div className="w-full h-[360px] px-3 py-2.5 bg-surface-900 font-mono text-sm leading-relaxed rounded-xl overflow-auto">
            {output
              ? <pre className="text-sky-300 whitespace-pre-wrap">{output}</pre>
              : <span className="text-surface-500">Unique lines will appear here after clicking Remove Duplicates…</span>
            }
          </div>
        </div>
      </div>

      {/* Download bar */}
      {output && (
        <div className="px-5 py-3 bg-surface-50 border-t border-surface-200 flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs text-surface-500">
            Showing <strong>{stats?.unique}</strong> unique lines — <strong>{stats?.removed}</strong> duplicates removed
          </p>
          <button
            onClick={() => {
              const blob = new Blob([output], { type: 'text/plain' });
              const url  = URL.createObjectURL(blob);
              const a    = document.createElement('a');
              a.href = url; a.download = 'unique-lines.txt'; a.click();
              URL.revokeObjectURL(url);
            }}
            className="btn-secondary text-sm py-1.5 px-4"
          >
            ⬇️ Download .txt
          </button>
        </div>
      )}
    </div>
  );
}