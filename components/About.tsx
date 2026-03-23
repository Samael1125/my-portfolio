"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function About(){

return(
<Reveal>
<section id="about" className="py-40 px-6 max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center mb-16">
About Me
</h2>

<p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
I am a passionate Computer Science Engineering student with a strong interest in Artificial Intelligence,
Machine Learning, and backend development. I enjoy building intelligent systems and solving real-world problems
through technology.
</p>

<div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
  <p>
    I love building intelligent systems, solving real-world problems,
    and continuously improving my skills in modern technologies.
  </p>
</div>

</section>
</Reveal>
)

}