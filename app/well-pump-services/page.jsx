import WellPumpServicesPage from '@/components/pages/WellPumpServicesPage';
import '../inner-pages.css';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Well Pump Services | Mid-Wisconsin Pump & Well',
  description:
    '24/7 emergency service, well pump repair, installation, system updates, and video well diagnostics for homes and farms from Mid-Wisconsin Pump & Well in Sparta, WI.',
  path: '/well-pump-services'
});

export default function Page() {
  return <WellPumpServicesPage />;
}
