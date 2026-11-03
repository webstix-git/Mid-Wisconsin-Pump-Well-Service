'use client';

import { useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '';

export default function TurnstileWidget({ onToken, onExpire, onError }) {
  const hostRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  useEffect(() => { onTokenRef.current = onToken; }, [onToken]);
  useEffect(() => { onExpireRef.current = onExpire; }, [onExpire]);
  useEffect(() => { onErrorRef.current = onError; }, [onError]);

  useEffect(() => {
    if (!SITE_KEY || !hostRef.current) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || !hostRef.current || !window.turnstile) return;
      if (widgetIdRef.current != null) {
        try { window.turnstile.remove(widgetIdRef.current); } catch {}
        widgetIdRef.current = null;
      }
      hostRef.current.innerHTML = '';
      widgetIdRef.current = window.turnstile.render(hostRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => onTokenRef.current?.(token),
        'expired-callback': () => onExpireRef.current?.(),
        'error-callback': () => onErrorRef.current?.()
      });
    };

    const existing = document.querySelector('script[data-turnstile]');
    if (window.turnstile) {
      render();
    } else if (existing) {
      existing.addEventListener('load', render);
    } else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.turnstile = '1';
      script.addEventListener('load', render);
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (widgetIdRef.current != null && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current); } catch {}
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!SITE_KEY) {
    return (
      <p role="alert" style={{ margin: '0', fontSize: '14px', fontWeight: '600', color: '#C1272D' }}>
        Turnstile site key is not configured.
      </p>
    );
  }

  return <div ref={hostRef} />;
}
