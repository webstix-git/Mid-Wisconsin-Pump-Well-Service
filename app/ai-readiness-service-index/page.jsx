import AiReadinessServiceIndexPage from '@/components/pages/AiReadinessServiceIndexPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'AI Readiness Service Index | Mid-Wisconsin Pump & Well',
  description:
    'A summary of how Mid-Wisconsin Pump & Well Service approaches responsible use of AI-assisted services for customers in Sparta, WI.',
  path: '/ai-readiness-service-index'
});

export default function Page() {
  return <AiReadinessServiceIndexPage />;
}
