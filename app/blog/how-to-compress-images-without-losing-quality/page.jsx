import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

const POST = {
  slug:        'how-to-compress-images-without-losing-quality',
  title:       'How to Compress Images Without Losing Quality (Free Guide)',
  metaDesc:    'Learn how to compress images without losing quality. Reduce file size by up to 90% free. Works for JPG, PNG, and WebP. No signup needed. Try now.',
  category:    'Image Tools',
  categorySlug:'image-tools',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-23',
  updatedAt:   '2026-03-23',
  readTime:    9,
  coverEmoji:  '🗜️',
  coverBg:     'from-orange-500 to-rose-500',
};

export const metadata = {
  title:       `${POST.title} | ToolStackHub Blog`,
  description:  POST.metaDesc,
  alternates: { canonical: `${SITE_CONFIG.url}/blog/${POST.slug}` },
  openGraph: {
    title:       POST.title,
    description: POST.metaDesc,
    url:        `${SITE_CONFIG.url}/blog/${POST.slug}`,
    type:        'article',
    siteName:    SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    publishedTime: POST.publishedAt,
    modifiedTime:  POST.updatedAt,
    authors:       [POST.author],
  },
  twitter: {
    card:        'summary_large_image',
    title:        POST.title,
    description:  POST.metaDesc,
    creator:      SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'Can I compress images without losing quality?',
    a: 'Yes — but it depends on the format and method. Lossless compression (used for PNG and WebP) removes metadata and redundant data without touching a single pixel. Lossy compression (used for JPEG) discards some pixel data but is invisible to the human eye at quality settings of 75–85%. Our free tool uses smart compression that produces 40–90% smaller files with no visible quality difference.',
  },
  {
    q: 'What is the difference between lossy and lossless compression?',
    a: 'Lossless compression reduces file size without removing any image data — the decompressed image is pixel-for-pixel identical to the original. It typically achieves 10–30% reduction. Lossy compression permanently discards some pixel data that the human eye is unlikely to notice — it typically achieves 40–90% reduction. For web use, lossy at 75–85% quality is standard. For archival or print use, lossless is preferred.',
  },
  {
    q: 'How much can I compress a JPEG without visible quality loss?',
    a: 'Most JPEG images can be compressed to 60–75% quality with no visible difference on screen. A quality setting of 80% is the standard "safe" threshold where compression is invisible to most viewers. Below 50% quality, artifacts (blocky patterns and blurring) become visible in detailed areas. Our tool applies smart per-image compression rather than a fixed quality percentage.',
  },
  {
    q: 'Should I compress PNG or convert to JPEG first?',
    a: 'It depends on the image content. For photographs and images with gradients: convert to JPEG or WebP for the smallest file size. PNG compression on photos is inefficient. For logos, icons, screenshots, and images with text or flat colors: keep as PNG and apply lossless compression. Converting these to JPEG introduces blocky compression artifacts that are especially visible around text and sharp edges.',
  },
  {
    q: 'How does image compression affect Google page speed?',
    a: 'Image compression has one of the highest impacts on Core Web Vitals scores. Images are the largest page resources on most websites — often 60–80% of total page weight. Reducing image file sizes directly improves Largest Contentful Paint (LCP), which Google uses as a ranking signal in its Core Web Vitals assessment. PageSpeed Insights specifically flags uncompressed images as a high-priority fix.',
  },
  {
    q: 'Is it safe to compress images online?',
    a: 'Yes — as long as you use a browser-based tool that does not upload your files to a server. Our free image compressor processes everything locally using JavaScript and the Canvas API. Your images never leave your device. This is safe for confidential images, product photos, personal photos, and client work.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: POST.title,
      description: POST.metaDesc,
      url: `${SITE_CONFIG.url}/blog/${POST.slug}`,
      datePublished: POST.publishedAt,
      dateModified:  POST.updatedAt,
      author: { '@type': 'Organization', name: POST.author, url: SITE_CONFIG.url },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url:  SITE_CONFIG.url,
        logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${POST.slug}` },
      articleSection: POST.category,
      keywords: 'compress images without losing quality, image compression free, reduce image file size, compress jpeg online, compress png online',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: POST.title, item: `${SITE_CONFIG.url}/blog/${POST.slug}` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images Without Losing Quality',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Open the image compressor', text: 'Go to toolstackhub.in/compress-image-online in any browser. No signup required.' },
        { '@type': 'HowToStep', position: 2, name: 'Upload your image', text: 'Drag and drop or click to upload your JPG, PNG, or WebP image.' },
        { '@type': 'HowToStep', position: 3, name: 'View the compressed result', text: 'See the before and after file size and quality side by side instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Click Download to save the compressed image to your device.' },
      ],
    },
  ],
};

export default function PostCompressImages() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Header ─────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">{POST.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full">
                {POST.category}
              </span>
              <span className="text-sm text-surface-400">{POST.readTime} min read</span>
              <span className="text-surface-300">·</span>
              <time dateTime={POST.publishedAt} className="text-sm text-surface-400">
                {new Date(POST.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-4">
              {POST.title}
            </h1>

            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              A single uncompressed image can be the difference between a page that loads
              in 1 second and one that takes 6. This guide covers every method to compress
              images without losing visible quality — from a free one-click browser tool
              to format choices, export settings, and batch workflows.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-base">🛠️</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                <div className="text-xs text-surface-400">
                  Updated {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────── */}
        <div className={`h-44 sm:h-56 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-7xl mb-2">{POST.coverEmoji}</div>
            <div className="text-white/70 text-sm font-medium">JPG · PNG · WebP · Up to 90% smaller</div>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10">

            {/* ── Why image size matters ───────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Why Image File Size Is Killing Your Website Speed
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Images are the single largest contributor to page weight on most websites.
                A study by HTTP Archive found that images account for an average of 65% of
                total page weight across the web. An unoptimized product photo uploaded
                directly from a smartphone can easily be 4–8 MB. Multiply that by 10 images
                on a product page and you have 40–80 MB of data your visitors must download
                before they can fully see your content.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                The consequences are direct and measurable. Google's research found that
                53% of mobile users abandon a site that takes longer than 3 seconds to load.
                Every additional second of load time reduces conversions by approximately 7%.
                And since 2021, Google has used Core Web Vitals — which are directly impacted
                by image sizes — as a ranking signal. Uncompressed images hurt both your
                visitors and your rankings simultaneously.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                The good news is that most images can be compressed by 40–90% with zero
                visible quality difference. A 3 MB product photo becomes 300 KB. A 1 MB
                hero image becomes 100 KB. The visitor sees the same image. The page
                loads 5–10x faster.
              </p>
            </section>

            {/* ── Free tool CTA ─────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-orange-200"
              style={{ background: 'linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)' }}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">🗜️</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-1">Free Tool</div>
                    <h3 className="font-display font-bold text-xl text-orange-900 mb-2">
                      Compress Any Image — Free, No Signup, No Upload
                    </h3>
                    <p className="text-orange-800 text-sm leading-relaxed mb-4">
                      Reduce JPEG, PNG, and WebP file sizes by up to 90% instantly in
                      your browser. No account required, no files uploaded to any server.
                      Compare before and after quality side by side before downloading.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link href="/tools/image-compressor"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        Compress Image Free →
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-orange-700">
                        <span>✓ JPG · PNG · WebP</span>
                        <span>✓ Up to 90% smaller</span>
                        <span>✓ Private</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Lossy vs lossless ─────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Lossy vs Lossless Compression — Which Should You Use?
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Before diving into methods, you need to understand the two types of
                image compression — because choosing the wrong one for your image type
                is the most common mistake people make.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                  <h3 className="font-display font-bold text-blue-900 mb-2">🔵 Lossless Compression</h3>
                  <p className="text-sm text-blue-800 leading-relaxed mb-3">
                    Removes metadata and redundant data without touching a single pixel.
                    The decompressed image is <strong>identical</strong> to the original.
                  </p>
                  <div className="space-y-1.5 text-xs text-blue-700">
                    <div className="flex justify-between"><span>Typical reduction:</span> <strong>10–30%</strong></div>
                    <div className="flex justify-between"><span>Best for:</span> <strong>PNG, logos, icons, text</strong></div>
                    <div className="flex justify-between"><span>Quality loss:</span> <strong>Zero</strong></div>
                  </div>
                </div>
                <div className="p-5 bg-rose-50 border-2 border-rose-200 rounded-2xl">
                  <h3 className="font-display font-bold text-rose-900 mb-2">🔴 Lossy Compression</h3>
                  <p className="text-sm text-rose-800 leading-relaxed mb-3">
                    Permanently discards pixel data the human eye is unlikely to notice.
                    Produces <strong>much smaller</strong> files at the cost of some data.
                  </p>
                  <div className="space-y-1.5 text-xs text-rose-700">
                    <div className="flex justify-between"><span>Typical reduction:</span> <strong>40–90%</strong></div>
                    <div className="flex justify-between"><span>Best for:</span> <strong>JPEG, photos, gradients</strong></div>
                    <div className="flex justify-between"><span>Quality loss:</span> <strong>Invisible at 75–85%</strong></div>
                  </div>
                </div>
              </div>

              {/* When to use which */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Image Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Best Format</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Compression Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Expected Reduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Photographs',           format: 'JPEG or WebP', comp: 'Lossy',     reduction: '60–90%' },
                      { type: 'Logos & icons',          format: 'PNG or SVG',  comp: 'Lossless',  reduction: '10–30%' },
                      { type: 'Screenshots',            format: 'PNG',         comp: 'Lossless',  reduction: '15–40%' },
                      { type: 'Illustrations',          format: 'PNG or WebP', comp: 'Lossless',  reduction: '20–50%' },
                      { type: 'Social media images',    format: 'JPEG or WebP',comp: 'Lossy',     reduction: '50–80%' },
                      { type: 'Product images (web)',   format: 'WebP',        comp: 'Lossy',     reduction: '70–90%' },
                      { type: 'Print / archival',       format: 'PNG or TIFF', comp: 'Lossless',  reduction: '10–20%' },
                    ].map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-900">{row.type}</td>
                        <td className="px-4 py-3 text-surface-600 font-mono text-xs">{row.format}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.comp === 'Lossy' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'}`}>
                            {row.comp}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-emerald-700">{row.reduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Step-by-step ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                How to Compress Images Without Losing Quality — Step by Step
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                The fastest method: our free browser-based compressor. Here is the
                complete process.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Open the Free Image Compressor',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Go to{' '}
                        <Link href="/tools/image-compressor" className="text-orange-700 hover:underline font-medium">
                          toolstackhub.in/compress-image-online
                        </Link>.
                        No account, no installation, no browser extension required.
                        Works on Chrome, Safari, Firefox, and Edge — on desktop and mobile.
                      </p>
                    ),
                  },
                  {
                    step: 2,
                    title: 'Upload Your Image',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Drag and drop your image onto the upload area, or click to browse
                        your files. JPEG, PNG, and WebP are all supported. The tool
                        detects the format automatically and applies the optimal compression
                        method for that format.
                      </p>
                    ),
                  },
                  {
                    step: 3,
                    title: 'Review the Before and After',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        The compressed image appears alongside the original with both
                        file sizes and percentage reduction shown. Zoom into details —
                        text, edges, gradients — to verify quality before downloading.
                        If the compression is too aggressive for your use case, adjust
                        the quality slider.
                      </p>
                    ),
                  },
                  {
                    step: 4,
                    title: 'Download the Compressed Image',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click Download to save the compressed file to your device. The
                        filename is preserved. The output format matches the input format —
                        JPEG in, JPEG out. Use the compressed file wherever the original
                        was going: your website, email, presentation, or social media.
                      </p>
                    ),
                  },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-surface-900 mb-2">{item.title}</h3>
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Alternative methods ────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Alternative Methods to Compress Images
              </h2>

              <div className="space-y-4">

                {/* Photoshop */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">🎨</span>
                    <h3 className="font-semibold text-surface-900">Method 2: Adobe Photoshop — Export for Web</h3>
                    <span className="ml-auto text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium">Requires subscription</span>
                  </div>
                  <div className="p-5 text-sm text-surface-600 leading-relaxed space-y-2">
                    <p>Go to <strong className="text-surface-800">File → Export → Export As</strong> (or the legacy <strong>Save for Web</strong>). Choose JPEG quality 75–80 for photographs or PNG-8 for logos. Enable the metadata removal checkbox.</p>
                    <p><strong className="text-surface-800">Best for:</strong> Designers who are already in Photoshop and need pixel-level control over quality vs file size tradeoff per image zone.</p>
                    <p><strong className="text-surface-800">Limitation:</strong> Requires an Adobe Creative Cloud subscription ($20–55/month). For occasional compression without editing, this is significant overhead.</p>
                  </div>
                </div>

                {/* Squoosh */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">🌐</span>
                    <h3 className="font-semibold text-surface-900">Method 3: Google Squoosh (Browser Tool)</h3>
                    <span className="ml-auto text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">Free, advanced</span>
                  </div>
                  <div className="p-5 text-sm text-surface-600 leading-relaxed space-y-2">
                    <p>Squoosh is Google's open-source image compression lab at squoosh.app. It supports advanced formats including AVIF and offers a side-by-side slider comparison at pixel level.</p>
                    <p><strong className="text-surface-800">Best for:</strong> Developers who want to experiment with next-gen formats (AVIF, WebP) and need granular control over encoding parameters.</p>
                    <p><strong className="text-surface-800">Limitation:</strong> Processes one image at a time. Interface is more complex than needed for simple compression. No batch processing in the web version.</p>
                  </div>
                </div>

                {/* ImageMagick */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">💻</span>
                    <h3 className="font-semibold text-surface-900">Method 4: ImageMagick (Command Line)</h3>
                    <span className="ml-auto text-xs text-surface-600 bg-surface-100 border border-surface-200 px-2 py-0.5 rounded-full font-medium">For developers</span>
                  </div>
                  <div className="px-5 pt-4 pb-2">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-relaxed mb-3">
                      <div className="text-surface-400 mb-1"># Compress JPEG to 80% quality</div>
                      <div>magick input.jpg -quality 80 output.jpg</div>
                      <div className="mt-2 text-surface-400"># Batch compress all JPEGs in folder</div>
                      <div>magick mogrify -quality 80 -path ./output *.jpg</div>
                      <div className="mt-2 text-surface-400"># Convert to WebP with 85% quality</div>
                      <div>magick input.jpg -quality 85 output.webp</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed pb-4">
                      <strong className="text-surface-800">Best for:</strong> Developers who need to compress hundreds or thousands of images as part of a build pipeline, CI/CD workflow, or automated image processing script.
                    </p>
                  </div>
                </div>

              </div>

              {/* Comparison */}
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Method</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Speed</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Cost</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700">Batch</th>
                      <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Private</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: '🗜️ ToolStackHub Tool', speed: 'Instant',    cost: 'Free',     batch: '❌',         private: '✅ Local' },
                      { method: '🎨 Photoshop',          speed: '1–3 min',   cost: '$20+/mo',  batch: '⚠️ Actions', private: '✅ Local' },
                      { method: '🌐 Squoosh',             speed: 'Instant',   cost: 'Free',     batch: '❌',         private: '✅ Local' },
                      { method: '💻 ImageMagick',         speed: 'Fast bulk', cost: 'Free',     batch: '✅ Yes',     private: '✅ Local' },
                      { method: '☁️ TinyPNG/iLovePDF',   speed: 'Moderate',  cost: 'Freemium', batch: '✅ Yes',     private: '❌ Uploads' },
                    ].map((row, i) => (
                      <tr key={row.method} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className={`px-4 py-3 font-medium ${i === 0 ? 'text-orange-700' : 'text-surface-800'}`}>{row.method}</td>
                        <td className="px-4 py-3 text-center text-surface-600 text-xs">{row.speed}</td>
                        <td className="px-4 py-3 text-center text-surface-600 text-xs">{row.cost}</td>
                        <td className="px-4 py-3 text-center">{row.batch}</td>
                        <td className="px-4 py-3 text-center text-xs">{row.private}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Image format guide ────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Choosing the Right Image Format for Maximum Compression
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Format choice has a bigger impact on file size than compression settings.
                Using the wrong format can leave 50–70% potential savings on the table.
              </p>

              <div className="space-y-4">
                {[
                  {
                    format: 'JPEG',
                    color: 'amber',
                    icon: '📷',
                    bestFor: 'Photographs, product images, background images, images with many colors and gradients',
                    avoid: 'Logos, icons, text, screenshots, images requiring transparency',
                    compression: '60–90% reduction achievable',
                    tip: 'Quality setting 75–80 is the sweet spot for web use — visually indistinguishable from 100% quality at a fraction of the file size.',
                  },
                  {
                    format: 'PNG',
                    color: 'blue',
                    icon: '🖼️',
                    bestFor: 'Logos, icons, screenshots, UI elements, images with text, images requiring transparency',
                    avoid: 'Photographs (JPEG or WebP will be much smaller)',
                    compression: '10–40% lossless reduction achievable',
                    tip: 'For photographs, PNG files are 5–10x larger than equivalent JPEG. Always convert photos to JPEG or WebP before publishing on the web.',
                  },
                  {
                    format: 'WebP',
                    color: 'emerald',
                    icon: '🌐',
                    bestFor: 'Web images of all types — WebP is 25–35% smaller than JPEG and 25% smaller than PNG at equivalent quality',
                    avoid: 'Print workflows or contexts where WebP browser support cannot be guaranteed (very old browsers)',
                    compression: '25–90% reduction vs JPEG/PNG',
                    tip: 'WebP supports both lossy and lossless compression AND transparency. It is the modern default for web images. All major browsers have supported it since 2020.',
                  },
                  {
                    format: 'SVG',
                    color: 'violet',
                    icon: '✏️',
                    bestFor: 'Logos, icons, illustrations, and any image that is fundamentally made of shapes and paths rather than pixels',
                    avoid: 'Photographs — SVG cannot represent photographic content',
                    compression: 'Infinitely scalable at any resolution',
                    tip: 'An SVG logo will always be sharper than a PNG logo at any size. Run SVG files through SVGO to remove redundant code and reduce file size by 30–60%.',
                  },
                ].map(f => (
                  <div key={f.format} className={`p-5 bg-${f.color}-50 border border-${f.color}-200 rounded-2xl`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{f.icon}</span>
                      <div>
                        <h3 className={`font-display font-bold text-lg text-${f.color}-900`}>.{f.format}</h3>
                        <span className={`text-xs font-bold text-${f.color}-700`}>{f.compression}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-${f.color}-600 mb-1`}>✅ Use for</div>
                        <p className={`text-xs text-${f.color}-800 leading-relaxed`}>{f.bestFor}</p>
                      </div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-${f.color}-600 mb-1`}>❌ Avoid for</div>
                        <p className={`text-xs text-${f.color}-800 leading-relaxed`}>{f.avoid}</p>
                      </div>
                    </div>
                    <div className={`text-xs text-${f.color}-700 bg-${f.color}-100 px-3 py-2 rounded-lg`}>
                      <strong>💡 Pro tip:</strong> {f.tip}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Impact on SEO ─────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                How Image Compression Directly Affects Your Google Rankings
              </h2>

              <p className="text-surface-600 leading-relaxed mb-5">
                Since May 2021, Google has used Core Web Vitals as a ranking factor. Two
                of the three Core Web Vitals are directly impacted by image file sizes.
              </p>

              <div className="space-y-4">
                {[
                  {
                    metric: 'LCP — Largest Contentful Paint',
                    target: 'Under 2.5 seconds',
                    color: 'emerald',
                    desc: 'LCP measures how long it takes for the largest visible element on the page to load. On most websites, this is a hero image or product photo. An uncompressed 3 MB hero image can single-handedly push LCP past 4–6 seconds. Compressing it to 200–300 KB typically cuts LCP to under 1.5 seconds on a fast connection.',
                  },
                  {
                    metric: 'CLS — Cumulative Layout Shift',
                    target: 'Under 0.1',
                    color: 'blue',
                    desc: 'CLS measures visual instability as the page loads. Images without declared width and height attributes cause layout shifts — the page jumps as images load and push content down. While this is not directly about file size, it is part of the same image optimization workflow. Always set width and height on img elements alongside compressing the file.',
                  },
                  {
                    metric: 'PageSpeed Insights Score',
                    target: '90+ (green)',
                    color: 'amber',
                    desc: 'Google PageSpeed Insights specifically flags "Properly size images" and "Serve images in next-gen formats" as high-priority opportunities. These two recommendations alone can contribute 20–40 points to your PageSpeed score. Both are addressed by compressing images and converting to WebP.',
                  },
                ].map(m => (
                  <div key={m.metric} className={`flex gap-4 p-5 bg-${m.color}-50 border border-${m.color}-200 rounded-xl`}>
                    <div className={`shrink-0 w-16 h-16 rounded-xl bg-${m.color}-200 flex flex-col items-center justify-center text-center`}>
                      <div className={`text-[10px] font-bold text-${m.color}-800 uppercase`}>{m.metric.split(' ')[0]}</div>
                      <div className={`text-xs font-bold text-${m.color}-700 mt-0.5`}>{m.target}</div>
                    </div>
                    <div>
                      <h3 className={`font-semibold text-${m.color}-900 mb-1`}>{m.metric}</h3>
                      <p className={`text-sm text-${m.color}-800 leading-relaxed`}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-surface-900 rounded-xl text-sm">
                <div className="text-emerald-400 font-semibold mb-2">Real-world example: before vs after compression</div>
                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <div className="text-surface-400 mb-1">Before compression</div>
                    <div className="space-y-1 text-red-400">
                      <div>Hero image: 4.2 MB</div>
                      <div>Product images (×6): 18 MB</div>
                      <div>Total page weight: 23 MB</div>
                      <div>LCP: 6.8s</div>
                      <div>PageSpeed score: 34</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-surface-400 mb-1">After compression</div>
                    <div className="space-y-1 text-emerald-400">
                      <div>Hero image: 180 KB</div>
                      <div>Product images (×6): 900 KB</div>
                      <div>Total page weight: 1.2 MB</div>
                      <div>LCP: 1.4s</div>
                      <div>PageSpeed score: 91</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Use cases ─────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                Common Use Cases — When to Compress Images
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🛒', title: 'eCommerce Product Photos',    desc: 'Product images are the heaviest assets on most eCommerce sites. Compressing each image by 70–85% cuts page load time dramatically, reduces bounce rate, and directly improves conversion rates — especially on mobile.' },
                  { icon: '📱', title: 'Social Media Uploads',        desc: 'Instagram, LinkedIn, Twitter, and Facebook each have upload size recommendations. Pre-compressing to these specs before uploading prevents platforms from applying their own aggressive compression, which often degrades quality.' },
                  { icon: '📧', title: 'Email Attachments',           desc: 'Email size limits vary by provider: Gmail limits attachments to 25 MB. Compressing images before attaching reduces email size, improves deliverability, and loads faster for recipients on mobile networks.' },
                  { icon: '📝', title: 'Blog & CMS Content',          desc: 'Every image uploaded to WordPress, Webflow, or any CMS contributes to page weight. CMS systems often do not automatically optimize uploaded images. Compress before uploading for full control.' },
                  { icon: '📊', title: 'Presentations & Reports',     desc: 'PowerPoint and Google Slides files with high-resolution images become large and slow. Compress images before embedding to keep presentation file sizes manageable and loading fast.' },
                  { icon: '📱', title: 'App & UI Assets',             desc: 'Mobile apps have strict asset size budgets. Every KB saved in image assets reduces app download size, improves installation rates, and reduces the app\'s memory footprint at runtime.' },
                ].map(uc => (
                  <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-orange-200 transition-colors">
                    <span className="text-2xl shrink-0">{uc.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-900">{uc.title}</div>
                      <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                   >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                     >
                      {faq.q}
                      <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                     >
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Related tools ────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Related Free Image Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/tools/image-compressor',        icon: '🗜️', label: 'Compress Image Online',         desc: 'The free tool covered in this guide' },
                  { href: '/tools/image-resizer',          icon: '📐', label: 'Resize Image Online',            desc: 'Change image dimensions before compressing' },
                  { href: '/tools/jpg-to-png',  icon: '🔄', label: 'JPG to PNG Converter',           desc: 'Convert between image formats' },
                  { href: '/tools/image-to-pdf',icon: '📄', label: 'Image to PDF Converter',         desc: 'Combine compressed images into PDF' },
                  { href: '/tools/color-picker',          icon: '🎨', label: 'Color Picker Online',            desc: 'Sample exact colors from your images' },
                  { href: '/tools/meta-tag-generator',    icon: '🏷️', label: 'Meta Tag Generator',             desc: 'Add OG image tags for your compressed images' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors group">
                    <span className="text-xl">{l.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-orange-800 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Related posts ─────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Guides</h2>
              <div className="space-y-3">
                {[
                  { href: '/blog/how-to-check-typing-speed-online',              emoji: '⌨️', bg: 'from-brand-500 to-violet-600',     label: 'How to Check Your Typing Speed Online (Free WPM Test)', desc: 'WPM benchmarks, 6 improvement techniques, job requirements' },
                  { href: '/blog/how-to-remove-duplicate-lines-from-text',       emoji: '🧹', bg: 'from-emerald-500 to-teal-600',     label: 'How to Remove Duplicate Lines from Text (Easy Guide)',  desc: '5 methods compared — tool, Excel, Notepad++, Python' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${l.bg} flex items-center justify-center text-xl shrink-0`}>
                      {l.emoji}
                    </div>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-orange-800 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-orange-200"
              style={{ background: 'linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-4xl mb-3">🗜️</div>
                <h3 className="font-display font-bold text-xl text-orange-900 mb-2">
                  Ready to Compress Your Images?
                </h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  Use the free ToolStackHub image compressor — reduce file size by up to
                  90% with no visible quality loss. Works on JPEG, PNG, and WebP.
                  No signup, no uploads to servers, instant results.
                </p>
                <Link href="/tools/image-compressor"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
                  Compress Images Free Now →
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-orange-600">
                  <span>✓ No signup</span>
                  <span>✓ JPG · PNG · WebP</span>
                  <span>✓ Up to 90% smaller</span>
                  <span>✓ Files stay on your device</span>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}