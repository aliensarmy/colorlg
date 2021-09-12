const lora = document.querySelector(".text");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.getElementById("body");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  lora.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const button = document.getElementById("random");
//Random color selector

const randomColor = () => {
  const color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  return color;
};

const getRandomColor = () => {
  const rndColor1 = randomColor();
  const rndColor2 = randomColor();
  body.style.background =
    "linear-gradient(to right, " + rndColor1 + ", " + rndColor2 + ")";
  lora.textContent = body.style.background + ";";
};

button.addEventListener("click", getRandomColor);
