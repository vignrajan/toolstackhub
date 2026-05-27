'use client';
import { useState, useMemo } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const words      = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const chars      = text.length;
    const charsNoSp  = text.replace(/\s/g, '').length;
    const sentences  = text.trim() === '' ? 0 : (text.match(/[^.!?]+[.!?]+/g) || []).length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim()).length;
    const lines      = text === '' ? 0 : text.split('\n').length;
    const readTime   = Math.max(1, Math.ceil(words / 200));

    // Word frequency (top 10)
    const freq = {};
    text.toLowerCase().match(/\b[a-z]{3,}\b/g)?.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const topWords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 8);

    return { words, chars, charsNoSp, sentences, paragraphs, lines, readTime, topWords };
  }, [text]);

  const statItems = [
    { label: 'Words',              value: stats.words,      icon: '📝', highlight: true },
    { label: 'Characters',         value: stats.chars,      icon: '🔤' },
    { label: 'Chars (no spaces)',  value: stats.charsNoSp,  icon: '🔡' },
    { label: 'Sentences',          value: stats.sentences,  icon: '📖' },
    { label: 'Paragraphs',         value: stats.paragraphs, icon: '¶'  },
    { label: 'Lines',              value: stats.lines,      icon: '↵'  },
    { label: 'Read time (min)',    value: stats.readTime,   icon: '⏱️' },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Word Counter</span>
        <div className="flex items-center gap-3">
          {text.trim() && (
            <button
              onClick={() => {
                const summary = `Words: ${stats.words} | Characters: ${stats.chars} | Sentences: ${stats.sentences} | Paragraphs: ${stats.paragraphs} | Reading time: ${stats.readTime} min`;
                navigator.clipboard.writeText(summary).catch(() => {
                  const el = document.createElement('textarea');
                  el.value = summary;
                  document.body.appendChild(el);
                  el.select();
                  document.execCommand('copy');
                  document.body.removeChild(el);
                });
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-xs text-brand-600 hover:text-brand-800 transition-colors font-medium"
            >
              {copied ? 'Copied ✓' : 'Copy Stats'}
            </button>
          )}
          <button onClick={() => setText('')} className="text-xs text-surface-400 hover:text-surface-700 transition-colors">
            Clear
          </button>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Textarea */}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type or paste your text here…"
          className="textarea-field min-h-[220px]"
          spellCheck
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statItems.map(s => (
            <div
              key={s.label}
              className={`rounded-xl p-3 text-center border ${s.highlight ? 'bg-brand-50 border-brand-200' : 'bg-surface-50 border-surface-200'}`}
            >
              <div className="text-xl mb-1">{s.icon}</div>
              <div className={`font-display font-bold text-xl ${s.highlight ? 'text-brand-700' : 'text-surface-800'}`}>
                {s.value.toLocaleString()}
              </div>
              <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Top words */}
        {stats.topWords.length > 0 && (
          <div>
            <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">Top Words</p>
            <div className="flex flex-wrap gap-2">
              {stats.topWords.map(([word, count]) => (
                <span key={word} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-100 rounded-full text-xs text-surface-700">
                  {word}
                  <span className="bg-brand-100 text-brand-700 rounded-full px-1.5 py-0.5 text-[10px] font-bold">{count}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
