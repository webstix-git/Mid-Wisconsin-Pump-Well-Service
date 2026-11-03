'use client';

import { useLayoutEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import viewportWidth, { initialViewportWidth } from '@/components/viewportWidth';
import { headerVals, activeFromPath } from '@/components/headerViewport';

/**
 * Persistent chrome (header) lives in the root layout so it does not remount
 * on client navigations — that remount was the visible blink between pages.
 */
export default function SiteShell({ children }) {
  const pathname = usePathname() || '/';
  const onHome = pathname === '/';
  const [w, setW] = useState(initialViewportWidth);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => setMenu(m => !m), []);
  const closeMenu = useCallback(() => setMenu(false), []);

  useLayoutEffect(() => {
    const onR = () => setW(viewportWidth());
    const onS = () => {
      const s = window.scrollY > 40;
      setScrolled(prev => (prev === s ? prev : s));
    };
    window.addEventListener('resize', onR);
    window.addEventListener('scroll', onS, { passive: true });
    onR();
    onS();
    return () => {
      window.removeEventListener('resize', onR);
      window.removeEventListener('scroll', onS);
    };
  }, []);

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    setScrolled(false);
    setMenu(false);
    setW(viewportWidth());
  }, [pathname]);

  const v = {
    ...headerVals({ w, scrolled, menu, onHome }),
    toggleMenu,
    closeMenu
  };

  return (
    <>
      <SiteHeader
        v={v}
        active={activeFromPath(pathname)}
        logoHref={onHome ? '#top' : '/'}
      />
      {children}
    </>
  );
}
