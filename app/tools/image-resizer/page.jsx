import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../../components/AdBanner';
import ToolCard from '../../../components/ToolCard';
import ImageResizer from '../../../components/tools/ImageResizer';
import { SITE_CONFIG, tools } from '../../../data/tools';

export const metadata = {
  title: 'Image Resizer – Resize Images Online Free to Any Dimension',
  description: 'Resize images online for free to any pixel size. Set exact width and height, maintain aspect ratio, and download instantly. No upload, no signup required.',
  keywords: [
    'image resizer',
    'resize image online',
    'resize image free',
    'change image size',
    'image resize tool',
    'resize photo online',
    'crop and resize image',
    'image dimensions changer',
    'resize jpg online',
    'resize png online',
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_CONFIG.url}/tools/image-resizer` },
  openGraph: {
    title: 'Image Resizer – Resize Images Online Free',
    description: 'Resize any image to exact pixel dimensions online for free. Maintain aspect ratio, use presets, and download instantly.',
    url: `${SITE_CONFIG.url}/tools/image-resizer`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Resizer – Resize Images Online Free',
    description: 'Resize images to any pixel size instantly. Free, no upload, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const relatedTools = tools.filter(t =>
  ['image-compressor', 'jpg-to-png', 'qr-code-generator', 'color-picker'].includes(t.slug)
);

const faqs = [
  {
    q: 'How do I resize an image online for free?',
    a: 'Upload your image, enter the desired width and height in pixels, toggle aspect ratio lock if needed, then click "Resize Image". Download the resized result instantly.',
  },
  {
    q: 'Can I resize an image without losing quality?',
    a: 'Reducing an image size generally maintains good quality. Enlarging an image beyond its original resolution will reduce sharpness since new pixels must be interpolated.',
  },
  {
    q: 'How do I maintain the aspect ratio when resizing?',
    a: 'Enable the aspect ratio lock (the padlock icon between width and height). When you change one dimension, the other updates automatically to keep the original proportions.',
  },
  {
    q: 'What image formats does the resizer support?',
    a: 'JPEG, PNG, and WebP. The output format matches the input format.',
  },
  {
    q: 'What is the maximum size I can resize an image to?',
    a: 'Up to 10,000 × 10,000 pixels. Very large sizes may take a moment to process depending on your device.',
  },
  {
    q: 'Are my images uploaded to a server?',
    a: 'No. All resizing happens locally in your browser. Your images never leave your device.',
  },
  {
    q: 'What are common image sizes I should resize to?',
    a: 'Common sizes: HD (1280×720), Full HD (1920×1080), Social media square (1080×1080), Facebook cover (820×312), Twitter header (1500×500), and profile picture (400×400).',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Image Resizer',
      description: 'Free online tool to resize images to any pixel dimension. Supports aspect ratio lock, size presets, and PNG/JPEG/WebP formats.',
      url: `${SITE_CONFIG.url}/tools/image-resizer`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
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
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_CONFIG.url}/#image` },
        { '@type': 'ListItem', position: 3, name: 'Image Resizer', item: `${SITE_CONFIG.url}/tools/image-resizer` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click or drag your image into the upload area.' },
        { '@type': 'HowToStep', position: 2, name: 'Set dimensions', text: 'Enter your desired width and height in pixels, or choose a preset size.' },
        { '@type': 'HowToStep', position: 3, name: 'Resize', text: 'Click "Resize Image" to process.' },
        { '@type': 'HowToStep', position: 4, name: 'Download', text: 'Download your resized image.' },
      ],
    },
  ],
};

const presets = [
  { name: 'HD', size: '1280 × 720px', use: 'YouTube thumbnails, presentations' },
  { name: 'Full HD', size: '1920 × 1080px', use: 'Wallpapers, website banners' },
  { name: 'Social Square', size: '1080 × 1080px', use: 'Instagram, Facebook posts' },
  { name: 'Profile Picture', size: '400 × 400px', use: 'Profile avatars, team photos' },
  { name: 'Twitter Header', size: '1500 × 500px', use: 'Twitter/X profile header' },
  { name: 'Thumbnail', size: '150 × 150px', use: 'Website thumbnails, icons' },
];

export default function ImageResizerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/#image" className="hover:text-brand-600 transition-colors text-amber-600">Image Tools</Link></li>
                <li>/</li>
                <li className="text-surface-800 font-medium">Image Resizer</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Image Resizer
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-2xl">
              Resize any image to exact pixel dimensions online for free. Set custom width and height,
              lock the aspect ratio, use popular presets, and download instantly. No upload required.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔒 No Upload', '📐 Custom Dimensions', '🔗 Aspect Ratio Lock', '⚡ Instant Download'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageResizer />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Image Resizer" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Resize Images Online — Instantly & For Free
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our <strong>free image resizer</strong> lets you change the dimensions of any image
                to exact pixel specifications in seconds. Whether you need to resize a photo for
                social media, shrink an image for a website, or match a specific size requirement —
                this tool handles it all without any software installation.
              </p>
              <p>
                The aspect ratio lock ensures your image never looks stretched or distorted.
                Toggle it on to proportionally scale width and height together, or off to set
                completely custom dimensions. Quick presets cover the most common sizes so you
                can resize in one click.
              </p>
              <p>
                Everything runs in your browser using the HTML5 Canvas API — your photos stay
                on your device and are never uploaded anywhere.
              </p>
            </div>
          </section>

          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Resize an Image Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📤', title: 'Upload Image', desc: 'Click or drag your image. JPEG, PNG, and WebP are all supported.' },
                { step: '02', icon: '📐', title: 'Set Dimensions', desc: 'Enter width and height in pixels, or choose a quick preset like HD or Instagram.' },
                { step: '03', icon: '🔗', title: 'Lock Aspect Ratio', desc: 'Toggle the padlock to keep proportions — enter one dimension and the other auto-fills.' },
                { step: '04', icon: '⬇️', title: 'Download', desc: 'Click "Resize Image" and download your result instantly.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="presets-heading">
            <h2 id="presets-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Image Size Presets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {presets.map(p => (
                <div key={p.name} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-amber-300 transition-colors">
                  <div className="font-semibold text-surface-900 mb-1">{p.name}</div>
                  <div className="font-mono text-sm text-amber-700 bg-amber-50 px-2 py-0.5 rounded mb-2 inline-block">{p.size}</div>
                  <div className="text-xs text-surface-500">{p.use}</div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              When to Use an Image Resizer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📱', title: 'Social Media Posts', desc: 'Every platform has specific image size requirements. Resize to exact dimensions for Instagram, Facebook, Twitter, and LinkedIn.' },
                { icon: '🌐', title: 'Website Images', desc: 'Oversized images slow websites down. Resize to the exact display size before uploading to your CMS or website.' },
                { icon: '📧', title: 'Email Campaigns', desc: 'Email clients have strict size limits. Resize images to reduce email loading time and improve deliverability.' },
                { icon: '🖨️', title: 'Print & Documents', desc: 'Match specific DPI and pixel requirements for print designs, business cards, and document layouts.' },
                { icon: '🎮', title: 'Game & App Assets', desc: 'Resize sprites, icons, and textures to exact sizes required by game engines and mobile apps.' },
                { icon: '👤', title: 'Profile Pictures', desc: 'Resize profile photos to perfect squares for platforms that require specific avatar dimensions.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="more-tools-heading">
            <h2 id="more-tools-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Image Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}