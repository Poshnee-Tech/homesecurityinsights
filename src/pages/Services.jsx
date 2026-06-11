import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICES = [
  {
    icon: '🏠',
    title: 'Home Security Systems',
    path: '/services/home-security',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=80',
    desc: 'Complete residential security with smart cameras, motion sensors, glass break detectors and 24/7 professional monitoring — all controlled from your smartphone.',
    features: ['HD indoor/outdoor cameras', 'Smart doorbell with video', 'Window & door sensors', '24/7 live monitoring', 'Mobile app control', 'Insurance discount eligible'],
  },
  {
    icon: '🏢',
    title: 'Commercial Security',
    path: '/services/commercial-security',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
    desc: 'Enterprise-grade protection for offices, retail, warehouses and mixed-use facilities — scalable systems with centralised management and detailed reporting.',
    features: ['Multi-site management', 'Integrated alarm systems', 'Perimeter detection', 'Video analytics', 'Remote guard tours', 'Incident reporting dashboard'],
  },
  {
    icon: '🔥',
    title: 'Fire Safety Systems',
    path: '/services/fire-safety',
    img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80',
    desc: 'Life-saving fire detection and suppression systems designed to meet all local codes — from addressable alarm panels to full suppression engineering.',
    features: ['Addressable fire panels', 'Heat & smoke detectors', 'Carbon monoxide alerts', 'Emergency evacuation plans', 'Suppression systems', 'Annual compliance testing'],
  },
  {
    icon: '🔒',
    title: 'Access Control',
    path: '/services/access-control',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80',
    desc: 'Control who enters every door with biometric readers, smart keycards, PIN pads and mobile credentials — with full audit trail and time-based access rules.',
    features: ['Biometric fingerprint/face ID', 'Keycard & PIN systems', 'Time-based access rules', 'Full audit trail logs', 'Remote unlock via app', 'Visitor management portal'],
  },
  {
    icon: '💡',
    title: 'Smart Home Automation',
    path: '/services/smart-home',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    desc: 'Transform your home into an intelligent living space — automate lighting, climate, locks and entertainment with seamless security integration.',
    features: ['Smart lighting control', 'Thermostat automation', 'Automated door locks', 'Scene & schedule programming', 'Voice assistant integration', 'Energy usage reporting'],
  },
  {
    icon: '📷',
    title: 'CCTV Surveillance',
    path: '/services/cctv-surveillance',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80',
    desc: 'Professional CCTV design, installation and maintenance with 4K resolution cameras, AI-powered analytics and cloud or on-site storage options.',
    features: ['4K Ultra HD cameras', 'AI motion analytics', 'Night vision (0 lux)', 'Cloud or NVR storage', 'Remote live viewing', 'Facial recognition option'],
  },
]

const PROCESS = [
  { step: '01', title: 'Free Assessment', desc: 'Our engineer visits your property, identifies vulnerabilities and recommends solutions — at no cost to you.' },
  { step: '02', title: 'Custom Design', desc: 'We design a system tailored to your exact layout, threat profile, budget and technology preferences.' },
  { step: '03', title: 'Professional Install', desc: 'Certified technicians install and configure every component to the highest standards, with minimal disruption.' },
  { step: '04', title: '24/7 Monitoring', desc: 'Our UL-listed monitoring centre watches your property around the clock, responding instantly to any alert.' },
]

export default function Services() {
  useScrollReveal()
  return (
    <>
      <PageHero
        title="Our Security Services"
        subtitle="From residential alarm systems to enterprise surveillance networks — complete security solutions designed around your unique needs."
        bg="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Intro */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>What We Offer</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Comprehensive Security Solutions For Every Need
            </h2>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8 }}>
              Whether you're protecting a studio apartment or a multi-site enterprise, Home Security Insights has the technology, expertise and support infrastructure to deliver a solution that works — today and for years to come.
            </p>
          </div>
          <div className="reveal-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { num: '6', label: 'Core Service Categories' },
              { num: '400+', label: 'Certified Engineers' },
              { num: '50K+', label: 'Installs Nationwide' },
              { num: '24/7', label: 'Monitoring & Support' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#f8f9fa', padding: '24px 20px', borderLeft: '3px solid #F5820D' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 800, color: '#F5820D', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: '#555', fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '0 24px 90px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className={`reveal alt-row`} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 420px' : '420px 1fr', gap: 0, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,.08)', flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}>
              <div style={{ padding: '44px 44px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <h2 style={{ fontWeight: 800, fontSize: 28, marginBottom: 14, fontFamily: "'Barlow Condensed',sans-serif" }}>{s.title}</h2>
                <p style={{ color: '#555', fontSize: 14.5, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 28 }}>
                  {s.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                      <FiCheckCircle size={14} color="#F5820D" />
                      <span style={{ fontSize: 13, color: '#333' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={s.path} className="btn-green" style={{ alignSelf: 'flex-start' }}>
                  Learn More <FiArrowRight size={15} />
                </Link>
              </div>
              <div className="img-zoom" style={{ minHeight: 340, background: '#ddd', order: i % 2 === 1 ? 1 : 2 }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 24px', background: '#1a1c1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Simple 4-Step Process</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              How We Secure Your Property
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, position: 'relative' }}>
            {PROCESS.map((p, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ textAlign: 'center', padding: '36px 24px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', transition: 'all .3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,130,13,.08)'; e.currentTarget.style.borderColor = 'rgba(245,130,13,.3)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)' }}>
                <div style={{ width: 60, height: 60, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#fff' }}>
                  {p.step}
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#F5820D' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 16, marginBottom: 32 }}>
            Our experts will assess your specific risks and recommend the right combination of services for your property and budget.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#1a1c1e', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              Get Free Assessment <FiArrowRight size={16} />
            </Link>
            <a href="tel:+15550000000" style={{ background: 'rgba(0,0,0,.15)', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center', border: '2px solid rgba(255,255,255,.4)' }}>
              (555) 000-0000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
