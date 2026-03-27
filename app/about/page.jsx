import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'About Us – ToolStackHub | Free Online Tools Built for Everyone',
  description: 'Learn about ToolStackHub — who we are, why we built 50+ free browser-based tools, and our mission to make powerful utilities accessible to everyone without signup or payment.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* Hero */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h1 className="font-display font-extrabold text-4xl text-surface-950 mb-4 tracking-tight">
              About ToolStackHub
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed">
              Free, fast, and private tools for everyone — built by a small team
              that got tired of paying for things that should be free.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

          {/* Our Story */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                ToolStackHub started with a simple frustration: why does every online tool either
                require a login, add a watermark, limit free usage, or upload your private data
                to some unknown server?
              </p>
              <p>
                We are a small team of developers and designers based in India. In our day-to-day
                work — freelancing, consulting, building products — we constantly needed quick
                utilities: an EMI calculator, a text repeater, an invoice generator, a way to
                compress an image before sending it to a client. Every option we found came with
                a catch.
              </p>
              <p>
                So we built our own. Then we kept building. In 2026, ToolStackHub has over 50
                free tools — all browser-based, all without logins, all without watermarks.
                Your data never leaves your device. We built it that way intentionally.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="p-7 bg-brand-50 border border-brand-200 rounded-2xl">
            <h2 className="font-display font-bold text-xl text-brand-900 mb-3">Our Mission</h2>
            <p className="text-brand-800 leading-relaxed">
              To make powerful, professional-grade utilities accessible to everyone — students,
              freelancers, small business owners, and developers — without paywalls, without
              forced signups, and without compromising their privacy.
            </p>
          </section>

          {/* What we believe */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">What We Believe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🔒', title: 'Privacy First',      desc: 'Every tool on ToolStackHub runs entirely in your browser. Your files, your data, and your calculations never touch our servers.' },
                { icon: '🆓', title: 'Genuinely Free',     desc: 'No free tiers with paywalled features, no "sign up to see results," no watermarks. Free means free.' },
                { icon: '⚡', title: 'Speed Matters',      desc: 'Tools should load instantly and produce results in under a second. We optimize every tool for performance.' },
                { icon: '🧩', title: 'Simple by Design',   desc: 'The best tool is one that does exactly what you need with zero learning curve. We obsess over simplicity.' },
                { icon: '🇮🇳', title: 'Built for India',   desc: 'Our finance tools are India-specific — GST rates, INR formatting, CIBIL scores, home loan calculators with Indian bank rates.' },
                { icon: '📱', title: 'Works Everywhere',   desc: 'Every tool is mobile-first and tested on low-end devices. Tools should work for everyone, not just those with new hardware.' },
              ].map(v => (
                <div key={v.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{v.title}</div>
                    <p className="text-sm text-surface-500 mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What we build */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What We Build</h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              ToolStackHub is organized into four categories, each solving a specific class of everyday problems:
            </p>
            <div className="space-y-3">
              {[
                { cat: '💰 Finance Tools',    desc: 'EMI calculator, SIP calculator, GST calculator, salary calculator, invoice generator — all India-specific with real bank rates and GST rules.' },
                { cat: '📝 Text Tools',       desc: 'Text repeater, word counter, remove duplicate lines, remove extra spaces, case converter — for developers, writers, and data professionals.' },
                { cat: '🖼️ Image Tools',      desc: 'Image compressor, speech bubble maker — browser-based with no file upload required.' },
                { cat: '💻 Developer Tools',  desc: 'JSON formatter, password generator, QR code generator, UUID generator, Base64 encoder — the daily toolkit for developers.' },
              ].map(c => (
                <div key={c.cat} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 w-40 shrink-0">{c.cat}</div>
                  <p className="text-sm text-surface-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">The Team</h2>
            <p className="text-surface-600 leading-relaxed">
              ToolStackHub is built and maintained by a small team of engineers and designers
              based in India. We are not a corporation or a funded startup — we are people
              who build tools we actually use ourselves. We stay small intentionally: small
              teams move faster, care more, and build better products.
            </p>
            <p className="text-surface-600 leading-relaxed mt-3">
              If you have a tool idea, found a bug, or just want to say hello, we genuinely
              read every message sent to our{' '}
              <Link href="/contact" className="text-brand-700 hover:underline font-medium">contact page</Link>.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center p-8 bg-surface-900 rounded-2xl">
            <h3 className="font-display font-bold text-xl text-white mb-2">Start Using Our Tools</h3>
            <p className="text-surface-400 text-sm mb-5">50+ free tools. No login. No watermark. No catch.</p>
            <Link href="/"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              Explore All Tools →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}