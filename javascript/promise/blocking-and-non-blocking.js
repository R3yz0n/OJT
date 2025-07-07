// blocking IO

console.log("Start");

setTimeout(() => {
  for (let i = 0; i < 10000000000; i++) {
    // Simulating a blocking operation
  }
  console.log("loop sakiyo");
});

console.log("End");
