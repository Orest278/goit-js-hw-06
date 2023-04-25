const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

const items = ingredients.map(ingredient => {
  const listEl = document.createElement(`li`);

  listEl.classList.add(`item`);
  listEl.textContent = ingredient;
  return listEl;
});

list.append(...items);

// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   list.appendChild(item);
// })