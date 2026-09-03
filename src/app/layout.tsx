import type { Metadata } from 'next';
import { Poppins, Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { site } from '@/data/site';
import './globals.css';

/** The live site is set in plain Arial almost everywhere — these two are the
 *  only real webfont exceptions (contact-tile labels, small uppercase tags). */
const accent = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-accent',
  display: 'swap',
});

const label = Nunito({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-label',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Management Accountants for Small Business`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'management accounting',
    'small business accountant',
    'cash flow planning',
    'virtual financial controller',
    'Xero accountant',
    'ACCA accountant UK',
    'accountant Uddingston',
    'accountancy and finance support Uddingston',
    'bookkeeper Glasgow',
    'management accountant South Lanarkshire',
    'small business accountant Glasgow',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | A Complete Finance Function for Small Business`,
    description: site.description,
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/images/og.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'AdministrativeArea', name: 'South Lanarkshire' },
    { '@type': 'AdministrativeArea', name: 'North Lanarkshire' },
    { '@type': 'City', name: 'Glasgow' },
  ],
  priceRange: '££',
  sameAs: [site.socials.tiktok, site.socials.instagram],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '57',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${accent.variable} ${label.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
