import './globals.css';
import HydrationGate from '@/components/HydrationGate';
import SiteShell from '@/components/SiteShell';
import ClientNav from '@/components/ClientNav';
import MobileCallBar from '@/components/MobileCallBar';
import JsonLd from '@/components/JsonLd';
import { SITE_NAME, SITE_URL, ORGANIZATION, organizationJsonLd, websiteJsonLd } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mid-Wisconsin Pump & Well | Well Pump Service in Sparta, WI'
  },
  description: ORGANIZATION.description,
  applicationName: SITE_NAME,
  authors: [{ name: ORGANIZATION.legalName }],
  creator: ORGANIZATION.legalName,
  publisher: ORGANIZATION.legalName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Mid-Wisconsin Pump & Well | Well Pump Service in Sparta, WI',
    description: ORGANIZATION.description
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mid-Wisconsin Pump & Well | Well Pump Service in Sparta, WI',
    description: ORGANIZATION.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '';
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-76XNH7XZ8L" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-76XNH7XZ8L');
`
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap" />
        {turnstileSiteKey ? (
          <meta name="cf-turnstile-sitekey" content={turnstileSiteKey} />
        ) : null}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body style={{ background: '#fff' }}>
        <ClientNav />
        <SiteShell>{children}</SiteShell>
        <MobileCallBar />
        <HydrationGate />
      </body>
    </html>
  );
}
