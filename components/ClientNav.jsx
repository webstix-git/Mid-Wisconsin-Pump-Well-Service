'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Plain <a href> triggers full document loads here, which re-hide the body via
 * the hydration gate and flash white. Intercept same-origin clicks and use the
 * App Router instead (same idea as next/link, without rewriting every anchor).
 */
export default function ClientNav() {
  const router = useRouter();

  useEffect(() => {
    const onClick = e => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.closest('[data-native-nav]')) return;
      if (a.hasAttribute('download')) return;
      const target = a.getAttribute('target');
      if (target && target !== '_self') return;

      const raw = a.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return;

      let url;
      try {
        url = new URL(raw, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      const next = url.pathname + url.search + url.hash;
      const cur = window.location.pathname + window.location.search + window.location.hash;
      if (next === cur) {
        e.preventDefault();
        return;
      }
      // In-page hash on the same path: let the browser handle it.
      if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

      e.preventDefault();
      router.push(url.pathname + url.search + url.hash);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);

  return null;
}
