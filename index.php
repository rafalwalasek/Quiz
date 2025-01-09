<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tests</title>

    <link rel="stylesheet" href="tests.css">

    <!--
    <link rel="stylesheet" href="time/time.css">
-->
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

        <p>Każdy test składa się z 40 pytań. Aby zdać trzeba uzyskać 50% poprawnych odpowiedzi. Czas na wykonanie testu to 60 min.</p>

        <!-- box section -->
        <section class="box-section">
            
            <div class="box-quiz">
                <h2>Sieci</h2> 
                <button class="btn-start">Start</button>
            </div>

        </section> <!-- end box section -->
        
            <section class="home">
                <div class="home-content">
                <h2>Sieci komputerowe</h2>
                <div class="quiz-header">
                    <time id="countdown"></time>
                </div>

                    
                    <!-- <?php
                        //połączenie z bazą danych
                        //include('connect.php');
                    ?> -->

                    <div class="quiz-footer">
                        <span class="question-total">1 z 20 Pytań</span>

                        <div class="btns">
                            <button class="btn">Poprzednie</button>
                            <button class="btn">Następne</button>
                        </div>
                    </div>
                </div>
            </section>
        

    </main> <!-- end main -->

    <!--
    <script src="quiz.js"></script>
    <script src="time/time.js"></script>
-->

</body>
</html>