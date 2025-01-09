<?php
    include('connect.php');

    $sql = "SELECT * FROM pytania LIMIT 2";
    $result = $conn->query($sql);

    // Sprawdzanie, czy zapytanie zwróciło wynik
    if ($result->num_rows > 0) {
        
        // Wyświetlanie wyniku
        while($row = $result->fetch_assoc()) {

            echo '<h3 class="question-text">' . $row['tresc'] . '</h3>';
            echo '<div class="option-list">';
                echo '<div class="option"><span>A. ' . $row['odpa'] . '</span></div>';
                echo '<div class="option"><span>B. ' . $row['odpb'] . '</span></div>';
                echo '<div class="option"><span>C. ' . $row['odpc'] . '</span></div>';
                echo '<div class="option"><span>D. ' . $row['odpd'] . '</span></div>';
            echo '</div>';

            echo '<div class="stars">***</div>';

        }
    } else {
        echo "Brak pytania o takim ID";
    }

    $conn->close();
?>