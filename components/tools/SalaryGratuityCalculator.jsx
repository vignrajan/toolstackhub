'use client';
import { useState, useCallback } from 'react';

// ── Constants ─────────────────────────────────────────────────
const NEW_REGIME_SLABS = [
  { min: 0,       max: 300000,  rate: 0   },
  { min: 300000,  max: 700000,  rate: 0.05 },
  { min: 700000,  max: 1000000, rate: 0.10 },
  { min: 1000000, max: 1200000, rate: 0.15 },
  { min: 1200000, max: 1500000, rate: 0.20 },
  { min: 1500000, max: Infinity,rate: 0.30 },
];
const OLD_REGIME_SLABS = [
  { min: 0,       max: 250000,  rate: 0    },
  { min: 250000,  max: 500000,  rate: 0.05 },
  { min: 500000,  max: 1000000, rate: 0.20 },
  { min: 1000000, max: Infinity,rate: 0.30 },
];
const STATES_PT = {
  'Maharashtra': 2400, 'Karnataka': 2400, 'Tamil Nadu': 2496,
  'West Bengal': 2400, 'Andhra Pradesh': 2400, 'Telangana': 2400,
  'Gujarat': 2400, 'Kerala': 2400, 'Madhya Pradesh': 2400,
  'Delhi': 0, 'Haryana': 0, 'Rajasthan': 0, 'Uttar Pradesh': 0,
  'Punjab': 0, 'Bihar': 0, 'Other': 0,
};

function fmt(n, symbol = '₹') {
  return `${symbol}${Math.round(n).toLocaleString('en-IN')}`;
}
function calcTax(income, slabs) {
  let tax = 0;
  for (const slab of slabs) {
    if (income <= slab.min) break;
    const taxable = Math.min(income, slab.max) - slab.min;
    tax += taxable * slab.rate;
  }
  return tax;
}

// ── Salary Calculator ─────────────────────────────────────────
function SalaryCalc() {
  const [inputs, setInputs] = useState({
    ctcMode: 'annual', ctc: 1200000,
    basicPct: 40, hraPct: 50,
    da: 0, bonus: 0, otherAllowances: 0,
    regime: 'new', state: 'Maharashtra',
    extraDeductions: 0, deduction80C: 150000,
    rent: 0, homeLoan: 0,
  });
  const set = (k, v) => setInputs(p => ({ ...p, [k]: v }));

  const calc = useCallback(() => {
    const ctcAnnual = inputs.ctcMode === 'monthly' ? inputs.ctc * 12 : inputs.ctc;

    // Salary structure
    const employerPF_rate = 0.12;
    const gratuityProvision = 0.0481;
    const basic = (ctcAnnual * inputs.basicPct / 100);
    const employerPF = basic * employerPF_rate;
    const gratuityProv = basic * gratuityProvision;
    const hra = basic * inputs.hraPct / 100;
    const da = Number(inputs.da) * 12;
    const bonus = Number(inputs.bonus) * 12;
    const other = Number(inputs.otherAllowances) * 12;
    const grossAnnual = ctcAnnual - employerPF - gratuityProv;
    const specialAllowance = Math.max(0, grossAnnual - basic - hra - da - bonus - other);

    // Deductions
    const employeePF = basic * 0.12;
    const professionalTax = STATES_PT[inputs.state] || 0;

    // Tax calculation
    const stdDeduction = 75000;
    let taxableIncome;
    let tax;
    if (inputs.regime === 'new') {
      taxableIncome = Math.max(0, grossAnnual - stdDeduction - employeePF);
      tax = taxableIncome <= 700000 ? 0 : calcTax(taxableIncome, NEW_REGIME_SLABS);
    } else {
      const deduction80C = Math.min(Number(inputs.deduction80C), 150000);
      // HRA exemption basic logic
      const rentPaid = Number(inputs.rent) * 12;
      const isMetro = ['Maharashtra', 'Delhi', 'West Bengal', 'Tamil Nadu', 'Karnataka'].includes(inputs.state);
      const hraExempt = Math.min(hra, isMetro ? basic * 0.5 : basic * 0.4, Math.max(0, rentPaid - basic * 0.1));
      const homeLoanInt = Math.min(Number(inputs.homeLoan), 200000);
      taxableIncome = Math.max(0, grossAnnual - stdDeduction - employeePF - deduction80C - hraExempt - homeLoanInt - Number(inputs.extraDeductions));
      tax = calcTax(taxableIncome, OLD_REGIME_SLABS);
      // 87A rebate
      if (taxableIncome <= 500000) tax = 0;
    }
    const cess = tax * 0.04;
    const totalTax = tax + cess;
    const monthlyTax = totalTax / 12;

    const netAnnual = grossAnnual - employeePF - professionalTax - totalTax;
    const netMonthly = netAnnual / 12;
    const grossMonthly = grossAnnual / 12;

    return {
      ctcAnnual, ctcMonthly: ctcAnnual / 12,
      grossAnnual, grossMonthly,
      basic: basic / 12, hra: hra / 12, da: da / 12,
      specialAllowance: specialAllowance / 12,
      bonus: bonus / 12, other: other / 12,
      employeePF: employeePF / 12, employerPF: employerPF / 12,
      professionalTax: professionalTax / 12,
      monthlyTax, totalTax,
      netMonthly, netAnnual,
      taxableIncome, gratuityProv: gratuityProv / 12,
    };
  }, [inputs]);

  const r = calc();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* ── Inputs ── */}
      <div className="space-y-4">
        {/* CTC */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-surface-700">CTC / Salary</label>
            <div className="flex rounded-lg overflow-hidden border border-surface-200">
              {['annual','monthly'].map(m => (
                <button key={m} onClick={() => set('ctcMode', m)}
                  className={`px-3 py-1 text-xs font-semibold transition-colors ${inputs.ctcMode===m?'bg-brand-600 text-white':'bg-white text-surface-600'}`}>
                  {m.charAt(0).toUpperCase()+m.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 focus-within:border-brand-400 transition-colors">
            <span className="text-surface-500 font-bold">₹</span>
            <input type="number" value={inputs.ctc} onChange={e=>set('ctc',Number(e.target.value))}
              className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none" />
          </div>
        </div>

        {/* Basic & HRA */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Basic (% of CTC)</label>
            <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 focus-within:border-brand-400">
              <input type="number" min="30" max="70" value={inputs.basicPct} onChange={e=>set('basicPct',Number(e.target.value))}
                className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none w-full" />
              <span className="text-surface-400 text-sm">%</span>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">HRA (% of Basic)</label>
            <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 focus-within:border-brand-400">
              <input type="number" min="0" max="100" value={inputs.hraPct} onChange={e=>set('hraPct',Number(e.target.value))}
                className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none w-full" />
              <span className="text-surface-400 text-sm">%</span>
            </div>
          </div>
        </div>

        {/* Monthly extras */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {k:'da',        label:'DA (₹/month)'            },
            {k:'bonus',     label:'Bonus (₹/month avg)'     },
            {k:'otherAllowances', label:'Other Allow. (₹/mo)'},
            {k:'extraDeductions', label:'Extra Deductions/yr'},
          ].map(f => (
            <div key={f.k}>
              <label className="text-xs font-semibold text-surface-600 block mb-1.5">{f.label}</label>
              <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 focus-within:border-brand-400">
                <span className="text-surface-400 text-sm">₹</span>
                <input type="number" min="0" value={inputs[f.k]} onChange={e=>set(f.k,e.target.value)}
                  className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Tax Regime */}
        <div>
          <label className="text-xs font-semibold text-surface-600 block mb-1.5">Tax Regime</label>
          <div className="grid grid-cols-2 gap-2">
            {[{id:'new',label:'New Regime',sub:'Lower rates, fewer deductions'},
              {id:'old',label:'Old Regime',sub:'More deductions, higher rates'}].map(r=>(
              <button key={r.id} onClick={()=>set('regime',r.id)}
                className={`p-3 rounded-xl border-2 text-left transition-colors ${inputs.regime===r.id?'border-brand-600 bg-brand-50':'border-surface-200 hover:border-brand-200'}`}>
                <div className={`text-xs font-bold ${inputs.regime===r.id?'text-brand-700':'text-surface-700'}`}>{r.label}</div>
                <div className="text-[9px] text-surface-400 mt-0.5">{r.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Old regime extras */}
        {inputs.regime==='old' && (
          <div className="grid grid-cols-2 gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <div>
              <label className="text-[10px] font-semibold text-amber-700 block mb-1">80C Investment (₹/yr)</label>
              <input type="number" min="0" max="150000" value={inputs.deduction80C} onChange={e=>set('deduction80C',e.target.value)}
                className="w-full text-sm font-bold bg-white border border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-amber-700 block mb-1">Monthly Rent (₹)</label>
              <input type="number" min="0" value={inputs.rent} onChange={e=>set('rent',e.target.value)}
                className="w-full text-sm font-bold bg-white border border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-amber-700 block mb-1">Home Loan Interest (₹/yr)</label>
              <input type="number" min="0" value={inputs.homeLoan} onChange={e=>set('homeLoan',e.target.value)}
                className="w-full text-sm font-bold bg-white border border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-amber-700 block mb-1">State</label>
              <select value={inputs.state} onChange={e=>set('state',e.target.value)}
                className="w-full text-sm bg-white border border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none">
                {Object.keys(STATES_PT).map(s=><option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
        )}
        {inputs.regime==='new' && (
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">State (for Professional Tax)</label>
            <select value={inputs.state} onChange={e=>set('state',e.target.value)}
              className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2.5 focus:outline-none bg-surface-50 focus:border-brand-400">
              {Object.keys(STATES_PT).map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
        )}
      </div>

      {/* ── Results ── */}
      <div className="space-y-4">
        {/* Take home hero */}
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0f172a,#1e1b4b)'}}>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">Monthly Take-Home</div>
          <div className="font-display font-black text-5xl text-white mb-1">{fmt(r.netMonthly)}</div>
          <div className="text-indigo-300 text-sm">₹{Math.round(r.netAnnual).toLocaleString('en-IN')} per year</div>
        </div>

        {/* Earnings breakdown */}
        <div className="bg-white border border-surface-200 rounded-2xl p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">Monthly Earnings</div>
          <div className="space-y-2">
            {[
              {label:'Basic Salary', val:r.basic, color:'emerald'},
              {label:'HRA', val:r.hra, color:'blue'},
              {label:'DA', val:r.da, color:'sky'},
              {label:'Special Allowance', val:r.specialAllowance, color:'violet'},
              {label:'Bonus (avg)', val:r.bonus, color:'amber'},
              {label:'Other Allowances', val:r.other, color:'teal'},
            ].filter(i=>i.val>0).map(i=>(
              <div key={i.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-${i.color}-400`}/>
                  <span className="text-sm text-surface-600">{i.label}</span>
                </div>
                <span className="text-sm font-semibold text-surface-900">{fmt(i.val)}</span>
              </div>
            ))}
            <div className="border-t border-surface-100 pt-2 flex justify-between items-center">
              <span className="text-sm font-bold text-surface-800">Gross Monthly</span>
              <span className="text-sm font-black text-emerald-700">{fmt(r.grossMonthly)}</span>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="bg-white border border-surface-200 rounded-2xl p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">Monthly Deductions</div>
          <div className="space-y-2">
            {[
              {label:'Employee PF (12%)', val:r.employeePF},
              {label:'Professional Tax', val:r.professionalTax},
              {label:'Income Tax (TDS)', val:r.monthlyTax},
            ].map(i=>(
              <div key={i.label} className="flex justify-between items-center">
                <span className="text-sm text-surface-600">{i.label}</span>
                <span className="text-sm font-semibold text-rose-600">− {fmt(i.val)}</span>
              </div>
            ))}
            <div className="border-t border-surface-100 pt-2 flex justify-between items-center">
              <span className="text-sm font-bold text-surface-800">Total Deductions</span>
              <span className="text-sm font-black text-rose-600">− {fmt(r.grossMonthly - r.netMonthly)}</span>
            </div>
          </div>
        </div>

        {/* CTC breakup */}
        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4 text-xs space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">CTC Composition (Annual)</div>
          {[
            {label:'Gross Salary',        val:r.grossAnnual,      color:'text-surface-800'},
            {label:'+ Employer PF',       val:r.employerPF*12,    color:'text-surface-600'},
            {label:'+ Gratuity Provision',val:r.gratuityProv*12,  color:'text-surface-600'},
            {label:'= Total CTC',         val:r.ctcAnnual,        color:'text-brand-700 font-black'},
          ].map(i=>(
            <div key={i.label} className="flex justify-between">
              <span className="text-surface-500">{i.label}</span>
              <span className={`font-semibold ${i.color}`}>{fmt(i.val)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Gratuity Calculator ───────────────────────────────────────
function GratuityCalc() {
  const [salary,  setSalary]  = useState(50000);
  const [years,   setYears]   = useState(6);
  const [covered, setCovered] = useState(true); // under Gratuity Act
  const [months,  setMonths]  = useState(0);

  const eligible    = years >= 5;
  const totalYears  = covered ? (months >= 6 ? Math.ceil(years + months/12) : Math.floor(years + months/12)) : years;
  const divisor     = covered ? 26 : 30;
  const gratuity    = eligible ? (15 * salary * totalYears) / divisor : 0;
  const taxFree     = Math.min(gratuity, 2000000);
  const taxable     = Math.max(0, gratuity - 2000000);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <label className="text-sm font-semibold text-surface-700 block mb-2">Last Drawn Basic + DA (Monthly ₹)</label>
          <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 focus-within:border-brand-400">
            <span className="text-surface-500 font-bold">₹</span>
            <input type="number" value={salary} onChange={e=>setSalary(Number(e.target.value))}
              className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none" />
          </div>
          <div className="mt-2">
            <input type="range" min="10000" max="500000" step="5000" value={salary} onChange={e=>setSalary(Number(e.target.value))}
              className="w-full accent-brand-600" />
            <div className="flex justify-between text-[10px] text-surface-400 mt-1"><span>₹10K</span><span>₹5L</span></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">Years of Service</label>
            <input type="number" min="0" max="40" value={years} onChange={e=>setYears(Number(e.target.value))}
              className="w-full text-sm font-bold border border-surface-200 bg-surface-50 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-400" />
          </div>
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">Additional Months</label>
            <input type="number" min="0" max="11" value={months} onChange={e=>setMonths(Number(e.target.value))}
              className="w-full text-sm font-bold border border-surface-200 bg-surface-50 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-400" />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-surface-700 block mb-2">Employment Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={()=>setCovered(true)}
              className={`p-3 rounded-xl border-2 text-left transition-colors ${covered?'border-brand-600 bg-brand-50':'border-surface-200'}`}>
              <div className={`text-xs font-bold ${covered?'text-brand-700':'text-surface-700'}`}>Under Gratuity Act</div>
              <div className="text-[9px] text-surface-400 mt-0.5">15/26 formula</div>
            </button>
            <button onClick={()=>setCovered(false)}
              className={`p-3 rounded-xl border-2 text-left transition-colors ${!covered?'border-brand-600 bg-brand-50':'border-surface-200'}`}>
              <div className={`text-xs font-bold ${!covered?'text-brand-700':'text-surface-700'}`}>Not Covered</div>
              <div className="text-[9px] text-surface-400 mt-0.5">15/30 formula</div>
            </button>
          </div>
        </div>

        {/* Formula display */}
        <div className="bg-surface-900 rounded-2xl p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-brand-300 mb-2">Formula Applied</div>
          <div className="font-mono text-emerald-300 text-xs leading-6">
            <div>Gratuity = (15 × Salary × Years) ÷ {divisor}</div>
            <div className="text-surface-400 mt-1">= (15 × {fmt(salary)} × {totalYears}) ÷ {divisor}</div>
            <div className="text-emerald-300 font-bold">= {fmt(gratuity)}</div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {/* Eligibility */}
        <div className={`p-4 rounded-2xl border-2 ${eligible?'bg-emerald-50 border-emerald-300':'bg-rose-50 border-rose-300'}`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{eligible?'✅':'❌'}</span>
            <div>
              <div className={`font-bold text-base ${eligible?'text-emerald-800':'text-rose-800'}`}>
                {eligible?'Eligible for Gratuity':'Not Yet Eligible'}
              </div>
              <div className={`text-sm mt-0.5 ${eligible?'text-emerald-700':'text-rose-700'}`}>
                {eligible
                  ? `Minimum 5 years completed. Gratuity payable on separation.`
                  : `Need ${5-years} more year${5-years===1?'':'s'} to qualify. Minimum 5 years required.`}
              </div>
            </div>
          </div>
        </div>

        {eligible && (
          <>
            <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#064e3b,#065f46)'}}>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">Gratuity Amount</div>
              <div className="font-display font-black text-5xl text-white mb-1">{fmt(gratuity)}</div>
              <div className="text-emerald-300 text-sm">{totalYears} year{totalYears!==1?'s':''} of service · {fmt(salary)}/month</div>
            </div>

            <div className="bg-white border border-surface-200 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">Tax Treatment</div>
              <div className="flex justify-between text-sm">
                <span className="text-surface-600">Tax-Free Amount (up to ₹20L)</span>
                <span className="font-semibold text-emerald-700">{fmt(taxFree)}</span>
              </div>
              {taxable > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-surface-600">Taxable Amount (above ₹20L)</span>
                  <span className="font-semibold text-rose-600">{fmt(taxable)}</span>
                </div>
              )}
              {taxable === 0 && (
                <div className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg mt-2">
                  ✅ Your gratuity is fully tax-exempt under Section 10(10) of the Income Tax Act.
                </div>
              )}
            </div>

            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 text-xs space-y-2 text-surface-600">
              <div className="font-bold text-surface-800 mb-1">Key Facts</div>
              <div className="flex gap-2"><span>📌</span><span>Months ≥ 6 are rounded up to a full year ({covered?'Gratuity Act':'non-covered'})</span></div>
              <div className="flex gap-2"><span>📌</span><span>Maximum tax-free gratuity: ₹20 lakh (government employees: unlimited)</span></div>
              <div className="flex gap-2"><span>📌</span><span>Payable within 30 days of separation. Delayed payment attracts interest.</span></div>
              <div className="flex gap-2"><span>📌</span><span>Eligible on resignation, retirement, death, or disablement.</span></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────
export default function SalaryGratuityCalculator() {
  const [tab, setTab] = useState('salary');
  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Tab toggle */}
      <div className="flex border-b border-surface-100">
        {[{id:'salary',icon:'💰',label:'Salary Calculator'},{id:'gratuity',icon:'🎁',label:'Gratuity Calculator'}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors border-b-2 ${
              tab===t.id?'border-brand-600 text-brand-700 bg-brand-50':'border-transparent text-surface-500 hover:bg-surface-50'}`}>
            <span>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tab==='salary'  ? <SalaryCalc /> : <GratuityCalc />}
      </div>
    </div>
  );
}