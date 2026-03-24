'use client';
import { useState, useCallback } from 'react';

function formatINR(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000)   return `₹${(amount / 100000).toFixed(2)} L`;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function formatINRFull(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export default function SIPCalculator() {
  const [monthly,     setMonthly]     = useState(5000);
  const [rate,        setRate]        = useState(12);
  const [years,       setYears]       = useState(10);
  const [stepUp,      setStepUp]      = useState(0);      // annual step-up %
  const [mode,        setMode]        = useState('sip');   // sip | lumpsum
  const [lumpsum,     setLumpsum]     = useState(100000);
  const [copied,      setCopied]      = useState(false);

  // ── SIP calculation ──────────────────────────────────────
  const calc = useCallback(() => {
    const n = years * 12;
    const r = rate / 100 / 12;

    if (mode === 'lumpsum') {
      const maturity      = lumpsum * Math.pow(1 + rate / 100, years);
      const totalInvested = lumpsum;
      const wealthGained  = maturity - totalInvested;
      return { maturity, totalInvested, wealthGained, n };
    }

    // SIP with optional step-up
    if (stepUp === 0) {
      const maturity      = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const totalInvested = monthly * n;
      const wealthGained  = maturity - totalInvested;
      return { maturity, totalInvested, wealthGained, n };
    }

    // Step-up SIP
    let balance     = 0;
    let invested    = 0;
    let currentSIP  = monthly;
    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) {
        balance  = (balance + currentSIP) * (1 + r);
        invested += currentSIP;
      }
      currentSIP = currentSIP * (1 + stepUp / 100);
    }
    return { maturity: balance, totalInvested: invested, wealthGained: balance - invested, n };
  }, [monthly, rate, years, stepUp, mode, lumpsum]);

  const { maturity, totalInvested, wealthGained } = calc();
  const investedPct = Math.round((totalInvested / maturity) * 100);
  const gainsPct    = 100 - investedPct;

  // ── Yearly projection for chart ──────────────────────────
  const buildProjection = () => {
    const r   = rate / 100 / 12;
    const pts = [];
    if (mode === 'lumpsum') {
      for (let y = 1; y <= years; y++) {
        pts.push({ year: y, value: lumpsum * Math.pow(1 + rate / 100, y), invested: lumpsum });
      }
      return pts;
    }
    let bal = 0; let inv = 0; let cur = monthly;
    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) { bal = (bal + cur) * (1 + r); inv += cur; }
      pts.push({ year: y, value: bal, invested: inv });
      cur = cur * (1 + stepUp / 100);
    }
    return pts;
  };

  const projection = buildProjection();
  const maxVal     = Math.max(...projection.map(p => p.value));

  // ── Share ─────────────────────────────────────────────────
  const share = () => {
    const text = mode === 'sip'
      ? `SIP Calculator Result:\nMonthly SIP: ${formatINRFull(monthly)}\nExpected Return: ${rate}% p.a.\nTenure: ${years} years${stepUp ? `\nAnnual Step-up: ${stepUp}%` : ''}\n\nTotal Invested: ${formatINRFull(totalInvested)}\nWealth Gained: ${formatINRFull(wealthGained)}\nMaturity Value: ${formatINRFull(maturity)}\n\nCalculated at toolstackhub.in/sip-calculator`
      : `Lumpsum Calculator Result:\nInvestment: ${formatINRFull(lumpsum)}\nExpected Return: ${rate}% p.a.\nTenure: ${years} years\n\nWealth Gained: ${formatINRFull(wealthGained)}\nMaturity Value: ${formatINRFull(maturity)}\n\nCalculated at toolstackhub.in/sip-calculator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Mode toggle ───────────────────────────────────── */}
      <div className="flex border-b border-surface-100">
        {[{ id: 'sip', label: '📅 SIP Calculator' }, { id: 'lumpsum', label: '💰 Lumpsum Calculator' }].map(m => (
          <button key={m.id} onClick={() => setMode(m.id)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${mode === m.id ? 'bg-brand-600 text-white' : 'bg-surface-50 text-surface-600 hover:bg-surface-100'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-100">

        {/* ── Inputs ──────────────────────────────────────── */}
        <div className="p-6 space-y-6">

          {mode === 'sip' ? (
            <>
              {/* Monthly SIP */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-surface-700">Monthly SIP Amount</label>
                  <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                    <span className="text-sm text-surface-500">₹</span>
                    <input type="number" value={monthly}
                      onChange={e => setMonthly(Math.max(100, Number(e.target.value)))}
                      className="w-24 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right" />
                  </div>
                </div>
                <input type="range" min="500" max="100000" step="500" value={monthly}
                  onChange={e => setMonthly(Number(e.target.value))}
                  className="w-full accent-brand-600" />
                <div className="flex justify-between text-[10px] text-surface-400 mt-1">
                  <span>₹500</span><span>₹1L</span>
                </div>
              </div>

              {/* Step-up */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-surface-700">Annual Step-up</label>
                  <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={stepUp} min="0" max="50" step="1"
                      onChange={e => setStepUp(Math.max(0, Math.min(50, Number(e.target.value))))}
                      className="w-12 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right" />
                    <span className="text-sm text-surface-500">%</span>
                  </div>
                </div>
                <input type="range" min="0" max="50" step="1" value={stepUp}
                  onChange={e => setStepUp(Number(e.target.value))}
                  className="w-full accent-brand-600" />
                <div className="flex justify-between text-[10px] text-surface-400 mt-1">
                  <span>0% (Fixed)</span><span>50%</span>
                </div>
                {stepUp > 0 && (
                  <div className="mt-2 text-xs text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-lg">
                    SIP increases by {stepUp}% every year. Year 2: {formatINRFull(monthly * (1 + stepUp / 100))}/mo
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Lumpsum */
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-surface-700">Lumpsum Amount</label>
                <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                  <span className="text-sm text-surface-500">₹</span>
                  <input type="number" value={lumpsum}
                    onChange={e => setLumpsum(Math.max(1000, Number(e.target.value)))}
                    className="w-28 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right" />
                </div>
              </div>
              <input type="range" min="10000" max="10000000" step="10000" value={lumpsum}
                onChange={e => setLumpsum(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-[10px] text-surface-400 mt-1">
                <span>₹10K</span><span>₹1Cr</span>
              </div>
            </div>
          )}

          {/* Expected return rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-surface-700">Expected Return (p.a.)</label>
              <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                <input type="number" value={rate} step="0.5" min="1" max="30"
                  onChange={e => setRate(Math.max(1, Math.min(30, Number(e.target.value))))}
                  className="w-16 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right" />
                <span className="text-sm text-surface-500">%</span>
              </div>
            </div>
            <input type="range" min="1" max="30" step="0.5" value={rate}
              onChange={e => setRate(Number(e.target.value))}
              className="w-full accent-brand-600" />
            <div className="flex justify-between text-[10px] text-surface-400 mt-1">
              <span>1%</span><span>30%</span>
            </div>
            {/* Quick rate chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[{ r: 8, label: 'Debt Fund' }, { r: 12, label: 'Nifty 50' }, { r: 15, label: 'Midcap' }, { r: 18, label: 'Smallcap' }].map(c => (
                <button key={c.r} onClick={() => setRate(c.r)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-full border transition-colors ${rate === c.r ? 'bg-brand-600 text-white border-brand-600' : 'bg-surface-50 text-surface-600 border-surface-200 hover:border-brand-300'}`}>
                  {c.label} {c.r}%
                </button>
              ))}
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-surface-700">Investment Period</label>
              <div className="flex items-center gap-1 bg-surface-50 border border-surface-200 rounded-lg px-3 py-1.5">
                <input type="number" value={years} min="1" max="40"
                  onChange={e => setYears(Math.max(1, Math.min(40, Number(e.target.value))))}
                  className="w-12 text-sm font-bold text-surface-900 bg-transparent focus:outline-none text-right" />
                <span className="text-sm text-surface-500">Yrs</span>
              </div>
            </div>
            <input type="range" min="1" max="40" step="1" value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full accent-brand-600" />
            <div className="flex justify-between text-[10px] text-surface-400 mt-1">
              <span>1 yr</span><span>40 yrs</span>
            </div>
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────── */}
        <div className="flex flex-col">
          {/* Result header */}
          <div className="p-6 text-center"
            style={{ background: 'linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#1e1b4b 100%)' }}>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">
              Maturity Value
            </div>
            <div className="font-display font-black text-4xl text-white tracking-tight mb-1">
              {formatINR(maturity)}
            </div>
            <div className="text-indigo-300 text-xs">in {years} year{years > 1 ? 's' : ''} at {rate}% p.a.</div>

            {/* 3 stat cards */}
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-[10px] text-indigo-300 font-semibold uppercase tracking-wider mb-1">
                  {mode === 'sip' ? 'Total Invested' : 'Invested'}
                </div>
                <div className="text-white font-bold text-sm">{formatINR(totalInvested)}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-[10px] text-indigo-300 font-semibold uppercase tracking-wider mb-1">
                  Wealth Gained
                </div>
                <div className="text-emerald-300 font-bold text-sm">{formatINR(wealthGained)}</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex rounded-full overflow-hidden h-3">
                <div className="bg-indigo-400 transition-all duration-300" style={{ width: `${investedPct}%` }} />
                <div className="bg-emerald-400 transition-all duration-300" style={{ width: `${gainsPct}%` }} />
              </div>
              <div className="flex justify-between text-[10px] mt-1.5">
                <span className="text-indigo-300 font-medium">● Invested {investedPct}%</span>
                <span className="text-emerald-300 font-medium">● Returns {gainsPct}%</span>
              </div>
            </div>

            <button onClick={share}
              className={`mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'}`}>
              {copied ? '✅ Copied!' : '📋 Share / Copy Result'}
            </button>
          </div>

          {/* Bar chart */}
          <div className="p-5 flex-1">
            <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
              Growth Projection
            </div>
            <div className="flex items-end gap-1 h-28">
              {projection.filter((_, i) => {
                if (years <= 10) return true;
                if (years <= 20) return i % 2 === 0;
                return i % 3 === 0;
              }).map((pt, i) => {
                const h  = Math.round((pt.value  / maxVal) * 100);
                const hi = Math.round((pt.invested / maxVal) * 100);
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5 group relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-900 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Yr {pt.year}: {formatINR(pt.value)}
                    </div>
                    <div className="w-full relative" style={{ height: '100px' }}>
                      <div className="absolute bottom-0 w-full bg-indigo-200 rounded-t" style={{ height: `${hi}%` }} />
                      <div className="absolute bottom-0 w-full bg-indigo-600 rounded-t opacity-80" style={{ height: `${h - hi}%`, bottom: `${hi}%` }} />
                    </div>
                    <div className="text-[9px] text-surface-400 mt-1">{pt.year}y</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-[10px] text-surface-500">
                <div className="w-3 h-2 bg-indigo-200 rounded-sm" /> Invested
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-surface-500">
                <div className="w-3 h-2 bg-indigo-600 rounded-sm" /> Returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}