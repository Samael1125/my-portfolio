"use client"

import Image from "next/image"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import GridBackground from "./GridBackground"
import MagneticButton from "./MagneticButton"

export default function Hero() {

return (
<section className="relative">

<GridBackground/>

<section className="min-h-screen flex items-start pt-40 px-16">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div>

<p className="text-gray-400 mb-4">
Software Engineer
</p>

<h1 className="text-7xl md:text-[110px] font-bold leading-[1.05]">

Hello I'm <br/>

<span className="text-[#00ffa3]">
Utkarsh Singh Jhala
</span>

</h1>

<p className="text-gray-400 mt-6 max-w-lg">
Computer Science Engineer focused on Machine Learning,
AI systems, and backend development. Building intelligent
solutions for real world problems.
</p>

<div className="flex items-center gap-6 mt-8">



<MagneticButton>
View CV
</MagneticButton>

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

<div className="relative w-[420px] h-[420px] flex items-center justify-center">

{/* rotating segmented ring */}


<svg
  className="absolute w-[500px] h-[500px] animate-spin-slow"
  viewBox="0 0 200 200"
>

  <circle
    cx="100"
    cy="100"
    r="96"
    fill="none"
    stroke="#00ffa3"
    strokeWidth="2.5"
    strokeDasharray="12 20"
    strokeLinecap="round"
  />

</svg>
{/* outer glow circle */}

<div className="absolute w-[430px] h-[430px] rounded-full border border-green-400/30"></div>

{/* profile image */}
<div className="relative w-[370px] h-[370px] rounded-full overflow-hidden profile-glow">

<Image
src="/profile.jpg"
alt="profile"
fill
className="object-cover"
/>

</div>

</div>

</div>

</div>

</section>
</section>
)

}