import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiCheckCircle, FiShield } from 'react-icons/fi'
import PageHero from '../../components/PageHero'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const CERTS = [
  { badge: '🏛️', name: 'NICET Level III — Fire Alarm Systems', body: 'National Institute for Certification in Engineering Technologies', year: '2008', desc: 'Our lead engineers hold NICET Level III certification — the industry\'s gold standard for fire alarm system design and installation, requiring 5+ years of experience and rigorous examination.' },
  { badge: '⚡', name: 'UL Listed Monitoring Centre', body: 'Underwriters Laboratories', year: '2010', desc: 'Our central station is UL Listed under UL 2050, ensuring our monitoring operations meet the highest standards for reliability, redundancy and response protocols.' },
  { badge: '🛡️', name: 'ESA / NBFAA Member', body: 'Electronic Security Association', year: '2006', desc: 'Full membership in the Electronic Security Association, holding us to a strict Code of Ethics and Standards of the Industry for installation, service and monitoring practices.' },
  { badge: '🔐', name: 'SIA Certified', body: 'Security Industry Association', year: '2012', desc: 'SIA certification demonstrates our commitment to advancing the security industry\'s technology standards and professional development requirements.' },
  { badge: '🏠', name: 'CEDIA Member', body: 'Custom Electronic Design & Installation Association', year: '2015', desc: 'Membership confirms our smart home integration engineers meet CEDIA\'s rigorous technical standards for residential technology system design and installation.' },
  { badge: '🌐', name: 'ISO 9001:2015 Certified', body: 'International Organization for Standardization', year: '2018', desc: 'ISO 9001 certification confirms our quality management systems consistently meet customer and regulatory requirements and continually improve our service delivery.' },
]

const AWARDS = [
  { year: '2024', title: 'Best Home Security Company', org: 'Home Security Insights Awards', desc: 'Recognised for outstanding customer satisfaction scores and technology innovation across residential security products.' },
  { year: '2023', title: 'Innovation in Smart Home Security', org: 'Security Industry Association', desc: 'Awarded for pioneering AI-powered threat detection integration in residential security systems, reducing false alarms by 94%.' },
  { year: '2022', title: 'Top Workplace — Security Sector', org: 'National Security Magazine', desc: 'Recognised as one of the best employers in the security industry, reflecting our investment in engineer training and wellbeing.' },
  { year: '2021', title: 'Excellence in Customer Service', org: 'BBB Torch Awards', desc: 'Better Business Bureau Torch Award for marketplace ethics, reflecting our commitment to honest business practices and customer resolution.' },
  { year: '2020', title: 'Regional Installation Company of the Year', org: 'Security Systems News', desc: 'Recognised for installation quality, customer retention and growth in the residential and commercial security sectors.' },
  { year: '2019', title: 'Technology Partner of the Year', org: 'Alarm.com', desc: 'Awarded by our technology partner for outstanding deployment of smart home security platforms and customer training excellence.' },
]

export default function Certifications() {
  useScrollReveal()
  return (
    <>
      <PageHero
        title="Certifications & Awards"
        subtitle="Our credentials prove our commitment — every certification earned, every award received reflects the trust our clients place in us."
        bg="https://images.unsplash.com/photo-1563301380-025e9db13a15?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Company', path: '/about' }, { label: 'Certifications & Awards' }]}
      />

      {/* Intro */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div className="reveal-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Our Credentials</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Backed By The Industry's Most Respected Certifications
            </h2>
            <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
              In the security industry, credentials are not optional — they are the proof that we are qualified to safeguard what matters most to you. Every certification our team holds represents hundreds of hours of training, rigorous examination, and demonstrated competence in the field.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {['NICET Level III Certified', 'UL Listed Monitoring', 'ESA Full Member', 'ISO 9001:2015', 'CEDIA Member', 'SIA Certified', 'BBB Accredited', 'Fully Licensed & Insured'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <FiCheckCircle size={15} color="#F5820D" />
                  <span style={{ fontSize: 13.5, color: '#1a2332', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '6', label: 'Industry Certifications' },
                { num: '18+', label: 'Awards Won' },
                { num: '100%', label: 'Licensed Engineers' },
                { num: 'A+', label: 'BBB Rating' },
              ].map((s, i) => (
                <div key={i} style={{ background: i === 0 ? '#F5820D' : '#f4f7fb', padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 46, fontWeight: 800, color: i === 0 ? '#fff' : '#F5820D', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ color: i === 0 ? 'rgba(255,255,255,.85)' : '#4b5570', fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <section style={{ padding: '80px 24px', background: '#f4f7fb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Our Professional Certifications
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
            {CERTS.map((c, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ background: '#fff', padding: '28px', borderTop: '4px solid #F5820D', boxShadow: '0 2px 16px rgba(0,0,0,.06)' }}>
                <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                  <div style={{ fontSize: 36 }}>{c.badge}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#F5820D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{c.body}</div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{c.name}</h3>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>Since {c.year}</div>
                  </div>
                </div>
                <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Recognition</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Industry Awards & Recognition
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {AWARDS.map((a, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 28px', background: '#f8faff', border: '1px solid #e8edf5', transition: 'all .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F5820D'; e.currentTarget.style.background = '#FEF3E6' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8edf5'; e.currentTarget.style.background = '#f8faff' }}>
                <div style={{ background: '#F5820D', color: '#fff', padding: '8px 14px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 18, flexShrink: 0, minWidth: 70, textAlign: 'center' }}>{a.year}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{a.title}</h3>
                  <div style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px', marginBottom: 8 }}>{a.org}</div>
                  <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.65 }}>{a.desc}</p>
                </div>
                <FiAward size={24} color="#F5820D" style={{ flexShrink: 0, marginTop: 4 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#08142a,#0f2035)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <FiShield size={48} color="#F5820D" style={{ marginBottom: 20 }} />
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            You Deserve A Certified Security Partner
          </h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, marginBottom: 32 }}>
            Our certifications are your guarantee — of quality, compliance and competence. Request a free assessment from our certified engineers today.
          </p>
          <Link to="/contact" className="btn-green">
            Book Free Assessment <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
