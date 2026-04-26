'use client';
import { useState, useMemo, useCallback } from 'react';

const SEPARATORS = [
  { id: 'newline', label: 'New Line', value: '\n'  },
  { id: 'space',   label: 'Space',    value: ' '   },
  { id: 'comma',   label: 'Comma',    value: ', '  },
  { id: 'none',    label: 'None',     value: ''    },
  { id: 'custom',  label: 'Custom',   value: null  },
];

const QUICK_COUNTS = [3, 5, 10, 50, 100, 1000];

const MODES = [
  { id: 'simple',    icon: '🔁', label: 'Simple Repeat'     },
  { id: 'increment', icon: '🔢', label: 'With Numbers'      },
  { id: 'rotate',    icon: '🔄', label: 'Multi-Text Rotate' },
];

const PLACEHOLDERS = ['{n}', '#', '{i}', '{num}'];
const ZERO_PADS = [
  { label: 'None',                   digits: 0 },
  { label: '2 digits (01, 02)',      digits: 2 },
  { label: '3 digits (001, 002)',    digits: 3 },
  { label: '4 digits (0001, 0002)', digits: 4 },
];

// Quick-start examples — each sets mode + fields instantly
const QUICK_EXAMPLES = [
  {
    label: '😂 × 100',
    desc: 'WhatsApp emoji flood',
    mode: 'simple',
    text: '😂',
    count: 100,
    sepId: 'none',
  },
  {
    label: '🎂 Birthday spam',
    desc: 'Repeat for WhatsApp',
    mode: 'simple',
    text: 'Happy Birthday! 🎂',
    count: 20,
    sepId: 'newline',
  },
  {
    label: '100 test emails',
    desc: 'Numbered sequence',
    mode: 'increment',
    text: 'user_{n}@test.com',
    count: 100,
    sepId: 'newline',
    incPlaceholder: '{n}',
    incStart: 1,
    incStep: 1,
    incPad: 0,
  },
  {
    label: '500 rows "N/A"',
    desc: 'Fill spreadsheet',
    mode: 'simple',
    text: 'N/A',
    count: 500,
    sepId: 'newline',
  },
  {
    label: 'Rotate 3 colours',
    desc: 'Round-robin data',
    mode: 'rotate',
    text: 'Red\nGreen\nBlue',
    count: 9,
    sepId: 'newline',
  },
  {
    label: 'Numbered list',
    desc: 'Item 1, Item 2…',
    mode: 'increment',
    text: 'Item {n}',
    count: 20,
    sepId: 'newline',
    incPlaceholder: '{n}',
    incStart: 1,
    incStep: 1,
    incPad: 0,
  },
];

function padNum(n, digits) {
  if (digits === 0) return String(n);
  return String(n).padStart(digits, '0');
}

export default function TextRepeater() {
  // ── shared state ────────────────────────────────────────
  const [mode,           setMode]           = useState('simple');
  const [text,           setText]           = useState('');
  const [count,          setCount]          = useState(5);
  const [sepId,          setSepId]          = useState('newline');
  const [customSep,      setCustomSep]      = useState('');
  const [output,         setOutput]         = useState('');
  const [copied,         setCopied]         = useState(false);

  // ── increment-mode state ─────────────────────────────────
  const [incStart,       setIncStart]       = useState(1);
  const [incStep,        setIncStep]        = useState(1);
  const [incPad,         setIncPad]         = useState(0);
  const [incPlaceholder, setIncPlaceholder] = useState('{n}');

  // ── derived separator ────────────────────────────────────
  const sep = useMemo(() => {
    const found = SEPARATORS.find(s => s.id === sepId);
    return sepId === 'custom' ? customSep : (found?.value ?? '\n');
  }, [sepId, customSep]);

  // ── apply a quick example ────────────────────────────────
  const applyExample = useCallback((ex) => {
    setMode(ex.mode);
    setText(ex.text);
    setCount(ex.count);
    setSepId(ex.sepId);
    if (ex.incPlaceholder) setIncPlaceholder(ex.incPlaceholder);
    if (ex.incStart !== undefined) setIncStart(ex.incStart);
    if (ex.incStep  !== undefined) setIncStep(ex.incStep);
    if (ex.incPad   !== undefined) setIncPad(ex.incPad);
    setOutput('');
    setCopied(false);
    // Scroll to tool smoothly after applying
    setTimeout(() => {
      document.getElementById('tool-input')?.focus();
    }, 100);
  }, []);

  // ── generate output ──────────────────────────────────────
  const generate = useCallback(() => {
    const n = Math.min(Math.max(1, Math.floor(count)), 1000);

    if (mode === 'simple') {
      if (!text) { setOutput(''); return; }
      setOutput(Array.from({ length: n }, () => text).join(sep));
    } else if (mode === 'increment') {
      if (!text) { setOutput(''); return; }
      const lines = Array.from({ length: n }, (_, i) => {
        const num = incStart + i * incStep;
        return text.split(incPlaceholder).join(padNum(num, incPad));
      });
      setOutput(lines.join(sep));
    } else if (mode === 'rotate') {
      const rawLines = text.split('\n').filter(l => l.length > 0);
      if (rawLines.length === 0) { setOutput(''); return; }
      const lines = Array.from({ length: n }, (_, i) => rawLines[i % rawLines.length]);
      setOutput(lines.join(sep));
    }
  }, [mode, text, count, sep, incStart, incStep, incPad, incPlaceholder]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback */ }
  }, [output]);

  const handleClear = () => { setText(''); setOutput(''); setCopied(false); };

  const wordCount = output ? output.split(/\s+/).filter(Boolean).length : 0;
  const charCount = output.length;
  const lineCount = output ? output.split('\n').length : 0;

  const rotateLines = useMemo(() => {
    if (mode !== 'rotate') return [];
    return text.split('\n').filter(l => l.length > 0);
  }, [mode, text]);

  const placeholderMissing = mode === 'increment' && text.length > 0 && !text.includes(incPlaceholder);

  const inputPlaceholder =
    mode === 'simple'    ? 'Type or paste your text here...' :
    mode === 'increment' ? `Use ${incPlaceholder} where the number should go\nExample: user_{n}@test.com  or  Item {n}` :
                           'Enter multiple texts — one per line.\nThe tool cycles through them in order.\n\nExample:\nRed\nGreen\nBlue';

  return (
    <div className="space-y-5">

      {/* ── Quick Examples ──────────────────────────────── */}
      <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4">
        <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">
          ⚡ Quick Start — click any example to load it
        </div>
        <div className="flex flex-wrap gap-2">
          {QUICK_EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => applyExample(ex)}
              className="flex flex-col items-start px-3 py-2 bg-white border border-surface-200 rounded-xl hover:border-brand-400 hover:bg-brand-50 transition-all text-left group"
            >
              <span className="text-xs font-bold text-surface-800 group-hover:text-brand-700">{ex.label}</span>
              <span className="text-xs text-surface-400 group-hover:text-brand-500">{ex.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mode tabs ────────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl p-2 flex gap-2">
        {MODES.map(m => (
          <button key={m.id} onClick={() => { setMode(m.id); setOutput(''); }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-bold transition-all ${
              mode === m.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-surface-600 hover:bg-surface-100'
            }`}>
            <span>{m.icon}</span>
            <span className="hidden sm:inline" style={mode === m.id ? { color: '#ffffff' } : {}}>
              {m.label}
            </span>
          </button>
        ))}
      </div>

      {/* ── Increment settings ───────────────────────────── */}
      {mode === 'increment' && (
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">🔢 Number Settings</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Start Number</label>
              <input type="number" value={incStart}
                onChange={e => setIncStart(parseInt(e.target.value) || 0)}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white font-semibold" />
            </div>
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Step</label>
              <input type="number" value={incStep}
                onChange={e => setIncStep(parseInt(e.target.value) || 1)}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white font-semibold" />
            </div>
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Placeholder</label>
              <select value={incPlaceholder} onChange={e => setIncPlaceholder(e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white font-semibold">
                {PLACEHOLDERS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Zero-Padding</label>
              <select value={incPad} onChange={e => setIncPad(Number(e.target.value))}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white font-semibold">
                {ZERO_PADS.map(z => <option key={z.digits} value={z.digits}>{z.label}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-surface-400">Preview:</span>
            {[0, 1, 2].map(i => (
              <span key={i} className="text-xs font-mono bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">
                {padNum(incStart + i * incStep, incPad)}
              </span>
            ))}
            <span className="text-xs text-surface-400">… up to {padNum(incStart + (count - 1) * incStep, incPad)}</span>
          </div>
        </div>
      )}

      {/* ── Rotate info ──────────────────────────────────── */}
      {mode === 'rotate' && rotateLines.length > 0 && (
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0">🔄</span>
          <div className="text-sm text-purple-800">
            <strong>{rotateLines.length} texts</strong> detected · cycling {count} times →
            <strong> {count} items</strong> total
            {count % rotateLines.length !== 0 && (
              <span className="text-purple-600"> (last cycle is partial — {count % rotateLines.length} of {rotateLines.length})</span>
            )}
          </div>
        </div>
      )}

      {/* ── Input + Output grid ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Input */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-surface-700">
              {mode === 'simple'    ? '📝 Your Text' :
               mode === 'increment' ? `📝 Template (use ${incPlaceholder} for the number)` :
                                      '📝 Texts to Rotate (one per line)'}
            </label>
            <button onClick={handleClear} className="text-xs text-surface-400 hover:text-surface-600 transition-colors">
              Clear
            </button>
          </div>
          <textarea
            id="tool-input"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={inputPlaceholder}
            rows={mode === 'rotate' ? 8 : 5}
            className="w-full text-sm text-surface-900 bg-white border border-surface-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-brand-400 resize-none leading-relaxed"
          />

          {placeholderMissing && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-800 flex items-start gap-2">
              <span className="shrink-0">⚠️</span>
              <span>Placeholder <strong>{incPlaceholder}</strong> not found in your text. Add it where you want the number to appear.</span>
            </div>
          )}

          {/* Count */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-surface-500">
                {mode === 'rotate' ? 'Total Items' : 'Repeat Count'}
              </label>
              <span className="text-xs text-surface-400">Max 1,000</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <input
                type="number"
                value={count}
                min={1} max={1000}
                onChange={e => setCount(Math.min(1000, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-24 text-sm font-bold border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 text-center"
              />
              {QUICK_COUNTS.map(n => (
                <button key={n} onClick={() => setCount(n)}
                  className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                    count === n
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-white border-surface-200 text-surface-600 hover:border-brand-300'
                  }`}>
                  ×{n}
                </button>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-surface-500 block mb-2">Separator</label>
            <div className="flex gap-2 flex-wrap">
              {SEPARATORS.map(s => (
                <button key={s.id} onClick={() => setSepId(s.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                    sepId === s.id
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-white border-surface-200 text-surface-600 hover:border-brand-300'
                  }`}>
                  {s.label}
                </button>
              ))}
            </div>
            {sepId === 'custom' && (
              <input
                type="text"
                value={customSep}
                onChange={e => setCustomSep(e.target.value)}
                placeholder='e.g.  " | "  or  " → "'
                className="mt-2 w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400"
              />
            )}
          </div>

          {/* Generate */}
          <button
            onClick={generate}
            className="w-full py-3.5 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 active:scale-95 transition-all text-sm flex items-center justify-center gap-2 shadow-sm">
            {mode === 'simple'    ? '🔁 Repeat Text'       :
             mode === 'increment' ? '🔢 Generate Sequence' :
                                    '🔄 Rotate & Generate'}
          </button>
        </div>

        {/* Output */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-surface-700">📋 Output</label>
            {output && (
              <span className="text-xs text-surface-400">
                {charCount.toLocaleString()} chars · {wordCount.toLocaleString()} words · {lineCount.toLocaleString()} lines
              </span>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Your output will appear here after clicking the button above..."
            rows={mode === 'rotate' ? 8 : 5}
            className="w-full text-sm text-surface-900 bg-surface-50 border border-surface-200 rounded-2xl px-4 py-3 focus:outline-none resize-none leading-relaxed font-mono"
          />

          {output && (
            <button onClick={handleCopy}
              className={`w-full py-3 font-bold rounded-2xl transition-all text-sm flex items-center justify-center gap-2 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-surface-900 text-white hover:bg-surface-800'
              }`}>
              {copied ? '✅ Copied to Clipboard!' : '📋 Copy Output'}
            </button>
          )}

          {/* Mode tips when empty */}
          {!output && mode === 'increment' && (
            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold text-surface-600 mb-2">💡 Number Mode Examples</div>
              {[
                { input: 'user_{n}@test.com',            desc: '→ 100 numbered emails'    },
                { input: '<option value="{n}">{n}</option>', desc: '→ HTML options 1–50' },
                { input: 'photo_{n}.jpg',                 desc: '→ sequential filenames'  },
                { input: 'Row {n}: data',                 desc: '→ spreadsheet rows'      },
              ].map(ex => (
                <div key={ex.input} className="flex items-start gap-2 text-xs">
                  <code className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded font-mono shrink-0">{ex.input}</code>
                  <span className="text-surface-500">{ex.desc}</span>
                </div>
              ))}
            </div>
          )}

          {!output && mode === 'rotate' && (
            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold text-surface-600 mb-2">💡 Rotate Mode Examples</div>
              {[
                { lines: 'Red / Green / Blue',   count: '9',  desc: '→ 3 colours × 3 cycles' },
                { lines: 'Male / Female / Other', count: '30', desc: '→ rotating test data'   },
                { lines: 'Mon / Tue / Wed / ...',  count: '14', desc: '→ 2 weeks of days'      },
              ].map(ex => (
                <div key={ex.lines} className="flex items-start gap-2 text-xs">
                  <code className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-mono shrink-0">{ex.lines}</code>
                  <span className="text-surface-500">{ex.desc} ({ex.count} items)</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}