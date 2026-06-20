'use client';
// 80mm thermal-style customer bill. Hidden on screen; shown only when
// printing with printMode === 'bill'. Designed to fit standard 80mm
// (and degrade fine on 58mm) thermal roll printers and A4 fallback.
import { inr } from '../../../lib/billing/gst';

export default function ThermalReceipt({ business, order, totals }) {
  if (!order) return null;
  const dt = order.settledAt ? new Date(order.settledAt) : new Date();

  return (
    <div id="pos-bill" className="pos-print-area">
      <div className="receipt">
        <div className="center bold big">{business?.name || 'Restaurant'}</div>
        {business?.address && <div className="center small">{business.address}</div>}
        {business?.phone && <div className="center small">Ph: {business.phone}</div>}
        {business?.gstin && <div className="center small">GSTIN: {business.gstin}</div>}
        {business?.fssai && <div className="center small">FSSAI: {business.fssai}</div>}

        <div className="rule" />
        <div className="row small"><span>Bill: {order.billNumber || '—'}</span><span>{dt.toLocaleDateString('en-IN')}</span></div>
        <div className="row small">
          <span>{order.type === 'dine-in' ? `Table: ${order.tableName}` : order.type}</span>
          <span>{dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        {order.type === 'dine-in' && <div className="small">Covers: {order.pax || 1}</div>}
        <div className="rule" />

        <div className="row small bold">
          <span style={{ flex: 2 }}>Item</span>
          <span style={{ flex: 0.6, textAlign: 'center' }}>Qty</span>
          <span style={{ flex: 1, textAlign: 'right' }}>Amt</span>
        </div>
        {totals.lines.map((l, i) => (
          <div className="row small" key={i}>
            <span style={{ flex: 2 }}>{l.name}{l.notes ? ` (${l.notes})` : ''}</span>
            <span style={{ flex: 0.6, textAlign: 'center' }}>{l.qty}</span>
            <span style={{ flex: 1, textAlign: 'right' }}>{l.value.toFixed(2)}</span>
          </div>
        ))}
        <div className="rule" />

        <Line label={`Subtotal`} value={totals.subtotal} />
        {totals.serviceCharge > 0 && <Line label={`Service Charge (${totals.serviceChargePercent}%)`} value={totals.serviceCharge} />}
        {totals.discount > 0 && <Line label="Discount" value={-totals.discount} />}
        {totals.cgst > 0 && <Line label="CGST" value={totals.cgst} />}
        {totals.sgst > 0 && <Line label="SGST" value={totals.sgst} />}
        {totals.roundOff !== 0 && <Line label="Round Off" value={totals.roundOff} />}
        <div className="rule" />
        <div className="row bold big"><span>TOTAL</span><span>{inr(totals.total)}</span></div>
        {order.paymentMode && <div className="row small"><span>Paid via</span><span style={{ textTransform: 'capitalize' }}>{order.paymentMode}</span></div>}
        <div className="rule" />
        <div className="center small">Thank you! Visit again.</div>
        <div className="center tiny">Bill by ToolStackHub Billing Suite</div>
      </div>

      <style>{`
        .pos-print-area { display: none; }
        @media print {
          body.printing-bill * { visibility: hidden; }
          body.printing-bill .pos-print-area, body.printing-bill .pos-print-area * { visibility: visible; }
          body.printing-bill .pos-print-area { display: block; position: fixed; left: 0; top: 0; width: 80mm; }
          @page { size: 80mm auto; margin: 3mm; }
        }
        .receipt { width: 80mm; font-family: 'Courier New', monospace; color: #000; font-size: 12px; line-height: 1.35; }
        .receipt .center { text-align: center; }
        .receipt .bold { font-weight: 700; }
        .receipt .big { font-size: 14px; }
        .receipt .small { font-size: 11px; }
        .receipt .tiny { font-size: 9px; }
        .receipt .row { display: flex; justify-content: space-between; gap: 4px; }
        .receipt .rule { border-top: 1px dashed #000; margin: 4px 0; }
      `}</style>
    </div>
  );
}

function Line({ label, value }) {
  return (
    <div className="row small">
      <span>{label}</span>
      <span>{value < 0 ? `-${Math.abs(value).toFixed(2)}` : value.toFixed(2)}</span>
    </div>
  );
}
