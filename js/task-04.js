const decrementRef = document.querySelector(
  '#counter [data-action = "decrement"]'
);
console.log(decrementRef);

const incrementRef = document.querySelector(
  '#counter [data-action = "increment"]'
);
console.log(incrementRef);

const valueRef = document.querySelector("#value");
console.log(valueRef);

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);
