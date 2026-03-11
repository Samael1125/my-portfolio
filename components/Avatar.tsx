export default function Avatar(){

return(

<div className="relative w-72 h-72">

<img
src="/profile.jpg"
className="rounded-full object-cover w-full h-full"
/>

<div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse"></div>

</div>

)

}