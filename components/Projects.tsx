"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const projects = [
  {
    title: "Secure AI Code Review System",
    description:
      "AI-powered platform that reviews source code for security vulnerabilities and quality issues using machine learning.",
    tech: ["Flask", "Python", "AI"],
    image: "/projects/secure-review.png",
    github: "https://github.com/YOUR_USERNAME/repo",
    demo: "#",
  },
  {
    title: "Smart Irrigation ML System",
    description:
      "Machine learning system analyzing groundwater structures and environmental data for intelligent irrigation planning.",
    tech: ["Python", "ML", "GIS"],
    image: "/projects/irrigation-ml.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Jarvis Desktop Assistant",
    description:
      "Voice-controlled AI assistant capable of system automation, task management, and command execution.",
    tech: ["Python", "NLP"],
    image: "/projects/jarvis.png",
    github: "#",
    demo: "#",
  },
  {
  title: "Local Technician Finder",
  description:
    "A web platform that connects users with nearby technicians for various services. It allows users to search for technicians, view details, and request services easily.",
  tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
  image: "/projects/local-technician.png",
  github: "https://github.com/Samael1125/Local-Technician-Finder",
  demo: "#"
},
{
  title: "TriviaBot",
  description:
    "Interactive chatbot that generates and manages trivia questions. Designed to provide engaging quizzes and automate question-answer interactions.",
  tech: ["Python", "Flask", "API", "HTML", "CSS"],
  image: "/projects/triviabot.png",
  github: "https://github.com/Samael1125/TriviaBot",
  demo: "#"
},
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <h2 className="text-4xl font-bold text-center mb-20">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:col-span-2 lg:grid-cols-3 gap-12">

        {projects.map((project, i) => (

          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10"
          >

            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {project.tech.map((tech, index) => (

                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:text-blue-400"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm hover:text-blue-400"
                >
                  <FiExternalLink /> Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}
