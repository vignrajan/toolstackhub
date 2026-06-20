'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAll, put, remove } from '../../../lib/billing/db';

export default function TablesManager() {
  const [tables, setTables] = useState(null);
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(4);

  async function load() {
    const t = await getAll('tables');
    t.sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { numeric: true }));
    setTables(t);
  }
  useEffect(() => { load(); }, []);

  async function add() {
    if (!name.trim()) return;
    await put('tables', { name: name.trim(), seats: Number(seats) || 2 });
    setName(''); setSeats(4); load();
  }

  async function del(id) {
    if (!confirm('Remove this table?')) return;
    await remove('tables', id);
    load();
  }

  if (tables === null) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-surface-900">Tables</h1>
        <Link href="/billing/pos" className="text-sm font-semibold text-surface-500 hover:text-surface-800">← Back</Link>
      </div>

      <div className="bg-white border border-surface-200 rounded-2xl p-4 flex flex-wrap items-end gap-3">
        <label className="block flex-1 min-w-[120px]">
          <span className="text-xs font-semibold text-surface-600 block mb-1">Table name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="T13 / Patio 1"
            className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
        </label>
        <label className="block w-24">
          <span className="text-xs font-semibold text-surface-600 block mb-1">Seats</span>
          <input type="number" min="1" value={seats} onChange={(e) => setSeats(e.target.value)}
            className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
        </label>
        <button onClick={add} className="text-sm font-bold px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white">+ Add</button>
      </div>

      {tables.length === 0 ? (
        <p className="text-center text-sm text-surface-400 py-8">No tables yet.</p>
      ) : (
        <div className="bg-white border border-surface-200 rounded-2xl divide-y divide-surface-100">
          {tables.map((t) => (
            <div key={t.id} className="flex items-center gap-3 px-4 py-3">
              <span className="text-sm font-bold text-surface-800 flex-1">{t.name}</span>
              <span className="text-xs text-surface-400">{t.seats} seats</span>
              <button onClick={() => del(t.id)} className="text-xs font-semibold text-rose-500 hover:underline">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
