'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

const REVIEWS = [
  { text: 'I called 2 other places first. 2 days later, still not even a call back from them. Best decision I made was to call Jason. He called back within minutes, and this was on a Holiday weekend when he took his family camping. He arrived, pulled my dead pump and had us all fixed up and running with a new pump in no time. Clearly a Profession that knew his business! There\'s no better service than Mid Wisconsin Pump and Well. I\'d give him 10 stars!!!', who: 'James Williams', initials: 'JW' },
  { text: 'Jason with Mid Wisconsin Pump & Well was geat to work with! Did a wonderful job getting water restored to out home! Would recommend highly!', who: 'Robin Coenen', initials: 'RC' },
  { text: 'Jason is fantastic! Came and fixed my well pump in a very timely manner. Would highly recommend him!', who: 'Carol Hrncar', initials: 'CH' },
  { text: 'Was in town visiting family. The well pump went out and we called Jason. He was very professional and showed up the next morning. By 11am we had a new pump and all new piping. Very friendly and informative. Would highly recommend his company.', who: 'Caleb Ziebell', initials: 'CZ' },
  { text: 'Fast, great, professional service. Jason came and fixed our well pump same day we called him. Very knowledgeable, affordable, and honest service!!! Definitely can\'t go wrong hiring Jason!!! Thank you so much!!!', who: 'Pam Waltemath', initials: 'PW' },
  { text: 'Jason performed some commercial work for a couple of our facilities. I found him very knowledgeable and efficient. All of the equipment he installed has worked perfectly since day one. Would highly recommend. Really knows his stuff.', who: 'Collin Pruitt', initials: 'CP' },
  { text: 'Very professional, price was very reasonable. Would definitely recommend.', who: 'Jennifer T', initials: 'JT' }
];

export default class HomePage extends React.Component {
  state = { sent: false, prop: 'Home', w: 1280, menu: false, rvSlide: 0 };
  rvPer() { const w = this.state.w; return w >= 1000 ? 3 : w >= 680 ? 2 : 1; }
  rvPages() { return Math.ceil(REVIEWS.length / this.rvPer()); }
  rvGo(i) { const n = this.rvPages(); this.setState({ rvSlide: (i + n) % n }); this.rvStart(); }
  rvStart() {
    clearInterval(this.rvTimer);
    this.rvTimer = setInterval(() => { if (!this.rvPaused && !document.hidden) this.setState(s => ({ rvSlide: (s.rvSlide + 1) % this.rvPages() })); }, 5000);
  }
  componentDidMount() {
    document.title = "Mid-Wisconsin Pump & Well | Well Pump Service in Sparta, WI";
    this.onR = () => this.setState(s => ({ w: window.innerWidth, rvSlide: Math.min(s.rvSlide, Math.ceil(REVIEWS.length / (window.innerWidth >= 1000 ? 3 : window.innerWidth >= 680 ? 2 : 1)) - 1) }));
    this.onS = () => { const s = window.scrollY > 40, t = window.scrollY > 600; if (s !== this.state.scrolled || t !== this.state.showTop) this.setState({ scrolled: s, showTop: t }); };
    window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS, { passive: true }); this.onR(); this.onS();
    this.rvPause = () => { this.rvPaused = true; }; this.rvResume = () => { this.rvPaused = false; };
    this.rvBind = setTimeout(() => { this.rvEl = document.getElementById('rv-carousel'); if (this.rvEl) { this.rvEl.addEventListener('mouseenter', this.rvPause); this.rvEl.addEventListener('mouseleave', this.rvResume); } }, 0);
    this.rvStart();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS);
    clearInterval(this.rvTimer); clearTimeout(this.rvBind);
    if (this.rvEl) { this.rvEl.removeEventListener('mouseenter', this.rvPause); this.rvEl.removeEventListener('mouseleave', this.rvResume); }
  }
  renderVals() {
    const w = this.state.w, wide = w >= 1180, mid = w >= 900;
    const solid = this.state.scrolled || (!wide && this.state.menu);
    const white = (this.props.heroOverlay ?? 'White') === 'White';
    const L = mid ? Math.round(w * 0.38) : 0;
    const hx = white ? {
      fg: '#000', sub: '#000', eyebrow: '#C1272D', shadow: 'none',
      overlay: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9) 23%, rgba(255, 255, 255, 0.91) 23%, rgba(255, 255, 255, 0.87) 33%, rgba(255, 255, 255, 0.79) 38%, rgba(255, 255, 255, 0.67) 44%, rgba(255, 255, 255, 0.53) 48%, rgba(255, 255, 255, 0.39) 52%, rgba(255, 255, 255, 0.26) 55%, rgba(255, 255, 255, 0.15) 57%, rgba(255, 255, 255, 0.07) 61%, rgba(255, 255, 255, 0.02) 66%, rgba(255, 255, 255, 0) 53%)',
      radial: 'none',
      top: 'linear-gradient(rgb(255 255 255 / 92%) 0%, rgb(255 255 255 / 90%) 18%, rgb(255 255 255 / 84%) 30%, rgb(255 255 255 / 74%) 41%, rgb(255 255 255 / 61%) 51%, rgb(255 255 255 / 47%) 60%, rgb(255 255 255 / 33%) 69%, rgb(255 255 255 / 20%) 78%, rgb(255 255 255 / 10%) 86%, rgb(255 255 255 / 3%) 94%, rgb(255 255 255 / 0%) 100%)',
      pillBg: 'transparent', pillBd: 'transparent', btnBg: 'transparent', btnFg: '#004580', btnBd: '#004580', secBg: '#fff', bleed: 0
    } : {
      fg: '#fff', sub: '#DCE3EC', eyebrow: '#F6B3B5', shadow: 'none',
      overlay: mid
        ? 'linear-gradient(90deg,rgba(0,69,128,.88) 0%,rgba(0,69,128,.72) 28%,rgba(0,69,128,.28) 52%,rgba(0,69,128,0) 70%)'
        : 'linear-gradient(180deg,rgba(0,69,128,.88) 0%,rgba(0,69,128,.72) 55%,rgba(0,69,128,.35) 100%)',
      radial: 'none',
      top: 'linear-gradient(180deg,rgba(0,69,128,.78) 0%,rgba(0,69,128,.5) 55%,rgba(0,69,128,0) 100%)',
      pillBg: 'transparent', pillBd: 'transparent', btnBg: 'transparent', btnFg: '#fff', btnBd: '#fff', secBg: '#004580', bleed: 0
    };
    const dark = solid || white;
    return {
      navGap: w >= 1360 ? '18px' : '12px', navFs: w >= 1360 ? '16px' : '14.5px', phonePad: w >= 1360 ? '10px 20px 10px 10px' : '8px 14px 8px 8px', phoneLabel: w >= 1360 || !wide ? 'block' : 'none',
      phoneIcon: '40px', phoneNumFs: '20px', phoneLabelFs: '11px', hdrGap: w >= 1360 ? '40px' : '28px',
      logoTextDisplay: (wide && w < 1300) ? 'none' : 'flex',
      hx, photoLeft: L + 'px', photoMask: L ? 'linear-gradient(90deg,transparent 0,#000 260px)' : 'none',
      hdrBg: solid ? 'rgba(255,255,255,.97)' : 'transparent',
      hdrShadow: solid ? '0 1px 0 #E7E1D8, 0 6px 20px rgba(0,69,128,.08)' : 'none',
      hdrBlur: solid ? 'blur(8px)' : 'none',
      hdrH: solid ? '84px' : '150px',
      hdrShift: solid ? '-84px' : '-150px',
      hdrPad: solid ? '8px 24px' : '10px 24px',
      logoH: solid ? '56px' : '100px',
      logoTitle: solid ? '17px' : '21px',
      logoSub: solid ? '10px' : '11.5px',
      logoFilter: dark ? 'none' : 'drop-shadow(0 0 1px rgba(255,255,255,.85)) drop-shadow(0 2px 8px rgba(0,69,128,.4))',
      hdrFg: dark ? '#000' : '#fff',
      hdrAccent: dark ? '#C1272D' : '#F6B3B5',
      burgerBd: dark ? '#D9D2C7' : 'rgba(255,255,255,.4)',
      wide, narrow: !wide, menuOpen: !wide && this.state.menu,
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })),
      closeMenu: () => this.setState({ menu: false }),
      svcCols: `repeat(${w >= 900 ? 3 : 1},minmax(0,1fr))`,      mwCols: mid ? 'repeat(2,minmax(0,1fr))' : 'minmax(0,1fr)',
      mwImgPos: mid ? 'absolute' : 'relative',
      mwImgLeft: mid ? '50%' : 'auto',
      mwImgMin: mid ? '0' : '360px',
      brandCols: `repeat(${w >= 1000 ? 4 : w >= 560 ? 2 : 1},minmax(0,1fr))`,      heroPhotoW: '100%',
      heroTextMax: w < 900 ? '100%' : '640px',
      heroMin: '750px',
      heroWide: w >= 760,
      heroNarrow: w < 760,
      heroPad: '200px 24px 64px',
      showAnniversary: this.props.showAnniversary ?? true,
      topOpacity: this.state.showTop ? '1' : '0',
      topVis: this.state.showTop ? 'visible' : 'hidden',
      topShift: this.state.showTop ? '0' : '12px',
      toTop: e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
      sent: this.state.sent, notSent: !this.state.sent,
      submit: e => { e.preventDefault(); this.setState({ sent: true }); },
      reset: () => this.setState({ sent: false }),
      propTypes: ['Home', 'Farm', 'Rental', 'Business'].map(l => {
        const on = this.state.prop === l;
        return { label: l, pick: () => this.setState({ prop: l }), bg: on ? '#004580' : '#fff', fg: on ? '#fff' : '#000', border: on ? '#004580' : '#D9D2C7' };
      }),
      services: [
        { img: '/assets/3b9f8afd-f873-440d-8fd9-cbe2398c7ffc.jpg', pos: '50% 40%', alt: 'Technician installing a new pressure tank', tag: 'Pump Installation', title: 'New Well Pump & System Installation', body: 'Professional installation of new well pump systems, pressure tanks, and related equipment for residential and agricultural properties.', cta: 'Explore Installation Services', href: '/pump-installation-and-repair' },
        { img: '/assets/d4f73fc3-0a22-4dbd-8423-f66c778e45df.jpg', pos: '50% 40%', alt: 'Technician testing a well pump pressure switch', tag: 'Pump Repair & Service', title: 'Well Pump Repair & Service', body: 'Diagnosing and repairing well pump and water system problems, including outdated or failed components. Service is available for all makes and models.', cta: 'Get Pump Service', href: '/pump-installation-and-repair#repair' },
        { img: '/assets/14e122c5-c49e-5c53-aceb-f3506b7af981.jpg', pos: '35% 55%', alt: 'Mid-Wisconsin Pump & Well service truck ready for an emergency call', tag: '24/7 Emergency Pump Service', title: '24/7 Emergency No-Water Service', body: 'Fast emergency assistance when your water system stops working. Mid-Wisconsin Pump provides around-the-clock service for urgent no-water situations.', cta: 'Get Emergency Service', href: '/contact' }
      ],
      helpList: [
        { home: true, title: 'Homeowners', body: 'Well and pump service for residential water systems.' },
        { farm: true, title: 'Agricultural Properties', body: 'Well and pump services for farms and agricultural operations.' },
        { biz: true, title: 'Businesses', body: 'Reliable water-system service for local businesses.' }
      ],
      triggers: [
        { title: 'No water', body: 'Sudden loss of water. We take emergency calls 24/7.', bg: '#C1272D', fg: '#fff', bd: '#C1272D', sub: '#fff' },
        { title: 'Pressure or quality changes', body: 'Weak pressure, sputtering taps, or water that looks or tastes different.', bg: '#FBF8F3', fg: '#000', bd: '#E7E1D8', sub: '#000' },
        { title: 'Bought a new home', body: 'Update the well and pump system before you move in.', bg: '#FBF8F3', fg: '#000', bd: '#E7E1D8', sub: '#000' },
        { title: 'Selling a home', body: 'Inspections and updates to help the sale go smoothly.', bg: '#FBF8F3', fg: '#000', bd: '#E7E1D8', sub: '#000' },
        { title: 'New construction', body: 'Complete pump and pressure tank installation for new builds.', bg: '#FBF8F3', fg: '#000', bd: '#E7E1D8', sub: '#000' },
        { title: 'Farm operations', body: 'Consistent water for livestock and operations, with minimal downtime.', bg: '#FBF8F3', fg: '#000', bd: '#E7E1D8', sub: '#000' }
      ],
      brands: [
        { name: 'Grundfos', what: 'Pump systems', logo: '/assets/0b8802f2-2e7c-448d-aabc-d88d57d62a03.png', h: '44px' },
        { name: 'Pentek Intellidrive', what: 'Variable speed pump drives', logo: '/assets/08122287-e4c7-41f6-b32d-71c3fcb90973.svg', h: '52px' },
        { name: 'Yaskawa', what: 'Pump drives', logo: '/assets/41942d64-0d4e-4944-89f3-576f165eaae3.svg', h: '40px' },
        { name: 'Flexcon', what: 'Pressure tanks', logo: '/assets/dd435b75-22d4-453f-a91b-1062f092b4bf.svg', h: '60px' }
      ],
      ...(() => {
        const per = this.rvPer(), pages = this.rvPages(), slide = Math.min(this.state.rvSlide, pages - 1);
        const cards = [...REVIEWS, ...REVIEWS.slice(0, pages * per - REVIEWS.length)];
        return {
          rvCards: cards,
          rvCardW: `calc((100% - ${(per - 1) * 24}px) / ${per})`,
          rvShift: `calc(${-slide} * (100% + 24px))`,
          rvDots: Array.from({ length: pages }, (_, i) => ({ label: `Show reviews ${i + 1} of ${pages}`, go: () => this.rvGo(i), w: i === slide ? '28px' : '10px', bg: i === slide ? '#C1272D' : '#C9DDF0' }))
        };
      })()
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="Home" logoHref="#top" />

        {/* Hero */}
        <section id="top" data-screen-label="Hero" style={{ background: '#fff', color: v.hx.fg, position: 'relative', overflow: 'hidden', minHeight: v.heroMin }}>
          <img src="/assets/ea5835eb-eaa4-480f-aef2-fd1853e74826.jpg" alt="Mid-Wisconsin pump truck lifting an old pressure tank from the ground" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% 55%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.hx.overlay }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '230px', background: v.hx.top, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', minHeight: '750px', display: 'flex', alignItems: 'center', padding: v.heroPad }}>
            <div style={{ maxWidth: v.heroTextMax }}>
              <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: v.hx.eyebrow, margin: '0 0 18px' }}>Sparta &amp; Western Wisconsin</div>
              {v.heroWide && (
                <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '60px', lineHeight: '1.05', letterSpacing: '-.03em', margin: '0 0 20px', color: v.hx.fg, textWrap: 'balance' }}>Reliable Well &amp; Pump Service, Right When You Need It</h1>
              )}
              {v.heroNarrow && (
                <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '48px', lineHeight: '1.08', letterSpacing: '-.03em', margin: '0 0 20px', color: v.hx.fg, textWrap: 'balance' }}>Reliable Well &amp; Pump Service, Right When You Need It</h1>
              )}
              <p style={{ fontSize: '18px', lineHeight: '1.65', margin: '0 0 32px', color: v.hx.sub, maxWidth: '440px', textWrap: 'pretty' }}>Pump installation, repair, and video well inspection for homes, farms, and small businesses across Western Wisconsin.</p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: v.hx.btnBg, color: v.hx.btnFg, padding: '13px 22px', borderRadius: '8px', border: `1.5px solid ${v.hx.btnBd}`, fontWeight: '600', fontSize: '15.5px', lineHeight: '1.2' }} className="h-2eec3d">Get a Free Estimate</a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-screen-label="Services" style={{ padding: '104px 24px 96px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', maxWidth: '680px', margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Our services</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', textWrap: 'balance' }}>Well and pump service, done right the first time.</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Residential and agricultural systems, with experience on all makes and models of well pumps and pressure tanks.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.svcCols, gap: '24px' }}>
              {v.services.map((s, i) => (
                <a key={i} href={s.href} style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', color: '#000', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                  <div style={{ height: '210px', background: '#E7E1D8', position: 'relative' }}>
                    <img src={s.img} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos, display: 'block' }} />
                  </div>
                  <div style={{ padding: '24px 22px 24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>{s.tag}</div>
                    <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', margin: '0' }}>{s.title}</h3>
                    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000', flex: '1' }}>{s.body}</p>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: '#C1272D', paddingTop: '8px', borderTop: '1px solid #F0EBE3', marginTop: '6px' }}>{s.cta} →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* When to call */}
        <section data-screen-label="When to call" style={{ background: '#fff', padding: '112px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ maxWidth: '680px', margin: '0 0 56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '16px' }}>Who we help</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.02', margin: '0 0 16px', textWrap: 'balance' }}>For Homes, Farms &amp; Businesses</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#000' }}>Reliable well and pump service for homeowners, agricultural properties, and businesses throughout Western Wisconsin.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '48px 64px', alignItems: 'stretch' }}>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '440px', background: '#E7E1D8' }}>
                <img src="/assets/truck-valley-who-we-help.jpg" alt="Mid-Wis Pump & Well service truck on a rural job site" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 100%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.5) 18%,rgba(0,0,0,0) 38%)' }} />
                <div style={{ position: 'absolute', left: '24px', right: '24px', bottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end', justifyContent: 'space-between', color: '#fff' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#fff', marginBottom: '6px' }}>No water?</div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '28px', lineHeight: '1.1' }}>We answer 24/7.</div>
                  </div>
                  <a href="tel:6082695178" style={{ background: '#C1272D', color: '#fff', padding: '14px 20px', borderRadius: '999px', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }} className="h-6bbf96">608-269-5178</a>
                </div>
              </div>
              <div data-help-cards="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                {v.helpList.map((t, i) => (
                  <a key={i} href="/well-pump-services" style={{ display: 'grid', gridTemplateColumns: '56px minmax(0,1fr) 28px', gap: '20px', alignItems: 'center', padding: '28px 24px', background: '#fff', border: '1px solid #F0EBE3', borderRadius: '10px', color: '#000', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-d1b715">
                    <span style={{ width: '56px', height: '56px', borderRadius: '12px', background: '#FBF8F3', color: '#C1272D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {t.home && (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 10.5 12 3l9 7.5" />
                          <path d="M5 9.5V21h14V9.5" />
                          <path d="M10 21v-6h4v6" />
                        </svg>
                      )}
                      {t.farm && (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21V10l9-6 9 6v11" />
                          <path d="M2 21h20" />
                          <path d="M9 21v-6h6v6" />
                          <path d="m9 15 6 6" />
                          <path d="m15 15-6 6" />
                          <path d="M10 10h4" />
                        </svg>
                      )}
                      {t.biz && (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="3" width="16" height="18" rx="1" />
                          <path d="M9 7h1" />
                          <path d="M14 7h1" />
                          <path d="M9 11h1" />
                          <path d="M14 11h1" />
                          <path d="M9 15h1" />
                          <path d="M14 15h1" />
                          <path d="M10 21v-3h4v3" />
                        </svg>
                      )}
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15' }}>{t.title}</span>
                      <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#000' }}>{t.body}</span>
                    </span>
                    <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C1272D' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" data-screen-label="Products" style={{ background: '#FBF8F3', padding: '112px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Products we install</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', textWrap: 'balance' }}>Quality brands built for the long haul.</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>We install pumps, drives, and pressure tanks from manufacturers we trust, so your system keeps working for years. All makes and models serviced and repaired.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.brandCols, gap: '24px' }}>
              {v.brands.map((b, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-63709b">
                  <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 32px', background: '#fff' }}>
                    <img src={b.logo} alt={`${b.name} logo`} style={{ maxWidth: '100%', maxHeight: b.h, width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '18px 22px 22px', borderTop: '3px solid #C1272D', background: '#FBF8F3', display: 'flex', flexDirection: 'column', gap: '4px', flex: '1' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '19px', lineHeight: '1.2' }}>{b.name}</span>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C1272D' }}>{b.what}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
              <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                View all products
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" data-screen-label="About" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: '64px', alignItems: 'center' }}>
            <div style={{ position: 'relative', paddingBottom: '40px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.16)' }}>
                <img src="/assets/8926e1af-2b46-42c6-b707-af49a85161ff.jpg" alt="Mike Schaitel with an early Mid-Wis Pump &amp; Well truck" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(.15)' }} />
              </div>
              {v.showAnniversary && (
                <div style={{ position: 'absolute', right: '20px', bottom: '0', width: '140px', height: '140px', borderRadius: '50%', background: '#C1272D', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: '5px solid #fff', boxShadow: '0 10px 24px rgba(193,39,45,.35)' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '50px', lineHeight: '.9' }}>49+</div>
                  <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: '4px' }}>Years</div>
                  <div style={{ fontSize: '12px', fontWeight: '600', marginTop: '2px' }}>1977–2026</div>
                </div>
              )}
              <div style={{ position: 'absolute', left: '20px', bottom: '10px', background: '#fff', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', fontWeight: '600', boxShadow: '0 6px 16px rgba(0,69,128,.12)' }}>Mike Schaitel, founder</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Our story</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Still working out of the shop Mike built.</h2>
              <p style={{ margin: '0 0 28px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Mike Schaitel started Mid-Wisconsin Pump &amp; Well in 1977 in rural Sparta, first working out of his home and then building a garage shop next door. Jason took over in 2003 and has grown it into a family known name.</p>
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', margin: '8px 0 40px' }}>
                <div style={{ position: 'absolute', left: '9px', right: '0', top: '8px', height: '2px', background: 'linear-gradient(90deg,#C1272D 0%,#C1272D 67%,rgba(193,39,45,0) 100%)' }} />
                <div style={{ position: 'relative', padding: '34px 16px 0 0' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', border: '3px solid #C1272D', boxSizing: 'border-box' }} />
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '26px', lineHeight: '1', color: '#C1272D' }}>1977</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.4', color: '#000', marginTop: '6px' }}>Mike starts the company</div>
                </div>
                <div style={{ position: 'relative', padding: '34px 16px 0 0' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', border: '3px solid #C1272D', boxSizing: 'border-box' }} />
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '26px', lineHeight: '1', color: '#C1272D' }}>2003</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.4', color: '#000', marginTop: '6px' }}>Jason takes over</div>
                </div>
                <div style={{ position: 'relative', padding: '34px 16px 0 0' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0', width: '18px', height: '18px', borderRadius: '50%', background: '#C1272D', border: '3px solid #C1272D', boxSizing: 'border-box', boxShadow: '0 0 0 5px rgba(193,39,45,.15)' }} />
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '26px', lineHeight: '1', color: '#C1272D' }}>2026</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.4', color: '#000', marginTop: '6px' }}>49+ years in business</div>
                </div>
              </div>
              <a href="/about-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                More about us
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section data-screen-label="Reviews" style={{ background: 'rgb(246, 250, 254)', color: '#000', padding: '96px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Google reviews</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0' }}>What our neighbors say.</h2>
            </div>
            <div id="rv-carousel" aria-roledescription="carousel" aria-label="Google reviews" style={{ overflow: 'hidden', padding: '0 0 24px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', transform: `translateX(${v.rvShift})`, transition: 'transform .7s cubic-bezier(.65,0,.35,1)' }}>
                {v.rvCards.map((r, i) => (
                  <figure key={i} style={{ margin: '0', flex: `0 0 ${v.rvCardW}`, position: 'relative', background: '#fff', borderRadius: '16px', padding: '30px 30px 28px', display: 'flex', flexDirection: 'column', gap: '18px', border: '1px solid #DCE9F6', borderBottom: '4px solid #C1272D' }}>
                    <div style={{ color: '#E0A21B', fontSize: '18px', letterSpacing: '3px', lineHeight: '1' }}>★★★★★</div>
                    <blockquote style={{ margin: '0', fontSize: '17px', lineHeight: '1.65', color: '#000', fontStyle: 'normal', flex: '1' }}>{r.text}</blockquote>
                    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid #DCE9F6' }}>
                      <span style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#004580', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flex: 'none' }}>{r.initials}</span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '16px', fontWeight: '700', color: '#000' }}>{r.who}</span>
                        <span style={{ fontSize: '13px', color: '#000', opacity: '.7' }}>Verified Google review</span>
                      </span>
                      <svg width="24" height="24" viewBox="0 0 48 48" aria-label="Google" style={{ flex: 'none' }}>
                        <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                        <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                      </svg>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {v.rvDots.map((d, i) => (
                  <button key={i} type="button" aria-label={d.label} onClick={d.go} style={{ width: d.w, height: '10px', borderRadius: '999px', border: '0', padding: '0', background: d.bg, cursor: 'pointer', transition: 'width .3s,background .3s' }} />
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <a href="https://www.google.com/maps/search/?api=1&amp;query=Mid+Wisconsin+Pump+%26+Well+Service%2C+Sparta%2C+WI" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                Read all reviews on Google
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="service-area" data-screen-label="Service area" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '48px 72px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Where we work</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Serving Sparta and the Coulee Region.</h2>
              <p style={{ margin: '0 0 28px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>From our shop on Icecap Road in Sparta, we have provided lasting solutions to hundreds of water systems across Monroe County and the surrounding areas.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <span style={{ background: 'rgb(246, 250, 254)', border: '1px solid #DCE9F6', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Sparta</span>
                <span style={{ background: 'rgb(246, 250, 254)', border: '1px solid #DCE9F6', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Monroe County</span>
                <span style={{ background: 'rgb(246, 250, 254)', border: '1px solid #DCE9F6', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Coulee Region</span>
                <span style={{ background: 'rgb(246, 250, 254)', border: '1px solid #DCE9F6', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Western Wisconsin</span>
              </div>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
                Contact us
                <span>→</span>
              </a>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #EDE7DE', boxShadow: '0 18px 40px rgba(0,69,128,.12)', background: '#E7E1D8', height: '400px' }}>
              <iframe title="Map to Mid-Wisconsin Pump &amp; Well, 17660 Icecap Rd, Sparta, WI" src="https://www.google.com/maps?q=17660%20Icecap%20Rd%2C%20Sparta%2C%20WI%2054656&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '100%', border: '0', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-screen-label="Contact" style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#fff' }}>
          <img src="/assets/truck-lawn-cta-banner.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 14%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 25%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.12) 52%,rgba(0,0,0,0) 62%)' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '92px 24px 84px' }}>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '35px', lineHeight: '1.02', letterSpacing: '-.02em', textTransform: 'uppercase', margin: '0 0 18px', maxWidth: '820px' }}>Let's talk about your water.</h2>
            <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.55', maxWidth: '430px' }}>Tell us what's going on. We'll follow up with options and a free estimate. If you have no water, call now.</p>
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
