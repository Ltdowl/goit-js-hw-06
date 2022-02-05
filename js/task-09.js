function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

function btnClick() {
  span.textContent = getRandomHexColor();
  return (document.body.style.background = span.textContent);
}

button.addEventListener("click", btnClick);
