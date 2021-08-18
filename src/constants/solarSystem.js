import EarthImg from '../assets/textures/earth.jpg'
import SunImg from '../assets/textures/sun.jpg'

export const solarSystem = [
  {
    name: "Sun",
    size: 20,
    texture: SunImg,
    rotationSpeed: 0.00004,
    position: [0, 0, 0],
    moveSpeed: 0,
  },
  {
    name: "Earth",
    size: 1,
    texture: EarthImg,
    rotationSpeed: 0.0002,
    position: [50, 0, 0],
    moveSpeed: 0.0001
  },
]