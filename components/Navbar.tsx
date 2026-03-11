"use client"

import Link from "next/link"

export default function Navbar(){

return(

<nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/30 z-50">

<h1 className="text-xl font-bold">
Utkarsh
</h1>

<div className="flex gap-8">

<Link href="#about">About</Link>
<Link href="#skills">Skills</Link>
<Link href="#projects">Projects</Link>
<Link href="#contact">Contact</Link>

</div>

</nav>

)

}