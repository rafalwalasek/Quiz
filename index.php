<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tests</title>
    
    <link rel="stylesheet" href="css/cover.css">
    <link rel="stylesheet" href="tests.css">
    <link rel="stylesheet" href="time/time.css">

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    
    <!-- header -->
    <header>
        <div class="logo">
            <img src="images/w.ico" alt="W"><span>T</span>ests.
        </div>

        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#" class="active">Tests</a>
            <a href="#">Contact</a>
        </nav>
    </header> <!-- end header -->

    <!-- main -->
    <main>

        <!-- boxes section -->
        <div class="boxes-section">

            <p id="p_main">Egzamin rozpocznie się po naciśnięciu przycisku: START. Każdy test składa się z 40 pytań. Aby zdać trzeba uzyskać 50% poprawnych odpowiedzi. Czas na wykonanie testu to 60 min.</p>

            <!-- box section top -->
            <section class="box-section">
                
                <div class="box-quiz">
                    <h2>Sieci</h2>
                    <i class='bx bx-wifi'></i>
                    <a class="btn-start">Start</a>
                </div>
                <!--<div class="box-quiz">
                    <h2>Systemy</h2>
                    <i class='bx bx-devices'></i>
                    <button class="btn-start">Start</button>
                </div>
                <!--<div class="box-quiz">
                    <h2>Bazy</h2>
                    <i class='bx bx-line-chart'></i>
                    <button class="btn-start">Start</button>
                </div>-->
            </section> <!-- end box section top -->
            <!-- box section bottom 
            <section class="box-section">
                <div class="box-quiz">
                    <h2>Sprzęt</h2>
                    <i class='bx bx-microchip'></i>
                    <button class="btn-start">Start</button>
                </div>
                <div class="box-quiz">
                    <h2>Angielski</h2>
                    <i class='bx bx-user-pin' ></i>
                    <button class="btn-start">Start</button>
                </div>
            </section> <!-- end box section bottom -->

            <!-- add questions -->
            <div class="add-question">

                <p>Dodaj pytanie do testu</p>

                <form action="php/add_question.php" class="add-question-form" method="POST">

                    <label>Treść pytania:</label>
                    <textarea name="question" rows="5" required></textarea>
                    
                    <label>Odpowiedź A:</label>
                    <input type="text" name="answerA" required>
                    
                    <label>Odpowiedź B:</label>
                    <input type="text" name="answerB" required>
                    
                    <label>Odpowiedź C:</label>
                    <input type="text" name="answerC" required>
                    
                    <label>Odpowiedź D:</label>
                    <input type="text" name="answerD" required>
                    
                    <label>Odpowiedź poprawna:</label>
                    <input type="text" name="correctAnswer" required>
                    
                    <label>Kategoria:</label>
                    <select name="category" required>
                        <option value="">-- Wybierz kategorię --</option>
                        <option value="Sieci komputerowe">Sieci komputerowe</option>
                        <option value="Systemy operacyjne">Systemy operacyjne</option>
                        <option value="Sprzęt komputerowy">Sprzęt komputerowy</option>
                        <option value="Programowanie">Programowanie</option>
                    </select>

                    <button type="submit">Dodaj pytanie</button>
                    <button type="reset">Wyczyść formularz</button>

                </form>

            </div> <!-- end add questions -->

        </div> <!-- end boxes section -->

        <!-- appearance section -->
        <div class="appearance-section">

            <!-- category -->
            <p class="category_name">Sieci komputerowe</p> <!-- end category --> 

            <!-- time section -->
            <section class="time">
                <time class="countdown">60:00</time>
                <button class="btn-exit">Zakończ</button>
            </section> <!-- time section -->

            <!-- end test section -->
            <section class="test">
                <div class="box-question">
                    <?php
                        include('php/display_questions.php');
                    ?>
                </div>
            </section> <!-- end test section -->

            <!-- time section 
            <section class="time">
                <time class="countdown">60:00</time>
                <button class="btn-exit">Zakończ</button>
            </section> <!-- time section -->

        </div> <!-- end appearance section -->
        
    </main> <!-- end main -->

    <script src="scripts/quiz.js"></script>
    <!--<script src="time/time.js"></script>-->
    <script src="scripts/scrolling.js"></script>
    <script src="scripts/endTest.js"></script>

</body>
</html>