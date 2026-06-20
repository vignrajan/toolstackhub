'use client';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getOne, getAll, put, getBusiness, saveBusiness } from '../../../lib/billing/db';
import { inr } from '../../../lib/billing/gst';
import {
  computeOrder, pendingKotItems, markKotPrinted, categoriesOf,
} from '../../../lib/billing/pos';
import ThermalReceipt from './ThermalReceipt';
import KotTicket from './KotTicket';

const PAYMENT_MODES = ['cash', 'upi', 'card', 'other'];

export default function OrderScreen({ orderId }) {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [menu, setMenu] = useState([]);
  const [business, setBusiness] = useState(null);
  const [activeCat, setActiveCat] = useState('');
  const [settling, setSettling] = useState(false);
  const [serviceChargePercent, setServiceChargePercent] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState('amount');
  const [paymentMode, setPaymentMode] = useState('cash');
  const [printMode, setPrintMode] = useState(null); // 'kot' | 'bill'
  const [kotItems, setKotItems] = useState([]);
  const [toast, setToast] = useState('');

  // ── Load ───────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const [o, m, b] = await Promise.all([getOne('posOrders', orderId), getAll('menu'), getBusiness()]);
      setOrder(o);
      setMenu(m.filter((x) => x.isActive !== false));
      setBusiness(b);
      const cats = categoriesOf(m);
      setActiveCat(cats[0] || '');
      if (o) setServiceChargePercent(o.serviceChargePercent || 0);
    })();
  }, [orderId]);

  const totals = useMemo(
    () => computeOrder(order?.items || [], { serviceChargePercent, discount, discountType }),
    [order, serviceChargePercent, discount, discountType],
  );

  // ── Persist helper (writes the live order to IndexedDB) ────
  const persist = useCallback(async (next) => {
    setOrder(next);
    await put('posOrders', next);
  }, []);

  const flash = (m) => { setToast(m); setTimeout(() => setToast(''), 2000); };

  // ── Item operations ───────────────────────────────────────
  const addItem = (mi) => {
    const items = [...(order.items || [])];
    const idx = items.findIndex((it) => it.menuItemId === mi.id && !it.notes);
    if (idx >= 0) items[idx] = { ...items[idx], qty: (Number(items[idx].qty) || 0) + 1 };
    else items.push({
      id: crypto.randomUUID(), menuItemId: mi.id, name: mi.name,
      price: mi.price, gstRate: mi.gstRate, qty: 1, kotQty: 0, notes: '',
    });
    persist({ ...order, items });
  };

  const changeQty = (lineId, delta) => {
    const items = (order.items || []).map((it) =>
      it.id === lineId ? { ...it, qty: Math.max(0, (Number(it.qty) || 0) + delta) } : it,
    ).filter((it) => it.qty > 0 || it.kotQty > 0); // keep KOT'd items even at 0 so kitchen knows
    persist({ ...order, items: items.filter((it) => it.qty > 0) });
  };

  const setNotes = (lineId, notes) => {
    const items = (order.items || []).map((it) => it.id === lineId ? { ...it, notes } : it);
    persist({ ...order, items });
  };

  const setPax = (delta) => persist({ ...order, pax: Math.max(1, (Number(order.pax) || 1) + delta) });

  // ── Print orchestration ───────────────────────────────────
  useEffect(() => {
    if (!printMode) return;
    document.body.classList.add(printMode === 'kot' ? 'printing-kot' : 'printing-bill');
    const after = () => {
      document.body.classList.remove('printing-kot', 'printing-bill');
      setPrintMode(null);
    };
    window.addEventListener('afterprint', after, { once: true });
    const t = setTimeout(() => window.print(), 60);
    return () => { clearTimeout(t); window.removeEventListener('afterprint', after); };
  }, [printMode]);

  const fireKot = async () => {
    const pending = pendingKotItems(order.items || []);
    if (pending.length === 0) { flash('No new items to send'); return; }
    setKotItems(pending);
    setPrintMode('kot');
    await persist({ ...order, items: markKotPrinted(order.items || []) });
    flash('🔥 KOT sent to kitchen');
  };

  const handleSettle = async () => {
    // Assign a sequential bill number from the business counter.
    const counter = (business?.posBillCounter) || 1;
    const billNumber = `B-${String(counter).padStart(4, '0')}`;
    const settled = {
      ...order,
      status: 'settled',
      settledAt: new Date().toISOString(),
      billNumber,
      paymentMode,
      serviceChargePercent,
      discount: totals.discount,
      discountType,
      totals,
    };
    await put('posOrders', settled);
    await saveBusiness({ ...(business || {}), posBillCounter: counter + 1 });
    setOrder(settled);
    setPrintMode('bill');
    flash('✅ Bill settled');
    setTimeout(() => router.push('/billing/pos'), 700);
  };

  if (order === null) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;
  if (!order.id) return (
    <div className="text-center py-20">
      <p className="text-surface-500">Order not found.</p>
      <Link href="/billing/pos" className="text-brand-600 font-semibold text-sm">← Back to tables</Link>
    </div>
  );

  const cats = categoriesOf(menu);
  const shown = menu.filter((m) => (m.category || 'Other') === activeCat);
  const settled = order.status === 'settled';

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 print:hidden">
        <div className="flex items-center gap-3">
          <Link href="/billing/pos" className="text-sm font-semibold text-surface-500 hover:text-surface-800">← Tables</Link>
          <div>
            <span className="text-lg font-black text-surface-900">
              {order.type === 'dine-in' ? `Table ${order.tableName}` : (order.type || 'Order')}
            </span>
            {settled && <span className="ml-2 text-xs font-bold text-emerald-600 uppercase">Settled · {order.billNumber}</span>}
          </div>
        </div>
        {toast && <div className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-surface-900 text-white">{toast}</div>}
      </div>

      {settled ? (
        <SettledView order={order} totals={order.totals || totals} onReprint={() => setPrintMode('bill')} />
      ) : (
        <div className="grid lg:grid-cols-[1fr,360px] gap-4 print:hidden">
          {/* ── Menu grid ─────────────────────────────────── */}
          <div className="bg-white border border-surface-200 rounded-2xl p-4">
            {menu.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-surface-500 text-sm mb-3">No menu items yet.</p>
                <Link href="/billing/pos/menu" className="text-brand-600 font-bold text-sm">+ Set up your menu →</Link>
              </div>
            ) : (
              <>
                <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1">
                  {cats.map((c) => (
                    <button key={c} onClick={() => setActiveCat(c)}
                      className={`whitespace-nowrap text-sm font-semibold px-3.5 py-2 rounded-xl transition-colors ${
                        activeCat === c ? 'bg-brand-600 text-white' : 'bg-surface-50 text-surface-600 hover:bg-surface-100'
                      }`}>
                      {c}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
                  {shown.map((mi) => (
                    <button key={mi.id} onClick={() => addItem(mi)}
                      className="text-left bg-surface-50 hover:bg-brand-50 border border-surface-200 hover:border-brand-300 rounded-xl p-3 transition-colors active:scale-95">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full border ${mi.isVeg ? 'border-emerald-600 bg-emerald-500' : 'border-rose-600 bg-rose-500'}`} />
                        <span className="text-sm font-bold text-surface-800 leading-tight">{mi.name}</span>
                      </div>
                      <div className="text-sm font-black text-brand-600 mt-1.5">{inr(mi.price)}</div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Order ticket ──────────────────────────────── */}
          <div className="bg-white border border-surface-200 rounded-2xl flex flex-col">
            <div className="p-4 border-b border-surface-100 flex items-center justify-between">
              <span className="font-black text-surface-900">Order</span>
              {order.type === 'dine-in' && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-surface-400">Pax</span>
                  <button onClick={() => setPax(-1)} className="w-6 h-6 rounded-lg bg-surface-100 font-bold">−</button>
                  <span className="font-bold w-4 text-center">{order.pax || 1}</span>
                  <button onClick={() => setPax(1)} className="w-6 h-6 rounded-lg bg-surface-100 font-bold">+</button>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[42vh]">
              {(order.items || []).length === 0 ? (
                <p className="text-center text-surface-400 text-sm py-10">Tap menu items to add</p>
              ) : (order.items || []).map((it) => (
                <div key={it.id} className="rounded-xl border border-surface-100 p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-surface-800 leading-tight">{it.name}</span>
                    <span className="text-sm font-bold text-surface-900 whitespace-nowrap">{inr(it.qty * it.price)}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => changeQty(it.id, -1)} className="w-7 h-7 rounded-lg bg-surface-100 font-bold">−</button>
                      <span className="font-bold w-5 text-center text-sm">{it.qty}</span>
                      <button onClick={() => changeQty(it.id, 1)} className="w-7 h-7 rounded-lg bg-surface-100 font-bold">+</button>
                      {it.kotQty > 0 && <span className="text-[10px] font-bold text-emerald-600 uppercase ml-1">KOT</span>}
                    </div>
                    <input value={it.notes || ''} onChange={(e) => setNotes(it.id, e.target.value)}
                      placeholder="note…"
                      className="text-xs border border-surface-200 rounded-lg px-2 py-1 w-24 focus:outline-none focus:border-brand-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Totals + actions */}
            <div className="border-t border-surface-100 p-4 space-y-2">
              <div className="flex justify-between text-sm text-surface-600"><span>Subtotal</span><span>{inr(totals.subtotal)}</span></div>
              {totals.totalTax > 0 && <div className="flex justify-between text-sm text-surface-600"><span>GST</span><span>{inr(totals.totalTax)}</span></div>}
              <div className="flex justify-between items-center pt-2 border-t border-surface-100">
                <span className="font-black text-surface-900">Total</span>
                <span className="text-lg font-black text-brand-600">{inr(totals.total)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button onClick={fireKot}
                  className="text-sm font-bold py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white">
                  🔥 Send KOT
                </button>
                <button onClick={() => setSettling(true)} disabled={(order.items || []).length === 0}
                  className="text-sm font-bold py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-50">
                  Settle Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Settle panel ───────────────────────────────────── */}
      {settling && !settled && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4 print:hidden" onClick={() => setSettling(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md p-5 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="font-black text-lg text-surface-900">Settle Bill</div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-semibold text-surface-600 block mb-1">Service charge %</span>
                <input type="number" min="0" max="20" value={serviceChargePercent}
                  onChange={(e) => setServiceChargePercent(Number(e.target.value) || 0)}
                  className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-surface-600 block mb-1">Discount</span>
                <div className="flex">
                  <input type="number" min="0" value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    className="w-full text-sm border border-surface-200 rounded-l-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
                  <select value={discountType} onChange={(e) => setDiscountType(e.target.value)}
                    className="text-sm border border-l-0 border-surface-200 rounded-r-xl px-2 bg-white focus:outline-none">
                    <option value="amount">₹</option>
                    <option value="percent">%</option>
                  </select>
                </div>
              </label>
            </div>

            <div>
              <span className="text-xs font-semibold text-surface-600 block mb-1.5">Payment mode</span>
              <div className="grid grid-cols-4 gap-2">
                {PAYMENT_MODES.map((m) => (
                  <button key={m} onClick={() => setPaymentMode(m)}
                    className={`text-sm font-semibold py-2 rounded-xl capitalize transition-colors ${
                      paymentMode === m ? 'bg-brand-600 text-white' : 'bg-surface-50 text-surface-600 hover:bg-surface-100'
                    }`}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-surface-50 p-3 space-y-1 text-sm">
              <div className="flex justify-between text-surface-600"><span>Subtotal</span><span>{inr(totals.subtotal)}</span></div>
              {totals.serviceCharge > 0 && <div className="flex justify-between text-surface-600"><span>Service charge</span><span>{inr(totals.serviceCharge)}</span></div>}
              {totals.discount > 0 && <div className="flex justify-between text-rose-600"><span>Discount</span><span>− {inr(totals.discount)}</span></div>}
              {totals.cgst > 0 && <div className="flex justify-between text-surface-600"><span>CGST + SGST</span><span>{inr(totals.cgst + totals.sgst)}</span></div>}
              <div className="flex justify-between font-black text-surface-900 pt-1 border-t border-surface-200"><span>Total</span><span>{inr(totals.total)}</span></div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setSettling(false)} className="flex-1 text-sm font-bold py-2.5 rounded-xl border border-surface-200 text-surface-600">Cancel</button>
              <button onClick={handleSettle} className="flex-1 text-sm font-bold py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                Settle &amp; Print {inr(totals.total)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden printables */}
      <ThermalReceipt business={business} order={order} totals={order.totals || totals} />
      <KotTicket order={order} items={kotItems} />
    </div>
  );
}

function SettledView({ order, totals, onReprint }) {
  return (
    <div className="max-w-md mx-auto bg-white border border-surface-200 rounded-2xl p-6 text-center print:hidden">
      <div className="text-4xl mb-2">✅</div>
      <div className="font-black text-surface-900 text-lg">Bill {order.billNumber} settled</div>
      <div className="text-sm text-surface-500 mt-1">{inr(totals.total)} · paid via {order.paymentMode}</div>
      <div className="flex gap-2 mt-5">
        <button onClick={onReprint} className="flex-1 text-sm font-bold py-2.5 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">⬇️ Reprint bill</button>
        <Link href="/billing/pos" className="flex-1 text-sm font-bold py-2.5 rounded-xl bg-brand-600 text-white">Back to tables</Link>
      </div>
    </div>
  );
}
