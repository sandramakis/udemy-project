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

const restaurant = {
  name: "Chitis",
  location: "Inside school, UNN",
  categories: ["Italian", "Nigerian", "Ghanaian"],
  starterMenu: ["egg", "bread", "milkshake", "icecream"],
  mainMenu: ["rice", "spag", "egusi", "indomie"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    fri: {
      open: 10,
      close: 23,
    },

    sat: {
      open: 12,
      close: 24,
    },

    sun: {
      open: 10,
      close: 22,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(this.starterMenu[starterIndex]);
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered at ${address} by ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
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
const { name, openingHours, categories } = restaurant;

// changing to a default variable
const {
  name: restaurantName,
  openingHours: hoursAvailable,
  categories: foodTags,
} = restaurant;
console.log(restaurantName, hoursAvailable, foodTags);

const {
  fri: { open, close },
} = hoursAvailable;
console.log(open, close);

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
const { fri, ...weekends } = restaurant.openingHours;
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

// AND short circuiting (&& picks the FALSY value first)
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

// NULLISH assignment operator (null and undefined, NOT 0 and "")
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

// CODE CHALLENGE
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
