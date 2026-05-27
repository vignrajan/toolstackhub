'use client';
import { useState, useEffect } from 'react';

const COUNTRY_CODES = [
  { code: '+91',  flag: '🇮🇳', name: 'India',        digits: 10 },
  { code: '+1',   flag: '🇺🇸', name: 'US / Canada',  digits: 10 },
  { code: '+44',  flag: '🇬🇧', name: 'UK',           digits: 10 },
  { code: '+61',  flag: '🇦🇺', name: 'Australia',    digits: 9  },
  { code: '+971', flag: '🇦🇪', name: 'UAE',          digits: 9  },
  { code: '+65',  flag: '🇸🇬', name: 'Singapore',    digits: 8  },
  { code: '+60',  flag: '🇲🇾', name: 'Malaysia',     digits: 9  },
  { code: '+27',  flag: '🇿🇦', name: 'South Africa', digits: 9  },
];

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState('+91');
  const [phone,       setPhone]       = useState('');
  const [message,     setMessage]     = useState('');
  const [copied,      setCopied]      = useState(false);
  const [qrUrl,       setQrUrl]       = useState('');
  const [error,       setError]       = useState('');

  // ── Derived values ──────────────────────────────────────────
  const digits     = phone.replace(/\D/g, '');
  const fullNumber = `${countryCode.replace('+', '')}${digits}`;
  const selected   = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];
  const minDigits  = selected.digits;

  const isValid    = digits.length >= minDigits && digits.length <= 15;
  const waLink     = isValid
    ? `https://wa.me/${fullNumber}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ''}`
    : '';

  // ── Auto-generate QR when link changes ─────────────────────
  useEffect(() => {
    if (!waLink) { setQrUrl(''); return; }
    const params = new URLSearchParams({
      data:    encodeURIComponent(waLink),
      size:    '200x200',
      ecc:     'M',
      color:   '25D366'.replace('#', ''),
      bgcolor: 'ffffff',
      margin:  '2',
      format:  'png',
    });
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?${params}`);
  }, [waLink]);

  // ── Validate phone input ────────────────────────────────────
  const handlePhone = (val) => {
    setPhone(val);
    const d = val.replace(/\D/g, '');
    if (val && d.length < minDigits) {
      setError(`Enter at least ${minDigits} digits for ${selected.name}.`);
    } else if (d.length > 15) {
      setError('Phone number too long (max 15 digits).');
    } else {
      setError('');
    }
  };

  // ── Copy link ───────────────────────────────────────────────
  const copyLink = async () => {
    if (!waLink) return;
    try {
      await navigator.clipboard.writeText(waLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea');
      el.value = waLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ── Open link ───────────────────────────────────────────────
  const openLink = () => {
    if (!waLink) return;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-5">

      {/* ── Input card ─────────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center gap-2">
          <span className="text-lg">💬</span>
          <span className="font-semibold text-surface-800 text-sm">WhatsApp Link Generator</span>
        </div>

        <div className="p-5 space-y-5">

          {/* Phone number row */}
          <div>
            <label className="block text-xs font-semibold text-surface-600 uppercase tracking-wide mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              {/* Country code selector */}
              <div className="relative">
                <select
                  value={countryCode}
                  onChange={e => { setCountryCode(e.target.value); handlePhone(phone); }}
                  className="appearance-none pl-3 pr-7 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm font-medium text-surface-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 cursor-pointer min-w-[110px]"
                >
                  {COUNTRY_CODES.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-surface-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Phone input */}
              <input
                type="tel"
                value={phone}
                onChange={e => handlePhone(e.target.value)}
                placeholder={`${selected.digits}-digit mobile number`}
                className="flex-1 px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
            {error && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}
            {!error && phone && !isValid && (
              <p className="mt-1.5 text-xs text-amber-600">
                Enter {minDigits}+ digits for {selected.name} ({selected.flag} {countryCode}).
              </p>
            )}
            {isValid && (
              <p className="mt-1.5 text-xs text-emerald-600 flex items-center gap-1">
                <span>✅</span> Valid — full number: +{fullNumber}
              </p>
            )}
          </div>

          {/* Pre-filled message */}
          <div>
            <label className="block text-xs font-semibold text-surface-600 uppercase tracking-wide mb-2">
              Pre-filled Message <span className="text-surface-400 font-normal normal-case">(optional)</span>
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              placeholder="Hi! I'd like to connect with you on WhatsApp..."
              className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none"
            />
            <p className="mt-1 text-xs text-surface-400">
              This message will be pre-typed when the recipient opens the chat.
              {message.trim() && (
                <span className="ml-2 text-surface-500">{message.length} characters</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ── Generated link card ────────────────────────────── */}
      <div className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
        isValid ? 'border-emerald-200' : 'border-surface-200 opacity-60'
      }`}>
        <div className={`px-5 py-3 border-b flex items-center gap-2 ${
          isValid ? 'bg-emerald-50 border-emerald-200' : 'bg-surface-50 border-surface-200'
        }`}>
          <span className="text-lg">🔗</span>
          <span className="font-semibold text-surface-800 text-sm">Generated WhatsApp Link</span>
          {isValid && <span className="ml-auto text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Ready</span>}
        </div>

        <div className="p-5 space-y-4">
          {/* Link display */}
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={waLink || 'Enter a valid phone number to generate the link…'}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-mono border focus:outline-none ${
                isValid
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-surface-50 border-surface-200 text-surface-400 italic'
              }`}
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={copyLink}
              disabled={!isValid}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : isValid
                    ? 'bg-brand-600 text-white hover:bg-brand-700 active:scale-95'
                    : 'bg-surface-100 text-surface-400 cursor-not-allowed'
              }`}
            >
              {copied ? (
                <><span>✓</span> Copied!</>
              ) : (
                <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg> Copy Link</>
              )}
            </button>

            <button
              onClick={openLink}
              disabled={!isValid}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                isValid
                  ? 'border-emerald-500 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 active:scale-95'
                  : 'border-surface-200 text-surface-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Chat
            </button>
          </div>
        </div>
      </div>

      {/* ── QR Code card ───────────────────────────────────── */}
      {isValid && qrUrl && (
        <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex items-center gap-2">
            <span className="text-lg">📱</span>
            <span className="font-semibold text-surface-800 text-sm">QR Code</span>
            <span className="ml-auto text-xs text-surface-500">Scan to open WhatsApp chat</span>
          </div>
          <div className="p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="border-2 border-emerald-200 rounded-2xl p-3 bg-white shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrUrl}
                alt="WhatsApp QR code"
                width={200}
                height={200}
                className="rounded-xl block"
                loading="lazy"
              />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <div className="font-semibold text-surface-800 text-sm mb-1">Share via QR Code</div>
                <p className="text-xs text-surface-500 leading-relaxed">
                  Print this QR code on business cards, flyers, or your website.
                  Anyone who scans it with their camera will be taken directly to
                  a WhatsApp chat with your number
                  {message.trim() ? ' with your pre-filled message.' : '.'}
                </p>
              </div>
              <a
                href={qrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-100 text-surface-700 rounded-xl text-xs font-semibold hover:bg-surface-200 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download QR
              </a>
              <div className="text-xs text-surface-400 bg-surface-50 rounded-xl px-3 py-2 border border-surface-100">
                <strong className="text-surface-600">Tip:</strong> The QR code opens:{' '}
                <span className="font-mono text-brand-700 break-all">{waLink}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Feature badges ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {[
          { icon: '✅', label: 'Free' },
          { icon: '🇮🇳', label: 'India-focused' },
          { icon: '📱', label: 'Works instantly' },
          { icon: '🔒', label: 'No data stored' },
          { icon: '🌐', label: 'No signup needed' },
          { icon: '⚡', label: 'Browser-only' },
        ].map(b => (
          <span key={b.label}
            className="flex items-center gap-1.5 text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full border border-surface-200">
            {b.icon} {b.label}
          </span>
        ))}
      </div>

    </div>
  );
}
