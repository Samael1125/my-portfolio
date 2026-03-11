"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaCode } from "react-icons/fa"

const achievements=[

{
title:"Full-Stack & ML Projects",
desc:"Built multiple machine learning and full-stack applications"
},

{
title:"AI Internship",
desc:"Completed AI internship working with neural networks and prediction models"
},

{
title:"Smart Irrigation ML",
desc:"Developed ML pipeline for groundwater analysis and smart irrigation"
},

{
title:"Backend & ML Skills",
desc:"Strong foundation in Python, ML libraries and backend development"
}

]


export default function Achievements(){

return(

<section id="achievements" className="py-32 px-6">

<h2 className="text-4xl font-bold text-center mb-20">
Achievements
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

{achievements.map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05, y:-5}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-center"
>

<div className="text-yellow-400 text-4xl mb-4 flex justify-center">
{i===0 ? <FaCode/> : <FaTrophy/>}
</div>

<h3 className="text-lg font-semibold">
{item.title}
</h3>

<p className="text-gray-400 mt-3 text-sm">
{item.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}