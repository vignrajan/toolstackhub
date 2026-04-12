import { SITE_CONFIG } from '../data/tools';

export default function sitemap() {
  const base = SITE_CONFIG.url;
  const now  = new Date();

  const p = (url, priority = 0.8, freq = 'monthly') => ({
    url:             `${base}${url}`,
    lastModified:    now,
    changeFrequency: freq,
    priority,
  });

  return [

    // ── Core pages ────────────────────────────────────────────
    p('/',        1.0, 'daily'),
    p('/about',   0.4, 'yearly'),
    p('/privacy', 0.3, 'yearly'),
    p('/terms',   0.3, 'yearly'),
    p('/about/garry',      0.80),

    // ── Image tools ───────────────────────────────────────────
    p('/compress-image-online',       0.95),
    p('/resize-image-online',         0.90),
    p('/jpg-to-png-converter-online', 0.90),
    p('/image-to-pdf-converter-online', 0.90),


    // Image programmatic cluster
    p('/compress-image-to-50kb',               0.75),
    p('/compress-image-to-100kb',              0.75),
    p('/compress-image-to-200kb',              0.75),
    p('/compress-jpeg-without-losing-quality', 0.75),
    p('/reduce-png-file-size',                 0.75),
    p('/compress-image-for-website',           0.75),
    p('/resize-image-for-instagram',           0.75),
    p('/resize-image-for-linkedin',            0.75),
    p('/resize-image-to-passport-size',        0.75),
    p('/jpg-to-png-transparent-background',    0.75),
    p('/speech-bubble-maker',                  0.90),
    p('/add-speech-bubble-to-image',           0.85),
    p('/speech-bubble-maker-for-memes',        0.85),
    p('/speech-bubble-maker-for-instagram',    0.82),
    p('/speech-bubble-png-generator',          0.80),

    // ── Text tools ────────────────────────────────────────────
    p('/word-counter-online',        0.90),
    p('/character-counter-online',   0.85),
    p('/case-converter-online',      0.90),
    p('/lorem-ipsum-generator',      0.85),
    p('/text-to-handwriting-online', 0.85),
    p('/markdown-editor-online',     0.85),
    p('/text-to-speech-online',      0.85),
    p('/remove-duplicate-lines-online', 0.85),
    p('/remove-line-breaks',   0.85),
    p('/remove-empty-lines',   0.80),
    p('/remove-extra-spaces',  0.80),
    p('/tools/text',           0.75),
    p('/text-repeater',               0.85),


    // Text programmatic cluster
    p('/convert-text-to-handwriting',      0.80),
    p('/text-to-handwritten-notes',        0.80),
    p('/word-counter-for-essays',          0.75),
    p('/reading-time-calculator',          0.75),
    p('/word-counter-twitter',             0.75),
    p('/paragraph-counter-online',         0.75),
    p('/twitter-character-counter',        0.75),
    p('/sms-character-counter',            0.75),
    p('/meta-description-length-checker',  0.75),
    p('/uppercase-to-lowercase-converter', 0.75),
    p('/title-case-converter-online',      0.75),
    p('/sentence-case-converter',          0.75),
    p('/lorem-ipsum-500-words',            0.75),
    p('/dummy-text-generator',             0.75),
    p('/remove-duplicate-lines-case-sensitive',   0.75),

    // ── Developer tools ───────────────────────────────────────
    p('/json-formatter-online',       0.95),
    p('/json-beautifier-online',      0.90),
    p('/json-pretty-print',           0.90),
    p('/json-validator-online',       0.90),
    p('/json-minifier-online',        0.85),
    p('/json-viewer-online',          0.85),
    p('/json-to-csv-converter',       0.85),
    p('/base64-encoder-online',       0.90),
    p('/url-encoder-online',          0.85),
    p('/uuid-generator-online',       0.90),
    p('/unix-timestamp-converter',    0.85),
    p('/regex-tester-online',         0.85),
    p('/css-minifier-online',         0.85),
    p('/html-formatter-online',       0.85),
    p('/color-picker-online',         0.85),
    p('/binary-to-decimal-converter', 0.85),

    // Developer programmatic cluster
    p('/json-to-csv-download',         0.75),
    p('/json-array-to-csv',            0.75),
    p('/json-to-excel-converter',      0.75),
    p('/base64-image-encoder',         0.75),
    p('/decode-base64-to-text',        0.75),
    p('/jwt-decoder-online',           0.75),
    p('/uuid-v4-generator',            0.75),
    p('/guid-generator-online',        0.75),
    p('/unix-timestamp-to-date',       0.75),
    p('/decimal-to-binary-converter',  0.75),
    p('/hex-to-decimal-converter',     0.75),
    p('/javascript-regex-tester',      0.75),
    p('/hex-color-picker-online',      0.75),
    p('/hex-to-rgb-converter',         0.75),

    // ── SEO tools ─────────────────────────────────────────────
    p('/meta-tag-generator-online', 0.85),
    p('/chat-screenshot-generator', 0.92),

    // ── Blogs ─────────────────────────────────────────────

    p('/blog',                                                    0.80),
    p('/blog/how-to-remove-duplicate-lines-from-text',            0.75),
    p('/blog/how-to-check-typing-speed-online',                   0.75),
    p('/blog/how-to-compress-images-without-losing-quality',      0.75),
    p('/blog/how-to-minify-json-for-faster-api-responses',        0.75),
    p('/blog/how-to-repeat-text-online-free',                     0.75),
    p('/blog/free-invoice-generator-online-complete-guide',       0.80),
    p('/blog/how-to-calculate-in-hand-salary-india',              0.75),
    p('/blog/how-to-generate-strong-passwords-online',            0.75),
    p('/blog/how-to-convert-word-to-pdf-free',                    0.75),
    p('/blog/what-is-cibil-score-how-to-improve',                 0.78),
    p('/blog/how-to-calculate-gratuity-india',                    0.85),
    p('/blog/old-vs-new-tax-regime-2025-26',                      0.90),
    p('/blog/in-hand-salary-calculator-lpa-india',                0.92),
    p('/blog/income-tax-changes-2026-india',                      0.92),
    p('/blog/how-to-save-tokens-in-claude',                       0.88),
    p('/blog/claude-prompt-templates-save-tokens',                0.88),
    p('/blog/claude-prompt-techniques',                           0.90),
    p('/blog/claude-hacks-improve-ai-results',                    0.88),
    p('/blog/old-vs-new-regime-15-lpa-salary-2026-27',            0.92),
    p('/blog/indieappcircle-review',                              0.85),
    p('/blog/how-to-calculate-hra-exemption-fy-2026-27',          0.92),
    p('/blog/instagram-carousel-generator',                       0.85),
    p('blog/claude-md-guide',                                     0.85),





    // SEO programmatic cluster
    p('/open-graph-generator',       0.75),
    p('/twitter-card-generator',     0.75),
    p('/meta-description-generator', 0.75),
    p('/seo-title-tag-generator',    0.75),

    // ── Utility tools ─────────────────────────────────────────
    p('/qr-code-generator-online',    0.95),
    p('/password-generator-online',   0.90),
    p('/password-strength-checker',   0.85),
    p('/random-number-generator',     0.85),
    p('/age-calculator-online',       0.85),
    p('/percentage-calculator-online',0.85),
    p('/pomodoro-timer-online',       0.85),
    p('/countdown-timer-online',      0.85),
    p('/online-stopwatch',            0.85),
    p('/screen-resolution-checker',   0.80),
    p('/ai-prompt-generator-online',  0.85),
    p('/ai-prompts-seo',              0.85),
    p('/emi-calculator',              0.90),
    p('/home-loan-emi-calculator',     0.88),
    p('/car-loan-emi-calculator',      0.85),
    p('/personal-loan-emi-calculator', 0.85),
    p('/sip-calculator',               0.90),
    p('/invoice-generator',            0.92),
    p('/gst-calculator',               0.92),
    p('/salary-calculator',            0.92),
    p('/professional-tax-calculator',                0.92),
    p('/hra-calculator',                             0.92),
    p('/ppf-calculator',                             0.92),
    p('/fuel-bill-generator',                        0.90),
    p('/fuel-bill-generator-for-reimbursement',      0.85),
    p('/petrol-bill-generator-online-free',          0.85),
    p('/fuel-receipt-generator-india',               0.83),
    p('/fuel-bill-generator-with-gst',               0.83),
    p('/diesel-bill-generator-online',               0.80),
    p('/cng-bill-generator-online',                  0.80),


    // ── Number to Words — main tool ───────────────────────────────
    p('/number-to-words', 0.92),

    // ── Number to Words — programmatic pages (lakh series) ────────
    p('/1-lakh-in-words',   0.88),
    p('/2-lakh-in-words',   0.85),
    p('/5-lakh-in-words',   0.88),
    p('/10-lakh-in-words',  0.88),
    p('/25-lakh-in-words',  0.85),
    p('/50-lakh-in-words',  0.88),
    p('/75-lakh-in-words',  0.83),

    // ── Number to Words — programmatic pages (crore series) ───────
    p('/1-crore-in-words',  0.90),
    p('/2-crore-in-words',  0.85),
    p('/5-crore-in-words',  0.87),
    p('/10-crore-in-words', 0.85),
    p('/25-crore-in-words', 0.83),



    // Utility programmatic cluster
    p('/qr-code-for-website',             0.75),
    p('/wifi-qr-code-generator',          0.75),
    p('/qr-code-for-business-card',       0.75),
    p('/strong-password-generator',       0.75),
    p('/random-password-generator',       0.75),
    p('/wifi-password-generator',         0.75),
    p('/random-number-1-to-100',          0.75),
    p('/lottery-number-generator',        0.75),
    p('/dice-roller-online',              0.75),
    p('/age-calculator-by-date-of-birth', 0.75),
    p('/5-minute-timer-online',           0.75),
    p('/10-minute-timer-online',          0.75),
    p('/25-minute-timer-online',          0.75),
    p('/countdown-timer-with-alarm',      0.75),
    p('/chatgpt-prompt-generator',        0.75),
    p('/claude-prompt-generator',         0.75),

    // AI Tools Hub
    p('/ai-tools', 0.92),
    p('/ai-tools/indieappcircle', 0.85),

    // Individual tool pages
    p('/ai-tools/chatgpt',    0.88),
    p('/ai-tools/claude',     0.88),
    p('/ai-tools/gemini',     0.87),
    p('/ai-tools/jasper',     0.83),
    p('/ai-tools/copyai',     0.82),
    p('/ai-tools/grammarly',  0.85),
    p('/ai-tools/midjourney', 0.84),
    p('/ai-tools/notion-ai',  0.82),

    // Comparisons
    p('/ai-tools/claude-vs-chatgpt', 0.90),
    p('/ai-tools/jasper-vs-copyai',  0.85),

    // Use-case pages
    p('/ai-tools/use-cases/ai-tools-for-salary-calculation',    0.88),
    p('/ai-tools/use-cases/ai-tools-for-tax-planning-india',    0.87),
    p('/ai-tools/use-cases/ai-tools-for-students-india-free',   0.88),
    p('/ai-tools/use-cases/ai-tools-for-resume-freshers-india', 0.85),
    p('/ai-tools/use-cases/ai-tools-for-job-offer-comparison',  0.85),


  ];
  

}