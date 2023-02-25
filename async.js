// In JavaScript, everything (strings, arrays, functions) is considered an object. Hence,
// the concept of callbacks lets us
// pass functions as arguments to another function which will be executed later within the outer function.

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

function compute(callBack, x, y) {
  return callBack(x, y);
  // console.log(callBack, x, y);
}

compute(add, 10, 5);

// Callback Hell

// The phenomenon which happens when we nest multiple callbacks within a function
// is called a callback hell. The shape of the resulting code structure resembles a
//  pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the
//   code very difficult to understand and maintain.

// function getUser(id, callBack) {
//   setTimeout(() => {
//     console.log(id, "Reading an user from database...");
//     callBack("Arivanantham98");
//   }, 1000);
// }

// function getRepositories(username, callBack) {
//   setTimeout(() => {
//     console.log(`Extracting Repositories for ${username}....`);
//     callBack(["Js-Class", "HTML-Class"]);
//   }, 2000);
// }

// function getCommits(repo, callBack) {
//   setTimeout(() => {
//     console.log("Extracting Commits for " + repo + "....");
//     callBack("Everything Fetched Succssfully");
//   }, 3000);
// }

// getUser(1, (user) => {
//   getRepositories(user, (repos) => {
//     getCommits(repos[0], (commitMessage) => { // Callback Hell and Known as Pyramid of Doom
//       console.log(commitMessage);
//     });
//   });
// });

// Promise

// The core idea behind promises is that a promise represents the result of an asynchronous operation.
//  A promise is in one of three different states:

// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation.

// Promise Syntax

// return new Promise((resolve, reject) => {
//   resolve("Success");
// });

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id, "Reading from a database....");
      resolve("Arivanantham98");
    }, 1000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Extracting Repositories for ${username}....`);
      resolve(["repo1", "repo2", "repo3"]);
      // reject(new Error("Error occured in repositories"));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Extracting Commits for " + repo + "....");
      // resolve("Fetched Successfuly");
    }, 3000);
  });
}

// Handle Promises with .then

getUser(1)
  .then((user) => getRepositories(user))
  .then((repos) => getCommits(repos))
  .then((message) => console.log(message));

// Handle Promises with async await

(async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepositories(user);
  const commits = await getCommits(repos[0]);
})();

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => data.json())
//   .then((datas) => console.log(datas));
