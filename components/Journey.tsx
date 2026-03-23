export default function Journey(){

const journey = [

{
year:"2026",
title:"Secure AI Code Review System",
desc:"Developed an AI-powered system to review source code for vulnerabilities and quality."
},

{
year:"2025",
title:"Local Technician Finder",
desc:"Built a platform connecting users with nearby technicians using Flask and SQLite."
},

{
year:"2025",
title:"Smart Irrigation ML System",
desc:"Created ML models analyzing groundwater data for smart irrigation planning."
},

{
year:"2023",
title:"B.Tech Computer Science Engineering",
desc:"Started Bachelor of Technology in Computer Science Engineering."
}

]

return(

<section className="py-32">

<h2 className="text-4xl font-bold text-center mb-20">
My Journey
</h2>

<div className="max-w-4xl mx-auto">

{journey.map((item,i)=>(

<div key={i} className="mb-10 border-l border-green-400 pl-6">

<h3 className="text-green-400 font-semibold">
{item.year}
</h3>

<h4 className="text-xl font-semibold">
{item.title}
</h4>

<p className="text-gray-400">
{item.desc}
</p>

</div>

))}

</div>

</section>

)

}