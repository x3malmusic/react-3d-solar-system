import React, { useContext, useRef, useState } from "react";
import * as THREE from "three"
import { useTexture, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { rotateAroundAxis, selfRotate } from "../../utils/physX";
import Satellite from "../Satellite/Satellite";
import PlanetRing from "../Ring/PlanetRing";
import { Context } from "../../context";

const Planet = ({ name, size, texture, rotationSpeed, position, moveSpeed, satellites = [], rings, cameraRef }) => {
  const axisRef = useRef();
  const planetRef = useRef();
  const textureMap = useTexture(texture)
  const { camera } = useThree();
  const { activePlanet, setActivePlanet } = useContext(Context)
  const [hovered, setHover] = useState(false)

  const clickHandler = (e) => {
    e.stopPropagation();
    setActivePlanet(name)
  }

  useFrame(() => {
    if (activePlanet === name) {
      const mul = Math.ceil(size * 3)

      const vec = new THREE.Vector3()
      vec.setFromMatrixPosition(planetRef.current.matrixWorld)

      camera.position.lerpVectors(camera.position, { x: vec.x + mul, y: 1, z: vec.z + mul }, 0.03)
      cameraRef.current.target = vec
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
        {hovered &&
          <Html>
            <div style={{color: "white", position: "absolute", top: "initial", bottom: 0}}>{name}</div>
          </Html>
        }

        <meshStandardMaterial attach="material" map={textureMap} color={hovered ? 0xdbdbdb : "white"} />
        <sphereGeometry args={[size, 64]} attach="geometry" />
        {satellites.map(sat => <Satellite {...sat} planetRef={planetRef} key={sat.name} />)}
      </mesh>
    </group>
  )
}

export default Planet;