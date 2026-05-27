'use client';
import { useState } from 'react';

function base64UrlDecode(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = b64 + '='.repeat((4 - b64.length % 4) % 4);
  try {
    return JSON.parse(atob(padded));
  } catch {
    return atob(padded);
  }
}

function decodeJWT(token) {
  const parts = token.trim().split('.');
  if (parts.length !== 3) return { error: 'Invalid JWT — must have 3 parts (header.payload.signature)' };
  try {
    const header    = base64UrlDecode(parts[0]);
    const payload   = base64UrlDecode(parts[1]);
    const signature = parts[2];
    return { header, payload, signature, error: null };
  } catch (e) {
    return { error: `Decode failed: ${e.message}` };
  }
}

function formatDate(ts) {
  if (!ts || typeof ts !== 'number') return null;
  return new Date(ts * 1000).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
}

function isExpired(exp) {
  if (!exp) return false;
  return Date.now() > exp * 1000;
}

function JsonDisplay({ data }) {
  if (typeof data === 'string') {
    return <pre className="text-sm font-mono text-surface-700 whitespace-pre-wrap break-all">{data}</pre>;
  }
  return (
    <div className="space-y-1">
      {Object.entries(data).map(([k, v]) => (
        <div key={k} className="flex items-start gap-2 text-sm">
          <span className="text-brand-600 font-mono font-semibold shrink-0 min-w-[100px]">{k}:</span>
          <span className="font-mono text-surface-700 break-all">
            {typeof v === 'object' ? JSON.stringify(v) : String(v)}
            {(k === 'exp' || k === 'iat' || k === 'nbf') && typeof v === 'number' && (
              <span className="ml-2 text-surface-400 font-sans text-xs">({formatDate(v)})</span>
            )}
            {k === 'exp' && isExpired(v) && (
              <span className="ml-2 bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">EXPIRED</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

const EXAMPLE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaXR5YSBTaGFybWEiLCJpYXQiOjE3MTY0MDAwMDAsImV4cCI6OTk5OTk5OTk5OX0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export default function JwtDecoder() {
  const [token,   setToken]   = useState('');
  const [copied,  setCopied]  = useState('');
  const [tab,     setTab]     = useState('payload');

  const decoded = token.trim() ? decodeJWT(token) : null;
  const expStatus = decoded?.payload?.exp
    ? (isExpired(decoded.payload.exp) ? 'expired' : 'valid')
    : 'unknown';

  const copyPart = (text, key) => {
    navigator.clipboard.writeText(typeof text === 'object' ? JSON.stringify(text, null, 2) : String(text)).catch(() => {
      const el = document.createElement('textarea');
      el.value = typeof text === 'object' ? JSON.stringify(text, null, 2) : String(text);
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el);
    });
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">JWT Decoder</span>
        <button
          onClick={() => { setToken(EXAMPLE_JWT); setTab('payload'); }}
          className="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
        >
          Load Example
        </button>
      </div>

      <div className="p-5 space-y-4">
        {/* Token input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">
            Paste JWT Token
          </label>
          <textarea
            value={token}
            onChange={e => setToken(e.target.value)}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            className="textarea-field font-mono text-xs min-h-[100px]"
            spellCheck={false}
          />
        </div>

        {/* Error */}
        {decoded?.error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
            ❌ {decoded.error}
          </div>
        )}

        {/* Decoded output */}
        {decoded && !decoded.error && (
          <div className="space-y-3">
            {/* Status banner */}
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium ${
              expStatus === 'valid'   ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' :
              expStatus === 'expired' ? 'bg-red-50 border border-red-200 text-red-700' :
              'bg-surface-50 border border-surface-200 text-surface-600'
            }`}>
              <span>{expStatus === 'valid' ? '✅' : expStatus === 'expired' ? '❌' : 'ℹ️'}</span>
              <span>
                {expStatus === 'valid'   ? `Token is valid — expires ${formatDate(decoded.payload.exp)}` :
                 expStatus === 'expired' ? `Token expired on ${formatDate(decoded.payload.exp)}` :
                 'No expiry (exp) claim found — token does not expire'}
              </span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-surface-100 p-1 rounded-xl w-fit">
              {[['header', 'Header'], ['payload', 'Payload'], ['signature', 'Signature']].map(([t, l]) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    tab === t ? 'bg-white text-surface-900 shadow-sm' : 'text-surface-500 hover:text-surface-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">
                  {tab === 'header' ? 'Header — Algorithm & Token Type' :
                   tab === 'payload' ? 'Payload — Claims & Data' :
                   'Signature — Verification String'}
                </p>
                <button
                  onClick={() => copyPart(
                    tab === 'signature' ? decoded.signature : decoded[tab],
                    tab
                  )}
                  className="text-xs text-brand-600 hover:text-brand-800 transition-colors"
                >
                  {copied === tab ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {tab === 'signature' ? (
                <div>
                  <pre className="text-xs font-mono text-surface-700 break-all">{decoded.signature}</pre>
                  <p className="text-xs text-surface-400 mt-3">
                    ⚠️ The signature cannot be verified without the secret key. This tool only decodes — it does not validate signatures.
                  </p>
                </div>
              ) : (
                <JsonDisplay data={decoded[tab]} />
              )}
            </div>

            {/* Algorithm info */}
            {decoded.header?.alg && (
              <p className="text-xs text-surface-500">
                Algorithm: <code className="bg-surface-100 px-1.5 py-0.5 rounded font-mono">{decoded.header.alg}</code>
                {decoded.header.alg === 'none' && (
                  <span className="ml-2 text-red-600 font-semibold">⚠️ Unsigned token — not secure</span>
                )}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
