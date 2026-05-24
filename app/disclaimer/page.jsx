import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';
 
export const metadata = {
  title: 'Disclaimer – ToolStackHub',
  description: 'Disclaimer for ToolStackHub. Information about the limitations of our free online tools and the accuracy of results provided.',
  alternates: { canonical: `${SITE_CONFIG.url}/disclaimer` },
  openGraph: {
    title: 'Disclaimer – ToolStackHub',
    description: 'Disclaimer for ToolStackHub. Information about the limitations of our free online tools and the accuracy of results provided.',
    url: `${SITE_CONFIG.url}/disclaimer`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer – ToolStackHub',
    description: 'Disclaimer for ToolStackHub. Information about the limitations of our free online tools and the accuracy of results provided.',
    creator: SITE_CONFIG.twitterHandle,
  },
};
 
export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface-50">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="font-display font-extrabold text-3xl text-surface-950 mb-3">Disclaimer</h1>
            <p className="text-surface-500 text-sm">Last updated: March 26, 2026</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
 
          <section>
            <p className="text-surface-600 leading-relaxed">
              The information and tools provided on ToolStackHub (toolstackhub.in) are for
              general informational and educational purposes only. While we strive to ensure
              accuracy, we make no representations or warranties of any kind, express or
              implied, about the completeness, accuracy, reliability, suitability, or
              availability of the tools or information.
            </p>
          </section>
 
          {[
            { title: 'Financial Tools Disclaimer', text: 'All financial calculators on ToolStackHub — including EMI calculators, SIP calculators, salary calculators, GST calculators, and gratuity calculators — provide estimates based on mathematical formulas and user-provided inputs. These results are for estimation and planning purposes only. Interest rates, tax slabs, GST rates, and regulations change frequently. Always verify financial calculations with a qualified Chartered Accountant, financial advisor, or your bank before making financial decisions. ToolStackHub is not a registered financial advisor and does not provide financial advice.' },
            { title: 'Legal Information Disclaimer', text: 'Information on ToolStackHub related to GST, income tax, professional tax, gratuity, and other legal/regulatory matters is provided for general awareness only. Indian tax laws and regulations are subject to frequent changes. ToolStackHub is not a law firm and does not provide legal advice. Consult a qualified professional for legal and compliance matters.' },
            { title: 'Medical and Health Disclaimer', text: 'ToolStackHub does not provide any medical, health, or wellness advice, tools, or information. If any tool result is used in a health context, please consult a qualified medical professional.' },
            { title: 'Investment Disclaimer', text: 'SIP and investment calculators on ToolStackHub show projections based on assumed rates of return. Mutual fund investments are subject to market risk. Past performance of any fund category is not indicative of future results. Returns shown are hypothetical and for illustrative purposes only. Consult a SEBI-registered investment advisor before making investment decisions.' },
            { title: 'Tool Accuracy', text: 'While we test our tools for accuracy, errors may exist. The formulas and rates used in our tools are based on publicly available information and standard calculation methods. We update tools when rates or regulations change, but we do not guarantee real-time accuracy. Always cross-check critical calculations with official sources.' },
            { title: 'External Links', text: 'ToolStackHub may contain links to external websites. We do not control these websites and are not responsible for their content, privacy policies, or accuracy. The inclusion of any link does not imply endorsement.' },
            { title: 'Advertising', text: 'ToolStackHub displays advertisements through Google AdSense. The presence of an advertisement does not constitute an endorsement of the advertised product or service. We are not responsible for the claims made in advertisements displayed on our website.' },
            { title: 'Changes', text: 'This disclaimer may be updated periodically. The "Last Updated" date at the top of this page indicates when it was last revised. Continued use of the website after changes constitutes acceptance of the revised disclaimer.' },
          ].map(s => (
            <section key={s.title}>
              <h2 className="font-display font-bold text-lg text-surface-900 mb-2">{s.title}</h2>
              <p className="text-surface-600 leading-relaxed text-sm">{s.text}</p>
            </section>
          ))}
 
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>In plain English:</strong> Our tools are free and we try hard to make them accurate.
            But for important financial, legal, or medical decisions, please consult a qualified professional.
            Our tools are starting points, not final answers.
          </div>
 
          <div className="flex gap-4 text-sm pt-4 border-t border-surface-200">
            <Link href="/privacy-policy" className="text-brand-700 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-brand-700 hover:underline">Terms of Use</Link>
            <Link href="/contact" className="text-brand-700 hover:underline">Contact Us</Link>
          </div>
 
        </div>
      </main>
      <Footer />
    </>
  );
}
