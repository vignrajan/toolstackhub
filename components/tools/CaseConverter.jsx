'use client';
import { useState } from 'react';

const CASES = [
  {
    id: 'upper',
    label: 'UPPERCASE',
    icon: '⬆️',
    fn: t => t.toUpperCase(),
  },
  {
    id: 'lower',
    label: 'lowercase',
    icon: '⬇️',
    fn: t => t.toLowerCase(),
  },
  {
    id: 'title',
    label: 'Title Case',
    icon: '📖',
    fn: t => t.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  },
  {
    id: 'sentence',
    label: 'Sentence case',
    icon: '💬',
    fn: t => t.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()),
  },
  {
    id: 'camel',
    label: 'camelCase',
    icon: '🐫',
    fn: t => t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()),
  },
  {
    id: 'pascal',
    label: 'PascalCase',
    icon: '🅿️',
    fn: t => {
      const camel = t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
      return camel.charAt(0).toUpperCase() + camel.slice(1);
    },
  },
  {
    id: 'snake',
    label: 'snake_case',
    icon: '🐍',
    fn: t => t.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, ''),
  },
  {
    id: 'kebab',
    label: 'kebab-case',
    icon: '🍢',
    fn: t => t.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, ''),
  },
  {
    id: 'alternate',
    label: 'aLtErNaTe',
    icon: '🔀',
    fn: t => t.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''),
  },
  {
    id: 'inverse',
    label: 'iNVERSE',
    icon: '🔄',
    fn: t => t.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''),
  },
];

export default function CaseConverter() {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [active, setActive] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = (c) => {
    if (!input.trim()) return;
    setOutput(c.fn(input));
    setActive(c.id);
  };

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Case Converter</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Input Text</label>
          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setOutput(''); setActive(''); }}
            placeholder="Type or paste your text here…"
            className="textarea-field min-h-[110px]"
          />
        </div>

        {/* Case buttons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {CASES.map(c => (
            <button
              key={c.id}
              onClick={() => convert(c)}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all
                ${active === c.id
                  ? 'bg-brand-600 border-brand-600 text-white shadow-sm'
                  : 'bg-surface-50 border-surface-200 text-surface-700 hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700'
                }`}
            >
              <span>{c.icon}</span>
              <span className="truncate">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-surface-700">Output</label>
              <button
                onClick={copy}
                className="text-xs btn-ghost py-1 px-2 flex items-center gap-1"
              >
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="textarea-field min-h-[110px] flex items-start overflow-auto select-all cursor-text">
              <span className="text-surface-800 whitespace-pre-wrap break-all">{output}</span>
            </div>
            <p className="text-xs text-surface-400 mt-1.5">
              Active: <span className="font-medium text-brand-600">{CASES.find(c => c.id === active)?.label}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
