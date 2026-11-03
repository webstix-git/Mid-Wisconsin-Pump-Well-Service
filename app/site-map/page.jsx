import SiteMapPage from '@/components/pages/SiteMapPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Site Map | Mid-Wisconsin Pump & Well',
  description:
    'Browse all pages on the Mid-Wisconsin Pump & Well website, including services, products, about, contact, and policies.',
  path: '/site-map'
});

export default function Page() {
  return <SiteMapPage />;
}
