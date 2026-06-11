import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/company/Mission'
import Certifications from './pages/company/Certifications'
import WhyUs from './pages/company/WhyUs'
import Services from './pages/Services'
import Contact from './pages/Contact'
import HomeSecurity from './pages/services/HomeSecurity'
import CommercialSecurity from './pages/services/CommercialSecurity'
import FireSafety from './pages/services/FireSafety'
import AccessControl from './pages/services/AccessControl'
import SmartHome from './pages/services/SmartHome'
import CCTVSurveillance from './pages/services/CCTVSurveillance'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/company/mission" element={<Mission />} />
        <Route path="/company/certifications" element={<Certifications />} />
        <Route path="/company/why-us" element={<WhyUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/home-security" element={<HomeSecurity />} />
        <Route path="/services/commercial-security" element={<CommercialSecurity />} />
        <Route path="/services/fire-safety" element={<FireSafety />} />
        <Route path="/services/access-control" element={<AccessControl />} />
        <Route path="/services/smart-home" element={<SmartHome />} />
        <Route path="/services/cctv-surveillance" element={<CCTVSurveillance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
