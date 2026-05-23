import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

const POST = {
  slug:        'how-to-minify-json-for-faster-api-responses',
  title:       'How to Minify JSON for Faster API Responses (Free Guide)',
  metaDesc:    'Learn how to minify JSON files to reduce API response size by up to 40%. Free online tool, code examples in JavaScript, Python, and curl. No signup.',
  category:    'Developer Tools',
  categorySlug:'developer-tools',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-23',
  updatedAt:   '2026-03-23',
  readTime:    8,
  coverEmoji:  '{ }',
  coverBg:     'from-violet-600 to-indigo-600',
};

export const metadata = {
  title:       `${POST.title} | ToolStackHub Blog`,
  description:  POST.metaDesc,
  alternates: { canonical: `${SITE_CONFIG.url}/blog/${POST.slug}` },
  openGraph: {
    title:       POST.title,
    description: POST.metaDesc,
    url:        `${SITE_CONFIG.url}/blog/${POST.slug}`,
    type:        'article',
    siteName:    SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    publishedTime: POST.publishedAt,
    modifiedTime:  POST.updatedAt,
    authors:       [POST.author],
  },
  twitter: {
    card:        'summary_large_image',
    title:        POST.title,
    description:  POST.metaDesc,
    creator:      SITE_CONFIG.twitterHandle,
  },
};

const faqs = [
  {
    q: 'How much does JSON minification reduce file size?',
    a: 'Minification typically reduces JSON file size by 15–40% depending on how much whitespace and indentation the original file contains. A heavily formatted JSON file with 4-space indentation, plenty of comments, and long key names can see 30–40% reduction. A JSON file with minimal formatting may only see 10–15% reduction. On top of minification, enabling gzip or Brotli compression on your server reduces size by a further 60–80%.',
  },
  {
    q: 'Does minifying JSON affect its validity or data?',
    a: 'No — JSON minification only removes whitespace characters (spaces, tabs, and newlines) between tokens. It never changes key names, values, data types, array order, or nested structure. The minified JSON is 100% semantically identical to the original and will parse to exactly the same JavaScript object or Python dictionary.',
  },
  {
    q: 'Should I minify JSON in development or only in production?',
    a: 'Only in production. In development, pretty-printed JSON with indentation makes debugging, logging, and code review significantly easier. Use your JSON formatter to pretty-print during development. Apply minification as part of your build pipeline or at the API response layer for production deployments only.',
  },
  {
    q: 'What is the difference between JSON minification and JSON compression?',
    a: 'JSON minification removes whitespace at the text level — reducing file size by 15–40%. JSON compression (gzip or Brotli) operates at the binary level on the already-minified text — reducing size by a further 60–80%. Both are complementary: minify first, then compress. Do not skip minification just because compression is enabled — the two techniques stack.',
  },
  {
    q: 'Is it faster to minify JSON on the server or send it pre-minified?',
    a: 'Pre-minified is faster. Minifying on every API request adds CPU overhead that compounds under load. The best practice is to minify JSON at build time (for static responses) or cache the minified output (for dynamic responses). For very large JSON payloads that change frequently, server-side streaming with compression enabled is the most efficient approach.',
  },
  {
    q: 'Can I minify JSON that contains comments?',
    a: 'Standard JSON does not support comments — the JSON specification explicitly disallows them. If your file contains comments (common in configuration files like tsconfig.json or .eslintrc), it is JSONC (JSON with Comments), not valid JSON. Our formatter tool can strip comments as part of the minification process. Pure JSON minification tools will throw a parse error on commented files.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: POST.title,
      description: POST.metaDesc,
      url: `${SITE_CONFIG.url}/blog/${POST.slug}`,
      datePublished: POST.publishedAt,
      dateModified:  POST.updatedAt,
      author: { '@type': 'Organization', name: POST.author, url: SITE_CONFIG.url },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url:  SITE_CONFIG.url,
        logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${POST.slug}` },
      articleSection: POST.category,
      keywords: 'minify json online, minify json file, json minifier, compress json, reduce json size, json for api response',
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: POST.title, item: `${SITE_CONFIG.url}/blog/${POST.slug}` },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Minify a JSON File Online',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Open the JSON formatter tool', text: 'Go to toolstackhub.in/json-formatter-online in any browser.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste your JSON', text: 'Paste your formatted or pretty-printed JSON into the input area.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Minify', text: 'Click the Minify button to remove all whitespace instantly.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy the minified output', text: 'Click Copy to copy the compact single-line JSON to your clipboard.' },
      ],
    },
  ],
};

export default function PostMinifyJson() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Header ─────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">{POST.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full">
                {POST.category}
              </span>
              <span className="text-sm text-surface-400">{POST.readTime} min read</span>
              <span className="text-surface-300">·</span>
              <time dateTime={POST.publishedAt} className="text-sm text-surface-400">
                {new Date(POST.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-4">
              {POST.title}
            </h1>

            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              Pretty-printed JSON is developer-friendly. Production APIs are not the place for developer-friendly formatting.
              Every space, tab, and newline in your JSON response is bytes your users are waiting to download.
              This guide covers exactly how to strip them — with a free online tool, command-line methods,
              and code examples in JavaScript, Python, and Go.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-base">🛠️</div>
              <div>
                <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                <div className="text-xs text-surface-400">
                  Updated {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────── */}
        <div className={`h-44 sm:h-56 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-5xl font-display font-black text-white mb-2 tracking-tight">
              {`{ }`}
            </div>
            <div className="text-white/70 text-sm font-medium font-mono">
              minify · compress · optimize
            </div>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10">

            {/* ── Why whitespace costs you ─────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                What JSON Minification Is (And Why Whitespace Is Expensive)
              </h2>
              <p className="text-surface-600 leading-relaxed">
                When a developer writes or formats JSON for readability, they add whitespace —
                spaces after colons, spaces after commas, newlines between fields, and
                indentation to show nesting. This makes JSON easy to read and debug. But
                the JSON specification treats all of that whitespace as optional — it carries
                zero semantic meaning. A JSON parser ignores it completely.
              </p>
              <p className="text-surface-600 leading-relaxed mt-3">
                <strong className="text-surface-800">JSON minification</strong> removes all
                of that optional whitespace, producing a compact single-line string that
                encodes exactly the same data in fewer bytes. Here is what that looks like
                in practice:
              </p>

              {/* Before/after visual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-surface-900 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-surface-400 text-xs uppercase tracking-wider">Pretty-printed</div>
                    <div className="text-red-400 text-xs font-mono font-bold">287 bytes</div>
                  </div>
                  <pre className="font-mono text-xs text-surface-300 leading-5 overflow-x-auto">{`{
  "user": {
    "id": 1042,
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "role": "admin",
    "active": true,
    "created_at": 1700000000
  }
}`}</pre>
                </div>
                <div className="bg-surface-900 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-surface-400 text-xs uppercase tracking-wider">Minified</div>
                    <div className="text-emerald-400 text-xs font-mono font-bold">173 bytes</div>
                  </div>
                  <pre className="font-mono text-xs text-emerald-300 leading-5 break-all whitespace-pre-wrap">{`{"user":{"id":1042,"name":"Priya Sharma","email":"priya@example.com","role":"admin","active":true,"created_at":1700000000}}`}</pre>
                  <div className="mt-3 text-[10px] text-emerald-500 font-semibold">↓ 40% smaller — same data</div>
                </div>
              </div>

              <p className="text-surface-600 leading-relaxed mt-4">
                That is 40% fewer bytes for a simple single-object response. At scale —
                a list endpoint returning 100 objects, called 10,000 times per day —
                that 40% reduction translates directly into bandwidth costs, response
                latency, and client parsing time.
              </p>
            </section>

            {/* ── Free tool CTA ─────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-violet-200"
              style={{ background: 'linear-gradient(135deg,#f5f3ff 0%,#ede9fe 100%)' }}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-display font-black text-violet-700 shrink-0">{ }</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">Free Tool</div>
                    <h3 className="font-display font-bold text-xl text-violet-900 mb-2">
                      Minify JSON Instantly — Free Online Tool
                    </h3>
                    <p className="text-violet-800 text-sm leading-relaxed mb-4">
                      Paste any JSON and click Minify to strip all whitespace instantly.
                      Also works as a JSON formatter — pretty-print minified API responses
                      for debugging. Validates JSON syntax as you paste. No signup.
                      Runs entirely in your browser.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link href="/json-formatter-online"
                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        Open JSON Minifier →
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-violet-700">
                        <span>✓ Minify + Format</span>
                        <span>✓ Validates syntax</span>
                        <span>✓ Private</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Step by step ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                How to Minify a JSON File Online — Step by Step
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                The fastest method for one-off minification with no setup required.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Open the JSON Formatter Tool',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Go to{' '}
                        <Link href="/json-formatter-online" className="text-violet-700 hover:underline font-medium">
                          toolstackhub.in/json-formatter-online
                        </Link>.
                        The tool works as both a JSON formatter and a JSON minifier in the same interface.
                        No account, no installation, no browser extension required.
                      </p>
                    ),
                  },
                  {
                    step: 2,
                    title: 'Paste Your JSON',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Copy your pretty-printed JSON — from your editor, a file, an API
                        response, or any source — and paste it into the input area.
                        The tool validates the JSON syntax as you paste and shows an
                        error message immediately if the structure is malformed.
                      </p>
                    ),
                  },
                  {
                    step: 3,
                    title: 'Click Minify',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click the <strong>Minify</strong> button. All whitespace — spaces,
                        tabs, and newlines — is removed instantly. The output is a
                        compact single-line JSON string with the original size and
                        reduced size shown side by side.
                      </p>
                    ),
                  },
                  {
                    step: 4,
                    title: 'Copy the Minified Output',
                    body: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click <strong>Copy</strong> to copy the minified JSON to your clipboard.
                        Paste it into your API response, config file, environment variable,
                        or wherever you need compact JSON. To reverse it for debugging,
                        paste the minified output back and click <strong>Format</strong>.
                      </p>
                    ),
                  },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-violet-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-surface-900 mb-2">{item.title}</h3>
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Code methods ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                How to Minify JSON in Code — JavaScript, Python, Go &amp; curl
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                For production systems, you want minification in your build pipeline or
                API layer — not done manually. Here are the implementations in the most
                common backend languages.
              </p>

              <div className="space-y-5">

                {/* JavaScript */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-lg">🟨</span>
                    <h3 className="font-semibold text-surface-900">JavaScript / Node.js</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs leading-6 overflow-x-auto">
                      <div className="text-surface-400 mb-1">{'// Minify JSON string'}</div>
                      <div className="text-emerald-300">{'const minify = (json) => JSON.stringify(JSON.parse(json));'}</div>
                      <div className="mt-3 text-surface-400">{'// In an Express API response'}</div>
                      <div className="text-emerald-300">{'app.get(\'/api/user\', (req, res) => {'}</div>
                      <div className="text-emerald-300 ml-4">{'res.set(\'Content-Type\', \'application/json\');'}</div>
                      <div className="text-emerald-300 ml-4">{'res.send(JSON.stringify(userData)); // no spaces'}</div>
                      <div className="text-emerald-300">{'});'}</div>
                      <div className="mt-3 text-surface-400">{'// JSON.stringify() omits whitespace by default'}</div>
                      <div className="text-surface-400">{'// JSON.stringify(data, null, 2) adds it back for dev'}</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">
                      In Node.js, <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">JSON.stringify()</code> produces
                      minified output by default — it only adds whitespace when you pass
                      the third <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">space</code> argument.
                      Most Express and Fastify apps already send minified JSON without any extra configuration.
                    </p>
                  </div>
                </div>

                {/* Python */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-lg">🐍</span>
                    <h3 className="font-semibold text-surface-900">Python</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs leading-6 overflow-x-auto">
                      <div className="text-sky-300">import json</div>
                      <div className="mt-2 text-surface-400">{'# Minify a JSON string'}</div>
                      <div className="text-emerald-300">{'def minify(json_str):'}</div>
                      <div className="text-emerald-300 ml-4">{'return json.dumps(json.loads(json_str),'}</div>
                      <div className="text-emerald-300 ml-12">{'separators=(\',\', \':\'))'}</div>
                      <div className="mt-3 text-surface-400">{'# Minify a JSON file'}</div>
                      <div className="text-emerald-300">{'with open(\'data.json\') as f:'}</div>
                      <div className="text-emerald-300 ml-4">{'data = json.load(f)'}</div>
                      <div className="text-emerald-300">{'minified = json.dumps(data, separators=(\',\', \':\'))'}</div>
                      <div className="mt-2 text-surface-400">{'# In FastAPI — automatically minified'}</div>
                      <div className="text-emerald-300">{'return JSONResponse(content=data)'}</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">
                      The critical argument is <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">separators=(&#39;,&#39;, &#39;:&#39;)</code>.
                      Without it, Python's <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">json.dumps()</code> adds
                      a space after every colon and comma by default. With it, you get
                      compact output with no extra characters.
                    </p>
                  </div>
                </div>

                {/* Go */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-lg">🔵</span>
                    <h3 className="font-semibold text-surface-900">Go</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs leading-6 overflow-x-auto">
                      <div className="text-sky-300">{'import ('}</div>
                      <div className="text-sky-300 ml-4">{'"bytes"'}</div>
                      <div className="text-sky-300 ml-4">{'"encoding/json"'}</div>
                      <div className="text-sky-300">{')'}</div>
                      <div className="mt-2 text-surface-400">{'// Minify a JSON byte slice'}</div>
                      <div className="text-emerald-300">{'func minifyJSON(src []byte) ([]byte, error) {'}</div>
                      <div className="text-emerald-300 ml-4">{'buf := new(bytes.Buffer)'}</div>
                      <div className="text-emerald-300 ml-4">{'if err := json.Compact(buf, src); err != nil {'}</div>
                      <div className="text-emerald-300 ml-8">{'return nil, err'}</div>
                      <div className="text-emerald-300 ml-4">{'}'}</div>
                      <div className="text-emerald-300 ml-4">{'return buf.Bytes(), nil'}</div>
                      <div className="text-emerald-300">{'}'}</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">
                      Go's standard library includes <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">json.Compact()</code> which
                      strips insignificant whitespace from a JSON byte slice — no external
                      dependencies needed. For API handlers using <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">encoding/json</code>,
                      <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono"> json.Marshal()</code> already produces minified output by default.
                    </p>
                  </div>
                </div>

                {/* curl + jq */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-lg">⌨️</span>
                    <h3 className="font-semibold text-surface-900">Command Line (jq)</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs leading-6 overflow-x-auto">
                      <div className="text-surface-400 mb-1">{'# Minify a JSON file'}</div>
                      <div className="text-emerald-300">{'jq -c . input.json > output.json'}</div>
                      <div className="mt-2 text-surface-400">{'# Minify and pretty-print (for inspection)'}</div>
                      <div className="text-emerald-300">{'jq -c . input.json | jq .'}</div>
                      <div className="mt-2 text-surface-400">{'# Minify an API response on the fly'}</div>
                      <div className="text-emerald-300">{'curl -s https://api.example.com/users | jq -c .'}</div>
                      <div className="mt-2 text-surface-400">{'# Python one-liner (no dependencies)'}</div>
                      <div className="text-emerald-300">{"python3 -c \"import json,sys; print(json.dumps(json.load(sys.stdin),separators=(',',':')))\" < input.json"}</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">
                      The <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">-c</code> flag in jq stands for "compact output"
                      — it produces minified JSON. Install jq with <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">brew install jq</code> on Mac
                      or <code className="bg-surface-100 text-violet-700 px-1 rounded font-mono">apt install jq</code> on Linux.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Minification + compression stack ─── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Minification + Compression: The Full Optimization Stack
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                JSON minification and HTTP compression are separate, complementary
                techniques. Both should be used together in production.
              </p>

              <div className="bg-surface-900 rounded-2xl p-6 mb-5 font-mono text-xs">
                <div className="text-surface-400 mb-3 text-[11px] uppercase tracking-wider">Size reduction — cumulative example (1,000 user records)</div>
                <div className="space-y-3">
                  {[
                    { label: 'Original pretty-printed JSON', size: '850 KB', bar: 100, color: 'bg-red-500' },
                    { label: 'After minification',           size: '520 KB', bar: 61,  color: 'bg-amber-500' },
                    { label: 'After minify + gzip',          size: '98 KB',  bar: 12,  color: 'bg-emerald-500' },
                    { label: 'After minify + Brotli',        size: '72 KB',  bar: 8,   color: 'bg-blue-500' },
                  ].map(row => (
                    <div key={row.label}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-surface-400">{row.label}</span>
                        <span className="text-white font-bold">{row.size}</span>
                      </div>
                      <div className="h-2 bg-surface-700 rounded-full">
                        <div className={`h-2 ${row.color} rounded-full`} style={{ width: `${row.bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-violet-50 border border-violet-200 rounded-xl">
                  <h3 className="font-semibold text-violet-900 mb-2">Step 1 — Minify JSON (text level)</h3>
                  <p className="text-sm text-violet-800 leading-relaxed">
                    Remove whitespace in your application code or build process. Reduces
                    size 15–40%. This is under your control and requires no server configuration.
                  </p>
                </div>
                <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <h3 className="font-semibold text-indigo-900 mb-2">Step 2 — Enable gzip or Brotli (binary level)</h3>
                  <p className="text-sm text-indigo-800 leading-relaxed mb-3">
                    Configure your web server or CDN to compress responses. Reduces size
                    a further 60–80% on top of minification. The client automatically
                    decompresses using the <code className="bg-indigo-100 px-1 rounded font-mono">Accept-Encoding</code> header.
                  </p>
                  <div className="bg-surface-900 rounded-xl p-3 font-mono text-xs text-emerald-300">
                    <div className="text-surface-400 mb-1"># nginx — enable gzip for JSON</div>
                    <div>gzip on;</div>
                    <div>gzip_types application/json;</div>
                    <div>gzip_min_length 1000;</div>
                    <div className="mt-2 text-surface-400"># Express.js</div>
                    <div>{'const compression = require(\'compression\');'}</div>
                    <div>{'app.use(compression());'}</div>
                  </div>
                </div>
                <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">Step 3 — Set proper Cache headers (optional)</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    For static or infrequently changing JSON (config files, reference data,
                    static API responses), set <code className="bg-blue-100 px-1 rounded font-mono">Cache-Control</code> headers so
                    browsers and CDNs cache the minified response. Cached responses have
                    zero transfer size for repeat visitors.
                  </p>
                </div>
              </div>
            </section>

            {/* ── When NOT to minify ────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                When NOT to Minify JSON
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                Minification is not always the right choice. There are specific situations
                where keeping formatted JSON is the correct decision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🔧', title: 'Development Environments', desc: 'Always keep JSON formatted in local development. Minified API responses make debugging, logging, and reading error messages significantly harder. Use your formatter to pretty-print responses while developing.' },
                  { icon: '📋', title: 'Configuration Files Checked Into Git', desc: 'Config files (package.json, tsconfig.json, .eslintrc) should stay formatted in version control so git diffs are readable. Minification here creates unnecessary noise in pull request reviews.' },
                  { icon: '📖', title: 'Public Documentation & Examples', desc: 'API documentation, tutorials, and code examples should always use formatted JSON. Minified examples are impossible to read and create a poor developer experience for your API consumers.' },
                  { icon: '🔍', title: 'Debugging Production Issues', desc: 'When investigating a production issue, temporarily disable minification or use your formatter to pretty-print the response payload so you can inspect the exact data structure being returned.' },
                ].map(w => (
                  <div key={w.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <span className="text-2xl shrink-0">{w.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-900">{w.title}</div>
                      <div className="text-sm text-surface-500 mt-1 leading-relaxed">{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Real-world performance impact ─────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Real-World Performance Impact of JSON Minification
              </h2>
              <p className="text-surface-600 leading-relaxed mb-5">
                The actual performance benefit depends on your API's response sizes and
                traffic volume. Here are the scenarios where minification has the highest
                impact versus where it is negligible.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Scenario</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Response Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Impact</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { scenario: 'Large list endpoint (100+ records)', size: '50–500 KB', impact: 'High — visible latency improvement', priority: '🔴 High' },
                      { scenario: 'Mobile API with slow connections',   size: 'Any',       impact: 'High — every KB matters on 3G/4G', priority: '🔴 High' },
                      { scenario: 'High-frequency polling endpoint',    size: '1–50 KB',   impact: 'Medium — compounds over thousands of calls', priority: '🟡 Medium' },
                      { scenario: 'Product catalog or search results',  size: '10–100 KB', impact: 'Medium — affects first meaningful paint', priority: '🟡 Medium' },
                      { scenario: 'Auth token / simple status response',size: '< 1 KB',    impact: 'Low — whitespace is trivial at this size', priority: '🟢 Low' },
                      { scenario: 'Internal microservice communication',size: 'Any',       impact: 'Low — internal network latency dominates', priority: '🟢 Low' },
                    ].map((row, i) => (
                      <tr key={row.scenario} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className="px-4 py-3 font-medium text-surface-900 text-xs">{row.scenario}</td>
                        <td className="px-4 py-3 text-surface-600 font-mono text-xs">{row.size}</td>
                        <td className="px-4 py-3 text-surface-600 text-xs">{row.impact}</td>
                        <td className="px-4 py-3 text-xs font-semibold">{row.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Use cases ─────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                Common Use Cases for JSON Minification
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🚀', title: 'REST API Production Responses',  desc: 'Strip all whitespace from JSON responses before sending to clients. The difference between JSON.stringify(data) and JSON.stringify(data, null, 2) is the entire optimization — no libraries needed.' },
                  { icon: '📦', title: 'Build Pipeline Optimization',    desc: 'Minify static JSON data files (translations, config, fixture data) as part of your webpack, Vite, or rollup build. The build tool handles it once — every client download is smaller forever.' },
                  { icon: '🌐', title: 'GraphQL Response Optimization',  desc: 'GraphQL responses can be verbose due to nested data structures. Minifying GraphQL JSON responses before transmission reduces payload size for complex queries with deep nesting.' },
                  { icon: '📱', title: 'Mobile App API Optimization',    desc: 'Mobile users on metered data connections benefit most from minification. A 40% reduction in API response size directly reduces data usage and improves perceived app performance.' },
                  { icon: '⚡', title: 'CDN Edge Caching',               desc: 'Minified + compressed JSON stored at CDN edge nodes gives globally distributed users the fastest possible response times. The CDN serves pre-processed bytes with zero server involvement.' },
                  { icon: '🔄', title: 'Webhook Payloads',              desc: 'Webhooks fire JSON payloads to external services. Minifying webhook bodies reduces the data transmitted per event — important when sending thousands of webhook events per day.' },
                ].map(uc => (
                  <div key={uc.title} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl hover:border-violet-200 transition-colors">
                    <span className="text-2xl shrink-0">{uc.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-900">{uc.title}</div>
                      <div className="text-sm text-surface-500 mt-1 leading-relaxed">{uc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                   >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors"
                     >
                      {faq.q}
                      <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-surface-600 text-sm leading-relaxed"
                     >
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Related tools ────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Related Free Developer Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/json-formatter-online',      icon: '{ }', label: 'JSON Formatter & Minifier',   desc: 'Format, validate, and minify JSON in one tool' },
                  { href: '/json-to-csv-converter',      icon: '📊',  label: 'JSON to CSV Converter',       desc: 'Convert JSON arrays to CSV for spreadsheets' },
                  { href: '/base64-encoder-online',      icon: '🔡',  label: 'Base64 Encoder Online',       desc: 'Encode JSON payloads for API transmission' },
                  { href: '/url-encoder-online',         icon: '🔗',  label: 'URL Encoder Online',          desc: 'Encode URL parameters in API endpoints' },
                  { href: '/regex-tester-online',        icon: '🔍',  label: 'Regex Tester Online',         desc: 'Test patterns for extracting JSON fields' },
                  { href: '/unix-timestamp-converter',   icon: '⏱️',  label: 'Timestamp Converter',         desc: 'Convert Unix timestamps in JSON responses' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                    <span className="text-xl">{l.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-violet-800 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Related posts ─────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">More Guides</h2>
              <div className="space-y-3">
                {[
                  { href: '/blog/how-to-compress-images-without-losing-quality', emoji: '🗜️', bg: 'from-orange-500 to-rose-500', label: 'How to Compress Images Without Losing Quality', desc: 'Lossy vs lossless, format guide, Core Web Vitals impact' },
                  { href: '/blog/how-to-remove-duplicate-lines-from-text', emoji: '🧹', bg: 'from-emerald-500 to-teal-600', label: 'How to Remove Duplicate Lines from Text', desc: '5 methods — tool, Excel, Notepad++, Python' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-4 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${l.bg} flex items-center justify-center text-xl shrink-0`}>
                      {l.emoji}
                    </div>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-violet-800 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-violet-200"
              style={{ background: 'linear-gradient(135deg,#f5f3ff 0%,#ede9fe 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-3xl font-display font-black text-violet-700 mb-3">{ }</div>
                <h3 className="font-display font-bold text-xl text-violet-900 mb-2">
                  Minify Your JSON Right Now — Free
                </h3>
                <p className="text-violet-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  Use the free ToolStackHub JSON formatter to minify any JSON instantly.
                  Paste, click Minify, copy. Also works as a formatter, validator, and
                  pretty-printer for debugging. No signup, no upload, runs in your browser.
                </p>
                <Link href="/json-formatter-online"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
                  Open JSON Minifier Free →
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-violet-600">
                  <span>✓ Minify + Format</span>
                  <span>✓ Validates JSON</span>
                  <span>✓ No signup</span>
                  <span>✓ Runs locally</span>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}