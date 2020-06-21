//Class
class Car {
  drive() {
    console.log('Vroom!');
  }
}

const truck = new Car();

truck.drive();

//Constructor f()

function ConstructorCar() {
  ConstructorCar.prototype.drive = function () {
    console.log('Vrumm!');
  };
}

const car2 = new ConstructorCar();
car2.drive();

//Factory

const proto = {
  drive() {
    console.log('VVRRUNNN!');
  },
};

const factoryCar = () => Object.create(proto);
const car3 = factoryCar();
car3.drive();

// Obj.assing

let a = {
  prop1: 1,
  prop2: 2,
};

let b = {
  prop1: 4,
  prop2: 5,
};

let d = [a.prop1,b.prop2];

let c = Object.assign({}, a);
console.log(c);
console.log(d);

//Curring

let curr = (name) => (age) => (tall) => {
  console.log(name + age, age + tall, tall + 1);
};

curr(1)(2)(3);

//Recursion

let coutnDown = (num) => {
  if (num === 0) return;
  console.log(num);
  coutnDown(num - 1);
};

coutnDown(10);

let animals = [{ species: 'dog' }, { species: 'cat' }];

let fil = (element) => {
  return element === dog; 
};
