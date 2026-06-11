import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get a free security assessment, request a quote, or simply ask our experts a question — we're here to help 24/7."
        bg="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Quick info bar */}
      <div style={{ background: '#F5820D', padding: '24px' }}>
        <div className="contact-bar-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {[
            { icon: FiPhone, label: 'Call Us Anytime', val: '(555) 000-0000' },
            { icon: FiMail, label: 'Email Support', val: 'info@homesecurityinsights.com' },
            { icon: FiClock, label: 'Monitoring', val: '24 / 7 / 365' },
            { icon: FiMapPin, label: 'Headquarters', val: 'San Francisco, CA' },
          ].map(({ icon: Icon, label, val }, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,.3)' : 'none' }}>
              <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={18} color="#fff" />
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,.8)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.8px' }}>{label}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64 }}>

          {/* Form */}
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Send A Message</span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, marginBottom: 28, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Schedule Your Free Security Assessment
            </h2>

            {sent ? (
              <div style={{ background: '#f0fdf4', border: '2px solid #F5820D', padding: '40px', textAlign: 'center' }}>
                <FiCheckCircle size={48} color="#F5820D" style={{ marginBottom: 16 }} />
                <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Request Submitted!</h3>
                <p style={{ color: '#555', fontSize: 15, marginBottom: 20 }}>A specialist will contact you within 2 hours during business hours.</p>
                <button onClick={() => setSent(false)} className="btn-green" style={{ clipPath: 'none' }}>Submit Another Request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Full Name *</label>
                    <input className="form-field-light" placeholder="John Smith" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Email *</label>
                    <input className="form-field-light" type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Phone</label>
                    <input className="form-field-light" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Property Type</label>
                    <select className="form-field-light" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                      <option value="">Select type</option>
                      <option>Residential Home</option>
                      <option>Apartment / Condo</option>
                      <option>Small Business</option>
                      <option>Commercial Building</option>
                      <option>Industrial / Warehouse</option>
                      <option>Educational Facility</option>
                      <option>Healthcare Facility</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Service Required</label>
                  <select className="form-field-light" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service</option>
                    <option>Home Security Systems</option>
                    <option>Commercial Security</option>
                    <option>CCTV Surveillance</option>
                    <option>Fire Safety Systems</option>
                    <option>Access Control</option>
                    <option>Smart Home Automation</option>
                    <option>General Security Assessment</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase', letterSpacing: '.5px', display: 'block', marginBottom: 6 }}>Message / Additional Details</label>
                  <textarea className="form-field-light" rows={5} placeholder="Describe your security concerns or requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-green" style={{ width: '100%', justifyContent: 'center', clipPath: 'none', padding: '15px' }}>
                  Submit Request <FiArrowRight size={16} />
                </button>
                <p style={{ color: '#888', fontSize: 12, textAlign: 'center' }}>We'll respond within 2 business hours. No obligation, no pressure.</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 0 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Get In Touch</span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif', marginBottom: 8" }}>
              We're Here For You, Around The Clock
            </h2>

            {[
              { icon: FiPhone, title: 'Call Us', lines: ['Emergency: (555) 000-0000', 'Main Office: (555) 000-0001', 'Sales: (555) 000-0002'], color: '#F5820D' },
              { icon: FiMail, title: 'Email Us', lines: ['info@homesecurityinsights.com', 'support@homesecurityinsights.com', 'sales@homesecurityinsights.com'], color: '#F5820D' },
              { icon: FiMapPin, title: 'Visit Us', lines: ['123 Security Avenue, Suite 400', 'Your City, State 00000', 'Mon–Fri: 8am – 6pm'], color: '#F5820D' },
              { icon: FiClock, title: 'Monitoring Centre', lines: ['24 hours / 7 days / 365 days', 'Emergency response team on standby', 'Average 4-min response time'], color: '#F5820D' },
            ].map(({ icon: Icon, title, lines, color }, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '20px', background: '#f8f9fa', borderLeft: '4px solid #F5820D' }}>
                <div style={{ width: 44, height: 44, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{title}</div>
                  {lines.map((l, j) => <div key={j} style={{ color: '#555', fontSize: 13, lineHeight: 1.65 }}>{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div style={{ height: 360, background: '#1a1c1e', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80" alt="City" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .3 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, background: '#F5820D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <FiMapPin size={28} color="#fff" />
          </div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>123 Security Avenue, Suite 400 — Your City, State 00000</div>
          <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, marginTop: 6 }}>Serving all major metropolitan areas nationwide</div>
        </div>
      </div>
    </>
  )
}
