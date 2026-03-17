"use client"

import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import ThemeToggle from "./ThemeToggle"
import { Menu, X } from "lucide-react"

const navItems = [
{ id:"about", label:"About" },
{ id:"education", label:"Education" },
{ id:"skills", label:"Skills" },
{ id:"projects", label:"Projects" },
{ id:"experience", label:"Experience" },
{ id:"contact", label:"Contact" }
]

export default function Navbar(){

const [active,setActive] = useState("about")
const [open,setOpen] = useState(false)
const [scrolled,setScrolled] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{

setScrolled(window.scrollY > 50)

navItems.forEach(section=>{

const el = document.getElementById(section.id)

if(el){

const top = el.offsetTop - 100
const height = el.offsetHeight

if(window.scrollY >= top && window.scrollY < top + height){
setActive(section.id)
}

}

})

}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<nav className={`fixed top-0 w-full z-50 transition-all duration-300 
${scrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-5"}
`}>

<div className="max-w-7xl mx-auto flex justify-between items-center px-6">

{/* LOGO */}

<h1 className="text-xl font-bold">
Utkarsh<span className="text-green-400">.</span>
</h1>

{/* DESKTOP MENU */}

<div className="hidden md:flex items-center gap-6 text-sm">

{navItems.map(item=>(

<ScrollLink
key={item.id}
to={item.id}
smooth
duration={500}
className={`cursor-pointer transition 
${active===item.id ? "text-green-400" : "text-gray-400 hover:text-green-400"}
`}
>
{item.label}
</ScrollLink>

))}

<ThemeToggle/>

</div>

{/* MOBILE BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="md:hidden text-white"
>

{open ? <X/> : <Menu/>}

</button>

</div>

{/* MOBILE MENU */}

{open && (

<div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 flex flex-col gap-5 text-center">

{navItems.map(item=>(

<ScrollLink
key={item.id}
to={item.id}
smooth
duration={500}
onClick={()=>setOpen(false)}
className="text-gray-300 hover:text-green-400 cursor-pointer"
>
{item.label}
</ScrollLink>

))}

<ThemeToggle/>

</div>

)}

</nav>

)
}