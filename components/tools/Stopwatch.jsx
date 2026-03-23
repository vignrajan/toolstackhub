'use client';
import { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [ms, setMs]         = useState(0);
  const [running, setRun]   = useState(false);
  const [laps, setLaps]     = useState([]);
  const startRef            = useRef(null);
  const accRef              = useRef(0);

  useEffect(() => {
    if (!running) return;
    startRef.current = Date.now();
    const id = setInterval(() => setMs(accRef.current + Date.now() - startRef.current), 16);
    return () => clearInterval(id);
  }, [running]);

  const start  = () => setRun(true);
  const pause  = () => { accRef.current = ms; setRun(false); };
  const reset  = () => { setRun(false); accRef.current = 0; setMs(0); setLaps([]); };
  const lap    = () => setLaps(l => [{ id: l.length+1, ms, split: ms - (l[l.length-1]?.ms||0) }, ...l]);

  const fmt = (ms) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const c = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(c).padStart(2,'0')}`;
  };

  const bestLap  = laps.length ? Math.min(...laps.map(l=>l.split)) : null;
  const worstLap = laps.length ? Math.max(...laps.map(l=>l.split)) : null;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Stopwatch</span>
      </div>
      <div className="p-5 space-y-6">
        {/* Display */}
        <div className="text-center py-8 bg-surface-900 rounded-2xl">
          <div className={`font-display font-bold text-6xl sm:text-7xl tabular-nums tracking-tight ${running ? 'text-emerald-400' : 'text-white'}`}>
            {fmt(ms)}
          </div>
          {laps.length > 0 && (
            <div className="text-surface-400 text-sm mt-2">
              Lap {laps.length + 1} — {fmt(ms - (laps[0]?.ms || 0))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button onClick={reset}
            className="w-16 h-16 rounded-2xl bg-surface-100 hover:bg-surface-200 text-surface-700 text-2xl font-bold transition-all active:scale-95">
            ↺
          </button>
          <button
            onClick={running ? pause : start}
            className={`w-20 h-16 rounded-2xl text-white text-xl font-bold shadow-lg transition-all active:scale-95 ${running ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}>
            {running ? '⏸ Pause' : ms > 0 ? '▶ Resume' : '▶ Start'}
          </button>
          <button onClick={lap} disabled={!running}
            className="w-16 h-16 rounded-2xl bg-surface-100 hover:bg-surface-200 disabled:opacity-40 text-surface-700 text-sm font-bold transition-all active:scale-95">
            Lap
          </button>
        </div>

        {/* Laps */}
        {laps.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-surface-700">Lap Times</p>
              <p className="text-xs text-surface-400">{laps.length} laps</p>
            </div>
            <div className="space-y-1.5 max-h-64 overflow-y-auto custom-scrollbar">
              {laps.map((lap) => (
                <div key={lap.id} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm border ${
                  lap.split === bestLap  ? 'bg-emerald-50 border-emerald-200' :
                  lap.split === worstLap ? 'bg-red-50 border-red-200' :
                  'bg-surface-50 border-surface-200'}`}>
                  <span className="text-surface-400 w-6 text-xs">#{lap.id}</span>
                  <span className="font-mono font-medium text-surface-800 flex-1">{fmt(lap.split)}</span>
                  <span className="font-mono text-surface-500 text-xs">{fmt(lap.ms)}</span>
                  {lap.split === bestLap  && <span className="text-emerald-600 text-xs font-bold">BEST</span>}
                  {lap.split === worstLap && laps.length > 1 && <span className="text-red-500 text-xs font-bold">SLOW</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
