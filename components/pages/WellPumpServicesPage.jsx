'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import viewportWidth from '@/components/viewportWidth';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default class WellPumpServicesPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "Well Pump Services | Mid-Wisconsin Pump & Well";
    this.onR = () => this.setState({ w: viewportWidth() });
    this.onS = () => { const s = window.scrollY > 40, t = window.scrollY > 600; if (s !== this.state.scrolled || t !== this.state.showTop) this.setState({ scrolled: s, showTop: t }); };
    window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS, { passive: true }); this.onR(); this.onS();
    if (location.hash.length > 1) this.hashT = setTimeout(() => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView(); }, 200);
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS); clearTimeout(this.hashT); }
  renderVals() {
    const w = this.state.w, wide = w >= 1220;
    const solid = this.state.scrolled;
    const dark = solid || true;
    return {
      navGap: w >= 1360 ? '18px' : '12px', navFs: w >= 1360 ? '16px' : '14.5px', phonePad: w < 680 ? '3px 16px 3px 3px' : w >= 1360 ? '10px 20px 10px 10px' : '8px 14px 8px 8px', phoneLabel: w >= 1360 || !wide ? 'block' : 'none',
      phoneIcon: w < 680 ? '36px' : '40px', phoneNumFs: '20px', phoneLabelFs: '11px', hdrGap: w < 680 ? '12px' : w >= 1360 ? '40px' : '28px',
      phoneGap: w < 680 ? '8px' : '12px', phoneTextDisplay: w < 680 ? 'none' : 'flex', logoTextDisplay: w < 360 ? 'none' : 'flex',
      hdrBg: solid ? 'rgba(255,255,255,.97)' : 'transparent',
      hdrShadow: solid ? '0 1px 0 #E7E1D8, 0 6px 20px rgba(0,69,128,.08)' : 'none',
      hdrBlur: solid ? 'blur(8px)' : 'none',
      hdrH: solid ? (w < 600 ? '72px' : '84px') : (w < 600 ? '100px' : '150px'),
      hdrShift: solid ? (w < 600 ? '-72px' : '-84px') : (w < 600 ? '-100px' : '-150px'),
      hdrPad: w < 600 ? (solid ? '8px 20px' : '10px 20px') : (solid ? '8px 24px' : '10px 24px'),
      logoH: solid ? (w < 600 ? '44px' : '56px') : (w < 600 ? '48px' : '100px'),
      logoTitle: solid ? (w < 600 ? '16px' : '17px') : (w < 600 ? '17px' : '21px'),
      logoSub: solid ? (w < 600 ? '9.5px' : '10px') : (w < 600 ? '9.5px' : '11.5px'),
      logoFilter: dark ? 'none' : 'drop-shadow(0 0 1px rgba(255,255,255,.85)) drop-shadow(0 2px 8px rgba(0,0,0,.35))',
      hdrFg: dark ? '#000' : '#fff',
      hdrAccent: dark ? '#C1272D' : '#F6B3B5',
      burgerBd: dark ? '#D9D2C7' : 'rgba(255,255,255,.4)',
      wide, narrow: !wide, menuOpen: !wide && this.state.menu,
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })),
      closeMenu: () => this.setState({ menu: false }),
      heroOv: w >= 900 ? "linear-gradient(90deg,rgba(255,255,255,.92) 24%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.55) 42%,rgba(255,255,255,.18) 48%,rgba(255,255,255,0) 52%)" : 'linear-gradient(90deg,rgba(255,255,255,.92) 0%,rgba(255,255,255,.82) 45%,rgba(255,255,255,.5) 78%,rgba(255,255,255,.18) 100%)',
      heroTop: w < 900 ? "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.86) 28%,rgba(255,255,255,.5) 46%,rgba(255,255,255,0) 66%)" : "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.9) 18%,rgba(255,255,255,.8) 34%,rgba(255,255,255,.64) 48%,rgba(255,255,255,.45) 62%,rgba(255,255,255,.26) 76%,rgba(255,255,255,.1) 89%,rgba(255,255,255,0) 100%)",
      heroTextMax: w < 900 ? '100%' : '600px',
      h1Fs: w >= 760 ? '48px' : '38px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      heroInPad: w < 600 ? '156px 20px 0' : '206px 24px 0',
      gut: w < 600 ? '20px' : '24px', burgerSz: w < 600 ? '42px' : '46px',
      sp: (t, b = t) => { const k = w < 600 ? .62 : w < 900 ? .8 : 1, x = w < 600 ? 20 : 24; return `${Math.round(t * k)}px ${x}px ${Math.round(b * k)}px`; },
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
      ...(() => ({
        stepCols: w >= 1100 ? 'repeat(4,minmax(0,1fr))' : w >= 620 ? 'repeat(2,minmax(0,1fr))' : '1fr'
      }))()
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="Well Pump Services" />

        {/* Hero */}
        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', height: '400px' }}>
          <img src="/assets/truck-crew-well-services-hero.jpg" alt="Mid-Wis Pump &amp; Well service truck and technician at a customer's home" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 48%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'flex-start', padding: v.heroInPad }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>Well Pump Services</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#fff' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: `28px ${v.gut} 0`, display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>Well Pump Services</span>
          </nav>
        </div>

        {/* Services */}
        <section id="services" data-screen-label="Pump Installation" style={{ padding: v.sp(104, 96), background: '#fff' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', margin: '0 0 64px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>What we do</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0 0 16px', textWrap: 'balance' }}>Keeping your well and pump working reliably.</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000', maxWidth: '680px' }}>Installation, repair, diagnostics, and updates for residential and agricultural well systems, with experience on all makes and models.</p>
            </div>
            <div id="pump-installation" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '40px 72px', alignItems: 'stretch', scrollMarginTop: '110px' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Installation</div>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '32px', lineHeight: '1.05', margin: '0' }}>Pump Installation</h3>
                <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Complete new well pump and water system installations, sized to your property and water needs.</p>
                <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000' }}>New installations for</div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    New construction
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Replacement systems
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Residential properties
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Agricultural properties
                  </div>
                </div>
                <a href="/contact" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                  Contact us
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Repair &amp; Replacement" style={{ padding: v.sp(96, 96), background: '#FBF8F3' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div id="pump-repair" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', gap: '40px 72px', alignItems: 'stretch', scrollMarginTop: '110px' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Repair</div>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '32px', lineHeight: '1.05', margin: '0' }}>Repair &amp; Replacement</h3>
                <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>We diagnose well system problems, then repair or replace pumps, tanks, and parts as needed.</p>
                <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000' }}>Problems we fix</div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Waterlogged tanks
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Down well pumps
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Waterline leaks
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Other well-system problems
                  </div>
                </div>
                <a href="/contact" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                  Contact us
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Video Well Diagnostics" style={{ padding: v.sp(96, 96), background: '#fff' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div id="video-inspection" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '40px 72px', alignItems: 'stretch', scrollMarginTop: '110px' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Diagnostics</div>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '32px', lineHeight: '1.05', margin: '0' }}>Video Well Diagnostics</h3>
                <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>A video camera gives us a real-time view inside your well, so we can diagnose problems accurately and determine the right next steps.</p>
                <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000' }}>Helpful for</div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Diagnosing a specific problem
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Yearly well checkups
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Planning repairs or updates
                  </div>
                </div>
                <a href="/contact" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                  Contact us
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="System Updates" style={{ padding: v.sp(96, 96), background: '#FBF8F3' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div id="system-updates" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', gap: '40px 72px', alignItems: 'stretch', scrollMarginTop: '110px' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Updates</div>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '32px', lineHeight: '1.05', margin: '0' }}>System Updates</h3>
                <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Update an outdated well and pump system when you are buying or selling a home, or when you notice changes in water pressure.</p>
                <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000' }}>Good time to update</div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Buying a home
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Selling a home
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Changes in water pressure
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    Aging pumps, tanks, and controls
                  </div>
                </div>
                <a href="/contact" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                  Contact us
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Emergency */}
        <section id="emergency" data-screen-label="24/7 emergency" style={{ padding: v.sp(96, 96), background: '#fff', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '40px 72px', alignItems: 'stretch' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>24/7 emergency service</div>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '32px', lineHeight: '1.05', margin: '0' }}>No Water? Call Us 24/7.</h3>
                <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Losing water at home or on the farm cannot wait. Call any time, including nights, weekends, and holidays, and we will get you back up and running.</p>
                <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#000' }}>Call right away if you have</div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                  {['No water at the tap', 'Pump will not turn on', 'Pump runs nonstop', 'Leaking or broken water lines'].map(t => (
                    <div key={t} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '14px' }}>
                  <a href="tel:6082695178" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C1272D', color: '#fff', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #C1272D', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-6bbf96">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: 'none' }}>
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                    Call 608-269-5178
                  </a>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                    Contact us
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service process */}
        <section id="process" data-screen-label="Service process" style={{ padding: v.sp(104), background: '#FBF8F3', color: '#000' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>How a service call works</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', color: '#000', textWrap: 'balance' }}>Clear answers from the first call to the final fix.</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#000', maxWidth: '680px' }}>We keep you in the loop at every step, and we will never charge you for something you do not need.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.stepCols, gap: '20px' }}>
              <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '14px', padding: '28px 24px 30px', boxShadow: '0 1px 2px rgba(0,69,128,.04),0 8px 24px rgba(0,69,128,.05)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Step 1</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2', marginBottom: '10px', color: '#000' }}>Call us</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>Tell us what is going on with your water. Estimates are free, and no water calls are answered 24/7.</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '14px', padding: '28px 24px 30px', boxShadow: '0 1px 2px rgba(0,69,128,.04),0 8px 24px rgba(0,69,128,.05)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Step 2</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2', marginBottom: '10px', color: '#000' }}>We diagnose</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>We test your pump and well system on site, using video well diagnostics when we need a closer look.</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '14px', padding: '28px 24px 30px', boxShadow: '0 1px 2px rgba(0,69,128,.04),0 8px 24px rgba(0,69,128,.05)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Step 3</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2', marginBottom: '10px', color: '#000' }}>You choose</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>We explain what we found and your options, so you can make an informed decision that fits your budget.</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '14px', padding: '28px 24px 30px', boxShadow: '0 1px 2px rgba(0,69,128,.04),0 8px 24px rgba(0,69,128,.05)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Step 4</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2', marginBottom: '10px', color: '#000' }}>We get it done</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>Repair, replacement, or a new installation.</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                Contact us
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-screen-label="Contact" style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#fff' }}>
          <img src="/assets/ff5e78a1-6524-42ed-96b5-091b46f7a226.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 25%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.28) 75%,rgba(0,0,0,0) 100%)' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: v.sp(92, 84) }}>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '35px', lineHeight: '1.02', letterSpacing: '-.02em', textTransform: 'uppercase', margin: '0 0 18px', maxWidth: '820px' }}>Let's talk about your water.</h2>
            <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.55', maxWidth: '520px' }}>Tell us what's going on. We'll follow up with options and a free estimate. If you have no water, call now.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="tel:6082695178" style={{ display: 'inline-flex', alignItems: 'center', background: '#C1272D', color: '#fff', padding: '14px 22px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', border: '1.5px solid #C1272D' }} className="h-6bbf96">Call 608-269-5178</a>
              <a href="mailto:randismidwispump@outlook.com" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#fff', padding: '14px 22px', borderRadius: '30px', border: '1.5px solid rgba(255,255,255,.9)', fontWeight: '700', fontSize: '16px' }} className="h-729218">Email Us</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
        <BackToTop v={v} />
      </div>
    );
  }
}
