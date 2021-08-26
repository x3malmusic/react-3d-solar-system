import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";
import PlanetName from "../PlanetName/PlanetName";

const Satellite = ({ name, size, texture, rotationSpeed, position, moveSpeed, planetRef, hovered, setHover, clickHandler }) => {
  const satRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    rotateAroundAxis(planetRef.current, moveSpeed)
    selfRotate(satRef.current, rotationSpeed)
  })

  return(
    <mesh
      onClick={(e) => clickHandler(e, satRef.current)}
      position={position} ref={satRef}
      onPointerOver={(e) => setHover(e, true)}
      onPointerOut={(e) => setHover(e,false)}
    >
      {hovered && <PlanetName name={name} />}
      <meshStandardMaterial attach="material" map={textureMap} />
      <sphereGeometry args={[size, 64]} attach="geometry" />
    </mesh>
  )
}

export default Satellite;