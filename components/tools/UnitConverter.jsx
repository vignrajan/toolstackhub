'use client';
import { useState, useMemo } from 'react';

const CATEGORIES = {
  Length: {
    icon: '📏',
    base: 'meter',
    units: {
      kilometer:   { factor: 1000,       label: 'Kilometer (km)' },
      meter:       { factor: 1,          label: 'Meter (m)' },
      centimeter:  { factor: 0.01,       label: 'Centimeter (cm)' },
      millimeter:  { factor: 0.001,      label: 'Millimeter (mm)' },
      micrometer:  { factor: 1e-6,       label: 'Micrometer (μm)' },
      mile:        { factor: 1609.344,   label: 'Mile (mi)' },
      yard:        { factor: 0.9144,     label: 'Yard (yd)' },
      foot:        { factor: 0.3048,     label: 'Foot (ft)' },
      inch:        { factor: 0.0254,     label: 'Inch (in)' },
      'nautical mile': { factor: 1852,   label: 'Nautical Mile (nmi)' },
    },
  },
  Weight: {
    icon: '⚖️',
    base: 'kilogram',
    units: {
      tonne:     { factor: 1000,       label: 'Tonne (t)' },
      kilogram:  { factor: 1,          label: 'Kilogram (kg)' },
      gram:      { factor: 0.001,      label: 'Gram (g)' },
      milligram: { factor: 1e-6,       label: 'Milligram (mg)' },
      pound:     { factor: 0.453592,   label: 'Pound (lb)' },
      ounce:     { factor: 0.0283495,  label: 'Ounce (oz)' },
      stone:     { factor: 6.35029,    label: 'Stone (st)' },
    },
  },
  Temperature: {
    icon: '🌡️',
    base: 'celsius',
    custom: true,
    units: {
      celsius:    { label: 'Celsius (°C)' },
      fahrenheit: { label: 'Fahrenheit (°F)' },
      kelvin:     { label: 'Kelvin (K)' },
    },
    toBase: (v, from) => {
      if (from === 'celsius')    return v;
      if (from === 'fahrenheit') return (v - 32) * 5/9;
      return v - 273.15;
    },
    fromBase: (v, to) => {
      if (to === 'celsius')    return v;
      if (to === 'fahrenheit') return v * 9/5 + 32;
      return v + 273.15;
    },
  },
  Area: {
    icon: '📐',
    base: 'square meter',
    units: {
      'square kilometer': { factor: 1e6,        label: 'Square Kilometer (km²)' },
      'square meter':     { factor: 1,           label: 'Square Meter (m²)' },
      'square centimeter':{ factor: 0.0001,      label: 'Square Centimeter (cm²)' },
      hectare:            { factor: 10000,        label: 'Hectare (ha)' },
      acre:               { factor: 4046.86,      label: 'Acre' },
      'square mile':      { factor: 2589988.11,   label: 'Square Mile (mi²)' },
      'square yard':      { factor: 0.836127,     label: 'Square Yard (yd²)' },
      'square foot':      { factor: 0.092903,     label: 'Square Foot (ft²)' },
      'square inch':      { factor: 0.00064516,   label: 'Square Inch (in²)' },
    },
  },
  Volume: {
    icon: '🧊',
    base: 'liter',
    units: {
      'cubic meter':  { factor: 1000,      label: 'Cubic Meter (m³)' },
      liter:          { factor: 1,          label: 'Liter (L)' },
      milliliter:     { factor: 0.001,      label: 'Milliliter (mL)' },
      gallon:         { factor: 3.78541,    label: 'Gallon (US gal)' },
      quart:          { factor: 0.946353,   label: 'Quart (qt)' },
      pint:           { factor: 0.473176,   label: 'Pint (pt)' },
      cup:            { factor: 0.236588,   label: 'Cup' },
      'fluid ounce':  { factor: 0.0295735,  label: 'Fluid Ounce (fl oz)' },
      tablespoon:     { factor: 0.0147868,  label: 'Tablespoon (tbsp)' },
    },
  },
  Speed: {
    icon: '🚀',
    base: 'm/s',
    units: {
      'km/h':  { factor: 0.277778,  label: 'Kilometer/hour (km/h)' },
      'm/s':   { factor: 1,          label: 'Meter/second (m/s)' },
      'mph':   { factor: 0.44704,    label: 'Miles/hour (mph)' },
      'knot':  { factor: 0.514444,   label: 'Knot (kn)' },
      'ft/s':  { factor: 0.3048,     label: 'Feet/second (ft/s)' },
    },
  },
  Digital: {
    icon: '💾',
    base: 'byte',
    units: {
      bit:      { factor: 0.125,          label: 'Bit (b)' },
      byte:     { factor: 1,              label: 'Byte (B)' },
      kilobyte: { factor: 1024,           label: 'Kilobyte (KB)' },
      megabyte: { factor: 1048576,        label: 'Megabyte (MB)' },
      gigabyte: { factor: 1073741824,     label: 'Gigabyte (GB)' },
      terabyte: { factor: 1099511627776,  label: 'Terabyte (TB)' },
      petabyte: { factor: 1.125899907e15, label: 'Petabyte (PB)' },
    },
  },
};

function formatNum(n) {
  if (Math.abs(n) >= 1e9) return n.toExponential(4);
  if (Math.abs(n) >= 0.0001 || n === 0) {
    const str = n.toPrecision(7).replace(/\.?0+$/, '');
    return Number(str).toLocaleString('en-IN', { maximumFractionDigits: 8 });
  }
  return n.toExponential(4);
}

export default function UnitConverter() {
  const [category, setCategory] = useState('Length');
  const [fromUnit, setFromUnit] = useState('');
  const [inputVal, setInputVal] = useState('1');
  const [copiedUnit, setCopiedUnit] = useState(null);

  const cat = CATEGORIES[category];

  const defaultFrom = Object.keys(cat.units)[0];
  const activeFrom = fromUnit && cat.units[fromUnit] ? fromUnit : defaultFrom;

  const conversions = useMemo(() => {
    const val = parseFloat(inputVal);
    if (isNaN(val)) return {};
    const units = cat.units;
    const result = {};
    if (cat.custom) {
      const baseVal = cat.toBase(val, activeFrom);
      for (const unit of Object.keys(units)) {
        result[unit] = cat.fromBase(baseVal, unit);
      }
    } else {
      const inBase = val * units[activeFrom].factor;
      for (const [unit, { factor }] of Object.entries(units)) {
        result[unit] = inBase / factor;
      }
    }
    return result;
  }, [category, activeFrom, inputVal, cat]);

  const copyValue = async (unit) => {
    const val = conversions[unit];
    if (val == null) return;
    const text = formatNum(val);
    try { await navigator.clipboard.writeText(text); }
    catch {
      const el = document.createElement('textarea');
      el.value = text; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
    }
    setCopiedUnit(unit);
    setTimeout(() => setCopiedUnit(null), 1500);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Category tabs */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex flex-wrap gap-2">
        {Object.entries(CATEGORIES).map(([name, { icon }]) => (
          <button key={name}
            onClick={() => { setCategory(name); setFromUnit(''); setInputVal('1'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${category===name ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300'}`}>
            <span>{icon}</span>{name}
          </button>
        ))}
      </div>

      <div className="p-5 space-y-5">
        {/* Input */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-1.5 uppercase tracking-wider">Value</label>
            <input
              type="number"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              className="input-field text-lg font-semibold"
              placeholder="Enter value…"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-1.5 uppercase tracking-wider">From Unit</label>
            <select
              value={activeFrom}
              onChange={e => setFromUnit(e.target.value)}
              className="input-field text-sm"
            >
              {Object.entries(cat.units).map(([key, { label }]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results grid */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Converted Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(cat.units).map(([unit, { label }]) => {
              const val = conversions[unit];
              const isSource = unit === activeFrom;
              return (
                <button
                  key={unit}
                  onClick={() => { setFromUnit(unit); setInputVal(val != null ? String(val) : '0'); }}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${isSource ? 'bg-brand-50 border-brand-300' : 'bg-surface-50 border-surface-200 hover:border-brand-200 hover:bg-brand-50/50'}`}
                >
                  <div>
                    <p className="text-xs text-surface-500">{label}</p>
                    <p className={`text-sm font-semibold mt-0.5 font-mono ${isSource ? 'text-brand-700' : 'text-surface-900'}`}>
                      {val != null ? formatNum(val) : '—'}
                    </p>
                  </div>
                  <span
                    onClick={e => { e.stopPropagation(); copyValue(unit); }}
                    className="ml-2 text-xs text-surface-400 hover:text-brand-600 transition-colors px-2 py-1 rounded cursor-pointer"
                  >
                    {copiedUnit === unit ? '✓' : '⎘'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-surface-400">Click any result to use it as the new input value.</p>
      </div>
    </div>
  );
}
