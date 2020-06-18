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
