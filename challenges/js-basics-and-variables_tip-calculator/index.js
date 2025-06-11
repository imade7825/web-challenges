console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.
*/
const mealCost = 25.99;
let percentage = 0.1; // 10 % as a decimal for calculation

//2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.
const tipAmount = mealCost * percentage;

//3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.
const totalCost = mealCost + tipAmount;

//4. Log a message to the console that includes the meal cost, tip amount, and total cost.
console.log(
  "mealCost =",
  mealCost,
  "tipAmount = ",
  tipAmount,
  "totalCost = ",
  totalCost
);
