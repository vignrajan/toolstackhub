/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [

      {
        source: '/:path*',
        has: [{ type: 'host', value: 'toolstackhub.in' }],
        destination: 'https://www.toolstackhub.in/:path*',
        permanent: true,
      },

      // ════════════════════════════════════════════════
      // IMAGE TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/compress-image-online',       destination: '/tools/image-compressor', permanent: true },
      { source: '/resize-image-online',         destination: '/tools/image-resizer',    permanent: true },
      { source: '/jpg-to-png-converter-online', destination: '/tools/jpg-to-png',       permanent: true },
      { source: '/image-to-pdf-converter-online', destination: '/tools/image-to-pdf',   permanent: true },
      { source: '/speech-bubble-maker',         destination: '/tools/speech-bubble-maker', permanent: true },

      // ════════════════════════════════════════════════
      // TEXT TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/word-counter-online',          destination: '/tools/word-counter',           permanent: true },
      { source: '/character-counter-online',     destination: '/tools/character-counter',      permanent: true },
      { source: '/case-converter-online',        destination: '/tools/case-converter',         permanent: true },
      { source: '/lorem-ipsum-generator',        destination: '/tools/lorem-ipsum-generator',  permanent: true },
      { source: '/text-to-handwriting-online',   destination: '/tools/text-to-handwriting',    permanent: true },
      { source: '/markdown-editor-online',       destination: '/tools/markdown-preview',       permanent: true },
      { source: '/text-to-speech-online',        destination: '/tools/text-to-speech',         permanent: true },
      { source: '/remove-duplicate-lines-online',destination: '/tools/remove-duplicate-lines', permanent: true },
      { source: '/remove-extra-spaces',          destination: '/tools/remove-extra-spaces',    permanent: true },
      { source: '/remove-line-breaks',           destination: '/tools/remove-line-breaks',     permanent: true },
      { source: '/remove-empty-lines',           destination: '/tools/remove-empty-lines',     permanent: true },
      { source: '/text-repeater',                destination: '/tools/text-repeater',          permanent: true },
      { source: '/typing-speed-test-online',     destination: '/tools/typing-speed-test',      permanent: true },

      // ════════════════════════════════════════════════
      // DEVELOPER TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/json-formatter-online',              destination: '/tools/json-formatter',      permanent: true },
      { source: '/base64-encoder-online',              destination: '/tools/base64-encoder',      permanent: true },
      { source: '/url-encoder-online',                 destination: '/tools/url-encoder',         permanent: true },
      { source: '/uuid-generator-online',              destination: '/tools/uuid-generator',      permanent: true },
      { source: '/unix-timestamp-converter-online',    destination: '/tools/timestamp-converter', permanent: true },
      { source: '/binary-to-decimal-converter-online', destination: '/tools/binary-converter',    permanent: true },
      { source: '/regex-tester-online',                destination: '/tools/regex-tester',        permanent: true },
      { source: '/css-minifier-online',                destination: '/tools/css-minifier',        permanent: true },
      { source: '/html-formatter-online',              destination: '/tools/html-formatter',      permanent: true },
      { source: '/color-picker-online',                destination: '/tools/color-picker',        permanent: true },
      { source: '/json-to-csv-converter-online',       destination: '/tools/json-to-csv',         permanent: true },
      { source: '/jwt-decoder-online',                 destination: '/tools/jwt-decoder',         permanent: true },
      { source: '/diff-checker-online',                destination: '/tools/diff-checker',        permanent: true },
      { source: '/cron-expression-builder-online',     destination: '/tools/cron-expression-builder', permanent: true },
      { source: '/sql-formatter-online',               destination: '/tools/sql-formatter',       permanent: true },
      { source: '/markdown-to-html',                   destination: '/tools/markdown-to-html',    permanent: true },
      { source: '/html-to-markdown',                   destination: '/tools/html-to-markdown',    permanent: true },
      { source: '/color-palette-generator',            destination: '/tools/color-palette-generator', permanent: true },

      // ════════════════════════════════════════════════
      // SEO TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/meta-tag-generator-online', destination: '/tools/meta-tag-generator', permanent: true },

      // ════════════════════════════════════════════════
      // UTILITY TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/qr-code-generator-online',    destination: '/tools/qr-code-generator',        permanent: true },
      { source: '/password-generator-online',   destination: '/tools/password-generator',       permanent: true },
      { source: '/password-strength-checker',   destination: '/tools/password-strength-checker', permanent: true },
      { source: '/random-number-generator',     destination: '/tools/random-number-generator',  permanent: true },
      { source: '/age-calculator-online',       destination: '/tools/age-calculator',           permanent: true },
      { source: '/percentage-calculator-online',destination: '/tools/percentage-calculator',    permanent: true },
      { source: '/pomodoro-timer-online',       destination: '/tools/pomodoro-timer',           permanent: true },
      { source: '/countdown-timer-online',      destination: '/tools/countdown-timer',          permanent: true },
      { source: '/stopwatch-online',            destination: '/tools/stopwatch',                permanent: true },
      { source: '/screen-resolution-checker',   destination: '/tools/screen-resolution',        permanent: true },
      { source: '/ai-prompt-generator-online',  destination: '/tools/ai-prompt-generator',      permanent: true },
      { source: '/whatsapp-link-generator',     destination: '/tools/whatsapp-link-generator',  permanent: true },
      { source: '/unit-converter',              destination: '/tools/unit-converter',           permanent: true },

      // ════════════════════════════════════════════════
      // FINANCE TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/emi-calculator',              destination: '/tools/emi-calculator',              permanent: true },
      { source: '/home-loan-emi-calculator',    destination: '/tools/home-loan-emi-calculator',    permanent: true },
      { source: '/car-loan-emi-calculator',     destination: '/tools/car-loan-emi-calculator',     permanent: true },
      { source: '/sip-calculator',              destination: '/tools/sip-calculator',              permanent: true },
      { source: '/invoice-generator',           destination: '/tools/invoice-generator',           permanent: true },
      { source: '/gst-calculator',              destination: '/tools/gst-calculator',              permanent: true },
      { source: '/salary-calculator',           destination: '/tools/salary-calculator',           permanent: true },
      { source: '/professional-tax-calculator', destination: '/tools/professional-tax-calculator', permanent: true },
      { source: '/hra-calculator',              destination: '/tools/hra-calculator',              permanent: true },
      { source: '/ppf-calculator',              destination: '/tools/ppf-calculator',              permanent: true },
      { source: '/fuel-bill-generator',         destination: '/tools/fuel-bill-generator',         permanent: true },
      { source: '/epf-calculator',              destination: '/tools/epf-calculator',              permanent: true },
      { source: '/form-16-calculator',          destination: '/tools/form-16-calculator',          permanent: true },
      { source: '/salary-slip-generator',       destination: '/tools/salary-slip-generator',       permanent: true },
      { source: '/rent-agreement-generator',    destination: '/tools/rent-agreement-generator',    permanent: true },
      { source: '/pan-validator',               destination: '/tools/pan-validator',               permanent: true },
      { source: '/ifsc-finder',                 destination: '/tools/ifsc-finder',                 permanent: true },
      { source: '/gst-number-validator',        destination: '/tools/gst-number-validator',        permanent: true },

      // ════════════════════════════════════════════════
      // STUDENT / MISC TOOLS — old URL → /tools/* (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/bmi-calculator',               destination: '/tools/bmi-calculator',               permanent: true },
      { source: '/number-to-words',              destination: '/tools/number-to-words',              permanent: true },
      { source: '/chat-screenshot-generator',    destination: '/tools/chat-screenshot-generator',    permanent: true },
      { source: '/claude-code-token-calculator', destination: '/tools/claude-code-token-calculator', permanent: true },
      { source: '/cgpa-calculator',              destination: '/tools/cgpa-calculator',              permanent: true },

      // ════════════════════════════════════════════════
      // URL NORMALISATION — short/alias URLs → /tools/*
      // ════════════════════════════════════════════════
      { source: '/online-stopwatch',              destination: '/tools/stopwatch',          permanent: true },
      { source: '/typing-test',                   destination: '/tools/typing-speed-test',  permanent: true },
      { source: '/binary-to-decimal-converter',   destination: '/tools/binary-converter',   permanent: true },
      { source: '/unix-timestamp-converter',      destination: '/tools/timestamp-converter', permanent: true },
      { source: '/json-to-csv-converter',         destination: '/tools/json-to-csv',        permanent: true },
      { source: '/diff-checker',                  destination: '/tools/diff-checker',       permanent: true },
      { source: '/cron-expression-builder',       destination: '/tools/cron-expression-builder', permanent: true },
      { source: '/text-to-binary-converter',      destination: '/tools/binary-converter',   permanent: true },
      { source: '/gst-inclusive-exclusive-calculator', destination: '/tools/gst-calculator', permanent: true },

      // ════════════════════════════════════════════════
      // PARENT / HUB URLs — no index page exists; send to
      // closest equivalent so these never 404.
      // ════════════════════════════════════════════════
      { source: '/tools',         destination: '/',               permanent: true },
      { source: '/ai-prompts',    destination: '/ai-prompts/seo', permanent: true },

      // BLOG
      { source: '/blog/save-claude-tokens-guide', destination: '/blog/how-to-save-tokens-in-claude', permanent: true },

      // ════════════════════════════════════════════════
      // JSON CLUSTER — each URL is a standalone indexable page
      // targeting its own keyword (beautifier, pretty-print,
      // validator, minifier, viewer). Do NOT add redirects here.
      // ════════════════════════════════════════════════

      // ════════════════════════════════════════════════
      // HANDWRITING CLUSTER — each URL targets a distinct
      // keyword variant and has unique page content.
      // Do NOT add redirects here.
      // ════════════════════════════════════════════════

    ];
  },

};

module.exports = nextConfig;
