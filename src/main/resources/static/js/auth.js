// === Przycisk logowanie ===
const LOGIN = document.getElementById('login');
LOGIN.addEventListener("click", () => {
    document.getElementById('login-form').style.display = "block";
});// === END Przycisk logowanie ===

// === Klikniecie poza blok logowania ===
const loginForm = document.getElementById('login-form');
const ERROR_MSG = document.getElementById("error-msg");
document.addEventListener("click", (event) => {
    if (!loginForm.contains(event.target) && event.target !== LOGIN) {
        loginForm.style.display = "none";
        ERROR_MSG.innerText = "";
    }
});// === END Klikniecie poza blok logowania ===

// === Po kliknieciu zaloguj ===
const LOGIN_BUTTON = document.getElementById('login-button');
LOGIN_BUTTON.addEventListener("click", () => {
    const NAME = document.getElementById('user-name').value;
    const EMAIL = document.getElementById('user-email').value;

    if (NAME === "" || EMAIL === "") {
        ERROR_MSG.style.color = "red";
        ERROR_MSG.style.fontWeight = "bold";
        ERROR_MSG.style.textAlign = "center";
        ERROR_MSG.innerText = "Wszystkie pola muszą być wypełnione!";
    } else {
        ERROR_MSG.innerText = "";

        fetch("http://localhost:8080/login_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: NAME,
                email: EMAIL
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.text().then(text => {
                    throw new Error(text);
                });
            }
        })
        .then(data => {
            localStorage.setItem("userEmail", EMAIL);

            ERROR_MSG.style.color = "green";
            ERROR_MSG.style.fontWeight = "bold";
            ERROR_MSG.style.textAlign = "center";
            ERROR_MSG.innerText = "Zalogowano pomyślnie!";

            document.getElementById("db_user_name").innerText = data.name;

            document.getElementById('user-name').value = "";
            document.getElementById('user-email').value = "";

            document.getElementById("login-info").style.display = "none";
            document.getElementById("welcome-info").style.display = "block";
            document.getElementById('login-form').style.display = "none";
            document.getElementById("user-menu").style.display = "block";
        })
        .catch(error => {
            ERROR_MSG.style.color = "red";
            ERROR_MSG.style.fontWeight = "bold";
            ERROR_MSG.style.textAlign = "center";
            ERROR_MSG.innerText = error.message;

            document.getElementById('user-name').value = "";
            document.getElementById('user-email').value = "";
        });
    }
});// === END Po kliknieciu zaloguj ===

// === Po kliknieciu zarejestuj ===
const REGISTER_BUTTON = document.getElementById('register-button');
REGISTER_BUTTON.addEventListener("click", () => {
    const NAME = document.getElementById('user-name').value;
    const EMAIL = document.getElementById('user-email').value;

    if (NAME === "" || EMAIL === "") {
        ERROR_MSG.style.color = "red";
        ERROR_MSG.style.fontWeight = "bold";
        ERROR_MSG.style.textAlign = "center";
        ERROR_MSG.innerText = "Wszystkie pola muszą być wypełnione!";
    } else {
        ERROR_MSG.innerText = "";
            
        fetch("http://localhost:8080/add_user_to_db", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: NAME,
                email: EMAIL
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.text().then(text => {
                    throw new Error(text);
                });
            }
        })
        .then(data => {
            console.log("Użytkownik zapisany:", data);

            ERROR_MSG.style.color = "green";
            ERROR_MSG.style.fontWeight = "bold";
            ERROR_MSG.style.textAlign = "center";
            ERROR_MSG.innerText = "Użytkownik zapisany!";

            document.getElementById('user-name').value = "";
            document.getElementById('user-email').value = "";
        })
        .catch(error => {
            ERROR_MSG.style.color = "red";
            ERROR_MSG.style.fontWeight = "bold";
            ERROR_MSG.style.textAlign = "center";
            ERROR_MSG.innerText = error.message;

            document.getElementById('user-name').value = "";
            document.getElementById('user-email').value = "";
        });
    }
});// === END Po kliknieciu zarejestuj ===

// === Czyszczenie pol inputow ===
const nameInput = document.getElementById('user-name');
nameInput.addEventListener("input", () => {
    ERROR_MSG.innerText = "";
});
const emailInput = document.getElementById('user-email');
emailInput.addEventListener("input", () => {
    ERROR_MSG.innerText = "";
});// === END Czyszczenie pol inputow ===

// === Przycisk wylogowanie ===
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
    document.getElementById("welcome-info").style.display = "none";
    document.getElementById("login-info").style.display = "block";
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("db_user_name").innerText = "";
});// === END Przycisk wylogowanie ===