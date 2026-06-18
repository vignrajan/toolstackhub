'use client';
import { useState, useMemo } from 'react';

// New regime slabs — Budget 2025, effective FY 2025-26 (AY 2026-27).
const NEW_SLABS = [
  { min: 0,       max: 400000,   rate: 0    },
  { min: 400000,  max: 800000,   rate: 0.05 },
  { min: 800000,  max: 1200000,  rate: 0.10 },
  { min: 1200000, max: 1600000,  rate: 0.15 },
  { min: 1600000, max: 2000000,  rate: 0.20 },
  { min: 2000000, max: 2400000,  rate: 0.25 },
  { min: 2400000, max: Infinity, rate: 0.30 },
];
const OLD_SLABS = [
  { min: 0,       max: 250000,  rate: 0    },
  { min: 250000,  max: 500000,  rate: 0.05 },
  { min: 500000,  max: 1000000, rate: 0.20 },
  { min: 1000000, max: Infinity, rate: 0.30 },
];

function calcTax(income, slabs) {
  let tax = 0;
  for (const s of slabs) {
    if (income <= s.min) break;
    tax += (Math.min(income, s.max) - s.min) * s.rate;
  }
  return tax;
}

function applyRebate87A(tax, taxableIncome, regime) {
  const limit = regime === 'new' ? 700000 : 500000;
  const maxRebate = regime === 'new' ? 25000 : 12500;
  if (taxableIncome <= limit) return 0;
  return tax;
}

function fmt(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

const TABS = ['Income', 'Deductions', 'Result'];

export default function Form16Calculator() {
  const [tab, setTab] = useState(0);

  // Income fields
  const [basicSalary,    setBasicSalary]    = useState(600000);
  const [hraReceived,    setHraReceived]    = useState(240000);
  const [da,             setDa]             = useState(0);
  const [lta,            setLta]            = useState(20000);
  const [specialAllow,   setSpecialAllow]   = useState(200000);
  const [otherIncome,    setOtherIncome]    = useState(0);
  const [bonus,          setBonus]          = useState(50000);

  // HRA exemption fields
  const [rentPaid,       setRentPaid]       = useState(180000);
  const [isMetro,        setIsMetro]        = useState(true);

  // Deduction fields
  const [d80C,           setD80C]           = useState(150000);
  const [d80D,           setD80D]           = useState(25000);
  const [dNPS,           setDNPS]           = useState(50000);
  const [d80E,           setD80E]           = useState(0);
  const [d80G,           setD80G]           = useState(0);
  const [profTax,        setProfTax]        = useState(2400);
  const [tdsDeducted,    setTdsDeducted]    = useState(0);

  const result = useMemo(() => {
    const gross = basicSalary + hraReceived + da + lta + specialAllow + bonus + otherIncome;

    // HRA exemption (Section 10(13A)) — only old regime
    const hraExempt = Math.min(
      hraReceived,
      rentPaid - 0.1 * basicSalary,
      isMetro ? 0.5 * basicSalary : 0.4 * basicSalary
    );
    const hraExemptClamped = Math.max(0, hraExempt);

    // LTA exemption — capped at actual LTA received (simplified)
    const ltaExempt = lta;

    // Net salary after Section 10 exemptions (old)
    const netOld = gross - hraExemptClamped - ltaExempt;
    // Standard deduction old: ₹50,000
    const taxableOld = Math.max(0,
      netOld
      - 50000               // standard deduction
      - Math.min(d80C, 150000)
      - Math.min(dNPS, 50000)
      - Math.min(d80D, 25000)
      - d80E
      - d80G
      - profTax
    );
    let taxOld = calcTax(taxableOld, OLD_SLABS);
    taxOld = applyRebate87A(taxOld, taxableOld, 'old');
    const cessOld = taxOld * 0.04;
    const totalTaxOld = taxOld + cessOld;

    // New regime (FY 2025-26): no HRA/LTA exemption, standard deduction
    // ₹75,000, full 87A rebate up to ₹12L taxable, marginal relief just
    // above ₹12L. (Professional tax is not deductible under the new regime.)
    const netNew = gross;
    const taxableNew = Math.max(0, netNew - 75000);
    let taxNew = taxableNew <= 1200000 ? 0 : calcTax(taxableNew, NEW_SLABS);
    if (taxableNew > 1200000) {
      const excess = taxableNew - 1200000;       // marginal relief
      if (taxNew > excess) taxNew = excess;
    }
    const cessNew = taxNew * 0.04;
    const totalTaxNew = taxNew + cessNew;

    const betterRegime = totalTaxNew <= totalTaxOld ? 'new' : 'old';
    const saving = Math.abs(totalTaxOld - totalTaxNew);

    const monthly = (v) => Math.round(v / 12);

    return {
      gross, hraExemptClamped, ltaExempt,
      netOld, taxableOld, taxOld, cessOld, totalTaxOld,
      netNew, taxableNew, taxNew, cessNew, totalTaxNew,
      betterRegime, saving,
      monthlyTDSOld: monthly(totalTaxOld),
      monthlyTDSNew: monthly(totalTaxNew),
    };
  }, [basicSalary, hraReceived, da, lta, specialAllow, otherIncome, bonus,
      rentPaid, isMetro, d80C, d80D, dNPS, d80E, d80G, profTax]);

  const inp = (label, value, setter, hint = '') => (
    <div>
      <label className="block text-sm font-medium text-surface-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-surface-400 mb-1">{hint}</p>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 text-sm">₹</span>
        <input
          type="number"
          value={value}
          onChange={e => setter(Number(e.target.value) || 0)}
          className="input-field pl-7 text-sm"
        />
      </div>
    </div>
  );

  const Row = ({ label, value, sub, bold, green, red, indent }) => (
    <div className={`flex justify-between py-2 border-b border-surface-100 ${indent ? 'pl-4' : ''}`}>
      <span className={`text-sm ${bold ? 'font-semibold text-surface-900' : sub ? 'text-surface-400' : 'text-surface-600'}`}>{label}</span>
      <span className={`text-sm font-mono ${bold ? 'font-bold text-surface-900' : green ? 'text-emerald-600' : red ? 'text-red-600' : 'text-surface-700'}`}>{value}</span>
    </div>
  );

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-surface-200 bg-surface-50">
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${tab === i ? 'bg-white border-b-2 border-brand-600 text-brand-700' : 'text-surface-500 hover:text-surface-700'}`}
          >
            {i < tab ? '✓ ' : ''}{t}
          </button>
        ))}
      </div>

      <div className="p-5">
        {/* Tab 0: Income */}
        {tab === 0 && (
          <div className="space-y-5">
            <p className="text-xs text-surface-400 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
              Enter annual figures from your Form 16 Part B (salary for full FY 2025‑26 / AY 2026‑27).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inp('Basic Salary (Annual)', basicSalary, setBasicSalary)}
              {inp('HRA Received (Annual)', hraReceived, setHraReceived)}
              {inp('Dearness Allowance (DA)', da, setDa)}
              {inp('LTA Received', lta, setLta, 'Leave Travel Allowance')}
              {inp('Special / Other Allowances', specialAllow, setSpecialAllow)}
              {inp('Bonus / Performance Pay', bonus, setBonus)}
              {inp('Other Income (FD interest, etc.)', otherIncome, setOtherIncome)}
            </div>

            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 space-y-3">
              <p className="text-sm font-semibold text-surface-700">HRA Exemption Inputs</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inp('Rent Paid (Annual)', rentPaid, setRentPaid)}
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1">City Type</label>
                  <div className="flex gap-2">
                    {[['Metro', true], ['Non-Metro', false]].map(([label, val]) => (
                      <button
                        key={label}
                        onClick={() => setIsMetro(val)}
                        className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${isMetro === val ? 'bg-brand-100 border-brand-400 text-brand-700 font-semibold' : 'bg-white border-surface-200 text-surface-600'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-surface-400 mt-1">Metro: Delhi, Mumbai, Chennai, Kolkata</p>
                </div>
              </div>
            </div>
            <button onClick={() => setTab(1)} className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">
              Next: Deductions →
            </button>
          </div>
        )}

        {/* Tab 1: Deductions */}
        {tab === 1 && (
          <div className="space-y-5">
            <p className="text-xs text-surface-400 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
              Chapter VI-A deductions apply only under the Old Tax Regime. Under New Regime, only standard deduction is allowed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inp('Section 80C (max ₹1,50,000)', d80C, setD80C, 'PF + PPF + LIC + ELSS + Home loan principal')}
              {inp('Section 80D (max ₹25,000)', d80D, setD80D, 'Health insurance premium')}
              {inp('NPS 80CCD(1B) (max ₹50,000)', dNPS, setDNPS, 'NPS Tier-I contributions')}
              {inp('Section 80E (education loan interest)', d80E, setD80E)}
              {inp('Section 80G (donations)', d80G, setD80G)}
              {inp('Professional Tax Paid', profTax, setProfTax, 'Enter 0 if not applicable')}
              {inp('TDS Already Deducted (till date)', tdsDeducted, setTdsDeducted, 'Optional — for final tax payable calc')}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setTab(0)} className="flex-1 py-2.5 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">
                ← Back
              </button>
              <button onClick={() => setTab(2)} className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">
                Calculate →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Result */}
        {tab === 2 && (
          <div className="space-y-6">
            {/* Recommendation banner */}
            <div className={`rounded-xl p-4 border ${result.betterRegime === 'new' ? 'bg-emerald-50 border-emerald-200' : 'bg-blue-50 border-blue-200'}`}>
              <p className={`text-base font-bold ${result.betterRegime === 'new' ? 'text-emerald-800' : 'text-blue-800'}`}>
                {result.betterRegime === 'new' ? '✅ New Tax Regime is better' : '✅ Old Tax Regime is better'}
              </p>
              <p className={`text-sm mt-1 ${result.betterRegime === 'new' ? 'text-emerald-700' : 'text-blue-700'}`}>
                You save {fmt(result.saving)} by choosing the {result.betterRegime} regime.
              </p>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'New Regime (FY 2025-26)', tax: result.totalTaxNew, taxable: result.taxableNew, tds: result.monthlyTDSNew, regime: 'new' },
                { label: 'Old Regime (FY 2025-26)', tax: result.totalTaxOld, taxable: result.taxableOld, tds: result.monthlyTDSOld, regime: 'old' },
              ].map(r => (
                <div key={r.regime} className={`border rounded-xl p-4 ${r.regime === result.betterRegime ? 'border-emerald-300 bg-emerald-50' : 'border-surface-200 bg-surface-50'}`}>
                  <p className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-3">{r.label}</p>
                  <p className="text-2xl font-bold text-surface-900">{fmt(r.tax)}</p>
                  <p className="text-xs text-surface-500 mt-0.5">Total tax + cess</p>
                  <div className="mt-3 pt-3 border-t border-surface-200 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-surface-500">Taxable income</span>
                      <span className="font-mono text-surface-700">{fmt(r.taxable)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-surface-500">Monthly TDS</span>
                      <span className="font-mono text-surface-700">{fmt(r.tds)}</span>
                    </div>
                  </div>
                  {r.regime === result.betterRegime && (
                    <span className="mt-3 inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Recommended</span>
                  )}
                </div>
              ))}
            </div>

            {/* Old Regime Breakdown */}
            <details className="bg-surface-50 border border-surface-200 rounded-xl" open>
              <summary className="px-4 py-3 text-sm font-semibold text-surface-700 cursor-pointer">Old Regime — Detailed Computation</summary>
              <div className="px-4 pb-4">
                <Row label="Gross Salary"                    value={fmt(result.gross)}            bold />
                <Row label="Less: HRA Exemption (Sec 10)"   value={`(${fmt(result.hraExemptClamped)})`} red indent />
                <Row label="Less: LTA Exemption (Sec 10)"   value={`(${fmt(result.ltaExempt)})`}    red indent />
                <Row label="Net Salary"                     value={fmt(result.netOld)}            bold />
                <Row label="Less: Standard Deduction"       value="(₹50,000)"                    red indent />
                <Row label="Less: 80C"                      value={`(${fmt(Math.min(d80C,150000))})`} red indent />
                <Row label="Less: NPS 80CCD(1B)"            value={`(${fmt(Math.min(dNPS,50000))})`}  red indent />
                <Row label="Less: 80D"                      value={`(${fmt(Math.min(d80D,25000))})`}  red indent />
                <Row label="Less: 80E + 80G"                value={`(${fmt(d80E+d80G)})`}          red indent />
                <Row label="Less: Professional Tax"         value={`(${fmt(profTax)})`}           red indent />
                <Row label="Taxable Income"                 value={fmt(result.taxableOld)}        bold />
                <Row label="Income Tax"                     value={fmt(result.taxOld)}            />
                <Row label="Health & Education Cess (4%)"   value={fmt(result.cessOld)}           />
                <Row label="Total Tax Payable"              value={fmt(result.totalTaxOld)}       bold />
                {tdsDeducted > 0 && (
                  <>
                    <Row label="Less: TDS Deducted"         value={`(${fmt(tdsDeducted)})`}       red />
                    <Row label="Net Tax Payable / (Refund)"
                         value={result.totalTaxOld - tdsDeducted >= 0 ? fmt(result.totalTaxOld - tdsDeducted) : `(${fmt(Math.abs(result.totalTaxOld - tdsDeducted))})`}
                         bold green={result.totalTaxOld - tdsDeducted < 0} red={result.totalTaxOld - tdsDeducted > 0} />
                  </>
                )}
              </div>
            </details>

            {/* New Regime Breakdown */}
            <details className="bg-surface-50 border border-surface-200 rounded-xl">
              <summary className="px-4 py-3 text-sm font-semibold text-surface-700 cursor-pointer">New Regime — Detailed Computation</summary>
              <div className="px-4 pb-4">
                <Row label="Gross Salary"                   value={fmt(result.gross)}            bold />
                <Row label="Less: Standard Deduction"       value="(₹75,000)"                   red indent />
                <Row label="Taxable Income"                 value={fmt(result.taxableNew)}       bold />
                {result.taxableNew <= 1200000 && (
                  <Row label="Rebate u/s 87A"               value="Full rebate — Zero tax"       green />
                )}
                <Row label="Income Tax"                     value={fmt(result.taxNew)}           />
                <Row label="Health & Education Cess (4%)"   value={fmt(result.cessNew)}          />
                <Row label="Total Tax Payable"              value={fmt(result.totalTaxNew)}      bold />
                {tdsDeducted > 0 && (
                  <>
                    <Row label="Less: TDS Deducted"         value={`(${fmt(tdsDeducted)})`}      red />
                    <Row label="Net Tax Payable / (Refund)"
                         value={result.totalTaxNew - tdsDeducted >= 0 ? fmt(result.totalTaxNew - tdsDeducted) : `(${fmt(Math.abs(result.totalTaxNew - tdsDeducted))})`}
                         bold green={result.totalTaxNew - tdsDeducted < 0} red={result.totalTaxNew - tdsDeducted > 0} />
                  </>
                )}
              </div>
            </details>

            <button onClick={() => setTab(0)} className="w-full py-2 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">
              ← Edit Inputs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
