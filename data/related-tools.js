/**
 * INTERNAL LINKING CLUSTERS
 * ─────────────────────────────────────────────────────────────
 * Each tool maps to:
 *   - related: tools in the same functional cluster (strongest SEO signal)
 *   - seeAlso: cross-category tools that make sense contextually
 *   - badge: Hot | New | Top | Popular (for Popular Tools section)
 *   - monthlySearches: estimated monthly search volume
 *   - trending: boolean — shows in Popular Tools section
 */

export const TOOL_META = {
    // ── Image Tools ───────────────────────────────────────────
    'compress-image-online': {
      name:          'Compress Image Online',
      icon:          '🗜️',
      category:      'image',
      badge:         'Hot',
      monthlySearches: '450k',
      trending:      true,
      related: [
        { slug: 'resize-image-online',         label: 'Resize Image Online',      reason: 'Resize after compressing for exact dimensions' },
        { slug: 'jpg-to-png-converter-online', label: 'JPG to PNG Converter',     reason: 'Convert format before or after compression' },
        { slug: 'image-to-pdf-converter-online',label: 'Image to PDF Converter',  reason: 'Combine compressed images into one PDF' },
      ],
      seeAlso: [
        { slug: 'color-picker-online',         label: 'Color Picker Online',      reason: 'Get exact color codes from your images' },
        { slug: 'meta-tag-generator-online',   label: 'Meta Tag Generator',       reason: 'Add proper image meta tags to your pages' },
      ],
    },
    'resize-image-online': {
      name:          'Resize Image Online',
      icon:          '📐',
      category:      'image',
      badge:         'Popular',
      monthlySearches: '380k',
      trending:      true,
      related: [
        { slug: 'compress-image-online',        label: 'Compress Image Online',   reason: 'Reduce file size after resizing' },
        { slug: 'jpg-to-png-converter-online',  label: 'JPG to PNG Converter',    reason: 'Convert format after resizing' },
        { slug: 'image-to-pdf-converter-online',label: 'Image to PDF Converter',  reason: 'Convert resized images to PDF' },
      ],
      seeAlso: [
        { slug: 'screen-resolution-checker',   label: 'Screen Resolution Checker', reason: 'Check your screen dimensions before resizing' },
        { slug: 'color-picker-online',         label: 'Color Picker Online',       reason: 'Pick colors from your images' },
      ],
    },
    'jpg-to-png-converter-online': {
      name:          'JPG to PNG Converter',
      icon:          '🔄',
      category:      'image',
      badge:         'Top',
      monthlySearches: '220k',
      trending:      false,
      related: [
        { slug: 'compress-image-online',        label: 'Compress Image Online',    reason: 'Compress your PNG after converting' },
        { slug: 'resize-image-online',          label: 'Resize Image Online',      reason: 'Resize to exact dimensions after converting' },
        { slug: 'image-to-pdf-converter-online',label: 'Image to PDF Converter',   reason: 'Turn your converted PNG into a PDF' },
      ],
      seeAlso: [
        { slug: 'color-picker-online',          label: 'Color Picker Online',      reason: 'Sample colors from your converted image' },
        { slug: 'meta-tag-generator-online',    label: 'Meta Tag Generator',       reason: 'Add OG image tags for your PNG assets' },
      ],
    },
    'image-to-pdf-converter-online': {
      name:          'Image to PDF Converter',
      icon:          '📄',
      category:      'image',
      badge:         'Popular',
      monthlySearches: '300k',
      trending:      true,
      related: [
        { slug: 'compress-image-online',        label: 'Compress Image Online',    reason: 'Compress images before converting to PDF' },
        { slug: 'resize-image-online',          label: 'Resize Image Online',      reason: 'Resize to A4 or standard size first' },
        { slug: 'jpg-to-png-converter-online',  label: 'JPG to PNG Converter',     reason: 'Convert image format before creating PDF' },
      ],
      seeAlso: [
        { slug: 'qr-code-generator-online',     label: 'QR Code Generator',        reason: 'Add QR codes to your PDF documents' },
        { slug: 'url-encoder-online',           label: 'URL Encoder Online',        reason: 'Encode URLs for links inside your PDF' },
      ],
    },
  
    // ── Text Tools ────────────────────────────────────────────
    'word-counter-online': {
      name:          'Word Counter Online',
      icon:          '📝',
      category:      'text',
      badge:         'Hot',
      monthlySearches: '120k',
      trending:      true,
      related: [
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Count characters alongside words' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Change text case after counting' },
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',   reason: 'Clean text before final word count' },
      ],
      seeAlso: [
        { slug: 'typing-test',                   label: 'Typing Speed Test',        reason: 'Test how fast you type your content' },
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',    reason: 'Generate placeholder text of exact word count' },
      ],
    },
    'character-counter-online': {
      name:          'Character Counter Online',
      icon:          '🔢',
      category:      'text',
      badge:         'Popular',
      monthlySearches: '90k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words alongside characters' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Change text case and recount' },
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',   reason: 'Clean up text before counting' },
      ],
      seeAlso: [
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',       reason: 'Stay within 160-char meta description limit' },
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',    reason: 'Generate filler text to test character limits' },
      ],
    },
    'case-converter-online': {
      name:          'Case Converter Online',
      icon:          '🔡',
      category:      'text',
      badge:         'Popular',
      monthlySearches: '80k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words after converting case' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Verify length after case conversion' },
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',   reason: 'Deduplicate text after normalizing case' },
      ],
      seeAlso: [
        { slug: 'slug-generator',                label: 'Slug Generator',           reason: 'Convert titles to URL-friendly lowercase slugs' },
        { slug: 'text-to-handwriting-online',    label: 'Text to Handwriting',      reason: 'Convert your cased text to handwriting style' },
      ],
    },
    'lorem-ipsum-generator': {
      name:          'Lorem Ipsum Generator',
      icon:          '📄',
      category:      'text',
      badge:         'Top',
      monthlySearches: '70k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words in your generated placeholder text' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Measure character count of generated text' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Change the case of generated text' },
      ],
      seeAlso: [
        { slug: 'typing-test',                   label: 'Typing Speed Test',        reason: 'Use generated text as a custom typing practice passage' },
        { slug: 'markdown-editor-online',        label: 'Markdown Editor Online',   reason: 'Paste generated text into your markdown drafts' },
      ],
    },
    'text-to-handwriting-online': {
      name:          'Text to Handwriting',
      icon:          '✍️',
      category:      'text',
      badge:         'New',
      monthlySearches: '110k',
      trending:      true,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Check content length before converting' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Normalize text case before converting' },
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',    reason: 'Generate practice text to convert to handwriting' },
      ],
      seeAlso: [
        { slug: 'image-to-pdf-converter-online', label: 'Image to PDF Converter',   reason: 'Convert your handwriting image to PDF' },
        { slug: 'compress-image-online',         label: 'Compress Image Online',    reason: 'Compress the handwriting image before sharing' },
      ],
    },
    'markdown-editor-online': {
      name:          'Markdown Editor Online',
      icon:          '📋',
      category:      'text',
      badge:         'Top',
      monthlySearches: '60k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words in your markdown document' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Track character count while writing' },
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',    reason: 'Add placeholder content to your markdown' },
      ],
      seeAlso: [
        { slug: 'html-formatter-online',         label: 'HTML Formatter Online',    reason: 'Format the HTML output from your markdown' },
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',       reason: 'Add SEO meta tags to your published markdown page' },
      ],
    },
    'text-to-speech-online': {
      name:          'Text to Speech Online',
      icon:          '🔊',
      category:      'text',
      badge:         'Popular',
      monthlySearches: '85k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Estimate speaking time using word count' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Check text length before converting to speech' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Normalize text before converting to speech' },
      ],
      seeAlso: [
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',    reason: 'Generate test text to preview speech output' },
        { slug: 'typing-test',                   label: 'Typing Speed Test',        reason: 'Test how fast you type what you dictate' },
      ],
    },
    'remove-duplicate-lines-online': {
      name:          'Remove Duplicate Lines',
      icon:          '🧹',
      category:      'text',
      badge:         'Top',
      monthlySearches: '55k',
      trending:      false,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words after removing duplicates' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Measure size reduction after deduplication' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',    reason: 'Normalize case before or after deduplication' },
      ],
      seeAlso: [
        { slug: 'sort-text-online',              label: 'Sort Text Online',         reason: 'Sort your deduplicated list alphabetically' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',    reason: 'Clean up JSON arrays with duplicate values' },
      ],
    },
  
    // ── Developer Tools ───────────────────────────────────────
    'json-formatter-online': {
      name:          'JSON Formatter Online',
      icon:          '{ }',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '200k',
      trending:      true,
      related: [
        { slug: 'json-to-csv-converter',         label: 'JSON to CSV Converter',   reason: 'Convert your formatted JSON to CSV for spreadsheets' },
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode JSON payloads for API transmission' },
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'Encode URLs found inside your JSON fields' },
      ],
      seeAlso: [
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Extract specific fields from JSON with regex' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate UUID values for JSON ID fields' },
      ],
    },
    'json-to-csv-converter': {
      name:          'JSON to CSV Converter',
      icon:          '📊',
      category:      'developer',
      badge:         'Popular',
      monthlySearches: '95k',
      trending:      false,
      related: [
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Validate and format JSON before converting' },
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode the CSV output for safe transmission' },
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'Encode URL values found in your data' },
      ],
      seeAlso: [
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',  reason: 'Remove duplicate CSV rows after conversion' },
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Count words in converted CSV content' },
      ],
    },
    'base64-encoder-online': {
      name:          'Base64 Encoder Online',
      icon:          '🔡',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '70k',
      trending:      false,
      related: [
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'URL encode Base64 strings for query parameters' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON containing Base64 encoded fields' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate random IDs to encode in Base64' },
      ],
      seeAlso: [
        { slug: 'password-generator-online',     label: 'Password Generator',      reason: 'Generate secrets to encode in Base64 for auth headers' },
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Validate Base64 strings with regex patterns' },
      ],
    },
    'url-encoder-online': {
      name:          'URL Encoder Online',
      icon:          '🔗',
      category:      'developer',
      badge:         'Popular',
      monthlySearches: '45k',
      trending:      false,
      related: [
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Use Base64 as an alternative encoding method' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON that contains encoded URLs' },
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Test URL patterns with regex' },
      ],
      seeAlso: [
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Generate canonical URLs for your pages' },
        { slug: 'qr-code-generator-online',      label: 'QR Code Generator',       reason: 'Encode URLs as QR codes for mobile access' },
      ],
    },
    'uuid-generator-online': {
      name:          'UUID Generator Online',
      icon:          '🆔',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '80k',
      trending:      false,
      related: [
        { slug: 'password-generator-online',     label: 'Password Generator',      reason: 'Generate secure passwords alongside UUIDs' },
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Generate random numbers for test data' },
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode UUID values for API transmission' },
      ],
      seeAlso: [
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON records containing UUID primary keys' },
        { slug: 'unix-timestamp-converter',      label: 'Timestamp Converter',     reason: 'Pair UUIDs with timestamps for record creation' },
      ],
    },
    'unix-timestamp-converter': {
      name:          'Unix Timestamp Converter',
      icon:          '⏱️',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '60k',
      trending:      false,
      related: [
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format API responses containing timestamp fields' },
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Decode JWT tokens containing timestamp claims' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate UUIDs to pair with timestamp records' },
      ],
      seeAlso: [
        { slug: 'age-calculator-online',         label: 'Age Calculator Online',   reason: 'Calculate durations between dates' },
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Extract timestamps from log files with regex' },
      ],
    },
    'regex-tester-online': {
      name:          'Regex Tester Online',
      icon:          '🔍',
      category:      'developer',
      badge:         'Popular',
      monthlySearches: '30k',
      trending:      false,
      related: [
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON before extracting data with regex' },
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'Encode URL patterns for regex testing' },
        { slug: 'css-minifier-online',           label: 'CSS Minifier Online',     reason: 'Minify CSS after regex-based find and replace' },
      ],
      seeAlso: [
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',  reason: 'Remove lines matching a pattern from your text' },
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode data extracted by your regex patterns' },
      ],
    },
    'css-minifier-online': {
      name:          'CSS Minifier Online',
      icon:          '⚡',
      category:      'developer',
      badge:         'Popular',
      monthlySearches: '45k',
      trending:      false,
      related: [
        { slug: 'html-formatter-online',         label: 'HTML Formatter Online',   reason: 'Minify HTML alongside your CSS' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Minify JSON config files with your CSS' },
        { slug: 'color-picker-online',           label: 'Color Picker Online',     reason: 'Get color codes to add to your CSS' },
      ],
      seeAlso: [
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Test CSS selector patterns before minifying' },
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Add theme-color CSS values to your meta tags' },
      ],
    },
    'html-formatter-online': {
      name:          'HTML Formatter Online',
      icon:          '🔤',
      category:      'developer',
      badge:         'Popular',
      monthlySearches: '40k',
      trending:      false,
      related: [
        { slug: 'css-minifier-online',           label: 'CSS Minifier Online',     reason: 'Minify CSS in your HTML files' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON embedded in your HTML pages' },
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'Encode URLs used in your HTML attributes' },
      ],
      seeAlso: [
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Generate meta tags to add to your HTML head' },
        { slug: 'color-picker-online',           label: 'Color Picker Online',     reason: 'Get color codes for your HTML inline styles' },
      ],
    },
    'color-picker-online': {
      name:          'Color Picker Online',
      icon:          '🎨',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '60k',
      trending:      true,
      related: [
        { slug: 'css-minifier-online',           label: 'CSS Minifier Online',     reason: 'Add your color codes to CSS and minify' },
        { slug: 'html-formatter-online',         label: 'HTML Formatter Online',   reason: 'Format HTML that uses your color values' },
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Set theme-color meta tag with your picked color' },
      ],
      seeAlso: [
        { slug: 'compress-image-online',         label: 'Compress Image Online',   reason: 'Optimize images after using your color scheme' },
        { slug: 'qr-code-generator-online',      label: 'QR Code Generator',       reason: 'Create colored QR codes using your picked color' },
      ],
    },
    'binary-to-decimal-converter': {
      name:          'Binary Converter',
      icon:          '💻',
      category:      'developer',
      badge:         'Top',
      monthlySearches: '50k',
      trending:      false,
      related: [
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode binary data as ASCII text' },
        { slug: 'json-formatter-online',         label: 'JSON Formatter Online',   reason: 'Format JSON with hex and decimal values' },
        { slug: 'color-picker-online',           label: 'Color Picker Online',     reason: 'Convert hex color codes to other formats' },
      ],
      seeAlso: [
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate 128-bit hex identifiers' },
        { slug: 'regex-tester-online',           label: 'Regex Tester Online',     reason: 'Validate binary and hex patterns' },
      ],
    },
  
    // ── SEO Tools ─────────────────────────────────────────────
    'meta-tag-generator-online': {
      name:          'Meta Tag Generator',
      icon:          '🏷️',
      category:      'seo',
      badge:         'Hot',
      monthlySearches: '35k',
      trending:      true,
      related: [
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Verify meta description stays under 160 chars' },
        { slug: 'word-counter-online',           label: 'Word Counter Online',      reason: 'Count words in your page title and description' },
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',       reason: 'Encode canonical URLs with special characters' },
      ],
      seeAlso: [
        { slug: 'compress-image-online',         label: 'Compress Image Online',    reason: 'Optimize Open Graph images before using the URL' },
        { slug: 'resize-image-online',           label: 'Resize Image Online',      reason: 'Resize OG images to exact 1200×630px' },
      ],
    },
  
    // ── Utility Tools ─────────────────────────────────────────
    'qr-code-generator-online': {
      name:          'QR Code Generator',
      icon:          '📱',
      category:      'utility',
      badge:         'Hot',
      monthlySearches: '180k',
      trending:      true,
      related: [
        { slug: 'url-encoder-online',            label: 'URL Encoder Online',      reason: 'Encode complex URLs before generating QR codes' },
        { slug: 'compress-image-online',         label: 'Compress Image Online',   reason: 'Compress QR code images for faster loading' },
        { slug: 'image-to-pdf-converter-online', label: 'Image to PDF Converter',  reason: 'Embed QR codes into PDF documents' },
      ],
      seeAlso: [
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Add proper meta tags to your QR code landing page' },
        { slug: 'color-picker-online',           label: 'Color Picker Online',     reason: 'Pick brand colors for custom QR code styling' },
      ],
    },
    'password-generator-online': {
      name:          'Password Generator',
      icon:          '🔐',
      category:      'utility',
      badge:         'Hot',
      monthlySearches: '150k',
      trending:      true,
      related: [
        { slug: 'password-strength-checker',     label: 'Password Strength Checker', reason: 'Test how strong your generated password is' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate UUIDs for API tokens and session IDs' },
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Generate random numbers for PIN codes' },
      ],
      seeAlso: [
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode passwords for HTTP auth headers' },
        { slug: 'qr-code-generator-online',      label: 'QR Code Generator',       reason: 'Share passwords securely via QR code' },
      ],
    },
    'password-strength-checker': {
      name:          'Password Strength Checker',
      icon:          '🛡️',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '25k',
      trending:      false,
      related: [
        { slug: 'password-generator-online',     label: 'Password Generator',      reason: 'Generate a stronger password if yours is weak' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Use UUIDs as unpredictable random passwords' },
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Add random numbers to strengthen your password' },
      ],
      seeAlso: [
        { slug: 'base64-encoder-online',         label: 'Base64 Encoder Online',   reason: 'Encode your password for Basic Auth headers' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Check your password length meets requirements' },
      ],
    },
    'random-number-generator': {
      name:          'Random Number Generator',
      icon:          '🎲',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '35k',
      trending:      false,
      related: [
        { slug: 'password-generator-online',     label: 'Password Generator',      reason: 'Generate full secure passwords using randomness' },
        { slug: 'uuid-generator-online',         label: 'UUID Generator Online',   reason: 'Generate cryptographically random unique IDs' },
        { slug: 'percentage-calculator-online',  label: 'Percentage Calculator',   reason: 'Calculate percentages of your random numbers' },
      ],
      seeAlso: [
        { slug: 'age-calculator-online',         label: 'Age Calculator Online',   reason: 'Calculate time between random date values' },
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Set timers for random interval challenges' },
      ],
    },
    'age-calculator-online': {
      name:          'Age Calculator Online',
      icon:          '🎂',
      category:      'utility',
      badge:         'Top',
      monthlySearches: '80k',
      trending:      true,
      related: [
        { slug: 'unix-timestamp-converter',      label: 'Timestamp Converter',     reason: 'Convert birth dates to Unix timestamps' },
        { slug: 'percentage-calculator-online',  label: 'Percentage Calculator',   reason: 'Calculate age-related percentage milestones' },
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Count down to your next birthday' },
      ],
      seeAlso: [
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Generate random ages for data testing' },
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Count words in birthday messages' },
      ],
    },
    'percentage-calculator-online': {
      name:          'Percentage Calculator',
      icon:          '📊',
      category:      'utility',
      badge:         'Top',
      monthlySearches: '70k',
      trending:      true,
      related: [
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Generate sample numbers to calculate percentages of' },
        { slug: 'age-calculator-online',         label: 'Age Calculator Online',   reason: 'Calculate age as a percentage of lifespan' },
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Calculate what percentage of a word count you have written' },
      ],
      seeAlso: [
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Track percentage progress toward a deadline' },
        { slug: 'unix-timestamp-converter',      label: 'Timestamp Converter',     reason: 'Convert date ranges for percentage change calculations' },
      ],
    },
    'pomodoro-timer-online': {
      name:          'Pomodoro Timer Online',
      icon:          '🍅',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '45k',
      trending:      false,
      related: [
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Set custom countdown timers between Pomodoro sessions' },
        { slug: 'online-stopwatch',              label: 'Online Stopwatch',        reason: 'Track elapsed time during focus sessions' },
        { slug: 'typing-test',                   label: 'Typing Speed Test',       reason: 'Test your typing speed during a Pomodoro session' },
      ],
      seeAlso: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Measure your writing output per Pomodoro session' },
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Pick a random task to start your next Pomodoro' },
      ],
    },
    'countdown-timer-online': {
      name:          'Countdown Timer Online',
      icon:          '⏳',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '35k',
      trending:      false,
      related: [
        { slug: 'pomodoro-timer-online',         label: 'Pomodoro Timer Online',   reason: 'Use Pomodoro method for structured focus sessions' },
        { slug: 'online-stopwatch',              label: 'Online Stopwatch',        reason: 'Count upward after your countdown ends' },
        { slug: 'age-calculator-online',         label: 'Age Calculator Online',   reason: 'Calculate time until your next birthday or deadline' },
      ],
      seeAlso: [
        { slug: 'random-number-generator',       label: 'Random Number Generator', reason: 'Set random countdown intervals for interval training' },
        { slug: 'typing-test',                   label: 'Typing Speed Test',       reason: 'Practice timed typing with the same countdown concept' },
      ],
    },
    'online-stopwatch': {
      name:          'Online Stopwatch',
      icon:          '⏱️',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '40k',
      trending:      false,
      related: [
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Count down instead of counting up' },
        { slug: 'pomodoro-timer-online',         label: 'Pomodoro Timer Online',   reason: 'Use structured focus intervals with your stopwatch' },
        { slug: 'typing-test',                   label: 'Typing Speed Test',       reason: 'Time your typing practice sessions precisely' },
      ],
      seeAlso: [
        { slug: 'age-calculator-online',         label: 'Age Calculator Online',   reason: 'Calculate total elapsed time between two dates' },
        { slug: 'unix-timestamp-converter',      label: 'Timestamp Converter',     reason: 'Convert stopwatch readings to Unix timestamps' },
      ],
    },
    'screen-resolution-checker': {
      name:          'Screen Resolution Checker',
      icon:          '🖥️',
      category:      'utility',
      badge:         'Popular',
      monthlySearches: '20k',
      trending:      false,
      related: [
        { slug: 'resize-image-online',           label: 'Resize Image Online',     reason: 'Resize images to match your screen resolution' },
        { slug: 'compress-image-online',         label: 'Compress Image Online',   reason: 'Optimize images for your detected screen size' },
        { slug: 'color-picker-online',           label: 'Color Picker Online',     reason: 'Check color display on your detected screen' },
      ],
      seeAlso: [
        { slug: 'css-minifier-online',           label: 'CSS Minifier Online',     reason: 'Optimize CSS for different screen size breakpoints' },
        { slug: 'meta-tag-generator-online',     label: 'Meta Tag Generator',      reason: 'Add viewport meta tags based on your screen data' },
      ],
    },
    'ai-prompt-generator-online': {
      name:          'AI Prompt Generator',
      icon:          '🤖',
      category:      'utility',
      badge:         'New',
      monthlySearches: '35k',
      trending:      true,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Count words in your AI-generated content' },
        { slug: 'character-counter-online',      label: 'Character Counter Online', reason: 'Check AI output against character limits' },
        { slug: 'case-converter-online',         label: 'Case Converter Online',   reason: 'Format headings in AI-generated content' },
      ],
      seeAlso: [
        { slug: 'text-to-speech-online',         label: 'Text to Speech Online',   reason: 'Listen to your AI-generated content aloud' },
        { slug: 'remove-duplicate-lines-online', label: 'Remove Duplicate Lines',  reason: 'Clean up repeated lines in AI-generated lists' },
      ],
    },
    'typing-test': {
      name:          'Typing Speed Test',
      icon:          '⌨️',
      category:      'utility',
      badge:         'New',
      monthlySearches: '3500k',
      trending:      true,
      related: [
        { slug: 'word-counter-online',           label: 'Word Counter Online',     reason: 'Count words in your typed content' },
        { slug: 'pomodoro-timer-online',         label: 'Pomodoro Timer Online',   reason: 'Use Pomodoro sessions for typing practice' },
        { slug: 'countdown-timer-online',        label: 'Countdown Timer Online',  reason: 'Set custom timed typing challenges' },
      ],
      seeAlso: [
        { slug: 'lorem-ipsum-generator',         label: 'Lorem Ipsum Generator',   reason: 'Generate custom passages for typing practice' },
        { slug: 'online-stopwatch',              label: 'Online Stopwatch',        reason: 'Track your typing practice time precisely' },
      ],
    },
  };
  
  // ── Popular Tools list (for homepage section) ─────────────────
  export const POPULAR_TOOLS = Object.entries(TOOL_META)
    .filter(([, meta]) => meta.trending)
    .map(([slug, meta]) => ({ slug, ...meta }))
    .sort((a, b) => {
      const order = ['3500k','450k','380k','300k','220k','200k','180k','150k','110k','80k','70k','60k','35k'];
      return order.indexOf(a.monthlySearches) - order.indexOf(b.monthlySearches);
    });
  
  // ── Get related tools for a given slug ───────────────────────
  export function getRelatedTools(slug) {
    const meta = TOOL_META[slug];
    if (!meta) return { related: [], seeAlso: [] };
    return {
      related: meta.related || [],
      seeAlso: meta.seeAlso || [],
    };
  }