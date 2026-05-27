'use client';
import { useState, useMemo } from 'react';

const UNIVERSITY_FORMULAS = {
  'General (10-Point Scale)': {
    toPercent: cgpa => cgpa * 9.5,
    hint: 'Percentage = CGPA × 9.5 (CBSE / most Indian universities)',
  },
  'VTU (Visvesvaraya Technological University)': {
    toPercent: cgpa => cgpa * 10,
    hint: 'Percentage = CGPA × 10',
  },
  'Anna University': {
    toPercent: cgpa => (cgpa - 0.5) * 10,
    hint: 'Percentage = (CGPA − 0.5) × 10',
  },
  'Mumbai University': {
    toPercent: cgpa => cgpa * 7.1 + 11,
    hint: 'Percentage = CGPA × 7.1 + 11',
  },
  'Pune University (SPPU)': {
    toPercent: cgpa => cgpa * 9.17,
    hint: 'Percentage = CGPA × 9.17',
  },
  'Osmania University': {
    toPercent: cgpa => cgpa * 10 - 0.75,
    hint: 'Percentage = (CGPA × 10) − 0.75',
  },
  '7-Point Scale (old system)': {
    toPercent: cgpa => (cgpa / 7) * 100,
    hint: 'Percentage = (CGPA / 7) × 100',
  },
};

const GRADE_POINTS = [
  { grade: 'O',  points: 10, desc: 'Outstanding (91-100%)' },
  { grade: 'A+', points: 9,  desc: 'Excellent (81-90%)' },
  { grade: 'A',  points: 8,  desc: 'Very Good (71-80%)' },
  { grade: 'B+', points: 7,  desc: 'Good (61-70%)' },
  { grade: 'B',  points: 6,  desc: 'Above Average (51-60%)' },
  { grade: 'C',  points: 5,  desc: 'Average (41-50%)' },
  { grade: 'P',  points: 4,  desc: 'Pass (35-40%)' },
  { grade: 'F',  points: 0,  desc: 'Fail (< 35%)' },
];

function getClassification(cgpa) {
  if (cgpa >= 8.5) return { label: 'First Class with Distinction', color: 'emerald' };
  if (cgpa >= 7.5) return { label: 'First Class',                  color: 'blue' };
  if (cgpa >= 6.5) return { label: 'Second Class',                 color: 'amber' };
  if (cgpa >= 5.0) return { label: 'Pass',                         color: 'orange' };
  return                  { label: 'Fail',                          color: 'red' };
}

const emptySubject = () => ({ name: '', credits: 3, grade: 8 });

export default function CgpaCalculator() {
  const [mode,       setMode]       = useState('grade'); // 'grade' | 'cgpa'
  const [university, setUniversity] = useState('General (10-Point Scale)');
  const [subjects,   setSubjects]   = useState([emptySubject(), emptySubject(), emptySubject()]);
  const [cgpaInput,  setCgpaInput]  = useState(7.5);

  const cgpaResult = useMemo(() => {
    if (mode !== 'grade') return null;
    const validSubjects = subjects.filter(s => s.credits > 0);
    if (validSubjects.length === 0) return null;
    const totalCredits    = validSubjects.reduce((s, sub) => s + Number(sub.credits), 0);
    const totalGradePoints= validSubjects.reduce((s, sub) => s + Number(sub.grade) * Number(sub.credits), 0);
    return totalCredits > 0 ? totalGradePoints / totalCredits : 0;
  }, [subjects, mode]);

  const activeCgpa   = mode === 'grade' ? cgpaResult : cgpaInput;
  const formula      = UNIVERSITY_FORMULAS[university];
  const percentage   = activeCgpa != null ? Math.min(100, Math.max(0, formula.toPercent(activeCgpa))) : null;
  const classification = activeCgpa != null ? getClassification(activeCgpa) : null;

  const addSubject = () => setSubjects(prev => [...prev, emptySubject()]);
  const removeSubject = (i) => setSubjects(prev => prev.filter((_, idx) => idx !== i));
  const updateSubject = (i, key, val) => setSubjects(prev => prev.map((s, idx) => idx === i ? { ...s, [key]: val } : s));

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Mode toggle */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-lg">
          <button onClick={() => setMode('grade')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${mode==='grade' ? 'bg-white shadow-sm text-surface-900' : 'text-surface-500'}`}>
            Grade-wise CGPA
          </button>
          <button onClick={() => setMode('cgpa')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${mode==='cgpa' ? 'bg-white shadow-sm text-surface-900' : 'text-surface-500'}`}>
            CGPA to Percentage
          </button>
        </div>
        <div>
          <select value={university} onChange={e => setUniversity(e.target.value)} className="input-field text-xs py-1.5">
            {Object.keys(UNIVERSITY_FORMULAS).map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {mode === 'grade' ? (
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Subjects & Grade Points</p>
              <button onClick={addSubject} className="text-xs text-brand-600 hover:text-brand-800 font-semibold">+ Add Subject</button>
            </div>
            <div className="space-y-2">
              {subjects.map((sub, i) => (
                <div key={i} className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    value={sub.name}
                    onChange={e => updateSubject(i, 'name', e.target.value)}
                    placeholder={`Subject ${i+1}`}
                    className="input-field text-sm col-span-5"
                  />
                  <div className="col-span-2">
                    <input
                      type="number"
                      value={sub.credits}
                      onChange={e => updateSubject(i, 'credits', e.target.value)}
                      min="0" max="10" step="0.5"
                      className="input-field text-sm text-center"
                      placeholder="Credits"
                    />
                  </div>
                  <div className="col-span-4">
                    <select
                      value={sub.grade}
                      onChange={e => updateSubject(i, 'grade', Number(e.target.value))}
                      className="input-field text-sm"
                    >
                      {GRADE_POINTS.map(g => (
                        <option key={g.grade} value={g.points}>{g.grade} ({g.points})</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={() => removeSubject(i)} className="col-span-1 text-surface-300 hover:text-red-500 transition-colors text-lg leading-none">×</button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1 mt-2 text-[10px] text-surface-400 pl-1">
              <span>Subject Name</span><span className="text-center">Credits</span><span className="pl-2">Grade</span>
            </div>
          </div>
        ) : (
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Enter CGPA</label>
            <input
              type="number"
              value={cgpaInput}
              onChange={e => setCgpaInput(Number(e.target.value))}
              min="0" max="10" step="0.01"
              className="input-field text-xl font-bold"
            />
          </div>
        )}

        {/* Formula note */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
          <p className="text-xs text-blue-700 font-medium">{formula.hint}</p>
        </div>

        {/* Results */}
        {activeCgpa != null && percentage != null && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-center">
              <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-1">CGPA</p>
              <p className="text-3xl font-bold text-brand-700">{activeCgpa.toFixed(2)}</p>
              <p className="text-xs text-brand-500 mt-0.5">out of 10</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
              <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">Percentage</p>
              <p className="text-3xl font-bold text-emerald-700">{percentage.toFixed(2)}%</p>
              <p className="text-xs text-emerald-500 mt-0.5">equivalent</p>
            </div>
            <div className={`bg-${classification.color}-50 border border-${classification.color}-200 rounded-xl p-4 text-center`}>
              <p className={`text-xs text-${classification.color}-600 font-semibold uppercase tracking-wider mb-1`}>Class</p>
              <p className={`text-lg font-bold text-${classification.color}-700 leading-tight`}>{classification.label}</p>
            </div>
          </div>
        )}

        {/* All universities comparison */}
        {activeCgpa != null && (
          <details className="bg-surface-50 border border-surface-200 rounded-xl">
            <summary className="px-4 py-3 text-sm font-medium text-surface-700 cursor-pointer">
              Compare across all universities
            </summary>
            <div className="px-4 pb-4">
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="text-xs text-surface-500 uppercase">
                    <th className="text-left py-1">University</th>
                    <th className="text-right py-1">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(UNIVERSITY_FORMULAS).map(([u, f]) => (
                    <tr key={u} className={`border-t border-surface-100 ${u === university ? 'bg-brand-50' : ''}`}>
                      <td className="py-1.5 text-surface-700">{u}</td>
                      <td className="py-1.5 font-mono font-semibold text-right text-surface-900">
                        {Math.min(100, Math.max(0, f.toPercent(activeCgpa))).toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}

        {/* Grade reference */}
        <details className="bg-surface-50 border border-surface-200 rounded-xl">
          <summary className="px-4 py-3 text-sm font-medium text-surface-700 cursor-pointer">Grade Points Reference</summary>
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {GRADE_POINTS.map(g => (
                <div key={g.grade} className="text-xs bg-white border border-surface-200 rounded-lg px-2 py-1.5">
                  <span className="font-bold text-brand-600 mr-2">{g.grade}</span>
                  <span className="text-surface-500">{g.points} pts</span>
                  <p className="text-surface-400 text-[10px] mt-0.5">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
