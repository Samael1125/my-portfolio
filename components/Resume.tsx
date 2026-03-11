"use client"

import { motion } from "framer-motion"

export default function Resume(){

return(

<section className="py-40 px-6 text-center">

<h2 className="text-5xl font-bold mb-10">
Resume
</h2>

<p className="text-gray-400 mb-10">
Download my resume to explore my skills, projects and experience.
</p>

<motion.a
href="/resume.pdf"
download
whileHover={{scale:1.1}}
className="px-8 py-4 bg-green-500 text-black rounded-lg font-semibold"
>

Download Resume

</motion.a>

</section>

)

}