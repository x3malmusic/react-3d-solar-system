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

import sphereType from "../components/SphereType/sphereType";
import Planet from "../components/Planet/Planet";
import Satellite from "../components/Satellite/Satellite";
import Star from "../components/Star/Star";

export const solarSystem = [
  {
    name: "Sun",
    size: 20,
    texture: SunImg,
    rotationSpeed: 0.00004,
    position: [0, 0, 0],
    Component: sphereType(Star)
  },
  {
    name: "Mercury",
    size: 0.5,
    texture: MercuryImg,
    rotationSpeed: 0.0005,
    position: [22, 0, 0],
    moveSpeed: 0.001,
    Component: sphereType(Planet)
  },
  {
    name: "Venus",
    size: 1,
    texture: VenusImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 30],
    moveSpeed: 0.0005,
    Component: sphereType(Planet)
  },
  {
    name: "Earth",
    size: 1,
    texture: EarthImg,
    rotationSpeed: 0.0002,
    position: [50, 0, 0],
    moveSpeed: 0.0001,
    Component: sphereType(Planet),
    satellites: [{
      name: "Moon",
      size: 0.3,
      texture: MoonImg,
      rotationSpeed: 0.0002,
      position: [2.5, 0, 0],
      moveSpeed: 0.0001,
      Component: sphereType(Satellite)
    }]
  },
  {
    name: "Mars",
    size: 0.8,
    texture: MarsImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 55],
    moveSpeed: 0.00009,
    Component: sphereType(Planet)
  },
  {
    name: "Jupiter",
    size: 10,
    texture: JupiterImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 75],
    moveSpeed: 0.00002,
    Component: sphereType(Planet)
  },
  {
    name: "Saturn",
    size: 9,
    texture: SaturnImg,
    rotationSpeed: 0.0002,
    position: [0, 0, -100],
    moveSpeed: 0.000008,
    Component: sphereType(Planet),
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
    Component: sphereType(Planet)
  },
  {
    name: "Neptune",
    size: 5,
    texture: NeptuneImg,
    rotationSpeed: 0.0002,
    position: [140, 0, 0],
    moveSpeed: 0.0000005,
    Component: sphereType(Planet)
  },
  {
    name: "Pluto",
    size: 0.3,
    texture: PlutoImg,
    rotationSpeed: 0.0002,
    position: [0, 0, 155],
    moveSpeed: 0.00000001,
    Component: sphereType(Planet)
  },
]

export const planetInfo = {
  'Sun': {
    desc: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit.",
    year: "230 Million Earth Days"
  },
  'Mercury': {
    desc: "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
    distance: 0.4,
    year: "88 Earth Days"
  },
  "Venus": {
    desc: "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
    distance: 0.7,
    year: "225 Earth Days"
  },
  "Earth": {
    desc: "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
    distance: 1,
    year: "365.25 Earth Days",
  },
  "Moon": {
    desc: "Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.",
    year: "27 Earth Days"
  },
  "Mars": {
    desc: "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
    distance: 1.5,
    year: "1.88 Earth Years"
  },
  "Jupiter": {
    desc: "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
    distance: 5.2,
    year: "11.86 Earth Years"
  },
  "Saturn": {
    desc: "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
    distance: 9.5,
    year: "29.45 Earth Years"
  },
  "Uranus": {
    desc: "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
    distance: 19.8,
    year: "84 Earth Years"
  },
  "Neptune": {
    desc: "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
    distance: 30.1,
    year: "164.81 Earth Years"
  },
  "Pluto": {
    desc: "Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.",
    distance: 39,
    year: "248.89 Earth Years"
  },
}