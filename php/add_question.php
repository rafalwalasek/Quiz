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

        //sprawdzenie czy zapytanie juz jest w bazie
        $sqlCheck = "SELECT * FROM pytania WHERE tresc = ?";
        $stmtCheck = $conn->prepare($sqlCheck);
        $stmtCheck->bind_param("s", $tresc);
        $stmtCheck->execute();
        $resultCheck = $stmtCheck->get_result();

        if($resultCheck->num_rows > 0) {
            echo "<script>
                alert('Pytanie o tej treści już istnieje w bazie danych.');
                window.history.back();
            </script>";
        } else {

            //window.location.href = '../index.php';
            //zapytanie SQL do dodania pytania
            $sqlInsert = "INSERT INTO pytania (tresc, odpa, odpb, odpc, odpd, odpowiedz, kategoria) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmtInsert = $conn->prepare($sqlInsert);
            $stmtInsert->bind_param("sssssss", $tresc, $odpa, $odpb, $odpc, $odpd, $odpowiedz, $kategoria);

            //wykonanie zapytania
            if($stmtInsert->execute()) {
                echo "<script>
                    alert('Nowe pytanie zostało dodane pomyślnie.');
                    window.history.back();
                </script>";
            } else {
                echo "Błąd: " . $sql . "<br>" . $conn->error;
            }

            //zamkniecie zapytania
            $stmtInsert->close();

        }

        //zamkniecie polaczenia
        $stmtCheck->close();
        $conn->close();
    }

?>