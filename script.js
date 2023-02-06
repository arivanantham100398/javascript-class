// var vs let vs const

// Rules

// 1.Cannot use name which are all reserved keyword in javascript
// 2.Variable name cannot be defined with spaces or hyphen(-)
// 3.Using camelCase for better practices
// 4.Cannot use same variable as declared before
// 5.Starting with digits are not allowed

//let and const introduced as ES6 features

//Var

//var is globle scoped/block scoped/function scoped
//var can be accesssible before intializing value because of it's hoisting
//var can be redeclarable

// console.log(a);
var a = 10;
a = "hello";

function demo() {
  var b = 10;
  // console.log(b);
}

// console.log(a);

//Let

//let is block scoped/function scoped
//let cannot accesssible before intializing value
//let can be redeclarable

let y = 20;

y = 50;

function demo1() {
  y = 60;
}
demo1();

// console.log(y);

//Const

//const is block scoped/function scoped
//const cannot accesssible before intializing value
//const cannot be redeclarable for primitive type

const firstName = "Ramesh";

// firstName = "suresh";
// console.log(firstName);

// Object

const personDetails = {
  name: "Arivanantham",
  age: 24,
  location: "chennai",
};

const cities = ["Chennai", "Coimbatore", "Erode"];

console.log(cities.length);

const getId = document.getElementById("text");

personDetails.location = "coimbatore";

getId.textContent = personDetails.location;

//Opertaors + - * / %

// Type Coercion

// Process of automatic or implicit conversion of values from one data type to another

//Number to string

// var x = "ggg" + "5";
// console.log(x);

// var z = true + "10";
// console.log(z);

//String to Number

// var w = 10 - "5";
// console.log(w);
