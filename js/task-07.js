const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

spanRef.style.fontSize = `${inputRef.value}px`;

const resizeText = function () {
  spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", resizeText);
