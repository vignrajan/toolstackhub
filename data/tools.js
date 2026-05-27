/**
 * ToolStackHub — Central Tool Registry
 * =====================================
 * Add new tools here. Each object drives:
 *  - Homepage listing
 *  - Tool page metadata (title, description, SEO)
 *  - Sitemap generation
 *  - Related tools suggestions
 *
 * TO ADD A NEW TOOL:
 * 1. Add an entry below
 * 2. Create /components/tools/YourTool.jsx
 * 3. Register it in /app/tools/[slug]/page.jsx
 * That's it!
 */

export const SITE_CONFIG = {
  name:        'ToolStackHub',
  tagline:     'Free Online Tools for Everyone',
  description: 'A collection of 50+ free online tools for developers, designers, and productivity. Image compressors, JSON formatters, QR generators, and more.',
  url:         'https://www.toolstackhub.in',
  twitterHandle: '@toolstackhub',
  ogImage:     '/og-image.png',
};

/** @type {Tool[]} */
export const tools = [
  // ── IMAGE TOOLS ──────────────────────────────────────────
  {
    slug:        'image-compressor',
    name:        'Image Compressor',
    href:        '/compress-image-online',
    category:    'image',
    icon:        '🗜️',
    description: 'Compress images online for free without losing quality. Reduce JPEG, PNG, and WebP file sizes instantly in your browser.',
    longDescription: 'Our free image compressor uses advanced compression algorithms to reduce your image file sizes by up to 90% while maintaining visual quality. Perfect for optimizing website images, reducing email attachment sizes, and saving storage space. All processing happens in your browser — your images never leave your device.',
    keywords:    ['image compressor', 'compress image online', 'reduce image size', 'image optimizer', 'compress jpeg', 'compress png', 'free image compression'],
    howToUse: [
      'Click the upload area or drag and drop your image file',
      'Adjust the quality slider to set compression level (80% recommended)',
      'Click "Compress Image" to start compression',
      'Download your compressed image',
    ],
    faqs: [
      { q: 'What image formats are supported?', a: 'We support JPEG, PNG, WebP, and GIF formats.' },
      { q: 'Is there a file size limit?', a: 'You can compress images up to 10MB in size.' },
      { q: 'Are my images stored on your servers?', a: 'No. All compression happens locally in your browser. Your images never leave your device.' },
      { q: 'How much can I compress an image?', a: 'Typically 40–90% reduction depending on the image and quality setting.' },
    ],
    relatedSlugs: ['image-resizer', 'jpg-to-png', 'qr-code-generator'],
  },
  {
    slug:        'image-resizer',
    name:        'Image Resizer',
    href: '/resize-image-online',
    category:    'image',
    icon:        '📐',
    description: 'Resize images online to any dimension. Set exact pixel width and height while maintaining aspect ratio. Free and instant.',
    longDescription: 'Resize any image to your exact specifications using our free online tool. Set custom width and height values, choose to maintain aspect ratio, and download your resized image instantly. Works entirely in your browser with no uploads required.',
    keywords:    ['image resizer', 'resize image online', 'change image size', 'scale image', 'resize photo', 'crop image online', 'image dimensions'],
    howToUse: [
      'Upload your image by clicking or dragging it into the upload area',
      'Enter your desired width and/or height in pixels',
      'Toggle "Maintain Aspect Ratio" if needed',
      'Click "Resize Image" and download the result',
    ],
    faqs: [
      { q: 'Can I resize without losing quality?', a: 'Enlarging images will reduce quality. Reducing size generally maintains good quality.' },
      { q: 'What is the maximum resolution I can set?', a: 'Up to 10,000 × 10,000 pixels.' },
      { q: 'Does it maintain my aspect ratio?', a: 'Yes, you can toggle aspect ratio lock on or off.' },
    ],
    relatedSlugs: ['image-compressor', 'jpg-to-png'],
  },
  {
    slug:        'jpg-to-png',
    name:        'JPG to PNG Converter',
    href: '/jpg-to-png-converter-online',
    category:    'image',
    icon:        '🔄',
    description: 'Convert JPG images to PNG format online for free. Maintain transparency and quality with instant browser-based conversion.',
    longDescription: 'Convert your JPEG/JPG images to PNG format instantly. PNG supports transparency and lossless compression, making it ideal for logos, icons, and graphics. Our converter runs entirely in your browser for maximum privacy.',
    keywords:    ['jpg to png', 'convert jpg to png', 'jpeg to png converter', 'image format converter', 'jpg png online', 'free image converter'],
    howToUse: [
      'Upload a JPG or JPEG image',
      'Preview the image in the tool',
      'Click "Convert to PNG"',
      'Download your PNG file',
    ],
    faqs: [
      { q: 'Will the quality be the same after conversion?', a: 'PNG is lossless so the output will be as clear as the source JPG.' },
      { q: 'Can I convert PNG to JPG too?', a: 'Currently this tool converts JPG → PNG only.' },
      { q: 'Does it support batch conversion?', a: 'Currently one image at a time. Batch support is coming soon.' },
    ],
    relatedSlugs: ['image-compressor', 'image-resizer'],
  },
  {
    slug:        'image-to-pdf',
    name:        'Image to PDF Converter',
    href: '/image-to-pdf-converter-online',
    category:    'image',
    icon:        '📄',
    description: 'Convert JPG, PNG, and WEBP images to a single PDF file instantly. Multiple images supported with drag-to-reorder. No server upload, no watermarks.',
    relatedSlugs: ['image-compressor', 'image-resizer', 'jpg-to-png'],
  },
  {
    slug: 'speech-bubble-maker', name: 'Speech Bubble Maker',
    category: 'image', icon: '💬',
    description: 'Add speech bubbles to any image free online. 6 styles, drag & resize, instant PNG download.',
    href: '/speech-bubble-maker',
  },

  // ── TEXT TOOLS ───────────────────────────────────────────
  {
    slug:        'word-counter',
    name:        'Word Counter',
    href: '/word-counter-online',
    category:    'text',
    icon:        '📝',
    description: 'Count words, characters, sentences, and paragraphs in any text. Free online word counter tool with real-time statistics.',
    longDescription: 'Get instant word count, character count, sentence count, and reading time estimates as you type. Perfect for writers, students, bloggers, and content creators who need to meet specific word limits for essays, articles, and social media posts.',
    keywords:    ['word counter', 'count words online', 'word count tool', 'character counter', 'word frequency', 'reading time calculator', 'essay word counter'],
    howToUse: [
      'Type or paste your text into the text area',
      'Statistics update automatically in real time',
      'View word count, character count, sentence count, and more',
      'Use the copy button to copy statistics',
    ],
    faqs: [
      { q: 'Does it count words in real time?', a: 'Yes, all statistics update instantly as you type.' },
      { q: 'How is reading time calculated?', a: 'Based on an average reading speed of 200 words per minute.' },
      { q: 'Can it count words in multiple languages?', a: 'Yes, it works with any language that uses spaces between words.' },
    ],
    relatedSlugs: ['character-counter', 'case-converter', 'markdown-preview'],
  },
  {
    slug:        'character-counter',
    name:        'Character Counter',
    href: '/character-counter-online',
    category:    'text',
    icon:        '🔢',
    description: 'Count characters with and without spaces, letters, numbers, and special characters. Perfect for Twitter, SMS, and form limits.',
    longDescription: 'Our character counter gives you a detailed breakdown of your text including total characters, characters without spaces, letter count, number count, special character count, and line count. Ideal for social media posts, meta descriptions, and text fields with limits.',
    keywords:    ['character counter', 'count characters online', 'twitter character limit', 'sms character count', 'text length checker', 'letter counter'],
    howToUse: [
      'Paste or type your text in the input area',
      'Character counts update in real time',
      'Check against popular platform limits (Twitter: 280, SMS: 160)',
      'Use the clear button to reset',
    ],
    faqs: [
      { q: 'Does it count spaces as characters?', a: 'It shows both total characters (with spaces) and characters without spaces.' },
      { q: 'Is there a text length limit?', a: 'No limit — you can analyze texts of any length.' },
      { q: 'Can I use it for meta descriptions?', a: 'Yes! Meta descriptions should be 150–160 characters — we display a color indicator.' },
    ],
    relatedSlugs: ['word-counter', 'case-converter'],
  },
  {
    slug:        'case-converter',
    name:        'Case Converter',
    href: '/case-converter-online',
    category:    'text',
    icon:        '🔡',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and more. Free text case changer.',
    longDescription: 'Transform your text into any case format instantly. Supports uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Essential for developers, writers, and anyone who needs to reformat text quickly.',
    keywords:    ['case converter', 'uppercase converter', 'lowercase text', 'title case converter', 'camelCase', 'snake_case', 'text formatter', 'change text case'],
    howToUse: [
      'Type or paste your text in the input field',
      'Click any case format button to convert',
      'The output appears instantly below',
      'Click the copy icon to copy the result',
    ],
    faqs: [
      { q: 'What case formats are supported?', a: 'UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case.' },
      { q: 'Can I convert code variable names?', a: 'Yes! camelCase, PascalCase, snake_case, and kebab-case are perfect for code.' },
    ],
    relatedSlugs: ['word-counter', 'character-counter'],
  },
  {
    slug:        'remove-duplicate-lines',
    name:        'Remove Duplicate Lines',
    href: '/remove-duplicate-lines-online',
    category:    'text',
    icon:        '🧹',
    description: 'Remove duplicate lines from any text instantly. Clean email lists, keyword lists, CSV rows, and log files. Case-sensitive and case-insensitive modes.',
    longDescription: 'Paste any text and instantly remove all duplicate lines — keeping only unique lines in the output. Supports case-sensitive and case-insensitive matching, whitespace trimming, empty line removal, and alphabetical sorting. Download the clean result as a .txt file. Works entirely in your browser — your data is never uploaded.',
    keywords: [
      'remove duplicate lines online',
      'remove duplicate text lines',
      'delete duplicate lines',
      'remove repeated lines',
      'unique lines generator',
    ],
    howToUse: [
      'Paste your text into the input area',
      'Choose case-sensitive or case-insensitive mode',
      'Toggle trim whitespace and ignore empty lines as needed',
      'Click Remove Duplicates',
      'Copy or download the unique lines output',
    ],
    faqs: [
      { q: 'How do I remove duplicate lines online?', a: 'Paste your text, set your options, and click Remove Duplicates. Unique lines appear instantly in the output panel.' },
      { q: 'Is it free?', a: 'Yes — completely free with no account or usage limits.' },
      { q: 'Is my text safe?', a: 'Yes — all processing runs in your browser. Your text is never sent to any server.' },
    ],
    relatedSlugs: ['word-counter', 'character-counter', 'case-converter', 'lorem-ipsum-generator'],
  },
  {
    slug:        'typing-speed-test',
    name:        'Typing Speed Test',
    href: '/typing-test',
    category:    'utility',
    icon:        '⌨️',
    description: 'Test your typing speed in WPM. Real-time accuracy tracking, color-coded feedback, easy/medium/hard difficulty, and 4 time modes. Free, no signup.',
    relatedSlugs: ['word-counter', 'pomodoro-timer', 'countdown-timer'],
  },
  {
    slug:        'remove-line-breaks',
    name:        'Remove Line Breaks',
    href:        '/remove-line-breaks',
    category:    'text',
    icon:        '✂️',
    description: 'Remove line breaks from any text instantly. Options to replace with space or strip empty lines. Free, no signup.',
    href:        '/remove-line-breaks',
  },
  {
    slug:        'remove-empty-lines',
    name:        'Remove Empty Lines',
    category:    'text',
    icon:        '📄',
    description: 'Strip all blank and empty lines from text, code, or data exports. Free, browser-based, instant.',
    href:        '/remove-empty-lines',
  },
  {
    slug:        'remove-extra-spaces',
    name:        'Remove Extra Spaces',
    category:    'text',
    icon:        '⎵',
    description: 'Collapse multiple spaces into single spaces and clean up whitespace from any text. Free.',
    href:        '/remove-extra-spaces',
  },
  {
    slug:        'text-repeater',
    name:        'Text Repeater',
    category:    'text',
    icon:        '🔁',
    description: 'Repeat any text, word, or sentence multiple times instantly. Choose new line, space, comma, or custom separator. Free, no signup.',
    href:        '/text-repeater',
  },



  // ── DEVELOPER TOOLS ──────────────────────────────────────
  {
    slug:        'json-formatter',
    name:        'JSON Formatter',
    category:    'developer',
    icon:        '{ }',
    description: 'Format, validate, and beautify JSON online. Pretty-print minified JSON or minify formatted JSON. Free JSON viewer and editor.',
    longDescription: 'Our JSON formatter helps you instantly beautify minified JSON, validate JSON syntax, minify formatted JSON to save bandwidth, and view the structure with syntax highlighting. Perfect for debugging API responses, configuration files, and data structures.',
    keywords:    ['json formatter', 'json validator', 'json beautifier', 'format json online', 'json minifier', 'json viewer', 'pretty print json', 'json linter'],
    howToUse: [
      'Paste your JSON into the input area',
      'Click "Format" to beautify or "Minify" to compress',
      'Any syntax errors will be highlighted in red',
      'Copy the formatted output with one click',
    ],
    faqs: [
      { q: 'Can it detect JSON errors?', a: 'Yes, any invalid JSON syntax is highlighted with a clear error message.' },
      { q: 'What indentation does it use?', a: '2 spaces by default. You can choose 2 or 4 spaces.' },
      { q: 'Can I minify JSON too?', a: 'Yes, click "Minify" to remove all whitespace for production use.' },
    ],
    relatedSlugs: ['base64-encoder', 'url-encoder', 'uuid-generator'],
  },
  {
    slug:        'base64-encoder',
    name:        'Base64 Encoder / Decoder',
    href: '/base64-encoder-online',
    category:    'developer',
    icon:        '🔐',
    description: 'Encode text to Base64 or decode Base64 strings online. Free, instant, and works entirely in your browser.',
    longDescription: 'Encode any text or string to Base64 format, or decode Base64-encoded data back to readable text. Commonly used for encoding binary data in emails, data URIs, and API authentication. All encoding happens client-side for complete privacy.',
    keywords:    ['base64 encoder', 'base64 decoder', 'encode base64 online', 'decode base64', 'base64 converter', 'base64 string', 'binary to base64'],
    howToUse: [
      'Enter text in the input field',
      'Click "Encode" to convert to Base64, or "Decode" to convert from Base64',
      'The result appears in the output field',
      'Copy the result with the copy button',
    ],
    faqs: [
      { q: 'What is Base64 used for?', a: 'Encoding binary data as text, embedding images in CSS/HTML, and API authentication headers.' },
      { q: 'Can it handle Unicode characters?', a: 'Yes, it supports full UTF-8 encoding.' },
      { q: 'Is there a size limit?', a: 'No limit for text encoding. Very large strings may take a moment to process.' },
    ],
    relatedSlugs: ['url-encoder', 'json-formatter', 'uuid-generator'],
  },
  {
    slug:        'uuid-generator',
    name:        'UUID Generator',
    href: '/uuid-generator-online',
    category:    'developer',
    icon:        '🆔',
    description: 'Generate random UUIDs (v4) online instantly. Create single or bulk UUIDs for your applications, databases, and testing.',
    longDescription: 'Generate cryptographically random UUID v4 strings for use as unique identifiers in your applications, databases, APIs, and testing. Generate up to 100 UUIDs at once with our bulk generator. All UUIDs are generated in your browser.',
    keywords:    ['uuid generator', 'generate uuid online', 'unique id generator', 'guid generator', 'uuid v4', 'random uuid', 'bulk uuid generator'],
    howToUse: [
      'Click "Generate UUID" for a single UUID',
      'Set the quantity for bulk generation (up to 100)',
      'Copy individual UUIDs or all at once',
      'Toggle uppercase/lowercase format',
    ],
    faqs: [
      { q: 'What version of UUID is generated?', a: 'UUID v4 (random), which is the most commonly used type.' },
      { q: 'Are the UUIDs truly unique?', a: 'Yes, they use cryptographically secure random number generation.' },
      { q: 'What is a UUID used for?', a: 'Primary keys in databases, session tokens, API request IDs, and any scenario requiring unique identifiers.' },
    ],
    relatedSlugs: ['password-generator', 'random-number-generator', 'base64-encoder'],
  },
  {
    slug:        'timestamp-converter',
    name:        'Timestamp Converter',
    href: '/unix-timestamp-converter',
    category:    'developer',
    icon:        '⏱️',
    description: 'Convert Unix timestamps to human-readable dates and vice versa. Support for seconds and milliseconds. Free online timestamp tool.',
    longDescription: 'Instantly convert between Unix timestamps and human-readable date-time formats. Supports both second-based and millisecond-based timestamps. Shows the date in multiple formats and timezones. Essential for developers debugging logs and APIs.',
    keywords:    ['timestamp converter', 'unix timestamp', 'epoch converter', 'unix time', 'timestamp to date', 'date to timestamp', 'epoch time converter'],
    howToUse: [
      'Enter a Unix timestamp to convert to a date',
      'Or enter a date to convert to a Unix timestamp',
      'Toggle between seconds and milliseconds',
      'Click "Now" to get the current timestamp',
    ],
    faqs: [
      { q: 'What is a Unix timestamp?', a: 'The number of seconds (or milliseconds) elapsed since January 1, 1970 (UTC), known as the Unix epoch.' },
      { q: 'Does it support milliseconds?', a: 'Yes, toggle between seconds (10-digit) and milliseconds (13-digit) timestamps.' },
      { q: 'What timezone does it use?', a: 'It shows UTC and your local timezone simultaneously.' },
    ],
    relatedSlugs: ['uuid-generator', 'random-number-generator', 'json-formatter'],
  },
  {
    slug:        'url-encoder',
    name:        'URL Encoder / Decoder',
    href: '/url-encoder-online',
    category:    'developer',
    icon:        '🔗',
    description: 'Encode or decode URLs online. Convert special characters to percent-encoded format and back. Free URL encoding tool.',
    longDescription: 'Encode URLs and query string parameters to ensure they are properly formatted for HTTP requests, or decode percent-encoded URLs to their human-readable form. Handles all special characters including spaces, ampersands, and Unicode.',
    keywords:    ['url encoder', 'url decoder', 'percent encoding', 'encode url online', 'decode url', 'uri encoder', 'query string encoder'],
    howToUse: [
      'Paste your URL or text in the input field',
      'Click "Encode" to percent-encode special characters',
      'Or click "Decode" to convert encoded characters back to normal',
      'Copy the result with one click',
    ],
    faqs: [
      { q: 'What is URL encoding?', a: 'Converting special characters into a format safe for use in URLs (e.g., space becomes %20).' },
      { q: 'Does it encode the full URL or just parameters?', a: 'You can encode the entire URL or just query parameter values — both use cases are supported.' },
    ],
    relatedSlugs: ['base64-encoder', 'json-formatter'],
  },

  // ── UTILITY TOOLS ────────────────────────────────────────
  {
    slug:        'qr-code-generator',
    name:        'QR Code Generator',
    href: '/qr-code-generator-online',
    category:    'utility',
    icon:        '📱',
    description: 'Generate QR codes online for free. Create QR codes for URLs, text, WiFi, and more. Download as PNG or SVG.',
    longDescription: 'Create custom QR codes for any URL, text, phone number, email, or WiFi credentials. Customize colors, add error correction, and download in high-resolution PNG format. Perfect for business cards, menus, marketing materials, and product packaging.',
    keywords:    ['qr code generator', 'create qr code', 'free qr code', 'qr code maker', 'qr code for website', 'custom qr code', 'qr code download'],
    howToUse: [
      'Enter the URL or text you want to encode',
      'Adjust the size and error correction level',
      'Preview the QR code in real time',
      'Download as PNG for print or digital use',
    ],
    faqs: [
      { q: 'What can I encode in a QR code?', a: 'URLs, plain text, email addresses, phone numbers, WiFi credentials, and more.' },
      { q: 'Can I customize the QR code colors?', a: 'Yes, you can set custom foreground and background colors.' },
      { q: 'What is error correction?', a: 'Error correction allows QR codes to be read even when partially damaged. Higher levels increase QR code size.' },
    ],
    relatedSlugs: ['password-generator', 'uuid-generator', 'url-encoder'],
  },
  {
    slug:        'password-generator',
    name:        'Password Generator',
    href: '/password-generator-online',
    category:    'utility',
    icon:        '🔑',
    description: 'Generate strong, secure random passwords online. Customize length, complexity, and character types. Free password generator.',
    longDescription: 'Create cryptographically secure passwords with customizable length (4–128 characters), and select which character types to include: uppercase letters, lowercase letters, numbers, and special symbols. Your passwords are never transmitted — all generation happens in your browser.',
    keywords:    ['password generator', 'generate strong password', 'random password', 'secure password', 'password creator', 'strong password generator', 'password maker'],
    howToUse: [
      'Set your desired password length with the slider',
      'Check/uncheck character types (uppercase, lowercase, numbers, symbols)',
      'Click "Generate Password" to create a new password',
      'Click the copy icon to copy it to your clipboard',
    ],
    faqs: [
      { q: 'Are generated passwords saved anywhere?', a: 'No. All generation is done in your browser. Passwords are never stored or transmitted.' },
      { q: 'What makes a strong password?', a: 'Length (12+ characters), mix of character types, and randomness. Avoid dictionary words.' },
      { q: 'Can I generate multiple passwords at once?', a: 'Yes, use the bulk generation option to create up to 20 passwords at once.' },
    ],
    relatedSlugs: ['uuid-generator', 'random-number-generator', 'base64-encoder'],
  },
  {
    slug:        'random-number-generator',
    name:        'Random Number Generator',
    href: '/random-number-generator',
    category:    'utility',
    icon:        '🎲',
    description: 'Generate random numbers online. Set min/max range, generate integers or decimals, and create bulk random numbers.',
    longDescription: 'Generate truly random numbers within any range. Choose between integers and decimal numbers, set minimum and maximum bounds, generate multiple numbers at once, and optionally exclude duplicates. Perfect for statistics, games, lotteries, and testing.',
    keywords:    ['random number generator', 'generate random number', 'random integer', 'random number between', 'number randomizer', 'dice roller', 'lottery number generator'],
    howToUse: [
      'Set the minimum and maximum values for your range',
      'Choose how many numbers to generate',
      'Toggle "No Duplicates" if you need unique numbers',
      'Click "Generate" to get your random numbers',
    ],
    faqs: [
      { q: 'How random are the numbers?', a: "Uses JavaScript's Math.random() for pseudorandom generation, suitable for most applications." },
      { q: 'Can it generate decimal numbers?', a: 'Yes, toggle the "Decimals" option to get floating-point numbers.' },
      { q: 'Can I generate lottery numbers?', a: 'Yes! Set the range (e.g., 1–49) and quantity (6 numbers), and check "No Duplicates".' },
    ],
    relatedSlugs: ['password-generator', 'uuid-generator'],
  },
  {
    slug:        'markdown-preview',
    name:        'Markdown Preview',
    href: '/markdown-editor-online',
    category:    'utility',
    icon:        '✍️',
    description: 'Live Markdown editor with real-time preview. Write markdown and see it rendered instantly. Supports GFM, tables, and code highlighting.',
    longDescription: 'Write Markdown with a side-by-side live preview. Supports GitHub Flavored Markdown (GFM) including tables, task lists, strikethrough, code blocks with syntax highlighting, and more. Perfect for README files, documentation, and blog posts.',
    keywords:    ['markdown preview', 'markdown editor', 'markdown viewer', 'live markdown', 'markdown renderer', 'gfm markdown', 'markdown to html'],
    howToUse: [
      'Type your Markdown in the left panel',
      'See the rendered preview update in real time on the right',
      'Use the sample button to load example Markdown',
      'Copy the HTML output or download as .md file',
    ],
    faqs: [
      { q: 'What Markdown features are supported?', a: 'Headings, bold, italic, links, images, lists, tables, code blocks, blockquotes, and task lists (GFM).' },
      { q: 'Can I export the HTML?', a: 'Yes, click "Copy HTML" to get the rendered HTML output.' },
      { q: 'Is syntax highlighting supported?', a: 'Yes, fenced code blocks support syntax highlighting for common languages.' },
    ],
    relatedSlugs: ['word-counter', 'character-counter', 'case-converter'],
  },

  // ── BATCH 2: HIGH-TRAFFIC SEO TOOLS ──────────────────────

  {
    slug:        'color-picker',
    name:        'Color Picker',
    href: '/color-picker-online',
    category:    'developer',
    icon:        '🎨',
    description: 'Pick any color and instantly get HEX, RGB, HSL, and CMYK values. Free online color picker with sliders and preset palettes.',
    longDescription: 'Our free color picker lets you visually select any color and instantly converts it to HEX, RGB, HSL, and CMYK formats. Use the RGB sliders for precise control, type a HEX value directly, or choose from preset palette colors. Perfect for web designers, developers, and digital artists.',
    keywords: ['color picker', 'hex color picker', 'rgb color picker', 'color converter', 'hex to rgb', 'color code picker', 'online color picker', 'color palette'],
    howToUse: [
      'Click the color swatch to open the browser color picker',
      'Or type a HEX value directly into the input field',
      'Use the RGB sliders to fine-tune your color',
      'Click any value to copy HEX, RGB, HSL, or CMYK to clipboard',
    ],
    faqs: [
      { q: 'What color formats does it support?', a: 'HEX, RGB, HSL, and CMYK — all update simultaneously as you pick a color.' },
      { q: 'Can I enter a color value manually?', a: 'Yes, type any valid HEX code directly into the input field.' },
      { q: 'Is this useful for web development?', a: 'Absolutely — copy the HEX or RGB value and paste directly into your CSS.' },
    ],
    relatedSlugs: ['image-compressor', 'css-minifier', 'html-formatter'],
  },
  {
    slug:        'meta-tag-generator',
    name:        'Meta Tag Generator',
    href: '/meta-tag-generator-online',
    category:    'seo',
    icon:        '🏷️',
    description: 'Generate SEO meta tags for your website instantly. Create title, description, Open Graph, and Twitter Card tags for free.',
    longDescription: 'Generate complete, SEO-optimized meta tags for your web pages in seconds. Our meta tag generator creates standard meta tags, Open Graph tags for social sharing, and Twitter Card tags — all formatted as ready-to-paste HTML. Essential for improving your search rankings and social media appearance.',
    keywords: ['meta tag generator', 'seo meta tags', 'open graph generator', 'twitter card generator', 'meta description generator', 'html meta tags', 'seo tags'],
    howToUse: [
      'Enter your page title, description, and URL',
      'Add your page image URL for social sharing previews',
      'Select your content type (website, article, etc.)',
      'Copy the generated HTML and paste into your page head',
    ],
    faqs: [
      { q: 'What is the ideal meta description length?', a: 'Keep it between 150–160 characters. Longer descriptions get truncated in search results.' },
      { q: 'What are Open Graph tags?', a: 'Open Graph tags control how your page appears when shared on Facebook, LinkedIn, and other social platforms.' },
      { q: 'Do meta tags directly affect SEO rankings?', a: 'The title tag and content quality do. Description tags affect click-through rates which indirectly impacts rankings.' },
    ],
    relatedSlugs: ['character-counter', 'url-encoder', 'word-counter'],
  },
  {
    slug:        'css-minifier',
    name:        'CSS Minifier',
    href: '/css-minifier-online',
    category:    'developer',
    icon:        '🎯',
    description: 'Minify and compress CSS code online for free. Remove whitespace, comments, and redundant code to reduce CSS file size.',
    longDescription: 'Minify your CSS files to reduce page load times and improve website performance. Our CSS minifier removes all unnecessary whitespace, comments, and redundant code while preserving full functionality. Also supports beautifying/formatting minified CSS back to readable format.',
    keywords: ['css minifier', 'minify css online', 'css compressor', 'compress css', 'css optimizer', 'css beautifier', 'css formatter', 'reduce css size'],
    howToUse: [
      'Paste your CSS code into the input area',
      'Click "Minify" to compress, or "Beautify" to format',
      'View the size reduction percentage',
      'Copy the output with one click',
    ],
    faqs: [
      { q: 'Does minifying CSS break functionality?', a: 'No — minification only removes whitespace and comments, never changes the actual CSS rules.' },
      { q: 'How much can CSS be compressed?', a: 'Typically 20–60% size reduction depending on how much whitespace and comments exist.' },
      { q: 'Can it also format/beautify CSS?', a: 'Yes — click "Beautify" to convert minified CSS back to readable, indented format.' },
    ],
    relatedSlugs: ['html-formatter', 'json-formatter', 'url-encoder'],
  },
  {
    slug:        'html-formatter',
    name:        'HTML Formatter',
    href: '/html-formatter-online',
    category:    'developer',
    icon:        '🌐',
    description: 'Format and beautify HTML code online for free. Pretty-print minified HTML or minify formatted HTML instantly.',
    longDescription: 'Format messy or minified HTML into clean, readable, properly indented code. Or minify your HTML to reduce file size for production. Our HTML formatter handles complex nested structures, inline styles, and mixed content perfectly.',
    keywords: ['html formatter', 'html beautifier', 'html minifier', 'format html online', 'pretty print html', 'html code formatter', 'html indenter', 'html validator'],
    howToUse: [
      'Paste your HTML code into the input area',
      'Click "Format" to beautify or "Minify" to compress',
      'Copy the formatted output with one click',
      'Use the indent selector to choose 2 or 4 spaces',
    ],
    faqs: [
      { q: 'Does it validate HTML?', a: 'It formats HTML but does not fully validate it. Use a dedicated HTML validator for compliance checking.' },
      { q: 'Can it handle large HTML files?', a: 'Yes, it handles files of any size directly in your browser.' },
      { q: 'Does it support HTML5 tags?', a: 'Yes, all HTML5 elements are supported.' },
    ],
    relatedSlugs: ['css-minifier', 'json-formatter', 'url-encoder'],
  },
  {
    slug:        'regex-tester',
    name:        'Regex Tester',
    href: '/regex-tester-online',
    category:    'developer',
    icon:        '🔎',
    description: 'Test and debug regular expressions online. Match, highlight, and explain regex patterns in real time. Free online regex tester.',
    longDescription: 'Test your regular expressions against any text in real time. See all matches highlighted, view capture groups, and get a plain-English explanation of what your regex pattern does. Supports JavaScript regex syntax with all flags (g, i, m, s).',
    keywords: ['regex tester', 'regular expression tester', 'regex validator', 'regex matcher', 'test regex online', 'regex debugger', 'javascript regex tester', 'regex pattern tester'],
    howToUse: [
      'Enter your regular expression in the pattern field',
      'Select your regex flags (g, i, m, s)',
      'Type or paste your test string below',
      'Matches are highlighted in real time',
    ],
    faqs: [
      { q: 'What regex syntax is supported?', a: 'JavaScript regex syntax, which covers most common use cases and is compatible with many languages.' },
      { q: 'Can I test capture groups?', a: 'Yes — all capture groups are shown separately in the match results.' },
      { q: 'What do the flags mean?', a: 'g = global (find all matches), i = case-insensitive, m = multiline, s = dotAll (dot matches newlines).' },
    ],
    relatedSlugs: ['json-formatter', 'url-encoder', 'base64-encoder'],
  },
  {
    slug:        'age-calculator',
    name:        'Age Calculator',
    href: '/age-calculator-online',
    category:    'utility',
    icon:        '🎂',
    description: 'Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with next birthday countdown.',
    longDescription: 'Find out your exact age down to the minute. Enter your date of birth and our age calculator instantly shows your age in years, months, days, hours, and even minutes. Also shows your next birthday countdown and what day of the week you were born.',
    keywords: ['age calculator', 'calculate age online', 'how old am i', 'age in days', 'birthday calculator', 'date of birth calculator', 'age difference calculator'],
    howToUse: [
      'Enter your date of birth using the date picker',
      'Your exact age is calculated instantly',
      'View your age in years, months, days, hours, and minutes',
      'See how many days until your next birthday',
    ],
    faqs: [
      { q: 'How accurate is the age calculation?', a: 'Very accurate — it accounts for leap years and calculates down to the exact day.' },
      { q: 'Can I calculate age between two custom dates?', a: 'Yes — you can set both a birth date and a target date to calculate age at any point in time.' },
      { q: 'What day of the week was I born?', a: 'The calculator shows the exact day of the week you were born.' },
    ],
    relatedSlugs: ['timestamp-converter', 'random-number-generator', 'percentage-calculator'],
  },
  {
    slug:        'percentage-calculator',
    name:        'Percentage Calculator',
    href: '/percentage-calculator-online',
    category:    'utility',
    icon:        '💯',
    description: 'Calculate percentages online for free. Find what percent of a number, percentage change, and more with instant results.',
    longDescription: 'Solve any percentage problem instantly. Calculate what percent one number is of another, find a percentage of any number, calculate percentage increase or decrease, and more. All calculations update in real time as you type.',
    keywords: ['percentage calculator', 'calculate percentage', 'percent calculator', 'percentage change calculator', 'percentage increase', 'percentage decrease', 'what percent of'],
    howToUse: [
      'Choose the type of percentage calculation you need',
      'Enter your numbers in the input fields',
      'The result updates instantly as you type',
      'Copy the result with one click',
    ],
    faqs: [
      { q: 'How do I calculate percentage increase?', a: 'Use the "Percentage Change" calculator — enter the original and new value and it shows the % increase or decrease.' },
      { q: 'What is X% of Y?', a: 'Use the "Percentage Of" calculator — enter the percentage and the number to find the value.' },
      { q: 'How do I find what percent A is of B?', a: 'Use the "What Percent" calculator — enter both numbers and get the percentage instantly.' },
    ],
    relatedSlugs: ['random-number-generator', 'age-calculator'],
  },
  {
    slug:        'binary-converter',
    name:        'Binary Converter',
    href: '/binary-to-decimal-converter',
    category:    'developer',
    icon:        '💾',
    description: 'Convert between binary, decimal, hexadecimal, and octal number systems online for free. Instant number base converter.',
    longDescription: 'Convert numbers between binary (base 2), decimal (base 10), hexadecimal (base 16), and octal (base 8) number systems instantly. Essential for programmers, students, and anyone working with low-level computing, networking, or digital electronics.',
    keywords: ['binary converter', 'decimal to binary', 'binary to decimal', 'hex converter', 'octal converter', 'number base converter', 'binary calculator', 'hex to decimal'],
    howToUse: [
      'Enter a number in any of the four fields (binary, decimal, hex, octal)',
      'All other formats update automatically',
      'Copy any value with one click',
      'Use the ASCII converter for text to binary conversion',
    ],
    faqs: [
      { q: 'What is binary?', a: 'Binary is base-2 numeral system using only 0 and 1. It is the fundamental language of computers.' },
      { q: 'What is hexadecimal used for?', a: 'Hex is used in programming, color codes (#FF5733), memory addresses, and network protocols.' },
      { q: 'Can it convert text to binary?', a: 'Yes — use the ASCII/text section to convert any text string to its binary representation.' },
    ],
    relatedSlugs: ['base64-encoder', 'uuid-generator', 'json-formatter'],
  },
  {
    slug:        'lorem-ipsum-generator',
    name:        'Lorem Ipsum Generator',
    href: '/lorem-ipsum-generator',
    category:    'text',
    icon:        '📄',
    description: 'Generate Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. Free lorem ipsum generator online.',
    longDescription: 'Generate any amount of Lorem Ipsum placeholder text for your designs, mockups, and prototypes. Choose the number of paragraphs, sentences, or words. Optionally start with the classic "Lorem ipsum dolor sit amet" opening. Copy in one click.',
    keywords: ['lorem ipsum generator', 'placeholder text generator', 'dummy text generator', 'lorem ipsum online', 'random text generator', 'filler text', 'lipsum generator'],
    howToUse: [
      'Select whether you want paragraphs, sentences, or words',
      'Set the quantity using the number input',
      'Toggle the classic Lorem Ipsum opening on or off',
      'Click Generate and copy the text',
    ],
    faqs: [
      { q: 'What is Lorem Ipsum?', a: 'Lorem Ipsum is standard placeholder text used in design and publishing since the 1500s to demonstrate visual form without meaningful content.' },
      { q: 'Can I generate just a few words?', a: 'Yes — switch to "Words" mode and set any quantity from 1 to 500.' },
      { q: 'Is the text always the same?', a: 'The opening paragraph follows the classic Lorem Ipsum text. Additional paragraphs are randomly generated variations.' },
    ],
    relatedSlugs: ['word-counter', 'character-counter', 'case-converter'],
  },
  {
    slug:        'pomodoro-timer',
    name:        'Pomodoro Timer',
    href: '/pomodoro-timer-online',
    category:    'utility',
    icon:        '🍅',
    description: 'Free online Pomodoro timer to boost productivity. 25-minute focus sessions with short and long break intervals.',
    longDescription: 'Use the Pomodoro Technique to supercharge your productivity. Work in focused 25-minute sessions followed by short 5-minute breaks. After 4 pomodoros, take a longer 15-minute break. Fully customizable session lengths with audio notifications.',
    keywords: ['pomodoro timer', 'pomodoro technique', 'focus timer', 'productivity timer', 'work timer online', 'study timer', '25 minute timer', 'pomodoro clock'],
    howToUse: [
      'Click Start to begin a 25-minute focus session',
      'Work on a single task until the timer rings',
      'Take a 5-minute short break when prompted',
      'After 4 sessions, enjoy a 15-minute long break',
    ],
    faqs: [
      { q: 'What is the Pomodoro Technique?', a: 'A time management method developed by Francesco Cirillo using 25-minute focused work sessions separated by short breaks.' },
      { q: 'Can I customize the timer durations?', a: 'Yes — you can adjust focus, short break, and long break durations to suit your workflow.' },
      { q: 'Does it make a sound when the timer ends?', a: 'Yes, there is an audio notification when each session ends.' },
    ],
    relatedSlugs: ['stopwatch', 'countdown-timer', 'random-number-generator'],
  },
  {
    slug:        'stopwatch',
    name:        'Stopwatch Online',
    href: '/online-stopwatch',
    category:    'utility',
    icon:        '⏱️',
    description: 'Free online stopwatch with lap timer. Start, pause, and record lap times with millisecond precision in your browser.',
    longDescription: 'A precise online stopwatch with lap recording and millisecond accuracy. Start, pause, and reset with keyboard shortcuts. Record unlimited lap times and see the difference between each lap. Works entirely in your browser with no installation needed.',
    keywords: ['stopwatch online', 'online stopwatch', 'stopwatch timer', 'lap timer', 'free stopwatch', 'stopwatch with laps', 'millisecond stopwatch', 'browser stopwatch'],
    howToUse: [
      'Click Start or press Space to begin timing',
      'Click Lap or press L to record a lap time',
      'Click Pause to stop temporarily',
      'Click Reset to clear all times and start over',
    ],
    faqs: [
      { q: 'How accurate is the stopwatch?', a: 'Millisecond precision using the browser Performance API.' },
      { q: 'Can I use keyboard shortcuts?', a: 'Yes — Space to start/pause, L for lap, and R to reset.' },
      { q: 'Does it work if I switch browser tabs?', a: 'Yes — the timer continues running in the background.' },
    ],
    relatedSlugs: ['pomodoro-timer', 'countdown-timer'],
  },
  {
    slug:        'countdown-timer',
    name:        'Countdown Timer',
    href: '/countdown-timer-online',
    category:    'utility',
    icon:        '⏳',
    description: 'Free online countdown timer. Set hours, minutes, and seconds and count down with an alarm sound. No sign-up needed.',
    longDescription: 'Set a custom countdown timer for any duration. Enter hours, minutes, and seconds, then start the countdown. Get an audio alert when time is up. Supports multiple saved presets for commonly used durations like cooking timers, meeting countdowns, and study sessions.',
    keywords: ['countdown timer', 'online timer', 'countdown clock', 'timer online', 'kitchen timer', 'study timer', 'egg timer online', 'count down timer'],
    howToUse: [
      'Enter the hours, minutes, and seconds for your countdown',
      'Click Start to begin counting down',
      'An alarm will sound when the timer reaches zero',
      'Use quick presets for common durations (1 min, 5 min, 10 min)',
    ],
    faqs: [
      { q: 'What happens when the timer reaches zero?', a: 'An audio alarm plays and the timer display flashes to alert you.' },
      { q: 'Can I set a timer for more than an hour?', a: 'Yes — enter any number of hours, minutes, and seconds up to 99 hours.' },
      { q: 'Does it work on mobile?', a: 'Yes — fully responsive and works on all devices and browsers.' },
    ],
    relatedSlugs: ['stopwatch', 'pomodoro-timer'],
  },
  {
    slug:        'screen-resolution',
    name:        'Screen Resolution Checker',
    href: '/screen-resolution-checker',
    category:    'utility',
    icon:        '🖥️',
    description: 'Check your screen resolution, viewport size, device pixel ratio, and browser window dimensions instantly online.',
    longDescription: 'Instantly detect your screen resolution, current browser viewport size, device pixel ratio (DPR), color depth, and orientation. Essential for web developers testing responsive layouts and designers ensuring content looks great on all screen sizes.',
    keywords: ['screen resolution checker', 'what is my screen resolution', 'viewport size checker', 'browser window size', 'display resolution', 'screen size detector', 'device pixel ratio'],
    howToUse: [
      'Your screen information is detected automatically on page load',
      'Resize your browser window to see the viewport update in real time',
      'Check the device pixel ratio for retina/HiDPI display detection',
      'Copy any value with the copy button',
    ],
    faqs: [
      { q: 'What is the difference between screen resolution and viewport?', a: 'Screen resolution is your monitor\'s total pixels. Viewport is the visible browser window area, which changes as you resize.' },
      { q: 'What is device pixel ratio?', a: 'DPR indicates how many physical pixels make up one CSS pixel. Retina displays typically have DPR of 2 or 3.' },
      { q: 'Does resizing the window update the values?', a: 'Yes — viewport width and height update in real time as you resize the browser window.' },
    ],
    relatedSlugs: ['image-resizer', 'color-picker'],
  },
  {
    slug:        'text-to-speech',
    name:        'Text to Speech',
    href: '/text-to-speech-online',
    category:    'utility',
    icon:        '🔊',
    description: 'Convert text to speech online for free. Listen to any text read aloud using your browser\'s speech synthesis. Multiple voices and speeds.',
    longDescription: 'Turn any text into spoken audio using your browser\'s built-in speech synthesis engine. Choose from all available voices on your device, adjust speaking rate and pitch, and listen instantly. Perfect for proofreading, accessibility testing, language learning, and content review.',
    keywords: ['text to speech', 'text to speech online', 'tts online', 'read text aloud', 'speech synthesis', 'convert text to audio', 'online tts free', 'text reader'],
    howToUse: [
      'Type or paste your text into the text area',
      'Select a voice from the dropdown (voices vary by device/OS)',
      'Adjust the speed and pitch sliders',
      'Click Play to hear your text spoken aloud',
    ],
    faqs: [
      { q: 'What voices are available?', a: 'Available voices depend on your operating system. Windows, Mac, iOS, and Android each include different built-in voices.' },
      { q: 'Is there a text length limit?', a: 'The Web Speech API works best with shorter texts. Very long texts may be split into segments automatically.' },
      { q: 'Can I download the audio?', a: 'Currently the tool plays audio directly. Audio download is not supported by the Web Speech API.' },
    ],
    relatedSlugs: ['word-counter', 'character-counter', 'markdown-preview'],
  },
  {
    slug:        'password-strength-checker',
    name:        'Password Strength Checker',
    href: '/password-strength-checker',
    category:    'utility',
    icon:        '🛡️',
    description: 'Check how strong your password is instantly. Get a detailed security analysis and tips to make your password stronger.',
    longDescription: 'Analyze the strength of any password instantly. Our checker evaluates length, character variety, common patterns, dictionary words, and gives you a detailed score with specific tips to improve security. All checking happens locally — your password is never sent to any server.',
    keywords: ['password strength checker', 'how strong is my password', 'password security checker', 'test password strength', 'password analyzer', 'strong password checker'],
    howToUse: [
      'Type your password into the input field',
      'See your strength score update in real time',
      'Read the specific tips to improve your password',
      'Toggle show/hide to verify what you typed',
    ],
    faqs: [
      { q: 'Is my password safe to type here?', a: 'Yes — all analysis is done locally in your browser. Your password is never sent to any server.' },
      { q: 'What makes a strong password?', a: 'Length (12+ characters), mix of uppercase, lowercase, numbers, and symbols, and avoiding dictionary words.' },
      { q: 'How is the strength score calculated?', a: 'Based on length, character variety, common patterns, sequential characters, and dictionary word detection.' },
    ],
    relatedSlugs: ['password-generator', 'uuid-generator', 'random-number-generator'],
  },
  // ── ADD THESE 3 ENTRIES TO YOUR data/tools.js ────────────────
// Find the 'utility' category tools array and add these entries.
// Place them alongside other calculator tools like percentage-calculator-online.

{
  slug:        'emi-calculator',
  name:        'EMI Calculator',
  category:    'utility',
  icon:        '🧮',
  description: 'Calculate monthly EMI for home loan, car loan, and personal loan. View amortization schedule, total interest, and payment breakdown.',
  href:        '/emi-calculator',
},
{
  slug:        'home-loan-emi-calculator',
  name:        'Home Loan EMI Calculator',
  category:    'utility',
  icon:        '🏠',
  description: 'Calculate home loan EMI for any amount and tenure. Compare SBI, HDFC, ICICI rates. Full amortization schedule included.',
  href:        '/home-loan-emi-calculator',
},
{
  slug:        'car-loan-emi-calculator',
  name:        'Car Loan EMI Calculator',
  category:    'utility',
  icon:        '🚗',
  description: 'Calculate car loan and two-wheeler loan EMI instantly. Compare bank rates and see full payment breakdown.',
  href:        '/car-loan-emi-calculator',
},
{
  slug:        'sip-calculator',
  name:        'SIP Calculator',
  category:    'utility',
  icon:        '📈',
  description: 'Calculate mutual fund SIP returns, maturity value, and wealth gained. Includes step-up SIP and lumpsum calculator with growth chart.',
  href:        '/sip-calculator',
},
{
  slug:        'invoice-generator',
  name:        'Invoice Generator',
  category:    'utility',
  icon:        '🧾',
  description: 'Create professional PDF invoices free. GST support, 6 currencies, 4 templates, discount. No signup, no watermark, unlimited invoices.',
  href:        '/invoice-generator',
},
{
  slug:        'gst-calculator',
  name:        'GST Calculator',
  category:    'utility',
  icon:        '🧮',
  description: 'Calculate GST for all rates. Add or remove GST, CGST/SGST/IGST breakdown, intra and inter-state. Free, instant, no signup.',
  href:        '/gst-calculator',
},
{
  slug:        'salary-calculator',
  name:        'Salary & Gratuity Calculator',
  category:    'utility',
  icon:        '💰',
  description: 'Calculate take-home salary, CTC breakup, old vs new tax regime, and gratuity. India 2026. Free, no signup.',
  href:        '/salary-calculator',
},
{
  slug: 'professional-tax-calculator',
  name: 'Professional Tax Calculator',
  category: 'utility',
  icon: '⚖️',
  description: 'Calculate Professional Tax for all 18 PT-levying Indian states. State-wise slabs, monthly & annual PT, take-home after deduction. Free, instant, no login.',
  href: '/professional-tax-calculator',
},
{
  slug: 'hra-calculator',
  name: 'HRA Exemption Calculator',
  category: 'utility',
  icon: '🏠',
  description: 'Calculate HRA exemption under Section 10(13A). All 3 conditions shown, 8 updated metro cities for FY 2026-27, ideal rent calculator, and tax saving estimate.',
  href: '/hra-calculator',
},
{
  slug: 'ppf-calculator',
  name: 'PPF Calculator',
  category: 'utility',
  icon: '🏦',
  description: 'Calculate PPF maturity value, year-wise interest, and tax savings at 7.1%. Full year-by-year breakdown, EEE tax status explained. Free, no login.',
  href: '/ppf-calculator',
},

{
  slug: 'fuel-bill-generator', name: 'Fuel Bill Generator',
  category: 'utility', icon: '⛽',
  description: 'Generate petrol, diesel, CNG bills for reimbursement. GST support, PDF download, WhatsApp sharing. Free, no signup.',
  href: '/fuel-bill-generator',
},
{
  slug:        'number-to-words',
  name:        'Number to Words',
  category:    'utility',
  icon:        '🔤',
  description: 'Convert any number or rupee amount to words in Indian format — Lakh, Crore. Perfect for cheques, GST invoices, and legal documents. Free, no signup.',
  href:        '/number-to-words',
},
{
  slug:        'chat-screenshot-generator',
  name:        'Chat Screenshot Generator',
  category:    'utility',
  icon:        '💬',
  description: 'Create realistic WhatsApp, iMessage, and Instagram DM chat screenshots. 10 viral templates, HD PNG export, phone frame toggle. Free, no login, nothing uploaded.',
  href:        '/chat-screenshot-generator',
},

{
  slug: 'bmi-calculator', name: 'BMI Calculator',
  category: 'health', icon: '⚖️',
  description: 'Free BMI calculator India with Indian/Asian WHO thresholds. Healthy weight range, health risk assessment.',
  href: '/bmi-calculator',
},
{
  slug: 'claude-code-token-calculator',
  name: 'Claude Code Token Calculator',
  category: 'utility',
  icon: '+-', // Lucide icon. Alternatives: 'Coins', 'Wallet', 'Receipt', 'Bot'
  description: 'Estimate your monthly Claude Code cost in seconds. Compares API, Pro, Max 5x, and Max 20x plans with INR pricing.',
  href: '/claude-code-token-calculator',
},





  // ── BATCH 3 ──────────────────────────────────────────────
  {
    slug:        'ai-prompt-generator',
    name:        'AI Prompt Generator',
    href: '/ai-prompt-generator-online',
    category:    'utility',
    icon:        '🤖',
    description: 'Generate optimized AI prompts for ChatGPT, Claude, and Gemini. Create better prompts with tone, format, and audience controls.',
    longDescription: 'Generate perfectly structured prompts tailored for each major AI model. Our AI Prompt Generator creates model-specific prompts for ChatGPT, Claude, and Gemini — each optimized for how that model best understands instructions. Set tone, output format, target audience, and context to get the best results from any AI.',
    keywords: ['ai prompt generator', 'chatgpt prompt', 'claude prompt', 'gemini prompt', 'prompt engineering', 'ai prompts', 'prompt generator free', 'better ai prompts'],
    howToUse: [
      'Describe what you want the AI to do in the task field',
      'Choose a category, tone, and output format',
      'Optionally add target audience and context',
      'Click Generate to get optimized prompts for ChatGPT, Claude, and Gemini',
    ],
    faqs: [
      { q: 'Why are the prompts different for each model?', a: 'Each AI model has different strengths. ChatGPT responds best to direct role assignments, Claude to XML-structured context, and Gemini to markdown headers and explicit format instructions.' },
      { q: 'Can I use these prompts directly?', a: 'Yes — copy any prompt and paste it directly into ChatGPT, Claude.ai, or Google Gemini.' },
      { q: 'What is prompt engineering?', a: 'The practice of crafting AI inputs to get the best possible outputs. Well-structured prompts consistently produce higher quality AI responses.' },
    ],
    relatedSlugs: ['lorem-ipsum-generator', 'word-counter', 'text-to-speech'],
  },
  {
    slug:        'text-to-handwriting',
    name:        'Text to Handwriting Generator',
    href: '/text-to-handwriting-online',
    category:    'text',
    icon:        '✍️',
    description: 'Convert typed text into realistic handwritten notes instantly. Free text to handwriting generator with notebook paper, multiple fonts, pen colors, and PNG/PDF download.',
    longDescription: 'Transform any typed text into beautiful handwritten notes with our free text to handwriting generator. Choose from 6 realistic handwriting fonts, 4 paper styles including ruled notebook paper, 6 pen colors, and customize font size, line spacing, and letter spacing. Download your handwritten notes as a high-quality PNG image or print as PDF. Perfect for school assignments, creative projects, and personalized notes. Everything runs in your browser — no uploads, no watermarks.',
    keywords: [
      'text to handwriting generator',
      'text to handwriting converter',
      'convert text to handwriting',
      'text to handwritten notes',
      'typing to handwriting generator',
      'text to handwriting pdf',
      'handwriting generator online',
      'handwriting font generator',
      'cursive text generator',
      'notebook paper generator',
    ],
    howToUse: [
      'Type or paste your text into the input area',
      'Choose a handwriting style from 6 available fonts',
      'Select your paper style and pen color',
      'Adjust font size, line spacing, and letter spacing to your liking',
      'Click Download PNG or Download PDF to save your handwritten notes',
    ],
    faqs: [
      { q: 'What is a text to handwriting generator?', a: 'A text to handwriting generator converts your typed text into realistic handwriting-style output on virtual notebook paper. It uses handwriting fonts and canvas rendering to simulate the look of real handwritten notes.' },
      { q: 'Is this tool free?', a: 'Yes, completely free with no sign-up, no watermarks, and no download limits. Use it as many times as you want.' },
      { q: 'Can I download handwritten notes as PDF?', a: 'Yes! Click the "Download PDF" button to open a print dialog where you can save your handwritten notes as a PDF file.' },
      { q: 'Can I change the handwriting style?', a: 'Yes — choose from 6 handwriting styles: Caveat (natural), Kalam (neat), Patrick Hand (clean), Dancing Script (cursive), Shadows Into Light (casual), and Indie Flower (bubbly).' },
      { q: 'Is it safe to use?', a: 'Completely safe. All processing happens locally in your browser using the Canvas API. Your text is never sent to any server.' },
    ],
    relatedSlugs: ['word-counter', 'case-converter', 'lorem-ipsum-generator'],
  },
  {
    slug:        'json-to-csv',
    name:        'JSON to CSV Converter',
    href: '/json-to-csv-converter',
    category:    'developer',
    icon:        '📊',
    description: 'Convert JSON to CSV format online for free. Paste your JSON array and instantly download a properly formatted CSV file.',
    longDescription: 'Convert JSON arrays to CSV format instantly. Handles arrays of objects, nested values, mixed keys, null values, and special characters with proper escaping. Choose your delimiter (comma, semicolon, tab, pipe) and download the result as a .csv file. Perfect for importing data into Excel, Google Sheets, or any database.',
    keywords: ['json to csv', 'convert json to csv', 'json csv converter', 'json to excel', 'parse json to csv', 'json array to csv', 'online json converter'],
    howToUse: [
      'Paste your JSON array into the input field',
      'Select your preferred delimiter (comma, semicolon, tab, or pipe)',
      'Click "Convert to CSV"',
      'Copy the output or download as a .csv file',
    ],
    faqs: [
      { q: 'What JSON formats are supported?', a: 'Arrays of objects (most common), single objects (converted to key-value pairs), and arrays with mixed or missing keys.' },
      { q: 'Does it handle special characters?', a: 'Yes — values containing commas, quotes, or newlines are automatically wrapped in quotes and escaped properly.' },
      { q: 'Can I open the CSV in Excel?', a: 'Yes — download the .csv file and open it directly in Excel, Google Sheets, or any spreadsheet application.' },
    ],
    relatedSlugs: ['json-formatter', 'base64-encoder', 'url-encoder'],
  },
  {
    slug: 'ai-prompts-seo',
    name: 'AI SEO Prompts',
    category: 'utility',
    icon: '🚀',
    description: 'Free AI prompts for keyword research, blog writing, on-page SEO, and technical audits. Works with ChatGPT, Claude, and Gemini.',
    href: '/ai-prompts/seo',
  },
  {
    slug:        'whatsapp-link-generator',
    name:        'WhatsApp Link Generator',
    href:        '/whatsapp-link-generator',
    category:    'utility',
    icon:        '💬',
    description: 'Generate WhatsApp click-to-chat links with pre-filled messages. Perfect for business cards, websites, and social bios. Free, no signup.',
    keywords:    ['whatsapp link generator', 'wa.me link', 'click to chat', 'whatsapp direct link', 'whatsapp link india'],
    relatedSlugs: ['qr-code-generator', 'url-encoder'],
  },
  {
    slug:        'pan-validator',
    name:        'PAN Card Validator',
    href:        '/pan-validator',
    category:    'utility',
    icon:        '🪪',
    description: 'Validate any PAN card number instantly. Check PAN format, identify holder type (Individual, Company, HUF), and decode PAN structure. Free, India-specific.',
    keywords:    ['pan card validator', 'pan number validator', 'verify pan card', 'pan card format', 'pan card check india'],
    relatedSlugs: ['gst-calculator', 'salary-calculator', 'professional-tax-calculator'],
  },
  {
    slug:        'ifsc-finder',
    name:        'IFSC Code Finder',
    href:        '/ifsc-finder',
    category:    'utility',
    icon:        '🏦',
    description: 'Find bank branch details by IFSC code. Get bank name, branch address, city, MICR, and SWIFT code. Covers all Indian banks. Free, instant.',
    keywords:    ['ifsc code finder', 'ifsc code search', 'bank branch ifsc', 'ifsc code india', 'find ifsc code'],
    relatedSlugs: ['gst-calculator', 'emi-calculator', 'salary-calculator'],
  },
  {
    slug:        'gst-number-validator',
    name:        'GST Number Validator',
    href:        '/gst-number-validator',
    category:    'utility',
    icon:        '🧾',
    description: 'Validate any GSTIN (GST number) instantly. Check format, decode state code, entity type, and embedded PAN. Covers all Indian states. Free, no signup.',
    keywords:    ['gst number validator', 'gstin validator', 'verify gstin', 'gst number check india', 'gstin format check'],
    relatedSlugs: ['gst-calculator', 'pan-validator', 'professional-tax-calculator'],
  },
  {
    slug:        'epf-calculator',
    name:        'EPF Calculator',
    href:        '/epf-calculator',
    category:    'utility',
    icon:        '💰',
    description: 'Calculate EPF/PF balance at retirement, monthly PF deductions, and EPS pension. Uses current EPFO interest rate of 8.25%. Free, India-specific.',
    keywords:    ['epf calculator', 'pf calculator india', 'epf balance calculator', 'provident fund calculator', 'epf interest calculator'],
    relatedSlugs: ['salary-calculator', 'hra-calculator', 'ppf-calculator'],
  },
  {
    slug:        'jwt-decoder-online',
    name:        'JWT Decoder',
    href:        '/jwt-decoder-online',
    category:    'developer',
    icon:        '🔑',
    description: 'Decode JWT tokens instantly in your browser. View header, payload claims, expiry time, and signature. 100% browser-based — no data sent to servers.',
    keywords:    ['jwt decoder', 'jwt decoder online', 'decode jwt token', 'json web token decoder', 'jwt inspector'],
    relatedSlugs: ['base64-encoder', 'json-formatter', 'url-encoder'],
  },
];

/**
 * Get a tool by its slug
 * @param {string} slug
 * @returns {Tool|undefined}
 */
export function getToolBySlug(slug) {
  return tools.find(t => t.slug === slug);
}

/**
 * Get tools by category
 * @param {string} category
 * @returns {Tool[]}
 */
export function getToolsByCategory(category) {
  return tools.filter(t => t.category === category);
}

/**
 * Get related tools for a given tool
 * @param {Tool} tool
 * @returns {Tool[]}
 */
export function getRelatedTools(tool) {
  return (tool.relatedSlugs || [])
    .map(slug => tools.find(t => t.slug === slug))
    .filter(Boolean)
    .slice(0, 4);
}

/**
 * Category metadata
 */
export const categories = [
  { id: 'image',     label: 'Image Tools',     icon: '🖼️',  color: 'accent-image',     description: 'Compress, resize, and convert images' },
  { id: 'text',      label: 'Text Tools',       icon: '📝',  color: 'accent-text',      description: 'Word counting, case conversion, and analysis' },
  { id: 'developer', label: 'Developer Tools',  icon: '💻',  color: 'accent-developer', description: 'JSON, Base64, UUID, and more' },
  { id: 'seo',       label: 'SEO Tools',        icon: '🔍',  color: 'accent-seo',       description: 'Optimize your content for search engines' },
  { id: 'utility',   label: 'Utility Tools',    icon: '🛠️',  color: 'accent-utility',   description: 'QR codes, passwords, and random generators' },
  { id: 'health',   label: 'Health Tools',    icon: '🏥',  color: 'emerald',   description: 'Free health calculators for India — BMI, ideal weight, calorie intake, and more.' },

];

/**
 * Category color mapping for Tailwind (must use full class names for purge)
 */
export const categoryColors = {
  image:     { bg: 'bg-amber-50',    text: 'text-amber-700',   border: 'border-amber-200',  dot: 'bg-amber-400'   },
  text:      { bg: 'bg-emerald-50',  text: 'text-emerald-700', border: 'border-emerald-200',dot: 'bg-emerald-400' },
  developer: { bg: 'bg-blue-50',     text: 'text-blue-700',    border: 'border-blue-200',   dot: 'bg-blue-400'    },
  seo:       { bg: 'bg-pink-50',     text: 'text-pink-700',    border: 'border-pink-200',   dot: 'bg-pink-400'    },
  utility:   { bg: 'bg-violet-50',   text: 'text-violet-700',  border: 'border-violet-200', dot: 'bg-violet-400'  },
  health:    { border: 'border-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-700' },
};
