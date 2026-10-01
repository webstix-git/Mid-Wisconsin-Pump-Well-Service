'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

export default class AiPolicyPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "AI Policy | Mid-Wisconsin Pump & Well";
    this.onR = () => this.setState({ w: window.innerWidth });
    this.onS = () => { const s = window.scrollY > 40, t = window.scrollY > 600; if (s !== this.state.scrolled || t !== this.state.showTop) this.setState({ scrolled: s, showTop: t }); };
    window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS, { passive: true }); this.onR(); this.onS();
    if (location.hash.length > 1) this.hashT = setTimeout(() => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView(); }, 200);
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS); clearTimeout(this.hashT); }
  renderVals() {
    const w = this.state.w, wide = w >= 1180;
    const solid = this.state.scrolled || (!wide && this.state.menu);
    const dark = solid || false;
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
      heroOv: w >= 900 ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 23%, rgba(255, 255, 255, 0.91) 23%, rgba(255, 255, 255, 0.87) 33%, rgba(255, 255, 255, 0.79) 38%, rgba(255, 255, 255, 0.67) 44%, rgba(255, 255, 255, 0.53) 48%, rgba(255, 255, 255, 0.39) 52%, rgba(255, 255, 255, 0.26) 55%, rgba(255, 255, 255, 0.15) 57%, rgba(255, 255, 255, 0.07) 61%, rgba(255, 255, 255, 0.02) 66%, rgba(255, 255, 255, 0) 53%)" : 'linear-gradient(180deg,rgba(255,255,255,.93) 0%,rgba(255,255,255,.84) 100%)',
      heroTop: "linear-gradient(rgb(255 255 255 / 92%) 0%, rgb(255 255 255 / 90%) 18%, rgb(255 255 255 / 84%) 30%, rgb(255 255 255 / 74%) 41%, rgb(255 255 255 / 61%) 51%, rgb(255 255 255 / 47%) 60%, rgb(255 255 255 / 33%) 69%, rgb(255 255 255 / 20%) 78%, rgb(255 255 255 / 10%) 86%, rgb(255 255 255 / 3%) 94%, rgb(255 255 255 / 0%) 100%)",
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
        <SiteHeader v={v} />

        {/* Banner */}
        <section id="top" data-screen-label="Page banner" style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#fff', height: '400px' }}>
          <img src="/assets/ea5835eb-eaa4-480f-aef2-fd1853e74826.jpg" alt="Mid-Wisconsin pump truck on a job site" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% 55%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.4) 45%,rgba(0,0,0,.74) 100%)' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '125px 24px 0' }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#fff', maxWidth: '820px', textWrap: 'balance' }}>AI Policy</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#FBF8F3' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 24px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>AI Policy</span>
          </nav>
        </div>

        {/* Content */}
        <section data-screen-label="Content" style={{ padding: '56px 24px 104px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ maxWidth: '860px' }}>
              <p style={{ margin: '0 0 40px', fontSize: '15px', fontWeight: '600', color: '#000', opacity: '.7' }}>Last updated: September 30, 2026</p>
              <div style={{ marginBottom: '44px' }}>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 14px', textWrap: 'balance' }}>Our use of AI</h2>
                <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Mid-Wisconsin Pump &amp; Well Service may use artificial intelligence tools to help draft website copy, organize service information, and support design. AI assists our team; it does not replace our technicians, on-site diagnosis, or the judgment that comes from decades of well and pump work.</p>
              </div>
              <div style={{ marginBottom: '44px' }}>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 14px', textWrap: 'balance' }}>Customer data</h2>
                <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>We do not use AI systems to make automated decisions about individual customers that produce legal or similarly significant effects. We do not upload customer payment details or other sensitive personal information to public AI tools.</p>
              </div>
              <div style={{ marginBottom: '44px' }}>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 14px', textWrap: 'balance' }}>Accuracy</h2>
                <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Service descriptions, hours, warranty terms, and contact details on this site are maintained by our staff, and recommendations for your water system always come from an inspection by our team. If anything looks incorrect, please call 608-269-5178 so we can fix it.</p>
              </div>
              <div style={{ marginBottom: '44px' }}>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 14px', textWrap: 'balance' }}>Transparency</h2>
                <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>When AI-assisted content is material to how we communicate online, we keep it consistent with how we work: clear communication, honest recommendations, and never charging for something you do not need.</p>
              </div>
              <div style={{ marginBottom: '44px' }}>
                <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 14px', textWrap: 'balance' }}>Contact</h2>
                <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Questions: <a href="mailto:randismidwispump@outlook.com" style={{ color: '#C1272D', fontWeight: '600' }}>randismidwispump@outlook.com</a>.</p>
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
              <a href="tel:6082695178" style={{ display: 'inline-flex', alignItems: 'center', background: '#C1272D', color: '#fff', padding: '14px 22px', borderRadius: '4px', fontWeight: '700', fontSize: '16px', border: '1.5px solid #C1272D' }} className="h-6bbf96">Call 608-269-5178</a>
              <a href="mailto:randismidwispump@outlook.com" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#fff', padding: '14px 22px', borderRadius: '4px', border: '1.5px solid rgba(255,255,255,.9)', fontWeight: '700', fontSize: '16px' }} className="h-729218">Email Us</a>
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
