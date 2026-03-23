'use client';
import { useState } from 'react';

const WORDS = ['lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','sed','do','eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua','enim','ad','minim','veniam','quis','nostrud','exercitation','ullamco','laboris','nisi','aliquip','ex','ea','commodo','consequat','duis','aute','irure','in','reprehenderit','voluptate','velit','esse','cillum','eu','fugiat','nulla','pariatur','excepteur','sint','occaecat','cupidatat','non','proident','sunt','culpa','qui','officia','deserunt','mollit','anim','id','est','laborum','pellentesque','habitant','morbi','tristique','senectus','netus','malesuada','fames','ac','turpis','egestas','integer','eget','aliquet','nibh','praesent','tristiquim','vitae','purus','faucibus','ornare','suspendisse'];

function randomWord(exclude='') {
  let w;
  do { w = WORDS[Math.floor(Math.random() * WORDS.length)]; } while (w === exclude);
  return w;
}

function sentence() {
  const len = Math.floor(Math.random() * 10) + 6;
  const words = Array.from({length: len}, (_,i) => randomWord());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(' ') + '.';
}

function paragraph() {
  const len = Math.floor(Math.random() * 4) + 3;
  return Array.from({length: len}, sentence).join(' ');
}

function generate(type, count, startWithLorem) {
  const items = Array.from({length: count}, paragraph);
  let result = '';
  if (type === 'paragraphs') {
    result = items.join('\n\n');
  } else if (type === 'sentences') {
    result = Array.from({length: count}, sentence).join(' ');
  } else {
    result = Array.from({length: count}, () => randomWord()).join(' ');
  }
  if (startWithLorem && type === 'paragraphs') {
    result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + (count > 1 ? '\n\n' + items.slice(1).join('\n\n') : '');
  } else if (startWithLorem && type === 'sentences') {
    result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + Array.from({length: count-1}, sentence).join(' ');
  } else if (startWithLorem && type === 'words') {
    result = 'lorem ipsum dolor sit amet ' + Array.from({length: Math.max(0,count-5)}, () => randomWord()).join(' ');
  }
  return result.trim();
}

export default function LoremIpsum() {
  const [type, setType]         = useState('paragraphs');
  const [count, setCount]       = useState(3);
  const [startLorem, setStart]  = useState(true);
  const [output, setOutput]     = useState('');
  const [copied, setCopied]     = useState(false);

  const gen = () => setOutput(generate(type, count, startLorem));
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Lorem Ipsum Generator</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Generate</label>
            <div className="flex rounded-xl border border-surface-200 overflow-hidden">
              {['paragraphs','sentences','words'].map(t => (
                <button key={t} onClick={() => setType(t)}
                  className={`px-3 py-2 text-sm font-medium capitalize transition-colors ${type === t ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Amount</label>
            <input type="number" min="1" max="50" value={count}
              onChange={e => setCount(Math.min(50, Math.max(1, Number(e.target.value))))}
              className="input-field w-20" />
          </div>
          <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer mb-0.5">
            <input type="checkbox" checked={startLorem} onChange={e => setStart(e.target.checked)}
              className="w-4 h-4 accent-brand-600 rounded" />
            Start with "Lorem ipsum..."
          </label>
          <button onClick={gen} className="btn-primary mb-0.5">
            ✍️ Generate
          </button>
        </div>

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-surface-500">
                {output.split(' ').length} words · {output.length} chars
              </span>
              <button onClick={copy} className="text-xs btn-ghost py-1 px-2">
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-surface-700 leading-relaxed text-sm whitespace-pre-wrap max-h-80 overflow-y-auto custom-scrollbar">
              {output}
            </div>
          </div>
        )}

        {!output && (
          <div className="text-center py-10 text-surface-400">
            <div className="text-4xl mb-3">📝</div>
            <p>Click "Generate" to create placeholder text</p>
          </div>
        )}
      </div>
    </div>
  );
}
