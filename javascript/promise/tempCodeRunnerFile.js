fetchTheDataFromServer()
  .then((response) => {
    console.log(response);
    console.log("Data fetched successfully");
  })
  .catch(() => {
    console.log("Error fetching data");
  });