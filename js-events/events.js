//DOMContentLoaded
//load
//beforeunload
//unload

// The DOMContentLoaded fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading.
document.addEventListener("DOMContentLoaded", () => {
  console.log("This function will execute once document object model loaded");
});

// For the window object, the load event is fired when the whole webpage (HTML) has loaded fully, including all dependent resources,
//  including JavaScript files, CSS files, and images.
window.addEventListener("load", (event) => {
  console.log("The page has fully loaded");
});

// Before the webpage and its resources are unloaded, the beforeunload event is fired. At this time, the webpage
// is still visible and you have an opportunity to cancel the event.
window.addEventListener("beforeunload", (event) => {
  // event.preventDefault();
  // event.returnValue = "";
});

// The unload event fires when a document has completely unloaded. Typically, the unload event fires
// when you navigate from one page to another.
window.addEventListener("unload", (event) => {
  console.log("Document Unloaded");
});

const getClickId = document.getElementById("clickable");
getClickId.addEventListener("click", function (event) {
  getClickId.style.backgroundColor = "red";
});

// There are three different phases during the lifecycle of a JavaScript event.

// Capturing Phase
// Target Phase
// Bubbling Phase

// Capturing Phase is when the event goes down to the element.
// The target phase is when the event reaches the element and
// the Bubbling phase is when the event bubbles up from the element.

const getUlId = document.getElementById("ul-id");
getUlId.addEventListener("click", () => {
  console.log("UL Element Clicked");
});

const getLiId = document.getElementById("li-1");
getLiId.addEventListener("click", (event) => {
  event.stopPropagation(); // By Using stopPropagation we can stop the event bubbling
  console.log("Li Element Clicked");
});

const form = document.getElementById("signup");
const getname = document.getElementById("getname");
const getemail = document.getElementById("getemail");

const findSubmit = form[2];
findSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  getname.innerText = form[0].value;
  getemail.innerText = form[1].value;
});

const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="size"]');
btn.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});

const btn1 = document.querySelector("#btn1");
const sb = document.querySelector("#framework");
const getIndex = document.getElementById("getIndex");
btn1.onclick = (event) => {
  event.preventDefault();
  // show the selected index
  getIndex.innerText = sb.value;
};
