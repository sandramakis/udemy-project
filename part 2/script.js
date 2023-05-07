"use strict";

function siblingsCount(male, female) {
  const mySiblings = `We are ${
    male + female
  } children of my parents; ${male} males, ${female} females`;
  return mySiblings;
}

console.log(siblingsCount(2, 4));

// ASSIGNMENT
/* PROBLEM: Create a functon which takes the value if three parameters: country, population and capitalCity. Based in this input, teh function returns a string in this format "Finland has 6 million people and its capital city is Helsinki"
 * Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables and log them to the console
 */

function describeCountry(country, population, capitalCity) {
  const descCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return descCountry;
}

const descNigeria = describeCountry("Nigeria", 200, "Abuja");
console.log(descNigeria);

const descLebanon = describeCountry("Lebanon", 18, "Beirut");
console.log(descLebanon);

const descAccra = describeCountry("Ghana", 70, "Accra");
console.log(descAccra);

// FUNCTION DECLARATION AND EXPRESSION
// Return the percentage of the world's population that the given population represents. Eg, China has 1441 million people, so is about 18.2% of the world's population

// FUNCTION DECLARATION
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percPortugual = percentageOfWorld1(200);
const percNigeria = percentageOfWorld1(344);
const percKenya = percentageOfWorld1(190);
console.log(percPortugual, percNigeria, percKenya);

// FUNCTION EXPRESSION
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(
  percentageOfWorld2(200), // 2.5316455696202533
  percentageOfWorld2(530), // 6.70886075949367
  percentageOfWorld2(910) // 11.518987341772153
);

// FUNCTION IN ANOTHER FUNCTION

const describePopulation = (country, population) => {
  const percCountry = percentageOfWorld2(population); //The population parameter here takes the argument passed in the calling of the function describePopulation. percentageOfWorld(population) == describePopulation(population)
  return `${country} has ${population} million people which is about ${percCountry} of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Dahomey", 240));
console.log(describePopulation("Finland", 40));

// ARROW FUNCTION
// Rewrite the previous code with an arrow function

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percGhana = percentageOfWorld3(238);
const percSweden = percentageOfWorld3(38);
const percFinland = percentageOfWorld3(190);

console.log(percGhana, percSweden, percFinland);

// Calculate the remaining years of retirement for John
const calcAge = (birthYear) => 2023 - birthYear;

console.log(calcAge(1997));

const remainingYearsOfRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will be retiring in ${retirement} years`;
};

console.log(remainingYearsOfRetirement(1997, "Jonas"));
console.log(remainingYearsOfRetirement(2001, "Makis"));

// MANUAL WAY OF WRITING CODE
const birthYear = 2001;
const firstName = "Makis";
const age = 2023 - birthYear;
const retirement = 65 - age;
console.log(
  `${firstName} is currently ${age}, so will be retiring in the next ${retirement} years`
);

// ADVANCED WAY OF WRITING (DRY- Don't Repeat Yourself)

const yearsOfRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} is currently ${age}, so will be retiring in the next ${retirement} years`;
};

console.log(yearsOfRetirement(2001, "Makis"));

// CODE CHALLENGE #1
/* PROBLEM: The Dolphins and the Koalas are in a competition. One team only wins if their average score is at least double the average score of the other,
* Use a functon calcAverage to take inputs on the average of each teams 
Use the checkWinner function with the parenthesis (avgDolphins and avgKoalas) to check for this condition. L
* Log to the console, the winner in with the score in this way: Koala's win 30 vs 13
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas); // No team wins

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas); // Dolphins win (60 vs 28)

// INTRODUCTION TO ARRAY
/* Create an array containi8ng 4 population values of 4 different ciuntries.
 * Store this array in a variable "populations"
 * Log to the console whether the array has 4 elements or not (true or false)
 * Use the function "percentageOfWorld1" to compute the percentage values stored in an array called "percentages".
 */
const population2 = [140, 90, 52, 38];
console.log(Boolean(population2));

const percentages = [
  percentageOfWorld1(population2[0]),
  percentageOfWorld1(population2[1]),
  percentageOfWorld1(population2[2]),
  percentageOfWorld1(population2[3]),
];
console.log(percentages);

// ARRAY METHODS
const neighbouringCountries = ["Ghana", "Cameroon", "Togo"];
neighbouringCountries.push("Utopia");
neighbouringCountries.pop();

neighbouringCountries.includes("Germany")
  ? console.log("Probably not a central Europena Country :D")
  : console.log("Region still cool tho");

neighbouringCountries[neighbouringCountries.indexOf("Cameroon")] =
  "Republic of Cameroon";
console.log(neighbouringCountries);
