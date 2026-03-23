'use client';
import { useState } from 'react';

export default function RemoveLineBreaks() {
  const [input,        setInput]        = useState('');
  const [output,       setOutput]       = useState('');
  const [removeEmpty,  setRemoveEmpty]  = useState(false);
  const [replaceSpace, setReplaceSpace] = useState(false);
  const [copied,       setCopied]       = useState(false);
  const [processed,    setProcessed]    = useState(false);

  const process = () => {
    if (!input.trim()) return;
    let result = input;

    if (removeEmpty) {
      // Remove fully empty lines first
      result = result.split('\n').filter(line => line.trim() !== '').join('\n');
    }

    if (replaceSpace) {
      // Replace line breaks with a single space, collapse multiple spaces
      result = result.replace(/\r?\n/g, ' ').replace(/  +/g, ' ').trim();
    } else {
      // Remove all line breaks entirely
      result = result.replace(/\r?\n/g, '').trim();
    }

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
    setInput('');
    setOutput('');
    setProcessed(false);
    setCopied(false);
  };

  const inputLines  = input  ? input.split('\n').length  : 0;
  const outputLines = output ? output.split('\n').length : 0;
  const inputChars  = input.length;
  const outputChars = output.length;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Toolbar ─────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-4 px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Options</span>

        <label className="flex items-center gap-2 cursor-pointer">
          <div
            onClick={() => setRemoveEmpty(!removeEmpty)}
            className={`relative w-9 h-5 rounded-full transition-colors duration-200 cursor-pointer ${removeEmpty ? 'bg-brand-600' : 'bg-surface-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${removeEmpty ? 'translate-x-4' : 'translate-x-0'}`} />
          </div>
          <span className="text-xs font-medium text-surface-600">Remove empty lines</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <div
            onClick={() => setReplaceSpace(!replaceSpace)}
            className={`relative w-9 h-5 rounded-full transition-colors duration-200 cursor-pointer ${replaceSpace ? 'bg-brand-600' : 'bg-surface-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${replaceSpace ? 'translate-x-4' : 'translate-x-0'}`} />
          </div>
          <span className="text-xs font-medium text-surface-600">Replace breaks with space</span>
        </label>
      </div>

      {/* ── Input / Output panels ────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-100 bg-surface-50/50">
            <span className="text-xs font-semibold text-surface-500">INPUT</span>
            <span className="text-[10px] text-surface-400">{inputLines} lines · {inputChars} chars</span>
          </div>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full flex-1 min-h-[220px] px-4 py-3 text-sm text-surface-800 font-mono leading-relaxed resize-none focus:outline-none bg-white placeholder:text-surface-300"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-100 bg-surface-50/50">
            <span className="text-xs font-semibold text-surface-500">OUTPUT</span>
            <span className="text-[10px] text-surface-400">{outputLines} lines · {outputChars} chars</span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Cleaned text will appear here..."
            className="w-full flex-1 min-h-[220px] px-4 py-3 text-sm text-surface-800 font-mono leading-relaxed resize-none focus:outline-none bg-surface-50/30 placeholder:text-surface-300"
          />
        </div>
      </div>

      {/* ── Actions ──────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-4 bg-surface-50 border-t border-surface-200">
        <button
          onClick={process}
          disabled={!input.trim()}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          ✂️ Remove Line Breaks
        </button>

        <button
          onClick={copy}
          disabled={!output}
          className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed
            ${copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-white text-surface-700 border-surface-200 hover:border-brand-300 hover:text-brand-700'
            }`}
        >
          {copied ? '✅ Copied!' : '📋 Copy Output'}
        </button>

        <button
          onClick={clear}
          className="flex items-center gap-2 text-sm font-medium text-surface-500 hover:text-surface-700 px-4 py-2.5 rounded-xl border border-surface-200 hover:border-surface-300 bg-white transition-colors"
        >
          🗑️ Clear
        </button>

        {/* Stats */}
        {processed && output && (
          <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
            <span className="font-bold">✓</span>
            Removed {inputLines - outputLines} line break{inputLines - outputLines !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
}