import './globals.css';
import HydrationGate from '@/components/HydrationGate';

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
        <HydrationGate />
      </body>
    </html>
  );
}
