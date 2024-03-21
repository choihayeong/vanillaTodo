// random color chip generator
/**
 * new RegExp(/^\#(([0-9a-f]){3}|([0-9a-f]){6}|([0-9a-f]){8})$/i);
 * https://www.geeksforgeeks.org/javascript-generate-random-hex-codes-color/
 */
const generateRandomColorChip = () => {
  let hexCode = "#";
  let letters = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    hexCode += letters[Math.floor(Math.random() * letters.length)];
  }

  return hexCode;
};

let colorChips = [];

const createColorChips = (count) => {
  for (let i = 0; i < count; i++) {
    colorChips.push(generateRandomColorChip());
  }
};

const EACH_COLOR_VALUE = Math.pow(2, 8);

createColorChips(EACH_COLOR_VALUE);
// createColorChips(EACH_COLOR_VALUE * EACH_COLOR_VALUE * EACH_COLOR_VALUE);

const generateBtn = document.querySelector("#generateBtn");

function generateGradient() {
  const body = document.body;

  const rndNum01 = Math.floor(Math.random() * colorChips.length);
  let rndNum02;

  do {
    rndNum02 = Math.floor(Math.random() * colorChips.length);
  } while (rndNum01 === rndNum02);

  const startColor = colorChips[rndNum01];
  const lastColor = colorChips[rndNum02];

  body.setAttribute(
    "style",
    `background:linear-gradient(to left, ${startColor}, ${lastColor})`
  );
}

generateBtn.addEventListener("click", generateGradient);
