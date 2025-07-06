// 15min
function bhaatPakauniTarika() {
  console.log("Wash the rice");
  console.log("2:1 ratio of water and rice");
  console.log("--------Bhat ready--------------");
}

// 30 mins
function masuPakauniTarika() {
  // console.log('Masala ko paste banauni')
  console.log("fry tomato and onion");
  console.log("Masu fry garni");
  console.log("Masala add garni");
  console.log("Daniya ko garnish garnu");
  console.log("--------------Masu ready------------");
}

// bhaatPakauniTarika();
// masuPakauniTarika();

// HOF
//@param1->callback fn
//@param2->timeout in number
setTimeout(bhaatPakauniTarika, 10000);
console.log("end of code");
// setTimeout(masuPakauniTarika, 7000);
