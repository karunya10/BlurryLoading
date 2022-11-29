const loadText = document.querySelector(".loading-txt");
const bg = document.querySelector(".bg");

let load = 0;
let set = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 100) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
