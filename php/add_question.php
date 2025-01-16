<?php

    //zapis danych do bazy danych
    include('connect.php');

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        //pobieranie danych z formularza
        $tresc = $_POST['question'];
        $odpa = $_POST['answerA'];
        $odpb = $_POST['answerB'];
        $odpc = $_POST['answerC'];
        $odpd = $_POST['answerD'];
        $odpowiedz = $_POST['correctAnswer'];
        $kategoria = $_POST['category'];

        //zapytanie SQL
        $sql = "INSERT INTO pytania (tresc, odpa, odpb, odpc, odpd, odpowiedz, kategoria) VALUES ('$tresc', '$odpa', '$odpb', '$odpc','$odpd','$odpowiedz', '$kategoria')";

        //wykonanie zapytania
        if($conn->query($sql) === TRUE) {
            echo "Nowe pytanie zostało dodane pomyślnie.";
        } else {
            echo "Błąd: " . $sql . "<br>" . $conn->error;
        }

        //zamkniecie polaczenia
        $conn->close();
    }

?>