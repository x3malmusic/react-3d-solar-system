import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react'
import { OrbitControls, Stars } from "@react-three/drei";

import Planet from "./components/Planet/Planet";
import Star from "./components/Star/Star";
import OrbitRing from "./components/Ring/Ring";
import Background from "./components/BackGround/Background";
import { solarSystem, sun } from "./constants/solarSystem";

function App() {
  return (
    <div className="scene">
      <Canvas
        style={{ backgroundColor: "black" }}
        gl={{ antialias: true, logarithmicDepthBuffer: true, _pixelRatio: window.devicePixelRatio }}
        camera={{ fov: 25, position: [0, 50, 150], far: 1e8, near: 1, aspectRatio: window.innerWidth / window.innerHeight }}
      >
        <OrbitControls target-x={0} maxDistance={800} />
        <pointLight position={[0, 0, 0]} />
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Star {...sun} />
          <Background />
        </Suspense>
        {/*<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />*/}
        {solarSystem.map(obj => (
          <Suspense fallback={null} key={obj.name}>
            <Planet {...obj} />
            <OrbitRing distanceFromAxis={obj.position} />
          </Suspense>
        ))}
      </Canvas>
    </div>
  );
}

export default App;
