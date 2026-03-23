'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

// Handwriting fonts loaded via Google Fonts in the component
const FONTS = [
  { id: 'caveat',        label: 'Caveat',         family: "'Caveat', cursive",         style: 'Natural' },
  { id: 'kalam',         label: 'Kalam',           family: "'Kalam', cursive",           style: 'Neat' },
  { id: 'patrick-hand',  label: 'Patrick Hand',    family: "'Patrick Hand', cursive",    style: 'Clean' },
  { id: 'dancing-script',label: 'Dancing Script',  family: "'Dancing Script', cursive",  style: 'Cursive' },
  { id: 'shadows-into',  label: 'Shadows Into Light', family: "'Shadows Into Light', cursive", style: 'Casual' },
  { id: 'indie-flower',  label: 'Indie Flower',    family: "'Indie Flower', cursive",    style: 'Bubbly' },
];

const PEN_COLORS = [
  { id: 'blue',      label: 'Blue Ink',    value: '#1a47a0' },
  { id: 'black',     label: 'Black Ink',   value: '#1a1a2e' },
  { id: 'darkblue',  label: 'Dark Blue',   value: '#0d2137' },
  { id: 'red',       label: 'Red Pen',     value: '#c0392b' },
  { id: 'green',     label: 'Green Pen',   value: '#1a6b3a' },
  { id: 'purple',    label: 'Purple Pen',  value: '#6c3483' },
];

const PAPER_STYLES = [
  { id: 'ruled',     label: 'Ruled Paper',   bg: '#fffef5', lineColor: '#b8d4f0' },
  { id: 'white',     label: 'White Paper',   bg: '#ffffff', lineColor: '#e8ecf0' },
  { id: 'yellow',    label: 'Yellow Notepad',bg: '#fffde7', lineColor: '#c8b97a' },
  { id: 'grid',      label: 'Grid Paper',    bg: '#f8fbff', lineColor: '#cce0f5' },
];

export default function TextToHandwriting() {
  const [text, setText]             = useState('The quick brown fox jumps over the lazy dog.\nThis is a sample of handwritten text.\nYou can type anything here!');
  const [font, setFont]             = useState(FONTS[0]);
  const [penColor, setPenColor]     = useState(PEN_COLORS[0]);
  const [paper, setPaper]           = useState(PAPER_STYLES[0]);
  const [fontSize, setFontSize]     = useState(28);
  const [lineHeight, setLineHeight] = useState(56);
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const canvasRef = useRef(null);

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Kalam:wght@300;400&family=Patrick+Hand&family=Dancing+Script:wght@400;600&family=Shadows+Into+Light&family=Indie+Flower&display=swap';
    document.head.appendChild(link);
    link.onload = () => {
      document.fonts.ready.then(() => setFontsLoaded(true));
    };
    // Fallback
    setTimeout(() => setFontsLoaded(true), 2000);
    return () => document.head.removeChild(link);
  }, []);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const PADDING_X    = 60;
    const PADDING_TOP  = 40;
    const MARGIN_LEFT  = 90; // Red margin line position

    // Split text into lines
    ctx.font = `${fontSize}px ${font.family}`;
    ctx.letterSpacing = `${letterSpacing}px`;
    const rawLines = text.split('\n');
    const wrappedLines = [];
    const maxWidth = canvas.width - MARGIN_LEFT - PADDING_X;

    rawLines.forEach(line => {
      if (!line.trim()) { wrappedLines.push(''); return; }
      let current = '';
      const words = line.split(' ');
      words.forEach(word => {
        const test = current ? `${current} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && current) {
          wrappedLines.push(current);
          current = word;
        } else {
          current = test;
        }
      });
      if (current) wrappedLines.push(current);
    });

    // Resize canvas height to fit content
    const totalLines = Math.max(wrappedLines.length + 2, 10);
    canvas.height = PADDING_TOP + totalLines * lineHeight + 40;

    // Draw paper background
    ctx.fillStyle = paper.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw paper lines
    if (paper.id === 'grid') {
      ctx.strokeStyle = paper.lineColor;
      ctx.lineWidth   = 0.5;
      // Horizontal lines
      for (let y = PADDING_TOP; y < canvas.height; y += lineHeight) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      // Vertical lines
      for (let x = 0; x < canvas.width; x += lineHeight) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
    } else {
      // Ruled lines
      ctx.strokeStyle = paper.lineColor;
      ctx.lineWidth   = 1;
      for (let y = PADDING_TOP + lineHeight; y < canvas.height; y += lineHeight) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
    }

    // Red margin line
    if (paper.id !== 'white' && paper.id !== 'grid') {
      ctx.strokeStyle = '#f5a0a0';
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.moveTo(MARGIN_LEFT, 0);
      ctx.lineTo(MARGIN_LEFT, canvas.height);
      ctx.stroke();
    }

    // Draw holes (notebook style)
    if (paper.id === 'ruled' || paper.id === 'yellow') {
      ctx.fillStyle = '#e8e8e8';
      [canvas.height * 0.2, canvas.height * 0.5, canvas.height * 0.8].forEach(y => {
        ctx.beginPath();
        ctx.arc(22, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    // Draw text
    ctx.font          = `${fontSize}px ${font.family}`;
    ctx.fillStyle     = penColor.value;
    ctx.letterSpacing = `${letterSpacing}px`;
    ctx.textBaseline  = 'alphabetic';

    // Add slight ink variation
    wrappedLines.forEach((line, i) => {
      const x = MARGIN_LEFT + 16;
      const y = PADDING_TOP + (i + 1) * lineHeight - 8;
      // Very subtle rotation per character for realism
      const wobble = (Math.sin(i * 7.3) * 0.3);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(wobble * Math.PI / 180);
      ctx.fillText(line, 0, 0);
      ctx.restore();
    });

    // Subtle paper texture overlay
    ctx.globalAlpha = 0.015;
    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        1, 1
      );
    }
    ctx.globalAlpha = 1;

  }, [text, font, penColor, paper, fontSize, lineHeight, letterSpacing, fontsLoaded]);

  // Redraw whenever anything changes
  useEffect(() => {
    if (fontsLoaded) drawCanvas();
  }, [drawCanvas, fontsLoaded]);

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'handwriting.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const downloadPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const imgData = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Handwriting - ToolStackHub</title>
        <style>
          * { margin: 0; padding: 0; }
          body { background: white; }
          img { width: 100%; height: auto; display: block; }
          @media print {
            body { margin: 0; }
            img { width: 100%; }
          }
        </style>
      </head>
      <body>
        <img src="${imgData}" />
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 500);
          }
        </script>
      </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Toolbar header */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap gap-2">
        <span className="text-sm font-medium text-surface-600">Text to Handwriting Generator</span>
        <div className="flex gap-2">
          <button onClick={downloadPNG} className="btn-primary text-sm py-1.5 px-3">
            ⬇️ PNG
          </button>
          <button onClick={downloadPDF} className="btn-secondary text-sm py-1.5 px-3">
            📄 PDF
          </button>
        </div>
      </div>

      <div className="p-5 space-y-5">

        {/* Text Input */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-surface-700">Your Text</label>
            <button onClick={() => setText('')}
              className="text-xs text-surface-400 hover:text-red-500 transition-colors">
              ✕ Clear
            </button>
          </div>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste your text here... it will be converted to handwriting instantly."
            className="textarea-field min-h-[120px] font-body"
            spellCheck
          />
          <p className="text-xs text-surface-400 mt-1">{text.length} characters · {text.split('\n').length} lines</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Font selector */}
          <div>
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">Handwriting Style</label>
            <div className="space-y-1.5">
              {FONTS.map(f => (
                <button key={f.id} onClick={() => setFont(f)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-sm transition-all
                    ${font.id === f.id ? 'bg-brand-50 border-brand-300 text-brand-700' : 'bg-surface-50 border-surface-200 text-surface-700 hover:border-brand-200'}`}>
                  <span style={{ fontFamily: f.family, fontSize: 16 }}>{f.label}</span>
                  <span className="text-xs text-surface-400">{f.style}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paper style */}
          <div>
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">Paper Style</label>
            <div className="space-y-1.5">
              {PAPER_STYLES.map(p => (
                <button key={p.id} onClick={() => setPaper(p)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-all
                    ${paper.id === p.id ? 'bg-brand-50 border-brand-300 text-brand-700' : 'bg-surface-50 border-surface-200 text-surface-700 hover:border-brand-200'}`}>
                  <div className="w-6 h-6 rounded border border-surface-300 shrink-0 flex items-end pb-0.5"
                    style={{ background: p.bg }}>
                    <div className="w-full h-px" style={{ background: p.lineColor }} />
                  </div>
                  {p.label}
                </button>
              ))}
            </div>

            {/* Pen color */}
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mt-4 mb-2">Pen Color</label>
            <div className="grid grid-cols-3 gap-1.5">
              {PEN_COLORS.map(c => (
                <button key={c.id} onClick={() => setPenColor(c)}
                  title={c.label}
                  className={`flex items-center justify-center h-9 rounded-xl border-2 transition-all text-xs font-medium
                    ${penColor.id === c.id ? 'border-brand-400 scale-110 shadow-sm' : 'border-surface-200 hover:border-surface-300'}`}
                  style={{ background: c.value, color: '#fff' }}>
                  {penColor.id === c.id ? '✓' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="flex justify-between text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
                <span>Font Size</span>
                <span className="text-brand-600 normal-case font-mono">{fontSize}px</span>
              </label>
              <input type="range" min="18" max="42" value={fontSize}
                onChange={e => setFontSize(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-surface-400 mt-1">
                <span>Small</span><span>Large</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
                <span>Line Spacing</span>
                <span className="text-brand-600 normal-case font-mono">{lineHeight}px</span>
              </label>
              <input type="range" min="40" max="80" value={lineHeight}
                onChange={e => setLineHeight(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-surface-400 mt-1">
                <span>Tight</span><span>Loose</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
                <span>Letter Spacing</span>
                <span className="text-brand-600 normal-case font-mono">{letterSpacing}px</span>
              </label>
              <input type="range" min="0" max="6" step="0.5" value={letterSpacing}
                onChange={e => setLetterSpacing(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-surface-400 mt-1">
                <span>Tight</span><span>Wide</span>
              </div>
            </div>

            {/* Download buttons (bottom) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button onClick={downloadPNG} className="btn-primary text-sm py-2.5">
                🖼️ Download PNG
              </button>
              <button onClick={downloadPDF} className="btn-secondary text-sm py-2.5">
                📄 Download PDF
              </button>
            </div>

            {!fontsLoaded && (
              <div className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                ⏳ Loading handwriting fonts...
              </div>
            )}
          </div>
        </div>

        {/* Canvas Preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-surface-500 uppercase tracking-wider">
              Live Preview
            </label>
            <span className="text-xs text-surface-400">Updates in real time</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-sm overflow-x-auto custom-scrollbar">
            <canvas
              ref={canvasRef}
              width={800}
              style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <p className="text-xs text-surface-400 mt-2 text-center">
            Right-click the preview → Save Image As to save manually, or use the Download buttons above
          </p>
        </div>

      </div>
    </div>
  );
}