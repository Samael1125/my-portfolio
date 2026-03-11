"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBg(){

const particlesInit = useCallback(async (engine:any) => {
  await loadSlim(engine)
},[])

return(

<Particles
id="tsparticles"
init={particlesInit}

options={{

fullScreen:{enable:true,zIndex:-1},

background:{
color:"#020617"
},

particles:{

number:{
value:60
},

color:{
value:"#00ffcc"
},

links:{
enable:true,
distance:150,
color:"#00ffcc",
opacity:0.2
},

move:{
enable:true,
speed:1
},

size:{
value:2
}

}

}}

 />

)

}