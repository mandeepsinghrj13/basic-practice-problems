const ps = require("prompt-sync");
const prompt = ps();
const coupon = prompt("Enter a coupon code: ");
function validate(coupon) {
  codes = new Object();
  codes.GOLD20 = 20;
  codes.GOLD = 30;
  codes.GOLD40 = 40;
  codes.GOLD50 = 50;

  if (codes[coupon]) {
    console.log("Coupon Code Accepted!");
  } else {
    console.log("Sorry,Coupon Code is invalid");
  }
}
validate(coupon);
