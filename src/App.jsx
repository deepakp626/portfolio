import { Toaster } from 'react-hot-toast'
import './App.css'
import AllProjects from './Components/AllProjects'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import ProjectsSlide from './Components/ProjectsSlide'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {

  return (
    <>
        <NavBar />
        <HeroSection />
        <Education />
        <Skills />
        <ProjectsSlide />
        <AllProjects />
        <Services />
        <Contact />
        <Footer />
        <Toaster />
    </>
  )
}

export default App
