import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import WhyThisTraining from '../components/WhyThisTraining.jsx'
import Curriculum from '../components/Curriculum.jsx'
import Audience from '../components/Audience.jsx'
import EventDetails from '../components/EventDetails.jsx'
import AboutTrainer from '../components/AboutTrainer.jsx'
import TrustSection from '../components/TrustSection.jsx'
import Registration from '../components/Registration.jsx'
import FAQ from '../components/FAQ.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Landing() {
  useReveal([])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyThisTraining />
        <Curriculum />
        <Audience />
        <EventDetails />
        <AboutTrainer />
        <TrustSection />
        <Registration />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
