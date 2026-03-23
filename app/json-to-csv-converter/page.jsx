import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import JsonToCsv from '../../components/tools/JsonToCsv';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'JSON to CSV Converter Online Free – Convert JSON to CSV Instantly',
  description: 'Convert JSON to CSV online for free. Paste your JSON array and download a properly formatted CSV file instantly. Supports all delimiters. No signup needed.',
  alternates: { canonical: `${SITE_CONFIG.url}/json-to-csv-converter` },
  openGraph: {
    title: 'JSON to CSV Converter Online Free – Convert JSON to CSV Instantly',
    description: 'Convert JSON arrays to CSV format instantly. Free, supports all delimiters, download as .csv. No signup.',
    url: `${SITE_CONFIG.url}/json-to-csv-converter`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'JSON to CSV Converter',
      description: 'Free online tool to convert JSON arrays to properly formatted CSV files with any delimiter.',
      url: `${SITE_CONFIG.url}/json-to-csv-converter`,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What JSON formats are supported?', acceptedAnswer: { '@type': 'Answer', text: 'Arrays of objects (most common format), single objects converted to key-value rows, and arrays with mixed or missing keys.' } },
        { '@type': 'Question', name: 'What delimiters can I use?', acceptedAnswer: { '@type': 'Answer', text: 'Comma (,), semicolon (;), tab, and pipe (|) delimiters are all supported. Choose whichever your target application requires.' } },
        { '@type': 'Question', name: 'Does it handle special characters?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — values containing commas, quotes, or newlines are automatically wrapped in double quotes and properly escaped per the CSV specification.' } },
        { '@type': 'Question', name: 'Can I open the CSV in Excel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — download the .csv file and open it directly in Microsoft Excel, Google Sheets, or any spreadsheet application.' } },
        { '@type': 'Question', name: 'Is my data safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all conversion happens in your browser using JavaScript. Your data is never sent to any server.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'JSON to CSV Converter', item: `${SITE_CONFIG.url}/json-to-csv-converter` },
      ],
    },
  ],
};

const relatedLinks = [
  { href: '/json-formatter-online',  label: 'JSON Formatter Online',  desc: 'Format and validate your JSON before converting' },
  { href: '/base64-encoder-online',  label: 'Base64 Encoder Online',  desc: 'Encode CSV data for secure transmission' },
  { href: '/url-encoder-online',     label: 'URL Encoder Online',     desc: 'Encode URL values found in JSON data' },
  { href: '/regex-tester-online',    label: 'Regex Tester Online',    desc: 'Test patterns on your CSV output' },
];

const variantLinks = [
  { href: '/json-to-csv-download',        label: 'JSON to CSV Download' },
  { href: '/json-array-to-csv',           label: 'JSON Array to CSV' },
  { href: '/json-to-excel-converter',     label: 'JSON to Excel Converter' },
  { href: '/json-to-csv-google-sheets',   label: 'JSON to CSV for Google Sheets' },
];

const faqs = [
  { q: 'What JSON formats are supported?',  a: 'Arrays of objects (most common format), single objects converted to key-value rows, and arrays with mixed or missing keys.' },
  { q: 'What delimiters can I use?',        a: 'Comma (,), semicolon (;), tab, and pipe (|) delimiters are all supported. Choose whichever your target application requires.' },
  { q: 'Does it handle special characters?',a: 'Yes — values containing commas, quotes, or newlines are automatically wrapped in double quotes and properly escaped.' },
  { q: 'Can I open the CSV in Excel?',      a: 'Yes — download the .csv file and open it directly in Microsoft Excel, Google Sheets, or any spreadsheet application.' },
  { q: 'Is my data safe?',                  a: 'Yes — all conversion runs in your browser. Your data is never sent to any server.' },
];

export default function JsonToCsvPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        <div className="bg-surface-50 border-b border-surface-100 py-3">
          <AdBanner variant="top" />
        </div>

        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/#developer" className="hover:text-brand-600 transition-colors text-blue-600">Developer Tools</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">JSON to CSV Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              JSON to CSV Converter Online – Convert JSON Arrays to CSV Instantly
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert JSON arrays to properly formatted CSV files in one click. Paste your JSON,
              choose a delimiter, and download a clean .csv file ready for Excel, Google Sheets,
              or any database import. Free, no signup, runs in your browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['✅ 100% Free', '⚡ Instant Conversion', '📊 Excel & Sheets Ready', '🔒 No Signup', '🔐 No Data Stored'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JsonToCsv />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="JSON to CSV Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">

          {/* About */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
              Convert JSON to CSV Online – Free & Instant
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>JSON to CSV converter online</strong> transforms JSON arrays
                into properly formatted CSV files in seconds. When working with APIs, databases,
                or data exports, JSON is the standard format — but spreadsheets, reporting tools,
                and data pipelines often require CSV. This tool bridges that gap instantly.
              </p>
              <p>
                Paste your JSON array, select your preferred delimiter (comma, semicolon, tab,
                or pipe), and click Convert. The tool automatically extracts all unique keys from
                your JSON objects and uses them as CSV column headers, mapping each object's
                values to the correct columns — even handling missing keys with empty cells.
              </p>
              <p>
                All special character escaping is handled automatically. Values containing commas,
                quotes, or newlines are wrapped in double quotes and escaped per the RFC 4180
                CSV specification, ensuring your output opens correctly in Microsoft Excel,
                Google Sheets, LibreOffice Calc, and any other tool that reads standard CSV.
              </p>
            </div>
          </section>

          {/* How to use */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert JSON to CSV
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your JSON',    desc: 'Paste your JSON array into the input panel. Must be a valid JSON array of objects.' },
                { step: '02', icon: '⚙️', title: 'Choose Delimiter',   desc: 'Select comma, semicolon, tab, or pipe depending on your target application.' },
                { step: '03', icon: '🔄', title: 'Click Convert',      desc: 'Click Convert to CSV. Column headers are extracted from JSON keys automatically.' },
                { step: '04', icon: '⬇️', title: 'Download CSV',       desc: 'Copy the output or click Download CSV to save a .csv file to your device.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3 p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-surface-900">{item.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔌', title: 'API Response Export',     desc: 'Convert REST API JSON responses to CSV for analysis in Excel or Google Sheets without writing scripts.' },
                { icon: '🗄️', title: 'Database Migration',      desc: 'Export database records as JSON and convert to CSV for bulk import into another database or spreadsheet tool.' },
                { icon: '📊', title: 'Data Analysis',           desc: 'Transform JSON data exports from analytics platforms into CSV for processing in pandas, R, or BI tools.' },
                { icon: '🛒', title: 'eCommerce Catalogs',      desc: 'Convert product JSON from a CMS or API to CSV format for uploading to Shopify, WooCommerce, or Amazon.' },
                { icon: '📧', title: 'CRM & Email Imports',     desc: 'Convert contact or lead data from JSON format to CSV for importing into HubSpot, Salesforce, or Mailchimp.' },
                { icon: '🧪', title: 'Test Data Generation',    desc: 'Convert JSON test fixture files to CSV for seeding databases, loading into test frameworks, or QA reporting.' },
              ].map(uc => (
                <div key={uc.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Delimiter guide */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Which Delimiter Should I Use?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { delim: 'Comma  ,',    color: 'blue',    desc: 'The standard CSV format. Use this for Excel, Google Sheets, and most data tools.',           best: 'Default choice for most use cases' },
                { delim: 'Semicolon ;', color: 'emerald', desc: 'Common in European countries where comma is used as the decimal separator in numbers.',       best: 'European Excel and LibreOffice' },
                { delim: 'Tab  →',      color: 'amber',   desc: 'Creates a TSV (Tab Separated Values) file. Useful when your data contains commas or semicolons.', best: 'Data with commas in values' },
                { delim: 'Pipe  |',     color: 'violet',  desc: 'Less common but safe when data contains commas, semicolons, and tabs simultaneously.',       best: 'Complex data with mixed characters' },
              ].map(d => (
                <div key={d.delim} className={`p-4 bg-${d.color}-50 border border-${d.color}-200 rounded-xl`}>
                  <div className={`font-mono font-bold text-${d.color}-700 text-lg mb-1`}>{d.delim}</div>
                  <div className="text-sm text-surface-600 leading-relaxed mb-2">{d.desc}</div>
                  <div className={`text-xs text-${d.color}-700 font-medium`}>Best for: {d.best}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Variant pages */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {variantLinks.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{v.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section>
            <h2 className="font-display font-bold text-xl text-surface-900 mb-5">More Free Developer Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-brand-700 text-sm">{l.label}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}