"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<motion.section
id="about"
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="py-32 text-center"
>

<h2 className="text-4xl font-bold mb-6">
About Me
</h2>

<p className="max-w-2xl mx-auto">
I am a passionate Computer Science Engineering student with a strong interest in 
Artificial Intelligence, Machine Learning, and backend development. I enjoy 
exploring modern technologies and applying them to build intelligent, real-world 
solutions. 
I am constantly motivated to learn new tools, frameworks, and concepts that help 
me grow as a developer and problem solver. My focus lies in developing scalable 
systems, working with data-driven technologies, and creating impactful solutions 
that bridge the gap between technology and real-world challenges.
</p>
    </motion.section>
  )
}