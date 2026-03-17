"use client"

import { motion } from "framer-motion"
import { FaGithub, FaCode, FaFire } from "react-icons/fa"
import GithubActivity from "./GithubActivity"

export default function DevActivity(){

return(

<section className="py-40 px-6">

<h2 className="text-5xl font-bold text-center mb-20">
Developer Activity
</h2>

<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

{/* LEFT SIDE - STATS */}

<div className="grid gap-6">

<motion.div
whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
>
<div className="flex items-center gap-3 text-green-400 text-xl">
<FaCode/> Coding Practice
</div>
<p className="text-gray-400 mt-2">
Practicing DSA, problem solving and backend logic regularly.
</p>
</motion.div>

<motion.div
whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
>
<div className="flex items-center gap-3 text-green-400 text-xl">
<FaFire/> Consistency
</div>
<p className="text-gray-400 mt-2">
Maintaining regular coding streak and building real-world projects.
</p>
</motion.div>

<motion.div
whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
>
<div className="flex items-center gap-3 text-green-400 text-xl">
<FaGithub/> Open Source
</div>
<p className="text-gray-400 mt-2">
Actively pushing projects and contributing to GitHub repositories.
</p>
</motion.div>

</div>


{/* RIGHT SIDE - GITHUB */}

<div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg">

<GithubActivity/>

</div>

</div>

</section>

)

}