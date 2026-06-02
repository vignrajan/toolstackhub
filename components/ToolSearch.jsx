'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { tools } from '../data/tools';

/**
 * ToolSearch Component
 * - Fuzzy search across tool names, descriptions, and keywords
 * - Shows live results in a dropdown
 * - Keyboard accessible (arrow keys + enter)
 */
export default function ToolSearch({ className = '' }) {
  const [query, setQuery]       = useState('');
  const [results, setResults]   = useState([]);
  const [focused, setFocused]   = useState(false);
  const [cursor, setCursor]     = useState(-1);
  const inputRef                = useRef(null);
  const dropdownRef             = useRef(null);

  // Run search whenever query changes
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResults([]); return; }

    const matches = tools.filter(tool => {
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        (tool.keywords || []).some(kw => kw.toLowerCase().includes(q))
      );
    }).slice(0, 8);

    setResults(matches);
    setCursor(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target) && !inputRef.current?.contains(e.target)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Cmd+K / Ctrl+K global shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setFocused(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor(c => Math.min(c + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor(c => Math.max(c - 1, -1));
    } else if (e.key === 'Escape') {
      setFocused(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter' && cursor >= 0 && results[cursor]) {
      window.location.href = `/tools/${results[cursor].slug}`;
    }
  };

  const showDropdown = focused && (query.trim().length > 0);

  return (
    <div className={`relative w-full max-w-2xl ${className}`} role="combobox" aria-expanded={showDropdown}>
      {/* Search input */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400 pointer-events-none"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search 60+ tools… (e.g. JSON, compress, QR)"
          className="w-full pl-12 pr-20 py-3.5 bg-white rounded-2xl border border-surface-200 text-surface-800 placeholder:text-surface-400
            focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100
            shadow-sm text-base transition-all duration-150"
          aria-label="Search tools"
          aria-controls="search-results"
          autoComplete="off"
        />

        {/* Keyboard shortcut hint / clear button */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {query ? (
            <button
              type="button"
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              className="text-surface-400 hover:text-surface-600 transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-surface-100 border border-surface-200 rounded text-[10px] text-surface-400 font-mono select-none">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div
          id="search-results"
          ref={dropdownRef}
          role="listbox"
          className="absolute top-full mt-2 w-full bg-white rounded-2xl border border-surface-200 shadow-xl shadow-surface-900/10 overflow-hidden z-50 animate-slide-up"
        >
          {results.length > 0 ? (
            <ul>
              {results.map((tool, idx) => (
                <li key={tool.slug} role="option" aria-selected={cursor === idx}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                      cursor === idx ? 'bg-brand-50 text-brand-700' : 'hover:bg-surface-50 text-surface-800'
                    }`}
                    onClick={() => setFocused(false)}
                  >
                    <span className="text-xl w-8 text-center">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className="text-xs text-surface-500 truncate">{tool.description}</div>
                    </div>
                    <span className="text-xs text-surface-400 capitalize shrink-0">{tool.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-surface-500 text-sm">
              <span className="text-2xl block mb-2">🔍</span>
              No tools found for "<strong>{query}</strong>"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
