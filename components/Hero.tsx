"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (

    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Utkarsh Jhala
      </motion.h1>

      <div className="text-xl mt-6 text-gray-300">

        <TypeAnimation
          sequence={[
            "AI Engineer",
            2000,
            "Machine Learning Developer",
            2000,
            "Backend Developer",
            2000,
            "Problem Solver",
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />

      </div>

      <p className="max-w-xl mt-6 text-gray-400">
        Building intelligent systems and scalable software solutions using
        machine learning, data science, and modern web technologies.
      </p>

    </section>
  )
}