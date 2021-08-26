import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";
import PlanetRing from "../Ring/PlanetRing";
import PlanetName from "../PlanetName/PlanetName";

const Planet = ({ name, size, texture, rotationSpeed, position, moveSpeed, satellites = [], rings, hovered, setHover, clickHandler, cameraRef }) => {
  const axisRef = useRef();
  const planetRef = useRef();
  const textureMap = useTexture(texture)

  useFrame(() => {
    rotateAroundAxis(axisRef.current, moveSpeed)
    selfRotate(planetRef.current, rotationSpeed)
  })

  return(
    <group ref={axisRef}>
      <mesh
        position={position}
        ref={planetRef}
        onClick={(e) => clickHandler(e, planetRef.current)}
        onPointerOver={(e) => setHover(e, true)}
        onPointerOut={(e) => setHover(e, false)}
      >
        {rings && <PlanetRing {...rings} />}
        {hovered && <PlanetName name={name} />}

        <meshStandardMaterial attach="material" map={textureMap} color={hovered ? 0xdbdbdb : "white"} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
        {satellites.map(({Component, ...sat}) => <Component {...sat} cameraRef={cameraRef} planetRef={planetRef} key={sat.name} />)}
      </mesh>
    </group>
  )
}

export default Planet;