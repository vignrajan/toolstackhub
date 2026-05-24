import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';
 
export const metadata = {
  title: 'Terms of Use – ToolStackHub',
  description: 'Terms of Use for ToolStackHub. Read our terms governing access to and use of our free online tools and services.',
  alternates: { canonical: `${SITE_CONFIG.url}/terms` },
  openGraph: {
    title: 'Terms of Use – ToolStackHub',
    description: 'Terms of Use for ToolStackHub. Read our terms governing access to and use of our free online tools and services.',
    url: `${SITE_CONFIG.url}/terms`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use – ToolStackHub',
    description: 'Terms of Use for ToolStackHub. Read our terms governing access to and use of our free online tools and services.',
    creator: SITE_CONFIG.twitterHandle,
  },
};
 
const LAST_UPDATED = 'March 26, 2026';
 
export function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface-50">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="font-display font-extrabold text-3xl text-surface-950 mb-3">Terms of Use</h1>
            <p className="text-surface-500 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {[
            { title: '1. Acceptance of Terms', text: 'By accessing and using ToolStackHub (toolstackhub.in), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Service.' },
            { title: '2. Description of Service', text: 'ToolStackHub provides free browser-based utility tools including calculators, text tools, image tools, and developer utilities. All tools are provided "as is" for personal, educational, and professional use. Our tools run entirely in your browser and do not upload your data to any server.' },
            { title: '3. Permitted Use', text: 'You may use ToolStackHub tools for lawful purposes only. You agree not to: use the Service for any illegal or unauthorized purpose; attempt to gain unauthorized access to our systems; use automated scripts to scrape or bulk-access the Service; reproduce, duplicate, or sell any part of the Service without written permission; interfere with or disrupt the Service or servers connected to the Service.' },
            { title: '4. Intellectual Property', text: 'The ToolStackHub website, its original content, features, and functionality are owned by ToolStackHub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content without explicit written permission.' },
            { title: '5. Disclaimer of Warranties', text: 'ToolStackHub tools are provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, reliability, or suitability of our tools for any particular purpose. Calculation results are for informational and estimation purposes only and should not be relied upon as financial, legal, or professional advice.' },
            { title: '6. Financial Calculators Notice', text: 'Our financial tools (EMI calculator, salary calculator, GST calculator, SIP calculator, etc.) provide estimates based on standard formulas and user-provided inputs. These results are for informational purposes only. Always verify financial calculations with qualified professionals (CAs, financial advisors, or bank representatives) before making financial decisions.' },
            { title: '7. Limitation of Liability', text: 'To the maximum extent permitted by applicable law, ToolStackHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from your use of or inability to use the Service.' },
            { title: '8. Third-Party Links and Advertising', text: 'Our Service may contain links to third-party websites and display advertisements served by Google AdSense. We are not responsible for the content, privacy policies, or practices of third-party sites. The presence of advertisements does not constitute endorsement of the advertised products or services.' },
            { title: '9. Modifications to Service', text: 'We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.' },
            { title: '10. Governing Law', text: 'These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in India.' },
            { title: '11. Changes to Terms', text: 'We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.' },
            { title: '12. Contact', text: 'Questions about these Terms should be sent to: hello@toolstackhub.in' },
          ].map(s => (
            <section key={s.title}>
              <h2 className="font-display font-bold text-lg text-surface-900 mb-2">{s.title}</h2>
              <p className="text-surface-600 leading-relaxed text-sm">{s.text}</p>
            </section>
          ))}
          <div className="flex gap-4 text-sm pt-4 border-t border-surface-200">
            <Link href="/privacy" className="text-brand-700 hover:underline">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-brand-700 hover:underline">Disclaimer</Link>
            <Link href="/contact" className="text-brand-700 hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
 
export default TermsPage;