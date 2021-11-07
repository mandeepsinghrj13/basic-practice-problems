function coinFlip() {
  return Math.random() < 0.3 ? "Heads" : "Tails";
}

var howManyTimes = 500;
var countHeads = 0;
for (var i = 0; i < howManyTimes; i++) {
  if (coinFlip() === "Heads") {
    countHeads++;
  }
}
let head = (countHeads / howManyTimes) * 100;
console.log("Heads appear " + head + "% of the time");
console.log("Tails appear ", 100 - head, "% of the time");
