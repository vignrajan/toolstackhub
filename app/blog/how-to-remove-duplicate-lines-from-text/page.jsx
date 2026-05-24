import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SITE_CONFIG } from '../../../data/tools';

// ── Post metadata ─────────────────────────────────────────────
const POST = {
  slug:        'how-to-remove-duplicate-lines-from-text',
  title:       'How to Remove Duplicate Lines from Text (Easy Guide)',
  metaDesc:    'Learn how to remove duplicate lines from text instantly. Clean keyword lists, email data, and CSV files in seconds. Free tool included — no signup needed.',
  category:    'Text Tools',
  categorySlug:'text-tools',
  author:      'ToolStackHub Team',
  publishedAt: '2026-03-21',
  updatedAt:   '2026-03-21',
  readTime:    7,
  coverEmoji:  '🧹',
  coverBg:     'from-emerald-500 to-teal-600',
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
    authors:      [POST.author],
  },
  twitter: {
    card:    'summary_large_image',
    title:    POST.title,
    description: POST.metaDesc,
    creator: SITE_CONFIG.twitterHandle,
  },
};

// ── FAQ data ──────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I remove duplicate lines from text?',
    a: 'The fastest way is to use our free Remove Duplicate Lines tool at toolstackhub.in/remove-duplicate-lines-online. Paste your text, click the button, and all duplicate lines are removed instantly — keeping only the first occurrence of each line. For large datasets, this takes under a second regardless of how many lines you have.',
  },
  {
    q: 'Can I remove duplicate lines in Excel?',
    a: 'Yes — paste your list into a single column, select the column, go to Data → Remove Duplicates, and click OK. This removes duplicate cell values. However, for pure text operations outside of spreadsheets — like cleaning keyword lists or email exports — a dedicated text tool is faster and does not require opening Excel.',
  },
  {
    q: 'How do I remove duplicate lines in Notepad++ or VS Code?',
    a: 'In Notepad++: sort the lines alphabetically first (Edit → Line Operations → Sort Lines), then use TextFX → TextFX Tools → Delete Duplicate Lines. In VS Code: install the "Sort Lines" extension, sort, then use Find & Replace with regex to remove consecutive duplicates. Both methods require several steps — a dedicated tool does it in one click.',
  },
  {
    q: 'How do I remove duplicate lines with Python?',
    a: 'Use: lines = text.split("\\n"); unique = list(dict.fromkeys(lines)); result = "\\n".join(unique). This preserves order and removes duplicates efficiently. For case-insensitive deduplication, convert to lowercase before the dict.fromkeys() call. Our free tool does the same operation without any code.',
  },
  {
    q: 'Does removing duplicate lines preserve the original order?',
    a: 'Yes — our tool keeps the first occurrence of each line and removes all subsequent duplicates while preserving the original order of the remaining lines. If you want alphabetical output, enable the Sort Output toggle before clicking the button.',
  },
];

// ── Structured data ───────────────────────────────────────────
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
      keywords: 'remove duplicate lines from text, remove duplicate text lines, clean duplicate data, deduplicate text online',
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
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Blog',       item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 3, name: POST.title,   item: `${SITE_CONFIG.url}/blog/${POST.slug}` },
      ],
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────
export default function PostRemoveDuplicateLines() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-surface-50">

        {/* ── Article header ─────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-700 font-medium truncate">{POST.title}</li>
              </ol>
            </nav>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                {POST.category}
              </span>
              <span className="text-sm text-surface-400">{POST.readTime} min read</span>
              <span className="text-sm text-surface-400">·</span>
              <time dateTime={POST.publishedAt} className="text-sm text-surface-400">
                {new Date(POST.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-surface-950 leading-tight tracking-tight mb-4">
              {POST.title}
            </h1>

            {/* Excerpt */}
            <p className="text-surface-500 text-lg leading-relaxed mb-6">
              {POST.metaDesc}
            </p>

            {/* Author + share */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-base">🛠️</div>
                <div>
                  <div className="text-sm font-semibold text-surface-800">{POST.author}</div>
                  <div className="text-xs text-surface-400">Updated {new Date(POST.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cover ──────────────────────────────────── */}
        <div className={`h-40 sm:h-52 bg-gradient-to-br ${POST.coverBg} flex items-center justify-center`}>
          <div className="text-7xl">{POST.coverEmoji}</div>
        </div>

        {/* ── Article body ───────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose-toolstack space-y-8">

            {/* ── Intro ─────────────────────────────── */}
            <section>
              <p className="text-surface-700 text-lg leading-relaxed">
                You have a list of 500 keywords. Or 2,000 email addresses. Or a CSV export
                from your CRM. And buried inside it — dozens, maybe hundreds, of duplicates.
                Finding and deleting them manually is not just tedious. It is error-prone and,
                above a certain size, practically impossible without automation.
              </p>
              <p className="text-surface-600 leading-relaxed mt-4">
                <strong className="text-surface-800">Duplicate lines in text data corrupt your work.</strong>{' '}
                They inflate word counts, skew analytics, cause double-emails to subscribers,
                and break database imports. In SEO, a keyword list with duplicates wastes
                content planning time on terms you have already mapped. In data work, duplicate
                records cause incorrect aggregations and misleading reports.
              </p>
              <p className="text-surface-600 leading-relaxed mt-4">
                This guide covers every method to <strong className="text-surface-800">remove duplicate lines from text</strong> —
                from the fastest one-click browser tool to manual methods in Excel,
                Notepad++, and Python — so you can pick the approach that fits your
                workflow and get clean data in the shortest time possible.
              </p>
            </section>

            {/* ── Problem ───────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Why Duplicate Lines Appear (And Why They're a Problem)
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Duplicate text lines appear in predictable situations. Understanding the
                source helps you prevent them from forming in the first place — and explains
                why cleaning them quickly matters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {[
                  { icon: '📊', title: 'Merged Keyword Lists',       desc: 'Combining keyword exports from Google Search Console, Ahrefs, SEMrush, and manual research routinely produces 20–40% duplicates across the combined list.' },
                  { icon: '📧', title: 'Combined Email Lists',        desc: 'Merging subscriber lists from multiple lead magnets, product forms, and CSV imports creates duplicate addresses that trigger double-sends and inflate list size.' },
                  { icon: '🗄️', title: 'Database Exports',            desc: 'JOIN queries and unoptimized exports often return duplicate rows when records have multiple matching foreign keys. These need to be cleaned before re-importing.' },
                  { icon: '📋', title: 'Copy-Paste Accumulation',     desc: 'Lists built up incrementally by copying from multiple sources — Slack threads, emails, docs — accumulate the same items repeatedly without obvious detection.' },
                  { icon: '🔄', title: 'API Response Pagination',     desc: 'Paginated API responses sometimes return overlapping items between pages when data is modified during retrieval. These overlaps produce duplicate records in the aggregated output.' },
                  { icon: '📝', title: 'Log File Aggregation',        desc: 'Combining log files from multiple servers or time periods creates repeated log entries for the same events — making error frequency analysis meaningless without deduplication.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">{item.title}</div>
                      <div className="text-xs text-surface-500 mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Free tool CTA ─────────────────────── */}
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-300"
              style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)' }}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">🧹</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Free Tool</div>
                    <h3 className="font-display font-bold text-xl text-emerald-900 mb-2">
                      Remove Duplicate Lines in One Click — Free
                    </h3>
                    <p className="text-emerald-800 text-sm leading-relaxed mb-4">
                      Paste any text — a keyword list, email list, CSV data, or log file —
                      and remove all duplicate lines instantly. Case-sensitive or
                      case-insensitive mode, sort output, download as .txt. No signup.
                      Runs entirely in your browser.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/remove-duplicate-lines-online"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        Try the Free Tool →
                      </Link>
                      <span className="inline-flex items-center gap-1.5 text-sm text-emerald-700">
                        <span>✓</span> No signup required
                        <span className="ml-2">✓</span> Instant results
                        <span className="ml-2">✓</span> Private
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Step by step ──────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
                Step-by-Step: How to Remove Duplicate Lines from Text
              </h2>
              <p className="text-surface-600 leading-relaxed mb-6">
                Here is the complete process using the free ToolStackHub tool — the fastest
                method available without writing any code.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Open the Remove Duplicate Lines Tool',
                    content: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Go to{' '}
                        <Link href="/remove-duplicate-lines-online"
                          className="text-emerald-700 hover:underline font-medium">
                          toolstackhub.in/remove-duplicate-lines-online
                        </Link>{' '}
                        in any browser. No account, no installation, and no browser extension
                        required. The tool opens instantly.
                      </p>
                    ),
                  },
                  {
                    step: 2,
                    title: 'Paste Your Text',
                    content: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Copy your list, keyword export, CSV data, or any multi-line text
                        and paste it into the large input area on the left side of the tool.
                        The character and line count displays automatically so you can see
                        what you are working with.
                      </p>
                    ),
                  },
                  {
                    step: 3,
                    title: 'Set Your Options',
                    content: (
                      <div className="space-y-2 text-sm text-surface-600">
                        <p>Three toggles give you precise control over the deduplication:</p>
                        <ul className="space-y-1 ml-4">
                          <li><strong className="text-surface-800">Case Sensitive:</strong> Off by default. "Apple" and "apple" are treated as the same line. Turn ON if your data uses case to distinguish values (e.g. variable names in code).</li>
                          <li><strong className="text-surface-800">Ignore Empty Lines:</strong> Skips blank lines so they don't count as duplicate empty entries. Recommended for most use cases.</li>
                          <li><strong className="text-surface-800">Sort Output:</strong> Sorts the unique lines alphabetically. Useful for keyword lists and glossaries — disable if original order matters.</li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    step: 4,
                    title: 'Click Remove Duplicates',
                    content: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click the button. Unique lines appear instantly in the output panel.
                        The stats bar shows exactly how many lines you had, how many are
                        unique, and how many duplicates were removed.
                      </p>
                    ),
                  },
                  {
                    step: 5,
                    title: 'Copy or Download Your Clean List',
                    content: (
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Click <strong>Copy All</strong> to copy the unique lines to your
                        clipboard, or <strong>Download</strong> to save as a .txt file.
                        Paste the clean output wherever you need it — your spreadsheet,
                        email tool, database, or content planning doc.
                      </p>
                    ),
                  },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 p-5 bg-white border border-surface-200 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-2">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Alternative methods ────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                Alternative Methods (And Why the Tool Is Faster)
              </h2>

              <div className="space-y-5">

                {/* Excel */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">📊</span>
                    <h3 className="font-semibold text-surface-900">Method 2: Excel / Google Sheets</h3>
                    <span className="ml-auto text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium">Moderate effort</span>
                  </div>
                  <div className="p-5 space-y-2 text-sm text-surface-600 leading-relaxed">
                    <p>Paste your list into column A. Select the column. Go to <strong className="text-surface-800">Data → Remove Duplicates</strong> → OK. Excel removes duplicate cells and shows you a count.</p>
                    <p><strong className="text-surface-800">Limitation:</strong> Requires opening Excel, creating a new sheet, pasting data into cells, and then copying back out. For a simple text list this is 5–10 steps vs the tool's 3. It also cannot handle case-insensitive deduplication without additional formula work.</p>
                  </div>
                </div>

                {/* Notepad++ */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">📝</span>
                    <h3 className="font-semibold text-surface-900">Method 3: Notepad++ (Windows)</h3>
                    <span className="ml-auto text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium">Requires sort first</span>
                  </div>
                  <div className="p-5 space-y-2 text-sm text-surface-600 leading-relaxed">
                    <p>Sort lines first (<strong>Edit → Line Operations → Sort Lines Lexicographically</strong>), then use <strong>TextFX → TextFX Tools → Delete Duplicate Lines</strong>.</p>
                    <p><strong className="text-surface-800">Limitation:</strong> Requires sorting first which permanently reorders your list. If original order matters, this method is destructive. TextFX plugin also requires manual installation. The browser tool preserves original order without sorting.</p>
                  </div>
                </div>

                {/* Python */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface-50 border-b border-surface-200">
                    <span className="text-xl">🐍</span>
                    <h3 className="font-semibold text-surface-900">Method 4: Python (For Developers)</h3>
                    <span className="ml-auto text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">Requires code</span>
                  </div>
                  <div className="px-5 pt-4 pb-2">
                    <div className="bg-surface-900 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-relaxed">
                      <div className="text-surface-400 mb-2"># Remove duplicate lines, preserve order</div>
                      <div>with open(<span className="text-amber-300">"input.txt"</span>) as f:</div>
                      <div className="ml-4">lines = f.readlines()</div>
                      <div className="mt-1">unique = list(dict.fromkeys(lines))</div>
                      <div className="mt-1">with open(<span className="text-amber-300">"output.txt"</span>, <span className="text-amber-300">"w"</span>) as f:</div>
                      <div className="ml-4">f.writelines(unique)</div>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed mt-3 mb-4">
                      <strong className="text-surface-800">When to use this:</strong> If you are already working in Python, processing thousands of files, or need deduplication as part of a larger automated pipeline. For one-off cleaning of a single list, the browser tool is significantly faster.
                    </p>
                  </div>
                </div>

              </div>

              {/* Comparison table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-100">
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Method</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Speed</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Preserves Order</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700">Case Control</th>
                      <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">Setup Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: '🧹 ToolStackHub Tool', speed: '< 1 second', order: '✅ Yes', caseCtrl: '✅ Yes', setup: 'None' },
                      { method: '📊 Excel',              speed: '1–3 minutes', order: '✅ Yes', caseCtrl: '❌ No', setup: 'Excel installed' },
                      { method: '📝 Notepad++',          speed: '2–5 minutes', order: '❌ Sorts first', caseCtrl: '✅ Yes', setup: 'TextFX plugin' },
                      { method: '🐍 Python',             speed: '5–10 minutes', order: '✅ Yes', caseCtrl: '✅ Yes', setup: 'Python + editor' },
                    ].map((row, i) => (
                      <tr key={row.method} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                        <td className={`px-4 py-3 font-medium ${i === 0 ? 'text-emerald-700' : 'text-surface-800'}`}>{row.method}</td>
                        <td className="px-4 py-3 text-surface-600">{row.speed}</td>
                        <td className="px-4 py-3 text-surface-600">{row.order}</td>
                        <td className="px-4 py-3 text-surface-600">{row.caseCtrl}</td>
                        <td className="px-4 py-3 text-surface-600">{row.setup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Use cases ─────────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
                7 Real-World Use Cases for Removing Duplicate Lines
              </h2>
              <div className="space-y-3">
                {[
                  { n: 1, title: 'SEO Keyword List Cleanup',         desc: 'Combine keyword exports from multiple tools and remove duplicates before building your content calendar. A clean unique list prevents you from accidentally creating multiple pages targeting the same keyword.' },
                  { n: 2, title: 'Email Marketing List Hygiene',     desc: 'Before uploading to Mailchimp, ActiveCampaign, or HubSpot — remove duplicate email addresses. Sending the same campaign twice to the same subscriber increases unsubscribes and spam complaints.' },
                  { n: 3, title: 'Database Import Preparation',      desc: 'Clean CSV and text exports before database imports. Duplicate rows cause unique constraint violations and insert phantom records that must be manually cleaned after the fact.' },
                  { n: 4, title: 'Product Catalog Deduplication',    desc: 'eCommerce product imports from multiple supplier feeds routinely duplicate SKUs, titles, and descriptions. Remove duplicate lines from the import file to prevent creating duplicate product listings.' },
                  { n: 5, title: 'Code and Config File Cleanup',     desc: 'Remove duplicate entries from .gitignore files, requirements.txt, package.json dependency lists, and DNS zone files where duplicate entries cause warnings or unexpected behavior.' },
                  { n: 6, title: 'Tag and Category Normalization',   desc: 'Tag clouds exported from WordPress, Medium, or Ghost accumulate duplicate tags with slight variations. Deduplicate before re-importing to keep your taxonomy clean.' },
                  { n: 7, title: 'Log File Analysis Preparation',   desc: 'Aggregate server logs from multiple instances and remove repeated error entries to get an accurate count of unique error types — rather than counting the same error repeated across servers.' },
                ].map(uc => (
                  <div key={uc.n} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {uc.n}
                    </div>
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">{uc.title}</div>
                      <div className="text-sm text-surface-500 mt-0.5 leading-relaxed">{uc.desc}</div>
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
                      <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

            {/* ── Internal links ────────────────────── */}
            <section>
              <h2 className="font-display font-bold text-xl text-surface-900 mb-4">
                Related Free Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/remove-duplicate-lines-online', icon: '🧹', label: 'Remove Duplicate Lines Tool',  desc: 'The free tool covered in this guide' },
                  { href: '/remove-line-breaks',            icon: '✂️', label: 'Remove Line Breaks Online',     desc: 'Remove newlines from multi-line text' },
                  { href: '/remove-empty-lines',            icon: '📄', label: 'Remove Empty Lines Online',     desc: 'Strip blank lines from any text' },
                  { href: '/word-counter-online',           icon: '📝', label: 'Word Counter Online',           desc: 'Count words and lines after cleaning' },
                  { href: '/case-converter-online',         icon: '🔡', label: 'Case Converter Online',         desc: 'Normalize case before deduplication' },
                  { href: '/character-counter-online',      icon: '🔢', label: 'Character Counter Online',      desc: 'Measure text length before and after' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
                    <span className="text-xl">{l.icon}</span>
                    <div>
                      <div className="font-semibold text-surface-800 group-hover:text-emerald-800 text-sm">{l.label}</div>
                      <div className="text-xs text-surface-500">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-emerald-200"
              style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)' }}>
              <div className="p-7 text-center">
                <div className="text-4xl mb-3">🧹</div>
                <h3 className="font-display font-bold text-xl text-emerald-900 mb-2">
                  Ready to Clean Your List?
                </h3>
                <p className="text-emerald-700 text-sm leading-relaxed mb-5 max-w-md mx-auto">
                  Use the free Remove Duplicate Lines tool — paste your text, click one button,
                  and get a clean unique list in under a second. No account, no install.
                </p>
                <Link href="/remove-duplicate-lines-online"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
                  Remove Duplicate Lines Now — Free →
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-emerald-600">
                  <span>✓ No signup</span>
                  <span>✓ Instant results</span>
                  <span>✓ Text never leaves your browser</span>
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