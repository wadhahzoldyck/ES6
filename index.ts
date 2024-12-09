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
