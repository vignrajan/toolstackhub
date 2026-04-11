'use client';
import { useState, useEffect } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LS_KEY = 'tsh_newsletter_subscribed';
const TTL_DAYS = 90;

function hasRecentlySubscribed() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    const { subscribedAt } = JSON.parse(raw);
    const ageDays = (Date.now() - subscribedAt) / (1000 * 60 * 60 * 24);
    return ageDays < TTL_DAYS;
  } catch { return false; }
}

function markSubscribed() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ subscribedAt: Date.now() }));
  } catch { /* localStorage unavailable */ }
}

export default function NewsletterBanner({ variant = 'tool' }) {
  const [email,   setEmail]   = useState('');
  const [error,   setError]   = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hidden,  setHidden]  = useState(true); // start hidden to avoid flash

  // Check localStorage after mount (avoid SSR mismatch)
  useEffect(() => {
    if (hasRecentlySubscribed()) {
      setHidden(true);
    } else {
      setHidden(false);
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
          source: 'newsletter',
          timestamp: new Date().toISOString(),
        }),
      });
      const data = await res.json();

      if (data.success) {
        markSubscribed();
        setSuccess(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  // Already subscribed recently — hide entirely
  if (hidden) return null;

  const copy = variant === 'blog'
    ? {
        icon: '📬',
        heading: 'Get Guides Like This in Your Inbox',
        desc: 'We publish practical guides on tools, tax, and productivity. One email when something new drops.',
      }
    : {
        icon: '🚀',
        heading: 'Get New Tools Before Anyone Else',
        desc: "We build 2–3 new free tools every week. Drop your email and we'll let you know when something useful ships.",
      };

  return (
    <section className="border-t border-b border-surface-200/30 bg-surface-50/5 py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {success ? (
          // ── Success state ────────────────────────────────────
          <div
            className="flex flex-col items-center gap-3"
            style={{ animation: 'fadeIn 0.3s ease' }}
          >
            <div className="text-3xl">✅</div>
            <div className="font-bold text-white text-lg">You're in!</div>
            <p className="text-surface-400 text-sm">We'll email you when new tools launch. No spam, ever.</p>
          </div>
        ) : (
          // ── Default state ────────────────────────────────────
          <>
            <div className="text-2xl mb-3">{copy.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{copy.heading}</h2>
            <p className="text-surface-400 text-sm mb-6 leading-relaxed">{copy.desc}</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="flex-1 max-w-sm bg-surface-900 border border-surface-600 rounded-xl sm:rounded-r-none px-4 py-2.5 text-sm text-white placeholder:text-surface-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl sm:rounded-l-none transition-colors text-sm whitespace-nowrap"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Joining...
                    </>
                  ) : 'Notify Me →'}
                </button>
              </div>

              {error && (
                <p className="text-xs text-rose-400 mt-2 flex items-center justify-center gap-1">
                  <span>⚠️</span><span>{error}</span>
                </p>
              )}
            </form>

            <p className="text-surface-500 text-xs mt-4">
              Join 500+ builders, developers & professionals. No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}