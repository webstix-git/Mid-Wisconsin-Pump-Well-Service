import ContactPage from '@/components/pages/ContactPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact Us | Mid-Wisconsin Pump & Well',
  description:
    'Call 608-269-5178 or request a free estimate from Mid-Wisconsin Pump & Well, 17660 Icecap Rd., Sparta, WI. 24/7 emergency well pump service.',
  path: '/contact'
});

export default function Page() {
  return <ContactPage />;
}
