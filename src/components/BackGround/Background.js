import React from "react";
import { useTexture } from "@react-three/drei";
import BGImg from "../../assets/textures/bg.jpg"

const Background = () => {
  const textureMap = useTexture(BGImg)

  return(
    <group>
      <mesh rotation={[0, 0, 0.9]}>
        <sphereGeometry args={[1e8, 50, 50]} attach="geometry" />
        <meshBasicMaterial attach="material" side={1}>
          <primitive attach="map" object={textureMap} />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

export default Background;