const add = document.querySelector("[data-action='increment']");
const sub = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

add.addEventListener("click", increment);
sub.addEventListener("click", decrement);
