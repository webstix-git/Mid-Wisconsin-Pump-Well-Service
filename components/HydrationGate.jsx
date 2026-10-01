'use client';

import { useLayoutEffect } from 'react';

export default function HydrationGate() {
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-hydrated', '');
  }, []);
  return null;
}
