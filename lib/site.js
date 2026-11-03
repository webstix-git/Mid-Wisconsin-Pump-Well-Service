export const SITE_URL = 'https://www.midwisconsinpump.com';

export const SITE_NAME = 'Mid-Wisconsin Pump & Well';

export const ORGANIZATION = {
  name: 'Mid-Wisconsin Pump & Well',
  legalName: 'Mid-Wisconsin Pump & Well Service, LLC',
  description:
    'Locally owned since 1977. Well pump installation, repair, pressure tanks, and 24/7 emergency service for homes, farms, and businesses in Sparta and Western Wisconsin.',
  telephone: '+16082695178',
  email: 'randismidwispump@outlook.com',
  streetAddress: '17660 Icecap Rd.',
  addressLocality: 'Sparta',
  addressRegion: 'WI',
  postalCode: '54656',
  addressCountry: 'US',
  latitude: 43.915206,
  longitude: -90.828552,
  sameAs: [
    'https://www.facebook.com/midwispump/',
    'https://www.yelp.com/biz/mid-wisconsin-pump-and-well-service-sparta'
  ],
  logoPath: '/assets/57eded74-c71e-4674-bae1-30d9f8d22464.png'
};

export const INDEXABLE_PATHS = [
  '/',
  '/well-pump-services',
  '/pump-installation-and-repair',
  '/products',
  '/about-us',
  '/contact',
  '/site-map',
  '/privacy-policy',
  '/ai-policy',
  '/ai-readiness-service-index'
];

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  const logo = absoluteUrl(ORGANIZATION.logoPath);
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    description: ORGANIZATION.description,
    url: SITE_URL,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    image: logo,
    logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.streetAddress,
      addressLocality: ORGANIZATION.addressLocality,
      addressRegion: ORGANIZATION.addressRegion,
      postalCode: ORGANIZATION.postalCode,
      addressCountry: ORGANIZATION.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ORGANIZATION.latitude,
      longitude: ORGANIZATION.longitude
    },
    sameAs: ORGANIZATION.sameAs,
    areaServed: [
      { '@type': 'City', name: 'Sparta' },
      { '@type': 'AdministrativeArea', name: 'Monroe County' },
      { '@type': 'AdministrativeArea', name: 'Coulee Region' },
      { '@type': 'AdministrativeArea', name: 'Western Wisconsin' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    priceRange: '$$'
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US'
  };
}

export function pageMetadata({ title, description, path, index = true }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true }
  };
}
