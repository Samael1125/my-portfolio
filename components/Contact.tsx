"use client"

import { motion } from "framer-motion"

export default function Contact(){

return(

<section className="py-40 px-6 max-w-7xl mx-auto" id="contact">

<h2 className="text-5xl font-bold text-center mb-20">
Contact
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">

{[
{
title:"Email",
value:"uttkarshsj.2102@gmail.com"
},

{
title:"GitHub",
value:"github.com/Samael1125"
},

{
title:"LinkedIn",
value:"linkedin.com/in/uttkarsh-jhala"
}

].map((c,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 border border-white/10 text-center"
>

<h3 className="text-xl font-semibold">
{c.title}
</h3>

<p className="text-gray-400 mt-3">
{c.value}
</p>

</motion.div>

))}

</div>

</section>

)

}