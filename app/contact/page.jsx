import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Contact Us – ToolStackHub',
  description: 'Get in touch with the ToolStackHub team. Report a bug, suggest a new tool, or ask a question. We respond within 48 hours.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    title: 'Contact Us – ToolStackHub',
    description: 'Get in touch with the ToolStackHub team. Report a bug, suggest a new tool, or ask a question.',
    url: `${SITE_CONFIG.url}/contact`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – ToolStackHub',
    description: 'Get in touch with the ToolStackHub team. Report a bug, suggest a new tool, or ask a question.',
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface-50">

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h1 className="font-display font-extrabold text-4xl text-surface-950 mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed">
              Have a question, found a bug, or want to suggest a new tool?
              We read every message and respond within 48 hours.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact info */}
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-surface-900">Get in Touch</h2>
              {[
                { icon: '📧', label: 'Email',   val: 'hello@toolstackhub.in',  href: 'mailto:hello@toolstackhub.in' },
                { icon: '🌐', label: 'Website', val: 'www.toolstackhub.in',    href: 'https://www.toolstackhub.in' },
                { icon: '🐦', label: 'Twitter', val: '@toolstackhub',          href: 'https://twitter.com/toolstackhub' },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-3 p-4 bg-white border border-surface-200 rounded-xl">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider">{c.label}</div>
                    <a href={c.href} className="text-sm font-medium text-brand-700 hover:underline mt-0.5 block">{c.val}</a>
                  </div>
                </div>
              ))}

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="font-semibold text-emerald-900 text-sm mb-1">Response Time</div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  We respond to all messages within 24–48 business hours.
                  For urgent bug reports, include the tool URL in your message.
                </p>
              </div>

              <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                <div className="font-semibold text-surface-800 text-sm mb-2">Quick Links</div>
                <div className="space-y-1.5">
                  {[
                    { href: '/about',      label: 'About Us'       },
                    { href: '/privacy',    label: 'Privacy Policy' },
                    { href: '/terms',      label: 'Terms of Use'   },
                    { href: '/disclaimer', label: 'Disclaimer'     },
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="block text-sm text-brand-700 hover:underline">{l.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive form — client component */}
            <ContactForm />

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
