'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV = [
  { href: '/billing/invoices', label: 'Invoices',  icon: '🧾', ready: true },
  { href: '/billing/customers', label: 'Customers', icon: '👥', ready: false },
  { href: '/billing/products',  label: 'Products',  icon: '📦', ready: false },
  { href: '/billing/reports',   label: 'Reports',   icon: '📊', ready: false },
  { href: '/billing/settings',  label: 'Settings',  icon: '⚙️', ready: true },
];

export default function BillingShell({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <div className="min-h-screen bg-surface-50 flex">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-surface-200 flex flex-col transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center gap-2 px-5 border-b border-surface-100">
          <Link href="/billing/invoices" className="flex items-center gap-2 font-black text-surface-900">
            <span className="w-8 h-8 rounded-xl bg-brand-600 text-white grid place-items-center text-sm">TS</span>
            <span className="text-[15px] leading-tight">Billing<span className="text-brand-600">Suite</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {NAV.map((item) => (
            <Link key={item.href} href={item.ready ? item.href : '#'}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? 'bg-brand-50 text-brand-700'
                  : item.ready
                    ? 'text-surface-600 hover:bg-surface-50'
                    : 'text-surface-300 cursor-not-allowed'
              }`}>
              <span className="text-base">{item.icon}</span>
              {item.label}
              {!item.ready && <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-surface-300">Soon</span>}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-surface-100">
          <div className="rounded-xl bg-surface-50 p-3 text-xs text-surface-500 leading-relaxed">
            🔒 <strong className="text-surface-700">100% private.</strong> Your billing data is stored only on this device. No account, no cloud.
          </div>
          <Link href="/" className="block mt-2 text-center text-xs text-surface-400 hover:text-brand-600 transition-colors">
            ← Back to ToolStackHub
          </Link>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {open && <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setOpen(false)} />}

      {/* ── Main ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-surface-200 flex items-center gap-3 px-4 lg:px-6 sticky top-0 z-20">
          <button onClick={() => setOpen(true)}
            className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-surface-200 text-surface-600">
            ☰
          </button>
          <div className="flex-1" />
          <Link href="/billing/invoices/new"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
            + New Invoice
          </Link>
        </header>

        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
