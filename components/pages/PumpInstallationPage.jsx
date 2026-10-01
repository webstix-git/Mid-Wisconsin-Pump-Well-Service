'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default class PumpInstallationPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "Pump Installation & Repair | Mid-Wisconsin Pump & Well";
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
      heroOv: w >= 900 ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 23%, rgba(255, 255, 255, 0.91) 23%, rgba(255, 255, 255, 0.87) 33%, rgba(255, 255, 255, 0.79) 38%, rgba(255, 255, 255, 0.67) 44%, rgba(255, 255, 255, 0.53) 48%, rgba(255, 255, 255, 0.39) 52%, rgba(255, 255, 255, 0.26) 55%, rgba(255, 255, 255, 0.15) 57%, rgba(255, 255, 255, 0.07) 61%, rgba(255, 255, 255, 0.02) 66%, rgba(255, 255, 255, 0) 53%)" : 'linear-gradient(180deg,rgba(255,255,255,.93) 0%,rgba(255,255,255,.84) 100%)',
      heroTop: "linear-gradient(rgb(255 255 255 / 92%) 0%, rgb(255 255 255 / 90%) 18%, rgb(255 255 255 / 84%) 30%, rgb(255 255 255 / 74%) 41%, rgb(255 255 255 / 61%) 51%, rgb(255 255 255 / 47%) 60%, rgb(255 255 255 / 33%) 69%, rgb(255 255 255 / 20%) 78%, rgb(255 255 255 / 10%) 86%, rgb(255 255 255 / 3%) 94%, rgb(255 255 255 / 0%) 100%)",
      heroTextMax: w < 900 ? '100%' : '600px',
      h1Fs: w >= 760 ? '48px' : '38px',
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
      ...(() => ({
        cardCols: w >= 1100 ? 'repeat(4,minmax(0,1fr))' : w >= 620 ? 'repeat(2,minmax(0,1fr))' : '1fr',
        replCols: w >= 1100 ? 'minmax(0,1.55fr) minmax(0,1fr)' : 'minmax(0,1fr)',
        signCols: w >= 760 ? 'repeat(3,minmax(0,1fr))' : w >= 520 ? 'repeat(2,minmax(0,1fr))' : '1fr',
        mwCols: w >= 900 ? 'repeat(2,minmax(0,1fr))' : 'minmax(0,1fr)',
        mwImgPos: w >= 900 ? 'absolute' : 'relative',
        mwImgRight: w >= 900 ? '50%' : 'auto',
        mwImgMin: w >= 900 ? '0' : '360px',
        mwTextCol: w >= 900 ? '2' : 'auto',
        mwTextPad: w >= 900 ? '104px 24px 104px 64px' : '56px 24px 72px',
        problems: [
          { title: 'Pump Repair & Maintenance', body: 'Quick and effective pump repair, maintenance, upgrades and replacements.' },
          { title: 'Down Well Pumps', body: 'Service for down well pump problems as part of the company\u2019s pump installation and repair services.' },
          { title: 'Waterlogged Tanks', body: 'Troubleshooting and service for waterlogged pressure tanks.' },
          { title: 'Waterline Leaks', body: 'Troubleshooting and repair of waterline leaks.' },
          { title: 'Pump Installation', body: 'Professional well pump installation for residential water systems.' },
          { title: 'Pressure Tanks & Controls', body: 'Pressure tanks and controls are among the water-system services and products provided by Mid-Wisconsin Pump.' },
          { title: 'Constant Pressure Systems', body: 'Constant pressure systems for residential water systems.' }
        ],
        installPoints: [
          'Pump sized to your well, water use, and property',
          'Trusted brands like Grundfos, Pentek Intellidrive, Yaskawa, and Flexcon',
          'Installed, wired, and tested by our own team',
          'Homes, farms, businesses, and new construction'
        ],
        signs: [
          { title: 'Well Pump Replacement', body: 'Pump repair, service, installation, upgrades and replacements.' },
          { title: 'Pressure Tank Replacement', body: 'We sell well pumps and pressure tanks from brands known for their durability and longevity.' },
          { title: 'Constant Pressure Systems', body: 'Innovative constant pressure systems for a more efficient water system and consistent water pressure.' },
          { title: 'Pump System Upgrades', body: 'Upgrading your well pump and pressure tank can provide benefits including energy savings and consistent water pressure.' },
          { title: 'Premium Water Systems', body: 'Water systems designed to be quiet, efficient and reliable.' },
          { title: 'Quality Products', body: 'Well pumps and pressure tanks from Grundfos, Pentek Intellidrive, Yaskawa Drives and Flexcon.' }
        ],
        systems: [
          { title: 'Pressure tanks', body: 'Sizing, installation, and replacement of pressure tanks, including Flexcon tanks.' },
          { title: 'Pump controls', body: 'Pressure switches, control boxes, and wiring that start and stop your pump correctly.' },
          { title: 'Constant-pressure systems', body: 'Variable speed drives, such as Pentek Intellidrive and Yaskawa, for steady pressure at every tap.' },
          { title: 'Water lines', body: 'Repair and replacement of the water line between your well and your home.' },
          { title: 'Related components', body: 'Valves, fittings, gauges, filters, and piping to complete a dependable system.' }
        ],
        steps: [
          { n: 'Step 1', title: 'Inspect', body: 'Assess the existing well and water system.' },
          { n: 'Step 2', title: 'Recommend', body: 'Determine the appropriate equipment and solution.' },
          { n: 'Step 3', title: 'Install', body: 'Professionally install the pump and system.' },
          { n: 'Step 4', title: 'Test', body: 'Verify proper operation and water pressure.' }
        ],
        warranties: [
          { title: 'Manufacturer warranties honored', body: 'We honor the manufacturer warranty on the products we sell, so your new equipment is covered the way it should be.' },
          { title: 'Personal one-year warranty', body: 'Other parts we install carry our personal one-year warranty, covering both the part and the labor to repair it.' }
        ]
      }))()
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="Installation & Repair" />

        {/* Hero */}
        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', height: '400px' }}>
          <img src="/assets/a54c3fbf-7293-45f6-9983-9ae9ca3e8e57.jpg" alt="Mid-Wisconsin pump truck pulling a well pump" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 45%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '230px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '125px 24px 0' }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>Pump Installation &amp; Repair</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#fff' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 24px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>Pump Installation &amp; Repair</span>
          </nav>
        </div>

        {/* Pump installation */}
        <section id="installation" data-screen-label="Pump installation" style={{ padding: '104px 24px', background: '#fff', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px 72px', alignItems: 'stretch' }}>
            <div style={{ flex: '1 1 440px', position: 'relative', minHeight: '420px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
              <ImagePlaceholder />
            </div>
            <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Pump installation</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0', textWrap: 'balance' }}>New Well Pump Installation</h2>
              <p style={{ margin: '0 0 8px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Choosing the right pump matters. We look at your well, your water needs, and your property, help you select the appropriate pump, and install the complete system correctly the first time.</p>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E7E1D8' }}>
                {v.installPoints.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E7E1D8', fontSize: '16px', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1272D', flex: 'none' }} />
                    {t}
                  </div>
                ))}
              </div>
              <a href="/contact" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                Plan your installation
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Pump repair */}
        <section id="repair" data-screen-label="Pump repair" style={{ padding: '104px 24px', background: '#FBF8F3', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', maxWidth: '680px', margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Pump repair</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0 0 16px', textWrap: 'balance' }}>Fast, Reliable Pump Repair</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>We diagnose the problem first, then repair or replace pumps, tanks, and parts as needed. We work on all makes and models, and our trucks are stocked for first-visit fixes.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.cardCols, gap: '20px' }}>
              {v.problems.map((p, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #EDE7DE', borderTop: '3px solid #C1272D', borderRadius: '14px', padding: '28px 24px 30px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 1px 2px rgba(0,69,128,.04),0 8px 24px rgba(0,69,128,.05)' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '21px', lineHeight: '1.2', margin: '0' }}>{p.title}</h3>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#000' }}>{p.body}</p>
                </div>
              ))}
              <a href="tel:6082695178" style={{ background: '#C1272D', color: '#fff', borderRadius: '14px', padding: '28px 24px 30px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }} className="h-6bbf96">
                <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase' }}>No water right now?</span>
                <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '24px', lineHeight: '1.15' }}>Call 608-269-5178</span>
                <span style={{ fontSize: '16px', lineHeight: '1.6' }}>We answer emergency calls 24/7.</span>
              </a>
            </div>
          </div>
        </section>

        {/* Replacement & upgrades */}
        <section id="replacement" data-screen-label="Replacement and upgrades" style={{ padding: '104px 24px', background: '#fff', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: v.replCols, gap: '48px 64px', alignItems: 'stretch' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Replacement &amp; upgrades</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0 0 18px', textWrap: 'balance' }}>When It's Time to Replace Your System</h2>
              <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000', maxWidth: '680px' }}>Sometimes a repair is the right call, and sometimes replacing or upgrading the system is the better investment. These are common signs it may be time for a replacement.</p>
              <div style={{ display: 'grid', gridTemplateColumns: v.signCols, gap: '16px' }}>
                {v.signs.map((s, i) => (
                  <div key={i} style={{ background: '#FBF8F3', border: '1px solid #EDE7DE', borderRadius: '14px', padding: '24px 20px 26px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '19px', lineHeight: '1.2', margin: '0' }}>{s.title}</h3>
                    <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.55', color: '#000' }}>{s.body}</p>
                  </div>
                ))}
              </div>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '32px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                Talk to an Expert
                <span>→</span>
              </a>
            </div>
            <div style={{ position: 'relative', minHeight: '420px', borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.08)' }}>
              <ImagePlaceholder />
            </div>
          </div>
        </section>

        {/* Pressure tanks & controls */}
        <section id="systems" data-screen-label="Pressure tanks and controls" style={{ position: 'relative', overflow: 'hidden', background: 'rgb(246, 250, 254)', color: '#000', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: v.mwCols }}>
            <div style={{ position: v.mwImgPos, top: '0', left: '0', bottom: '0', right: v.mwImgRight, minHeight: v.mwImgMin, background: '#E7E1D8' }}>
              <ImagePlaceholder />
            </div>
            <div style={{ gridColumn: v.mwTextCol, padding: v.mwTextPad }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Pressure tanks &amp; controls</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', textWrap: 'balance' }}>Complete Water System Solutions</h2>
              <p style={{ margin: '0 0 28px', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>A pump is only one part of your water system. We install and service everything that works with it.</p>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #DCE9F6' }}>
                {v.systems.map((s, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '18px 0', borderBottom: '1px solid #DCE9F6' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '19px', lineHeight: '1.25' }}>{s.title}</span>
                    <span style={{ fontSize: '16px', lineHeight: '1.55', color: '#000' }}>{s.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation process */}
        <section id="process" data-screen-label="Installation process" style={{ padding: '104px 24px', background: '#fff', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ maxWidth: '680px', margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>How we work</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0', textWrap: 'balance' }}>Our Installation Process</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.cardCols, gap: '20px' }}>
              {v.steps.map((s, i) => (
                <div key={i} style={{ background: '#FBF8F3', border: '1px solid #EDE7DE', borderRadius: '14px', padding: '30px 26px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '4px' }}>{s.n}</span>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2', margin: '0' }}>{s.title}</h3>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#000' }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty */}
        <section id="warranty" data-screen-label="Warranty" style={{ padding: '104px 24px', background: '#FBF8F3', scrollMarginTop: '84px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '48px 72px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Warranty</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0 0 18px', textWrap: 'balance' }}>Service Backed by Warranty</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#000' }}>We stand behind the equipment we sell and the work we do, so you can count on your system long after the job is done.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {v.warranties.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px minmax(0,1fr)', gap: '20px', alignItems: 'start', padding: '28px 24px', background: '#fff', border: '1px solid #F0EBE3', borderRadius: '10px', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)' }}>
                  <span style={{ width: '56px', height: '56px', borderRadius: '12px', background: '#FBF8F3', color: '#C1272D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '22px', lineHeight: '1.2' }}>{c.title}</span>
                    <span style={{ fontSize: '17px', lineHeight: '1.6', color: '#000' }}>{c.body}</span>
                  </span>
                </div>
              ))}
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
