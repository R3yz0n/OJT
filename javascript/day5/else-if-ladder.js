// Infant

let ageOfPerson = 1; // here = is an assignment operator
if (ageOfPerson <= 1) {
  // <= comparism operator
  console.log("he/she is an infant, should get a polio vaccine");
} else if (ageOfPerson < 5) {
  console.log("he/she is a toddler, should get a DTP vaccine");
} else if (ageOfPerson < 12) {
  console.log("he/she is a child, should get a MMR vaccine");
} else if (ageOfPerson < 18) {
  console.log("he/she is a teenager, should get a Tdap vaccine");
} else {
  console.log("he/she is an adult, should get a flu vaccine");
}
