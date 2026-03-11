"use client"

import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certificates = [

{
title:"Machine Learning Certification",
issuer:"Coursera",
year:"2024"
},

{
title:"Python Programming",
issuer:"Udemy",
year:"2023"
},

{
title:"Data Analytics Fundamentals",
issuer:"Google",
year:"2024"
}

]

export default function Certificates(){

return(

<section id="certificates" className="py-32 px-6">

<h2 className="text-4xl font-bold text-center mb-20">
Certificates
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

{certificates.map((cert,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-center"
>

<div className="text-blue-400 text-4xl mb-4 flex justify-center">
<FaCertificate/>
</div>

<h3 className="text-lg font-semibold">
{cert.title}
</h3>

<p className="text-gray-400 mt-2">
{cert.issuer}
</p>

<p className="text-sm text-gray-500 mt-1">
{cert.year}
</p>

</motion.div>

))}

</div>

</section>

)

}