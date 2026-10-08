'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import viewportWidth from '@/components/viewportWidth';
import { textRight, textOverlay } from '@/components/heroTextOverlay';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

export default class AiPolicyPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false, txtR: 0 };
  h1Ref = React.createRef();
  componentDidMount() {
    document.title = "AI Policy | Mid-Wisconsin Pump & Well";
    this.measure = () => { const r = textRight(this.h1Ref.current); if (r !== this.state.txtR) this.setState({ txtR: r }); };
    this.onR = () => this.setState({ w: viewportWidth() }, this.measure);
    if (document.fonts) document.fonts.ready.then(this.measure);
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
      heroOv: this.state.txtR ? textOverlay(this.state.txtR, w) : w >= 900 ? "linear-gradient(90deg,rgba(255,255,255,.92) 24%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.55) 42%,rgba(255,255,255,.18) 48%,rgba(255,255,255,0) 52%)" : 'linear-gradient(90deg,rgba(255,255,255,.92) 0%,rgba(255,255,255,.82) 45%,rgba(255,255,255,.5) 78%,rgba(255,255,255,.18) 100%)',
      heroTop: w < 768 ? "linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.55) 28%,rgba(255,255,255,.2) 52%,rgba(255,255,255,0) 72%)" : w < 900 ? "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.86) 28%,rgba(255,255,255,.5) 46%,rgba(255,255,255,0) 66%)" : "linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.9) 18%,rgba(255,255,255,.8) 34%,rgba(255,255,255,.64) 48%,rgba(255,255,255,.45) 62%,rgba(255,255,255,.26) 76%,rgba(255,255,255,.1) 89%,rgba(255,255,255,0) 100%)",
      heroTextMax: w < 900 ? '100%' : `${Math.min(600, Math.round(w / 2 - 40))}px`,
      h1Fs: w >= 760 ? '48px' : '38px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      heroInPad: w < 600 ? '156px 20px 0' : '206px 24px 0',
      gut: w < 600 ? '20px' : '24px', burgerSz: w < 600 ? '42px' : '46px',
      sp: (t, b = t) => { const k = w < 600 ? .62 : w < 900 ? .8 : 1, x = w < 600 ? 20 : 24; return `${Math.round(t * k)}px ${x}px ${Math.round(b * k)}px`; },
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
        <section id="top" data-screen-label="Page banner" style={{ position: 'relative', overflow: 'hidden', background: '#fff', color: '#000', height: '400px' }}>
          <img src="/assets/ea5835eb-eaa4-480f-aef2-fd1853e74826.jpg" alt="Mid-Wisconsin pump truck on a job site" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% 55%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'flex-start', padding: v.heroInPad }}>
            <h1 ref={this.h1Ref} style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>AI Policy</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#FBF8F3' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: `28px ${v.gut} 0`, display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>AI Policy</span>
          </nav>
        </div>

        {/* Content */}
        <section data-screen-label="Content" style={{ padding: v.sp(56, 104) }}>
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
              <a href="/" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">Back to home</a>
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
