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
    p('/',           1.0, 'daily'),
    p('/about',      0.4, 'yearly'),
    p('/privacy',    0.3, 'yearly'),
    p('/terms',      0.3, 'yearly'),
    p('/contact',    0.3, 'yearly'),
    p('/disclaimer', 0.3, 'yearly'),
    p('/about/garry', 0.80),

    // ── Image tools ───────────────────────────────────────────
    p('/compress-image-online',         0.95),
    p('/resize-image-online',           0.90),
    p('/jpg-to-png-converter-online',   0.90),
    p('/image-to-pdf-converter-online', 0.90),
    p('/speech-bubble-maker',           0.90),

    // Speech bubble programmatic cluster (handled by [slug] router)
    p('/add-speech-bubble-to-image',         0.85),
    p('/speech-bubble-maker-for-memes',      0.85),
    p('/speech-bubble-maker-for-instagram',  0.82),
    p('/speech-bubble-png-generator',        0.80),

    // ── Text tools ────────────────────────────────────────────
    p('/word-counter-online',             0.90),
    p('/character-counter-online',        0.85),
    p('/case-converter-online',           0.90),
    p('/lorem-ipsum-generator',           0.85),
    p('/text-to-handwriting-online',      0.85),
    p('/convert-text-to-handwriting',     0.80),
    p('/text-to-handwritten-notes',       0.80),
    p('/markdown-editor-online',          0.85),
    p('/text-to-speech-online',           0.85),
    p('/remove-duplicate-lines-online',   0.85),
    p('/remove-duplicate-lines-case-sensitive', 0.75),
    p('/remove-duplicate-lines-ignore-case',    0.75),
    p('/remove-duplicate-words-online',   0.80),
    p('/remove-duplicate-sentences',      0.75),
    p('/remove-duplicate-paragraphs',     0.75),
    p('/remove-duplicate-list-items',     0.75),
    p('/remove-duplicate-csv-rows',       0.75),
    p('/unique-lines-generator',          0.75),
    p('/remove-line-breaks',              0.85),
    p('/remove-empty-lines',              0.80),
    p('/remove-extra-spaces',             0.80),
    p('/text-repeater',                   0.85),
    p('/typing-test',                     0.80),

    // ── Developer tools ───────────────────────────────────────
    p('/json-formatter-online',        0.95),
    p('/json-beautifier-online',       0.90),
    p('/json-pretty-print',            0.90),
    p('/json-validator-online',        0.90),
    p('/json-minifier-online',         0.85),
    p('/json-viewer-online',           0.85),
    p('/json-to-csv-converter',        0.85),
    p('/base64-encoder-online',        0.90),
    p('/url-encoder-online',           0.85),
    p('/uuid-generator-online',        0.90),
    p('/unix-timestamp-converter',     0.85),
    p('/regex-tester-online',          0.85),
    p('/css-minifier-online',          0.85),
    p('/html-formatter-online',        0.85),
    p('/color-picker-online',          0.85),
    p('/binary-to-decimal-converter',  0.85),

    // ── SEO tools ─────────────────────────────────────────────
    p('/meta-tag-generator-online', 0.85),
    p('/chat-screenshot-generator', 0.92),

    // ── Blog ──────────────────────────────────────────────────
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
    p('/blog/claude-md-guide',                                    0.85),
    p('/blog/claude-memory-preferences-guide',                    0.90),
    p('/blog/linkedgrow-review',                                  0.85),
    p('/blog/claude-code-for-non-programmers',                    0.92),
    p('/blog/best-mcp-servers-claude-code-2026',                  0.92),

    // ── Category landing pages ────────────────────────────────
    p('/tools/text',      0.88, 'weekly'),
    p('/tools/image',     0.88, 'weekly'),
    p('/tools/developer', 0.88, 'weekly'),
    p('/tools/utility',   0.88, 'weekly'),

    // ── New India tools ───────────────────────────────────────
    p('/whatsapp-link-generator', 0.92),
    p('/pan-validator',           0.92),
    p('/ifsc-finder',             0.92),
    p('/gst-number-validator',    0.92),
    p('/epf-calculator',          0.92),
    p('/jwt-decoder-online',           0.88),
    p('/diff-checker',                 0.88),
    p('/cron-expression-builder',      0.85),

    // ── Utility tools ─────────────────────────────────────────
    p('/qr-code-generator-online',     0.95),
    p('/password-generator-online',    0.90),
    p('/password-strength-checker',    0.85),
    p('/random-number-generator',      0.85),
    p('/age-calculator-online',        0.85),
    p('/percentage-calculator-online', 0.85),
    p('/pomodoro-timer-online',        0.85),
    p('/countdown-timer-online',       0.85),
    p('/online-stopwatch',             0.85),
    p('/screen-resolution-checker',    0.80),
    p('/ai-prompt-generator-online',   0.85),
    p('/ai-prompts/seo',               0.85),
    p('/emi-calculator',               0.90),
    p('/home-loan-emi-calculator',     0.88),
    p('/car-loan-emi-calculator',      0.85),
    p('/sip-calculator',               0.90),
    p('/invoice-generator',            0.92),
    p('/gst-calculator',               0.92),
    p('/salary-calculator',            0.92),
    p('/professional-tax-calculator',  0.92),
    p('/hra-calculator',               0.92),
    p('/ppf-calculator',               0.92),
    p('/fuel-bill-generator',          0.90),
    p('/claude-code-token-calculator', 0.90),

    // ── Number to Words — main tool ───────────────────────────
    p('/number-to-words', 0.92),

    // ── Number to Words — programmatic pages (handled by [slug] router) ──
    p('/1-lakh-in-words',   0.88),
    p('/2-lakh-in-words',   0.85),
    p('/5-lakh-in-words',   0.88),
    p('/10-lakh-in-words',  0.88),
    p('/25-lakh-in-words',  0.85),
    p('/50-lakh-in-words',  0.88),
    p('/75-lakh-in-words',  0.83),
    p('/1-crore-in-words',  0.90),
    p('/2-crore-in-words',  0.85),
    p('/5-crore-in-words',  0.87),
    p('/10-crore-in-words', 0.85),
    p('/25-crore-in-words', 0.83),

    // ── BMI Calculator programmatic pages (handled by [slug] router) ──
    p('/bmi-calculator',            0.90),
    p('/bmi-calculator-for-men',    0.85),
    p('/bmi-calculator-for-women',  0.85),
    p('/ideal-weight-calculator-india', 0.85),
    p('/healthy-bmi-for-indians',   0.83),

    // ── Age Calculator programmatic pages (handled by [slug] router) ──
    p('/age-calculator-online',              0.85),
    p('/age-calculator-by-dob',             0.80),

    // ── Invoice Generator programmatic pages (handled by [slug] router) ──
    p('/gst-invoice-generator-online',      0.88),
    p('/proforma-invoice-generator',        0.85),

    // ── AI Tools Hub ──────────────────────────────────────────
    p('/ai-tools',             0.92),
    p('/ai-tools/indieappcircle', 0.85),
    p('/ai-tools/whacka',         0.85),
    p('/ai-tools/chatgpt',     0.88),
    p('/ai-tools/claude',      0.88),
    p('/ai-tools/gemini',      0.87),
    p('/ai-tools/jasper',      0.83),
    p('/ai-tools/copyai',      0.82),
    p('/ai-tools/grammarly',   0.85),
    p('/ai-tools/midjourney',  0.84),
    p('/ai-tools/notion-ai',   0.82),

    // AI Tool Comparisons
    p('/ai-tools/claude-vs-chatgpt', 0.90),
    p('/ai-tools/jasper-vs-copyai',  0.85),

    // AI Tool Use Cases
    p('/ai-tools/use-cases/ai-tools-for-salary-calculation',    0.88),
    p('/ai-tools/use-cases/ai-tools-for-tax-planning-india',    0.87),
    p('/ai-tools/use-cases/ai-tools-for-students-india-free',   0.88),
    p('/ai-tools/use-cases/ai-tools-for-resume-freshers-india', 0.85),
    p('/ai-tools/use-cases/ai-tools-for-job-offer-comparison',  0.85),

  ];
}
