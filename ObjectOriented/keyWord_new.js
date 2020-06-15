//new keyword bejavior

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car('Eagle', 'Talon TSi', 1993);

Car.prototype.color = 'Original Color';

function instanciateCar(constructor) {
  let obj = {};
  Object.setPrototypeOf(obj, Car.prototype.constructor);
  let argsArray = Array.prototype.slice.apply(arguments);
  return constructor.apply(obj, argsArray.slice(1) || obj);
}

const asd = instanciateCar(Car, 'asd');
console.log(asd);

