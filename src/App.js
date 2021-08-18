import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react'
import { OrbitControls, Stars } from "@react-three/drei";

import Sphere from "./components/Sphere/Sphere";
import { solarSystem } from "./constants/solarSystem";

function App() {
  return (
    <div className="scene">
      <Canvas
        pixelRatio={window.devicePixelRatio}
        style={{ backgroundColor: "black" }}
        gl={{ antialias: false }}
        camera={{ fov: 25, position: [0, 0, 70] }}
      >
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <spotLight position={[100, 15, 10]} angle={0.3} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        {solarSystem.map(obj => (
          <Suspense fallback={null} key={obj.name}>
            <Sphere {...obj} />
          </Suspense>
        ))}
      </Canvas>
    </div>
  );
}

export default App;
