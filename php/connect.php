<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quiz";

    // Tworzenie połączenia
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Sprawdzanie połączenia
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>