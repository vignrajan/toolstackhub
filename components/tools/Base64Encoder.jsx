'use client';
import { useState } from 'react';

export default function Base64Encoder() {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode]     = useState('encode'); // 'encode' | 'decode'
  const [error, setError]   = useState('');
  const [copied, setCopied] = useState(false);

  const process = (m = mode, val = input) => {
    setError('');
    try {
      if (m === 'encode') {
        setOutput(btoa(unescape(encodeURIComponent(val))));
      } else {
        setOutput(decodeURIComponent(escape(atob(val))));
      }
    } catch (e) {
      setError(m === 'decode' ? 'Invalid Base64 string. Please check your input.' : e.message);
      setOutput('');
    }
  };

  const handleInput = (val) => {
    setInput(val);
    setOutput('');
    setError('');
  };

  const swap = () => {
    const newMode = mode === 'encode' ? 'decode' : 'encode';
    setMode(newMode);
    setInput(output);
    setOutput('');
    setError('');
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Mode switcher */}
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
          {mode === 'encode' ? 'Text → Base64' : 'Base64 → Text'}
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* Input */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-surface-700">
              {mode === 'encode' ? 'Plain Text Input' : 'Base64 Input'}
            </label>
            <button onClick={() => handleInput('')} className="text-xs text-surface-400 hover:text-surface-600">Clear</button>
          </div>
          <textarea
            value={input}
            onChange={e => handleInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to encode…' : 'Enter Base64 string to decode…'}
            className="textarea-field min-h-[140px]"
            spellCheck={false}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => process(mode, input)}
            className="btn-primary flex-1"
          >
            🔐 {mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64'}
          </button>
          <button
            onClick={swap}
            className="btn-secondary"
            title="Swap input/output"
            disabled={!output}
          >
            ⇅ Swap
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            ❌ {error}
          </p>
        )}

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-surface-700">
                {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
              </label>
              <button onClick={() => copy(output)} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="textarea-field min-h-[140px] bg-surface-50 select-all break-all text-surface-700">
              {output}
            </div>
            <p className="text-xs text-surface-400 mt-1.5">
              Input: {input.length} chars → Output: {output.length} chars
              {mode === 'encode' && ` (${Math.round((output.length / input.length - 1) * 100)}% larger)`}
            </p>
          </div>
        )}

        {/* Quick examples */}
        <div className="pt-2 border-t border-surface-100">
          <p className="text-xs font-medium text-surface-500 mb-2">Try an example:</p>
          <div className="flex flex-wrap gap-2">
            {['Hello, World!', 'https://toolstackhub.com', '{"user":"admin","role":"owner"}'].map(ex => (
              <button
                key={ex}
                onClick={() => { setMode('encode'); handleInput(ex); }}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                {ex.length > 28 ? ex.slice(0, 28) + '…' : ex}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
