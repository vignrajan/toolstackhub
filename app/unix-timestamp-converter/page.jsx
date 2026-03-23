import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdBanner, { AffiliateCTA } from '../../components/AdBanner';
import TimestampConverter from '../../components/tools/TimestampConverter';
import { SITE_CONFIG } from '../../data/tools';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata = {
  title: 'Unix Timestamp Converter Online Free – Epoch to Date Instantly',
  description: 'Convert Unix timestamps to human-readable dates and back online free. Supports seconds and milliseconds. Live clock included. No signup required. Try now!',
  keywords: [
    'unix timestamp converter',
    'epoch to date converter',
    'timestamp to date online',
    'unix time converter',
    'epoch converter online',
    'milliseconds to date converter',
    'date to unix timestamp',
    'unix timestamp to human readable',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/unix-timestamp-converter` },
  openGraph: {
    title: 'Unix Timestamp Converter Online Free – Epoch to Date Instantly',
    description: 'Convert Unix timestamps to readable dates and back. Seconds and milliseconds supported. Live clock. Free, no signup.',
    url: `${SITE_CONFIG.url}/unix-timestamp-converter`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unix Timestamp Converter – Epoch to Date Free',
    description: 'Convert Unix timestamps to human-readable dates instantly. Seconds and milliseconds. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a Unix timestamp?',
    a: 'A Unix timestamp (also called epoch time) is the number of seconds that have elapsed since January 1, 1970 00:00:00 UTC — a fixed reference point called the Unix epoch. It is timezone-neutral, making it the universal time format used in databases, APIs, log files, and programming languages worldwide. The current timestamp is approximately 1,700,000,000 seconds.',
  },
  {
    q: 'How do I convert a Unix timestamp to a readable date?',
    a: 'Paste your 10-digit Unix timestamp (seconds) or 13-digit timestamp (milliseconds) into the input field and click Convert. The tool instantly shows the equivalent date and time in your local timezone and UTC. You can also click "Use Current Time" to get today\'s timestamp.',
  },
  {
    q: 'What is the difference between seconds and milliseconds timestamps?',
    a: 'A Unix timestamp in seconds is 10 digits (e.g. 1700000000). A timestamp in milliseconds is 13 digits (e.g. 1700000000000) — it is simply the seconds value multiplied by 1000. JavaScript\'s Date.now() returns milliseconds. Most databases and Unix system calls use seconds. The tool auto-detects which format you entered based on the number of digits.',
  },
  {
    q: 'How do I convert a date back to a Unix timestamp?',
    a: 'Use the Date to Timestamp section. Enter a date and time using the date/time picker fields and click Convert. The tool shows the Unix timestamp in both seconds and milliseconds format for the exact moment you specified.',
  },
  {
    q: 'Is the Unix timestamp converter free?',
    a: 'Yes — completely free with no account, no signup, and no usage limits. Convert timestamps as many times as you need.',
  },
];

// ── Structured data ───────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Unix Timestamp Converter',
      description: 'Free online Unix timestamp converter. Convert epoch timestamps to human-readable dates and back. Supports seconds and milliseconds. Live current timestamp clock included.',
      url: `${SITE_CONFIG.url}/unix-timestamp-converter`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Unix timestamp to human-readable date',
        'Date to Unix timestamp conversion',
        'Seconds and milliseconds support',
        'Local timezone and UTC display',
        'Live current timestamp clock',
        'Auto-detection of seconds vs milliseconds',
      ],
      provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Developer Tools', item: `${SITE_CONFIG.url}/#developer` },
        { '@type': 'ListItem', position: 3, name: 'Unix Timestamp Converter', item: `${SITE_CONFIG.url}/unix-timestamp-converter` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert a Unix Timestamp Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Paste your timestamp', text: 'Paste your 10-digit (seconds) or 13-digit (milliseconds) Unix timestamp into the input field.' },
        { '@type': 'HowToStep', position: 2, name: 'Click Convert',        text: 'Click Convert Timestamp to see the human-readable date and time instantly.' },
        { '@type': 'HowToStep', position: 3, name: 'View local and UTC',   text: 'The result shows the date in both your local timezone and UTC.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the result',      text: 'Click Copy to copy the readable date to your clipboard.' },
      ],
    },
  ],
};

// ── Common timestamp values ───────────────────────────────────
const notableTimestamps = [
  { ts: '0',           date: 'Jan 1, 1970 00:00:00 UTC', label: 'Unix Epoch (time zero)' },
  { ts: '1000000000',  date: 'Sep 9, 2001 01:46:40 UTC', label: 'One billion seconds' },
  { ts: '1234567890',  date: 'Feb 13, 2009 23:31:30 UTC', label: 'Leet timestamp (1234567890)' },
  { ts: '1700000000',  date: 'Nov 14, 2023 22:13:20 UTC', label: '1.7 trillion seconds' },
  { ts: '2000000000',  date: 'May 18, 2033 03:33:20 UTC', label: 'Two billion seconds' },
  { ts: '2147483647',  date: 'Jan 19, 2038 03:14:07 UTC', label: 'Year 2038 problem (32-bit max)' },
];

// ── Where timestamps appear ───────────────────────────────────
const whereUsed = [
  { place: 'JavaScript',   example: 'Date.now()',                        unit: 'milliseconds', digits: 13 },
  { place: 'Python',       example: 'time.time()',                       unit: 'seconds',      digits: 10 },
  { place: 'MySQL / PostgreSQL', example: 'UNIX_TIMESTAMP()',           unit: 'seconds',      digits: 10 },
  { place: 'Redis',        example: 'TTL keys, EXPIREAT',                unit: 'seconds',      digits: 10 },
  { place: 'JWT tokens',   example: 'exp, iat, nbf claims',              unit: 'seconds',      digits: 10 },
  { place: 'REST APIs',    example: 'created_at, updated_at fields',     unit: 'varies',       digits: '10 or 13' },
  { place: 'Log files',    example: 'Apache, Nginx, syslog entries',     unit: 'seconds',      digits: 10 },
  { place: 'AWS / Cloud',  example: 'S3 metadata, Lambda event time',    unit: 'milliseconds', digits: 13 },
];

// ── Page ──────────────────────────────────────────────────────
export default function UnixTimestampConverterPage() {
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
                <li className="text-surface-800 font-medium">Unix Timestamp Converter</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Free Unix Timestamp Converter – Convert Epoch to Human-Readable Date
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Convert Unix timestamps to readable dates and dates back to Unix timestamps
              instantly. Supports seconds and milliseconds. Live current timestamp clock,
              local timezone and UTC display. Free, no signup, fully browser-based.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                '✅ 100% Free',
                '⏱️ Seconds & Milliseconds',
                '🌍 Local & UTC Display',
                '🔴 Live Clock',
                '🔒 No Signup',
                '💻 Developer Ready',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TimestampConverter />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <AffiliateCTA toolName="Unix Timestamp Converter" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AdBanner variant="content" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Section 1 — About */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Unix Timestamp Converter – Epoch to Date & Date to Epoch
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Our free <strong>Unix timestamp converter</strong> translates epoch timestamps
                into human-readable dates and converts dates back to Unix timestamps — instantly,
                in your browser, with no server calls. Unix timestamps appear everywhere in
                software development: API responses, database records, log files, JWT tokens,
                Redis TTLs, and cloud platform metadata. When you see a number like{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">1700000000</code>{' '}
                in a JSON response and need to know what date it represents, this tool gives
                you the answer in one paste.
              </p>
              <p>
                The tool auto-detects whether your timestamp is in seconds (10 digits) or
                milliseconds (13 digits) — the two most common formats. It displays the
                result in both your local timezone and UTC, so you always have the right
                reference regardless of where your server or users are located.
              </p>
              <p>
                Whether you need an <strong>epoch to date converter</strong> to debug an
                API response, a <strong>timestamp to date online</strong> tool to read
                a log file, a <strong>milliseconds to date converter</strong> for a
                JavaScript timestamp, or a <strong>date to Unix timestamp</strong>
                converter for a database query — this single tool handles all four
                directions with zero configuration.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Use */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display font-bold text-2xl text-surface-900 mb-6">
              How to Convert a Unix Timestamp
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: '01', icon: '📋', title: 'Paste Your Timestamp',    desc: 'Paste any 10-digit (seconds) or 13-digit (milliseconds) Unix timestamp into the input field. The format is auto-detected.' },
                { step: '02', icon: '🔄', title: 'Click Convert',           desc: 'Click Convert Timestamp. The human-readable date appears in both your local timezone and UTC instantly.' },
                { step: '03', icon: '📅', title: 'Read Local & UTC Time',   desc: 'Both local time (your browser\'s timezone) and UTC are shown — useful for comparing server and client times.' },
                { step: '04', icon: '🔁', title: 'Convert Date to Epoch',   desc: 'Use the Date to Timestamp section. Pick a date and time from the picker and get the Unix timestamp in seconds and milliseconds.' },
                { step: '05', icon: '⏱️', title: 'Use Current Time',        desc: 'Click "Use Current Time" to instantly load today\'s timestamp — useful as a quick reference or starting point.' },
                { step: '06', icon: '📋', title: 'Copy & Use',              desc: 'Click the copy icon next to any result to copy the timestamp or date to your clipboard for use in queries and code.' },
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

          {/* Section 3 — Where timestamps appear */}
          <section aria-labelledby="where-heading">
            <h2 id="where-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Where Unix Timestamps Appear in Development
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Platform / Language</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Common Source</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Unit</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Digits</th>
                  </tr>
                </thead>
                <tbody>
                  {whereUsed.map((row, i) => (
                    <tr key={row.place} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{row.place}</td>
                      <td className="px-4 py-3">
                        <code className="text-xs bg-surface-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">{row.example}</code>
                      </td>
                      <td className="px-4 py-3 text-surface-600">{row.unit}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{row.digits}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-3">
              Quick rule: 10 digits = seconds. 13 digits = milliseconds. If unsure, paste into the tool — it auto-detects.
            </p>
          </section>

          {/* Section 4 — Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🔄', title: 'Bidirectional Conversion',     desc: 'Convert timestamp → date AND date → timestamp in both directions — no separate tools needed for each direction.' },
                { icon: '⚡', title: 'Auto-Detect Seconds/ms',       desc: 'Automatically detects whether your timestamp is in seconds (10 digits) or milliseconds (13 digits) — no manual selection.' },
                { icon: '🌍', title: 'Local & UTC Display',          desc: 'Results shown in both your browser\'s local timezone and UTC — essential for debugging server and client time differences.' },
                { icon: '🔴', title: 'Live Current Timestamp',       desc: 'A live clock displays the current Unix timestamp in real time — updating every second for accurate reference.' },
                { icon: '📋', title: 'One-Click Copy',               desc: 'Copy any timestamp or date result to clipboard in one click for use in SQL queries, API calls, and code.' },
                { icon: '💻', title: 'Browser-Based & Private',      desc: 'All conversion runs locally in your browser using JavaScript Date. No data sent to any server.' },
                { icon: '📅', title: 'Full Date Picker',             desc: 'Convert any specific date and time to a Unix timestamp using the date/time picker — historical or future dates.' },
                { icon: '📱', title: 'Mobile Friendly',              desc: 'Works on all modern mobile browsers. Debug API responses directly from your smartphone.' },
              ].map(f => (
                <div key={f.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900 text-sm">{f.title}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Use Cases */}
          <section aria-labelledby="usecases-heading">
            <h2 id="usecases-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🔌',
                  title: 'Debug API Responses',
                  desc: 'REST and GraphQL APIs commonly return created_at, updated_at, and expires_at as Unix timestamps. Paste the value to instantly verify whether a record was created at the right time or a token is expired.',
                },
                {
                  icon: '📋',
                  title: 'Read Server Log Files',
                  desc: 'Apache, Nginx, and syslog entries often use Unix timestamps as prefixes. Convert log timestamps to readable dates to pinpoint when errors occurred relative to deployments or user reports.',
                },
                {
                  icon: '🗄️',
                  title: 'Database Timestamp Columns',
                  desc: 'PostgreSQL, MySQL, and Redis store timestamps as Unix epoch values. Convert database column values to verify data integrity, check record ages, and write correct WHERE clauses with timestamp ranges.',
                },
                {
                  icon: '🎫',
                  title: 'JWT Token Inspection',
                  desc: 'JWT tokens contain exp (expiry), iat (issued at), and nbf (not before) claims as Unix timestamps in seconds. Convert these to verify whether a token is expired or when it was issued.',
                },
                {
                  icon: '☁️',
                  title: 'Cloud Platform Metadata',
                  desc: 'AWS S3 object metadata, Lambda event timestamps, and CloudWatch log entries all use Unix timestamps. Convert them to understand when events occurred relative to your deployment timeline.',
                },
                {
                  icon: '💻',
                  title: 'JavaScript Date Debugging',
                  desc: 'JavaScript\'s Date.now() returns milliseconds (13 digits). Convert between new Date().getTime() output and human-readable format to debug time-based logic in frontend and Node.js applications.',
                },
              ].map(uc => (
                <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-blue-200 transition-colors">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-900">{uc.title}</div>
                    <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Notable timestamps */}
          <section aria-labelledby="notable-heading">
            <h2 id="notable-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Notable Unix Timestamps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {notableTimestamps.map(ts => (
                <div key={ts.ts} className="p-4 bg-white border border-surface-200 rounded-xl hover:border-blue-200 transition-colors">
                  <code className="text-sm font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded block mb-2">{ts.ts}</code>
                  <div className="font-semibold text-surface-900 text-sm mb-1">{ts.label}</div>
                  <div className="text-xs text-surface-500">{ts.date}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800">
                <strong>⚠️ Year 2038 Problem:</strong> 32-bit systems store Unix timestamps as signed integers.
                The maximum 32-bit value (2,147,483,647) corresponds to January 19, 2038 — after which
                32-bit systems will overflow to a negative number. Most modern systems use 64-bit timestamps
                and are not affected, but legacy embedded systems may be at risk.
              </p>
            </div>
          </section>

          {/* Section 7 — How it works */}
          <section aria-labelledby="advanced-heading">
            <h2 id="advanced-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              How Unix Timestamp Conversion Works
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-8">
              <p>
                The conversion uses JavaScript's built-in{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">Date</code> object.
                To convert a timestamp to a date, the tool passes the epoch value to{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">new Date(timestamp * 1000)</code>{' '}
                (multiplying by 1000 if the input is in seconds, since JavaScript expects milliseconds).
                The resulting Date object is then formatted using{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">toLocaleString()</code> for
                local time and{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">toUTCString()</code> for UTC.
              </p>
              <p>
                To convert a date back to a timestamp, the tool creates a Date object from the
                picker values and calls{' '}
                <code className="bg-surface-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">.getTime()</code>{' '}
                (returns milliseconds) then divides by 1000 for seconds. All processing runs
                locally using your browser's timezone settings — no server interaction needed.
              </p>

              <div className="bg-surface-900 rounded-xl p-4 mt-4 font-mono text-sm">
                <div className="text-surface-400 text-xs mb-3">{'// Quick reference — browser console'}</div>
                <div className="space-y-1">
                  <div><span className="text-surface-500">{'// Get current timestamp (ms)'}</span></div>
                  <div className="text-emerald-300">Date.now() <span className="text-surface-400">{'// → 1700000000000'}</span></div>
                  <div className="mt-2"><span className="text-surface-500">{'// Get current timestamp (s)'}</span></div>
                  <div className="text-emerald-300">Math.floor(Date.now() / 1000) <span className="text-surface-400">{'// → 1700000000'}</span></div>
                  <div className="mt-2"><span className="text-surface-500">{'// Convert timestamp to date'}</span></div>
                  <div className="text-emerald-300">new Date(1700000000 * 1000).toLocaleString()</div>
                  <div className="text-surface-400 text-xs mt-2">{'// → "11/14/2023, 10:13:20 PM" (your local timezone)'}</div>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-surface-900 mb-4">
              Why Use This Tool vs Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'vs epochconverter.com',     point: 'EpochConverter is the most popular alternative but has heavy ads and sends your data to a remote server. This tool is ad-light and fully local.' },
                { label: 'vs Browser console',        point: 'new Date(ts) in the console only shows local time. This tool shows both local and UTC simultaneously — essential for server-side debugging.' },
                { label: 'vs Postman / Insomnia',     point: 'API tools require the full application. This works instantly in any browser tab — useful when you\'re reviewing a log or response in a different window.' },
                { label: 'vs Python / Node terminal', point: 'Requires switching to a terminal and knowing the right command. This tool works in a browser tab in 2 seconds with no typing of conversion code.' },
              ].map(c => (
                <div key={c.label} className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <div className="font-semibold text-surface-900 text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{c.point}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — Keyword variation */}
          <section aria-labelledby="about2-heading">
            <h2 id="about2-heading" className="font-display font-bold text-2xl text-surface-900 mb-4">
              The Best Free Unix Timestamp Converter Online
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                Whether you need an <strong>epoch to date converter</strong> to decode
                an API response, a <strong>milliseconds to date converter</strong> for
                a JavaScript timestamp, a <strong>date to Unix timestamp</strong> tool
                for a database query, or a <strong>unix time converter</strong> that
                shows both local time and UTC — this tool handles every scenario in
                one place with no configuration required.
              </p>
              <p>
                The auto-detection of seconds vs milliseconds eliminates the most
                common source of confusion when working with timestamps. You no longer
                need to count digits or check documentation — paste the timestamp and
                the correct conversion happens automatically.
              </p>
            </div>
          </section>

          {/* Section 9 — FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                    itemProp="name">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 10 — Programmatic variants */}
          <section aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="font-display font-bold text-xl text-surface-900 mb-4">
              More Timestamp Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/unix-timestamp-to-date',       label: 'Unix Timestamp to Date',       desc: 'Convert any epoch timestamp to a readable date and time' },
                { href: '/epoch-to-human-readable',      label: 'Epoch to Human Readable',      desc: 'Convert epoch time to a natural language date format' },
                { href: '/milliseconds-to-date-converter',label: 'Milliseconds to Date',         desc: 'Convert 13-digit JavaScript millisecond timestamps to dates' },
                { href: '/date-to-timestamp-converter',  label: 'Date to Timestamp Converter',  desc: 'Convert any date and time to a Unix timestamp' },
                { href: '/timestamp-difference-calculator',label:'Timestamp Difference',          desc: 'Calculate the duration between two Unix timestamps' },
                { href: '/utc-to-local-time-converter',  label: 'UTC to Local Time Converter',  desc: 'Convert UTC time to your local timezone' },
              ].map(v => (
                <Link key={v.href} href={v.href}
                  className="flex flex-col gap-1 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors group">
                  <div className="font-semibold text-blue-800 text-sm group-hover:underline">{v.label}</div>
                  <div className="text-xs text-blue-600">{v.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 11 — Related tools */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-bold text-xl text-surface-900 mb-5">
              More Free Developer Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/json-formatter-online',     icon: '{ }', label: 'JSON Formatter Online',     desc: 'Format API responses containing timestamp fields' },
                { href: '/base64-encoder-online',     icon: '🔡',  label: 'Base64 Encoder Online',     desc: 'Decode JWT tokens containing timestamp claims' },
                { href: '/uuid-generator-online',     icon: '🆔',  label: 'UUID Generator Online',     desc: 'Generate UUIDs to pair with timestamp-based records' },
                { href: '/regex-tester-online',       icon: '🔍',  label: 'Regex Tester Online',       desc: 'Test patterns for extracting timestamps from log files' },
                { href: '/age-calculator-online',     icon: '🎂',  label: 'Age Calculator Online',     desc: 'Calculate exact age between dates with similar precision' },
                { href: '/url-encoder-online',        icon: '🔗',  label: 'URL Encoder Online',        desc: 'Encode timestamps for use in URL query parameters' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors group">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-surface-800 group-hover:text-blue-800 text-sm">{l.label}</div>
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