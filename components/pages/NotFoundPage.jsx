'use client';

import React from 'react';
import viewportWidth, { initialViewportWidth } from '@/components/viewportWidth';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';
import { noWidow } from '@/lib/typography';

export default class NotFoundPage extends React.Component {
  state = { w: initialViewportWidth(), menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found | Mid-Wisconsin Pump & Well';
    this.onR = () => this.setState({ w: viewportWidth() });
    this.onS = () => { const s = window.scrollY > 40, t = window.scrollY > 600; if (s !== this.state.scrolled || t !== this.state.showTop) this.setState({ scrolled: s, showTop: t }); };
    window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS, { passive: true }); this.onR(); this.onS();
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS); }
  renderVals() {
    const w = this.state.w, wide = w >= 1220;
    const solid = this.state.scrolled;
    const phone = w < 600, compactHdr = w < 680;
    return {
      navGap: w >= 1360 ? '18px' : '12px', navFs: w >= 1360 ? '16px' : '14.5px', phonePad: compactHdr ? '3px 16px 3px 3px' : w >= 1360 ? '10px 20px 10px 10px' : '8px 14px 8px 8px', phoneLabel: w >= 1360 || !wide ? 'block' : 'none',
      phoneIcon: compactHdr ? '36px' : '40px', phoneNumFs: '20px', phoneLabelFs: '11px', hdrGap: compactHdr ? '12px' : w >= 1360 ? '40px' : '28px',
      phoneGap: compactHdr ? '8px' : '12px', phoneTextDisplay: compactHdr ? 'none' : 'flex',
      logoTextDisplay: w < 360 ? 'none' : 'flex',
      hdrBg: solid ? 'rgba(255,255,255,.97)' : 'transparent',
      hdrShadow: solid ? '0 1px 0 #E7E1D8, 0 6px 20px rgba(0,69,128,.08)' : 'none',
      hdrBlur: solid ? 'blur(8px)' : 'none',
      hdrH: solid ? (phone ? '72px' : '84px') : (phone ? '100px' : '150px'),
      hdrShift: solid ? (phone ? '-72px' : '-84px') : (phone ? '-100px' : '-150px'),
      hdrPad: phone ? (solid ? '8px 20px' : '10px 20px') : (solid ? '8px 24px' : '10px 24px'),
      logoH: solid ? (phone ? '44px' : '56px') : (phone ? '48px' : '100px'),
      logoTitle: solid ? (phone ? '16px' : '17px') : (phone ? '17px' : '21px'),
      logoSub: solid ? (phone ? '9.5px' : '10px') : (phone ? '9.5px' : '11.5px'),
      logoFilter: 'none',
      hdrFg: '#000',
      hdrAccent: '#C1272D',
      burgerBd: '#D9D2C7',
      wide, narrow: !wide, menuOpen: !wide && this.state.menu,
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })),
      closeMenu: () => this.setState({ menu: false }),
      heroOv: w >= 900 ? "linear-gradient(90deg,rgba(255,255,255,.92) 24%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.55) 42%,rgba(255,255,255,.18) 48%,rgba(255,255,255,0) 52%)" : 'linear-gradient(90deg,rgba(255,255,255,.92) 0%,rgba(255,255,255,.82) 45%,rgba(255,255,255,.5) 78%,rgba(255,255,255,.18) 100%)',
      heroTop: w < 900 ? "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.86) 28%,rgba(255,255,255,.5) 46%,rgba(255,255,255,0) 66%)" : "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.9) 18%,rgba(255,255,255,.8) 34%,rgba(255,255,255,.64) 48%,rgba(255,255,255,.45) 62%,rgba(255,255,255,.26) 76%,rgba(255,255,255,.1) 89%,rgba(255,255,255,0) 100%)",
      heroTextMax: w < 900 ? '100%' : '640px',
      h1Fs: w >= 760 ? '48px' : '38px',
      h2Fs: w >= 760 ? '35px' : '28px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      heroInPad: w < 600 ? '156px 0 0' : '206px 0 0',
      gut: w < 600 ? '20px' : '24px', burgerSz: w < 600 ? '42px' : '46px',
      sp: (t, b = t) => { const k = w < 600 ? .62 : w < 900 ? .8 : 1, x = w < 600 ? 20 : 24; return `${Math.round(t * k)}px ${x}px ${Math.round(b * k)}px`; },
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    };
  }

  render() {
    const v = this.renderVals();
    const link = { color: '#C1272D', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '3px' };
    const li = { padding: '5px 0', fontSize: '18px', lineHeight: '1.5', color: '#000' };
    const nested = { margin: '8px 0 4px', paddingLeft: '22px', listStyle: 'disc' };
    const nestedLi = { padding: '4px 0', fontSize: '17px', lineHeight: '1.5' };
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', minHeight: '400px', padding: `0 ${v.gut}` }}>
          <img src="/assets/truck-shop-contact-hero.jpg" alt="Mid-Wis Pump & Well service truck in the shop" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: v.heroInPad, paddingBottom: v.gut === '20px' ? '40px' : '56px' }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>{noWidow('Page Not Found')}</h1>
            <p style={{ margin: '16px 0 0', fontSize: '18px', lineHeight: '1.55', color: '#000', maxWidth: '600px', textWrap: 'pretty' }}>{noWidow('The page you requested is unavailable or may have moved. Browse the site pages below to continue.')}</p>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#fff', padding: `0 ${v.gut}` }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 0 0', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>{noWidow('Page Not Found')}</span>
          </nav>
        </div>

        <section data-screen-label="Site links" style={{ background: '#fff', padding: v.sp(56, 112), flex: '1' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.h2Fs, lineHeight: '1.05', margin: '0', textWrap: 'balance' }}>Main Pages</h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#000' }}>
                <li style={li}><a href="/" style={link} className="h-a6c3ef">Home</a></li>
                <li style={li}><a href="/well-pump-services" style={link} className="h-a6c3ef">Well Pump Services</a></li>
                <li style={li}><a href="/pump-installation-and-repair" style={link} className="h-a6c3ef">Pump Installation &amp; Repair</a></li>
                <li style={li}><a href="/products" style={link} className="h-a6c3ef">Products</a></li>
                <li style={li}><a href="/about-us" style={link} className="h-a6c3ef">About Us</a></li>
                <li style={li}><a href="/contact" style={link} className="h-a6c3ef">Contact Us</a></li>
              </ul>
            </div>

            <div style={{ marginTop: '56px' }}>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.h2Fs, lineHeight: '1.05', margin: '0', textWrap: 'balance' }}>Services</h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#000' }}>
                <li style={li}>
                  <a href="/pump-installation-and-repair" style={link} className="h-a6c3ef">Pump Installation &amp; Repair</a>
                  <ul style={nested}>
                    <li style={nestedLi}><a href="/pump-installation-and-repair#installation" style={link} className="h-a6c3ef">Pump Installation</a></li>
                    <li style={nestedLi}><a href="/pump-installation-and-repair#repair" style={link} className="h-a6c3ef">Repair &amp; Replacement</a></li>
                    <li style={nestedLi}><a href="/pump-installation-and-repair#systems" style={link} className="h-a6c3ef">Pressure Tanks &amp; Controls</a></li>
                  </ul>
                </li>
                <li style={li}>
                  <a href="/well-pump-services" style={link} className="h-a6c3ef">Well Pump Services</a>
                  <ul style={nested}>
                    <li style={nestedLi}><a href="/well-pump-services#video-inspection" style={link} className="h-a6c3ef">Video Well Diagnostics</a></li>
                    <li style={nestedLi}><a href="/well-pump-services#system-updates" style={link} className="h-a6c3ef">System Updates</a></li>
                    <li style={nestedLi}><a href="/well-pump-services#emergency" style={link} className="h-a6c3ef">24/7 Emergency</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '56px' }}>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: v.h2Fs, lineHeight: '1.05', margin: '0', textWrap: 'balance' }}>{noWidow('On the Home Page')}</h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#000' }}>
                <li style={li}><a href="/#services" style={link} className="h-a6c3ef">Services</a></li>
                <li style={li}><a href="/#products" style={link} className="h-a6c3ef">Products</a></li>
                <li style={li}><a href="/#about" style={link} className="h-a6c3ef">About</a></li>
                <li style={li}><a href="/#contact" style={link} className="h-a6c3ef">Contact</a></li>
              </ul>
            </div>

            <div style={{ marginTop: '56px' }}>
              <a href="/" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">Back to Home</a>
            </div>
          </div>
        </section>

        <SiteFooter />
        <BackToTop v={v} />
      </div>
    );
  }
}
