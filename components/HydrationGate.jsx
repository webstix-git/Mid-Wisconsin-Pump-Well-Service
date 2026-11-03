'use client';

import { useLayoutEffect } from 'react';
import viewportWidth from '@/components/viewportWidth';

export default function HydrationGate() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    viewportWidth();
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    // Reveal immediately after the first client layout — no setTimeout gap (that was a flash).
    root.setAttribute('data-hydrated', '');
    const id = requestAnimationFrame(() => root.setAttribute('data-anim', ''));
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}
