'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { getAll, getBusiness } from '../../../lib/billing/db';
import { inr } from '../../../lib/billing/gst';
import { summarizeOrders, localDay } from '../../../lib/billing/reports';

const PRESETS = [
  { id: 'today', label: 'Today' },
  { id: 'week',  label: 'Last 7 days' },
  { id: 'month', label: 'This month' },
  { id: 'custom', label: 'Custom' },
];

function presetRange(id) {
  const today = localDay(new Date());
  if (id === 'today') return { from: today, to: today };
  if (id === 'week') {
    const d = new Date(); d.setDate(d.getDate() - 6);
    return { from: localDay(d), to: today };
  }
  if (id === 'month') {
    const d = new Date(); d.setDate(1);
    return { from: localDay(d), to: today };
  }
  return { from: today, to: today };
}

export default function ZReport() {
  const [orders, setOrders] = useState(null);
  const [business, setBusiness] = useState(null);
  const [preset, setPreset] = useState('today');
  const [range, setRange] = useState(presetRange('today'));

  useEffect(() => {
    Promise.all([getAll('posOrders'), getBusiness()]).then(([o, b]) => { setOrders(o); setBusiness(b); });
  }, []);

  function choosePreset(id) {
    setPreset(id);
    if (id !== 'custom') setRange(presetRange(id));
  }

  const summary = useMemo(
    () => (orders ? summarizeOrders(orders, range) : null),
    [orders, range],
  );

  if (orders === null) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  const rangeLabel = range.from === range.to ? range.from : `${range.from} → ${range.to}`;

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="flex items-center justify-between gap-3 print:hidden">
        <div>
          <h1 className="text-2xl font-black text-surface-900">Z-Report</h1>
          <p className="text-sm text-surface-500 mt-0.5">Day-end sales summary &amp; cash reconciliation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/billing/pos" className="text-sm font-semibold text-surface-500 hover:text-surface-800">← Tables</Link>
          <button onClick={() => window.print()} className="text-sm font-bold px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white">⬇️ Print</button>
        </div>
      </div>

      {/* Date filter */}
      <div className="flex flex-wrap items-center gap-2 print:hidden">
        {PRESETS.map((p) => (
          <button key={p.id} onClick={() => choosePreset(p.id)}
            className={`text-sm font-semibold px-3.5 py-2 rounded-xl transition-colors ${
              preset === p.id ? 'bg-brand-600 text-white' : 'bg-surface-50 text-surface-600 hover:bg-surface-100'
            }`}>
            {p.label}
          </button>
        ))}
        {preset === 'custom' && (
          <div className="flex items-center gap-2 ml-1">
            <input type="date" value={range.from} onChange={(e) => setRange((r) => ({ ...r, from: e.target.value }))}
              className="text-sm border border-surface-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-brand-400" />
            <span className="text-surface-400">→</span>
            <input type="date" value={range.to} onChange={(e) => setRange((r) => ({ ...r, to: e.target.value }))}
              className="text-sm border border-surface-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-brand-400" />
          </div>
        )}
      </div>

      {/* Printable report */}
      <div id="z-report" className="bg-white border border-surface-200 rounded-2xl p-6 space-y-6">
        <div className="text-center border-b border-surface-100 pb-4">
          <div className="text-lg font-black text-surface-900">{business?.name || 'Restaurant'}</div>
          <div className="text-sm font-bold text-surface-600 mt-0.5">Z-REPORT · {rangeLabel}</div>
          {business?.gstin && <div className="text-xs text-surface-400">GSTIN: {business.gstin}</div>}
          <div className="text-xs text-surface-400 mt-1">Generated {new Date().toLocaleString('en-IN')}</div>
        </div>

        {summary.bills === 0 ? (
          <div className="text-center py-10 text-surface-400 text-sm">No settled bills in this period.</div>
        ) : (
          <>
            {/* KPI grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ['Gross Sales', inr(summary.gross), 'text-surface-900'],
                ['Bills', summary.bills, 'text-surface-900'],
                ['Covers', summary.covers, 'text-surface-900'],
                ['Avg / Bill', inr(summary.avgBill), 'text-surface-900'],
              ].map(([label, val, color]) => (
                <div key={label} className="rounded-xl bg-surface-50 p-3 text-center">
                  <div className="text-xs font-semibold text-surface-400 uppercase tracking-wide">{label}</div>
                  <div className={`text-lg font-black mt-1 ${color}`}>{val}</div>
                </div>
              ))}
            </div>

            {/* Sales breakdown */}
            <Section title="Sales Breakdown">
              <Row label="Net sales (food value)" value={inr(summary.netSales)} />
              {summary.serviceCharge > 0 && <Row label="Service charge" value={inr(summary.serviceCharge)} />}
              {summary.discount > 0 && <Row label="Discounts given" value={`− ${inr(summary.discount)}`} rose />}
              <Row label="CGST collected" value={inr(summary.cgst)} />
              <Row label="SGST collected" value={inr(summary.sgst)} />
              <Row label="Total GST collected" value={inr(summary.tax)} bold />
              {summary.roundOff !== 0 && <Row label="Round off" value={inr(summary.roundOff)} />}
              <Row label="Gross sales" value={inr(summary.gross)} bold border />
            </Section>

            {/* Payment split — the cash reconciliation line */}
            <Section title="Payment Collection">
              {Object.entries(summary.byPayment).map(([mode, amt]) => (
                <Row key={mode} label={<span className="capitalize">{mode}</span>} value={inr(amt)} />
              ))}
              <Row label="Total collected" value={inr(summary.gross)} bold border />
            </Section>

            {/* Order types */}
            <Section title="Order Types">
              {Object.entries(summary.byType).map(([type, d]) => (
                <Row key={type} label={<span className="capitalize">{type} ({d.count})</span>} value={inr(d.amount)} />
              ))}
            </Section>

            {/* Top sellers */}
            <Section title="Top Items">
              <div className="text-xs">
                <div className="flex justify-between font-bold text-surface-400 uppercase tracking-wide pb-1">
                  <span>Item</span><span>Qty · Value</span>
                </div>
                {summary.topItems.slice(0, 15).map((it) => (
                  <div key={it.name} className="flex justify-between py-1 text-surface-700">
                    <span>{it.name}</span>
                    <span className="font-semibold">{it.qty} · {inr(it.value)}</span>
                  </div>
                ))}
              </div>
            </Section>

            <div className="text-center text-xs text-surface-400 pt-2 border-t border-surface-100">
              ToolStackHub Billing Suite · End of report
            </div>
          </>
        )}
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #z-report, #z-report * { visibility: visible; }
          #z-report { position: absolute; left: 0; top: 0; width: 100%; border: none; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <div className="text-xs font-black uppercase tracking-widest text-surface-400 mb-2">{title}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, value, bold, rose, border }) {
  return (
    <div className={`flex justify-between text-sm ${border ? 'pt-1.5 mt-1 border-t border-surface-200' : ''} ${
      rose ? 'text-rose-600' : bold ? 'text-surface-900 font-black' : 'text-surface-600'
    }`}>
      <span>{label}</span>
      <span className={bold ? 'font-black' : 'font-semibold'}>{value}</span>
    </div>
  );
}
