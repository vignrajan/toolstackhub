'use client';
import { useState, useRef, useCallback } from 'react';

export default function JpgToPng() {
  const [file, setFile]       = useState(null);
  const [result, setResult]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef          = useRef(null);

  const handleFile = useCallback((f) => {
    if (!f) return;
    if (!['image/jpeg', 'image/jpg'].includes(f.type) && !f.name.toLowerCase().match(/\.(jpg|jpeg)$/)) {
      alert('Please upload a JPG or JPEG image.');
      return;
    }
    setFile({ raw: f, url: URL.createObjectURL(f), name: f.name, size: f.size });
    setResult(null);
  }, []);

  const convert = async () => {
    if (!file) return;
    setLoading(true);
    const img = new Image();
    img.src = file.url;
    await new Promise(r => img.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width  = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.getContext('2d').drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      const url  = URL.createObjectURL(blob);
      const name = file.name.replace(/\.(jpg|jpeg)$/i, '.png');
      setResult({ blob, url, name, size: blob.size, w: img.naturalWidth, h: img.naturalHeight });
      setLoading(false);
    }, 'image/png');
  };

  const download = () => {
    const a = document.createElement('a');
    a.href = result.url;
    a.download = result.name;
    a.click();
  };

  const formatBytes = (b) => b < 1024 * 1024 ? `${(b/1024).toFixed(1)} KB` : `${(b/(1024*1024)).toFixed(2)} MB`;

  return (
    <div className="bg-white border border-surface-200 rounded-2xl p-6 space-y-5">
      {/* Drop zone */}
      <div
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all
          ${dragging ? 'border-brand-400 bg-brand-50' : 'border-surface-300 hover:border-brand-300 hover:bg-surface-50'}`}
      >
        <div className="text-5xl mb-3">🔄</div>
        {file
          ? <p className="font-medium text-surface-800">{file.name} <span className="text-surface-400">({formatBytes(file.size)})</span></p>
          : (
            <>
              <p className="font-medium text-surface-800 mb-1">Drop your JPG here</p>
              <p className="text-sm text-surface-500">or click to browse</p>
              <p className="text-xs text-surface-400 mt-3">Accepts .jpg / .jpeg files</p>
            </>
          )
        }
        <input ref={fileInputRef} type="file" accept=".jpg,.jpeg,image/jpeg" className="hidden" onChange={e => handleFile(e.target.files[0])} />
      </div>

      {/* Preview */}
      {file && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-surface-500 mb-2">INPUT — JPG</p>
            <img src={file.url} alt="Input" className="w-full rounded-xl border border-surface-200 object-contain max-h-48" />
          </div>
          <div>
            <p className="text-xs font-medium text-surface-500 mb-2">OUTPUT — PNG</p>
            {result
              ? <img src={result.url} alt="Output PNG" className="w-full rounded-xl border border-emerald-200 object-contain max-h-48" />
              : <div className="aspect-video bg-surface-50 rounded-xl border border-dashed border-surface-200 flex items-center justify-center text-surface-400 text-sm">Preview here</div>
            }
          </div>
        </div>
      )}

      {/* Result info */}
      {result && (
        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-800">
          <span className="text-xl">✅</span>
          <span>Converted to PNG: {result.w} × {result.h}px · {formatBytes(result.size)}</span>
        </div>
      )}

      {/* Actions */}
      {file && (
        <div className="flex gap-3">
          <button onClick={convert} disabled={loading} className="btn-primary flex-1">
            {loading ? '⏳ Converting…' : '🔄 Convert to PNG'}
          </button>
          {result && (
            <button onClick={download} className="btn-secondary">
              ⬇️ Download PNG
            </button>
          )}
        </div>
      )}
    </div>
  );
}
