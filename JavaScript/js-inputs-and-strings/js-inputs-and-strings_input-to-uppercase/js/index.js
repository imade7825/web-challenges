// console.clear();
const firstInput = document.querySelector('[data-js="first-input"]');
const testValue = firstInput.value;
console.log(testValue);
const button = document.querySelector('[data-js="button-uppercase"]');
const output = document.querySelector('[data-js="output"]');
button.addEventListener("click", () => {
  const inputValueUppercase = firstInput.value.toUpperCase();
  output.textContent = inputValueUppercase;
});
