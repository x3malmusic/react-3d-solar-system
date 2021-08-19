import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { selfRotate } from "../../utils/physX";

const Star = ({ name, size, texture, rotationSpeed, position }) => {
  const starRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    selfRotate(starRef.current, rotationSpeed)
  })

  return(
    <group>
      <mesh position={position} ref={starRef}>
        <meshPhysicalMaterial emissive={0xffffff} attach="material" emissiveIntensity={0.7} emissiveMap={textureMap} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
      </mesh>
    </group>
  )
}

export default Star;