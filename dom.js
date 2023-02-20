//getElementById
//getElementsByClassName
//getElementsByTag
//querySelector
//querySelectorAll

// getElementsByTagName
// This method returns all the elements that matches the specified Tag name.

const collections = document.getElementsByTagName("h1");

// getElementsByClassName
// This method returns all the elements that matches the specified Class name.

const classNameCollections = document.getElementsByTagName("li-class");

// getElementById
// Here, the selection is based on the Id name. And this seems to be similar to Tag name & Class name selector but there’s
// a difference in how many elements this selector selects. In all the above selectors,
// a list of all matching elements is returned. But this selector returns only the first matched element while ignoring the remaining.

const elById = document.getElementById("demo");

// querySelector
// This one returns the first element that matches the specified CSS selector in the document.

document.querySelector("li"); // returns the first element that matches the CSS selector li. Remaining elements are ignored.
document.querySelector(".heading"); // returns the first element that matches the CSS selector .heading.
document.querySelector("#item"); // returns the first element that matches the CSS selector #item.

// querySelectorAll
// This method returns all the elements that match the specified CSS selector in the document.

document.querySelectorAll(".heading"); // returns a list of all elements that matches the specified CSS selector.
// Since we have only one element under the class name .heading, the list contains one element. And it can be accessed by it’s index.

document.querySelectorAll("#item"); // returns a list of 3 items that matches the CSS selector.
// Individual elements are accessed by it’s index.
