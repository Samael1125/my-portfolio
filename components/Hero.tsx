"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
>

Utkarsh Jhala

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="text-xl mt-4 text-gray-300"
>

AI Engineer • Machine Learning • Backend Developer

</motion.p>

</section>

)

}