import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  title: 'Commercial Security Systems',
  subtitle: 'Enterprise-grade protection for offices, retail stores and industrial facilities — scalable, integrated and managed from a single platform.',
  heroBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  description: {
    heading: 'Security Infrastructure Built To Scale With Your Business',
    para1: 'Commercial properties face fundamentally different security challenges than homes — higher foot traffic, multiple access zones, complex compliance requirements, and vastly more to protect. Our commercial division specialises in designing systems that address every layer of your security needs.',
    para2: 'From a single retail location to a multi-site enterprise spanning dozens of buildings, our unified platform gives your security and operations teams complete visibility and control from a single, cloud-based dashboard.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
  features: [
    { icon: '🏢', title: 'Multi-Site Management', desc: 'Monitor and manage security across all your locations from a single cloud-based dashboard with role-based access for different management tiers.' },
    { icon: '📊', title: 'Business Intelligence', desc: 'Advanced analytics including footfall counting, queue management, dwell time analysis and exception-based reporting integrated with your security data.' },
    { icon: '🔐', title: 'Perimeter Detection', desc: 'Video analytics, PIR sensors and beam detectors create invisible perimeter tripwires that alert your team before intruders reach the building.' },
    { icon: '👤', title: 'Video Analytics', desc: 'AI-powered cameras that identify loitering, abandoned objects, restricted zone entry, direction of travel and crowd density anomalies automatically.' },
    { icon: '📋', title: 'Compliance Reporting', desc: 'Automated compliance reports for insurance, auditors and regulatory bodies — meeting ISO 27001, SIA, and industry-specific security requirements.' },
    { icon: '🔄', title: 'System Integration', desc: 'Native integration with your existing IT infrastructure, HR systems, visitor management platforms and building management systems.' },
  ],
  benefits: {
    heading: 'Security That Protects Your Assets, People & Reputation',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    items: [
      { title: 'Eliminate Theft & Shrinkage', desc: 'Integrated CCTV and EAS systems reduce retail shrinkage by an average of 67% within the first year of deployment.' },
      { title: 'Duty of Care Compliance', desc: 'Documented security measures protect you from liability claims and demonstrate duty of care to employees and visitors.' },
      { title: 'Operational Efficiency', desc: 'Security analytics reveal operational inefficiencies — bottlenecks, underutilised spaces and staffing mismatches — that cut costs.' },
      { title: 'Rapid Incident Resolution', desc: 'Detailed incident timelines built from correlated CCTV, access and alarm data accelerate investigations and insurance claims.' },
    ],
  },
  process: [
    { title: 'Security Audit', desc: 'Comprehensive assessment of your premises, threat profile, existing infrastructure and compliance requirements.' },
    { title: 'System Architecture', desc: 'Our engineers design a fully integrated security ecosystem covering all access points, areas and systems.' },
    { title: 'Phased Deployment', desc: 'We deploy in phases to minimise operational disruption, with each phase fully tested before proceeding.' },
    { title: 'Staff Training', desc: 'Full training for your security team and end-users, with ongoing support and system health monitoring.' },
  ],
  faqs: [
    { q: 'How long does a commercial installation take?', a: 'Timelines vary by project size. A typical small business takes 1–2 days; enterprise deployments are typically planned in phases over weeks.' },
    { q: 'Can you integrate with our existing systems?', a: 'Yes — our systems are designed to integrate with leading access control, HR, visitor management and building management systems via open APIs.' },
    { q: 'Do you provide ongoing maintenance contracts?', a: 'Absolutely. We offer flexible maintenance contracts including annual servicing, emergency call-outs and 24/7 remote system health monitoring.' },
  ],
  relatedServices: [
    { icon: '🔒', label: 'Access Control', desc: 'Control every entry point across your estate', path: '/services/access-control' },
    { icon: '📷', label: 'CCTV Surveillance', desc: '4K camera systems with AI analytics', path: '/services/cctv-surveillance' },
    { icon: '🔥', label: 'Fire Safety Systems', desc: 'Commercial fire detection and suppression', path: '/services/fire-safety' },
    { icon: '🏠', label: 'Home Security', desc: 'Protect your executives at home too', path: '/services/home-security' },
  ],
}

export default function CommercialSecurity() {
  return <ServiceTemplate service={data} />
}
