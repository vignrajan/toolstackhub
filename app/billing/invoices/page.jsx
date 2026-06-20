'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAll, remove } from '../../../lib/billing/db';
import { inr } from '../../../lib/billing/gst';

const STATUS_STYLES = {
  draft:   'bg-surface-100 text-surface-600',
  sent:    'bg-blue-50 text-blue-700',
  paid:    'bg-emerald-50 text-emerald-700',
  partial: 'bg-amber-50 text-amber-700',
  overdue: 'bg-rose-50 text-rose-700',
};

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState(null); // null = loading
  const [query, setQuery] = useState('');

  async function load() {
    const rows = await getAll('invoices');
    rows.sort((a, b) => (b.invoiceDate || '').localeCompare(a.invoiceDate || '') || (b.createdAt || '').localeCompare(a.createdAt || ''));
    setInvoices(rows);
  }

  useEffect(() => { load().catch(() => setInvoices([])); }, []);

  async function handleDelete(id, number) {
    if (!confirm(`Delete invoice ${number}? This cannot be undone.`)) return;
    await remove('invoices', id);
    load();
  }

  const filtered = (invoices || []).filter((inv) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (inv.invoiceNumber || '').toLowerCase().includes(q) ||
           (inv.customer?.name || '').toLowerCase().includes(q);
  });

  const totals = (invoices || []).reduce((acc, inv) => {
    acc.count += 1;
    acc.total += Number(inv.totals?.total) || 0;
    if (inv.status === 'paid') acc.paid += Number(inv.totals?.total) || 0;
    else acc.outstanding += Number(inv.totals?.total) || 0;
    return acc;
  }, { count: 0, total: 0, paid: 0, outstanding: 0 });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-surface-900">Invoices</h1>
          <p className="text-sm text-surface-500 mt-0.5">Create, save and manage GST invoices — stored privately on this device.</p>
        </div>
        <Link href="/billing/invoices/new"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
          + New Invoice
        </Link>
      </div>

      {/* KPI cards */}
      {invoices && invoices.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['Total Invoices', totals.count, 'text-surface-900'],
            ['Total Value', inr(totals.total), 'text-surface-900'],
            ['Collected', inr(totals.paid), 'text-emerald-600'],
            ['Outstanding', inr(totals.outstanding), 'text-rose-600'],
          ].map(([label, value, color]) => (
            <div key={label} className="bg-white border border-surface-200 rounded-2xl p-4">
              <div className="text-xs font-semibold text-surface-400 uppercase tracking-wide">{label}</div>
              <div className={`text-lg font-black mt-1 ${color}`}>{value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Search */}
      {invoices && invoices.length > 0 && (
        <input value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by invoice number or customer…"
          className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-white" />
      )}

      {/* List */}
      {invoices === null ? (
        <div className="text-center py-20 text-surface-400 text-sm">Loading…</div>
      ) : invoices.length === 0 ? (
        <div className="bg-white border border-dashed border-surface-300 rounded-2xl py-16 text-center">
          <div className="text-4xl mb-3">🧾</div>
          <div className="font-bold text-surface-800">No invoices yet</div>
          <p className="text-sm text-surface-500 mt-1 mb-5">Create your first GST invoice in under a minute.</p>
          <Link href="/billing/invoices/new"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
            + Create Invoice
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-100 text-xs uppercase tracking-wide text-surface-400">
                <th className="text-left font-semibold px-4 py-3">Invoice</th>
                <th className="text-left font-semibold px-4 py-3 hidden sm:table-cell">Customer</th>
                <th className="text-left font-semibold px-4 py-3 hidden md:table-cell">Date</th>
                <th className="text-right font-semibold px-4 py-3">Amount</th>
                <th className="text-center font-semibold px-4 py-3">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filtered.map((inv) => (
                <tr key={inv.id} className="hover:bg-surface-50 transition-colors">
                  <td className="px-4 py-3">
                    <Link href={`/billing/invoices/${inv.id}`} className="font-bold text-surface-900 hover:text-brand-600">
                      {inv.invoiceNumber}
                    </Link>
                    <div className="text-xs text-surface-400 sm:hidden">{inv.customer?.name || '—'}</div>
                  </td>
                  <td className="px-4 py-3 text-surface-600 hidden sm:table-cell">{inv.customer?.name || '—'}</td>
                  <td className="px-4 py-3 text-surface-500 hidden md:table-cell">{inv.invoiceDate}</td>
                  <td className="px-4 py-3 text-right font-semibold text-surface-900">{inr(inv.totals?.total)}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold capitalize ${STATUS_STYLES[inv.status] || STATUS_STYLES.draft}`}>
                      {inv.status || 'draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <Link href={`/billing/invoices/${inv.id}`} className="text-xs font-semibold text-brand-600 hover:underline">Edit</Link>
                    <button onClick={() => handleDelete(inv.id, inv.invoiceNumber)}
                      className="text-xs font-semibold text-rose-500 hover:underline ml-3">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
