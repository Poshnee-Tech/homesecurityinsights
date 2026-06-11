import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'Smart Home Automation',
  subtitle: 'Transform your home into an intelligent living space — where security, comfort and energy efficiency work together seamlessly.',
  heroBg: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'Where Security Meets Intelligence',
    para1: 'Our smart home automation does more than lock doors and turn off lights. It creates a home that actively responds to your lifestyle — learning your routines, adapting to your preferences, and always keeping safety at the centre of every automation.',
    para2: 'Our automation systems are built on open, industry-standard protocols (Z-Wave, Zigbee, Matter) — meaning they integrate with virtually any smart device you already own, from Philips Hue lights to Nest thermostats and Ring doorbells, all unified in a single platform.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '💡', title: 'Smart Lighting Control', desc: 'Automated lighting scenes, motion-triggered illumination, presence simulation when you\'re away, and full dimmer control — all scheduled and voice-activated.' },
    { icon: '🌡️', title: 'Climate Automation', desc: 'Learning thermostats that anticipate your schedule, geo-fencing that adjusts temperature as you approach home, and room-by-room zone control.' },
    { icon: '🔒', title: 'Smart Lock Integration', desc: 'Deadbolts that lock automatically when you leave, unlock for trusted visitors via time-limited codes, and send instant notifications for every entry.' },
    { icon: '🎬', title: 'Scenes & Routines', desc: 'One-touch scenes like "Good Morning," "Movie Night" or "Vacation Mode" that trigger multiple devices simultaneously to match your lifestyle moment.' },
    { icon: '🗣️', title: 'Voice Assistant Integration', desc: 'Full native integration with Amazon Alexa and Google Assistant — control your entire home with simple voice commands.' },
    { icon: '⚡', title: 'Energy Management', desc: 'Real-time energy monitoring, smart plug scheduling, solar integration and automated appliance management that can reduce your energy bills by up to 25%.' },
  ],
  benefits: {
    heading: 'Living Smarter Starts With Being Safer',
    img: 'https://images.unsplash.com/photo-1600518464441-9306203fc8f0?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Always Home — Even When You\'re Not', desc: 'Presence simulation, automated lighting patterns and smart locks create the illusion of occupancy that genuinely deters opportunistic burglars.' },
      { title: 'One App For Everything', desc: 'Control your locks, cameras, lighting, heating, appliances and security system from a single beautiful interface on your phone.' },
      { title: 'Savings That Pay For The System', desc: 'Smart thermostats and energy management typically save $400–800 per year in energy costs — helping your investment pay for itself.' },
      { title: 'Ageing In Place', desc: 'Motion sensing, medication reminders, fall detection integration and panic buttons allow elderly family members to live independently longer.' },
    ],
  },
  process: [
    { title: 'Lifestyle Consultation', desc: 'We understand how you live, your daily routines, priorities and the devices you already own or want to add.' },
    { title: 'System Design', desc: 'Our engineers design an automation ecosystem around your home\'s layout and your family\'s specific needs.' },
    { title: 'Installation & Configuration', desc: 'Professional installation of all hardware with complete configuration of all automations, scenes and rules.' },
    { title: 'Personalisation & Training', desc: 'We customise the system to your preferences and ensure every family member feels comfortable using it.' },
  ],
  faqs: [
    { q: 'Do I need to replace all my existing devices?', a: 'Not necessarily. Our platform integrates with hundreds of existing smart home devices via Z-Wave, Zigbee and Matter protocols. We\'ll assess compatibility during your consultation.' },
    { q: 'What happens if the internet goes down?', a: 'All local automations continue to function via the on-premises controller. Security features switch to cellular backup automatically.' },
    { q: 'Can children use the system safely?', a: 'Yes — the app includes family accounts with appropriate access levels for children, plus parental controls for sensitive functions like door locks and alarm arming.' },
  ],
  relatedServices: [
    { icon: '🏠', label: 'Home Security', desc: 'Integrate alarms with your smart home', path: '/services/home-security' },
    { icon: '🔒', label: 'Access Control', desc: 'Smart lock and entry systems', path: '/services/access-control' },
    { icon: '📷', label: 'CCTV Surveillance', desc: 'Smart cameras for home monitoring', path: '/services/cctv-surveillance' },
    { icon: '🔥', label: 'Fire Safety Systems', desc: 'Smart fire and CO detection', path: '/services/fire-safety' },
  ],
}

export default function SmartHome() {
  return <ServiceTemplate service={data} />
}
