const startJava = document.getElementById("start-java");
const checkAnswers = document.getElementById("check-answers");
const timeDisplay = document.querySelectorAll(".time");

let timer;
let returnButtonClicked = false;

// === Przycisk: start-java ===
startJava.addEventListener("click", () => {
    document.getElementById("result").style.display = "none";
    document.getElementById("result-text").innerText = "";

    checkAnswers.disabled = false;
    checkAnswers.style.opacity = 1;
    checkAnswers.style.cursor = "pointer";

    document.getElementById('main').style.display = "none";
    document.getElementById('block-questions').style.display = "block";

    document.getElementById("quiz").innerHTML = "";

    timeDisplay.forEach(el => el.style.display = "block");

    if (timer) clearInterval(timer);
    startTimer(300); // === Odliczanie czasu quizu ===
    loadQuiz(); // === Wczytanie quizu ===
});// === END Przycisk: start-java ===

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
    function loadQuiz() {
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = "";

        fetch(`http://localhost:8080/`)
        .then(response => response.json())
        .then(data => {
            data.forEach((question, index) => {
                const block = createQuestionBlock(question, index); // === Pojedyncze pytanie ===
                quizDiv.appendChild(block);
            });
        })
        .catch(error => console.error("Błąd:", error));
    }// === END Wczytanie quizu ===
        // === Pojedyncze pytanie ===
        function createQuestionBlock(question, index) {
            const block = document.createElement("div");
            block.classList.add("question-block");
            block.setAttribute("data-id", question.id);

            const p = document.createElement("p");
            p.innerText = `${index + 1}. ${question.question_text}`;
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
            `Uzyskany wynik: ${result.percent.toFixed(1)}% (${result.correctCount}/${result.totalQuestions})`;
        
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
    }// === Reset quizu - powrot do menu ===
