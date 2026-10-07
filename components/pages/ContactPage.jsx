'use client';

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import viewportWidth from '@/components/viewportWidth';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

const REQUIRED = ["fullName","phone","email","message"];

export default class ContactPage extends React.Component {
  state = { w: 1280, menu: false, scrolled: false, showTop: false, err: '', errs: {} };
  componentDidMount() {
    document.title = "Contact Us | Mid-Wisconsin Pump & Well";
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
        err: this.state.err, hasErr: !!this.state.err,
        ...Object.fromEntries(REQUIRED.flatMap(k => [
          ['err_' + k, !!this.state.errs[k]],
          ['msg_' + k, this.state.errs[k] || ''],
          ['bd_' + k, this.state.errs[k] ? '#C1272D' : '#D9D2C7'],
          ['clr_' + k, e => {
            if (!this.state.errs[k] || !e.currentTarget.value.trim()) return;
            const errs = { ...this.state.errs };
            delete errs[k];
            this.setState({ errs, err: Object.keys(errs).length ? 'Please complete the highlighted fields.' : '' });
          }]
        ])),
        submit: e => {
          e.preventDefault();
          const f = e.currentTarget.elements;
          const v = k => f[k].value.trim();
          const errs = {};
          if (!v('fullName')) errs.fullName = 'Please enter your name.';
          if (!v('phone')) errs.phone = 'Please enter your phone number.';
          if (!v('email')) errs.email = 'Please enter your email address.';
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) errs.email = 'Please enter a valid email address.';
          if (!v('message')) errs.message = 'Please tell us how we can help.';
          const bad = REQUIRED.filter(k => errs[k]);
          if (bad.length) {
            const empty = REQUIRED.every(k => !v(k));
            this.setState({ errs, err: empty ? 'The form is empty. Please fill in the required fields marked with an asterisk (*).' : 'Please complete the highlighted fields.' });
            f[bad[0]].focus();
            return;
          }
          this.setState({ err: '', errs: {} });
          window.location.assign('/contact/thank-you');
        }
      }))()
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
            <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: v.h1Fs, lineHeight: '1.06', letterSpacing: '-.02em', margin: '0', color: '#000', maxWidth: v.heroTextMax, textWrap: 'balance' }}>Contact</h1>
          </div>
        </section>
        <div data-crumb-bar="" style={{ background: 'rgb(246, 250, 254)' }}>
          <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: `28px ${v.gut} 0`, display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
            <a href="/" style={{ color: '#C1272D' }} className="h-702a41">Home</a>
            <span aria-hidden="true" style={{ color: '#8A8378' }}>/</span>
            <span style={{ color: '#000' }}>Contact</span>
          </nav>
        </div>

        {/* Contact details + form */}
        <section id="estimate" data-screen-label="Contact form" style={{ background: 'rgb(246, 250, 254)', padding: v.sp(104) }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: '48px 64px', alignItems: 'start' }}>
            <div style={{ background: '#fff', border: '1px solid #EDE7DE', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 2px 6px rgba(0,0,0,.04),0 18px 44px rgba(0,69,128,.1)' }}>
                  <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '28px', lineHeight: '1.1', margin: '0 0 8px' }}>Request a free estimate</h3>
                  <p style={{ margin: '0 0 16px', fontSize: '16px', lineHeight: '1.6', color: '#000' }}>Tell us what is going on and we will follow up with options.</p>
                  <div role="note" style={{ margin: '0 0 16px', padding: '14px 16px', borderRadius: '10px', background: '#FFF6D5', border: '1px solid #F1DE94' }}>
                    <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.55', color: '#000' }}><strong>Do not use this form if you have an emergency.</strong> It might take up to 72 hours for us to reply to your inquiry. If you have an emergency, call <a href="tel:6082695178" style={{ color: '#C1272D', fontWeight: '700', whiteSpace: 'nowrap', textDecoration: 'underline' }}>608-269-5178</a>.</p>
                  </div>
                  <p style={{ margin: '0 0 24px', fontSize: '14px', lineHeight: '1.5', color: '#000' }}>Fields marked with an asterisk (<span style={{ color: '#C1272D' }}>*</span>) are required.</p>
                  <form onSubmit={v.submit} noValidate={true} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#000' }}>
                      Name *
                      <input name="fullName" type="text" autoComplete="name" placeholder="Your name" onInput={v.clr_fullName} aria-invalid={v.err_fullName} style={{ width: '100%', padding: '13px 14px', border: `1px solid ${v.bd_fullName}`, borderRadius: '8px', background: '#fff', fontSize: '16px', color: '#000', outlineColor: '#004580' }} />
                      {v.err_fullName && (
                        <span role="alert" style={{ fontSize: '14px', fontWeight: '600', color: '#C1272D' }}>{v.msg_fullName}</span>
                      )}
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: '18px', alignItems: 'start' }}>
                      <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#000' }}>
                        Phone *
                        <input name="phone" type="tel" autoComplete="tel" placeholder="608-555-0123" onInput={v.clr_phone} aria-invalid={v.err_phone} style={{ width: '100%', padding: '13px 14px', border: `1px solid ${v.bd_phone}`, borderRadius: '8px', background: '#fff', fontSize: '16px', color: '#000', outlineColor: '#004580' }} />
                        {v.err_phone && (
                          <span role="alert" style={{ fontSize: '14px', fontWeight: '600', color: '#C1272D' }}>{v.msg_phone}</span>
                        )}
                      </label>
                      <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#000' }}>
                        Email *
                        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" onInput={v.clr_email} aria-invalid={v.err_email} style={{ width: '100%', padding: '13px 14px', border: `1px solid ${v.bd_email}`, borderRadius: '8px', background: '#fff', fontSize: '16px', color: '#000', outlineColor: '#004580' }} />
                        {v.err_email && (
                          <span role="alert" style={{ fontSize: '14px', fontWeight: '600', color: '#C1272D' }}>{v.msg_email}</span>
                        )}
                      </label>
                    </div>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#000' }}>
                      How can we help? *
                      <textarea name="message" rows="5" placeholder="No water, low pressure, a new install, an inspection..." onInput={v.clr_message} aria-invalid={v.err_message} style={{ width: '100%', padding: '13px 14px', border: `1px solid ${v.bd_message}`, borderRadius: '8px', background: '#fff', fontSize: '16px', color: '#000', outlineColor: '#004580', resize: 'vertical' }} />
                      {v.err_message && (
                        <span role="alert" style={{ fontSize: '14px', fontWeight: '600', color: '#C1272D' }}>{v.msg_message}</span>
                      )}
                    </label>
                    {v.hasErr && (
                      <p role="alert" style={{ margin: '0', fontSize: '15px', fontWeight: '600', color: '#C1272D' }}>{v.err}</p>
                    )}
                    <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#C1272D', color: '#fff', padding: '15px 22px', borderRadius: '30px', border: '0', fontWeight: '700', fontSize: '16px', cursor: 'pointer' }} className="h-bd9fe2">Send request</button>
                  </form>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D', marginBottom: '14px' }}>Get in touch</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '700', fontSize: '35px', lineHeight: '1.05', margin: '0 0 20px', textWrap: 'balance' }}>Reach us by phone or email.</h2>
              <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.65', color: '#000', textWrap: 'pretty' }}>To schedule a free estimate or learn more about our products, reach out any time. If you have no water, call now and we will get you back up and running.</p>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #DCE9F6' }}>
                <a href="tel:6082695178" style={{ display: 'flex', gap: '18px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #DCE9F6', color: '#000', transition: 'color .2s' }} className="h-6bd792">
                  <span style={{ width: '28px', color: '#004580', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>Phone</span>
                    <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.45', overflowWrap: 'anywhere' }}>608-269-5178</span>
                  </span>
                </a>
                <a href="tel:6082695178" style={{ display: 'flex', gap: '18px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #DCE9F6', color: '#000', transition: 'color .2s' }} className="h-6bd792">
                  <span style={{ width: '28px', color: '#C1272D', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3 2 21h20L12 3z" />
                      <path d="M12 10v5" />
                      <path d="M12 18h.01" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>24/7 emergency service</span>
                    <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.45', overflowWrap: 'anywhere' }}>Available after hours, weekends, and holidays</span>
                  </span>
                </a>
                <div style={{ display: 'flex', gap: '18px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #DCE9F6' }}>
                  <span style={{ width: '28px', color: '#004580', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>Business hours</span>
                    <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.45', overflowWrap: 'anywhere' }}>Monday to Friday, 8:00 am to 5:30 pm</span>
                  </span>
                </div>
                <a href="mailto:randismidwispump@outlook.com" style={{ display: 'flex', gap: '18px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #DCE9F6', color: '#000', transition: 'color .2s' }} className="h-6bd792">
                  <span style={{ width: '28px', color: '#004580', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 7 9-7" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>Email</span>
                    <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.45', overflowWrap: 'anywhere' }}>randismidwispump@outlook.com</span>
                  </span>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&amp;query=17660+Icecap+Rd%2C+Sparta%2C+WI+54656" target="_blank" rel="noopener" style={{ display: 'flex', gap: '18px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #DCE9F6', color: '#000', transition: 'color .2s' }} className="h-6bd792">
                  <span style={{ width: '28px', color: '#004580', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '800', letterSpacing: '.14em', textTransform: 'uppercase', color: '#C1272D' }}>Shop address</span>
                    <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.45', overflowWrap: 'anywhere' }}>17660 Icecap Rd.<br />Sparta, WI 54656</span>
                  </span>
                </a>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginTop: '28px', padding: '18px 20px', borderRadius: '12px', background: '#fff', border: '1px solid #DCE9F6' }}>
                <span style={{ color: '#004580', flex: 'none', marginTop: '2px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </span>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#000' }}><strong>Want to pay your invoice online?</strong> Call our office and we will send a secure payment link directly to your email.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" data-screen-label="Map" style={{ padding: v.sp(0, 104), background: 'rgb(246, 250, 254)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EDE7DE', height: '420px', background: '#E7E1D8' }}>
            <iframe title="Map to Mid-Wisconsin Pump &amp; Well, 17660 Icecap Rd, Sparta, WI" src="https://www.google.com/maps?q=17660%20Icecap%20Rd%2C%20Sparta%2C%20WI%2054656&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '100%', border: '0', display: 'block' }} />
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
        <BackToTop v={v} />
      </div>
    );
  }
}
