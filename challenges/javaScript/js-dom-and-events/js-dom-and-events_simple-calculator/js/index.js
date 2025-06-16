console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSubstract = document.querySelector('[data-js="subtract"]');
const buttonMultiply = document.querySelector('[data-js="multiply"]');
const buttonDivide = document.querySelector('[data-js="divide"]');
const buttonExponent = document.querySelector('[data-js="exponent"]');
const buttonModulo = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
buttonAdd.addEventListener("click", () => {
  const summe = operand1 + operand2;
  console.log(
    "Die Summe von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      summe
  );
});

buttonSubstract.addEventListener("click", () => {
  const differenz = operand1 - operand2;
  console.log(
    "Die Differenz von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      differenz
  );
});

buttonMultiply.addEventListener("click", () => {
  const produkt = operand1 * operand2;
  console.log(
    "Das Produkt von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      produkt
  );
});

buttonDivide.addEventListener("click", () => {
  const quotient = operand1 / operand2;
  console.log(
    "Der Quotient von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      quotient
  );
});

buttonExponent.addEventListener("click", () => {
  const exponent = operand1 ** operand2;
  console.log(
    "Der Exponent von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      exponent
  );
});

buttonModulo.addEventListener("click", () => {
  const modulo = operand1 % operand2;
  console.log(
    "Der Modulo von operand1: " +
      operand1 +
      " und operand2: " +
      operand2 +
      " ist: " +
      modulo
  );
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const buttonIncreaseByOne = document.querySelector(
  '[data-js="increase-by-one"]'
);
const buttonIncreaseFoByFive = document.querySelector(
  '[data-js="increase-by-five"]'
);
const buttonDecreaseFoByOne = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const buttonDecreaseFoByFive = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const buttonMultiplyFoByTwo = document.querySelector(
  '[data-js="multiply-by-two"]'
);

const buttonDivideFoByTwo = document.querySelector('[data-js="divide-by-two"]');
buttonIncreaseByOne.addEventListener("click", () => {
  const alterWert = operand1;
  operand1++;
  console.log(" Erhöhe den operand1: " + alterWert + " um eins: " + operand1);
});

buttonIncreaseFoByFive.addEventListener("click", () => {
  const alterWert = operand1;
  operand1 += 5;
  console.log(" Erhöhe den operand1: " + alterWert + " um fünf: " + operand1);
});

buttonDecreaseFoByOne.addEventListener("click", () => {
  const alterWert = operand1;
  operand1--;
  console.log(
    " Dekrementiere den operand1: " + alterWert + " um eins: " + operand1
  );
});

buttonDecreaseFoByFive.addEventListener("click", () => {
  const alterWert = operand1;
  operand1 -= 5;
  console.log(
    " Dekrementiere den operand1: " + alterWert + " um fünf: " + operand1
  );
});

buttonMultiplyFoByTwo.addEventListener("click", () => {
  const alterWert = operand1;
  operand1 *= 2;
  console.log(
    " Multipliziere den operand1: " + alterWert + " mit zwei: " + operand1
  );
});

buttonDivideFoByTwo.addEventListener("click", () => {
  const alterWert = operand1;
  operand1 /= 2;
  console.log(
    " Dividiere den operand1: " + alterWert + " mit zwei: " + operand1
  );
});

// --^-- write your code here --^--
