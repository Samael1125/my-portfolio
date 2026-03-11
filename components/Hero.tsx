"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {

return(

<section className="h-screen flex flex-col justify-center items-center text-center px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
>

Utkarsh Jhala

</motion.h1>

<div className="text-xl mt-6 text-gray-300">

<TypeAnimation
sequence={[
"AI Engineer",
2000,
"Machine Learning Developer",
2000,
"Backend Developer",
2000
]}
speed={50}
repeat={Infinity}
/>

</div>

<p className="max-w-xl mt-6 text-gray-400">
Building intelligent systems and scalable software solutions using
machine learning, data science, and modern web technologies.
</p>

<div className="flex gap-6 mt-8">

<a
href="/resume.pdf"
className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
>
Download Resume
</a>

<a
href="https://github.com/Samael1125"
className="text-2xl hover:text-blue-400"
>
<FaGithub/>
</a>

<a
href="https://linkedin.com"
className="text-2xl hover:text-blue-400"
>
<FaLinkedin/>
</a>

</div>

</section>

)

}