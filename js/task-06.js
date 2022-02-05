const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const inputTest = function (event) {
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    inputRef.setAttribute("class", "valid");
  } else {
    inputRef.setAttribute("class", "invalid");
  }
};

inputRef.addEventListener("blur", inputTest);
