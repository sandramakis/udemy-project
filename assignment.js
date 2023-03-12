//  VALUES AND VARIABLES
const myCountry = "Nigeria";
const continent = "Africa";
let ourPopulation = 214.4;

// DATA TYPES
console.log(myCountry);
console.log(continent);
console.log(ourPopulation);

const isIsland = false;
console.log(isIsland);
let language;
console.log(typeof isIsland); //boolean
console.log(typeof ourPopulation); //number
console.log(typeof language); //undefined

// let, const, var
// Assign a language to the language variable
language = "Igbo";

// Basic Operators
// Question: If the Population of my country was split into two, what would be the ourPopulation on one side?

let halfPopulation = ourPopulation / 2;
console.log(halfPopulation); //107.2

// increase the ourPopulation by 1
ourPopulation++;
console.log(ourPopulation);

// PROBLEM: Finland's ourPopulation is 6m, does my country have more than 6m?
let finlandPopulation = 6;
console.log(ourPopulation >= finlandPopulation); //true

// QUESTION: The average population of a country is 33m, does my country have less people than the average country?
let averagePopulation = 33;
console.log(ourPopulation <= averagePopulation);

// PROBLEM: Based on the variables I created, create a new variable "description" which containsa string in this format "Portugal is in Europe, and its 11 million people speak Portguese"

let description =
  myCountry +
  " is in " +
  continent +
  ", and it's " +
  halfPopulation +
  " million people speak " +
  language;
console.log(description);

// CODING CHALLENGE #1 ON OPERATORS
/* Problem: 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formular: BMI = mass / height ** 2 = mass / (height * height). (mass in kg, height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formular (you can implement both versions)
3. Create a boolean variable "markHigherBMI" containing information about whether Mark has a higher BMI than John


TEST DATA 1: Mark's weight = 78kg, height = 1.69m tall
             John's weight = 92kg, height = 1.95m tall
TEST DATA 2: Mark's weight = 95kg, height = 1.88m tall
             John's weight = 85kg, height = 1.76m tall
*/

// SOLUTION
// First Test Data
const massMark = 78;
const heightMark = 1.69;
const heightJohn = 1.95;
const massJohn = 92;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
console.log(markBMI, johnBMI); //Output: 27.309968138370508 24.194608809993426

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); //Output: True

// Second Test Data
const secondMassMark = 95;
const secondHeightMark = 1.88;
const secondMassJohn = 85;
const secondHeightJohn = 1.76;

const secondMarkBMI = secondMassMark / secondHeightMark ** 2;
const secondJohnBMI = secondMassJohn / secondHeightJohn ** 2;
console.log(secondMarkBMI, secondJohnBMI); //Output: 26.87867813490267 27.44059917355372

const johnHigherBMI = secondMarkBMI > secondJohnBMI;
console.log(johnHigherBMI); //Output: false

// STRINGS AND TEMPLATE LITERALS (ES5)

const firstName = "Makis";
const job = "Student";
const birthYear = 2001;
const year = 2023;

// BEFORE ES6
const makis =
  "I'm  " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(makis);

console.log("Just \n a multiple \n line"); //creating a multi-line

// AFTER ES6
const newMakis = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(newMakis);

console.log(`Just a
 regular 
 string`); //still creates a multi-line, but simpler

//  ASSIGNMENT ON STRINGS AND TEMPLATE LITERALS (ES5)
// PROBLEM: Recreate the "description" variable from the last assignment, this time using the template literal syntax

let newDescription = `${myCountry} is in ${continent}, and it's ${halfPopulation} people speaks ${language}`;
console.log(newDescription);

// THE IF/ELSE STATEMENT
// Asignment
/* Problem: 
1. If your country's population is greater than 33 milliom, log a string like this to the console: "Portugal's population is above average". Otherwise, log a string like "Portugual's population is 22 million below average" (the 22 is the average of 33 minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

// Solution:
if (ourPopulation > 33) {
  console.log(`${myCountry}'s population is above average`);
} else {
  console.log(
    `${myCountry}'s population is ${
      ourPopulation - averagePopulation
    } million below average`
  );
} //Output: Nigeria's population is above average. If it was 14.4 million, output = Nigeria's population is 17.6 million below average

// CHALLENGE #2- IF/ELSE STATEMENT
// Problem:
/* Use the BMI example from Challenge #1 and the code you wrote to improve it
1. Print a nice output to the console, saying who has the higher BMI. The message can either be "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2.Use a template string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)"

HINT: Use and if/else statement
*/

// Solution
// 1.
if (markBMI > johnBMI) {
  //true
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
} //  Output: Mark's BMI is higher than John's!

// Second test data
if (secondMarkBMI > secondJohnBMI) {
  //false
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
} // Output: John's BMI is higher than Mark's!

// 2.
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} // Output: Mark's BMI (27.309968138370508) is higher than John's (24.194608809993426)!

// Second test data
if (secondMarkBMI > secondJohnBMI) {
  console.log(
    `Mark's BMI (${secondMarkBMI}) is higher than John's (${secondJohnBMI})!`
  );
} else {
  console.log(
    `John's BMI (${secondJohnBMI}) is higher than Mark's (${secondMarkBMI})!`
  );
} // Output: John's BMI (27.44059917355372) is higher than Mark's (26.87867813490267)!
