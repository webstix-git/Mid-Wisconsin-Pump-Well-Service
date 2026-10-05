export default function ImagePlaceholder({ compact = false }) {
  return (
    <div role="img" aria-label="Mid-Wisconsin Pump & Well Services, image coming soon" style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: compact ? '8px' : '12px', padding: '24px', textAlign: 'center', background: '#EDEDED' }}>
      <svg width={compact ? '36' : '48'} height={compact ? '36' : '48'} viewBox="0 0 24 24" fill="none" stroke="#004580" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: '.45' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
      </svg>
      <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: '800', fontSize: compact ? '18px' : '22px', lineHeight: '1.2', color: '#004580' }}>Mid-Wisconsin Pump &amp; Well Services</div>
      <div style={{ fontSize: compact ? '11.5px' : '12.5px', fontWeight: '800', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C1272D' }}>Image coming soon</div>
    </div>
  );
}
