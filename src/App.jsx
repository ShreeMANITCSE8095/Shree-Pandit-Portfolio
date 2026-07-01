import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import CodingProfiles from './components/CodingProfiles'
import Achievements from './components/Achievements'
import Experience from './components/Internships'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <CodingProfiles />
      <Experience />
      <Leadership />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
