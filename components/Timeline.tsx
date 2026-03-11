"use client"

import { motion } from "framer-motion"

const timeline = [

{
year:"2023",
title:"B.Tech Computer Science Engineering",
desc:"Started Bachelor of Technology in Computer Science Engineering."
},

{
year:"2024",
title:"Local Technician Finder",
desc:"Developed a platform connecting users with nearby technicians using Flask and SQLite."
},

{
year:"2025",
title:"Secure AI Code Review System",
desc:"Built an AI-powered system to review code security and quality."
},

{
year:"2025",
title:"Smart Irrigation ML Project",
desc:"Developed a machine learning model for analyzing groundwater data to support smart irrigation decisions."
}

]

export default function Timeline(){

return(

<section id="timeline" className="py-32 px-6">

<h2 className="text-4xl font-bold text-center mb-20">
Journey
</h2>

<div className="max-w-3xl mx-auto relative border-l border-gray-600">

{timeline.map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.5}}
className="ml-6 mb-12"
>

<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 mt-2"></div>

<h3 className="text-lg font-semibold">
{item.year} — {item.title}
</h3>

<p className="text-gray-400 text-sm mt-2">
{item.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}