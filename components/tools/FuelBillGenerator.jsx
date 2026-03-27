'use client';
import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';

// ── Helpers ───────────────────────────────────────────────────
function today() {
  return new Date().toISOString().split('T')[0];
}
function billNo() {
  return `FB-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 90000) + 10000)}`;
}
function fmtINR(n) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(n || 0);
}
function fmtDate(d) {
  if (!d) return '';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

const FUEL_RATES = { petrol: 94.72, diesel: 87.62, cng: 76.59, ev: 12.0 };
const GST_RATE   = 0.18;

// ── Bill Preview (the printable invoice) ─────────────────────
function BillPreview({ bill, printRef }) {
  const { qty, pricePerLitre, gstEnabled } = bill;
  const subtotal = (qty || 0) * (pricePerLitre || 0);
  const gstAmt   = gstEnabled ? subtotal * GST_RATE : 0;
  const total    = subtotal + gstAmt;

  return (
    <div
      ref={printRef}
      id="fuel-bill-preview"
      className="bg-white text-surface-900 rounded-2xl border border-surface-200 overflow-hidden shadow-sm"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="px-7 py-6 border-b border-surface-100"
        style={{ background: 'linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)' }}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-white font-black text-xl leading-tight">
              {bill.pumpName || 'Petrol Pump Name'}
            </div>
            <div className="text-blue-200 text-sm mt-0.5">{bill.location || 'Location, State'}</div>
            {bill.gstin && <div className="text-blue-300 text-xs mt-1">GSTIN: {bill.gstin}</div>}
          </div>
          <div className="text-right">
            <div className="text-blue-100 text-xs uppercase tracking-wider">Fuel Bill</div>
            <div className="text-white font-bold text-lg">{bill.billNo}</div>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-3 gap-px bg-surface-100 text-sm">
        {[
          { label: 'Date',       value: fmtDate(bill.date) || '—'       },
          { label: 'Vehicle No', value: bill.vehicleNo  || '—'           },
          { label: 'Fuel Type',  value: bill.fuelType?.toUpperCase() || '—' },
        ].map(m => (
          <div key={m.label} className="bg-white px-5 py-3">
            <div className="text-[10px] text-surface-400 uppercase tracking-wider">{m.label}</div>
            <div className="font-semibold text-surface-800 mt-0.5">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Items table */}
      <div className="px-7 py-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-surface-200">
              <th className="text-left py-2 font-semibold text-surface-500 text-xs uppercase tracking-wider">Description</th>
              <th className="text-right py-2 font-semibold text-surface-500 text-xs uppercase tracking-wider">Qty (L)</th>
              <th className="text-right py-2 font-semibold text-surface-500 text-xs uppercase tracking-wider">Rate/L</th>
              <th className="text-right py-2 font-semibold text-surface-500 text-xs uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-surface-100">
              <td className="py-3 font-medium text-surface-800">{bill.fuelType?.charAt(0).toUpperCase() + bill.fuelType?.slice(1) || 'Fuel'}</td>
              <td className="py-3 text-right text-surface-700">{bill.qty ? Number(bill.qty).toFixed(2) : '—'}</td>
              <td className="py-3 text-right text-surface-700">{bill.pricePerLitre ? fmtINR(bill.pricePerLitre) : '—'}</td>
              <td className="py-3 text-right font-semibold text-surface-900">{fmtINR(subtotal)}</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-sm text-surface-500">
            <span>Subtotal</span><span>{fmtINR(subtotal)}</span>
          </div>
          {gstEnabled && (
            <div className="flex justify-between text-sm text-surface-500">
              <span>GST (18%)</span><span>{fmtINR(gstAmt)}</span>
            </div>
          )}
          <div className="flex justify-between text-base font-black text-surface-900 border-t-2 border-surface-900 pt-2 mt-2">
            <span>Total Payable</span>
            <span className="text-blue-700">{fmtINR(total)}</span>
          </div>
        </div>

        {/* Notes */}
        {bill.notes && (
          <div className="mt-5 p-3 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-600">
            <strong>Notes:</strong> {bill.notes}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-surface-100 flex items-center justify-between">
          <div className="text-xs text-surface-400">
            {bill.cashier && <span>Cashier: <strong>{bill.cashier}</strong></span>}
          </div>
          <div className="text-[10px] text-surface-300">Generated via toolstackhub.in</div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function FuelBillGenerator({ prefill = {} }) {
  const printRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [bill, setBill] = useState({
    pumpName:     prefill.pumpName     || '',
    location:     prefill.location     || '',
    gstin:        prefill.gstin        || '',
    billNo:       billNo(),
    date:         today(),
    vehicleNo:    prefill.vehicleNo    || '',
    fuelType:     prefill.fuelType     || 'petrol',
    qty:          prefill.qty          || '',
    pricePerLitre:prefill.pricePerLitre|| FUEL_RATES['petrol'],
    gstEnabled:   prefill.gstEnabled   ?? false,
    notes:        prefill.notes        || '',
    cashier:      prefill.cashier      || '',
  });

  const set = (k, v) => setBill(p => ({ ...p, [k]: v }));

  const subtotal = (bill.qty || 0) * (bill.pricePerLitre || 0);
  const gstAmt   = bill.gstEnabled ? subtotal * GST_RATE : 0;
  const total    = subtotal + gstAmt;

  // WhatsApp share
  const shareViaWhatsApp = () => {
    const params = new URLSearchParams({
      pumpName:      bill.pumpName,
      location:      bill.location,
      billNo:        bill.billNo,
      date:          bill.date,
      vehicleNo:     bill.vehicleNo,
      fuelType:      bill.fuelType,
      qty:           bill.qty,
      pricePerLitre: bill.pricePerLitre,
      gstEnabled:    bill.gstEnabled,
      notes:         bill.notes,
    });
    const shareUrl = `${window.location.origin}/fuel-bill-generator?${params.toString()}`;
    const msg = encodeURIComponent(
      `🛢️ *Fuel Bill*\n\n📍 ${bill.pumpName || 'Pump'}, ${bill.location}\n📅 ${fmtDate(bill.date)}\n⛽ ${bill.fuelType?.toUpperCase()} — ${bill.qty}L × ${fmtINR(bill.pricePerLitre)}/L\n💰 *Total: ${fmtINR(total)}*\n\n🔗 View Bill: ${shareUrl}\n\n_Generated via ToolStackHub_`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  const copyLink = () => {
    const params = new URLSearchParams({
      pumpName: bill.pumpName, location: bill.location, billNo: bill.billNo,
      date: bill.date, vehicleNo: bill.vehicleNo, fuelType: bill.fuelType,
      qty: bill.qty, pricePerLitre: bill.pricePerLitre, gstEnabled: bill.gstEnabled,
    });
    navigator.clipboard.writeText(`${window.location.origin}/fuel-bill-generator?${params.toString()}`);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const printBill = () => window.print();

  const newBill = () => setBill(p => ({ ...p, billNo: billNo(), date: today() }));

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Inputs ──────────────────────────────────────── */}
        <div className="bg-white border border-surface-200 rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-lg text-surface-900">Bill Details</h2>
            <button onClick={newBill}
              className="text-xs font-semibold text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg transition-colors">
              🔄 New Bill
            </button>
          </div>

          {/* Pump details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">Pump Information</div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Petrol Pump Name *</label>
                <input value={bill.pumpName} onChange={e => set('pumpName', e.target.value)}
                  placeholder="e.g. HP Petrol Pump, Indian Oil Station"
                  className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-surface-600 block mb-1.5">Location / City</label>
                  <input value={bill.location} onChange={e => set('location', e.target.value)}
                    placeholder="Mumbai, Maharashtra"
                    className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-surface-600 block mb-1.5">GSTIN (Optional)</label>
                  <input value={bill.gstin} onChange={e => set('gstin', e.target.value)}
                    placeholder="29ABCDE1234F1Z5"
                    className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Bill meta */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">Bill Information</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Bill Number</label>
                <input value={bill.billNo} onChange={e => set('billNo', e.target.value)}
                  className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50 font-mono" />
              </div>
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Date</label>
                <input type="date" value={bill.date} onChange={e => set('date', e.target.value)}
                  className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
              </div>
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Vehicle Number</label>
                <input value={bill.vehicleNo} onChange={e => set('vehicleNo', e.target.value.toUpperCase())}
                  placeholder="MH01AB1234"
                  className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50 font-mono tracking-wider" />
              </div>
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Cashier Name</label>
                <input value={bill.cashier} onChange={e => set('cashier', e.target.value)}
                  placeholder="Attendant name"
                  className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
              </div>
            </div>
          </div>

          {/* Fuel details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">Fuel Details</div>
            <div className="space-y-3">
              {/* Fuel type */}
              <div>
                <label className="text-xs font-semibold text-surface-600 block mb-1.5">Fuel Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'petrol', emoji: '⛽', label: 'Petrol' },
                    { id: 'diesel', emoji: '🛢️', label: 'Diesel' },
                    { id: 'cng',    emoji: '💨', label: 'CNG'    },
                    { id: 'ev',     emoji: '⚡', label: 'EV'     },
                  ].map(f => (
                    <button key={f.id}
                      onClick={() => { set('fuelType', f.id); set('pricePerLitre', FUEL_RATES[f.id]); }}
                      className={`py-2.5 rounded-xl border-2 text-center transition-colors ${bill.fuelType === f.id ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-surface-200 hover:border-brand-200 text-surface-600'}`}>
                      <div className="text-lg">{f.emoji}</div>
                      <div className="text-[10px] font-bold mt-0.5">{f.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-surface-600 block mb-1.5">Quantity (Litres)</label>
                  <input type="number" min="0" step="0.01" value={bill.qty}
                    onChange={e => set('qty', e.target.value)}
                    placeholder="e.g. 10.00"
                    className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-surface-600 block mb-1.5">Price per Litre (₹)</label>
                  <input type="number" min="0" step="0.01" value={bill.pricePerLitre}
                    onChange={e => set('pricePerLitre', e.target.value)}
                    className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
                </div>
              </div>

              {/* GST toggle */}
              <div className="flex items-center justify-between p-3 bg-surface-50 border border-surface-200 rounded-xl">
                <div>
                  <div className="text-sm font-semibold text-surface-800">Include GST (18%)</div>
                  <div className="text-xs text-surface-500">Required for commercial/business reimbursement</div>
                </div>
                <button onClick={() => set('gstEnabled', !bill.gstEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${bill.gstEnabled ? 'bg-brand-600' : 'bg-surface-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${bill.gstEnabled ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Notes (Optional)</label>
            <textarea value={bill.notes} onChange={e => set('notes', e.target.value)} rows={2}
              placeholder="e.g. Official vehicle, reimbursement claim ref. #XYZ"
              className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50 resize-none" />
          </div>

          {/* Total display */}
          <div className="rounded-2xl p-5 text-center"
            style={{ background: 'linear-gradient(135deg,#1e3a5f,#2563eb)' }}>
            <div className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">Total Amount</div>
            <div className="text-4xl font-black text-white">{fmtINR(total)}</div>
            {bill.gstEnabled && (
              <div className="text-blue-300 text-xs mt-1">incl. GST {fmtINR(gstAmt)}</div>
            )}
          </div>
        </div>

        {/* ── Preview ─────────────────────────────────────── */}
        <div className="space-y-4">
          <BillPreview bill={bill} printRef={printRef} />

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button onClick={printBill}
              className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm py-3 rounded-xl transition-colors">
              ⬇️ Download / Print
            </button>
            <button onClick={shareViaWhatsApp}
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.137 1.544 5.873L0 24l6.335-1.52A11.927 11.927 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.645-.49-5.17-1.348l-.37-.22-3.763.902.938-3.667-.241-.377A9.954 9.954 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Share on WhatsApp
            </button>
          </div>
          <button onClick={copyLink}
            className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl border transition-colors ${copied ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-surface-700 border-surface-200 hover:border-brand-300'}`}>
            {copied ? '✅ Link Copied!' : '🔗 Copy Shareable Link'}
          </button>
        </div>
      </div>

      {/* Print CSS */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #fuel-bill-preview { display: block !important; position: fixed; top: 0; left: 0; width: 100%; }
          #fuel-bill-preview * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}