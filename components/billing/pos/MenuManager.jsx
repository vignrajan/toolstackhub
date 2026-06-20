'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAll, put, remove } from '../../../lib/billing/db';
import { inr } from '../../../lib/billing/gst';
import { FOOD_GST_RATE, categoriesOf } from '../../../lib/billing/pos';
import { GST_RATES } from '../../../lib/billing/gst';

const blank = { name: '', category: '', price: '', gstRate: FOOD_GST_RATE, isVeg: true };

export default function MenuManager() {
  const [menu, setMenu] = useState(null);
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);

  async function load() {
    const m = await getAll('menu');
    m.sort((a, b) => (a.category || '').localeCompare(b.category || '') || (a.name || '').localeCompare(b.name || ''));
    setMenu(m);
  }
  useEffect(() => { load(); }, []);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  async function save() {
    if (!form.name.trim() || form.price === '') return;
    await put('menu', {
      id: editingId || undefined,
      name: form.name.trim(),
      category: (form.category || 'Other').trim(),
      price: Number(form.price) || 0,
      gstRate: Number(form.gstRate) || 0,
      isVeg: form.isVeg,
      isActive: true,
    });
    setForm(blank); setEditingId(null); load();
  }

  function edit(item) {
    setEditingId(item.id);
    setForm({ name: item.name, category: item.category, price: item.price, gstRate: item.gstRate, isVeg: item.isVeg !== false });
  }

  async function del(id) {
    if (!confirm('Delete this menu item?')) return;
    await remove('menu', id);
    if (editingId === id) { setForm(blank); setEditingId(null); }
    load();
  }

  if (menu === null) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  const cats = categoriesOf(menu);

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-surface-900">Menu</h1>
          <p className="text-sm text-surface-500 mt-0.5">{menu.length} items · used in the POS order screen</p>
        </div>
        <Link href="/billing/pos" className="text-sm font-semibold text-surface-500 hover:text-surface-800">← Tables</Link>
      </div>

      {/* Add / edit form */}
      <div className="bg-white border border-surface-200 rounded-2xl p-4">
        <div className="grid sm:grid-cols-[1fr,1fr] gap-3">
          <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Item name"
            className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
          <input value={form.category} onChange={(e) => set('category', e.target.value)} placeholder="Category (e.g. Main Course)"
            list="cats" className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
          <datalist id="cats">{cats.map((c) => <option key={c} value={c} />)}</datalist>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          <label className="block">
            <span className="text-xs font-semibold text-surface-600 block mb-1">Price ₹</span>
            <input type="number" min="0" value={form.price} onChange={(e) => set('price', e.target.value)}
              className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-surface-600 block mb-1">GST %</span>
            <select value={form.gstRate} onChange={(e) => set('gstRate', Number(e.target.value))}
              className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-brand-400">
              {GST_RATES.map((r) => <option key={r} value={r}>{r}%</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-surface-600 block mb-1">Type</span>
            <select value={form.isVeg ? 'veg' : 'nonveg'} onChange={(e) => set('isVeg', e.target.value === 'veg')}
              className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-brand-400">
              <option value="veg">🟢 Veg</option>
              <option value="nonveg">🔴 Non-veg</option>
            </select>
          </label>
          <div className="flex items-end">
            <button onClick={save}
              className="w-full text-sm font-bold py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white">
              {editingId ? 'Update' : '+ Add'}
            </button>
          </div>
        </div>
        {editingId && (
          <button onClick={() => { setForm(blank); setEditingId(null); }} className="text-xs text-surface-400 mt-2 hover:text-surface-600">Cancel edit</button>
        )}
      </div>

      {/* List by category */}
      {menu.length === 0 ? (
        <div className="bg-white border border-dashed border-surface-300 rounded-2xl py-12 text-center text-sm text-surface-500">
          No items yet — add your first dish above.
        </div>
      ) : cats.map((cat) => (
        <div key={cat}>
          <div className="text-xs font-black uppercase tracking-wide text-surface-400 mb-2">{cat}</div>
          <div className="bg-white border border-surface-200 rounded-2xl divide-y divide-surface-100">
            {menu.filter((m) => (m.category || 'Other') === cat).map((m) => (
              <div key={m.id} className="flex items-center gap-3 px-4 py-2.5">
                <span className={`w-2.5 h-2.5 rounded-full border ${m.isVeg ? 'border-emerald-600 bg-emerald-500' : 'border-rose-600 bg-rose-500'}`} />
                <span className="text-sm font-semibold text-surface-800 flex-1">{m.name}</span>
                <span className="text-xs text-surface-400">GST {m.gstRate}%</span>
                <span className="text-sm font-bold text-surface-900 w-20 text-right">{inr(m.price)}</span>
                <button onClick={() => edit(m)} className="text-xs font-semibold text-brand-600 hover:underline">Edit</button>
                <button onClick={() => del(m.id)} className="text-xs font-semibold text-rose-500 hover:underline">Delete</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
