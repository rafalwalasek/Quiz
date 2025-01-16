<?php
    include('connect.php');

    $network_category = 'Sieci komputerowe';

    //wszystkie pytania z bazy
    $sql = "SELECT * FROM pytania WHERE kategoria = '$network_category'";
    $result = $conn->query($sql);

    //zapisanie pytan w tablicy
    $questions = [];
    while($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }

    //wylosowanie n pytan
    shuffle($questions);
    $selectedQuestions = array_slice($questions, 0, 3);

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

    $conn->close();
?>