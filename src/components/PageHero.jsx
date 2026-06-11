import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function PageHero({ title, subtitle, breadcrumbs = [], bg }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `url(${bg})`,
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <div style={{ width: 36, height: 2, background: '#F5820D' }} />
          <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Home Security Insights
          </span>
        </div>
        <h1 style={{ color: '#fff', fontSize: 'clamp(32px,5vw,54px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, fontFamily: "'Barlow Condensed',sans-serif" }}>
          {title}
        </h1>
        {subtitle && <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, maxWidth: 560, lineHeight: 1.7, marginBottom: 20 }}>{subtitle}</p>}
        {breadcrumbs.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,.55)', fontSize: 13, textDecoration: 'none' }}>Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <FiChevronRight size={12} color="rgba(255,255,255,.4)" />
                {b.path ? (
                  <Link to={b.path} style={{ color: 'rgba(255,255,255,.55)', fontSize: 13, textDecoration: 'none' }}>{b.label}</Link>
                ) : (
                  <span style={{ color: '#F5820D', fontSize: 13, fontWeight: 600 }}>{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
