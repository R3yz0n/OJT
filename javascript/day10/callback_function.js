// Callback function is such function (child function) that is passed as an
// argument  to another function,
// Where HOF (Higher Order Function) will call it back at some point in time.
function sum(a, b) {
  //   for (let i = 0; i < 10000000000; i++) {}
  console.log(a + b);
}
// sum(1, 2, function () {});

function difference(a, b) {
  console.log(a - b);
}
// a will 10 b will 4 and callback will be a reference to a functin sum
function mathOperation(a, b, callback) {
  callback(a, b);
}

// sum(5, 10);
// difference(10, 2);

mathOperation(10, 4, sum);
mathOperation(10, 4, difference);
