import ProductsPage from '@/components/pages/ProductsPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Products | Mid-Wisconsin Pump & Well',
  description:
    'Grundfos pumps, Pentek Intellidrive and Yaskawa drives, and Flexcon pressure tanks, installed and warrantied by Mid-Wisconsin Pump & Well in Sparta, WI.',
  path: '/products'
});

export default function Page() {
  return <ProductsPage />;
}
