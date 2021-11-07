const ps = require("prompt-sync");
const prompt = ps();
let n = parseInt(prompt("Enter your choice : "));
for (let i = 1; i <= n; i++) {
  let p = Math.pow(2, i);
  console.log(i, "th power of 2 ", p);
}
