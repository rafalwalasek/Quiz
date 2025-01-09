<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tests</title>
    
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

        <p id="p_main">Każdy test składa się z 40 pytań. Aby zdać trzeba uzyskać 50% poprawnych odpowiedzi. Czas na wykonanie testu to 60 min.</p>

        <!-- box section top 
        <section class="box-section">
            
            <div class="box-quiz">
                <h2>Sieci</h2>
                <i class='bx bx-wifi'></i>
                <button class="btn-start">Start</button>
            </div>
            <div class="box-quiz">
                <h2>Systemy</h2>
                <i class='bx bx-devices'></i>
                <button class="btn-start">Start</button>
            </div>
            <div class="box-quiz">
                <h2>Bazy</h2>
                <i class='bx bx-line-chart'></i>
                <button class="btn-start">Start</button>
            </div>

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

        <!-- time section -->
        <section class="time">
            <time id="countdown">60:00</time>
        </section> <!-- time section -->

        <!-- appearance section -->
        <section class="appearance">
            
            <div class="box-question">
                <?php
                    include('display_questions.php');
                ?>
            </div>
              
        </section> <!-- end appearance section -->
        
    </main> <!-- end main -->

    <!--
    <script src="quiz.js"></script>
    <script src="time/time.js"></script>-->
    <script src="scripts/scrolling.js"></script>

</body>
</html>