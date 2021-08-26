import { createContext, useState, useEffect } from "react";
import { planetInfo } from "./constants/solarSystem";

export const Context = createContext({})

export const Provider = ({ children }) => {
  const [activePlanet, setActivePlanet] = useState();
  const [chosenPlanetInfo, setChosenPlanetInfo] = useState();

  useEffect(() => {
    if (activePlanet) {
      setChosenPlanetInfo(planetInfo[activePlanet])
    }
  }, [activePlanet])

  return <Context.Provider value={{ activePlanet, setActivePlanet, chosenPlanetInfo }}>
    {children}
  </ Context.Provider>
}