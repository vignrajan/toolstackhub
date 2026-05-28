import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'Free Student Tools India — CGPA, Percentage, Unit Converter & More',
  description: 'Free online tools for Indian students: CGPA to percentage calculator, unit converter, age calculator, BMI calculator, random name picker, and more. No signup.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/student` },
  openGraph: {
    title: 'Free Student Tools India — CGPA, Percentage, Unit Converter',
    description: 'Free tools for Indian students: CGPA calculator, unit converter, age calculator, BMI, typing test. All free, no login.',
    url: `${SITE_CONFIG.url}/tools/student`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Student Tools India',
    description: 'CGPA calculator, unit converter, typing test, age calculator and more. All free.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const STUDENT_TOOLS = [
  { slug: 'cgpa-calculator',            name: 'CGPA Calculator',             icon: '🎓', desc: 'Grade-wise CGPA and CGPA to % for VTU, Anna, Mumbai, Pune & more.' },
  { slug: 'percentage-calculator-online', name: 'Percentage Calculator',      icon: '📊', desc: 'Calculate percentage, percentage increase/decrease, and percentage of.' },
  { slug: 'age-calculator-online',       name: 'Age Calculator',              icon: '🎂', desc: 'Calculate exact age in years, months, days from date of birth.' },
  { slug: 'bmi-calculator',             name: 'BMI Calculator',              icon: '⚖️', desc: 'Calculate BMI using Indian/Asian WHO thresholds.' },
  { slug: 'unit-converter',             name: 'Unit Converter',              icon: '🔄', desc: 'Convert length, weight, temperature, area, volume, speed, and storage.' },
  { slug: 'typing-test',                name: 'Typing Test',                 icon: '⌨️', desc: 'Test your typing speed and accuracy. WPM test with accuracy score.' },
  { slug: 'word-counter-online',        name: 'Word Counter',                icon: '📝', desc: 'Count words, characters, sentences, paragraphs, and reading time.' },
  { slug: 'pomodoro-timer-online',      name: 'Pomodoro Timer',              icon: '🍅', desc: '25-minute study timer with customizable work and break intervals.' },
  { slug: 'random-number-generator',    name: 'Random Number Generator',     icon: '🎲', desc: 'Generate random numbers for dice rolls, picks, and experiments.' },
  { slug: 'case-converter-online',      name: 'Case Converter',              icon: '🔡', desc: 'Convert text to UPPER, lower, Title, and camelCase instantly.' },
  { slug: 'lorem-ipsum-generator',      name: 'Lorem Ipsum Generator',       icon: '📄', desc: 'Generate placeholder text for mockups and design projects.' },
  { slug: 'text-to-speech-online',      name: 'Text to Speech',              icon: '🔊', desc: 'Convert text to speech. Multiple languages and voices.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Free Student Tools India',
      description: 'Free online tools for Indian students: CGPA calculator, unit converter, age calculator, typing test, word counter, and more.',
      url: `${SITE_CONFIG.url}/tools/student`,
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Student Tools', item: `${SITE_CONFIG.url}/tools/student` },
      ],
    },
  ],
};

export default function StudentToolsCategoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">Student Tools</li>
              </ol>
            </nav>
            <div className="flex items-start gap-4">
              <div className="text-4xl p-3 bg-violet-100 rounded-2xl">🎓</div>
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 tracking-tight">
                  Free Tools for Indian Students
                </h1>
                <p className="text-surface-500 text-lg leading-relaxed mt-3 max-w-3xl">
                  {STUDENT_TOOLS.length}+ free tools for academic and everyday student needs. CGPA calculators,
                  unit converters, typing tests, and productivity tools. No signup, no login, no tracking.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['✅ 100% Free', '🔒 Browser-Only', '🇮🇳 India-Specific', '🎓 University Formulas', '⚡ Instant'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STUDENT_TOOLS.map(tool => (
              <Link key={tool.slug} href={`/${tool.slug}`}
                className="group p-5 bg-white border border-surface-200 rounded-2xl hover:border-violet-300 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h2 className="font-semibold text-surface-900 group-hover:text-violet-700 transition-colors text-sm">{tool.name}</h2>
                    <p className="text-xs text-surface-500 mt-1 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-surface-900 mb-3">About These Student Tools</h2>
            <p className="text-surface-600 text-sm leading-relaxed">
              All tools are free, run entirely in your browser, and are optimized for Indian students.
              The CGPA calculator supports 7 university-specific formulas including VTU, Anna University,
              Mumbai University, and Pune (SPPU). The unit converter covers all categories needed for
              physics and chemistry problems. No data is stored or transmitted.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
