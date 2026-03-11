"use client"

import { motion } from "framer-motion"

const platforms=[

{
name:"LeetCode",
desc:"Practicing Data Structures and Algorithms"
},

{
name:"HackerRank",
desc:"Problem solving and programming challenges"
},

{
name:"Kaggle",
desc:"Exploring machine learning datasets"
}

]

export default function Coding(){

return(

<section className="py-40 px-6">

<h2 className="text-5xl font-bold text-center mb-20">
Coding Practice
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

{platforms.map((p,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10 text-center"
>

<h3 className="text-xl font-semibold">
{p.name}
</h3>

<p className="text-gray-400 mt-3 text-sm">
{p.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}