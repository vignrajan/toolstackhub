// ════════════════════════════════════════════════════════════════
// FILE 1: data/bmi-pages.js
// All 10 programmatic BMI page definitions
// ════════════════════════════════════════════════════════════════

export const bmiPages = [
    {
      slug:    'bmi-calculator-for-men',
      h1:      'BMI Calculator for Men – Body Mass Index for Indian Men',
      title:   'BMI Calculator for Men India 2026 – Free Online Tool',
      metaDesc:'Free BMI calculator for men in India. Uses WHO Asian thresholds. Calculate healthy weight range, BMI category, and health risk for Indian men. No signup.',
      intro:   'Indian men have specific BMI risk thresholds that differ from Western populations. Studies show Indian men develop type 2 diabetes and cardiovascular disease at a BMI of 23–24, compared to 27–28 for European men of the same age. This calculator uses WHO-recommended Asian thresholds for accurate health risk assessment for Indian men.',
      prefill: { gender: 'male' },
      tips: [
        'For Indian men, a waist circumference above 90cm indicates high metabolic risk even at normal BMI',
        'Indian men lose muscle mass faster after age 40 — reassess BMI and body composition annually',
        'Athletes and gym-goers: BMI overestimates fat for highly muscular individuals',
        'Combine BMI with fasting blood sugar and blood pressure for complete metabolic health picture',
      ],
      useCaseH2:  'BMI Reference Ranges for Indian Men by Age',
      useCaseText: 'While the BMI thresholds are the same regardless of age (18.5–22.9 for healthy weight using Indian standards), health risk implications change with age. Men above 40 with a BMI between 23–25 should be more vigilant about annual metabolic screening. Men above 60 may maintain slightly higher BMI (up to 24.9) without increased risk due to protective muscle mass effects.',
      additionalContent: [
        { h3: 'Common BMI Concerns for Indian Men', items: ['Beer belly / central obesity — high visceral fat even at normal BMI is common in Indian men', 'Sedentary corporate jobs — leads to gradual weight gain through 30s and 40s', 'High-carb Indian diet (rice, roti) — contributes to metabolic syndrome risk at lower BMI', 'Low vitamin D — common in India, linked to obesity and insulin resistance'] },
      ],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-women', '/salary-calculator', '/age-calculator-online'],
    },
    {
      slug:    'bmi-calculator-for-women',
      h1:      'BMI Calculator for Women – Indian Women BMI Standards',
      title:   'BMI Calculator for Women India 2026 – Free Online Tool',
      metaDesc:'Free BMI calculator for women in India. Accounts for female body composition. Healthy weight range, BMI category using Indian/Asian WHO standards. No signup required.',
      intro:   'Women naturally carry 6–11% more body fat than men at the same BMI due to reproductive hormones — and this is physiologically normal. However, Indian women face unique health considerations: PCOS affects up to 20% of Indian women and causes metabolic complications at normal BMI, while pregnancy and postpartum weight changes require careful interpretation of BMI scores.',
      prefill: { gender: 'female' },
      tips: [
        'Women with PCOS may show metabolic disease risk at normal BMI — check fasting insulin levels',
        'Postpartum BMI: allow 12–18 months after delivery before targeting pre-pregnancy BMI',
        'Waist circumference above 80cm (not 90cm as for men) is the risk threshold for Indian women',
        'Menopause causes fat redistribution from hips to abdomen — recheck BMI and waist circumference annually after 45',
      ],
      useCaseH2:  'PCOS, Pregnancy and BMI — What Indian Women Need to Know',
      useCaseText: 'Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders in Indian women, affecting 15–20% of women of reproductive age. Women with PCOS often have insulin resistance that causes metabolic complications even when BMI is within normal range. If you have PCOS, use BMI as one indicator alongside fasting blood sugar, HOMA-IR, and waist-to-hip ratio for a complete metabolic health picture.',
      additionalContent: [
        { h3: 'BMI Through Life Stages for Indian Women', items: ['Teenage (13–18): Use BMI-for-age percentile charts, not adult BMI scale', 'Reproductive years (18–45): Target BMI 18.5–22.9 using Indian standards', 'Pregnancy: Focus on gestational weight gain guidelines, not BMI', 'Menopause (45+): BMI 20–24.9 may be protective against osteoporosis'] },
      ],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-men', '/salary-calculator', '/age-calculator-online'],
    },
    {
      slug:    'bmi-calculator-for-children',
      h1:      'BMI Calculator for Children India – BMI for Kids 2–18',
      title:   'BMI Calculator for Children India 2026 – Free Online Tool',
      metaDesc:"Free BMI calculator for children in India. Uses age and gender-specific BMI-for-age percentiles for Indian children aged 2–18. No signup required.",
      intro:   "Childhood BMI is calculated differently from adult BMI. While the formula (weight ÷ height²) is the same, the interpretation uses age and gender-specific BMI-for-age percentile charts — because a BMI of 16 is normal for a 6-year-old but underweight for a 16-year-old. India's National Family Health Survey (NFHS-5) shows 35.5% of children under 5 are stunted and 19.3% are wasted — making childhood BMI monitoring critically important.",
      prefill: { age: 12 },
      tips: [
        'For children under 18, results show BMI-for-age percentile, not adult BMI category',
        'Percentile below 5th = underweight; 5th–85th = healthy; 85th–95th = overweight; above 95th = obese',
        'ICMR has published updated IAP growth charts for Indian children aged 5–18 — our tool uses these',
        'Annual BMI tracking is recommended at school health checkups',
      ],
      useCaseH2:  'Understanding Childhood BMI Percentiles in India',
      useCaseText: "Unlike adult BMI which uses fixed thresholds, childhood BMI is expressed as a percentile relative to other children of the same age and gender. The Indian Academy of Pediatrics (IAP) has published India-specific growth charts that account for the nutritional environment and genetics of Indian children. These differ from WHO Child Growth Standards and are more appropriate for assessing Indian children's weight status.",
      additionalContent: [
        { h3: 'Childhood Obesity in India — The Data', items: ['14.4% of Indian school-age children are overweight or obese (ICMR 2023)', 'Urban children have higher rates (20-25%) than rural children (8-12%)', 'Sedentary screen time has increased dramatically since 2020', 'School canteen food quality is a major contributor — advocate for healthier options'] },
      ],
      internalLinks: ['/bmi-calculator', '/age-calculator-online', '/bmi-calculator-for-men', '/bmi-calculator-for-women'],
    },
    {
      slug:    'bmi-calculator-kg-cm',
      h1:      'BMI Calculator in kg and cm – Metric BMI Calculator India',
      title:   'BMI Calculator kg cm India 2026 – Metric Body Mass Index',
      metaDesc:'Calculate BMI in kg and cm free online. Metric BMI calculator for India with Indian/Asian thresholds. Instant BMI result, healthy weight range, no signup.',
      intro:   'The metric BMI calculator is the most commonly used format in India — where height is measured in centimetres and weight in kilograms. Enter your height in cm and weight in kg to get your BMI score, category, and healthy weight range instantly. Our calculator uses Indian-specific thresholds (overweight starts at BMI 23, not 25) for accurate health assessment.',
      prefill: { unit: 'metric' },
      tips: [
        'Measure height without footwear for accurate BMI calculation',
        'Weigh yourself first thing in the morning before eating for consistent tracking',
        'Record BMI monthly, not daily — day-to-day weight fluctuates by 1–3 kg due to hydration',
        'Height decreases slightly with age after 40 — remeasure every 5 years for accurate BMI',
      ],
      useCaseH2:  'BMI Formula in kg and cm — Step by Step',
      useCaseText: "BMI in metric units = Weight (kg) ÷ [Height (m)]². Since height is usually measured in cm, convert first: divide cm by 100. Example: Height 170 cm = 1.70 m. Weight 70 kg. BMI = 70 ÷ (1.70 × 1.70) = 70 ÷ 2.89 = 24.2. Using Indian thresholds, this BMI of 24.2 falls in the 'Overweight' category (23.0–27.4) and indicates moderately elevated health risk.",
      additionalContent: [],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-men', '/bmi-calculator-for-women', '/ideal-weight-calculator-india'],
    },
    {
      slug:    'healthy-bmi-for-indians',
      h1:      'Healthy BMI for Indians – What is the Normal BMI in India?',
      title:   'Healthy BMI for Indians 2026 – Normal BMI Range in India',
      metaDesc:'What is a healthy BMI for Indians? Learn the WHO-recommended BMI range for South Asians (18.5–22.9) and why it differs from Western standards. Free calculator included.',
      intro:   'The healthy BMI range for Indians is 18.5 to 22.9 — different from the Western standard of 18.5 to 24.9. This difference matters significantly: an Indian person with a BMI of 23.5 (considered "healthy" by Western standards) actually has a measurably elevated risk of type 2 diabetes, hypertension, and cardiovascular disease. Understanding the correct threshold for your ethnicity is essential for meaningful health planning.',
      prefill: {},
      tips: [
        'Target BMI 18.5–22.9 for optimal health if you are of South Asian origin',
        'Even small improvements matter: reducing BMI from 28 to 26 significantly reduces diabetes risk',
        'Indian diet is high in refined carbohydrates — swap refined for whole grains to maintain healthy BMI',
        'Regular blood sugar testing is recommended for all Indians above 30, regardless of BMI',
      ],
      useCaseH2:  'Why "Normal" BMI is Different for Indians — The Research',
      useCaseText: 'A landmark 2004 WHO Expert Consultation on BMI in Asian Populations analyzed data from multiple large-scale studies across India, China, Japan, and Southeast Asia. The finding: South Asians develop type 2 diabetes, hypertension, and dyslipidemia at BMI thresholds 2–3 points lower than European populations. The proposed additional cut-off points for action in Asian populations are at BMI 23.0 (increased risk) and 27.5 (high risk). These are the thresholds used by AIIMS (All India Institute of Medical Sciences), ICMR, and most Indian endocrinologists.',
      additionalContent: [
        { h3: 'The India-Specific Metabolic Risk Profile', items: ['Indians have 3–5× higher risk of type 2 diabetes compared to Europeans at the same BMI', 'Higher visceral fat (fat around organs) at lower total body weight', 'Lower muscle mass relative to fat (higher fat-to-muscle ratio)', 'Higher LDL and lower HDL cholesterol at lower BMI levels'] },
      ],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-men', '/bmi-calculator-for-women', '/bmi-calculator-kg-cm'],
    },
    {
      slug:    'bmi-calculator-with-age',
      h1:      'BMI Calculator with Age – Age-Adjusted BMI India',
      title:   'BMI Calculator with Age India 2026 – Age-Adjusted Body Mass Index',
      metaDesc:'BMI calculator with age adjustment for India. Understand how BMI health risk changes across age groups. Free, Indian standards, no signup required.',
      intro:   'Age significantly affects how BMI should be interpreted. While the BMI formula stays the same, the health risks associated with specific BMI values shift meaningfully as we age. A 25-year-old and a 65-year-old with the same BMI of 24 face very different health landscapes — our age-aware calculator helps you understand your BMI in the context of your life stage.',
      prefill: {},
      tips: [
        'For adults under 40: strictly target BMI 18.5–22.9 using Indian standards',
        'For adults 40–65: BMI up to 24 may be acceptable with normal blood sugar and blood pressure',
        'For adults above 65: slightly higher BMI (up to 26) may be protective against bone fractures',
        'Regardless of age, waist circumference > 90cm (men) or 80cm (women) warrants medical attention',
      ],
      useCaseH2:  'Age-by-Age BMI Guidance for Indians',
      useCaseText: 'Age 18–40: This is the period when lifestyle habits are established. Targeting and maintaining BMI 18.5–22.9 now dramatically reduces lifetime risk of all metabolic diseases. Age 40–60: Muscle loss begins, making it easier to gain fat even at the same calorie intake. Annual BMI and metabolic screening is essential. Age 60+: Research suggests that being slightly heavier (BMI 22–26) may actually be protective in older adults, reducing risks of frailty, bone fracture, and malnutrition. Extreme thinness is as dangerous as obesity in the elderly.',
      additionalContent: [],
      internalLinks: ['/bmi-calculator', '/age-calculator-online', '/bmi-calculator-for-men', '/bmi-calculator-for-women'],
    },
    {
      slug:    'ideal-weight-calculator-india',
      h1:      'Ideal Weight Calculator India – Find Your Healthy Weight',
      title:   'Ideal Weight Calculator India 2026 – Free Online Tool',
      metaDesc:'Calculate your ideal weight for your height in India free. Based on Indian/Asian BMI standards (18.5–22.9). Get exact healthy weight range in kg. No signup.',
      intro:   'Your ideal weight is not a single number — it is a range based on your height and body composition. For Indians, the healthy weight range corresponds to BMI 18.5–22.9 (using Asian thresholds), which gives a specific kg range for every height. This calculator gives you your personal healthy weight range along with the exact amount to gain or lose to reach it.',
      prefill: {},
      tips: [
        'Set your target weight at the midpoint of your healthy range for a comfortable, sustainable goal',
        'Losing 0.5–1 kg per week is the safest, most sustainable rate — crash dieting causes muscle loss',
        'For every 1 kg of weight loss, joint pressure reduces by 4 kg — significant for knee health',
        'Track weight at the same time each day (morning, after bathroom) for consistent comparison',
      ],
      useCaseH2:  'How to Calculate Ideal Weight for Indians',
      useCaseText: 'Ideal weight range (kg) = BMI range × height² (in metres). Using Indian standards (BMI 18.5–22.9): For 170 cm (1.70 m): Minimum = 18.5 × 1.70² = 53.5 kg. Maximum = 22.9 × 1.70² = 66.2 kg. The ideal weight range is 53.5 to 66.2 kg. For personalized results including your exact range and how much to gain or lose, use the calculator above.',
      additionalContent: [
        { h3: 'Ideal Weight Formulas for Indians', items: ['Robinson Formula (1983): Men: 52 + 1.9 kg per inch over 5 feet. Women: 49 + 1.7 kg per inch over 5 feet', 'Miller Formula: Men: 56.2 + 1.41 kg per inch over 5 feet. Women: 53.1 + 1.36 kg per inch over 5 feet', 'BMI-based (recommended for Indians): Target BMI 18.5–22.9 × height²', 'Waist-to-height ratio: waist circumference ÷ height should be below 0.5 for all adults'] },
      ],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-men', '/bmi-calculator-for-women', '/bmi-calculator-kg-cm'],
    },
    {
      slug:    'bmi-chart-for-indian-women',
      h1:      'BMI Chart for Indian Women – BMI Table 2026',
      title:   'BMI Chart for Indian Women 2026 – Complete BMI Reference',
      metaDesc:'BMI chart for Indian women with healthy weight ranges for every height. Uses WHO Asian thresholds. Free BMI calculator for women. No signup.',
      intro:   'A BMI chart specific to Indian women helps you quickly find your healthy weight range for your height without a calculator. This reference chart uses WHO-recommended Asian thresholds — where the healthy range for Indian women is BMI 18.5–22.9 — rather than the Western standard that starts overweight at 25.',
      prefill: { gender: 'female' },
      tips: [
        'BMI chart values are the same for men and women — but health risk context differs slightly',
        'Indian women with PCOS: even normal BMI may require metabolic monitoring',
        'Postpartum: use pre-pregnancy height and current weight for accurate BMI tracking',
        'Bone density affects healthy weight range — women with higher bone density can be at the higher end',
      ],
      useCaseH2:  'BMI Reference Chart for Indian Women (Height 145–180 cm)',
      useCaseText: 'The table below shows the healthy weight range (BMI 18.5–22.9) and overweight threshold (BMI 23+) for Indian women at common heights. Use this as a quick reference — then use the calculator above for your exact numbers.',
      additionalContent: [
        { h3: 'Quick BMI Reference for Indian Women', items: [
          '150 cm: Healthy = 41.6–51.5 kg | Overweight from 51.5 kg',
          '155 cm: Healthy = 44.4–55.0 kg | Overweight from 55.0 kg',
          '160 cm: Healthy = 47.4–58.7 kg | Overweight from 58.7 kg',
          '165 cm: Healthy = 50.3–62.3 kg | Overweight from 62.3 kg',
          '170 cm: Healthy = 53.5–66.2 kg | Overweight from 66.2 kg',
        ]},
      ],
      internalLinks: ['/bmi-calculator', '/bmi-calculator-for-women', '/bmi-calculator-for-men', '/ideal-weight-calculator-india'],
    },
    {
      slug:    'bmi-calculator-for-obesity',
      h1:      'BMI Calculator for Obesity – Check Obesity Level India',
      title:   'BMI Calculator for Obesity India 2026 – Free Obesity Check',
      metaDesc:'Check your obesity level with our BMI calculator for India. Classifies obesity Class I, II, III using Indian standards. Health risks, weight to lose, no signup.',
      intro:   'India is experiencing an obesity epidemic — the ICMR estimates over 40 million Indians are obese as of 2026. Using Indian BMI standards, obesity begins at 27.5 (Class I), 32.5 (Class II), and 37.5 (Class III). This calculator helps you understand your obesity classification, associated health risks, and the specific amount of weight reduction that will meaningfully lower your risk.',
      prefill: {},
      tips: [
        'Losing just 5% of body weight reduces diabetes risk by 50% and blood pressure significantly',
        'Obesity Class II and III: consult a bariatric specialist — medical supervision improves outcomes',
        'For severe obesity, rapid weight loss can be dangerous — gradual, medically supervised loss is safer',
        'Waist circumference is a better predictor of cardiovascular risk than BMI for obese individuals',
      ],
      useCaseH2:  'Obesity Classification for Indians — What Your BMI Means',
      useCaseText: 'Using Indian/Asian standards from WHO: Class I Obesity (BMI 27.5–32.4) — High risk for type 2 diabetes, hypertension, and sleep apnea. Lifestyle intervention is the primary treatment: caloric reduction, exercise, and behavior modification. Class II Obesity (BMI 32.5–37.4) — Very high risk. Medical supervision with possible pharmacotherapy (weight loss medications). Class III Obesity (BMI 37.5+) — Extreme risk. Bariatric surgery may be considered when lifestyle and medical therapy have not achieved adequate results.',
      additionalContent: [],
      internalLinks: ['/bmi-calculator', '/healthy-bmi-for-indians', '/bmi-calculator-for-men', '/bmi-calculator-for-women'],
    },
    {
      slug:    'bmi-calculator-overweight',
      h1:      'Overweight BMI Calculator India – Am I Overweight?',
      title:   'Overweight BMI Calculator India 2026 – Check if You Are Overweight',
      metaDesc:"Am I overweight? Use our BMI calculator to check if you're overweight by Indian standards. Overweight starts at BMI 23 for Indians. Healthy weight range included. Free.",
      intro:   'In India, overweight is defined as BMI 23.0–27.4 using WHO Asian recommendations — significantly lower than the Western standard of 25–29.9. This means millions of Indians who consider themselves to have a "healthy" weight by global standards are actually overweight by the medically appropriate Indian standard. This calculator tells you exactly where you stand.',
      prefill: {},
      tips: [
        'BMI 23–25 for Indians: reduce refined carbohydrates and add 30 minutes daily walking',
        'BMI 25–27.4: structured diet planning and 150 minutes of moderate exercise per week recommended',
        'Indian diet modification: replace maida with whole wheat, reduce rice portions, add more vegetables',
        'Even 2–3 kg of weight loss in the overweight range significantly improves blood sugar and blood pressure',
      ],
      useCaseH2:  'What to Do if You Are Overweight by Indian Standards',
      useCaseText: 'If your BMI is 23–27.4 using Indian standards, you are in the overweight category. This does not mean you need dramatic intervention — but it does mean elevated risk that is very manageable. The most effective steps are: (1) Reduce refined carbohydrate intake (maida, white rice, sugar) by 30–40%. (2) Add 30 minutes of moderate activity (brisk walking, cycling, swimming) 5 days a week. (3) Get annual blood sugar and blood pressure checks. (4) Target 5–7% body weight reduction over 6 months — sustainable and sufficient to meaningfully reduce metabolic risk.',
      additionalContent: [],
      internalLinks: ['/bmi-calculator', '/healthy-bmi-for-indians', '/ideal-weight-calculator-india', '/bmi-calculator-for-men'],
    },
  ];
  
  export function getBMIPageBySlug(slug) {
    return bmiPages.find(p => p.slug === slug) || null;
  }
  export function getAllBMISlugs() {
    return bmiPages.map(p => p.slug);
  }
  
  