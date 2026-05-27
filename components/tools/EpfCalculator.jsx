'use client';
import { useState, useMemo } from 'react';

// ── Helpers ────────────────────────────────────────────────────
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

function formatL(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return formatINR(amount);
}

// ── Shared slider input ────────────────────────────────────────
function SliderInput({ label, value, onChange, min, max, step = 1, suffix = '', helper }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-surface-500">{label}</label>
        <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={e => {
              const v = parseFloat(e.target.value);
              if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
            }}
            className="w-16 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right"
          />
          {suffix && <span className="text-sm text-surface-500 font-medium">{suffix}</span>}
        </div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full accent-brand-600"
      />
      <div className="flex justify-between text-[10px] text-surface-400 mt-1">
        <span>{min}{suffix}</span><span>{max}{suffix}</span>
      </div>
      {helper && <p className="text-xs text-surface-400 mt-1 leading-relaxed">{helper}</p>}
    </div>
  );
}

function NumInput({ label, value, onChange, helper, prefix = '₹', placeholder = '0' }) {
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
          type="text" inputMode="numeric"
          value={display}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => {
            const raw = e.target.value.replace(/[^0-9]/g, '');
            onChange(raw === '' ? 0 : Math.min(parseInt(raw, 10), 500000000));
          }}
          placeholder={placeholder}
          className="flex-1 px-3 py-3 text-sm font-semibold text-surface-900 focus:outline-none bg-white"
        />
      </div>
      {helper && <p className="text-xs text-surface-400 mt-1 leading-relaxed">{helper}</p>}
    </div>
  );
}

// ── Tab 1: EPF Balance Calculator ─────────────────────────────
function EPFBalanceTab() {
  const [basicDA, setBasicDA] = useState(30000);
  const [yearsOfService, setYearsOfService] = useState(20);
  const [increment, setIncrement] = useState(5);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [interestRate, setInterestRate] = useState(8.25);
  const [showTable, setShowTable] = useState(false);

  const EMPLOYEE_RATE = 0.12;
  const EMPLOYER_EPF_RATE = 0.0367;

  const calc = useMemo(() => {
    const r = interestRate / 100;
    let balance = currentBalance;
    let totalEmployee = 0;
    let totalEmployer = 0;
    let salary = basicDA;
    const yearlyData = [];

    for (let yr = 1; yr <= yearsOfService; yr++) {
      const empContrib = salary * EMPLOYEE_RATE * 12;
      const erContrib = salary * EMPLOYER_EPF_RATE * 12;
      const yearInterest = (balance + empContrib / 2 + erContrib / 2) * r;

      balance = balance + empContrib + erContrib + yearInterest;
      totalEmployee += empContrib;
      totalEmployer += erContrib;

      yearlyData.push({
        year: yr,
        salary: Math.round(salary),
        empContrib: Math.round(empContrib),
        erContrib: Math.round(erContrib),
        interest: Math.round(yearInterest),
        balance: Math.round(balance),
      });

      salary = salary * (1 + increment / 100);
    }

    const totalInterest = balance - totalEmployee - totalEmployer - currentBalance;

    return {
      corpus: Math.round(balance),
      totalEmployee: Math.round(totalEmployee),
      totalEmployer: Math.round(totalEmployer),
      totalInterest: Math.round(totalInterest),
      yearlyData,
    };
  }, [basicDA, yearsOfService, increment, currentBalance, interestRate]);

  const totalContrib = calc.totalEmployee + calc.totalEmployer + currentBalance;
  const employeeShare = calc.corpus > 0 ? Math.round((calc.totalEmployee / calc.corpus) * 100) : 0;
  const employerShare = calc.corpus > 0 ? Math.round((calc.totalEmployer / calc.corpus) * 100) : 0;
  const interestShare = calc.corpus > 0 ? Math.round((calc.totalInterest / calc.corpus) * 100) : 0;
  const seedShare = currentBalance > 0 && calc.corpus > 0 ? Math.round((currentBalance / calc.corpus) * 100) : 0;

  const visibleRows = showTable ? calc.yearlyData : calc.yearlyData.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="bg-brand-600 px-5 py-4">
            <h2 className="font-bold text-white">📊 EPF Balance Inputs</h2>
            <p className="text-brand-200 text-xs mt-0.5">Calculate your EPF corpus at retirement</p>
          </div>
          <div className="p-5 space-y-5">
            <NumInput
              label="Basic + DA Salary (Monthly)"
              value={basicDA}
              onChange={setBasicDA}
              helper="Monthly Basic + Dearness Allowance — base for EPF calculation"
            />
            <SliderInput
              label="Years of Service"
              value={yearsOfService}
              onChange={setYearsOfService}
              min={1} max={35} suffix=" yrs"
              helper="Total years of EPF contribution remaining"
            />
            <SliderInput
              label="Expected Annual Increment"
              value={increment}
              onChange={setIncrement}
              min={0} max={25} step={0.5} suffix="%"
              helper="Expected yearly salary growth (default 5%)"
            />
            <NumInput
              label="Current EPF Balance (Optional)"
              value={currentBalance}
              onChange={setCurrentBalance}
              helper="Your existing EPF balance, if any (enter 0 if none)"
            />

            {/* EPF interest rate */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-surface-500">EPF Interest Rate</label>
                <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                  <input
                    type="number" value={interestRate} min={1} max={15} step={0.01}
                    onChange={e => setInterestRate(Math.min(15, Math.max(1, parseFloat(e.target.value) || 8.25)))}
                    className="w-14 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right"
                  />
                  <span className="text-sm text-surface-500 font-medium">%</span>
                </div>
              </div>
              <p className="text-xs text-surface-400 leading-relaxed">
                Current EPFO rate: <strong className="text-brand-600">8.25%</strong> (FY 2023-24, set by EPFO)
              </p>
            </div>

            {/* Contribution breakdown note */}
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-3 text-xs space-y-1.5 text-surface-600">
              <div className="font-bold text-surface-700 mb-1">Contribution Rates Used:</div>
              <div className="flex justify-between"><span>Employee EPF</span><span className="font-bold text-brand-700">12% of Basic+DA</span></div>
              <div className="flex justify-between"><span>Employer EPF</span><span className="font-bold text-emerald-700">3.67% of Basic+DA</span></div>
              <div className="flex justify-between"><span>Employer EPS</span><span className="font-bold text-surface-500">8.33% (not in EPF)</span></div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {/* Corpus hero */}
          <div className="bg-gradient-to-br from-brand-950 to-brand-800 rounded-2xl p-6 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">
              EPF Corpus at Retirement
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-1">
              {formatL(calc.corpus)}
            </div>
            <div className="text-brand-300 text-sm">after {yearsOfService} years at {interestRate}% p.a.</div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: 'Your Contribution', value: formatL(calc.totalEmployee), sub: `${employeeShare}%`, color: 'brand' },
                { label: 'Employer EPF', value: formatL(calc.totalEmployer), sub: `${employerShare}%`, color: 'emerald' },
                { label: 'Interest Earned', value: formatL(calc.totalInterest), sub: `${interestShare}%`, color: 'amber' },
              ].map(s => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-[10px] text-brand-300 font-semibold uppercase tracking-wider mb-1">{s.label}</div>
                  <div className="text-white font-bold text-sm leading-snug">{s.value}</div>
                  <div className="text-brand-400 text-[10px] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bars */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5">
            <div className="text-sm font-bold text-surface-800 mb-4">Corpus Breakdown</div>
            <div className="space-y-3">
              {[
                { label: 'Your Contributions', amount: calc.totalEmployee, pct: employeeShare, color: 'bg-brand-500' },
                { label: 'Employer EPF Contributions', amount: calc.totalEmployer, pct: employerShare, color: 'bg-emerald-500' },
                { label: 'Interest Earned (Power of Compounding)', amount: calc.totalInterest, pct: interestShare, color: 'bg-amber-400' },
                ...(currentBalance > 0 ? [{ label: 'Opening Balance', amount: currentBalance, pct: seedShare, color: 'bg-violet-400' }] : []),
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-surface-600">{item.label}</span>
                    <span className="text-xs font-bold text-surface-900">{formatL(item.amount)} <span className="text-surface-400">({item.pct}%)</span></span>
                  </div>
                  <div className="h-2.5 bg-surface-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-surface-100 flex justify-between items-center">
              <span className="text-sm font-bold text-surface-700">Total EPF Corpus</span>
              <span className="text-lg font-black text-brand-700">{formatL(calc.corpus)}</span>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5">
            <div className="text-sm font-bold text-surface-800 mb-3">Current Month Contributions (Year 1)</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Your EPF deduction', amount: Math.round(basicDA * 0.12), badge: '12%', color: 'brand' },
                { label: "Employer's EPF credit", amount: Math.round(basicDA * 0.0367), badge: '3.67%', color: 'emerald' },
                { label: 'Total EPF credited', amount: Math.round(basicDA * (0.12 + 0.0367)), badge: '15.67%', color: 'violet' },
                { label: 'Employer EPS (pension)', amount: Math.min(Math.round(Math.min(basicDA, 15000) * 0.0833), 1250), badge: '8.33%*', color: 'surface' },
              ].map(item => (
                <div key={item.label} className={`p-3 rounded-xl border ${item.color === 'surface' ? 'bg-surface-50 border-surface-200' : `bg-${item.color}-50 border-${item.color}-200`}`}>
                  <div className="text-xs text-surface-500 mb-1">{item.label}</div>
                  <div className={`text-lg font-black ${item.color === 'surface' ? 'text-surface-600' : `text-${item.color}-700`}`}>{formatINR(item.amount)}/mo</div>
                  <div className={`text-[10px] font-bold mt-0.5 ${item.color === 'surface' ? 'text-surface-400' : `text-${item.color}-500`}`}>{item.badge}</div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-surface-400 mt-2">*EPS calculated on Basic+DA capped at ₹15,000</p>
          </div>
        </div>
      </div>

      {/* Year-by-year table */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
        <div className="bg-surface-50 border-b border-surface-100 px-5 py-3 flex items-center justify-between">
          <div>
            <div className="font-bold text-surface-900 text-sm">📅 Year-by-Year EPF Growth</div>
            <div className="text-xs text-surface-400 mt-0.5">First 5 years shown — expand to see all {yearsOfService} years</div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface-100">
                <th className="text-left px-4 py-2.5 font-bold text-surface-600">Year</th>
                <th className="text-right px-4 py-2.5 font-bold text-surface-600">Monthly Salary</th>
                <th className="text-right px-4 py-2.5 font-bold text-surface-600">Employee (yr)</th>
                <th className="text-right px-4 py-2.5 font-bold text-surface-600">Employer EPF (yr)</th>
                <th className="text-right px-4 py-2.5 font-bold text-surface-600">Interest (yr)</th>
                <th className="text-right px-4 py-2.5 font-bold text-surface-600">Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, i) => (
                <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                  <td className="px-4 py-2.5 font-bold text-surface-700">Yr {row.year}</td>
                  <td className="px-4 py-2.5 text-right text-surface-600 font-mono">{formatINR(row.salary)}</td>
                  <td className="px-4 py-2.5 text-right text-brand-700 font-mono font-semibold">{formatINR(row.empContrib)}</td>
                  <td className="px-4 py-2.5 text-right text-emerald-700 font-mono font-semibold">{formatINR(row.erContrib)}</td>
                  <td className="px-4 py-2.5 text-right text-amber-600 font-mono">{formatINR(row.interest)}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-black text-surface-900">{formatL(row.balance)}</td>
                </tr>
              ))}
              {!showTable && calc.yearlyData.length > 5 && (
                <tr>
                  <td colSpan={6} className="text-center py-2 text-surface-400 text-[10px]">
                    · · · {calc.yearlyData.length - 5} more years · · ·
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {calc.yearlyData.length > 5 && (
          <div className="px-5 py-3 border-t border-surface-100">
            <button
              onClick={() => setShowTable(p => !p)}
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1.5"
            >
              {showTable ? '▲ Show less' : `▼ Show all ${calc.yearlyData.length} years`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Tab 2: Monthly EPF Deduction ──────────────────────────────
function EPFDeductionTab() {
  const [basicDA, setBasicDA] = useState(30000);

  const epsBase = Math.min(basicDA, 15000);
  const empContrib = Math.round(basicDA * 0.12);
  const erEPF = Math.round(basicDA * 0.0367);
  const erEPS = Math.round(epsBase * 0.0833);
  const erTotal = erEPF + erEPS;
  const totalEPF = empContrib + erEPF;
  const totalDeduction = empContrib + erTotal;

  const rows = [
    { label: 'Employee EPF Contribution', rate: '12%', base: `Basic+DA = ${formatINR(basicDA)}`, amount: empContrib, color: 'brand', note: 'Deducted from your salary' },
    { label: 'Employer EPF Contribution', rate: '3.67%', base: `Basic+DA = ${formatINR(basicDA)}`, amount: erEPF, color: 'emerald', note: 'Credited to your EPF account' },
    { label: 'Employer EPS Contribution', rate: '8.33%', base: `Capped at ₹15,000 = ${formatINR(epsBase)}`, amount: erEPS, color: 'violet', note: 'Goes to pension — NOT your EPF balance' },
    { label: "Employer's Total (EPF+EPS)", rate: '12%', base: `3.67% EPF + 8.33% EPS`, amount: erTotal, color: 'surface', note: 'Employer total obligation' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Input */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="bg-brand-600 px-5 py-4">
            <h2 className="font-bold text-white">💰 Monthly EPF Deduction</h2>
            <p className="text-brand-200 text-xs mt-0.5">See exact PF deduction breakdown</p>
          </div>
          <div className="p-5 space-y-5">
            <NumInput
              label="Basic + DA Salary (Monthly)"
              value={basicDA}
              onChange={setBasicDA}
              helper="Monthly Basic Salary + Dearness Allowance. For most private employees, DA = 0."
            />

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
              <div className="font-bold mb-1">ℹ️ EPS Threshold Note</div>
              EPF applies to your full Basic+DA ({formatINR(basicDA)}). However, the <strong>EPS portion (8.33%) is calculated only on ₹15,000 maximum</strong>, even if your Basic+DA is higher. This is the statutory wage ceiling for EPS.
            </div>

            <div className="bg-surface-50 border border-surface-200 rounded-xl p-3 text-xs space-y-2">
              <div className="font-bold text-surface-700">Key Facts:</div>
              <div className="space-y-1 text-surface-600">
                <div>• Both employee and employer contribute 12% of Basic+DA</div>
                <div>• Of employer's 12%: 3.67% → EPF, 8.33% → EPS</div>
                <div>• EPS capped at ₹15,000 basic salary</div>
                <div>• Only EPF portion accumulates in your PF balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {/* Summary cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-600 rounded-2xl p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">Your Monthly Deduction</div>
              <div className="text-3xl font-black">{formatINR(empContrib)}</div>
              <div className="text-brand-300 text-xs mt-1">12% of {formatINR(basicDA)}</div>
            </div>
            <div className="bg-emerald-600 rounded-2xl p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-200 mb-1">Total EPF Credited (Monthly)</div>
              <div className="text-3xl font-black">{formatINR(totalEPF)}</div>
              <div className="text-emerald-300 text-xs mt-1">Yours + Employer EPF</div>
            </div>
          </div>

          {/* Detailed table */}
          <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
            <div className="bg-surface-50 border-b border-surface-100 px-5 py-3">
              <div className="font-bold text-surface-900 text-sm">Monthly Contribution Breakdown</div>
            </div>
            <div className="p-5 space-y-3">
              {rows.map((row, i) => (
                <div key={i} className={`p-4 rounded-xl border ${row.color === 'surface' ? 'bg-surface-50 border-surface-200' : `bg-${row.color}-50 border-${row.color}-200`}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className={`text-sm font-bold ${row.color === 'surface' ? 'text-surface-700' : `text-${row.color}-900`}`}>{row.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{row.base}</div>
                      <div className="text-xs text-surface-400 mt-0.5 italic">{row.note}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`text-xl font-black ${row.color === 'surface' ? 'text-surface-700' : `text-${row.color}-700`}`}>{formatINR(row.amount)}</div>
                      <div className={`text-xs font-bold ${row.color === 'surface' ? 'text-surface-400' : `text-${row.color}-500`}`}>{row.rate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual summary */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5">
            <div className="text-sm font-bold text-surface-800 mb-3">Annual EPF Summary</div>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Annual employee contribution', value: empContrib * 12, color: 'brand' },
                { label: 'Annual employer EPF contribution', value: erEPF * 12, color: 'emerald' },
                { label: 'Annual total EPF credited to account', value: totalEPF * 12, color: 'violet', bold: true },
                { label: 'Annual employer EPS (pension)', value: erEPS * 12, color: 'surface' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center py-2 ${i > 0 ? 'border-t border-surface-100' : ''}`}>
                  <span className={`${item.bold ? 'font-bold text-surface-900' : 'text-surface-600'}`}>{item.label}</span>
                  <span className={`font-mono font-bold ${item.color === 'surface' ? 'text-surface-500' : `text-${item.color}-700`}`}>{formatINR(item.value)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tax note */}
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 text-xs text-surface-600 leading-relaxed">
            <strong className="text-surface-800">Tax on EPF contributions:</strong> Employee contributions up to ₹2.5 lakh/year are tax-free under Section 80C. Interest on contributions above ₹2.5 lakh/year is taxable (from FY 2021-22). Your annual EPF contribution is {formatINR(empContrib * 12)} — {empContrib * 12 <= 250000 ? '✅ within the ₹2.5L tax-free limit.' : '⚠️ above ₹2.5L — interest on the excess is taxable.'}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: EPS Pension Calculator ─────────────────────────────
function EPSPensionTab() {
  const [yearsOfService, setYearsOfService] = useState(20);
  const [pensionableSalary, setPensionableSalary] = useState(15000);

  const cappedSalary = Math.min(pensionableSalary, 15000);
  const monthlyPension = Math.round((cappedSalary * yearsOfService) / 70);
  const annualPension = monthlyPension * 12;

  // EPS eligibility
  const isEligible = yearsOfService >= 10;
  const isFullBenefit = yearsOfService >= 20;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="bg-brand-600 px-5 py-4">
            <h2 className="font-bold text-white">🏛️ EPS Pension Calculator</h2>
            <p className="text-brand-200 text-xs mt-0.5">Employee Pension Scheme (EPS-95) calculation</p>
          </div>
          <div className="p-5 space-y-5">
            <SliderInput
              label="Pensionable Service (Years)"
              value={yearsOfService}
              onChange={setYearsOfService}
              min={1} max={35} suffix=" yrs"
              helper="Total years of EPS contribution. Minimum 10 years required for pension eligibility."
            />
            <NumInput
              label="Pensionable Salary (Last Drawn)"
              value={pensionableSalary}
              onChange={setPensionableSalary}
              helper="Your Basic+DA at the time of retirement/exit. Maximum ₹15,000 for EPS calculation."
            />

            {pensionableSalary > 15000 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                <strong>EPS Salary Cap Applied:</strong> Your salary of {formatINR(pensionableSalary)} exceeds the EPS wage ceiling. Pension calculated on the statutory maximum of <strong>₹15,000</strong>.
              </div>
            )}

            <div className="bg-surface-50 border border-surface-200 rounded-xl p-3 text-xs space-y-1.5 text-surface-600">
              <div className="font-bold text-surface-700 mb-1">EPS Formula:</div>
              <div className="font-mono text-surface-800 bg-white border border-surface-200 rounded-lg px-3 py-2 text-center">
                Monthly Pension = (Pensionable Salary × Pensionable Service) ÷ 70
              </div>
              <div className="text-surface-500 mt-1">= ({formatINR(cappedSalary)} × {yearsOfService}) ÷ 70 = <strong className="text-brand-700">{formatINR(monthlyPension)}/month</strong></div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {/* Eligibility status */}
          <div className={`rounded-2xl p-5 border-2 ${isEligible ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'}`}>
            <div className={`font-bold text-lg mb-1 ${isEligible ? 'text-emerald-800' : 'text-rose-800'}`}>
              {isEligible ? '✅ Eligible for EPS Pension' : '❌ Not Yet Eligible for Pension'}
            </div>
            <p className={`text-sm ${isEligible ? 'text-emerald-700' : 'text-rose-700'}`}>
              {isEligible
                ? `You have ${yearsOfService} years of pensionable service — meeting the minimum 10-year requirement.${isFullBenefit ? ' You also qualify for the 2-year service bonus (pensionable service treated as +2 years for pension calculation).' : ''}`
                : `EPS pension requires a minimum of 10 years of service. You need ${10 - yearsOfService} more year${10 - yearsOfService > 1 ? 's' : ''}.`
              }
            </p>
          </div>

          {/* Pension amount */}
          <div className="bg-gradient-to-br from-brand-950 to-brand-800 rounded-2xl p-6 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">Monthly Pension Amount</div>
            <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              {isEligible ? formatINR(monthlyPension) : '—'}
            </div>
            <div className="text-brand-300 text-sm mt-1">per month after retirement</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-[10px] text-brand-300 font-semibold uppercase tracking-wider mb-1">Annual Pension</div>
                <div className="text-white font-bold text-sm">{isEligible ? formatINR(annualPension) : '—'}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-[10px] text-brand-300 font-semibold uppercase tracking-wider mb-1">Pensionable Salary Used</div>
                <div className="text-white font-bold text-sm">{formatINR(cappedSalary)}</div>
                {pensionableSalary > 15000 && <div className="text-brand-400 text-[10px] mt-0.5">capped at ₹15,000</div>}
              </div>
            </div>
          </div>

          {/* EPS details */}
          <div className="bg-white border border-surface-200 rounded-2xl p-5 space-y-3">
            <div className="text-sm font-bold text-surface-800 mb-1">EPS Key Details</div>
            {[
              { label: 'Pension eligibility', value: yearsOfService >= 10 ? 'Eligible (10+ years)' : `Not eligible (${10 - yearsOfService} yrs short)`, ok: yearsOfService >= 10 },
              { label: 'Pensionable salary (capped)', value: formatINR(cappedSalary), ok: true },
              { label: 'Pensionable service years', value: `${yearsOfService} years`, ok: true },
              { label: 'Formula divisor', value: '70', ok: true },
              { label: 'Monthly pension', value: isEligible ? formatINR(monthlyPension) : 'Not applicable', ok: isEligible },
              { label: 'Minimum pension (EPFO guarantee)', value: '₹1,000/month', ok: true },
              { label: 'Pension start age', value: '58 years (early at 50 with reduction)', ok: true },
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center py-2 ${i > 0 ? 'border-t border-surface-100' : ''}`}>
                <span className="text-sm text-surface-600">{item.label}</span>
                <span className={`text-sm font-bold ${item.ok ? 'text-surface-900' : 'text-rose-600'}`}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* EPS info box */}
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 text-xs text-surface-600 leading-relaxed space-y-2">
            <p><strong className="text-surface-800">About EPS-95:</strong> The Employee Pension Scheme (EPS) was introduced in 1995. It provides monthly pension after retirement at age 58. The pension fund is maintained by EPFO and is distinct from your EPF balance.</p>
            <p><strong className="text-surface-800">Service bonus:</strong> If you have 20+ years of pensionable service, EPFO adds 2 bonus years for pension calculation (effective pensionable service = actual + 2).</p>
            <p><strong className="text-surface-800">Withdrawal option:</strong> If you have less than 10 years of service and leave employment, you can withdraw your EPS contributions as a lump sum instead of pension.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main EPF Calculator ────────────────────────────────────────
const TABS = [
  { id: 'balance', label: 'EPF Balance' },
  { id: 'deduction', label: 'EPF Interest' },
  { id: 'pension', label: 'Pension (EPS)' },
];

export default function EpfCalculator() {
  const [activeTab, setActiveTab] = useState('balance');

  return (
    <div className="space-y-5">
      {/* Feature badges */}
      <div className="flex flex-wrap gap-2">
        {['✅ Free', '🇮🇳 India EPF Rules', '⚡ Instant', '🔒 No login'].map(b => (
          <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
        ))}
        <span className="text-xs font-medium text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-full">
          EPF interest rate: 8.25% (FY 2023-24, set by EPFO)
        </span>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-surface-200 rounded-2xl p-1.5 flex gap-1">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-4 text-sm font-bold rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'balance' && <EPFBalanceTab />}
      {activeTab === 'deduction' && <EPFDeductionTab />}
      {activeTab === 'pension' && <EPSPensionTab />}
    </div>
  );
}
