'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

const BUBBLE_STYLES = [
  { id: 'speech',  label: '💬 Speech',   desc: 'Classic speech'   },
  { id: 'thought', label: '💭 Thought',  desc: 'Thought cloud'    },
  { id: 'shout',   label: '💥 Shout',    desc: 'Spiky burst'      },
  { id: 'rect',    label: '🟦 Caption',  desc: 'Rectangle box'    },
  { id: 'round',   label: '🔵 Round',    desc: 'Rounded bubble'   },
  { id: 'whisper', label: '🗨️ Whisper',  desc: 'Dashed outline'   },
];

const TAIL_POSITIONS = [
  { id: 'bottom-left',  label: '↙' },
  { id: 'bottom-right', label: '↘' },
  { id: 'top-left',     label: '↖' },
  { id: 'top-right',    label: '↗' },
  { id: 'left',         label: '←' },
  { id: 'right',        label: '→' },
];

const FONTS = ['Arial', 'Comic Sans MS', 'Impact', 'Georgia', 'Verdana', 'Courier New', 'Tahoma'];
const PRESETS = [
  { bg: '#ffffff', border: '#000000', text: '#000000' },
  { bg: '#fff9c4', border: '#f9a825', text: '#000000' },
  { bg: '#e3f2fd', border: '#1565c0', text: '#0d47a1' },
  { bg: '#000000', border: '#ff0000', text: '#ffffff' },
  { bg: '#fce4ec', border: '#e91e63', text: '#880e4f' },
  { bg: '#e8f5e9', border: '#2e7d32', text: '#1b5e20' },
];

function drawSpeechBubble(ctx, b) {
  const { x, y, w, h, style, tail, bg, border, text, font, fontSize, bold, italic, borderWidth, opacity } = b;
  ctx.save();
  ctx.globalAlpha = opacity ?? 1;
  const r = Math.min(14, h / 3);

  // Draw bubble shape
  ctx.beginPath();
  if (style === 'shout') {
    // Spiky burst
    const cx = x + w / 2, cy = y + h / 2;
    const spikes = 12;
    const or = Math.min(w, h) / 2;
    const ir = or * 0.75;
    for (let i = 0; i < spikes * 2; i++) {
      const angle = (i * Math.PI) / spikes - Math.PI / 2;
      const radius = i % 2 === 0 ? or : ir;
      const px = cx + Math.cos(angle) * radius;
      const py = cy + Math.sin(angle) * radius;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  } else if (style === 'thought') {
    // Rounded cloud shape
    const cx = x + w / 2, cy = y + h / 2;
    const bumps = 7;
    const bumpR = w / (bumps * 1.8);
    for (let i = 0; i < bumps; i++) {
      const angle = (i / bumps) * Math.PI * 2;
      const bx = cx + Math.cos(angle) * (w / 2 - bumpR);
      const by = cy + Math.sin(angle) * (h / 2 - bumpR);
      ctx.arc(bx, by, bumpR * 1.1, 0, Math.PI * 2);
    }
  } else if (style === 'rect') {
    ctx.rect(x, y, w, h);
  } else {
    // Rounded rect (speech, round, whisper)
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  ctx.fillStyle = bg;
  ctx.fill();
  ctx.lineWidth = borderWidth ?? 3;
  ctx.strokeStyle = border;
  if (style === 'whisper') {
    ctx.setLineDash([8, 4]);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw tail
  if (style !== 'shout' && style !== 'thought' && tail !== 'none') {
    const tw = 16, th = 24;
    ctx.beginPath();
    ctx.fillStyle = bg;
    if (tail === 'bottom-left') {
      ctx.moveTo(x + 20, y + h);
      ctx.lineTo(x + 20 + tw, y + h);
      ctx.lineTo(x + 10, y + h + th);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (tail === 'bottom-right') {
      ctx.moveTo(x + w - 20 - tw, y + h);
      ctx.lineTo(x + w - 20, y + h);
      ctx.lineTo(x + w - 10, y + h + th);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (tail === 'top-left') {
      ctx.moveTo(x + 20, y);
      ctx.lineTo(x + 20 + tw, y);
      ctx.lineTo(x + 10, y - th);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (tail === 'top-right') {
      ctx.moveTo(x + w - 20 - tw, y);
      ctx.lineTo(x + w - 20, y);
      ctx.lineTo(x + w - 10, y - th);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (tail === 'left') {
      ctx.moveTo(x, y + h / 2 - tw / 2);
      ctx.lineTo(x, y + h / 2 + tw / 2);
      ctx.lineTo(x - th, y + h / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (tail === 'right') {
      ctx.moveTo(x + w, y + h / 2 - tw / 2);
      ctx.lineTo(x + w, y + h / 2 + tw / 2);
      ctx.lineTo(x + w + th, y + h / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  // Thought bubble tail dots
  if (style === 'thought') {
    const dotPositions = tail === 'bottom-left' ? [[x + 15, y + h + 10], [x + 8, y + h + 22]]
      : [[x + w - 15, y + h + 10], [x + w - 8, y + h + 22]];
    dotPositions.forEach(([dx, dy], i) => {
      ctx.beginPath();
      ctx.arc(dx, dy, 5 - i * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = bg;
      ctx.fill();
      ctx.strokeStyle = border;
      ctx.stroke();
    });
  }

  // Render text with word wrap
  const fStyle = `${italic ? 'italic ' : ''}${bold ? 'bold ' : ''}${fontSize}px ${font}`;
  ctx.font = fStyle;
  ctx.fillStyle = text;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lines = wrapText(ctx, b.text, w - 20);
  const lineH = fontSize * 1.3;
  const totalH = lines.length * lineH;
  lines.forEach((line, i) => {
    ctx.fillText(line, x + w / 2, y + h / 2 - totalH / 2 + lineH * i + lineH / 2);
  });

  ctx.restore();
}

function wrapText(ctx, text, maxW) {
    if (!text || typeof text !== 'string') return [''];  // ← ADD THIS LINE
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxW && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [''];
}

const defaultBubble = () => ({
  id:          Date.now(),
  text:        'Your text here',
  style:       'speech',
  tail:        'bottom-left',
  x:           80, y: 40, w: 220, h: 90,
  bg:          '#ffffff', border: '#000000', text_color: '#000000',
  font:        'Comic Sans MS', fontSize: 18,
  bold:        false, italic: false,
  borderWidth: 3, opacity: 1,
});

export default function SpeechBubbleMaker() {
  const canvasRef  = useRef(null);
  const fileRef    = useRef(null);
  const [image,    setImage]    = useState(null);
  const [bubbles,  setBubbles]  = useState([defaultBubble()]);
  const [selected, setSelected] = useState(0);
  const [canvasW,  setCanvasW]  = useState(700);
  const [canvasH,  setCanvasH]  = useState(450);
  const [dragging, setDragging] = useState(null); // {id, offX, offY}
  const [resizing, setResizing] = useState(null);

  const sel = bubbles[selected];

  // Render canvas
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvasW, canvasH);

    // Background
    if (image) {
      ctx.drawImage(image, 0, 0, canvasW, canvasH);
    } else {
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Upload an image or add speech bubbles to a blank canvas', canvasW / 2, canvasH / 2);
    }

    // Draw bubbles
    bubbles.forEach((b, i) => {
      drawSpeechBubble(ctx, { ...b, text: b.text, border: b.border, bg: b.bg, text: b.text_color ? undefined : b.text });
      // Re-call with correct mapping
    });

    // Actually redraw with correct color keys
    ctx.clearRect(0, 0, canvasW, canvasH);
    if (image) {
      ctx.drawImage(image, 0, 0, canvasW, canvasH);
    } else {
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Upload an image or add speech bubbles to a blank canvas', canvasW / 2, canvasH / 2);
    }
    bubbles.forEach((b, i) => {
      drawSpeechBubble(ctx, {
        x: b.x, y: b.y, w: b.w, h: b.h,
        style: b.style, tail: b.tail,
        bg: b.bg, border: b.border, text: b.text_color,
        font: b.font, fontSize: b.fontSize,
        bold: b.bold, italic: b.italic,
        borderWidth: b.borderWidth, opacity: b.opacity,
        text: b.text_color,
      });
      // Text on top
      const fStyle = `${b.italic ? 'italic ' : ''}${b.bold ? 'bold ' : ''}${b.fontSize}px ${b.font}`;
      ctx.save();
      ctx.font = fStyle;
      ctx.fillStyle = b.text_color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const lines = wrapText(ctx, b.text, b.w - 20);
      const lineH = b.fontSize * 1.3;
      const totalH = lines.length * lineH;
      lines.forEach((line, li) => {
        ctx.fillText(line, b.x + b.w / 2, b.y + b.h / 2 - totalH / 2 + lineH * li + lineH / 2);
      });
      ctx.restore();

      // Selection border
      if (i === selected) {
        ctx.save();
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 3]);
        ctx.strokeRect(b.x - 4, b.y - 4, b.w + 8, b.h + 8);
        // Resize handle
        ctx.fillStyle = '#3b82f6';
        ctx.setLineDash([]);
        ctx.fillRect(b.x + b.w - 5, b.y + b.h - 5, 10, 10);
        ctx.restore();
      }
    });
  }, [image, bubbles, selected, canvasW, canvasH]);

  useEffect(() => { render(); }, [render]);

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const maxW = 700, maxH = 500;
      let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
      if (h > maxH) { w = Math.round(w * maxH / h); h = maxH; }
      setCanvasW(w); setCanvasH(h); setImage(img);
    };
    img.src = URL.createObjectURL(file);
  };

  // Mouse events for drag/resize
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasW / rect.width;
    const scaleY = canvasH / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
    };
  };

  const onMouseDown = (e) => {
    const { x, y } = getPos(e);
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      // Resize handle check
      if (x >= b.x + b.w - 10 && x <= b.x + b.w + 5 && y >= b.y + b.h - 10 && y <= b.y + b.h + 5) {
        setSelected(i); setResizing({ i, startX: x, startY: y, startW: b.w, startH: b.h }); return;
      }
      if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
        setSelected(i); setDragging({ i, offX: x - b.x, offY: y - b.y }); return;
      }
    }
  };
  const onMouseMove = (e) => {
    if (!dragging && !resizing) return;
    const { x, y } = getPos(e);
    if (dragging) {
      setBubbles(prev => prev.map((b, i) => i === dragging.i
        ? { ...b, x: Math.max(0, x - dragging.offX), y: Math.max(0, y - dragging.offY) }
        : b));
    }
    if (resizing) {
      const dw = x - resizing.startX, dh = y - resizing.startY;
      setBubbles(prev => prev.map((b, i) => i === resizing.i
        ? { ...b, w: Math.max(80, resizing.startW + dw), h: Math.max(50, resizing.startH + dh) }
        : b));
    }
  };
  const onMouseUp = () => { setDragging(null); setResizing(null); };

  // Update selected bubble field
  const updateBubble = (field, value) => {
    setBubbles(prev => prev.map((b, i) => i === selected ? { ...b, [field]: value } : b));
  };

  const addBubble = () => {
    const newB = { ...defaultBubble(), id: Date.now(), x: 60 + bubbles.length * 20, y: 40 + bubbles.length * 20, text: 'New bubble' };
    setBubbles(prev => [...prev, newB]);
    setSelected(bubbles.length);
  };

  const removeBubble = () => {
    if (bubbles.length === 1) return;
    setBubbles(prev => prev.filter((_, i) => i !== selected));
    setSelected(Math.max(0, selected - 1));
  };

  const download = () => {
    const canvas = canvasRef.current;
    const a = document.createElement('a');
    a.download = 'speech-bubble-image.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
        <button onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
          📁 Upload Image
        </button>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

        <button onClick={addBubble}
          className="flex items-center gap-2 border border-surface-200 hover:border-brand-300 bg-white text-surface-700 hover:text-brand-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
          + Add Bubble
        </button>

        {bubbles.length > 1 && (
          <button onClick={removeBubble}
            className="flex items-center gap-2 border border-rose-200 hover:bg-rose-50 text-rose-600 text-sm font-semibold px-3 py-2 rounded-xl transition-colors">
            🗑 Remove
          </button>
        )}

        {/* Bubble selector */}
        <div className="flex items-center gap-1 ml-auto">
          {bubbles.map((b, i) => (
            <button key={b.id} onClick={() => setSelected(i)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${i === selected ? 'bg-brand-600 text-white' : 'bg-surface-100 text-surface-600 hover:bg-surface-200'}`}>
              {i + 1}
            </button>
          ))}
        </div>

        <button onClick={download}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
          ⬇ Download PNG
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">

        {/* Canvas */}
        <div className="lg:col-span-2 p-4 bg-surface-50 flex items-center justify-center min-h-[380px]">
          <canvas ref={canvasRef} width={canvasW} height={canvasH}
            className="max-w-full rounded-xl shadow-md cursor-crosshair border border-surface-200"
            style={{ maxHeight: '460px', objectFit: 'contain' }}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove}
            onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />
        </div>

        {/* Controls */}
        {sel && (
          <div className="p-4 space-y-4 overflow-y-auto max-h-[520px]">
            <div className="text-xs font-bold uppercase tracking-wider text-surface-400">Bubble {selected + 1} Settings</div>

            {/* Text */}
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Text</label>
              <textarea value={sel.text} onChange={e => updateBubble('text', e.target.value)} rows={3}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 resize-none" />
            </div>

            {/* Style */}
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Bubble Style</label>
              <div className="grid grid-cols-2 gap-1.5">
                {BUBBLE_STYLES.map(s => (
                  <button key={s.id} onClick={() => updateBubble('style', s.id)}
                    className={`text-[11px] font-semibold py-1.5 px-2 rounded-lg border transition-colors ${sel.style === s.id ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-surface-200 hover:border-brand-300 text-surface-600'}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tail */}
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Tail Direction</label>
              <div className="grid grid-cols-3 gap-1.5">
                {TAIL_POSITIONS.map(t => (
                  <button key={t.id} onClick={() => updateBubble('tail', t.id)}
                    className={`text-base py-1.5 rounded-lg border transition-colors ${sel.tail === t.id ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-surface-200 hover:border-brand-300'}`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-3 gap-2">
              {[{k:'bg',label:'Fill'},{k:'border',label:'Border'},{k:'text_color',label:'Text'}].map(c => (
                <div key={c.k} className="text-center">
                  <label className="text-[10px] font-semibold text-surface-500 block mb-1">{c.label}</label>
                  <input type="color" value={sel[c.k]} onChange={e => updateBubble(c.k, e.target.value)}
                    className="w-full h-8 rounded-lg border border-surface-200 cursor-pointer" />
                </div>
              ))}
            </div>

            {/* Color presets */}
            <div>
              <label className="text-[10px] font-semibold text-surface-500 block mb-1">Quick Presets</label>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((p, i) => (
                  <button key={i} onClick={() => { updateBubble('bg', p.bg); updateBubble('border', p.border); updateBubble('text_color', p.text); }}
                    className="w-7 h-7 rounded-lg border-2 border-surface-200 hover:scale-110 transition-transform"
                    style={{ backgroundColor: p.bg, borderColor: p.border }} title="Apply preset" />
                ))}
              </div>
            </div>

            {/* Font */}
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1">Font</label>
              <select value={sel.font} onChange={e => updateBubble('font', e.target.value)}
                className="w-full text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 bg-white">
                {FONTS.map(f => <option key={f} value={f} style={{fontFamily:f}}>{f}</option>)}
              </select>
            </div>

            {/* Font size + style */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-[10px] font-semibold text-surface-500 block mb-1">Size</label>
                <input type="number" min="10" max="60" value={sel.fontSize} onChange={e => updateBubble('fontSize', Number(e.target.value))}
                  className="w-full text-sm border border-surface-200 rounded-lg px-2 py-1.5 focus:outline-none" />
              </div>
              <div className="flex gap-2 pt-4">
                <button onClick={() => updateBubble('bold', !sel.bold)}
                  className={`w-8 h-8 rounded-lg border font-black text-sm transition-colors ${sel.bold ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-surface-200'}`}>B</button>
                <button onClick={() => updateBubble('italic', !sel.italic)}
                  className={`w-8 h-8 rounded-lg border italic text-sm transition-colors ${sel.italic ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-surface-200'}`}>I</button>
              </div>
            </div>

            {/* Border width + opacity */}
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-semibold text-surface-500 block mb-1">Border Width: {sel.borderWidth}px</label>
                <input type="range" min="1" max="8" value={sel.borderWidth} onChange={e => updateBubble('borderWidth', Number(e.target.value))}
                  className="w-full accent-brand-600" />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-surface-500 block mb-1">Opacity: {Math.round(sel.opacity * 100)}%</label>
                <input type="range" min="0.2" max="1" step="0.05" value={sel.opacity} onChange={e => updateBubble('opacity', Number(e.target.value))}
                  className="w-full accent-brand-600" />
              </div>
            </div>

            <div className="text-[10px] text-surface-400 leading-relaxed pt-2 border-t border-surface-100">
              💡 Drag to move · Corner handle to resize · Add multiple bubbles with the + button
            </div>
          </div>
        )}
      </div>
    </div>
  );
}