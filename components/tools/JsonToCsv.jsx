'use client';
import { useState } from 'react';

const SAMPLE_JSON = `[
  { "name": "Alice", "age": 30, "city": "New York", "role": "Engineer" },
  { "name": "Bob", "age": 25, "city": "London", "role": "Designer" },
  { "name": "Carol", "age": 35, "city": "Tokyo", "role": "Manager" }
]`;

const DELIMITERS = [
  { id: 'comma',     label: 'Comma  (,)',     value: ',' },
  { id: 'semicolon', label: 'Semicolon  (;)', value: ';' },
  { id: 'tab',       label: 'Tab  (→)',       value: '\t' },
  { id: 'pipe',      label: 'Pipe  (|)',      value: '|' },
];

function jsonToCsv(jsonStr, delimiter) {
  const data = JSON.parse(jsonStr);

  // Handle single object — convert to array
  const arr = Array.isArray(data) ? data : [data];
  if (arr.length === 0) return '';

  // Collect all unique keys across all objects
  const headers = [];
  const seen = new Set();
  arr.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (!seen.has(key)) { seen.add(key); headers.push(key); }
    });
  });

  // Escape a single cell value per RFC 4180
  const escape = val => {
    if (val === null || val === undefined) return '';
    const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
    // Wrap in double quotes if contains delimiter, quotes, or newlines
    if (str.includes(delimiter) || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const rows = [
    headers.map(h => escape(h)).join(delimiter),
    ...arr.map(obj => headers.map(h => escape(obj[h])).join(delimiter)),
  ];

  return rows.join('\n');
}

export default function JsonToCsv() {
  const [input, setInput]       = useState('');
  const [output, setOutput]     = useState('');
  const [error, setError]       = useState('');
  const [delimiter, setDelimiter] = useState(',');
  const [rowCount, setRowCount] = useState(0);
  const [colCount, setColCount] = useState(0);
  const [copied, setCopied]     = useState(false);

  const convert = () => {
    const raw = input.trim();
    if (!raw) { setError('Please paste a JSON array first.'); return; }

    try {
      const csv = jsonToCsv(raw, delimiter);
      setOutput(csv);
      setError('');

      // Count rows and columns from output
      const lines = csv.split('\n');
      setRowCount(lines.length - 1); // minus header
      setColCount(lines[0] ? lines[0].split(delimiter === '\t' ? '\t' : delimiter).length : 0);
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
      setOutput('');
      setRowCount(0);
      setColCount(0);
    }
  };

  const loadSample = () => {
    setInput(SAMPLE_JSON);
    setOutput('');
    setError('');
    setRowCount(0);
    setColCount(0);
  };

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href     = url;
    link.download = 'converted.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <button onClick={convert}
          className="btn-primary text-sm py-1.5 px-4">
          Convert to CSV 🔄
        </button>
        <button onClick={loadSample}
          className="text-xs text-surface-400 hover:text-brand-600 transition-colors">
          Load sample
        </button>

        {/* Delimiter selector */}
        <div className="flex items-center gap-2 ml-auto">
          <label className="text-xs text-surface-500 font-medium">Delimiter:</label>
          <select
            value={delimiter}
            onChange={e => setDelimiter(e.target.value)}
            className="text-xs border border-surface-200 rounded-lg px-2 py-1.5 bg-white text-surface-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {DELIMITERS.map(d => (
              <option key={d.id} value={d.value}>{d.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* Input */}
        <div className="p-4">
          <label className="block text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">
            Input JSON
          </label>
          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setOutput(''); setError(''); }}
            placeholder={'Paste your JSON array here…\n\nExample:\n[\n  { "name": "Alice", "age": 30 },\n  { "name": "Bob", "age": 25 }\n]'}
            className="w-full h-[420px] px-3 py-2.5 bg-surface-900 text-emerald-300 font-mono text-sm leading-relaxed rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            spellCheck={false}
          />
          {error && (
            <p className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ❌ {error}
            </p>
          )}
        </div>

        {/* Output */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-surface-500 uppercase tracking-wider">
              CSV Output
            </label>
            <div className="flex items-center gap-2">
              {output && (
                <>
                  <span className="text-xs text-surface-400">
                    {rowCount} rows · {colCount} columns
                  </span>
                  <button onClick={copy}
                    className="text-xs btn-ghost py-1 px-2">
                    {copied ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="w-full h-[420px] px-3 py-2.5 bg-surface-900 font-mono text-sm leading-relaxed rounded-xl overflow-auto">
            {output
              ? <pre className="text-sky-300 whitespace-pre-wrap break-all">{output}</pre>
              : <span className="text-surface-500">CSV output will appear here…</span>
            }
          </div>
        </div>
      </div>

      {/* Download bar */}
      {output && (
        <div className="px-5 py-3 bg-surface-50 border-t border-surface-200 flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs text-surface-500">
            ✅ Converted <strong>{rowCount}</strong> rows and <strong>{colCount}</strong> columns successfully
          </p>
          <button onClick={download}
            className="btn-primary text-sm py-1.5 px-4">
            ⬇️ Download CSV
          </button>
        </div>
      )}

    </div>
  );
}