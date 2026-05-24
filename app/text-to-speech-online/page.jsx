import Link from 'next/link';
import RelatedToolsCluster from '../../components/RelatedToolsCluster';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import TextToSpeech from '../../components/tools/TextToSpeech';
import TextToolsLinks from '../../components/TextToolsLinks';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Text to Speech Online Free – Convert Text to Audio',
  description: 'Convert text to speech online free. Multiple voices, adjustable speed and pitch. Browser-based Web Speech API. No upload, no signup required.',
  alternates: { canonical: `${SITE_CONFIG.url}/text-to-speech-online` },
  openGraph: {
    title: 'Text to Speech Online Free – Convert Text to Audio',
    description: 'Convert text to speech online free. Multiple voices, adjustable speed and pitch. Browser-based Web Speech API. No upload, no signup required.',
    url: `${SITE_CONFIG.url}/text-to-speech-online`,
    type: 'website', siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text to Speech Online Free – Convert Text to Audio',
    description: 'Convert text to speech online free. Multiple voices, adjustable speed and pitch. Browser-based Web Speech API. No upload, no signup required.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const faqs = [('What voices are available?', 'Available voices depend on your operating system. Windows, Mac, iOS, and Android each include different voice packages. English voices are listed first in the dropdown.'), ('Can I adjust the reading speed?', 'Yes — set reading speed from 0.5x (half speed for careful listening) to 2x (double speed for fast review).'), ('Is there a text length limit?', 'The Web Speech API works best with texts under 5000 characters. Very long texts may be automatically split into segments.'), ('Can I download the audio?', 'The Web Speech API plays audio directly in the browser. Most browsers do not support audio file download from the Speech API.'), ('Is text to speech free?', 'Yes — completely free with no account or download required.')];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Text to Speech Online Free – Convert Text to Audio Instantly', description: 'Convert text to speech online free. Multiple voices, adjustable speed and pitch. Browser-based Web Speech API. No upload, no signup required. Try now!', url: `${SITE_CONFIG.url}/text-to-speech-online`, applicationCategory: 'WebApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url }, { '@type': 'ListItem', position: 2, name: 'Text Tools', item: `${SITE_CONFIG.url}/#text` }, { '@type': 'ListItem', position: 3, name: 'Text to Speech Online – Convert Any Text to Spoken Audio Instantly', item: `${SITE_CONFIG.url}/text-to-speech-online` }] },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-surface-50 border-b border-surface-100 py-3"><AdBanner variant="top" /></div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#text" className="hover:text-brand-600 transition-colors text-emerald-600">Text Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Text to Speech Online – Convert Any Text to Spoken Audio Instantly</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">Text to Speech Online – Convert Any Text to Spoken Audio Instantly</h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">Convert text to speech online free. Multiple voices, adjustable speed and pitch. Browser-based Web Speech API. No upload, no signup required. Try now!</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '🔊 Multiple Voices', '⚡ Instant', '🔒 No Upload', '📱 Mobile Friendly'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><TextToSpeech /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"><AffiliateCTA toolName="Text to Speech Online – Convert Any Text to Spoken Audio Instantly" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><AdBanner variant="content" /></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">About This Tool</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: "Our free <strong>text to speech online</strong> tool uses your browser's built-in Web Speech API to instantly read any text aloud with multiple voice options and adjustable speed (0.5x–2x) and pitch controls. No audio file upload, no server processing, no installation required. Simply type or paste your text, select a voice from the available options on your device, and click Play. Pause and resume mid-speech at any point without losing your position." }} />
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">How to Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{step: '01', icon: '📋', title: 'Paste Your Text', desc: 'Type or paste any text into the large input area. The character count shows automatically.'},
              {step: '02', icon: '🎙️', title: 'Select a Voice', desc: 'Choose a voice from the dropdown list. Voices depend on your OS — English voices are listed first.'},
              {step: '03', icon: '⚡', title: 'Adjust Speed', desc: 'Set reading speed from 0.5x (slow and clear) to 2x (fast review) using the speed slider.'},
              {step: '04', icon: '🎵', title: 'Adjust Pitch', desc: 'Control the voice pitch from low to high using the pitch slider.'},
              {step: '05', icon: '▶️', title: 'Click Play', desc: 'Click Play to begin speech synthesis. The text is read aloud instantly.'},
              {step: '06', icon: '⏸️', title: 'Pause & Resume', desc: 'Click Pause to stop mid-speech and Resume to continue from exactly where you left off.'}].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{icon: '🔊', title: 'Multiple Voices', desc: 'Choose from all voices available on your device — organized by language, English first.'},
              {icon: '⚡', title: 'Adjustable Speed', desc: 'Set reading speed from 0.5x half-speed to 2x double-speed for any use case.'},
              {icon: '🎵', title: 'Pitch Control', desc: 'Adjust voice pitch from low to high to personalize the listening experience.'},
              {icon: '⏸️', title: 'Pause & Resume', desc: 'Pause speech mid-sentence and resume from exactly the same position.'},
              {icon: '🔒', title: 'No Upload Needed', desc: 'All synthesis happens via the browser Web Speech API — your text never leaves your device.'},
              {icon: '📱', title: 'Mobile Friendly', desc: 'Works on all modern mobile browsers including Safari on iPhone and Chrome on Android.'}].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{f.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{icon: '✍️', title: 'Proofreading', desc: 'Listen to your writing read back to you — your ears catch errors and awkward phrasing that your eyes miss during visual review.'},
              {icon: '♿', title: 'Accessibility Testing', desc: 'Test your website content for screen reader compatibility and verify it reads logically when heard rather than seen.'},
              {icon: '🌍', title: 'Language Learning', desc: 'Hear correct pronunciation of new vocabulary, phrases, and sentences in your target language.'},
              {icon: '📰', title: 'Content Consumption', desc: 'Listen to long articles, documentation, and reports while commuting, exercising, or doing other tasks.'},
              {icon: '👶', title: 'Reading Assistance', desc: 'Help children follow along with text being read aloud to support early literacy development.'},
              {icon: '🎬', title: 'Basic Voiceovers', desc: 'Generate preliminary voiceover content for video scripts and presentations before professional recording.'}].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div><div className="font-semibold text-surface-900 text-sm">{uc.title}</div><div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">More About This Tool</h2>
            <div className="text-surface-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'Use this as a <strong>text to speech converter online free</strong>, a <strong>TTS online tool</strong>, or a <strong>read text aloud tool</strong>. It works as a <strong>speech synthesis online</strong> tool, a <strong>convert text to voice free</strong> utility, and an <strong>online voice reader</strong> all in one. Whether you need text to speech in English free, text to audio online, or a browser-based TTS with multiple voices — this tool is ready instantly with no download.' }} />
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq[0]}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq[1]}</div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Text to Speech Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[].map(v => (
                <Link key={v.href} href={v.href} className="flex flex-col gap-1 p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="font-semibold text-emerald-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-emerald-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <TextToolsLinks currentHref="/text-to-speech-online" />

          <RelatedToolsCluster currentSlug="text-to-speech-online" />

        </div>
      </main>
      <Footer />
    </>
  );
}
