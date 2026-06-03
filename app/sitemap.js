import { SITE_CONFIG } from '../data/tools';
import { getAllEmiBankSlugs } from '../data/emi-bank-pages';
import { getAllGstStateSlugs } from '../data/gst-state-pages';
import { getAllSalaryCitySlugs } from '../data/salary-city-pages';

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
    p('/tools/image-compressor', 0.95),
    p('/tools/image-resizer',    0.90),
    p('/tools/jpg-to-png',       0.90),
    p('/tools/image-to-pdf',     0.90),
    p('/tools/speech-bubble-maker', 0.90),

    // Speech bubble programmatic cluster (handled by [slug] router)
    p('/add-speech-bubble-to-image',         0.85),
    p('/speech-bubble-maker-for-memes',      0.85),
    p('/speech-bubble-maker-for-instagram',  0.82),
    p('/speech-bubble-png-generator',        0.80),

    // ── Text tools ────────────────────────────────────────────
    p('/tools/word-counter',           0.90),
    p('/tools/character-counter',      0.85),
    p('/tools/case-converter',         0.90),
    p('/tools/lorem-ipsum-generator',  0.85),
    p('/tools/text-to-handwriting',    0.85),
    p('/convert-text-to-handwriting',  0.80),
    p('/text-to-handwritten-notes',    0.80),
    p('/tools/markdown-preview',       0.85),
    p('/tools/text-to-speech',         0.85),
    p('/tools/remove-duplicate-lines', 0.85),
    p('/remove-duplicate-lines-case-sensitive', 0.75),
    p('/remove-duplicate-lines-ignore-case',    0.75),
    p('/remove-duplicate-words-online',   0.80),
    p('/remove-duplicate-sentences',      0.75),
    p('/remove-duplicate-paragraphs',     0.75),
    p('/remove-duplicate-list-items',     0.75),
    p('/remove-duplicate-csv-rows',       0.75),
    p('/unique-lines-generator',          0.75),
    p('/tools/remove-line-breaks',   0.85),
    p('/tools/remove-empty-lines',   0.80),
    p('/tools/remove-extra-spaces',  0.80),
    p('/tools/text-repeater',        0.85),
    p('/tools/typing-speed-test',    0.80),

    // ── Developer tools ───────────────────────────────────────
    p('/tools/json-formatter',      0.95),
    p('/json-beautifier-online',    0.90),
    p('/json-pretty-print',         0.90),
    p('/json-validator-online',     0.90),
    p('/json-minifier-online',      0.85),
    p('/json-viewer-online',        0.85),
    p('/tools/json-to-csv',         0.85),
    p('/tools/base64-encoder',      0.90),
    p('/tools/url-encoder',         0.85),
    p('/tools/uuid-generator',      0.90),
    p('/tools/timestamp-converter', 0.85),
    p('/tools/regex-tester',        0.85),
    p('/tools/css-minifier',        0.85),
    p('/tools/html-formatter',      0.85),
    p('/tools/color-picker',        0.85),
    p('/tools/binary-converter',    0.85),
    p('/tools/jwt-decoder',         0.88),
    p('/tools/diff-checker',        0.88),
    p('/tools/cron-expression-builder', 0.85),
    p('/tools/sql-formatter',       0.88),
    p('/tools/markdown-to-html',    0.88),
    p('/tools/html-to-markdown',    0.88),
    p('/tools/color-palette-generator', 0.88),

    // ── SEO tools ─────────────────────────────────────────────
    p('/tools/meta-tag-generator',       0.85),
    p('/tools/chat-screenshot-generator', 0.92),

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
    p('/tools/finance',   0.90, 'weekly'),
    p('/calculators',     0.92, 'weekly'),

    // ── India / Validator tools ───────────────────────────────
    p('/tools/whatsapp-link-generator', 0.92),
    p('/tools/pan-validator',           0.92),
    p('/tools/ifsc-finder',             0.92),
    p('/tools/gst-number-validator',    0.92),
    p('/tools/epf-calculator',          0.92),
    p('/tools/form-16-calculator',      0.92),
    p('/tools/salary-slip-generator',   0.90),
    p('/tools/rent-agreement-generator',0.90),
    p('/tools/unit-converter',          0.90),
    p('/tools/cgpa-calculator',         0.92),
    p('/tools/student',                 0.88, 'weekly'),

    // ── EMI by bank ───────────────────────────────────────────
    p('/sbi-home-loan-emi-calculator',         0.88),
    p('/hdfc-home-loan-emi-calculator',        0.88),
    p('/icici-home-loan-emi-calculator',       0.87),
    p('/axis-home-loan-emi-calculator',        0.85),
    p('/kotak-home-loan-emi-calculator',       0.84),
    p('/pnb-home-loan-emi-calculator',         0.84),
    p('/bob-home-loan-emi-calculator',         0.83),
    p('/canara-home-loan-emi-calculator',      0.83),
    p('/union-bank-home-loan-emi-calculator',  0.82),
    p('/lic-home-loan-emi-calculator',         0.84),
    p('/bajaj-home-loan-emi-calculator',       0.83),
    p('/tata-capital-home-loan-emi-calculator',0.82),
    p('/sbi-car-loan-emi-calculator',          0.85),
    p('/hdfc-car-loan-emi-calculator',         0.85),
    p('/icici-car-loan-emi-calculator',        0.84),

    // ── GST by state ──────────────────────────────────────────
    p('/gst-calculator-maharashtra',    0.87),
    p('/gst-calculator-karnataka',      0.87),
    p('/gst-calculator-gujarat',        0.86),
    p('/gst-calculator-tamil-nadu',     0.86),
    p('/gst-calculator-delhi',          0.87),
    p('/gst-calculator-rajasthan',      0.85),
    p('/gst-calculator-uttar-pradesh',  0.85),
    p('/gst-calculator-andhra-pradesh', 0.85),
    p('/gst-calculator-telangana',      0.86),
    p('/gst-calculator-west-bengal',    0.85),
    p('/gst-calculator-kerala',         0.85),
    p('/gst-calculator-punjab',         0.84),
    p('/gst-calculator-haryana',        0.84),
    p('/gst-calculator-madhya-pradesh', 0.84),
    p('/gst-calculator-bihar',          0.83),

    // ── Salary by city ────────────────────────────────────────
    p('/salary-calculator-bangalore',   0.90),
    p('/salary-calculator-mumbai',      0.90),
    p('/salary-calculator-delhi',       0.89),
    p('/salary-calculator-hyderabad',   0.88),
    p('/salary-calculator-pune',        0.88),
    p('/salary-calculator-chennai',     0.87),
    p('/salary-calculator-kolkata',     0.86),
    p('/salary-calculator-ahmedabad',   0.85),
    p('/salary-calculator-noida',       0.86),
    p('/salary-calculator-gurgaon',     0.87),

    // ── Utility tools ─────────────────────────────────────────
    p('/tools/qr-code-generator',        0.95),
    p('/tools/password-generator',       0.90),
    p('/tools/password-strength-checker',0.85),
    p('/tools/random-number-generator',  0.85),
    p('/tools/age-calculator',           0.85),
    p('/tools/percentage-calculator',    0.85),
    p('/tools/pomodoro-timer',           0.85),
    p('/tools/countdown-timer',          0.85),
    p('/tools/stopwatch',                0.85),
    p('/tools/screen-resolution',        0.80),
    p('/tools/ai-prompt-generator',      0.85),
    p('/ai-prompts/seo',                 0.85),
    p('/tools/emi-calculator',           0.90),
    p('/tools/home-loan-emi-calculator', 0.88),
    p('/tools/car-loan-emi-calculator',  0.85),
    p('/tools/sip-calculator',           0.90),
    p('/tools/invoice-generator',        0.92),
    p('/tools/gst-calculator',           0.92),
    p('/tools/salary-calculator',        0.92),
    p('/tools/professional-tax-calculator', 0.92),
    p('/tools/hra-calculator',           0.92),
    p('/tools/ppf-calculator',           0.92),
    p('/tools/fuel-bill-generator',      0.90),
    p('/tools/claude-code-token-calculator', 0.90),
    p('/tools/cgpa-calculator',          0.92),

    // ── EMI bank programmatic pages (handled by [slug] router) ──
    ...getAllEmiBankSlugs().map(slug => p(`/${slug}`, 0.88)),

    // ── GST state programmatic pages (handled by [slug] router) ──
    ...getAllGstStateSlugs().map(slug => p(`/${slug}`, 0.87)),

    // ── Salary city programmatic pages (handled by [slug] router) ──
    ...getAllSalaryCitySlugs().map(slug => p(`/${slug}`, 0.87)),

    // ── Number to Words — main tool ───────────────────────────
    p('/tools/number-to-words', 0.92),

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
    p('/tools/bmi-calculator',          0.90),
    p('/bmi-calculator-for-men',        0.85),
    p('/bmi-calculator-for-women',      0.85),
    p('/ideal-weight-calculator-india', 0.85),
    p('/healthy-bmi-for-indians',       0.83),

    // ── Age Calculator programmatic pages (handled by [slug] router) ──
    p('/tools/age-calculator',     0.85),
    p('/age-calculator-by-dob',    0.80),

    // ── Invoice Generator programmatic pages (handled by [slug] router) ──
    p('/gst-invoice-generator-online', 0.88),
    p('/proforma-invoice-generator',   0.85),

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
