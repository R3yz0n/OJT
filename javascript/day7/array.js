// const arr = ["max", "arpan", "sagar", "utsab"];
// const chats = ["Default parameters in Js", "Azure deployment node js"];

// ******** Pass By Reference *********
const marks = [11, 18, 20, 3];

console.log(marks);
function changeArray(marks) {
  marks[0] = 100000000;
}
changeArray(marks);
console.log(marks);

// ****** Pass By Value ********

// let num = 10; //
// console.log(num); // 10
// function changeNumber(num) {
//   // num is 10
//   num = 20;
// }
// changeNumber(num); // function invove with arguments num (10)
// console.log(num); //10
