import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy | Mid-Wisconsin Pump & Well',
  description:
    'How Mid-Wisconsin Pump & Well Service collects, uses, and protects information when you contact us or use our website.',
  path: '/privacy-policy'
});

export default function Page() {
  return <PrivacyPolicyPage />;
}
