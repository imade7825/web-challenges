console.clear();
/*
// Part 1: Password
const userInput = prompt("Bitte gib etwas ein:");
console.log("Du hast eingegeben: " + userInput);

const SUPER_SECRET_PASSWORD = "h4x0r1337";
//const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD == userInput) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else console.log("Access denied!");*/

// Part 2: Even / Odd
const userInput = prompt("Bitte gib etwas ein:");
console.log("Du hast eingegeben: " + userInput);
//const number = 6;
/*if (userInput % 2 === 0) {
  console.log("Then number is Even");
} else console.log("Then number ist Odd");*/

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if (userInput > 0 && userInput < 5) {
  console.log(userInput * 2 + " Euro " + " zu bezahlen");
} else if (userInput >= 5 && userInput < 100) {
  console.log(userInput * 1.5 + " Euro " + " zu bezahlen");
} else if (userInput >= 100 && userInput < 1000000) {
  console.log(userInput * 1 + " Euro " + " zu bezahlen");
} else if (userInput >= 10000000) {
  console.log(userInput * 0.1 + " Euro " + " zu bezahlen");
} else "Der Wert ist nicht gültig";

// Part 4: Daytime
//const currentHour = new Date().getHours();
const currentHour = prompt("Bitte gib etwas ein:");
const statement = currentHour < 17 ? "Still to learn" : "Partytime!!!";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const nameCoach = prompt("Bitte gib Name ein:");

const greeting =
  "Hello " + (userName === nameCoach ? "Coach" : nameCoach) + "!";

console.log(greeting);
