const arr = [];

// Inserting Element into last
arr.push("hi", 5, true);

// Inserting Element into First
arr.unshift("Hello", "Welcome", "hi");

// Inserting Element Based on Index
arr.splice(3, "Green", "Yellow", "blue");

const obj = {
  name: "Ramesh",
  age: 18,
  location: "Chennai",
};

// Printing Array in reverse
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// Listing the index of array
for (index in arr) {
  console.log(arr[index]);
}

// Listing the Object key of an objects
for (objKey in obj) {
  console.log(obj[objKey]);
}

// Listing the values of an array
for (value of arr) {
  console.log(value);
}

// Iterating Element One By One
arr.forEach((element) => {
  // console.log(element);
});

const arr1 = ["Green", "Yellow", "blue"];

// Checking if the element is includes or not
const isAvail = arr.includes("Yellow");

const fruit = ["Mango", "Orange"];
const veggies = [5];
const groceries = ["Dal", 5, true];

// Joining Multiple Array into one
const updatedArr = fruit.concat(veggies, groceries);

// To find the first index of the element
const indexof = updatedArr.indexOf(5);

// To find the last index of the element
const lastIndex = updatedArr.lastIndexOf(5);

// Empty array By revering array and pop the last value
const arrCategories = [
  "Mobile",
  "Home Appliances",
  "Fashion",
  "Sports",
  "Gym Equippments",
];

for (let i = arrCategories.length; i >= 0; i--) {
  arrCategories.pop();
}
console.log(arrCategories);
