"use client"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const projects = [

{
title:"Smart Irrigation ML System",
desc:"Machine learning model analyzing groundwater structures and environmental data for intelligent irrigation planning.",
image:"/projects/irrigation.png",
tech:["Python","Machine Learning","Data"],
github:"#"
},

{
title:"Secure AI Code Review System",
desc:"AI powered system that scans source code to detect vulnerabilities and improve code quality.",
image:"/projects/codereview.png",
tech:["Python","Flask","AI"],
github:"#"
},

{
title:"Local Technician Finder",
desc:"Platform connecting users with nearby technicians using Flask backend and SQLite database.",
image:"/projects/technician.png",
tech:["Flask","SQLite","HTML","CSS"],
github:"https://github.com/Samael1125/Local-Technician-Finder"
},

{
title:"TriviaBot",
desc:"Interactive chatbot that generates trivia questions and manages quiz interactions.",
image:"/projects/triviabot.png",
tech:["Python","Flask","API"],
github:"https://github.com/Samael1125/TriviaBot"
},

// {
// title:"Jarvis Desktop Assistant",
// desc:"Voice controlled AI assistant capable of automation, system control and command execution.",
// image:"/projects/jarvis.png",
// tech:["Python","Speech AI","Automation"],
// github:"#"
// }

]

function Card({project}:any){

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotateX = useTransform(y, [-100, 100], [10, -10])
const rotateY = useTransform(x, [-100, 100], [-10, 10])

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
className="project-card rounded-2xl overflow-hidden bg-[#050816] border border-white/10"
style={{
rotateX,
rotateY,
transformPerspective:1000
}}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
>

<div className="relative h-60">

<Image
src={project.image}
alt={project.title}
fill
className="object-cover"
/>

</div>

<div className="p-6">

<h3 className="text-xl font-semibold">
{project.title}
</h3>

<p className="text-gray-400 mt-2 text-sm">
{project.desc}
</p>

<div className="flex gap-2 mt-4">

{project.tech.map((t:any,i:number)=>(

<span
key={i}
className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full"
>
{t}
</span>

))}

</div>

<div className="mt-5 flex items-center gap-3">

<a
href={project.github}
className="flex items-center gap-2 text-green-400"
>

<FaGithub/> Github

</a>

</div>

</div>

</motion.div>

)

}

export default function Projects(){

return(

<section className="py-32 px-6">

<h2 className="text-5xl font-bold text-center mb-20">

A small selection of
<span style={{color:"var(--accent)"}}> recent projects</span>

</h2>

<div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

{projects.map((p,i)=>(
<Card key={i} project={p}/>
))}

</div>

</section>

)

}