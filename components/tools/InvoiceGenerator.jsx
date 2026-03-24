'use client';
import { useState, useRef, useCallback } from 'react';

const CURRENCIES = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
];

const TEMPLATES = [
  { id: 'professional', label: 'Professional', accent: '#2563eb' },
  { id: 'minimal',      label: 'Minimal',      accent: '#18181b' },
  { id: 'modern',       label: 'Modern',       accent: '#7c3aed' },
  { id: 'classic',      label: 'Classic',      accent: '#b45309' },
];

function fmt(amount, symbol) {
  return `${symbol}${Number(amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function generateInvoiceNo() {
  return `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
}

const defaultItem = () => ({ id: Date.now(), description: '', qty: 1, rate: 0 });

export default function InvoiceGenerator() {
  const printRef = useRef(null);

  // ── Invoice state ─────────────────────────────────────────
  const [currency,    setCurrency]    = useState(CURRENCIES[0]);
  const [template,    setTemplate]    = useState(TEMPLATES[0]);
  const [invoiceNo,   setInvoiceNo]   = useState(generateInvoiceNo());
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate,     setDueDate]     = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });

  const [from, setFrom] = useState({ name: '', email: '', phone: '', address: '', gstin: '' });
  const [to,   setTo]   = useState({ name: '', email: '', phone: '', address: '', gstin: '' });

  const [items,      setItems]      = useState([defaultItem()]);
  const [taxRate,    setTaxRate]    = useState(18);
  const [taxEnabled, setTaxEnabled] = useState(false);
  const [discount,   setDiscount]   = useState(0);
  const [discountType, setDiscountType] = useState('percent'); // percent | fixed
  const [notes,      setNotes]      = useState('Thank you for your business!');
  const [terms,      setTerms]      = useState('Payment due within 30 days.');

  // ── Calculations ──────────────────────────────────────────
  const subtotal = items.reduce((s, i) => s + (Number(i.qty) * Number(i.rate)), 0);
  const discountAmt = discountType === 'percent'
    ? (subtotal * Number(discount) / 100)
    : Number(discount);
  const taxableAmt  = subtotal - discountAmt;
  const taxAmt      = taxEnabled ? (taxableAmt * Number(taxRate) / 100) : 0;
  const total       = taxableAmt + taxAmt;

  // ── Item helpers ──────────────────────────────────────────
  const addItem    = () => setItems(prev => [...prev, defaultItem()]);
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const updateItem = (id, field, val) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: val } : i));

  // ── Print / Download ──────────────────────────────────────
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const accentColor = template.accent;

  return (
    <div className="space-y-6">

      {/* ── Controls bar ──────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl p-5 print:hidden">
        <div className="flex flex-wrap gap-4 items-end">

          {/* Currency */}
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Currency</label>
            <select value={currency.code}
              onChange={e => setCurrency(CURRENCIES.find(c => c.code === e.target.value))}
              className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white">
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.symbol} {c.code} — {c.name}</option>
              ))}
            </select>
          </div>

          {/* Template */}
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Template</label>
            <div className="flex gap-2">
              {TEMPLATES.map(t => (
                <button key={t.id} onClick={() => setTemplate(t)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                    template.id === t.id
                      ? 'text-white border-transparent'
                      : 'bg-white text-surface-600 border-surface-200 hover:border-surface-300'
                  }`}
                  style={template.id === t.id ? { backgroundColor: t.accent, borderColor: t.accent } : {}}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Download button */}
          <button onClick={handlePrint}
            className="ml-auto flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
            style={{ backgroundColor: accentColor }}>
            ⬇️ Download PDF
          </button>
        </div>
      </div>

      {/* ── Invoice document ──────────────────────────────── */}
      <div ref={printRef}
        className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm print:shadow-none print:border-none print:rounded-none"
        id="invoice-document">

        {/* Header bar */}
        <div className="h-2 print:h-3" style={{ backgroundColor: accentColor }} />

        <div className="p-8 sm:p-10">

          {/* ── Top row: Company + Invoice details ───────── */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-10">

            {/* From (Your company) */}
            <div className="flex-1">
              <input value={from.name} onChange={e => setFrom(p => ({...p, name: e.target.value}))}
                placeholder="Your Company Name"
                className="text-2xl font-black text-surface-900 w-full bg-transparent focus:outline-none placeholder:text-surface-300 mb-1 print:placeholder-transparent" />
              <textarea value={from.address} onChange={e => setFrom(p => ({...p, address: e.target.value}))}
                placeholder="Your address, City, State, PIN"
                rows={2}
                className="text-sm text-surface-500 w-full bg-transparent focus:outline-none resize-none placeholder:text-surface-300 print:placeholder-transparent" />
              <input value={from.email} onChange={e => setFrom(p => ({...p, email: e.target.value}))}
                placeholder="email@yourcompany.com"
                className="text-sm text-surface-500 w-full bg-transparent focus:outline-none placeholder:text-surface-300 mt-1 print:placeholder-transparent" />
              <input value={from.phone} onChange={e => setFrom(p => ({...p, phone: e.target.value}))}
                placeholder="+91 98765 43210"
                className="text-sm text-surface-500 w-full bg-transparent focus:outline-none placeholder:text-surface-300 print:placeholder-transparent" />
              <input value={from.gstin} onChange={e => setFrom(p => ({...p, gstin: e.target.value}))}
                placeholder="GSTIN: 29ABCDE1234F1Z5"
                className="text-xs text-surface-400 w-full bg-transparent focus:outline-none placeholder:text-surface-300 mt-1 print:placeholder-transparent" />
            </div>

            {/* Invoice meta */}
            <div className="sm:text-right space-y-3 shrink-0">
              <div>
                <div className="text-3xl font-black tracking-tight" style={{ color: accentColor }}>INVOICE</div>
              </div>
              <div className="space-y-1.5">
                <div className="flex sm:justify-end items-center gap-3">
                  <span className="text-xs text-surface-400 font-medium w-20 sm:text-right">Invoice #</span>
                  <input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)}
                    className="text-sm font-bold text-surface-900 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none w-36 text-center print:bg-transparent print:border-surface-100" />
                </div>
                <div className="flex sm:justify-end items-center gap-3">
                  <span className="text-xs text-surface-400 font-medium w-20 sm:text-right">Date</span>
                  <input type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)}
                    className="text-sm text-surface-700 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none w-36 print:bg-transparent print:border-surface-100" />
                </div>
                <div className="flex sm:justify-end items-center gap-3">
                  <span className="text-xs text-surface-400 font-medium w-20 sm:text-right">Due Date</span>
                  <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
                    className="text-sm text-surface-700 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none w-36 print:bg-transparent print:border-surface-100" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Bill To ───────────────────────────────────── */}
          <div className="mb-8 p-5 rounded-2xl print:rounded-none" style={{ backgroundColor: `${accentColor}10` }}>
            <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: accentColor }}>Bill To</div>
            <input value={to.name} onChange={e => setTo(p => ({...p, name: e.target.value}))}
              placeholder="Client / Company Name"
              className="text-base font-bold text-surface-900 w-full bg-transparent focus:outline-none placeholder:text-surface-400 mb-1 print:placeholder-transparent" />
            <textarea value={to.address} onChange={e => setTo(p => ({...p, address: e.target.value}))}
              placeholder="Client address, City, State, PIN"
              rows={2}
              className="text-sm text-surface-500 w-full bg-transparent focus:outline-none resize-none placeholder:text-surface-300 print:placeholder-transparent" />
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <input value={to.email} onChange={e => setTo(p => ({...p, email: e.target.value}))}
                placeholder="client@email.com"
                className="text-sm text-surface-500 flex-1 bg-transparent focus:outline-none placeholder:text-surface-300 print:placeholder-transparent" />
              <input value={to.gstin} onChange={e => setTo(p => ({...p, gstin: e.target.value}))}
                placeholder="Client GSTIN"
                className="text-xs text-surface-400 flex-1 bg-transparent focus:outline-none placeholder:text-surface-300 print:placeholder-transparent" />
            </div>
          </div>

          {/* ── Line items ────────────────────────────────── */}
          <div className="mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b-2" style={{ borderColor: accentColor }}>
                  <th className="text-left text-xs font-black uppercase tracking-wider py-2 pb-3 text-surface-600 w-1/2">Description</th>
                  <th className="text-center text-xs font-black uppercase tracking-wider py-2 pb-3 text-surface-600 w-16">Qty</th>
                  <th className="text-right text-xs font-black uppercase tracking-wider py-2 pb-3 text-surface-600 w-28">Rate</th>
                  <th className="text-right text-xs font-black uppercase tracking-wider py-2 pb-3 text-surface-600 w-28">Amount</th>
                  <th className="w-8 print:hidden" />
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {items.map((item, idx) => (
                  <tr key={item.id} className="group">
                    <td className="py-3 pr-3">
                      <input value={item.description}
                        onChange={e => updateItem(item.id, 'description', e.target.value)}
                        placeholder={`Item ${idx + 1} description`}
                        className="w-full text-sm text-surface-800 bg-transparent focus:outline-none placeholder:text-surface-300 print:placeholder-transparent" />
                    </td>
                    <td className="py-3 px-2">
                      <input type="number" min="0" value={item.qty}
                        onChange={e => updateItem(item.id, 'qty', e.target.value)}
                        className="w-full text-sm text-surface-800 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none text-center print:bg-transparent print:border-transparent" />
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-xs text-surface-400">{currency.symbol}</span>
                        <input type="number" min="0" value={item.rate}
                          onChange={e => updateItem(item.id, 'rate', e.target.value)}
                          className="w-24 text-sm text-surface-800 bg-surface-50 border border-surface-200 rounded-lg px-2 py-1 focus:outline-none text-right print:bg-transparent print:border-transparent" />
                      </div>
                    </td>
                    <td className="py-3 pl-2 text-right text-sm font-semibold text-surface-900">
                      {fmt(item.qty * item.rate, currency.symbol)}
                    </td>
                    <td className="py-3 print:hidden">
                      {items.length > 1 && (
                        <button onClick={() => removeItem(item.id)}
                          className="opacity-0 group-hover:opacity-100 text-rose-400 hover:text-rose-600 text-lg leading-none transition-opacity ml-1">
                          ×
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={addItem}
              className="mt-3 text-xs font-bold px-4 py-2 rounded-xl border-2 border-dashed transition-colors print:hidden hover:opacity-80"
              style={{ borderColor: accentColor, color: accentColor }}>
              + Add Line Item
            </button>
          </div>

          {/* ── Totals ────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-8 justify-between">

            {/* Notes + Terms */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-surface-400 mb-1.5">Notes</div>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2}
                  className="w-full text-sm text-surface-600 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 focus:outline-none resize-none print:bg-transparent print:border-surface-100" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-surface-400 mb-1.5">Terms & Conditions</div>
                <textarea value={terms} onChange={e => setTerms(e.target.value)} rows={2}
                  className="w-full text-sm text-surface-600 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2 focus:outline-none resize-none print:bg-transparent print:border-surface-100" />
              </div>
            </div>

            {/* Summary */}
            <div className="w-full sm:w-64 space-y-2">
              <div className="flex justify-between text-sm text-surface-600">
                <span>Subtotal</span>
                <span className="font-medium">{fmt(subtotal, currency.symbol)}</span>
              </div>

              {/* Discount */}
              <div className="flex justify-between items-center text-sm text-surface-600 print:hidden">
                <span>Discount</span>
                <div className="flex items-center gap-1.5">
                  <input type="number" min="0" value={discount}
                    onChange={e => setDiscount(e.target.value)}
                    className="w-16 text-right text-sm border border-surface-200 rounded-lg px-2 py-0.5 focus:outline-none" />
                  <select value={discountType} onChange={e => setDiscountType(e.target.value)}
                    className="text-xs border border-surface-200 rounded-lg px-1 py-0.5 focus:outline-none bg-white">
                    <option value="percent">%</option>
                    <option value="fixed">{currency.symbol}</option>
                  </select>
                </div>
              </div>
              {discountAmt > 0 && (
                <div className="flex justify-between text-sm text-rose-600">
                  <span>Discount</span>
                  <span>− {fmt(discountAmt, currency.symbol)}</span>
                </div>
              )}

              {/* Tax toggle */}
              <div className="flex justify-between items-center text-sm text-surface-600 print:hidden">
                <div className="flex items-center gap-2">
                  <div onClick={() => setTaxEnabled(!taxEnabled)}
                    className={`w-8 h-4 rounded-full cursor-pointer transition-colors ${taxEnabled ? 'bg-brand-600' : 'bg-surface-300'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full m-0.5 transition-transform ${taxEnabled ? 'translate-x-4' : ''}`} />
                  </div>
                  <span>GST / Tax</span>
                  {taxEnabled && (
                    <div className="flex items-center gap-1">
                      <input type="number" min="0" max="100" value={taxRate}
                        onChange={e => setTaxRate(e.target.value)}
                        className="w-12 text-right text-xs border border-surface-200 rounded-lg px-1.5 py-0.5 focus:outline-none" />
                      <span className="text-xs">%</span>
                    </div>
                  )}
                </div>
                {taxEnabled && <span>{fmt(taxAmt, currency.symbol)}</span>}
              </div>
              {taxEnabled && (
                <div className="flex justify-between text-sm text-surface-600 print:flex hidden">
                  <span>GST ({taxRate}%)</span>
                  <span>{fmt(taxAmt, currency.symbol)}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between items-center pt-3 border-t-2" style={{ borderColor: accentColor }}>
                <span className="text-base font-black text-surface-900">Total Due</span>
                <span className="text-xl font-black" style={{ color: accentColor }}>
                  {fmt(total, currency.symbol)}
                </span>
              </div>
            </div>
          </div>

          {/* ── Footer ───────────────────────────────────── */}
          <div className="mt-10 pt-6 border-t border-surface-100 text-center">
            <div className="text-xs text-surface-400">Generated with ToolStackHub Free Invoice Generator · toolstackhub.in/invoice-generator</div>
          </div>
        </div>
      </div>

      {/* ── Print styles ──────────────────────────────────── */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #invoice-document, #invoice-document * { visibility: visible; }
          #invoice-document { position: fixed; left: 0; top: 0; width: 100%; }
          .print\\:hidden { display: none !important; }
          .print\\:flex { display: flex !important; }
          input, textarea, select { border: none !important; background: transparent !important; }
        }
      `}</style>
    </div>
  );
}