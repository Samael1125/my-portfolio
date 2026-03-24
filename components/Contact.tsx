"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

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

  emailjs.send(
    "service_r4ho5g9",
    "template_ktbonmw",
    form,
    "tr3kvgmH_IPi9-SEy"
  ).then(()=>{
    alert("Message sent 🚀")
  }).catch(()=>{
    alert("Failed ❌")
  })
}

return(

<section id="contact" className="py-32 px-6">

<div className="max-w-2xl mx-auto">

{/* Heading */}
<h2 className="text-4xl md:text-5xl font-bold mb-6">
Contact
</h2>

<p className="text-gray-400 mb-8">
Open to internships, AI projects, and freelance collaboration.
</p>

{/* Info */}
<div className="space-y-2 mb-10 text-sm text-gray-300">

  <p>
    Email:{" "}
    <a
      href="mailto:uttkarshsj.2102@gmail.com"
      className="text-green-400 hover:underline"
    >
      uttkarshsj.2102@gmail.com
    </a>
  </p>

  <p>
    GitHub:{" "}
    <a
      href="https://github.com/Samael1125"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:underline"
    >
      github.com/Samael1125
    </a>
  </p>

  <p>
    LinkedIn:{" "}
    <a
      href="https://linkedin.com/in/utkarsh-singh-jhala"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:underline"
    >
      linkedin.com/in/utkarsh-singh-jhala
    </a>
  </p>

</div>

{/* Form */}
<form onSubmit={handleSubmit} className="space-y-6">

{/* Name */}
<div>
<label className="block mb-2 text-sm">Name</label>
<input
name="name"
placeholder="Your name"
onChange={handleChange}
required
className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-400 outline-none transition"
/>
</div>

{/* Email */}
<div>
<label className="block mb-2 text-sm">Email</label>
<input
name="email"
type="email"
placeholder="you@example.com"
onChange={handleChange}
required
className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-400 outline-none transition"
/>
</div>

{/* Message */}
<div>
<label className="block mb-2 text-sm">Message</label>
<textarea
name="message"
rows={5}
placeholder="Tell me about your project or role"
onChange={handleChange}
required
className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-400 outline-none transition"
/>
</div>

{/* Button */}
<button
type="submit"
className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 transition font-semibold"
>
Send Message
</button>

</form>

</div>

</section>

)
}