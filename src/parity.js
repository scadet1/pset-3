const readlineSync = require("readline-sync");

const MIN = (Number.MIN_SAFE_INTEGER)
const MAX = (Number.MAX_SAFE_INTEGER)

const amount = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX){
    console.log("\nInvalid.")
} else if (amount % 2 === 0){
    console.log("\nEven.")
} else if (amount % 2 > 0){
    console.log("\nOdd.")
}
