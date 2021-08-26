import React from "react";
import { Html } from "@react-three/drei";

const PlanetName = ({ name }) => {
  return(
    <Html>
      <div style={{color: "white", position: "absolute", top: "initial", bottom: 0}}>{name}</div>
    </Html>
  )
}

export default PlanetName;