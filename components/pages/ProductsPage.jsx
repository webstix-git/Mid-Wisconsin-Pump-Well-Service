'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default class ProductsPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "Products | Mid-Wisconsin Pump & Well";
    this.onR = () => this.setState({ w: window.innerWidth });
    this.onS = () => { const s = window.scrollY > 40, t = window.scrollY > 600; if (s !== this.state.scrolled || t !== this.state.showTop) this.setState({ scrolled: s, showTop: t }); };
    window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS, { passive: true }); this.onR(); this.onS();
    if (location.hash.length > 1) this.hashT = setTimeout(() => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView(); }, 200);
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS); clearTimeout(this.hashT); }
  renderVals() {
    const w = this.state.w, wide = w >= 1180;
    const solid = this.state.scrolled || (!wide && this.state.menu);
    const dark = solid || true;
    return {
      navGap: w >= 1360 ? '18px' : '12px', navFs: w >= 1360 ? '16px' : '14.5px', phonePad: w >= 1360 ? '10px 20px 10px 10px' : '8px 14px 8px 8px', phoneLabel: w >= 1360 || !wide ? 'block' : 'none',
      phoneIcon: '40px', phoneNumFs: '20px', phoneLabelFs: '11px', hdrGap: w >= 1360 ? '40px' : '28px',
      hdrBg: solid ? 'rgba(255,255,255,.97)' : 'transparent',
      hdrShadow: solid ? '0 1px 0 #E7E1D8, 0 6px 20px rgba(0,69,128,.08)' : 'none',
      hdrBlur: solid ? 'blur(8px)' : 'none',
      hdrH: solid ? '84px' : '150px',
      hdrShift: solid ? '-84px' : '-150px',
      hdrPad: solid ? '8px 24px' : '10px 24px',
      logoH: solid ? '56px' : '100px',
      logoTitle: solid ? '17px' : '21px',
      logoSub: solid ? '10px' : '11.5px',
      logoFilter: dark ? 'none' : 'drop-shadow(0 0 1px rgba(255,255,255,.85)) drop-shadow(0 2px 8px rgba(0,0,0,.35))',
      hdrFg: dark ? '#000' : '#fff',
      hdrAccent: dark ? '#C1272D' : '#F6B3B5',
      burgerBd: dark ? '#D9D2C7' : 'rgba(255,255,255,.4)',
      wide, narrow: !wide, menuOpen: !wide && this.state.menu,
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })),
      closeMenu: () => this.setState({ menu: false }),
      heroOv: w >= 900 ? "linear-gradient(90deg,rgba(255,255,255,.92) 24%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.55) 42%,rgba(255,255,255,.18) 48%,rgba(255,255,255,0) 52%)" : 'linear-gradient(180deg,rgba(255,255,255,.72) 0%,rgba(255,255,255,.5) 100%)',
      heroTop: "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.9) 18%,rgba(255,255,255,.8) 34%,rgba(255,255,255,.64) 48%,rgba(255,255,255,.45) 62%,rgba(255,255,255,.26) 76%,rgba(255,255,255,.1) 89%,rgba(255,255,255,0) 100%)",
      heroTextMax: w < 900 ? '100%' : '600px',
      h1Fs: w >= 760 ? '48px' : '38px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
      ...(() => ({}))()
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="Products" />

        {/* Hero */}
        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', height: '400px' }}>
          <img src="/assets/crew-rig-products-hero.jpg" alt="Mid-Wisconsin technician preparing pump equipment beside the service rig" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 36%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '125px 24px 0' }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>Products</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#fff' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 24px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>Products</span>
          </nav>
        </div>

        {/* Well pumps */}
        <section id="well-pumps" data-screen-label="Well pumps" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 72px' }}>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '360px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.12)' }}>
                <ImagePlaceholder />
              </div>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Moving water</div>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Well Pumps</h2>
                <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Your well pump lifts water from the well and sends it to the pressure tank, so it is ready at every tap in your home, barn, or business. Paired with a variable speed drive, it delivers constant pressure with less wear on the motor.</p>
                <div>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                    Get a free pump estimate
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#000', marginBottom: '16px' }}>Brands we install</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 28px', background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,.04),0 6px 18px rgba(0,0,0,.05)' }}>
                  <div style={{ flex: '0 0 132px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/assets/0b8802f2-2e7c-448d-aabc-d88d57d62a03.png" alt="Grundfos logo" style={{ maxWidth: '100%', maxHeight: '34px', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '24px', borderLeft: '1px solid #EDE7DE', minWidth: '0' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.2' }}>Grundfos</span>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D', lineHeight: '1.4' }}>Well pumps</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 28px', background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,.04),0 6px 18px rgba(0,0,0,.05)' }}>
                  <div style={{ flex: '0 0 132px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/assets/08122287-e4c7-41f6-b32d-71c3fcb90973.svg" alt="Pentek Intellidrive logo" style={{ maxWidth: '100%', maxHeight: '42px', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '24px', borderLeft: '1px solid #EDE7DE', minWidth: '0' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.2' }}>Pentek Intellidrive</span>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D', lineHeight: '1.4' }}>Variable speed drives</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 28px', background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,.04),0 6px 18px rgba(0,0,0,.05)' }}>
                  <div style={{ flex: '0 0 132px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/assets/41942d64-0d4e-4944-89f3-576f165eaae3.svg" alt="Yaskawa logo" style={{ maxWidth: '100%', maxHeight: '30px', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '24px', borderLeft: '1px solid #EDE7DE', minWidth: '0' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.2' }}>Yaskawa</span>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D', lineHeight: '1.4' }}>Pump drives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pressure tanks */}
        <section id="pressure-tanks" data-screen-label="Pressure tanks" style={{ background: '#FBF8F3', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 72px' }}>
              <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Steady pressure</div>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Pressure Tanks</h2>
                <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>A pressure tank stores water under pressure to keep a steady flow at every tap. It holds pressure within a set range so the pump does not start every time you open a faucet, which helps your whole system last longer.</p>
                <div>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                    Get a free tank estimate
                    <span>→</span>
                  </a>
                </div>
              </div>
              <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '360px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.12)' }}>
                <ImagePlaceholder />
              </div>
            </div>
            <div style={{ marginTop: '56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#000', marginBottom: '16px' }}>Brand we install</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 28px', background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,.04),0 6px 18px rgba(0,0,0,.05)' }}>
                  <div style={{ flex: '0 0 132px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/assets/dd435b75-22d4-453f-a91b-1062f092b4bf.svg" alt="Flexcon logo" style={{ maxWidth: '100%', maxHeight: '50px', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '24px', borderLeft: '1px solid #EDE7DE', minWidth: '0' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.2' }}>Flexcon</span>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D', lineHeight: '1.4' }}>Pressure tanks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" data-screen-label="Benefits" style={{ background: '#F6FAFE', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: '48px 72px', alignItems: 'center' }}>
            <figure style={{ margin: '0' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '1/1', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.14)' }}>
                <img src="/assets/ccad4d0b-0356-50f7-a6af-38b0ef586102.jpg" alt="Basement pressure tank before and after an upgrade" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <figcaption style={{ marginTop: '14px', fontSize: '14px', fontWeight: '600', color: '#000' }}>An outdated pressure tank, replaced with a new tank, filter, and controls.</figcaption>
            </figure>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Upgrade your system</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Enjoy the benefits of a premium water system.</h2>
              <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>From saving money on energy bills to enjoying consistent water pressure, there are plenty of perks to upgrading your well pump and pressure tank. We provide quick, professional installation, so you feel the difference right away.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '1px', background: '#DCE9F6', borderRadius: '14px', overflow: 'hidden', border: '1px solid #DCE9F6' }}>
                <div style={{ background: '#fff', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.15' }}>Steady pressure</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#000' }}>No more drops when the shower and washer run together.</span>
                </div>
                <div style={{ background: '#fff', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.15' }}>Lower energy use</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#000' }}>Variable speed pumps only run as fast as they need to.</span>
                </div>
                <div style={{ background: '#fff', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.15' }}>Quiet operation</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#000' }}>Soft starts and smooth running you will barely hear.</span>
                </div>
                <div style={{ background: '#fff', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1.15' }}>Built to last</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#000' }}>Less wear on the pump and motor means more years of service.</span>
                </div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                  Plan your upgrade
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty */}
        <section id="warranty" data-screen-label="Warranty" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: '48px 72px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Our guarantee</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Warranties You Can Rely On</h2>
              <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>With our guaranteed service, you won’t have a thing to worry about after we install or repair your well pump. We’re committed to giving our customers service they can depend on, and we stand behind the quality of our products, which is why we uphold the manufacturer’s warranty for the product that we sell. For all other parts we installed, we honor a personal one-year warranty for that part and labor for repair.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: '#F6FAFE', border: '1px solid #DCE9F6', borderRadius: '14px', padding: '30px 28px' }}>
                <span style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#004580', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', marginBottom: '10px' }}>Manufacturer warranty</div>
                  <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>We uphold the manufacturer’s warranty on the products we sell.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: '#F6FAFE', border: '1px solid #DCE9F6', borderRadius: '14px', padding: '30px 28px' }}>
                <span style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#004580', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', marginBottom: '10px' }}>One-year parts &amp; labor</div>
                  <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>A personal one-year warranty on all other parts we install, including the labor for repair.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-screen-label="Contact" style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#fff' }}>
          <img src="/assets/ff5e78a1-6524-42ed-96b5-091b46f7a226.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 25%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.28) 75%,rgba(0,0,0,0) 100%)' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '92px 24px 84px' }}>
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
