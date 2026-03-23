'use client';
import { useState, useCallback } from 'react';

const CHARS = {
  upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower:   'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

function getStrength(password) {
  if (!password) return { score: 0, label: '', color: '' };
  let score = 0;
  if (password.length >= 8)   score++;
  if (password.length >= 12)  score++;
  if (password.length >= 16)  score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { score: 25,  label: 'Weak',    color: 'bg-red-400'    };
  if (score <= 4) return { score: 50,  label: 'Fair',    color: 'bg-amber-400'  };
  if (score <= 5) return { score: 75,  label: 'Strong',  color: 'bg-emerald-400'};
  return           { score: 100, label: 'Very Strong', color: 'bg-emerald-600'  };
}

export default function PasswordGenerator() {
  const [length, setLength]   = useState(16);
  const [options, setOptions] = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [passwords, setPasswords] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied]   = useState('');
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);

  const AMBIGUOUS = 'il1Lo0O';

  const generate = useCallback(() => {
    let charset = '';
    if (options.upper)   charset += CHARS.upper;
    if (options.lower)   charset += CHARS.lower;
    if (options.numbers) charset += CHARS.numbers;
    if (options.symbols) charset += CHARS.symbols;

    if (excludeAmbiguous) {
      charset = charset.split('').filter(c => !AMBIGUOUS.includes(c)).join('');
    }

    if (!charset) return;

    const arr = new Uint32Array(length * quantity);
    crypto.getRandomValues(arr);

    const generated = [];
    for (let q = 0; q < quantity; q++) {
      let pw = '';
      for (let i = 0; i < length; i++) {
        pw += charset[arr[q * length + i] % charset.length];
      }
      generated.push(pw);
    }
    setPasswords(generated);
    setCopied('');
  }, [length, options, quantity, excludeAmbiguous]);

  const copy = (pw) => {
    navigator.clipboard.writeText(pw);
    setCopied(pw);
    setTimeout(() => setCopied(''), 2000);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(passwords.join('\n'));
    setCopied('all');
    setTimeout(() => setCopied(''), 2000);
  };

  const strength = getStrength(passwords[0]);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Password Generator</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Length slider */}
        <div>
          <label className="flex items-center justify-between mb-2 text-sm font-medium text-surface-700">
            <span>Password Length</span>
            <span className="font-mono text-xl font-bold text-brand-600">{length}</span>
          </label>
          <input
            type="range" min="4" max="128" value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full accent-brand-600"
          />
          <div className="flex justify-between text-xs text-surface-400 mt-1">
            <span>4</span><span>32</span><span>64</span><span>128</span>
          </div>
        </div>

        {/* Character options */}
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(options).map(([key, val]) => (
            <label key={key} className="flex items-center gap-2.5 p-3 bg-surface-50 rounded-xl border border-surface-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50 transition-colors">
              <input
                type="checkbox" checked={val}
                onChange={e => setOptions(o => ({ ...o, [key]: e.target.checked }))}
                className="w-4 h-4 accent-brand-600 rounded"
              />
              <div>
                <div className="text-sm font-medium text-surface-700 capitalize">{key}</div>
                <div className="text-xs text-surface-400 font-mono">
                  {CHARS[key].slice(0, 12)}{CHARS[key].length > 12 ? '…' : ''}
                </div>
              </div>
            </label>
          ))}
        </div>

        {/* Extra options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-surface-700 cursor-pointer">
            <input type="checkbox" checked={excludeAmbiguous}
              onChange={e => setExcludeAmbiguous(e.target.checked)}
              className="w-4 h-4 accent-brand-600 rounded"
            />
            Exclude ambiguous (il1Lo0O)
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-surface-700">Quantity:</span>
            <input type="number" min="1" max="20" value={quantity}
              onChange={e => setQuantity(Math.min(20, Math.max(1, Number(e.target.value))))}
              className="input-field w-16 text-center"
            />
          </div>
        </div>

        {/* Generate */}
        <button onClick={generate} className="btn-primary w-full text-base py-3">
          🔑 Generate Password{quantity > 1 ? 's' : ''}
        </button>

        {/* Results */}
        {passwords.length > 0 && (
          <div className="space-y-3">
            {/* Strength indicator (for first password) */}
            {passwords.length === 1 && (
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-surface-500">Strength</span>
                  <span className="font-medium text-surface-700">{strength.label}</span>
                </div>
                <div className="w-full h-2 bg-surface-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${strength.color}`} style={{ width: `${strength.score}%` }} />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-surface-700">
                {passwords.length > 1 ? `Generated ${passwords.length} passwords` : 'Generated password'}
              </label>
              {passwords.length > 1 && (
                <button onClick={copyAll} className="text-xs btn-ghost py-1 px-2">
                  {copied === 'all' ? '✅ All Copied!' : '📋 Copy All'}
                </button>
              )}
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
              {passwords.map((pw, i) => (
                <div key={i} className="flex items-center gap-2 group bg-surface-900 rounded-xl px-4 py-3">
                  <span className="font-mono text-sm text-emerald-300 flex-1 select-all tracking-wide break-all">{pw}</span>
                  <button
                    onClick={() => copy(pw)}
                    className="shrink-0 text-xs text-surface-400 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-surface-700"
                  >
                    {copied === pw ? '✅' : '📋'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
