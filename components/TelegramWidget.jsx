'use client';

import { useState, useEffect, useCallback } from 'react';

// ─── CONFIG ────────────────────────────────────────────────────
const TELEGRAM_URL = 'https://t.me/toolstackhub'; // ← replace with your link

const VARIANT = {
  headline: 'Get free tools & AI hacks first',
  sub:      'Join 1,000+ builders on Telegram',
};

// ─── ANALYTICS HELPER ─────────────────────────────────────────
function trackEvent(name, params = {}) {
  try {
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', name, { event_category: 'telegram_widget', ...params });
  } catch (_) {}
}

// ─── ICONS ────────────────────────────────────────────────────
const TelegramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
  </svg>
);
const CloseIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const CheckIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ─── BRAND COLORS (matches ToolStackHub indigo) ───────────────
const C = {
  primary:  '#4f46e5',   // indigo-600
  light:    '#6366f1',   // indigo-500
  shadow:   'rgba(79,70,229,0.4)',
  shadowPulse: '0 0 0 8px rgba(79,70,229,0.18), 0 8px 28px rgba(79,70,229,0.5)',
  shadowIdle:  '0 8px 24px rgba(79,70,229,0.38)',
};

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function TelegramWidget() {
  // Pill is visible immediately — no delay
  const [expanded, setExpanded] = useState(false);
  const [clicked,  setClicked]  = useState(false);
  const [pulsing,  setPulsing]  = useState(false);

  // Pulse every 12 s
  useEffect(() => {
    if (expanded) return;
    const id = setInterval(() => {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 600);
    }, 12000);
    return () => clearInterval(id);
  }, [expanded]);

  // Dismiss card only — pill stays
  const handleDismiss = useCallback((e) => {
    e.stopPropagation();
    setExpanded(false);
    trackEvent('telegram_card_dismissed');
  }, []);

  const handleToggle = useCallback(() => {
    setExpanded(v => !v);
    if (!expanded) trackEvent('telegram_card_opened');
  }, [expanded]);

  const handleJoin = useCallback(() => {
    setClicked(true);
    trackEvent('telegram_cta_clicked');
    setTimeout(() => window.open(TELEGRAM_URL, '_blank', 'noopener'), 300);
  }, []);

  return (
    <>
      <div
        className="fixed z-50 flex flex-col items-end gap-2"
        style={{ bottom: 24, right: 24, animation: 'tg-slideup 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
      >

        {/* ── CARD ─────────────────────────────────────────── */}
        {expanded && (
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: 300,
              background: 'linear-gradient(150deg,#1e1b4b 0%,#0f172a 100%)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2)',
              animation: 'tg-cardin 0.32s cubic-bezier(0.16,1,0.3,1) both',
              transformOrigin: 'bottom right',
            }}
          >
            {/* shimmer bar */}
            <div style={{ height: 3, background: `linear-gradient(90deg,${C.primary},${C.light},${C.primary})`, backgroundSize: '200% 100%', animation: 'tg-shimmer 3s linear infinite' }} />

            {/* close */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}
            >
              <CloseIcon />
            </button>

            <div className="p-5 pt-4">
              {/* avatar row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg,${C.primary},${C.light})` }}>
                  <TelegramIcon size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm leading-tight">ToolStackHub</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style={{ animation: 'tg-blink 2s ease infinite' }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>1,000+ members · Active</span>
                  </div>
                </div>
              </div>

              <p className="font-bold text-white text-base leading-snug mb-1">{VARIANT.headline}</p>
              <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{VARIANT.sub}</p>

              {/* benefits */}
              <ul className="space-y-2 mb-5">
                {['Early access to new tools', 'Free AI prompts & hacks', 'Weekly curated resources'].map(b => (
                  <li key={b} className="flex items-center gap-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(99,102,241,0.25)', color: '#a5b4fc' }}>
                      <CheckIcon />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {clicked ? (
                <div className="w-full h-10 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                  style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399' }}>
                  <CheckIcon /> Redirecting to Telegram…
                </div>
              ) : (
                <button
                  onClick={handleJoin}
                  className="w-full h-10 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-white active:scale-95 transition-transform"
                  style={{ background: `linear-gradient(135deg,${C.primary},${C.light})`, boxShadow: `0 4px 18px ${C.shadow}` }}
                >
                  <TelegramIcon size={16} />
                  Join Free on Telegram
                  <ArrowIcon />
                </button>
              )}

              <p className="text-center text-xs mt-2.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Free · No spam · Leave anytime
              </p>
            </div>
          </div>
        )}

        {/* ── PILL (always visible) ────────────────────────── */}
        <button
          onClick={handleToggle}
          aria-label="Join ToolStackHub on Telegram"
          className="flex items-center gap-2 font-semibold text-white active:scale-95 transition-transform duration-150"
          style={{
            height: 44,
            padding: '0 16px 0 12px',
            borderRadius: 999,
            background: `linear-gradient(135deg,${C.primary} 0%,${C.light} 100%)`,
            boxShadow: pulsing ? C.shadowPulse : C.shadowIdle,
            fontSize: 13,
            transition: 'box-shadow 0.35s ease',
            letterSpacing: '0.01em',
          }}
        >
          <TelegramIcon size={17} />
          <span className="hidden sm:inline text-white">Join Telegram</span>
          <span className="sm:hidden">Telegram</span>
          {/* live dot */}
          <span className="w-2 h-2 rounded-full bg-emerald-400 ml-0.5"
            style={{ animation: 'tg-blink 2.2s ease infinite' }} />
        </button>
      </div>

      <style>{`
        @keyframes tg-slideup {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes tg-cardin {
          from { opacity:0; transform:scale(0.9) translateY(6px); }
          to   { opacity:1; transform:scale(1)   translateY(0);   }
        }
        @keyframes tg-shimmer {
          0%   { background-position:200% center; }
          100% { background-position:-200% center; }
        }
        @keyframes tg-blink {
          0%,100% { opacity:1;   }
          50%      { opacity:0.3; }
        }
      `}</style>
    </>
  );
}