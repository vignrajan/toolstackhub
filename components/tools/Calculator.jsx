'use client';

import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically load Recharts only on client side to prevent SSR hydration issues
// that can break the entire component's interactivity.
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false });
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false });

// ─────────────────────────────────────────────────────────────
// Pricing constants (verified April 2026 — Anthropic API + plans)
// ─────────────────────────────────────────────────────────────

const RATES = {
  haiku:  { light: 0.04, balanced: 0.15, heavy: 0.45 },
  sonnet: { light: 0.20, balanced: 0.70, heavy: 2.00 },
  opus:   { light: 0.60, balanced: 2.00, heavy: 6.00 },
  mixed:  { light: 0.32, balanced: 1.10, heavy: 3.20 },
};

const TOK_HR = { light: 80_000, balanced: 250_000, heavy: 700_000 };

const API = {
  haiku:  { in: 1, out: 5,  cache: 0.10 },
  sonnet: { in: 3, out: 15, cache: 0.30 },
  opus:   { in: 5, out: 25, cache: 0.50 },
};

const PLANS = [
  { code: 'api',   name: 'API',     fullName: 'Pay-as-you-go', basePrice: null, note: 'No subscription. Pay per token.' },
  { code: 'pro',   name: 'Pro',     fullName: 'Pro',           basePrice: 20,   note: '$17/mo annual. ~44K tokens / 5hr window.' },
  { code: 'max5',  name: 'Max 5x',  fullName: 'Max 5x',        basePrice: 100,  note: '5× Pro usage. ~88K tokens / 5hr window.' },
  { code: 'max20', name: 'Max 20x', fullName: 'Max 20x',       basePrice: 200,  note: '20× Pro usage. ~220K tokens / 5hr window.' },
];

const FALLBACK_FX = 84;

function recommendPlan(monthlyCost) {
  if (monthlyCost < 18) return 'api';
  if (monthlyCost < 90) return 'pro';
  if (monthlyCost < 190) return 'max5';
  return 'max20';
}

function formatTokens(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1000) return Math.round(n / 1000) + 'K';
  return Math.round(n).toString();
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function Calculator() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState('quick');
  const [currency, setCurrency] = useState('usd');
  const [fxRate, setFxRate] = useState(FALLBACK_FX);

  // Quick mode state
  const [hours, setHours] = useState(4);
  const [days, setDays] = useState(5);
  const [intensity, setIntensity] = useState('balanced');
  const [model, setModel] = useState('sonnet');

  // Detailed mode state
  const [tIn, setTIn] = useState(50_000);
  const [tOut, setTOut] = useState(15_000);
  const [tCache, setTCache] = useState(500_000);
  const [tDays, setTDays] = useState(22);
  const [tModel, setTModel] = useState('sonnet');

  // Mount + URL state restore
  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('m')) setMode(params.get('m'));
      if (params.get('h')) setHours(Number(params.get('h')));
      if (params.get('d')) setDays(Number(params.get('d')));
      if (params.get('i')) setIntensity(params.get('i'));
      if (params.get('mdl')) setModel(params.get('mdl'));
      if (params.get('c')) setCurrency(params.get('c'));
    } catch (e) { /* ignore */ }
  }, []);

  // FX rate (client only)
  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(r => r.json())
      .then(data => { if (!cancelled && data?.rates?.INR) setFxRate(data.rates.INR); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [mounted]);

  const fmt = (usd) =>
    currency === 'usd'
      ? '$' + Math.round(usd).toLocaleString('en-US')
      : '₹' + Math.round(usd * fxRate).toLocaleString('en-IN');

  const result = useMemo(() => {
    if (mode === 'quick') {
      const ratePerHr = RATES[model][intensity];
      const dailyCost = ratePerHr * hours;
      const monthlyCost = dailyCost * days * 4.33;
      const dailyTokens = TOK_HR[intensity] * hours;
      return { dailyCost, monthlyCost, dailyTokens };
    } else {
      const m = API[tModel];
      const dailyCost = (tIn * m.in + tOut * m.out + tCache * m.cache) / 1_000_000;
      const monthlyCost = dailyCost * tDays;
      const dailyTokens = tIn + tOut + tCache;
      return { dailyCost, monthlyCost, dailyTokens };
    }
  }, [mode, hours, days, intensity, model, tIn, tOut, tCache, tDays, tModel]);

  const recCode = recommendPlan(result.monthlyCost);

  const chartData = PLANS.map(p => ({
    name: p.name,
    cost: p.code === 'api' ? Math.round(result.monthlyCost) : p.basePrice,
    isRec: p.code === recCode,
  }));

  const insightText = useMemo(() => {
    const m = result.monthlyCost;
    if (recCode === 'api') return `At this usage, even Pro is overkill. Stay on the API or use the $5 free credit to test.`;
    if (recCode === 'pro') {
      const save = m - 20;
      return save > 0
        ? `Pro saves you about ${fmt(save)}/month vs API at this usage. You'll rarely hit rate limits.`
        : `Your usage fits comfortably inside Pro. Stay there.`;
    }
    if (recCode === 'max5') {
      const save = m - 100;
      return `Max 5x saves you about ${fmt(save)}/month vs paying API rates. Worth it if you hit Pro rate limits more than twice a week.`;
    }
    const save = m - 200;
    return `Max 20x saves you about ${fmt(save)}/month vs API. The right call if Claude Code is your primary tool all day.`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.monthlyCost, recCode, currency, fxRate]);

  function shareResult() {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams({
      m: mode, h: String(hours), d: String(days), i: intensity, mdl: model, c: currency,
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    if (navigator.share) {
      navigator.share({ title: 'My Claude Code cost estimate', url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
    }
  }

  function reset() {
    setHours(4); setDays(5); setIntensity('balanced'); setModel('sonnet');
    setTIn(50_000); setTOut(15_000); setTCache(500_000); setTDays(22); setTModel('sonnet');
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Tabs + currency */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 bg-slate-50">
        <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
          {[
            { v: 'quick', label: 'Quick estimate' },
            { v: 'detail', label: 'By tokens' },
          ].map(t => (
            <button
              key={t.v}
              type="button"
              onClick={() => setMode(t.v)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition cursor-pointer ${
                mode === t.v ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-sm">
          {['usd', 'inr'].map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setCurrency(c)}
              className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                currency === c ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs + Results */}
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-6">
        {/* Inputs */}
        <div>
          {mode === 'quick' ? (
            <div className="space-y-5">
              <SliderRow
                label="Hours per day with Claude Code"
                value={hours}
                onChange={setHours}
                min={0.5} max={12} step={0.5}
                display={`${hours} hr`}
              />
              <SliderRow
                label="Days per week"
                value={days}
                onChange={setDays}
                min={1} max={7} step={1}
                display={`${days} days`}
              />
              <SegmentRow
                label="Work intensity"
                value={intensity}
                onChange={setIntensity}
                options={[
                  { v: 'light', label: 'Light' },
                  { v: 'balanced', label: 'Balanced' },
                  { v: 'heavy', label: 'Heavy' },
                ]}
              />
              <SegmentRow
                label="Primary model"
                value={model}
                onChange={setModel}
                options={[
                  { v: 'haiku', label: 'Haiku' },
                  { v: 'sonnet', label: 'Sonnet' },
                  { v: 'opus', label: 'Opus' },
                  { v: 'mixed', label: 'Mixed' },
                ]}
              />
              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                <span className="font-medium text-slate-700">Light</span>: occasional Q&amp;A, small edits.{' '}
                <span className="font-medium text-slate-700">Balanced</span>: daily feature dev, debugging.{' '}
                <span className="font-medium text-slate-700">Heavy</span>: multi-file refactors, agents, exploration.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <SegmentRow
                label="Model"
                value={tModel}
                onChange={setTModel}
                options={[
                  { v: 'haiku', label: 'Haiku 4.5' },
                  { v: 'sonnet', label: 'Sonnet 4.6' },
                  { v: 'opus', label: 'Opus 4.7' },
                ]}
              />
              <NumberRow label="Input tokens / day" value={tIn} onChange={setTIn} step={1000} />
              <NumberRow label="Output tokens / day" value={tOut} onChange={setTOut} step={1000} />
              <NumberRow label="Cache reads / day" value={tCache} onChange={setTCache} step={10000} />
              <SliderRow
                label="Working days / month"
                value={tDays}
                onChange={setTDays}
                min={1} max={30} step={1}
                display={`${tDays} days`}
              />
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Tip: in real Claude Code sessions, cache reads are typically 5–10× larger than fresh input tokens.
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        <div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Estimated monthly cost
            </div>
            <div className="text-4xl font-semibold text-slate-900 mt-1 tabular-nums">
              {fmt(result.monthlyCost)}
            </div>
            <div className="text-sm text-slate-600 mt-1 tabular-nums">
              ≈ {fmt(result.dailyCost)} / day · {formatTokens(result.dailyTokens)} tokens / day
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Based on Anthropic API pricing if you paid per token
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-200 p-4">
            <div className="text-xs font-medium uppercase tracking-wide text-indigo-700 mb-1">
              Recommended plan
            </div>
            <p className="text-sm text-indigo-900 leading-relaxed">{insightText}</p>
          </div>
        </div>
      </div>

      {/* Plan comparison cards */}
      <div className="px-5 md:px-6 pb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
          All plans compared at your usage
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PLANS.map(p => {
            const isRec = p.code === recCode;
            const displayPrice = p.code === 'api' ? result.monthlyCost : p.basePrice;
            return (
              <div
                key={p.code}
                className={`rounded-xl p-4 transition ${
                  isRec
                    ? 'bg-white ring-2 ring-indigo-500 border border-indigo-500 shadow-sm'
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                }`}
              >
                {isRec && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-indigo-600 text-white px-2 py-0.5 rounded mb-2">
                    Best for you
                  </span>
                )}
                <p className="text-sm font-semibold text-slate-900">{p.fullName}</p>
                <p className="text-2xl font-semibold text-slate-900 mt-1 tabular-nums">
                  {fmt(displayPrice)}
                  <span className="text-xs font-normal text-slate-500">/mo</span>
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{p.note}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison chart - only render after mount to avoid SSR issues */}
        {mounted && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Monthly cost: API vs subscription plans
            </h3>
            <div style={{ width: '100%', height: 220 }}>
              <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip
                    formatter={(v) => fmt(v)}
                    contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
                  />
                  <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.isRec ? '#4f46e5' : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-5">
          <button
            type="button"
            onClick={shareResult}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition cursor-pointer"
          >
            Share my result
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

function SliderRow({ label, value, onChange, min, max, step, display }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-semibold text-slate-900 tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-600 cursor-pointer"
      />
    </div>
  );
}

function SegmentRow({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="inline-flex w-full rounded-lg border border-slate-200 bg-slate-50 p-1 gap-1">
        {options.map(opt => (
          <button
            key={opt.v}
            type="button"
            onClick={(e) => { e.preventDefault(); onChange(opt.v); }}
            className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition cursor-pointer ${
              value === opt.v
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function NumberRow({ label, value, onChange, step }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        type="number"
        value={value}
        min={0}
        step={step}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent tabular-nums"
      />
    </div>
  );
}