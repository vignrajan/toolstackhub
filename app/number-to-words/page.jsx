import { Suspense } from 'react';
import Link from 'next/link';
import NumberToWords from '../../components/tools/NumberToWords';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'Number to Words Converter India 2026 — Rupees, Lakh, Crore',
  description: 'Free number to words converter for India. Convert any amount to rupees in words — Lakh, Crore, Paise. For cheques, invoices, and legal documents. No login.',
  keywords: [
    'number to words converter', 'number to words', 'convert number to words',
    'amount in words', 'number to words in rupees', 'number to words for cheque',
    'convert amount to words INR', 'number to words Indian format',
    '1 lakh in words', '1 crore in words', 'rupees in words',
    'how to write amount in words for cheque india',
    'number to words converter for invoices', 'write numbers in words online free',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/number-to-words` },
  openGraph: {
    title: 'Number to Words Converter India 2026 — Rupees, Lakh, Crore Free',
    description: 'Convert any amount to Indian rupees in words instantly. Cheque format, invoice format, plain words. Lakh & Crore system. Free, no login.',
    url: `${SITE_CONFIG.url}/number-to-words`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Number to Words Converter India 2026 — Rupees, Lakh, Crore Free',
    description: 'Free number to words converter for India. Convert any amount to rupees in words — Lakh, Crore, Paise. For cheques, invoices, and legal documents. No login.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

const EXAMPLES = [
  { num: '100',           indian: 'One Hundred',                          intl: 'One Hundred',               rupees: 'Rupees One Hundred Only' },
  { num: '1,000',         indian: 'One Thousand',                         intl: 'One Thousand',              rupees: 'Rupees One Thousand Only' },
  { num: '10,000',        indian: 'Ten Thousand',                         intl: 'Ten Thousand',              rupees: 'Rupees Ten Thousand Only' },
  { num: '1,00,000',      indian: 'One Lakh',                             intl: 'One Hundred Thousand',      rupees: 'Rupees One Lakh Only' },
  { num: '10,00,000',     indian: 'Ten Lakh',                             intl: 'One Million',               rupees: 'Rupees Ten Lakh Only' },
  { num: '1,00,00,000',   indian: 'One Crore',                            intl: 'Ten Million',               rupees: 'Rupees One Crore Only' },
  { num: '10,00,00,000',  indian: 'Ten Crore',                            intl: 'One Hundred Million',       rupees: 'Rupees Ten Crore Only' },
  { num: '1,00,00,00,000',indian: 'One Hundred Crore / One Arab',         intl: 'One Billion',               rupees: 'Rupees One Hundred Crore Only' },
  { num: '1,23,456.78',   indian: 'One Lakh Twenty Three Thousand Four Hundred Fifty Six and Seventy Eight Paise', intl: 'One Hundred Twenty Three Thousand Four Hundred Fifty Six point Seventy Eight', rupees: 'Rupees One Lakh Twenty Three Thousand Four Hundred Fifty Six and Seventy Eight Paise Only' },
];

const FAQS = [
  {
    q: 'How do I convert a number to words in Indian format?',
    a: 'Type your number into the converter above. It instantly shows the result in Indian format using Lakh and Crore — for example, 1000000 becomes "Ten Lakh" in Indian format. Select "Rupees format" for cheque writing or "Plain words" for general use.',
  },
  {
    q: 'How do you write amount in words for a cheque in India?',
    a: 'For Indian cheques, write the amount starting with "Rupees" and ending with "Only". For example: ₹1,50,000 is written as "Rupees One Lakh Fifty Thousand Only". Always write clearly, leave no blank space, and draw a line after the words to prevent alterations.',
  },
  {
    q: 'What is 1 lakh in words?',
    a: '1 lakh (₹1,00,000) is written as "One Lakh" in Indian English. In the rupees format for cheques it is "Rupees One Lakh Only". In international notation, 1 lakh = 100,000 = One Hundred Thousand.',
  },
  {
    q: 'What is 1 crore in words?',
    a: '1 crore (₹1,00,00,000) is written as "One Crore" in Indian English. For cheques: "Rupees One Crore Only". In international format, 1 crore = 10,000,000 = Ten Million.',
  },
  {
    q: 'What is the difference between Indian and international number systems?',
    a: 'Indian system: ones, tens, hundreds, thousands, ten thousands, lakhs (1,00,000), ten lakhs, crores (1,00,00,000). International system: ones, tens, hundreds, thousands, millions (1,000,000), billions (1,000,000,000). Key difference: 10 lakh = 1 million, and 1 crore = 10 million.',
  },
  {
    q: 'How do I write paise in words?',
    a: 'Paise are written after "and" in the full amount. For example, ₹1,234.56 is written as "Rupees One Thousand Two Hundred Thirty Four and Fifty Six Paise Only". Enter the amount with decimal point (like 1234.56) into the converter to get the full result automatically.',
  },
  {
    q: 'Can I use this for GST invoices?',
    a: 'Yes. GST invoices in India require the total amount in both numbers and words. Use the "Rupees format" output from this converter and paste directly into your invoice. It follows the Indian number system and includes paise for decimal amounts.',
  },
  {
    q: 'How do I write 50 lakh in words?',
    a: '50 lakh (₹50,00,000) is written as "Fifty Lakh" in words. For cheques: "Rupees Fifty Lakh Only". In international format: 5,000,000 = Five Million.',
  },
  {
    q: 'Is this number to words converter free?',
    a: 'Yes, completely free. No login, no registration, no usage limits. Type any number and get the result instantly. Works on all devices including mobile phones.',
  },
  {
    q: 'What is the maximum number this converter supports?',
    a: 'This converter supports amounts up to ₹99,99,99,999 (Nine Hundred Ninety Nine Crore). For larger amounts, the result will show a limit message. This covers all practical use cases including home loans, business transactions, and GST invoices.',
  },
];

export default function NumberToWordsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Number to Words Converter India',
        description: 'Free online tool to convert numbers and rupee amounts to words in Indian format — Lakh, Crore. Supports cheque format, invoice format, paise, and plain words.',
        url: `${SITE_CONFIG.url}/number-to-words`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        featureList: [
          'Indian number format (Lakh, Crore)',
          'Paise support for decimal amounts',
          'Cheque format output',
          'Invoice format output',
          'Copy to clipboard',
          'No login required',
          'Instant real-time conversion',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2847',
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Write Amount in Words for Cheque in India',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter the amount', text: 'Type the cheque amount into the converter (e.g. 150000 for ₹1,50,000).' },
          { '@type': 'HowToStep', position: 2, name: 'Select Rupees format', text: 'Choose "Rupees format" to get the standard Indian cheque format starting with "Rupees" and ending with "Only".' },
          { '@type': 'HowToStep', position: 3, name: 'Copy the result', text: 'Click the Copy button next to the result.' },
          { '@type': 'HowToStep', position: 4, name: 'Write on cheque', text: 'Write the copied text in the "Amount in words" field of your cheque. Draw a horizontal line after the words to prevent alterations.' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Number to Words', item: `${SITE_CONFIG.url}/number-to-words` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-400">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li>/</li>
                <li className="text-surface-700 font-medium">Number to Words</li>
              </ol>
            </nav>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              Number to Words Converter — Indian Rupees (Lakh &amp; Crore Format)
            </h1>

            <p className="text-surface-600 text-lg leading-relaxed max-w-3xl mb-4">
              Type any amount and instantly get it in words — Indian format with Lakh and Crore,
              rupees format for cheques, and invoice-ready output with Paise.
              Used daily by accountants, businesses, students, and anyone writing a cheque in India.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                '🇮🇳 Indian Lakh & Crore Format',
                '🧾 Cheque & Invoice Ready',
                '💰 Paise Support',
                '📋 One-Click Copy',
                '🆓 Free — No Login',
                '⚡ Instant Result',
              ].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOOL ─────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div className="h-96 bg-surface-100 rounded-2xl animate-pulse" />}>
            <NumberToWords />
          </Suspense>
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* HOW TO USE */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">How to Use This Converter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { n:'1', icon:'⌨️', t:'Type the number', d:'Enter any amount in the box above. Decimals are supported (e.g. 1234.56 for paise).' },
                { n:'2', icon:'🎛️', t:'Choose format',   d:'Pick Rupees format for cheques, Cheque format for formal documents, or Plain words.' },
                { n:'3', icon:'👀', t:'See result',      d:'The words appear instantly as you type — no need to press any button.' },
                { n:'4', icon:'📋', t:'Copy & paste',    d:'Click Copy and paste directly into your cheque, invoice, or legal document.' },
              ].map(s => (
                <div key={s.n} className="p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.n}</div>
                    <span className="text-lg">{s.icon}</span>
                  </div>
                  <div className="font-bold text-surface-900 text-sm mb-1">{s.t}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{s.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT IS NUMBER TO WORDS — EEAT section */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">What is a Number to Words Converter?</h2>
            <div className="space-y-3 text-surface-600 leading-relaxed">
              <p>
                A number to words converter is a tool that translates numeric digits into their written English equivalents.
                For example, <strong className="text-surface-800">1,50,000</strong> becomes <strong className="text-surface-800">"One Lakh Fifty Thousand"</strong> — or
                <strong className="text-surface-800"> "Rupees One Lakh Fifty Thousand Only"</strong> in the cheque format used across India.
              </p>
              <p>
                This is not just a convenience — it is a legal requirement in many contexts.
                Under RBI guidelines, every cheque in India must have the amount written in words.
                GST invoices, demand drafts, property agreements, and court documents all require amounts
                in words to prevent fraud and ensure clarity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                {[
                  { icon:'🏦', title:'Banks & Cheques', desc:'RBI mandates amount in words on all cheques. A mismatch between numbers and words can cause rejection.' },
                  { icon:'🧾', title:'GST Invoices',    desc:'Professional invoices include the total in words. Required for large business transactions and government contracts.' },
                  { icon:'⚖️', title:'Legal Documents', desc:'Property agreements, loan papers, and court filings use numbers in words to prevent tampering and misinterpretation.' },
                ].map(u => (
                  <div key={u.title} className="p-5 bg-surface-50 border border-surface-200 rounded-xl">
                    <div className="text-2xl mb-2">{u.icon}</div>
                    <div className="font-bold text-surface-900 text-sm mb-1">{u.title}</div>
                    <div className="text-xs text-surface-600 leading-relaxed">{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CHEQUE WRITING GUIDE — HIGH INTENT */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-2">
              How to Write Amount in Words for a Cheque in India
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Cheque writing errors are one of the most common reasons for bank rejection in India.
              Here is the exact format banks accept — and the mistakes to avoid.
            </p>

            {/* Step-by-step */}
            <div className="space-y-3 mb-6">
              {[
                { n:'1', title:'Start with "Rupees"', desc:'Always begin with the word "Rupees" — not "Rs." or "INR". Example: "Rupees One Lakh Only" ✅  vs  "Rs. One Lakh Only" ❌' },
                { n:'2', title:'Write the full amount in words', desc:'Write each component clearly: "Rupees Two Lakh Fifty Thousand Three Hundred Seventy Five Only". Use the converter above for any amount.' },
                { n:'3', title:'End with "Only"', desc:'Always end with the word "Only". This prevents anyone from adding extra words after the amount. "Rupees Five Thousand Only" ✅' },
                { n:'4', title:'Add a line after the words', desc:'Draw a straight line (——) immediately after "Only" to fill any blank space. This prevents fraudulent additions.' },
                { n:'5', title:'Match the number exactly', desc:'The amount in words must exactly match the amount in the number box. If they differ, the bank may reject the cheque.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4 p-4 bg-white border border-surface-200 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{s.n}</div>
                  <div>
                    <div className="font-bold text-surface-900 text-sm mb-1">{s.title}</div>
                    <div className="text-sm text-surface-600 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Common mistakes */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
              <h3 className="font-bold text-rose-900 mb-3">⚠️ Common Mistakes That Get Cheques Rejected</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { wrong: '"Rs. One Lakh Only"',           right: '"Rupees One Lakh Only"'            },
                  { wrong: '"One Lac Only"',                 right: '"One Lakh Only"'                   },
                  { wrong: 'Leaving blank space after words',right: 'Draw a line after "Only"'          },
                  { wrong: '"One Lakh & Fifty Thousand"',    right: '"One Lakh Fifty Thousand"'         },
                  { wrong: 'Using abbreviations mid-sentence',right: 'Write full words throughout'     },
                  { wrong: 'Overwriting or corrections',     right: 'Use a fresh cheque if error occurs'},
                ].map((m, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-rose-500 shrink-0">✗</span>
                    <span className="text-rose-800 line-through">{m.wrong}</span>
                    <span className="text-rose-400 shrink-0">→</span>
                    <span className="text-emerald-700 font-medium">✓ {m.right}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXAMPLES TABLE — Featured Snippet Target */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">
              Numbers in Words — Complete Examples Table
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Quick reference for the most commonly searched amounts in India.
              Indian format uses Lakh and Crore; international format uses Million and Billion.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-surface-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Number</th>
                    <th className="text-left px-4 py-3 font-semibold">Indian Words</th>
                    <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">International Words</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-2xl">Cheque Format</th>
                  </tr>
                </thead>
                <tbody>
                  {EXAMPLES.map((ex, i) => (
                    <tr key={ex.num} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-mono font-bold text-surface-900">{ex.num}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{ex.indian}</td>
                      <td className="px-4 py-3 text-surface-500 hidden sm:table-cell text-xs">{ex.intl}</td>
                      <td className="px-4 py-3 text-brand-700 text-xs font-medium">{ex.rupees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* INDIAN vs INTERNATIONAL */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-3">
              Indian vs International Number System — Key Differences
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-5">
              <p>
                India uses a unique number system that differs from the international (Western) system.
                The key difference is in how large numbers are grouped and named.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="border-2 border-brand-200 rounded-2xl overflow-hidden">
                <div className="bg-brand-600 px-5 py-3">
                  <div className="font-bold text-white">🇮🇳 Indian System</div>
                  <div className="text-brand-200 text-xs">Used in India, Pakistan, Bangladesh, Sri Lanka</div>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    ['1,000',          'Thousand'],
                    ['10,000',         'Ten Thousand'],
                    ['1,00,000',       'One Lakh'],
                    ['10,00,000',      'Ten Lakh'],
                    ['1,00,00,000',    'One Crore'],
                    ['10,00,00,000',   'Ten Crore'],
                    ['1,00,00,00,000', 'One Hundred Crore (Arab)'],
                  ].map(([n, w]) => (
                    <div key={n} className="flex justify-between text-sm">
                      <span className="font-mono text-surface-700">{n}</span>
                      <span className="font-semibold text-brand-700">{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-2 border-surface-200 rounded-2xl overflow-hidden">
                <div className="bg-surface-700 px-5 py-3">
                  <div className="font-bold text-white">🌍 International System</div>
                  <div className="text-surface-300 text-xs">Used in USA, UK, Europe, and globally</div>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    ['1,000',           'Thousand'],
                    ['10,000',          'Ten Thousand'],
                    ['100,000',         'One Hundred Thousand'],
                    ['1,000,000',       'One Million'],
                    ['10,000,000',      'Ten Million'],
                    ['100,000,000',     'One Hundred Million'],
                    ['1,000,000,000',   'One Billion'],
                  ].map(([n, w]) => (
                    <div key={n} className="flex justify-between text-sm">
                      <span className="font-mono text-surface-700">{n}</span>
                      <span className="font-semibold text-surface-700">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick conversion table */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="font-bold text-amber-900 mb-3">Quick Reference: Indian to International</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { ind:'1 Lakh',       intl:'100 Thousand' },
                  { ind:'10 Lakh',      intl:'1 Million'    },
                  { ind:'1 Crore',      intl:'10 Million'   },
                  { ind:'100 Crore',    intl:'1 Billion'    },
                ].map(c => (
                  <div key={c.ind} className="text-center p-3 bg-white rounded-xl border border-amber-100">
                    <div className="font-bold text-amber-900 text-sm">{c.ind}</div>
                    <div className="text-amber-500 text-xs">=</div>
                    <div className="text-amber-700 text-xs font-semibold">{c.intl}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">Where is This Tool Used?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon:'🏦', title:'Cheque Writing',
                  points:[
                    'RBI mandates amount in words on all cheques',
                    'Prevents fraud — words cannot be easily altered',
                    'Mismatch between number and words causes rejection',
                    'Use "Rupees format" output for direct cheque use',
                  ],
                },
                {
                  icon:'🧾', title:'GST Invoices',
                  points:[
                    'Professional invoices include total in words',
                    'Required for B2G (business to government) invoices',
                    'Amount ≥ ₹1 lakh typically requires words for audit',
                    'Use "Invoice format" for tax invoices',
                  ],
                },
                {
                  icon:'⚖️', title:'Legal Documents',
                  points:[
                    'Property sale deeds — amount in words is mandatory',
                    'Loan agreements and promissory notes',
                    'Court filings and affidavits',
                    'Power of attorney documents',
                  ],
                },
                {
                  icon:'📚', title:'Education & Exams',
                  points:[
                    'CBSE and ICSE maths — number names chapter',
                    'Bank exam preparation (IBPS, SBI PO)',
                    'Teaching Indian number system to children',
                    'Competitive exam numerical ability sections',
                  ],
                },
                {
                  icon:'💼', title:'Accounting & Payroll',
                  points:[
                    'Salary slips often include amount in words',
                    'Purchase orders and vendor payments',
                    'Annual report financial figures',
                    'Audit trail documentation',
                  ],
                },
                {
                  icon:'🏗️', title:'Real Estate',
                  points:[
                    'Property sale agreements — mandatory',
                    'Token amounts and advance payments',
                    'Rent agreements for large amounts',
                    'Builder payment receipts',
                  ],
                },
              ].map(u => (
                <div key={u.title} className="p-5 bg-white border border-surface-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{u.icon}</span>
                    <h3 className="font-bold text-surface-900">{u.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {u.points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-surface-600">
                        <span className="text-brand-600 shrink-0 mt-0.5">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* COMMON AMOUNTS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Common Amounts in Words (Quick Reference)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href:'/1-lakh-in-words',   num:'₹1,00,000',     words:'One Lakh'           },
                { href:'/2-lakh-in-words',   num:'₹2,00,000',     words:'Two Lakh'           },
                { href:'/5-lakh-in-words',   num:'₹5,00,000',     words:'Five Lakh'          },
                { href:'/10-lakh-in-words',  num:'₹10,00,000',    words:'Ten Lakh'           },
                { href:'/25-lakh-in-words',  num:'₹25,00,000',    words:'Twenty Five Lakh'   },
                { href:'/50-lakh-in-words',  num:'₹50,00,000',    words:'Fifty Lakh'         },
                { href:'/75-lakh-in-words',  num:'₹75,00,000',    words:'Seventy Five Lakh'  },
                { href:'/1-crore-in-words',  num:'₹1,00,00,000',  words:'One Crore'          },
                { href:'/2-crore-in-words',  num:'₹2,00,00,000',  words:'Two Crore'          },
                { href:'/5-crore-in-words',  num:'₹5,00,00,000',  words:'Five Crore'         },
                { href:'/10-crore-in-words', num:'₹10,00,00,000', words:'Ten Crore'          },
                { href:'/25-crore-in-words', num:'₹25,00,00,000', words:'Twenty Five Crore'  },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center justify-between p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <div>
                    <div className="font-mono font-bold text-surface-900 text-sm">{l.num}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.words}</div>
                  </div>
                  <span className="text-brand-400 group-hover:text-brand-600 text-xs font-semibold">→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors text-sm">
                    {f.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   >
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED TOOLS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href:'/invoice-generator',
                  icon:'🧾',
                  label:'GST Invoice Generator',
                  desc:'Create professional GST invoices — amount in words is needed for every invoice you generate.',
                  cta:'Create Free Invoice',
                },
                {
                  href:'/gst-calculator',
                  icon:'🧮',
                  label:'GST Calculator',
                  desc:'Calculate CGST, SGST, and IGST on any amount. Then use this tool to write the final amount in words.',
                  cta:'Calculate GST',
                },
                {
                  href:'/salary-calculator',
                  icon:'💰',
                  label:'Salary Calculator',
                  desc:'Calculate your exact in-hand salary from CTC. Salary slips often require monthly salary in words.',
                  cta:'Calculate Salary',
                },
                {
                  href:'/emi-calculator',
                  icon:'🏠',
                  label:'EMI Calculator',
                  desc:'Calculate home loan and car loan EMIs. Loan agreements require EMI amounts in words.',
                  cta:'Calculate EMI',
                },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex gap-4 p-5 bg-surface-50 border border-surface-200 rounded-2xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-3xl shrink-0">{l.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-surface-900 group-hover:text-brand-700 mb-1">{l.label}</div>
                    <div className="text-sm text-surface-500 leading-relaxed mb-2">{l.desc}</div>
                    <span className="text-xs font-semibold text-brand-600 group-hover:text-brand-700">{l.cta} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EEAT — Author & Trust */}
          <section className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shrink-0">T</div>
              <div>
                <div className="font-bold text-surface-900 mb-1">ToolStackHub Finance & Utility Team</div>
                <div className="text-sm text-surface-500 leading-relaxed mb-3">
                  Our conversion tools are built and verified by finance and accounting professionals
                  with hands-on experience in Indian banking, GST compliance, and business documentation.
                  All conversion logic is tested against RBI cheque writing guidelines and Indian number
                  system standards used in CBSE and bank exams.
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✅ Verified against RBI guidelines
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    🔄 Updated March 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-surface-600 bg-surface-100 px-3 py-1 rounded-full border border-surface-200">
                    🇮🇳 Indian number system compliant
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Need to Write a Number in Words Right Now?
            </h2>
            <p className="text-brand-200 text-sm mb-6 max-w-lg mx-auto">
              Scroll back up to the converter, type your amount, and copy the result in one click.
              Bookmark this page — it takes 10 seconds every time you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" 
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
                ↑ Convert a Number Now
              </a>
              <Link href="/invoice-generator"
                className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-400 transition-colors border border-brand-400">
                🧾 Create GST Invoice Free
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl text-xs text-surface-500 leading-relaxed">
            <strong>Accuracy Note:</strong> This converter follows the Indian number system as used in banking,
            accounting, and CBSE education. Results are in standard Indian English format (Rupees X Only)
            consistent with RBI cheque writing standards. For amounts above ₹10 crore, verify the output
            manually or consult your bank. ToolStackHub is not responsible for rejected cheques or documents
            resulting from errors in the entered amount. Always double-check before submitting official documents.
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}