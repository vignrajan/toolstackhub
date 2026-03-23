'use client';
import { useState } from 'react';

export default function RandomNumber() {
  const [min, setMin]           = useState(1);
  const [max, setMax]           = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [decimals, setDecimals] = useState(false);
  const [noDupes, setNoDupes]   = useState(false);
  const [results, setResults]   = useState([]);
  const [error, setError]       = useState('');
  const [copied, setCopied]     = useState(false);
  const [history, setHistory]   = useState([]);

  const generate = () => {
    setError('');
    const mn  = Number(min);
    const mx  = Number(max);
    const qty = Math.min(1000, Math.max(1, Number(quantity)));

    if (mn >= mx) { setError('Min must be less than max.'); return; }
    if (noDupes && qty > (mx - mn + 1)) {
      setError(`Cannot generate ${qty} unique integers in range [${mn}, ${mx}].`);
      return;
    }

    const nums = [];
    const used = new Set();

    for (let i = 0; i < qty; i++) {
      let n;
      let tries = 0;
      do {
        n = decimals
          ? parseFloat((Math.random() * (mx - mn) + mn).toFixed(4))
          : Math.floor(Math.random() * (mx - mn + 1)) + mn;
        tries++;
        if (tries > 10000) break;
      } while (noDupes && used.has(n));
      used.add(n);
      nums.push(n);
    }

    setResults(nums);
    setHistory(h => [nums, ...h].slice(0, 5));
  };

  const copyAll = () => {
    navigator.clipboard.writeText(results.join(', '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presets = [
    { label: 'Dice (1–6)',    min: 1,  max: 6,  qty: 1 },
    { label: 'Coin (0–1)',    min: 0,  max: 1,  qty: 1 },
    { label: 'Percent (0–100)', min: 0, max: 100, qty: 1 },
    { label: 'Lottery (1–49)', min: 1, max: 49, qty: 6 },
    { label: '100 numbers',   min: 1,  max: 1000, qty: 100 },
  ];

  const stats = results.length > 1 ? {
    sum:  results.reduce((a, b) => a + b, 0),
    avg:  (results.reduce((a, b) => a + b, 0) / results.length).toFixed(2),
    mn:   Math.min(...results),
    mx:   Math.max(...results),
  } : null;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Random Number Generator</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Presets */}
        <div>
          <p className="text-xs font-medium text-surface-500 mb-2">Quick presets:</p>
          <div className="flex flex-wrap gap-2">
            {presets.map(p => (
              <button
                key={p.label}
                onClick={() => { setMin(p.min); setMax(p.max); setQuantity(p.qty); }}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Minimum</label>
            <input type="number" value={min} onChange={e => setMin(e.target.value)} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Maximum</label>
            <input type="number" value={max} onChange={e => setMax(e.target.value)} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Quantity</label>
            <input type="number" value={quantity} min="1" max="1000"
              onChange={e => setQuantity(e.target.value)} className="input-field" />
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer">
            <input type="checkbox" checked={decimals} onChange={e => setDecimals(e.target.checked)}
              className="w-4 h-4 accent-brand-600 rounded" />
            Include decimals
          </label>
          <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer">
            <input type="checkbox" checked={noDupes} onChange={e => setNoDupes(e.target.checked)}
              className="w-4 h-4 accent-brand-600 rounded" />
            No duplicates
          </label>
        </div>

        {error && <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">❌ {error}</p>}

        <button onClick={generate} className="btn-primary w-full text-base py-3">
          🎲 Generate {quantity > 1 ? `${quantity} Numbers` : 'Number'}
        </button>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-surface-700">Results</label>
              <button onClick={copyAll} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy All'}
              </button>
            </div>

            {/* Big display for single number */}
            {results.length === 1 ? (
              <div className="text-center py-8 bg-surface-50 rounded-2xl border border-surface-200">
                <div className="font-display font-bold text-6xl text-brand-600">{results[0]}</div>
                <p className="text-surface-400 text-sm mt-2">Range: {min} – {max}</p>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto custom-scrollbar p-3 bg-surface-50 rounded-xl border border-surface-200">
                  {results.map((n, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white border border-surface-200 rounded-lg font-mono text-sm text-surface-800">
                      {n}
                    </span>
                  ))}
                </div>
                {stats && (
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: 'Sum', value: stats.sum.toLocaleString() },
                      { label: 'Avg', value: stats.avg },
                      { label: 'Min', value: stats.mn },
                      { label: 'Max', value: stats.mx },
                    ].map(s => (
                      <div key={s.label} className="text-center p-2 bg-surface-50 rounded-xl border border-surface-200">
                        <div className="font-bold text-surface-900 text-sm">{s.value}</div>
                        <div className="text-xs text-surface-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
