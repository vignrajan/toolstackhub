import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Page Not Found — ToolStackHub',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6">🔧</div>
          <h1 className="font-display font-bold text-4xl text-surface-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-surface-500 mb-8 leading-relaxed">
            The tool or page you're looking for doesn't exist yet —
            or maybe it moved to a better URL.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="btn-primary">
              ← Back to Home
            </Link>
            <Link href="/#all-tools" className="btn-secondary">
              Browse Tools
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
