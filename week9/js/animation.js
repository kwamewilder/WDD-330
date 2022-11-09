// const squareElement = document.getElementById("square");
// let angle = 0;

// setInterval(() => {
//   angle = (angle + 2) % 360;
//   squareElement.style.transform = `rotate(${angle}deg)`;
// }, 1000 / 60);

const squareElement = document.getElementById("square");
let angle = 0;

function rotate() {
  angle = (angle + 2) % 360;
  squareElement.style.transform = `rotate(${angle}deg)`;
  window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

// Stop animation
// cancelAnimationFrame(id);