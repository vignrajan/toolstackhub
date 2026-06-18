'use client';
import { useState } from 'react';
import { compareRegimes, inr } from '../../data/income-tax-calc';

export default function IncomeTaxCalculator({ prefill = {} }) {
  const [income,     setIncome]     = useState(prefill.income ?? '');
  const [deductions, setDeductions] = useState(prefill.deductions ?? 150000);
  const [copied,     setCopied]     = useState(false);

  const gross = parseFloat(income) || 0;
  const ded   = parseFloat(deductions) || 0;
  const r = compareRegimes(gross, ded);
  const hasValue = gross > 0;

  const share = () => {
    const text = [
      `Income Tax on ${inr(gross)} — FY 2025-26 (AY 2026-27)`,
      `━━━━━━━━━━━━━━━━━━`,
      `New Regime: ${inr(r.new.total)}${r.new.rebate ? ' (nil — 87A rebate)' : ''}`,
      `Old Regime: ${inr(r.old.total)} (with ${inr(ded)} deductions)`,
      ``,
      `✅ ${r.better === 'new' ? 'New' : 'Old'} regime is better — you save ${inr(r.saving)}`,
      ``,
      `Calculated at toolstackhub.in/tools/income-tax-calculator`,
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-100">

        {/* ── Inputs ──────────────────────────────────────── */}
        <div className="p-6 space-y-6">
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">Annual Income (Gross Salary / Total Income)</label>
            <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 focus-within:border-brand-400 transition-colors">
              <span className="text-surface-500 font-semibold">₹</span>
              <input
                type="number" min="0" value={income}
                onChange={e => setIncome(e.target.value)}
                placeholder="e.g. 1200000"
                className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {[700000, 1000000, 1200000, 1500000, 2000000].map(v => (
                <button key={v} onClick={() => setIncome(String(v))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-colors ${
                    gross === v ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'
                  }`}>
                  ₹{(v / 100000).toFixed(v % 100000 ? 1 : 0)}L
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">Old-Regime Deductions (80C, 80D, NPS, HRA…)</label>
            <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 focus-within:border-brand-400 transition-colors">
              <span className="text-surface-500 font-semibold">₹</span>
              <input
                type="number" min="0" value={deductions}
                onChange={e => setDeductions(e.target.value)}
                placeholder="0"
                className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none"
              />
            </div>
            <p className="text-xs text-surface-400 mt-2 leading-relaxed">
              Chapter VI-A deductions apply only to the old regime. The new regime allows just the ₹75,000 standard deduction.
            </p>
          </div>

          <div className="p-3 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong className="text-surface-700">FY 2025-26 (AY 2026-27):</strong> Under the new regime, income up to ₹12,00,000 (≈₹12,75,000 salary after standard deduction) is tax-free thanks to the Section 87A rebate. Marginal relief applies just above ₹12 lakh.
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="p-6 flex-1" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)' }}>
            {hasValue ? (
              <>
                <div className={`rounded-xl px-4 py-3 mb-5 text-center border ${
                  r.better === 'new' ? 'bg-emerald-500/10 border-emerald-400/30' : 'bg-blue-500/10 border-blue-400/30'
                }`}>
                  <div className="text-sm font-bold text-white">
                    ✅ {r.better === 'new' ? 'New' : 'Old'} Regime is better
                  </div>
                  <div className="text-xs text-indigo-200 mt-0.5">
                    You save {inr(r.saving)} per year
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'New Regime', d: r.new },
                    { label: 'Old Regime', d: r.old },
                  ].map(col => (
                    <div key={col.label} className={`rounded-xl p-4 ${col.d.regime === r.better ? 'bg-white/20 border border-white/25' : 'bg-white/10'}`}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-1">{col.label}</div>
                      <div className="font-display font-black text-2xl text-white tracking-tight">{inr(col.d.total)}</div>
                      <div className="text-[10px] text-indigo-300 mt-1">
                        {col.d.rebate ? 'Nil — 87A rebate' : `on ${inr(col.d.taxable)} taxable`}
                      </div>
                      {col.d.regime === r.better && (
                        <span className="mt-2 inline-block text-[10px] font-bold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">Recommended</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex justify-between items-center py-2 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">Effective tax rate</span>
                    <span className="text-sm font-bold text-amber-300">
                      {gross > 0 ? ((Math.min(r.new.total, r.old.total) / gross) * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">Monthly tax (best regime)</span>
                    <span className="text-sm font-bold text-white">{inr(Math.min(r.new.total, r.old.total) / 12)}</span>
                  </div>
                  {r.new.marginalRelief && (
                    <div className="text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl py-2 px-3">
                      ℹ️ Marginal relief applied — new-regime tax is capped at the income exceeding ₹12 lakh.
                    </div>
                  )}
                </div>

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
                  <div className="text-4xl mb-3">🧮</div>
                  <div className="text-indigo-300 text-sm">Enter your annual income to compare both tax regimes</div>
                </div>
              </div>
            )}
          </div>

          {/* New regime slab reference */}
          <div className="p-4 border-t border-surface-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-surface-400 mb-2">New Regime Slabs (FY 2025-26)</div>
            <div className="space-y-1">
              {[
                { r: 'Nil', items: 'Up to ₹4,00,000' },
                { r: '5%',  items: '₹4,00,001 – ₹8,00,000' },
                { r: '10%', items: '₹8,00,001 – ₹12,00,000' },
                { r: '15%', items: '₹12,00,001 – ₹16,00,000' },
                { r: '20%', items: '₹16,00,001 – ₹20,00,000' },
                { r: '25%', items: '₹20,00,001 – ₹24,00,000' },
                { r: '30%', items: 'Above ₹24,00,000' },
              ].map(row => (
                <div key={row.r} className="flex items-center gap-2 text-xs">
                  <span className="font-black w-9 text-surface-500">{row.r}</span>
                  <span className="text-surface-500">{row.items}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-surface-400 mt-2 leading-relaxed">
              Estimates for FY 2025-26 (AY 2026-27). Old-regime figure depends on the deductions you enter. Verify with a tax professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
