"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<section id="about" className="py-40 px-6">

<h2 className="text-5xl font-bold text-center mb-16">
About Me
</h2>

<p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
I am a passionate Computer Science Engineering student with a strong interest in Artificial Intelligence,
Machine Learning, and backend development. I enjoy building intelligent systems and solving real-world problems
through technology.
</p>

<div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20">

{[
"Artificial Intelligence",
"Machine Learning",
"Backend Development",
"Data Analytics"
].map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
>

<p className="text-lg font-semibold">{item}</p>

</motion.div>

))}

</div>

</section>

)

}