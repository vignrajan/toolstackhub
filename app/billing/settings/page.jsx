'use client';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getBusiness, saveBusiness, exportAll, importAll } from '../../../lib/billing/db';
import { STATES } from '../../../lib/billing/gst';

const empty = {
  name: '', gstin: '', pan: '', email: '', phone: '',
  address: '', stateCode: '', invoicePrefix: 'INV', invoiceCounter: 1,
};

export default function SettingsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-surface-400 text-sm">Loading…</div>}>
      <SettingsForm />
    </Suspense>
  );
}

function SettingsForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [form, setForm] = useState(empty);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    getBusiness().then((b) => { if (b) setForm({ ...empty, ...b }); setLoaded(true); });
  }, []);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const flash = (m) => { setToast(m); setTimeout(() => setToast(''), 2500); };

  async function handleSave() {
    if (!form.name.trim()) { flash('❌ Business name is required'); return; }
    await saveBusiness(form);
    flash('✅ Saved');
    if (params.get('next') === 'invoice') router.push('/billing/invoices/new');
  }

  async function handleExport() {
    const dump = await exportAll();
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `billing-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dump = JSON.parse(await file.text());
      await importAll(dump);
      const b = await getBusiness();
      if (b) setForm({ ...empty, ...b });
      flash('✅ Backup restored');
    } catch (err) {
      flash('❌ Invalid backup file');
    }
    e.target.value = '';
  }

  if (!loaded) return <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-surface-900">Business Profile</h1>
        <p className="text-sm text-surface-500 mt-0.5">Appears on every invoice. Stored privately on this device.</p>
      </div>

      {toast && <div className="text-sm font-semibold px-4 py-2 rounded-xl bg-surface-900 text-white">{toast}</div>}

      <div className="bg-white border border-surface-200 rounded-2xl p-5 space-y-4">
        <Field label="Business name *">
          <input value={form.name} onChange={(e) => set('name', e.target.value)}
            placeholder="Acme Enterprises" className={inputCls} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="GSTIN">
            <input value={form.gstin} onChange={(e) => set('gstin', e.target.value.toUpperCase())}
              placeholder="29ABCDE1234F1Z5" className={inputCls} />
          </Field>
          <Field label="PAN">
            <input value={form.pan} onChange={(e) => set('pan', e.target.value.toUpperCase())}
              placeholder="ABCDE1234F" className={inputCls} />
          </Field>
        </div>
        <Field label="Address">
          <textarea value={form.address} onChange={(e) => set('address', e.target.value)} rows={2}
            placeholder="Street, City, PIN" className={`${inputCls} resize-none`} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Home state (place of supply)">
            <select value={form.stateCode} onChange={(e) => set('stateCode', e.target.value)} className={inputCls}>
              <option value="">Select state…</option>
              {STATES.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
            </select>
          </Field>
          <Field label="Phone">
            <input value={form.phone} onChange={(e) => set('phone', e.target.value)}
              placeholder="+91 98765 43210" className={inputCls} />
          </Field>
        </div>
        <Field label="Email">
          <input value={form.email} onChange={(e) => set('email', e.target.value)}
            placeholder="hello@acme.in" className={inputCls} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Invoice prefix">
            <input value={form.invoicePrefix} onChange={(e) => set('invoicePrefix', e.target.value)}
              placeholder="INV" className={inputCls} />
          </Field>
          <Field label="Next invoice number">
            <input type="number" min="1" value={form.invoiceCounter}
              onChange={(e) => set('invoiceCounter', Number(e.target.value) || 1)} className={inputCls} />
          </Field>
        </div>
        <button onClick={handleSave}
          className="w-full sm:w-auto text-sm font-bold px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white">
          Save profile
        </button>
      </div>

      {/* Backup */}
      <div className="bg-white border border-surface-200 rounded-2xl p-5">
        <div className="font-bold text-surface-800">Backup &amp; restore</div>
        <p className="text-sm text-surface-500 mt-1 mb-4">
          Your data lives only in this browser. Export a backup to keep it safe or move it to another device.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleExport}
            className="text-sm font-bold px-4 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50">
            ⬇️ Export backup (JSON)
          </button>
          <label className="text-sm font-bold px-4 py-2 rounded-xl border border-surface-200 text-surface-700 hover:bg-surface-50 cursor-pointer">
            ⬆️ Import backup
            <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}

const inputCls = 'w-full text-sm border border-surface-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-brand-400';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-surface-600 block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
