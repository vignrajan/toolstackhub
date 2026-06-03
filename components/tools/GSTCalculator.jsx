'use client';
import { useState } from 'react';

const GST_RATES = [3, 5, 12, 18, 28];

function fmt(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 2,
  }).format(n);
}

export default function GSTCalculator({ prefill = {} }) {
  const [amount,    setAmount]    = useState(prefill.amount ?? '');
  const [rate,      setRate]      = useState(prefill.rate ?? 18);
  const [mode,      setMode]      = useState(prefill.mode ?? 'exclusive'); // exclusive | inclusive
  const [txnType,   setTxnType]   = useState(prefill.txnType ?? 'intra');  // intra | inter
  const [copied,    setCopied]    = useState(false);

  const val = parseFloat(amount) || 0;

  // ── Core calculation ──────────────────────────────────────
  let baseAmount, gstAmount, totalAmount;
  if (mode === 'exclusive') {
    baseAmount  = val;
    gstAmount   = val * rate / 100;
    totalAmount = val + gstAmount;
  } else {
    totalAmount = val;
    baseAmount  = val / (1 + rate / 100);
    gstAmount   = totalAmount - baseAmount;
  }

  const half        = gstAmount / 2;
  const isIntra     = txnType === 'intra';
  const cgst        = isIntra ? half : 0;
  const sgst        = isIntra ? half : 0;
  const igst        = isIntra ? 0 : gstAmount;

  // ── Share ─────────────────────────────────────────────────
  const share = () => {
    const text = [
      `GST Calculator Result`,
      `━━━━━━━━━━━━━━━━━━`,
      `${mode === 'exclusive' ? 'Original Amount' : 'Total (Incl. GST)'}: ${fmt(val)}`,
      `GST Rate: ${rate}%`,
      `Transaction: ${isIntra ? 'Intra-State' : 'Inter-State'}`,
      ``,
      `Base Amount: ${fmt(baseAmount)}`,
      isIntra ? `CGST (${rate / 2}%): ${fmt(cgst)}` : `IGST (${rate}%): ${fmt(igst)}`,
      isIntra ? `SGST (${rate / 2}%): ${fmt(sgst)}` : '',
      `Total GST: ${fmt(gstAmount)}`,
      `━━━━━━━━━━━━━━━━━━`,
      `Total Amount: ${fmt(totalAmount)}`,
      ``,
      `Calculated at toolstackhub.in/gst-calculator`,
    ].filter(Boolean).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasValue = val > 0;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Mode toggle ───────────────────────────────────── */}
      <div className="flex border-b border-surface-100">
        {[
          { id: 'exclusive', label: 'Add GST',    sub: 'GST on top of amount'   },
          { id: 'inclusive', label: 'Remove GST', sub: 'Extract GST from total' },
        ].map(m => (
          <button key={m.id} onClick={() => setMode(m.id)}
            className={`flex-1 py-3.5 px-4 text-left transition-colors border-b-2 ${
              mode === m.id
                ? 'border-brand-600 bg-brand-50'
                : 'border-transparent bg-white hover:bg-surface-50'
            }`}>
            <div className={`text-sm font-bold ${mode === m.id ? 'text-brand-700' : 'text-surface-700'}`}>{m.label}</div>
            <div className="text-[10px] text-surface-400 mt-0.5">{m.sub}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-100">

        {/* ── Inputs ──────────────────────────────────────── */}
        <div className="p-6 space-y-6">

          {/* Amount */}
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">
              {mode === 'exclusive' ? 'Amount (Excluding GST)' : 'Amount (Including GST)'}
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

          {/* GST Rate */}
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">GST Rate</label>
            <div className="flex flex-wrap gap-2">
              {GST_RATES.map(r => (
                <button key={r} onClick={() => setRate(r)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-colors ${
                    rate === r
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'
                  }`}>
                  {r}%
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-surface-500">Custom:</span>
              <input
                type="number" min="0" max="100" value={rate}
                onChange={e => setRate(Math.max(0, Math.min(100, Number(e.target.value))))}
                className="w-20 text-sm font-bold text-surface-900 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none focus:border-brand-400 text-center"
              />
              <span className="text-xs text-surface-500">%</span>
            </div>
          </div>

          {/* Transaction type */}
          <div>
            <label className="text-sm font-semibold text-surface-700 block mb-2">Transaction Type</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'intra', label: '🏙️ Intra-State',  sub: 'CGST + SGST' },
                { id: 'inter', label: '🌏 Inter-State',   sub: 'IGST only'   },
              ].map(t => (
                <button key={t.id} onClick={() => setTxnType(t.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-colors ${
                    txnType === t.id
                      ? 'border-brand-600 bg-brand-50'
                      : 'border-surface-200 bg-white hover:border-brand-200'
                  }`}>
                  <div className={`text-sm font-bold ${txnType === t.id ? 'text-brand-700' : 'text-surface-700'}`}>{t.label}</div>
                  <div className="text-[10px] text-surface-400 mt-0.5">{t.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="p-6 flex-1"
            style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)' }}>

            {hasValue ? (
              <>
                {/* Main result */}
                <div className="text-center mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">
                    {mode === 'exclusive' ? 'Total Amount Payable' : 'Base Amount (Ex-GST)'}
                  </div>
                  <div className="font-display font-black text-4xl text-white tracking-tight">
                    {fmt(mode === 'exclusive' ? totalAmount : baseAmount)}
                  </div>
                </div>

                {/* Breakdown cards */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">Base Amount</span>
                    <span className="text-sm font-bold text-white">{fmt(baseAmount)}</span>
                  </div>

                  {isIntra ? (
                    <>
                      <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                        <span className="text-sm text-indigo-200">CGST ({rate / 2}%)</span>
                        <span className="text-sm font-bold text-amber-300">{fmt(cgst)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                        <span className="text-sm text-indigo-200">SGST ({rate / 2}%)</span>
                        <span className="text-sm font-bold text-amber-300">{fmt(sgst)}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                      <span className="text-sm text-indigo-200">IGST ({rate}%)</span>
                      <span className="text-sm font-bold text-amber-300">{fmt(igst)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-2.5 px-4 bg-white/10 rounded-xl">
                    <span className="text-sm text-indigo-200">Total GST</span>
                    <span className="text-sm font-bold text-rose-300">{fmt(gstAmount)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 rounded-xl border border-white/20">
                    <span className="text-sm font-bold text-white">Total Amount</span>
                    <span className="text-base font-black text-emerald-300">{fmt(totalAmount)}</span>
                  </div>
                </div>

                {/* GST % of total */}
                <div className="mb-5">
                  <div className="flex justify-between text-[10px] text-indigo-300 mb-1.5">
                    <span>Base {Math.round((baseAmount / totalAmount) * 100)}%</span>
                    <span>GST {Math.round((gstAmount / totalAmount) * 100)}%</span>
                  </div>
                  <div className="flex rounded-full overflow-hidden h-2">
                    <div className="bg-indigo-400 transition-all" style={{ width: `${(baseAmount / totalAmount) * 100}%` }} />
                    <div className="bg-amber-400 transition-all" style={{ width: `${(gstAmount / totalAmount) * 100}%` }} />
                  </div>
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
                  <div className="text-indigo-300 text-sm">Enter an amount to see GST breakdown</div>
                </div>
              </div>
            )}
          </div>

          {/* GST rate guide */}
          <div className="p-4 border-t border-surface-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-surface-400 mb-2">GST Rate Reference</div>
            <div className="space-y-1">
              {[
                { rate: '0%',  items: 'Essential food, healthcare, education'    },
                { rate: '3%',  items: 'Gold, silver, precious stones'            },
                { rate: '5%',  items: 'Restaurants, economy hotels, transport'   },
                { rate: '12%', items: 'Processed food, business hotels, books'   },
                { rate: '18%', items: 'IT services, telecom, most services'      },
                { rate: '28%', items: 'Luxury cars, tobacco, cement, appliances' },
              ].map(r => (
                <div key={r.rate} className="flex items-center gap-2 text-xs">
                  <span className={`font-black w-7 ${
                    rate === parseInt(r.rate) ? 'text-brand-700' : 'text-surface-500'
                  }`}>{r.rate}</span>
                  <span className="text-surface-500">{r.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}