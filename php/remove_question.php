<?php

    //zapis danych do bazy danych
    include('connect.php');

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        //pobieranie danych z formularza
        $tresc = $_POST['question'];

        //sprawdzenie czy pytanie istnieje
        $sqlCheck = "SELECT * FROM pytania WHERE tresc = ?";
        $stmtCheck = $conn->prepare($sqlCheck);
        $stmtCheck->bind_param("s", $tresc);
        $stmtCheck->execute();
        $resultCheck = $stmtCheck->get_result();

        if ($resultCheck->num_rows > 0) {
            // Jeśli pytanie istnieje, wykonaj usunięcie
            $sqlDelete = "DELETE FROM pytania WHERE tresc = ?";
            $stmtDelete = $conn->prepare($sqlDelete);
            $stmtDelete->bind_param("s", $tresc);
        
            //wykonanie zapytania
            if($stmtDelete->execute()) {
                echo "<script>
                    alert('Rekord z podaną treścią został usunięty pomyślnie.');
                    window.history.back();
                </script>";
            } else {
                echo "Błąd podczas usuwania rekordu: " . $sql . "<br>" . $conn->error;
            }

        } else {
            // Jeśli pytanie nie istnieje
            echo "<script>
                    alert('Nie znaleziono pytania z podaną treścią. Pytanie mogło już zostać usunięte.');
                    window.history.back();
                  </script>";
        }

        //zamkniecie polaczenia
        $stmtDelete->close();
        $conn->close();
    }

?>