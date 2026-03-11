"use client"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function ParticlesBg(){

const particlesInit = useCallback(async (engine:any) => {
await loadFull(engine)
}, [])

return(

<Particles
id="tsparticles"
init={particlesInit}
options={{
background:{color:"#0f172a"},
fpsLimit:60,
particles:{
number:{value:80},
size:{value:2},
links:{
enable:true,
distance:150,
color:"#ffffff"
},
move:{enable:true,speed:1}
}
}}
/>

)

}