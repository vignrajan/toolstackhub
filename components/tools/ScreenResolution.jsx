'use client';
import { useState, useEffect } from 'react';

export default function ScreenResolution() {
  const [info, setInfo] = useState(null);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const update = () => setInfo({
      screenW:    screen.width,
      screenH:    screen.height,
      windowW:    window.innerWidth,
      windowH:    window.innerHeight,
      colorDepth: screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      orientation: screen.orientation?.type || (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'),
      physicalW:  Math.round(screen.width * window.devicePixelRatio),
      physicalH:  Math.round(screen.height * window.devicePixelRatio),
    });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const copy = (val, key) => { navigator.clipboard.writeText(val); setCopied(key); setTimeout(() => setCopied(''), 2000); };

  if (!info) return <div className="bg-white border border-surface-200 rounded-2xl p-8 text-center text-surface-400">Loading...</div>;

  const breakpoint = info.windowW < 640 ? 'Mobile (< 640px)' : info.windowW < 768 ? 'SM (640–767px)' : info.windowW < 1024 ? 'MD (768–1023px)' : info.windowW < 1280 ? 'LG (1024–1279px)' : info.windowW < 1536 ? 'XL (1280–1535px)' : '2XL (≥ 1536px)';

  const rows = [
    { label: 'Screen Resolution',    value: `${info.screenW} × ${info.screenH} px`,  key: 'screen' },
    { label: 'Browser Window Size',  value: `${info.windowW} × ${info.windowH} px`,  key: 'window' },
    { label: 'Physical Resolution',  value: `${info.physicalW} × ${info.physicalH} px`, key: 'phys' },
    { label: 'Device Pixel Ratio',   value: `${info.pixelRatio}x`,                    key: 'dpr'    },
    { label: 'Color Depth',          value: `${info.colorDepth}-bit`,                 key: 'color'  },
    { label: 'Orientation',          value: info.orientation,                          key: 'orient' },
    { label: 'Tailwind Breakpoint',  value: breakpoint,                               key: 'bp'     },
  ];

  const isRetina = info.pixelRatio >= 2;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-600">Screen Resolution Checker</span>
        <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Live</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Big display */}
        <div className="text-center py-8 bg-gradient-to-br from-brand-50 to-violet-50 rounded-2xl border border-brand-100">
          <div className="font-display font-bold text-5xl text-brand-700">
            {info.windowW} × {info.windowH}
          </div>
          <div className="text-surface-500 mt-1">Browser viewport</div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">{breakpoint}</span>
            {isRetina && <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Retina Display</span>}
          </div>
        </div>

        {/* Details table */}
        <div className="space-y-2">
          {rows.map(r => (
            <div key={r.key} className="flex items-center gap-3 p-3 bg-surface-50 border border-surface-200 rounded-xl group">
              <span className="text-sm text-surface-600 flex-1">{r.label}</span>
              <span className="font-mono text-sm font-medium text-surface-900">{r.value}</span>
              <button onClick={() => copy(r.value, r.key)}
                className="opacity-0 group-hover:opacity-100 text-xs text-surface-400 hover:text-brand-600 transition-all">
                {copied === r.key ? '✅' : '📋'}
              </button>
            </div>
          ))}
        </div>

        {/* Common resolutions */}
        <div>
          <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Common resolutions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { label: 'iPhone SE',      res: '375 × 667'  },
              { label: 'iPhone 14',      res: '390 × 844'  },
              { label: 'iPad',           res: '768 × 1024' },
              { label: 'Laptop',         res: '1366 × 768' },
              { label: 'Full HD',        res: '1920 × 1080'},
              { label: '4K UHD',         res: '3840 × 2160'},
            ].map(r => (
              <div key={r.label} className="px-3 py-2 bg-surface-50 border border-surface-200 rounded-lg text-xs">
                <div className="font-medium text-surface-800">{r.label}</div>
                <div className="font-mono text-surface-500">{r.res}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
