import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG, tools, categories } from '../../data/tools';

export const metadata = {
  title: 'About ToolStackHub — Free Online Tools',
  description: 'Learn about ToolStackHub, a collection of free online tools for developers, designers, and everyone. No signup, no cost, always private.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

          <div>
            <h1 className="font-display font-bold text-4xl text-surface-900 mb-6">
              About ToolStackHub
            </h1>
            <div className="prose prose-slate max-w-none text-surface-600 leading-relaxed space-y-4">
              <p>
                <strong>ToolStackHub</strong> is a free collection of online utility tools designed
                for developers, designers, writers, and anyone who needs a quick, reliable tool
                without the hassle of sign-ups, subscriptions, or privacy concerns.
              </p>
              <p>
                Every tool on this site runs entirely in your browser. Your data never leaves your device,
                and we never collect or store any of the content you process.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: `${tools.length}+`,      label: 'Free Tools' },
              { value: `${categories.length}`,  label: 'Categories' },
              { value: '0',                      label: 'Sign-ups Required' },
            ].map(s => (
              <div key={s.label} className="text-center p-6 bg-brand-50 rounded-2xl border border-brand-100">
                <div className="font-display font-bold text-4xl text-brand-700">{s.value}</div>
                <div className="text-surface-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">Our Principles</h2>
            <div className="grid gap-4">
              {[
                { icon: '🔒', title: 'Privacy First',    desc: 'All tools run client-side. Your data never touches our servers.' },
                { icon: '⚡', title: 'Speed Obsessed',   desc: 'Statically generated pages load in under a second globally.' },
                { icon: '🆓', title: 'Always Free',      desc: 'Core tools will always be free. No tricks, no paywalls.' },
                { icon: '🧩', title: 'Modular & Scalable', desc: 'Built to grow from 15 tools to 300+ without breaking a sweat.' },
              ].map(v => (
                <div key={v.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                  <span className="text-3xl">{v.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-surface-900">{v.title}</h3>
                    <p className="text-surface-500 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-surface-400 border-t border-surface-100 pt-6">
            Built with Next.js, Tailwind CSS, and ❤️. Deployed on Vercel.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
