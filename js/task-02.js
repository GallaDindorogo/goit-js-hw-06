"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elementsList = ingredients.map((element) => {
  const items = document.createElement("li");
  items.textContent = element;
  items.classList.add("item");
  return items;
});

list.append(...elementsList);
