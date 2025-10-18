fetch(`http://localhost:8080/quiz`)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("quiz").innerText = JSON.stringify(data, null, 2);
})
.catch(error => console.error("Błąd:", error));