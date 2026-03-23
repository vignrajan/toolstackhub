'use client';
import { useState, useEffect } from 'react';

const pad = (n) => String(n).padStart(2, '0');

function tsToDate(ts, unit) {
  const ms = unit === 'ms' ? Number(ts) : Number(ts) * 1000;
  return new Date(ms);
}

function dateToTs(date, unit) {
  const ms = date.getTime();
  return unit === 'ms' ? ms : Math.floor(ms / 1000);
}

function formatDate(d) {
  if (isNaN(d.getTime())) return null;
  return {
    utc:   d.toUTCString(),
    iso:   d.toISOString(),
    local: d.toLocaleString(),
    date:  `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}`,
    time:  `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`,
  };
}

export default function TimestampConverter() {
  const [ts, setTs]         = useState('');
  const [unit, setUnit]     = useState('s');
  const [dates, setDates]   = useState(null);
  const [error, setError]   = useState('');
  const [now, setNow]       = useState(null);
  const [copied, setCopied] = useState('');

  // Update live clock every second
  useEffect(() => {
    setNow(Math.floor(Date.now() / 1000));
    const id = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(id);
  }, []);

  const convert = () => {
    if (!ts.trim()) { setError('Please enter a timestamp.'); return; }
    const d = tsToDate(ts, unit);
    if (isNaN(d.getTime())) { setError('Invalid timestamp. Please enter a valid Unix timestamp.'); setDates(null); return; }
    setError('');
    setDates(formatDate(d));
  };

  const useNow = () => {
    const n = unit === 'ms' ? Date.now() : Math.floor(Date.now() / 1000);
    setTs(String(n));
    setDates(null);
    setError('');
  };

  const copy = (val) => {
    navigator.clipboard.writeText(val);
    setCopied(val);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-600">Timestamp Converter</span>
        {now && (
          <span className="text-xs font-mono text-surface-400">
            Now: {now.toLocaleString()} (Unix)
          </span>
        )}
      </div>

      <div className="p-5 space-y-5">
        {/* Input row */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Unix Timestamp</label>
            <input
              type="text"
              value={ts}
              onChange={e => { setTs(e.target.value); setDates(null); setError(''); }}
              placeholder={unit === 's' ? '1704067200' : '1704067200000'}
              className="input-field font-mono"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Unit</label>
            <div className="flex rounded-xl border border-surface-200 overflow-hidden h-[42px]">
              <button
                onClick={() => setUnit('s')}
                className={`px-3 text-sm font-medium transition-colors ${unit === 's' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}
              >
                Seconds
              </button>
              <button
                onClick={() => setUnit('ms')}
                className={`px-3 text-sm font-medium transition-colors ${unit === 'ms' ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}
              >
                Milliseconds
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={convert} className="btn-primary flex-1">⏱️ Convert Timestamp</button>
          <button onClick={useNow} className="btn-secondary">Use Now</button>
        </div>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">❌ {error}</p>
        )}

        {/* Result */}
        {dates && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-surface-700">Converted Dates:</p>
            {[
              { label: 'ISO 8601',    value: dates.iso   },
              { label: 'UTC',         value: dates.utc   },
              { label: 'Local time',  value: dates.local },
              { label: 'Date (UTC)',  value: dates.date  },
              { label: 'Time (UTC)',  value: dates.time  },
            ].map(row => (
              <div key={row.label} className="flex items-center gap-3 p-3 bg-surface-50 rounded-xl border border-surface-200 group">
                <span className="text-xs text-surface-500 w-28 shrink-0 font-medium">{row.label}</span>
                <span className="font-mono text-sm text-surface-800 flex-1 select-all">{row.value}</span>
                <button
                  onClick={() => copy(row.value)}
                  className="opacity-0 group-hover:opacity-100 text-xs text-surface-400 hover:text-brand-600 transition-all"
                >
                  {copied === row.value ? '✅' : '📋'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Common timestamps */}
        <div className="border-t border-surface-100 pt-4">
          <p className="text-xs font-medium text-surface-500 mb-3">Common timestamps:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Unix Epoch (0)',      ts: '0'          },
              { label: 'Y2K',                 ts: '946684800'  },
              { label: 'Now',                 ts: String(now || '') },
            ].map(ex => (
              <button
                key={ex.label}
                onClick={() => { setTs(ex.ts); setUnit('s'); setDates(null); }}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
