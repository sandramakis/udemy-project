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
// Question: If the ourPopulation of my country was split into two, what would be the ourPopulation on one side?

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

// PROBLEM: Based on thye variables I created, create a new variable "description" which containsa string in this format "Portugal is in Europe, and its 11 million people speak Portguese"

let description = "Nigeria is in Africa, and its 50 million people speak Igbo ";
