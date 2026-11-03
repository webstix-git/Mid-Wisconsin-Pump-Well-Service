import AboutUsPage from '@/components/pages/AboutUsPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Us | Mid-Wisconsin Pump & Well',
  description:
    'Locally owned since 1977, Mid-Wisconsin Pump & Well serves Sparta, Monroe County, and the Coulee Region with trusted well pump and water system service.',
  path: '/about-us'
});

export default function Page() {
  return <AboutUsPage />;
}
