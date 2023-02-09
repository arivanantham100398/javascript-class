// find letter/character based on index
const fullName = "P.Dinesh Kumar";
const firstLetter = fullName.charAt(0);
const firstLetter1 = fullName[0];
// console.log(firstLetter);

// Append/join two string values
const firstName = "Dinesh";
const lastName = "Kumar";

const name1 = firstName.concat(" ", lastName);
// console.log(name1);

// Check if the character is available in particular string
var message = "WELCOME to Programming";
message = message.toLowerCase();
const isAvailable = message.includes("wel");
// console.log(isAvailable);

// Check if the character are starts with the given string
var scriptingLanguage = "JavaScript";
var isStartsWith = scriptingLanguage.toLowerCase().startsWith("java");
var isEndsWith = scriptingLanguage.endsWith("Script");
// console.log(isStartsWith);
// console.log(isEndsWith);

// Find the index of an character in given string
const str = "Welcome to the page";
const findIndex = str.indexOf("ell");
const findLastIndex = str.lastIndexOf("e");
// console.log(findLastIndex);

// Repeat the string values
const welcomeMessage = "Welcome to Javascript, ";
const repeatMessage = welcomeMessage.repeat(10);
// console.log(repeatMessage);

// Replace the Particular String
const userMobileNumber = "+91 65981 54415";
const replaceOneCharacter = userMobileNumber.replace("5", "6");
const replaceAllCharacter = userMobileNumber.replaceAll(" ", "");
// console.log(replaceOneCharacter);

// Find the character by index
const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur natus repellat qui labore quisquam magnam sint hic a dolor";
const findStringByPara = paragraph.slice(0, 50);
console.log(findStringByPara);

// Split the character by word or character
const paragraph1 = "Varun Kumar";
const findSplittedWord = paragraph1.split(" ");
console.log(findSplittedWord);
