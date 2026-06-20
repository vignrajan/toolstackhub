'use client';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  getBusiness, getOne, put, saveBusiness,
} from '../../lib/billing/db';
import {
  computeInvoice, inr, amountInWords, nextInvoiceNumber,
  GST_RATES, STATES, stateName,
} from '../../lib/billing/gst';

const STATUSES = ['draft', 'sent', 'paid', 'partial', 'overdue'];

const newLine = () => ({
  id: crypto.randomUUID(), name: '', hsn: '',
  qty: 1, rate: 0, discountPercent: 0, gstRate: 18,
});

const emptyParty = () => ({ name: '', gstin: '', address: '', email: '', phone: '', stateCode: '' });

export default function InvoiceBuilder({ invoiceId }) {
  const router = useRouter();
  const isEdit = Boolean(invoiceId);

  const [loaded, setLoaded] = useState(false);
  const [business, setBusiness] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  // ── Invoice fields ─────────────────────────────────────────
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return d.toISOString().slice(0, 10);
  });
  const [status, setStatus] = useState('draft');
  const [isGst, setIsGst] = useState(true);
  const [customer, setCustomer] = useState(emptyParty());
  const [items, setItems] = useState([newLine()]);
  const [extraDiscount, setExtraDiscount] = useState(0);
  const [notes, setNotes] = useState('Thank you for your business!');
  const [terms, setTerms] = useState('Payment due within 30 days.');
  const [counterUsed, setCounterUsed] = useState(null); // counter baked into a new number

  // ── Load business + (optionally) existing invoice ──────────
  useEffect(() => {
    (async () => {
      const biz = await getBusiness();
      setBusiness(biz);

      if (isEdit) {
        const inv = await getOne('invoices', invoiceId);
        if (inv) {
          setInvoiceNumber(inv.invoiceNumber || '');
          setInvoiceDate(inv.invoiceDate || invoiceDate);
          setDueDate(inv.dueDate || dueDate);
          setStatus(inv.status || 'draft');
          setIsGst(inv.isGst !== false);
          setCustomer({ ...emptyParty(), ...(inv.customer || {}) });
          setItems(inv.items?.length ? inv.items : [newLine()]);
          setExtraDiscount(inv.extraDiscount || 0);
          setNotes(inv.notes ?? '');
          setTerms(inv.terms ?? '');
        }
      } else {
        const counter = (biz?.invoiceCounter) || 1;
        setCounterUsed(counter);
        setInvoiceNumber(nextInvoiceNumber(biz?.invoicePrefix || 'INV', counter));
      }
      setLoaded(true);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceId]);

  // ── Supply type: inter-state if customer state differs from business state ──
  const interState = useMemo(() => {
    if (!isGst) return false;
    const bizState = business?.stateCode;
    return Boolean(bizState && customer.stateCode && bizState !== customer.stateCode);
  }, [isGst, business, customer.stateCode]);

  const totals = useMemo(
    () => computeInvoice(
      isGst ? items : items.map((i) => ({ ...i, gstRate: 0 })),
      { interState, extraDiscount },
    ),
    [items, isGst, interState, extraDiscount],
  );

  // ── Item helpers ───────────────────────────────────────────
  const addItem = () => setItems((p) => [...p, newLine()]);
  const removeItem = (id) => setItems((p) => (p.length > 1 ? p.filter((i) => i.id !== id) : p));
  const updateItem = (id, field, val) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, [field]: val } : i)));

  // ── Save ───────────────────────────────────────────────────
  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(''), 2500); };

  const handleSave = useCallback(async () => {
    if (!business) { router.push('/billing/settings?next=invoice'); return; }
    setSaving(true);
    try {
      const record = {
        id: invoiceId || undefined,
        invoiceNumber, invoiceDate, dueDate, status, isGst,
        interState,
        customer, items, extraDiscount,
        notes, terms,
        totals,
        business: {
          name: business.name, gstin: business.gstin, address: business.address,
          email: business.email, phone: business.phone, stateCode: business.stateCode,
          logo: business.logo,
        },
      };
      const saved = await put('invoices', record);

      // Advance the org's invoice counter only for brand-new invoices
      // that actually used the auto-generated number.
      if (!isEdit && counterUsed != null) {
        await saveBusiness({ ...business, invoiceCounter: counterUsed + 1 });
      }

      flash('✅ Invoice saved');
      if (!isEdit) router.replace(`/billing/invoices/${saved.id}`);
    } catch (e) {
      flash('❌ Could not save: ' + e.message);
    } finally {
      setSaving(false);
    }
  }, [business, invoiceId, invoiceNumber, invoiceDate, dueDate, status, isGst, interState, customer, items, extraDiscount, notes, terms, totals, isEdit, counterUsed, router]);

  if (!loaded) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  // First-run nudge if no business profile yet
  const needsProfile = !business || !business.name;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Top action bar */}
      <div className="flex items-center justify-between gap-3 print:hidden">
        <Link href="/billing/invoices" className="text-sm font-semibold text-surface-500 hover:text-surface-800">← All invoices</Link>
        <div className="flex items-center gap-2">
          <select value={status} onChange={(e) => setStatus(e.target.value)}
            className="text-sm border border-surface-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-brand-400 capitalize">
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button onClick={() => window.print()}
            className="text-sm font-bold px-4 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">
            ⬇️ PDF / Print
          </button>
          <button onClick={handleSave} disabled={saving}
            className="text-sm font-bold px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-60">
            {saving ? 'Saving…' : isEdit ? 'Update' : 'Save'}
          </button>
        </div>
      </div>

      {toast && <div className="text-sm font-semibold px-4 py-2 rounded-xl bg-surface-900 text-white print:hidden">{toast}</div>}

      {needsProfile && (
        <div className="flex items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 print:hidden">
          <span className="text-sm text-amber-800">Add your business name, GSTIN & state so they appear on every invoice.</span>
          <Link href="/billing/settings" className="text-sm font-bold text-amber-900 underline whitespace-nowrap">Set up →</Link>
        </div>
      )}

      {/* ── The invoice document ───────────────────────────── */}
      <div id="invoice-document" className="bg-white border border-surface-200 rounded-2xl overflow-hidden print:border-0 print:rounded-none">
        <div className="h-2 bg-brand-600 print:h-3" />
        <div className="p-6 sm:p-8 space-y-6">

          {/* Header: business + meta */}
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <div className="flex-1">
              <div className="text-xl font-black text-surface-900">{business?.name || 'Your Business Name'}</div>
              {business?.address && <div className="text-sm text-surface-500 whitespace-pre-line mt-1">{business.address}</div>}
              <div className="text-xs text-surface-400 mt-1 space-y-0.5">
                {business?.gstin && <div>GSTIN: {business.gstin}</div>}
                {business?.stateCode && <div>State: {stateName(business.stateCode)} ({business.stateCode})</div>}
                {business?.phone && <div>{business.phone}</div>}
                {business?.email && <div>{business.email}</div>}
              </div>
            </div>
            <div className="sm:text-right shrink-0 space-y-2">
              <div className="text-2xl font-black tracking-tight text-brand-600">
                {isGst ? 'TAX INVOICE' : 'INVOICE'}
              </div>
              <label className="flex sm:justify-end items-center gap-2 text-xs text-surface-400">
                <span>Invoice #</span>
                <input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="text-sm font-bold text-surface-900 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 w-40 text-right focus:outline-none print:border-transparent print:bg-transparent" />
              </label>
              <label className="flex sm:justify-end items-center gap-2 text-xs text-surface-400">
                <span>Date</span>
                <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}
                  className="text-sm text-surface-700 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 w-40 focus:outline-none print:border-transparent print:bg-transparent" />
              </label>
              <label className="flex sm:justify-end items-center gap-2 text-xs text-surface-400">
                <span>Due</span>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}
                  className="text-sm text-surface-700 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 w-40 focus:outline-none print:border-transparent print:bg-transparent" />
              </label>
            </div>
          </div>

          {/* GST toggle */}
          <div className="flex items-center gap-2 print:hidden">
            <button onClick={() => setIsGst((v) => !v)}
              className={`w-9 h-5 rounded-full transition-colors flex items-center ${isGst ? 'bg-brand-600' : 'bg-surface-300'}`}>
              <span className={`w-4 h-4 bg-white rounded-full mx-0.5 shadow transition-transform ${isGst ? 'translate-x-4' : ''}`} />
            </button>
            <span className="text-sm font-semibold text-surface-700">GST invoice</span>
            {isGst && (
              <span className="text-xs text-surface-400 ml-2">
                {interState ? 'Inter-state supply → IGST' : 'Intra-state supply → CGST + SGST'}
              </span>
            )}
          </div>

          {/* Bill to */}
          <div className="rounded-2xl bg-brand-50/60 p-4 print:bg-transparent print:border print:border-surface-200 print:rounded-none">
            <div className="text-xs font-black uppercase tracking-widest text-brand-700 mb-2">Bill To</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input value={customer.name} onChange={(e) => setCustomer((p) => ({ ...p, name: e.target.value }))}
                placeholder="Customer / Company name"
                className="text-sm font-bold text-surface-900 bg-white border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400 print:border-transparent print:bg-transparent print:placeholder-transparent" />
              <input value={customer.gstin} onChange={(e) => setCustomer((p) => ({ ...p, gstin: e.target.value.toUpperCase() }))}
                placeholder="Customer GSTIN (optional)"
                className="text-sm text-surface-700 bg-white border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400 print:border-transparent print:bg-transparent print:placeholder-transparent" />
              <textarea value={customer.address} onChange={(e) => setCustomer((p) => ({ ...p, address: e.target.value }))}
                placeholder="Billing address" rows={2}
                className="text-sm text-surface-600 bg-white border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400 resize-none sm:col-span-2 print:border-transparent print:bg-transparent print:placeholder-transparent" />
              <select value={customer.stateCode} onChange={(e) => setCustomer((p) => ({ ...p, stateCode: e.target.value }))}
                className="text-sm text-surface-700 bg-white border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400 print:hidden">
                <option value="">Place of supply (state)…</option>
                {STATES.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
              </select>
              <input value={customer.phone} onChange={(e) => setCustomer((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Phone (optional)"
                className="text-sm text-surface-600 bg-white border border-surface-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400 print:border-transparent print:bg-transparent print:placeholder-transparent" />
            </div>
            {customer.stateCode && (
              <div className="hidden print:block text-xs text-surface-500 mt-1">Place of supply: {stateName(customer.stateCode)} ({customer.stateCode})</div>
            )}
          </div>

          {/* Line items */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-brand-600 text-xs uppercase tracking-wide text-surface-500">
                  <th className="text-left font-bold py-2 pr-2">Item</th>
                  <th className="text-left font-bold py-2 px-2 w-20">HSN</th>
                  <th className="text-center font-bold py-2 px-2 w-16">Qty</th>
                  <th className="text-right font-bold py-2 px-2 w-24">Rate</th>
                  <th className="text-right font-bold py-2 px-2 w-16">Disc%</th>
                  {isGst && <th className="text-right font-bold py-2 px-2 w-16">GST%</th>}
                  <th className="text-right font-bold py-2 pl-2 w-28">Amount</th>
                  <th className="w-6 print:hidden" />
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {totals.lines.map((line) => (
                  <tr key={line.id} className="group">
                    <td className="py-2 pr-2">
                      <input value={line.name} onChange={(e) => updateItem(line.id, 'name', e.target.value)}
                        placeholder="Item / service description"
                        className="w-full bg-transparent focus:outline-none text-surface-800 placeholder:text-surface-300 print:placeholder-transparent" />
                    </td>
                    <td className="py-2 px-2">
                      <input value={line.hsn} onChange={(e) => updateItem(line.id, 'hsn', e.target.value)}
                        placeholder="—"
                        className="w-full bg-surface-50 border border-surface-200 rounded px-1.5 py-1 text-xs focus:outline-none print:border-transparent print:bg-transparent" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="number" min="0" value={line.qty} onChange={(e) => updateItem(line.id, 'qty', e.target.value)}
                        className="w-full bg-surface-50 border border-surface-200 rounded px-1.5 py-1 text-center focus:outline-none print:border-transparent print:bg-transparent" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="number" min="0" value={line.rate} onChange={(e) => updateItem(line.id, 'rate', e.target.value)}
                        className="w-full bg-surface-50 border border-surface-200 rounded px-1.5 py-1 text-right focus:outline-none print:border-transparent print:bg-transparent" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="number" min="0" max="100" value={line.discountPercent} onChange={(e) => updateItem(line.id, 'discountPercent', e.target.value)}
                        className="w-full bg-surface-50 border border-surface-200 rounded px-1.5 py-1 text-right focus:outline-none print:border-transparent print:bg-transparent" />
                    </td>
                    {isGst && (
                      <td className="py-2 px-2">
                        <select value={line.gstRate} onChange={(e) => updateItem(line.id, 'gstRate', e.target.value)}
                          className="w-full bg-surface-50 border border-surface-200 rounded px-1 py-1 text-right focus:outline-none print:border-transparent print:bg-transparent">
                          {GST_RATES.map((r) => <option key={r} value={r}>{r}%</option>)}
                        </select>
                      </td>
                    )}
                    <td className="py-2 pl-2 text-right font-semibold text-surface-900">{inr(line.computed.total)}</td>
                    <td className="py-2 print:hidden">
                      {items.length > 1 && (
                        <button onClick={() => removeItem(line.id)}
                          className="opacity-0 group-hover:opacity-100 text-rose-400 hover:text-rose-600 text-lg leading-none">×</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={addItem}
            className="text-xs font-bold px-4 py-2 rounded-xl border-2 border-dashed border-brand-300 text-brand-600 hover:bg-brand-50 print:hidden">
            + Add Line Item
          </button>

          {/* Totals + notes */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between">
            <div className="flex-1 space-y-3">
              <div>
                <div className="text-xs font-black uppercase tracking-wide text-surface-400 mb-1">Notes</div>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2}
                  className="w-full text-sm text-surface-600 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 resize-none focus:outline-none print:border-transparent print:bg-transparent" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wide text-surface-400 mb-1">Terms</div>
                <textarea value={terms} onChange={(e) => setTerms(e.target.value)} rows={2}
                  className="w-full text-sm text-surface-600 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 resize-none focus:outline-none print:border-transparent print:bg-transparent" />
              </div>
            </div>

            <div className="w-full sm:w-72 space-y-2 text-sm">
              <Row label="Subtotal" value={inr(totals.subtotal)} />
              {totals.lineDiscount > 0 && <Row label="Item discounts" value={`− ${inr(totals.lineDiscount)}`} rose />}
              <div className="flex justify-between items-center text-surface-600 print:hidden">
                <span>Extra discount</span>
                <input type="number" min="0" value={extraDiscount} onChange={(e) => setExtraDiscount(e.target.value)}
                  className="w-24 text-right border border-surface-200 rounded-lg px-2 py-1 focus:outline-none" />
              </div>
              {totals.extraDiscount > 0 && <Row label="Extra discount" value={`− ${inr(totals.extraDiscount)}`} rose className="hidden print:flex" />}
              <Row label="Taxable value" value={inr(totals.taxable)} />
              {isGst && !interState && totals.cgst > 0 && (
                <>
                  <Row label="CGST" value={inr(totals.cgst)} />
                  <Row label="SGST" value={inr(totals.sgst)} />
                </>
              )}
              {isGst && interState && totals.igst > 0 && <Row label="IGST" value={inr(totals.igst)} />}
              {totals.roundOff !== 0 && <Row label="Round off" value={inr(totals.roundOff)} />}
              <div className="flex justify-between items-center pt-2 border-t-2 border-brand-600">
                <span className="text-base font-black text-surface-900">Total</span>
                <span className="text-xl font-black text-brand-600">{inr(totals.total)}</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-surface-500 border-t border-surface-100 pt-3">
            <span className="font-semibold text-surface-600">In words:</span> {amountInWords(totals.total)}
          </div>

          <div className="text-center text-xs text-surface-400 pt-2">
            Generated with ToolStackHub Billing Suite · toolstackhub.in/billing
          </div>
        </div>
      </div>

      {/* Print isolation */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #invoice-document, #invoice-document * { visibility: visible; }
          #invoice-document { position: fixed; left: 0; top: 0; width: 100%; }
          .print\\:hidden { display: none !important; }
          input, textarea, select { border: none !important; background: transparent !important; -webkit-appearance: none; appearance: none; }
        }
      `}</style>
    </div>
  );
}

function Row({ label, value, rose, className = '' }) {
  return (
    <div className={`flex justify-between ${rose ? 'text-rose-600' : 'text-surface-600'} ${className}`}>
      <span>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
