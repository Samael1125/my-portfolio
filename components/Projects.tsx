"use client"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const projects = [

{
title:"Local Technician Finder",
desc:"Full-stack platform for discovering verified local technicians with ratings, reviews and location-based sorting.",
image:"/projects/technician.png",
tech:["React","Node.js","MongoDB","REST API"],
github:"https://github.com/Samael1125/Local-Technician-Finder"
},

{
title:"Smart Irrigation ML System",
desc:"Machine learning system analyzing groundwater data with Random Forest, XGBoost, SVM and Logistic Regression models.",
image:"/projects/irrigation.png",
tech:["Python","Machine Learning","GIS","Data Analytics"],
github:"#"
},

{
title:"Secure AI Code Review System",
desc:"AI-powered platform that reviews code using LLMs and provides feedback on security, optimization and code quality.",
image:"/projects/codereview.png",
tech:["Python","Flask","SQLAlchemy","Bootstrap","Gemini API"],
github:"https://github.com/Samael1125/Secure-AI-Code-Review-System"
},

{
title:"Trivia Quiz Web Application",
desc:"Interactive quiz platform using Flask and Open Trivia API with dynamic MCQs and real-time scoring.",
image:"/projects/triviabot.png",
tech:["Python","Flask","JavaScript","REST API"],
github:"https://github.com/Samael1125/TriviaBot"
}

]

function Card({project}:any){

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotateX = useTransform(y, [-100,100],[15,-15])
const rotateY = useTransform(x, [-100,100],[-15,15])

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
whileHover={{y:-8}}
>

{/* image */}

<div className="relative h-60 overflow-hidden">

<Image
src={project.image}
alt={project.title}
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

</div>

{/* content */}

<div className="p-6">

<h3 className="text-xl font-semibold">
{project.title}
</h3>

<p className="text-gray-400 mt-2 text-sm">
{project.desc}
</p>

{/* tech stack */}

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

{/* github */}

<div className="mt-5 flex items-center gap-3">

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

return(

<section className="py-32 px-6">

<h2 className="text-5xl font-bold text-center mb-20">

A small selection of
<span className="text-green-400"> recent projects</span>

</h2>

<div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

{projects.map((p,i)=>(

<Card key={i} project={p}/>

))}

</div>

</section>

)

}