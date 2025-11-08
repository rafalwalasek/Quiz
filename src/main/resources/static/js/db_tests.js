const checkAnswers = document.getElementById("check-answers");
const timeDisplay = document.querySelectorAll(".time");
const startJava = document.getElementById("start-java");
const startSql = document.getElementById("start-sql");

let timer;
let returnButtonClicked = false;

// === Przycisk: start-java ===
startJava.addEventListener("click", () => {
    startQuiz("java");
});
// === END Przycisk: start-java ===
// === Przycisk: start-sql ===
startSql.addEventListener("click", () => {
    startQuiz("sql");
});
// === END Przycisk: start-sql ===
    // === Start quiz ===
    function startQuiz(category) {
        document.getElementById("result").style.display = "none";
        document.getElementById("result-text").innerText = "";

        checkAnswers.disabled = false;
        checkAnswers.style.opacity = 1;
        checkAnswers.style.cursor = "pointer";

        document.getElementById('main').style.display = "none";
        document.getElementById('block-questions').style.display = "block";

        showCategory(category);

        document.getElementById("quiz").innerHTML = "";

        timeDisplay.forEach(el => el.style.display = "block");

        if (timer) clearInterval(timer);
        startTimer(3600); // === Odliczanie czasu quizu ===
        loadQuiz(category); // === Wczytanie quizu ===
    }// === END Start quiz ===

    // === Odliczanie czasu quizu ===
    function startTimer(duration) {
        let timeLeft = duration;

        timer = setInterval(() => {
            let min = Math.floor(timeLeft / 60);
            let sec = timeLeft % 60;

            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            timeDisplay.forEach(el => {
                el.innerText = "Czas do końca - " + min + ":" + sec;
            });

            timeLeft--;
            if (timeLeft < 0 || returnButtonClicked) {
                clearInterval(timer);
                timeDisplay.forEach(el => {
                    el.innerText = "Czas minął - 00:00";
                });
            }
        }, 1000);
    }// === END Odliczanie czasu quizu ===
    // === Wczytanie quizu ===
    function loadQuiz(category) {
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = "";

        fetch(`http://localhost:8080/${category}`)
        .then(response => response.json())
        .then(data => {
            data.forEach((question, index) => {
                const block = createQuestionBlock(question, index); // === Pojedyncze pytanie ===
                quizDiv.appendChild(block);
            });
        })
        .catch(error => console.error("Błąd:", error));
    }// === END Wczytanie quizu ===
        // === Kategorie ===
        function showCategory(category) {
            if (category === "java") document.getElementById("text_category").innerText = "Java";
            if (category === "sql") document.getElementById("text_category").innerText = "Bazy danych";
        }// === END Kategorie ===

        // === Pojedyncze pytanie ===
        function createQuestionBlock(question, index) {
            const block = document.createElement("div");
            block.classList.add("question-block");
            block.setAttribute("data-id", question.id);

            const p = document.createElement("p");
            p.innerHTML = `${index + 1}. ${question.question_text}`;
            p.classList.add("question-title");
            block.appendChild(p);

            const letters = {a: "A", b: "B", c: "C", d: "D"};
            ["a", "b", "c", "d"].forEach(option => {
                const label = document.createElement("label");
                label.classList.add("questions-options");

                const input = document.createElement("input");
                input.type = "radio";
                input.name = "question_" + index;
                input.value = question["option_" + option];
                input.dataset.letter = option.toUpperCase();

                label.appendChild(input);
                label.append(`${letters[option]}. ${question["option_" + option]}`);

                input.addEventListener("change", () => {
                    document.querySelectorAll(`input[name="${input.name}"]`).forEach(otherInput => {
                        otherInput.parentElement.classList.remove("selected");
                    });
                    label.classList.add("selected");
                });

                block.appendChild(label);
            });

            const star = document.createElement("span");
            star.textContent = "⭐ ⭐ ⭐";
            star.classList.add("star");
            block.appendChild(star);

            return block;
        }// === END Pojedyncze pytanie ===

// === Sprawdzenie odpowiedzi - wyniki ===
const email = localStorage.getItem("userEmail");
checkAnswers.addEventListener("click", () => {
    const answers = getUserAnswers();

    checkAnswers.disabled = true;
    checkAnswers.style.opacity = 0.5;
    checkAnswers.style.cursor = "not-allowed";

    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userEmail: email,
            userAnswers: answers
        })
    })
    .then(response => response.json())
    .then(result => {
        showResults(result);
    })
    .catch(error => console.error("Błąd:", error));
});// === END Sprawdzenie odpowiedzi - wyniki ===

    // === Pobranie odpowiedzi uzytkownika ===
    function getUserAnswers() {
        const answers = {};

        document.querySelectorAll(".question-block").forEach(block => {
            const selectedInput = block.querySelector('input[type="radio"]:checked');
            answers[Number(block.getAttribute("data-id"))] = selectedInput ? selectedInput.dataset.letter : null;
        });

        return answers;
    }// === Pobranie odpowiedzi uzytkownika ===
    // === Wyswietlenie wynikow ===
    function showResults(result) {
        clearInterval(timer);

        document.querySelectorAll(".time").forEach(el => {
            el.style.display = "none";
        });
        const resultBlock = document.getElementById("result");
        resultBlock.style.display = "block";
        document.getElementById("result-text").innerText = 
            `Uzyskany wynik: ${result.percent.toFixed(1)}% (${result.correctCount}/40)`;
        
        if (result.passed) {
            resultBlock.style.backgroundColor = "green";
        } else {
            resultBlock.style.backgroundColor = "red";
        }

        result.questionResults.forEach(q => {
            const questionBlock = document.querySelector(`.question-block[data-id="${q.questionId}"]`);
            if (!questionBlock) return;

            const options = questionBlock.querySelectorAll("label");
            options.forEach(label => {
                const input = label.querySelector("input");
                const letter = input.dataset.letter;

                if (letter === q.correctAnswer) {
                    label.style.backgroundColor = "lightgreen";
                } 
                if (letter === q.userAnswer && q.userAnswer !== q.correctAnswer) {
                    label.style.backgroundColor = "lightcoral";
                }

                input.disabled = true;
            });
        });
    }// === END Wyswietlenie wynikow ===

// === Reset quizu - powrot do menu ===
document.querySelectorAll('.return-btn').forEach(btn => {
    btn.addEventListener("click", resetQuiz);
});
    function resetQuiz() {
        clearInterval(timer);
        timer = null;
        returnButtonClicked = false;

        document.getElementById('block-questions').style.display = "none";
        document.getElementById('main').style.display = "block";
        document.getElementById("quiz").innerHTML = "";
        timeDisplay.forEach(el => el.style.display = "none");
        document.getElementById("result").style.display = "none";
    }// === END Reset quizu - powrot do menu ===

// === Wyniki z bazy danych ===
const wyniki = document.getElementById("wyniki");
wyniki.addEventListener("click", () => {
    const tiles = document.getElementById('tiles');
    const results = document.getElementById('results_users');

    const isResultVisible = results.style.display === "flex";

    if (isResultVisible) {
        results.style.display = "none";
        tiles.style.display = "flex";
        wyniki.textContent = "Sprawdź wyniki";
    } else {
        tiles.style.display = "none";
        results.style.display = "flex";
        wyniki.textContent = "Ukryj wyniki";
        result_db();
    }
});
// === END Wyniki z bazy danych ===

    // === Wyniki funkcja ===
    function result_db() {
        const result_from_db = document.getElementById("result_from_db");

        fetch(`http://localhost:8080/result_db?email=${email}`)
        .then(response => response.json())
        .then(data => {
            result_from_db.innerHTML = "";

            let count = 1;
            data.forEach(result => {
                const item = document.createElement("div");
                const date = new Date(result.dateTime);
                const formatted = date.toLocaleString("pl-PL", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });

                item.textContent = `${count++}. Wynik: ${result.percent}% (${result.correctCount}/${result.totalQuestions}) | ${result.passed ? "ZALICZONE" : "NIEZALICZONE"} | ${formatted}`;
                item.classList.add("result-item");
                item.style.backgroundColor = result.passed ? "green" : "red";

                result_from_db.appendChild(item);
            });
        })
        .catch(error => console.error("Błąd:", error));
    }
    // === END Wyniki funkcja ===

// === Ilosc pytan ===
fetch("http://localhost:8080/question_count")
.then(response => response.json())
.then(count => {
    document.getElementById('question_count').textContent = `${count}`;
})
.catch(error => console.error("Błąd:", error));
fetch("http://localhost:8080/count_java")
.then(response => response.json())
.then(count => {
    document.getElementById('count_java').textContent = `${count}`;
})
.catch(error => console.error("Błąd:", error));
fetch("http://localhost:8080/count_sql")
.then(response => response.json())
.then(count => {
    document.getElementById('count_sql').textContent = `${count}`;
})
.catch(error => console.error("Błąd:", error));
// === END Ilosc pytan ===