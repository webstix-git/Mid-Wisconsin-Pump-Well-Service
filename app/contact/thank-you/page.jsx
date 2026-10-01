import ContactThankYouPage from '@/components/pages/ContactThankYouPage';
import '../../inner-pages.css';

export const metadata = {
  title: 'Contact – Thank You | Mid-Wisconsin Pump & Well',
  description: 'Thanks for contacting Mid-Wisconsin Pump & Well. We will get in touch with you shortly.',
  robots: { index: false, follow: true }
};

export default function Page() {
  return <ContactThankYouPage />;
}
