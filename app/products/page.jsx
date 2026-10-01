import ProductsPage from '@/components/pages/ProductsPage';
import '../inner-pages.css';

export const metadata = {
  title: 'Products | Mid-Wisconsin Pump & Well',
  description: 'Grundfos pumps, Pentek Intellidrive and Yaskawa drives, and Flexcon pressure tanks, installed and warrantied by Mid-Wisconsin Pump & Well.'
};

export default function Page() {
  return <ProductsPage />;
}
