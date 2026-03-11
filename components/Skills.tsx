"use client"

export default function Skills(){

const skillCategories = [

{
title:"Languages",
skills:["Python","C++","C","Java","JavaScript","SQL"]
},

{
title:"Tools & Platforms",
skills:["MongoDB","MS SQL Server","GitHub","Anaconda","Figma","Framer"]
},

{
title:"Libraries",
skills:["NumPy","Pandas","Matplotlib","Seaborn","Scikit-learn"]
},

{
title:"Soft Skills",
skills:["Problem Solving","Team Collaboration","Project Management","Adaptability"]
}

]

return(

<section id="skills" className="py-32">

<h2 className="text-4xl font-bold text-center mb-16">
Skills
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

{skillCategories.map((category,index)=> (

<div key={index}>

<h3 className="text-xl font-semibold mb-6">
{category.title}
</h3>

<div className="flex flex-wrap gap-3">

{category.skills.map((skill,i)=> (

<span
key={i}
className="px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-lg text-green-300"
>
{skill}
</span>

))}

</div>

</div>

))}

</div>

</section>

)

}