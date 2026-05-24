import AiSeoPromptsContent from '../../../components/AiSeoPromptsContent';
import { SITE_CONFIG } from '../../../data/tools';

export const metadata = {
  title: 'AI SEO Prompts – 50+ Free ChatGPT SEO Prompts',
  description: '50+ free AI SEO prompts for keyword research, blog writing, on-page SEO & technical audits. Copy-paste ready for ChatGPT, Claude & Gemini. No signup.',
  keywords: [
    'ai seo prompts',
    'chatgpt seo prompts',
    'seo prompt templates',
    'ai content writing prompts',
    'chatgpt prompts for seo',
    'seo automation with ai',
    'best seo prompts 2025',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/ai-prompts/seo` },
  openGraph: {
    title: 'AI SEO Prompts – 50+ Free ChatGPT Prompts for SEO Tasks',
    description: '50+ free AI SEO prompts for keyword research, blog writing, on-page SEO & technical audits. Copy-paste for ChatGPT, Claude & Gemini.',
    url: `${SITE_CONFIG.url}/ai-prompts/seo`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Prompts – 50+ Free ChatGPT Prompts for SEO',
    description: '50+ free AI SEO prompts for every SEO task. Copy-paste into ChatGPT, Claude, or Gemini. Free, no signup.',
    creator: SITE_CONFIG.twitterHandle,
  },
};

export default function Page() {
  return <AiSeoPromptsContent />;
}
