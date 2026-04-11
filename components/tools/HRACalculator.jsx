'use client';
import { useState, useMemo } from 'react';

function formatINR(amount) {
  if (isNaN(amount) || amount === null) return '₹0';
  if (amount < 0) return '-' + formatINR(Math.abs(amount));
  const rounded = Math.round(amount);
  const str = rounded.toString();
  if (str.length <= 3) return '₹' + str;
  let lastThree = str.slice(-3);
  let remaining = str.slice(0, -3);
  if (remaining.length > 0) lastThree = ',' + lastThree;
  const formatted = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return '₹' + formatted;
}

function parseINR(str) {
  const n = parseInt(str.replace(/[^0-9]/g, ''), 10);
  return isNaN(n) ? 0 : Math.min(n, 100000000);
}

const METRO_CITIES = [
  { name: 'Delhi (NCR)', new: false },
  { name: 'Mumbai', new: false },
  { name: 'Kolkata', new: false },
  { name: 'Chennai', new: false },
  { name: 'Bengaluru', new: true },
  { name: 'Pune', new: true },
  { name: 'Hyderabad', new: true },
  { name: 'Ahmedabad', new: true },
];

function NumInput({ label, value, onChange, helper, prefix = '₹' }) {
  const [focused, setFocused] = useState(false);
  const display = focused
    ? (value === 0 ? '' : value.toString())
    : (value === 0 ? '' : Number(value).toLocaleString('en-IN'));

  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-1.5">{label}</label>
      <div className="flex items-center border border-surface-200 rounded-xl focus-within:border-brand-400 overflow-hidden bg-white">
        <span className="px-3 text-surface-500 font-bold text-sm border-r border-surface-200 py-3 bg-surface-50 shrink-0">{prefix}</span>
        <input
          type="text"
          inputMode="numeric"
          value={display}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => {
            const raw = e.target.value.replace(/[^0-9]/g, '');
            onChange(raw === '' ? 0 : Math.min(parseInt(raw, 10), 100000000));
          }}
          placeholder="0"
          className="flex-1 px-3 py-3 text-sm font-semibold text-surface-900 focus:outline-none bg-white"
        />
      </div>
      {helper && <p className="text-xs text-surface-400 mt-1 leading-relaxed">{helper}</p>}
    </div>
  );
}

export default function HRACalculator() {
  const [basic, setBasic] = useState(50000);
  const [da, setDa] = useState(0);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(15000);
  const [isMetro, setIsMetro] = useState(true);
  const [mode, setMode] = useState('monthly'); // monthly | yearly
  const [showMetroList, setShowMetroList] = useState(false);

  const calc = useMemo(() => {
    // All values are monthly — if yearly mode, user enters yearly values already divided by 12 internally
    const multiplier = mode === 'yearly' ? 1 : 1;
    const m_basic = basic;
    const m_da = da;
    const m_hra = hraReceived;
    const m_rent = rentPaid;

    const salary = m_basic + m_da; // Basic + DA
    const metaPct = isMetro ? 0.5 : 0.4;

    // Three conditions (monthly)
    const c1 = m_hra;                                              // Actual HRA received
    const c2 = Math.max(0, m_rent - salary * 0.1);                // Rent paid - 10% of salary
    const c3 = salary * metaPct;                                   // 50%/40% of salary

    const monthlyExemption = Math.min(c1, c2, c3);
    const monthlyTaxable = Math.max(0, m_hra - monthlyExemption);

    const annualExemption = monthlyExemption * 12;
    const annualTaxable = monthlyTaxable * 12;
    const annualHRA = m_hra * 12;
    const annualSalary = salary * 12;
    const annualRent = m_rent * 12;

    // Ideal rent = amount where c2 equals c1 → rent - 10%salary = min(c1,c3)
    // To maximize: rent should be at least (exemption_target + 10%*salary)
    const maxExemption = Math.min(c1, c3);
    const idealMonthlyRent = maxExemption + salary * 0.1;

    // Tax saving estimate at 30% slab
    const taxSaving30 = annualExemption * 0.30;
    const taxSaving20 = annualExemption * 0.20;

    // Lowest condition index
    const conditions = [c1, c2, c3];
    const minVal = Math.min(...conditions);
    const lowestIdx = conditions.indexOf(minVal);

    const noExemptionWarning = m_rent < salary * 0.1;
    const noHRAWarning = m_hra === 0;

    return {
      salary, c1, c2, c3, lowestIdx, minVal,
      monthlyExemption, monthlyTaxable,
      annualExemption, annualTaxable, annualHRA, annualSalary, annualRent,
      idealMonthlyRent, taxSaving30, taxSaving20,
      noExemptionWarning, noHRAWarning,
      metaPct,
    };
  }, [basic, da, hraReceived, rentPaid, isMetro, mode]);

  const condLabels = [
    { label: 'Actual HRA received from employer', formula: 'HRA from salary slip' },
    { label: 'Rent paid minus 10% of Basic+DA', formula: `${formatINR(calc.c2 + calc.salary * 0.1)} − ${formatINR(calc.salary * 0.1)}` },
    { label: `${isMetro ? '50%' : '40%'} of Basic + DA (${isMetro ? 'Metro' : 'Non-Metro'})`, formula: `${formatINR(calc.salary)} × ${isMetro ? '50' : '40'}%` },
  ];

  return (
    <div className="space-y-5">
      {/* Mode toggle */}
      <div className="flex items-center gap-3 bg-white border border-surface-200 rounded-2xl p-4">
        <span className="text-sm font-semibold text-surface-700">Calculation Mode:</span>
        <div className="flex gap-2">
          {['monthly', 'yearly'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-4 py-1.5 text-sm font-bold rounded-xl border-2 capitalize transition-all ${mode === m ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'}`}>
              {m === 'monthly' ? '📅 Monthly' : '📆 Yearly'}
            </button>
          ))}
        </div>
        <span className="text-xs text-surface-400 ml-1">Enter {mode} figures below</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── INPUTS ── */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="bg-brand-600 px-5 py-4">
            <h2 className="font-bold text-white">🏠 Enter Your HRA Details</h2>
            <p className="text-brand-200 text-xs mt-0.5">{mode === 'monthly' ? 'Enter monthly amounts' : 'Enter annual amounts'}</p>
          </div>
          <div className="p-5 space-y-4">
            <NumInput label="Basic Salary" value={basic} onChange={setBasic}
              helper="Your basic salary component from your payslip (monthly)" />
            <NumInput label="Dearness Allowance (DA)" value={da} onChange={setDa}
              helper="Enter 0 if not applicable — most private sector employees have no DA" />
            <NumInput label="HRA Received from Employer" value={hraReceived} onChange={setHraReceived}
              helper="HRA component in your salary slip (monthly)" />
            <NumInput label="Rent Paid" value={rentPaid} onChange={setRentPaid}
              helper="Actual rent paid to your landlord (monthly)" />

            {/* City type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">City Type</label>
              <div className="flex gap-2">
                {[
                  { val: true,  label: '🏙️ Metro (50%)'     },
                  { val: false, label: '🌆 Non-Metro (40%)' },
                ].map(opt => (
                  <button key={String(opt.val)} onClick={() => setIsMetro(opt.val)}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-xl border-2 transition-all ${isMetro === opt.val ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowMetroList(p => !p)}
                className="text-xs text-brand-600 hover:text-brand-700 mt-1.5 flex items-center gap-1">
                {showMetroList ? '▲' : '▼'} Which cities are metro?
              </button>
              {showMetroList && (
                <div className="mt-2 p-3 bg-surface-50 border border-surface-200 rounded-xl text-xs">
                  <div className="font-bold text-surface-700 mb-1.5">Metro Cities (50% rule):</div>
                  <div className="grid grid-cols-2 gap-1">
                    {METRO_CITIES.map(c => (
                      <div key={c.name} className="flex items-center gap-1">
                        <span className={c.new ? 'text-brand-600' : 'text-surface-400'}>●</span>
                        <span className={c.new ? 'text-brand-700 font-semibold' : 'text-surface-600'}>{c.name}</span>
                        {c.new && <span className="text-[10px] bg-brand-100 text-brand-700 px-1 rounded font-bold">NEW</span>}
                      </div>
                    ))}
                  </div>
                  <p className="text-surface-400 mt-1.5">*Bengaluru, Pune, Hyderabad & Ahmedabad added from April 1, 2026</p>
                </div>
              )}
            </div>

            {/* Warnings */}
            {calc.noHRAWarning && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
                <span className="shrink-0">ℹ️</span>
                <span>HRA is ₹0. If HRA is not in your salary, consider claiming deduction under <strong>Section 80GG</strong> instead.</span>
              </div>
            )}
            {calc.noExemptionWarning && !calc.noHRAWarning && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
                <span className="shrink-0">⚠️</span>
                <span>Your rent (₹{rentPaid.toLocaleString('en-IN')}) is below <strong>10% of salary</strong> (₹{Math.round(calc.salary * 0.1).toLocaleString('en-IN')}). Condition 2 is ₹0 — no HRA exemption available.</span>
              </div>
            )}
          </div>
        </div>

        {/* ── RESULTS ── */}
        <div className="lg:col-span-3 space-y-4">

          {/* Section A — 3 Conditions */}
          <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
            <div className="bg-surface-50 border-b border-surface-100 px-5 py-3">
              <div className="font-bold text-surface-900 text-sm">📊 Section A — HRA Exemption: The 3 Conditions</div>
              <div className="text-xs text-surface-400 mt-0.5">HRA exemption = <strong>minimum</strong> of the three values below</div>
            </div>
            <div className="p-5 space-y-3">
              {[calc.c1, calc.c2, calc.c3].map((val, i) => {
                const isLowest = i === calc.lowestIdx;
                const isZero = val === 0;
                return (
                  <div key={i} className={`rounded-xl p-4 border-2 transition-all ${isLowest ? 'border-brand-400 bg-brand-50' : 'border-surface-100 bg-surface-50'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5 flex-1">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${isLowest ? 'bg-brand-600 text-white' : 'bg-surface-200 text-surface-600'}`}>
                          {i + 1}
                        </div>
                        <div>
                          <div className={`text-sm font-semibold mb-0.5 ${isLowest ? 'text-brand-900' : 'text-surface-800'}`}>
                            {condLabels[i].label}
                          </div>
                          <div className="text-xs text-surface-400 font-mono">{condLabels[i].formula}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className={`text-xl font-black ${isLowest ? 'text-brand-700' : isZero ? 'text-rose-500' : 'text-surface-700'}`}>
                          {formatINR(val)}
                        </div>
                        {isLowest && (
                          <div className="text-xs font-bold text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full mt-1">
                            ✓ LOWEST = EXEMPT
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section B — Summary table */}
          <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
            <div className="bg-surface-50 border-b border-surface-100 px-5 py-3">
              <div className="font-bold text-surface-900 text-sm">📋 Section B — Monthly & Annual Summary</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-2.5 font-bold text-surface-600">Item</th>
                    <th className="text-right px-4 py-2.5 font-bold text-surface-600">Monthly</th>
                    <th className="text-right px-4 py-2.5 font-bold text-surface-600">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label:'Basic + DA',            monthly: calc.salary,            annual: calc.annualSalary,    color:'' },
                    { label:'HRA Received',           monthly: hraReceived,            annual: calc.annualHRA,       color:'' },
                    { label:'Rent Paid',              monthly: rentPaid,               annual: calc.annualRent,      color:'' },
                    { label:'HRA Exempt (Tax-Free) ✅',monthly: calc.monthlyExemption, annual: calc.annualExemption, color:'emerald' },
                    { label:'HRA Taxable ⚠️',         monthly: calc.monthlyTaxable,    annual: calc.annualTaxable,   color:'rose' },
                  ].map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-medium ${r.color === 'emerald' ? 'text-emerald-700 font-bold' : r.color === 'rose' ? 'text-rose-700 font-bold' : 'text-surface-700'}`}>
                        {r.label}
                      </td>
                      <td className={`px-4 py-3 text-right font-mono font-bold ${r.color === 'emerald' ? 'text-emerald-700' : r.color === 'rose' ? 'text-rose-700' : 'text-surface-900'}`}>
                        {formatINR(r.monthly)}
                      </td>
                      <td className={`px-4 py-3 text-right font-mono font-bold ${r.color === 'emerald' ? 'text-emerald-700' : r.color === 'rose' ? 'text-rose-700' : 'text-surface-900'}`}>
                        {formatINR(r.annual)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section C — Tax saving */}
          <div className="bg-emerald-600 rounded-2xl p-5 text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-200 mb-3">💡 Section C — Estimated Tax Saving</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-xs text-emerald-200 mb-1">At 30% tax slab</div>
                <div className="text-2xl font-black text-white">{formatINR(calc.taxSaving30)}</div>
                <div className="text-xs text-emerald-300">per year</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-xs text-emerald-200 mb-1">At 20% tax slab</div>
                <div className="text-2xl font-black text-white">{formatINR(calc.taxSaving20)}</div>
                <div className="text-xs text-emerald-300">per year</div>
              </div>
            </div>
            <p className="text-xs text-emerald-200 leading-relaxed">
              By claiming HRA exemption of {formatINR(calc.annualExemption)}/year, you save approximately{' '}
              <strong className="text-white">{formatINR(calc.taxSaving30)}</strong> in taxes (at 30% slab) or{' '}
              <strong className="text-white">{formatINR(calc.taxSaving20)}</strong> (at 20% slab).
              Actual savings depend on your income tax slab. HRA exemption is only available under the <strong className="text-white">old tax regime</strong>.
            </p>
          </div>

          {/* Section D — Ideal Rent */}
          <div className="bg-white border-2 border-brand-200 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">🎯 Section D — Ideal Rent to Maximise Exemption</div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <div>
                <div className="text-3xl font-black text-brand-700">{formatINR(calc.idealMonthlyRent)}</div>
                <div className="text-xs text-surface-500 mt-0.5">per month (ideal rent)</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-surface-900">{formatINR(calc.idealMonthlyRent * 12)}</div>
                <div className="text-xs text-surface-500">per year</div>
              </div>
            </div>
            <p className="text-sm text-surface-600 leading-relaxed">
              To claim the maximum possible HRA exemption of {formatINR(Math.min(calc.c1, calc.c3))}/month, you need your rent to be at least{' '}
              <strong className="text-brand-700">{formatINR(calc.idealMonthlyRent)}/month</strong>.
              This ensures Condition 2 is not the limiting factor. If your rent is lower, your exemption is reduced.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}