import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser, FiTag, FiSearch } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

const POSTS = [
  {
    id: 1,
    title: '10 Home Security Mistakes That Burglars Count On',
    excerpt: 'Most home break-ins exploit predictable oversights — leaving a spare key under the mat, not lighting entry points, or relying on a single deadbolt. Here\'s what professional thieves look for.',
    category: 'Home Security Tips',
    date: 'May 28, 2025',
    author: 'Marcus Reynolds',
    img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=700&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'How Smart Home Integration Reduces False Alarms by 87%',
    excerpt: 'AI-powered motion detection and contextual awareness have transformed alarm systems — dramatically cutting false triggers while improving detection of genuine threats.',
    category: 'Technology',
    date: 'May 15, 2025',
    author: 'Priya Sharma',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'CCTV Camera Placement Guide: Maximising Coverage',
    excerpt: 'Placement determines whether a camera system actually deters crime or merely records it after the fact. Follow these professional placement principles for complete coverage.',
    category: 'CCTV',
    date: 'May 2, 2025',
    author: 'David Okafor',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    title: 'Fire Safety Compliance: What Businesses Must Know in 2025',
    excerpt: 'Updated NFPA codes and local authority requirements have changed significantly this year. We break down the key changes affecting commercial properties and what action is required.',
    category: 'Fire Safety',
    date: 'Apr 18, 2025',
    author: 'Jennifer Walsh',
    img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    title: 'Biometric vs. Keycard Access Control: Which Is Right For You?',
    excerpt: 'Both technologies offer robust security, but the right choice depends on your throughput requirements, budget, user experience priorities, and compliance environment.',
    category: 'Access Control',
    date: 'Apr 5, 2025',
    author: 'Priya Sharma',
    img: 'https://images.unsplash.com/photo-1569946386006-4bd33a1b4b11?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    title: 'Protecting Your Business During Holiday Season',
    excerpt: 'Retail theft peaks during the holiday period — here\'s how a multi-layered security strategy combining visible deterrents, access control and live monitoring keeps your business protected.',
    category: 'Commercial Security',
    date: 'Mar 22, 2025',
    author: 'Marcus Reynolds',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 7,
    title: 'Remote Monitoring vs. Self-Monitoring: Pros, Cons & Costs',
    excerpt: 'Professional monitoring adds a cost but also a critical layer of human response. We break down the real differences so you can make the right decision for your property.',
    category: 'Home Security Tips',
    date: 'Mar 8, 2025',
    author: 'Jennifer Walsh',
    img: 'https://images.unsplash.com/photo-1563301380-025e9db13a15?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 8,
    title: 'The Rise of AI-Powered Security: What to Expect in 2025',
    excerpt: 'From facial recognition to predictive behavioural analytics, AI is reshaping how security systems detect, classify and respond to threats. Here\'s what\'s available today.',
    category: 'Technology',
    date: 'Feb 20, 2025',
    author: 'Priya Sharma',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
  },
]

const CATEGORIES = ['All', 'Home Security Tips', 'Technology', 'CCTV', 'Fire Safety', 'Access Control', 'Commercial Security']

export default function Blog() {
  useScrollReveal()
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = POSTS.filter(p => {
    const matchCat = active === 'All' || p.category === active
    const matchQ = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  const featured = POSTS.filter(p => p.featured)

  return (
    <>
      <PageHero
        title="Security Insights Blog"
        subtitle="Expert advice, industry news and practical guides from SecureGuard's certified security professionals."
        bg="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Featured */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <div style={{ width: 36, height: 2, background: '#6DC232' }} />
            <span style={{ color: '#6DC232', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Featured Articles</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {featured.map((p, i) => (
              <div key={i} className="blog-card reveal" style={{ overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,.08)', position: 'relative' }}>
                <div className="blog-img img-zoom" style={{ height: 260, background: '#ddd' }}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div style={{ position: 'absolute', top: 16, left: 16, background: '#6DC232', padding: '4px 12px', fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Featured
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#6DC232', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>{p.category}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 19, lineHeight: 1.3, marginBottom: 12, fontFamily: "'Barlow Condensed',sans-serif" }}>{p.title}</h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 14, color: '#888', fontSize: 12 }}>
                      <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><FiCalendar size={12} />{p.date}</span>
                      <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><FiUser size={12} />{p.author}</span>
                    </div>
                    <Link to="/blog" style={{ color: '#6DC232', fontWeight: 700, fontSize: 13, textDecoration: 'none', display: 'flex', gap: 4, alignItems: 'center' }}>
                      Read <FiArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section style={{ padding: '0 24px 90px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Filter bar */}
          <div style={{ background: '#fff', padding: '20px 24px', marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, boxShadow: '0 2px 12px rgba(0,0,0,.06)', position: 'sticky', top: 72, zIndex: 10 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} style={{ padding: '7px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Barlow',sans-serif", background: active === cat ? '#6DC232' : '#f0f0f0', color: active === cat ? '#fff' : '#333', border: 'none', transition: 'all .25s' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 0, background: '#f0f0f0', border: '1px solid #e0e0e0' }}>
              <FiSearch size={16} color="#999" style={{ margin: 'auto 12px' }} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles..."
                style={{ background: 'none', border: 'none', outline: 'none', padding: '10px 12px 10px 0', fontSize: 14, fontFamily: "'Barlow',sans-serif", width: 200 }}
              />
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
            {filtered.map((p, i) => (
              <div key={p.id} className={`blog-card reveal d${Math.min(i + 1, 6)}`} style={{ background: '#fff', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,.06)', transition: 'transform .3s, box-shadow .3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,.06)' }}>
                <div className="blog-img img-zoom" style={{ height: 220, background: '#ddd' }}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ background: 'rgba(109,194,50,.1)', color: '#6DC232', fontSize: 11, fontWeight: 700, letterSpacing: '.8px', textTransform: 'uppercase', padding: '3px 10px' }}>
                      {p.category}
                    </span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.3, marginBottom: 10, fontFamily: "'Barlow Condensed',sans-serif" }}>{p.title}</h3>
                  <p style={{ color: '#666', fontSize: 13.5, lineHeight: 1.7, marginBottom: 16 }}>{p.excerpt.substring(0, 120)}...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', gap: 12, color: '#aaa', fontSize: 12 }}>
                      <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><FiCalendar size={11} />{p.date}</span>
                      <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><FiUser size={11} />{p.author}</span>
                    </div>
                    <Link to="/blog" style={{ color: '#6DC232', fontWeight: 700, fontSize: 12, textDecoration: 'none', display: 'flex', gap: 3, alignItems: 'center', textTransform: 'uppercase', letterSpacing: '.5px' }}>
                      Read <FiArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 24px', color: '#888' }}>
              <FiSearch size={40} style={{ marginBottom: 16, opacity: .4 }} />
              <p style={{ fontSize: 16 }}>No articles match your search. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 24px', background: '#1a1c1e' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: '#6DC232' }} />
            <span style={{ color: '#6DC232', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Stay Informed</span>
            <div style={{ width: 30, height: 2, background: '#6DC232' }} />
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 16 }}>
            Get Security Tips Delivered Weekly
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, marginBottom: 28 }}>
            Join 8,000+ homeowners and security professionals who receive our free weekly security briefing.
          </p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 480, margin: '0 auto' }}>
            <input className="form-field" placeholder="Enter your email address" type="email" style={{ flex: 1, borderRight: 'none' }} />
            <button className="btn-green" style={{ clipPath: 'none', flexShrink: 0, padding: '13px 24px' }}>Subscribe</button>
          </div>
          <p style={{ color: 'rgba(255,255,255,.3)', fontSize: 11, marginTop: 10 }}>No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>
    </>
  )
}
