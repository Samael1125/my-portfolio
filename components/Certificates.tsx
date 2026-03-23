"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const certificates = [
{
title:"Data Analytics with Python",
org:"NPTEL",
year:"2025",
image:"/certs/python.png"
},
{
title:"Full Stack Web Development",
org:"Placify Technologies",
year:"2025",
image:"/certs/python.png"
},
{
title:"MS SQL",
org:"Intellipaat",
year:"2025",
image:"/certs/python.png"
},
{
title:"Mastering C",
org:"CSE Pathshala",
year:"2024",
image:"/certs/python.png"
}
]

export default function Certificates(){

const [selected,setSelected]=useState<any>(null)

return(

<section id="certificates" className="py-40 px-6">

<h2 className="text-5xl font-bold text-center mb-20">
Certificates
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{certificates.map((c,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05, y:-6}}
onClick={()=>setSelected(c)}
className="cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg group"
>

{/* IMAGE */}
<div className="relative h-56">

<Image
src={c.image}
alt={c.title}
fill
className="object-contain bg-white group-hover:scale-110 transition duration-500"
/>

</div>

{/* CONTENT */}
<div className="p-5">

<h3 className="text-lg font-semibold">
{c.title}
</h3>

<p className="text-gray-400 text-sm">
{c.org}
</p>

<span className="text-green-400 text-xs">
{c.year}
</span>

</div>

</motion.div>

))}

</div>

{/* MODAL */}

{selected && (
<div
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
onClick={()=>setSelected(null)}
>

<div className="max-w-4xl w-full p-4">

<img
src={selected.image}
className="rounded-xl w-full"
/>

<h3 className="text-xl mt-4">{selected.title}</h3>
<p className="text-gray-400">{selected.org}</p>

</div>

</div>
)}

</section>

)
}