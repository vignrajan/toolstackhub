'use client';
import { useEffect, useRef } from 'react';

/**
 * AdBanner Component
 * ==================
 * Monetization-ready ad slot placeholder.
 *
 * To activate Google AdSense:
 * 1. Replace data-ad-client with your publisher ID
 * 2. Replace data-ad-slot with your ad unit slot ID
 * 3. Uncomment the <ins> tag block
 * 4. Add the AdSense script to app/layout.jsx
 *
 * Variants:
 * - "top"     → leaderboard (728×90 / responsive)
 * - "sidebar" → medium rectangle (300×250)
 * - "content" → in-content responsive unit
 */
export default function AdBanner({ variant = 'top', className = '' }) {
  const adRef = useRef(null);

  // AdSense initialization hook (uncomment when live)
  // useEffect(() => {
  //   try {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (e) {}
  // }, []);

  const sizes = {
    top: {
      wrapper: 'w-full max-w-4xl mx-auto',
      style: { minHeight: 90, maxHeight: 120 },
      label: 'Advertisement — Top Banner (728×90)',
      hint: 'Leaderboard Ad',
    },
    sidebar: {
      wrapper: 'w-full',
      style: { minHeight: 250, maxWidth: 300 },
      label: 'Advertisement — Sidebar (300×250)',
      hint: 'Medium Rectangle',
    },
    content: {
      wrapper: 'w-full max-w-2xl mx-auto',
      style: { minHeight: 90 },
      label: 'Advertisement — In-Content',
      hint: 'Responsive Ad Unit',
    },
  };

  const config = sizes[variant] || sizes.top;

  return (
    <div className={`${config.wrapper} ${className}`} aria-label="Advertisement">
      {/* ── PLACEHOLDER (remove when AdSense is live) ── */}
      <div
        className="ad-placeholder"
        style={config.style}
      >
        <div className="text-center py-4 px-6">
          <div className="text-xs font-medium text-surface-400 mb-1 uppercase tracking-wider">
            {config.hint}
          </div>
          <div className="text-[11px] text-surface-300">
            {config.label}
          </div>
          <div className="text-[10px] text-surface-300 mt-1">
            → Replace with Google AdSense &lt;ins&gt; tag
          </div>
        </div>
      </div>

      {/* ── REAL ADSENSE TAG (uncomment when ready) ──
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...config.style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
    </div>
  );
}

/**
 * AffiliateCTA Component
 * Affiliate link placeholder shown below tool output areas.
 */
export function AffiliateCTA({ toolName }) {
  return (
    <div className="mt-6 p-4 rounded-xl border border-dashed border-surface-200 bg-surface-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-surface-200 flex items-center justify-center shrink-0">
          🏷️
        </div>
        <div className="flex-1">
          <div className="text-xs text-surface-400 font-medium uppercase tracking-wider mb-0.5">
            Sponsored
          </div>
          <div className="text-sm text-surface-600">
            Looking for more advanced {toolName} features?{' '}
            <a href="#affiliate-placeholder" className="text-brand-600 hover:underline font-medium">
              Try Pro Tool →
            </a>
          </div>
        </div>
      </div>
      <div className="text-[10px] text-surface-300 mt-2">
        → Replace with real affiliate link. Disclose per FTC guidelines.
      </div>
    </div>
  );
}
