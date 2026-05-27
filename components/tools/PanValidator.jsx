'use client';
import { useState } from 'react';

// ── PAN structure constants ──────────────────────────────────
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

const TAXPAYER_TYPES = {
  P: { label: 'Individual',                  desc: 'Personal PAN for salaried or self-employed individuals' },
  C: { label: 'Company',                     desc: 'Registered under the Companies Act' },
  H: { label: 'HUF (Hindu Undivided Family)',desc: 'Joint family governed by Hindu law' },
  F: { label: 'Firm / LLP',                  desc: 'Partnership firm or Limited Liability Partnership' },
  A: { label: 'Association of Persons (AOP)',desc: 'Group of persons joining for a common purpose' },
  B: { label: 'Body of Individuals (BOI)',   desc: 'A group of individuals — not a formal association' },
  G: { label: 'Government',                  desc: 'Central or State Government departments' },
  J: { label: 'Artificial Juridical Person', desc: 'Entities with legal personhood — e.g. universities' },
  L: { label: 'Local Authority',             desc: 'Municipalities, panchayats, port trusts' },
  T: { label: 'Trust / AOP (Trusts)',        desc: 'Registered trusts and BOI trusts' },
};

const EXAMPLES = [
  { pan: 'ABCDE1234F', note: 'Individual (P character not here — this is an example format)' },
  { pan: 'AAACP2814B', note: 'Company (4th char = C)' },
  { pan: 'BBBPH1234A', note: 'HUF (4th char = H)' },
  { pan: 'ABCPF5678Z', note: 'Firm (4th char = F)' },
];

// ── Validation helpers ───────────────────────────────────────
function getPartialErrors(pan) {
  if (!pan) return [];
  const errors = [];

  const first5 = pan.slice(0, 5);
  if (first5.length > 0 && !/^[A-Z]+$/.test(first5)) {
    errors.push('First 5 characters must be uppercase letters (A–Z)');
  }

  if (pan.length >= 6) {
    const digits = pan.slice(5, 9);
    if (!/^[0-9]+$/.test(digits)) {
      errors.push('Characters 6–9 must be digits (0–9)');
    }
  }

  if (pan.length === 10) {
    const last = pan[9];
    if (!/^[A-Z]$/.test(last)) {
      errors.push('Last character must be an uppercase letter (A–Z)');
    }
  }

  const char4 = pan[3];
  if (char4 && !/^[A-Z]$/.test(char4)) {
    errors.push('4th character must be an uppercase letter indicating taxpayer type');
  } else if (char4 && !TAXPAYER_TYPES[char4]) {
    errors.push(`4th character "${char4}" is not a recognised taxpayer type`);
  }

  return errors;
}

function validate(pan) {
  if (!pan) return { state: 'empty' };
  if (pan.length < 10) return { state: 'partial', errors: getPartialErrors(pan) };

  const errors = [];

  if (!/^[A-Z]{5}$/.test(pan.slice(0, 5))) {
    errors.push('First 5 characters must be uppercase letters (A–Z)');
  }
  if (!/^[0-9]{4}$/.test(pan.slice(5, 9))) {
    errors.push('Characters 6–9 must be digits (0–9)');
  }
  if (!/^[A-Z]$/.test(pan[9])) {
    errors.push('Last (10th) character must be an uppercase letter (A–Z)');
  }
  if (pan[3] && !TAXPAYER_TYPES[pan[3]]) {
    errors.push(`4th character "${pan[3]}" is not a recognised Income Tax taxpayer type`);
  }

  if (errors.length > 0) return { state: 'invalid', errors };

  if (PAN_REGEX.test(pan)) {
    return {
      state: 'valid',
      info: {
        officerInitials: pan.slice(0, 3),
        taxpayerTypeChar: pan[3],
        taxpayerType: TAXPAYER_TYPES[pan[3]] || null,
        surnameLetter: pan[4],
        serialDigits: pan.slice(5, 9),
        checkChar: pan[9],
      },
    };
  }

  return { state: 'invalid', errors: ['PAN does not match the required AAAAA9999A format'] };
}

// ── Component ────────────────────────────────────────────────
export default function PanValidator() {
  const [input,  setInput]  = useState('');
  const [copied, setCopied] = useState(false);

  const pan    = input.trim();
  const result = validate(pan);

  function handleChange(e) {
    setInput(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10));
  }

  function handleExample(exPan) {
    setInput(exPan);
  }

  function handleCopy() {
    if (!pan) return;
    navigator.clipboard.writeText(pan);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const isValid   = result.state === 'valid';
  const isInvalid = result.state === 'invalid';
  const isPartial = result.state === 'partial';
  const isEmpty   = result.state === 'empty';

  // Progress bar — how many of 10 chars filled
  const progress  = Math.min((pan.length / 10) * 100, 100);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Header bar ───────────────────────────────────────── */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-600">PAN Card Validator</span>
        <div className="flex flex-wrap gap-1.5">
          {['✅ Free', '🇮🇳 India-Specific', '⚡ Instant', '🔒 No data stored'].map(b => (
            <span key={b} className="text-[10px] font-medium text-surface-500 bg-white border border-surface-200 px-2 py-0.5 rounded-full">{b}</span>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-5">

        {/* ── Input ────────────────────────────────────────────── */}
        <div>
          <label htmlFor="pan-input" className="block text-sm font-semibold text-surface-700 mb-1.5">
            Enter PAN Number
          </label>
          <div className="relative">
            <input
              id="pan-input"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="e.g. ABCDE1234F"
              maxLength={10}
              autoComplete="off"
              spellCheck={false}
              className={`w-full px-4 py-3 pr-24 border rounded-xl font-mono text-lg tracking-widest uppercase outline-none transition-colors
                ${isValid
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-900 focus:ring-2 focus:ring-emerald-300'
                  : isInvalid
                  ? 'border-red-400 bg-red-50 text-red-900 focus:ring-2 focus:ring-red-300'
                  : 'border-surface-300 bg-white text-surface-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                }`}
            />
            {/* Character count */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-surface-400 select-none">
              {pan.length}/10
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-1.5 bg-surface-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isValid ? 'bg-emerald-500' : isInvalid ? 'bg-red-400' : 'bg-brand-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xs text-surface-400 mt-1.5">
            Format: <span className="font-mono font-semibold text-surface-600">AAAAA9999A</span> — 5 letters · 4 digits · 1 letter
          </p>
        </div>

        {/* ── State: Empty ─────────────────────────────────────── */}
        {isEmpty && (
          <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
            <p className="text-sm font-semibold text-surface-700 mb-3">About PAN Card Structure</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-surface-600">
              {[
                { pos: '1–3',  color: 'bg-indigo-100 text-indigo-700',  label: 'Officer Initials',   desc: 'Alphabetic series issued by the Assessing Officer' },
                { pos: '4',    color: 'bg-amber-100 text-amber-700',    label: 'Taxpayer Type',      desc: 'P=Individual, C=Company, H=HUF, F=Firm, G=Govt…' },
                { pos: '5',    color: 'bg-teal-100 text-teal-700',      label: 'Surname Initial',    desc: 'First letter of surname (for Individual PANs)' },
                { pos: '6–9',  color: 'bg-violet-100 text-violet-700',  label: 'Serial Number',      desc: 'Unique 4-digit sequential number' },
                { pos: '10',   color: 'bg-rose-100 text-rose-700',      label: 'Check Digit',        desc: 'Alphabetic check character for integrity' },
              ].map(item => (
                <div key={item.pos} className="flex items-start gap-2.5">
                  <span className={`inline-block shrink-0 font-mono font-bold text-[10px] px-2 py-1 rounded-lg ${item.color}`}>
                    {item.pos}
                  </span>
                  <div>
                    <div className="font-semibold text-surface-700">{item.label}</div>
                    <div className="text-surface-500 leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── State: Partial (typing hints) ────────────────────── */}
        {isPartial && (
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm font-semibold text-brand-700 mb-2">
              Entering PAN — {pan.length}/10 characters
            </p>
            <div className="flex gap-1 mb-3 font-mono text-sm">
              {[...Array(10)].map((_, i) => {
                const ch = pan[i];
                const isFilled = i < pan.length;
                const segClass =
                  i < 3  ? 'bg-indigo-100 text-indigo-700 border-indigo-300' :
                  i === 3 ? 'bg-amber-100 text-amber-700 border-amber-300' :
                  i === 4 ? 'bg-teal-100 text-teal-700 border-teal-300' :
                  i < 9  ? 'bg-violet-100 text-violet-700 border-violet-300' :
                            'bg-rose-100 text-rose-700 border-rose-300';
                return (
                  <span
                    key={i}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg border font-bold text-sm
                      ${isFilled ? segClass : 'bg-white text-surface-300 border-surface-200'}`}
                  >
                    {ch || '·'}
                  </span>
                );
              })}
            </div>
            {isPartial && result.errors && result.errors.length > 0 && (
              <ul className="space-y-1">
                {result.errors.map(err => (
                  <li key={err} className="flex items-start gap-1.5 text-xs text-brand-700">
                    <span className="shrink-0 mt-0.5">⚠️</span>{err}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* ── State: Valid ─────────────────────────────────────── */}
        {isValid && result.info && (
          <>
            {/* Success banner */}
            <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-300 rounded-xl">
              <span className="text-2xl shrink-0">✅</span>
              <div>
                <div className="font-bold text-emerald-800 text-sm">Valid PAN Format</div>
                <div className="text-xs text-emerald-600 mt-0.5">
                  This PAN matches the official AAAAA9999A format issued by the Income Tax Department.
                </div>
              </div>
            </div>

            {/* Visual breakdown */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-2">PAN Breakdown</p>
              <div className="flex gap-1 font-mono text-base flex-wrap">
                {[
                  { chars: pan.slice(0, 3), color: 'bg-indigo-100 text-indigo-800 border-indigo-300', label: 'Officer' },
                  { chars: pan[3],          color: 'bg-amber-100 text-amber-800 border-amber-300',    label: 'Type'    },
                  { chars: pan[4],          color: 'bg-teal-100 text-teal-800 border-teal-300',       label: 'Surname' },
                  { chars: pan.slice(5, 9), color: 'bg-violet-100 text-violet-800 border-violet-300', label: 'Serial'  },
                  { chars: pan[9],          color: 'bg-rose-100 text-rose-800 border-rose-300',       label: 'Check'   },
                ].map(seg => (
                  <div key={seg.label} className="flex flex-col items-center gap-1">
                    <span className={`inline-flex items-center justify-center px-3 py-2 rounded-xl border-2 font-bold tracking-wider ${seg.color}`}>
                      {seg.chars}
                    </span>
                    <span className="text-[9px] text-surface-400 font-sans uppercase tracking-wide">{seg.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decoded info card */}
            <div className="rounded-xl border border-surface-200 divide-y divide-surface-100 overflow-hidden">
              <div className="px-5 py-3 bg-surface-50">
                <p className="text-sm font-semibold text-surface-700">Decoded Information</p>
              </div>
              <div className="divide-y divide-surface-100">
                {[
                  {
                    icon: '🏷️',
                    label: 'Holder Type',
                    value: result.info.taxpayerType
                      ? `${result.info.taxpayerType.label} (${result.info.taxpayerTypeChar})`
                      : result.info.taxpayerTypeChar,
                    note: result.info.taxpayerType?.desc,
                  },
                  {
                    icon: '🔤',
                    label: 'Issuing Officer Initials',
                    value: result.info.officerInitials,
                    note: 'Alphabetic series assigned by the Income Tax Assessing Officer',
                  },
                  {
                    icon: '4️⃣',
                    label: '4th Character (Taxpayer Type)',
                    value: result.info.taxpayerTypeChar,
                    note: `Indicates the category of the PAN holder`,
                  },
                  ...(result.info.taxpayerTypeChar === 'P' ? [{
                    icon: '🔡',
                    label: '5th Character (Surname Initial)',
                    value: result.info.surnameLetter,
                    note: 'First letter of the PAN holder\'s surname (for Individual PANs)',
                  }] : [{
                    icon: '🔡',
                    label: '5th Character',
                    value: result.info.surnameLetter,
                    note: 'First letter of the entity name (for non-individual PANs)',
                  }]),
                  {
                    icon: '🔢',
                    label: 'Serial Number',
                    value: result.info.serialDigits,
                    note: 'Unique 4-digit sequential number',
                  },
                  {
                    icon: '✔️',
                    label: 'Check Digit',
                    value: result.info.checkChar,
                    note: 'Alphabetic integrity check character',
                  },
                ].map(row => (
                  <div key={row.label} className="flex items-start gap-3 px-5 py-3">
                    <span className="text-base shrink-0 mt-0.5">{row.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-surface-500">{row.label}</div>
                      <div className="text-sm font-bold text-surface-900 font-mono">{row.value}</div>
                      {row.note && <div className="text-xs text-surface-400 mt-0.5 leading-relaxed">{row.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Taxpayer type reference */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-800 mb-2">All Taxpayer Type Codes</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {Object.entries(TAXPAYER_TYPES).map(([ch, t]) => (
                  <div
                    key={ch}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs border
                      ${result.info.taxpayerTypeChar === ch
                        ? 'bg-amber-200 border-amber-400 text-amber-900 font-bold'
                        : 'bg-white border-amber-200 text-surface-600'
                      }`}
                  >
                    <span className="font-mono font-bold shrink-0 w-4 text-center">{ch}</span>
                    <span className="truncate">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm transition-colors"
            >
              {copied ? '✅ Copied!' : '📋 Copy PAN Number'}
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-surface-400 text-center leading-relaxed">
              ⚠️ Format validation only — this tool does not verify your PAN with the Income Tax Department.
              For official verification, visit{' '}
              <a href="https://incometax.gov.in" target="_blank" rel="noopener noreferrer"
                className="underline hover:text-brand-600">incometax.gov.in</a>.
            </p>
          </>
        )}

        {/* ── State: Invalid ───────────────────────────────────── */}
        {isInvalid && (
          <>
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-300 rounded-xl">
              <span className="text-2xl shrink-0">❌</span>
              <div>
                <div className="font-bold text-red-800 text-sm mb-1">Invalid PAN Format</div>
                <ul className="space-y-1">
                  {result.errors.map(err => (
                    <li key={err} className="text-xs text-red-700 flex items-start gap-1.5">
                      <span className="shrink-0 mt-0.5">→</span>{err}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual breakdown for invalid */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-2">Character Positions</p>
              <div className="flex gap-1 font-mono flex-wrap">
                {[...Array(10)].map((_, i) => {
                  const ch = pan[i];
                  const isLetter = i < 5 || i === 9;
                  const isDigit  = i >= 5 && i <= 8;
                  const ok = ch
                    ? (isLetter ? /[A-Z]/.test(ch) : /[0-9]/.test(ch))
                    : false;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-lg border font-bold text-sm
                          ${ch
                            ? ok
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : 'bg-red-50 text-red-700 border-red-300'
                            : 'bg-surface-50 text-surface-300 border-surface-200'
                          }`}
                      >
                        {ch || '·'}
                      </span>
                      <span className="text-[9px] text-surface-400">{i + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ── Example PANs ─────────────────────────────────────── */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">
            Try an Example
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex.pan}
                onClick={() => handleExample(ex.pan)}
                title={ex.note}
                className="group flex items-center gap-2 px-3 py-2 bg-surface-50 hover:bg-brand-50 border border-surface-200 hover:border-brand-300 rounded-xl transition-colors"
              >
                <span className="font-mono font-bold text-sm text-surface-800 group-hover:text-brand-700 tracking-widest">
                  {ex.pan}
                </span>
                <span className="text-xs text-surface-400 group-hover:text-brand-500 hidden sm:inline">
                  {ex.pan[3] && TAXPAYER_TYPES[ex.pan[3]]
                    ? TAXPAYER_TYPES[ex.pan[3]].label
                    : 'Example'}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
