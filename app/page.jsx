import HomePage from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Well Pump Service in Sparta, WI | Mid-Wisconsin Pump & Well',
  description:
    'Locally owned since 1977. Mid-Wisconsin Pump & Well provides well pump installation, repair, pressure tanks, and 24/7 emergency service in Sparta and Western Wisconsin.',
  path: '/'
});

export default function Page() {
  return <HomePage />;
}
