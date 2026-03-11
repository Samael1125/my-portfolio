"use client"

import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

export default function Resume(){

return(

<section id="resume" className="py-32 px-6 text-center">

<h2 className="text-4xl font-bold mb-12">
Resume
</h2>

<p className="text-gray-400 max-w-xl mx-auto mb-8">
Download my resume to learn more about my education,
projects, technical skills, and experience.
</p>

<motion.a
href="/resume.pdf"
download
whileHover={{scale:1.05}}
className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition"
>

<FaDownload/>

Download Resume

</motion.a>

</section>

)

}