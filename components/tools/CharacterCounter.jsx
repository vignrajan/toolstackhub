'use client';
import { useState, useMemo } from 'react';

const LIMITS = [
  { platform: 'Twitter / X',       limit: 280,  icon: '🐦' },
  { platform: 'SMS',               limit: 160,  icon: '💬' },
  { platform: 'Meta description',  limit: 160,  icon: '🔍' },
  { platform: 'Meta title',        limit: 60,   icon: '📋' },
  { platform: 'Instagram caption', limit: 2200, icon: '📸' },
  { platform: 'LinkedIn post',     limit: 3000, icon: '💼' },
];

export default function CharacterCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => ({
    total:    text.length,
    noSpaces: text.replace(/ /g, '').length,
    letters:  (text.match(/[a-zA-Z]/g) || []).length,
    numbers:  (text.match(/\d/g) || []).length,
    specials: (text.match(/[^a-zA-Z0-9\s]/g) || []).length,
    spaces:   (text.match(/ /g) || []).length,
    lines:    text === '' ? 0 : text.split('\n').length,
  }), [text]);

  const copyText = () => navigator.clipboard.writeText(text);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Character Counter</span>
        <div className="flex gap-2">
          <button onClick={copyText} className="text-xs btn-ghost py-1 px-2">Copy text</button>
          <button onClick={() => setText('')} className="text-xs text-surface-400 hover:text-surface-700 transition-colors">Clear</button>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="relative">
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste text to count characters…"
            className="textarea-field min-h-[180px] pr-16"
          />
          <span className="absolute bottom-3 right-3 text-xs font-mono text-surface-400 bg-white px-2 py-1 rounded-md border border-surface-200">
            {stats.total}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total chars',  value: stats.total,    highlight: true },
            { label: 'No spaces',    value: stats.noSpaces  },
            { label: 'Letters',      value: stats.letters   },
            { label: 'Numbers',      value: stats.numbers   },
            { label: 'Special chars',value: stats.specials  },
            { label: 'Spaces',       value: stats.spaces    },
            { label: 'Lines',        value: stats.lines     },
          ].map(s => (
            <div key={s.label} className={`rounded-xl p-3 text-center border ${s.highlight ? 'bg-brand-50 border-brand-200' : 'bg-surface-50 border-surface-200'}`}>
              <div className={`font-display font-bold text-xl ${s.highlight ? 'text-brand-700' : 'text-surface-800'}`}>
                {s.value.toLocaleString()}
              </div>
              <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Platform limits */}
        <div>
          <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-3">Platform Limits</p>
          <div className="space-y-2">
            {LIMITS.map(({ platform, limit, icon }) => {
              const pct   = Math.min(100, (stats.total / limit) * 100);
              const over  = stats.total > limit;
              const color = over ? 'bg-red-400' : pct > 80 ? 'bg-amber-400' : 'bg-emerald-400';
              return (
                <div key={platform} className="flex items-center gap-3">
                  <span className="w-5 text-center">{icon}</span>
                  <span className="text-sm text-surface-600 w-36 shrink-0">{platform}</span>
                  <div className="flex-1 h-1.5 bg-surface-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className={`text-xs font-mono w-20 text-right ${over ? 'text-red-600 font-bold' : 'text-surface-500'}`}>
                    {stats.total}/{limit} {over ? '⚠️' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
