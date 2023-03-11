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

// CODING CHALLENGE ON OPERATORS
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
const BMIJohn = massJohn / heightJohn ** 2;
console.log(markBMI, BMIJohn); //Output: 27.309968138370508 24.194608809993426

const markHigherBMI = markBMI > BMIJohn;
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
