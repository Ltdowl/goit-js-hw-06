const inputRef = document.querySelector("input#name-input");
console.log(inputRef);
const valueRef = document.querySelector("span#name-output");
console.log(valueRef);

const inputChange = function (event) {
  if (event.currentTarget.value === "") {
    valueRef.textContent = "Anonymous";
  } else {
    valueRef.textContent = event.currentTarget.value;
  }
};

inputRef.addEventListener("input", inputChange);


