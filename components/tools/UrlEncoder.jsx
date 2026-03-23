'use client';
import { useState } from 'react';

export default function UrlEncoder() {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode]     = useState('encode');
  const [error, setError]   = useState('');
  const [copied, setCopied] = useState(false);

  const process = (m = mode, val = input) => {
    setError('');
    if (!val.trim()) { setOutput(''); return; }
    try {
      if (m === 'encode') {
        setOutput(encodeURIComponent(val));
      } else {
        setOutput(decodeURIComponent(val));
      }
    } catch (e) {
      setError('Invalid encoded string. Please check your input.');
      setOutput('');
    }
  };

  const handleInput = (val) => {
    setInput(val);
    setOutput('');
    setError('');
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swap = () => {
    const newMode = mode === 'encode' ? 'decode' : 'encode';
    setMode(newMode);
    setInput(output);
    setOutput('');
    setError('');
  };

  const examples = [
    { label: 'URL with spaces', value: 'https://example.com/search?q=hello world&lang=en' },
    { label: 'Special chars',   value: 'name=John Doe&email=john@example.com&note=50% off!' },
    { label: 'Unicode',         value: 'Hello, 世界! Héllo Wörld' },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Mode */}
      <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
        <div className="flex rounded-xl border border-surface-200 overflow-hidden">
          <button
            onClick={() => { setMode('encode'); setOutput(''); setError(''); }}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${mode === 'encode' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}
          >
            Encode
          </button>
          <button
            onClick={() => { setMode('decode'); setOutput(''); setError(''); }}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${mode === 'decode' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}
          >
            Decode
          </button>
        </div>
        <span className="text-xs text-surface-500">
          {mode === 'encode' ? 'URL → Percent-encoded' : 'Percent-encoded → URL'}
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">
            {mode === 'encode' ? 'URL / Text to Encode' : 'Encoded URL to Decode'}
          </label>
          <textarea
            value={input}
            onChange={e => handleInput(e.target.value)}
            placeholder={mode === 'encode'
              ? 'e.g. https://example.com/search?q=hello world'
              : 'e.g. https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world'
            }
            className="textarea-field min-h-[120px] break-all"
            spellCheck={false}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={() => process(mode, input)} className="btn-primary flex-1">
            🔗 {mode === 'encode' ? 'Encode URL' : 'Decode URL'}
          </button>
          <button onClick={swap} className="btn-secondary" disabled={!output}>⇅ Swap</button>
        </div>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">❌ {error}</p>
        )}

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-surface-700">
                {mode === 'encode' ? 'Encoded Output' : 'Decoded Output'}
              </label>
              <button onClick={copy} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="textarea-field min-h-[120px] bg-surface-50 select-all break-all text-surface-700">
              {output}
            </div>
            <p className="text-xs text-surface-400 mt-1.5">
              {input.length} chars → {output.length} chars
            </p>
          </div>
        )}

        {/* Examples */}
        <div className="border-t border-surface-100 pt-4">
          <p className="text-xs font-medium text-surface-500 mb-2">Examples:</p>
          <div className="flex flex-wrap gap-2">
            {examples.map(ex => (
              <button
                key={ex.label}
                onClick={() => { setMode('encode'); handleInput(ex.value); }}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
