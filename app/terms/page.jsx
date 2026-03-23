import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service — ToolStackHub',
  description: 'Terms of service for ToolStackHub free online tools.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display font-bold text-4xl text-surface-900 mb-4">Terms of Service</h1>
          <p className="text-surface-500 mb-10">Last updated: January 1, 2025</p>

          <div className="space-y-8">
            {[
              {
                title: '1. Use of Tools',
                content: 'ToolStackHub provides free online tools for personal and commercial use. You may use our tools without restriction for lawful purposes. You may not use our tools to process illegal, harmful, or offensive content.',
              },
              {
                title: '2. No Warranties',
                content: 'Our tools are provided "as is" without warranty of any kind. We do not guarantee that tools will always be available, accurate, or free from errors. Use them at your own risk.',
              },
              {
                title: '3. Intellectual Property',
                content: 'The ToolStackHub name, logo, and website design are our intellectual property. The open-source code, where applicable, is licensed under the MIT License.',
              },
              {
                title: '4. Limitation of Liability',
                content: 'ToolStackHub shall not be liable for any damages arising from your use of our tools, including but not limited to data loss, corruption, or any other damages.',
              },
              {
                title: '5. Changes',
                content: 'We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.',
              },
            ].map(s => (
              <section key={s.title}>
                <h2 className="font-display font-bold text-xl text-surface-900 mb-3">{s.title}</h2>
                <p className="text-surface-600 leading-relaxed">{s.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
