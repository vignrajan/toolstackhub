'use client';
// Kitchen Order Ticket — prints only item names + quantities (no prices)
// for the kitchen. Shows only the items newly added since the last KOT.
export default function KotTicket({ order, items }) {
  if (!order) return null;
  const now = new Date();
  return (
    <div id="pos-kot" className="kot-print-area">
      <div className="kot">
        <div className="center bold big">KITCHEN ORDER</div>
        <div className="row small">
          <span>{order.type === 'dine-in' ? `Table ${order.tableName}` : (order.type || '').toUpperCase()}</span>
          <span>{now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        {order.type === 'dine-in' && <div className="small">Covers: {order.pax || 1}</div>}
        <div className="rule" />
        {items.map((it, i) => (
          <div className="row item" key={i}>
            <span className="qty">{it.qty}×</span>
            <span className="name">{it.name}{it.notes ? ` — ${it.notes}` : ''}</span>
          </div>
        ))}
        {items.length === 0 && <div className="small center">No new items</div>}
        <div className="rule" />
        <div className="center tiny">{order.billNumber || order.tableName}</div>
      </div>

      <style>{`
        .kot-print-area { display: none; }
        @media print {
          body.printing-kot * { visibility: hidden; }
          body.printing-kot .kot-print-area, body.printing-kot .kot-print-area * { visibility: visible; }
          body.printing-kot .kot-print-area { display: block; position: fixed; left: 0; top: 0; width: 80mm; }
          @page { size: 80mm auto; margin: 3mm; }
        }
        .kot { width: 80mm; font-family: 'Courier New', monospace; color: #000; font-size: 13px; }
        .kot .center { text-align: center; }
        .kot .bold { font-weight: 700; }
        .kot .big { font-size: 16px; margin-bottom: 4px; }
        .kot .small { font-size: 11px; }
        .kot .tiny { font-size: 9px; }
        .kot .row { display: flex; justify-content: space-between; gap: 6px; }
        .kot .item { font-size: 14px; font-weight: 700; padding: 2px 0; }
        .kot .item .qty { min-width: 30px; }
        .kot .item .name { flex: 1; }
        .kot .rule { border-top: 1px dashed #000; margin: 5px 0; }
      `}</style>
    </div>
  );
}
