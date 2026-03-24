"use client";

import Image from "next/image";
import { useState } from "react";
import { certificates } from "@/data/certificates";

const categories = [
  "All",
  "Programming",
  "Cybersecurity",
  "Training",
  "Internship",
  "Competitive Programming",
  "Workshop",
  "Social Impact",
];

export default function Certificates() {
  const [selected, setSelected] = useState<any>(null);
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.category === active);

  // 👇 LIMIT ONLY FOR "ALL"
  const visibleCertificates =
    active === "All" && !showAll
      ? filtered.slice(0, 6)
      : filtered;

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Certifications & Achievements
      </h2>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setShowAll(false); // reset when switching
            }}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              active === cat
                ? "bg-green-500 text-black"
                : "border-white/20 text-gray-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {visibleCertificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.03] transition"
            onClick={() => setSelected(cert)}
          >
            <div className="relative w-full h-52">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xs bg-green-500/20 px-2 py-1 rounded">
                  {cert.category}
                </span>
                <span className="text-xs text-gray-400">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 SHOW MORE BUTTON */}
      {active === "All" && certificates.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0b1220] w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[500px]">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="text-gray-400">{selected.issuer}</p>

              {selected.duration && (
                <p className="text-sm text-gray-400">
                  ⏱ {selected.duration}
                </p>
              )}

              {selected.description && (
                <p className="text-sm text-gray-300">
                  {selected.description}
                </p>
              )}

              <div className="flex gap-4 mt-3">
                <span className="bg-green-500/20 px-3 py-1 rounded text-sm">
                  {selected.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {selected.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}