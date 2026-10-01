'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default class AboutUsPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false };
  componentDidMount() {
    document.title = "About Us | Mid-Wisconsin Pump & Well";
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
      ...(() => ({
        storyKeep: w >= 700 ? 'nowrap' : 'normal',
        tl: w >= 900 ? {
          cols: 'minmax(0,1fr) 88px minmax(0,1fr)', lineLeft: '50%', rowGap: '0',
          thenText: '1 / 2', thenImg: '3 / 4', nowText: '3 / 4', nowImg: '1 / 2', dotCol: '2 / 3', dotRow: '1 / 2', imgRow: '1 / 2', dotAlign: 'center', dotTop: '0'
        } : {
          cols: '40px minmax(0,1fr)', lineLeft: '19px', rowGap: '24px',
          thenText: '2 / 3', thenImg: '2 / 3', nowText: '2 / 3', nowImg: '2 / 3', dotCol: '1 / 2', dotRow: '1 / 3', imgRow: '2 / 3', dotAlign: 'start', dotTop: '1px'
        },
        mwCols: w >= 900 ? 'repeat(2,minmax(0,1fr))' : 'minmax(0,1fr)',
        areaCols: w >= 1000 ? 'minmax(0,1.35fr) minmax(0,1fr)' : 'minmax(0,1fr)',
        mwImgPos: w >= 900 ? 'absolute' : 'relative',
        mwImgLeft: w >= 900 ? '50%' : 'auto',
        mwImgMin: w >= 900 ? '0' : '420px',
        valueCols: `repeat(${w >= 1100 ? 4 : w >= 600 ? 2 : 1},minmax(0,1fr))`
      }))()
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <SiteHeader v={v} active="About Us" />

        {/* Hero */}
        <section id="top" data-screen-label="Page hero" style={{ position: 'relative', overflow: 'hidden', background: '#fff', height: '400px' }}>
          <img src="/assets/jason-truck-about-hero.jpg" alt="Mid-Wisconsin Pump &amp; Well technician standing beside a pump service truck" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: v.heroOv }} />
          <div style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '200px', background: v.heroTop, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1280px', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '125px 24px 0' }}>
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>About Us</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: '#fff' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 24px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>About Us</span>
          </nav>
        </div>

        {/* Story */}
        <section id="story" data-screen-label="Story" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Our story</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', textWrap: 'balance' }}>From a garage shop to a family known name.</h2>
              <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty', maxWidth: '720px' }}>Two generations, one shop in Sparta, and the same promise since day one: <span style={{ whiteSpace: v.storyKeep }}>show up quickly, explain things clearly, and do the job right.</span></p>
            </div>
            <div style={{ position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: v.tl.lineLeft, width: '2px', marginLeft: '-1px', background: '#E4DACC' }} />
              <div style={{ display: 'grid', gridTemplateColumns: v.tl.cols, rowGap: v.tl.rowGap, alignItems: 'center', marginBottom: '72px' }}>
                <span aria-hidden="true" style={{ gridColumn: v.tl.dotCol, gridRow: v.tl.dotRow, justifySelf: 'center', alignSelf: v.tl.dotAlign, position: 'relative', top: v.tl.dotTop, width: '16px', height: '16px', borderRadius: '50%', background: '#C1272D', boxShadow: '0 0 0 6px #FBF8F3, 0 0 0 7px #EDE7DE, 0 0 0 13px #fff' }} />
                <div style={{ gridColumn: v.tl.thenText, gridRow: '1 / 2' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Then</div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '56px', lineHeight: '1', color: '#004580', margin: '12px 0 18px' }}>1977</div>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.2', margin: '0 0 10px' }}>Mike opens for business</h3>
                  <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#000' }}>Mike Schaitel started Mid-Wisconsin Pump &amp; Well in rural Sparta, first working out of his home and then building a garage shop next door.</p>
                </div>
                <div style={{ gridColumn: v.tl.thenImg, gridRow: v.tl.imgRow, borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.16)' }}>
                  <img src="/assets/mike-truck-1977-story.jpg" alt="Founder Mike Schaitel with an early Mid-Wis Pump &amp; Well service truck" width="1024" height="576" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: v.tl.cols, rowGap: v.tl.rowGap, alignItems: 'center' }}>
                <span aria-hidden="true" style={{ gridColumn: v.tl.dotCol, gridRow: v.tl.dotRow, justifySelf: 'center', alignSelf: v.tl.dotAlign, position: 'relative', top: v.tl.dotTop, width: '16px', height: '16px', borderRadius: '50%', background: '#C1272D', boxShadow: '0 0 0 6px #FBF8F3, 0 0 0 7px #EDE7DE, 0 0 0 13px #fff' }} />
                <div style={{ gridColumn: v.tl.nowText, gridRow: '1 / 2' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Now</div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: '56px', lineHeight: '1', color: '#004580', margin: '12px 0 18px' }}>2026</div>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.2', margin: '0 0 10px' }}>Jason carries it forward</h3>
                  <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#000' }}>Jason took over the business in 2003 and has grown it into a family known name. Today our crew runs two pump trucks and a service van from the same Sparta shop Mike built.</p>
                </div>
                <div style={{ gridColumn: v.tl.nowImg, gridRow: v.tl.imgRow, borderRadius: '16px', overflow: 'hidden', background: '#E7E1D8', boxShadow: '0 18px 40px rgba(0,69,128,.16)' }}>
                  <img src="/assets/eacc275d-c942-5ac9-a92a-e0d808618e4e.jpg" alt="Today's Mid-Wisconsin Pump &amp; Well pump service rig" width="932" height="456" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile workstation */}
        <section id="workstation" data-screen-label="Mobile workstation" style={{ position: 'relative', overflow: 'hidden', background: '#FBF8F3', color: '#000' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: v.mwCols }}>
            <div style={{ padding: '96px 56px 96px 24px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>The mobile workstation</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>A shop on wheels, built to our standards.</h2>
              <p style={{ margin: '0 0 36px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>Our pump truck is a mobile workstation, built with special additions and tools to get the job done right and safe. Every truck is stocked with common supplies, so most jobs are finished on the first visit.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '12px' }}>
                <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '10px', padding: '18px' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '36px', lineHeight: '1', color: '#004580' }}>2</div>
                  <div style={{ fontSize: '13.5px', color: '#000', marginTop: '6px' }}>Service pump trucks</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '10px', padding: '18px' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '36px', lineHeight: '1', color: '#004580' }}>1</div>
                  <div style={{ fontSize: '13.5px', color: '#000', marginTop: '6px' }}>Service utility van</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '10px', padding: '18px' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '36px', lineHeight: '1', color: '#004580' }}>24/7</div>
                  <div style={{ fontSize: '13.5px', color: '#000', marginTop: '6px' }}>Ready to roll</div>
                </div>
              </div>
            </div>
            <div style={{ position: v.mwImgPos, top: '0', right: '0', bottom: '0', left: v.mwImgLeft, minHeight: v.mwImgMin, background: '#C9DDF0' }}>
              <img src="/assets/truck-winter-mobile-workstation.jpg" alt="Mid-Wis Pump & Well pump truck on a winter job site" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 75%', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" data-screen-label="Values" style={{ background: '#fff', padding: '104px 24px 96px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', margin: '0 0 56px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>How we work</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 16px', textWrap: 'balance' }}>Service you can count on.</h2>
              <p style={{ margin: '0 0 0px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty', maxWidth: '720px' }}>We pride ourselves on effective results and strive for 100 percent customer satisfaction on every job.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: v.valueCols, gap: '24px' }}>
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-240192">
                <div style={{ position: 'relative', height: '210px', background: '#E7E1D8' }}>
                  <ImagePlaceholder compact />
                </div>
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', margin: '0' }}>Locally owned &amp; operated</h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>We care about the people of western Wisconsin. That means punctual service, timely repairs, and quality products at fair prices.</p>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-240192">
                <div style={{ position: 'relative', height: '210px', background: '#E7E1D8' }}>
                  <ImagePlaceholder compact />
                </div>
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', margin: '0' }}>Superior customer service</h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Clear communication at every step. We explain the issue and your options so you can make an informed decision that fits your budget.</p>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-240192">
                <div style={{ position: 'relative', height: '210px', background: '#E7E1D8' }}>
                  <ImagePlaceholder compact />
                </div>
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', margin: '0' }}>Licensed &amp; insured</h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>Our experienced technicians service all makes and models of well pumps and pressure tanks, with solutions we guarantee.</p>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,69,128,.06),0 8px 24px rgba(0,69,128,.06)', transition: 'transform .2s,box-shadow .2s' }} className="h-240192">
                <div style={{ position: 'relative', height: '210px', background: '#E7E1D8' }}>
                  <ImagePlaceholder compact />
                </div>
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '23px', lineHeight: '1.15', margin: '0' }}>Honest recommendations</h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#000' }}>We will never charge you for something you do not need. If a repair makes more sense than a replacement, we will tell you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="service-area" data-screen-label="Service area" style={{ background: '#FBF8F3', padding: '104px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: v.areaCols, gap: '48px 64px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Where we work</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Serving Sparta and the Coulee Region.</h2>
              <p style={{ margin: '0 0 28px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>From our shop on Icecap Road in Sparta, we have provided lasting solutions to hundreds of water systems across Monroe County and the surrounding areas.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <span style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Sparta</span>
                <span style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Monroe County</span>
                <span style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Coulee Region</span>
                <span style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '999px', padding: '9px 16px', fontSize: '15px', fontWeight: '600' }}>Western Wisconsin</span>
              </div>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#004580', padding: '13px 26px', borderRadius: '30px', border: '1.5px solid #004580', fontWeight: '700', fontSize: '15.5px', lineHeight: '1.2', transition: 'background .2s,color .2s' }} className="h-d10c8f">
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
