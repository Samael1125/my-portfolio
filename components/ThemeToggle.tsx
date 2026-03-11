"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle(){

const { theme, setTheme } = useTheme()
const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)
},[])

if(!mounted) return null

return(

<button
onClick={()=>setTheme(theme==="dark" ? "light" : "dark")}
className="px-3 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
>

{theme === "dark" ? "☀️" : "🌙"}

</button>

)

}