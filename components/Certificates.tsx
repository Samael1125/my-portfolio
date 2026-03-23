"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./ProjectModal"

const certificates = [
  {
    title:"Data Analytics with Python",
    org:"NPTEL",
    year:"2025",
    image:"/certs/python.png"
  },
  {
    title:"Full Stack Web Development",
    org:"Placify Technologies",
    year:"2025",
    image:"/certs/python.png"
  },
  {
    title:"MS SQL",
    org:"Intellipaat",
    year:"2025",
    image:"/certs/python.png"
  },
  {
    title:"Mastering C",
    org:"CSE Pathshala",
    year:"2024",
    image:"/certs/python.png"
  }
]

export default function Certificates(){

  const [selected,setSelected] = useState<any>(null)

  return (
    <section id="certificates" className="py-40 px-6 max-w-7xl mx-auto">

      <h2 className="text-5xl font-bold text-center mb-20">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {certificates.map((c,i)=>(
          <motion.div
            key={i}
            whileHover={{scale:1.05}}
            onClick={()=>setSelected(c)}
            className="cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg"
          >

            {/* IMAGE */}
            <div className="relative h-48">
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.org}</p>
              <span className="text-green-400 text-xs">{c.year}</span>
            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <ProjectModal
          project={{
            title: selected.title,
            desc: selected.org + " • " + selected.year,
            image: selected.image,
            tech: ["Certificate"],
            github: "#"
          }}
          onClose={()=>setSelected(null)}
        />
      )}

    </section>
  )
}