let gr = [33, 44, 55, 66, 77, 88];

function grade(element) {
  transformFunction = (sample) => {
    return parseInt(sample);
  };
  nextMult = (element) => {
    let a = parseInt(element.split('').slice(1));
    let b = a <= 5 ? 5 : 10;
    let d = b - a;
    let nextMult = parseInt(element) + d;
    return nextMult;
  };
  if (element < 38) return transformFunction(element);
  else if (nextMult(element) - element < 3) return nextMult(element);
  else return transformFunction(element);
}

let f = gr.map((element) => grade(element + ''));
console.log(f);
