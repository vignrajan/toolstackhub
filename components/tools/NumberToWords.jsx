'use client';
import { useState, useCallback } from 'react';

// ── Core conversion engine ─────────────────────────────────────
const ONES = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
  'Seventeen', 'Eighteen', 'Nineteen',
];
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function twoDigits(n) {
  if (n === 0) return '';
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
}

function threeDigits(n) {
  if (n === 0) return '';
  if (n < 100) return twoDigits(n);
  return ONES[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + twoDigits(n % 100) : '');
}

function convertIndian(num) {
  if (num === 0) return 'Zero';
  if (num < 0) return 'Minus ' + convertIndian(Math.abs(num));

  const crore    = Math.floor(num / 10_000_000);
  const lakh     = Math.floor((num % 10_000_000) / 100_000);
  const thousand = Math.floor((num % 100_000) / 1_000);
  const rest     = num % 1_000;

  const parts = [];
  if (crore    > 0) parts.push(twoDigits(crore)    + ' Crore');
  if (lakh     > 0) parts.push(twoDigits(lakh)      + ' Lakh');
  if (thousand > 0) parts.push(twoDigits(thousand)  + ' Thousand');
  if (rest     > 0) parts.push(threeDigits(rest));

  return parts.join(' ');
}

function convertPaise(p) {
  if (p === 0) return '';
  return twoDigits(p) + ' Paise';
}

function formatIndianNumber(num) {
  if (!num && num !== 0) return '';
  const str = Math.floor(num).toString();
  if (str.length <= 3) return str;
  const last3 = str.slice(-3);
  const rest  = str.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
}

function parseAmount(raw) {
  const cleaned = raw.replace(/[^0-9.]/g, '');
  if (!cleaned) return { int: 0, paise: 0, valid: false };
  const parts = cleaned.split('.');
  const int   = parseInt(parts[0] || '0', 10);
  const paise = parts[1] ? Math.round(parseInt((parts[1] + '00').slice(0, 2), 10)) : 0;
  return { int, paise, valid: true };
}

// ── Component ─────────────────────────────────────────────────
export default function NumberToWords({ prefill = '' }) {
  const [input,  setInput]  = useState(prefill ? String(prefill) : '');
  const [mode,   setMode]   = useState('rupees'); // 'simple' | 'rupees' | 'cheque'
  const [copied, setCopied] = useState('');

  const { int, paise, valid } = parseAmount(input);
  const tooBig = int > 99_99_99_999; // 999 Crore limit

  const wordsMain  = valid && !tooBig ? convertIndian(int)   : '';
  const wordsPaise = valid && !tooBig ? convertPaise(paise)  : '';

  const outputs = {
    simple: wordsMain + (wordsPaise ? ' Point ' + wordsPaise : ''),
    rupees: wordsMain
      ? 'Rupees ' + wordsMain + (wordsPaise ? ' and ' + wordsPaise : '') + ' Only'
      : '',
    cheque: wordsMain
      ? wordsMain + (wordsPaise ? ' and ' + wordsPaise + '/100' : '/00') + ' Only'
      : '',
  };

  const result = outputs[mode];

  const handleCopy = useCallback(async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(''), 2000);
    } catch (_) {
      setCopied('');
    }
  }, []);

  const MODES = [
    { key: 'rupees', label: 'Rupees format', hint: 'Rupees X Only' },
    { key: 'cheque', label: 'Cheque format',  hint: 'X Only / 00' },
    { key: 'simple', label: 'Plain words',    hint: 'One Lakh...' },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-5">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🔤</span>
          <h2 className="font-display font-bold text-white text-xl">Number to Words Converter</h2>
        </div>
        <p className="text-brand-200 text-sm">Indian format — Crore, Lakh, Thousand | Rupees &amp; Paise supported</p>
      </div>

      <div className="p-6 space-y-6">

        {/* Input */}
        <div>
          <label className="block text-sm font-semibold text-surface-700 mb-2">
            Enter Amount (₹)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 font-semibold text-lg">₹</span>
            <input
              type="text"
              inputMode="decimal"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="e.g. 1234567.50"
              className="w-full pl-9 pr-4 py-4 text-xl font-bold border-2 border-surface-200 rounded-xl focus:outline-none focus:border-brand-500 text-surface-900 placeholder-surface-300 transition-colors"
            />
            {input && (
              <button
                onClick={() => setInput('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-surface-100 hover:bg-surface-200 flex items-center justify-center transition-colors"
              >
                <span className="text-surface-500 text-sm leading-none">✕</span>
              </button>
            )}
          </div>

          {/* Indian formatted display */}
          {valid && int > 0 && (
            <div className="mt-2 flex items-center gap-3 flex-wrap">
              <span className="text-sm text-surface-500">Indian format:</span>
              <span className="font-bold text-surface-800 text-sm">₹{formatIndianNumber(int)}{paise > 0 ? '.' + String(paise).padStart(2, '0') : ''}</span>
              {int >= 100_000 && (
                <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-full">
                  {int >= 10_000_000
                    ? `${(int / 10_000_000).toFixed(2).replace(/\.?0+$/, '')} Crore`
                    : `${(int / 100_000).toFixed(2).replace(/\.?0+$/, '')} Lakh`}
                </span>
              )}
            </div>
          )}

          {tooBig && (
            <p className="mt-2 text-xs text-rose-600">Maximum supported: 99,99,99,999 (999 Crore). Please enter a smaller number.</p>
          )}
        </div>

        {/* Output mode selector */}
        <div>
          <div className="text-sm font-semibold text-surface-700 mb-2">Output Format</div>
          <div className="flex gap-2 flex-wrap">
            {MODES.map(m => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                  mode === m.key
                    ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                    : 'bg-surface-50 text-surface-600 border-surface-200 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {m.label}
                <span className={`ml-2 text-xs font-normal ${mode === m.key ? 'text-brand-200' : 'text-surface-400'}`}>
                  {m.hint}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div>
          <div className="text-sm font-semibold text-surface-700 mb-2">In Words</div>
          <div className={`relative rounded-xl border-2 p-5 min-h-[90px] transition-colors ${
            result ? 'border-brand-200 bg-brand-50' : 'border-surface-100 bg-surface-50'
          }`}>
            {result ? (
              <>
                <p className="text-surface-900 font-bold text-lg leading-relaxed pr-12">{result}</p>
                <button
                  onClick={() => handleCopy(result, 'main')}
                  className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-surface-200 hover:border-brand-400 hover:text-brand-700 transition-colors"
                >
                  {copied === 'main' ? '✅ Copied!' : '📋 Copy'}
                </button>
              </>
            ) : (
              <p className="text-surface-400 text-sm">Enter an amount above to see it in words</p>
            )}
          </div>
        </div>

        {/* All three formats at once when there's a result */}
        {result && (
          <div className="space-y-2">
            <div className="text-sm font-semibold text-surface-700">All Formats</div>
            {MODES.map(m => (
              <div key={m.key} className="flex items-start gap-3 p-3 bg-surface-50 border border-surface-100 rounded-xl group">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-0.5">{m.label}</div>
                  <div className="text-sm text-surface-800 font-medium leading-relaxed">{outputs[m.key]}</div>
                </div>
                <button
                  onClick={() => handleCopy(outputs[m.key], m.key)}
                  className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-surface-200 hover:border-brand-400 hover:text-brand-700 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  {copied === m.key ? '✅' : '📋'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Quick amounts */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">Quick Try</div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '₹1 Lakh', val: '100000' },
              { label: '₹5 Lakh', val: '500000' },
              { label: '₹10 Lakh', val: '1000000' },
              { label: '₹50 Lakh', val: '5000000' },
              { label: '₹1 Crore', val: '10000000' },
              { label: '₹1,234.56', val: '1234.56' },
            ].map(q => (
              <button
                key={q.val}
                onClick={() => setInput(q.val)}
                className="text-xs px-3 py-1.5 rounded-lg bg-surface-100 text-surface-600 hover:bg-brand-50 hover:text-brand-700 font-semibold transition-colors border border-surface-200 hover:border-brand-200"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-surface-100">
          {[
            { icon: '🇮🇳', label: 'Indian Format', sub: 'Lakh, Crore' },
            { icon: '💰', label: 'Paise Support', sub: 'Decimal amounts' },
            { icon: '📋', label: 'One-Click Copy', sub: '3 output formats' },
            { icon: '⚡', label: 'Instant', sub: 'No submit needed' },
          ].map(f => (
            <div key={f.label} className="text-center">
              <div className="text-lg mb-0.5">{f.icon}</div>
              <div className="text-xs font-semibold text-surface-700">{f.label}</div>
              <div className="text-xs text-surface-400">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}