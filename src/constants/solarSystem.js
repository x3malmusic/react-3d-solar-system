import EarthImg from '../assets/textures/earth.jpg'
import SunImg from '../assets/textures/sun.jpg'
import MercuryImg from "../assets/textures/mercury.jpg"
import VenusImg from "../assets/textures/venus.jpg"
import MarsImg from "../assets/textures/mars.jpg"
import JupiterImg from "../assets/textures/jupiter.jpg"
import SaturnImg from "../assets/textures/saturn.jpg"
import UranusImg from "../assets/textures/uranus.jpg"
import NeptuneImg from "../assets/textures/neptune.jpg"
import PlutoImg from "../assets/textures/pluto.jpg"

import MoonImg from '../assets/textures/moon.jpg'

export const sun = {
  name: "Sun",
  size: 20,
  texture: SunImg,
  rotationSpeed: 0.00004,
  position: [0, 0, 0],
}

export const solarSystem = [
  {
    name: "Mercury",
    size: 0.5,
    texture: MercuryImg,
    rotationSpeed: 0.0005,
    position: [22, 0, 0],
    moveSpeed: 0.001,
  },
  {
    name: "Venus",
    size: 1,
    texture: VenusImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 30],
    moveSpeed: 0.0005,
  },
  {
    name: "Earth",
    size: 1,
    texture: EarthImg,
    rotationSpeed: 0.0002,
    position: [50, 0, 0],
    moveSpeed: 0.0001,
    satellites: [{
      name: "Moon",
      size: 0.3,
      texture: MoonImg,
      rotationSpeed: 0.0002,
      position: [2.5, 0, 0],
      moveSpeed: 0.0001,
    }]
  },
  {
    name: "Mars",
    size: 0.8,
    texture: MarsImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 55],
    moveSpeed: 0.00009,
  },
  {
    name: "Jupiter",
    size: 10,
    texture: JupiterImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 75],
    moveSpeed: 0.00002,
  },
  {
    name: "Saturn",
    size: 9,
    texture: SaturnImg,
    rotationSpeed: 0.0002,
    position: [0, 0, -100],
    moveSpeed: 0.000008,
    rings: {
      outerR: 13,
      innerR: 5,
      color: 0x757064
    }
  },
  {
    name: "Uranus",
    size: 5,
    texture: UranusImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 120],
    moveSpeed: 0.000001,
  },
  {
    name: "Neptune",
    size: 5,
    texture: NeptuneImg,
    rotationSpeed: 0.0002,
    position: [140, 0, 0],
    moveSpeed: 0.0000005,
  },
  {
    name: "Pluto",
    size: 0.3,
    texture: PlutoImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 155],
    moveSpeed: 0.00000001,
  },
]