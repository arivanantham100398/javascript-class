// Arithmetic Operators + - * / % ++ --
// Assignment Operators = += -= *= /= %=
// Comparison Operators === == !== != < > <= >=
// Logical Operators && || !
// Conditional Operators ? :
// Type Operators typeof

// Arithmetic Operators
// const num1 = 10;
// const num2 = 20;
// const Add = num1 + num2;
// const Sub = num1 - num2;
// const Multiply = num1 * num2;
// const Division = num1/num2;
// const Modulus = num1%num2;
// num1++ addition 1 increament
// num2-- subtraction 1 decreament

// Assignment Operator

// const num1 = 10;
// const num2 = 20;

// num1 += num2; Add and assign value into same variable
// num1 -= num2; Minus and assign value into same variable
// num1 *= num2; Multiply and assign value into same variable
// num1 /= num2; Division and assign value into same variable
// num1 %= num2; Gives Reminder and assign value into same variable

//Comparison Operator

const a = 100; //number
const b = "100"; // string

// const isSame = a === b //Check if value and type are same Strict comparison operator
// const isSame1 = a == b //Check if value same comparison operator

const isSame = a !== b; // Value and type should be not equal then it return true
const isSame1 = a != b; // Value should be not equal then it return true

// Logical Operator

const boolean = true;
const boolean1 = true;

const boolean2 = false;

// if (boolean && boolean1) {
//     // && Both condition should need to be true
// }

// if (boolean2 || boolean1) {
//   || Atleast one condition should need to be true
// }

// if (!boolean2) {
//   ! If the value is false it returns opposite value true
// }

const arr = [56, "Hi", { name: "nhhdd", age: 26 }, 42];

arr.push("Hello"); // Push inserts value into last
arr.pop(); // Pop removes last element

arr.shift(); // Shift removes first Element
arr.unshift("done"); //Unshift insert value into first order
