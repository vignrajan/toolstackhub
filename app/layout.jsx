import Script from 'next/script';
import '../styles/globals.css';
import { SITE_CONFIG } from '../data/tools';
import TelegramWidget from '../components/TelegramWidget';



/**
 * Root Layout
 * Wraps every page with global metadata, fonts, and structure.
 */
export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords:    ['free online tools', 'web tools', 'developer tools', 'image tools', 'text tools', 'utility tools'],
  authors:     [{ name: SITE_CONFIG.name }],
  creator:     SITE_CONFIG.name,
  publisher:   SITE_CONFIG.name,
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:          SITE_CONFIG.url,
    siteName:     SITE_CONFIG.name,
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:  SITE_CONFIG.description,
    images: [
      {
        url:    SITE_CONFIG.ogImage,
        width:  1200,
        height: 630,
        alt:    SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:  SITE_CONFIG.description,
    creator:      SITE_CONFIG.twitterHandle,
    images:      [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    // Add your Google Search Console verification code here
    google: 'Ltk7sUnYKduSGOg8hzADu8S4z2EAGQqovdJdpNuZk4c',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#6366f1" />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-9V81F0CNSE"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9V81F0CNSE');
  `}
</Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <TelegramWidget />

      </body>
    </html>
  );
}
