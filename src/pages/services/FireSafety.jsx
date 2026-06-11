import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'Fire Safety Systems',
  subtitle: 'Life-saving fire detection, suppression and emergency response systems — designed to meet all regulations and protect every occupant.',
  heroBg: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'Fire Safety Systems That Protect Lives, Not Just Property',
    para1: 'A fire alarm system is only as good as its ability to detect a genuine threat early, notify the right people immediately, and guide occupants to safety without causing panic from false alarms. Our fire safety division engineers solutions that achieve exactly this balance.',
    para2: 'We are accredited installers of leading fire safety brands and maintain an in-house team of fire safety engineers who hold NICET, NFPA and local authority certifications. Every installation is designed from first principles around your building\'s specific layout and occupancy profile.',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '🔔', title: 'Addressable Fire Panels', desc: 'Intelligent control panels that identify the exact location of every alarm device, enabling faster evacuation guidance and reducing false alarms to near zero.' },
    { icon: '💨', title: 'Multi-Criteria Detectors', desc: 'Advanced optical and heat sensors that analyse multiple environmental variables to distinguish genuine fires from cooking smoke, steam or dust.' },
    { icon: '☁️', title: 'Carbon Monoxide Detection', desc: 'Silent killer protection — CO detectors integrated into your fire system with automatic emergency service notification upon trigger.' },
    { icon: '🚿', title: 'Suppression Systems', desc: 'Wet, dry and gaseous suppression systems for server rooms, kitchens, plant rooms and high-value storage areas — engineered to BS EN 12845.' },
    { icon: '📢', title: 'Emergency Voice Comms', desc: 'Compliant EVAC systems with intelligible voice announcements and two-way communication between the control point and fire wardens in large buildings.' },
    { icon: '📋', title: 'Compliance & Certification', desc: 'Full documentation package including fire risk assessment integration, L1/L2/M1 category design and annual inspection certificates.' },
  ],
  benefits: {
    heading: 'The Stakes Have Never Been Higher — Nor The Technology Better',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Early Detection Saves Lives', desc: 'Our multi-criteria detectors activate minutes earlier than conventional systems — when seconds genuinely determine outcomes.' },
      { title: 'Zero Compliance Risk', desc: 'All our fire systems are designed and certified to current NFPA, BS 5839 and local fire authority requirements.' },
      { title: 'Dramatically Reduced False Alarms', desc: 'Intelligent detection technology reduces unwanted alarms by over 90% compared to conventional ionisation detectors.' },
      { title: 'Connected To Help 24/7', desc: 'Automatic central station notification means emergency services are dispatched instantly, even when the building is unoccupied.' },
    ],
  },
  process: [
    { title: 'Fire Risk Assessment', desc: 'Detailed analysis of your building\'s fire risks, occupancy type, detection requirements and suppression needs.' },
    { title: 'L-Category System Design', desc: 'Engineered design to the appropriate BS or NFPA category, documented and submitted for authority approval.' },
    { title: 'Certified Installation', desc: 'Installation by NICET-certified technicians with all work tested to manufacturer and code specifications.' },
    { title: 'Commissioning & Handover', desc: 'Full system commissioning, cause-and-effect verification, staff training and certificate of compliance issued.' },
  ],
  faqs: [
    { q: 'Do I legally need a fire alarm system?', a: 'Most commercial and multi-occupancy residential buildings are legally required to have a fire detection system. Requirements vary by building type and local jurisdiction — we can advise on your specific obligations.' },
    { q: 'How often should fire alarms be tested?', a: 'Weekly manual call point tests, 6-monthly detector tests and annual full inspection are required under most fire codes. We offer maintenance contracts covering all these obligations.' },
    { q: 'Can you upgrade our existing system?', a: 'Yes — in many cases existing cabling and devices can be retained and integrated with a new addressable panel, significantly reducing upgrade costs.' },
  ],
  relatedServices: [
    { icon: '🏠', label: 'Home Security', desc: 'Complete residential protection', path: '/services/home-security' },
    { icon: '🏢', label: 'Commercial Security', desc: 'Enterprise security solutions', path: '/services/commercial-security' },
    { icon: '🔒', label: 'Access Control', desc: 'Smart access management systems', path: '/services/access-control' },
    { icon: '📷', label: 'CCTV Surveillance', desc: 'Professional camera systems', path: '/services/cctv-surveillance' },
  ],
}

export default function FireSafety() {
  return <ServiceTemplate service={data} />
}
