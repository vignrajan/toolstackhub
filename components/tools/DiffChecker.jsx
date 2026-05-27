'use client';
import { useState, useMemo } from 'react';

function computeDiff(original, modified) {
  const origLines = original.split('\n');
  const modLines  = modified.split('\n');

  const m = origLines.length;
  const n = modLines.length;

  // LCS-based diff using DP
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (origLines[i] === modLines[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  const result = [];
  let i = 0, j = 0;
  while (i < m || j < n) {
    if (i < m && j < n && origLines[i] === modLines[j]) {
      result.push({ type: 'equal', value: origLines[i] });
      i++; j++;
    } else if (j < n && (i >= m || dp[i + 1][j] >= dp[i][j + 1])) {
      result.push({ type: 'added', value: modLines[j] });
      j++;
    } else {
      result.push({ type: 'removed', value: origLines[i] });
      i++;
    }
  }
  return result;
}

const EXAMPLE_A = `function greet(name) {
  console.log("Hello, " + name);
  return name;
}

const result = greet("World");`;

const EXAMPLE_B = `function greet(name, greeting = "Hello") {
  console.log(greeting + ", " + name + "!");
}

const result = greet("World", "Hi");
console.log(result);`;

export default function DiffChecker() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [view,  setView]  = useState('split'); // split | unified

  const diff = useMemo(() => {
    if (!textA && !textB) return [];
    return computeDiff(textA, textB);
  }, [textA, textB]);

  const stats = useMemo(() => ({
    added:   diff.filter(d => d.type === 'added').length,
    removed: diff.filter(d => d.type === 'removed').length,
    equal:   diff.filter(d => d.type === 'equal').length,
  }), [diff]);

  const hasDiff = diff.length > 0;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-lg">
          <button
            onClick={() => setView('split')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${view === 'split' ? 'bg-white shadow-sm text-surface-900' : 'text-surface-500 hover:text-surface-700'}`}
          >
            Split
          </button>
          <button
            onClick={() => setView('unified')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${view === 'unified' ? 'bg-white shadow-sm text-surface-900' : 'text-surface-500 hover:text-surface-700'}`}
          >
            Unified
          </button>
        </div>
        <button
          onClick={() => { setTextA(EXAMPLE_A); setTextB(EXAMPLE_B); }}
          className="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
        >
          Load Example
        </button>
      </div>

      {/* Stats banner */}
      {hasDiff && (
        <div className="flex items-center gap-4 px-5 py-2 border-b border-surface-100 bg-white">
          <span className="text-xs font-medium text-emerald-600">+{stats.added} added</span>
          <span className="text-xs font-medium text-red-600">−{stats.removed} removed</span>
          <span className="text-xs text-surface-400">{stats.equal} unchanged</span>
          {stats.added === 0 && stats.removed === 0 && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Identical ✓</span>
          )}
        </div>
      )}

      <div className="p-5">
        {view === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Original</label>
              <textarea
                value={textA}
                onChange={e => setTextA(e.target.value)}
                placeholder="Paste original text here…"
                className="textarea-field font-mono text-sm min-h-[240px]"
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Modified</label>
              <textarea
                value={textB}
                onChange={e => setTextB(e.target.value)}
                placeholder="Paste modified text here…"
                className="textarea-field font-mono text-sm min-h-[240px]"
                spellCheck={false}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Original</label>
              <textarea
                value={textA}
                onChange={e => setTextA(e.target.value)}
                placeholder="Paste original text here…"
                className="textarea-field font-mono text-sm min-h-[120px]"
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Modified</label>
              <textarea
                value={textB}
                onChange={e => setTextB(e.target.value)}
                placeholder="Paste modified text here…"
                className="textarea-field font-mono text-sm min-h-[120px]"
                spellCheck={false}
              />
            </div>
          </div>
        )}

        {/* Diff output */}
        {hasDiff && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
              {view === 'unified' ? 'Unified Diff' : 'Diff Result'}
            </p>
            {view === 'unified' ? (
              <div className="bg-surface-900 rounded-xl overflow-auto max-h-[400px]">
                <div className="p-4 font-mono text-xs leading-relaxed">
                  {diff.map((line, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 ${
                        line.type === 'added'   ? 'text-emerald-400' :
                        line.type === 'removed' ? 'text-red-400' :
                        'text-surface-400'
                      }`}
                    >
                      <span className="w-4 shrink-0 select-none opacity-60">
                        {line.type === 'added' ? '+' : line.type === 'removed' ? '−' : ' '}
                      </span>
                      <span className="whitespace-pre-wrap break-all">{line.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left: original with removed highlighted */}
                <div className="bg-surface-900 rounded-xl overflow-auto max-h-[400px]">
                  <div className="px-3 py-2 border-b border-surface-700 text-[10px] font-semibold text-surface-400 uppercase tracking-wider">Original</div>
                  <div className="p-3 font-mono text-xs leading-relaxed">
                    {diff.filter(d => d.type !== 'added').map((line, i) => (
                      <div
                        key={i}
                        className={`px-1 rounded ${line.type === 'removed' ? 'bg-red-900/40 text-red-300' : 'text-surface-300'}`}
                      >
                        <span className="whitespace-pre-wrap break-all">{line.value || ' '}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: modified with added highlighted */}
                <div className="bg-surface-900 rounded-xl overflow-auto max-h-[400px]">
                  <div className="px-3 py-2 border-b border-surface-700 text-[10px] font-semibold text-surface-400 uppercase tracking-wider">Modified</div>
                  <div className="p-3 font-mono text-xs leading-relaxed">
                    {diff.filter(d => d.type !== 'removed').map((line, i) => (
                      <div
                        key={i}
                        className={`px-1 rounded ${line.type === 'added' ? 'bg-emerald-900/40 text-emerald-300' : 'text-surface-300'}`}
                      >
                        <span className="whitespace-pre-wrap break-all">{line.value || ' '}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {!hasDiff && (
          <div className="mt-4 text-center py-12 text-surface-400">
            <div className="text-4xl mb-3">⟺</div>
            <p className="text-sm">Paste text in both boxes to see differences</p>
          </div>
        )}
      </div>
    </div>
  );
}
