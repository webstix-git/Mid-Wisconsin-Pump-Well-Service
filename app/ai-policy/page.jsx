import AiPolicyPage from '@/components/pages/AiPolicyPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'AI Policy | Mid-Wisconsin Pump & Well',
  description:
    'How Mid-Wisconsin Pump & Well Service uses artificial intelligence tools responsibly on our website and in customer communications.',
  path: '/ai-policy'
});

export default function Page() {
  return <AiPolicyPage />;
}
