'use client';
import { useState, useCallback, useRef } from 'react';

/**
 * ImageCompressor Tool
 * Uses the Canvas API to compress images client-side.
 * Supports JPEG, PNG, WebP.
 */
export default function ImageCompressor() {
  const [original, setOriginal]   = useState(null);
  const [compressed, setCompressed] = useState(null);
  const [quality, setQuality]     = useState(80);
  const [loading, setLoading]     = useState(false);
  const [dragging, setDragging]   = useState(false);
  const fileInputRef              = useRef(null);

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const handleFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setOriginal({ file, url, size: file.size, name: file.name, type: file.type });
    setCompressed(null);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const compress = async () => {
    if (!original) return;
    setLoading(true);
    try {
      const img = new Image();
      img.src = original.url;
      await new Promise(r => img.onload = r);

      const canvas = document.createElement('canvas');
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Determine output mime type
      const mime = original.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const q    = quality / 100;

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url      = URL.createObjectURL(blob);
        const savings  = ((1 - blob.size / original.size) * 100).toFixed(1);
        setCompressed({ blob, url, size: blob.size, savings });
        setLoading(false);
      }, mime, q);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const download = () => {
    if (!compressed) return;
    const a = document.createElement('a');
    a.href = compressed.url;
    a.download = `compressed_${original.name}`;
    a.click();
  };

  const reset = () => {
    setOriginal(null);
    setCompressed(null);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="p-6 space-y-6">

        {/* Drop zone */}
        {!original ? (
          <div
            onDrop={onDrop}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200
              ${dragging ? 'border-brand-400 bg-brand-50 scale-[1.01]' : 'border-surface-300 hover:border-brand-300 hover:bg-surface-50'}`}
          >
            <div className="text-5xl mb-4">🖼️</div>
            <p className="font-medium text-surface-800 mb-1">Drop your image here</p>
            <p className="text-sm text-surface-500 mb-4">or click to browse</p>
            <p className="text-xs text-surface-400">Supports JPEG, PNG, WebP · Max 10 MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={e => handleFile(e.target.files[0])}
            />
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preview row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Original */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-surface-700">Original</span>
                  <span className="text-surface-500">{formatBytes(original.size)}</span>
                </div>
                <div className="aspect-video bg-surface-100 rounded-xl overflow-hidden border border-surface-200">
                  <img src={original.url} alt="Original" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Compressed */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-surface-700">Compressed</span>
                  {compressed && (
                    <span className="text-emerald-600 font-medium">{formatBytes(compressed.size)}</span>
                  )}
                </div>
                <div className="aspect-video bg-surface-100 rounded-xl overflow-hidden border border-surface-200 flex items-center justify-center">
                  {compressed
                    ? <img src={compressed.url} alt="Compressed" className="w-full h-full object-contain" />
                    : <span className="text-surface-400 text-sm">Preview will appear here</span>
                  }
                </div>
              </div>
            </div>

            {/* Savings badge */}
            {compressed && (
              <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <div className="font-semibold text-emerald-800 text-sm">
                    {compressed.savings}% size reduction
                  </div>
                  <div className="text-xs text-emerald-600">
                    {formatBytes(original.size)} → {formatBytes(compressed.size)}
                  </div>
                </div>
              </div>
            )}

            {/* Quality slider */}
            <div>
              <label className="flex items-center justify-between mb-2 text-sm font-medium text-surface-700">
                <span>Quality</span>
                <span className="font-mono text-brand-600">{quality}%</span>
              </label>
              <input
                type="range" min="10" max="100" value={quality}
                onChange={e => setQuality(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
              <div className="flex justify-between text-xs text-surface-400 mt-1">
                <span>Smaller file</span>
                <span>Better quality</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={compress}
                disabled={loading}
                className="btn-primary flex-1"
              >
                {loading
                  ? <><span className="animate-spin">⏳</span> Compressing…</>
                  : '🗜️  Compress Image'
                }
              </button>
              {compressed && (
                <button onClick={download} className="btn-secondary">
                  ⬇️ Download
                </button>
              )}
              <button onClick={reset} className="btn-ghost">
                ✕ Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
