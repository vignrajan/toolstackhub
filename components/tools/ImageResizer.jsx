'use client';
import { useState, useCallback, useRef } from 'react';

export default function ImageResizer() {
  const [original, setOriginal]     = useState(null);
  const [resized, setResized]       = useState(null);
  const [width, setWidth]           = useState('');
  const [height, setHeight]         = useState('');
  const [lockAspect, setLockAspect] = useState(true);
  const [loading, setLoading]       = useState(false);
  const fileInputRef                = useRef(null);
  const aspectRatioRef              = useRef(1);

  const handleFile = useCallback((file) => {
    if (!file?.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      aspectRatioRef.current = img.naturalWidth / img.naturalHeight;
      setWidth(String(img.naturalWidth));
      setHeight(String(img.naturalHeight));
      setOriginal({ file, url, w: img.naturalWidth, h: img.naturalHeight, name: file.name, type: file.type });
      setResized(null);
    };
    img.src = url;
  }, []);

  const onWidthChange = (val) => {
    setWidth(val);
    if (lockAspect && val) {
      setHeight(String(Math.round(Number(val) / aspectRatioRef.current)));
    }
  };

  const onHeightChange = (val) => {
    setHeight(val);
    if (lockAspect && val) {
      setWidth(String(Math.round(Number(val) * aspectRatioRef.current)));
    }
  };

  const resize = async () => {
    if (!original || !width || !height) return;
    setLoading(true);
    const img = new Image();
    img.src = original.url;
    await new Promise(r => img.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width  = Number(width);
    canvas.height = Number(height);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      setResized({ blob, url: URL.createObjectURL(blob), w: canvas.width, h: canvas.height });
      setLoading(false);
    }, original.type, 0.92);
  };

  const download = () => {
    const a = document.createElement('a');
    a.href = resized.url;
    a.download = `resized_${resized.w}x${resized.h}_${original.name}`;
    a.click();
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl p-6 space-y-6">
      {/* Upload */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-surface-300 hover:border-brand-300 rounded-xl p-8 text-center cursor-pointer transition-colors"
      >
        <div className="text-4xl mb-3">📐</div>
        {original
          ? <p className="text-sm font-medium text-surface-700">{original.name} ({original.w} × {original.h}px) — click to change</p>
          : <><p className="font-medium text-surface-800">Click to upload an image</p><p className="text-xs text-surface-400 mt-1">JPEG, PNG, WebP</p></>
        }
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={e => handleFile(e.target.files[0])} />
      </div>

      {original && (
        <>
          {/* Dimension inputs */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">Width (px)</label>
              <input type="number" value={width} onChange={e => onWidthChange(e.target.value)} className="input-field" min="1" max="10000" />
            </div>
            <button
              onClick={() => setLockAspect(!lockAspect)}
              className={`mb-0.5 w-9 h-9 rounded-lg border flex items-center justify-center text-lg transition-colors ${lockAspect ? 'bg-brand-50 border-brand-200 text-brand-600' : 'bg-surface-50 border-surface-200 text-surface-400'}`}
              title="Lock aspect ratio"
            >
              {lockAspect ? '🔒' : '🔓'}
            </button>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">Height (px)</label>
              <input type="number" value={height} onChange={e => onHeightChange(e.target.value)} className="input-field" min="1" max="10000" />
            </div>
          </div>

          {/* Presets */}
          <div>
            <p className="text-xs text-surface-500 mb-2 font-medium">Quick presets:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'HD 1280×720',      w: 1280, h: 720  },
                { label: 'FHD 1920×1080',    w: 1920, h: 1080 },
                { label: 'Square 800×800',   w: 800,  h: 800  },
                { label: 'Thumbnail 150×150',w: 150,  h: 150  },
              ].map(p => (
                <button
                  key={p.label}
                  onClick={() => { setWidth(String(p.w)); setHeight(String(p.h)); setLockAspect(false); }}
                  className="px-2.5 py-1 text-xs bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={resize} disabled={loading} className="btn-primary flex-1">
              {loading ? '⏳ Resizing…' : '📐 Resize Image'}
            </button>
            {resized && <button onClick={download} className="btn-secondary">⬇️ Download</button>}
          </div>

          {/* Result preview */}
          {resized && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <p className="text-sm text-emerald-800 font-medium mb-2">✅ Resized to {resized.w} × {resized.h}px</p>
              <img src={resized.url} alt="Resized preview" className="max-h-48 rounded-lg mx-auto border border-emerald-200" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
