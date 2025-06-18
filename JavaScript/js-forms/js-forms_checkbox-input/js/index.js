console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError("tos-error");
  } else showTosError("tos-error");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    return alert("Form submitted");
  } else {
    return showTosError("tos-error");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

  // alert("Form submitted");
});
