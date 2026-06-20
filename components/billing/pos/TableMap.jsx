'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAll, put } from '../../../lib/billing/db';
import { inr } from '../../../lib/billing/gst';
import { computeOrder, seedMenu, seedTables } from '../../../lib/billing/pos';

export default function TableMap() {
  const router = useRouter();
  const [tables, setTables] = useState(null);
  const [openOrders, setOpenOrders] = useState([]);
  const [menuCount, setMenuCount] = useState(0);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const [t, orders, menu] = await Promise.all([getAll('tables'), getAll('posOrders'), getAll('menu')]);
    t.sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { numeric: true }));
    setTables(t);
    setOpenOrders(orders.filter((o) => o.status === 'open'));
    setMenuCount(menu.length);
  }, []);

  useEffect(() => { load(); }, [load]);

  const orderForTable = (tableId) => openOrders.find((o) => o.tableId === tableId);

  async function loadSampleSetup() {
    setBusy(true);
    for (const m of seedMenu()) await put('menu', m);
    for (const t of seedTables(12)) await put('tables', t);
    await load();
    setBusy(false);
  }

  async function openTable(table) {
    const existing = orderForTable(table.id);
    if (existing) { router.push(`/billing/pos/order/${existing.id}`); return; }
    const order = await put('posOrders', {
      tableId: table.id, tableName: table.name, type: 'dine-in',
      status: 'open', pax: 1, items: [], serviceChargePercent: 0,
    });
    router.push(`/billing/pos/order/${order.id}`);
  }

  async function quickOrder(type) {
    const order = await put('posOrders', {
      tableId: null, tableName: type, type, status: 'open', pax: 1, items: [], serviceChargePercent: 0,
    });
    router.push(`/billing/pos/order/${order.id}`);
  }

  if (tables === null) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  // First run — nothing set up yet
  if (tables.length === 0 && menuCount === 0) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="text-5xl mb-4">🍽️</div>
        <h1 className="text-2xl font-black text-surface-900">Restaurant POS</h1>
        <p className="text-surface-500 mt-2 mb-6">Take dine-in orders, fire KOTs to the kitchen, and print GST bills — all offline on this device.</p>
        <button onClick={loadSampleSetup} disabled={busy}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-6 py-3 rounded-xl disabled:opacity-60">
          {busy ? 'Setting up…' : '⚡ Load sample menu + 12 tables'}
        </button>
        <div className="text-sm text-surface-400 mt-4">
          or <Link href="/billing/pos/menu" className="text-brand-600 font-semibold">build your own menu →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-surface-900">Tables</h1>
          <p className="text-sm text-surface-500 mt-0.5">{openOrders.length} running · tap a table to take an order</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => quickOrder('takeaway')} className="text-sm font-bold px-3.5 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">🥡 Takeaway</button>
          <button onClick={() => quickOrder('delivery')} className="text-sm font-bold px-3.5 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">🛵 Delivery</button>
          <Link href="/billing/pos/reports" className="text-sm font-bold px-3.5 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">📊 Z-Report</Link>
          <Link href="/billing/pos/menu" className="text-sm font-bold px-3.5 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">Menu</Link>
        </div>
      </div>

      {tables.length === 0 ? (
        <div className="bg-white border border-dashed border-surface-300 rounded-2xl py-12 text-center">
          <p className="text-surface-500 text-sm mb-3">No tables yet.</p>
          <Link href="/billing/pos/tables" className="text-brand-600 font-bold text-sm">+ Add tables →</Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {tables.map((t) => {
            const o = orderForTable(t.id);
            const running = o ? computeOrder(o.items || [], { serviceChargePercent: o.serviceChargePercent || 0 }) : null;
            const occupied = Boolean(o);
            return (
              <button key={t.id} onClick={() => openTable(t)}
                className={`aspect-square rounded-2xl border-2 p-2 flex flex-col items-center justify-center transition-all active:scale-95 ${
                  occupied
                    ? 'border-amber-400 bg-amber-50 hover:bg-amber-100'
                    : 'border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50'
                }`}>
                <span className={`text-lg font-black ${occupied ? 'text-amber-700' : 'text-emerald-700'}`}>{t.name}</span>
                <span className="text-[11px] text-surface-400">{t.seats} seats</span>
                {occupied ? (
                  <>
                    <span className="text-sm font-black text-surface-900 mt-1">{inr(running.total)}</span>
                    <span className="text-[10px] text-amber-600 font-bold uppercase">{running.itemCount} items</span>
                  </>
                ) : (
                  <span className="text-[10px] text-emerald-600 font-bold uppercase mt-1">Free</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex gap-4 text-xs text-surface-400">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-200" /> Free</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-300" /> Occupied</span>
        <Link href="/billing/pos/tables" className="ml-auto text-brand-600 font-semibold">Manage tables →</Link>
      </div>
    </div>
  );
}
