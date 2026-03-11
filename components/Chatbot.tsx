"use client"

import { useState } from "react"

export default function Chatbot(){

const [open,setOpen]=useState(false)

return(

<div className="fixed bottom-6 right-6">

<button
onClick={()=>setOpen(!open)}
className="bg-green-400 px-4 py-3 rounded-full"
>
Chat
</button>

{open && (

<div className="w-80 h-96 bg-black border border-white/20 rounded-xl mt-4 p-4">

<p className="text-sm text-gray-400">
Hi! Ask me about Utkarsh's projects or skills.
</p>

</div>

)}

</div>

)

}