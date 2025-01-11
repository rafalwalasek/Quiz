<?php
    include('connect.php');

    $category = 'Sieci komputerowe';

    //wszystkie pytania z bazy
    $sql = "SELECT * FROM pytania WHERE kategoria = '$category'";
    $result = $conn->query($sql);

    //zapisanie pytan w tablicy
    $questions = [];
    while($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }

    //wylosowanie 5 pytan
    shuffle($questions);
    $selectedQuestions = array_slice($questions, 0, 10);

    //numeracja pytan
    $questionNumber = 1;

    //wyswietlenie losowych pytan
    foreach($selectedQuestions as $row) {
        echo '<h3 class="question-text">' . $questionNumber. '. ' . $row['tresc'] . '</h3>';
        echo '<div class="option-list">';
            echo '<div class="option"><span>A. ' . $row['odpa'] . '</span></div>';
            echo '<div class="option"><span>B. ' . $row['odpb'] . '</span></div>';
            echo '<div class="option"><span>C. ' . $row['odpc'] . '</span></div>';
            echo '<div class="option"><span>D. ' . $row['odpd'] . '</span></div>';
        echo '</div>';

        echo '<div class="stars">***</div>';

        $questionNumber++;
    }

    // Sprawdzanie, czy zapytanie zwróciło wynik
    /*if ($result->num_rows > 0) {
        
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
    }*/

    $conn->close();
?>