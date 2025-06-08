<?php

// Check if the form has been submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nohting"]) && isset($_POST["password"])) {
        $email = $_POST["nohtig"];
        $password = $_POST["password"];

       
        echo "<h2>Login Data Received:</h2>";
        echo "<p>Email: " . htmlspecialchars($email) . "</p>";
        echo "<p>Password: " . htmlspecialchars($password) . "</p>"; // Be careful with displaying passwords, even for testing


    } else {
        echo "<p>Email or password field is missing.</p>";
    }
} else {
    // If the page is accessed directly without submitting the form,
    // or using a method other than POST
    echo "<p>Please submit the login form.</p>";
    // Or redirect to the form page:
    // header("Location: index.html");
    // exit;
}
?>