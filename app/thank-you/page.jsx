import ContactThankYouPage from '@/components/pages/ContactThankYouPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Thank You | Mid-Wisconsin Pump & Well',
  description: 'Thanks for contacting Mid-Wisconsin Pump & Well. We will get in touch with you shortly.',
  path: '/thank-you',
  index: false
});

export default function Page() {
  return <ContactThankYouPage />;
}
