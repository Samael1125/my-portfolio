"use client";

import Image from "next/image";
import { useState } from "react";

export default function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32" id="experience">
      <h2 className="text-4xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:scale-[1.02] transition">

          {/* ROLE */}
          <h3 className="text-xl font-semibold">
            Artificial Intelligence Intern
          </h3>

          {/* COMPANY + DATE */}
          <p className="text-green-400 mt-1">
            InternsElite • Jul 12, 2025 – Sep 11, 2025
          </p>

          {/* DESCRIPTION */}
          <ul className="mt-5 space-y-2 text-gray-400">
            <li>
              Developed AI-based projects using Python, focusing on real-world problem solving.
            </li>
            <li>
              Built predictive models including stock price prediction and heart disease analysis.
            </li>
            <li>
              Implemented deep learning models such as ANN and CNN for classification tasks.
            </li>
            <li>
              Created applications like digit recognition system and voice assistant.
            </li>
            <li>
              Demonstrated strong problem-solving, model optimization, and analytical skills during internship.
            </li>
          </ul>

          {/* ACTION BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="mt-6 px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
          >
            View Certificate →
          </button>
        </div>
      </div>

      {/* 🔥 CERTIFICATE MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#0b1220] w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="/certs/internsElite.png"
                alt="Internship Certificate"
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                AI Internship – InternsElite
              </h3>
              <p className="text-gray-400 mt-1">
                Duration: July 12, 2025 – September 11, 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}