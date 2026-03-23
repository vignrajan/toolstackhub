'use client';
import { useState, useMemo } from 'react';

const EXAMPLES = [
  { label: 'Email',    pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}', flags: 'g' },
  { label: 'URL',      pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', flags: 'g' },
  { label: 'Phone',    pattern: '(\\+\\d{1,3}[- ]?)?\\(?\\d{3}\\)?[- ]?\\d{3}[- ]?\\d{4}', flags: 'g' },
  { label: 'IP Addr',  pattern: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b', flags: 'g' },
  { label: 'Hex Color',pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\\b', flags: 'g' },
  { label: 'Date',     pattern: '\\d{4}[-/]\\d{2}[-/]\\d{2}', flags: 'g' },
];

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags]     = useState('g');
  const [testStr, setTestStr] = useState('Test text: hello@example.com and user@test.org\nVisit https://toolstackhub.in for free tools.\nPhone: +1 (555) 123-4567');
  const [replaceWith, setReplaceWith] = useState('');
  const [mode, setMode]       = useState('match'); // match | replace

  const result = useMemo(() => {
    if (!pattern) return { matches: [], highlighted: testStr, error: '', replaced: '' };
    try {
      const regex = new RegExp(pattern, flags);
      const matches = [];
      let m;
      const safeFlags = flags.includes('g') ? flags : flags + 'g';
      const gRegex = new RegExp(pattern, safeFlags);
      while ((m = gRegex.exec(testStr)) !== null) {
        matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
        if (!flags.includes('g')) break;
      }
      // Highlighted output
      const highlighted = testStr.replace(new RegExp(pattern, safeFlags), (match) =>
        `__MATCH_START__${match}__MATCH_END__`
      );
      const replaced = mode === 'replace' ? testStr.replace(regex, replaceWith) : '';
      return { matches, highlighted, error: '', replaced };
    } catch (e) {
      return { matches: [], highlighted: testStr, error: e.message, replaced: '' };
    }
  }, [pattern, flags, testStr, replaceWith, mode]);

  const toggleFlag = (f) => setFlags(prev => prev.includes(f) ? prev.replace(f,'') : prev + f);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm font-medium text-surface-600">Regex Tester</span>
        <div className="flex rounded-xl border border-surface-200 overflow-hidden">
          {['match','replace'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-3 py-1.5 text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-brand-600 text-white' : 'bg-white text-surface-600'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Pattern input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Regular Expression</label>
          <div className="flex items-center gap-2">
            <span className="text-surface-400 font-mono text-lg">/</span>
            <input
              value={pattern}
              onChange={e => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="input-field font-mono flex-1"
              spellCheck={false}
            />
            <span className="text-surface-400 font-mono text-lg">/</span>
            <input
              value={flags}
              onChange={e => setFlags(e.target.value.replace(/[^gimsuy]/g,''))}
              className="input-field w-16 font-mono text-center"
              placeholder="gi"
              maxLength={6}
            />
          </div>
          {/* Flag toggles */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {[['g','Global'],['i','Case insensitive'],['m','Multiline'],['s','Dot all']].map(([f, label]) => (
              <button key={f} onClick={() => toggleFlag(f)}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${flags.includes(f) ? 'bg-brand-100 border-brand-300 text-brand-700 font-semibold' : 'bg-surface-50 border-surface-200 text-surface-600'}`}>
                {f} — {label}
              </button>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div>
          <p className="text-xs font-medium text-surface-500 mb-2">Quick examples:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button key={ex.label} onClick={() => { setPattern(ex.pattern); setFlags(ex.flags); }}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        {/* Replace field */}
        {mode === 'replace' && (
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Replace with</label>
            <input value={replaceWith} onChange={e => setReplaceWith(e.target.value)}
              className="input-field font-mono" placeholder="Replacement string (use $1, $2 for groups)" />
          </div>
        )}

        {/* Test string */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Test String</label>
          <textarea value={testStr} onChange={e => setTestStr(e.target.value)}
            className="textarea-field min-h-[120px]" />
        </div>

        {/* Error */}
        {result.error && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">❌ Invalid regex: {result.error}</p>
        )}

        {/* Results */}
        {pattern && !result.error && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${result.matches.length > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                {result.matches.length > 0 ? `✅ ${result.matches.length} match${result.matches.length !== 1 ? 'es' : ''}` : '❌ No matches'}
              </span>
            </div>

            {/* Highlighted matches */}
            <div className="p-4 bg-surface-50 rounded-xl border border-surface-200 font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {result.highlighted.split('__MATCH_START__').map((part, i) => {
                if (i === 0) return <span key={i}>{part}</span>;
                const [match, rest] = part.split('__MATCH_END__');
                return <span key={i}><mark className="bg-yellow-200 text-yellow-900 rounded px-0.5">{match}</mark>{rest}</span>;
              })}
            </div>

            {/* Replace result */}
            {mode === 'replace' && (
              <div>
                <p className="text-xs font-medium text-surface-500 mb-1.5">After replacement:</p>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl font-mono text-sm whitespace-pre-wrap">{result.replaced}</div>
              </div>
            )}

            {/* Match list */}
            {result.matches.length > 0 && (
              <div>
                <p className="text-xs font-medium text-surface-500 mb-2">Match details:</p>
                <div className="space-y-1.5 max-h-40 overflow-y-auto custom-scrollbar">
                  {result.matches.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 bg-surface-50 rounded-lg text-sm">
                      <span className="text-xs text-surface-400 w-6">#{i+1}</span>
                      <span className="font-mono text-brand-700 font-medium">{m.match}</span>
                      <span className="text-xs text-surface-400 ml-auto">index: {m.index}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
