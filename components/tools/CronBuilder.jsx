'use client';
import { useState, useMemo } from 'react';

function parseCron(expr) {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) return null;
  return { minute: parts[0], hour: parts[1], day: parts[2], month: parts[3], weekday: parts[4] };
}

const MONTH_NAMES  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const WEEKDAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function describeField(val, type) {
  if (val === '*') return `every ${type}`;
  if (val.includes('/')) {
    const [start, step] = val.split('/');
    return `every ${step} ${type}${step !== '1' ? 's' : ''}${start !== '*' && start !== '0' ? ` starting at ${start}` : ''}`;
  }
  if (val.includes('-')) {
    const [from, to] = val.split('-');
    if (type === 'month') return `${MONTH_NAMES[+from - 1]}–${MONTH_NAMES[+to - 1]}`;
    if (type === 'weekday') return `${WEEKDAY_NAMES[+from]}–${WEEKDAY_NAMES[+to]}`;
    return `${from}–${to}`;
  }
  if (val.includes(',')) {
    const vals = val.split(',');
    if (type === 'month')   return vals.map(v => MONTH_NAMES[+v - 1]).join(', ');
    if (type === 'weekday') return vals.map(v => WEEKDAY_NAMES[+v]).join(', ');
    return vals.join(', ');
  }
  if (type === 'month')   return MONTH_NAMES[+val - 1] || val;
  if (type === 'weekday') return WEEKDAY_NAMES[+val] || val;
  return val;
}

function describeExpression(expr) {
  const p = parseCron(expr);
  if (!p) return null;

  try {
    const parts = [];
    parts.push(`At minute ${describeField(p.minute, 'minute')}`);
    if (p.hour !== '*')    parts.push(`hour: ${describeField(p.hour, 'hour')}`);
    if (p.day !== '*')     parts.push(`day: ${describeField(p.day, 'day')}`);
    if (p.month !== '*')   parts.push(`month: ${describeField(p.month, 'month')}`);
    if (p.weekday !== '*') parts.push(`weekday: ${describeField(p.weekday, 'weekday')}`);
    return parts.join(', ');
  } catch {
    return null;
  }
}

const PRESETS = [
  { label: 'Every minute',        expr: '* * * * *' },
  { label: 'Every 5 minutes',     expr: '*/5 * * * *' },
  { label: 'Every 15 minutes',    expr: '*/15 * * * *' },
  { label: 'Every hour',          expr: '0 * * * *' },
  { label: 'Every 6 hours',       expr: '0 */6 * * *' },
  { label: 'Once a day (midnight)', expr: '0 0 * * *' },
  { label: 'Once a day (noon)',   expr: '0 12 * * *' },
  { label: 'Every Monday 9am',   expr: '0 9 * * 1' },
  { label: 'Weekdays at 8am',    expr: '0 8 * * 1-5' },
  { label: 'Every Sunday midnight', expr: '0 0 * * 0' },
  { label: 'First of every month', expr: '0 0 1 * *' },
  { label: 'Every year (Jan 1)',  expr: '0 0 1 1 *' },
];

export default function CronBuilder() {
  const [expr,   setExpr]   = useState('*/5 * * * *');
  const [copied, setCopied] = useState(false);

  const parts = useMemo(() => parseCron(expr), [expr]);
  const description = useMemo(() => describeExpression(expr), [expr]);
  const isValid = parts !== null;

  const copyExpr = () => {
    navigator.clipboard.writeText(expr).catch(() => {
      const el = document.createElement('textarea');
      el.value = expr; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el);
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updatePart = (index, val) => {
    const p = expr.trim().split(/\s+/);
    p[index] = val || '*';
    setExpr(p.join(' '));
  };

  const FIELDS = [
    { label: 'Minute',  placeholder: '0-59, */5', index: 0 },
    { label: 'Hour',    placeholder: '0-23, */6',  index: 1 },
    { label: 'Day',     placeholder: '1-31, */2',  index: 2 },
    { label: 'Month',   placeholder: '1-12, */3',  index: 3 },
    { label: 'Weekday', placeholder: '0-6, 1-5',   index: 4 },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Cron Expression Builder</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Expression input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Cron Expression</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={expr}
              onChange={e => setExpr(e.target.value)}
              className={`input-field font-mono flex-1 ${!isValid ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
              placeholder="* * * * *"
              spellCheck={false}
            />
            <button
              onClick={copyExpr}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-xl transition-colors shrink-0"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
          {!isValid && expr.trim() && (
            <p className="text-xs text-red-600 mt-1">Invalid — must have exactly 5 fields: minute hour day month weekday</p>
          )}
        </div>

        {/* Human-readable description */}
        {isValid && description && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <p className="text-sm font-medium text-emerald-800">📅 {description}</p>
          </div>
        )}

        {/* Visual field editor */}
        {parts && (
          <div>
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Edit Fields</p>
            <div className="grid grid-cols-5 gap-2">
              {FIELDS.map(f => (
                <div key={f.label}>
                  <label className="block text-[10px] font-bold text-surface-500 uppercase tracking-wider mb-1">{f.label}</label>
                  <input
                    type="text"
                    value={parts ? expr.trim().split(/\s+/)[f.index] : '*'}
                    onChange={e => updatePart(f.index, e.target.value)}
                    className="input-field font-mono text-sm text-center px-2"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2 mt-1">
              {FIELDS.map(f => (
                <p key={f.label} className="text-[9px] text-center text-surface-400">{f.placeholder}</p>
              ))}
            </div>
          </div>
        )}

        {/* Presets */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Common Presets</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map(preset => (
              <button
                key={preset.expr}
                onClick={() => setExpr(preset.expr)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  expr === preset.expr
                    ? 'bg-brand-100 border-brand-300 text-brand-700 font-semibold'
                    : 'bg-surface-50 border-surface-200 text-surface-600 hover:border-brand-300 hover:bg-brand-50'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick reference */}
        <details className="bg-surface-50 border border-surface-200 rounded-xl">
          <summary className="px-4 py-3 text-sm font-medium text-surface-700 cursor-pointer">
            Quick Reference — Special Characters
          </summary>
          <div className="px-4 pb-4 space-y-2">
            {[
              { sym: '*',   desc: 'Any value (wildcard)' },
              { sym: ',',   desc: 'List separator (e.g. 1,3,5)' },
              { sym: '-',   desc: 'Range (e.g. 1-5)' },
              { sym: '/',   desc: 'Step (e.g. */5 = every 5 units)' },
            ].map(r => (
              <div key={r.sym} className="flex items-center gap-3 text-sm">
                <code className="bg-white border border-surface-200 rounded px-2 py-0.5 font-mono text-brand-700 font-bold w-8 text-center">{r.sym}</code>
                <span className="text-surface-600">{r.desc}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
