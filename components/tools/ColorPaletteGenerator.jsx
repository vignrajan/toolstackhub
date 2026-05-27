'use client';
import { useState, useMemo } from 'react';

// ── Color math helpers ─────────────────────────────────────────────────────
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1,3),16)/255;
  const g = parseInt(hex.slice(3,5),16)/255;
  const b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      default: h = ((r-g)/d + 4)/6;
    }
  }
  return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));
  const S = s/100, L = l/100;
  const C = (1 - Math.abs(2*L-1)) * S;
  const X = C * (1 - Math.abs((h/60)%2 - 1));
  const m = L - C/2;
  let r=0,g=0,b=0;
  if      (h<60)  { r=C; g=X; b=0; }
  else if (h<120) { r=X; g=C; b=0; }
  else if (h<180) { r=0; g=C; b=X; }
  else if (h<240) { r=0; g=X; b=C; }
  else if (h<300) { r=X; g=0; b=C; }
  else            { r=C; g=0; b=X; }
  const toHex = v => Math.round((v+m)*255).toString(16).padStart(2,'0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToRgb(hex) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
}

function contrastColor(hex) {
  const [r,g,b] = hexToRgb(hex);
  const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
  return luminance > 0.5 ? '#1f2937' : '#f9fafb';
}

function generatePalette(hex, type) {
  const [h, s, l] = hexToHsl(hex);
  switch (type) {
    case 'complementary':
      return [hex, hslToHex(h+180,s,l)];
    case 'analogous':
      return [hslToHex(h-30,s,l), hex, hslToHex(h+30,s,l), hslToHex(h+60,s,l)];
    case 'triadic':
      return [hex, hslToHex(h+120,s,l), hslToHex(h+240,s,l)];
    case 'tetradic':
      return [hex, hslToHex(h+90,s,l), hslToHex(h+180,s,l), hslToHex(h+270,s,l)];
    case 'monochromatic':
      return [
        hslToHex(h,s,Math.max(10,l-30)),
        hslToHex(h,s,Math.max(10,l-15)),
        hex,
        hslToHex(h,s,Math.min(90,l+15)),
        hslToHex(h,s,Math.min(90,l+30)),
      ];
    case 'shades':
      return [
        hslToHex(h,s,10), hslToHex(h,s,25), hslToHex(h,s,40),
        hex,
        hslToHex(h,s,65), hslToHex(h,s,80), hslToHex(h,s,93),
      ];
    default: return [hex];
  }
}

const PALETTE_TYPES = [
  { key: 'monochromatic', label: 'Monochromatic' },
  { key: 'analogous',     label: 'Analogous' },
  { key: 'complementary', label: 'Complementary' },
  { key: 'triadic',       label: 'Triadic' },
  { key: 'tetradic',      label: 'Tetradic' },
  { key: 'shades',        label: 'Tints & Shades' },
];

function ColorSwatch({ hex }) {
  const [copied, setCopied] = useState(false);
  const [h,s,l] = hexToHsl(hex);
  const [r,g,b] = hexToRgb(hex);
  const text = contrastColor(hex);

  const copy = async (val) => {
    try { await navigator.clipboard.writeText(val); }
    catch {
      const el = document.createElement('textarea');
      el.value=val; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-surface-200 shadow-sm">
      <div
        className="h-24 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
        style={{ backgroundColor: hex }}
        onClick={() => copy(hex)}
        title="Click to copy HEX"
      >
        <span className="font-mono font-bold text-sm" style={{ color: text }}>
          {copied ? '✓ Copied!' : hex.toUpperCase()}
        </span>
      </div>
      <div className="p-2 bg-white space-y-0.5">
        <button onClick={() => copy(hex)} className="w-full text-left text-xs font-mono hover:text-brand-600 transition-colors truncate">
          HEX: {hex.toUpperCase()}
        </button>
        <button onClick={() => copy(`rgb(${r}, ${g}, ${b})`)} className="w-full text-left text-xs text-surface-500 hover:text-brand-600 transition-colors truncate">
          RGB: {r}, {g}, {b}
        </button>
        <button onClick={() => copy(`hsl(${h}, ${s}%, ${l}%)`)} className="w-full text-left text-xs text-surface-500 hover:text-brand-600 transition-colors truncate">
          HSL: {h}°, {s}%, {l}%
        </button>
      </div>
    </div>
  );
}

export default function ColorPaletteGenerator() {
  const [baseColor,  setBaseColor]  = useState('#3b82f6');
  const [hexInput,   setHexInput]   = useState('#3b82f6');
  const [paletteType, setPaletteType] = useState('monochromatic');

  const palette = useMemo(() => generatePalette(baseColor, paletteType), [baseColor, paletteType]);

  const handleHexInput = (val) => {
    setHexInput(val);
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      setBaseColor(val.toLowerCase());
    }
  };

  const [h, s, l] = hexToHsl(baseColor);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Color Palette Generator</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Base color input */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Base Color</label>
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="color"
                  value={baseColor}
                  onChange={e => { setBaseColor(e.target.value); setHexInput(e.target.value); }}
                  className="w-12 h-10 rounded-lg border border-surface-200 cursor-pointer p-1"
                />
              </div>
              <input
                type="text"
                value={hexInput}
                onChange={e => handleHexInput(e.target.value)}
                placeholder="#3b82f6"
                className="input-field font-mono text-sm flex-1"
                maxLength={7}
              />
            </div>
            <p className="text-xs text-surface-400 mt-1">HSL: {h}°, {s}%, {l}%</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">Palette Type</label>
            <select
              value={paletteType}
              onChange={e => setPaletteType(e.target.value)}
              className="input-field text-sm"
            >
              {PALETTE_TYPES.map(t => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Palette type pills */}
        <div className="flex flex-wrap gap-2">
          {PALETTE_TYPES.map(t => (
            <button key={t.key} onClick={() => setPaletteType(t.key)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${paletteType===t.key ? 'bg-brand-100 border-brand-400 text-brand-700 font-semibold' : 'bg-surface-50 border-surface-200 text-surface-600 hover:border-brand-300'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Palette */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
            {PALETTE_TYPES.find(t => t.key === paletteType)?.label} Palette ({palette.length} colors)
          </p>
          <div className={`grid gap-3 ${palette.length <= 2 ? 'grid-cols-2' : palette.length <= 4 ? 'grid-cols-2 sm:grid-cols-4' : palette.length <= 5 ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-7'}`}>
            {palette.map(hex => (
              <ColorSwatch key={hex} hex={hex} />
            ))}
          </div>
        </div>

        {/* Color wheel hint */}
        <p className="text-xs text-surface-400">Click any swatch or value to copy it to clipboard.</p>
      </div>
    </div>
  );
}
