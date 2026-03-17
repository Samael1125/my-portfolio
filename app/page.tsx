import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Github from "@/components/Github"
import Timeline from "@/components/Timeline"
import Certificates from "@/components/Certificates"
import Achievements from "@/components/Achievements"
import Resume from "@/components/Resume"
import Footer from "@/components/Footer"
import Stats from "@/components/Stats"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Coding from "@/components/Coding"
import ShortProfile from "@/components/ShortProfile"
import GithubActivity from "@/components/GithubActivity"
import LeetCodeStats from "@/components/LeetCodeStats"
import DevActivity from "@/components/DevActivity"
import Reveal from "@/components/Reveal"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ShortProfile/>
      <Stats/>
      <Reveal>
        <About/>
      </Reveal>
      <Education/>
      <Skills/>
      <Reveal>
        <Projects/>
      </Reveal>
      <Experience/>
      <Timeline/>
      <Certificates/>
      <Achievements/>
      <DevActivity/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}