// yo code le fetch API ko promise chain kasari kaam garcha bhanera dekhaucha.
// fetch("https://jsonplaceholder.typicode.com/users") le external API bata data lyaucha.
// .then((response) => {...}) le response aayepachi, response.ok check garcha.
// yadi response.ok false bhayo bhane, error throw garcha ra catch block ma janchha.
// response.json() le response lai JSON ma convert garcha.
// arko .then((data) => {...}) le parsed data handle garcha ra console ma dekhauncha.
// .catch((error) => {...}) le sabai error haru handle garcha, jastai network ya parsing error.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); // Parse JSON from response
  })
  .then((data) => {
    console.log("Fetched Users:", data); // Handle the parsed data
  })
  .catch((error) => {
    console.error("Fetch error:", error); // Handle errors
  });
