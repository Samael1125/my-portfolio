const projects=[

{
title:"Secure AI Code Review System",
desc:"AI system that analyzes code security and quality",
tech:"Flask • Python • AI"
},

{
title:"Smart Irrigation ML System",
desc:"Machine learning system analyzing groundwater data",
tech:"Python • ML • GIS"
},

{
title:"Jarvis Desktop Assistant",
desc:"Voice controlled AI assistant for automation",
tech:"Python • NLP"
}

]

export default function Projects(){

return(

<section id="projects" className="py-32">

<h2 className="text-4xl text-center font-bold mb-16">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{projects.map((p,i)=>(

<div key={i} className="p-8 rounded-xl backdrop-blur-lg bg-white/10 hover:scale-105 transition">

<h3 className="text-xl font-semibold mb-3">
{p.title}
</h3>

<p className="text-gray-300 mb-3">
{p.desc}
</p>

<p className="text-sm text-blue-400">
{p.tech}
</p>

</div>

))}

</div>

</section>

)

}