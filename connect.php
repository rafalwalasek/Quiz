<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


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

    // Załóżmy, że chcesz pobrać pytanie o ID 1
    $question_id = 3;  // Zmienna przechowująca ID pytania

    $sql = "SELECT * FROM pytania WHERE id = $question_id";
    $result = $conn->query($sql);

    // Sprawdzanie, czy zapytanie zwróciło wynik
    if ($result->num_rows > 0) {
        // Wyświetlanie wyniku
        $row = $result->fetch_assoc();
    
        echo '<h3 class="question-text">' . $row['tresc'] . '</h3>';
    
        echo '<div class="option-list">';
            echo '<div class="option"><span>A. ' . $row['odpa'] . '</span></div>';
            echo '<div class="option"><span>B. ' . $row['odpb'] . '</span></div>';
            echo '<div class="option"><span>C. ' . $row['odpc'] . '</span></div>';
            echo '<div class="option"><span>D. ' . $row['odpd'] . '</span></div>';
        echo '</div>';
    } else {
        echo "Brak pytania o takim ID";
    }

    $conn->close();

?>