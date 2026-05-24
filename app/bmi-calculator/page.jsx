import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BMICalculator from '../../components/tools/BMICalculator';
import { SITE_CONFIG } from '../../data/tools';

export const metadata = {
  title: 'BMI Calculator India 2026 – Free Body Mass Index Calculator (Indian Standards)',
  description: 'Free BMI calculator for India 2026. Uses Indian/Asian BMI thresholds (23+ overweight) recommended by WHO for South Asians. Ideal weight range, health risk assessment. No signup.',
  keywords: ['bmi calculator india','bmi calculator online free','bmi calculator for men','bmi calculator for women','healthy bmi for indians','body mass index calculator india','ideal weight calculator india'],
  alternates: { canonical: `${SITE_CONFIG.url}/bmi-calculator` },
  openGraph: {
    title: 'Free BMI Calculator India – Indian BMI Standards & Ideal Weight',
    description: 'BMI calculator with Indian/Asian thresholds. Calculate BMI, healthy weight range, and health risk. Free, no signup.',
    url: `${SITE_CONFIG.url}/bmi-calculator`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: 'What is a healthy BMI for Indians?',
    a: 'For Indians and South Asians, the WHO recommends: Under 18.5 = Underweight, 18.5–22.9 = Normal/Healthy, 23–27.4 = Overweight, 27.5+ = Obese. These are lower than Western standards (where overweight starts at 25) because South Asians develop metabolic complications like type 2 diabetes and cardiovascular disease at lower BMI values.',
  },
  {
    q: 'What is the BMI formula?',
    a: 'BMI = Weight (kg) divided by Height squared (m²). Example: 70 kg at 1.70 m gives BMI = 70 divided by 2.89 = 24.2. In imperial: BMI = (Weight in lbs multiplied by 703) divided by Height in inches squared.',
  },
  {
    q: 'Is BMI accurate for Indians?',
    a: 'BMI is a useful screening tool but Indians have higher visceral fat at the same BMI compared to Europeans — meaning health risk starts at lower BMI. WHO recommends 23+ as the overweight threshold for South Asians vs 25+ for Western populations.',
  },
  {
    q: 'What is a good BMI for a 30-year-old Indian man?',
    a: 'For a 30-year-old Indian man, a healthy BMI is 18.5 to 22.9 using Indian/Asian thresholds. BMI 23–27.4 is overweight with increased risk of diabetes and hypertension.',
  },
  {
    q: 'What is a good BMI for a 25-year-old Indian woman?',
    a: 'For a 25-year-old Indian woman, healthy BMI is 18.5 to 22.9. Women with PCOS (affects up to 20% of Indian women) may have metabolic complications even at normal BMI — check fasting insulin levels as an additional marker.',
  },
  {
    q: 'How do I calculate ideal weight for my height in India?',
    a: 'Ideal weight range (kg) = 18.5 to 22.9 multiplied by height² (in metres). For 170 cm: Min = 18.5 × 1.70² = 53.5 kg. Max = 22.9 × 1.70² = 66.2 kg. Use the calculator above for your exact range.',
  },
  {
    q: 'Does BMI change with age?',
    a: 'The BMI formula is the same for all adults. However, older adults (65+) may safely maintain slightly higher BMI due to protective muscle mass effects. For children, age and gender-specific percentile charts are used instead of adult thresholds.',
  },
  {
    q: 'Can I have a normal BMI but still be unhealthy?',
    a: 'Yes — this is called TOFI (Thin Outside Fat Inside). A person can have normal BMI but high visceral fat, especially common in South Asians. Signs include waist above 80cm (women) or 90cm (men), high fasting blood sugar, or elevated triglycerides.',
  },
];

const PROGRAMMATIC_PAGES = [
  { href: '/bmi-calculator-for-men',        label: 'BMI Calculator for Men'           },
  { href: '/bmi-calculator-for-women',      label: 'BMI Calculator for Women'         },
  { href: '/bmi-calculator-for-children',   label: 'BMI Calculator for Children'      },
  { href: '/bmi-calculator-kg-cm',          label: 'BMI Calculator in kg and cm'      },
  { href: '/healthy-bmi-for-indians',       label: 'Healthy BMI for Indians'          },
  { href: '/bmi-calculator-with-age',       label: 'BMI Calculator with Age'          },
  { href: '/ideal-weight-calculator-india', label: 'Ideal Weight Calculator India'    },
  { href: '/bmi-chart-for-indian-women',    label: 'BMI Chart for Indian Women'       },
  { href: '/bmi-calculator-for-obesity',    label: 'BMI Calculator for Obesity Check' },
  { href: '/bmi-calculator-overweight',     label: 'Overweight BMI Calculator India'  },
];

export default function BMICalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BMI Calculator India – Indian Standards',
        description: 'Free BMI calculator for India using WHO-recommended Asian/Indian thresholds.',
        url: `${SITE_CONFIG.url}/bmi-calculator`,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: ['Indian/Asian BMI thresholds (WHO recommended)','Healthy weight range calculation','Health risk assessment','BMI gauge visualization','Metric and imperial units','No signup required'],
        provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'BMI Calculator', item: `${SITE_CONFIG.url}/bmi-calculator` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ────────────────────────────────────────── */}
        <div className="bg-white border-b border-surface-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-surface-500">
                <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
                <li><span className="text-surface-300">/</span></li>
                <li className="text-surface-800 font-medium">BMI Calculator</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-950 mb-3 tracking-tight">
              BMI Calculator India 2026 – Free Body Mass Index Calculator (Indian Standards)
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed max-w-3xl">
              Calculate your BMI using <strong className="text-surface-700">India-specific thresholds</strong> recommended
              by WHO for South Asian populations — where overweight starts at 23, not 25.
              Get your healthy weight range, BMI category, and health risk instantly. Free, no login.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['🇮🇳 Indian BMI Standards','⚖️ WHO Asian Thresholds','✅ Free & No Login','📊 Health Risk Assessment','📏 Metric + Imperial'].map(b => (
                <span key={b} className="text-xs font-medium text-surface-600 bg-surface-100 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculator ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BMICalculator />
        </div>

        {/* ── Medical disclaimer ──────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This BMI calculator is for informational purposes only and is not a substitute for professional medical advice. BMI is a screening tool, not a diagnostic one. Consult a qualified healthcare provider for assessment of your weight and overall health.
          </div>
        </div>

        {/* ── Rich SEO Content ────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">

          {/* Why Indian BMI is different */}
          <section aria-labelledby="indian-bmi-standards">
            <h2 id="indian-bmi-standards" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Why Indians Have Different BMI Standards — The Science
            </h2>
            <div className="space-y-3 text-surface-600 leading-relaxed mb-6">
              <p>
                Most BMI charts you find online use Western standards developed from European populations.
                For Indians and South Asians, these thresholds are <strong className="text-surface-800">dangerously misleading</strong>.
                A 2004 landmark WHO Expert Consultation found that South Asians develop type 2 diabetes
                and cardiovascular disease at a BMI of 23–24 — the same metabolic risk as Europeans at BMI 30.
              </p>
              <p>
                The biological reason: Indians tend to have higher visceral fat (fat around internal organs)
                and lower skeletal muscle mass at the same BMI as Europeans. This means Indians accumulate
                metabolically dangerous fat at lower overall body weights — which is why WHO introduced
                lower cut-off points specifically for Asian populations.
              </p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">BMI Category</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700">🇮🇳 Indian / Asian</th>
                    <th className="text-center px-4 py-3 font-semibold text-surface-700 rounded-tr-xl">🌍 WHO Global</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Underweight',      '< 18.5',      '< 18.5',      false],
                    ['Normal / Healthy', '18.5 – 22.9', '18.5 – 24.9', true ],
                    ['Overweight',       '23.0 – 27.4', '25.0 – 29.9', true ],
                    ['Obese Class I',    '27.5 – 32.4', '30.0 – 34.9', true ],
                    ['Obese Class II',   '32.5 – 37.4', '35.0 – 39.9', true ],
                    ['Obese Class III',  '≥ 37.5',      '≥ 40.0',      true ],
                  ].map(([cat, ind, who, diff], i) => (
                    <tr key={cat} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{cat}</td>
                      <td className="px-4 py-3 text-center font-bold text-brand-700">{ind}</td>
                      <td className={`px-4 py-3 text-center font-medium ${diff ? 'text-amber-700' : 'text-surface-700'}`}>{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-surface-400 mt-2">Source: WHO Expert Consultation on Appropriate BMI for Asian Populations, 2004. Amber cells differ from Indian standards.</p>
            </div>
          </section>

          {/* Healthy weight table */}
          <section aria-labelledby="healthy-weight">
            <h2 id="healthy-weight" className="font-display font-bold text-2xl text-surface-900 mb-4">
              Healthy Weight Range by Height for Indians (2026)
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Based on Indian/Asian BMI thresholds (18.5–22.9 = healthy). The Indian Max column is the key
              difference from Western standards — use this for practical weight goals:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700 rounded-tl-xl">Height</th>
                    <th className="text-right px-4 py-3 font-semibold text-surface-700">Min Healthy</th>
                    <th className="text-right px-4 py-3 font-semibold text-emerald-700">🇮🇳 Indian Max</th>
                    <th className="text-right px-4 py-3 font-semibold text-amber-700 rounded-tr-xl">🌍 WHO Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["150 cm (4'11\")", '41.6 kg', '51.5 kg', '56.1 kg'],
                    ["155 cm (5'1\")",  '44.4 kg', '55.0 kg', '60.0 kg'],
                    ["160 cm (5'3\")",  '47.4 kg', '58.7 kg', '64.0 kg'],
                    ["165 cm (5'5\")",  '50.3 kg', '62.3 kg', '68.0 kg'],
                    ["170 cm (5'7\")",  '53.5 kg', '66.2 kg', '72.2 kg'],
                    ["175 cm (5'9\")",  '56.7 kg', '70.2 kg', '76.6 kg'],
                    ["180 cm (5'11\")", '60.0 kg', '74.3 kg', '81.0 kg'],
                    ["185 cm (6'1\")",  '63.4 kg', '78.5 kg', '85.6 kg'],
                  ].map(([h, min, ind, who], i) => (
                    <tr key={h} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-900">{h}</td>
                      <td className="px-4 py-3 text-right text-surface-700">{min}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">{ind}</td>
                      <td className="px-4 py-3 text-right text-amber-700">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Health risks */}
          <section aria-labelledby="health-risks">
            <h2 id="health-risks" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Health Risks at Each BMI Category for Indians
            </h2>
            <div className="space-y-3">
              {[
                { cat: 'Underweight (BMI < 18.5)',         color:'#185FA5', bg:'#E6F1FB', text: 'Malnutrition, weakened immunity, anaemia, osteoporosis, fertility issues. Particularly concerning in India where 16% of women are underweight (NFHS-5 2021). Goal: gradual weight gain through calorie-dense, nutrient-rich foods.' },
                { cat: 'Healthy Weight (BMI 18.5–22.9)',   color:'#3B6D11', bg:'#EAF3DE', text: 'Lowest risk for all chronic diseases. Optimal cardiovascular function. Best energy levels and cognitive performance. Maintain through balanced diet and 150 minutes of moderate exercise per week (ICMR guidelines).' },
                { cat: 'Overweight (BMI 23–27.4)',         color:'#BA7517', bg:'#FAEEDA', text: '40–60% increased risk of type 2 diabetes. Elevated blood pressure. Increased LDL cholesterol. Joint stress on knees. Even modest weight loss of 5–10% significantly reduces all risk markers.' },
                { cat: 'Obese Class I (BMI 27.5–32.4)',   color:'#D85A30', bg:'#FAECE7', text: '8× higher diabetes risk. High probability of hypertension. Non-alcoholic fatty liver disease (NAFLD). Sleep apnea. Structured medical supervision recommended for weight management.' },
                { cat: 'Obese Class II–III (BMI > 32.5)', color:'#A32D2D', bg:'#FCEBEB', text: 'Extreme cardiovascular risk. Severely reduced life expectancy. Obesity-related cancers. High surgical risk. Medical intervention including pharmacotherapy or bariatric surgery may be appropriate.' },
              ].map(r => (
                <div key={r.cat} className="p-4 rounded-xl border" style={{ background: r.bg, borderColor: r.color + '30' }}>
                  <div className="font-bold text-sm mb-1.5" style={{ color: r.color }}>{r.cat}</div>
                  <p className="text-sm text-surface-700 leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When BMI is not enough */}
          <section aria-labelledby="bmi-limitations">
            <h2 id="bmi-limitations" className="font-display font-bold text-2xl text-surface-900 mb-5">
              When BMI is Not Enough — 5 Important Limitations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏋️', title: 'Athletes & Bodybuilders',        desc: 'High muscle mass increases weight without increasing fat. A powerlifter may have BMI 30 (technically obese) but very low body fat. BMI overestimates obesity for muscular people.' },
                { icon: '👴', title: 'Elderly (65+)',                   desc: 'Older adults often lose muscle (sarcopenia) while maintaining fat — called sarcopenic obesity. A BMI in the normal range can mask dangerous muscle loss.' },
                { icon: '⚠️', title: 'TOFI (Thin Outside, Fat Inside)', desc: 'Normal BMI with high visceral fat — common in South Asians. Signs: waist above 80cm (women) or 90cm (men), elevated fasting blood sugar.' },
                { icon: '🤰', title: 'During Pregnancy',               desc: 'BMI changes significantly during pregnancy and is not an accurate health indicator. Use gestational weight gain guidelines from your OB/GYN.' },
                { icon: '🧒', title: 'Children & Teenagers',           desc: 'Kids BMI uses age and gender-specific percentile charts (BMI-for-age), not the same fixed scale as adults. A BMI of 22 means something different at age 10 vs 30.' },
                { icon: '🌍', title: 'Different Ethnic Backgrounds',   desc: 'Different risk thresholds exist for East Asians (lower), Pacific Islanders (higher), and Black populations (higher muscle mass). Our tool uses WHO Asian thresholds for Indians.' },
              ].map(c => (
                <div key={c.title} className="flex flex-col gap-2 p-5 bg-white border border-surface-200 rounded-2xl">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="font-semibold text-surface-900 text-sm">{c.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Health cluster */}
          <section aria-labelledby="health-cluster">
            <h2 id="health-cluster" className="font-display font-bold text-xl text-surface-900 mb-4">
              Complete Health Calculator Suite
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/bmi-calculator',          icon: '⚖️', label: 'BMI Calculator',         desc: 'Body Mass Index with Indian standards',       active: true  },
                { href: '/age-calculator-online',    icon: '🎂', label: 'Age Calculator',          desc: 'Exact age in years, months and days',          active: true  },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${l.active ? 'bg-white border-surface-200 hover:border-brand-300 hover:bg-brand-50 group' : 'bg-surface-50 border-surface-100 pointer-events-none opacity-60'}`}>
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${l.active ? 'text-surface-800 group-hover:text-brand-700' : 'text-surface-600'}`}>{l.label}</span>
                      {!l.active && <span className="text-[10px] bg-surface-200 text-surface-500 px-1.5 py-0.5 rounded">Coming Soon</span>}
                    </div>
                    <div className="text-xs text-surface-500 mt-0.5">{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-surface-900 mb-5">
              Frequently Asked Questions — BMI Calculator India
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-surface-200 rounded-xl bg-white overflow-hidden"
                 >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-surface-800 hover:bg-surface-50 transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-surface-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-surface-600 text-sm leading-relaxed border-t border-surface-100"
                   >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Programmatic variants */}
          <section aria-labelledby="more-bmi">
            <h2 id="more-bmi" className="font-display font-bold text-xl text-surface-900 mb-4">More BMI Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMATIC_PAGES.map(v => (
                <Link key={v.href} href={v.href}
                  className="flex items-center gap-3 p-4 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-100 transition-colors group">
                  <span className="text-brand-600">⚖️</span>
                  <span className="font-semibold text-brand-800 text-sm group-hover:underline">{v.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-tools">
            <h2 id="related-tools" className="font-display font-bold text-xl text-surface-900 mb-4">Related Free Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/salary-calculator',    icon: '💰', label: 'Salary Calculator',  desc: 'Calculate in-hand salary from CTC'      },
                { href: '/emi-calculator',        icon: '🧮', label: 'EMI Calculator',      desc: 'Plan your home or car loan repayment'   },
                { href: '/gst-calculator',        icon: '🧾', label: 'GST Calculator',      desc: 'Calculate GST on any amount instantly'  },
                { href: '/age-calculator-online', icon: '🎂', label: 'Age Calculator',      desc: 'Calculate exact age from date of birth' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                  <span className="text-xl">{l.icon}</span>
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