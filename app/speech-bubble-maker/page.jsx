import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner from '../../components/AdBanner';
import SpeechBubbleMaker from '../../components/tools/SpeechBubbleMaker';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Free Speech Bubble Maker – Add Speech Bubble to Any Image',
  description: 'Add speech bubbles to any image free online. Classic speech, thought clouds, shout bursts. No login, instant PNG download. Perfect for memes, comics, Instagram, WhatsApp.',
  keywords: [
    'speech bubble maker', 'add speech bubble to image', 'speech bubble generator',
    'meme speech bubble', 'comic bubble creator', 'free speech bubble maker online',
    'speech bubble maker no login', 'create speech bubble png', 'add text bubble to photo',
    'speech bubble maker for memes', 'speech bubble maker for instagram',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/speech-bubble-maker` },
  openGraph: {
    title: 'Free Speech Bubble Maker – Add Speech Bubble to Any Image',
    description: 'Add speech bubbles to images free. No login, instant download. Memes, comics, social media.',
    url: `${SITE_CONFIG.url}/speech-bubble-maker`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: 'How do I add a speech bubble to an image online for free?', a: 'Upload your image using the "Upload Image" button, or start with a blank canvas. Click "+ Add Bubble" to add a speech bubble. Type your text in the sidebar. Drag the bubble to position it, resize using the corner handle, and choose your bubble style, colors, and font. Click "Download PNG" to save your result. No account or signup required.' },
  { q: 'What types of speech bubbles are available?', a: 'Our speech bubble maker includes 6 bubble styles: Classic Speech (rounded rectangle with tail), Thought Bubble (cloud shape with small circles), Shout Burst (spiky explosion shape for action/emphasis), Caption Box (rectangle for subtitles and captions), Round Bubble (soft rounded shape), and Whisper Bubble (dashed outline for quiet or secretive speech). Each can be customized with any color, font, and size.' },
  { q: 'Can I add multiple speech bubbles to one image?', a: 'Yes — click "+ Add Bubble" to add as many speech bubbles as you need. Each bubble is independently movable, resizable, and customizable. Use the numbered buttons in the toolbar to switch between and edit each bubble separately. All bubbles are rendered together when you download the final PNG.' },
  { q: 'Can I download the image with speech bubbles as a transparent PNG?', a: 'If you start with a blank canvas (no image uploaded), the background will be the default canvas color. For transparent backgrounds, the speech bubble itself can have its fill set to transparent by choosing a color with transparency. The download is always a PNG file which supports transparency.' },
  { q: 'What image formats can I upload?', a: 'You can upload any image format supported by your browser: JPG, JPEG, PNG, WebP, GIF, BMP, and SVG. The tool automatically scales large images to fit the canvas (max 700×500px) while maintaining aspect ratio. The output download is always in PNG format.' },
  { q: 'Can I use this speech bubble maker for memes?', a: 'Absolutely — that is one of the primary use cases. Upload your meme image, add a speech bubble with your text, choose the Comic Sans MS font for classic meme style or Impact for bold captions, customize the colors, and download. The spiky "Shout" bubble style works great for reaction memes, while the classic speech bubble is perfect for dialogue memes.' },
  { q: 'Does the speech bubble maker work on mobile?', a: 'Yes — the tool works on mobile browsers (Chrome on Android, Safari on iPhone). Touch dragging to move bubbles and touch-and-drag on the resize handle works on touch screens. For best experience with precise placement, desktop is recommended, but the tool is fully functional on mobile.' },
  { q: 'Is my uploaded image stored on your servers?', a: 'No — your image never leaves your device. The entire speech bubble maker runs in your browser using the HTML5 Canvas API. No files are uploaded, no data is stored, and nothing is shared with any server. Your images remain completely private.' },
  { q: 'Can I create comic-style speech bubbles?', a: 'Yes — the tool supports full comic-book style speech bubbles. Use the "Comic Sans MS" font for authentic comic typography, choose the "Shout Burst" style for action/exclamation moments, adjust border thickness for bold comic outlines, and add multiple overlapping bubbles for dialogue scenes. Yellow fill with black border is a classic comic book combination.' },
  { q: 'What is the difference between a speech bubble and a thought bubble?', a: 'A speech bubble (classic rounded rectangle with a pointed tail) indicates spoken words or dialogue. A thought bubble (cloud shape with small circles leading to the character) indicates internal thoughts or imagination. Our tool includes both styles plus a Whisper variant (dashed border) for quiet speech and a Shout Burst for loud exclamations.' },
];

const BUBBLE_TYPES = [
  { icon: '💬', name: 'Speech Bubble',  desc: 'Classic rounded rectangle with a tail pointing toward the speaker. The most common bubble in comics and memes.' },
  { icon: '💭', name: 'Thought Bubble', desc: 'Cloud shape with small circles connecting to the thinker. Used for internal monologue, dreams, and imagination.' },
  { icon: '💥', name: 'Shout Burst',    desc: 'Spiky star burst shape indicating shouting, explosive reveals, or strong emphasis. Common in action comics.' },
  { icon: '🟦', name: 'Caption Box',    desc: 'Simple rectangle used for narrator text, subtitles, or scene descriptions in comics and social media posts.' },
  { icon: '🔵', name: 'Round Bubble',   desc: 'Soft rounded shape for casual dialogue. Works well for modern web comics and social media content.' },
  { icon: '🗨️', name: 'Whisper Bubble', desc: 'Dashed outline indicating soft speech, secrets, or whispers. Adds nuance to comic and meme storytelling.' },
];

const PROGRAMMATIC_PAGES = [
  { href: '/speech-bubble-maker-for-memes',           label: 'Speech Bubble Maker for Memes'              },
  { href: '/speech-bubble-maker-for-instagram',       label: 'Speech Bubble Maker for Instagram'          },
  { href: '/speech-bubble-maker-for-whatsapp',        label: 'Speech Bubble Maker for WhatsApp'           },
  { href: '/speech-bubble-maker-for-youtube',         label: 'Speech Bubble Maker for YouTube Thumbnails' },
  { href: '/speech-bubble-maker-for-comics',          label: 'Speech Bubble Maker for Comics'             },
  { href: '/add-speech-bubble-to-image',              label: 'Add Speech Bubble to Image'                 },
  { href: '/speech-bubble-png-generator',             label: 'Speech Bubble PNG Generator'                },
  { href: '/thought-bubble-maker-online',             label: 'Thought Bubble Maker Online'                },
  { href: '/comic-speech-bubble-generator',           label: 'Comic Speech Bubble Generator'              },
  { href: '/chat-bubble-maker-online',                label: 'Chat Bubble Maker Online'                   },
  { href: '/meme-speech-bubble-generator',            label: 'Meme Speech Bubble Generator'               },
  { href: '/speech-bubble-transparent-background',    label: 'Speech Bubble Transparent Background'       },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Free Speech Bubble Maker Online',
      description: 'Add customizable speech bubbles to images online for free. Classic speech, thought clouds, shout bursts. No login, instant PNG download.',
      url: `${SITE_CONFIG.url}/speech-bubble-maker`,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Upload any image and add speech bubbles',
        '6 bubble styles: speech, thought, shout, caption, round, whisper',
        'Multiple speech bubbles on one image',
        'Custom colors, fonts, and border styles',
        'Drag and resize speech bubbles',
        'Download as PNG',
        'No login required',
        'Runs in browser — no upload',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',                item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Speech Bubble Maker', item: `${SITE_CONFIG.url}/speech-bubble-maker` },
      ],
    },
  ],
};

export default function SpeechBubbleMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        {/* ── Hero / Header ────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Speech Bubble Maker</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Speech Bubble Maker – Add Speech Bubble to Any Image Online
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Upload any image and add customizable speech bubbles, thought clouds, shout bursts,
              and caption boxes instantly. Perfect for memes, comics, Instagram posts, and WhatsApp
              stickers. Free, no login, download as PNG in seconds.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🆓 100% Free','🚫 No Login','⬇️ PNG Download','💬 6 Bubble Styles','🎨 Full Customization','🔒 Private – No Upload'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SpeechBubbleMaker />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        {/* ── SEO Content ─────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* What is a speech bubble */}
          <section aria-labelledby="what-is">
            <h2 id="what-is" className="font-display font-bold text-2xl text-surface-900 mb-4">
              What is a Speech Bubble and Why Use One?
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A <strong className="text-surface-800">speech bubble</strong> (also called a speech balloon
                or dialogue balloon) is the visual device used in comics, cartoons, and memes to show
                spoken words, thoughts, or sounds. The distinctive pointed tail connecting the bubble
                to a character's mouth immediately communicates attribution — readers instantly know
                who is speaking without any written identification.
              </p>
              <p>
                In the digital era, speech bubbles have expanded far beyond comics. They are essential
                tools for meme creation, social media engagement, educational content, marketing
                materials, and any visual communication that needs to convey dialogue or reaction.
                Our{' '}
                <strong className="text-surface-800">free online speech bubble maker</strong>{' '}
                lets you add professional-quality speech bubbles to any image in seconds — without
                Photoshop, without design skills, and without paying for software.
              </p>
              <p>
                Use our <Link href="/add-speech-bubble-to-image" className="text-brand-700 hover:underline font-medium">add speech bubble to image</Link>{' '}
                tool for quick single-bubble overlays, or explore the{' '}
                <Link href="/speech-bubble-maker-for-memes" className="text-brand-700 hover:underline font-medium">speech bubble maker for memes</Link>{' '}
                page for meme-optimized templates and font choices.
              </p>
            </div>
          </section>

          {/* Bubble types */}
          <section aria-labelledby="bubble-types">
            <h2 id="bubble-types" className="font-display font-bold text-2xl text-surface-900 mb-5">
              6 Speech Bubble Types — When to Use Each
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BUBBLE_TYPES.map(b => (
                <div key={b.name} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-2xl hover:border-brand-200 transition-colors">
                  <span className="text-3xl shrink-0">{b.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 mb-1">{b.name}</div>
                    <p className="text-sm text-surface-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to use */}
          <section aria-labelledby="how-to-use">
            <h2 id="how-to-use" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Add a Speech Bubble to an Image — Step by Step
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', icon: '📁', title: 'Upload Image',       desc: 'Click "Upload Image" to add your photo, meme, or comic. Supports JPG, PNG, WebP. Or start with a blank canvas.' },
                { step: '02', icon: '+',  title: 'Add Bubble',         desc: 'Click "+ Add Bubble" to place a speech bubble on your image. Add as many as needed for dialogue scenes.' },
                { step: '03', icon: '✏️', title: 'Type Your Text',     desc: 'Type or paste your text in the sidebar. The bubble auto-resizes to fit. Use emoji for extra expression.' },
                { step: '04', icon: '🎨', title: 'Customize Style',    desc: 'Pick bubble style (speech/thought/shout), colors, font, border width. Choose from 6 preset color schemes.' },
                { step: '05', icon: '⬇️', title: 'Download PNG',      desc: 'Click "Download PNG" to save your finished image. It downloads instantly — no email or signup needed.' },
              ].map(s => (
                <div key={s.step} className="flex flex-col gap-3 p-4 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0">{s.step}</div>
                    <span className="text-xl">{s.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900 text-sm">{s.title}</h3>
                  <p className="text-xs text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section aria-labelledby="use-cases">
            <h2 id="use-cases" className="font-display font-bold text-2xl text-surface-900 mb-5">
              10 Ways to Use the Speech Bubble Maker
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '😂', title: 'Meme Creation',             desc: 'Add dialogue, reactions, and punchlines to viral meme templates. Comic Sans + classic speech bubble = instant meme magic.' },
                { icon: '📱', title: 'Instagram Stories & Posts', desc: 'Create engaging conversational content with speech bubbles. Perfect for "interview style" posts, quote graphics, and reaction content.' },
                { icon: '📲', title: 'WhatsApp Stickers',         desc: 'Design custom WhatsApp stickers by adding speech bubbles to funny photos. Export as PNG and import directly into WhatsApp Sticker apps.' },
                { icon: '🎥', title: 'YouTube Thumbnails',        desc: 'Add clickbait-worthy speech bubbles to thumbnail images. A speech bubble with surprising text dramatically increases CTR.' },
                { icon: '📚', title: 'Comics & Webcomics',        desc: 'Create multi-panel comics with different character voices. Use speech, thought, and shout bubbles to tell visual stories.' },
                { icon: '🎓', title: 'Educational Content',       desc: 'Add dialogue to historical photos, explain concepts with character speech, or create engaging learning materials with visual narration.' },
                { icon: '🛍️', title: 'Marketing & Ads',          desc: 'Create attention-grabbing ad creatives with product "speaking" about benefits. Speech bubbles humanize products and increase engagement.' },
                { icon: '🎮', title: 'Game Screenshots',          desc: 'Add commentary to game screenshots, create fake NPC dialogue, or build memes from gaming moments with custom speech bubbles.' },
                { icon: '🐾', title: 'Pet Photos',                desc: 'The classic "what is your pet thinking" format. Add a thought bubble to your cat staring at a wall for instant viral potential.' },
                { icon: '📰', title: 'News & Satire',             desc: 'Add speech bubbles to news photos for satirical commentary. A mainstay of political cartoons and social media commentary.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl hover:border-brand-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <p className="text-xs text-surface-500 mt-0.5 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section aria-labelledby="tips">
            <h2 id="tips" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Pro Tips for Better Speech Bubbles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎭', title: 'Match bubble style to emotion',          desc: 'Use "Shout Burst" for surprise, anger, or emphasis. Use "Thought Bubble" for internal monologue or daydreaming. Use "Whisper" for secrets or understated humor.' },
                { icon: '📐', title: 'Point the tail toward the speaker',      desc: 'Position the tail so it clearly points toward the character who is speaking. Use "bottom-left" or "bottom-right" tail for characters at the bottom of the image.' },
                { icon: '🔤', title: 'Keep text short and punchy',             desc: 'The most viral memes have 1–8 words per bubble. Shorter text = bigger font = easier to read at small sizes on social media.' },
                { icon: '🎨', title: 'Use high-contrast colors',               desc: 'Black text on white background is the most readable combination. For stylized content, try yellow on black (impact style) or white on dark red.' },
                { icon: '💬', title: 'Layer multiple bubbles for dialogue',    desc: 'Add 2–3 bubbles with different tail directions to create conversation scenes. Each bubble\'s number appears in the toolbar for easy switching.' },
                { icon: '📏', title: 'Resize to match text length',            desc: 'Drag the blue corner handle to resize. Wider but shorter bubbles look better with long text. Taller but narrower works for short exclamations.' },
              ].map(tip => (
                <div key={tip.title} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{tip.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{tip.title}</div>
                    <p className="text-xs text-surface-500 mt-0.5 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — Speech Bubble Maker
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic pages */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Speech Bubble Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMATIC_PAGES.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">💬</span>
                  <div className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Image Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/compress-image-online',    icon: '🗜️', label: 'Image Compressor',      desc: 'Compress your speech bubble image for faster sharing' },
                { href: '/qr-code-generator-online', icon: '📱', label: 'QR Code Generator',      desc: 'Generate QR codes for your meme or content' },
                { href: '/text-repeater',            icon: '🔁', label: 'Text Repeater',          desc: 'Repeat text for creative bubble fills' },
                { href: '/invoice-generator',        icon: '🧾', label: 'Invoice Generator',      desc: 'For creative professionals and content creators' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}