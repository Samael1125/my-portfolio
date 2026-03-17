"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useEffect } from "react"

export default function ProjectModal({project,onClose}:any){

if(!project) return null

useEffect(()=>{

function handleEsc(e:any){
if(e.key==="Escape"){
onClose()
}
}

window.addEventListener("keydown",handleEsc)

return()=>window.removeEventListener("keydown",handleEsc)

},[onClose])

return(

<div
onClick={onClose}
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
>

<motion.div
onClick={(e)=>e.stopPropagation()}
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:0.3}}
className="bg-[#050816] border border-white/10 rounded-xl max-w-3xl w-full overflow-hidden"
>

{/* image */}

<div className="relative h-72">

<Image
src={project.image}
alt={project.title}
fill
className="object-cover"
/>

</div>

{/* content */}

<div className="p-8">

<h2 className="text-2xl font-bold">
{project.title}
</h2>

<p className="text-gray-400 mt-4">
{project.desc}
</p>

{/* tech stack */}

<div className="flex flex-wrap gap-2 mt-6">

{project.tech.map((t:any,i:number)=>(
<span
key={i}
className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full"
>
{t}
</span>
))}

</div>

{/* buttons */}

<div className="flex gap-6 mt-8">

<a
href={project.github}
target="_blank"
className="flex items-center gap-2 text-green-400"
>

<FaGithub/> GitHub

</a>

<a
href={project.demo || "#"}
target="_blank"
className="flex items-center gap-2 text-green-400"
>

<FaExternalLinkAlt/> Live Demo

</a>

</div>

</div>

</motion.div>

</div>

)

}