"use client"

import { motion } from "framer-motion"

const education=[

{
degree:"B.Tech Computer Science Engineering",
school:"Lovely Professional University",
year:"2023 – Present",
score:"CGPA: 6.46"
},

{
degree:"Intermediate (PCM)",
school:"SV Govt Model School",
year:"2021 – 2022",
score:"62%"
},

{
degree:"Matriculation",
school:"SV Govt Model School",
year:"2019 – 2020",
score:"67%"
}

]

export default function Education(){

return(

<section className="py-40 px-6 max-w-7xl mx-auto" id="education">

<h2 className="text-5xl font-bold text-center mb-20">
Education
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{education.map((e,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10"
>

<h3 className="text-xl font-semibold">
{e.degree}
</h3>

<p className="text-gray-400 mt-2">
{e.school}
</p>

<p className="text-sm mt-2">
{e.year}
</p>

<p className="text-green-400 text-sm">
{e.score}
</p>

</motion.div>

))}

</div>
</section>

)

}
