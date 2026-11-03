import NotFoundPage from '@/components/pages/NotFoundPage';
import './inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Page Not Found | Mid-Wisconsin Pump & Well',
  description:
    'That page is unavailable or may have moved. Continue to well pump services, installation & repair, products, about, or contact Mid-Wisconsin Pump & Well in Sparta, WI.',
  path: '/404',
  index: false
});

export default function NotFound() {
  return <NotFoundPage />;
}
