import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";
import Satellite from "../Satellite/Satellite";

const Planet = ({ name, size, texture, rotationSpeed, position, moveSpeed, satellites = [] }) => {
  const axisRef = useRef();
  const planetRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    rotateAroundAxis(axisRef.current, moveSpeed)
    selfRotate(planetRef.current, rotationSpeed)
  })

  return(
    <group ref={axisRef}>
      <mesh position={position} ref={planetRef}>
        <meshStandardMaterial attach="material" map={textureMap} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
        {satellites.map(sat => <Satellite {...sat} planetRef={planetRef} key={sat.name} />)}
      </mesh>
    </group>
  )
}

export default Planet;