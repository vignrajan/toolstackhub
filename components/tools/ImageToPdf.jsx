'use client';
import { useState, useRef, useCallback } from 'react';

export default function ImageToPdf() {
  const [images, setImages]       = useState([]);
  const [dragging, setDragging]   = useState(false);
  const [converting, setConverting] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [error, setError]         = useState('');
  const fileInputRef              = useRef(null);
  const dragIndexRef              = useRef(null);

  // ── File handling ────────────────────────────────────────
  const readFiles = (files) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const valid   = Array.from(files).filter(f => allowed.includes(f.type));
    if (valid.length === 0) { setError('Please upload JPG, PNG, or WEBP images only.'); return; }
    setError('');

    valid.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => [
          ...prev,
          { id: Date.now() + Math.random(), name: file.name, src: e.target.result, type: file.type, size: file.size },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const onFileChange = (e) => readFiles(e.target.files);

  // Drop zone handlers
  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    readFiles(e.dataTransfer.files);
  }, []);

  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  // ── Image reordering ─────────────────────────────────────
  const onImageDragStart = (index) => { dragIndexRef.current = index; };
  const onImageDragEnter = (index) => setDragOverIndex(index);
  const onImageDrop      = (e, index) => {
    e.preventDefault();
    const from = dragIndexRef.current;
    if (from === null || from === index) { setDragOverIndex(null); return; }
    setImages(prev => {
      const arr = [...prev];
      const [moved] = arr.splice(from, 1);
      arr.splice(index, 0, moved);
      return arr;
    });
    dragIndexRef.current = null;
    setDragOverIndex(null);
  };

  const removeImage = (id) => setImages(prev => prev.filter(img => img.id !== id));
  const clearAll    = () => { setImages([]); setError(''); };

  // ── PDF Conversion (jsPDF via CDN) ───────────────────────
  const convertToPdf = async () => {
    if (images.length === 0) { setError('Please add at least one image first.'); return; }
    setError('');
    setConverting(true);

    try {
      // Dynamically load jsPDF from CDN
      if (!window.jspdf) {
        await new Promise((resolve, reject) => {
          const script    = document.createElement('script');
          script.src      = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
          script.onload   = resolve;
          script.onerror  = reject;
          document.head.appendChild(script);
        });
      }

      const { jsPDF } = window.jspdf;

      // Process each image
      const processedImages = await Promise.all(
        images.map(img => new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            const canvas  = document.createElement('canvas');
            canvas.width  = image.naturalWidth;
            canvas.height = image.naturalHeight;
            const ctx     = canvas.getContext('2d');
            // Fill white background for WEBP/PNG transparency
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
            resolve({
              dataUrl: canvas.toDataURL('image/jpeg', 0.92),
              width:   image.naturalWidth,
              height:  image.naturalHeight,
            });
          };
          image.src = img.src;
        }))
      );

      // Create PDF — first image sets orientation
      const first       = processedImages[0];
      const isLandscape = first.width > first.height;
      const pdf         = new jsPDF({ orientation: isLandscape ? 'landscape' : 'portrait', unit: 'px', hotfixes: ['px_scaling'] });

      processedImages.forEach((img, i) => {
        if (i > 0) {
          const landscape = img.width > img.height;
          pdf.addPage([img.width, img.height], landscape ? 'landscape' : 'portrait');
        }

        // Fit image to page maintaining aspect ratio
        const pageW  = pdf.internal.pageSize.getWidth();
        const pageH  = pdf.internal.pageSize.getHeight();
        const ratio  = Math.min(pageW / img.width, pageH / img.height);
        const drawW  = img.width  * ratio;
        const drawH  = img.height * ratio;
        const x      = (pageW - drawW) / 2;
        const y      = (pageH - drawH) / 2;

        pdf.addImage(img.dataUrl, 'JPEG', x, y, drawW, drawH);
      });

      pdf.save(`toolstackhub-images-${Date.now()}.pdf`);
    } catch (err) {
      setError('Conversion failed. Please try again. ' + err.message);
    } finally {
      setConverting(false);
    }
  };

  const formatSize = (bytes) => bytes > 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(1) + ' MB'
    : (bytes / 1024).toFixed(0) + ' KB';

  // ── Render ───────────────────────────────────────────────
  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-surface-50 border-b border-surface-200 flex-wrap">
        <button onClick={() => fileInputRef.current?.click()}
          className="btn-primary text-sm py-1.5 px-4">
          ➕ Add Images
        </button>
        {images.length > 0 && (
          <>
            <button onClick={convertToPdf} disabled={converting}
              className="btn-secondary text-sm py-1.5 px-4 disabled:opacity-60">
              {converting ? '⏳ Converting…' : '📄 Convert to PDF'}
            </button>
            <button onClick={clearAll}
              className="text-xs text-surface-400 hover:text-red-500 transition-colors">
              ✕ Clear all
            </button>
          </>
        )}
        <span className="ml-auto text-xs text-surface-400">
          {images.length > 0 ? `${images.length} image${images.length > 1 ? 's' : ''} — drag to reorder` : 'JPG · PNG · WEBP supported'}
        </span>
        <input ref={fileInputRef} type="file" multiple accept="image/jpeg,image/png,image/webp"
          className="hidden" onChange={onFileChange} />
      </div>

      {/* Drop zone — only show when empty */}
      {images.length === 0 && (
        <div
          onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`m-4 border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all
            ${dragging ? 'border-brand-400 bg-brand-50' : 'border-surface-300 hover:border-brand-300 hover:bg-surface-50'}`}
        >
          <div className="w-16 h-16 rounded-2xl bg-surface-100 flex items-center justify-center text-3xl">🖼️</div>
          <div className="text-center">
            <p className="font-semibold text-surface-800 mb-1">
              {dragging ? 'Drop images here' : 'Click or drag images here'}
            </p>
            <p className="text-sm text-surface-500">Supports JPG, PNG, and WEBP — multiple files at once</p>
          </div>
          <div className="flex gap-2">
            {['JPG', 'PNG', 'WEBP'].map(f => (
              <span key={f} className="text-xs font-medium bg-surface-200 text-surface-600 px-2.5 py-1 rounded-full">{f}</span>
            ))}
          </div>
        </div>
      )}

      {/* Image preview grid */}
      {images.length > 0 && (
        <div className="p-4">
          {/* Mini drop zone at top when images exist */}
          <div
            onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`mb-4 border border-dashed rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer transition-all text-sm
              ${dragging ? 'border-brand-400 bg-brand-50 text-brand-600' : 'border-surface-200 text-surface-400 hover:border-brand-300 hover:text-brand-500'}`}
          >
            <span>➕</span>
            <span>Add more images or drag & drop here</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, index) => (
              <div
                key={img.id}
                draggable
                onDragStart={() => onImageDragStart(index)}
                onDragEnter={() => onImageDragEnter(index)}
                onDrop={(e) => onImageDrop(e, index)}
                onDragOver={(e) => e.preventDefault()}
                className={`group relative rounded-xl overflow-hidden border-2 cursor-grab active:cursor-grabbing transition-all
                  ${dragOverIndex === index ? 'border-brand-400 scale-105 shadow-lg' : 'border-surface-200 hover:border-brand-300'}`}
              >
                {/* Page number badge */}
                <div className="absolute top-2 left-2 z-10 w-6 h-6 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                  {index + 1}
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeImage(img.id)}
                  className="absolute top-2 right-2 z-10 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                >
                  ✕
                </button>

                {/* Drag handle hint */}
                <div className="absolute bottom-2 left-2 z-10 text-xs text-white bg-black/40 rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  ⠿ drag
                </div>

                {/* Image preview */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.name}
                  className="w-full h-32 object-cover bg-surface-100" />

                {/* File info */}
                <div className="p-2 bg-white">
                  <p className="text-xs text-surface-700 font-medium truncate">{img.name}</p>
                  <p className="text-xs text-surface-400">{formatSize(img.size)}</p>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p className="mt-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">❌ {error}</p>
          )}
        </div>
      )}

      {error && images.length === 0 && (
        <p className="mx-4 mb-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">❌ {error}</p>
      )}

      {/* Convert CTA bar */}
      {images.length > 0 && (
        <div className="px-5 py-4 bg-surface-50 border-t border-surface-200 flex items-center justify-between flex-wrap gap-3">
          <div className="text-sm text-surface-600">
            <strong>{images.length}</strong> image{images.length > 1 ? 's' : ''} ready →
            <span className="text-brand-600 font-semibold ml-1">1 PDF file</span>
          </div>
          <button onClick={convertToPdf} disabled={converting}
            className="btn-primary py-2.5 px-6 disabled:opacity-60 text-sm font-semibold">
            {converting
              ? <span className="flex items-center gap-2"><span className="animate-spin">⏳</span> Converting…</span>
              : '📄 Convert & Download PDF'
            }
          </button>
        </div>
      )}
    </div>
  );
}