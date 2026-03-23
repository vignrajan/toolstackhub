'use client';
import { useState } from 'react';

const COMMON = ['password','123456','qwerty','abc123','letmein','monkey','dragon','master','sunshine','princess','welcome','shadow','superman','michael','football','iloveyou','trustno1','baseball','batman'];

function analyzePassword(pw) {
  if (!pw) return null;
  const checks = {
    length8:    pw.length >= 8,
    length12:   pw.length >= 12,
    length16:   pw.length >= 16,
    hasUpper:   /[A-Z]/.test(pw),
    hasLower:   /[a-z]/.test(pw),
    hasNumber:  /[0-9]/.test(pw),
    hasSymbol:  /[^A-Za-z0-9]/.test(pw),
    noCommon:   !COMMON.includes(pw.toLowerCase()),
    noRepeat:   !/(.)\1{2,}/.test(pw),
    noSequence: !/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(pw),
  };

  let score = 0;
  if (checks.length8)    score += 10;
  if (checks.length12)   score += 15;
  if (checks.length16)   score += 10;
  if (checks.hasUpper)   score += 15;
  if (checks.hasLower)   score += 10;
  if (checks.hasNumber)  score += 15;
  if (checks.hasSymbol)  score += 20;
  if (checks.noCommon)   score += 3;
  if (checks.noRepeat)   score += 1;
  if (checks.noSequence) score += 1;
  score = Math.min(100, score);

  let label, color, bg;
  if (score < 30)      { label = 'Very Weak';   color = 'text-red-600';    bg = 'bg-red-500';    }
  else if (score < 50) { label = 'Weak';         color = 'text-orange-600'; bg = 'bg-orange-500'; }
  else if (score < 70) { label = 'Fair';         color = 'text-amber-600';  bg = 'bg-amber-500';  }
  else if (score < 90) { label = 'Strong';       color = 'text-emerald-600';bg = 'bg-emerald-500';}
  else                 { label = 'Very Strong';  color = 'text-emerald-700';bg = 'bg-emerald-600';}

  const tips = [];
  if (!checks.length8)    tips.push('Use at least 8 characters');
  if (!checks.length12)   tips.push('Use at least 12 characters for better security');
  if (!checks.hasUpper)   tips.push('Add uppercase letters (A-Z)');
  if (!checks.hasLower)   tips.push('Add lowercase letters (a-z)');
  if (!checks.hasNumber)  tips.push('Add numbers (0-9)');
  if (!checks.hasSymbol)  tips.push('Add special characters (!@#$%^&*)');
  if (!checks.noCommon)   tips.push('Avoid common passwords');
  if (!checks.noRepeat)   tips.push('Avoid repeated characters (aaa, 111)');
  if (!checks.noSequence) tips.push('Avoid sequential patterns (abc, 123)');

  // Crack time estimate
  let entropy = 0;
  if (checks.hasLower)  entropy += 26;
  if (checks.hasUpper)  entropy += 26;
  if (checks.hasNumber) entropy += 10;
  if (checks.hasSymbol) entropy += 32;
  const combinations = Math.pow(entropy || 1, pw.length);
  const secondsToCrack = combinations / 1e10; // 10 billion guesses/sec
  let crackTime;
  if (secondsToCrack < 1)           crackTime = 'Instantly';
  else if (secondsToCrack < 60)     crackTime = `${Math.round(secondsToCrack)} seconds`;
  else if (secondsToCrack < 3600)   crackTime = `${Math.round(secondsToCrack/60)} minutes`;
  else if (secondsToCrack < 86400)  crackTime = `${Math.round(secondsToCrack/3600)} hours`;
  else if (secondsToCrack < 2592000)crackTime = `${Math.round(secondsToCrack/86400)} days`;
  else if (secondsToCrack < 31536000*1000) crackTime = `${Math.round(secondsToCrack/2592000)} months`;
  else                              crackTime = 'Centuries+';

  return { score, label, color, bg, tips, checks, crackTime, length: pw.length };
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [show, setShow]         = useState(false);
  const result                  = analyzePassword(password);

  const checkItems = result ? [
    { label: '8+ characters',           pass: result.checks.length8   },
    { label: '12+ characters',          pass: result.checks.length12  },
    { label: 'Uppercase letters (A-Z)', pass: result.checks.hasUpper  },
    { label: 'Lowercase letters (a-z)', pass: result.checks.hasLower  },
    { label: 'Numbers (0-9)',           pass: result.checks.hasNumber },
    { label: 'Special characters',      pass: result.checks.hasSymbol },
    { label: 'Not a common password',   pass: result.checks.noCommon  },
    { label: 'No repeated characters',  pass: result.checks.noRepeat  },
  ] : [];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Password Strength Checker</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Enter your password</label>
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Type a password to analyze..."
              className="input-field pr-12 font-mono text-base"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-700 text-lg"
            >
              {show ? '🙈' : '👁️'}
            </button>
          </div>
          <p className="text-xs text-surface-400 mt-1.5">
            🔒 Your password is never sent to any server — all analysis is local.
          </p>
        </div>

        {result && (
          <>
            {/* Strength bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-surface-700">Strength</span>
                <span className={`text-sm font-bold ${result.color}`}>{result.label}</span>
              </div>
              <div className="w-full h-3 bg-surface-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${result.bg}`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-surface-400 mt-1">
                <span>Very Weak</span>
                <span>Score: {result.score}/100</span>
                <span>Very Strong</span>
              </div>
            </div>

            {/* Crack time */}
            <div className="flex items-center gap-3 p-4 bg-surface-50 rounded-xl border border-surface-200">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs text-surface-500 font-medium">Estimated time to crack</div>
                <div className={`text-lg font-bold ${result.color}`}>{result.crackTime}</div>
                <div className="text-xs text-surface-400">at 10 billion guesses/second</div>
              </div>
            </div>

            {/* Checklist */}
            <div>
              <p className="text-sm font-medium text-surface-700 mb-3">Security checklist</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {checkItems.map(item => (
                  <div key={item.label} className={`flex items-center gap-2 p-2.5 rounded-lg border text-sm
                    ${item.pass ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-surface-50 border-surface-200 text-surface-500'}`}>
                    <span>{item.pass ? '✅' : '⬜'}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            {result.tips.length > 0 && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm font-semibold text-amber-800 mb-2">💡 How to improve</p>
                <ul className="space-y-1">
                  {result.tips.map(tip => (
                    <li key={tip} className="text-sm text-amber-700 flex items-start gap-2">
                      <span className="mt-0.5 shrink-0">→</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {!password && (
          <div className="text-center py-8 text-surface-400">
            <div className="text-4xl mb-3">🛡️</div>
            <p className="text-sm">Type a password above to see its strength analysis</p>
          </div>
        )}
      </div>
    </div>
  );
}
