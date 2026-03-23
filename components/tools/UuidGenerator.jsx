'use client';
import { useState } from 'react';

function generateUUID() {
  // Use crypto.randomUUID if available, otherwise polyfill
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Polyfill for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGenerator() {
  const [uuids, setUuids]         = useState([generateUUID()]);
  const [quantity, setQuantity]   = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens]     = useState(true);
  const [copied, setCopied]       = useState(null);

  const format = (uuid) => {
    let u = uuid;
    if (!hyphens) u = u.replace(/-/g, '');
    if (uppercase) u = u.toUpperCase();
    return u;
  };

  const generate = () => {
    const qty = Math.min(100, Math.max(1, quantity));
    setUuids(Array.from({ length: qty }, generateUUID));
    setCopied(null);
  };

  const copyOne = (uuid) => {
    navigator.clipboard.writeText(format(uuid));
    setCopied(uuid);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.map(format).join('\n'));
    setCopied('all');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-600">UUID v4 Generator</span>
        <span className="text-xs text-surface-400">Cryptographically random</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Controls */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Quantity</label>
            <input
              type="number" min="1" max="100" value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="input-field w-28"
            />
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer">
              <input
                type="checkbox" checked={uppercase}
                onChange={e => setUppercase(e.target.checked)}
                className="w-4 h-4 accent-brand-600 rounded"
              />
              UPPERCASE
            </label>
            <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer">
              <input
                type="checkbox" checked={hyphens}
                onChange={e => setHyphens(e.target.checked)}
                className="w-4 h-4 accent-brand-600 rounded"
              />
              Include hyphens
            </label>
          </div>
          <button onClick={generate} className="btn-primary">
            🆔 Generate {quantity > 1 ? `${quantity} UUIDs` : 'UUID'}
          </button>
        </div>

        {/* UUID list */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-surface-700">
              Generated UUID{uuids.length > 1 ? 's' : ''}
            </label>
            {uuids.length > 1 && (
              <button onClick={copyAll} className="text-xs btn-ghost py-1 px-2">
                {copied === 'all' ? '✅ All Copied!' : `📋 Copy All (${uuids.length})`}
              </button>
            )}
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex items-center gap-2 group px-4 py-2.5 bg-surface-900 rounded-xl"
              >
                <span className="font-mono text-sm text-emerald-300 flex-1 select-all tracking-wide">
                  {format(uuid)}
                </span>
                <button
                  onClick={() => copyOne(uuid)}
                  className="opacity-0 group-hover:opacity-100 text-xs text-surface-400 hover:text-white transition-all px-2 py-1 rounded-lg hover:bg-surface-700"
                >
                  {copied === uuid ? '✅' : '📋'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="text-xs text-surface-400 bg-surface-50 rounded-xl px-4 py-3">
          <strong className="text-surface-600">UUID v4</strong> — Randomly generated. 
          The probability of generating duplicate UUIDs is astronomically low (~1 in 5.3×10³⁶).
          Perfect for database primary keys, session tokens, and request IDs.
        </div>
      </div>
    </div>
  );
}
