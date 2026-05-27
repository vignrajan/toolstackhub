'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../data/tools';

/**
 * Header Component
 * - Sticky navigation with logo and CTA
 * - Mobile hamburger menu
 * - Accessible keyboard navigation
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  // Cmd+K / Ctrl+K shortcut opens nav search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const navLinks = [
    { href: '/#categories', label: 'Categories' },
    { href: '/#all-tools',  label: 'All Tools'  },
    { href: '/blog',        label: 'Blog'        },
    { href: '/ai-tools',    label: 'AI Tools'    },
    { href: '/about',       label: 'About'       },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${SITE_CONFIG.name} home`}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-brand-500/30 transition-shadow">
              <span className="text-white font-display font-bold text-sm">T</span>
            </div>
            <span className="font-display font-bold text-surface-900 text-lg tracking-tight">
              Tool<span className="text-brand-600">Stack</span>Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-ghost text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Search */}
          <div className="hidden md:flex items-center gap-2">
            {/* Compact search bar */}
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-1.5 w-56">
                <svg className="w-4 h-4 text-surface-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchRef}
                  type="search"
                  value={searchQuery}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    if (e.target.value) window.location.href = `/?q=${encodeURIComponent(e.target.value)}#all-tools`;
                  }}
                  onBlur={() => { if (!searchQuery) setSearchOpen(false); }}
                  placeholder="Search tools…"
                  className="bg-transparent text-sm text-surface-800 placeholder:text-surface-400 outline-none w-full"
                  autoComplete="off"
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="text-surface-400 hover:text-surface-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setSearchOpen(true); setTimeout(() => searchRef.current?.focus(), 50); }}
                className="p-2 rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100 transition-colors"
                aria-label="Search tools (⌘K)"
                title="Search tools (⌘K)"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}
            <Link href="/#all-tools" className="btn-primary text-sm">
              Browse Tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-3 pb-4 border-t border-surface-100 animate-slide-up"
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-surface-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-3">
              <Link href="/#all-tools" className="btn-primary text-sm w-full" onClick={() => setMobileOpen(false)}>
                Browse Tools
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
