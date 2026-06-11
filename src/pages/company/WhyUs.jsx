import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiXCircle, FiPhone, FiStar } from 'react-icons/fi'
import PageHero from '../../components/PageHero'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const COMPARE = [
  { feature: 'Certified NICET engineers for every install', us: true, generic: false, diy: false },
  { feature: 'Free on-site security assessment', us: true, generic: false, diy: false },
  { feature: 'UL-listed 24/7 monitoring centre', us: true, generic: true, diy: false },
  { feature: 'Custom system design per property', us: true, generic: false, diy: false },
  { feature: 'AI-powered smart home integration', us: true, generic: false, diy: false },
  { feature: 'Emergency response in avg. 4 minutes', us: true, generic: false, diy: false },
  { feature: 'Full compliance with local fire codes', us: true, generic: false, diy: false },
  { feature: 'Lifetime system support & maintenance', us: true, generic: false, diy: false },
  { feature: 'Flexible pricing & no hidden fees', us: true, generic: false, diy: false },
  { feature: 'Insurance discount documentation', us: true, generic: true, diy: false },
]

const REASONS = [
  { num: '01', title: 'We Assess Before We Sell', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&q=80', desc: 'Every engagement starts with a free, no-obligation on-site assessment. We spend time understanding your property, your risks, and your lifestyle before recommending a single product. Our goal is a system that\'s right for you — not the one with the highest margin for us.' },
  { num: '02', title: 'Certified Experts, Not Sales People', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80', desc: 'Our 400+ field engineers hold recognised industry certifications (NICET, ESA, CEDIA). When our technician visits your home, you\'re getting a trained professional — not a commission-motivated sales rep with a screwdriver.' },
  { num: '03', title: 'Technology That Actually Works', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80', desc: 'We only partner with technology brands that pass our rigorous in-house testing programme. Our AI-powered cameras reduce false alarms by 94% compared to standard PIR sensors — because we test before we recommend.' },
  { num: '04', title: 'A Partner, Not A Provider', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80', desc: 'Our relationship doesn\'t end at installation. You get a named account manager, priority support, annual system health reviews, and proactive alerts if our monitoring centre detects any issues with your equipment.' },
]

const TESTIMONIALS = [
  { name: 'Angela Perez', role: 'Homeowner, Austin TX', text: 'I got quotes from three companies. Home Security Insights was the only one that sent an actual engineer to assess my home rather than just emailing a product list. The system they designed was completely different from — and better than — what the others suggested.', rating: 5 },
  { name: 'Thomas Brandt', role: 'Owner, Brandt Retail Group', text: 'We\'ve used Home Security Insights across 6 retail locations for 4 years. No other security company has come close to their responsiveness, system reliability or the quality of their incident reporting. They\'re genuinely a business partner.', rating: 5 },
  { name: 'Dr. Keiko Yamamoto', role: 'Practice Manager, City Dental', text: 'The access control system Home Security Insights installed lets us manage which staff access the drug storage and treatment rooms — and gives us a full audit trail. Our insurance company reduced our premium by 18% because of it.', rating: 5 },
]

export default function WhyUs() {
  useScrollReveal()
  return (
    <>
      <PageHero
        title="Why Choose Home Security Insights"
        subtitle="With dozens of security companies competing for your attention, here is the honest case for why thousands of families and businesses choose Home Security Insights — and stay."
        bg="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Company', path: '/about' }, { label: 'Why Choose Us' }]}
      />

      {/* Stats strip */}
      <div style={{ background: '#F5820D', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 24 }}>
          {[
            { num: '20+', label: 'Years Experience' },
            { num: '15,000+', label: 'Happy Clients' },
            { num: '4 min', label: 'Avg Response' },
            { num: '98.7%', label: 'Retention Rate' },
            { num: 'A+', label: 'BBB Rating' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', borderRight: i < 4 ? '1px solid rgba(255,255,255,.3)' : 'none', padding: '4px 0' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,.85)', fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 reasons */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
              <span style={{ color: '#F5820D', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>The Difference We Make</span>
              <div style={{ width: 30, height: 2, background: '#F5820D' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Four Reasons 15,000+ Clients Trust Home Security Insights
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {REASONS.map((r, i) => (
              <div key={i} className={`reveal reason-alt-row`} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 400px' : '400px 1fr', gap: 56, alignItems: 'center' }}>
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ background: '#F5820D', color: '#fff', padding: '8px 14px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, flexShrink: 0 }}>{r.num}</div>
                    <h3 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", lineHeight: 1.2 }}>{r.title}</h3>
                  </div>
                  <p style={{ color: '#4b5570', fontSize: 15, lineHeight: 1.85 }}>{r.desc}</p>
                </div>
                <div className="img-zoom" style={{ height: 320, background: '#ddd', order: i % 2 === 0 ? 2 : 1 }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .6s' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '80px 24px', background: '#f4f7fb' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              How We Compare
            </h2>
            <p style={{ color: '#4b5570', fontSize: 15, marginTop: 12 }}>An honest comparison across the most important factors.</p>
          </div>
          <div className="compare-scroll"><div className="compare-table-inner" style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 140px 120px', background: '#1a2332', color: '#fff', padding: '14px 24px', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', gap: 8 }}>
              <div>Feature</div>
              <div style={{ textAlign: 'center', color: '#F5820D' }}>Us</div>
              <div style={{ textAlign: 'center' }}>Generic Alarm Co.</div>
              <div style={{ textAlign: 'center' }}>DIY Systems</div>
            </div>
            {COMPARE.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 140px 120px', padding: '14px 24px', borderBottom: '1px solid #f0f0f0', gap: 8, background: i % 2 === 0 ? '#fff' : '#fafbfd' }}>
                <div style={{ fontSize: 14, color: '#1a2332', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ textAlign: 'center' }}>{row.us ? <FiCheckCircle size={20} color="#F5820D" /> : <FiXCircle size={20} color="#ccc" />}</div>
                <div style={{ textAlign: 'center' }}>{row.generic ? <FiCheckCircle size={20} color="#F5820D" /> : <FiXCircle size={20} color="#ccc" />}</div>
                <div style={{ textAlign: 'center' }}>{row.diy ? <FiCheckCircle size={20} color="#F5820D" /> : <FiXCircle size={20} color="#ccc" />}</div>
              </div>
            ))}
          </div></div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif" }}>
              Straight From Our Clients
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ padding: 28, background: '#f8faff', border: '1px solid #e8edf5', borderTop: '4px solid #F5820D' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, j) => <FiStar key={j} size={15} color="#F5820D" fill="#F5820D" />)}
                </div>
                <p style={{ color: '#4b5570', fontSize: 14, lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#1a2332' }}>{t.name}</div>
                  <div style={{ color: '#F5820D', fontSize: 12, fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#D96E00,#F5820D)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Ready To Experience The Difference?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, marginBottom: 32 }}>
            No pressure, no obligation. Just an honest conversation with a certified security expert about what your property actually needs.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#1a2332', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              Get Free Assessment <FiArrowRight size={16} />
            </Link>
            <a href="tel:+15550000000" style={{ background: 'rgba(0,0,0,.15)', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center', border: '2px solid rgba(255,255,255,.4)' }}>
              <FiPhone size={16} /> (555) 000-0000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
