"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

export default function LeetCodeStats(){

const [stats,setStats] = useState<any>(null)

useEffect(()=>{

async function fetchStats(){

try{

const res = await axios.get(
"https://leetcode-stats-api.vercel.app/samael-666"
)

setStats(res.data)

}catch(e){

console.log(e)

}

}

fetchStats()

},[])

if(!stats) return null

return(

<section className="py-32 text-center">

<h2 className="text-5xl font-bold mb-20">
LeetCode Practice
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

<motion.div
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10"
>

<h3 className="text-3xl font-bold text-green-400">
{stats.totalSolved}
</h3>

<p className="text-gray-400 mt-2">
LeetCode Problems Solved
</p>

</motion.div>


<motion.div
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10"
>

<h3 className="text-3xl font-bold text-green-400">
{stats.easySolved}
</h3>

<p className="text-gray-400 mt-2">
Easy Problems
</p>

</motion.div>


<motion.div
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10"
>

<h3 className="text-3xl font-bold text-green-400">
{stats.mediumSolved}
</h3>

<p className="text-gray-400 mt-2">
Medium Problems
</p>

</motion.div>

</div>

</section>

)

}