// Create Element
const messageEl = document.getElementById("message");
const heading = document.createElement("h1");
heading.className = "message";
heading.innerText = "Welcome To The Page";

const anchor = document.createElement("a");
anchor.innerText = "Go to google";

messageEl.prepend(heading); //prepend
messageEl.prepend(anchor);

// innerHTML vs InnerText vs textContent

const span = document.getElementById("spanId");
// console.log(span.innerText);
// console.log(span.innerHTML);

// span.innerHTML = "<h1>Hello</h1>";

// console.log(span.innerText); // only text
// console.log(span.innerHTML); // shows full line even if it's commented or display set to none
// console.log(span.textContent); // spaces and text

// const innertext = messageEl.innerText;
// const innerhtml = messageEl.innerHTML;
// const textContent = messageEl.textContent;

// console.log(innertext); // innerText Only Return Text
// console.log(innerhtml); // innerHTML return with html tag
// console.log(textContent); // textContent return with spaces and only text

// Replace Child Element

// const menuEl = document.getElementById("todo");
// console.log(menuEl);
// const li = document.createElement("li");
// li.innerText = "Car Service";
// menuEl.replaceChild(li, menuEl.lastElementChild);

// Removing Child
const todo = document.getElementById("todo");
// todo.removeChild(todo.lastElementChild);

// Get Child Elements of a Node
// console.log(todo.firstElementChild);
// console.log(todo.lastElementChild);
// console.log(todo.children[2]);

//find the parent tag of a horizontal line
const query = document.querySelector("hr");
// console.log(query);
// console.log(query.parentElement);

// Find Sibling of an node
// console.log(query.previousElementSibling);
// console.log(query.nextElementSibling);

// Check if element has attribute
const findAnchor = document.querySelector("h2");
// console.log(findImg);
// console.log(findImg.hasAttribute("width"));

// Set Element Attribute
// findAnchor.setAttribute("height", "600px");
// findAnchor.setAttribute("alt", "Dummy Image");

//Get Element Attribute
// const findAttribute = findAnchor.getAttribute("src");
// console.log(findAttribute);

// Remove attribute
// findAnchor.removeAttribute("alt");

// Get All Attributes
// const findInput = document.getElementById("input");
// console.log(findInput);
// const attr = findInput.attributes;
// console.log(attr);

// for(let attr of findInput.attributes) {
//     console.log(`${attr.name} = ${attr.value}` )
// }

// Set Style
findAnchor.style.color = "red";
findAnchor.style.fontSize = "25px";
findAnchor.style.width = "200px";
findAnchor.style.padding = "2rem";
findAnchor.style.backgroundColor = "black";
