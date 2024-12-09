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
