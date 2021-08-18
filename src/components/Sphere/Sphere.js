import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sphere = ({ name, size, texture, rotationSpeed, position, moveSpeed }) => {
  const axisRef = useRef();
  const planetRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    axisRef.current.rotateY(moveSpeed);
    planetRef.current.rotateY(rotationSpeed);
  })

  return(
    <group ref={axisRef}>
      <mesh position={position} ref={planetRef}>
        <meshStandardMaterial attach="material" map={textureMap} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
      </mesh>
    </group>
  )
}

export default Sphere;