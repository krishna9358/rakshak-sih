"use client"

import Particles from "../ui/particles";


export default function BgParticles(){
    return <div>
         <Particles
        className="absolute inset-0 text-white"
        quantity={50}
        ease={70}
        color={"#000"}
        size={0.1}
        staticity={60}
        refresh
      />
    </div>
}