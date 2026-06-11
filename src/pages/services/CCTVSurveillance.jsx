import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'CCTV Surveillance Systems',
  subtitle: 'Professional 4K camera systems with AI-powered analytics, cloud storage and expert installation — complete visual security for any property.',
  heroBg: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'See Everything. Miss Nothing. Act Instantly.',
    para1: 'Modern CCTV surveillance goes far beyond recording footage. Our AI-powered camera systems actively analyse everything they see — identifying people, vehicles, behaviours and anomalies in real time, and alerting you only when something genuinely requires your attention.',
    para2: 'We design camera systems from scratch for every property, optimising for coverage, lighting conditions, storage requirements and your specific threat model. The result is a surveillance system that actually works — not just rows of cameras that generate terabytes of footage nobody ever reviews.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '🎥', title: '4K Ultra HD Cameras', desc: 'True 4K (8MP) resolution cameras that capture licence plates at 20 metres and facial features at 10 metres — providing court-admissible evidence quality.' },
    { icon: '🌙', title: 'True Night Vision', desc: 'Colour night vision with 0 lux capability using starlight sensors and white-light illuminators — full-colour images in near-total darkness.' },
    { icon: '🤖', title: 'AI Video Analytics', desc: 'On-camera and server-side AI that detects and classifies people vs. vehicles, loitering, line crossing, crowd gathering, abandoned objects and directional intrusion.' },
    { icon: '☁️', title: 'Cloud & NVR Storage', desc: 'Flexible storage options including secure cloud, on-site NVR with RAID redundancy, or hybrid approaches — with retention periods from 7 days to 5 years.' },
    { icon: '📡', title: 'Remote Live Viewing', desc: 'Watch live and recorded footage from any camera, on any device, anywhere in the world — with secure encrypted streaming via our mobile app.' },
    { icon: '🔗', title: 'System Integration', desc: 'Native integration with access control systems — automatically pull up camera footage for any access event, alarm trigger or incident in seconds.' },
  ],
  benefits: {
    heading: 'Surveillance That Works While You Work',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Proactive, Not Reactive', desc: 'AI analytics alert you to developing situations — loitering, perimeter approach, tailgating — before incidents occur, not after.' },
      { title: 'Irrefutable Evidence', desc: '4K footage with GPS coordinates, timestamp metadata and chain-of-custody documentation that withstands legal scrutiny.' },
      { title: 'Operational Intelligence', desc: 'Beyond security, analytics provide valuable business data — footfall patterns, queue lengths, staff deployment and space utilisation.' },
      { title: 'Deterrence at Scale', desc: 'Prominent, high-quality cameras combined with on-site signage reduce crime targeting by over 60% according to independent studies.' },
    ],
  },
  process: [
    { title: 'Site Survey & Design', desc: 'Camera placement plan developed using 3D modelling software to guarantee every square metre of your property is covered.' },
    { title: 'Infrastructure Assessment', desc: 'Network capacity, cabling routes, power supply and storage requirements assessed and planned before any work begins.' },
    { title: 'Professional Installation', desc: 'Cameras mounted at the optimal height and angle, cabling concealed, NVR configured and network hardened against cyber threats.' },
    { title: 'Analytics Configuration', desc: 'AI rules, alert thresholds and monitoring centre integration configured and tested before sign-off.' },
  ],
  faqs: [
    { q: 'How long is footage stored?', a: 'Storage duration depends on your configuration and storage capacity. We typically recommend 30 days for commercial properties, with critical areas at 90 days. Cloud storage plans offer flexible retention.' },
    { q: 'Can cameras see in complete darkness?', a: 'Yes — our starlight sensor cameras capture colour footage in near-total darkness. For areas requiring more light, we offer integrated white-light illuminators.' },
    { q: 'Are your cameras compliant with privacy laws?', a: 'Our systems are designed to meet GDPR, CCPA and local privacy regulations. We provide signage packs and privacy impact assessment support with every installation.' },
    { q: 'What is the camera lifespan?', a: 'Professional-grade security cameras typically last 8–12 years. We recommend servicing every 3 years to clean lenses, check seals and update firmware.' },
  ],
  relatedServices: [
    { icon: '🔒', label: 'Access Control', desc: 'Integrate cameras with door control', path: '/services/access-control' },
    { icon: '🏢', label: 'Commercial Security', desc: 'Complete enterprise security', path: '/services/commercial-security' },
    { icon: '🏠', label: 'Home Security', desc: 'Residential camera systems', path: '/services/home-security' },
    { icon: '💡', label: 'Smart Home Automation', desc: 'Integrate cameras with smart home', path: '/services/smart-home' },
  ],
}

export default function CCTVSurveillance() {
  return <ServiceTemplate service={data} />
}
