"use client"

import { useState } from "react"

export default function Chatbot(){

const [open,setOpen] = useState(false)
const [messages,setMessages] = useState([
{role:"bot",text:"Hi 👋 Ask me about Utkarsh!"}
])
const [input,setInput] = useState("")

function handleSend(){

if(!input) return

const userMsg = {role:"user",text:input}

let reply = "I can help you with Utkarsh's projects, skills and experience."

const q = input.toLowerCase()

if(q.includes("project")){
reply = "Utkarsh has built AI Code Review System, Smart Irrigation ML system, Trivia App and Local Technician Finder."
}

else if(q.includes("skill")){
reply = "He is skilled in Python, Machine Learning, Flask, React, Node.js and Data Analytics."
}

else if(q.includes("ml") || q.includes("machine")){
reply = "He has worked on ML models like Random Forest, XGBoost, SVM and ANN."
}

else if(q.includes("experience")){
reply = "He completed an AI internship working with neural networks and prediction systems."
}

setMessages([...messages,userMsg,{role:"bot",text:reply}])
setInput("")
}

return(

<div className="fixed bottom-6 right-6 z-50">

{/* BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="bg-green-400 text-black px-5 py-3 rounded-full shadow-lg"
>
Chat
</button>

{/* CHAT BOX */}

{open && (

<div className="mt-4 w-80 h-96 bg-[#050816] border border-white/10 rounded-xl flex flex-col">

<div className="p-4 border-b border-white/10 font-semibold">
AI Assistant
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3">

{messages.map((m,i)=>(

<div
key={i}
className={`text-sm ${
m.role==="user" ? "text-right text-green-400" : "text-gray-300"
}`}
>
{m.text}
</div>

))}

</div>

<div className="p-3 flex gap-2">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
className="flex-1 px-3 py-2 bg-black border border-white/10 rounded"
placeholder="Ask something..."
/>

<button
onClick={handleSend}
className="px-4 bg-green-400 text-black rounded"
>
Send
</button>

</div>

</div>

)}

</div>

)

}