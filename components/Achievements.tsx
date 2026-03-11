"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaCode } from "react-icons/fa"

const achievements = [

{
title:"Competitive Programming",
desc:"Solved coding problems on platforms like LeetCode and HackerRank to strengthen problem-solving skills."
},

{
title:"Project Development",
desc:"Developed multiple real-world projects including AI Code Review System and Smart Irrigation ML model."
},

{
title:"Technical Learning",
desc:"Completed certifications and continuously improving skills in Machine Learning and backend development."
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
whileHover={{scale:1.05}}
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