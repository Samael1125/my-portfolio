"use client"

import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import ThemeToggle from "@/components/ThemeToggle"

export default function Navbar(){

return(

<nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6">

<h1 className="font-bold text-xl">
Utkarsh<span className="text-green-400">.</span>
</h1>

<div className="flex gap-8">

<div className="flex items-center gap-6">

<ScrollLink to="about" smooth duration={500}>About</ScrollLink>
<ScrollLink to="projects" smooth duration={500}>Projects</ScrollLink>
<ScrollLink to="contact" smooth duration={500}>Contact</ScrollLink>

<ThemeToggle/>

</div>
</div>

</nav>

)

}