// "use client"

// export default function Skills(){

// const skillCategories = [

// {
// title:"Languages",
// skills:["Python","C++","C","Java","JavaScript","SQL"]
// },

// {
// title:"Tools & Platforms",
// skills:["MongoDB","MS SQL Server","GitHub","Anaconda","Figma","Framer"]
// },

// {
// title:"Libraries",
// skills:["NumPy","Pandas","Matplotlib","Seaborn","Scikit-learn"]
// },

// {
// title:"Soft Skills",
// skills:["Problem Solving","Team Collaboration","Project Management","Adaptability"]
// }

// ]

// return(

// <section id="skills" className="py-32">

// <h2 className="text-4xl font-bold text-center mb-16">
// Skills
// </h2>

// <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

// {skillCategories.map((category,index)=> (

// <div key={index}>

// <h3 className="text-xl font-semibold mb-6">
// {category.title}
// </h3>

// <div className="flex flex-wrap gap-3">

// {category.skills.map((skill,i)=> (

// <span
// key={i}
// className="px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-lg text-green-300"
// >
// {skill}
// </span>

// ))}

// </div>

// </div>

// ))}

// </div>
// <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"/>
// </section>

// )

// }


"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Python", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "C++", level: "Intermediate" },
  { name: "Machine Learning", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
]

export default function Skills() {
  return (
    <section className="py-32 px-6">

      <h2 className="text-5xl font-bold text-center mb-20">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            whileHover={{ scale: 1.08, y: -6 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg group overflow-hidden"
          >

            {/* glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"/>

            <h3 className="text-xl font-semibold relative z-10">
              {skill.name}
            </h3>

            <p className="text-sm text-gray-400 mt-2 relative z-10">
              {skill.level}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}