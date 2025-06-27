// If i were to store the details of a person
// it would look a like this

let name = "John Doe";
let age = 30;
let isEmployed = true;
let hobbies = ["reading", "gaming", "coding"];
// console.log(name);

// Object consits of key-value pairs,where key can be
// a variable, array, of even a function (method)
// Keys are also knows as properties
const person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "gaming", "coding"],
  // canHeVote: function () {},
  canHeVote: () => {
    return this.age >= 18;
  },
};
// console.log(person.name);
console.log(person.canHeVote());
person.location = "New York";
console.log(person);

// const bookmarks = {
//   title: "phind",
//   url: "https://www.phind.com",
// };

// const boookmarks = [
//   {
//     title: "phind",
//     url: "https://www.phind.com",
//   },
//   {
//     title: "chatgpt",
//     url: "https://www.phind.com",
//   },
//   {
//     title: "phind",
//     url: "https://www.phind.com",
//   },
// ];

// make an array of objects where each objects is the video details
