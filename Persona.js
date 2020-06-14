// Staircase

// function staircase(n) {
//   "use strict";

//   for (let i = 0; i <= n; i += 1) {
//     console.log(" ".repeat(n - i) + "#".repeat(i));
//   }
// }
// staircase(4);

// let arr = [1, 3, 5, 7, 9];

// let fun = (arr) => {
//   let total = arr.sort((a, b) => a - b).reduce((item, acc) => item + acc);
//   let min = total - arr[arr.length - 1];
//   let max = total - arr[0];
//   console.log(min, max);
//   return [min, max];
// };

// fun(arr);

// let arr2 = [2, 3, , 5, , 1, 23, 5, 5, , 23, , 1, 2, 3, 5];
// let arr = arr2.sort((a, b) => b - a);
// let arr1;
// let newArr = arr.map((e, i) => {
//   return arr[0] === arr[i] ? arr1.push(this) : "";
// }, (this = arr1));
// console.log(newArr);
