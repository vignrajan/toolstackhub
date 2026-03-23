export const blogPosts = [
    {
      slug:        'how-to-remove-duplicate-lines-from-text',
      title:       'How to Remove Duplicate Lines from Text (Easy Guide)',
      metaTitle:   'How to Remove Duplicate Lines from Text (Easy Guide)',
      metaDesc:    'Learn how to remove duplicate lines from text instantly. Clean keyword lists, email data, and CSV files in seconds. Free tool included — no signup needed.',
      excerpt:     'Duplicate lines in your text waste time and corrupt your data. Learn the fastest ways to remove them — including a free browser-based tool that does it in one click.',
      category:    'Text Tools',
      categorySlug:'text-tools',
      author:      'ToolStackHub Team',
      publishedAt: '2026-03-21',
      updatedAt:   '2026-03-21',
      readTime:    7,
      coverEmoji:  '🧹',
      coverBg:     'from-emerald-500 to-teal-600',
      tags:        ['text cleaning', 'productivity', 'data cleaning', 'tools'],
      toolUrl:     '/remove-duplicate-lines-online',
      toolName:    'Remove Duplicate Lines Tool',
      featured:    true,
    },
    {
      slug:        'how-to-check-typing-speed-online',
      title:       'How to Check Your Typing Speed Online (Free WPM Test)',
      metaTitle:   'How to Check Your Typing Speed Online (Free WPM Test)',
      metaDesc:    'Learn how to check your typing speed online for free. Measure WPM, accuracy, and errors in real time. Tips to improve from 40 to 80 WPM included.',
      excerpt:     'Most people have no idea how fast they actually type. This guide shows you how to check your WPM in 2 minutes — and the 6 techniques that improve it fastest.',
      category:    'Typing & Productivity',
      categorySlug:'productivity',
      author:      'ToolStackHub Team',
      publishedAt: '2026-03-23',
      updatedAt:   '2026-03-23',
      readTime:    8,
      coverEmoji:  '⌨️',
      coverBg:     'from-brand-500 to-violet-600',
      tags:        ['typing', 'productivity', 'wpm', 'speed test'],
      toolUrl:     '/typing-test',
      toolName:    'Typing Speed Test',
      featured:    true,
    },
    {
        slug:        'how-to-compress-images-without-losing-quality',
        title:       'How to Compress Images Without Losing Quality (Free Guide)',
        metaTitle:   'How to Compress Images Without Losing Quality (Free Guide)',
        metaDesc:    'Learn how to compress images without losing quality. Reduce file size by up to 90% free. Works for JPG, PNG, and WebP. No signup needed. Try now.',
        excerpt:     'A single uncompressed image can be the difference between a page that loads in 1 second and one that takes 6. This guide covers every method — with a free one-click tool.',
        category:    'Image Tools',
        categorySlug:'image-tools',
        author:      'ToolStackHub Team',
        publishedAt: '2026-03-23',
        updatedAt:   '2026-03-23',
        readTime:    9,
        coverEmoji:  '🗜️',
        coverBg:     'from-orange-500 to-rose-500',
        tags:        ['image compression', 'web performance', 'seo', 'page speed'],
        toolUrl:     '/compress-image-online',
        toolName:    'Compress Image Online',
        featured:    true,
      },
      {
        slug:        'how-to-minify-json-for-faster-api-responses',
        title:       'How to Minify JSON for Faster API Responses (Free Guide)',
        metaTitle:   'How to Minify JSON for Faster API Responses (Free Guide)',
        metaDesc:    'Learn how to minify JSON files to reduce API response size by up to 40%. Free online tool, code examples in JavaScript, Python, Go, and curl. No signup.',
        excerpt:     'Pretty-printed JSON is developer-friendly. Production APIs are not the place for it. Every space and newline is bytes your users wait to download. Here is how to strip them.',
        category:    'Developer Tools',
        categorySlug:'developer-tools',
        author:      'ToolStackHub Team',
        publishedAt: '2026-03-23',
        updatedAt:   '2026-03-23',
        readTime:    8,
        coverEmoji:  '{ }',
        coverBg:     'from-violet-600 to-indigo-600',
        tags:        ['json', 'api', 'performance', 'developer tools'],
        toolUrl:     '/json-formatter-online',
        toolName:    'JSON Formatter & Minifier',
        featured:    true,
      },



  ];
  
  export function getPostBySlug(slug) {
    return blogPosts.find(p => p.slug === slug) || null;
  }
  
  export function getFeaturedPosts() {
    return blogPosts.filter(p => p.featured);
  }
  
  export function getPostsByCategory(categorySlug) {
    return blogPosts.filter(p => p.categorySlug === categorySlug);
  }
  
  export function getRelatedPosts(currentSlug, limit = 3) {
    return blogPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
  }