'use client';

import { useEffect, useRef } from 'react';

const NAV = [
  ['Home', '/'],
  ['Well Pump Services', '/well-pump-services'],
  ['Installation & Repair', '/pump-installation-and-repair'],
  ['Products', '/products'],
  ['About Us', '/about-us'],
  ['Contact', '/contact']
];

export default function SiteHeader({ v, active, logoHref = '/' }) {
  const open = !!v.menuOpen;
  const burgerRef = useRef(null), closeRef = useRef(null), wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current && burgerRef.current) burgerRef.current.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const body = document.body, prev = body.style.overflow;
    body.style.overflow = 'hidden';
    if (closeRef.current) closeRef.current.focus();
    const onKey = e => { if (e.key === 'Escape') v.closeMenu(); };
    window.addEventListener('keydown', onKey);
    return () => { body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <>
    <header style={{ position: 'sticky', top: '0', zIndex: '40', marginBottom: v.hdrShift, background: v.hdrBg, boxShadow: v.hdrShadow, backdropFilter: v.hdrBlur, transition: 'background .3s,box-shadow .3s,margin-bottom .3s' }}>
      <div className="hdr-row" style={{ maxWidth: '1280px', margin: '0 auto', padding: v.hdrPad, height: v.hdrH, display: 'flex', gap: v.hdrGap, alignItems: 'center', justifyContent: 'space-between', transition: 'height .3s' }}>
        <a href={logoHref} className="hdr-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: v.hdrFg, flex: 'none' }}>
          <img src="/assets/57eded74-c71e-4674-bae1-30d9f8d22464.png" alt="Mid-Wisconsin Pump &amp; Well logo" width="195" height="144" style={{ height: v.logoH, width: 'auto', display: 'block', filter: v.logoFilter, transition: 'height .3s' }} />
          <div style={{ display: v.logoTextDisplay || 'flex', flexDirection: 'column', lineHeight: '1.05' }}>
            <span className="hdr-title" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.logoTitle }}>Mid-Wisconsin</span>
            <span className="hdr-sub" style={{ fontSize: v.logoSub, fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: v.hdrAccent, marginTop: '3px' }}>Pump &amp; Well Service</span>
          </div>
        </a>
        {v.wide && (
          <nav style={{ display: 'flex', gap: v.navGap, fontSize: v.navFs, fontWeight: '600', whiteSpace: 'nowrap' }}>
            {NAV.map(([label, href]) => label === active
              ? <a key={href} href={href} aria-current="page" style={{ color: v.hdrAccent, fontSize: '16px' }}>{label}</a>
              : <a key={href} href={href} style={{ color: v.hdrFg, transition: 'color .3s', fontSize: '16px' }} className="h-6bd792">{label}</a>)}
          </nav>
        )}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 'none' }}>
          <a href="tel:6082695178" aria-label="24/7 emergency line, call 608-269-5178" style={{ display: 'flex', alignItems: 'center', gap: v.phoneGap || '12px', background: '#C1272D', color: '#fff', padding: v.phonePad, borderRadius: '30px', boxShadow: '0 6px 18px rgba(193,39,45,.3)' }} className="h-6bbf96">
            <span style={{ width: v.phoneIcon, height: v.phoneIcon, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span style={{ display: v.phoneTextDisplay || 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span style={{ fontSize: v.phoneLabelFs, fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', opacity: '.9', display: v.phoneLabel }}>24/7 Emergency</span>
              <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.phoneNumFs, whiteSpace: 'nowrap' }}>608-269-5178</span>
            </span>
            <span aria-hidden="true" style={{ display: v.phoneTextDisplay === 'none' ? 'block' : 'none', fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '15px', lineHeight: '1' }}>Call</span>
          </a>
          {v.narrow && (
            <button ref={burgerRef} type="button" onClick={v.toggleMenu} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-drawer" style={{ width: v.burgerSz || '46px', height: v.burgerSz || '46px', border: `1px solid ${v.burgerBd}`, background: '#fff', boxShadow: '0 4px 14px rgba(0,69,128,.18)', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
            </button>
          )}
        </div>
      </div>
    </header>
    {v.narrow && (
      <>
        <div aria-hidden="true" onClick={v.closeMenu} style={{ position: 'fixed', inset: '0', zIndex: '60', background: 'rgba(0,0,0,.45)', opacity: open ? '1' : '0', pointerEvents: open ? 'auto' : 'none', transition: 'opacity .3s ease' }} />
        <div id="site-drawer" role="dialog" aria-modal="true" aria-label="Site menu" inert={!open} style={{ position: 'fixed', top: '0', right: '0', bottom: '0', zIndex: '61', width: 'min(86vw, 360px)', background: '#fff', boxShadow: '-12px 0 40px rgba(0,0,0,.18)', display: 'flex', flexDirection: 'column', overflowY: 'auto', transform: open ? 'translateX(0)' : 'translateX(100%)', visibility: open ? 'visible' : 'hidden', transition: `transform .35s cubic-bezier(.4,0,.2,1), visibility 0s linear ${open ? '0s' : '.35s'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '14px 20px', borderBottom: '1px solid #F0EBE3' }}>
            <a href="/" onClick={v.closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}>
              <img src="/assets/57eded74-c71e-4674-bae1-30d9f8d22464.png" alt="" width="195" height="144" style={{ height: '44px', width: 'auto', display: 'block' }} />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.05' }}>
                <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '16px' }}>Mid-Wisconsin</span>
                <span style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D', marginTop: '3px' }}>Pump &amp; Well Service</span>
              </span>
            </a>
            <button ref={closeRef} type="button" onClick={v.closeMenu} aria-label="Close menu" style={{ width: '42px', height: '42px', flex: 'none', border: '1px solid #D9D2C7', background: '#fff', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 20px', fontWeight: '600', fontSize: '17px' }}>
            {NAV.map(([label, href], i) => (
              <a key={href} href={href} onClick={v.closeMenu} aria-current={label === active ? 'page' : undefined} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 0', color: label === active ? '#C1272D' : '#000', borderBottom: i < NAV.length - 1 ? '1px solid #F0EBE3' : undefined }}>
                {label}
                <span aria-hidden="true" style={{ color: label === active ? '#C1272D' : '#B9B2A7' }}>›</span>
              </a>
            ))}
          </nav>
        </div>
      </>
    )}
    </>
  );
}
