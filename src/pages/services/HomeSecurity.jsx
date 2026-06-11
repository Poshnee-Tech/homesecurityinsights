import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'Home Security Systems',
  subtitle: 'Complete residential security with smart cameras, sensors and professional monitoring — all controlled from your smartphone.',
  heroBg: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'Intelligent Protection Designed For Your Home',
    para1: 'Our home security systems are built around one principle — your family should feel genuinely safe, not just feel like they have a security system. We combine the latest smart technology with professional monitoring to create a seamless layer of protection around your home.',
    para2: 'Every system is custom-designed by a certified engineer following a free on-site assessment. We consider your home\'s layout, entry points, neighbourhood crime data and lifestyle to build a system that works for you — not a one-size-fits-all package.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '📷', title: '4K Smart Cameras', desc: 'Ultra-HD indoor and outdoor cameras with night vision, wide-angle coverage and AI-powered person detection to eliminate false alerts from pets or passing cars.' },
    { icon: '🔔', title: 'Smart Doorbell Camera', desc: 'See, hear and speak to anyone at your door from anywhere in the world via our mobile app — with motion-triggered recording and package detection.' },
    { icon: '🚪', title: 'Door & Window Sensors', desc: 'Instant alerts when any entry point is opened or tampered with. Magnetic contact sensors that work on all door and window types.' },
    { icon: '🔥', title: 'Smoke & CO Detectors', desc: 'Smart detectors that differentiate between smoke types, minimise false alarms and automatically alert our monitoring centre the moment a real threat is detected.' },
    { icon: '📱', title: 'Mobile App Control', desc: 'Arm and disarm your system, view live cameras, receive alerts and manage every device from a single intuitive app — available for iOS and Android.' },
    { icon: '⚡', title: '24/7 Professional Monitoring', desc: 'Our UL-listed monitoring centre watches your property every minute of every day, dispatching emergency services within seconds of an alarm trigger.' },
  ],
  benefits: {
    heading: 'Real Peace Of Mind, Not Just a Sticker On The Window',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Deter Before They Enter', desc: 'Visible professional security systems reduce residential break-in risk by up to 300%. Criminals choose softer targets.' },
      { title: 'Instant Emergency Response', desc: 'When an alarm triggers, our team dispatches police, fire or medical services within seconds — not minutes.' },
      { title: 'Home Insurance Discounts', desc: 'Most major insurers offer 10–20% premium discounts for professionally monitored security systems.' },
      { title: 'Evidence That Holds Up', desc: '4K footage with metadata provides court-admissible evidence for insurance claims and criminal prosecutions.' },
    ],
  },
  process: [
    { title: 'Free Home Assessment', desc: 'A certified engineer visits your home, identifies vulnerabilities and recommends the optimal system design.' },
    { title: 'Custom System Design', desc: 'We design a solution around your home\'s specific layout, your lifestyle and your budget.' },
    { title: 'Professional Installation', desc: 'Our technicians install and configure every component with minimal disruption — typically in under a day.' },
    { title: 'Training & Handover', desc: 'We walk you through every feature and ensure your whole family knows how to use the system confidently.' },
  ],
  faqs: [
    { q: 'How long does installation take?', a: 'Most residential installations are completed in 4–8 hours. Larger or more complex homes may require a second visit.' },
    { q: 'Will the system work if the internet goes down?', a: 'Yes — our systems operate on cellular backup, ensuring monitoring continues even during internet or power outages.' },
    { q: 'Can I take the system with me if I move?', a: 'Absolutely. Our systems are portable. We can relocate and reinstall your system at your new address.' },
    { q: 'Does it work with Alexa and Google Home?', a: 'Yes, our systems are fully compatible with Amazon Alexa and Google Home for voice control.' },
  ],
  relatedServices: [
    { icon: '📷', label: 'CCTV Surveillance', desc: 'Professional camera systems for complete coverage', path: '/services/cctv-surveillance' },
    { icon: '💡', label: 'Smart Home Automation', desc: 'Integrate security with your smart home', path: '/services/smart-home' },
    { icon: '🔒', label: 'Access Control', desc: 'Control every entry point with smart locks', path: '/services/access-control' },
    { icon: '🔥', label: 'Fire Safety Systems', desc: 'Advanced fire and CO detection systems', path: '/services/fire-safety' },
  ],
}

export default function HomeSecurity() {
  return <ServiceTemplate service={data} />
}
