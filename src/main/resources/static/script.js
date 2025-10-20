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