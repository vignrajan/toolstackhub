import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Privacy Policy – ToolStackHub',
  description: 'ToolStackHub Privacy Policy — how we handle your data, cookies, and personal information. We are committed to your privacy.',
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
};

const LAST_UPDATED = 'March 26, 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface-50">

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="font-display font-extrabold text-3xl text-surface-950 mb-3">Privacy Policy</h1>
            <p className="text-surface-500 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

          {/* Intro */}
          <section>
            <p className="text-surface-600 leading-relaxed">
              ToolStackHub ("we," "us," or "our") operates the website{' '}
              <strong className="text-surface-800">toolstackhub.in</strong> (the "Service").
              This Privacy Policy explains how we collect, use, and protect your information
              when you use our Service. By accessing or using ToolStackHub, you agree to
              the collection and use of information in accordance with this policy.
            </p>
          </section>

          {[
            {
              title: '1. Information We Collect',
              content: [
                {
                  sub: 'Tool Usage Data',
                  text: 'All tools on ToolStackHub run entirely in your browser (client-side). Data you enter into our tools — such as salary figures, loan amounts, invoice details, or text content — is processed locally on your device and is never transmitted to our servers. We do not store, log, or access your tool inputs.'
                },
                {
                  sub: 'Log Data',
                  text: 'When you visit our website, our hosting provider may automatically collect standard log information including your IP address, browser type, browser version, the pages you visit, the time and date of your visit, and the time spent on those pages. This data is used for server security and diagnostics only.'
                },
                {
                  sub: 'Contact Form Data',
                  text: 'When you submit our contact form, we collect your name, email address, and message content. This information is used solely to respond to your enquiry and is not shared with third parties.'
                },
                {
                  sub: 'Cookies and Local Storage',
                  text: 'We may use cookies and browser local storage to remember your preferences (such as cookie consent status and tool settings). We do not use tracking cookies to build personal profiles.'
                },
              ]
            },
            {
              title: '2. How We Use Your Information',
              content: [
                { sub: '', text: 'We use collected information to: operate and maintain our website, analyze aggregate usage patterns to improve tools, respond to contact form submissions, detect and prevent technical issues, and comply with legal obligations.' },
              ]
            },
            {
              title: '3. Google AdSense and Third-Party Advertising',
              content: [
                { sub: 'Google AdSense',
                  text: 'We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website and other websites. Google\'s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the Internet. You may opt out of personalized advertising by visiting Google\'s Ad Settings page at https://www.google.com/settings/ads.' },
                { sub: 'Third-Party Cookies',
                  text: 'Advertising partners including Google may use cookies, web beacons, and similar technologies to collect information about your activities on this and other websites. This information may be used to provide you with personalized advertisements and to measure their effectiveness.' },
                { sub: 'Your Choices',
                  text: 'You can opt out of personalized advertising from Google at https://www.google.com/settings/ads. You can also disable cookies in your browser settings, though this may affect website functionality.' },
              ]
            },
            {
              title: '4. Data Sharing and Disclosure',
              content: [
                { sub: '', text: 'We do not sell, trade, or rent your personal information to third parties. We may share data in the following limited circumstances: (a) with service providers who assist in operating our website under strict confidentiality agreements; (b) if required by law or to protect the rights and safety of ToolStackHub or its users; (c) in the event of a business transfer or acquisition, in which case users will be notified.' },
              ]
            },
            {
              title: '5. Data Retention',
              content: [
                { sub: '', text: 'Contact form submissions are retained for up to 12 months for follow-up purposes, then permanently deleted. Log data is retained for 30 days for security purposes. Since tool data never reaches our servers, there is no tool data to retain.' },
              ]
            },
            {
              title: '6. Your Rights (GDPR)',
              content: [
                { sub: '', text: 'If you are located in the European Economic Area, you have the following rights: the right to access personal data we hold about you, the right to request correction of inaccurate data, the right to request deletion of your data ("right to be forgotten"), the right to object to or restrict processing, and the right to data portability. To exercise these rights, contact us at hello@toolstackhub.in.' },
              ]
            },
            {
              title: '7. Children\'s Privacy',
              content: [
                { sub: '', text: 'Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will delete it immediately.' },
              ]
            },
            {
              title: '8. Security',
              content: [
                { sub: '', text: 'We implement commercially reasonable security measures to protect your information. Our website uses HTTPS encryption for all data transmission. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.' },
              ]
            },
            {
              title: '9. Links to Other Websites',
              content: [
                { sub: '', text: 'Our Service may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policy of every website you visit.' },
              ]
            },
            {
              title: '10. Changes to This Privacy Policy',
              content: [
                { sub: '', text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We recommend reviewing this policy periodically. Your continued use of the Service after changes are posted constitutes your acceptance of the updated policy.' },
              ]
            },
            {
              title: '11. Contact Us',
              content: [
                { sub: '', text: 'If you have any questions about this Privacy Policy, please contact us at: Email: hello@toolstackhub.in | Website: https://www.toolstackhub.in/contact' },
              ]
            },
          ].map(section => (
            <section key={section.title}>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <div key={i}>
                    {item.sub && <h3 className="font-semibold text-surface-800 mb-2">{item.sub}</h3>}
                    <p className="text-surface-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="p-5 bg-surface-100 rounded-xl text-sm text-surface-600">
            <strong>Summary:</strong> We do not collect or store any data you enter into our tools.
            Your calculations, files, and text stay on your device. We collect minimal information
            (logs, contact form data) and do not sell it. We show ads through Google AdSense which
            uses cookies — you can opt out via Google Ad Settings.
          </div>

          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="text-brand-700 hover:underline">Terms of Use</Link>
            <Link href="/disclaimer" className="text-brand-700 hover:underline">Disclaimer</Link>
            <Link href="/contact" className="text-brand-700 hover:underline">Contact Us</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}