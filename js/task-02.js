const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`ul#ingredients`);

const items = ingredients.map((item) => {
  const newItem = document.createElement("li");

  newItem.textContent = item;
  newItem.classList.add("item");
  return newItem;
});

list.append(...items);
