import React from "react";
import {Ring, useTexture} from "@react-three/drei";


const OrbitRing = ({ outerR, innerR, texture }) => {
  const textureMap = useTexture(texture)

  return(
    // <mesh rotation={[1.57, 0, 0]} position={[0, 0, 0]} >
    //   <torusGeometry args={[outerR, innerR, 2, 32]} attach="geometry" />
    //   <meshBasicMaterial attach="material" side={2} color={0x757064} map={textureMap} opacity={1} transparent />
    // </mesh>
    <Ring position={[0, 0, 0]} args={[outerR, outerR + innerR, 320]} rotation={[1.57, 0, 0]}>
      <meshBasicMaterial attach="material" side={2} color={0x757064} />
    </Ring>
  )
}

export default OrbitRing;