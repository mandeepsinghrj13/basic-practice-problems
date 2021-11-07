const ps = require("prompt-sync");
const prompt = ps();
const num = prompt("Enter a number: ");

console.log(`The factors of ${num} is:`);
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
