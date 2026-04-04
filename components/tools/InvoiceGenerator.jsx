'use client';
import { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';

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
  const [currency,     setCurrency]     = useState(CURRENCIES[0]);
  const [template,     setTemplate]     = useState(TEMPLATES[0]);
  const [invoiceNo,    setInvoiceNo]    = useState(generateInvoiceNo());
  const [invoiceDate,  setInvoiceDate]  = useState(new Date().toISOString().split('T')[0]);
  const [dueDate,      setDueDate]      = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });

  const [from, setFrom] = useState({ name: '', email: '', phone: '', address: '', gstin: '' });
  const [to,   setTo]   = useState({ name: '', email: '', phone: '', address: '', gstin: '' });

  const [items,        setItems]        = useState([defaultItem()]);
  const [taxRate,      setTaxRate]      = useState(18);
  const [taxEnabled,   setTaxEnabled]   = useState(false);
  const [discount,     setDiscount]     = useState(0);
  const [discountType, setDiscountType] = useState('percent');
  const [notes,        setNotes]        = useState('Thank you for your business!');
  const [terms,        setTerms]        = useState('Payment due within 30 days.');

  // ── Bank details state ────────────────────────────────────
  const [bankEnabled, setBankEnabled] = useState(false);
  const [bank, setBank] = useState({
    accountName: '',
    accountNumber: '',
    ifsc: '',
    bankName: '',
  });

  // ── WhatsApp share state ──────────────────────────────────
  const [whatsappNo,  setWhatsappNo]  = useState('');
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [sharing,     setSharing]     = useState(false); // loading state
  const [shareStatus, setShareStatus] = useState('');    // feedback message

  // ── Calculations ──────────────────────────────────────────
  const subtotal    = items.reduce((s, i) => s + (Number(i.qty) * Number(i.rate)), 0);
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

  // ── WhatsApp PDF share ────────────────────────────────────
  const handleWhatsAppShare = useCallback(async () => {
    setSharing(true);
    setShareStatus('Generating PDF…');

    try {
      // Dynamically import heavy libs so they don't bloat initial bundle
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF }   = await import('jspdf');

      const el = document.getElementById('invoice-document');
      if (!el) throw new Error('Invoice element not found');

      // Capture invoice as high-res canvas
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf     = new jsPDF({
        orientation: 'portrait',
        unit:        'mm',
        format:      'a4',
      });

      const pdfW  = pdf.internal.pageSize.getWidth();
      const pdfH  = (canvas.height * pdfW) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH);

      const fileName = `Invoice-${invoiceNo || 'draft'}.pdf`;

      // ── Try Web Share API (works on mobile Chrome/Safari) ──
      const canShare = typeof navigator.share === 'function' &&
                       typeof navigator.canShare === 'function';

      if (canShare) {
        const blob = pdf.output('blob');
        const file = new File([blob], fileName, { type: 'application/pdf' });

        if (navigator.canShare({ files: [file] })) {
          setShareStatus('Opening share sheet…');
          await navigator.share({
            files: [file],
            title: `Invoice ${invoiceNo}`,
            text:  `Invoice ${invoiceNo} from ${from.name || 'ToolStackHub'}`,
          });
          setShareStatus('✅ Shared successfully!');
          setTimeout(() => setShareStatus(''), 3000);
          setSharing(false);
          return;
        }
      }

      // ── Fallback: download PDF + open WhatsApp ─────────────
      // Download the PDF
      pdf.save(fileName);

      setShareStatus('PDF downloaded! Opening WhatsApp…');
      await new Promise(r => setTimeout(r, 800));

      // Open WhatsApp with a note to attach the downloaded PDF
      const phone   = whatsappNo.replace(/[^0-9]/g, '');
      const message = encodeURIComponent(
        `Hi, please find attached Invoice *${invoiceNo}* from *${from.name || 'ToolStackHub'}*.\n` +
        `Total Due: *${fmt(total, currency.symbol)}*\n\n` +
        `_(PDF has been saved to your device — please attach it to this message)_`
      );
      const waUrl = phone
        ? `https://wa.me/${phone}?text=${message}`
        : `https://wa.me/?text=${message}`;

      window.open(waUrl, '_blank');
      setShareStatus('✅ PDF saved — attach it in WhatsApp!');
      setTimeout(() => setShareStatus(''), 4000);

    } catch (err) {
      console.error('WhatsApp PDF share error:', err);
      setShareStatus('❌ Error generating PDF. Try Download PDF instead.');
      setTimeout(() => setShareStatus(''), 4000);
    }

    setSharing(false);
  }, [invoiceNo, from, total, currency, whatsappNo]);

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

          {/* Action buttons */}
          <div className="ml-auto flex items-center gap-2 flex-wrap">
            {/* WhatsApp button */}
            <button
              onClick={() => setShowWhatsapp(p => !p)}
              className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Share on WhatsApp
            </button>

            {/* Download button */}
            <button onClick={handlePrint}
              className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: accentColor }}>
              ⬇️ Download PDF
            </button>
          </div>
        </div>

        {/* ── WhatsApp panel ─────────────────────────────── */}
        {showWhatsapp && (
          <div className="mt-4 pt-4 border-t border-surface-100">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-surface-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Share invoice PDF via WhatsApp
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs text-surface-400">+</span>
                <input
                  type="tel"
                  value={whatsappNo}
                  onChange={e => setWhatsappNo(e.target.value)}
                  placeholder="91XXXXXXXXXX (with country code) — or leave blank"
                  className="flex-1 text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-green-400 min-w-0"
                />
                <button
                  onClick={handleWhatsAppShare}
                  disabled={sharing}
                  className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2 rounded-xl transition-all whitespace-nowrap disabled:opacity-70"
                  style={{ backgroundColor: '#25D366' }}>
                  {sharing ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Generating…
                    </>
                  ) : 'Send PDF →'}
                </button>
              </div>
            </div>

            {/* Status message */}
            {shareStatus && (
              <div className={`mt-2 text-xs font-medium px-3 py-2 rounded-lg ${
                shareStatus.startsWith('✅') ? 'bg-green-50 text-green-700' :
                shareStatus.startsWith('❌') ? 'bg-rose-50 text-rose-700' :
                'bg-blue-50 text-blue-700'
              }`}>
                {shareStatus}
              </div>
            )}

            <p className="text-xs text-surface-400 mt-2">
              📱 <strong>On mobile:</strong> PDF opens in the share sheet — tap WhatsApp to send directly.
              &nbsp;💻 <strong>On desktop:</strong> PDF is downloaded automatically, then WhatsApp opens so you can attach it.
            </p>
          </div>
        )}
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

            {/* From */}
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

          {/* ── Totals + Notes ────────────────────────────── */}
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

          {/* ── Bank Details ──────────────────────────────── */}
          {/* Toggle — only visible while editing */}
          <div className="mt-8 print:hidden">
            <div className="flex items-center gap-3">
              <div
                onClick={() => setBankEnabled(p => !p)}
                className={`w-9 h-5 rounded-full cursor-pointer transition-colors flex items-center ${bankEnabled ? 'bg-emerald-500' : 'bg-surface-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full mx-0.5 shadow transition-transform ${bankEnabled ? 'translate-x-4' : ''}`} />
              </div>
              <span className="text-sm font-semibold text-surface-700">
                🏦 Add Bank Details to Invoice
              </span>
              {!bankEnabled && (
                <span className="text-xs text-surface-400">— shown in PDF for easy payment</span>
              )}
            </div>
          </div>

          {/* Bank details form — only when enabled */}
          {bankEnabled && (
            <div className="mt-4 p-5 border border-emerald-200 rounded-2xl print:border-surface-200 print:rounded-none" style={{ backgroundColor: '#f0fdf4' }}>
              <div className="text-xs font-black uppercase tracking-widest mb-4 text-emerald-800 print:text-surface-700">
                🏦 Bank Details for Payment
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {/* Account Name */}
                <div>
                  <div className="text-xs font-semibold text-surface-500 mb-1">Name as per Bank Account</div>
                  <input
                    value={bank.accountName}
                    onChange={e => setBank(p => ({...p, accountName: e.target.value}))}
                    placeholder="e.g. Garry Enterprises"
                    className="w-full text-sm font-semibold text-surface-900 bg-white border border-emerald-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-400 print:bg-transparent print:border-surface-200 print:placeholder-transparent" />
                </div>
                {/* Bank Name */}
                <div>
                  <div className="text-xs font-semibold text-surface-500 mb-1">Bank Name</div>
                  <input
                    value={bank.bankName}
                    onChange={e => setBank(p => ({...p, bankName: e.target.value}))}
                    placeholder="e.g. HDFC Bank"
                    className="w-full text-sm text-surface-900 bg-white border border-emerald-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-400 print:bg-transparent print:border-surface-200 print:placeholder-transparent" />
                </div>
                {/* Account Number */}
                <div>
                  <div className="text-xs font-semibold text-surface-500 mb-1">Account Number</div>
                  <input
                    value={bank.accountNumber}
                    onChange={e => setBank(p => ({...p, accountNumber: e.target.value}))}
                    placeholder="e.g. 50100123456789"
                    className="w-full text-sm text-surface-900 bg-white border border-emerald-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-400 print:bg-transparent print:border-surface-200 print:placeholder-transparent" />
                </div>
                {/* IFSC */}
                <div>
                  <div className="text-xs font-semibold text-surface-500 mb-1">IFSC Code</div>
                  <input
                    value={bank.ifsc}
                    onChange={e => setBank(p => ({...p, ifsc: e.target.value.toUpperCase()}))}
                    placeholder="e.g. HDFC0001234"
                    className="w-full text-sm font-mono text-surface-900 bg-white border border-emerald-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-400 print:bg-transparent print:border-surface-200 print:placeholder-transparent" />
                </div>
              </div>

              {/* Print preview of bank section */}
              {(bank.accountName || bank.bankName || bank.accountNumber || bank.ifsc) && (
                <div className="mt-4 pt-4 border-t border-emerald-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  {bank.accountName && (
                    <div>
                      <div className="text-xs text-surface-400 font-medium mb-0.5">Account Name</div>
                      <div className="font-semibold text-surface-900">{bank.accountName}</div>
                    </div>
                  )}
                  {bank.bankName && (
                    <div>
                      <div className="text-xs text-surface-400 font-medium mb-0.5">Bank</div>
                      <div className="font-semibold text-surface-900">{bank.bankName}</div>
                    </div>
                  )}
                  {bank.accountNumber && (
                    <div>
                      <div className="text-xs text-surface-400 font-medium mb-0.5">Account No.</div>
                      <div className="font-mono font-semibold text-surface-900">{bank.accountNumber}</div>
                    </div>
                  )}
                  {bank.ifsc && (
                    <div>
                      <div className="text-xs text-surface-400 font-medium mb-0.5">IFSC</div>
                      <div className="font-mono font-semibold text-surface-900">{bank.ifsc}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

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