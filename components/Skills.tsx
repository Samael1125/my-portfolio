"use client"

import { FaPython, FaGitAlt, FaJs } from "react-icons/fa"
import { SiCplusplus, SiFlask, SiMysql } from "react-icons/si"
import { motion } from "framer-motion"

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "SQL", icon: <SiMysql /> },
]

export default function Skills() {
  return (

    <section id="skills" className="py-32">

      <h2 className="text-4xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:scale-105 transition"
          >

            <div className="text-4xl mb-3 text-blue-400">
              {skill.icon}
            </div>

            <p>{skill.name}</p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}