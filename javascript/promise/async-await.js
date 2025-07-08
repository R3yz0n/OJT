// 5seconds
// here the function returns a promise(maybe throught an api(server))
fetchTheDataFromServer1()
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

async function performSideOperation() {
  try {
    // show loader
    const response = await fetchTheDataFromServer1(); // 1ms client-server communication (netwrok req)
    const sentData = sendDataToServer2(response); // client-server communication (network req)
  } catch (error) {
    // error show in ui
    // do somethings when there is error in the try block
  } finally {
    // turn off the loader
  }
}

async function performSideOperation2() {
  try {
    // show loader
    const response = await fetchTheDataFromServer1(); // 1ms client-server communication (netwrok req)
    const sentData = sendDataToServer2(response); // client-server communication (network req)
  } catch (error) {
    // error show in ui
    // do somethings when there is error in the try block
  } finally {
    // turn off the loader
  }
}

performSideOperation();
performSideOperation2();
