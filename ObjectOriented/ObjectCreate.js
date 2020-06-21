let cat1 = {
  name: 'CATY',
  sonund: function (name) {
    console.log(name);
  },
};

cat1.sonund();

let cat2 = Object.create(cat1);

console.log(cat2);

cat2.sonund('Meauwww');
console.log(cat2.name);

cat2.name = 'Oriol';
console.log(cat2.name);
cat2.sonund('mmmm');

Class

class Dog {
  constructor(name, age) {
    name = this.name;
    age = this.age;
    let sayName = function () {
      console.log(`My name is ${this.name}`);
    };
  }
}

let dogito = new Dog('asd', 'asss');

console.log(dogito.name);

class Animal {
  constructor(sound) {
    this.sound = sound;
  }
}

let dog = new Animal('Ladra');
console.log(dog);

class Person extends Animal {
  constructor(idiom) {
    super('Talk');
    this.idiom = idiom;
  }
}

let Armando = new Person('Spanish');

console.log(Armando);

function a() {
  let y = 'Y';
  function b() {
    console.log(y);
  }
  b();
}

a();

const dog = () => {
  const sound = 'Woof';
  return {
    talk: () => console.log(sound),
  };
};

const doggie = dog();
doggie.talk();

// Factory Function  : function that return an object

const person = (name) => {
  return { name: name };
};
console.log(person('Armando'));

const me = person('Gabriel');

console.log(me);

const noop = () => ({ name: 'Noop!' });

console.log(noop());

console.log(typeof noop);
const log = console.log;
const createUsser = ({ userName, avatar }) => ({ userName, avatar });
let obj = { userName: 'Armando', avatar: 'Feo' };
log(createUsser(obj));
let arr = [2, 3, 4];

const destr = () => arr;

log(destr(...arr));


