"use client"

import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certificates = [

{
title:"Data Analytics with Python",
org:"NPTEL",
year:"2025"
},

{
title:"Full Stack Web Development",
org:"Placify Technologies",
year:"2025"
},

{
title:"MS SQL",
org:"Intellipaat",
year:"2025"
},

{
title:"Mastering C",
org:"CSE Pathshala",
year:"2024"
}

]

export default function Certificates(){

return(

<section id="certificates" className="py-40 px-6 max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-20">
Certificates
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{certificates.map((c,i)=>(
<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
>

<h3 className="text-xl font-semibold">{c.title}</h3>

<p className="text-gray-400 mt-2">{c.org}</p>

<span className="text-green-400 text-sm">{c.year}</span>

</motion.div>
))}

</div>

</section>

)

}