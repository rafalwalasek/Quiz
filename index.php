<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tests</title>

    <link rel="stylesheet" href="quiz.css">
    <link rel="stylesheet" href="time/time.css">
</head>
<body>
    
    <header class="header">
        <div class="logo">
            <img src="images/w.ico" alt="W"><span>T</span>ests.
        </div>

        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#" class="active">Tests</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <main class="main">

        <div class="container">
            <section class="quiz-section">
                <div class="quiz-box">
                    <h2>Sieci komputerowe</h2>
                    <div class="quiz-header">
                        <time id="countdown"></time>
                    </div>

                    <?php
                        // Załączamy plik connect.php, który zawiera połączenie z bazą danych
                        include('connect.php');
                    ?>

                    <div class="quiz-footer">
                        <span class="question-total">1 z 20 Pytań</span>

                        <div class="btns">
                            <button class="btn">Poprzednie</button>
                            <button class="btn">Następne</button>
                        </div>
                    </div>
                </div>
            </section>
        
            <section class="home">
                <div class="home-content">
                    <h2>Sieci</h2>
                    <p>Test składa się z 40 pytań. Aby zdać trzeba uzyskać 50% poprawnych odpowiedzi. Czas na wykonanie testu to 60 min. Powodzenia :)</p>
                    <button class="start-btn">Start</button>
                </div>
            </section>
        </div>

    </main>

    <script src="quiz.js"></script>
    <script src="time/time.js"></script>

</body>
</html>