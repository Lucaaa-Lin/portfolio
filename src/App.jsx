import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyPVW from './components/CaseStudyPVW'

export default function App() {
  const [page, setPage] = useState('home')

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goCaseStudy = (id) => {
    setPage(`case-${id}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (page === 'case-pvw') {
    return (
      <>
        <Nav />
        <main>
          <CaseStudyPVW onBack={goHome} />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onCaseStudy={goCaseStudy} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
