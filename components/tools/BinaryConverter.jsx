'use client';
import { useState } from 'react';

function toBin(n) { return (n>>>0).toString(2); }
function toOct(n) { return (n>>>0).toString(8); }
function toHex(n) { return (n>>>0).toString(16).toUpperCase(); }
function toDec(n) { return n.toString(10); }
function textToBin(t) { return t.split('').map(c => c.charCodeAt(0).toString(2).padStart(8,'0')).join(' '); }
function binToText(b) {
  try { return b.trim().split(/\s+/).map(byte => String.fromCharCode(parseInt(byte,2))).join(''); }
  catch { return 'Invalid binary'; }
}

export default function BinaryConverter() {
  const [decimal, setDecimal] = useState('');
  const [binary,  setBinary]  = useState('');
  const [octal,   setOctal]   = useState('');
  const [hex,     setHex]     = useState('');
  const [text,    setText]    = useState('');
  const [binText, setBinText] = useState('');
  const [copied,  setCopied]  = useState('');

  const copy = (val, key) => { navigator.clipboard.writeText(val); setCopied(key); setTimeout(() => setCopied(''), 2000); };

  const fromDecimal = (val) => {
    const n = parseInt(val, 10);
    setDecimal(val);
    if (!val.trim() || isNaN(n)) { setBinary(''); setOctal(''); setHex(''); return; }
    setBinary(toBin(n));
    setOctal(toOct(n));
    setHex(toHex(n));
  };
  const fromBinary = (val) => {
    setBinary(val);
    const n = parseInt(val, 2);
    if (!val.trim() || isNaN(n)) { setDecimal(''); setOctal(''); setHex(''); return; }
    setDecimal(toDec(n)); setOctal(toOct(n)); setHex(toHex(n));
  };
  const fromOctal = (val) => {
    setOctal(val);
    const n = parseInt(val, 8);
    if (!val.trim() || isNaN(n)) { setDecimal(''); setBinary(''); setHex(''); return; }
    setDecimal(toDec(n)); setBinary(toBin(n)); setHex(toHex(n));
  };
  const fromHex = (val) => {
    setHex(val.toUpperCase());
    const n = parseInt(val, 16);
    if (!val.trim() || isNaN(n)) { setDecimal(''); setBinary(''); setOctal(''); return; }
    setDecimal(toDec(n)); setBinary(toBin(n)); setOctal(toOct(n));
  };

  const fields = [
    { label: 'Decimal (Base 10)', value: decimal, onChange: fromDecimal, mono: '', hint: 'Digits 0–9' },
    { label: 'Binary (Base 2)',   value: binary,  onChange: fromBinary,  mono: 'font-mono', hint: 'Digits 0–1' },
    { label: 'Octal (Base 8)',    value: octal,   onChange: fromOctal,   mono: 'font-mono', hint: 'Digits 0–7' },
    { label: 'Hexadecimal (Base 16)', value: hex, onChange: fromHex,     mono: 'font-mono', hint: 'Digits 0–9, A–F' },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Number Base Converter</span>
      </div>
      <div className="p-5 space-y-5">
        {/* Number converter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {fields.map(f => (
            <div key={f.label} className="group">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-surface-700">{f.label}</label>
                <span className="text-xs text-surface-400">{f.hint}</span>
              </div>
              <div className="flex gap-2">
                <input value={f.value} onChange={e => f.onChange(e.target.value)}
                  className={`input-field flex-1 ${f.mono}`} placeholder="Enter value..." />
                {f.value && (
                  <button onClick={() => copy(f.value, f.label)}
                    className="px-3 text-surface-400 hover:text-brand-600 border border-surface-200 rounded-xl hover:border-brand-200 transition-colors text-xs">
                    {copied === f.label ? '✅' : '📋'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-100 pt-5">
          <p className="text-sm font-semibold text-surface-700 mb-3">Text ↔ Binary</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">Text to Binary</label>
              <textarea value={text} onChange={e => { setText(e.target.value); setBinText(textToBin(e.target.value)); }}
                placeholder="Type text here..." className="textarea-field min-h-[90px]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-surface-700">Binary Result</label>
                {binText && <button onClick={() => copy(binText, 'binText')} className="text-xs btn-ghost py-1 px-2">{copied === 'binText' ? '✅' : '📋'}</button>}
              </div>
              <div className="textarea-field min-h-[90px] bg-surface-50 text-xs break-all overflow-auto select-all">
                {binText || <span className="text-surface-400">Binary output here...</span>}
              </div>
            </div>
          </div>

          {/* Binary to text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">Binary to Text</label>
              <textarea placeholder="Paste binary (e.g. 01001000 01101001)"
                onChange={e => setBinText(e.target.value)}
                className="textarea-field min-h-[70px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">Decoded Text</label>
              <div className="textarea-field min-h-[70px] bg-surface-50 overflow-auto">
                {binText ? binToText(binText) : <span className="text-surface-400">Text output here...</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
