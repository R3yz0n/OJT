// yo function le users ko data fetch garne process dekhaucha.
// async function prayog garda function le promise return garcha ra await prayog garna milcha.
// fetch("https://jsonplaceholder.typicode.com/users") le external API bata data lyaucha.
// await fetch... lekhda, fetch operation sakie pachi matra next line execute hunchha.
// response.ok le response successful cha ki chaina bhanera check garcha.
// yadi response.ok false ayo bhane, error throw hunchha ra catch block ma janchha.
// response.json() le response lai JSON ma convert garcha.
// data variable ma users ko array aunchha, jun console ma dekhaincha.
// try-catch block le error handle garcha, yadi fetch ya JSON parsing ma error ayo bhane catch ma janchha.
// antimma, function call garera fetchUsers() chalaiyeko cha।

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchUsers();
