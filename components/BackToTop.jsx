export default function BackToTop({ v }) {
  return (
    <a href="#top" aria-label="Scroll to top" onClick={v.toTop} style={{ position: 'fixed', right: '24px', bottom: '24px', zIndex: '50', width: '48px', height: '48px', borderRadius: '8px', background: '#004580', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.2)', opacity: v.topOpacity, visibility: v.topVis, transform: `translateY(${v.topShift})`, transition: 'opacity .25s,transform .25s,visibility .25s,background .2s' }} className="h-f66091">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </a>
  );
}
