'use client';
import { useState, useCallback } from 'react';

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(n) {
  return new Intl.NumberFormat('en-IN').format(Math.round(n));
}

export default function EMICalculator() {
  const [principal,  setPrincipal]  = useState(1000000);
  const [rate,       setRate]       = useState(8.5);
  const [tenure,     setTenure]     = useState(20);
  const [tenureType, setTenureType] = useState('years'); // years | months
  const [copied,     setCopied]     = useState(false);

  // ── Core EMI formula ─────────────────────────────────────
  const calculateEMI = useCallback(() => {
    const months = tenureType === 'years' ? tenure * 12 : tenure;
    const r      = rate / 12 / 100;
    if (r === 0) return { emi: principal / months, totalAmount: principal, totalInterest: 0, months };
    const emi          = principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
    const totalAmount  = emi * months;
    const totalInterest = totalAmount - principal;
    return { emi, totalAmount, totalInterest, months };
  }, [principal, rate, tenure, tenureType]);

  const { emi, totalAmount, totalInterest, months } = calculateEMI();
  const principalPercent = Math.round((principal / totalAmount) * 100);
  const interestPercent  = 100 - principalPercent;

  // ── Amortization schedule (first 3 + last 3 rows) ────────
  const buildSchedule = () => {
    const r = rate / 12 / 100;
    let balance = principal;
    const rows = [];
    for (let i = 1; i <= months; i++) {
      const interest  = balance * r;
      const prinPaid  = emi - interest;
      balance         = Math.max(0, balance - prinPaid);
      rows.push({ month: i, emi, interest, principal: prinPaid, balance });
    }
    return rows;
  };

  const schedule = buildSchedule();
  const preview  = [
    ...schedule.slice(0, 3),
    null, // separator
    ...schedule.slice(-3),
  ];

  const shareResult = () => {
    const text = `EMI Calculator Result:\nLoan: ${formatINR(principal)}\nRate: ${rate}% p.a.\nTenure: ${tenure} ${tenureType}\nMonthly EMI: ${formatINR(emi)}\nTotal Interest: ${formatINR(totalInterest)}\nTotal Amount: ${formatINR(totalAmount)}\n\nCalculated at toolstackhub.in/emi-calculator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Inputs ────────────────────────────────────────── */}
      <div className="p-6 space-y-6 border-b border-surface-100">

        {/* Loan Amount */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-surface-700">Loan Amount</label>
            <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
              <span className="text-sm text-surface-500 font-medium">₹</span>
              <input
                type="number"
                value={principal}
                onChange={e => setPrincipal(Math.max(0, Number(e.target.value)))}
                className="w-28 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right"
              />
            </div>
          </div>
          <input type="range" min="100000" max="10000000" step="50000"
            value={principal} onChange={e => setPrincipal(Number(e.target.value))}
            className="w-full accent-brand-600" />
          <div className="flex justify-between text-[10px] text-surface-400 mt-1">
            <span>₹1L</span><span>₹1Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-surface-700">Interest Rate (p.a.)</label>
            <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
              <input
                type="number"
                value={rate}
                step="0.1"
                onChange={e => setRate(Math.max(0.1, Math.min(30, Number(e.target.value))))}
                className="w-16 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right"
              />
              <span className="text-sm text-surface-500 font-medium">%</span>
            </div>
          </div>
          <input type="range" min="1" max="30" step="0.1"
            value={rate} onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-brand-600" />
          <div className="flex justify-between text-[10px] text-surface-400 mt-1">
            <span>1%</span><span>30%</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-surface-700">Loan Tenure</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                <input
                  type="number"
                  value={tenure}
                  onChange={e => setTenure(Math.max(1, Number(e.target.value)))}
                  className="w-12 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right"
                />
              </div>
              <div className="flex rounded-lg overflow-hidden border border-surface-200">
                <button onClick={() => setTenureType('years')}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${tenureType === 'years' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}>
                  Yr
                </button>
                <button onClick={() => setTenureType('months')}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${tenureType === 'months' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}>
                  Mo
                </button>
              </div>
            </div>
          </div>
          <input type="range" min="1" max={tenureType === 'years' ? 30 : 360} step="1"
            value={tenure} onChange={e => setTenure(Number(e.target.value))}
            className="w-full accent-brand-600" />
          <div className="flex justify-between text-[10px] text-surface-400 mt-1">
            <span>1 {tenureType === 'years' ? 'yr' : 'mo'}</span>
            <span>{tenureType === 'years' ? '30 yrs' : '360 mo'}</span>
          </div>
        </div>
      </div>

      {/* ── Results ───────────────────────────────────────── */}
      <div className="p-6 bg-gradient-to-br from-brand-950 to-brand-900">

        {/* EMI hero */}
        <div className="text-center mb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">
            Monthly EMI
          </div>
          <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            {formatINR(emi)}
          </div>
          <div className="text-brand-400 text-sm mt-1">per month for {months} months</div>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Principal',      value: formatINR(principal),     sub: `${principalPercent}%` },
            { label: 'Total Interest', value: formatINR(totalInterest), sub: `${interestPercent}%` },
            { label: 'Total Payment',  value: formatINR(totalAmount),   sub: '100%' },
          ].map(s => (
            <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-[10px] text-brand-300 font-semibold uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-white font-bold text-sm leading-snug">{s.value}</div>
              <div className="text-brand-400 text-[10px] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex rounded-full overflow-hidden h-3">
            <div className="bg-brand-400 transition-all duration-300" style={{ width: `${principalPercent}%` }} />
            <div className="bg-rose-400 transition-all duration-300" style={{ width: `${interestPercent}%` }} />
          </div>
          <div className="flex justify-between text-[10px] mt-1.5">
            <span className="text-brand-300 font-medium">● Principal {principalPercent}%</span>
            <span className="text-rose-300 font-medium">● Interest {interestPercent}%</span>
          </div>
        </div>

        {/* Share button */}
        <button onClick={shareResult}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
            copied ? 'bg-emerald-500 text-white' : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
          }`}>
          {copied ? '✅ Copied to clipboard!' : '📋 Share / Copy Result'}
        </button>
      </div>

      {/* ── Amortization table ────────────────────────────── */}
      <div className="p-6 border-t border-surface-100">
        <h3 className="font-display font-bold text-base text-surface-900 mb-4">
          Amortization Schedule
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface-100">
                <th className="text-left px-3 py-2 font-semibold text-surface-600 rounded-tl-lg">Month</th>
                <th className="text-right px-3 py-2 font-semibold text-surface-600">EMI</th>
                <th className="text-right px-3 py-2 font-semibold text-surface-600">Principal</th>
                <th className="text-right px-3 py-2 font-semibold text-surface-600">Interest</th>
                <th className="text-right px-3 py-2 font-semibold text-surface-600 rounded-tr-lg">Balance</th>
              </tr>
            </thead>
            <tbody>
              {preview.map((row, i) => {
                if (!row) return (
                  <tr key="sep">
                    <td colSpan={5} className="text-center py-2 text-surface-400 text-[10px]">
                      · · · {months - 6} more months · · ·
                    </td>
                  </tr>
                );
                return (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                    <td className="px-3 py-2 font-medium text-surface-700">{row.month}</td>
                    <td className="px-3 py-2 text-right text-surface-700">₹{formatNumber(row.emi)}</td>
                    <td className="px-3 py-2 text-right text-brand-700 font-medium">₹{formatNumber(row.principal)}</td>
                    <td className="px-3 py-2 text-right text-rose-600">₹{formatNumber(row.interest)}</td>
                    <td className="px-3 py-2 text-right text-surface-600">₹{formatNumber(row.balance)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}