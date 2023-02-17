const arr = [
  { firstName: "Ramesh", lastName: "Kumar" },
  { firstName: "Arun", lastName: "Kumar" },
  { firstName: "Dinesh", lastName: "Kumar" },
];

const add = [2, 4, 6, 8, 10];

// By using map iterate and perform operation with individual element and return it as a new array
const fullName = arr.map(function (name) {
  return name.firstName + " " + name.lastName;
});

const multiplyBy2 = add.map(function (item) {
  return item * 2;
});

const products = [
  { productName: "OnePlus", price: 10000, categoty: "phone" },
  { productName: "Apple", price: 20000, categoty: "phone" },
  { productName: "Vivo", price: 12000, categoty: "phone" },
  { productName: "Oppo", price: 15000, categoty: "phone" },
  { productName: "Samsung", price: 23000, categoty: "phone" },
  {
    productName: "Godrej Washing Machine",
    price: 23000,
    categoty: "Appliances",
  },
  { productName: "Voltas AC", price: 23000, categoty: "Appliances" },
];

// Based on the condition products filter in an array
const filteredProd = products.filter(function (prod) {
  return prod.categoty !== "phone" && prod.price >= 15000;
});

// console.log(filteredProd);

const contactDetails = [
  {
    name: "Arun",
    mobile: 96655256615,
  },
  {
    name: "Ramesh",
    mobile: 9665525615,
  },
  {
    name: "Baskar",
    mobile: 9665525915,
  },
  {
    name: "Dinesh",
    mobile: 9667525615,
  },
  {
    name: "Kumar",
    mobile: 9613525615,
  },
];

// Based on the condition find() will return first unique value
const findUniqueMobile = contactDetails.find(function (contact) {
  return contact.mobile === 9665525615;
});

// console.log(findUniqueMobile);

// Spread Operator
// ...var ECMAScript ES6 feature

// By using Spread Operator copy another array values into one
const orginalArr = [2, 5, 6, 7, 8];
const orginArr2 = [47, 85, 565, 8488, 5151];
const extendedArr = [...orginArr2, ...orginalArr];

const level1 = [
  {
    name: "Arun",
    mobile: 96655256615,
  },
  ,
  [
    {
      name: "Kuamr",
      mobile: 96655256615,
    },
    {
      name: "Dinesh",
      mobile: 96655256615,
    },
    [{ name: "Ravi" }],
  ],
  {
    name: "Ramesh",
    mobile: 96655256615,
  },
];

//   By using flat method nested array can be flattened into one
level1.flat(2).map(function (level) {
  console.log(level.name + " " + "This is Element");
});
