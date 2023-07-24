"use strict";

// *** Destructuring array
const arr = [1, 2, 6];

// Old method
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// New Method
const [x, y, z] = arr;
console.log(x, y, z);

const [, q, t] = arr;
console.log(q, t);

// ES6 Object Literals
const weekDays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const hoursOpen = {
  [weekDays[4]]: {
    open: 0,
    close: 23,
  },

  [weekDays[5]]: {
    open: 12,
    close: 24,
  },

  [weekDays[6]]: {
    open: 10,
    close: 22,
  },
};

const restaurant = {
  name: "Chitis",
  location: "Inside school, UNN",
  categories: ["Italian", "Nigerian", "Ghanaian"],
  starterMenu: ["egg", "bread", "milkshake", "icecream", "smoothie"],
  mainMenu: ["rice", "spag", "egusi", "indomie"],
  hoursOpen, //allows for an object to be called from outside a function

  // ES6 Object-function literal allows for us to use function expression without using the "function" keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, address, time }) {
    console.log(this.starterMenu[starterIndex]);
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered at ${address} by ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here's your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
    console.log(
      `Got it! Main ingredient for your pizza is ${mainIngredient} but ${otherIngredients} can be included. `
    );
  },
};

restaurant.orderDelivery({
  time: "22.30",
  address: "Jonathan Street, 23",
  starterIndex: 2,
  mainIndex: 1,
});

// *** Destructuring Objects
// const { name, hoursOpen, categories } = restaurant;

// changing to a default variable
const {
  name: restaurantName,
  hoursOpen: hoursAvailable,
  categories: foodTags,
} = restaurant;
console.log(restaurantName, hoursAvailable, foodTags);

const {
  [weekDays[4]]: { open: friOpen, close: friClose },
} = hoursAvailable;
console.log(friOpen, friClose);

// mutating variables

// old method
let aa = 222;
let bb = 419;
let obj = { aa: 13, bb: 9, cc: 28 };

// new method
({ aa, bb } = obj);
console.log(aa, bb);

// destructuring arrays
let [firstMenu, , secondMenu] = restaurant.starterMenu;
console.log(restaurant.starterMenu);

console.log(firstMenu, secondMenu);

// Changing the valueName of two different values

// Old method
// const changedMenu = restaurant.menu;
// firstMenu = secondMenu;
// secondMenu = changedMenu[0];

// New method
[firstMenu, secondMenu] = [secondMenu, firstMenu];
console.log(firstMenu, secondMenu);

// Using destructuring in a function
const [starter, main] = restaurant.order(3, 2);
console.log(`The starter order is ${starter}.`, `The main order is ${main}`);

// Destructuring a Nested Array
const nested = [2, 4, [5, 6]];
let [d, , [f, g]] = nested;
[d, , f] = [d, , [f, g]];
console.log(d, f, g);

/** THE SPREAD AND REST OPERATORS */
//  Spread operator =>> VALUES (By the RIGHT side of the =)

// Old method
const arrr = [5, 6, 8, 9, 11];
const baadddd = [1, 2, arrr[0], arrr[1], arrr[2]];

// new method
const good = [1, 2, ...arrr]; //rest (spread)
console.log(good);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu]; //Combining the two arrays to make one
console.log(menu2);

const makis = "Makis";
const strr = ["Sandra", " ", ...makis];
console.log(strr); // "Sandra " " 'M' 'a' 'k' 'i' 's' "
console.log(...makis); //'"M' 'a' 'k' 'i' 's'"

// Using the spread method in a function
const ingredients = [
  // prompt("Let's take your order! \n Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

// old method
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// new method
restaurant.orderPasta(...ingredients); //passing the ingredients array as arguments in the function

// REST Operator =.. VARIABLES (by the LEFT side of the =)
const [l, m, n, ...others] = arrr;
console.log(l, m, n, others);

// rest operators in Object
const { fri, ...weekends } = restaurant.hoursOpen;
console.log(weekends);
console.log(fri);

// Using the rest operators in a function
const addFctn = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

// The rest operator passed in a function accomodates any length of value and still runs the function
addFctn(1, 7, 4);
addFctn(4.7, 20, 2, 7, 9, 1);
addFctn(8, 34, 6, 9, 3, 5);

const p = [13, 4, 9];
addFctn(...p);

restaurant.orderPizza("beef", " sausage", " macaroni", " olive");

// SHORT CIRCUTING
// OR (||) short circuiting (|| picks the TRUTHY value first)
console.log(0 || "Makis"); // output- Makis
console.log("Makis" || ""); //output- Makis
console.log(undefined || null); //output- null
console.log(null || 3 || "Makis" || undefined); //output- 3

restaurant.guest = 23;
const guests2 = restaurant.guest || 10;
console.log(guests2);

// AND (&&) short circuiting (&& picks the first FALSY value )
console.log(0 && "Makis"); // output- 0
console.log("Makis" && ""); //output- ""
console.log(undefined && null); //output- undefined
console.log(3 && "Makis" && null && undefined); //output- null

// LOGICAL OPERATORS
const rest1 = {
  name: "Sogo Emperioum",
  numGuests: 18,
};

const rest2 = {
  name: "Chitis",
  owner: "UNN",
};

// Old method
rest1.numGuests = rest1.numGuests || 5;
rest2.numGuests = rest2.numGuests || 5;

// new method
rest1.numGuests ||= 5; ///18
rest2.numGuests ||= 5; //5
console.log(rest1, rest2);

// NULLISH assignment operator (??) =>> null and undefined, NOT 0 and ""
const rest3 = {
  name: "Chitis",
  numGuests: 0,
};

const rest4 = {
  name: "Chitis",
  owner: "Emeka Peters",
};

rest3.numGuests ??= 15;
rest4.numGuests ??= 15;
console.log(rest3, rest4);

// rest4.owner = rest4.owner && "Anonymous";
// rest3.owner = "Anonymous" || rest3.owner;

rest4.owner &&= "Anonymous";
rest3.owner ||= "Unknown";
console.log(rest3, rest4);

// CODE CHALLENGE #1
// A football betting game

const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortmond",
  players: [
    [
      "Neuer",
      "Ligt",
      "Pavard",
      "Davies",
      "Kimmich",
      "Wanner",
      "Laimer",
      "Ibrahimovic",
      "Muller",
      "Hummels",
      "Lewandoski",
    ],
    [
      "Kobel",
      "Sule",
      "Hummels",
      "Schulz",
      "Reus",
      "Ryerson",
      "Wolf",
      "Adeyemi",
      "Gittens",
      "Hazard",
      "Moukoko",
    ],
  ],
  score: "4:0",
  scored: ["Lewandoski", "Kimmich", "Lewandoski", "Hummels"],
  date: "June 10th, 2023",
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each teams
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. Create one variable with the goalkeeper's name and another containing all the other field players
const [players1Gk, ...fieldPlayers1] = players1;
const [players2Gk, ...fieldPlayers2] = players2;
// console.log(players1Gk, fieldPlayers, players2Gk, fieldPlayers2);

// 3.  Create an array containing all players of both teams
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, team 1used 3 players. Create an array containing all the original teams plus Thiago, Coutinho and Perisic
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Based on the odd Object, create one variable for each odd (called team1, draw and team2)S
const {
  odd: { team1: team1Odd, x: draw, team2: team2Odd },
} = game;
console.log(team1Odd, draw, team2Odd); // 1.33 3.25 6.5

// 6. Write a function (printGoals) that receives an arbitrary number of goals depending on the players that scored
const printGoals = function (...scorers) {
  console.log(`${scorers.length} goals were scored`);
  console.log(...scorers);
};

// Calling the function
printGoals("Ligt", "Pavard");
printGoals("Davies", "Muller", "Lewandoski", "Kimmich");
printGoals(...game.scored);

// 7. The team with a lower odd is more likely to win. Without using the if/else statement or the ternary operator, log to the console the team most likely to win
/** SOLUTION
 * We used the && operator since it returns the last evaluation when no false has been found
 */
team1Odd < team2Odd && console.log("Team 1 is more likely to win"); //
team2Odd < team1Odd && console.log("Team 2  is more likely to win");

// THE FOR OF LOOP

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const [i, el] of menu.entries()) {
  console.log(`Item ${i + 1} on the Menu is ${el}`);
}

// OPTIONAL CHAINING (?.)
console.log(
  restaurant.order(3, 2)?.delivery?.open ||
    "There's no order like that in the menu"
);

console.log(restaurant.hoursOpen?.thur?.open);

// on Arrays
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

for (const day of days) {
  const closedMessage = `We are closed on ${day}`;
  // const openMessage = `We are open on ${day} at ${restaurant.hoursOpen[day]?.open}`;
  const open = restaurant.hoursOpen[day]?.open ?? closedMessage;
  console.log(open);
}

// on methods
console.log(restaurant?.order(2, 1) ?? "This food isn't on our menu");

// ITERATING THROUGH OBJECT (key and value)
// On keys ==>> This returns the property names of the object in an array
console.log(Object.keys(restaurant.hoursOpen));

const properties = Object.keys(restaurant.hoursOpen);

for (const day of properties) {
  console.log(`The restaurant is open on ${day}`);
}

// On VALUES ==>> Returns the values of the key
console.log(Object.values(restaurant.hoursOpen));
const value = Object.values(restaurant.hoursOpen);
for (const key of value) {
  console.log(key);
}

// On both keys and values ==>> the entries() returns the both in an array
const store = Object.entries(restaurant.hoursOpen);
for (const [key, { open, close }] of store) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

// CODE CHALLENGE #2
// Continuing the football betting app
// 1. Loop over the game.scored arr and print each player's name to the console along with the goal number. (Eg: 'Goal 1: Lewandoski)

// Since game.scored is an array, we use the entries()
for (const [key, scorer] of game.scored.entries()) {
  console.log(`Goal ${Number(key) + 1}: ${scorer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odd);

let sum = 0;
let average = 0;
for (let i = 0; i < odds.length; i++) {
  sum += odds[i];
  average = sum / odds.length;
}
console.log(average.toFixed(2));

// OORRR
// for (const odd of Object.values(game.odd)) {
//   //since odds is an object, we use the Object.entries()
//   console.log(odd.length);
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// 3.
/**
 * Print the 3 odds to the console but in a nice formatted way like this * 'Odd of victory Bayern Munich: 1.33'
 * 'Odd of draw: 3.25'
 * 'Odd of victory Borrusia Dortmond: 6.5'
 */

for (const [team, odd] of Object.entries(game.odd)) {
  const teamStr = team === "x" ? "draw" : `victory of ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// SETS ==> Unique sets of data

const orderSets = new Set([
  "Bread",
  "Pizza",
  "Bread",
  "Icecream",
  "Pizza",
  "Icecream",
]);

console.log(orderSets); //Output:-'Bread', 'Pizza', 'Icecream
console.log(orderSets.add("Sharwarma"));
console.log(orderSets.size);
console.log(orderSets.delete("Bread"));
// console.log(orderSets.size("Sharwarma"));

// Using sets to loop through an array
const staff = ["Chef", "Manager", "Waiter", "Manager", "Waiter", "Chef"];
console.log(new Set(staff)); //'Chef', 'Manager', 'Waiter'

// Using sets to loop though arrays
console.log(new Set("sandranwakeze"));

// MAPS ==>> A data structure to map values to keys (It takes value types including numbers and booleans)
// NOTE: the set() can also be used to add new key and value

// Quiz App
const question = new Map([
  ["question", " What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again 🔁"],
]);
console.log(question);

// Return the options in a nicely formatted way
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// Prompt to get the answer from user
// const answer = Number(prompt("Your answer?"));
const answer = 3;
if (typeof answer === "number") {
  console.log(answer);
} else console.log("Please input a number!");

// Return the answer if right or wrong
if (answer === question.get("correct")) {
  console.log(question.get(true));
} else console.log(question.get(false));

// ORRR IN A NEATER WAY
console.log(question.get(answer === question.get("correct"))); //returns the property of true based on wether the condition

// CODE CHALLENGE #3
// We're continuing with our football game

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow Card"],
  [69, "🟥 Red Card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow Card"],
]);

// 1. Create an array 'events' of the different games that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. At the end of the game, VAR discovered the Yellow Card from minute 64 was unfair. Remove this event from the event log
gameEvents.delete(64);

// 3. Print this string to the console "An event happened, on average, every 9 minutes (calculating the average) from hpw long the game lasted

const footballFullTime = [...gameEvents.keys()].pop();
const averageEvent = () => {
  console.log(
    `An event happened, on average, every ${
      footballFullTime / gameEvents.size
    } minutes `
  );
};
averageEvent();

// 4. Loop over the events and log them to the console marking whether it's in the first half or second
for (const [min, event] of gameEvents) {
  console.log(`[${min <= 45 ? "FIRST" : "SECOND"} HALF] ${min}: ${event}`);
}

// WORKING WITH STRINGS

const airline = "Ethiopian Airline, Niger";

console.log(airline[4]); // ==> o
console.log(airline.indexOf("a")); //Returns the first index of a. ==> - 7
console.log(airline.indexOf(" ")); // ==> - 9
console.log(airline.lastIndexOf("e")); //output- 22
console.log(airline.slice(3)); // ==> iopian Airline, Niger
console.log(airline.slice(10, 17)); // ==> - Airline
console.log(airline.slice(-2)); // ==> - ia
console.log(airline.slice(10, -5)); // ==> Airline,

// Fetching strings when unknown. Eg: the first and last words of a given sentence
console.log(airline.slice(0, airline.indexOf(" "))); // ==> First word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // ==>Last word

// Task: Log to the console wether a passenger got a middle seat or not
const checkMiddleSeat = (seat) => {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got a middle seat 😑");
  else console.log("You got lucky! 😎");
};

checkMiddleSeat("13B");
checkMiddleSeat("27C");
checkMiddleSeat("14E");

//Working with Strings
const airPlane = "Ibom Airneo";
console.log(airPlane.includes("bom")); //true
console.log(airPlane.startsWith("air")); //false
console.log(airPlane.endsWith("neo")); //true
console.log(airPlane.toLowerCase()); //ibom airneo
console.log(airPlane.toUpperCase()); // IBOM AIRNEO
console.log(airPlane.replace("Ib", "Ak")); //Abom Airneo
console.log(airPlane.replace("Ibom Airneo", "Air Peace")); //Air Peace
console.log();
console.log(airPlane.trim()); //Abom Airneo

// checking a passenger's baggage
const checkInPassenger = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You're not allowed to board");
  } else console.log("Welcome aboard");
};

checkInPassenger("I have a socks, clothes and Gun for protection");
checkInPassenger("Tissues and food");
checkInPassenger("Just a pen Knife and laptop");

// split and join ()
console.log("a+very+nice+string".split(" "));
console.log("makis amaka".split(" "));
// console.log("makis chiamaka nwakezee".split(" "));

const [firstName, middleName] = "Chiamaka Sandra".split(" ");
const nameStr = ["Miss.", firstName, middleName.toUpperCase()].join(" ");
console.log(nameStr);

// Captialize the first letters of given input names
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (let n of names) {
    n = n.toLowerCase(); //change all words to lower case
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("joAna adaM smIth cHriS");
capitalizeName("jAden brown");
capitalizeName("ChiNeCherem mEeknEsS");

// Padding a string
const message = "Go to gate 23";
console.log(message.padStart(20, "> ").padEnd(30, " >"));
console.log(message.padEnd(29, "< "));

// Mask the last 4 numbers of an ATM
const maskATM = function (digits) {
  const str = digits + ""; //converts to string
  const lastNumber = str.slice(-4);
  console.log(lastNumber.padStart(str.length, "*"));
};

maskATM(12789046);
maskATM(1234567892549);
maskATM(7751848962898802);

// Repeat ()

const badWeatherMessage = "Bad weather, all depature delayed... ";
console.log(badWeatherMessage.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInLine(7);
planesInLine(8);
planesInLine(12);
