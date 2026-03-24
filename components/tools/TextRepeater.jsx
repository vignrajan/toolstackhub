'use client';
import { useState } from 'react';

export default function TextRepeater() {
  const [text,      setText]      = useState('');
  const [times,     setTimes]     = useState(5);
  const [separator, setSeparator] = useState('newline'); // newline | space | comma | custom
  const [custom,    setCustom]    = useState('');
  const [output,    setOutput]    = useState('');
  const [copied,    setCopied]    = useState(false);
  const [processed, setProcessed] = useState(false);

  const getSeparator = () => {
    switch (separator) {
      case 'newline': return '\n';
      case 'space':   return ' ';
      case 'comma':   return ', ';
      case 'none':    return '';
      case 'custom':  return custom;
      default:        return '\n';
    }
  };

  const repeat = () => {
    if (!text.trim()) return;
    const sep    = getSeparator();
    const result = Array(times).fill(text).join(sep);
    setOutput(result);
    setProcessed(true);
  };

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setText('');
    setOutput('');
    setProcessed(false);
    setCopied(false);
  };

  const outputChars = output.length;
  const outputLines = output ? output.split('\n').length : 0;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Options bar ───────────────────────────────────── */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex flex-wrap items-center gap-4">

        {/* Repeat times */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-surface-600 whitespace-nowrap">Repeat</label>
          <input
            type="number" min="1" max="1000" value={times}
            onChange={e => setTimes(Math.max(1, Math.min(1000, Number(e.target.value))))}
            className="w-16 text-sm font-bold text-surface-900 bg-white border border-surface-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-brand-400 text-center"
          />
          <span className="text-xs text-surface-500">times</span>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-2 flex-wrap">
          <label className="text-xs font-semibold text-surface-600">Separator</label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'newline', label: '↵ New Line'  },
              { id: 'space',   label: '⎵ Space'     },
              { id: 'comma',   label: ', Comma'      },
              { id: 'none',    label: '∅ None'       },
              { id: 'custom',  label: '✏️ Custom'    },
            ].map(s => (
              <button key={s.id} onClick={() => setSeparator(s.id)}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-colors ${
                  separator === s.id
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'
                }`}>
                {s.label}
              </button>
            ))}
          </div>
          {separator === 'custom' && (
            <input
              type="text" value={custom} placeholder="Type separator..."
              onChange={e => setCustom(e.target.value)}
              className="text-xs border border-surface-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-brand-400 w-32"
            />
          )}
        </div>
      </div>

      {/* ── Input / Output ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface-50/50 border-b border-surface-100">
            <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Input Text</span>
            <span className="text-[10px] text-surface-400">{text.length} chars</span>
          </div>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste the text you want to repeat..."
            className="w-full flex-1 min-h-[200px] px-4 py-3 text-sm text-surface-800 leading-relaxed resize-none focus:outline-none bg-white placeholder:text-surface-300"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface-50/50 border-b border-surface-100">
            <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Output</span>
            <span className="text-[10px] text-surface-400">
              {processed ? `${outputLines} lines · ${outputChars} chars` : '—'}
            </span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder={`Your text repeated ${times} time${times !== 1 ? 's' : ''} will appear here...`}
            className="w-full flex-1 min-h-[200px] px-4 py-3 text-sm text-surface-800 leading-relaxed resize-none focus:outline-none bg-surface-50/30 placeholder:text-surface-300"
          />
        </div>
      </div>

      {/* ── Actions ───────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-4 bg-surface-50 border-t border-surface-200">
        <button onClick={repeat} disabled={!text.trim()}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
          🔁 Repeat Text
        </button>

        <button onClick={copy} disabled={!output}
          className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed
            ${copied ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-surface-700 border-surface-200 hover:border-brand-300 hover:text-brand-700'}`}>
          {copied ? '✅ Copied!' : '📋 Copy Output'}
        </button>

        <button onClick={clear}
          className="flex items-center gap-2 text-sm font-medium text-surface-500 hover:text-surface-700 px-4 py-2.5 rounded-xl border border-surface-200 hover:border-surface-300 bg-white transition-colors">
          🗑️ Clear
        </button>

        {/* Quick repeat chips */}
        <div className="flex items-center gap-1.5 ml-auto">
          <span className="text-[10px] text-surface-400 font-medium">Quick:</span>
          {[3, 5, 10, 25, 50, 100].map(n => (
            <button key={n} onClick={() => setTimes(n)}
              className={`text-[10px] font-bold px-2 py-1 rounded-full border transition-colors ${
                times === n ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'
              }`}>
              ×{n}
            </button>
          ))}
        </div>
      </div>

      {/* ── Stats strip ───────────────────────────────────── */}
      {processed && output && (
        <div className="px-5 py-3 bg-emerald-50 border-t border-emerald-100 flex flex-wrap gap-6 text-xs text-emerald-700">
          <span>✅ Repeated <strong>{times}×</strong></span>
          <span>📝 <strong>{outputLines}</strong> lines</span>
          <span>🔤 <strong>{outputChars.toLocaleString()}</strong> characters</span>
          <span>📖 <strong>{output.split(/\s+/).filter(Boolean).length.toLocaleString()}</strong> words</span>
        </div>
      )}
    </div>
  );
}