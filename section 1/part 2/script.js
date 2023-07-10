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
function calcPerc(population) {
  return (population / 7900) * 100;
}

const percPortugual = calcPerc(200);
const percNigeria = calcPerc(344);
const percKenya = calcPerc(190);
console.log(percPortugual, percNigeria, percKenya);

// FUNCTION EXPRESSION
const calcPerc2 = function (population) {
  return (population / 7900) * 100;
};

console.log(
  calcPerc2(200), // 2.5316455696202533
  calcPerc2(530), // 6.70886075949367
  calcPerc2(910) // 11.518987341772153
);

// FUNCTION IN ANOTHER FUNCTION

const describePopulation = (country, population) => {
  const percCountry = calcPerc2(population); //The population parameter here takes the argument passed in the calling of the function describePopulation. percentageOfWorld(population) == describePopulation(population)
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
Use the checkWinner function with the parenthesis (scoreDolphins and scoreKoalas) to check for this condition. 
* Log to the console, the winner in with the score in this way: Koala's win 30 vs 13
*/

const calcAverage = function (arr) {
  // I changed the pre-existing function to this universal one from the "Challenge #4" so that'll run regardless of the value(number or array) and be called anywhere in the code
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// Test Data 1 ** ScoreDolphins: 44, 23, 71 and ScoreKoalas: 65, 54, 49;
let scoreDolphins = calcAverage([44, 23, 71]); // 46
let scoreKoalas = calcAverage([65, 54, 49]); // 56

console.log(scoreDolphins, scoreKoalas);

// One team only wins if their average score is at least double the average score of the other
if (scoreDolphins > scoreKoalas * 2) {
  console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);
} else if (scoreKoalas > scoreDolphins * 2) {
  console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
} else {
  console.log(`No team wins`);
} //Output: No team wins

// ** Test Data 2
scoreDolphins = calcAverage([85, 54, 41]); // 60
scoreKoalas = calcAverage([23, 34, 27]); // 28

console.log(scoreDolphins, scoreKoalas); // Dolphins win (60 vs 28)

// INTRODUCTION TO ARRAY
/* Create an array containi8ng 4 population values of 4 different ciuntries.
 * Store this array in a variable "populations"
 * Log to the console whether the array has 4 elements or not (true or false)
 * Use the function "calcPerc" to compute the percentage values stored in an array called "percentages".
 */
const population2 = [140, 90, 52, 38];
console.log(Boolean(population2));

const percentages = [
  calcPerc(population2[0]),
  calcPerc(population2[1]),
  calcPerc(population2[2]),
  calcPerc(population2[3]),
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

// CODE CHALLENGE #2
/* PROBLEM: Calculate the total bill of customers which includes the tip amount for each bill. For bills greater than or equals 50 but less than or equals to 300, the tip should be 15% of the bill, for others, 20%.

*/

// Create a function that calculates the bill and checks for the condition
const calcTip = (bill) => {
  const tipPercentage = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tipPercentage;
};

const bills = [125, 555, 44]; //initial bill test data

// to calculate the tip amount depending on the bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Calculate the total
const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totalBill);

// INTRODUCTION TO OBJECTS
const myCountry = {
  country: "South Africa",
  capital: "Johannesbourg",
  language: "Xhosa",
  population: 250,
  neighbours: ["Zambia", "Gambia", "Mali", "D. R. C"],

  // Use the object to log a string like this to the console "Finland has 6 million finnish- speaking people, 3 neighoouring countries and a capital called Helsiniki". This time, using the this method
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    this.isIsland = !Boolean(this.neighbours);
    return this.isIsland;
  },
};

console.log(myCountry["describe"]());
console.log(myCountry.checkIsIsland()); // false

// Dot and Bracket Notation

// Increase the country's population by 2 million using dot notation
myCountry.population += 2;
console.log(myCountry.population);

// Decrease the country's population by 2 million using bracket notation
myCountry["population"] -= 2;
console.log(myCountry.population);

// OBJECT METHOD
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Stephen", "John"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2029 - this.birthYear; //to store the value of this as a new jonas property
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license. He also has ${this["friends"].length} friends and ${
      jonas.friends[0]
    } is his best friend.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary()); //Calling the getSummary function and logging it to the console. Output: Jonas is a 38-year old teacher and he has a driver's license

// Code Challenge #3
// PROBLEM: Calculate John Smith and Mark Miller's BMI and retun who's BMI is higher

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// THE FOR LOOP
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

function calcPerc(population) {
  return (population / 7900) * 100;
}

/* Use the previous percentage population to create a new array containing the percentage of the country's population in the world
 ** Use the calcPerc function created earlier
 ** Confirm that the percentages2 contains exactly the same values as the percventages array created manually*/

const percentages2 = [];

for (let i = 0; i < population2.length; i++) {
  percentages2[i] = calcPerc2(population2[i]);

  // OR
  const perc = calcPerc2(population2[i]);
  percentages2.push(perc);
}

console.log(percentages2, population2);

// Looping backwards and Loops in Loops
/** Create an Array of Array conyaining countries.
 * Log only the countries to the console, one by one
 * Log a string like "Neighbour: Canada"
 */
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    // console.log(listOfNeighbours[i][y]);
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

// WHILE LOOP
/*
 *Recreate the challenge from the lecture:Looping thriugh arrays, but this time using a while loop (call the array "percentages3 ")
 * Reflect on what solution you like better for the task ()
 */

const percentages3 = [];
const population3 = [100, 910, 502, 178];
let i = 0;
while (i < population3.length) {
  let perc = calcPerc2(population3[i]);
  percentages3.push(perc);
  i++;
}
console.log(population3, percentages3);

// CODING CHALLENGE #4
/*  *Let's improve Steve's calculator even more, this time using loops
 */

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const newTips = [];
const total = [];

for (let i = 0; i < newBills.length; i++) {
  let tip = calcTip(newBills[i]); // Calculate the tip value of each bill
  newTips.push(tip); //  Add the value to the empty 'newTips' array
  total.push(tip + newBills[i]); // to get the total score, add the current tip value with the current bill value
}
console.log(newTips, total);

/* BONUS: Calculate the average of the total money array
 * To do this, use a calcAverage function that'll take inputs and divide by the length of the input */

// The calcAverage() will be used from the already declared function on LINE 116
console.log(calcAverage(total));

// PROBLEM SOLVING in JS
/*PROBLEM: We work for a company building a smart home termometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there may be a censor error

*NOTE: Major problem solving steps
 * 1. Understanding the problem
 ** First understand that amplitude is the result of max - min

 
 * 2. Dividing the problem into sub-problems
 ** Find the max
 ** Find the min
 ** Calculate the amplitude
 */
/** A client tells you to calculate get the result of the value of the minimum number in an array from the max value having in mind to check for errors */

let temperatures = [-3, -6, -1, "error", 10, 1, 17, 5];

const calcTempAltitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== "number") continue;

    if (currTemp < min) min = currTemp;
    if (currTemp > max) max = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAltitude(temperatures);
console.log(amplitude);

// * Problem: The Project Manager now tells us the function should receive two arrays and not just one. The rest of the functions should work the same
/**Note: We don't need to write the function again, we just need to passin a new parameter and concatenate 
 * 1. Understanding the problem: 
 ** Write the same function, but with two parameters

 2. Dividing the problem into sub-problems
 ** Concatenate the two parameters 
 ** Loop through the result of the concatenation
*/

const calcTempAltitudeNew = function (t1, t2) {
  const temp = t1.concat(t2); //since we're using a new set of variable, we now concatenate the two parameters and loop through them, just like we did previously
  console.log(temp);

  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== "number") continue; // If the current temperature is an error, the loop should end here, and move to the next temperature

    if (currTemp < min) min = currTemp;
    if (currTemp > max) max = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAltitudeNew([3, 9, 2], [6, 2, 7]);
console.log(amplitudeNew);

// PROBLEM SOLVING CHALLENGE
/**Problem: Given an array of maximum temperatures, the termometer displays a string with these temperatures
 * Create a function "printforcast" which takes in an array (arr) and logs a string like "... 17C in 1 days ...21C in 2 days ... 23C in 3 days"
 * Use the problem solving framework
 * Test Data 1:[17, 21, 23]
 * TEST DATA 2: [12, 3, -5, 0, 4]
 */

// 1) Understanding the problem
// "... 17C in 1 days ...21C in 2 days ... 23C in 3 days"
const data1 = [17, 21, 23];
const data2 = [12, 3, -5, 0, 4];

const printforcast = function (arr) {
  let str = ""; //create an empty string to store the new value inside
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`; // For each iteraton, we want to add the value with the index=> i + (i + 1)
  }
  console.log("..." + str);
};
printforcast(data1);
printforcast(data2);
