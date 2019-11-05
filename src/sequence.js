const readlineSync = require("readline-sync");

const MIN = (Number.MIN_SAFE_INTEGER)
const MAX = (Number.MAX_SAFE_INTEGER)

const amount = Number(readlineSync.question("\nEnter three numbers. \n\n"));
const amount2 = Number(readlineSync.question(""));
const amount3 = Number(readlineSync.question(""));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX){
    console.log("\nInvalid.")
if (Number.isNaN(amount2)) {
    console.log("\nInvalid.")
} else if (amount2 < MIN || amount2 > MAX){
    console.log("\nInvalid.")
if (Number.isNaN(amount3)) {
    console.log("\nInvalid.")
} else if (amount3 < MIN || amount3 > MAX){
    console.log("\nInvalid.")
}
