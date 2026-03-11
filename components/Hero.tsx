"use client"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Hero(){

return(

<section className="min-h-screen flex items-center px-10">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div>

<p className="text-gray-400 mb-4">
Software Engineer
</p>

<h1 className="text-6xl md:text-7xl font-bold leading-tight">

Hello I'm <br/>

<span style={{color:"var(--accent)"}}>
Utkarsh Jhala
</span>

</h1>

<p className="text-gray-400 mt-6 max-w-lg">
Computer Science Engineer focused on Machine Learning,
AI systems, and backend development. Building
intelligent solutions for real world problems.
</p>

{/* BUTTONS */}

<div className="flex items-center gap-6 mt-8">

<a
href="/resume.pdf"
className="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition"
>

View CV

</a>

<div className="flex gap-4 text-xl">

<a href="https://github.com/Samael1125">
<FaGithub/>
</a>

<a href="#">
<FaLinkedin/>
</a>

<a href="#">
<FaInstagram/>
</a>

</div>

</div>

</div>


{/* RIGHT SIDE AVATAR */}

<div className="flex justify-center">

<div className="relative w-72 h-72">

<img
src="/profile.jpg"
className="rounded-full w-full h-full object-cover"
/>

<div
className="absolute inset-0 rounded-full border-2"
style={{borderColor:"var(--accent)"}}
/>

</div>

</div>

</div>

</section>

)

}