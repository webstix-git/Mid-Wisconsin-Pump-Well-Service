import PumpInstallationPage from '@/components/pages/PumpInstallationPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Pump Installation & Repair | Mid-Wisconsin Pump & Well',
  description:
    'Well pump and pressure tank installation, replacement, and repair for homes, farms, and small businesses in Sparta and the Coulee Region.',
  path: '/pump-installation-and-repair'
});

export default function Page() {
  return <PumpInstallationPage />;
}
