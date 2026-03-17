"use client"

import { useRef } from "react"

export default function MagneticButton({children}:any){

const ref = useRef<any>(null)

function handleMove(e:any){

const rect = ref.current.getBoundingClientRect()

const x = e.clientX - rect.left - rect.width/2
const y = e.clientY - rect.top - rect.height/2

ref.current.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`
}

function reset(){
ref.current.style.transform = `translate(0,0)`
}

return(

<button
ref={ref}
onMouseMove={handleMove}
onMouseLeave={reset}
className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold transition"
>

{children}

</button>

)

}