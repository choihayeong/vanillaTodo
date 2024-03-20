const gameForm = document.querySelector("#gameForm");
const rangeInput = gameForm.querySelector("#rangeInput");
const guessInput = gameForm.querySelector("#guessInput");

function handleSubmit(event) {
  event.preventDefault();

  const gameResult = document.querySelector("#gameResult");
  const yourNum = gameResult.querySelector("#yourNum");
  const machineNum = gameResult.querySelector("#machineNum");
  const resultMsg = gameResult.querySelector("#resultMsg");

  gameResult.style.display = "block";

  const maxNum = Number(rangeInput.value);
  const guessNum = Number(guessInput.value);
  const randomNum = Math.ceil(Math.random() * maxNum);

  yourNum.innerText = guessNum;
  machineNum.innerText = randomNum;

  if (guessNum === randomNum) {
    resultMsg.innerText = "You Win!";
  } else {
    resultMsg.innerText = "You Lost!";
  }
}

gameForm.addEventListener("submit", handleSubmit);
