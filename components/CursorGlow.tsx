"use client"

import { useEffect } from "react"

export default function CursorGlow(){

useEffect(()=>{

const glow = document.createElement("div")

glow.style.position = "fixed"
glow.style.width = "300px"
glow.style.height = "300px"
glow.style.borderRadius = "50%"
glow.style.pointerEvents = "none"
glow.style.background = "radial-gradient(circle, rgba(0,255,180,0.15), transparent 60%)"
glow.style.zIndex = "9999"
glow.style.transform = "translate(-50%, -50%)"

document.body.appendChild(glow)

function move(e:any){
glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"
}

window.addEventListener("mousemove", move)

return ()=>{
window.removeEventListener("mousemove", move)
document.body.removeChild(glow)
}

},[])

return null
}