'use client';
import { useState, useRef, useEffect } from 'react';

export default function QrCodeGenerator() {
  const [text, setText]     = useState('https://toolstackhub.com');
  const [size, setSize]     = useState(256);
  const [fg, setFg]         = useState('#000000');
  const [bg, setBg]         = useState('#ffffff');
  const [ecLevel, setEc]    = useState('M');
  const [qrUrl, setQrUrl]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');
  const canvasRef           = useRef(null);

  // Generate QR via QR Server API (no npm package needed for static export)
  const generateQR = () => {
    if (!text.trim()) { setError('Please enter text or URL.'); return; }
    setError('');
    setLoading(true);

    // Use goqr.me free API — runs entirely client-side via browser fetch
    const params = new URLSearchParams({
      data:            encodeURIComponent(text),
      size:            `${size}x${size}`,
      ecc:             ecLevel,
      color:           fg.slice(1),
      bgcolor:         bg.slice(1),
      margin:          '2',
      format:          'png',
    });

    const url = `https://api.qrserver.com/v1/create-qr-code/?${params}`;
    setQrUrl(url);
    setLoading(false);
  };

  // Auto-generate on mount
  useEffect(() => { generateQR(); }, []);

  const downloadQR = () => {
    if (!qrUrl) return;
    const a = document.createElement('a');
    a.href = qrUrl;
    a.download = 'qrcode.png';
    a.target = '_blank';
    // For CORS-safe download, open in new tab
    window.open(qrUrl, '_blank');
  };

  const presets = [
    { label: 'URL',    value: 'https://toolstackhub.com' },
    { label: 'Email',  value: 'mailto:hello@example.com' },
    { label: 'Phone',  value: 'tel:+15551234567' },
    { label: 'WiFi',   value: 'WIFI:T:WPA;S:MyNetwork;P:MyPassword;;' },
    { label: 'vCard',  value: 'BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nTEL:+1555123456\nEMAIL:john@example.com\nEND:VCARD' },
  ];

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">QR Code Generator</span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
          {/* Controls */}
          <div className="space-y-4">
            {/* Text input */}
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">
                Content (URL, text, email, phone…)
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="https://example.com"
                className="textarea-field min-h-[90px]"
                spellCheck={false}
              />
              {error && <p className="text-xs text-red-600 mt-1">❌ {error}</p>}
            </div>

            {/* Quick presets */}
            <div>
              <p className="text-xs font-medium text-surface-500 mb-2">Quick presets:</p>
              <div className="flex flex-wrap gap-2">
                {presets.map(p => (
                  <button
                    key={p.label}
                    onClick={() => setText(p.value)}
                    className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Options grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">
                  Size: {size}×{size}px
                </label>
                <input
                  type="range" min="128" max="512" step="64" value={size}
                  onChange={e => setSize(Number(e.target.value))}
                  className="w-full accent-brand-600"
                />
              </div>

              {/* Error Correction */}
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Error Correction</label>
                <select
                  value={ecLevel}
                  onChange={e => setEc(e.target.value)}
                  className="input-field"
                >
                  <option value="L">L — Low (7%)</option>
                  <option value="M">M — Medium (15%)</option>
                  <option value="Q">Q — Quartile (25%)</option>
                  <option value="H">H — High (30%)</option>
                </select>
              </div>

              {/* Colors */}
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Foreground</label>
                <div className="flex gap-2 items-center">
                  <input type="color" value={fg} onChange={e => setFg(e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer border border-surface-200" />
                  <input type="text" value={fg} onChange={e => setFg(e.target.value)}
                    className="input-field font-mono" maxLength={7} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Background</label>
                <div className="flex gap-2 items-center">
                  <input type="color" value={bg} onChange={e => setBg(e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer border border-surface-200" />
                  <input type="text" value={bg} onChange={e => setBg(e.target.value)}
                    className="input-field font-mono" maxLength={7} />
                </div>
              </div>
            </div>

            {/* Generate button */}
            <button onClick={generateQR} disabled={loading} className="btn-primary w-full">
              {loading ? '⏳ Generating…' : '📱 Generate QR Code'}
            </button>
          </div>

          {/* QR Preview */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="rounded-2xl border-2 border-surface-200 overflow-hidden flex items-center justify-center"
              style={{ width: 200, height: 200, background: bg }}
            >
              {qrUrl ? (
                <img
                  src={qrUrl}
                  alt="Generated QR Code"
                  width={180}
                  height={180}
                  className="block"
                  onError={() => setError('Failed to generate QR code. Please try again.')}
                />
              ) : (
                <span className="text-4xl">📱</span>
              )}
            </div>
            {qrUrl && (
              <button onClick={downloadQR} className="btn-secondary w-full text-sm">
                ⬇️ Download PNG
              </button>
            )}
            <p className="text-xs text-surface-400 text-center">
              Scan with any QR reader app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
