// JSON stands for Javascript Object Notation
// It is primarily used for transmitting data between a server and a web application

const student = {
  name: "John Doe",
  age: 20,
  courses: ["Math", "Science", "History"],
  isEnrolled: true,
  class: "10th Grade",
};

let convertedToJson = JSON.stringify(student);
console.log(convertedToJson); // Convert object to JSON string
// JSON.parse() is used to convert the JSON format back to JS object

//  {
//  "name":"John Doe",
//  "age":20,"courses":["Math","Science","History"],
//  "isEnrolled":true,
//  "class":"10th Grade"
//  }
