"use client"

import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const projects = [

{
title:"Smart Irrigation ML System",
desc:"Machine learning model analyzing groundwater structures and environmental data for intelligent irrigation planning.",
image:"/projects/irrigation.png",
tech:["Python","Machine Learning","Data Analysis"],
github:"#",
demo:"#"
},

{
title:"Secure AI Code Review",
desc:"AI system that analyzes source code for vulnerabilities and code quality issues.",
image:"/projects/codereview.png",
tech:["Python","Flask","AI"],
github:"#",
demo:"#"
},

{
title:"Local Technician Finder",
desc:"Platform connecting users with nearby technicians for services using Flask backend.",
image:"/projects/technician.png",
tech:["Flask","SQLite","HTML","CSS"],
github:"https://github.com/Samael1125/Local-Technician-Finder",
demo:"#"
},

{
title:"TriviaBot",
desc:"Interactive chatbot generating trivia questions and managing quiz interactions.",
image:"/projects/triviabot.png",
tech:["Python","Flask","API"],
github:"https://github.com/Samael1125/TriviaBot",
demo:"#"
}

]

export default function Projects(){

return(

<section id="projects" className="py-32 px-6">

<h2 className="text-5xl font-bold text-center mb-20">

A small selection of
<span style={{color:"var(--accent)"}}> recent projects</span>

</h2>

<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

{projects.map((project,i)=>(

<div
key={i}
className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
>

<Image
src={project.image}
alt={project.title}
width={600}
height={400}
className="w-full h-64 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-semibold">
{project.title}
</h3>

<p className="text-gray-400 mt-3 text-sm">
{project.desc}
</p>

<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map((tech,index)=>(

<span
key={index}
className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full"
>
{tech}
</span>

))}

</div>

<div className="flex gap-6 mt-6">

<a
href={project.github}
className="flex items-center gap-2 text-sm hover:text-green-400"
>

<FaGithub/> Code

</a>

<a
href={project.demo}
className="flex items-center gap-2 text-sm hover:text-green-400"
>

<FiExternalLink/> Demo

</a>

</div>

</div>

</div>

))}

</div>

</section>

)

}