'use client';
import { useState, useEffect } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LS_KEY = 'tsh_pdf_email';   // localStorage key
const TTL_DAYS = 30;

function getStoredEmail() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const { email, storedAt } = JSON.parse(raw);
    const ageDays = (Date.now() - storedAt) / (1000 * 60 * 60 * 24);
    return ageDays < TTL_DAYS ? email : null;
  } catch { return null; }
}

function storeEmail(email) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ email, storedAt: Date.now() }));
  } catch { /* localStorage unavailable */ }
}

export default function PDFEmailGate({ toolName, toolSlug, onEmailSubmitted, resultSummary }) {
  const [email,     setEmail]     = useState('');
  const [error,     setError]     = useState('');
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bypassed,  setBypassed]  = useState(false); // already subscribed

  // Check localStorage on mount
  useEffect(() => {
    const stored = getStoredEmail();
    if (stored) {
      setEmail(stored);
      setBypassed(true);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'pdf_download',
          tool: toolSlug,
          timestamp: new Date().toISOString(),
        }),
      });
      const data = await res.json();

      if (data.success) {
        storeEmail(email.trim());
        setSubmitted(true);
        onEmailSubmitted(email.trim());
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleBypass() {
    setSubmitted(true);
    onEmailSubmitted(email);
  }

  // ── Already subscribed — show direct download ──────────────
  if (bypassed) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="text-sm font-bold text-white mb-0.5">📄 Download {toolName} Report</div>
          {resultSummary && <div className="text-xs text-surface-400">{resultSummary}</div>}
        </div>
        <button
          onClick={handleBypass}
          className="shrink-0 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm"
        >
          ⬇️ Download PDF
        </button>
      </div>
    );
  }

  // ── Success state ──────────────────────────────────────────
  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center space-y-3">
        <div className="text-2xl">✅</div>
        <div className="font-bold text-white">PDF is ready to download</div>
        <p className="text-xs text-surface-400">We've also saved your email for new tool notifications. No spam, ever.</p>
      </div>
    );
  }

  // ── Default state — email gate ─────────────────────────────
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-surface-900/60 p-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl shrink-0">📄</span>
        <div>
          <div className="font-bold text-white text-base">Download Your {toolName} Report as PDF</div>
          <div className="text-xs text-surface-400 mt-0.5">
            Get a detailed PDF with year-wise breakdown, tax savings, and investment summary.
            {resultSummary && <span className="text-brand-400 font-semibold ml-1">{resultSummary}</span>}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex gap-2 flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(''); }}
            placeholder="Enter your email"
            autoComplete="email"
            className="flex-1 bg-surface-950 border border-surface-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-surface-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : 'Send PDF →'}
          </button>
        </div>

        {/* Inline error */}
        {error && (
          <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
            <span>⚠️</span><span>{error}</span>
          </p>
        )}
      </form>

      {/* Privacy note */}
      <p className="text-xs text-surface-500 mt-3 flex items-center gap-1.5">
        <span>🔒</span>
        <span>No spam. We only notify you when new tools launch. Unsubscribe anytime.</span>
      </p>
    </div>
  );
}