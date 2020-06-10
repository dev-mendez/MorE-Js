//Closure
function name(firstName) {
  let Hy = "How are you ?";
  return function (surName) {
    console.log(`Hola ${firstName} ${surName} ${Hy}`);
  };
}
// 
name("Armando")("Mendez");
// 
let surName = name("Jose");
surName("Horse");
// 
function elemento(tipo) {
  let introductorT = "Este es un elemento del tipo";
  let clasificacionT = "De la clasificacion de los ";
  return function (clasificacion) {
    console.log(`${introductorT} ${tipo} ${clasificacionT} ${clasificacion}`);
  };
}
// 
elemento("alkalino")("ferreos");
// 
let clasificacion = elemento("Organico");
clasificacion("Animales");
// 
//My Closure
function hellow(name) {
  let greteens = `Hellow, how are you?`;
  return function (respuesta) {
    console.log(greteens + ` ${name}` + respuesta);
  };
}
// 
hellow("Armando")(" I'm fine");
// 
let exp = hellow("Franisco");
exp(" Que tal");
// 
//Practic Closure
const myApp = (function (window, undefined) {
  let foo = "Module Pattern";
  let bar = "ver 1.0";
// 
  return {
    sum: function (param1, param2) {
      return param1 + param2;
    },
    myMessage: function () {
      return `${foo} ${bar}`;
    },
  };
})(window);
// 
console.log(myApp.myMessage());
console.log(myApp.sum(10, 5));
// 
let myModule = (() => {
  let publicFunction = {};
  let tot = 0; /* variable private */
// 
  _privateFucnntion = () => tot * 500;
// 
  publicFunction.suma = (valor_a, valor_b) => {
    let suma = valor_a + valor_b;
    tot += suma;
    console.log(`Suma result is = ${suma}`);
  };
// 
  publicFunction.getPrivateFucnntion = () =>
    console.log(`Valor de _privateFucnntion es = ${_privateFucnntion()}`);
// 
  return publicFunction;
})();
// 
myModule.suma(10, 3);
myModule.getPrivateFucnntion();
myModule._privateFucnntion();
// 
let myObjectLiteral = {
  suma: (valor_a, valor_b) => {
    return console.log(valor_a + valor_b);
  },
  resta: (valor_a, valor_b) => {
    return console.log(valor_a - valor_b);
  },
};
myObjectLiteral.suma(2, 3);
myObjectLiteral.resta(5, 2);
// 
//Patron Prototype
function Persona(name, surname) {
  this.name = name;
  this.surname = surname;
}
Persona.prototype.getName = function () {
  console.log(`My name is ${this.name}`);
};
Persona.prototype.getSurName = function () {
  console.log(`My surname is ${this.surname}`);
};
// 
function SuperHero(name, surname, power) {
  Persona.call(this, name, surname);
  this.power = power;
}
// Herencia
SuperHero.prototype = Object.create(Persona.prototype);
// 
SuperHero.prototype.getSuperHero = function () {
  this.getName();
  this.getSurName();
// 
  console.log(`Mi super poder es ${this.power}`);
};
// 
//Instanciando Persona
let hero = new SuperHero("Armando", "Mendez", "Programador Full Stack");
let Alguien = new Persona("Jhon", "Doe");
// 
hero.getSuperHero();
Alguien.getName();
Alguien.getSurName();
// 
// class
// 
class Persona_1 {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  getName() {
    console.log(`${this.name}`);
  }
  getSurName() {
    console.log(`${this.surName}`);
  }
}
// Creando SuperHero y aplicando Herencia
class SuperHero_1 extends Persona_1 {
  constructor(name, surName, power) {
    super(name, surName);
    this.power = power;
  }
  getSuperHero() {
    this.getName();
    this.getSurName();
    console.log(`My super poder es ${this.power}`);
  }
}
// 
let somebody = new Persona("Tulio", "Sensei");
// somebody.getName();
// somebody.getSurName();
// 
let superMan = new SuperHero("Armando", "Mendez", "FullStack web dev");
superMan.getSuperHero();
// 
// Adding some new methods to string method
// 
let capitals = [{ country: "Spain", capital: "Madrid" }];
// 
function capital(capitals) {
  return capitals.map((c) => `The capital of ${c.state || c.country} is ${c.capital}`);
}
// 
console.log(capital(capitals));
// 
function anyOdd(x) {
  let binary = x.toString(2).split("");
  let oddIndex = [];
  if (binary.length < 32) {
    for (let i = binary.length; i > 0; i--) {
      if (i % 2 == 1) {
        oddIndex.push(binary[i]);
      }
    }
    let one = (element, index, array) => {
      return element == 1;
    };
    return oddIndex.some(one) ? 1 : 0;
  } else {
    return 1;
  }
}
// 
console.log(anyOdd(128));
// 
let x = 2863311530;
let specialCase = x.toString(2);
console.log(specialCase);
console.log(specialCase.length);
// 
//  // Find arr diagonals.
// 
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
// 
let takeDiagonals = function (arr) {
  let diagonal1 = [];
  let diagonal2 = [];
// 
  const reducer = (v, acc) => v + acc;
// 
  for (let i = 0; i < arr.length; i++) {
    diagonal1.push(arr[i][i]);
    diagonal2.push(arr[i][arr.length - 1 - i]);
  }
// 
  return Math.abs(diagonal2.reduce(reducer) - diagonal1.reduce(reducer));
};
// 
console.log(takeDiagonals(arr));
// 
function Particle(x, y) {
  this.x = x;
  this.y = y;
  //   this.show = function () {
  //     point(this.x, this.y);
  //   };
}
// 
Particle.prototype.show = function () {
  console.log(this.x, this.y);
};
// 
let dot = new Particle(10, 30);
console.log(dot);
// 
// Object Oriented Programin
// Encapsulation  Hingeritance Polimorfism
// 
class Atomo {
  constructor(protones, neutrones, electrones) {
    this.protones = protones;
    this.neutrones = neutrones;
    this.electrones = electrones;
  }
}
// 
class Cosas extends Atomo {
  constructor(cantidadDeAtomos) {
    super();
    this.cantidadDeAtomos = cantidadDeAtomos;
  }
}
// 
class CosasVivas extends Cosas {
  constructor(nombre, clasificacion, TipoDeRespiracion, edad, locomocion) {
    super();
    this.TipoDeRespiracion = TipoDeRespiracion;
    this.edad = edad;
    this.locomocion = Boolean;
    this.nombre = nombre;
    this.clasificacion = clasificacion;
  }
}
// 
class Animales extends CosasVivas {
  constructor(numeroDePatas, areaDondeViven) {
    super();
    this.numeroDePatas = numeroDePatas;
    this.areaDondeViven = areaDondeViven;
  }
}
// 
class Planta extends CosasVivas {
  constructor(tipoPlanta) {
    super();
    this.tipoPlanta = tipoPlanta;
  }
}

// let arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = function (arr) {
  let cont1 = 0;
  let cont2 = 0;
  let cont3 = 0;

  arr.forEach((e) => {
    e > 0 ? cont2++ : "";
    e < 0 ? cont1++ : "";
    e == 0 ? cont3++ : "";
  });

  let negatives = (cont1 / 6).toFixed(6);
  let positives = (cont2 / 6).toFixed(6);
  let cero = (cont3 / 6).toFixed(6);

  return `${positives} \n${negatives} \n${cero}`;
};

console.log(plusMinus(arr));
