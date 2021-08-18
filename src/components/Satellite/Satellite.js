import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";

const Planet = ({ name, size, texture, rotationSpeed, position, moveSpeed, planetRef }) => {
  const satRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    rotateAroundAxis(planetRef.current, moveSpeed)
    selfRotate(satRef.current, rotationSpeed)
  })

  return(
    <group ref={planetRef}>
      <mesh position={position} ref={satRef}>
        <meshStandardMaterial attach="material" map={textureMap} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
      </mesh>
    </group>
  )
}

export default Planet;