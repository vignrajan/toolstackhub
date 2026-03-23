import { SITE_CONFIG } from '../data/tools';

/**
 * Dynamic robots.txt Generator
 * Next.js App Router generates this as /robots.txt at build time
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        disallow:  ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow:     '/',
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host:    SITE_CONFIG.url,
  };
}
