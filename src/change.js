const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid")
} else {
    const Q = .25
    const D = .10
    const N = .5
    const P = .1
    const divq = 0.99 / Q
    const divd = 0.99 / D
    const divn = 0.99 / N
    const divp = 0.99 / P
}
console.log("\n" + divq + "quarters, " + divd + "dimes, " + divn + "nickels, " + divp + "pennies.")
