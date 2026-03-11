"use client"

import { motion } from "framer-motion"

export default function ShortProfile(){

return(

<section className="py-32">

<h2 className="text-4xl font-bold text-center mb-16">
Short Profile
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 auto-rows-[220px]">

{/* BIG CARD */}
<motion.div
whileHover={{scale:1.03, y:-5}}
className="col-span-2 row-span-2 rounded-xl bg-gradient-to-br from-purple-700/30 to-black border border-white/10 p-6 flex items-end"
>

<p className="text-lg font-medium">
Developer building clean, reliable AI systems and backend solutions
</p>

</motion.div>


{/* LANGUAGE CARD */}
<motion.div
whileHover={{scale:1.05, y:-5}}
className="rounded-xl bg-white/5 border border-white/10 p-6"
>

<p className="text-lg font-semibold mb-2">
Languages
</p>

<p className="text-gray-400">
English (Fluent) <br/>
Hindi <br/>
Gujarati
</p>

</motion.div>


{/* TECH STACK CARD */}
<motion.div
whileHover={{scale:1.05, y:-5}}
className="rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center"
>

<p className="text-lg font-semibold mb-3">
Primary Tech Stack
</p>

<div className="flex flex-wrap gap-2">

<span className="px-3 py-1 bg-white/10 rounded">Python</span>
<span className="px-3 py-1 bg-white/10 rounded">Flask</span>
<span className="px-3 py-1 bg-white/10 rounded">ML</span>
<span className="px-3 py-1 bg-white/10 rounded">SQL</span>

</div>

</motion.div>


{/* SOFTWARE ARCHITECT CARD */}
<motion.div
whileHover={{scale:1.05, y:-5}}
className="col-span-1 rounded-xl bg-white/5 border border-white/10 p-6"
>

<p className="text-lg font-semibold">
Software Architect
</p>

<p className="text-gray-400 mt-2 text-sm">
Interested in scalable AI systems and backend architectures.
</p>

</motion.div>


{/* CONTACT CARD */}
<motion.div
whileHover={{scale:1.05, y:-5}}
className="col-span-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex flex-col justify-center"
>

<p className="text-lg font-semibold mb-3">
Do you want to ask a question?
</p>

<button className="w-fit bg-black/30 px-4 py-2 rounded">
Copy my email
</button>

</motion.div>


{/* FUTURE CARD */}
<motion.div
whileHover={{scale:1.05, y:-5}}
className="rounded-xl bg-white/5 border border-white/10 p-6"
>

<p className="text-lg font-semibold">
Future Plans
</p>

<p className="text-gray-400 text-sm mt-2">
Graduating soon and exploring AI engineering opportunities.
</p>

</motion.div>

</div>

</section>

)

}