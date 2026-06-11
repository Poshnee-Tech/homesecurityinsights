import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'Access Control Systems',
  subtitle: 'Control who enters every door — with biometrics, smart keycards, mobile credentials and full audit trail logging.',
  heroBg: 'https://images.unsplash.com/photo-1569946386006-4bd33a1b4b11?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'Know Exactly Who Is In Your Building, At Every Moment',
    para1: 'Keys get lost. PINs get shared. Tailgating happens. Traditional physical access control creates security gaps that modern access systems are specifically engineered to close. Our access control solutions range from single smart locks to enterprise-wide systems managing hundreds of doors across multiple sites.',
    para2: 'Every system is underpinned by our cloud-based access management platform — giving administrators complete visibility and control, with granular time-based access rules, instant credential revocation, and a searchable audit trail of every access event across your estate.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '👆', title: 'Biometric Authentication', desc: 'Fingerprint, iris and facial recognition readers that achieve 99.9%+ accuracy — eliminating credential sharing and proxy access entirely.' },
    { icon: '💳', title: 'Smart Keycard Systems', desc: 'MIFARE DESFire EV2 encrypted cards and readers that cannot be cloned — with time-based, zone-based and role-based access rules.' },
    { icon: '📱', title: 'Mobile Credentials', desc: 'Smartphone-based access using BLE and NFC technology — employees carry their credential on the device they already have with them.' },
    { icon: '🚪', title: 'Multi-Door Controller', desc: 'Centralised controllers managing up to 256 doors per controller, with full real-time status, remote unlock and door forced/held open alarms.' },
    { icon: '👥', title: 'Visitor Management', desc: 'Digital visitor pre-registration, self-service kiosk check-in, visitor badge printing and automatic access credential provisioning and expiry.' },
    { icon: '📊', title: 'Full Audit Trail', desc: 'Timestamped log of every access event — granted, denied, forced, held — searchable and exportable for compliance, HR and incident investigations.' },
  ],
  benefits: {
    heading: 'Access Control That Actually Controls Access',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Instant Credential Revocation', desc: 'When an employee leaves or a card is lost, revoke access instantly from anywhere — no lock changes, no waiting.' },
      { title: 'Eliminate Tailgating', desc: 'Turnstiles, mantrap airlocks and anti-passback rules prevent unauthorised personnel from piggybacking through secured doors.' },
      { title: 'Protect High-Value Areas', desc: 'Create security zones within your building — with different authentication requirements for server rooms, labs or executive floors.' },
      { title: 'HR & Payroll Integration', desc: 'Automatic provisioning of new starters and revocation of leavers via integration with your HRIS eliminates manual administration.' },
    ],
  },
  process: [
    { title: 'Site Survey', desc: 'Detailed mapping of all doors, gates and barriers requiring control, with assessment of current hardware and cabling.' },
    { title: 'Access Policy Design', desc: 'We work with your team to design the access zones, user groups and rules that reflect your actual security requirements.' },
    { title: 'Hardware Installation', desc: 'Certified technicians install and configure all readers, controllers, locking hardware and door furniture.' },
    { title: 'Software Configuration', desc: 'Full system configuration, user enrolment, integration testing and administrator training before handover.' },
  ],
  faqs: [
    { q: 'Can I manage the system myself after installation?', a: 'Yes — our cloud-based management portal is designed for easy day-to-day administration. We also provide full training and ongoing support.' },
    { q: 'What happens during a power outage?', a: 'All our systems include battery backup and fail-safe or fail-secure door configurations depending on your requirements. Critical systems can be backed by UPS.' },
    { q: 'Can you integrate access control with CCTV?', a: 'Yes — our integrated platform links access events to camera footage automatically, so you can pull up the video of any access event in seconds.' },
  ],
  relatedServices: [
    { icon: '📷', label: 'CCTV Surveillance', desc: 'Correlate access events with video', path: '/services/cctv-surveillance' },
    { icon: '🏢', label: 'Commercial Security', desc: 'Complete enterprise security', path: '/services/commercial-security' },
    { icon: '💡', label: 'Smart Home Automation', desc: 'Smart locks for residential use', path: '/services/smart-home' },
    { icon: '🔥', label: 'Fire Safety Systems', desc: 'Integrated fire & access systems', path: '/services/fire-safety' },
  ],
}

export default function AccessControl() {
  return <ServiceTemplate service={data} />
}
