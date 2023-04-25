const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

const items = ingredients.map(ingredient => `<li calss="item">${ingredient}</li>`);

const ul = document.createElement("ul");
ul.innerHTML = items.join("");
list.appendChild(ul);

// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   list.appendChild(item);
// })