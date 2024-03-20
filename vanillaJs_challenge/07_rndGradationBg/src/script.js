const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const generateBtn = document.querySelector("#generateBtn");

function generateGradient() {
  const body = document.body;

  const rndNum01 = Math.floor(Math.random() * colors.length);
  let rndNum02;

  do {
    rndNum02 = Math.floor(Math.random() * colors.length);
  } while (rndNum01 === rndNum02);

  const startColor = colors[rndNum01];
  const lastColor = colors[rndNum02];

  body.setAttribute(
    "style",
    `background:linear-gradient(to left, ${startColor}, ${lastColor})`
  );
}

generateBtn.addEventListener("click", generateGradient);
