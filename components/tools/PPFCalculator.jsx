'use client';
import { useState, useMemo, useCallback } from 'react';
import PDFEmailGate from '../PDFEmailGate';
import { generatePDF } from '../../lib/generatePDF';

function formatINR(amount) {
  if (isNaN(amount) || amount === null) return '₹0';
  if (amount < 0) return '-' + formatINR(Math.abs(amount));
  const str = Math.round(amount).toString();
  if (str.length <= 3) return '₹' + str;
  let lastThree = str.slice(-3);
  let remaining = str.slice(0, -3);
  if (remaining.length > 0) lastThree = ',' + lastThree;
  return '₹' + remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
}


function SliderInput({ label, value, onChange, min, max, step, helper, prefix, suffix, infoTag }) {
  const [raw, setRaw] = useState(String(value));
  const [focused, setFocused] = useState(false);
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  // Keep raw in sync when value changes externally (e.g. slider)
  if (!focused && raw !== String(value)) setRaw(String(value));

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-surface-500">{label}</label>
        {infoTag && <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">{infoTag}</span>}
      </div>
      <div className="flex items-center border border-surface-200 rounded-xl focus-within:border-brand-400 overflow-hidden bg-white mb-2">
        {prefix && <span className="px-3 text-surface-500 font-bold text-sm border-r border-surface-200 py-2.5 bg-surface-50 shrink-0">{prefix}</span>}
        <input
          type="text"
          inputMode="decimal"
          value={raw}
          onFocus={() => setFocused(true)}
          onChange={e => {
            const val = e.target.value;
            setRaw(val);
            const n = parseFloat(val);
            if (!isNaN(n) && n >= min && n <= max) onChange(n);
          }}
          onBlur={() => {
            setFocused(false);
            const n = parseFloat(raw);
            if (isNaN(n)) {
              setRaw(String(value));
            } else {
              const clamped = Math.min(max, Math.max(min, n));
              onChange(clamped);
              setRaw(String(clamped));
            }
          }}
          className="flex-1 px-3 py-2.5 text-sm font-bold text-surface-900 focus:outline-none bg-white"
        />
        {suffix && <span className="px-3 text-surface-500 font-semibold text-sm border-l border-surface-200 py-2.5 bg-surface-50 shrink-0">{suffix}</span>}
      </div>
      <div className="relative h-2 bg-surface-100 rounded-full">
        <div className="absolute top-0 left-0 h-2 bg-brand-500 rounded-full transition-all duration-200" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={e => {
            const n = parseFloat(e.target.value);
            onChange(n);
            setRaw(String(n));
          }}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-brand-500 rounded-full shadow transition-all duration-200"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      {helper && <p className="text-xs text-surface-400 mt-1.5">{helper}</p>}
    </div>
  );
}

function DonutChart({ invested, interest }) {
  const total = invested + interest;
  const investedPct = total > 0 ? (invested / total) * 100 : 50;
  const interestPct = 100 - investedPct;
  const r = 60;
  const circ = 2 * Math.PI * r;
  const investedDash = (investedPct / 100) * circ;
  const interestDash = (interestPct / 100) * circ;
  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#e2e8f0" strokeWidth="20" />
        <circle cx="80" cy="80" r={r} fill="none" stroke="#3b82f6" strokeWidth="20"
          strokeDasharray={`${investedDash} ${circ}`}
          strokeDashoffset={circ * 0.25}
          strokeLinecap="butt"
        />
        <circle cx="80" cy="80" r={r} fill="none" stroke="#34d399" strokeWidth="20"
          strokeDasharray={`${interestDash} ${circ}`}
          strokeDashoffset={circ * 0.25 - investedDash}
          strokeLinecap="butt"
        />
        <text x="80" y="75" textAnchor="middle" className="text-xs" style={{ fontSize: '11px', fill: '#64748b', fontWeight: 600 }}>Returns</text>
        <text x="80" y="93" textAnchor="middle" style={{ fontSize: '13px', fill: '#0f172a', fontWeight: 700 }}>
          {total > 0 ? `${((interest / total) * 100).toFixed(0)}%` : '0%'}
        </text>
      </svg>
      <div className="flex gap-5 mt-1">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500 shrink-0" /><span className="text-xs text-surface-600">Invested</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" /><span className="text-xs text-surface-600">Interest</span></div>
      </div>
    </div>
  );
}

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [tenure, setTenure] = useState(15);
  const [rate, setRate] = useState(7.1);
  const [showTable, setShowTable] = useState(true);
  const [taxSlab, setTaxSlab] = useState(30);

  const { rows, maturity, totalInvested, totalInterest } = useMemo(() => {
    const rows = [];
    let balance = 0;
    let cumInterest = 0;
    for (let y = 1; y <= tenure; y++) {
      const opening = balance;
      const deposit = yearly;
      const interest = (opening + deposit) * (rate / 100);
      const closing = opening + deposit + interest;
      cumInterest += interest;
      rows.push({ year: y, opening, deposit, interest, closing, cumInterest });
      balance = closing;
    }
    const maturity = balance;
    const totalInvested = yearly * tenure;
    const totalInterest = maturity - totalInvested;
    return { rows, maturity, totalInvested, totalInterest };
  }, [yearly, tenure, rate]);

  const growthMultiple = totalInvested > 0 ? (maturity / totalInvested).toFixed(2) : '0';
  const taxSavingAnnual = Math.min(yearly, 150000) * (taxSlab / 100);
  const taxSavingTotal = taxSavingAnnual * tenure;
  const pretaxEquiv = rate / (1 - taxSlab / 100);

  const milestones = useMemo(() => {
    const ms = [];
    if (rows.length >= 2) {
      const loanAmt = rows[0].closing * 0.25;
      ms.push({ year: 3, label: 'Loan facility available', detail: `Borrow up to 25% of Year 1 balance (${formatINR(loanAmt)}) at 1% above PPF rate` });
    }
    if (rows.length >= 6) {
      const wdAmt = rows[3].closing * 0.5;
      ms.push({ year: 7, label: 'Partial withdrawal available', detail: `Withdraw up to 50% of Year 4 balance (${formatINR(wdAmt)})` });
    }
    ms.push({ year: 15, label: 'Maturity', detail: `Withdraw full amount (${formatINR(rows[14]?.closing || 0)}) or extend in 5-year blocks` });
    if (tenure > 15) {
      for (let t = 20; t <= tenure; t += 5) {
        const row = rows[t - 1];
        if (row) ms.push({ year: t, label: `Extension maturity (Year ${t})`, detail: `Balance: ${formatINR(row.closing)}` });
      }
    }
    return ms;
  }, [rows, tenure]);

  return (
    <div className="space-y-6">
      {/* Tip banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 flex items-start gap-3 text-sm text-amber-800">
        <span className="text-lg shrink-0">💡</span>
        <span><strong>Deposit before the 5th of April</strong> each year to earn interest for the full first month. Depositing on April 6 means you miss April's interest entirely — costing ₹887 per lakh deposited at 7.1%.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── INPUTS ── */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="bg-brand-600 px-5 py-4">
            <h2 className="font-bold text-white">🏦 PPF Calculator Inputs</h2>
            <p className="text-brand-200 text-xs mt-0.5">Adjust values to see live results</p>
          </div>
          <div className="p-5 space-y-6">
            <SliderInput
              label="Yearly Investment"
              value={yearly}
              onChange={setYearly}
              min={500} max={150000} step={500}
              prefix="₹"
              helper="Min ₹500 · Max ₹1,50,000 per year (PPF scheme limits)"
            />
            <SliderInput
              label="Investment Tenure"
              value={tenure}
              onChange={v => setTenure(Math.round(v / 5) * 5 < 15 ? 15 : Math.round(v / 5) * 5)}
              min={15} max={50} step={5}
              suffix="years"
              helper="15-year lock-in + extendable in 5-year blocks (20, 25, 30...)"
            />
            <SliderInput
              label="PPF Interest Rate"
              value={rate}
              onChange={setRate}
              min={1} max={15} step={0.1}
              suffix="% p.a."
              helper="Current PPF rate: 7.1% p.a. (Q1 FY 2026-27, April–June 2026)"
              infoTag="⚡ Unchanged since April 2020"
            />

            {/* Tax slab for tax saving estimate */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-surface-500 block mb-2">Your Tax Slab (for tax saving estimate)</label>
              <div className="flex gap-2">
                {[5, 20, 30].map(s => (
                  <button key={s} onClick={() => setTaxSlab(s)}
                    className={`flex-1 py-2 text-sm font-bold rounded-xl border-2 transition-all ${taxSlab === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'}`}>
                    {s}%
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RESULTS ── */}
        <div className="lg:col-span-3 space-y-4">

          {/* Section A — Summary cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label:'Maturity Value',     value: formatINR(maturity),       sub:`After ${tenure} years`, color:'brand', big: true },
              { label:'Total Invested',     value: formatINR(totalInvested),  sub:`₹${(yearly/1000).toFixed(0)}K × ${tenure} yrs`, color:'surface' },
              { label:'Total Interest',     value: formatINR(totalInterest),  sub:'Tax-free earnings', color:'emerald' },
            ].map(c => (
              <div key={c.label} className={`rounded-2xl p-4 text-center ${c.color === 'brand' ? 'bg-brand-600 text-white' : c.color === 'emerald' ? 'bg-emerald-50 border border-emerald-200' : 'bg-surface-50 border border-surface-200'}`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${c.color === 'brand' ? 'text-white/70' : c.color === 'emerald' ? 'text-emerald-600' : 'text-surface-500'}`}>{c.label}</div>
                <div className={`font-black leading-tight ${c.big ? 'text-xl' : 'text-lg'} ${c.color === 'brand' ? 'text-white' : c.color === 'emerald' ? 'text-emerald-700' : 'text-surface-900'}`}>{c.value}</div>
                <div className={`text-xs mt-0.5 ${c.color === 'brand' ? 'text-white/60' : 'text-surface-400'}`}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Growth ratio + donut */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5 flex items-center gap-6 flex-wrap">
            <DonutChart invested={totalInvested} interest={totalInterest} />
            <div className="flex-1 space-y-3">
              <div>
                <div className="text-xs font-bold text-surface-400 uppercase tracking-wider mb-0.5">Your money grew</div>
                <div className="text-3xl font-black text-brand-700">{growthMultiple}×</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-surface-500">Interest earned</span>
                  <span className="font-bold text-emerald-700">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-500">% of maturity value</span>
                  <span className="font-bold text-surface-900">{totalInvested > 0 ? ((totalInterest / maturity) * 100).toFixed(1) : 0}%</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-surface-500">Pre-tax equivalent</span>
                  <span className="font-bold text-surface-900 text-right">{pretaxEquiv.toFixed(1)}% at {taxSlab}% slab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section D — Tax Saving */}
          <div className="bg-emerald-600 rounded-2xl p-5 text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-200 mb-3">🛡️ Section 80C Tax Saving — PPF EEE Status</div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[5, 20, 30].map(s => {
                const saving = Math.min(yearly, 150000) * (s / 100);
                const total = saving * tenure;
                return (
                  <div key={s} className={`rounded-xl p-3 text-center ${s === taxSlab ? 'bg-white text-brand-700' : 'bg-white/10'}`}>
                    <div className={`text-xs font-bold mb-1 ${s === taxSlab ? 'text-brand-600' : 'text-emerald-200'}`}>{s}% slab</div>
                    <div className={`font-black text-base ${s === taxSlab ? 'text-brand-700' : 'text-white'}`}>{formatINR(saving)}</div>
                    <div className={`text-xs ${s === taxSlab ? 'text-brand-500' : 'text-emerald-300'}`}>per year</div>
                    <div className={`text-xs font-bold mt-1 ${s === taxSlab ? 'text-brand-700' : 'text-white'}`}>{formatINR(total)} total</div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-emerald-200 leading-relaxed">
              PPF has <strong className="text-white">EEE (Exempt-Exempt-Exempt)</strong> tax status: (1) Contributions deductible under 80C, (2) Interest is tax-free, (3) Maturity amount is tax-free. Note: EEE applies only under the <strong className="text-white">old tax regime</strong>. No deduction under new regime.
            </p>
          </div>

          {/* Section E — Milestones */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">🏁 Key PPF Milestones</div>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-black text-xs shrink-0">Y{m.year}</div>
                  <div>
                    <div className="font-bold text-surface-900 text-sm">{m.label}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Section C — Year-wise table */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-100">
          <div>
            <div className="font-bold text-surface-900">📊 Year-Wise PPF Breakdown</div>
            <div className="text-xs text-surface-400 mt-0.5">All {tenure} years · Interest @ {rate}% p.a.</div>
          </div>
          <button onClick={() => setShowTable(p => !p)}
            className="text-xs font-bold text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-xl hover:bg-brand-100 transition-colors">
            {showTable ? '▲ Hide Table' : '▼ Show Table'}
          </button>
        </div>

        {showTable && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{background:'#0f172a'}}>
                  {['Year', 'Opening Balance', 'Deposit', 'Interest Earned', 'Cumulative Interest', 'Closing Balance'].map((h, i) => (
                    <th key={h} style={{color:'#ffffff'}} className={`px-4 py-3 font-semibold text-right ${i === 0 ? 'text-center rounded-none' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const isMilestone = r.year % 5 === 0;
                  return (
                    <tr key={r.year} className={isMilestone ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-2.5 text-center font-bold ${isMilestone ? 'text-brand-700' : 'text-surface-700'}`}>
                        {r.year}
                        {isMilestone && <span className="ml-1 text-[9px] bg-brand-100 text-brand-700 px-1 rounded font-black">5yr</span>}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-surface-600">{formatINR(r.opening)}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-surface-700">{formatINR(r.deposit)}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-emerald-700 font-semibold">{formatINR(r.interest)}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-emerald-600">{formatINR(r.cumInterest)}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${isMilestone ? 'text-brand-700 text-base' : 'text-surface-900'}`}>{formatINR(r.closing)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-surface-900">
                  <td style={{color:'#ffffff'}} className="px-4 py-3 text-center font-black">Total</td>
                  <td className="px-4 py-3 text-right" />
                  <td style={{color:'#ffffff'}} className="px-4 py-3 text-right font-mono font-black">{formatINR(totalInvested)}</td>
                  <td style={{color:'#34d399'}} className="px-4 py-3 text-right font-mono font-black">{formatINR(totalInterest)}</td>
                  <td style={{color:'#34d399'}} className="px-4 py-3 text-right font-mono font-black">{formatINR(totalInterest)}</td>
                  <td style={{color:'#60a5fa'}} className="px-4 py-3 text-right font-mono font-black text-base">{formatINR(maturity)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>

      {/* ── PDF Download Email Gate ──────────────────────── */}
      <PDFEmailGate
        toolName="PPF Calculator"
        toolSlug="ppf-calculator"
        resultSummary={`Maturity: ${formatINR(maturity)} after ${tenure} years`}
        onEmailSubmitted={() => generatePDF({
          title: 'PPF Calculator Report',
          subtitle: 'ToolStackHub.in',
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
          sections: [
            {
              heading: 'Investment Summary',
              type: 'summary',
              data: [
                { label: 'Yearly Investment',     value: formatINR(yearly) },
                { label: 'Investment Tenure',     value: `${tenure} years` },
                { label: 'Interest Rate',         value: `${rate}% p.a.` },
                { label: 'Total Invested',        value: formatINR(totalInvested) },
                { label: 'Total Interest Earned', value: formatINR(totalInterest) },
                { label: 'Maturity Value',        value: formatINR(maturity) },
                { label: 'Growth Multiple',       value: `${(maturity / totalInvested).toFixed(2)}×` },
              ],
            },
            {
              heading: 'Year-Wise Breakdown',
              type: 'table',
              data: rows.map(r => ({
                'Year':               String(r.year),
                'Opening Balance':    formatINR(r.opening),
                'Deposit':            formatINR(r.deposit),
                'Interest Earned':    formatINR(r.interest),
                'Cumulative Interest':formatINR(r.cumInterest),
                'Closing Balance':    formatINR(r.closing),
              })),
            },
          ],
          footer: 'Generated by ToolStackHub.in — Free Online Finance Tools for India',
        })}
      />
    </div>
  );
}