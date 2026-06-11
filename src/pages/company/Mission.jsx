import { Link } from 'react-router-dom'
import { FiArrowRight, FiEye, FiTarget, FiHeart, FiZap, FiShield, FiUsers } from 'react-icons/fi'
import PageHero from '../../components/PageHero'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const VALUES = [
  { icon: FiShield, title: 'Integrity & Transparency', desc: 'We are always honest about what our technology can and cannot do. No overselling, no hidden fees — just clear, trustworthy advice.' },
  { icon: FiHeart, title: 'Family-First Philosophy', desc: 'Every product recommendation and installation decision starts with one question: would we put this in our own family\'s home?' },
  { icon: FiZap, title: 'Relentless Innovation', desc: 'We invest 15% of annual revenue in research and development, ensuring our clients always have access to the latest advances in home security.' },
  { icon: FiUsers, title: 'Community Commitment', desc: 'We dedicate 1% of profits to neighbourhood watch programmes and provide free security consultations to community centres.' },
  { icon: FiTarget, title: 'Precision & Excellence', desc: 'Our certified engineers follow industry-leading installation standards, with every system fully tested before we leave your property.' },
  { icon: FiEye, title: 'Always Watching, Always Ready', desc: 'Our UL-listed monitoring centre operates 24/7/365, with a guaranteed 4-minute average emergency response time.' },
]

export default function Mission() {
  useScrollReveal()
  return (
    <>
      <PageHero
        title="Our Mission & Vision"
        subtitle="We believe every family and business deserves access to professional-grade security technology — and the peace of mind that comes with it."
        bg="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Company', path: '/about' }, { label: 'Mission & Vision' }]}
      />

      {/* Mission statement */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Our Mission</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Making Professional Security Accessible To Every Home & Business
            </h2>
            <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
              Home Security Insights exists to close the gap between enterprise-level security technology and the everyday homeowner or small business owner. For too long, professional-grade protection was available only to those who could afford premium prices and navigate complex systems.
            </p>
            <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
              Our mission is to change that — by combining the latest smart home and security technology with certified expert installation and ongoing 24/7 monitoring, at prices and with service levels that every household can access and rely on.
            </p>
            <div style={{ background: '#FEF3E6', border: '1px solid #FBCFA0', borderLeft: '4px solid #F5820D', padding: '20px 24px' }}>
              <p style={{ color: '#1a2332', fontSize: 16, fontStyle: 'italic', fontWeight: 600, lineHeight: 1.7 }}>
                "To deliver world-class security solutions that give every family and business the confidence to live and work without fear."
              </p>
              <div style={{ color: '#F5820D', fontWeight: 700, fontSize: 13, marginTop: 10 }}>— Home Security Insights Mission Statement</div>
            </div>
          </div>
          <div className="reveal-right" style={{ position: 'relative' }}>
            <div style={{ height: 460, overflow: 'hidden', background: '#ddd' }}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" alt="Smart home mission" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#F5820D', padding: '22px 28px' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1 }}>2004</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>Year Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: '90px 24px', background: 'linear-gradient(135deg,#FEF3E6 0%,#FFF3E8 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div className="reveal-left" style={{ position: 'relative' }}>
            <div style={{ height: 420, overflow: 'hidden', background: '#ddd' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Smart home vision" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }} />
            </div>
          </div>
          <div className="reveal-right">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Our Vision</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              A World Where Security Is Invisible, Intelligent & Always On
            </h2>
            <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
              We envision a future where home and business security operates seamlessly in the background — so integrated into the fabric of your daily life that you never have to consciously think about it, yet always know you are protected.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { year: '2025', goal: 'AI-powered predictive threat detection deployed in 50,000+ homes' },
                { year: '2027', goal: 'Fully autonomous security response integrated with smart home ecosystems' },
                { year: '2030', goal: 'Universal security coverage — every home, every neighbourhood, every community' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: '#F5820D', color: '#fff', padding: '4px 12px', fontWeight: 800, fontSize: 13, fontFamily: "'Barlow Condensed',sans-serif", flexShrink: 0, letterSpacing: '.5px' }}>{m.year}</div>
                  <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.65, paddingTop: 3 }}>{m.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>What Drives Us</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Core Values That Guide Every Decision
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {VALUES.map((v, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ padding: 28, border: '1px solid #e8edf5', background: '#fff', borderBottom: '3px solid transparent', transition: 'all .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#F5820D'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.08)'; e.currentTarget.style.transform = 'translateY(-6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ width: 48, height: 48, background: '#FEF3E6', border: '1px solid #FBCFA0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, borderRadius: 8 }}>
                  <v.icon size={22} color="#F5820D" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#D96E00,#F5820D)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Join 15,000+ Families Who Trust Home Security Insights
          </h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, marginBottom: 32 }}>
            Live our mission in your home. Schedule a free security assessment today.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#1a2332', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              Get Free Assessment <FiArrowRight size={16} />
            </Link>
            <Link to="/company/why-us" style={{ background: 'rgba(0,0,0,.15)', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center', border: '2px solid rgba(255,255,255,.4)' }}>
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
