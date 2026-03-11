"use client"

import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

export default function ProjectModal({project,onClose}:any){

if(!project) return null

return(

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
className="bg-[#050816] border border-white/10 rounded-xl max-w-2xl w-full p-8 relative"
>

<button
onClick={onClose}
className="absolute top-4 right-4 text-gray-400 hover:text-white"
>
✕
</button>

<h2 className="text-2xl font-bold">
{project.title}
</h2>

<p className="text-gray-400 mt-4">
{project.desc}
</p>

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

<a
href={project.github}
target="_blank"
className="flex items-center gap-2 text-green-400 mt-6"
>

<FaGithub/> View on GitHub

</a>

</motion.div>

</div>

)

}