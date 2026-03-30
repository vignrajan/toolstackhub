'use client';
import { useState, useEffect, useCallback } from 'react';

// ── Helpers ───────────────────────────────────────────────────
function calcAge(dob, to = new Date()) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (isNaN(birth)) return null;

  let years  = to.getFullYear() - birth.getFullYear();
  let months = to.getMonth()    - birth.getMonth();
  let days   = to.getDate()     - birth.getDate();

  if (days < 0) {
    months--;
    const prev = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) { years--; months += 12; }

  const msPerDay   = 86400000;
  const totalMs    = to - birth;
  const totalDays  = Math.floor(totalMs / msPerDay);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths= years * 12 + months;
  const totalHours = Math.floor(totalMs / 3600000);
  const totalMins  = Math.floor(totalMs / 60000);

  // Next birthday
  const thisYear    = to.getFullYear();
  let nextBday      = new Date(thisYear, birth.getMonth(), birth.getDate());
  if (nextBday <= to) nextBday = new Date(thisYear + 1, birth.getMonth(), birth.getDate());
  const daysToNext  = Math.ceil((nextBday - to) / msPerDay);
  const isToday     = birth.getDate() === to.getDate() && birth.getMonth() === to.getMonth();

  // Zodiac sign
  const zodiac = getZodiac(birth.getMonth() + 1, birth.getDate());

  return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, totalMins, daysToNext, isToday, zodiac, nextBday };
}

function getZodiac(m, d) {
  const signs = [
    { sign: 'Capricorn', symbol: '♑', end: [1,19] },
    { sign: 'Aquarius',  symbol: '♒', end: [2,18] },
    { sign: 'Pisces',    symbol: '♓', end: [3,20] },
    { sign: 'Aries',     symbol: '♈', end: [4,19] },
    { sign: 'Taurus',    symbol: '♉', end: [5,20] },
    { sign: 'Gemini',    symbol: '♊', end: [6,20] },
    { sign: 'Cancer',    symbol: '♋', end: [7,22] },
    { sign: 'Leo',       symbol: '♌', end: [8,22] },
    { sign: 'Virgo',     symbol: '♍', end: [9,22] },
    { sign: 'Libra',     symbol: '♎', end: [10,22] },
    { sign: 'Scorpio',   symbol: '♏', end: [11,21] },
    { sign: 'Sagittarius',symbol:'♐', end: [12,21] },
    { sign: 'Capricorn', symbol: '♑', end: [12,31] },
  ];
  return signs.find(s => m < s.end[0] || (m === s.end[0] && d <= s.end[1])) || signs[0];
}

function pad(n) { return String(n).padStart(2, '0'); }
function fmtDate(d) {
  return d.toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' });
}
function ordinal(n) {
  const s = ['th','st','nd','rd'];
  const v = n % 100;
  return n + (s[(v-20)%10] || s[v] || s[0]);
}

// ── Live countdown to next birthday ──────────────────────────
function BirthdayCountdown({ nextBday }) {
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const tick = () => {
      const now  = new Date();
      const diff = nextBday - now;
      if (diff <= 0) { setTimeLeft('🎂 Today!'); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [nextBday]);
  return <span className="font-mono font-bold text-brand-700 text-sm">{timeLeft}</span>;
}

// ── Main component ────────────────────────────────────────────
export default function AgeCalculator({ prefillDob = '' }) {
  const today    = new Date().toISOString().split('T')[0];
  const [dob,    setDob]    = useState(prefillDob || '');
  const [toDate, setToDate] = useState(today);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // Auto-calculate on change
  useEffect(() => {
    if (dob) setResult(calcAge(dob, new Date(toDate + 'T00:00:00')));
  }, [dob, toDate]);

  const copyResult = () => {
    if (!result) return;
    const text = `My exact age: ${result.years} years, ${result.months} months, ${result.days} days (${result.totalDays.toLocaleString()} days total). Calculated on ToolStackHub.in`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const maxDate = today;
  const minDate = '1900-01-01';

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">

      {/* ── Inputs ─────────────────────────────────────────── */}
      <div className="p-6 border-b border-surface-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="dob" className="text-xs font-bold uppercase tracking-wider text-surface-500 block mb-2">
              Date of Birth
            </label>
            <input
              id="dob" type="date"
              value={dob} min={minDate} max={maxDate}
              onChange={e => setDob(e.target.value)}
              className="w-full text-base font-semibold border-2 border-surface-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 bg-surface-50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="toDate" className="text-xs font-bold uppercase tracking-wider text-surface-500 block mb-2">
              Age As On Date
            </label>
            <input
              id="toDate" type="date"
              value={toDate} min={minDate} max="2100-12-31"
              onChange={e => setToDate(e.target.value)}
              className="w-full text-base font-semibold border-2 border-surface-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 bg-surface-50 transition-colors"
            />
          </div>
        </div>

        {!dob && (
          <p className="text-center text-surface-400 text-sm mt-4">
            Enter your date of birth above to calculate your exact age instantly
          </p>
        )}
      </div>

      {/* ── Results ────────────────────────────────────────── */}
      {result && (
        <div className="divide-y divide-surface-100">

          {/* Birthday message */}
          {result.isToday && (
            <div className="px-6 py-4 bg-gradient-to-r from-brand-600 to-violet-600 text-center">
              <div className="text-2xl mb-1">🎂</div>
              <div className="text-white font-bold">Happy Birthday! 🎉</div>
              <div className="text-white/70 text-sm mt-0.5">Today is your {ordinal(result.years)} birthday!</div>
            </div>
          )}

          {/* Primary age result */}
          <div className="p-6" style={{ background: 'linear-gradient(135deg,#0f172a,#1e1b4b)' }}>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3 text-center">Your Exact Age</div>
            <div className="flex items-end justify-center gap-4 flex-wrap">
              {[
                { val: result.years,  label: 'Years'  },
                { val: result.months, label: 'Months' },
                { val: result.days,   label: 'Days'   },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="font-black text-5xl sm:text-6xl text-white leading-none">{val}</div>
                  <div className="text-indigo-300 text-sm font-semibold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-surface-100">
            {[
              { icon: '📅', label: 'Total Days',    val: result.totalDays.toLocaleString('en-IN')  },
              { icon: '📆', label: 'Total Weeks',   val: result.totalWeeks.toLocaleString('en-IN') },
              { icon: '🗓️', label: 'Total Months',  val: result.totalMonths.toLocaleString('en-IN')},
              { icon: '⏰', label: 'Total Hours',   val: result.totalHours.toLocaleString('en-IN') },
              { icon: '⏱️', label: 'Total Minutes', val: result.totalMins.toLocaleString('en-IN')  },
              { icon: result.zodiac.symbol, label: 'Zodiac Sign', val: result.zodiac.sign },
            ].map(s => (
              <div key={s.label} className="bg-white px-4 py-4 text-center">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="font-bold text-surface-900 text-sm sm:text-base">{s.val}</div>
                <div className="text-xs text-surface-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Next birthday countdown */}
          <div className="px-6 py-4 bg-brand-50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎂</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-0.5">
                  {result.isToday ? 'Next Birthday' : `Next Birthday — ${fmtDate(result.nextBday)}`}
                </div>
                <div className="text-sm text-surface-600">
                  {result.daysToNext === 1 ? '1 day' : `${result.daysToNext} days`} away
                </div>
              </div>
            </div>
            <BirthdayCountdown nextBday={result.nextBday} />
          </div>

          {/* Copy result */}
          <div className="px-6 py-4">
            <button onClick={copyResult}
              className={`w-full py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                copied ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-surface-700 border-surface-200 hover:border-brand-300'
              }`}>
              {copied ? '✅ Copied to Clipboard!' : '📋 Copy My Age Result'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}