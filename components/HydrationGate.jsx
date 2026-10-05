'use client';

import { useLayoutEffect } from 'react';

export default function HydrationGate() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-hydrated', '');
    let id = requestAnimationFrame(() => { id = requestAnimationFrame(() => root.setAttribute('data-anim', '')); });
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}
