import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiArrowRight } from 'react-icons/fi'

const services = [
  { label: 'Home Security Systems', path: '/services/home-security' },
  { label: 'Commercial Security', path: '/services/commercial-security' },
  { label: 'Fire Safety Systems', path: '/services/fire-safety' },
  { label: 'Access Control', path: '/services/access-control' },
  { label: 'Smart Home Automation', path: '/services/smart-home' },
  { label: 'CCTV Surveillance', path: '/services/cctv-surveillance' },
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Mission & Vision', path: '/company/mission' },
  { label: 'Certifications & Awards', path: '/company/certifications' },
  { label: 'Why Choose Us', path: '/company/why-us' },
  { label: 'All Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#08142a', color: '#fff', borderTop: '3px solid #F5820D' }}>
      {/* Top CTA bar */}
      <div style={{ background: 'linear-gradient(90deg,#D96E00,#F5820D)', padding: '20px 24px' }}>
        <div className="footer-cta-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <FiPhone size={20} color="#fff" />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
              24/7 Emergency Response — <strong>(555) 000-0000</strong>
              <span style={{ fontSize: 12, fontWeight: 400, marginLeft: 8, opacity: .8 }}>(Demo number — not a real line)</span>
            </span>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: '#1a2332', padding: '9px 24px', fontWeight: 700, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '.5px', textTransform: 'uppercase' }}>
            Free Security Assessment <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 44 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <svg width="38" height="36" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 4L96 43H82V91H62V63H38V91H18V43H4L50 4Z" stroke="#F5820D" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 17, lineHeight: 1.05, fontFamily: "'Barlow Condensed',sans-serif" }}>Home Security</div>
                <div style={{ color: '#F5820D', fontWeight: 800, fontSize: 17, lineHeight: 1.05, fontFamily: "'Barlow Condensed',sans-serif" }}>Insights.</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Protecting homes and businesses with state-of-the-art security solutions across smart cameras, sensors, access control, and complete smart home ecosystems.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, background: 'rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.55)', textDecoration: 'none', transition: 'all .3s', borderRadius: 4 }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F5820D'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.07)'; e.currentTarget.style.color = 'rgba(255,255,255,.55)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: 10, borderBottom: '2px solid #F5820D', display: 'inline-block' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(s => (
                <li key={s.label}>
                  <Link to={s.path} style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 8, transition: 'all .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#F5820D'; e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.paddingLeft = '0' }}>
                    <span style={{ width: 5, height: 5, background: '#F5820D', borderRadius: '50%', flexShrink: 0 }} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: 10, borderBottom: '2px solid #F5820D', display: 'inline-block' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {company.map(c => (
                <li key={c.label}>
                  <Link to={c.path} style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 8, transition: 'all .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#F5820D'; e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.paddingLeft = '0' }}>
                    <span style={{ width: 5, height: 5, background: '#F5820D', borderRadius: '50%', flexShrink: 0 }} />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: 10, borderBottom: '2px solid #F5820D', display: 'inline-block' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: FiPhone, text: '(555) 000-0000\n(555) 000-0001' },
                { icon: FiMail, text: 'info@homesecurityinsights.com\nsupport@homesecurityinsights.com' },
                { icon: FiMapPin, text: '123 Security Avenue, Suite 400\nYour City, State 00000' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 32, height: 32, background: 'rgba(245,130,13,.15)', border: '1px solid rgba(245,130,13,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: 4 }}>
                    <Icon size={14} color="#F5820D" />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, lineHeight: 1.7 }}>
                    {text.split('\n').map((l, j) => <span key={j} style={{ display: 'block' }}>{l}</span>)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '18px 24px' }}>
        <div className="footer-bottom" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: 'rgba(255,255,255,.3)', fontSize: 13 }}>
            © 2025 Home Security Insights · homesecurityinsights.com · All rights reserved.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,.3)', fontSize: 12, textDecoration: 'none', transition: 'color .25s' }}
                onMouseEnter={e => e.target.style.color = '#F5820D'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.3)'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
