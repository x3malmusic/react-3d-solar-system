import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useContextBridge } from "@react-three/drei";

import OrbitRing from "./components/Ring/Ring";
import Background from "./components/BackGround/Background";
import { solarSystem } from "./constants/solarSystem";
import { Context } from "./context";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const cameraRef = useRef();
  const ContextBridge = useContextBridge(Context)

  return (
    <div className="scene">
      <Sidebar />
      <Canvas
        style={{ backgroundColor: "black" }}
        gl={{ antialias: true, logarithmicDepthBuffer: true, _pixelRatio: window.devicePixelRatio }}
        camera={{ fov: 25, position: [0, 50, 150], far: 1e8, near: 1, aspectRatio: window.innerWidth / window.innerHeight }}
      >
        <ContextBridge>
          <OrbitControls target-x={0} maxDistance={800} ref={cameraRef} />
          <pointLight position={[0, 0, 0]} />
          <ambientLight intensity={0.1} />
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          {solarSystem.map(({ Component, ...obj }) => (
            <Suspense fallback={null} key={obj.name}>
              <Component cameraRef={cameraRef} {...obj} />
              <OrbitRing distanceFromAxis={obj.position} />
            </Suspense>
          ))}
        </ContextBridge>
      </Canvas>
    </div>
  );
}

export default App;
