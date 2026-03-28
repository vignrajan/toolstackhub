'use client';
import { useState, useCallback } from 'react';

// ── Indian / Asian BMI thresholds (WHO recommendation for South Asians) ──────
const BMI_CATEGORIES = [
  { label: 'Severely Underweight', min: 0,    max: 16,   color: '#3B8BD4', bg: '#E6F1FB', risk: 'Very High',  icon: '⚠️' },
  { label: 'Underweight',          min: 16,   max: 18.5, color: '#185FA5', bg: '#B5D4F4', risk: 'High',       icon: '↓'  },
  { label: 'Normal Weight',        min: 18.5, max: 23,   color: '#3B6D11', bg: '#EAF3DE', risk: 'Low',        icon: '✓'  },
  { label: 'Overweight',           min: 23,   max: 27.5, color: '#BA7517', bg: '#FAEEDA', risk: 'Moderate',   icon: '↑'  },
  { label: 'Obese Class I',        min: 27.5, max: 32.5, color: '#D85A30', bg: '#FAECE7', risk: 'High',       icon: '⚠️' },
  { label: 'Obese Class II',       min: 32.5, max: 37.5, color: '#A32D2D', bg: '#FCEBEB', risk: 'Very High',  icon: '⚠️' },
  { label: 'Obese Class III',      min: 37.5, max: 999,  color: '#791F1F', bg: '#F7C1C1', risk: 'Extreme',    icon: '🚨' },
];

const HEALTH_RISKS = {
  'Severely Underweight': ['Malnutrition and nutrient deficiencies', 'Osteoporosis and bone weakness', 'Anemia and fatigue', 'Weakened immune system'],
  'Underweight':          ['Increased infection risk', 'Nutritional deficiencies', 'Fertility issues', 'Fatigue and weakness'],
  'Normal Weight':        ['Lowest risk for chronic diseases', 'Optimal cardiovascular function', 'Better energy and stamina', 'Reduced risk of type 2 diabetes'],
  'Overweight':           ['Increased risk of type 2 diabetes', 'Elevated blood pressure', 'Joint pain and stress', 'Higher cardiovascular risk'],
  'Obese Class I':        ['High diabetes risk (8× normal)', 'Sleep apnea risk', 'Hypertension', 'Fatty liver disease'],
  'Obese Class II':       ['Severe cardiovascular disease risk', 'Type 2 diabetes highly likely', 'Breathing difficulties', 'Joint and mobility problems'],
  'Obese Class III':      ['Extremely high risk of all chronic diseases', 'Significantly reduced life expectancy', 'Severe mobility limitations', 'High surgical risk'],
};

function getCategory(bmi, useIndian = true) {
  const cats = useIndian ? BMI_CATEGORIES : BMI_CATEGORIES.map(c =>
    c.label === 'Normal Weight' ? { ...c, max: 25 }
    : c.label === 'Overweight'  ? { ...c, min: 25, max: 30 }
    : c.label === 'Obese Class I' ? { ...c, min: 30, max: 35 }
    : c.label === 'Obese Class II' ? { ...c, min: 35, max: 40 }
    : c.label === 'Obese Class III' ? { ...c, min: 40 }
    : c
  );
  return cats.find(c => bmi >= c.min && bmi < c.max) || cats[cats.length - 1];
}

// BMI gauge arc component
function BMIGauge({ bmi }) {
  const clampedBMI = Math.min(Math.max(bmi, 10), 45);
  const pct        = (clampedBMI - 10) / (45 - 10);          // 0–1
  const angle      = -150 + pct * 300;                         // -150° to 150°
  const rad        = (angle * Math.PI) / 180;
  const cx         = 100, cy = 90, r = 70;
  const nx         = cx + r * Math.cos(rad);
  const ny         = cy + r * Math.sin(rad);

  // Arc segments
  const segments = [
    { from: -150, to: -110, color: '#3B8BD4' },
    { from: -110, to:  -60, color: '#185FA5' },
    { from:  -60, to:   10, color: '#3B6D11' },
    { from:   10, to:   55, color: '#BA7517' },
    { from:   55, to:   95, color: '#D85A30' },
    { from:   95, to:  125, color: '#A32D2D' },
    { from:  125, to:  150, color: '#791F1F' },
  ];

  function polarToXY(angleDeg, radius = 70) {
    const a = (angleDeg * Math.PI) / 180;
    return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)];
  }

  function arcPath(fromDeg, toDeg, innerR = 56, outerR = 70) {
    const [x1, y1] = polarToXY(fromDeg, outerR);
    const [x2, y2] = polarToXY(toDeg,  outerR);
    const [x3, y3] = polarToXY(toDeg,  innerR);
    const [x4, y4] = polarToXY(fromDeg, innerR);
    const lg = (toDeg - fromDeg) > 180 ? 1 : 0;
    return `M${x1},${y1} A${outerR},${outerR},0,${lg},1,${x2},${y2} L${x3},${y3} A${innerR},${innerR},0,${lg},0,${x4},${y4} Z`;
  }

  return (
    <svg viewBox="0 0 200 110" className="w-full max-w-xs">
      {segments.map((s, i) => (
        <path key={i} d={arcPath(s.from, s.to)} fill={s.color} opacity="0.85" />
      ))}
      {/* Needle */}
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="5" fill="#1a1a1a" />
      <circle cx={cx} cy={cy} r="3" fill="white" />
      {/* Labels */}
      {[
        { v:'10', a:-150 }, { v:'18.5', a:-60 }, { v:'23', a:10 },
        { v:'27.5', a:55 }, { v:'32.5', a:95 }, { v:'45', a:150 },
      ].map(({ v, a }) => {
        const [lx, ly] = polarToXY(a, 80);
        return <text key={v} x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="6" fill="#555" fontFamily="Arial">{v}</text>;
      })}
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function BMICalculator({ prefill = {} }) {
  const [unit,      setUnit]      = useState('metric');   // metric | imperial
  const [heightCm,  setHeightCm]  = useState(prefill.heightCm  || 170);
  const [heightFt,  setHeightFt]  = useState(prefill.heightFt  || 5);
  const [heightIn,  setHeightIn]  = useState(prefill.heightIn  || 7);
  const [weight,    setWeight]    = useState(prefill.weight     || 70);
  const [age,       setAge]       = useState(prefill.age        || 30);
  const [gender,    setGender]    = useState(prefill.gender     || 'male');
  const [useIndian, setUseIndian] = useState(true);
  const [copied,    setCopied]    = useState(false);

  const heightM = unit === 'metric'
    ? heightCm / 100
    : (Number(heightFt) * 12 + Number(heightIn)) * 0.0254;

  const weightKg = unit === 'metric' ? Number(weight) : Number(weight) * 0.453592;

  const bmi      = weightKg / (heightM * heightM);
  const bmiFixed = isFinite(bmi) && bmi > 0 ? bmi : 0;
  const cat      = getCategory(bmiFixed, useIndian);
  const risks    = HEALTH_RISKS[cat.label] || [];

  // Weight to reach normal
  const normalMaxBMI = useIndian ? 23 : 25;
  const normalMinBMI = 18.5;
  const idealMaxKg   = normalMaxBMI * heightM * heightM;
  const idealMinKg   = normalMinBMI * heightM * heightM;
  const weightDiff   = weightKg - idealMaxKg;

  const shareText = `My BMI is ${bmiFixed.toFixed(1)} — ${cat.label} (${useIndian ? 'Asian' : 'WHO'} standard). Calculated on ToolStackHub.`;

  const copyResult = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Unit toggle */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-semibold text-surface-700">BMI Calculator</span>
        <div className="flex gap-3 items-center">
          {/* Indian vs WHO toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-surface-500">Indian thresholds</span>
            <button onClick={() => setUseIndian(!useIndian)}
              className={`w-9 h-5 rounded-full relative transition-colors ${useIndian ? 'bg-brand-600' : 'bg-surface-300'}`}>
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${useIndian ? 'left-4' : 'left-0.5'}`} />
            </button>
          </div>
          {/* Metric / Imperial */}
          <div className="flex rounded-lg overflow-hidden border border-surface-200">
            {['metric', 'imperial'].map(u => (
              <button key={u} onClick={() => setUnit(u)}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${unit === u ? 'bg-brand-600 text-white' : 'bg-white text-surface-600'}`}>
                {u === 'metric' ? 'kg / cm' : 'lb / ft'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-surface-100">

        {/* ── Inputs ────────────────────────────────────────── */}
        <div className="p-6 space-y-5">

          {/* Age + Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1.5">Age</label>
              <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2.5 focus-within:border-brand-400">
                <input type="number" min="5" max="120" value={age}
                  onChange={e => setAge(Number(e.target.value))}
                  className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none w-full" />
                <span className="text-surface-400 text-xs">yrs</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1.5">Gender</label>
              <div className="grid grid-cols-2 gap-2">
                {['male', 'female'].map(g => (
                  <button key={g} onClick={() => setGender(g)}
                    className={`py-2.5 rounded-xl border-2 text-xs font-bold transition-colors ${gender === g ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-surface-200 text-surface-600'}`}>
                    {g === 'male' ? '♂ Male' : '♀ Female'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Height */}
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Height</label>
            {unit === 'metric' ? (
              <div>
                <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2.5 focus-within:border-brand-400 mb-2">
                  <input type="number" min="100" max="250" value={heightCm}
                    onChange={e => setHeightCm(Number(e.target.value))}
                    className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none" />
                  <span className="text-surface-400 text-sm">cm</span>
                </div>
                <input type="range" min="120" max="220" value={heightCm}
                  onChange={e => setHeightCm(Number(e.target.value))}
                  className="w-full accent-brand-600" />
                <div className="flex justify-between text-[10px] text-surface-400 mt-0.5"><span>120cm</span><span>220cm</span></div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2.5">
                  <input type="number" min="4" max="7" value={heightFt}
                    onChange={e => setHeightFt(Number(e.target.value))}
                    className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none" />
                  <span className="text-surface-400 text-xs">ft</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2.5">
                  <input type="number" min="0" max="11" value={heightIn}
                    onChange={e => setHeightIn(Number(e.target.value))}
                    className="flex-1 text-sm font-bold text-surface-900 bg-transparent focus:outline-none" />
                  <span className="text-surface-400 text-xs">in</span>
                </div>
              </div>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <div className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2.5 focus-within:border-brand-400 mb-2">
              <input type="number" min="20" max="300" value={weight}
                onChange={e => setWeight(Number(e.target.value))}
                className="flex-1 text-lg font-bold text-surface-900 bg-transparent focus:outline-none" />
              <span className="text-surface-400 text-sm">{unit === 'metric' ? 'kg' : 'lbs'}</span>
            </div>
            <input type="range" min={unit === 'metric' ? 30 : 66} max={unit === 'metric' ? 200 : 440}
              value={weight} onChange={e => setWeight(Number(e.target.value))}
              className="w-full accent-brand-600" />
          </div>

          {/* Indian threshold note */}
          <div className={`p-3 rounded-xl border text-xs leading-relaxed ${useIndian ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-surface-50 border-surface-200 text-surface-600'}`}>
            {useIndian
              ? '🇮🇳 Using Indian/Asian BMI thresholds — WHO recommends 23+ as overweight for South Asians (vs 25+ for Western populations). Toggle off for global WHO standards.'
              : '🌍 Using global WHO BMI thresholds. Indian/Asian populations have higher health risks at lower BMI — toggle on for more accurate India-specific results.'}
          </div>
        </div>

        {/* ── Results ───────────────────────────────────────── */}
        <div className="p-6 space-y-5">
          {bmiFixed > 0 ? (
            <>
              {/* Gauge */}
              <div className="flex flex-col items-center">
                <BMIGauge bmi={bmiFixed} />
                {/* BMI number */}
                <div className="text-center mt-1">
                  <div className="font-black text-5xl" style={{ color: cat.color }}>
                    {bmiFixed.toFixed(1)}
                  </div>
                  <div className="text-sm font-bold mt-1" style={{ color: cat.color }}>{cat.label}</div>
                  <div className="text-xs text-surface-500 mt-0.5">
                    {useIndian ? 'Asian / Indian threshold' : 'WHO global threshold'}
                  </div>
                </div>
              </div>

              {/* Health risk badge */}
              <div className="rounded-xl p-4 border" style={{ background: cat.bg, borderColor: cat.color + '40' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: cat.color }}>
                    Health Risk Level
                  </span>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full text-white" style={{ background: cat.color }}>
                    {cat.risk}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {risks.map((r, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[10px] mt-0.5" style={{ color: cat.color }}>•</span>
                      <span className="text-xs text-surface-700 leading-tight">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weight to reach healthy */}
              <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">Healthy Weight Range for Your Height</div>
                <div className="flex justify-between text-sm">
                  <span className="text-surface-600">Minimum healthy</span>
                  <span className="font-semibold text-surface-900">{idealMinKg.toFixed(1)} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-surface-600">Maximum healthy</span>
                  <span className="font-semibold text-surface-900">{idealMaxKg.toFixed(1)} kg</span>
                </div>
                {Math.abs(weightDiff) > 0.5 && (
                  <div className="mt-2 pt-2 border-t border-surface-200 flex justify-between text-sm">
                    <span className="text-surface-600">{weightDiff > 0 ? 'Lose to reach healthy' : 'Gain to reach healthy'}</span>
                    <span className="font-bold" style={{ color: weightDiff > 0 ? '#D85A30' : '#3B6D11' }}>
                      {Math.abs(weightDiff).toFixed(1)} kg
                    </span>
                  </div>
                )}
                {Math.abs(weightDiff) <= 0.5 && (
                  <div className="mt-2 pt-2 border-t border-surface-200 text-center text-xs font-semibold text-emerald-700">
                    ✓ You are within the healthy weight range
                  </div>
                )}
              </div>

              {/* BMI scale reference */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                  BMI Scale ({useIndian ? 'Indian / Asian' : 'WHO Global'})
                </div>
                {BMI_CATEGORIES.slice(1).map((c, i) => (
                  <div key={i} className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg transition-all ${cat.label === c.label ? 'font-bold ring-1 ring-offset-1' : 'opacity-70'}`}
                    style={{ background: c.bg, ringColor: c.color }}>
                    <span style={{ color: c.color }}>{c.label}</span>
                    <span className="text-surface-500">{c.min}–{c.max < 999 ? c.max : '+'}</span>
                  </div>
                ))}
              </div>

              {/* Copy / Share */}
              <button onClick={copyResult}
                className={`w-full py-2.5 rounded-xl text-sm font-semibold border transition-colors ${copied ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-surface-700 border-surface-200 hover:border-brand-300'}`}>
                {copied ? '✅ Result Copied!' : '📋 Copy My BMI Result'}
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-surface-400 text-sm">
              Enter height and weight to calculate BMI
            </div>
          )}
        </div>
      </div>
    </div>
  );
}