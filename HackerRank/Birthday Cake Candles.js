const ar = [2, 4, 2, 4];

function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);

  return (ar || []).reduce((target, item) => {
    max == item && target++;

    return target;
  }, 0);
}

console.log(birthdayCakeCandles(ar));
