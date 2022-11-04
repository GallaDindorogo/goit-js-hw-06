"use strict";

// количество категорий в ul#categories, то есть элементов li.item.

const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

//текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>)

[...categoriesEl].map((categories) =>
  console.log(`Category: ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`)
);
