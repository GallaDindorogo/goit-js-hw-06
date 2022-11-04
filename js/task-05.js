let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

const onInput = (e) => {
  if (input.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = input.value;
  }
};

input.addEventListener("input", onInput);
