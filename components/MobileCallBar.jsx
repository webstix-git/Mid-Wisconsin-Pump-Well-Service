'use client';

import { useEffect, useState } from 'react';

export default function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onS = () => {
      const y = window.scrollY, d = y - last;
      if (Math.abs(d) < 8 && y > 120) return;
      setShow(d > 0 && y > 120);
      last = y;
    };
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-callbar', show);
  }, [show]);

  return (
    <div className="call-bar" inert={!show} style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '45', padding: '10px 16px calc(10px + env(safe-area-inset-bottom))', background: 'rgba(255,255,255,.97)', boxShadow: '0 -1px 0 #E7E1D8, 0 -6px 20px rgba(0,69,128,.08)', backdropFilter: 'blur(8px)', transform: show ? 'translateY(0)' : 'translateY(110%)', visibility: show ? 'visible' : 'hidden', transition: `transform .35s cubic-bezier(.4,0,.2,1), visibility 0s linear ${show ? '0s' : '.35s'}` }}>
      <a href="tel:6082695178" aria-label="24/7 emergency line, call 608-269-5178" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#C1272D', color: '#fff', padding: '13px 14px', borderRadius: '30px', boxShadow: '0 6px 18px rgba(193,39,45,.3)' }} className="h-6bbf96">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </svg>
        <span style={{ flex: '1', minWidth: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', opacity: '.9' }}>24/7 Emergency</span>
          <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: 'clamp(14px, 4.4vw, 20px)' }}>608-269-5178</span>
        </span>
      </a>
    </div>
  );
}
