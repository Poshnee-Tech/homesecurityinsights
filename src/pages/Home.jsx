import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiArrowLeft, FiCheckCircle, FiShield, FiCamera, FiZap,
  FiLock, FiBell, FiPlay, FiPhone, FiMail, FiStar,
  FiWifi, FiThermometer, FiAlertTriangle,
} from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80',
    tag: 'Home Security Products Everyone Can Install, Afford, And Use!',
    title: ['Smart Security', 'Systems For The', 'Modern World'],
    text: 'We provide security solutions for residential, commercial and industrial clients — featuring the largest assortment of cameras, alarms and smart monitoring systems.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80',
    tag: 'Professional Installation & 24/7 Remote Monitoring Services',
    title: ['Advanced Protection', 'For Your Home &', 'Business'],
    text: 'Our certified security engineers design fully customised systems to protect what matters most — your family, your property, and your peace of mind.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    tag: 'Trusted By Over 15,000 Families & Businesses Nationwide',
    title: ['Complete Security', 'Solutions From A', 'Trusted Partner'],
    text: 'From smart home automation to enterprise-grade surveillance, Home Security Insights delivers integrated solutions with real-time monitoring and rapid emergency response.',
  },
]

const SERVICES = [
  { icon: '🏠', title: 'Smarter Home Security', desc: 'Intelligent sensor networks, smart cameras and automated responses that keep your home protected around the clock.', path: '/services/home-security' },
  { icon: '🔥', title: 'Fire Detection & Life Safety', desc: 'Advanced heat and smoke detectors, suppression systems and emergency response protocols to protect lives.', path: '/services/fire-safety', active: true },
  { icon: '⚡', title: 'Smart Home Systems', desc: 'Automate lighting, locks, thermostats and cameras from a single app — living smarter starts here.', path: '/services/smart-home' },
  { icon: '🔒', title: 'Access Control Installation', desc: 'Biometric scanners, keycard systems, and smart locks that control exactly who enters your space.', path: '/services/access-control' },
]

const INDUSTRIES = [
  { num: '01', title: 'Pharmaceutics\n& Biotech', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80', desc: 'Protecting sensitive research labs, controlled substances and high-value pharmaceutical inventories with advanced surveillance and access management systems that meet strict compliance standards.', features: ['Multi-factor authentication', 'Environmental monitoring', 'Controlled area surveillance', '24/7 incident response'] },
  { num: '02', title: 'Manufacturing\n& Logistics', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80', desc: 'Comprehensive security for large-scale manufacturing floors, warehouses and supply chain facilities — protecting equipment, inventory and personnel across every square metre.', features: ['Perimeter intrusion detection', 'Forklift safety monitoring', 'Inventory protection systems', 'Worker safety alerts'] },
  { num: '03', title: 'Commercial\nBuildings', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', desc: 'End-to-end security infrastructure for office buildings, retail spaces and mixed-use developments — visitor management, access control and integrated CCTV coverage.', features: ['Lobby access management', 'Tenant security zones', 'Elevator surveillance', 'After-hours monitoring'] },
  { num: '04', title: 'Educational\nBuildings', img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80', desc: 'Creating safe learning environments with discreet but effective security — panic buttons, visitor screening, perimeter monitoring and rapid lockdown capabilities.', features: ['Student & visitor screening', 'Campus-wide CCTV', 'Emergency lockdown system', 'Automated safety alerts'] },
  { num: '05', title: 'Healthcare\nBuildings', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80', desc: 'Specialised security for hospitals, clinics and care facilities — safeguarding patients, staff and equipment while maintaining compliance with healthcare security regulations.', features: ['Patient safety monitoring', 'Medication room security', 'Staff duress systems', 'HIPAA-compliant surveillance'] },
]

const STATS = [
  { num: '20+', label: 'Years of Experience' },
  { num: '15K+', label: 'Clients Served' },
  { num: '50K+', label: 'Installations Complete' },
  { num: '4 Min', label: 'Avg. Response Time' },
]

const DEVICES = [
  { icon: '📷', title: 'Smart Security Cameras', desc: '4K HDR indoor & outdoor cameras with AI motion detection, night vision and two-way audio.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', path: '/services/cctv-surveillance' },
  { icon: '🔔', title: 'Video Doorbells', desc: 'See, hear and speak to anyone at your door from your phone — in real time, day or night.', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80', path: '/services/home-security' },
  { icon: '🔐', title: 'Smart Locks & Deadbolts', desc: 'Keypad, fingerprint and app-controlled locks that let you grant access remotely and log every entry.', img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80', path: '/services/access-control' },
  { icon: '🚪', title: 'Door & Window Sensors', desc: 'Instant alerts the moment any door or window is opened unexpectedly — day or night.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', path: '/services/home-security' },
  { icon: '🏃', title: 'Motion Sensors & PIR', desc: 'Precision passive infrared sensors that detect movement in every room, hallway and outdoor zone.', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80', path: '/services/home-security' },
  { icon: '💨', title: 'Smoke & CO Detectors', desc: 'Interconnected smart detectors for smoke, heat and carbon monoxide with instant monitoring alerts.', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80', path: '/services/fire-safety' },
  { icon: '💧', title: 'Flood & Water Sensors', desc: 'Tiny sensors placed near appliances and pipes that alert you before water damage gets costly.', img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80', path: '/services/home-security' },
  { icon: '🌡️', title: 'Smart Thermostat', desc: 'AI-controlled climate management integrated with your security schedule to save energy and detect anomalies.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80', path: '/services/smart-home' },
  { icon: '🏠', title: 'Smart Garage Monitor', desc: 'Know if your garage door is left open. Open or close it remotely from anywhere in the world.', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80', path: '/services/smart-home' },
  { icon: '💡', title: 'Smart Security Lights', desc: 'Motion-activated smart lighting that deters intruders and integrates with your camera and alarm system.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', path: '/services/smart-home' },
]

const TESTIMONIALS = [
  { name: 'Robert Harrington', role: 'Homeowner, San Francisco', text: 'Home Security Insights transformed how we think about home security. The smart camera system and instant mobile alerts give us genuine peace of mind every single day.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { name: 'Sarah Mitchell', role: 'CEO, Mitchell Logistics', text: 'After Home Security Insights upgraded our warehouse security, we eliminated equipment theft completely. The ROI was clear within the first month. Exceptional service.', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { name: 'Dr. James Caldwell', role: 'Director, Metro Health Clinic', text: 'The access control and CCTV integration Home Security Insights installed meets our compliance requirements perfectly. Their team was professional, efficient and thorough.', rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
]

const RECENT = [
  { label: 'Luxury Residence', tag: 'Home Security', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80' },
  { label: 'Tech Campus HQ', tag: 'Commercial CCTV', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { label: 'City Medical Centre', tag: 'Access Control', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80' },
  { label: 'Grade School Campus', tag: 'Education Security', img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80' },
  { label: 'Distribution Hub', tag: 'Warehouse Security', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80' },
  { label: 'Smart Villa Project', tag: 'Smart Home', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' },
]

export default function Home() {
  useScrollReveal()
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ProtectionSection />
      <DeviceEcosystem />
      <IndustriesSection />
      <ServicesGrid />
      <IntegratedSecurity />
      <BestPracticesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <RecentProjects />
      <ContactSection />
      <TrustTicker />
    </>
  )
}

/* ═══════════════════════════════ HERO ═══════════════════════════════ */
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => (p + 1) % SLIDES.length)
      setKey(p => p + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const goTo = (i) => { setCurrent(i); setKey(p => p + 1) }

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 680, overflow: 'hidden' }}>
      {SLIDES.map((s, i) => (
        <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === current ? 1 : 0, transition: 'opacity .9s ease', backgroundImage: `url(${s.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,42,.94) 45%,rgba(8,20,42,.6) 100%)' }} />
        </div>
      ))}

      <div style={{ position: 'relative', zIndex: 5, maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="hero-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'center', width: '100%', paddingTop: 72 }}>

          <div key={key}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, animation: 'fadeUp .6s ease forwards' }}>
              <div style={{ width: 40, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{SLIDES[current].tag}</span>
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(38px,5.5vw,68px)', fontWeight: 800, lineHeight: 1.08, marginBottom: 24, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: '-.5px', animation: 'fadeUp .7s .1s ease forwards', opacity: 0 }}>
              {SLIDES[current].title.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 16, lineHeight: 1.75, maxWidth: 500, marginBottom: 36, animation: 'fadeUp .7s .2s ease forwards', opacity: 0 }}>
              {SLIDES[current].text}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp .7s .3s ease forwards', opacity: 0 }}>
              <Link to="/services" className="btn-green">Explore Our Services <FiArrowRight size={15} /></Link>
              <Link to="/about" className="btn-outline-white">More About Us</Link>
            </div>
          </div>

          <div className="hero-right-panel" style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'fadeRight .8s .2s ease forwards', opacity: 0 }}>
            <div style={{ background: '#fff', padding: 24, borderLeft: '4px solid #F5820D', boxShadow: '0 24px 56px rgba(0,0,0,.3)' }}>
              <div className="img-zoom" style={{ height: 140, background: '#eee', marginBottom: 16 }}>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" alt="Security" />
              </div>
              <h3 style={{ color: '#1a1c1e', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Custom Alerts For Friends And Family</h3>
              <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65 }}>Door, window and glass break detectors designed to provide advanced home protection.</p>
              <Link to="/services/home-security" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#F5820D', fontSize: 13, fontWeight: 700, marginTop: 12, textDecoration: 'none' }}>
                Protect Your Home <FiArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[{ icon: '🔒', text: 'Smart Locks' }, { icon: '📷', text: '4K Cameras' }, { icon: '🔔', text: '24/7 Alerts' }].map((b, i) => (
                <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.15)', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{b.icon}</div>
                  <div style={{ color: '#fff', fontSize: 11, fontWeight: 600 }}>{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 10 }}>
        {SLIDES.map((_, i) => <div key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />)}
      </div>
      <button onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,.5)', border: '1px solid rgba(255,255,255,.2)', color: '#fff', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .3s' }}>
        <FiArrowLeft size={20} />
      </button>
      <button onClick={() => goTo((current + 1) % SLIDES.length)} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#F5820D', border: 'none', color: '#fff', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .3s' }}>
        <FiArrowRight size={20} />
      </button>
    </section>
  )
}

/* ═══════════════════════════════ STATS ══════════════════════════════ */
function StatsBar() {
  return (
    <div style={{ background: 'linear-gradient(135deg,#D96E00,#F5820D)', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 24 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '8px 0', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.3)' : 'none' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 56, fontWeight: 800, lineHeight: 1, color: '#fff' }}>{s.num}</div>
            <div style={{ color: 'rgba(255,255,255,.85)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═════════════════════════════ PROTECTION ═══════════════════════════ */
function ProtectionSection() {
  const features = ['Smart Home Security', 'Doorbell Video Cameras', 'Professional Installation', 'Burglary Sensor Detection', 'In-Home Consultation', '24/7 Alarm Monitoring']
  return (
    <section style={{ padding: '90px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
        <div className="reveal-left">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Complete Protection</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
            Protection Against Intruders, Fires, Water &amp; More For Every Window, Room And Door.
          </h2>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
            Helping families live intelligently means constantly bringing customers the latest in security technology. As one of the premier providers of smart home technology, we are recognised for our products, innovations and customer satisfaction.
          </p>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
            Don't worry about fitting out. Our security experts will assess your system, advise you and show you how to use it.
          </p>
          <p style={{ color: '#1a1c1e', fontWeight: 600, fontSize: 14, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.5px' }}>More Protection With Monitoring:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px', marginBottom: 32 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FiCheckCircle size={16} color="#F5820D" />
                <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-green">Products And Solutions <FiArrowRight size={15} /></Link>
            <Link to="/contact" className="btn-outline-dark">Contact Us</Link>
          </div>
        </div>

        <div className="reveal-right" style={{ position: 'relative' }}>
          <div className="img-zoom" style={{ height: 480, background: '#111' }}>
            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" alt="CCTV surveillance camera" />
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 24, background: '#fff', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,.15)', display: 'flex', gap: 12, alignItems: 'center' }}>
            <button className="play-btn" style={{ width: 48, height: 48 }}>
              <FiPlay size={18} color="#fff" style={{ marginLeft: 3 }} />
            </button>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1c1e' }}>Watch Our Intro</div>
              <div style={{ fontSize: 12, color: '#888' }}>2 min overview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════ DEVICE ECOSYSTEM ══════════════════════════ */
function DeviceEcosystem() {
  return (
    <section style={{ padding: '90px 24px', background: '#f4f7fb' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Complete Device Ecosystem</span>
            <div style={{ width: 30, height: 2, background: '#F5820D' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 14 }}>
            Every Smart Security Device Your Home Needs
          </h2>
          <p style={{ color: '#4b5570', fontSize: 16, maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            From cameras and doorbells to water sensors and smart thermostats — we supply, install and connect every device into one unified security ecosystem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 20 }}>
          {DEVICES.map((d, i) => (
            <Link key={i} to={d.path} className={`reveal d${Math.min(i + 1, 6)}`} style={{ textDecoration: 'none', display: 'block', background: '#fff', border: '1px solid #e8edf5', overflow: 'hidden', transition: 'all .35s', borderBottom: '3px solid transparent' }}
              onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#F5820D'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div className="img-zoom" style={{ height: 160, background: '#ddd' }}>
                <img src={d.img} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{d.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1a2332', lineHeight: 1.2 }}>{d.title}</h3>
                </div>
                <p style={{ color: '#4b5570', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{d.desc}</p>
                <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Learn More <FiArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }} className="reveal">
          <Link to="/services" className="btn-green">
            Explore All Products & Solutions <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═════════════════════════════ INDUSTRIES ═══════════════════════════ */
function IndustriesSection() {
  const [active, setActive] = useState(0)
  const ind = INDUSTRIES[active]
  return (
    <section style={{ padding: '90px 24px', background: '#0f2035' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Industries We Serve</span>
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", maxWidth: 520 }}>
            Protect What Matters Most!
          </h2>
        </div>

        <div className="industries-tabs" style={{ display: 'flex', gap: 4, marginBottom: 40, flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,.1)', paddingBottom: 0 }}>
          {INDUSTRIES.map((ind, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ background: i === active ? '#F5820D' : 'rgba(255,255,255,.06)', border: 'none', color: i === active ? '#fff' : 'rgba(255,255,255,.6)', padding: '16px 22px', cursor: 'pointer', fontFamily: "'Barlow',sans-serif", fontWeight: 700, fontSize: 13, transition: 'all .3s', textAlign: 'left', lineHeight: 1.3, borderBottom: i === active ? '3px solid #D96E00' : '3px solid transparent' }}>
              <div style={{ color: i === active ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.35)', fontSize: 11, fontWeight: 700, letterSpacing: '1px', marginBottom: 4, fontFamily: "'Barlow Condensed',sans-serif" }}>{ind.num}</div>
              {ind.title.split('\n').map((l, j) => <div key={j}>{l}</div>)}
            </button>
          ))}
        </div>

        <div key={active} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center', animation: 'fadeUp .5s ease forwards' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: 28, fontWeight: 800, marginBottom: 16, fontFamily: "'Barlow Condensed',sans-serif" }}>
              {ind.title.split('\n').join(' ')} Security
            </h3>
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{ind.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ind.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, background: '#F5820D', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn-green">Get Industry Assessment <FiArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="img-zoom" style={{ height: 380, background: '#333' }}>
            <img src={ind.img} alt={ind.title} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 36 }}>
          <button onClick={() => setActive(p => (p - 1 + INDUSTRIES.length) % INDUSTRIES.length)} style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .3s' }}>
            <FiArrowLeft size={18} />
          </button>
          <button onClick={() => setActive(p => (p + 1) % INDUSTRIES.length)} style={{ background: '#F5820D', border: 'none', color: '#fff', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .3s' }}>
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ SERVICES GRID ═════════════════════════ */
function ServicesGrid() {
  return (
    <section style={{ padding: '90px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>First piece of mind with 24/7 monitoring</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", maxWidth: 500, lineHeight: 1.15 }}>
              Smart Security Systems That Fit Your Home & Business!
            </h2>
          </div>
          <div className="reveal-right" style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <Link to="/contact" className="btn-green" style={{ fontSize: 12, padding: '10px 20px' }}>Give It a Try!</Link>
            <Link to="/services" className="btn-outline-dark" style={{ fontSize: 12, padding: '10px 20px' }}>Check All Services</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className={`service-card reveal d${i + 1} ${s.active ? 'card-active' : ''}`} style={{ background: s.active ? '#F5820D' : '#f8f9fa', padding: '32px 24px' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: s.active ? '#fff' : '#1a1c1e', fontFamily: "'Barlow Condensed',sans-serif" }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, color: s.active ? 'rgba(255,255,255,.85)' : '#666' }}>{s.desc}</p>
              <Link to={s.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 13, textDecoration: 'none', color: s.active ? '#fff' : '#F5820D', borderBottom: `2px solid ${s.active ? 'rgba(255,255,255,.4)' : '#F5820D'}`, paddingBottom: 2 }}>
                Explore Now <FiArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '28px 32px', background: '#FEF3E6', border: '1px solid #FBCFA0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, background: '#F5820D', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              <FiShield size={20} color="#fff" />
            </div>
            <div>
              <div style={{ color: '#1a2332', fontWeight: 700, fontSize: 15 }}>Get Expert Security — we will schedule a visit for free</div>
              <div style={{ color: '#4b5570', fontSize: 13, marginTop: 2 }}>No obligation consultation with our certified engineers</div>
            </div>
          </div>
          <Link to="/contact" className="btn-green">Get A Free Quote</Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════ INTEGRATED SECURITY ══════════════════════ */
function IntegratedSecurity() {
  return (
    <section style={{ padding: '100px 24px', backgroundImage: 'url(https://images.unsplash.com/photo-1563301380-025e9db13a15?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,20,42,.88)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 30, height: 2, background: '#F5820D' }} />
          <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Find Peace Of Mind With Smart Home Security System</span>
          <div style={{ width: 30, height: 2, background: '#F5820D' }} />
        </div>
        <h2 className="reveal" style={{ color: '#fff', fontSize: 'clamp(28px,5vw,56px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 24, lineHeight: 1.1 }}>
          Integrated Security Solutions &amp;<br />Remote Monitoring 24/7
        </h2>
        <p className="reveal" style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, lineHeight: 1.8, maxWidth: 640, margin: '0 auto 36px' }}>
          Our centralised command platform connects every sensor, camera, and alarm in real time — giving you and our response team instant situational awareness, wherever you are.
        </p>
        <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/services" className="btn-green">Explore All Solutions <FiArrowRight size={15} /></Link>
          <a href="tel:+15550000000" className="btn-outline-white" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FiPhone size={15} /> (555) 000-0000
          </a>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ BEST PRACTICES ════════════════════════ */
function BestPracticesSection() {
  const bullets = ['Access control systems — Fire detection alarms', 'Critical equipment condition monitoring systems', 'Video surveillance systems — Carbon sensors', 'Perimeter security — Environmental monitoring']
  return (
    <section style={{ padding: '90px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
        <div className="reveal-left">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Take Control Over Your Security — Free Reviews</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
            Providing The Best Practices for Industry Security Protocols &amp; Standardizing Procedures.
          </h2>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
            We collaborate with you to design and implement a scalable integrated security solution that addresses your workplace safety challenges, while gaining efficiencies across your systems and assets by standardising platforms.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 20, height: 20, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M8.5 2.5L4 7 1.5 4.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                </div>
                <span style={{ color: '#444', fontSize: 14, lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-green">Meet Our Experts <FiArrowRight size={15} /></Link>
        </div>

        <div className="reveal-right" style={{ position: 'relative' }}>
          <div className="img-zoom" style={{ height: 480, background: '#ddd' }}>
            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80" alt="Security professional" />
          </div>
          <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#F5820D', padding: '24px 28px', maxWidth: 260 }}>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: 16, marginBottom: 8 }}>All The Essentials To Help Give You Peace Of Mind.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
              {['On-site risk assessment', 'Custom system design', 'Professional installation', 'Ongoing 24/7 monitoring'].map((t, i) => (
                <div key={i} style={{ color: 'rgba(255,255,255,.85)', fontSize: 12, display: 'flex', gap: 6 }}>
                  <span style={{ color: '#fff', fontWeight: 700 }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ ANALYTICS ════════════════════════════ */
function AnalyticsSection() {
  return (
    <section style={{ padding: '90px 24px', background: '#FEF3E6' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
        <div className="reveal-left" style={{ position: 'relative' }}>
          <div className="img-zoom" style={{ height: 460, background: '#ddd' }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Security analytics" />
          </div>
          <div style={{ position: 'absolute', top: 24, right: -16, background: '#08142a', padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'center', maxWidth: 220 }}>
            <div style={{ width: 44, height: 44, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FiCamera size={20} color="#fff" />
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 18, fontFamily: "'Barlow Condensed',sans-serif" }}>98.7%</div>
              <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 12 }}>Detection Accuracy</div>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Download System Access by Phone or Tablet</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
            Trusted Analytics That Give Meaning to Security Data.
          </h2>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
            Our expert team administers custom security projects of all sizes, providing powerful analytical insights into activity patterns, incident trends and vulnerability reports.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              { icon: '📊', title: 'Real-Time Dashboard', desc: 'Live event feeds and system status across all sensors' },
              { icon: '🔔', title: 'Smart Alerts', desc: 'AI-filtered notifications that matter, not noise' },
              { icon: '📈', title: 'Trend Reports', desc: 'Monthly security insights and vulnerability analysis' },
              { icon: '📱', title: 'Mobile Access', desc: 'Full system control from your smartphone anywhere' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 10 }}>
                <div style={{ fontSize: 24 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ color: '#666', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-green">Start Your Trial <FiArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ TESTIMONIALS ═════════════════════════ */
function TestimonialsSection() {
  return (
    <section style={{ padding: '90px 24px', background: '#f4f7fb' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Client Stories</span>
            <div style={{ width: 30, height: 2, background: '#F5820D' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", color: '#1a2332' }}>
            Trusted By Thousands Of Happy Clients
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ background: '#fff', border: '1px solid #e8edf5', padding: 28, borderTop: '4px solid #F5820D', transition: 'all .3s', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.04)' }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(t.rating)].map((_, j) => <FiStar key={j} size={14} color="#F5820D" fill="#F5820D" />)}
              </div>
              <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ color: '#1a2332', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: '#F5820D', fontSize: 12, fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ RECENT PROJECTS ════════════════════════ */
function RecentProjects() {
  return (
    <section style={{ padding: '90px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Recent Solutions</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Our Recent Completed Projects
            </h2>
          </div>
          <Link to="/services" className="btn-outline-dark reveal-right" style={{ fontSize: 13, padding: '10px 24px' }}>
            View All Services <FiArrowRight size={14} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
          {RECENT.map((p, i) => (
            <div key={i} className={`blog-card reveal d${Math.min(i + 1, 6)}`} style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}>
              <div className="blog-img img-zoom" style={{ height: 220, background: '#ccc' }}>
                <img src={p.img} alt={p.label} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(8,20,42,.9) 0%,transparent 100%)', padding: '40px 20px 20px' }}>
                <div style={{ color: '#F5820D', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{p.tag}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ CONTACT SECTION ════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section style={{ padding: '90px 24px', background: 'linear-gradient(135deg,#FEF3E6 0%,#e8f4ff 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'start' }}>
        <div className="reveal-left">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: '#F5820D' }} />
            <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Free Security Assessment</span>
          </div>
          <h2 style={{ color: '#1a2332', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 20, lineHeight: 1.15 }}>
            Let Our Experts Assess Your Home At No Cost
          </h2>
          <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Let our security experts visit your property, assess your specific risks, and design a tailored protection plan — completely free of charge with no obligation.
          </p>

          {[
            { icon: FiPhone, label: 'Emergency Hotline', val: '(555) 000-0000 (Demo)' },
            { icon: FiMail, label: 'Email Us', val: 'info@homesecurityinsights.com' },
            { icon: FiShield, label: 'Licensed & Insured', val: 'All 50 States Covered' },
          ].map(({ icon: Icon, label, val }, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, background: '#F5820D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} color="#fff" />
              </div>
              <div>
                <div style={{ color: '#4b5570', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.8px', fontWeight: 600 }}>{label}</div>
                <div style={{ color: '#1a2332', fontWeight: 700, fontSize: 15 }}>{val}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-right">
          <div style={{ background: '#fff', padding: 36, boxShadow: '0 8px 32px rgba(0,0,0,.08)', border: '1px solid #e8edf5' }}>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 24, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Schedule Your Free Assessment
            </h3>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Request Received!</h4>
                <p style={{ color: '#666', fontSize: 14 }}>Our team will contact you within 2 business hours.</p>
                <button onClick={() => setSent(false)} className="btn-green" style={{ marginTop: 20, clipPath: 'none' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <input className="form-field-light" placeholder="Full Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input className="form-field-light" placeholder="Email Address" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <input className="form-field-light" placeholder="Phone Number" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <select className="form-field-light" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select Service Required</option>
                  <option>Home Security Systems</option>
                  <option>Commercial Security</option>
                  <option>CCTV Surveillance</option>
                  <option>Fire Safety Systems</option>
                  <option>Access Control</option>
                  <option>Smart Home Automation</option>
                </select>
                <textarea className="form-field-light" placeholder="Describe Your Security Needs" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-green" style={{ width: '100%', justifyContent: 'center', clipPath: 'none', padding: '15px' }}>
                  Get Free Quote <FiArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════ TRUST TICKER ══════════════════════════ */
function TrustTicker() {
  const logos = ['TechShield Inc.', 'SafeNet Corp', 'GuardPro™', 'SecureLink', 'VaultX Systems', 'SentryTech', 'ArmourNet', 'ProShield']
  const doubled = [...logos, ...logos]
  return (
    <div style={{ background: '#f4f6f8', borderTop: '1px solid #e5e7eb', padding: '20px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ background: '#F5820D', padding: '10px 20px', whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 700, fontSize: 12, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Trusted Partners
        </div>
        <div className="ticker-wrap" style={{ flex: 1 }}>
          <div className="ticker-track">
            {doubled.map((logo, i) => (
              <div key={i} style={{ padding: '0 40px', color: '#888', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', borderRight: '1px solid #ddd' }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
