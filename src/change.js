const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const Q = 25;
const D = 10;
const N = 5;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid")
} else {
    let pennies = Math.round(amount * 100);

    let quarters = Math.floor(pennies / Q);
    pennies = pennies % Q;
    let dimes = Math.floor(pennies / D);
    pennies = pennies % D;
    let nickels = Math.floor(pennies / N);
    pennies = pennies % N;

    console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies. ")
  }
