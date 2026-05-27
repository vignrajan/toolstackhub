'use client';
import { useState, useCallback } from 'react';

const POPULAR_BANKS = [
  { name: 'State Bank of India',    code: 'SBIN', example: 'SBIN0001234' },
  { name: 'HDFC Bank',              code: 'HDFC', example: 'HDFC0000001' },
  { name: 'ICICI Bank',             code: 'ICIC', example: 'ICIC0000001' },
  { name: 'Axis Bank',              code: 'UTIB', example: 'UTIB0000001' },
  { name: 'Kotak Mahindra Bank',    code: 'KKBK', example: 'KKBK0000001' },
  { name: 'Punjab National Bank',   code: 'PUNB', example: 'PUNB0000100' },
];

const EXAMPLE_CODES = [
  { code: 'SBIN0001234', bank: 'State Bank of India',  note: 'SBI — largest public sector bank' },
  { code: 'HDFC0000001', bank: 'HDFC Bank',            note: 'HDFC — largest private sector bank' },
];

const BROWSE_BANKS = [
  'State Bank of India (SBIN)',
  'HDFC Bank (HDFC)',
  'ICICI Bank (ICIC)',
  'Axis Bank (UTIB)',
  'Kotak Mahindra Bank (KKBK)',
  'Punjab National Bank (PUNB)',
  'Bank of Baroda (BARB)',
  'Canara Bank (CNRB)',
  'Union Bank of India (UBIN)',
  'Bank of India (BKID)',
];

function isValidIfscFormat(code) {
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(code);
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!text}
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-surface-100 text-surface-600 hover:bg-brand-100 hover:text-brand-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      title={`Copy ${label}`}
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-emerald-600">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy {label}
        </>
      )}
    </button>
  );
}

export default function IfscFinder() {
  const [mode, setMode]         = useState('lookup'); // 'lookup' | 'browse'
  const [ifscInput, setIfscInput] = useState('');
  const [result, setResult]     = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  // ── Format validation ────────────────────────────────────
  const handleIfscChange = (e) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 11);
    setIfscInput(val);
    setError('');
    if (result) setResult(null);
  };

  const validFormat = ifscInput.length === 11 && isValidIfscFormat(ifscInput);
  const partialWarning =
    ifscInput.length > 0 &&
    ifscInput.length < 11
      ? `${11 - ifscInput.length} more character${11 - ifscInput.length > 1 ? 's' : ''} needed`
      : ifscInput.length === 11 && !isValidIfscFormat(ifscInput)
      ? 'Invalid format — must be 4 letters + 0 + 6 alphanumeric chars'
      : '';

  // ── Fetch IFSC data ──────────────────────────────────────
  const handleLookup = useCallback(async () => {
    if (!validFormat) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch(`https://ifsc.razorpay.com/${ifscInput}`);
      if (!res.ok) {
        if (res.status === 404) {
          setError('IFSC code not found. Please double-check the code and try again.');
        } else {
          setError('Unable to fetch details. Please try again in a moment.');
        }
        return;
      }
      const data = await res.json();
      setResult(data);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, [ifscInput, validFormat]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLookup();
  };

  const handleExampleClick = (code) => {
    setIfscInput(code);
    setError('');
    setResult(null);
  };

  // ── Result fields ────────────────────────────────────────
  const resultFields = result
    ? [
        { label: 'Bank',     value: result.BANK,    icon: '🏦' },
        { label: 'Branch',   value: result.BRANCH,  icon: '🏢' },
        { label: 'Address',  value: result.ADDRESS, icon: '📍' },
        { label: 'City',     value: result.CITY,    icon: '🌆' },
        { label: 'State',    value: result.STATE,   icon: '🗺️' },
        { label: 'MICR',     value: result.MICR,    icon: '🔢' },
        { label: 'Contact',  value: result.CONTACT, icon: '📞' },
      ].filter(f => f.value && f.value !== 'N/A')
    : [];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Mode Toggle ─────────────────────────────────────── */}
      <div className="flex border-b border-surface-100">
        {[
          { id: 'lookup', label: 'IFSC Lookup',     icon: '🔍' },
          { id: 'browse', label: 'Browse by Bank',  icon: '🏦' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors ${
              mode === tab.id
                ? 'bg-brand-50 text-brand-700 border-b-2 border-brand-600'
                : 'text-surface-500 hover:text-surface-700 hover:bg-surface-50'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">

        {/* ── MODE 1: IFSC Lookup ──────────────────────────── */}
        {mode === 'lookup' && (
          <div className="space-y-5">

            {/* Input */}
            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">
                Enter IFSC Code
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={ifscInput}
                    onChange={handleIfscChange}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g. SBIN0001234"
                    maxLength={11}
                    className={`w-full px-4 py-3 border rounded-xl font-mono text-base tracking-widest uppercase bg-surface-50 focus:outline-none focus:ring-2 transition-all ${
                      ifscInput.length === 11 && validFormat
                        ? 'border-emerald-400 focus:ring-emerald-300 bg-emerald-50'
                        : ifscInput.length === 11 && !validFormat
                        ? 'border-red-400 focus:ring-red-300 bg-red-50'
                        : 'border-surface-200 focus:ring-brand-300 focus:border-brand-400'
                    }`}
                    aria-label="IFSC code input"
                  />
                  {ifscInput.length === 11 && validFormat && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLookup}
                  disabled={!validFormat || loading}
                  className="px-5 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shrink-0"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Fetching…
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Find
                    </>
                  )}
                </button>
              </div>

              {/* Format hint / validation message */}
              <div className="mt-2 flex items-center justify-between">
                <p className={`text-xs ${
                  partialWarning
                    ? ifscInput.length === 11
                      ? 'text-red-600'
                      : 'text-amber-600'
                    : 'text-surface-400'
                }`}>
                  {partialWarning || 'Format: 4 letters + 0 + 6 alphanumeric (e.g. SBIN0001234)'}
                </p>
                <span className={`text-xs font-mono font-bold ${
                  ifscInput.length === 11 ? 'text-emerald-600' : 'text-surface-400'
                }`}>
                  {ifscInput.length}/11
                </span>
              </div>
            </div>

            {/* IFSC format breakdown */}
            {ifscInput.length > 0 && (
              <div className="flex gap-1 font-mono text-xs">
                <div className={`px-2 py-1 rounded-md font-bold ${
                  ifscInput.length >= 1 ? 'bg-blue-100 text-blue-800' : 'bg-surface-100 text-surface-400'
                }`}>
                  {ifscInput.slice(0, 4).padEnd(4, '·')}
                  <div className="text-xs font-normal font-sans mt-0.5 text-blue-600">Bank</div>
                </div>
                <div className={`px-2 py-1 rounded-md font-bold ${
                  ifscInput.length >= 5 ? 'bg-amber-100 text-amber-800' : 'bg-surface-100 text-surface-400'
                }`}>
                  {ifscInput[4] || '·'}
                  <div className="text-xs font-normal font-sans mt-0.5 text-amber-600">Always 0</div>
                </div>
                <div className={`px-2 py-1 rounded-md font-bold flex-1 ${
                  ifscInput.length >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-surface-100 text-surface-400'
                }`}>
                  {ifscInput.slice(5).padEnd(6, '·')}
                  <div className="text-xs font-normal font-sans mt-0.5 text-emerald-600">Branch Code</div>
                </div>
              </div>
            )}

            {/* Example codes */}
            <div>
              <p className="text-xs font-semibold text-surface-500 mb-2">Try an example:</p>
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_CODES.map(ex => (
                  <button
                    key={ex.code}
                    onClick={() => handleExampleClick(ex.code)}
                    className="flex items-center gap-2 px-3 py-2 bg-surface-50 border border-surface-200 rounded-xl hover:bg-brand-50 hover:border-brand-300 transition-colors text-left"
                  >
                    <span className="font-mono text-sm font-bold text-brand-700">{ex.code}</span>
                    <span className="text-xs text-surface-500">{ex.bank}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error state */}
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-red-800">Lookup Failed</p>
                  <p className="text-xs text-red-700 mt-0.5">{error}</p>
                </div>
              </div>
            )}

            {/* Loading state */}
            {loading && (
              <div className="flex items-center justify-center gap-3 py-10 text-surface-500">
                <svg className="w-6 h-6 animate-spin text-brand-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm font-medium">Fetching branch details…</span>
              </div>
            )}

            {/* Result */}
            {result && !loading && (
              <div className="border border-emerald-200 rounded-2xl overflow-hidden">
                {/* Result header */}
                <div className="bg-emerald-50 px-5 py-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Branch Found
                      </span>
                    </div>
                    <p className="font-mono font-bold text-lg text-surface-900 tracking-widest">{ifscInput}</p>
                    <p className="text-sm text-surface-500 mt-0.5">{result.BANK} — {result.BRANCH}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <CopyButton text={ifscInput} label="IFSC" />
                    {result.MICR && <CopyButton text={result.MICR} label="MICR" />}
                  </div>
                </div>

                {/* Result fields */}
                <div className="divide-y divide-surface-100">
                  {resultFields.map(field => (
                    <div key={field.label} className="flex items-start gap-3 px-5 py-3.5">
                      <span className="text-base w-6 shrink-0 mt-0.5">{field.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-0.5">{field.label}</p>
                        <p className="text-sm text-surface-800 font-medium leading-snug break-words">{field.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SWIFT if available */}
                {result.SWIFT && (
                  <div className="px-5 py-3 bg-blue-50 border-t border-blue-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-0.5">SWIFT Code</p>
                      <p className="font-mono font-bold text-sm text-blue-800">{result.SWIFT}</p>
                    </div>
                    <CopyButton text={result.SWIFT} label="SWIFT" />
                  </div>
                )}

                <div className="px-5 py-2.5 bg-surface-50 border-t border-surface-100">
                  <p className="text-xs text-surface-400">Powered by Razorpay IFSC API</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── MODE 2: Browse by Bank ───────────────────────── */}
        {mode === 'browse' && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">
                Select Bank
              </label>
              <select
                value={selectedBank}
                onChange={e => setSelectedBank(e.target.value)}
                className="w-full px-4 py-3 border border-surface-200 rounded-xl bg-surface-50 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all"
              >
                <option value="">— Choose a bank —</option>
                {BROWSE_BANKS.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {selectedBank && (
              <div>
                <label className="block text-sm font-semibold text-surface-700 mb-2">
                  Select Branch
                </label>
                <select
                  disabled
                  className="w-full px-4 py-3 border border-surface-200 rounded-xl bg-surface-100 text-surface-400 text-sm cursor-not-allowed"
                >
                  <option>Branch search not available in browse mode</option>
                </select>
              </div>
            )}

            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-0.5">For full branch search, use IFSC Lookup</p>
                <p className="text-xs text-blue-700">
                  Switch to the <strong>IFSC Lookup</strong> tab and enter your 11-character IFSC code
                  to instantly retrieve complete branch details including address, city, state, MICR,
                  contact, and SWIFT code.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── Popular Banks ────────────────────────────────────── */}
      <div className="border-t border-surface-100 px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">
          Popular Bank IFSC Prefixes
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {POPULAR_BANKS.map(bank => (
            <button
              key={bank.code}
              onClick={() => {
                setMode('lookup');
                handleExampleClick(bank.example);
              }}
              className="flex items-center gap-2 p-2.5 bg-surface-50 border border-surface-200 rounded-xl hover:bg-brand-50 hover:border-brand-300 transition-colors text-left"
            >
              <span className="font-mono text-xs font-bold text-brand-700 bg-brand-100 px-1.5 py-0.5 rounded-md">{bank.code}</span>
              <span className="text-xs text-surface-600 truncate">{bank.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Feature badges ───────────────────────────────────── */}
      <div className="border-t border-surface-100 bg-surface-50 px-6 py-3 flex flex-wrap gap-2">
        {[
          { icon: '✅', label: 'Free' },
          { icon: '🇮🇳', label: 'India Banking' },
          { icon: '⚡', label: 'Instant' },
          { icon: '🔒', label: 'No login' },
        ].map(b => (
          <span key={b.label} className="inline-flex items-center gap-1.5 text-xs text-surface-600 bg-white border border-surface-200 px-3 py-1.5 rounded-full font-medium">
            {b.icon} {b.label}
          </span>
        ))}
        <span className="ml-auto text-xs text-surface-400 self-center">Powered by Razorpay IFSC API</span>
      </div>

    </div>
  );
}
