export const rotateAroundAxis = (planet, speed) => {
  planet.rotateY(speed);
}

export const selfRotate = (el, rotationSpeed) => {
  el.rotateY(rotationSpeed);
}