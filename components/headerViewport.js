import viewportWidth, { initialViewportWidth } from '@/components/viewportWidth';

export { viewportWidth, initialViewportWidth };

/**
 * Shared header metrics for the persistent layout header.
 * Height stays constant (Garth-style) — only background/shadow change on scroll,
 * so navigations never animate the bar taller/shorter.
 */
export function headerVals({ w, scrolled, menu, onHome = false }) {
  const wide = w >= 1220;
  const solid = scrolled;
  const dark = true;
  const phone = w < 600;
  const compactHdr = w < 680;
  const hdrH = phone ? '72px' : '84px';
  const logoH = phone ? '44px' : '56px';
  return {
    navGap: onHome
      ? (w >= 1360 ? '32px' : '24px')
      : (w >= 1360 ? '18px' : '12px'),
    navFs: w >= 1360 ? '16px' : '14.5px',
    phonePad: compactHdr ? '3px 16px 3px 3px' : w >= 1360 ? '10px 20px 10px 10px' : '8px 14px 8px 8px',
    phoneLabel: w >= 1360 || !wide ? 'block' : 'none',
    phoneIcon: compactHdr ? '36px' : '40px',
    phoneNumFs: '20px',
    phoneLabelFs: '11px',
    hdrGap: compactHdr ? '8px' : onHome ? (w >= 1360 ? '16px' : '12px') : (w >= 1360 ? '40px' : '28px'),
    phoneGap: compactHdr ? '8px' : '12px',
    phoneTextDisplay: compactHdr ? 'none' : 'flex',
    logoTextDisplay: w < 360 ? 'none' : 'flex',
    hdrBg: solid ? 'rgba(255,255,255,.97)' : 'transparent',
    hdrShadow: solid ? '0 1px 0 #E7E1D8, 0 6px 20px rgba(0,69,128,.08)' : 'none',
    hdrBlur: solid ? 'blur(8px)' : 'none',
    hdrH,
    hdrPad: phone ? '8px 20px' : '8px 24px',
    burgerSz: phone ? '42px' : '46px',
    logoH,
    logoTitle: phone ? '16px' : '17px',
    logoSub: phone ? '9.5px' : '10px',
    logoFilter: dark ? 'none' : 'drop-shadow(0 0 1px rgba(255,255,255,.85)) drop-shadow(0 2px 8px rgba(0,69,128,.4))',
    hdrFg: dark ? '#000' : '#fff',
    hdrAccent: dark ? '#C1272D' : '#F6B3B5',
    burgerBd: dark ? '#D9D2C7' : 'rgba(255,255,255,.4)',
    wide,
    narrow: !wide,
    menuOpen: !wide && menu
  };
}

export function activeFromPath(pathname) {
  if (!pathname || pathname === '/') return 'Home';
  if (pathname.startsWith('/well-pump-services')) return 'Well Pump Services';
  if (pathname.startsWith('/pump-installation-and-repair')) return 'Installation & Repair';
  if (pathname.startsWith('/products')) return 'Products';
  if (pathname.startsWith('/about-us')) return 'About Us';
  if (pathname.startsWith('/contact') || pathname.startsWith('/thank-you')) return 'Contact';
  return '';
}
