import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Privacy Policy — ToolStackHub',
  description: 'ToolStackHub privacy policy. We do not collect your data. All tools run in your browser.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display font-bold text-4xl text-surface-900 mb-4">Privacy Policy</h1>
          <p className="text-surface-500 mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-slate max-w-none space-y-8">
            {[
              {
                title: 'Data Collection',
                content: 'ToolStackHub does not collect, store, or transmit any personal data or the content you process using our tools. All tool operations run entirely in your web browser using client-side JavaScript.',
              },
              {
                title: 'Browser Storage',
                content: 'Some tools may use your browser\'s localStorage to save preferences (like your last settings). This data never leaves your device.',
              },
              {
                title: 'Analytics',
                content: 'We may use privacy-respecting analytics (such as Vercel Analytics or Plausible) to understand aggregate traffic patterns. No personally identifiable information is collected.',
              },
              {
                title: 'Advertising',
                content: 'We display third-party advertisements (Google AdSense). These ads may use cookies to show relevant ads. Please refer to Google\'s Privacy Policy for details.',
              },
              {
                title: 'Third-Party Services',
                content: 'The QR Code Generator uses the api.qrserver.com API to generate QR codes. The text you enter for QR generation is sent to this external service. Please avoid entering sensitive personal information.',
              },
              {
                title: 'Contact',
                content: `If you have any questions about our privacy practices, contact us at privacy@${new URL(SITE_CONFIG.url).hostname}`,
              },
            ].map(section => (
              <section key={section.title}>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-3">{section.title}</h2>
                <p className="text-surface-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
