const NAV = [
  ['Home', '/'],
  ['Well Pump Services', '/well-pump-services'],
  ['Installation & Repair', '/pump-installation-and-repair'],
  ['Products', '/products'],
  ['About Us', '/about-us'],
  ['Contact', '/contact']
];

export default function SiteHeader({ v, active, logoHref = '/' }) {
  return (
    <header style={{ position: 'sticky', top: '0', zIndex: '40', marginBottom: v.hdrShift, background: v.hdrBg, boxShadow: v.hdrShadow, backdropFilter: v.hdrBlur, transition: 'background .3s,box-shadow .3s,margin-bottom .3s' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: v.hdrPad, height: v.hdrH, display: 'flex', gap: v.hdrGap, alignItems: 'center', justifyContent: 'space-between', transition: 'height .3s' }}>
        <a href={logoHref} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: v.hdrFg, flex: 'none' }}>
          <img src="/assets/57eded74-c71e-4674-bae1-30d9f8d22464.png" alt="Mid-Wisconsin Pump &amp; Well logo" style={{ height: v.logoH, width: 'auto', display: 'block', filter: v.logoFilter, transition: 'height .3s' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.05' }}>
            <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.logoTitle }}>Mid-Wisconsin</span>
            <span style={{ fontSize: v.logoSub, fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: v.hdrAccent, marginTop: '3px' }}>Pump &amp; Well Service</span>
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
          <a href="tel:6082695178" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#C1272D', color: '#fff', padding: v.phonePad, borderRadius: '30px', boxShadow: '0 6px 18px rgba(193,39,45,.3)' }} className="h-6bbf96">
            <span style={{ width: v.phoneIcon, height: v.phoneIcon, borderRadius: '50%', background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span style={{ fontSize: v.phoneLabelFs, fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', opacity: '.9', display: v.phoneLabel }}>24/7 Emergency</span>
              <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.phoneNumFs, whiteSpace: 'nowrap' }}>608-269-5178</span>
            </span>
          </a>
          {v.narrow && (
            <button onClick={v.toggleMenu} style={{ width: '46px', height: '46px', border: `1px solid ${v.burgerBd}`, background: '#fff', boxShadow: '0 4px 14px rgba(0,69,128,.18)', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
              <span style={{ width: '18px', height: '2px', background: '#000' }} />
            </button>
          )}
        </div>
      </div>
      {v.menuOpen && (
        <nav style={{ background: '#fff', borderTop: '1px solid #E7E1D8', padding: '8px 24px 16px', display: 'flex', flexDirection: 'column', fontWeight: '600' }}>
          {NAV.map(([label, href], i) => (
            <a key={href} href={href} onClick={v.closeMenu} style={{ padding: '12px 0', color: label === active ? '#C1272D' : '#000', borderBottom: i < NAV.length - 1 ? '1px solid #F0EBE3' : undefined }}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
