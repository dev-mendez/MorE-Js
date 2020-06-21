const s = '07:05:45AM';
function timeConversion(s) {
  return s
    .split(':')
    .reduce((target, item, index) => {
      item = !index
        ? s.includes('PM')
          ? +item < 12
            ? `${+item + 12}`
            : item
          : +item < 12
          ? item
          : '00'
        : item.replace(/PM|AM/gi, '');
      target.push(item);
      return target;
    }, [])
    .join(':');
}
console.log(timeConversion(s));

const arr1 = [2, 3, 4, 3];
const arr2 = [2, 3, 4, 2, 2, 2];
const arr3 = [...arr1, ...arr2];
const arr4 = arr1.concat(arr2);
console.log(arr3);
console.log(arr4, 'Text');
console.log(arr4[6]);

let animals = [
  { Name: 'Rodo', type: 'Dog' },
  { Name: 'Lira', type: 'Cat' },
  { Name: 'Uras', type: 'Dog' },
  { Name: 'Mia', type: 'Cat' },
  { Name: 'Lira', type: 'Cat' },
  { Name: 'Lira', type: 'Cat' },
];

let isDogs = function (animal) {
  return animal.type == 'Dog';
};

let dogs = animals.filter(isDogs);
console.log(dogs);

let dogsName = dogs.map((element) => {
  return element.Name;
});

console.log(dogsName);

let orders = [{ amount: 250 }, { amount: 25 }, { amount: 50 }, { amount: 110 }];
let totalAmount = 0;

for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount);

let totalSum = orders.reduce((acc, amount) => {
  console.log(amount.amount);
  return acc + amount.amount;
}, 0);

console.log(totalSum);

const arr = [2, 3, 4, 5, 6, 7, 8];

let mayor = function (element) {
  return element > 5;
};

console.log(arr.filter(mayor));
console.log(arr.map(mayor));

console.log(arr.forEach((element) => element * 2));

arr.forEach((element, index) => {
  console.log(element * index);
});

let sum = (a) => (b) => a + b;

console.log(sum(2)(28));

const s = '12:15:45PM';

// // It should return a new string representing the input time in 24 hour format.

const timeConversion = function (s) {
  let time = s.split(':');
  let hh = parseInt(time.slice(0, 1));
  let mm = time.slice(1, 2);
  let ss = time.slice(2, 3);
  if (JSON.stringify(ss).includes('AM') & (hh === 12)) {
    hh = '00';
  } else {
    hh =
      JSON.stringify(ss).includes('PM') & (hh != 12)
        ? hh + 12
        : hh < 10
        ? '0' + hh
        : hh;
  }

  ss = JSON.stringify(ss).slice(2, 4);

  return `${hh}:${mm}:${ss}` 
};

console.log(timeConversion(s));
