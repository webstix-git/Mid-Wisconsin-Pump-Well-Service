export default function SiteFooter() {
  return (
    <footer style={{ background: '#fff', color: '#000', padding: '64px 24px 28px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="site-footer-grid" style={{ display: 'grid', gap: '40px 32px', paddingBottom: '36px' }}>
          <div>
            <img src="/assets/57eded74-c71e-4674-bae1-30d9f8d22464.png" alt="Mid-Wisconsin Pump &amp; Well" style={{ height: '125px', width: 'auto', display: 'block', marginBottom: '16px' }} />
            <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '26px', lineHeight: '1.05', color: '#000', letterSpacing: '.01em', marginBottom: '14px' }}>Mid-Wisconsin<br />Pump &amp; Well</div>
            <p style={{ margin: '0 0 22px', fontSize: '18px', lineHeight: '1.55', maxWidth: '240px' }}>Locally owned since 1977. Serving Western Wisconsin.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/midwispump/" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '4px', border: '1.5px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }} className="h-78bced">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a href="https://www.yelp.com/biz/mid-wisconsin-pump-and-well-service-sparta" aria-label="Yelp" style={{ width: '36px', height: '36px', borderRadius: '4px', border: '1.5px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800', fontSize: '15px' }} className="h-78bced">Y</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000', marginBottom: '18px' }}>Quick links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15.5px' }}>
              <a href="/" style={{ color: '#000' }} className="h-6bd792">Home</a>
              <a href="/well-pump-services" style={{ color: '#000' }} className="h-6bd792">Well Pump Services</a>
              <a href="/pump-installation-and-repair" style={{ color: '#000' }} className="h-6bd792">Installation &amp; Repair</a>
              <a href="/products" style={{ color: '#000' }} className="h-6bd792">Products</a>
              <a href="/about-us" style={{ color: '#000' }} className="h-6bd792">About Us</a>
              <a href="/contact" style={{ color: '#000' }} className="h-6bd792">Contact</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000', marginBottom: '18px' }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15.5px' }}>
              <a href="/pump-installation-and-repair" style={{ color: '#000' }} className="h-6bd792">Pump Installation</a>
              <a href="/pump-installation-and-repair#repair" style={{ color: '#000' }} className="h-6bd792">Repair &amp; Replacement</a>
              <a href="/well-pump-services#video-inspection" style={{ color: '#000' }} className="h-6bd792">Video Well Diagnostics</a>
              <a href="/well-pump-services#system-updates" style={{ color: '#000' }} className="h-6bd792">System Updates</a>
              <a href="/well-pump-services#emergency" style={{ color: '#000' }} className="h-6bd792">24/7 Emergency</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000', marginBottom: '18px' }}>Contact us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15.5px' }}>
              <a href="tel:6082695178" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#000' }} className="h-6bd792">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: 'none', marginTop: '2px' }}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <span>608-269-5178</span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&amp;query=17660+Icecap+Rd%2C+Sparta%2C+WI+54656" target="_blank" rel="noopener" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#000' }} className="h-6bd792">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: 'none', marginTop: '2px' }}>
                  <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>17660 Icecap Rd.<br />Sparta, WI 54656</span>
              </a>
              <a href="mailto:randismidwispump@outlook.com" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#000', wordBreak: 'break-all' }} className="h-6bd792">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: 'none', marginTop: '2px' }}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
                <span>randismidwispump@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', borderTop: '1px solid #E7E1D8', padding: '18px 44px 0', display: 'flex', flexWrap: 'wrap', gap: '8px 12px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '13px', color: '#000' }}>
          <span>© 2026 Mid-Wisconsin Pump &amp; Well Service, LLC. All rights reserved.</span>
          <span aria-hidden="true" style={{ color: '#B9B2A7' }}>|</span>
          <a href="/site-map" style={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px' }} className="h-6bd792">Site Map</a>
          <span aria-hidden="true" style={{ color: '#B9B2A7' }}>|</span>
          <a href="/privacy-policy" style={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px' }} className="h-6bd792">Privacy Policy</a>
          <span aria-hidden="true" style={{ color: '#B9B2A7' }}>|</span>
          <a href="/ai-policy" style={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px' }} className="h-6bd792">AI Policy</a>
          <span aria-hidden="true" style={{ color: '#B9B2A7' }}>|</span>
          <a href="/ai-readiness-service-index" style={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px' }} className="h-6bd792">AI Readiness Service Index</a>
        </div>
      </div>
    </footer>
  );
}
