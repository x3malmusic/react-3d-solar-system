import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { selfRotate } from "../../utils/physX";
import PlanetName from "../PlanetName/PlanetName";

const Star = ({ name, size, texture, rotationSpeed, position, hovered, setHover, clickHandler }) => {
  const starRef = useRef();
  const textureMap = useTexture(texture)

  useFrame((a,s) => {
    selfRotate(starRef.current, rotationSpeed)
  })

  return(
    <group>
      <mesh
        position={position} ref={starRef}
        onClick={(e) => clickHandler(e, starRef.current)}
        onPointerOver={(e) => setHover(e, true)}
        onPointerOut={(e) => setHover(e, false)}
      >
        {hovered && <PlanetName name={name} />}
        <meshPhysicalMaterial emissive={0xffffff} attach="material" emissiveIntensity={hovered ? 1 : 0.7} emissiveMap={textureMap} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
      </mesh>
    </group>
  )
}

export default Star;