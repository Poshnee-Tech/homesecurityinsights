import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPhone, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const NAV = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Mission & Vision', path: '/company/mission' },
      { label: 'Certifications & Awards', path: '/company/certifications' },
      { label: 'Why Choose Us', path: '/company/why-us' },
    ],
  },
  {
    label: 'Services & Industries',
    children: [
      { label: 'Home Security Systems', path: '/services/home-security' },
      { label: 'Commercial Security', path: '/services/commercial-security' },
      { label: 'Fire Safety Systems', path: '/services/fire-safety' },
      { label: 'Access Control', path: '/services/access-control' },
      { label: 'Smart Home Automation', path: '/services/smart-home' },
      { label: 'CCTV Surveillance', path: '/services/cctv-surveillance' },
      { label: 'View All Services', path: '/services' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openAcc, setOpenAcc] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setOpenAcc(null) }, [pathname])

  const isActive = (item) => {
    if (item.path) return pathname === item.path
    return item.children?.some(c => pathname.startsWith(c.path) && c.path !== '/')
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(8,20,42,.98)' : 'rgba(8,20,42,.90)',
      backdropFilter: 'blur(20px)',
      boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,.35)' : 'none',
      transition: 'all .35s ease',
      borderBottom: scrolled ? '1px solid rgba(245,130,13,.2)' : '1px solid rgba(255,255,255,.05)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <svg width="38" height="36" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 4L96 43H82V91H62V63H38V91H18V43H4L50 4Z" stroke="#F5820D" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: 17, lineHeight: 1.05, fontFamily: "'Barlow Condensed',sans-serif" }}>Home Security</div>
              <div style={{ color: '#F5820D', fontWeight: 800, fontSize: 17, lineHeight: 1.05, fontFamily: "'Barlow Condensed',sans-serif" }}>Insights.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map(item => (
              <div key={item.label} className={item.children ? 'has-dropdown' : ''} style={{ position: 'relative' }}>
                {item.path ? (
                  <Link to={item.path} style={{
                    color: isActive(item) ? '#F5820D' : 'rgba(255,255,255,.88)',
                    textDecoration: 'none', fontSize: 14, fontWeight: 600,
                    padding: '8px 16px', display: 'block', letterSpacing: '.2px',
                    transition: 'color .25s', position: 'relative',
                  }}>
                    {item.label}
                    {isActive(item) && <span style={{ position: 'absolute', bottom: 0, left: 16, right: 16, height: 2, background: '#F5820D', borderRadius: 1 }} />}
                  </Link>
                ) : (
                  <>
                    <button style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: isActive(item) ? '#F5820D' : 'rgba(255,255,255,.88)',
                      fontSize: 14, fontWeight: 600, padding: '8px 16px',
                      display: 'flex', alignItems: 'center', gap: 5,
                      fontFamily: "'Barlow',sans-serif", letterSpacing: '.2px',
                      transition: 'color .25s',
                    }}>
                      {item.label}
                      <FiChevronDown size={13} />
                    </button>
                    <div className="dropdown-menu">
                      {item.children.map(c => (
                        <Link key={c.label} to={c.path}>
                          <span className="dot" />
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="tel:+15550000000" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff' }} className="desktop-nav">
              <div style={{ width: 34, height: 34, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FiPhone size={14} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 9.5, color: '#F5820D', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>24/7 Support</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>(555) 000-0000</div>
              </div>
            </a>
            <Link to="/contact" className="btn-green" style={{ fontSize: 12.5, padding: '10px 22px' }}>
              Get A Quote
            </Link>
            <button className="mobile-nav-btn" onClick={() => setMobileOpen(p => !p)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-nav-menu" style={{
        background: '#08142a', borderTop: '1px solid rgba(245,130,13,.15)',
        maxHeight: mobileOpen ? 680 : 0, overflow: 'hidden', transition: 'max-height .4s ease',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column' }}>
          {NAV.map(item => (
            <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              {item.path ? (
                <Link to={item.path} style={{ display: 'block', color: isActive(item) ? '#F5820D' : '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '13px 0' }}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <button onClick={() => setOpenAcc(openAcc === item.label ? null : item.label)} style={{ width: '100%', background: 'none', border: 'none', color: '#fff', fontSize: 15, fontWeight: 600, padding: '13px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: "'Barlow',sans-serif" }}>
                    {item.label}
                    <FiChevronDown size={16} style={{ transform: openAcc === item.label ? 'rotate(180deg)' : 'none', transition: 'transform .3s', color: '#F5820D' }} />
                  </button>
                  <div className={`mob-acc ${openAcc === item.label ? 'open' : ''}`} style={{ paddingLeft: 16, paddingBottom: openAcc === item.label ? 8 : 0 }}>
                    {item.children.map(c => (
                      <Link key={c.label} to={c.path} style={{ display: 'block', color: '#F5820D', textDecoration: 'none', fontSize: 13, fontWeight: 500, padding: '7px 0' }}>
                        → {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div style={{ paddingTop: 16 }}>
            <a href="tel:+15550000000" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)', marginBottom: 12 }}>
              <FiPhone size={16} color="#F5820D" />
              <span style={{ fontWeight: 700, fontSize: 14 }}>(555) 000-0000</span>
            </a>
            <Link to="/contact" className="btn-green" style={{ width: '100%', justifyContent: 'center', clipPath: 'none' }}>Get A Free Quote</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
