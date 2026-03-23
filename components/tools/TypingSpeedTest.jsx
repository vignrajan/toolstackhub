'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

// ── Text passages ─────────────────────────────────────────────
const PASSAGES = {
  easy: [
    "The sun rises in the east and sets in the west. Birds sing in the morning and rest at night. The sky is blue and the grass is green. Dogs and cats are popular pets. Children love to play in the park on sunny days.",
    "A good book can take you to places you have never been. Reading helps you learn new words and ideas. Libraries are full of stories waiting to be discovered. Turn the page and start a new adventure today.",
    "Water is essential for all living things. We should drink eight glasses of water each day. Plants also need water to grow and stay healthy. Rain fills our rivers and lakes with fresh water.",
    "Exercise keeps your body healthy and strong. Walking for thirty minutes a day is a great start. Eating fruits and vegetables gives you energy. Sleep is also important for your health and mood.",
    "Technology has changed the way we live and work. Computers and phones connect us with people around the world. The internet gives us access to information in seconds. New tools are being created every day.",
  ],
  medium: [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. Programmers use it to test fonts and keyboards. Typing it repeatedly helps improve your speed and accuracy on standard keyboards.",
    "Productivity is not about working harder but working smarter. Setting clear goals and breaking tasks into smaller steps makes large projects feel manageable. Taking short breaks between focused sessions helps maintain concentration throughout the day.",
    "Artificial intelligence is transforming industries across the globe. Machine learning algorithms can now recognize images, translate languages, and predict outcomes with remarkable accuracy. The pace of innovation shows no sign of slowing down.",
    "The ability to type quickly and accurately is one of the most valuable professional skills in the modern workplace. Most office jobs require significant time at a keyboard, and even a modest increase in typing speed translates to hours saved every week.",
    "Climate change is one of the defining challenges of our generation. Rising temperatures are affecting weather patterns, sea levels, and biodiversity around the world. Scientists and governments are working together to develop sustainable solutions.",
  ],
  hard: [
    "Cryptographic algorithms like RSA and AES underpin the security infrastructure of the modern internet. Public-key encryption allows two parties to establish a secure communication channel without prior contact, using mathematical one-way functions that are computationally infeasible to reverse.",
    "The philosophical concept of emergent properties suggests that complex systems can exhibit behaviors that are not predictable from the properties of their individual components. Consciousness itself may be an emergent property of sufficiently complex neural networks.",
    "Photosynthesis is the biochemical process by which chlorophyll-containing organisms convert carbon dioxide and water into glucose and oxygen using solar energy. This process forms the foundation of virtually all food chains on Earth.",
    "The distinction between syntax and semantics is fundamental to both linguistics and computer science. Syntax governs the structural rules of a language, while semantics concerns the meaning conveyed by syntactically valid expressions. A sentence can be syntactically correct yet semantically meaningless.",
    "Quantum entanglement describes a phenomenon in which two particles become correlated such that the quantum state of one cannot be described independently of the other, regardless of the distance separating them. Einstein famously referred to this as spooky action at a distance.",
  ],
};

const DURATIONS = [30, 60, 120, 300];
const DURATION_LABELS = { 30: '30s', 60: '1 min', 120: '2 min', 300: '5 min' };

function getPassage(difficulty) {
  const arr = PASSAGES[difficulty];
  return arr[Math.floor(Math.random() * arr.length)];
}

function calcResults(typed, passage, elapsed) {
  const words       = typed.trim().split(/\s+/).filter(Boolean);
  const targetWords = passage.trim().split(/\s+/);
  let correct = 0;
  words.forEach((w, i) => { if (w === targetWords[i]) correct++; });
  const wpm      = elapsed > 0 ? Math.round((correct / elapsed) * 60) : 0;
  const accuracy = words.length > 0 ? Math.round((correct / words.length) * 100) : 100;
  const errors   = words.length - correct;
  return { wpm, accuracy, errors, correct, total: words.length };
}

export default function TypingSpeedTest() {
  // ── State ────────────────────────────────────────────────
  const [mounted,    setMounted]    = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  const [duration,   setDuration]   = useState(60);
  const [passage,    setPassage]    = useState('');
  const [typed,      setTyped]      = useState('');
  const [phase,      setPhase]      = useState('idle');
  const [timeLeft,   setTimeLeft]   = useState(60);
  const [results,    setResults]    = useState(null);
  const [liveWpm,    setLiveWpm]    = useState(0);
  const [liveAcc,    setLiveAcc]    = useState(100);

  const textareaRef = useRef(null);
  const intervalRef = useRef(null);

  // ── Fix hydration — only runs on client ──────────────────
  useEffect(() => {
    setPassage(getPassage('medium'));
    setMounted(true);
  }, []);

  // ── Timer ─────────────────────────────────────────────────
  useEffect(() => {
    if (phase === 'running') {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setPhase('done');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [phase]);

  // ── Compute results when phase becomes done ───────────────
  useEffect(() => {
    if (phase === 'done' && !results) {
      const elapsed = duration - timeLeft || 1;
      setResults(calcResults(typed, passage, elapsed));
    }
  }, [phase]);

  // ── Live stats ────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'running') return;
    const elapsed = duration - timeLeft || 1;
    const r = calcResults(typed, passage, elapsed);
    setLiveWpm(r.wpm);
    setLiveAcc(r.accuracy);
  }, [typed, timeLeft]);

  // ── Input handler ─────────────────────────────────────────
  const onInput = (e) => {
    const val = e.target.value;
    if (phase === 'idle' && val.length > 0) {
      setPhase('running');
    }
    if (phase === 'done') return;
    setTyped(val);
  };

  // ── Reset ─────────────────────────────────────────────────
  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setPassage(getPassage(difficulty));
    setTyped('');
    setPhase('idle');
    setTimeLeft(duration);
    setResults(null);
    setLiveWpm(0);
    setLiveAcc(100);
    setTimeout(() => textareaRef.current?.focus(), 50);
  }, [difficulty, duration]);

  // ── Sync passage when difficulty or duration changes ──────
  useEffect(() => {
    if (!mounted) return;
    if (phase === 'idle') {
      setPassage(getPassage(difficulty));
      setTimeLeft(duration);
    }
  }, [difficulty, duration, mounted]);

  // ── Render passage with colour coding ─────────────────────
  const renderPassage = () => {
    if (!passage) return null;
    const typedWords  = typed.split(/(\s+)/);
    const targetWords = passage.split(/(\s+)/);
    let typedIdx = 0;

    return targetWords.map((segment, i) => {
      if (/\s+/.test(segment)) {
        typedIdx += segment.length;
        return <span key={i}>{segment}</span>;
      }
      const typedSegment = typedWords[i] || '';
      const isCorrect    = typedSegment === segment;
      const isTyped      = typedIdx < typed.length;
      const isCurrent    = typedIdx === typed.length;

      typedIdx += segment.length;

      let cls = 'text-surface-300';
      if (isTyped) cls = isCorrect ? 'text-emerald-400' : 'text-red-400 underline decoration-red-400';
      if (isCurrent) cls += ' bg-brand-600/30 rounded';

      return <span key={i} className={cls}>{segment}</span>;
    });
  };

  // ── Progress + colours ────────────────────────────────────
  const progressPct = ((duration - timeLeft) / duration) * 100;
  const timeColor   = timeLeft <= 10 ? 'bg-red-500' : timeLeft <= 20 ? 'bg-amber-500' : 'bg-brand-600';

  // ── WPM rating ────────────────────────────────────────────
  const getRating = (wpm) => {
    if (wpm >= 80) return { label: 'Expert',       color: 'text-violet-600',  bg: 'bg-violet-50 border-violet-200' };
    if (wpm >= 60) return { label: 'Advanced',     color: 'text-blue-600',    bg: 'bg-blue-50 border-blue-200' };
    if (wpm >= 40) return { label: 'Intermediate', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' };
    if (wpm >= 25) return { label: 'Beginner',     color: 'text-amber-600',   bg: 'bg-amber-50 border-amber-200' };
    return               { label: 'Novice',        color: 'text-red-600',     bg: 'bg-red-50 border-red-200' };
  };

  // ── Loading state before client mounts ───────────────────
  if (!mounted) {
    return (
      <div className="bg-white border border-surface-200 rounded-2xl p-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">⌨️</div>
          <div className="text-surface-500 text-sm font-medium">Loading typing test...</div>
        </div>
      </div>
    );
  }

  // ── Main render ───────────────────────────────────────────
  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">

        {/* Difficulty */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-surface-500 font-medium">Difficulty:</span>
          {['easy', 'medium', 'hard'].map(d => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              disabled={phase === 'running'}
              className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors capitalize disabled:opacity-40
                ${difficulty === d
                  ? 'bg-brand-600 text-white'
                  : 'bg-white border border-surface-200 text-surface-600 hover:border-brand-300'
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1.5 ml-2">
          <span className="text-xs text-surface-500 font-medium">Time:</span>
          {DURATIONS.map(d => (
            <button
              key={d}
              onClick={() => { setDuration(d); setTimeLeft(d); }}
              disabled={phase === 'running'}
              className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-40
                ${duration === d
                  ? 'bg-brand-600 text-white'
                  : 'bg-white border border-surface-200 text-surface-600 hover:border-brand-300'
                }`}
            >
              {DURATION_LABELS[d]}
            </button>
          ))}
        </div>

        {/* Reset */}
        <button onClick={reset} className="ml-auto text-xs btn-secondary py-1.5 px-3">
          🔄 New Test
        </button>
      </div>

      {/* Live stats bar */}
      <div className="grid grid-cols-3 divide-x divide-surface-100 border-b border-surface-200">
        {[
          {
            label: 'WPM',
            value: phase === 'done' ? (results?.wpm ?? 0) : phase === 'running' ? liveWpm : '--',
            color: 'text-brand-700',
          },
          {
            label: 'Accuracy',
            value: phase === 'done' ? `${results?.accuracy ?? 100}%` : phase === 'running' ? `${liveAcc}%` : '--',
            color: 'text-emerald-700',
          },
          {
            label: 'Time',
            value: phase === 'idle' ? `${duration}s` : `${timeLeft}s`,
            color: timeLeft <= 10 && phase === 'running' ? 'text-red-600' : 'text-surface-700',
          },
        ].map(s => (
          <div key={s.label} className="flex flex-col items-center py-3">
            <div className={`text-2xl font-display font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-surface-400 uppercase tracking-wider mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-surface-100">
        <div
          className={`h-full transition-all duration-1000 ${timeColor}`}
          style={{ width: `${phase === 'idle' ? 0 : progressPct}%` }}
        />
      </div>

      {/* Test area */}
      {phase !== 'done' ? (
        <div className="p-5 space-y-4">

          {/* Passage display */}
          <div className="bg-surface-900 rounded-xl p-5 font-mono text-base leading-8 min-h-[120px] select-none">
            {renderPassage()}
            {phase === 'idle' && (
              <span className="ml-1 animate-pulse text-brand-400">|</span>
            )}
          </div>

          {/* Typing area */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={typed}
              onChange={onInput}
              disabled={phase === 'done'}
              className={`w-full h-28 px-4 py-3 font-mono text-sm leading-relaxed rounded-xl border-2 resize-none focus:outline-none transition-colors
                ${phase === 'running'
                  ? 'border-brand-400 bg-brand-50 text-surface-900 focus:border-brand-500'
                  : 'border-surface-200 bg-surface-50 text-surface-600 focus:border-brand-300'
                }`}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
            {phase === 'idle' && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => textareaRef.current?.focus()}
              >
                <div className="text-center pointer-events-none">
                  <div className="text-3xl mb-2">⌨️</div>
                  <div className="text-sm text-surface-500 font-medium">Click here and start typing to begin</div>
                  <div className="text-xs text-surface-400 mt-1">Timer starts automatically with your first keystroke</div>
                </div>
              </div>
            )}
          </div>

          {phase === 'running' && (
            <p className="text-xs text-surface-400 text-center">
              Keep typing — timer stops automatically when time runs out
            </p>
          )}
        </div>
      ) : (
        /* Results screen */
        <div className="p-5 space-y-5">
          {results && (() => {
            const rating = getRating(results.wpm);
            return (
              <>
                {/* Rating badge */}
                <div className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 ${rating.bg}`}>
                  <div className="text-4xl">
                    {results.wpm >= 80 ? '🏆' : results.wpm >= 60 ? '⭐' : results.wpm >= 40 ? '👍' : results.wpm >= 25 ? '💪' : '📚'}
                  </div>
                  <div>
                    <div className={`text-2xl font-display font-bold ${rating.color}`}>
                      {rating.label} Typist
                    </div>
                    <div className="text-sm text-surface-500">
                      You typed <strong>{results.wpm} WPM</strong> with <strong>{results.accuracy}%</strong> accuracy
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Words Per Minute', value: results.wpm,            icon: '⚡', color: 'brand' },
                    { label: 'Accuracy',         value: `${results.accuracy}%`, icon: '🎯', color: 'emerald' },
                    { label: 'Correct Words',    value: results.correct,        icon: '✅', color: 'blue' },
                    { label: 'Errors',           value: results.errors,         icon: '❌', color: 'red' },
                  ].map(s => (
                    <div key={s.label} className={`p-4 bg-${s.color}-50 border border-${s.color}-200 rounded-xl text-center`}>
                      <div className="text-2xl mb-1">{s.icon}</div>
                      <div className={`text-2xl font-display font-bold text-${s.color}-700`}>{s.value}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Benchmark comparison */}
                <div className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                  <div className="text-xs font-semibold text-surface-700 uppercase tracking-wider mb-3">
                    How You Compare
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Average person',        wpm: 40,          color: 'bg-surface-300' },
                      { label: 'Average office worker', wpm: 55,          color: 'bg-blue-400' },
                      { label: 'Professional typist',   wpm: 75,          color: 'bg-emerald-500' },
                      { label: 'You',                   wpm: results.wpm, color: 'bg-brand-600' },
                    ].map(b => (
                      <div key={b.label} className="flex items-center gap-3">
                        <div className="text-xs text-surface-500 w-36 shrink-0">{b.label}</div>
                        <div className="flex-1 bg-surface-200 rounded-full h-2">
                          <div
                            className={`${b.color} h-2 rounded-full`}
                            style={{ width: `${Math.min((b.wpm / 120) * 100, 100)}%` }}
                          />
                        </div>
                        <div className="text-xs font-mono font-bold text-surface-700 w-12 text-right">
                          {b.wpm} WPM
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button onClick={reset} className="btn-primary px-6 py-2.5 text-sm font-semibold">
                    🔄 Try Again
                  </button>
                  <button
                    onClick={() => {
                      if (difficulty !== 'hard') {
                        setDifficulty(difficulty === 'easy' ? 'medium' : 'hard');
                      }
                      reset();
                    }}
                    className="btn-secondary px-6 py-2.5 text-sm"
                  >
                    ⬆️ Level Up
                  </button>
                  <button
                    onClick={() => {
                      const text = `I just scored ${results.wpm} WPM with ${results.accuracy}% accuracy on the typing test at toolstackhub.in — try beating my score!`;
                      navigator.clipboard.writeText(text);
                    }}
                    className="px-6 py-2.5 text-sm border border-surface-200 rounded-xl hover:bg-surface-50 transition-colors text-surface-600"
                  >
                    📋 Share Score
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}