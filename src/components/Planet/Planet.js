import React, { useRef, useState } from "react";
import { useTexture, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";
import Satellite from "../Satellite/Satellite";
import PlanetRing from "../Ring/PlanetRing";

const Planet = ({ name, size, texture, rotationSpeed, position, moveSpeed, satellites = [], rings }) => {
  const axisRef = useRef();
  const planetRef = useRef();
  const textureMap = useTexture(texture)
  const { camera } = useThree();
  const [active, setActive] = useState(false)
  const [hovered, setHover] = useState(false)

  const clickHandler = (e) => {
    e.stopPropagation();
    setActive(!active)
  }

  useFrame((a,s) => {
    if (active) {
      camera.position.lerpVectors(camera.position, { x: 100, y: 0, z: 50 }, 0.05)
      camera.lookAt(planetRef.current.position);
    }
    rotateAroundAxis(axisRef.current, moveSpeed)
    selfRotate(planetRef.current, rotationSpeed)
  })

  return(
    <group ref={axisRef}>
      <mesh
        position={position}
        ref={planetRef}
        onClick={clickHandler}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
      >
        {rings && <PlanetRing {...rings} />}
        <Html>
           <div style={{color: "white", position: "absolute", top: "initial", bottom: 0}}>{name}</div>
        </Html>
        <meshStandardMaterial attach="material" map={textureMap} color={hovered ? 0xdbdbdb : "white"} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
        {satellites.map(sat => <Satellite {...sat} planetRef={planetRef} key={sat.name} />)}
      </mesh>
    </group>
  )
}

export default Planet;