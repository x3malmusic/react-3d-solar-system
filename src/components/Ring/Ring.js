import React from "react";
import { Ring } from "@react-three/drei";

const OrbitRing = ({ distanceFromAxis }) => {
  const [x,y,z] = distanceFromAxis
  const distance = x + y + z

  return(
    <Ring position={[0, 0, 0]} args={[distance, distance + 0.1, 320]} rotation={[1.57, 0, 0]}>
      <meshBasicMaterial attach="material" side={2} />
    </Ring>
  )
}

export default OrbitRing;