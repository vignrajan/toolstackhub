'use client';
import { useState } from 'react';

// ── TDS section presets (FY 2025-26 / AY 2026-27) ──────────────
// Thresholds reflect Budget 2025 revisions effective 1 Apr 2025.
const SECTIONS = [
  {
    id: 'salary', label: '💼 Salary', section: '192', type: 'slab',
    threshold: 0, freq: 'year',
    note: 'TDS on salary is deducted monthly by your employer based on your estimated annual income tax (new regime FY 2025-26), not a flat rate.',
  },
  {
    id: 'rent', label: '🏠 Rent', section: '194-I', rate: 10,
    threshold: 600000, freq: 'year',
    note: '10% on rent of land/building (2% for plant & machinery). No TDS if total annual rent is ₹6,00,000 or less (FY 2025-26).',
  },
  {
    id: 'professional', label: '🧑‍⚖️ Professional Fees', section: '194J', rate: 10,
    threshold: 50000, freq: 'year',
    note: '10% on professional fees (2% for technical services / call centres). No TDS if the annual payment is ₹50,000 or less.',
  },
  {
    id: 'contractor', label: '🔨 Contractor', section: '194C', rate: 1,
    altRate: 2, payeeToggle: true, threshold: 30000, freq: 'payment',
    note: '1% if the payee is an Individual/HUF, 2% for companies/firms. No TDS if a single payment is ₹30,000 or less (and aggregate is ₹1,00,000 or less in the year).',
  },
  {
    id: 'fd', label: '🏦 FD Interest', section: '194A', rate: 10,
    threshold: 50000, freq: 'year',
    note: '10% on bank FD/RD interest. No TDS if annual interest is ₹50,000 or less (₹1,00,000 or less for senior citizens) — FY 2025-26.',
  },
  {
    id: 'commission', label: '🤝 Commission', section: '194H', rate: 2,
    threshold: 20000, freq: 'year',
    note: '2% on commission or brokerage. No TDS if the annual payment is ₹20,000 or less.',
  },
];

// New-regime income tax, FY 2025-26 (AY 2026-27), incl. ₹75k standard
// deduction, full 87A rebate up to ₹12L taxable, and 4% health & education cess.
function newRegimeTax(gross) {
  const ti = Math.max(0, gross - 75000);
  const slabs = [
    [400000, 0], [800000, 0.05], [1200000, 0.10],
    [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30],
  ];
  let tax = 0, prev = 0;
  for (const [limit, r] of slabs) {
    if (ti > prev) { tax += (Math.min(ti, limit) - prev) * r; prev = limit; }
    else break;
  }
  if (ti <= 1200000) tax = 0; // 87A rebate
  return tax + tax * 0.04;     // + cess
}

function fmt(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function TDSCalculator({ prefill = {} }) {
  const initial = SECTIONS.find(s => s.id === prefill.section) || SECTIONS[0];
  const [secId,  setSecId]  = useState(initial.id);
  const [amount, setAmount] = useState(prefill.amount ?? '');
  const [payee,  setPayee]  = useState('individual'); // individual | company (194C)
  const [hasPan, setHasPan] = useState(true);
  const [copied, setCopied] = useState(false);

  const sec = SECTIONS.find(s => s.id === secId);
  const val = parseFloat(amount) || 0;
  const isSalary = sec.type === 'slab';

  // ── Determine applicable rate ──────────────────────────────
  let baseRate = sec.rate;
  if (sec.payeeToggle) baseRate = payee === 'company' ? sec.altRate : sec.rate;
  // No PAN → flat 20% (Section 206AA), or higher of the two.
  const effRate = !isSalary && !hasPan ? Math.max(20, baseRate) : baseRate;

  // ── Core calculation ───────────────────────────────────────
  const aboveThreshold = val > sec.threshold;
  let tds = 0, annualTax = 0;

  if (isSalary) {
    annualTax = newRegimeTax(val);
    tds = annualTax / 12;          // monthly TDS
    if (!hasPan && val > 1275000) tds = Math.max(tds, val * 0.20 / 12);
  } else {
    tds = aboveThreshold ? val * effRate / 100 : 0;
  }
  const net = isSalary ? val / 12 - tds : val - tds;
  const hasValue = val > 0;

  const share = () => {
    const lines = isSalary ? [
      `TDS on Salary (Section 192) — FY 2025-26`,
      `━━━━━━━━━━━━━━━━━━`,
      `Annual Salary: ${fmt(val)}`,
      `Estimated Annual Tax (new regime): ${fmt(annualTax)}`,
      `Monthly TDS: ${fmt(tds)}`,
      `Monthly In-Hand (approx): ${fmt(net)}`,
    ] : [
      `TDS Calculator — Section ${sec.section}`,
      `━━━━━━━━━━━━━━━━━━`,
      `Payment Type: ${sec.label.replace(/^\S+\s/, '')}`,
      `Payment Amount: ${fmt(val)}`,
      `TDS Rate: ${effRate}%${!hasPan ? ' (no PAN — 20%)' : ''}`,
      aboveThreshold ? `TDS Deducted: ${fmt(tds)}` : `Below threshold (${fmt(sec.threshold)}) — No TDS`,
      `Net Payment: ${fmt(net)}`,
    ];
    navigator.clipboard.writeText(
      [...lines, ``, `Calculated at toolstackhub.in/tools/tds-calculator`].join('\n')
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      {/* ── Payment type selector ─────────────────────────── */}
      <div className="p-6 border-b border-surface-100">
        <label className="text-sm font-semibold text-surface-700 block mb-3">Payment Type</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setSecId(s.id)}
              className={`px-3 py-2.5 rounded-xl text-left border-2 transition-colors ${
                secId === s.id
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-surface-200 bg-white hover:border-brand-300'
              }`}>
              <div className={`text-sm font-bold ${secId === s.id ? 'text-brand-700' : 'text-surface-700'}`}>{s.label}</div>
              <div className="text-[10px] text-surface-400 mt-0.5">Sec {s.section}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-100">
        {/* ── Inputs ──────────────────────────────────────── */}
        <div className="p-6 space-y-6">
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">
              {isSalary ? 'Annual Salary (CTC / Gross)'
                : sec.freq === 'year' ? 'Annual Payment Amount' : 'Payment Amount'}
            </label>
            <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 focus-within:border-brand-400 transition-colors">
              <span className="text-surface-500 font-semibold">₹</span>
              <input
                type="number" min="0" value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Contractor payee type */}
          {sec.payeeToggle && (
            <div>
              <label className="text-sm font-semibold text-surface-700 block mb-2">Payee Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'individual', label: 'Individual / HUF', sub: '1% TDS' },
                  { id: 'company',    label: 'Company / Firm',   sub: '2% TDS' },
                ].map(p => (
                  <button key={p.id} onClick={() => setPayee(p.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-colors ${
                      payee === p.id ? 'border-brand-600 bg-brand-50' : 'border-surface-200 bg-white hover:border-brand-200'
                    }`}>
                    <div className={`text-sm font-bold ${payee === p.id ? 'text-brand-700' : 'text-surface-700'}`}>{p.label}</div>
                    <div className="text-[10px] text-surface-400 mt-0.5">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PAN toggle (not relevant for slab salary display) */}
          {!isSalary && (
            <div>
              <label className="text-sm font-semibold text-surface-700 block mb-2">PAN of Payee Available?</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: true,  label: 'Yes', sub: `Normal rate ${baseRate}%` },
                  { id: false, label: 'No',  sub: '20% (Sec 206AA)' },
                ].map(p => (
                  <button key={String(p.id)} onClick={() => setHasPan(p.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-colors ${
                      hasPan === p.id ? 'border-brand-600 bg-brand-50' : 'border-surface-200 bg-white hover:border-brand-200'
                    }`}>
                    <div className={`text-sm font-bold ${hasPan === p.id ? 'text-brand-700' : 'text-surface-700'}`}>{p.label}</div>
                    <div className="text-[10px] text-surface-400 mt-0.5">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong className="text-surface-700">Section {sec.section}:</strong> {sec.note}
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="p-6 flex-1" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)' }}>
            {hasValue ? (
              <>
                <div className="text-center mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">
                    {isSalary ? 'Monthly TDS Deducted' : 'TDS to be Deducted'}
                  </div>
                  <div className="font-display font-black text-4xl text-white tracking-tight">{fmt(tds)}</div>
                  {isSalary && <div className="text-xs text-indigo-300 mt-1">{fmt(annualTax)} per year ÷ 12</div>}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">{isSalary ? 'Annual Salary' : 'Payment Amount'}</span>
                    <span className="text-sm font-bold text-white">{fmt(val)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">{isSalary ? 'Effective Tax' : `TDS Rate (Sec ${sec.section})`}</span>
                    <span className="text-sm font-bold text-amber-300">
                      {isSalary ? `${val > 0 ? ((annualTax / val) * 100).toFixed(1) : 0}%` : `${effRate}%`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">{isSalary ? 'Monthly TDS' : 'TDS Amount'}</span>
                    <span className="text-sm font-bold text-rose-300">{fmt(tds)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 rounded-xl border border-white/20">
                    <span className="text-sm font-bold text-white">{isSalary ? 'Monthly In-Hand (approx)' : 'Net Payment'}</span>
                    <span className="text-base font-black text-emerald-300">{fmt(net)}</span>
                  </div>
                </div>

                {!isSalary && !aboveThreshold && (
                  <div className="mb-5 text-center text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl py-2.5 px-3">
                    ✅ Amount is within the ₹{sec.threshold.toLocaleString('en-IN')} threshold — no TDS is required.
                  </div>
                )}

                <button onClick={share}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    copied ? 'bg-emerald-500 text-white' : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                  }`}>
                  {copied ? '✅ Copied!' : '📋 Copy Result'}
                </button>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="text-4xl mb-3">🧾</div>
                  <div className="text-indigo-300 text-sm">Enter an amount to calculate TDS</div>
                </div>
              </div>
            )}
          </div>

          {/* TDS rate reference */}
          <div className="p-4 border-t border-surface-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-surface-400 mb-2">Common TDS Rates (FY 2025-26)</div>
            <div className="space-y-1">
              {[
                { s: '192',   r: 'Slab', items: 'Salary — as per income tax slab' },
                { s: '194-I', r: '10%',  items: 'Rent of land/building' },
                { s: '194J',  r: '10%',  items: 'Professional / technical fees' },
                { s: '194C',  r: '1–2%', items: 'Contractor payments' },
                { s: '194A',  r: '10%',  items: 'Bank FD / RD interest' },
                { s: '194H',  r: '2%',   items: 'Commission / brokerage' },
              ].map(row => (
                <div key={row.s} className="flex items-center gap-2 text-xs">
                  <span className={`font-black w-12 ${sec.section === row.s ? 'text-brand-700' : 'text-surface-500'}`}>{row.r}</span>
                  <span className="text-surface-500">{row.items}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-surface-400 mt-2 leading-relaxed">
              Estimates only. Salary TDS uses the new regime (FY 2025-26). Verify with a tax professional before filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
