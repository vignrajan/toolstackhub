'use client';
import { useState, useCallback } from 'react';

const GRADES_10 = [
  { label: 'O — Outstanding',   value: 10 },
  { label: 'A+ — Excellent',    value: 9  },
  { label: 'A — Very Good',     value: 8  },
  { label: 'B+ — Good',         value: 7  },
  { label: 'B — Above Average', value: 6  },
  { label: 'C — Average',       value: 5  },
  { label: 'P — Pass',          value: 4  },
  { label: 'F — Fail',          value: 0  },
];

const GRADES_4 = [
  { label: 'A+ / A  (4.0)', value: 4.0 },
  { label: 'A−      (3.7)', value: 3.7 },
  { label: 'B+      (3.3)', value: 3.3 },
  { label: 'B       (3.0)', value: 3.0 },
  { label: 'B−      (2.7)', value: 2.7 },
  { label: 'C+      (2.3)', value: 2.3 },
  { label: 'C       (2.0)', value: 2.0 },
  { label: 'D       (1.0)', value: 1.0 },
  { label: 'F       (0.0)', value: 0.0 },
];

const PCT_FORMULAS = [
  { id: 'x10',  label: 'CGPA × 10 (VTU, Mumbai, DU)',             fn: c => c * 10 },
  { id: 'x9.5', label: 'CGPA × 9.5 (CBSE & many affiliates)',     fn: c => c * 9.5 },
  { id: 'anna', label: '(CGPA − 0.5) × 10 (Anna University)',      fn: c => Math.max(0, (c - 0.5) * 10) },
  { id: 'mgr',  label: '(CGPA − 0.75) × 10',                       fn: c => Math.max(0, (c - 0.75) * 10) },
];

const CLASS_LABELS_10 = [
  { min: 9,   label: 'Outstanding / First Class with Distinction', color: 'text-purple-700 bg-purple-50 border-purple-200' },
  { min: 7.5, label: 'First Class with Distinction',               color: 'text-blue-700 bg-blue-50 border-blue-200'   },
  { min: 6.0, label: 'First Class',                                 color: 'text-green-700 bg-green-50 border-green-200' },
  { min: 5.0, label: 'Second Class',                                color: 'text-amber-700 bg-amber-50 border-amber-200' },
  { min: 4.0, label: 'Pass Class',                                   color: 'text-orange-700 bg-orange-50 border-orange-200' },
  { min: 0,   label: 'Fail',                                         color: 'text-red-700 bg-red-50 border-red-200'     },
];

const CLASS_LABELS_4 = [
  { min: 3.7, label: "Dean's List / Distinction", color: 'text-purple-700 bg-purple-50 border-purple-200' },
  { min: 3.0, label: 'First Class',               color: 'text-blue-700 bg-blue-50 border-blue-200'   },
  { min: 2.0, label: 'Second Class',              color: 'text-green-700 bg-green-50 border-green-200' },
  { min: 1.0, label: 'Pass',                       color: 'text-amber-700 bg-amber-50 border-amber-200' },
  { min: 0,   label: 'Fail',                       color: 'text-red-700 bg-red-50 border-red-200'     },
];

let nextId = 1;
const makeRow = () => ({ id: nextId++, name: '', credits: '', grade: '' });

export default function CgpaCalculator() {
  const [scale, setScale]     = useState('10');
  const [rows, setRows]       = useState(() => [makeRow(), makeRow(), makeRow()]);
  const [copied, setCopied]   = useState(false);

  const grades = scale === '10' ? GRADES_10 : GRADES_4;

  // ── Derived calculation ──────────────────────────────────────
  const valid = rows.filter(r => r.credits !== '' && r.grade !== '' && Number(r.credits) > 0);
  const totalCredits    = valid.reduce((s, r) => s + Number(r.credits), 0);
  const weightedPoints  = valid.reduce((s, r) => s + Number(r.credits) * Number(r.grade), 0);
  const cgpa            = totalCredits > 0 ? weightedPoints / totalCredits : null;
  const hasResult       = cgpa !== null && valid.length > 0;

  const classLabel = hasResult
    ? (scale === '10' ? CLASS_LABELS_10 : CLASS_LABELS_4).find(c => cgpa >= c.min)
    : null;

  // ── Handlers ─────────────────────────────────────────────────
  const updateRow = useCallback((id, field, value) => {
    setRows(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r));
  }, []);

  const addRow = () => setRows(prev => [...prev, makeRow()]);

  const removeRow = (id) => {
    if (rows.length <= 1) return;
    setRows(prev => prev.filter(r => r.id !== id));
  };

  const reset = () => {
    nextId = 1;
    setRows([makeRow(), makeRow(), makeRow()]);
  };

  const copyResult = () => {
    if (!hasResult) return;
    const lines = [
      `CGPA: ${cgpa.toFixed(2)} / ${scale}`,
      `Total Credits: ${totalCredits}`,
      '',
      ...PCT_FORMULAS.map(f => `${f.label}: ${f.fn(cgpa).toFixed(1)}%`),
      '',
      'Calculated with ToolStackHub CGPA Calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">

      {/* ── Scale selector ────────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-surface-700 mb-3">Select grading scale</p>
        <div className="flex gap-3 flex-wrap">
          {[
            { v: '10', label: '10-Point Scale',  sub: 'VTU, Mumbai, DU, most Indian universities' },
            { v: '4',  label: '4-Point GPA Scale', sub: 'BITS, some private/international programs' },
          ].map(opt => (
            <button
              key={opt.v}
              onClick={() => { setScale(opt.v); reset(); }}
              className={`flex-1 min-w-[160px] text-left p-4 rounded-xl border-2 transition-all ${
                scale === opt.v
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-surface-200 hover:border-surface-300'
              }`}
            >
              <div className={`font-semibold text-sm ${scale === opt.v ? 'text-brand-700' : 'text-surface-800'}`}>
                {opt.label}
              </div>
              <div className="text-xs text-surface-500 mt-0.5">{opt.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Subject table ─────────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-surface-100 flex items-center justify-between">
          <h3 className="font-semibold text-surface-900">Enter your subjects</h3>
          <button
            onClick={reset}
            className="text-xs text-surface-500 hover:text-surface-700 transition-colors"
          >
            Reset all
          </button>
        </div>

        {/* Header row */}
        <div className="hidden sm:grid grid-cols-[2fr_1fr_2fr_auto] gap-3 px-5 py-2 bg-surface-50 border-b border-surface-100 text-xs font-semibold text-surface-500 uppercase tracking-wide">
          <span>Subject (optional)</span>
          <span>Credits</span>
          <span>Grade</span>
          <span className="w-8" />
        </div>

        <div className="divide-y divide-surface-100">
          {rows.map((row, idx) => (
            <div key={row.id} className="grid grid-cols-[2fr_1fr_2fr_auto] gap-3 items-center px-5 py-3">
              <input
                type="text"
                placeholder={`Subject ${idx + 1}`}
                value={row.name}
                onChange={e => updateRow(row.id, 'name', e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300 placeholder:text-surface-300"
              />
              <input
                type="number"
                placeholder="e.g. 4"
                min="0.5"
                max="10"
                step="0.5"
                value={row.credits}
                onChange={e => updateRow(row.id, 'credits', e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300 placeholder:text-surface-300"
              />
              <select
                value={row.grade}
                onChange={e => updateRow(row.id, 'grade', e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300 text-surface-700 bg-white"
              >
                <option value="">Select grade</option>
                {grades.map(g => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
              <button
                onClick={() => removeRow(row.id)}
                disabled={rows.length <= 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-red-500 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Remove row"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-surface-100">
          <button
            onClick={addRow}
            className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            <span className="text-lg leading-none">+</span> Add subject
          </button>
        </div>
      </div>

      {/* ── Results ───────────────────────────────────────────── */}
      {hasResult ? (
        <div className="space-y-4">

          {/* CGPA card */}
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-medium text-brand-600 mb-1">Your CGPA</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-5xl text-brand-700">
                    {cgpa.toFixed(2)}
                  </span>
                  <span className="text-brand-500 font-medium">/ {scale}.0</span>
                </div>
                <p className="text-sm text-brand-600 mt-1">
                  Based on {valid.length} subject{valid.length !== 1 ? 's' : ''} · {totalCredits} total credits
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {classLabel && (
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${classLabel.color}`}>
                    {classLabel.label}
                  </span>
                )}
                <button
                  onClick={copyResult}
                  className="text-xs font-medium text-brand-600 hover:text-brand-800 border border-brand-300 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {copied ? '✓ Copied' : 'Copy results'}
                </button>
              </div>
            </div>
          </div>

          {/* Percentage conversions */}
          {scale === '10' && (
            <div className="bg-white border border-surface-200 rounded-2xl p-5">
              <h3 className="font-semibold text-surface-900 mb-4">
                Percentage equivalent
              </h3>
              <div className="space-y-2">
                {PCT_FORMULAS.map(f => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between gap-4 py-2.5 border-b border-surface-100 last:border-0"
                  >
                    <span className="text-sm text-surface-600">{f.label}</span>
                    <span className="font-semibold text-surface-900 tabular-nums shrink-0">
                      {f.fn(cgpa).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-surface-400 mt-3">
                Check your university's official CGPA-to-percentage conversion formula before using these in applications.
              </p>
            </div>
          )}

          {/* Subject breakdown */}
          <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-surface-100">
              <h3 className="font-semibold text-surface-900">Subject breakdown</h3>
            </div>
            <div className="divide-y divide-surface-100">
              {valid.map(r => {
                const contrib = (Number(r.credits) / totalCredits) * 100;
                return (
                  <div key={r.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 px-5 py-2.5 text-sm items-center">
                    <span className="text-surface-700 truncate">{r.name || '—'}</span>
                    <span className="text-surface-500">{r.credits} cr</span>
                    <span className="font-medium text-surface-900">{Number(r.grade).toFixed(1)}</span>
                    <span className="text-surface-400 text-xs">{contrib.toFixed(0)}% weight</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 text-center">
          <p className="text-surface-400 text-sm">
            Enter credits and grades above to see your CGPA
          </p>
        </div>
      )}
    </div>
  );
}
