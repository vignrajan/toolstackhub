import { notFound } from 'next/navigation';
import ToolLayout from '../../../components/ToolLayout';
import { tools, getToolBySlug, getRelatedTools, SITE_CONFIG } from '../../../data/tools';

// ── Tool Component Imports ────────────────────────────────────
import ImageCompressor    from '../../../components/tools/ImageCompressor';
import ImageResizer       from '../../../components/tools/ImageResizer';
import JpgToPng          from '../../../components/tools/JpgToPng';
import WordCounter        from '../../../components/tools/WordCounter';
import CharacterCounter   from '../../../components/tools/CharacterCounter';
import CaseConverter      from '../../../components/tools/CaseConverter';
import JsonFormatter      from '../../../components/tools/JsonFormatter';
import Base64Encoder      from '../../../components/tools/Base64Encoder';
import UuidGenerator      from '../../../components/tools/UuidGenerator';
import TimestampConverter from '../../../components/tools/TimestampConverter';
import UrlEncoder         from '../../../components/tools/UrlEncoder';
import QrCodeGenerator    from '../../../components/tools/QrCodeGenerator';
import PasswordGenerator  from '../../../components/tools/PasswordGenerator';
import RandomNumber       from '../../../components/tools/RandomNumber';
import MarkdownPreview           from '../../../components/tools/MarkdownPreview';
// ── Batch 2: High-traffic SEO tools ──
import ColorPicker               from '../../../components/tools/ColorPicker';
import MetaTagGenerator          from '../../../components/tools/MetaTagGenerator';
import CssMinifier               from '../../../components/tools/CssMinifier';
import HtmlFormatter             from '../../../components/tools/HtmlFormatter';
import RegexTester               from '../../../components/tools/RegexTester';
import AgeCalculator             from '../../../components/tools/AgeCalculator';
import PercentageCalculator      from '../../../components/tools/PercentageCalculator';
import BinaryConverter           from '../../../components/tools/BinaryConverter';
import LoremIpsum                from '../../../components/tools/LoremIpsum';
import PomodoroTimer             from '../../../components/tools/PomodoroTimer';
import Stopwatch                 from '../../../components/tools/Stopwatch';
import CountdownTimer            from '../../../components/tools/CountdownTimer';
import ScreenResolution          from '../../../components/tools/ScreenResolution';
import TextToSpeech              from '../../../components/tools/TextToSpeech';
import PasswordStrengthChecker   from '../../../components/tools/PasswordStrengthChecker';
// ── Batch 3 ──
import AiPromptGenerator         from '../../../components/tools/AiPromptGenerator';
import TextToHandwriting         from '../../../components/tools/TextToHandwriting';
// ── Batch 4 — newly migrated tools ──
import ImageToPdf                from '../../../components/tools/ImageToPdf';
import RemoveDuplicateLines      from '../../../components/tools/RemoveDuplicateLines';
import TypingSpeedTest           from '../../../components/tools/TypingSpeedTest';
import RemoveLineBreaks          from '../../../components/tools/RemoveLineBreaks';
import TextRepeater              from '../../../components/tools/TextRepeater';
import JsonToCsv                 from '../../../components/tools/JsonToCsv';
import DiffChecker               from '../../../components/tools/DiffChecker';
import CronBuilder               from '../../../components/tools/CronBuilder';
import JwtDecoder                from '../../../components/tools/JwtDecoder';
import CgpaCalculator            from '../../../components/tools/CgpaCalculator';
// ── Batch 5 — India tools + remaining ──
import BmiCalculator             from '../../../components/tools/BMICalculator';
import ChatScreenshotGenerator   from '../../../components/tools/ChatScreenshotGenerator';
import ClaudeTokenCalculator     from '../../../components/tools/Calculator';
import ColorPaletteGenerator     from '../../../components/tools/ColorPaletteGenerator';
import EMICalculator             from '../../../components/tools/EMICalculator';
import EpfCalculator             from '../../../components/tools/EpfCalculator';
import Form16Calculator          from '../../../components/tools/Form16Calculator';
import FuelBillGenerator         from '../../../components/tools/FuelBillGenerator';
import GSTCalculator             from '../../../components/tools/GSTCalculator';
import GstValidator              from '../../../components/tools/GstValidator';
import HRACalculator             from '../../../components/tools/HRACalculator';
import HtmlToMarkdown            from '../../../components/tools/HtmlToMarkdown';
import IfscFinder                from '../../../components/tools/IfscFinder';
import InvoiceGenerator          from '../../../components/tools/InvoiceGenerator';
import MarkdownToHtml            from '../../../components/tools/MarkdownToHtml';
import NumberToWords             from '../../../components/tools/NumberToWords';
import PanValidator              from '../../../components/tools/PanValidator';
import PPFCalculator             from '../../../components/tools/PPFCalculator';
import ProfessionalTaxCalculator from '../../../components/tools/ProfessionalTaxCalculator';
import RentAgreementGenerator    from '../../../components/tools/RentAgreementGenerator';
import SalaryGratuityCalculator  from '../../../components/tools/SalaryGratuityCalculator';
import SalarySlipGenerator       from '../../../components/tools/SalarySlipGenerator';
import SIPCalculator             from '../../../components/tools/SIPCalculator';
import SpeechBubbleMaker         from '../../../components/tools/SpeechBubbleMaker';
import SqlFormatter              from '../../../components/tools/SqlFormatter';
import UnitConverter             from '../../../components/tools/UnitConverter';
import WhatsAppLinkGenerator     from '../../../components/tools/WhatsAppLinkGenerator';

/**
 * Tool component registry
 * ========================
 * Map each tool slug → its React component.
 * TO ADD A NEW TOOL: add its slug and import above, then add to this map.
 */
const TOOL_COMPONENTS = {
  // Batch 1
  'image-compressor':          ImageCompressor,
  'image-resizer':             ImageResizer,
  'jpg-to-png':                JpgToPng,
  'word-counter':              WordCounter,
  'character-counter':         CharacterCounter,
  'case-converter':            CaseConverter,
  'json-formatter':            JsonFormatter,
  'base64-encoder':            Base64Encoder,
  'uuid-generator':            UuidGenerator,
  'timestamp-converter':       TimestampConverter,
  'url-encoder':               UrlEncoder,
  'qr-code-generator':         QrCodeGenerator,
  'password-generator':        PasswordGenerator,
  'random-number-generator':   RandomNumber,
  'markdown-preview':          MarkdownPreview,
  // Batch 2
  'color-picker':              ColorPicker,
  'meta-tag-generator':        MetaTagGenerator,
  'css-minifier':              CssMinifier,
  'html-formatter':            HtmlFormatter,
  'regex-tester':              RegexTester,
  'age-calculator':            AgeCalculator,
  'percentage-calculator':     PercentageCalculator,
  'binary-converter':          BinaryConverter,
  'lorem-ipsum-generator':     LoremIpsum,
  'pomodoro-timer':            PomodoroTimer,
  'stopwatch':                 Stopwatch,
  'countdown-timer':           CountdownTimer,
  'screen-resolution':         ScreenResolution,
  'text-to-speech':            TextToSpeech,
  'password-strength-checker': PasswordStrengthChecker,
  // Batch 3
  'ai-prompt-generator':       AiPromptGenerator,
  'text-to-handwriting':       TextToHandwriting,
  // Batch 4
  'image-to-pdf':              ImageToPdf,
  'remove-duplicate-lines':    RemoveDuplicateLines,
  'typing-speed-test':         TypingSpeedTest,
  'remove-line-breaks':        RemoveLineBreaks,
  'remove-empty-lines':        RemoveLineBreaks,
  'remove-extra-spaces':       RemoveLineBreaks,
  'text-repeater':             TextRepeater,
  'json-to-csv':               JsonToCsv,
  'diff-checker':              DiffChecker,
  'cron-expression-builder':   CronBuilder,
  'jwt-decoder':               JwtDecoder,
  'cgpa-calculator':           CgpaCalculator,
  // Batch 5
  'bmi-calculator':              BmiCalculator,
  'car-loan-emi-calculator':     EMICalculator,
  'chat-screenshot-generator':   ChatScreenshotGenerator,
  'claude-code-token-calculator': ClaudeTokenCalculator,
  'color-palette-generator':     ColorPaletteGenerator,
  'emi-calculator':              EMICalculator,
  'epf-calculator':              EpfCalculator,
  'form-16-calculator':          Form16Calculator,
  'fuel-bill-generator':         FuelBillGenerator,
  'gst-calculator':              GSTCalculator,
  'gst-number-validator':        GstValidator,
  'home-loan-emi-calculator':    EMICalculator,
  'hra-calculator':              HRACalculator,
  'html-to-markdown':            HtmlToMarkdown,
  'ifsc-finder':                 IfscFinder,
  'invoice-generator':           InvoiceGenerator,
  'markdown-to-html':            MarkdownToHtml,
  'number-to-words':             NumberToWords,
  'pan-validator':               PanValidator,
  'ppf-calculator':              PPFCalculator,
  'professional-tax-calculator': ProfessionalTaxCalculator,
  'rent-agreement-generator':    RentAgreementGenerator,
  'salary-calculator':           SalaryGratuityCalculator,
  'salary-slip-generator':       SalarySlipGenerator,
  'sip-calculator':              SIPCalculator,
  'speech-bubble-maker':         SpeechBubbleMaker,
  'sql-formatter':               SqlFormatter,
  'unit-converter':              UnitConverter,
  'whatsapp-link-generator':     WhatsAppLinkGenerator,
};

// ── Static Params (SSG) ──────────────────────────────────────
export async function generateStaticParams() {
  return tools.map(tool => ({ slug: tool.slug }));
}

// ── Dynamic Metadata ─────────────────────────────────────────
export async function generateMetadata({ params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  const canonicalUrl = `${SITE_CONFIG.url}/tools/${tool.slug}`;
  const title        = `${tool.name} — Free Online Tool`;
  const description  = tool.description;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_CONFIG.name,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card:    'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
    },
  };
}

// ── Page Component ───────────────────────────────────────────
export default function ToolPage({ params }) {
  const tool = getToolBySlug(params.slug);

  // 404 for unknown slugs
  if (!tool) notFound();

  const ToolComponent  = TOOL_COMPONENTS[tool.slug];
  const relatedTools   = getRelatedTools(tool);
  const canonicalUrl   = `${SITE_CONFIG.url}/tools/${tool.slug}`;

  // JSON-LD structured data: SoftwareApplication schema
  const jsonLd = {
    '@context':         'https://schema.org',
    '@type':            'SoftwareApplication',
    name:                tool.name,
    description:         tool.description,
    url:                 canonicalUrl,
    applicationCategory: 'WebApplication',
    operatingSystem:     'Web Browser',
    offers: {
      '@type': 'Offer',
      price:   '0',
      priceCurrency: 'USD',
    },
    keywords: (tool.keywords || []).join(', '),
    provider: {
      '@type': 'Organization',
      name:     SITE_CONFIG.name,
      url:      SITE_CONFIG.url,
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ToolLayout tool={tool} relatedTools={relatedTools}>
        {/* Render the tool UI */}
        {ToolComponent
          ? <ToolComponent />
          : (
            <div className="bg-white border border-surface-200 rounded-2xl p-8 text-center text-surface-500">
              <div className="text-4xl mb-3">🚧</div>
              <p className="font-medium">Tool coming soon!</p>
            </div>
          )
        }
      </ToolLayout>
    </>
  );
}