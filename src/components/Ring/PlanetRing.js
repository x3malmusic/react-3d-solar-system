import React from "react";
import { Ring } from "@react-three/drei";


const PlanetRing = ({ outerR, innerR, color }) => {

  return(
    <Ring position={[0, 0, 0]} args={[outerR, outerR + innerR, 320]} rotation={[1.57, 0, 0]}>
      <meshBasicMaterial attach="material" side={2} color={color} opacity={0.7} transparent />
    </Ring>
  )
}

export default PlanetRing;