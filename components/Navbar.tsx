"use client"

import Link from "next/link"

export default function Navbar(){

return(

<nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6">

<h1 className="font-bold text-xl">
Utkarsh
<span style={{color:"var(--accent)"}}> .</span>
</h1>

<div className="flex gap-8 text-gray-300">

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>

</nav>

)

}