'use client';
import { useState, useEffect, useRef } from 'react';

export default function CountdownTimer() {
  const [h, setH]           = useState(0);
  const [m, setM]           = useState(5);
  const [s, setS]           = useState(0);
  const [remaining, setRem] = useState(null);
  const [running, setRun]   = useState(false);
  const [done, setDone]     = useState(false);
  const intervalRef         = useRef(null);
  const targetRef           = useRef(null);

  useEffect(() => {
    if (!running) return;
    targetRef.current = Date.now() + remaining * 1000;
    intervalRef.current = setInterval(() => {
      const left = Math.max(0, Math.round((targetRef.current - Date.now()) / 1000));
      setRem(left);
      if (left === 0) { setRun(false); setDone(true); clearInterval(intervalRef.current); }
    }, 200);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const total = h * 3600 + m * 60 + s;
  const startTimer = () => { if (total > 0) { setRem(total); setRun(true); setDone(false); } };
  const pause = () => { setRun(false); clearInterval(intervalRef.current); };
  const reset = () => { setRun(false); setDone(false); setRem(null); clearInterval(intervalRef.current); };

  const display = remaining !== null ? remaining : total;
  const dH = Math.floor(display / 3600);
  const dM = Math.floor((display % 3600) / 60);
  const dS = display % 60;
  const pct = remaining !== null && total > 0 ? (remaining / total) * 100 : 100;

  const presets = [
    { label: '1 min',  s: 60   },
    { label: '5 min',  s: 300  },
    { label: '10 min', s: 600  },
    { label: '15 min', s: 900  },
    { label: '25 min', s: 1500 },
    { label: '30 min', s: 1800 },
    { label: '1 hour', s: 3600 },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Countdown Timer</span>
      </div>
      <div className="p-5 space-y-5">
        {/* Presets */}
        <div className="flex flex-wrap gap-2">
          {presets.map(p => (
            <button key={p.label}
              onClick={() => { reset(); setH(Math.floor(p.s/3600)); setM(Math.floor((p.s%3600)/60)); setS(p.s%60); }}
              className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
              {p.label}
            </button>
          ))}
        </div>

        {/* Time inputs */}
        {!running && remaining === null && (
          <div className="flex items-center justify-center gap-2">
            {[['Hours', h, setH, 23], ['Minutes', m, setM, 59], ['Seconds', s, setS, 59]].map(([label, val, setter, max], i) => (
              <div key={label} className="text-center">
                <label className="block text-xs text-surface-500 mb-1">{label}</label>
                <input type="number" min="0" max={max} value={val}
                  onChange={e => setter(Math.min(max, Math.max(0, Number(e.target.value))))}
                  className="w-20 text-center text-2xl font-display font-bold input-field py-3" />
              </div>
            )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep${i}`} className="text-3xl font-bold text-surface-300 mt-5">:</span>, el], [])}
          </div>
        )}

        {/* Countdown display */}
        {(running || remaining !== null) && (
          <div className={`text-center py-8 rounded-2xl transition-colors ${done ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-surface-900'}`}>
            <div className={`font-display font-bold text-7xl tabular-nums tracking-tight ${done ? 'text-emerald-600' : running ? 'text-emerald-400' : 'text-white'}`}>
              {String(dH).padStart(2,'0')}:{String(dM).padStart(2,'0')}:{String(dS).padStart(2,'0')}
            </div>
            {done && <p className="text-emerald-700 font-semibold mt-3 text-lg">⏰ Time is up!</p>}
            {/* Progress bar */}
            {!done && (
              <div className="mx-8 mt-4 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full transition-all duration-200"
                  style={{ width: `${pct}%` }} />
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-3">
          {!running && remaining === null && (
            <button onClick={startTimer} disabled={total === 0}
              className="btn-primary px-10 py-3 text-base disabled:opacity-40">
              ▶ Start
            </button>
          )}
          {running && (
            <button onClick={pause} className="btn-secondary px-8 py-3">⏸ Pause</button>
          )}
          {!running && remaining !== null && !done && (
            <button onClick={() => setRun(true)} className="btn-primary px-8 py-3">▶ Resume</button>
          )}
          {(remaining !== null || done) && (
            <button onClick={reset} className="btn-secondary px-8 py-3">↺ Reset</button>
          )}
        </div>
      </div>
    </div>
  );
}
