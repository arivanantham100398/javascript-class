const mobilePhone = [
  { productName: "OnePlus", price: 10000, categoty: "phone" },
  { productName: "Apple", price: 20000, categoty: "phone" },
  { productName: "Vivo", price: 12000, categoty: "phone" },
  { productName: "Oppo", price: 15000, categoty: "phone" },
  { productName: "Samsung", price: 23000, categoty: "phone" },
];

const homeAppliances = [
  { productName: "Fridge", price: 55000, categoty: "appliances" },
  { productName: "Washing Machine", price: 36000, categoty: "appliances" },
  { productName: "Mixer", price: 29000, categoty: "appliances" },
  { productName: "Stove", price: 16000, categoty: "appliances" },
  { productName: "AC", price: 29000, categoty: "appliances" },
];

const bookType = [
  { productName: "Novel", price: 500, categoty: "books" },
  { productName: "Fiction", price: 580, categoty: "books" },
  { productName: "Adventure", price: 309, categoty: "books" },
  { productName: "SCI-FI", price: 410, categoty: "books" },
  { productName: "Documentary", price: 360, categoty: "books" },
];

filterByPrice(mobilePhone, 12000);
filterByPrice(homeAppliances, 3000);
filterByPrice(bookType, 400);

function filterByPrice(arr, priceRange) {
  const filteredProd = arr.filter(function (item) {
    return item.price > priceRange;
  });
  filteredProd.map(function (item) {
    console.log(item.productName, "Greater than", priceRange);
  });
}

function normalFn() {
  console.log("Normal Function");
}
const arrFn = () => {
  console.log("Arrow Function");
};

normalFn();
arrFn();

bookType.map(function () {
  // Anonymous Normal Function
});

bookType.map(() => {
  // Anonymous NoArrowrmal Function
});

// IIFE Immediately Inovoke Function Expression
(function normalIIFEFn(number) {
  console.log("Normal IIFE Function", number);
})(20);

function parameterDemo() {
  console.log(arugments); // By accessing arguemnts we can able to access all arguments that passed into function
}

parameterDemo("Ramesh", "26", "Chennai");

function restOperator(name1, name2, ...rest) {
  // By access name1 and name we can able to retrive first two mentioned arguments
  // By using rest operator we can able to access all the other arguments that passed into function
  // Rule - Rest Operator should be decalred as the last argument
}
restOperator("Karthik", "Dinesh", "Welcome to JS", "Alert");
