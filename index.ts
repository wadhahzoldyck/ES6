// Var Hoisting & Functional Scope

function greetPerson(name: any) {
  if (name === "chandler") {
    var greet = "Hello chandler!";
  } else {
    var greet = "Hi there ";
  }
  console.log(greet, "var hoisted");
}

greetPerson("chandler");

// Let Keyword Block scoop

function greetPersonLet(name: any) {
  let greet;
  if (name === "chandler") {
    greet = "Hello chandler!";
  } else {
    greet = "Hi there ";
  }
  console.log(greet, "let Keyword");
}

greetPersonLet("wadhah");

var a = 1;
var b = 2;
if (a === 1) {
  var a = 10;
  let b = 20;
  console.log(a, b, "this the value of a and b");
}
console.log(
  a,
  b,
  "in this one a will change var its hoisted and funtionel scooped but the b with still 2 cause let is  block scope and will change only in the block"
);

//let in for loops

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// The loop runs synchronously, but setTimeout schedules each console.log(i) to run after 1 second.
// By the time the setTimeout callbacks execute, the loop has already finished, and the value of i has been incremented to 6.
// Since var is function-scoped, all the callbacks share the same i variable.
// Thus, all the callbacks log the final value of i, which is 6

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i, "using let");
//   }, 1000);
// }

//const keywords (block scoop and not hoisted similar as let  we cannot chnage the value)
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

let num1;
const num2 = 10;

const obj1 = {
  name: "wadhah",
};

console.log(obj1.name);

//in this case we cannot  assign a new   object  but we can assign a new value on it

obj1.name = "ghassen";
console.log(obj1.name);

//we use let when there is possibility if ressign the value but we use const when the vlaue is sure it will not be change

const PI = 3.14; //this value is never going to change
const MAX_SIZE = 100;

//In this case we use let  because the value will being reassigned
let c = 5;
let d = 10;

c = c + d;
d = c - d;
c = d + d;

//arrow functions

console.log("++arrow Functions++");
var getRegvalue = function () {
  return 10;
};

console.log(getRegvalue());

//will chnage this now to arrow functions

const arrowFunction = (m: any) => 10 * m;

console.log(arrowFunction(5), "arrow function");

//Lexical This

console.log("++++++ this keyword ++++++++++++");
var employee = {
  id: 1,
  greet: function () {
    let self = this;
    setTimeout(() => {
      //   console.log(self.id);
    }, 1000);
  },
};

employee.greet();

//Default Function  Parameters

console.log("++++++++++++++ Default Function Parameters ++++++++++++++");

let getValue = function (value = 10) {
  console.log(value);
};

getValue();
getValue(20);

//Rest Operator

console.log("+++++ Rest Operator +++++");

let displayColors = function (message: any, ...colors: any) {
  console.log(message);
  console.log(colors);
  for (let i in colors) {
    console.log(colors[i]);
  }
};
let message = "List of colors";
displayColors(message, "Red");
displayColors(message, "Red", "blue");
displayColors(message, "Red", "blue", "green");

// spread operator

console.log("+++++ spread operator ++++");

let displayColorsSpread = function (message: any, ...colors: any) {
  console.log(messageSpread);
  for (let i in colors) {
    console.log(colors[i]);
  }
};
let messageSpread = "List of colors";

let colors = ["Orange", "Pink", "yellow"];

displayColorsSpread(message, ...colors);

// rest operator - in function paramter
// spread operator - in function call
// rest - combine (rest of all parameters are combined to a variable)
// spread - split (arrays into individual elements)

// Object Literals

console.log("++++++++++++++++++ Object literals ++++++++++++++++");

let firstname = "wadhah";
let lastname = "naggui";

let person = {
  firstname,
  lastname,
};

console.log(person.firstname, person.lastname);

function createPerson(firstname: any, lastname: any, age: any) {
  let fullname = firstname + " " + lastname;
  return {
    firstname,
    lastname,
    fullname,
    isSenior() {
      return age > 60;
    },
  };
}

let p = createPerson("ghassen", "chaieb", "28");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

//Destructing Array

console.log("++++++++ Destructing Array ++++++++++");

let student = ["wadhah", "naggui", "male"];
let [fname, lname, gender] = student;
console.log(fname, lname, gender);

//Destructing array using rest Operator

let student1 = ["wadhah", "naggui", "male"];
let [fname1, ...elements] = student;
console.log(fname1, elements);

//Destructing Objects

console.log("+++++ Destructing Objects +++++++++++++++");

let object = {
  fname2: "wajdi",
  lname2: "naggui",
  gender2: "male",
};

let { fname2: f, lname2: l, gender2: g } = object;
console.log(f, l, g);

//String templates

console.log("+++++++++ String templates +++++++++++++++");

let user = "wadhahzo";
let greet = `welcome to ${user}`;
console.log(greet);

//for loop

console.log("++++++++++ for loop +++++++++++++++");

let games = ["FIFA", "VALORANT", "LOL"];
for (let i in games) {
  console.log(games[i]);
}

for (let game of games) {
  console.log(game, "");
}

let letters = "ABC0";

for (let letter of letters) {
  console.log(letter);
}

//Class

console.log("+++++++++ Class ++++++++++");
class Person {
  greet() {}
}

let pers = new Person();

console.log(pers.greet === Person.prototype.greet);

//Class Body and Methods

class Person1 {
  name: any;

  // Constructor method is used for creating and initializing an object
  constructor(name: any) {
    this.name = name;
    console.log(this.name + " constructor");
  }
  static staticMethod() {
    console.log("static Method");
  }
  greetPerson() {
    console.log(`Hello ${this.name}	`);
  }
}

let p1 = new Person1("wadhah");
Person1.staticMethod();
p1.greetPerson();

//so here we have in class 3 types of methods which are constructor static methods and prototype methodes

//Class Inheritance

console.log("+++++++++++++Class Inheritance+++++++++++++++++");

class Game {
  constructor(name: any) {
    console.log(name + "Game Constructor");
  }

  getId() {
    return 10;
  }
}

class Fifa extends Game {
  constructor(name: any) {
    super(name);
    console.log(name + "Fifa Constructor");
  }
  getId() {
    return super.getId();
  }
}

let fifa = new Fifa("Fifa");
console.log(fifa.getId()); //fils have acces to parent method

//Set and map
let mySet = Object.create(null);
mySet.id = 0;
if (mySet.id) {
  console.log("id exists");
}

let myMap = Object.create(null);
myMap.name = "wadhah";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]);

let ob1 = {};
let ob2 = {};

myMap[JSON.stringify(ob1)] = "World";

console.log(myMap[JSON.stringify(ob2)]);

console.log(ob1.toString());
console.log(ob2.toString());

//set

let mySet1 = new Set();
let obje1 = {};
let obje2 = {};

mySet1.add("Hello");
mySet1.add(1);
mySet1.add(obje1);
mySet1.add(obje2);
console.log(mySet.size);

let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);

let chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);

console.log(newSet.delete(1));
console.log(newSet.size);

//map

let personMap = new Map();

personMap.set("firstName", "Chandler");
personMap.set("age", 30);

console.log(personMap.get("firstName"));

let person1 = {};
let person2 = {};

personMap.set(person1, 10);
personMap.set(person2, 20);

console.log(personMap.get(person1));
personMap.delete("firstName");
personMap.clear();

console.log(personMap.size);
console.log(personMap.has("firstName"));

//Iterating over Maps

let myMap1 = new Map([
  ["fname", "wadhah"],
  ["lname", "naggui"],
]);

//iterate for keys
for (let key of myMap1.keys()) {
  console.log(key);
}

//Iterate for values

for (let value of myMap1.values()) {
  console.log(value);
}

//iterate for both values
for (let [key, value] of myMap1.entries()) {
  console.log(`${key} -> ${value}`);
}
