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
  percentageOfWorld2(200),
  percentageOfWorld2(530),
  percentageOfWorld2(910)
);
