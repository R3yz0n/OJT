// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

//A special type of function
// It has threee stages
// 1) Pending
// 2) sucess
// 3) rejected

// 5seconds
fetchTheDataFromServer()
  .then((response) => {
    console.log(response);
    console.log("Data fetched successfully");
    return response;
  })
  .then((returnedData) => {
    console.log("Returned Data:", returnedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 10seconds
fetchTheDataFromServer2()
  .then((response) => {
    console.log(response);
    console.log("Data fetched successfully");
    return response;
  })
  .then((returnedData) => {
    console.log("Returned Data:", returnedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
console.log("end of the file");
