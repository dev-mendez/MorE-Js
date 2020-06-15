let cat = { breed: 'munchkin' };
let myCat = { name: 'Fluffykins' };

console.log(myCat);

Object.setPrototypeOf(myCat, cat);

console.log(myCat.breed);
console.log(myCat.prototype);
console.log(myCat.__proto__);

function asd() {
  console.log('h');
}

let f = function () {
  this.a = 1;
  this.b = 2;
};

let o = new f();
console.log(o);

f.prototype.c = 3;
f.prototype.d = 4;

console.log(o.b);
console.log(o.__proto__);
console.log(typeof o);
console.log(typeof f);

let o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m());

let p = Object.create(o);

p.a = 4;

console.log(p.m());

const cat = {
  makeSound: function () {
    console.log(this.sound);
  },
};

function objectCreate(proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}

const mark = Object.create(cat);

mark.sound = 'meuuuff';
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mroooowwowowow';
waffles.makeSound();

console.log('Is cat  prototype of mark?', cat.isPrototypeOf(mark));
