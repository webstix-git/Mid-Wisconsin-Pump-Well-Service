import './globals.css';
import HydrationGate from '@/components/HydrationGate';
import MobileCallBar from '@/components/MobileCallBar';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap" />
      </head>
      <body>
        {children}
        <MobileCallBar />
        <HydrationGate />
      </body>
    </html>
  );
}
