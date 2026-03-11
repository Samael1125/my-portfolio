import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Github from "../components/Github"
import Timeline from "../components/Timeline"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Github/>
      <Contact/>
    </>
  )
}