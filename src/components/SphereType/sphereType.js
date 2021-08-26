import React, { useContext, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Context } from "../../context";

const sphereType = (Component) => ({ cameraRef,...props }) => {
  const { camera } = useThree();
  const { activePlanet, setActivePlanet } = useContext(Context)
  const [hovered, setHovered] = useState(false)
  const [ref, setRef] = useState()

  const clickHandler = (e, planetRef) => {
    e.stopPropagation();
    setActivePlanet(props.name)
    setRef(planetRef)
  }

  const setHover = (e, state) => {
    e.stopPropagation();
    setHovered(state)
  }

  useFrame(() => {
    if (activePlanet === props.name && ref) {
      const mul = Math.ceil(props.size * 3)

      const vec = new THREE.Vector3()
      vec.setFromMatrixPosition(ref.matrixWorld)

      camera.position.lerpVectors(camera.position, { x: vec.x + mul, y: 1, z: vec.z + mul }, 0.03)
      cameraRef.current.target = vec
    }
  })

  return <Component cameraRef={cameraRef} clickHandler={clickHandler} hovered={hovered} setHover={setHover} {...props} />
}

export default sphereType