const clockTitle = document.querySelector(".js-clock");

function countDday() {
  const today = new Date();
  const xmasDate = new Date("2024-12-24 00:00:00+0900");

  const gap = xmasDate - today;

  const gapObj = {
    day: String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(3, "0"),
    hours: String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor(((gap / 1000) * 60) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((gap / 1000) % 60)).padStart(2, "0"),
  };

  clockTitle.innerText = `${gapObj.day}d ${gapObj.hours}h ${gapObj.minutes}m ${gapObj.seconds}s`;
}

countDday();
setInterval(countDday, 1000);
