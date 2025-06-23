// a and b are variables aka parameters
function operation(a, b, opr) {
  switch (opr) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      console.log("Invalid operator");
      return null;
  }
}
// console.log("hi there");
// sum(1, 2); //function invocation

console.log(operation(10, 5, "/"));

let marks = [10, 12, 13, 10];

// Why is array called reference type?
// Arrow function vs normal function
// What is hoisting?
// Default paramaters in functions
