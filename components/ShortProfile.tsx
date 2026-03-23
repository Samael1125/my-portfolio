"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ShortProfile(){

return(

<section className="py-32 relative overflow-hidden">

{/* BACKGROUND GLOW BLOBS */}
<div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse"/>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full animate-pulse"/>

<h2 className="text-5xl font-bold text-center mb-20">
Short Profile
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 auto-rows-[220px] relative z-10">

{/* 🔥 BIG HERO CARD */}
<motion.div
whileHover={{ scale:1.04 }}
className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative border border-white/10 group"
>

{/* IMAGE */}
<Image
src="/ai-bg.jpg"
alt="AI background"
fill
className="object-cover scale-110 group-hover:scale-125 transition duration-700"
/>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"/>

{/* GLOW */}
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition"/>

{/* TEXT */}
<div className="absolute bottom-6 left-6 right-6">
<p className="text-2xl font-semibold leading-relaxed">
Building intelligent AI systems ⚡ and scalable backend solutions
</p>
</div>

</motion.div>


{/* 🌐 LANGUAGE CARD */}
<motion.div
whileHover={{ y:-5 }}
className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-green-400/40 transition"
>

<p className="text-lg font-semibold mb-2">Languages</p>

<p className="text-gray-400">
English (Fluent)<br/>
Hindi
</p>

</motion.div>


{/* ⚙️ TECH STACK */}
<motion.div
whileHover={{ y:-5 }}
className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-400/40 transition"
>

<p className="text-lg font-semibold mb-3">
Tech Stack
</p>

<div className="flex flex-wrap gap-2">

{["Python","Flask","Machine Learning","SQL"].map((tech,i)=>(
<span
key={i}
className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-green-500/20 hover:text-green-300 transition"
>
{tech}
</span>
))}

</div>

</motion.div>


{/* 🧠 ARCHITECT */}
<motion.div
whileHover={{ y:-5 }}
className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-blue-400/40 transition"
>

<p className="text-lg font-semibold">
Software Architect
</p>

<p className="text-gray-400 mt-2 text-sm">
Focused on scalable AI systems, backend architecture, and performance optimization.
</p>

</motion.div>


{/* 💬 CONTACT CTA */}
<motion.div
whileHover={{ scale:1.02 }}
className="col-span-2 rounded-2xl p-6 flex flex-col justify-center bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden"
>

{/* glow overlay */}
<div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"/>

<p className="text-lg font-semibold mb-3">
Have an idea or project?
</p>

<button
onClick={()=>{
navigator.clipboard.writeText("uttkarshsj.2102@gmail.com")
alert("Email copied!")
}}
className="w-fit bg-black/30 px-4 py-2 rounded-lg hover:bg-black/50 transition"
>
Copy my email
</button>

</motion.div>


{/* 🚀 FUTURE */}
<motion.div
whileHover={{ y:-5 }}
className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-yellow-400/40 transition"
>

<p className="text-lg font-semibold">
Future Plans
</p>

<p className="text-gray-400 text-sm mt-2">
Graduating soon and aiming for AI Engineer / Backend Developer roles.
</p>

</motion.div>

</div>

</section>

)
}