var user = "";
var isLoggedIn = false;
var isUser = user.includes("user");

// if (user) {
//   alert("Welcome To the Page");
// } else {
//   alert("Please login with credentials");
// }

var user = false;
var vendor = false;
var admin = false;

// if (user) {
//   console.log("Welcome User");
// } else if (vendor) {
//   console.log("Welcome Vendor");
// } else if (admin) {
//   console.log("Welcome Admin");
// } else {
//   console.log("Welcome to the Page");
// }

// var a = 70

// if (60) {
//   console.log("Welcome User");
// } else if (70) {
//   console.log("Welcome Vendor");
// } else if (80) {
//   console.log("Welcome Admin");
// } else {
//   console.log("Welcome to the Page");
// }

switch ("70uiggu") {
  case "10":
    console.log("Books");
    break;
  case 20:
    console.log("Furnitures");
    break;
  case 30:
    console.log("Clothing");
    break;
  case 40:
    console.log("Fitness Equippments");
    break;
  case "70":
    console.log("Mobile Phone");
    break;
  case 100:
    console.log("Digital Camera");
    break;
  default:
    console.log("No Products Available");
    break;
}



// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}