/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [

      // ════════════════════════════════════════════════
      // IMAGE TOOLS — /tools/* → clean URL (301 permanent)
      // ════════════════════════════════════════════════
      { source: '/tools/image-compressor', destination: '/compress-image-online',       permanent: true },
      { source: '/tools/image-resizer',    destination: '/resize-image-online',         permanent: true },
      { source: '/tools/jpg-to-png',       destination: '/jpg-to-png-converter-online', permanent: true },
      { source: '/tools/Image-to-pdf', destination: '/image-to-pdf-converter-online', permanent:true},

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
      { source: '/tools/timestamp-converter', destination: '/unix-timestamp-converter',    permanent: true },
      { source: '/tools/binary-converter',    destination: '/binary-to-decimal-converter', permanent: true },
      { source: '/tools/regex-tester',        destination: '/regex-tester-online',         permanent: true },
      { source: '/tools/css-minifier',        destination: '/css-minifier-online',         permanent: true },
      { source: '/tools/html-formatter',      destination: '/html-formatter-online',       permanent: true },
      { source: '/tools/color-picker',        destination: '/color-picker-online',         permanent: true },
      { source: '/tools/json-to-csv', destination: '/json-to-csv-converter', permanent: true },

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
      { source: '/tools/stopwatch',                  destination: '/online-stopwatch',            permanent: true },
      { source: '/tools/screen-resolution',          destination: '/screen-resolution-checker',   permanent: true },
      { source: '/tools/ai-prompt-generator',        destination: '/ai-prompt-generator-online',  permanent: true },
      { source: '/tools/typing-speed-test',          destination: '/typing-test',                 permanent: true },
      { source: '/tools/ai-prompts-seo',              destination: '/ai-prompts/seo',              permanent: true },
      { source: '/tools/emi-calculator',              destination: '/emi-calculator',              permanent: true },
      { source: '/tools/home-loan-emi-calculator',    destination: '/home-loan-emi-calculator',    permanent: true },
      { source: '/tools/sip-calculator',              destination: '/sip-calculator',              permanent: true },  
      { source: '/tools/invoice-generator',              destination: '/invoice-generator',        permanent: true },
      { source: '/tools/gst-calculator',              destination: '/gst-calculator',              permanent: true },
      { source: '/tools/salary-calculator',              destination: '/salary-calculator',        permanent: true },
      { source: '/tools/fuel-bill-generator',              destination: '/fuel-bill-generator',        permanent: true },

      // ════════════════════════════════════════════════
      // JSON CLUSTER — variant pages soft-redirect to main
      // (302 = temporary, keeps variants indexable separately)
      // ════════════════════════════════════════════════
      // NOTE: comment these out if your variant pages have
      // unique enough content to rank independently
      // { source: '/json-beautifier-online', destination: '/json-formatter-online', permanent: false },
      // { source: '/json-pretty-print',      destination: '/json-formatter-online', permanent: false },
      // { source: '/json-validator-online',  destination: '/json-formatter-online', permanent: false },
      // { source: '/json-minifier-online',   destination: '/json-formatter-online', permanent: false },
      // { source: '/json-viewer-online',     destination: '/json-formatter-online', permanent: false },

      // ════════════════════════════════════════════════
      // HANDWRITING CLUSTER — variant → main
      // ════════════════════════════════════════════════
      // { source: '/convert-text-to-handwriting', destination: '/text-to-handwriting-online', permanent: false },
      // { source: '/text-to-handwritten-notes',   destination: '/text-to-handwriting-online', permanent: false },

    ];
  },

};

module.exports = nextConfig;