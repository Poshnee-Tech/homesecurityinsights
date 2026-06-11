import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi'
import PageHero from './PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServiceTemplate({ service }) {
  useScrollReveal()
  const { title, subtitle, heroBg, icon: Icon, description, features, benefits, process, faqs, relatedServices } = service

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        bg={heroBg}
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: title }]}
      />

      {/* Overview */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 60, alignItems: 'center' }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Our Expertise</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              {description.heading}
            </h2>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{description.para1}</p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 30 }}>{description.para2}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-green">Get Free Quote <FiArrowRight size={15} /></Link>
              <a href="tel:+15550000000" className="btn-outline-dark">Call Us Now</a>
            </div>
          </div>
          <div className="reveal-right">
            <div className="img-zoom" style={{ height: 420, background: '#eee' }}>
              <img src={description.img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>What's Included</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Key Features & Capabilities
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ background: '#fff', padding: 28, borderLeft: '4px solid #F5820D', boxShadow: '0 4px 20px rgba(0,0,0,.05)' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 24px', background: '#1a1c1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 60, alignItems: 'center' }}>
          <div className="reveal-left">
            <div className="img-zoom" style={{ height: 440, background: '#333' }}>
              <img src={benefits.img} alt="Benefits" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="reveal-right">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Why It Matters</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 28, fontFamily: "'Barlow Condensed',sans-serif" }}>
              {benefits.heading}
            </h2>
            {benefits.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                <FiCheckCircle size={20} color="#F5820D" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 13.5, lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>How We Work</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Our Installation Process
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
            {process.map((step, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ textAlign: 'center', padding: '32px 20px' }}>
                <div style={{ width: 56, height: 56, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20, color: '#fff' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: '#666', fontSize: 13.5, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs && (
        <section style={{ padding: '80px 24px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} delay={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#F5820D' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Ready to Secure Your Property?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 16, marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>
            Get a free on-site security assessment today. Our experts will design a customised solution for your needs.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#1a1c1e', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
              Schedule Assessment <FiArrowRight size={16} />
            </Link>
            <a href="tel:+15550000000" style={{ background: 'rgba(0,0,0,.2)', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8, border: '2px solid rgba(255,255,255,.4)' }}>
              <FiPhone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, marginBottom: 36, fontFamily: "'Barlow Condensed',sans-serif" }}>
            Related Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {relatedServices.map((s, i) => (
              <Link key={i} to={s.path} style={{ background: '#f8f9fa', padding: 24, textDecoration: 'none', display: 'flex', gap: 16, alignItems: 'flex-start', transition: 'all .3s', border: '1px solid #eee' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F5820D'; e.currentTarget.style.background = 'rgba(245,130,13,.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.background = '#f8f9fa' }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a1c1e', fontSize: 15, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: '#666', fontSize: 13 }}>{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FaqItem({ q, a, delay }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`reveal d${delay + 1}`} style={{ background: '#fff', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
      <button onClick={() => setOpen(p => !p)} style={{ width: '100%', padding: '18px 24px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', gap: 16, fontFamily: "'Barlow',sans-serif" }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: '#1a1c1e' }}>{q}</span>
        <span style={{ color: '#F5820D', fontSize: 22, flexShrink: 0, fontWeight: 300, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .3s' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
        <p style={{ padding: '0 24px 18px', color: '#555', fontSize: 14, lineHeight: 1.8 }}>{a}</p>
      </div>
    </div>
  )
}

import { useState } from 'react'
