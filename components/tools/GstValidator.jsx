'use client';
import { useState } from 'react';

// ── GSTIN format: DDAAAAA9999A9Z9 ─────────────────────────────
const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

// ── State code lookup (01–38, 97, 99) ─────────────────────────
const STATE_CODES = {
  '01': { name: 'Jammu & Kashmir',         flag: '🏔️' },
  '02': { name: 'Himachal Pradesh',         flag: '🏔️' },
  '03': { name: 'Punjab',                   flag: '🌾' },
  '04': { name: 'Chandigarh',               flag: '🌆' },
  '05': { name: 'Uttarakhand',              flag: '🏔️' },
  '06': { name: 'Haryana',                  flag: '🌾' },
  '07': { name: 'Delhi',                    flag: '🏛️' },
  '08': { name: 'Rajasthan',                flag: '🏜️' },
  '09': { name: 'Uttar Pradesh',            flag: '🕌' },
  '10': { name: 'Bihar',                    flag: '🌊' },
  '11': { name: 'Sikkim',                   flag: '🏔️' },
  '12': { name: 'Arunachal Pradesh',        flag: '🌿' },
  '13': { name: 'Nagaland',                 flag: '🌿' },
  '14': { name: 'Manipur',                  flag: '🌿' },
  '15': { name: 'Mizoram',                  flag: '🌿' },
  '16': { name: 'Tripura',                  flag: '🌿' },
  '17': { name: 'Meghalaya',                flag: '🌧️' },
  '18': { name: 'Assam',                    flag: '🍵' },
  '19': { name: 'West Bengal',              flag: '🐅' },
  '20': { name: 'Jharkhand',                flag: '⛏️' },
  '21': { name: 'Odisha',                   flag: '🛕' },
  '22': { name: 'Chhattisgarh',             flag: '🌳' },
  '23': { name: 'Madhya Pradesh',           flag: '🐆' },
  '24': { name: 'Gujarat',                  flag: '🦁' },
  '25': { name: 'Daman & Diu',              flag: '🏖️' },
  '26': { name: 'Dadra & Nagar Haveli',     flag: '🌿' },
  '27': { name: 'Maharashtra',              flag: '🌊' },
  '28': { name: 'Andhra Pradesh (old)',      flag: '🌶️' },
  '29': { name: 'Karnataka',                flag: '🏯' },
  '30': { name: 'Goa',                      flag: '🏖️' },
  '31': { name: 'Lakshadweep',              flag: '🏝️' },
  '32': { name: 'Kerala',                   flag: '🌴' },
  '33': { name: 'Tamil Nadu',               flag: '🛕' },
  '34': { name: 'Puducherry',               flag: '🌸' },
  '35': { name: 'Andaman & Nicobar Islands',flag: '🏝️' },
  '36': { name: 'Telangana',                flag: '🌶️' },
  '37': { name: 'Andhra Pradesh',           flag: '🌶️' },
  '38': { name: 'Ladakh',                   flag: '🏔️' },
  '97': { name: 'Other Territory',          flag: '🗺️' },
  '99': { name: 'Centre Jurisdiction',      flag: '🏛️' },
};

// ── Entity type from 13th character ──────────────────────────
const ENTITY_TYPES = {
  '1': 'Proprietor (1st registration)',
  '2': 'Partnership Firm',
  '3': 'Hindu Undivided Family (HUF)',
  '4': 'Private / Public Limited Company',
  '5': 'LLP / Partnership',
  '6': 'Trust',
  '7': 'Government Department',
  '8': 'Public Sector Undertaking (PSU)',
  '9': 'Other (9th or above registration)',
  A: 'Additional place of business (A)',
  B: 'Additional place of business (B)',
  C: 'Additional place of business (C)',
  D: 'Additional place of business (D)',
  E: 'Additional place of business (E)',
  F: 'Additional place of business (F)',
  G: 'Additional place of business (G)',
  H: 'Additional place of business (H)',
  I: 'Additional place of business (I)',
  J: 'Additional place of business (J)',
  K: 'Additional place of business (K)',
  L: 'Additional place of business (L)',
  M: 'Additional place of business (M)',
  N: 'Additional place of business (N)',
  O: 'Additional place of business (O)',
  P: 'Additional place of business (P)',
  Q: 'Additional place of business (Q)',
  R: 'Additional place of business (R)',
  S: 'Additional place of business (S)',
  T: 'Additional place of business (T)',
  U: 'Additional place of business (U)',
  V: 'Additional place of business (V)',
  W: 'Additional place of business (W)',
  X: 'Additional place of business (X)',
  Y: 'Additional place of business (Y)',
  Z: 'Additional place of business (Z)',
};

// ── Example GSTINs ────────────────────────────────────────────
const EXAMPLES = [
  { gstin: '27AAPFU0939F1ZV', label: 'Maharashtra · Individual' },
  { gstin: '29AABCT1332L1ZT', label: 'Karnataka · Company'     },
];

// ── Partial hints while typing ────────────────────────────────
function getPartialHints(gstin) {
  if (!gstin || gstin.length < 1) return [];
  const hints = [];

  // First 2 chars: state code digits
  if (gstin.length >= 1) {
    if (!/^[0-9]/.test(gstin[0])) hints.push('Character 1 must be a digit (state code)');
  }
  if (gstin.length >= 2) {
    if (!/^[0-9]$/.test(gstin[1])) hints.push('Character 2 must be a digit (state code)');
    else {
      const sc = gstin.slice(0, 2);
      if (!STATE_CODES[sc]) hints.push(`State code "${sc}" is not a valid GST state code`);
    }
  }

  // Chars 3–7: PAN letters (positions 2–6, 0-indexed)
  if (gstin.length >= 3) {
    const panLetters = gstin.slice(2, Math.min(gstin.length, 7));
    if (!/^[A-Z]+$/.test(panLetters)) hints.push('Characters 3–7 must be uppercase letters (PAN letters)');
  }

  // Chars 8–11: PAN digits (positions 7–10, 0-indexed)
  if (gstin.length >= 8) {
    const panDigits = gstin.slice(7, Math.min(gstin.length, 11));
    if (!/^[0-9]+$/.test(panDigits)) hints.push('Characters 8–11 must be digits (PAN digits)');
  }

  // Char 12: PAN check letter
  if (gstin.length >= 12) {
    if (!/^[A-Z]$/.test(gstin[11])) hints.push('Character 12 must be an uppercase letter (PAN check letter)');
  }

  // Char 13: entity type
  if (gstin.length >= 13) {
    if (!/^[1-9A-Z]$/.test(gstin[12])) hints.push('Character 13 must be a digit (1–9) or letter (A–Z) — entity registration number');
  }

  // Char 14: always Z
  if (gstin.length >= 14) {
    if (gstin[13] !== 'Z') hints.push('Character 14 must always be "Z"');
  }

  // Char 15: check digit
  if (gstin.length >= 15) {
    if (!/^[0-9A-Z]$/.test(gstin[14])) hints.push('Character 15 must be a digit or letter (check digit)');
  }

  return hints;
}

// ── Main validation ───────────────────────────────────────────
function validate(gstin) {
  if (!gstin) return { state: 'empty' };
  if (gstin.length < 15) return { state: 'partial', hints: getPartialHints(gstin) };

  // Full 15-char validation
  if (!GSTIN_REGEX.test(gstin)) {
    const errors = [];
    if (!/^[0-9]{2}/.test(gstin))              errors.push('First 2 characters must be digits (state code 01–38)');
    if (!/^.{2}[A-Z]{5}/.test(gstin))          errors.push('Characters 3–7 must be uppercase letters (PAN)');
    if (!/^.{7}[0-9]{4}/.test(gstin))          errors.push('Characters 8–11 must be digits (PAN)');
    if (!/^.{11}[A-Z]/.test(gstin))            errors.push('Character 12 must be an uppercase letter (PAN)');
    if (!/^.{12}[1-9A-Z]/.test(gstin))         errors.push('Character 13 must be 1–9 or A–Z (entity type)');
    if (gstin[13] !== 'Z')                      errors.push('Character 14 must always be "Z"');
    if (!/^.{14}[0-9A-Z]$/.test(gstin))        errors.push('Character 15 must be a digit or letter (check digit)');
    if (errors.length === 0) errors.push('GSTIN does not match the required format: DDAAAAA9999A9Z9');
    return { state: 'invalid', errors };
  }

  const stateCode  = gstin.slice(0, 2);
  const pan        = gstin.slice(2, 12);
  const entityChar = gstin[12];
  const checkDigit = gstin[14];
  const state      = STATE_CODES[stateCode] || { name: 'Unknown Territory', flag: '🗺️' };

  return {
    state: 'valid',
    info: {
      stateCode,
      stateName: state.name,
      stateFlag: state.flag,
      pan,
      entityChar,
      entityType: ENTITY_TYPES[entityChar] || `Registration type ${entityChar}`,
      checkDigit,
    },
  };
}

// ── Segment colours for the breakdown strip ──────────────────
function segColor(i) {
  if (i < 2)  return 'bg-sky-100 text-sky-800 border-sky-300';
  if (i < 7)  return 'bg-indigo-100 text-indigo-800 border-indigo-300';
  if (i < 11) return 'bg-violet-100 text-violet-800 border-violet-300';
  if (i === 11) return 'bg-teal-100 text-teal-800 border-teal-300';
  if (i === 12) return 'bg-amber-100 text-amber-800 border-amber-300';
  if (i === 13) return 'bg-rose-100 text-rose-800 border-rose-300';
  return 'bg-emerald-100 text-emerald-800 border-emerald-300';
}

function segColorPartial(i) {
  if (i < 2)  return 'bg-sky-100 text-sky-700 border-sky-200';
  if (i < 7)  return 'bg-indigo-100 text-indigo-700 border-indigo-200';
  if (i < 11) return 'bg-violet-100 text-violet-700 border-violet-200';
  if (i === 11) return 'bg-teal-100 text-teal-700 border-teal-200';
  if (i === 12) return 'bg-amber-100 text-amber-700 border-amber-200';
  if (i === 13) return 'bg-rose-100 text-rose-700 border-rose-200';
  return 'bg-emerald-100 text-emerald-700 border-emerald-200';
}

// ── Component ─────────────────────────────────────────────────
export default function GstValidator() {
  const [input,  setInput]  = useState('');
  const [copied, setCopied] = useState(false);

  const gstin  = input.trim();
  const result = validate(gstin);

  const isValid   = result.state === 'valid';
  const isInvalid = result.state === 'invalid';
  const isPartial = result.state === 'partial';
  const isEmpty   = result.state === 'empty';

  const progress = Math.min((gstin.length / 15) * 100, 100);

  function handleChange(e) {
    setInput(
      e.target.value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '')
        .slice(0, 15)
    );
  }

  function handleExample(ex) { setInput(ex); }

  function handleCopy() {
    if (!gstin) return;
    navigator.clipboard.writeText(gstin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Header bar ─────────────────────────────────────── */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm font-medium text-surface-600">GST Number Validator</span>
        <div className="flex flex-wrap gap-1.5">
          {['✅ Free', '🇮🇳 India GST', '⚡ Instant', '🔒 No login'].map(b => (
            <span key={b} className="text-[10px] font-medium text-surface-500 bg-white border border-surface-200 px-2 py-0.5 rounded-full">{b}</span>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-5">

        {/* ── Input ──────────────────────────────────────────── */}
        <div>
          <label htmlFor="gstin-input" className="block text-sm font-semibold text-surface-700 mb-1.5">
            Enter GSTIN
          </label>
          <div className="relative">
            <input
              id="gstin-input"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="e.g. 27AAPFU0939F1ZV"
              maxLength={15}
              autoComplete="off"
              spellCheck={false}
              className={`w-full px-4 py-3 pr-20 border rounded-xl font-mono text-lg tracking-widest uppercase outline-none transition-colors
                ${isValid
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-900 focus:ring-2 focus:ring-emerald-300'
                  : isInvalid
                  ? 'border-red-400 bg-red-50 text-red-900 focus:ring-2 focus:ring-red-300'
                  : 'border-surface-300 bg-white text-surface-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                }`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-surface-400 select-none">
              {gstin.length}/15
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
            Format: <span className="font-mono font-semibold text-surface-600">DDAAAAA9999A9Z9</span> — 2 digits (state) · 10 chars (PAN) · 1 entity · Z · 1 check
          </p>
        </div>

        {/* ── State: Empty ───────────────────────────────────── */}
        {isEmpty && (
          <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
            <p className="text-sm font-semibold text-surface-700 mb-3">GSTIN Structure</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-surface-600">
              {[
                { pos: '1–2',  color: 'bg-sky-100 text-sky-700',      label: 'State Code',        desc: '2-digit code for the state/UT of registration (01=J&K, 07=Delhi, 27=Maharashtra…)' },
                { pos: '3–12', color: 'bg-indigo-100 text-indigo-700', label: 'PAN Number',         desc: 'Embedded PAN of the registered business or individual' },
                { pos: '13',   color: 'bg-amber-100 text-amber-700',   label: 'Entity Type',        desc: '1=Proprietor, 2=Partnership, 3=HUF, 4=Company, etc.' },
                { pos: '14',   color: 'bg-rose-100 text-rose-700',     label: 'Always Z',           desc: 'This character is always the letter Z for all GSTINs' },
                { pos: '15',   color: 'bg-emerald-100 text-emerald-700', label: 'Check Digit',      desc: 'Alphanumeric check character for integrity verification' },
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

        {/* ── State: Partial (typing hints) ──────────────────── */}
        {isPartial && (
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm font-semibold text-brand-700 mb-2">
              Entering GSTIN — {gstin.length}/15 characters
            </p>
            {/* Character strip */}
            <div className="flex gap-1 mb-3 font-mono text-sm flex-wrap">
              {[...Array(15)].map((_, i) => {
                const ch      = gstin[i];
                const filled  = i < gstin.length;
                return (
                  <span
                    key={i}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg border font-bold text-xs
                      ${filled ? segColorPartial(i) : 'bg-white text-surface-300 border-surface-200'}`}
                  >
                    {ch || '·'}
                  </span>
                );
              })}
            </div>
            {result.hints && result.hints.length > 0 && (
              <ul className="space-y-1">
                {result.hints.map(h => (
                  <li key={h} className="flex items-start gap-1.5 text-xs text-brand-700">
                    <span className="shrink-0 mt-0.5">⚠️</span>{h}
                  </li>
                ))}
              </ul>
            )}
            {/* Show live state name if we have 2 digits */}
            {gstin.length >= 2 && STATE_CODES[gstin.slice(0, 2)] && (
              <div className="mt-2 flex items-center gap-2 text-xs text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg w-fit">
                <span>{STATE_CODES[gstin.slice(0, 2)].flag}</span>
                <span className="font-semibold">{STATE_CODES[gstin.slice(0, 2)].name}</span>
              </div>
            )}
          </div>
        )}

        {/* ── State: Valid ───────────────────────────────────── */}
        {isValid && result.info && (
          <>
            {/* Success banner */}
            <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-300 rounded-xl">
              <span className="text-2xl shrink-0">✅</span>
              <div>
                <div className="font-bold text-emerald-800 text-sm">Valid GSTIN Format</div>
                <div className="text-xs text-emerald-600 mt-0.5">
                  This GSTIN matches the official format issued by the Goods and Services Tax Network (GSTN).
                </div>
              </div>
            </div>

            {/* Visual breakdown */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-2">GSTIN Breakdown</p>
              <div className="flex gap-1 font-mono flex-wrap">
                {[
                  { chars: gstin.slice(0, 2),  color: 'bg-sky-100 text-sky-800 border-sky-300',         label: 'State'   },
                  { chars: gstin.slice(2, 7),   color: 'bg-indigo-100 text-indigo-800 border-indigo-300', label: 'PAN (L)' },
                  { chars: gstin.slice(7, 11),  color: 'bg-violet-100 text-violet-800 border-violet-300', label: 'PAN (D)' },
                  { chars: gstin[11],            color: 'bg-teal-100 text-teal-800 border-teal-300',       label: 'PAN (C)' },
                  { chars: gstin[12],            color: 'bg-amber-100 text-amber-800 border-amber-300',    label: 'Entity'  },
                  { chars: gstin[13],            color: 'bg-rose-100 text-rose-800 border-rose-300',       label: 'Z'       },
                  { chars: gstin[14],            color: 'bg-emerald-100 text-emerald-800 border-emerald-300', label: 'Check' },
                ].map(seg => (
                  <div key={seg.label} className="flex flex-col items-center gap-1">
                    <span className={`inline-flex items-center justify-center px-2.5 py-2 rounded-xl border-2 font-bold tracking-wider text-sm ${seg.color}`}>
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
                {/* State */}
                <div className="flex items-start gap-3 px-5 py-3">
                  <span className="text-base shrink-0 mt-0.5">🗺️</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-surface-500">State / UT (Code {result.info.stateCode})</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-surface-900">{result.info.stateName}</span>
                      <span className="text-sm bg-sky-100 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-full text-xs font-medium">
                        {result.info.stateFlag} {result.info.stateName}
                      </span>
                    </div>
                    <div className="text-xs text-surface-400 mt-0.5">GST registration state for this business</div>
                  </div>
                </div>

                {/* PAN */}
                <div className="flex items-start gap-3 px-5 py-3">
                  <span className="text-base shrink-0 mt-0.5">🪪</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-surface-500">Embedded PAN (characters 3–12)</div>
                    <div className="text-sm font-bold text-surface-900 font-mono tracking-widest">{result.info.pan}</div>
                    <div className="text-xs text-surface-400 mt-0.5">The business's Permanent Account Number embedded within the GSTIN</div>
                  </div>
                </div>

                {/* Entity type */}
                <div className="flex items-start gap-3 px-5 py-3">
                  <span className="text-base shrink-0 mt-0.5">🏢</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-surface-500">Entity Type (character 13: "{result.info.entityChar}")</div>
                    <div className="text-sm font-bold text-surface-900">{result.info.entityType}</div>
                    <div className="text-xs text-surface-400 mt-0.5">Registration number for this entity in the state — 1 means first registration</div>
                  </div>
                </div>

                {/* 14th char */}
                <div className="flex items-start gap-3 px-5 py-3">
                  <span className="text-base shrink-0 mt-0.5">🔤</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-surface-500">14th Character</div>
                    <div className="text-sm font-bold text-surface-900 font-mono">Z</div>
                    <div className="text-xs text-surface-400 mt-0.5">Always "Z" for all GSTINs — reserved by GSTN</div>
                  </div>
                </div>

                {/* Check digit */}
                <div className="flex items-start gap-3 px-5 py-3">
                  <span className="text-base shrink-0 mt-0.5">✔️</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-surface-500">Check Digit (character 15)</div>
                    <div className="text-sm font-bold text-surface-900 font-mono">{result.info.checkDigit}</div>
                    <div className="text-xs text-surface-400 mt-0.5">Alphanumeric integrity check character</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm transition-colors"
            >
              {copied ? '✅ Copied!' : '📋 Copy GSTIN'}
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-surface-400 text-center leading-relaxed">
              ⚠️ Format validation only — this tool does not verify your GSTIN with the GSTN database.
              For official verification visit{' '}
              <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer"
                className="underline hover:text-brand-600">gst.gov.in</a>.
            </p>
          </>
        )}

        {/* ── State: Invalid ─────────────────────────────────── */}
        {isInvalid && (
          <>
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-300 rounded-xl">
              <span className="text-2xl shrink-0">❌</span>
              <div>
                <div className="font-bold text-red-800 text-sm mb-1">Invalid GSTIN Format</div>
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
                {[...Array(15)].map((_, i) => {
                  const ch = gstin[i];
                  // expected: digits at 0,1; letters at 2–6,11; digits at 7–10; [1-9A-Z] at 12; Z at 13; [0-9A-Z] at 14
                  let ok = false;
                  if (ch) {
                    if (i < 2)       ok = /[0-9]/.test(ch);
                    else if (i < 7)  ok = /[A-Z]/.test(ch);
                    else if (i < 11) ok = /[0-9]/.test(ch);
                    else if (i === 11) ok = /[A-Z]/.test(ch);
                    else if (i === 12) ok = /[1-9A-Z]/.test(ch);
                    else if (i === 13) ok = ch === 'Z';
                    else              ok = /[0-9A-Z]/.test(ch);
                  }
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span
                        className={`w-7 h-7 flex items-center justify-center rounded-lg border font-bold text-xs
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

        {/* ── Example GSTINs ─────────────────────────────────── */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">
            Try an Example
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex.gstin}
                onClick={() => handleExample(ex.gstin)}
                title={ex.label}
                className="group flex items-center gap-2 px-3 py-2 bg-surface-50 hover:bg-brand-50 border border-surface-200 hover:border-brand-300 rounded-xl transition-colors"
              >
                <span className="font-mono font-bold text-sm text-surface-800 group-hover:text-brand-700 tracking-widest">
                  {ex.gstin}
                </span>
                <span className="text-xs text-surface-400 group-hover:text-brand-500 hidden sm:inline">
                  {ex.label}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
