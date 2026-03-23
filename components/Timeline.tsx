"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const timeline = [

{
year:"2026",
desc:"Developed Secure AI Code Review System using LLMs for vulnerability detection and optimization.",
images:["/projects/codereview.png"]
},

{
year:"2025",
desc:"Built Smart Irrigation ML System + Local Technician Finder with full-stack architecture.",
images:[
"/projects/irrigation.png",
"/projects/technician.png"
]
},

{
year:"2024",
desc:"Strengthened backend + ML skills. Built multiple real-world systems and academic projects.",
images:[
"/projects/triviabot.png"
]
},

{
year:"2023",
desc:"Started B.Tech in Computer Science Engineering and began DSA + development journey.",
images:[]
}

]

export default function Timeline(){

return(

<section id="timeline" className="py-40 px-6">

<h2 className="text-5xl font-bold text-center mb-24">
Journey
</h2>

<div className="relative max-w-5xl mx-auto">

{/* vertical line */}
<div className="absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

{timeline.map((item,i)=>(

<div key={i} className="flex gap-10 mb-32">

{/* LEFT SIDE (YEAR + DOT) */}
<div className="relative w-24 flex justify-center">

{/* dot */}
<div className="absolute top-2 w-4 h-4 rounded-full bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

{/* year */}
<h3 className="text-4xl font-bold text-gray-500 sticky top-32">
{item.year}
</h3>

</div>


{/* RIGHT SIDE CONTENT */}
<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="flex-1"
>

{/* description */}
<p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-2xl">
{item.desc}
</p>

{/* images */}
{item.images.length > 0 && (

<div className="grid grid-cols-2 gap-4">

{item.images.map((img,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="relative h-40 md:h-60 rounded-xl overflow-hidden border border-white/10"
>

<Image
src={img}
alt="project"
fill
className="object-cover"
/>

</motion.div>

))}

</div>

)}

</motion.div>

</div>

))}

</div>

</section>

)

}