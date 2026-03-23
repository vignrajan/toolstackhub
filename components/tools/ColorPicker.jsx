'use client';
import { useState } from 'react';

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return { r, g, b };
}
function hexToHsl(hex) {
  let { r, g, b } = hexToRgb(hex);
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if (max === min) { h = s = 0; } else {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      case b: h = ((r-g)/d + 4)/6; break;
    }
  }
  return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) };
}
function hexToCmyk(hex) {
  let { r, g, b } = hexToRgb(hex);
  r /= 255; g /= 255; b /= 255;
  const k = 1 - Math.max(r,g,b);
  if (k === 1) return { c:0, m:0, y:0, k:100 };
  return { c: Math.round((1-r-k)/(1-k)*100), m: Math.round((1-g-k)/(1-k)*100), y: Math.round((1-b-k)/(1-k)*100), k: Math.round(k*100) };
}
function rgbToHex(r,g,b) {
  return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

const PALETTES = [
  '#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#6366f1','#a855f7','#ec4899',
  '#ffffff','#f1f5f9','#94a3b8','#475569','#1e293b','#0f172a','#000000','#f59e0b',
];

export default function ColorPicker() {
  const [hex, setHex]       = useState('#6366f1');
  const [copied, setCopied] = useState('');

  const rgb  = hexToRgb(hex);
  const hsl  = hexToHsl(hex);
  const cmyk = hexToCmyk(hex);

  const copy = (val, label) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const formats = [
    { label: 'HEX',  value: hex.toUpperCase() },
    { label: 'RGB',  value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: 'HSL',  value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
    { label: 'CMYK', value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Color Picker</span>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg" style={{ background: hex }} />
            <input type="color" value={hex} onChange={e => setHex(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-2xl" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-surface-500 mb-1.5 font-medium">HEX Value</p>
            <input type="text" value={hex.toUpperCase()}
              onChange={e => { if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) setHex(e.target.value); }}
              className="input-field font-mono text-lg font-bold uppercase w-40" maxLength={7} />
            <p className="text-xs text-surface-400 mt-1.5">Click the color swatch to open picker</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {formats.map(f => (
            <div key={f.label} className="flex items-center gap-3 p-3 bg-surface-50 rounded-xl border border-surface-200 group">
              <span className="text-xs font-bold text-surface-400 w-10 shrink-0">{f.label}</span>
              <span className="font-mono text-sm text-surface-800 flex-1 select-all">{f.value}</span>
              <button onClick={() => copy(f.value, f.label)}
                className="opacity-0 group-hover:opacity-100 text-xs text-surface-400 hover:text-brand-600 transition-all">
                {copied === f.label ? '✅' : '📋'}
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">RGB Sliders</p>
          {[
            { label: 'R', value: rgb.r },
            { label: 'G', value: rgb.g },
            { label: 'B', value: rgb.b },
          ].map(ch => (
            <div key={ch.label} className="flex items-center gap-3">
              <span className="text-xs font-bold text-surface-500 w-4">{ch.label}</span>
              <input type="range" min="0" max="255" value={ch.value}
                onChange={e => {
                  const v = Number(e.target.value);
                  const newRgb = { ...rgb, [ch.label.toLowerCase()]: v };
                  setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
                }}
                className="flex-1 accent-brand-600" />
              <span className="text-xs font-mono text-surface-600 w-8 text-right">{ch.value}</span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Presets</p>
          <div className="flex flex-wrap gap-2">
            {PALETTES.map(c => (
              <button key={c} onClick={() => setHex(c)}
                className="w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110"
                style={{ background: c, borderColor: hex === c ? '#6366f1' : '#e2e8f0' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}