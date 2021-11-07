/*check for a leap year*/

// function checkYear(year) {
//   if (year % 400 == 0) return true;
//   if (year % 100 == 0) return false;
//   if (year % 4 == 0) return true;
//   return false;
// }
// let year = 2000;
// console.log(checkYear(year) ? "Leap Year" : "Not a Leap Year");

// /////////

// /**
//  * random had or tail
//  */
// var head = 0;
// var tail = 0;
// function coinFlip() {
//   x = Math.floor(Math.random() * 2) == 0;
//   console.log("True= head, False= tail =>", x);
//   if (x) {
//     console.log("head");
//   } else {
//     console.log("tail");
//   }
// }
// coinFlip();

// /**
//  *
//  * @param {*} array
//  * @returns
//  */
// function iSort(array) {
//   for (var p = 1; p < array.length; p++) {
//     if (array[p] < array[0]) {
//       array.unshift(array.splice(p, 1)[0]);
//     } else if (array[p] > array[p - 1]) {
//       continue;
//     } else {
//       for (var q = 1; q < p; q++) {
//         if (array[p] > array[q - 1] && array[p] < array[q]) {
//           array.splice(q, 0, array.splice(p, 1)[0]);
//         }
//       }
//     }
//   }
//   return array;
// }
// console.log(iSort([10, 1, 12, 2, 32, 33, 34, 11, 6]));
