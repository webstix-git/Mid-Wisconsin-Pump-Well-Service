'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import viewportWidth from '@/components/viewportWidth';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

export default class ContactThankYouPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "Contact – Thank You | Mid-Wisconsin Pump & Well";
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
      heroTextMax: w < 900 ? '100%' : '600px',
      h1Fs: w >= 760 ? '48px' : '38px',
      cardPad: phone ? '40px 24px' : '56px 48px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      heroInPad: w < 600 ? '156px 20px 0' : '206px 24px 0',
      gut: w < 600 ? '20px' : '24px', burgerSz: w < 600 ? '42px' : '46px',
      sp: (t, b = t) => { const k = w < 600 ? .62 : w < 900 ? .8 : 1, x = w < 600 ? 20 : 24; return `${Math.round(t * k)}px ${x}px ${Math.round(b * k)}px`; },
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="Contact" />

        {/* Hero */}
        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', height: '400px' }}>
          <img src="/assets/truck-shop-contact-hero.jpg" alt="Mid-Wis Pump & Well service truck in the shop" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'flex-start', padding: v.heroInPad }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>Contact – Thank You</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: 'rgb(246, 250, 254)' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: `28px ${v.gut} 0`, display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <a href="/contact" style={{ color: '#C1272D' }} className="h-702a41">Contact</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>Thank You</span>
          </nav>
        </div>

        {/* Content */}
        <section data-screen-label="Thank you" style={{ background: 'rgb(246, 250, 254)', padding: v.sp(56, 104), flex: '1' }}>
          <div role="status" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', background: '#fff', border: '1px solid #EDE7DE', borderRadius: '16px', padding: v.cardPad, boxShadow: '0 2px 6px rgba(0,0,0,.04),0 18px 44px rgba(0,69,128,.1)' }}>
            <span style={{ display: 'inline-flex', width: '64px', height: '64px', borderRadius: '50%', background: '#004580', color: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.1', margin: '0 0 14px', textWrap: 'balance' }}>Thanks for contacting us!</h2>
            <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000' }}>We will get in touch with you shortly.</p>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">Back to home</a>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
        <BackToTop v={v} />
      </div>
    );
  }
}
