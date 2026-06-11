import { Link } from 'react-router-dom'
import { FiAward, FiUsers, FiShield, FiTarget, FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

const VALUES = [
  { icon: '🔒', title: 'Integrity First', desc: 'We are transparent about costs, capabilities and limitations. No upselling, no hidden fees — just honest advice you can trust.' },
  { icon: '⚡', title: 'Rapid Response', desc: 'Our 24/7 monitoring centre guarantees a 4-minute average response time to every alarm trigger, day or night.' },
  { icon: '🏆', title: 'Certified Excellence', desc: 'All engineers hold NICET certifications. Our systems meet or exceed ESA, UL, and local authority standards.' },
  { icon: '💡', title: 'Continuous Innovation', desc: 'We invest 15% of revenue into R&D — so our clients always have access to the latest security technology.' },
  { icon: '🤝', title: 'Lifetime Partnership', desc: 'We do not just install and leave. Our dedicated account managers provide ongoing support for the life of your system.' },
  { icon: '🌍', title: 'Community Commitment', desc: 'We donate 1% of profits to neighbourhood watch programmes and provide free security assessments to community centres.' },
]

export default function About() {
  useScrollReveal()
  return (
    <>
      <PageHero
        title="About Home Security Insights"
        subtitle="For over 20 years, we've been protecting families, businesses and communities with industry-leading security technology and unmatched service."
        bg="https://images.unsplash.com/photo-1563301380-025e9db13a15?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div className="reveal-left" style={{ position: 'relative' }}>
            <div style={{ height: 480, background: '#ddd', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80" alt="Our team" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -24, right: -16, background: '#F5820D', padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1 }}>20+</div>
              <div style={{ color: 'rgba(255,255,255,.85)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.8px', marginTop: 4 }}>Years of Excellence</div>
            </div>
          </div>
          <div className="reveal-right">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Our Story</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Born From A Belief That Everyone Deserves Professional Security
            </h2>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              Home Security Insights was founded in 2004 in San Francisco by Marcus Reynolds, a former law enforcement officer who recognised a critical gap in the market — powerful security technology that was accessible, affordable and backed by genuine expertise.
            </p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              From a team of five installers operating out of a single van, we've grown into a nationwide network of 400+ certified engineers serving 15,000+ clients across residential, commercial and industrial sectors. Yet our founding principle remains unchanged: every person deserves professional protection.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginBottom: 28 }}>
              {['Licensed & fully insured', 'UL-listed monitoring centre', 'ESA certified technicians', 'Nationwide coverage', '5-star customer satisfaction', 'BBB Accredited Business'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <FiCheckCircle size={15} color="#F5820D" />
                  <span style={{ fontSize: 14, color: '#333' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-green">Schedule Free Assessment <FiArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '64px 24px', background: '#1a1c1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 32 }}>
          {[
            { num: '20+', label: 'Years in Business', icon: FiAward },
            { num: '15K+', label: 'Happy Clients', icon: FiUsers },
            { num: '50K+', label: 'Systems Installed', icon: FiShield },
            { num: '400+', label: 'Certified Engineers', icon: FiTarget },
            { num: '98.7%', label: 'Client Retention', icon: FiCheckCircle },
            { num: '4 Min', label: 'Avg Response Time', icon: FiPhone },
          ].map((s, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ textAlign: 'center', padding: '24px 16px', borderRight: i < 5 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
              <s.icon size={24} color="#F5820D" style={{ marginBottom: 10 }} />
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, color: '#F5820D', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section id="mission" style={{ padding: '90px 24px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>What Drives Us</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Our Core Values & Commitments
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {VALUES.map((v, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ background: '#fff', padding: 28, borderBottom: '3px solid transparent', transition: 'all .3s', boxShadow: '0 2px 16px rgba(0,0,0,.06)' }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#F5820D'; e.currentTarget.style.transform = 'translateY(-6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#F5820D' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="reveal" style={{ color: '#fff', fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Ready to Meet Our Team In Person?
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,.85)', fontSize: 16, marginBottom: 32 }}>
            Schedule a free on-site consultation. One of our senior engineers will visit you at no cost.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="reveal" style={{ background: '#fff', color: '#1a1c1e', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '.5px', textTransform: 'uppercase', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              Book Consultation <FiArrowRight size={16} />
            </Link>
            <a href="tel:+15550000000" className="reveal" style={{ background: 'rgba(0,0,0,.15)', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center', border: '2px solid rgba(255,255,255,.4)' }}>
              <FiPhone size={16} /> (555) 000-0000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
