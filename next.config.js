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
      // IMAGE TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/image-compressor', destination: '/compress-image-online',       permanent: true },
      { source: '/tools/image-resizer',    destination: '/resize-image-online',         permanent: true },
      { source: '/tools/jpg-to-png',       destination: '/jpg-to-png-converter-online', permanent: true },
      { source: '/tools/Image-to-pdf', destination: '/image-to-pdf-converter-online', permanent:true},
      { source: '/tools/speech-bubble-maker', destination: '/speech-bubble-maker', permanent:true},


      // ════════════════════════════════════════════════
      // TEXT TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/word-counter',          destination: '/word-counter-online',        permanent: true },
      { source: '/tools/character-counter',     destination: '/character-counter-online',   permanent: true },
      { source: '/tools/case-converter',        destination: '/case-converter-online',      permanent: true },
      { source: '/tools/lorem-ipsum-generator', destination: '/lorem-ipsum-generator',      permanent: true },
      { source: '/tools/text-to-handwriting',   destination: '/text-to-handwriting-online', permanent: true },
      { source: '/tools/markdown-preview',      destination: '/markdown-editor-online',     permanent: true },
      { source: '/tools/text-to-speech',        destination: '/text-to-speech-online',      permanent: true },
      { source: '/tools/remove-duplicate-lines',destination: '/remove-duplicate-lines-online', permanent: true },
      { source: '/tools/remove-extra-spaces',   destination: '/remove-extra-spaces',         permanent: true },
      { source: '/tools/remove-line-breaks',    destination: '/remove-line-breaks',          permanent: true },
      { source: '/tools/remove-empty-lines',    destination: '/remove-empty-lines',          permanent: true },
      { source: '/tools/text-repeater',         destination: '/text-repeater',               permanent: true },

      // ════════════════════════════════════════════════
      // DEVELOPER TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/json-formatter',      destination: '/json-formatter-online',       permanent: true },
      { source: '/tools/base64-encoder',      destination: '/base64-encoder-online',       permanent: true },
      { source: '/tools/url-encoder',         destination: '/url-encoder-online',          permanent: true },
      { source: '/tools/uuid-generator',      destination: '/uuid-generator-online',       permanent: true },
      { source: '/tools/timestamp-converter', destination: '/unix-timestamp-converter-online',    permanent: true },
      { source: '/tools/binary-converter',    destination: '/binary-to-decimal-converter-online', permanent: true },
      { source: '/tools/text-to-binary-converter', destination: '/binary-to-decimal-converter-online', permanent: true },
      { source: '/text-to-binary-converter', destination: '/binary-to-decimal-converter-online', permanent: true },
      { source: '/tools/regex-tester',        destination: '/regex-tester-online',         permanent: true },
      { source: '/tools/css-minifier',        destination: '/css-minifier-online',         permanent: true },
      { source: '/tools/html-formatter',      destination: '/html-formatter-online',       permanent: true },
      { source: '/tools/color-picker',        destination: '/color-picker-online',         permanent: true },
      { source: '/tools/json-to-csv', destination: '/json-to-csv-converter-online', permanent: true },

      // ════════════════════════════════════════════════
      // SEO TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/meta-tag-generator', destination: '/meta-tag-generator-online', permanent: true },

      // ════════════════════════════════════════════════
      // UTILITY TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/qr-code-generator',         destination: '/qr-code-generator-online',    permanent: true },
      { source: '/tools/password-generator',         destination: '/password-generator-online',   permanent: true },
      { source: '/tools/password-strength-checker',  destination: '/password-strength-checker',   permanent: true },
      { source: '/tools/random-number-generator',    destination: '/random-number-generator',     permanent: true },
      { source: '/tools/age-calculator',             destination: '/age-calculator-online',       permanent: true },
      { source: '/tools/percentage-calculator',      destination: '/percentage-calculator-online', permanent: true },
      { source: '/tools/pomodoro-timer',             destination: '/pomodoro-timer-online',       permanent: true },
      { source: '/tools/countdown-timer',            destination: '/countdown-timer-online',      permanent: true },
      { source: '/tools/stopwatch',                  destination: '/stopwatch-online',            permanent: true },
      { source: '/tools/screen-resolution',          destination: '/screen-resolution-checker',   permanent: true },
      { source: '/tools/ai-prompt-generator',        destination: '/ai-prompt-generator-online',  permanent: true },
      { source: '/tools/typing-speed-test',          destination: '/typing-speed-test-online',     permanent: true },
      { source: '/tools/ai-prompts-seo',              destination: '/ai-prompts/seo',              permanent: true },
      { source: '/tools/emi-calculator',              destination: '/emi-calculator',              permanent: true },
      { source: '/tools/home-loan-emi-calculator',    destination: '/home-loan-emi-calculator',    permanent: true },
      { source: '/tools/sip-calculator',              destination: '/sip-calculator',              permanent: true },  
      { source: '/tools/invoice-generator',           destination: '/invoice-generator',           permanent: true },
      { source: '/tools/gst-calculator',              destination: '/gst-calculator',              permanent: true },
      { source: '/gst-inclusive-exclusive-calculator',destination: '/gst-calculator',              permanent: true },      
      { source: '/tools/salary-calculator',              destination: '/salary-calculator',        permanent: true },
      { source: '/tools/hra-calculator',              destination: '/hra-calculator',              permanent: true },
      { source: '/tools/fuel-bill-generator',              destination: '/fuel-bill-generator',    permanent: true },
      { source: '/tools/chat-screenshot-generator',  destination: '/chat-screenshot-generator',    permanent: true },
      { source: '/tools/professional-tax-calculator', destination: '/professional-tax-calculator', permanent: true },
      { source: '/tools/ppf-calculator',              destination: '/ppf-calculator',              permanent: true },


      // UTILITY TOOLS — /tools/* → clean URL (301 permanent)
      { source: '/tools/bmi-calculator',               destination: '/bmi-calculator',        permanent: true },
      { source: '/tools/number-to-words',              destination: '/number-to-words',        permanent: true },
      { source: '/tools/claude-code-token-calculator', destination: '/claude-code-token-calculator', permanent: true },
      { source: '/tools/cgpa-calculator',              destination: '/cgpa-calculator',        permanent: true },

      // ════════════════════════════════════════════════
      // URL NORMALISATION — old short URLs → corrected -online suffix
      // ════════════════════════════════════════════════
      { source: '/online-stopwatch',              destination: '/stopwatch-online',                  permanent: true },
      { source: '/typing-test',                   destination: '/typing-speed-test-online',          permanent: true },
      { source: '/binary-to-decimal-converter',   destination: '/binary-to-decimal-converter-online', permanent: true },
      { source: '/unix-timestamp-converter',      destination: '/unix-timestamp-converter-online',   permanent: true },
      { source: '/json-to-csv-converter',         destination: '/json-to-csv-converter-online',      permanent: true },
      { source: '/diff-checker',                  destination: '/diff-checker-online',               permanent: true },
      { source: '/cron-expression-builder',       destination: '/cron-expression-builder-online',    permanent: true },

      // BLOG-CLAUDE TOKENS
      { source: '/blog/save-claude-tokens-guide',      destination: '/blog/how-to-save-tokens-in-claude',        permanent: true },

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