"use client"

import { useState } from "react"

export default function Contact(){

const [form,setForm]=useState({
  name:"",
  email:"",
  message:""
})

function handleChange(e:any){
  setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e:any){
  e.preventDefault()
  alert("Message sent 🚀")
}

return(

<section className="py-32 px-6">

<h2 className="text-5xl font-bold text-center mb-20">
Contact
</h2>

<form
onSubmit={handleSubmit}
className="max-w-xl mx-auto space-y-6"
>

<input
name="name"
placeholder="Your Name"
onChange={handleChange}
className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
/>

<input
name="email"
placeholder="Your Email"
onChange={handleChange}
className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
/>

<textarea
name="message"
placeholder="Your Message"
onChange={handleChange}
className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
/>

<button
className="w-full py-4 bg-green-500 rounded-lg hover:bg-green-400 transition"
>
Send Message
</button>

</form>

</section>

)
}