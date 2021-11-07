const ps = require("prompt-sync");
const prompt = ps();
const Stake = prompt("Enter a Stake code: ");
const goal = prompt("Enter a goal code: ");
const number = prompt("Enter a number code: ");

let Stake = Stake;

let Goal = goal;

let noOfTimes = number;

let bets = 0; // total number of bets made
let wins = 0; // total number of games won

// repeat number of times
for (let i = 0; i < noOfTimes; i++) {
  let cash = Stake;

  if (cash > 0 && cash < Goal) {
    bets++;

    if (Math.random() < 0.5) cash++;
    // win $1
    else cash--; // lose $1
  }
  if (cash == Goal) wins++; // to find no. of wins
}

// print results
console.log();
console.log(wins + " wins of " + noOfTimes);
console.log("Percent of games won = " + (100.0 * wins) / noOfTimes);
console.log("Avg # bets           = " + (1.0 * bets) / noOfTimes);
