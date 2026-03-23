'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const MODES = [
  { id: 'work',       label: 'Focus',       minutes: 25, color: 'text-brand-600',   bg: 'bg-brand-50',   ring: 'stroke-brand-500'   },
  { id: 'short',      label: 'Short Break', minutes: 5,  color: 'text-emerald-600', bg: 'bg-emerald-50', ring: 'stroke-emerald-500' },
  { id: 'long',       label: 'Long Break',  minutes: 15, color: 'text-violet-600',  bg: 'bg-violet-50',  ring: 'stroke-violet-500'  },
];

export default function PomodoroTimer() {
  const [modeIdx, setModeIdx]       = useState(0);
  const [seconds, setSeconds]       = useState(MODES[0].minutes * 60);
  const [running, setRunning]       = useState(false);
  const [sessions, setSessions]     = useState(0);
  const [customMins, setCustomMins] = useState('');
  const intervalRef                 = useRef(null);
  const mode                        = MODES[modeIdx];

  const total = (customMins ? Number(customMins) : mode.minutes) * 60;
  const pct   = (seconds / total) * 100;
  const mins  = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs  = String(seconds % 60).padStart(2, '0');

  const tick = useCallback(() => {
    setSeconds(s => {
      if (s <= 1) {
        setRunning(false);
        clearInterval(intervalRef.current);
        setSessions(n => n + 1);
        try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAA...').play(); } catch {}
        return 0;
      }
      return s - 1;
    });
  }, []);

  useEffect(() => {
    if (running) { intervalRef.current = setInterval(tick, 1000); }
    else { clearInterval(intervalRef.current); }
    return () => clearInterval(intervalRef.current);
  }, [running, tick]);

  const switchMode = (idx) => {
    setModeIdx(idx);
    setRunning(false);
    setCustomMins('');
    setSeconds(MODES[idx].minutes * 60);
  };

  const reset = () => { setRunning(false); setSeconds(total); };

  const radius = 80, circ = 2 * Math.PI * radius;
  const dash   = circ * (pct / 100);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Pomodoro Timer</span>
      </div>
      <div className="p-5 space-y-6">
        {/* Mode switcher */}
        <div className="flex justify-center">
          <div className="flex rounded-2xl border border-surface-200 overflow-hidden bg-surface-50 p-1 gap-1">
            {MODES.map((m, i) => (
              <button key={m.id} onClick={() => switchMode(i)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${modeIdx === i ? `${m.bg} ${m.color} shadow-sm` : 'text-surface-500 hover:text-surface-700'}`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timer circle */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <svg width="200" height="200" className="-rotate-90">
              <circle cx="100" cy="100" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle cx="100" cy="100" r={radius} fill="none"
                className={mode.ring}
                strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${dash} ${circ}`}
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`font-display font-bold text-5xl tabular-nums ${mode.color}`}>
                {mins}:{secs}
              </div>
              <div className="text-surface-500 text-sm mt-1">{mode.label}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button onClick={reset} className="btn-secondary w-12 h-12 p-0 text-xl">↺</button>
            <button
              onClick={() => setRunning(!running)}
              className={`w-16 h-16 rounded-2xl text-white text-2xl font-bold shadow-lg transition-all active:scale-95 ${running ? 'bg-amber-500 hover:bg-amber-600' : 'bg-brand-600 hover:bg-brand-700'}`}>
              {running ? '⏸' : '▶'}
            </button>
            <button onClick={() => setSessions(0)} className="btn-secondary w-12 h-12 p-0 text-sm">🔄</button>
          </div>
        </div>

        {/* Sessions + custom time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-surface-50 rounded-xl border border-surface-200">
            <div className="font-display font-bold text-3xl text-brand-700">{sessions}</div>
            <div className="text-xs text-surface-500 mt-0.5">Sessions completed</div>
          </div>
          <div>
            <label className="block text-xs font-medium text-surface-600 mb-1.5">Custom duration (min)</label>
            <input type="number" min="1" max="120" value={customMins}
              onChange={e => { setCustomMins(e.target.value); setRunning(false); setSeconds(Number(e.target.value)*60||mode.minutes*60); }}
              placeholder={String(mode.minutes)}
              className="input-field" />
          </div>
        </div>

        {/* Tips */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-sm text-brand-800">
          <strong>Pomodoro Technique:</strong> Work for 25 minutes, then take a 5-minute break. After 4 sessions, take a 15-minute long break.
        </div>
      </div>
    </div>
  );
}
