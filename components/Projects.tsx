"use client"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"
import ProjectModal from "./ProjectModal"

const projects = [

{
title:"Local Technician Finder",
desc:"Full-stack platform for discovering verified local technicians with ratings, reviews and location-based sorting.",
image:"/projects/technician.png",
tech:["React","Node.js","MongoDB","REST API"],
category: "Fullstack",
github:"https://github.com/Samael1125/Local-Technician-Finder",
demo:"#"
},

{
title:"Smart Irrigation ML System",
desc:"Machine learning system analyzing groundwater data with Random Forest, XGBoost, SVM and Logistic Regression models.",
image:"/projects/irrigation.png",
tech:["Python","Machine Learning","GIS","Data Analytics"],
category: "ML",
github:"#",
demo:"#"
},

{
title:"Secure AI Code Review System",
desc:"AI-powered platform that reviews code using LLMs and provides feedback on security, optimization and code quality.",
image:"/projects/codereview.png",
tech:["Python","Flask","SQLAlchemy","Bootstrap","Gemini API"],
category: "Fullstack",

github:"https://github.com/Samael1125/Secure-AI-Code-Review-System",
demo:"#"
},

{
title:"Trivia Quiz Web Application",
desc:"Interactive quiz platform using Flask and Open Trivia API with dynamic MCQs and real-time scoring.",
image:"/projects/triviabot.png",
tech:["Python","Flask","JavaScript","REST API"],
category: "AI",
github:"https://github.com/Samael1125/TriviaBot",
demo:"#"
}

]

function Card({project}:any){

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotateX = useTransform(y, [-100,100],[12,-12])
const rotateY = useTransform(x, [-100,100],[-12,12])

function handleMouseMove(e:any){

const rect = e.currentTarget.getBoundingClientRect()

const mouseX = e.clientX - rect.left
const mouseY = e.clientY - rect.top

const centerX = rect.width / 2
const centerY = rect.height / 2

x.set(mouseX - centerX)
y.set(mouseY - centerY)

}

function handleMouseLeave(){
x.set(0)
y.set(0)
}

return(

<motion.div
className="rounded-2xl overflow-hidden bg-[#050816] border border-white/10 hover:border-green-400 transition relative group"
style={{
rotateX,
rotateY,
transformPerspective:1200
}}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
whileHover={{y:-10}}
>

{/* IMAGE */}

<div className="relative h-60 overflow-hidden">

<Image
src={project.image}
alt={project.title}
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

</div>

{/* CONTENT */}

<div className="p-6">

<h3 className="text-xl font-semibold">
{project.title}
</h3>

<p className="text-gray-400 mt-2 text-sm">
{project.desc}
</p>

{/* TECH */}

<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map((t:any,i:number)=>(

<span
key={i}
className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full"
>
{t}
</span>

))}

</div>

{/* GITHUB */}

<div className="mt-5">

<a
href={project.github}
target="_blank"
className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
>

<FaGithub/>
Github

</a>

</div>

</div>

</motion.div>

)

}

export default function Projects(){

const [active,setActive] = useState("All")

const filteredProjects =
active === "All"
? projects
: projects.filter(p => p.category === active)

return(

<section className="py-32 px-6">

<h2 className="text-5xl font-bold text-center mb-16">

A small selection of
<span className="text-green-400"> recent projects</span>

</h2>

{/* FILTER BUTTONS */}

<div className="flex justify-center gap-4 mb-16 flex-wrap">

{["All","Fullstack","ML","AI","Web"].map((cat)=>(
<button
key={cat}
onClick={()=>setActive(cat)}
className={`px-6 py-2 rounded-full border transition
${active===cat
? "bg-green-400 text-black"
: "border-white/20 text-gray-400 hover:border-green-400 hover:text-green-400"}
`}
>
{cat}
</button>
))}

</div>

{/* PROJECT GRID */}

<motion.div
layout
className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto"
>

{filteredProjects.map((p,i)=>(

<Card key={i} project={p}/>

))}

</motion.div>

</section>

)

}