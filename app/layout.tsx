import type { Metadata } from 'next';
import { Space_Grotesk, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './LanguageContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CookieConsent from './components/CookieConsent';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

// Lazy-load Lenis smooth scroll — client-only, not needed for SSR
const SmoothScroll = dynamic(() => import('./components/SmoothScroll'));

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://legacysolutions-agency.com'),
  title: {
    default: 'Legacy Solutions — Premium Digital Marketing Agency | Germany & Syria',
    template: '%s | Legacy Solutions'
  },
  description: 'Legacy Solutions is an elite digital marketing agency in Germany and Syria. We specialize in luxury web design, SEO marketing, and innovative digital growth strategies.',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-DE': '/de',
      'x-default': '/',
    },
  },
  keywords: ['digital agency', 'marketing agency Herne', 'web design Syria', 'SEO experts Germany', 'luxury branding agency'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://legacysolutions-agency.com/#organization",
      "name": "Legacy Solutions",
      "url": "https://legacysolutions-agency.com",
      "logo": "https://legacysolutions-agency.com/images/default-og.jpg",
      "description": "Legacy Solutions is an elite digital marketing agency in Germany and Syria. We specialize in luxury web design, SEO marketing, and innovative digital growth strategies.",
      "sameAs": [
        "https://www.linkedin.com/company/legacy-solutions",
        "https://twitter.com/legacysolutions"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49-123-4567890",
        "contactType": "customer service",
        "areaServed": ["DE", "SY", "AE", "SA"],
        "availableLanguage": ["English", "German", "Arabic"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://legacysolutions-agency.com/#germany-hq",
      "parentOrganization": { "@id": "https://legacysolutions-agency.com/#organization" },
      "name": "Legacy Solutions Germany HQ",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Herne",
        "addressRegion": "North Rhine-Westphalia",
        "addressCountry": "DE",
        "postalCode": "44623"
      },
      "telephone": "+49-123-4567890",
      "openingHours": "Mo-Fr 09:00-18:00"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://legacysolutions-agency.com/#syria-branch",
      "parentOrganization": { "@id": "https://legacysolutions-agency.com/#organization" },
      "name": "Legacy Solutions Syria Branch",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aleppo",
        "addressCountry": "SY"
      },
      "telephone": "+963-21-123456",
      "openingHours": "Su-Th 09:00-17:00"
    },
    {
      "@type": "WebSite",
      "@id": "https://legacysolutions-agency.com/#website",
      "url": "https://legacysolutions-agency.com",
      "name": "Legacy Solutions | Premium Digital Agency"
    }
  ]
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`${spaceGrotesk.variable} ${cairo.variable}`} suppressHydrationWarning>
      <head>
        <meta name="description" content="Legacy Solutions is an elite digital marketing agency in Germany and Syria. We specialize in luxury web design, SEO marketing, and innovative digital growth strategies." />
        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/images/team-working.avif" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-gray-800 flex flex-col min-h-screen" suppressHydrationWarning>
        <LanguageProvider initialLang={lang}>
          <Navbar />
          <SmoothScroll>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-black focus:text-[#fce34d] focus:font-bold">
              {lang === 'en' ? 'Skip to main content' : 'Zum Hauptinhalt springen'}
            </a>
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <CookieConsent lang={lang} />
            <Footer lang={lang} />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
