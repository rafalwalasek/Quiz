// --- przycisk: start-java i pokazanie pytan ---
document.getElementById('start-java').addEventListener("click", () => {
    document.getElementById('menu').style.display = "none";
    document.getElementById('block-questions').style.display = "block";

    fetch(`http://localhost:8080/quiz`)
    .then(response => response.json())
    .then(data => {
        const quizDiv = document.getElementById("quiz");

        data.forEach((question, index) => {
            const block = document.createElement("div");
            block.classList.add("question-block");

            const p = document.createElement("p");
            p.textContent = `${index + 1}. ${question.question_text}`;
            p.classList.add("question-title");
            block.appendChild(p);

            const letters = {a: "A", b: "B", c: "C", d: "D"};
            ["a", "b", "c", "d"].forEach(option => {
                const label = document.createElement("label");
                label.textContent = `${letters[option]}. ${question["option_" + option]}`;
                label.classList.add("questions-options");

                block.appendChild(label);
            });

            const star = document.createElement("span");
            star.textContent = "⭐ ⭐ ⭐";
            star.classList.add("star");
            block.appendChild(star);

            quizDiv.appendChild(block);
        });

    })
    .catch(error => console.error("Błąd:", error));
});
// --- powrot do menu glownego ---
document.querySelectorAll('.return-btn').forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById('block-questions').style.display = "none";
        document.getElementById('menu').style.display = "block";

        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = "";
    });
});
// --- pobranie danych z formularza ---
const BUTTON = document.getElementById('submit-button');
BUTTON.addEventListener("click", (e) => {
    e.preventDefault();
    const NAME = document.getElementById('user-name').value.trim();

    if (NAME === "") {
        alert("Proszę wpisać imię lub nick!");
        return;
    }

    fetch("http://localhost:8080/quiz/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name: NAME 
        })
    })
    .then(response => response.json())
    .then(user => {
        document.getElementById("form-div").style.display = "none";
        document.getElementById("menu").style.display = "block";

        const DB_NAME = document.getElementById("db_name");
        DB_NAME.innerHTML = user.name;
    })
    .catch(error => console.error("Błąd:", error));
});
// --- odliczanie do konca testu ---
const startJava = document.getElementById("start-java");

let timer;
startJava.addEventListener("click", () => {
    if (timer) clearInterval(timer);

    const timeDisplay = document.querySelectorAll(".time");
    const returnButton = document.querySelectorAll(".return-btn");

    let returnButtonClicked = false;
    returnButton.forEach(btn => {
        btn.addEventListener("click", () => {
            returnButtonClicked = true;
        });
    });

    let timeLeft = 300;
    timer = setInterval(function() {
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
});
