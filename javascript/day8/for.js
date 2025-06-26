// counter initialization (let=seconds=0) // only happens one time
// seconds<60 condition check then the body of the loop runs
// after body execution the counter gets increment and then condition gets checked again
//If true, it enters the loop and so on.. until the condition doesnt meet
for (let seconds = 0; seconds < 60; seconds++) {
  console.log(seconds);
}
