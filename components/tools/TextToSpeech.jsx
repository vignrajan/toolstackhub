'use client';
import { useState, useEffect, useRef } from 'react';

export default function TextToSpeech() {
  const [text, setText]         = useState('');
  const [voices, setVoices]     = useState([]);
  const [voice, setVoice]       = useState('');
  const [rate, setRate]         = useState(1);
  const [pitch, setPitch]       = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused]     = useState(false);
  const [supported, setSupported] = useState(true);
  const synthRef                = useRef(null);

  useEffect(() => {
    if (!window.speechSynthesis) { setSupported(false); return; }
    synthRef.current = window.speechSynthesis;
    const load = () => {
      const v = synthRef.current.getVoices();
      setVoices(v);
      if (v.length > 0) setVoice(v[0].name);
    };
    load();
    synthRef.current.onvoiceschanged = load;
  }, []);

  const speak = () => {
    if (!text.trim() || !synthRef.current) return;
    synthRef.current.cancel();
    const utt      = new SpeechSynthesisUtterance(text);
    const selected = voices.find(v => v.name === voice);
    if (selected) utt.voice = selected;
    utt.rate   = rate;
    utt.pitch  = pitch;
    utt.onstart = () => { setSpeaking(true);  setPaused(false); };
    utt.onend   = () => { setSpeaking(false); setPaused(false); };
    utt.onerror = () => { setSpeaking(false); setPaused(false); };
    synthRef.current.speak(utt);
  };

  const pause  = () => { synthRef.current?.pause();  setPaused(true);  };
  const resume = () => { synthRef.current?.resume(); setPaused(false); };
  const stop   = () => { synthRef.current?.cancel(); setSpeaking(false); setPaused(false); };

  if (!supported) return (
    <div className="bg-white border border-surface-200 rounded-2xl p-8 text-center">
      <div className="text-4xl mb-3">🔇</div>
      <p className="text-surface-600">Your browser does not support Text-to-Speech. Try Chrome or Edge.</p>
    </div>
  );

  const englishVoices = voices.filter(v => v.lang.startsWith('en'));
  const otherVoices   = voices.filter(v => !v.lang.startsWith('en'));

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Text to Speech</span>
      </div>
      <div className="p-5 space-y-5">

        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Text to speak</label>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="textarea-field min-h-[160px]"
          />
          <p className="text-xs text-surface-400 mt-1">{text.length} characters</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Voice</label>
            <select value={voice} onChange={e => setVoice(e.target.value)} className="input-field">
              {englishVoices.length > 0 && (
                <optgroup label="English">
                  {englishVoices.map(v => (
                    <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
                  ))}
                </optgroup>
              )}
              {otherVoices.length > 0 && (
                <optgroup label="Other Languages">
                  {otherVoices.map(v => (
                    <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
                  ))}
                </optgroup>
              )}
              {voices.length === 0 && <option>Loading voices...</option>}
            </select>
          </div>

          <div className="space-y-3">
            <div>
              <label className="flex justify-between text-sm font-medium text-surface-700 mb-1">
                <span>Speed</span>
                <span className="font-mono text-brand-600">{rate}x</span>
              </label>
              <input type="range" min="0.5" max="2" step="0.1" value={rate}
                onChange={e => setRate(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-surface-400 mt-0.5">
                <span>0.5x</span><span>1x</span><span>2x</span>
              </div>
            </div>
            <div>
              <label className="flex justify-between text-sm font-medium text-surface-700 mb-1">
                <span>Pitch</span>
                <span className="font-mono text-brand-600">{pitch}</span>
              </label>
              <input type="range" min="0" max="2" step="0.1" value={pitch}
                onChange={e => setPitch(Number(e.target.value))}
                className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-surface-400 mt-0.5">
                <span>Low</span><span>Normal</span><span>High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          {!speaking ? (
            <button onClick={speak} disabled={!text.trim()} className="btn-primary flex-1">
              🔊 Play
            </button>
          ) : paused ? (
            <button onClick={resume} className="btn-primary flex-1">▶️ Resume</button>
          ) : (
            <button onClick={pause} className="btn-secondary flex-1">⏸️ Pause</button>
          )}
          {speaking && (
            <button onClick={stop} className="btn-secondary">⏹️ Stop</button>
          )}
        </div>

        {speaking && (
          <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {paused ? 'Paused' : 'Speaking...'}
          </div>
        )}

        <div className="border-t border-surface-100 pt-4">
          <p className="text-xs font-medium text-surface-500 mb-2">Try an example:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Hello! Welcome to ToolStackHub, your free online tools collection.',
              'The quick brown fox jumps over the lazy dog.',
              'Text to speech converts written text into spoken audio words.',
            ].map(ex => (
              <button key={ex} onClick={() => setText(ex)}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors text-left">
                {ex.slice(0, 40)}...
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
