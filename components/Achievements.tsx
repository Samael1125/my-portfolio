"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaCode ,FaRocket} from "react-icons/fa"

const achievements=[

{
title:"Full-Stack & ML Projects",
desc:"Built multiple machine learning and full-stack applications",
icon: <FaCode/>
},

{
title:"AI Internship",
desc:"Completed AI internship working with neural networks and prediction models",
icon: <FaTrophy/>
},

{
title:"Smart Irrigation ML",
desc:"Developed ML pipeline for groundwater analysis and smart irrigation",
icon: <FaCode/>
},

{
title:"Backend & ML Skills",
desc:"Strong foundation in Python, ML libraries and backend development",
icon: <FaRocket/>
}

]

export default function Achievements(){
  return(
    <section className="py-32 px-6">

      <h2 className="text-5xl font-bold text-center mb-20">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {achievements.map((a,i)=>(
          <motion.div
            key={i}
            whileHover={{ scale:1.05, y:-6 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center group relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition"/>

            <div className="text-yellow-400 text-4xl mb-4 relative z-10">
              {a.icon}
            </div>

            <h3 className="text-xl font-semibold relative z-10">
              {a.title}
            </h3>

            <p className="text-gray-400 mt-3 text-sm relative z-10">
              {a.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}