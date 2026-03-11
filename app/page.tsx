import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Github from "../components/Github"
import Timeline from "../components/Timeline"
import Certificates from "../components/Certificates"
import Achievements from "../components/Achievements"
import Resume from "../components/Resume"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <Certificates/>
      <Achievements/>
      <Resume/>
      <Github/>
      <Contact/>
    </>
  )
}