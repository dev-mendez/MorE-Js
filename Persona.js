Staircase

function staircase(n) {
  "use strict";

  for (let i = 0; i <= n; i += 1) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
staircase(4);

let arr = [1, 3, 5, 7, 9];

let fun = (arr) => {
  let total = arr.sort((a, b) => a - b).reduce((item, acc) => item + acc);
  let min = total - arr[arr.length - 1];
  let max = total - arr[0];
  console.log(min, max);
  return [min, max];
};

fun(arr);

