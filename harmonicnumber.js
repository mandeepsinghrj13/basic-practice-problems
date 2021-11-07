function nthHarmonic(N) {
  let harmonic = 1.0;

  for (let i = 2; i <= N; i++) {
    harmonic += parseFloat(1) / i;
  }

  return harmonic;
}
const ps = require("prompt-sync");
const prompt = ps();
let N = parseInt(prompt("Enter your Number : "));

console.log(nthHarmonic(N));

let x = 1 / 1 + 1 / 2 + 1 / 3 + 1 / 4 + 1 / 5;
console.log(x);
