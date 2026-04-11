'use client';
import { useState, useMemo } from 'react';

// ── PT SLAB DATA ─────────────────────────────────────────────
const PT_DATA = {
  'Karnataka': {
    note: 'February month: ₹300 (makes annual total ₹2,500)',
    specialMonth: { month: 'February', amount: 300 },
    gender: false,
    slabs: [
      { min: 0,      max: 15000,   pt: 0,   label: '₹0 – ₹15,000' },
      { min: 15001,  max: Infinity, pt: 200, label: '₹15,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 15000) return { monthly: 0, annual: 0, feb: 0 };
      return { monthly: 200, annual: 2500, feb: 300 };
    },
  },
  'Maharashtra': {
    note: 'Women earning up to ₹25,000 are exempt. February: ₹300 for men above ₹10,000.',
    specialMonth: { month: 'February', amount: 300 },
    gender: true,
    slabs: [
      { min: 0,      max: 7500,    pt: 0,   label: '₹0 – ₹7,500' },
      { min: 7501,   max: 10000,   pt: 175, label: '₹7,501 – ₹10,000' },
      { min: 10001,  max: 25000,   pt: 200, label: '₹10,001 – ₹25,000 (Men: ₹200 | Women: ₹0)' },
      { min: 25001,  max: Infinity, pt: 200, label: '₹25,001 & above (₹200/month)' },
    ],
    calculate: (salary, gender) => {
      if (salary <= 7500) return { monthly: 0, annual: 0, feb: 0 };
      if (salary <= 10000) return { monthly: 175, annual: 2100, feb: 175 };
      if (salary <= 25000 && gender === 'female') return { monthly: 0, annual: 0, feb: 0 };
      return { monthly: 200, annual: 2500, feb: 300 };
    },
  },
  'West Bengal': {
    note: 'Slabs are based on monthly gross salary.',
    gender: false,
    slabs: [
      { min: 0,      max: 10000,   pt: 0,   label: '₹0 – ₹10,000' },
      { min: 10001,  max: 15000,   pt: 110, label: '₹10,001 – ₹15,000' },
      { min: 15001,  max: 25000,   pt: 130, label: '₹15,001 – ₹25,000' },
      { min: 25001,  max: 40000,   pt: 150, label: '₹25,001 – ₹40,000' },
      { min: 40001,  max: Infinity, pt: 200, label: '₹40,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 10000) return { monthly: 0, annual: 0 };
      if (salary <= 15000) return { monthly: 110, annual: 1320 };
      if (salary <= 25000) return { monthly: 130, annual: 1560 };
      if (salary <= 40000) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Andhra Pradesh': {
    note: 'PT is deducted monthly based on gross salary.',
    gender: false,
    slabs: [
      { min: 0,      max: 15000,   pt: 0,   label: '₹0 – ₹15,000' },
      { min: 15001,  max: 20000,   pt: 150, label: '₹15,001 – ₹20,000' },
      { min: 20001,  max: Infinity, pt: 200, label: '₹20,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 15000) return { monthly: 0, annual: 0 };
      if (salary <= 20000) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Telangana': {
    note: 'Slabs are identical to Andhra Pradesh.',
    gender: false,
    slabs: [
      { min: 0,      max: 15000,   pt: 0,   label: '₹0 – ₹15,000' },
      { min: 15001,  max: 20000,   pt: 150, label: '₹15,001 – ₹20,000' },
      { min: 20001,  max: Infinity, pt: 200, label: '₹20,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 15000) return { monthly: 0, annual: 0 };
      if (salary <= 20000) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Tamil Nadu': {
    note: 'Tamil Nadu collects PT half-yearly. Monthly equivalent shown.',
    gender: false,
    slabs: [
      { min: 0,      max: 21000,   pt: 0,    label: '₹0 – ₹21,000' },
      { min: 21001,  max: 30000,   pt: 135,  label: '₹21,001 – ₹30,000' },
      { min: 30001,  max: 45000,   pt: 315,  label: '₹30,001 – ₹45,000' },
      { min: 45001,  max: 60000,   pt: 690,  label: '₹45,001 – ₹60,000' },
      { min: 60001,  max: 75000,   pt: 1025, label: '₹60,001 – ₹75,000' },
      { min: 75001,  max: Infinity, pt: 1250, label: '₹75,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 21000) return { monthly: 0, annual: 0 };
      if (salary <= 30000) return { monthly: 135, annual: 1620 };
      if (salary <= 45000) return { monthly: 315, annual: 3780 };
      if (salary <= 60000) return { monthly: 690, annual: 8280 };
      if (salary <= 75000) return { monthly: 1025, annual: 12300 };
      return { monthly: 1250, annual: 15000 };
    },
  },
  'Kerala': {
    note: 'PT deducted monthly from gross salary.',
    gender: false,
    slabs: [
      { min: 0,      max: 11999,   pt: 0,   label: '₹0 – ₹11,999' },
      { min: 12000,  max: 17999,   pt: 120, label: '₹12,000 – ₹17,999' },
      { min: 18000,  max: 24999,   pt: 180, label: '₹18,000 – ₹24,999' },
      { min: 25000,  max: 29999,   pt: 200, label: '₹25,000 – ₹29,999' },
      { min: 30000,  max: Infinity, pt: 208, label: '₹30,000 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 11999) return { monthly: 0, annual: 0 };
      if (salary <= 17999) return { monthly: 120, annual: 1440 };
      if (salary <= 24999) return { monthly: 180, annual: 2160 };
      if (salary <= 29999) return { monthly: 200, annual: 2400 };
      return { monthly: 208, annual: 2496 };
    },
  },
  'Gujarat': {
    note: 'PT deducted monthly. Maximum PT is ₹200/month.',
    gender: false,
    slabs: [
      { min: 0,      max: 5999,    pt: 0,   label: '₹0 – ₹5,999' },
      { min: 6000,   max: 8999,    pt: 80,  label: '₹6,000 – ₹8,999' },
      { min: 9000,   max: 11999,   pt: 150, label: '₹9,000 – ₹11,999' },
      { min: 12000,  max: Infinity, pt: 200, label: '₹12,000 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 5999) return { monthly: 0, annual: 0 };
      if (salary <= 8999) return { monthly: 80, annual: 960 };
      if (salary <= 11999) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Madhya Pradesh': {
    note: 'Annual PT maximum is ₹2,500.',
    gender: false,
    slabs: [
      { min: 0,      max: 18750,   pt: 0,   label: '₹0 – ₹18,750' },
      { min: 18751,  max: 25000,   pt: 125, label: '₹18,751 – ₹25,000' },
      { min: 25001,  max: Infinity, pt: 208, label: '₹25,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 18750) return { monthly: 0, annual: 0 };
      if (salary <= 25000) return { monthly: 125, annual: 1500 };
      return { monthly: 208, annual: 2500 };
    },
  },
  'Odisha': {
    note: 'PT deducted monthly based on gross salary.',
    gender: false,
    slabs: [
      { min: 0,      max: 13304,   pt: 0,   label: '₹0 – ₹13,304' },
      { min: 13305,  max: 25000,   pt: 125, label: '₹13,305 – ₹25,000' },
      { min: 25001,  max: Infinity, pt: 200, label: '₹25,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 13304) return { monthly: 0, annual: 0 };
      if (salary <= 25000) return { monthly: 125, annual: 1500 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Assam': {
    note: 'PT rates are uniform across employment categories.',
    gender: false,
    slabs: [
      { min: 0,      max: 10000,   pt: 0,   label: '₹0 – ₹10,000' },
      { min: 10001,  max: 15000,   pt: 150, label: '₹10,001 – ₹15,000' },
      { min: 15001,  max: 25000,   pt: 180, label: '₹15,001 – ₹25,000' },
      { min: 25001,  max: Infinity, pt: 208, label: '₹25,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 10000) return { monthly: 0, annual: 0 };
      if (salary <= 15000) return { monthly: 150, annual: 1800 };
      if (salary <= 25000) return { monthly: 180, annual: 2160 };
      return { monthly: 208, annual: 2500 };
    },
  },
  'Bihar': {
    note: 'Bihar PT is calculated on annual income converted to monthly.',
    gender: false,
    slabs: [
      { min: 0,      max: 25000,   pt: 0,   label: '₹0 – ₹25,000' },
      { min: 25001,  max: 41666,   pt: 83,  label: '₹25,001 – ₹41,666' },
      { min: 41667,  max: 83333,   pt: 167, label: '₹41,667 – ₹83,333' },
      { min: 83334,  max: Infinity, pt: 208, label: '₹83,334 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 25000) return { monthly: 0, annual: 0 };
      if (salary <= 41666) return { monthly: 83, annual: 1000 };
      if (salary <= 83333) return { monthly: 167, annual: 2000 };
      return { monthly: 208, annual: 2500 };
    },
  },
  'Jharkhand': {
    note: 'Jharkhand follows a similar slab structure to Bihar.',
    gender: false,
    slabs: [
      { min: 0,      max: 25000,   pt: 0,   label: '₹0 – ₹25,000' },
      { min: 25001,  max: 41666,   pt: 100, label: '₹25,001 – ₹41,666' },
      { min: 41667,  max: 66666,   pt: 150, label: '₹41,667 – ₹66,666' },
      { min: 66667,  max: Infinity, pt: 200, label: '₹66,667 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 25000) return { monthly: 0, annual: 0 };
      if (salary <= 41666) return { monthly: 100, annual: 1200 };
      if (salary <= 66666) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Chhattisgarh': {
    note: 'Annual PT cap is ₹2,500.',
    gender: false,
    slabs: [
      { min: 0,      max: 12500,   pt: 0,   label: '₹0 – ₹12,500' },
      { min: 12501,  max: 16666,   pt: 125, label: '₹12,501 – ₹16,666' },
      { min: 16667,  max: Infinity, pt: 208, label: '₹16,667 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 12500) return { monthly: 0, annual: 0 };
      if (salary <= 16666) return { monthly: 125, annual: 1500 };
      return { monthly: 208, annual: 2500 };
    },
  },
  'Meghalaya': {
    note: 'PT levied under Meghalaya Professions, Trades, Callings and Employments Taxation Act.',
    gender: false,
    slabs: [
      { min: 0,      max: 16666,   pt: 0,   label: '₹0 – ₹16,666' },
      { min: 16667,  max: 25000,   pt: 125, label: '₹16,667 – ₹25,000' },
      { min: 25001,  max: Infinity, pt: 208, label: '₹25,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 16666) return { monthly: 0, annual: 0 };
      if (salary <= 25000) return { monthly: 125, annual: 1500 };
      return { monthly: 208, annual: 2500 };
    },
  },
  'Tripura': {
    note: 'PT is deducted from all salaried employees.',
    gender: false,
    slabs: [
      { min: 0,      max: 7500,    pt: 0,   label: '₹0 – ₹7,500' },
      { min: 7501,   max: 15000,   pt: 100, label: '₹7,501 – ₹15,000' },
      { min: 15001,  max: Infinity, pt: 150, label: '₹15,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 7500) return { monthly: 0, annual: 0 };
      if (salary <= 15000) return { monthly: 100, annual: 1200 };
      return { monthly: 150, annual: 1800 };
    },
  },
  'Sikkim': {
    note: 'PT is applicable to salaried individuals in Sikkim.',
    gender: false,
    slabs: [
      { min: 0,      max: 20000,   pt: 0,   label: '₹0 – ₹20,000' },
      { min: 20001,  max: 30000,   pt: 125, label: '₹20,001 – ₹30,000' },
      { min: 30001,  max: Infinity, pt: 200, label: '₹30,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 20000) return { monthly: 0, annual: 0 };
      if (salary <= 30000) return { monthly: 125, annual: 1500 };
      return { monthly: 200, annual: 2400 };
    },
  },
  'Puducherry': {
    note: 'Puducherry (Union Territory) levies PT at rates similar to Tamil Nadu.',
    gender: false,
    slabs: [
      { min: 0,      max: 15000,   pt: 0,   label: '₹0 – ₹15,000' },
      { min: 15001,  max: 25000,   pt: 150, label: '₹15,001 – ₹25,000' },
      { min: 25001,  max: Infinity, pt: 200, label: '₹25,001 & above' },
    ],
    calculate: (salary) => {
      if (salary <= 15000) return { monthly: 0, annual: 0 };
      if (salary <= 25000) return { monthly: 150, annual: 1800 };
      return { monthly: 200, annual: 2400 };
    },
  },
};

const STATES = Object.keys(PT_DATA).sort();

function fmtINR(n) {
  if (n === 0) return '₹0';
  return '₹' + Number(n).toLocaleString('en-IN');
}

function getActiveSlab(stateData, salary, gender) {
  for (let i = stateData.slabs.length - 1; i >= 0; i--) {
    const s = stateData.slabs[i];
    if (salary >= s.min) return i;
  }
  return 0;
}

export default function ProfessionalTaxCalculator() {
  const [state, setState] = useState('Karnataka');
  const [salaryRaw, setSalaryRaw] = useState('50000');
  const [gender, setGender] = useState('male');

  const salary = useMemo(() => {
    const n = parseInt(salaryRaw.replace(/,/g, ''), 10);
    return isNaN(n) || n < 0 ? 0 : Math.min(n, 100000000);
  }, [salaryRaw]);

  const stateData = PT_DATA[state];

  const result = useMemo(() => {
    return stateData.calculate(salary, gender);
  }, [stateData, salary, gender]);

  const activeSlabIdx = useMemo(() => {
    return getActiveSlab(stateData, salary, gender);
  }, [stateData, salary, gender]);

  const handleSalaryChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setSalaryRaw(raw);
  };

  const displaySalary = salary > 0
    ? Number(salary).toLocaleString('en-IN')
    : '';

  const afterPT = salary - result.monthly;
  const effectivePct = salary > 0 ? ((result.monthly / salary) * 100).toFixed(2) : '0.00';

  return (
    <div className="space-y-6">
      {/* Main calculator card */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-brand-600 px-6 py-5">
          <h2 className="font-display font-bold text-xl text-white">Professional Tax Calculator</h2>
          <p className="text-brand-200 text-sm mt-1">Select your state and enter your gross monthly salary</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {/* State selector */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                State / UT ⚖️
              </label>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 bg-white text-surface-900 font-medium"
              >
                {STATES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Salary input */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                Monthly Gross Salary 💰
              </label>
              <div className="flex items-center border border-surface-200 rounded-xl focus-within:border-brand-400 overflow-hidden bg-white">
                <span className="px-3 text-surface-500 font-bold text-sm border-r border-surface-200 py-3 bg-surface-50">₹</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={displaySalary}
                  onChange={handleSalaryChange}
                  placeholder="50,000"
                  className="flex-1 px-3 py-3 text-sm font-semibold text-surface-900 focus:outline-none bg-white"
                />
              </div>
            </div>

            {/* Gender toggle — only shown for Maharashtra */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                Gender {stateData.gender ? '(affects Maharashtra PT)' : '(not applicable here)'}
              </label>
              <div className="flex gap-2">
                {['male', 'female'].map(g => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    disabled={!stateData.gender}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl border-2 transition-all capitalize ${
                      gender === g && stateData.gender
                        ? 'bg-brand-600 text-white border-brand-600'
                        : stateData.gender
                        ? 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'
                        : 'bg-surface-50 text-surface-300 border-surface-100 cursor-not-allowed'
                    }`}
                  >
                    {g === 'male' ? '👨 Male' : '👩 Female'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* State note */}
          {stateData.note && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800 mb-5 flex items-start gap-2">
              <span className="shrink-0">📌</span>
              <span>{stateData.note}</span>
            </div>
          )}

          {/* Results grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              {
                label: 'Monthly PT',
                value: fmtINR(result.monthly),
                sub: result.feb ? `Feb: ${fmtINR(result.feb)}` : null,
                highlight: true,
                color: result.monthly > 0 ? 'brand' : 'emerald',
              },
              {
                label: 'Annual PT',
                value: fmtINR(result.annual),
                sub: 'FY 2026-27',
                highlight: false,
                color: 'surface',
              },
              {
                label: 'Take-Home After PT',
                value: fmtINR(afterPT),
                sub: 'per month',
                highlight: false,
                color: 'surface',
              },
              {
                label: 'PT as % of Salary',
                value: `${effectivePct}%`,
                sub: 'effective rate',
                highlight: false,
                color: 'surface',
              },
            ].map(card => (
              <div key={card.label}
                className={`rounded-2xl p-4 text-center ${
                  card.highlight
                    ? card.color === 'brand'
                      ? 'bg-brand-600 text-white'
                      : 'bg-emerald-600 text-white'
                    : 'bg-surface-50 border border-surface-200'
                }`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${card.highlight ? 'text-white/70' : 'text-surface-500'}`}>
                  {card.label}
                </div>
                <div className={`text-2xl font-black ${card.highlight ? 'text-white' : 'text-surface-900'}`}>
                  {card.value}
                </div>
                {card.sub && (
                  <div className={`text-xs mt-0.5 ${card.highlight ? 'text-white/60' : 'text-surface-400'}`}>
                    {card.sub}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slab table */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-3">
              📊 {state} PT Slabs — Your Active Slab Highlighted
            </div>
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900">
                    <th style={{color:'#ffffff'}} className="text-left px-4 py-3 font-semibold rounded-tl-xl">Monthly Salary Range</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold">Monthly PT</th>
                    <th style={{color:'#ffffff'}} className="text-right px-4 py-3 font-semibold rounded-tr-xl">Annual PT</th>
                  </tr>
                </thead>
                <tbody>
                  {stateData.slabs.map((slab, i) => {
                    const isActive = i === activeSlabIdx && salary > 0;
                    const slabResult = stateData.calculate(
                      slab.min === 0 ? 0 : slab.min,
                      gender
                    );
                    return (
                      <tr key={i}
                        className={`border-t border-surface-100 ${isActive ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}`}>
                        <td className={`px-4 py-3 ${isActive ? 'font-bold text-brand-800' : 'text-surface-700'}`}>
                          {isActive && <span className="mr-2 text-brand-600">►</span>}
                          {slab.label}
                        </td>
                        <td className={`px-4 py-3 text-right font-mono ${isActive ? 'font-black text-brand-700' : 'text-surface-700'}`}>
                          {slab.pt === 0 ? 'Nil' : `₹${slab.pt}/mo`}
                        </td>
                        <td className={`px-4 py-3 text-right font-mono ${isActive ? 'font-black text-brand-700' : 'text-surface-700'}`}>
                          {slabResult.annual === 0 ? 'Nil' : fmtINR(slabResult.annual)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* PT Calculation Breakdown */}
      {salary > 0 && (
        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-4">🧮 Calculation Breakdown</div>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between text-surface-700">
              <span>Monthly Gross Salary</span>
              <span className="font-bold text-surface-900">{fmtINR(salary)}</span>
            </div>
            <div className="flex justify-between text-surface-700">
              <span>Applicable Slab</span>
              <span className="font-semibold text-brand-700">{stateData.slabs[activeSlabIdx]?.label}</span>
            </div>
            <div className="flex justify-between text-rose-700 border-t border-surface-200 pt-2 mt-2">
              <span>Professional Tax Deduction</span>
              <span className="font-bold">− {fmtINR(result.monthly)}</span>
            </div>
            <div className="flex justify-between text-emerald-700 border-t-2 border-surface-300 pt-2 font-bold text-base">
              <span>Monthly Take-Home (After PT)</span>
              <span>{fmtINR(afterPT)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}